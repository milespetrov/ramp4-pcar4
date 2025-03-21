import{a$ as d,aB as g}from"./main-IAmJgjpH.js";var h;(function(n){n[n.varint=0]="varint",n[n.fixed64=1]="fixed64",n[n.delimited=2]="delimited",n[n.fixed32=5]="fixed32",n[n.unknown=99]="unknown"})(h||(h={}));const p=4294967296,u=new TextDecoder("utf-8"),c=d("safari")||d("ios")?6:d("ff")?12:32;class o{constructor(t,e,i=0,s=t?t.byteLength:0){this._tag=0,this._dataType=h.unknown,this._init(t,e,i,s)}_init(t,e,i,s){this._data=t,this._dataView=e,this._pos=i,this._end=s}asUnsafe(){return this}clone(){return new o(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(t){this._pos=t}nextTag(t){for(;;){if(this._pos===this._end)return!1;const e=this._decodeVarint();if(this._tag=e>>3,this._dataType=7&e,!t||t===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const t=this._decodeVarint();return this._tag=t>>3,this._dataType=7&t,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let t=4294967295;if(t=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128||(t=(t|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128)||(t=(t|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128)||(t=(t|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128)||(t=(t|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128))return t;throw new Error("Varint overflow")}getUInt64(){return this._decodeVarint()}getSInt32(){const t=this.getUInt32();return t>>>1^-(1&t)}getSInt64(){return this._decodeSVarint()}getBool(){const t=this._data[this._pos]!==0;return this._skip(1),t}getEnum(){return this._decodeVarint()}getFixed64(){const t=this._dataView,e=this._pos,i=t.getUint32(e,!0)+t.getUint32(e+4,!0)*p;return this._skip(8),i}getSFixed64(){const t=this._dataView,e=this._pos,i=t.getUint32(e,!0)+t.getInt32(e+4,!0)*p;return this._skip(8),i}getDouble(){const t=this._dataView.getFloat64(this._pos,!0);return this._skip(8),t}getFixed32(){const t=this._dataView.getUint32(this._pos,!0);return this._skip(4),t}getSFixed32(){const t=this._dataView.getInt32(this._pos,!0);return this._skip(4),t}getFloat(){const t=this._dataView.getFloat32(this._pos,!0);return this._skip(4),t}getString(){const t=this._getLength(),e=this._pos,i=this._toString(this._data,e,e+t);return this._skip(t),i}getBytes(){const t=this._getLength(),e=this._pos,i=this._toBytes(this._data,e,e+t);return this._skip(t),i}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(t,e,i,s){const r=this.getMessage(),a=t(r,e,i,s);return r.release(),a}processMessage(t){const e=this.getMessage(),i=t(e);return e.release(),i}getMessage(){const t=this._getLength(),e=o.pool.acquire();return e._init(this._data,this._dataView,this._pos,this._pos+t),this._skip(t),e}release(){o.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case h.varint:this._decodeVarint();break;case h.fixed64:this._skip(8);break;case h.delimited:this._skip(this._getLength());break;case h.fixed32:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(t){this._skip(t)}_skip(t){if(this._pos+t>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=t}_decodeVarint(){const t=this._data;let e=this._pos,i=0,s=0;if(this._end-e>=10)do{if(s=t[e++],i|=127&s,!(128&s)||(s=t[e++],i|=(127&s)<<7,!(128&s))||(s=t[e++],i|=(127&s)<<14,!(128&s))||(s=t[e++],i|=(127&s)<<21,!(128&s))||(s=t[e++],i+=268435456*(127&s),!(128&s))||(s=t[e++],i+=34359738368*(127&s),!(128&s))||(s=t[e++],i+=4398046511104*(127&s),!(128&s))||(s=t[e++],i+=562949953421312*(127&s),!(128&s))||(s=t[e++],i+=72057594037927940*(127&s),!(128&s))||(s=t[e++],i+=9223372036854776e3*(127&s),!(128&s)))break;throw new Error("Varint too long!")}while(!1);else{let r=1;for(;e!==this._end&&(s=t[e],128&s);)++e,i+=(127&s)*r,r*=128;if(e===this._end)throw new Error("Varint overrun!");++e,i+=s*r}return this._pos=e,i}_decodeSVarint(){const t=this._data;let e,i=0,s=0;const r=1&t[this._pos];if(s=t[this._pos++],i|=127&s,!(128&s)||(s=t[this._pos++],i|=(127&s)<<7,!(128&s))||(s=t[this._pos++],i|=(127&s)<<14,!(128&s))||(s=t[this._pos++],i|=(127&s)<<21,!(128&s))||(s=t[this._pos++],i+=268435456*(127&s),!(128&s))||(s=t[this._pos++],i+=34359738368*(127&s),!(128&s))||(s=t[this._pos++],i+=4398046511104*(127&s),!(128&s)))return r?-(i+1)/2:i/2;if(e=BigInt(i),s=t[this._pos++],e+=0x2000000000000n*BigInt(127&s),!(128&s)||(s=t[this._pos++],e+=0x100000000000000n*BigInt(127&s),!(128&s))||(s=t[this._pos++],e+=0x8000000000000000n*BigInt(127&s),!(128&s)))return Number(r?-(e+1n)/2n:e/2n);throw new Error("Varint too long!")}_getLength(){if(this._dataType!==h.delimited)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(t,e,i){if((i=Math.min(this._end,i))-e>c){const a=t.subarray(e,i);return u.decode(a)}let s="",r="";for(let a=e;a<i;++a){const _=t[a];128&_?r+="%"+_.toString(16):(s+=decodeURIComponent(r)+String.fromCharCode(_),r="")}return r.length&&(s+=decodeURIComponent(r)),s}_toBytes(t,e,i){return i=Math.min(this._end,i),new Uint8Array(t.buffer,e,i-e)}}o.pool=new g(o,void 0,n=>{n._data=null,n._dataView=null});export{o as n};
