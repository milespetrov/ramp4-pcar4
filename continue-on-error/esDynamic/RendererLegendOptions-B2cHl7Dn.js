import{k as e,o,aC as p,bp as c,q as d,A as a,v as n,g as v,a_ as y,bk as b}from"./main-IAmJgjpH.js";var l;let t=l=class extends n{constructor(s){super(s),this.color=null,this.label=null,this.value=null}writeValue(s,i,u){i[u]=s??0}clone(){return new l({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};e([o({type:p,json:{type:[c],write:!0}})],t.prototype,"color",void 0),e([o({type:String,json:{write:!0}})],t.prototype,"label",void 0),e([o({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],t.prototype,"value",void 0),e([d("value")],t.prototype,"writeValue",null),t=l=e([a("esri.renderers.visualVariables.support.ColorStop")],t);const h=t,g=v()({ascendingValues:"ascending-values",descendingValues:"descending-values"});let r=class extends y(n){constructor(s){super(s),this.title=null,this.order=null}};e([o({type:String,json:{write:!0}})],r.prototype,"title",void 0),e([b(g)],r.prototype,"order",void 0),r=e([a("esri.renderers.support.RendererLegendOptions")],r);const w=r;export{w as a,h as b};
