import{s as y,U as d,L as p,R as b,G as w,b as h,dG as U,a$ as N}from"./main-sNoC4iWN.js";const c=new Map;async function R(e,r){try{return{data:(await f(e,r)).data,baseUrl:b(e),styleUrl:e}}catch(t){return w(t),null}}function $(e,r,t){const s=r.portal!=null?r.portal:h.getDefault();let n;const l=`${s.url} - ${s.user?.username} - ${e}`,o=c.get(l);if(o)return o;const a=I(e,s,t).then(u=>(n=u,u.fetchData())).then(u=>({data:u,baseUrl:n.itemUrl??"",styleName:e}));return c.set(l,a),a}function I(e,r,t){return r.load(t).then(()=>{const s=new U({disableExtraQuery:!0,query:`owner:${i} AND type:${m} AND typekeywords:"${e}"`});return r.queryItems(s,t)}).then(({results:s})=>{let n=null;const l=e.toLowerCase();if(s&&Array.isArray(s)){for(const o of s)if(o.typeKeywords?.some(a=>a.toLowerCase()===l)&&o.type===m&&o.owner===i){n=o;break}}if(!n)throw new y("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return n.load(t)})}function g(e,r,t){return e?.styleUrl!=null?R(e.styleUrl,t):e?.styleName!=null?$(e.styleName,r,t):Promise.reject(new y("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function j(e){return e===null||e.type==="CIMSymbolReference"?e:{type:"CIMSymbolReference",symbol:e}}function q(e,r,t=["gltf"]){if(r==="cimRef")return encodeURI(e.cimRef);if(e.formatInfos&&!N("enable-feature:force-wosr"))for(const s of t){const n=e.formatInfos.find(l=>l.type===s);if(n)return n.href}return encodeURI(e.webRef)}function f(e,r){const t={responseType:"json",query:{f:"json"},...r};return d(p(e),t)}const i="esri_en",m="Style",A="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";export{A as h,g as i,j as m,f as p,q as y};
