import{a as n}from"./fabric-D_X0v0wG.js";import{F as s,m as a}from"./main-QmNQNEqS.js";import"./preload-helper-ExcqyqRp.js";class g extends s{get config(){return this.$iApi.fixture.get("export").config?.timestamp}make(t){const e=this.config,i={text:new Date().toLocaleString("en-CA"),fontFamily:"Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",fill:"#000",fontSize:20,top:0,left:0,originX:"left"};e?.value!==void 0&&(i.text=e.value);const o=a(i,t||{}),r=new n.fabric.Textbox(o.text,o);return Promise.resolve(r)}}export{g as default};
