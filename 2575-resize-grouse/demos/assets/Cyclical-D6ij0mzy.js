import{aR as m}from"./main-BGj2Vmyg.js";class h{constructor(n,i){this.min=n,this.max=i,this.range=i-n}normalize(n,i=0,o=!1){return a(this.range,this.min,this.max,n,i,o)}clamp(n,i=0){return m(n-i,this.min,this.max)+i}monotonic(n,i,o){return n<i?i:i+r(this.range,n-i,o)}minimalMonotonic(n,i,o){return a(this.range,n,n+this.range,i,o)}center(n,i,o){return i=this.monotonic(n,i,o),this.normalize((n+i)/2,o)}diff(n,i,o){return this.monotonic(n,i,o)-n}shortestSignedDiff(n,i){n=this.normalize(n);const o=(i=this.normalize(i))-n,s=i<n?this.minimalMonotonic(n,i)-n:i-this.minimalMonotonic(i,n);return Math.abs(o)<Math.abs(s)?o:s}contains(n,i,o){return i=this.minimalMonotonic(n,i),(o=this.minimalMonotonic(n,o))>n&&o<i}}function a(t,n,i,o,s=0,e=!1){return(o-=s)<n?o+=r(t,n-o):o>i&&(o-=r(t,o-i)),e&&o===i&&(o=n),o+s}function r(t,n,i=0){return Math.ceil((n-i)/t)*t+i}const u=new h(0,360);export{u as a,h as n};
