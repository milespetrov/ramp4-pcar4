import{r}from"./themeUtils-7roQfb6P.js";import{w as i}from"./dom-N58V0tYi.js";const t=r;function n(o){return"opened"in o?o.opened:o.open}function p(o){t(()=>{o.transitionEl&&i(o.transitionEl,o.openTransitionProp,()=>{n(o)?o.onBeforeOpen():o.onBeforeClose()},()=>{n(o)?o.onOpen():o.onClose()})})}export{p as o};
