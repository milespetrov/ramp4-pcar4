/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function e(e){return null!=r(e)||null!=u(e)}function t(e){return s.test(e)}function n(e){return r(e)??u(e)}function u(e){const t=new Date(e);return o(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function r(e){const t=s.exec(e);if(!t?.groups)return null;const n=t.groups,u=+n.year,r=+n.month-1,o=+n.day,i=+(n.hours??"0"),f=+(n.minutes??"0"),l=+(n.seconds??"0");if(i>23)return null;if(f>59)return null;if(l>59)return null;const m=n.ms??"0",a=m?+m.padEnd(3,"0").substring(0,3):0;let c;if(n.isUTC||!n.offsetSign)c=Date.UTC(u,r,o,i,f,l,a);else {const e=+n.offsetHours,t=+n.offsetMinutes;c=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(u,r,o,i,f,l,a);}return Number.isNaN(c)?null:c}const s=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;function o(e,t){if(Number.isNaN(e.getTime()))return !1;let n=!0;if(f&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,u=0;for(;!t&&u<=e.length;)t=!i.test(e[u]),u++;n=!t;}}return n}const i=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,f=!Number.isNaN(new Date("technology 10").getTime());

export { e, n, t };
