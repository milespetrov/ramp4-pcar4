import { p as s$1, c as s } from './main-ab630232.js';
import { $, L } from './color-b476e4e5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function l(l){return $(l.minDataValue)&&$(l.maxDataValue)&&null!=l.minSize&&null!=l.maxSize?L.SIZE_MINMAX_VALUE:(l.expression&&"view.scale"===l.expression||l.valueExpression&&"$view.scale"===l.valueExpression)&&Array.isArray(l.stops)?L.SIZE_SCALE_STOPS:(null!=l.field||l.expression&&"view.scale"!==l.expression||l.valueExpression&&"$view.scale"!==l.valueExpression)&&(Array.isArray(l.stops)||"levels"in l&&l.levels)?L.SIZE_FIELD_STOPS:(null!=l.field||l.expression&&"view.scale"!==l.expression||l.valueExpression&&"$view.scale"!==l.valueExpression)&&null!=l.valueUnit?L.SIZE_UNIT_VALUE:(s$1.getLogger("esri.views.2d.engine.webgl").error(new s("mapview-bad-type","Found invalid size VisualVariable",l)),L.NONE)}

export { l };
