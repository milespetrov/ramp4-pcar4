import{u as f,v,eT as h,D as U,B as k,k as F,c1 as A}from"./main-CZM6prq-.js";var D;let c=D=class extends k{constructor(e){super(e),this.variableName=null,this.dimensionName=null,this.values=[],this.isSlice=!1}clone(){return new D({variableName:this.variableName,dimensionName:this.dimensionName,values:F(this.values),isSlice:this.isSlice})}};f([v({type:String,json:{write:!0}})],c.prototype,"variableName",void 0),f([v({type:String,json:{write:!0}})],c.prototype,"dimensionName",void 0),f([v({type:h.array(h.oneOf([h.native(Number),h.array(h.native(Number))])),json:{write:!0}})],c.prototype,"values",void 0),f([v({type:Boolean,json:{write:!0}})],c.prototype,"isSlice",void 0),c=D=f([U("esri.layers.support.DimensionalDefinition")],c);const g=c;function p(e,n,a){const s=n.shift();if(a.length===0){const t=[];a.push({sliceId:-1,multidimensionalDefinition:t})}const i=a.length;for(let t=0;t<i;t++){const r=a.shift().multidimensionalDefinition;s.values?.forEach(l=>{a.push({sliceId:-1,multidimensionalDefinition:[...r,{variableName:e,dimensionName:s.name,values:[l]}]})})}n.length&&p(e,n,a)}function Y(e,n){const a=[];let s=0;return(n?e.variables.filter(i=>i.name.toLowerCase()===n.toLowerCase()):[...e.variables].sort((i,t)=>i.name>t.name?1:-1)).forEach(i=>{const t=[],r=[...i.dimensions].sort((l,m)=>l.name>m.name?-1:1);p(i.name,r,t),t.forEach(l=>{a.push({...l,sliceId:s++})})}),a}function I(e,n,a){let s=e;if(n&&(n=[...n].sort((i,t)=>i.dimensionName<t.dimensionName?-1:1)).forEach(({dimensionName:i,values:t,isSlice:r})=>{t.length&&(s=s.filter(l=>{const m=l.multidimensionalDefinition.find(o=>o.dimensionName===i);if(m==null)return!1;const u=m.values[0];return typeof u=="number"?typeof t[0]=="number"?t.includes(u):t.some(o=>o[0]<=u&&o[1]>=u):typeof t[0]=="number"?t.some(o=>u[0]<=o&&u[1]>=o):r?t.some(o=>o[0]===u[0]&&o[0]===u[1]):t.some(o=>o[0]>=u[0]&&o[0]<=u[1]||o[1]>=u[0]&&o[1]<=u[1]||o[0]<u[0]&&o[1]>u[1])}))}),s.length&&a?.start!=null&&a.end!=null){const i=a.start.getTime(),t=a.end.getTime(),r=s[0].multidimensionalDefinition.findIndex(l=>l.dimensionName==="StdTime");r>-1&&(s=s.filter(l=>{const m=l.multidimensionalDefinition[r].values[0];return i<=m&&t>=m}))}return s.map(i=>i.sliceId)}function w(e,n){return Array.isArray(e)?n[0]===n[1]?e[0]===n[0]||e[1]===n[0]:e[0]>=n[0]&&e[0]<=n[1]&&e[1]>=n[0]&&e[1]<=n[1]:e>=n[0]&&e<=n[1]}function O(e,n){return e[0]<=n[0]&&e[1]>=n[0]||e[0]<=n[1]&&e[1]>=n[1]||e[0]>=n[0]&&e[1]<=n[1]}function M(e){return e.length===1?[e[0],e[0]]:[e[0],e[e.length-1]]}function T(e,n,a){if(!n?.subsetDefinitions?.length)return e;let s;if(a){const{variables:r}=n;if(r.length&&!r.includes(a))return null;const l=n.subsetDefinitions.find(m=>m.dimensionName===e.name&&m.variableName===a);if(!l?.values?.length)return e;s=M(l.values)}else s=n.dimensions.find(({name:r})=>r===e.name)?.extent;const i=s;if(!i?.length)return e;const t=e.values.filter(r=>w(r,i));return{...e,extent:[...i],values:t}}function N(e,n,a){if(!n?.subsetDefinitions?.length)return!1;const{variables:s}=n;if(s.length&&e.some(({variableName:i})=>i&&!s.includes(i)))return!0;for(let i=0;i<e.length;i++){const t=e[i],r=n.subsetDefinitions.find(l=>(t.variableName===""||l.variableName===t.variableName)&&l.dimensionName===t.dimensionName);if(r?.values.length){const l=M(r.values);if(!t.isSlice&&t.values.length===2&&!Array.isArray(t.values[0])&&t.values[0]!==t.values[1]&&a){if(!O(t.values,l))return!0}else if(t.values.some(m=>!w(m,l)))return!0}}return!1}function E(e,n){if(e==null)return{isOutside:!1};const{geometry:a,timeExtent:s,multidimensionalDefinition:i}=n;let t=null;if(s!=null&&(t=L(e,s),t==null))return{isOutside:!0};const{areaOfInterest:r}=e;if(r&&a){const l=a.type==="point"?a:a.type==="extent"?a.center:a.type==="polygon"?a.centroid:null;if(l&&!r.contains(l))return{isOutside:!0}}return i!=null&&i.length&&N(i,e,!0)?{isOutside:!0}:{isOutside:!1,intersection:{geometry:a,timeExtent:t,multidimensionalDefinition:i}}}function L(e,n){const a=e.dimensions.find(({name:r})=>r==="StdTime");if(a==null||n.start==null&&n.end==null)return n;n=n.clone();const{start:s,end:i}=n.toJSON(),t=s===i?[s]:s!=null&&i!=null?[s,i]:[s??i];return t.length===2&&a?.extent.length&&(t[0]=Math.max(t[0],a.extent[0]),t[1]=Math.min(t[1],a.extent[1]??a.extent[0]),t[1]<t[0])||N([new g({variableName:"",dimensionName:"StdTime",isSlice:t.length===1,values:t})],e,!0)?null:(n.start=new Date(t[0]),n.end=new Date(t[1]??t[0]),n)}function C(e,n={}){const{multidimensionalInfo:a,keyProperties:s}=e;if(a==null)return null;const{variableName:i,multidimensionalSubset:t,multidimensionalDefinition:r}=n,l=r!=null?r[0]?.variableName:null,m=i||l||s?.DefaultVariable;let{variables:u}=a;return t?.variables?.length&&(u=u.filter(({name:o})=>t.variables.includes(o))),m?u.find(({name:o})=>o===m)??u[0]:u[0]}function j(e,n={}){const a=C(e,n);if(!a)return null;const s=[],{dimensions:i,name:t}=a;if(i.length===0)return[new g({variableName:t,dimensionName:"",values:[],isSlice:!0})];for(let r=0;r<i.length;r++){const l=T(i[r],n.multidimensionalSubset,t);if(!l)return null;const{values:m,extent:u}=l;let o=m?.[0]??u?.[0];l.name.toLowerCase()==="stdz"&&!l.hasRanges&&u&&Math.abs(u[1])<=Math.abs(u[0])&&(o=m?.length?m[m.length-1]:u[1]),s.push(new g({variableName:t,dimensionName:l.name,values:[o],isSlice:!n.useRangeForRangedDimensionInfo||!!l.hasRanges}))}return s}function R(e){return!!e?.length&&e.some(n=>{if(n.values==null)return!0;const a=n.values.length;return a===0||a>1||!n.isSlice&&Array.isArray(n.values[0])})}function B(e,n){if(n==null||e==null)return null;let a=n.variables.map(s=>({...s}));return e?.variables?.length&&(a=a.filter(({name:s})=>e.variables.includes(s)),a.forEach(s=>{s.dimensions=s.dimensions.map(i=>T(i,e,s.name)).filter(A)})),a}function z(e,n){const{values:a}=n;if(a?.length){const l=Array.isArray(a[0]),m=Array.isArray(e);return l!==m?-1:l&&m?a.findIndex(u=>u[0]===e[0]&&u[1]===e[1]):a.indexOf(e)}const{extent:s}=n;if(Array.isArray(e)||!s||e<s[0]||e>s[1])return-1;const i=n.interval||1;if(n.unit!=="ISO8601")return Math.round((e-s[0])/i);const t=s[0];let r=-1;switch(n.intervalUnit?.toLowerCase()||"days"){case"seconds":r=Math.round((e-t)/1e3/i);break;case"minutes":r=Math.round((e-t)/6e4/i);break;case"hours":r=Math.round((e-t)/36e5/i);break;case"days":r=Math.round((e-t)/864e5/i);break;case"months":{const l=new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear(),m=new Date(t).getUTCMonth(),u=new Date(e).getUTCMonth();r=l===0?u-m:u+11-m+12*(l-1)}break;case"years":r=Math.round((new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear())/i);break;case"decades":r=Math.round((new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear())/10/i)}return r}function S(e){let n=e.values?.length;if(n)return n;const{extent:a,unit:s}=e,i=e.interval||1,t=a?a[1]-a[0]:0;if(s!=="ISO8601")return Math.round(t/i);switch(e.intervalUnit?.toLowerCase()??"seconds"){case"seconds":n=Math.round(t/1e3/i);break;case"minutes":n=Math.round(t/6e4/i);break;case"hours":n=Math.round(t/36e5/i);break;case"days":n=Math.round(t/864e5/i);break;case"months":if(a){const r=new Date(a[1]).getUTCFullYear()-new Date(a[0]).getUTCFullYear(),l=new Date(a[0]).getUTCMonth(),m=new Date(a[1]).getUTCMonth();n=r===0?m-l+1:m+11-l+12*(r-1)+1}else n=0;break;case"years":n=a?Math.round((new Date(a[1]).getUTCFullYear()-new Date(a[0]).getUTCFullYear())/i):0;break;case"decades":n=a?Math.round((new Date(a[1]).getUTCFullYear()-new Date(a[0]).getUTCFullYear())/10/i):0;break;default:n=0}return n}function J(e,n){let a=0;const s=e[0].variableName,i=[...n.variables].sort((t,r)=>t.name>r.name?1:-1);for(let t=0;t<i.length;t++){const r=i[t],l=[...r.dimensions].sort((o,d)=>o.name>d.name?-1:1);if(r.name!==s){a+=l.map(o=>S(o)).reduce((o,d)=>o*d);continue}const m=l.map(o=>S(o)),u=l.length;for(let o=0;o<u;o++){const d=e.find(y=>y.dimensionName===l[o].name);if(d==null)return null;const b=z(d.values[0],l[o]);if(b===-1)return null;m.shift(),a+=o===u-1?b:b*m.reduce((y,x)=>y*x)}break}return a}export{Y as a,j as d,C as f,B as g,R as h,I as i,E as m,N as o,g as p,J as w};
