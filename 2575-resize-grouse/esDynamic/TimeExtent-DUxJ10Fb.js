import{a6 as y,dK as w,at as T,dL as d,k as o,o as m,u as f,q as g,v as N,A as x}from"./main-BriipcPO.js";const h={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8};function c(t,e,n,s=d){const r=new y(w(s)),i=T.fromJSDate(t,{zone:r}),u=n==="decades"||n==="centuries"?"year":A(n);return n==="decades"&&(e*=10),n==="centuries"&&(e*=100),i.plus({[u]:e}).toJSDate()}function j(t,e,n="milliseconds"){const s=t.getTime(),r=E(e,n,"milliseconds");return new Date(s+r)}function D(t,e,n=d){const s=new y(w(n)),r=T.fromJSDate(t,{zone:s});if(e==="decades"||e==="centuries"){const u=r.startOf("year"),{year:p}=u,v=p-p%(e==="decades"?10:100);return u.set({year:v}).toJSDate()}const i=A(e);return r.startOf(i).toJSDate()}function E(t,e,n){return t===0?0:t*h[e]/h[n]}function A(t){switch(t){case"milliseconds":return"millisecond";case"seconds":return"second";case"minutes":return"minute";case"hours":return"hour";case"days":return"day";case"weeks":return"week";case"months":return"month";case"years":return"year"}}var a;let l=a=class extends N{static get allTime(){return S}static get empty(){return J}static fromArray(t){return new a({start:t[0]!=null?new Date(t[0]):t[0],end:t[1]!=null?new Date(t[1]):t[1]})}constructor(t){super(t),this.end=null,this.start=null}readEnd(t,e){return e.end!=null?new Date(e.end):null}writeEnd(t,e){e.end=t?.getTime()??null}get isAllTime(){return this.equals(a.allTime)}get isEmpty(){return this.equals(a.empty)}readStart(t,e){return e.start!=null?new Date(e.start):null}writeStart(t,e){e.start=t?.getTime()??null}clone(){return new a({end:this.end,start:this.start})}equals(t){if(!t)return!1;const e=this.start?.getTime()??this.start,n=this.end?.getTime()??this.end,s=t.start?.getTime()??t.start,r=t.end?.getTime()??t.end;return e===s&&n===r}expandTo(t,e=d){if(this.isEmpty||this.isAllTime)return this.clone();let n=this.start;n&&(n=D(n,t,e));let s=this.end;if(s){const r=D(s,t,e);s=s.getTime()===r.getTime()?r:c(r,1,t,e)}return new a({start:n,end:s})}intersection(t){if(!t)return this.clone();if(this.isEmpty||t.isEmpty)return a.empty;if(this.isAllTime)return t.clone();if(t.isAllTime)return this.clone();const e=this.start?.getTime()??-1/0,n=this.end?.getTime()??1/0,s=t.start?.getTime()??-1/0,r=t.end?.getTime()??1/0;let i,u;return s>=e&&s<=n?i=s:e>=s&&e<=r&&(i=e),n>=s&&n<=r?u=n:r>=e&&r<=n&&(u=r),i==null||u==null||isNaN(i)||isNaN(u)?a.empty:new a({start:i===-1/0?null:new Date(i),end:u===1/0?null:new Date(u)})}offset(t,e,n=d){if(this.isEmpty||this.isAllTime)return this.clone();const s=new a,{start:r,end:i}=this;return r!=null&&(s.start=c(r,t,e,n)),i!=null&&(s.end=c(i,t,e,n)),s}toArray(){return this.isEmpty?[void 0,void 0]:[this.start?.getTime()??null,this.end?.getTime()??null]}union(t){if(!t||t.isEmpty)return this.clone();if(this.isEmpty)return t.clone();if(this.isAllTime||t.isAllTime)return S.clone();const e=this.start!=null&&t.start!=null?new Date(Math.min(this.start.getTime(),t.start.getTime())):null,n=this.end!=null&&t.end!=null?new Date(Math.max(this.end.getTime(),t.end.getTime())):null;return new a({start:e,end:n})}};o([m({type:Date,json:{write:{allowNull:!0}}})],l.prototype,"end",void 0),o([f("end")],l.prototype,"readEnd",null),o([g("end")],l.prototype,"writeEnd",null),o([m({readOnly:!0,json:{read:!1}})],l.prototype,"isAllTime",null),o([m({readOnly:!0,json:{read:!1}})],l.prototype,"isEmpty",null),o([m({type:Date,json:{write:{allowNull:!0}}})],l.prototype,"start",void 0),o([f("start")],l.prototype,"readStart",null),o([g("start")],l.prototype,"writeStart",null),l=a=o([x("esri.time.TimeExtent")],l);const k=l,S=new l,J=new l({start:void 0,end:void 0});export{j as i,E as m,c as o,k as p,h as r};
