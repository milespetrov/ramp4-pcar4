import{s as f,b as g,I as c,p as h,R as d,a as S,x as R,c as w,i as N}from"./main-BPeHLg3l.js";import{c as $,a as D}from"./devEnvironmentUtils-CxrVv3RG.js";import{i as v,p as U,m as P,h as A,y as E}from"./styleUtils--RhjxEBG.js";function M(e,t,a,l){const s=e.name;return s==null?Promise.reject(new f("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):e.styleName==="Esri2DPointSymbolsStyle"?q(s,t,l):v(e,t,l).then(n=>x(n,s,t,a,E,l))}function j(e,t){return t.items.find(a=>a.name===e)}function x(e,t,a,l,s,n){const o=a?.portal!=null?a.portal:g.getDefault(),p={portal:o,url:c(e.baseUrl),origin:"portal-item"},m=j(t,e.data);if(!m){const y=`The symbol name '${t}' could not be found`;return Promise.reject(new f("symbolstyleutils:symbol-name-not-found",y,{symbolName:t}))}let i=h(s(m,l),p),u=m.thumbnail?.href??null;const b=m.thumbnail?.imageData;$()&&(i=D(i)??"",u=D(u));const F={portal:o,url:c(d(i)),origin:"portal-item"};return U(i,n).then(y=>{const I=l==="cimRef"?P(y.data):y.data,r=S(I,F);if(r&&R(r)){if(u){const O=h(u,p);r.thumbnail=new w({url:O})}else b&&(r.thumbnail=new w({url:`data:image/png;base64,${b}`}));e.styleUrl?r.styleOrigin=new N({portal:a.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(r.styleOrigin=new N({portal:a.portal,styleName:e.styleName,name:t}))}return r})}function q(e,t,a){const l=A.replaceAll(/\{SymbolName\}/gi,e),s=t.portal!=null?t.portal:g.getDefault();return U(l,a).then(n=>{const o=P(n.data);return S(o,{portal:s,url:c(d(l)),origin:"portal-item"})})}export{x as fetchSymbolFromStyle,j as getStyleItemFromStyle,M as resolveWebStyleSymbol};
