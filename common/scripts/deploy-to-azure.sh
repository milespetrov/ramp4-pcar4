#!/bin/bash

echo "mkdir command running to ghDeploy/$REF_NAME"
# Move dist files/folders into a folder named after the branch/tag name
mkdir ghDeploy
echo "mv command running from dist"
mv packages/ramp-core/dist ghDeploy
echo "mv command running from host"
mv packages/ramp-core/host ghDeploy

echo "az login: az login -u $AZ_LOGIN_NAME -p $AZ_PASSWORD --service-principal --tenant $AZ_TENANT"
az login -u $AZ_LOGIN_NAME -p $AZ_PASSWORD --service-principal --tenant $AZ_TENANT

DESTDIR="demo"

echo "GITHUB: $GITHUB_REPOSITORY"
if [ "$GITHUB_REPOSITORY" == "milespetrov/ramp4-pcar4" ]; then
    echo "IS_TAG?: $IS_TAG"
    if [ -n "$IS_TAG" ]; then
        # tags and branches from the upstream repo go into separate folders
        DESTDIR="$DESTDIR/tags/$REF_NAME"
    else
        DESTDIR="$DESTDIR/branches/$REF_NAME"
    fi
else
    # builds from fork branches go into corresponding user folders
    DESTDIR="$DESTDIR/users/$GITHUB_ACTOR/$REF_NAME"
fi

echo "DEST IS: $DESTDIR"
az storage blob delete-batch --account-name $AZ_STORAGE_ACCOUNT -s \$web --pattern "$DESTDIR\*"
az storage blob upload-batch --account-name $AZ_STORAGE_ACCOUNT -d "\$web/$DESTDIR" -s "ghDeploy"