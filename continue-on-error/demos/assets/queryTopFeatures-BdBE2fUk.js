import{I as p,U as c,a1 as F,aY as f,bp as d}from"./main-CT4A7-UF.js";import{R as E}from"./normalizeUtils-BEHHi9BD.js";import{t as x}from"./query-BNDd6w6s.js";import{t as j}from"./queryZScale-CBCu9X4b.js";const a="Layer does not support extent calculation.";function O(o,r){const n=o.geometry,t=o.toJSON(),e=t;if(n!=null&&(e.geometry=JSON.stringify(n),e.geometryType=f(n),e.inSR=d(n.spatialReference)),t.topFilter?.groupByFields&&(e.topFilter.groupByFields=t.topFilter.groupByFields.join(",")),t.topFilter?.orderByFields&&(e.topFilter.orderByFields=t.topFilter.orderByFields.join(",")),t.topFilter&&(e.topFilter=JSON.stringify(e.topFilter)),t.objectIds&&(e.objectIds=t.objectIds.join(",")),t.orderByFields&&(e.orderByFields=t.orderByFields.join(",")),t.outFields&&!(r?.returnCountOnly||r?.returnExtentOnly||r?.returnIdsOnly)?t.outFields.includes("*")?e.outFields="*":e.outFields=t.outFields.join(","):delete e.outFields,t.outSR?e.outSR=d(t.outSR):n&&t.returnGeometry&&(e.outSR=e.inSR),t.returnGeometry&&delete t.returnGeometry,t.timeExtent){const u=t.timeExtent,{start:i,end:l}=u;i==null&&l==null||(e.time=i===l?i:`${i??"null"},${l??"null"}`),delete t.timeExtent}return e}async function R(o,r,n,t){const e=await s(o,r,"json",t);return j(r,n,e.data),e}async function h(o,r,n){return r.timeExtent!=null&&r.timeExtent.isEmpty?{data:{objectIds:[]}}:s(o,r,"json",n,{returnIdsOnly:!0})}async function w(o,r,n){return r.timeExtent!=null&&r.timeExtent.isEmpty?{data:{count:0,extent:null}}:s(o,r,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then(t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(a);if(e.hasOwnProperty("count"))throw new Error(a);return t})}function $(o,r,n){return r.timeExtent!=null&&r.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):s(o,r,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function s(o,r,n,t={},e={}){const u=typeof o=="string"?p(o):o,i=r.geometry?[r.geometry]:[];return t.responseType="json",E(i,null,t).then(l=>{const y=l?.[0];y!=null&&((r=r.clone()).geometry=y);const m=x({...u.query,f:n,...e,...O(r,e)});return c(F(u.path,"queryTopFeatures"),{...t,query:{...m,...t.query}})})}export{$ as c,w as d,h as m,R as p};
