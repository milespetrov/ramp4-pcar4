import{I as o,b as i}from"./main-Re2Hv9G4.js";function s(t,e){return{...l(t,e),readResourcePaths:[]}}function u(t,e,n){const r=o(t.itemUrl);return{...l(t,e),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:r?{rootPath:r.path,writtenUrls:[]}:null,resources:n?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function l(t,e){return{origin:e,url:o(t.itemUrl),portal:t.portal||i.getDefault(),portalItem:t}}export{s as e,u as o};
