import{I as u,X as S,Q as v,S as d,T as w,Z as g}from"./main-C6lijZBn.js";const p={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",knowledgegraphserver:"KnowledgeGraphServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer","3dtilesserver":"3DTilesServer",videoserver:"VideoServer"},f=Object.values(p),h=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${f.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),y=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^/\\n]+)\\/(${f.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),C=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;function b(r){return h.test(r)}function i(r){if(r==null)return null;const e=u(r),s=e?.path.match(h)||e?.path.match(y);if(!s)return null;const[,t,n,l,a]=s,c=n.indexOf("/");return{title:o(c!==-1?n.slice(c+1):n),serverType:p[l.toLowerCase()],sublayer:a!=null&&a!==""?parseInt(a,10):null,url:{path:t}}}function m(r){const e=u(r).path.match(C);return e?{serviceUrl:e[1],sublayerId:Number(e[2])}:null}function o(r){return(r=r.replaceAll(/\s*[/_]+\s*/g," "))[0].toUpperCase()+r.slice(1)}function I(r,e){const s=[];if(r){const t=i(r);t!=null&&t.title&&s.push(t.title)}if(e){const t=o(e);s.push(t)}if(s.length===2){if(s[0].toLowerCase().includes(s[1].toLowerCase()))return s[0];if(s[1].toLowerCase().includes(s[0].toLowerCase()))return s[1]}return s.join(" - ")}function L(r){let e=S(r,!0);return!!e&&(e=e.toLowerCase(),e.endsWith(".arcgis.com")&&(e.startsWith("services")||e.startsWith("tiles")||e.startsWith("features")))}function j(r,e){return r&&v(d(r,e))}function x(r){let{url:e}=r;if(!e)return{url:e};e=d(e,r.logger);const s=u(e),t=i(s.path);let n;if(t!=null)t.sublayer!=null&&r.layer.layerId==null&&(n=t.sublayer),e=t.url.path;else if(r.nonStandardUrlAllowed){const l=m(s.path);l!=null&&(e=l.serviceUrl,n=l.sublayerId)}return{url:v(e),layerId:n}}function T(r,e,s,t,n){w(e,t,"url",n),t.url&&r.layerId!=null&&(t.url=g(t.url,s,r.layerId.toString()))}function U(r){if(!r)return!1;const e=r.toLowerCase(),s=e.includes("/services/"),t=e.includes("/mapserver/wmsserver"),n=e.includes("/imageserver/wmsserver"),l=e.includes("/wmsserver");return s&&(t||n||l)}export{T as C,x as S,U as b,i as d,L as g,m as h,o as m,b as p,I as w,j as y};
