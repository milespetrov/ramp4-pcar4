import{av as v,aw as b}from"./main-IAmJgjpH.js";const m={ar:[".",","],bg:[",","\xA0"],bs:[",","."],ca:[",","."],cs:[",","\xA0"],da:[",","."],de:[",","."],"de-ch":[".","\u2019"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[",","\xA0"],fi:[",","\xA0"],fr:[",","\u202F"],"fr-ch":[",","\u202F"],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[",","\xA0"],id:[",","."],it:[",","."],"it-ch":[".","\u2019"],ja:[".",","],ko:[".",","],lt:[",","\xA0"],lv:[",","\xA0"],mk:[",","."],nb:[",","\xA0"],nl:[",","."],pl:[",","\xA0"],pt:[",","."],"pt-pt":[",","\xA0"],ro:[",","."],ru:[",","\xA0"],sk:[",","\xA0"],sl:[",","."],sr:[",","."],sv:[",","\xA0"],th:[".",","],tr:[",","."],uk:[",","\xA0"],vi:[",","."],zh:[".",","]};function w(e=v()){let n=(e=e.toLowerCase())in m;if(!n){const s=e.split("-");s.length>1&&s[0]in m&&(e=s[0],n=!0),n||(e="en")}const[t,r,l="#,##0.###"]=m[e];return{decimal:t,group:r,pattern:l}}function z(e,n){const t=w((n={...n}).locale);n.customs=t;const r=n.pattern||t.pattern;return isNaN(e)||Math.abs(e)===1/0?null:y(e,r,n)}const S=/[#0,]*[#0](?:\.0*#*)?/;function y(e,n,t){const r=(t=t||{}).customs.group,l=t.customs.decimal,s=n.split(";"),a=s[0];if((n=s[e<0?1:0]||"-"+a).includes("%"))e*=100;else if(n.includes("\u2030"))e*=1e3;else{if(n.includes("\xA4"))throw new Error("currency notation not supported");if(n.includes("E"))throw new Error("exponential notation not supported")}const d=S,f=a.match(d);if(!f)throw new Error("unable to find a number expression in pattern: "+n);return t.fractional===!1&&(t.places=0),n.replace(d,O(e,f[0],{decimal:l,group:r,places:t.places,round:t.round}))}function O(e,n,t){(t=t||{}).places===!0&&(t.places=0),t.places===1/0&&(t.places=6);const r=n.split("."),l=typeof t.places=="string"&&t.places.indexOf(",");let s=t.places;l?s=t.places.slice(l+1):+s>=0||(s=(r[1]||[]).length),t.round<0||(e=Number(e.toFixed(Number(s))));const a=String(Math.abs(e)).split("."),d=a[1]||"";if(r[1]||t.places){l&&(t.places=t.places.slice(0,Math.max(0,l)));const o=t.places!==void 0?t.places:r[1]&&r[1].lastIndexOf("0")+1;+o>d.length&&(a[1]=d.padEnd(Number(o),"0")),+s<d.length&&(a[1]=d.slice(0,Math.max(0,Number(s))))}else a[1]&&a.pop();const f=r[0].replace(",","");let i=f.indexOf("0");i!==-1&&(i=f.length-i,i>a[0].length&&(a[0]=a[0].padStart(i,"0")),f.includes("#")||(a[0]=a[0].slice(-i)));let p,c,u=r[0].lastIndexOf(",");if(u!==-1){p=r[0].length-u-1;const o=r[0].slice(0,u);u=o.lastIndexOf(","),u!==-1&&(c=o.length-u-1)}const x=[];for(let o=a[0];o;){const h=o.length-p;x.push(h>0?o.slice(Math.max(0,h)):o),o=h>0?o.slice(0,h):"",c&&(p=c,c=void 0)}return a[0]=x.reverse().join(t.group||","),a.join(t.decimal||".")}function N(e){const n=w((e=e||{}).locale),t=e.pattern||n.pattern,r=n.group,l=n.decimal;let s=1;if(t.includes("%"))s/=100;else if(t.includes("\u2030"))s/=1e3;else if(t.includes("\xA4"))throw new Error("currency notation not supported");const a=t.split(";");return a.length===1&&a.push("-"+a[0]),{regexp:g(a,d=>(d="(?:"+b(d,".")+")").replace(S,f=>{const i={signed:!1,separator:e.strict?r:[r,""],fractional:e.fractional,decimal:l,exponent:!1},p=f.split(".");let c=e.places;p.length===1&&s!==1&&(p[1]="###"),p.length===1||c===0?i.fractional=!1:(c===void 0&&(c=e.pattern?p[1].lastIndexOf("0")+1:1/0),c&&e.fractional==null&&(i.fractional=!0),!e.places&&+c<p[1].length&&(c+=","+p[1].length),i.places=c);const u=p[0].split(",");return u.length>1&&(i.groupSize=u.pop().length,u.length>1&&(i.groupSize2=u.pop().length)),"("+k(i)+")"}),!0).replaceAll(/[\xa0 ]/g,"[\\s\\xa0]"),group:r,decimal:l,factor:s}}function M(e,n){const t=N(n),r=new RegExp("^"+t.regexp+"$").exec(e);if(!r)return NaN;let l=r[1];if(!r[1]){if(!r[2])return NaN;l=r[2],t.factor*=-1}return l=l.replaceAll(new RegExp("["+t.group+"\\s\\xa0]","g"),"").replace(t.decimal,"."),Number(l)*t.factor}function k(e){"places"in(e=e||{})||(e.places=1/0),typeof e.decimal!="string"&&(e.decimal="."),"fractional"in e&&!String(e.places).startsWith("0")||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const n=E(e),t=g(e.fractional,l=>{let s="";return l&&e.places!==0&&(s="\\"+e.decimal,e.places===1/0?s="(?:"+s+"\\d+)?":s+="\\d{"+e.places+"}"),s},!0);let r=n+t;return t&&(r="(?:(?:"+r+")|(?:"+t+"))"),r+g(e.exponent,l=>l?"([eE]"+E({signed:e.eSigned})+")":"")}function E(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",g(e.signed,n=>n?"[-+]":"",!0)+g(e.separator,n=>{if(!n)return"(?:\\d+)";(n=b(n))===" "?n="\\s":n==="\xA0"&&(n="\\s\\xa0");const t=e.groupSize,r=e.groupSize2;if(r){const l="(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+n+"]\\d{"+r+"})*["+n+"]\\d{"+t+"})";return t-r>0?"(?:"+l+"|(?:0|[1-9]\\d{0,"+(t-1)+"}))":l}return"(?:0|[1-9]\\d{0,"+(t-1)+"}(?:["+n+"]\\d{"+t+"})*)"},!0)}const g=(e,n,t)=>{if(!Array.isArray(e))return n(e);const r=[];for(let l=0;l<e.length;l++)r.push(n(e[l]));return A(r.join("|"),!!t)},A=(e,n)=>"("+(n?"?:":"")+e+")";export{N as c,z as l,M as p};
