import{a8 as g,dK as D,av as E,dL as m,q as o,u as d,z as p,v as y,A as S,C as $}from"./main-BGj2Vmyg.js";const T={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8};function c(e,t,n,s=m){const r=new g(D(s)),i=E.fromJSDate(e,{zone:r}),u=n==="decades"||n==="centuries"?"year":A(n);return n==="decades"&&(t*=10),n==="centuries"&&(t*=100),i.plus({[u]:t}).toJSDate()}function j(e,t,n="milliseconds"){const s=e.getTime(),r=N(t,n,"milliseconds");return new Date(s+r)}function w(e,t,n=m){const s=new g(D(n)),r=E.fromJSDate(e,{zone:s});if(t==="decades"||t==="centuries"){const u=r.startOf("year"),{year:h}=u,v=h-h%(t==="decades"?10:100);return u.set({year:v}).toJSDate()}const i=A(t);return r.startOf(i).toJSDate()}function N(e,t,n){return e===0?0:e*T[t]/T[n]}function A(e){switch(e){case"milliseconds":return"millisecond";case"seconds":return"second";case"minutes":return"minute";case"hours":return"hour";case"days":return"day";case"weeks":return"week";case"months":return"month";case"years":return"year"}}var a;let l=a=class extends S{static get allTime(){return f}static get empty(){return x}static fromArray(e){return new a({start:e[0]!=null?new Date(e[0]):e[0],end:e[1]!=null?new Date(e[1]):e[1]})}constructor(e){super(e),this.end=null,this.start=null}readEnd(e,t){return t.end!=null?new Date(t.end):null}writeEnd(e,t){t.end=e?.getTime()??null}get isAllTime(){return this.equals(a.allTime)}get isEmpty(){return this.equals(a.empty)}readStart(e,t){return t.start!=null?new Date(t.start):null}writeStart(e,t){t.start=e?.getTime()??null}clone(){return new a({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=this.start?.getTime()??this.start,n=this.end?.getTime()??this.end,s=e.start?.getTime()??e.start,r=e.end?.getTime()??e.end;return t===s&&n===r}expandTo(e,t=m){if(this.isEmpty||this.isAllTime)return this.clone();let n=this.start;n&&(n=w(n,e,t));let s=this.end;if(s){const r=w(s,e,t);s=s.getTime()===r.getTime()?r:c(r,1,e,t)}return new a({start:n,end:s})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return a.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=this.start?.getTime()??-1/0,n=this.end?.getTime()??1/0,s=e.start?.getTime()??-1/0,r=e.end?.getTime()??1/0;let i,u;return s>=t&&s<=n?i=s:t>=s&&t<=r&&(i=t),n>=s&&n<=r?u=n:r>=t&&r<=n&&(u=r),i==null||u==null||isNaN(i)||isNaN(u)?a.empty:new a({start:i===-1/0?null:new Date(i),end:u===1/0?null:new Date(u)})}offset(e,t,n=m){if(this.isEmpty||this.isAllTime)return this.clone();const s=new a,{start:r,end:i}=this;return r!=null&&(s.start=c(r,e,t,n)),i!=null&&(s.end=c(i,e,t,n)),s}toArray(){return this.isEmpty?[void 0,void 0]:[this.start?.getTime()??null,this.end?.getTime()??null]}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return f.clone();const t=this.start!=null&&e.start!=null?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,n=this.end!=null&&e.end!=null?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new a({start:t,end:n})}};o([d({type:Date,json:{write:{allowNull:!0}}})],l.prototype,"end",void 0),o([p("end")],l.prototype,"readEnd",null),o([y("end")],l.prototype,"writeEnd",null),o([d({readOnly:!0,json:{read:!1}})],l.prototype,"isAllTime",null),o([d({readOnly:!0,json:{read:!1}})],l.prototype,"isEmpty",null),o([d({type:Date,json:{write:{allowNull:!0}}})],l.prototype,"start",void 0),o([p("start")],l.prototype,"readStart",null),o([y("start")],l.prototype,"writeStart",null),l=a=o([$("esri.time.TimeExtent")],l);const q=l,f=new l,x=new l({start:void 0,end:void 0});export{j as i,N as m,c as o,q as p,T as r};
