import{b as u,x as c,w as v}from"./utils-nEhnpmfC.js";import{d as z,f as T,p as y,C as I,k as x,$ as V,E as w,P as F,U as P}from"./utils-Akrym3wr.js";async function D(l){const{attribute:a,features:s}=l,{normalizationType:i,normalizationField:e,minValue:t,maxValue:o,fieldType:n,outStatisticTypes:r}=a,m=await u({field:a.field,valueExpression:a.valueExpression,normalizationType:i,normalizationField:e,normalizationTotal:a.normalizationTotal,viewInfoParams:a.viewInfoParams,timeZone:a.timeZone,fieldInfos:a.fieldInfos},s),f=z({normalizationType:i,normalizationField:e,minValue:t,maxValue:o}),d={value:.5,fieldType:n},p=n==="esriFieldTypeString"?T({values:m,supportsNullCount:f,percentileParams:d,outStatisticTypes:r}):y({values:m,minValue:t,maxValue:o,useSampleStdDev:!i,supportsNullCount:f,percentileParams:d,outStatisticTypes:r});return I(p,r,n==="esriFieldTypeDate")}async function E(l){const{attribute:a,features:s}=l,i=await u({field:a.field,field2:a.field2,field3:a.field3,fieldDelimiter:a.fieldDelimiter,valueExpression:a.valueExpression,viewInfoParams:a.viewInfoParams,timeZone:a.timeZone,fieldInfos:a.fieldInfos},s,!1),e=x(i);return V(e,a.domains,a.returnAllCodedValues,a.fieldDelimiter)}async function S(l){const{attribute:a,features:s}=l,{field:i,normalizationType:e,normalizationField:t,normalizationTotal:o,classificationMethod:n}=a,r=await u({field:i,valueExpression:a.valueExpression,normalizationType:e,normalizationField:t,normalizationTotal:o,viewInfoParams:a.viewInfoParams,timeZone:a.timeZone,fieldInfos:a.fieldInfos},s),m=w(r,{field:i,normalizationType:e,normalizationField:t,normalizationTotal:o,classificationMethod:n,standardDeviationInterval:a.standardDeviationInterval,numClasses:a.numClasses,minValue:a.minValue,maxValue:a.maxValue});return F(m,n)}async function Z(l){const{attribute:a,features:s}=l,{field:i,normalizationType:e,normalizationField:t,normalizationTotal:o,classificationMethod:n}=a,r=await u({field:i,valueExpression:a.valueExpression,normalizationType:e,normalizationField:t,normalizationTotal:o,viewInfoParams:a.viewInfoParams,timeZone:a.timeZone,fieldInfos:a.fieldInfos},s);return P(r,{field:i,normalizationType:e,normalizationField:t,normalizationTotal:o,classificationMethod:n,standardDeviationInterval:a.standardDeviationInterval,numBins:a.numBins,minValue:a.minValue,maxValue:a.maxValue})}async function b(l){const{attribute:a,features:s}=l,{field:i,radius:e,transform:t,spatialReference:o}=a,n=a.size??[0,0],r=c(s??[],t,o,n);return v(r,e??void 0,i,n[0],n[1])}export{S as classBreaks,b as heatmapStatistics,Z as histogram,D as summaryStatistics,E as uniqueValues};
