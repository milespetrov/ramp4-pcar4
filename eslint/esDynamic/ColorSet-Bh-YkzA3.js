import{H as c,a8 as u}from"./Theme-BpVb0HiE.js";class i extends c{_afterNew(){super._afterNewApplyThemes(),this._dirty.colors=!1}_beforeChanged(){this.isDirty("colors")&&this.reset()}generateColors(){this.setPrivate("currentPass",this.getPrivate("currentPass",0)+1);const t=this.getPrivate("currentPass"),e=this.get("colors",[this.get("baseColor",u.fromHex(16711680))]);this.getPrivate("numColors")||this.setPrivate("numColors",e.length);const r=this.getPrivate("numColors"),g=0,o=this.get("passOptions"),P=this.get("reuse");for(let a=g;a<r;a++)if(P)e.push(e[a]);else{const n=e[a].toHSL();let l=n.h+(o.hue||0)*t;for(;l>1;)l-=1;let s=n.s+(o.saturation||0)*t;s>1&&(s=1),s<0&&(s=0);let h=n.l+(o.lightness||0)*t;for(;h>1;)h-=1;e.push(u.fromHSL(l,s,h))}}getIndex(t){const e=this.get("colors",[]),r=this.get("saturation");return t>=e.length?(this.generateColors(),this.getIndex(t)):r!=null?u.saturate(e[t],r):e[t]}next(){let t=this.getPrivate("currentStep",this.get("startIndex",0));return this.setPrivate("currentStep",t+this.get("step",1)),this.getIndex(t)}reset(){this.setPrivate("currentStep",this.get("startIndex",0)),this.setPrivate("currentPass",0)}}Object.defineProperty(i,"className",{enumerable:!0,configurable:!0,writable:!0,value:"ColorSet"}),Object.defineProperty(i,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:c.classNames.concat([i.className])});export{i as s};
