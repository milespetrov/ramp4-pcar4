import{a as r}from"./fabric-DJ1XzrJR.js";import{F as n,m as s}from"./main-sNoC4iWN.js";class f extends n{get config(){return this.$iApi.fixture.get("export").config?.timestamp}make(o){const e=this.config,t={text:new Date().toLocaleString("en-CA"),fontFamily:"Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",fill:"#000",fontSize:20,top:0,left:0,originX:"left"};e?.value!==void 0&&(t.text=e.value);const i=s(t,o||{}),a=new r.fabric.Textbox(i.text,i);return Promise.resolve(a)}}export{f as default};
