import{dk as I,dl as j,dm as P,dn as h,dp as b,bn as x,dq as N,dr as S,ds as v,dt as A,s as O,a1 as R,du as F,bC as C,dv as J}from"./main-BGj2Vmyg.js";import{x as K}from"./MD5-C9MwAd2G.js";import{i as k}from"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import{n as q}from"./uuid-Cl5lrJ4c.js";import{p as y}from"./resourceExtension-DoFRYJLn.js";function Q(e){const r=e?.origins??[void 0];return(o,n)=>{const t=z(e,o,n);for(const a of r){const i=I(o,a,n);for(const s in t)i[s]=t[s]}}}function z(e,r,o){if(e?.type==="resource")return H(e,r,o);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:t}=J;return{read:n,write:t}}}}function H(e,r,o){const n=j(r,o);return{type:String,read:(t,a,i)=>{const s=P(t,a,i);return n.type===String?s:typeof n.type=="function"?new n.type({url:s}):void 0},write:{writer(t,a,i,s){if(!s?.resources)return typeof t=="string"?void(a[i]=h(t,s)):void(a[i]=t.write({},s));const c=Z(t),p=h(c,{...s,verifyItemRelativeUrls:s?.verifyItemRelativeUrls?{writtenUrls:s.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},b.NO),d=n.type!==String&&(!k(this)||s?.origin&&this.originIdOf(o)>x(s.origin)),u={object:this,propertyName:o,value:t,targetUrl:p,dest:a,targetPropertyName:i,context:s,params:e};s?.portalItem&&p&&!N(p)?d&&e?.contentAddressed?g(u):d?V(u):Y(u):s?.portalItem&&(p==null||S(p)!=null||v(p)||d)?g(u):a[i]=p}}}}function g(e){const{targetUrl:r,params:o,value:n,context:t,dest:a,targetPropertyName:i}=e;if(!t.portalItem)return;const s=A(r),c=w(n,r,t);if(o?.contentAddressed&&c.type!=="json")return void t.messages?.push(new O("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${c.type} with content addressing. Content addressing is only supported for json resources.`,{content:c}));const p=o?.contentAddressed&&c.type==="json"?K(c.jsonString):s?.filename??q(),d=R(o?.prefix??s?.prefix,p),u=`${d}.${y(c)}`;if(o?.contentAddressed&&t.resources&&c.type==="json"){const m=t.resources.toKeep.find(({resource:f})=>f.path===u)??t.resources.toAdd.find(({resource:f})=>f.path===u);if(m)return void(a[i]=m.resource.itemRelativeUrl)}const l=t.portalItem.resourceFromPath(u);v(r)&&t.resources&&t.resources.pendingOperations.push(F(r).then(m=>{l.path=`${d}.${y({type:"blob",blob:m})}`,a[i]=l.itemRelativeUrl}).catch(()=>{}));const $=o?.compress??!1;t.resources&&U({...e,resource:l,content:c,compress:$,updates:t.resources.toAdd}),a[i]=l.itemRelativeUrl}function V(e){const{context:r,targetUrl:o,params:n,value:t,dest:a,targetPropertyName:i}=e;if(!r.portalItem)return;const s=r.portalItem.resourceFromPath(o),c=w(t,o,r),p=y(c),d=C(s.path),u=n?.compress??!1;p===d?(r.resources&&U({...e,resource:s,content:c,compress:u,updates:r.resources.toUpdate}),a[i]=o):g(e)}function Y({context:e,targetUrl:r,dest:o,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(r),compress:!1}),o[n]=r)}function U({object:e,propertyName:r,updates:o,resource:n,content:t,compress:a}){const i=s=>{B(e,r,s)};o.push({resource:n,content:t,compress:a,finish:i})}function w(e,r,o){return typeof e=="string"?{type:"url",url:r}:{type:"json",jsonString:JSON.stringify(e.toJSON(o))}}function Z(e){return e==null?null:typeof e=="string"?e:e.url}function B(e,r,o){typeof e[r]=="string"?e[r]=o.url:e[r].url=o.url}export{Q as j};
