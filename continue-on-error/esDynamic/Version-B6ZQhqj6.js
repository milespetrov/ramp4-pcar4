import{s as r}from"./main-IAmJgjpH.js";let m=class i{constructor(t,s,e=""){this.major=t,this.minor=s,this._context=e}lessThan(t,s){return this.major<t||t===this.major&&this.minor<s}greaterEqual(t,s){return!this.lessThan(t,s)}validate(t){if(this.major!==t.major){const s=this._context&&this._context+":",e=this._context&&this._context+" ";throw new r(s+"unsupported-version",`Required major ${e}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:t})}}clone(){return new i(this.major,this.minor,this._context)}static parse(t,s=""){const[e,o]=t.split("."),n=/^\s*\d+\s*$/;if(!e?.match||!n.test(e))throw new r((s&&s+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:t});if(!o?.match||!n.test(o))throw new r((s&&s+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:t});const a=parseInt(e,10),h=parseInt(o,10);return new i(a,h,s)}};export{m as r};
