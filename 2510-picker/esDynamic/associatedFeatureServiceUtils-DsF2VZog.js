import{s as c,b as j,G as u,U as f,K as D}from"./main-BqyZdgF9.js";import{d as p}from"./arcgisLayerUrl-C2cexsxn.js";import v from"./PortalItem-BVXQrlxx.js";async function b(r,n){const t=p(r);if(!t)throw new c("invalid-url","Invalid scene service url");const e={...n,sceneServerUrl:t.url.path,layerId:t.sublayer??void 0};if(e.sceneLayerItem??=await A(e),e.sceneLayerItem==null)return h(e.sceneServerUrl.replace("/SceneServer","/FeatureServer"),e);const a=await L(e);if(!a?.url)throw new c("related-service-not-found","Could not find feature service through portal item relationship");e.featureServiceItem=a;const o=await h(a.url,e);return o.portalItem=a,o}async function A(r){const n=(await w(r)).serviceItemId;if(!n)return null;const t=new v({id:n,apiKey:r.apiKey}),e=await K(r);e!=null&&(t.portal=new j({url:e}));try{return await t.load({signal:r.signal})}catch(a){return u(a),null}}async function w(r){if(r.rootDocument)return r.rootDocument;const n={query:{f:"json",...r.customParameters,token:r.apiKey},responseType:"json",signal:r.signal};try{const t=await f(r.sceneServerUrl,n);r.rootDocument=t.data}catch{r.rootDocument={}}return r.rootDocument}async function K(r){const n=D?.findServerInfo(r.sceneServerUrl);if(n?.owningSystemUrl)return n.owningSystemUrl;const t=r.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const e=(await f(t,{query:{f:"json"},responseType:"json",signal:r.signal})).data.owningSystemUrl;if(e)return e}catch(e){u(e)}return null}async function h(r,n){const t=p(r);if(!t)throw new c("invalid-feature-service-url","Invalid feature service url");const e=t.url.path,a=n.layerId;if(a==null)return{serverUrl:e};const o=w(n),y=n.featureServiceItem?await n.featureServiceItem.fetchData("json"):null,g=(y?.layers?.[0]||y?.tables?.[0])?.customParameters,d=s=>{const U={query:{f:"json",...g},responseType:"json",authMode:s,signal:n.signal};return f(e,U)},S=d("anonymous").catch(()=>d("no-prompt")),[m,I]=await Promise.all([S,o]),l=I?.layers,i=m.data&&m.data.layers;if(!Array.isArray(i))throw new Error("expected layers array");if(Array.isArray(l)){for(let s=0;s<Math.min(l.length,i.length);s++)if(l[s].id===a)return{serverUrl:e,layerId:i[s].id}}else if(a!=null&&a<i.length)return{serverUrl:e,layerId:i[a].id};throw new Error("could not find matching associated sublayer")}async function L({sceneLayerItem:r,signal:n}){if(!r)return null;try{const t=(await r.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:n})).find(a=>a.type==="Feature Service")||null;if(!t)return null;const e=new v({portal:t.portal,id:t.id});return await e.load(),e}catch(t){return u(t),null}}export{b as s};
