import{bH as C,bI as G,bx as z,ar as D,bJ as O,D as V,bg as A}from"./main-CdsSyLmf.js";import{r as E}from"./TimeExtent-CabtJ4-h.js";import{j as L}from"./quantizationUtils-CaK8jumX.js";import{l as P,u as R}from"./heatmapUtils-BL0jS6No.js";import{$ as U}from"./utils-1QoG0_AR.js";import{m as T,B as Y}from"./utils-sWoS7WBe.js";let c=null;const _=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function B(t,e,a){return t.x<0?t.x+=e:t.x>a&&(t.x-=e),t}function Q(t,e,a,o){const r=C(a)?G(a):null,m=r?Math.round((r.valid[1]-r.valid[0])/e.scale[0]):null;return t.map(i=>{const s=new z(i.geometry);return L(e,s,s),i.geometry=r?B(s,m??0,o[0]):s,i})}function W(t,e=18,a,o,r){const m=new Float64Array(o*r);e=Math.round(A(e));let i=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;const g=R(a);for(const{geometry:p,attributes:N}of t){const{x:h,y:u}=p,x=Math.max(0,h-e),M=Math.max(0,u-e),F=Math.min(r,u+e),I=Math.min(o,h+e),$=+g(N);for(let f=M;f<F;f++)for(let d=x;d<I;d++){const w=f*o+d,y=P(d-h,f-u,e)*$,l=m[w]+=y;i=Math.min(i,l),s=Math.max(s,l)}}return{min:i,max:s}}function H(t){const e=_.exec(t);if(!e)return null;const{hh:a,mm:o,ss:r,ms:m}=e.groups;return Number(a)*E.hours+Number(o)*E.minutes+Number(r)*E.seconds+Number(m||0)}async function X(t,e,a=!0){if(!e)return[];const{field:o,field2:r,field3:m,fieldDelimiter:i,fieldInfos:s,timeZone:g}=t,p=o&&s?.find(l=>l.name.toLowerCase()===o.toLowerCase()),N=!!p&&D(p),h=!!p&&U(p),u=t.valueExpression,x=t.normalizationType,M=t.normalizationField,F=t.normalizationTotal,I=[],$=t.viewInfoParams;let f=null,d=null;if(u){if(!c){const{arcadeUtils:l}=await O();c=l}c.hasGeometryOperations(u)&&await c.enableGeometryOperations(),f=c.createFunction(u),d=$?c.getViewInfo({viewingMode:$.viewingMode,scale:$.scale,spatialReference:new V($.spatialReference)}):null}const w=t.fieldInfos,y=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&w?{fields:w}:null;return e.forEach(l=>{const b=l.attributes;let n;if(u){const v=y?{...l,layer:y}:l,j=c.createExecContext(v,d,g);n=c.executeFunction(f,j)}else b&&(n=b[o],r?(n=`${T(n)}${i}${T(b[r])}`,m&&(n=`${n}${i}${T(b[m])}`)):typeof n=="string"&&a&&(h?n=n?new Date(n).getTime():null:N&&(n=n?H(n):null)));if(x&&typeof n=="number"&&isFinite(n)){const v=b&&parseFloat(b[M]);n=Y(n,x,v,F)}I.push(n)}),I}export{H as I,X as b,W as w,Q as x};
