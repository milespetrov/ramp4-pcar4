import{ci as f}from"./main-sNoC4iWN.js";function i(o,e){let t;if(typeof o=="string")t=f(o+`-seed(${e})`);else{let n=12;t=o^e;do t=107*(t>>8^t)+n|0;while(--n!=0)}return(1+t/(1<<31))/2}function r(o){return Math.floor(i(o,s)*l)}const s=53290320,l=10;export{i as e,r as o};
