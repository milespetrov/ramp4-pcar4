import{s as i,U as m,N as d,R as b,J as p,b as h,dG as w,b1 as U}from"./main-CT4A7-UF.js";const c=new Map;async function N(e,n){try{return{data:(await I(e,n)).data,baseUrl:b(e),styleUrl:e}}catch(t){return p(t),null}}function R(e,n,t){const s=n.portal!=null?n.portal:h.getDefault();let r;const l=`${s.url} - ${s.user?.username} - ${e}`,o=c.get(l);if(o)return o;const u=$(e,s,t).then(a=>(r=a,a.fetchData())).then(a=>({data:a,baseUrl:r.itemUrl??"",styleName:e}));return c.set(l,u),u}function $(e,n,t){return n.load(t).then(()=>{const s=new w({disableExtraQuery:!0,query:`owner:${f} AND type:${y} AND typekeywords:"${e}"`});return n.queryItems(s,t)}).then(({results:s})=>{let r=null;const l=e.toLowerCase();if(s&&Array.isArray(s)){for(const o of s)if(o.typeKeywords?.some(a=>a.toLowerCase()===l)&&o.type===y&&o.owner===f){r=o;break}}if(!r)throw new i("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return r.load(t)})}function j(e,n,t){return e?.styleUrl!=null?N(e.styleUrl,t):e?.styleName!=null?R(e.styleName,n,t):Promise.reject(new i("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function q(e){return e===null||e.type==="CIMSymbolReference"?e:{type:"CIMSymbolReference",symbol:e}}function A(e,n,t=["gltf"]){if(n==="cimRef")return encodeURI(e.cimRef);if(e.formatInfos&&!U("enable-feature:force-wosr"))for(const s of t){const r=e.formatInfos.find(l=>l.type===s);if(r)return r.href}return encodeURI(e.webRef)}function I(e,n){const t={responseType:"json",query:{f:"json"},...n};return m(d(e),t)}const f="esri_en",y="Style",C="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";export{C as h,j as i,q as m,I as p,A as y};
