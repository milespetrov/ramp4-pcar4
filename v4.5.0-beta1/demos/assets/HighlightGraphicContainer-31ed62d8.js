import { e, k as a } from './main-9d6c9b53.js';
import { T } from './color-57c0ae12.js';
import { n as n$1 } from './BaseGraphicContainer-be93ed7b.js';
import { _ } from './enums-1f7f0b0a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let i=class extends n$1{doRender(e){e.drawPhase===T.HIGHLIGHT&&super.doRender(e);}renderChildren(e){if(this.attributeView.update(),!this.children.some((e=>e.hasData)))return;this.attributeView.bindTextures(e.context),super.renderChildren(e);const{painter:r}=e,s=r.effects.highlight;s.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(_.COLOR_BUFFER_BIT),this._renderChildren(e,s.defines.concat(["highlightAll"])),s.draw(e),s.unbind();}};i=e([a("esri.views.2d.layers.support.HighlightGraphicContainer")],i);const n=i;

export { n };
