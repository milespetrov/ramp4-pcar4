const e="randomUUID"in crypto;function r(){if(e)return crypto.randomUUID();const t=crypto.getRandomValues(new Uint16Array(8));t[3]=4095&t[3]|16384,t[4]=16383&t[4]|32768;const n=o=>t[o].toString(16).padStart(4,"0");return n(0)+n(1)+"-"+n(2)+"-"+n(3)+"-"+n(4)+"-"+n(5)+n(6)+n(7)}function a(){return`{${r().toUpperCase()}}`}function c(){return`{${r()}}`}function s(t){const n=t.toUpperCase();return t[0]!=="{"?`{${n}}`:n}export{s as e,r as n,c as o,a as r};
