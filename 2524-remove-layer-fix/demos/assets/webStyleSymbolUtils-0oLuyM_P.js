import{s as S,b as w,I as p,p as f,R as N,a as D,x as R,c as g,i as h}from"./main-CFpM9i38.js";import{c as x,a as d}from"./devEnvironmentUtils-8WtPGj6h.js";import{i as F,p as U,m as P,h as I,y as v}from"./styleUtils-CrTp4sQg.js";import"./preload-helper-ExcqyqRp.js";function z(t,e,l,n){const r=t.name;return r==null?Promise.reject(new S("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):t.styleName==="Esri2DPointSymbolsStyle"?M(r,e,n):F(t,e,n).then(o=>E(o,r,e,l,v,n))}function A(t,e){return e.items.find(l=>l.name===t)}function E(t,e,l,n,r,o){const s=l?.portal!=null?l.portal:w.getDefault(),c={portal:s,url:p(t.baseUrl),origin:"portal-item"},m=A(e,t.data);if(!m){const y=`The symbol name '${e}' could not be found`;return Promise.reject(new S("symbolstyleutils:symbol-name-not-found",y,{symbolName:e}))}let i=f(r(m,n),c),u=m.thumbnail?.href??null;const b=m.thumbnail?.imageData;x()&&(i=d(i)??"",u=d(u));const $={portal:s,url:p(N(i)),origin:"portal-item"};return U(i,o).then(y=>{const j=n==="cimRef"?P(y.data):y.data,a=D(j,$);if(a&&R(a)){if(u){const O=f(u,c);a.thumbnail=new g({url:O})}else b&&(a.thumbnail=new g({url:`data:image/png;base64,${b}`}));t.styleUrl?a.styleOrigin=new h({portal:l.portal,styleUrl:t.styleUrl,name:e}):t.styleName&&(a.styleOrigin=new h({portal:l.portal,styleName:t.styleName,name:e}))}return a})}function M(t,e,l){const n=I.replaceAll(/\{SymbolName\}/gi,t),r=e.portal!=null?e.portal:w.getDefault();return U(n,l).then(o=>{const s=P(o.data);return D(s,{portal:r,url:p(N(n)),origin:"portal-item"})})}export{E as fetchSymbolFromStyle,A as getStyleItemFromStyle,z as resolveWebStyleSymbol};
