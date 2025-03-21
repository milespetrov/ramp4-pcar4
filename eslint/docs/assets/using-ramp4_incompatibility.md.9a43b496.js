import{_ as l,o,c as i,S as c}from"./chunks/framework.7873ec08.js";const h=JSON.parse('{"title":"Config Incompatibility Guide","description":"","frontmatter":{},"headers":[],"relativePath":"using-ramp4/incompatibility.md","filePath":"using-ramp4/incompatibility.md"}'),d={name:"using-ramp4/incompatibility.md"};function a(t,e,r,n,s,u){return o(),i("div",null,e[0]||(e[0]=[c('<h1 id="config-incompatibility-guide" tabindex="-1">Config Incompatibility Guide <a class="header-anchor" href="#config-incompatibility-guide" aria-label="Permalink to &quot;Config Incompatibility Guide&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>// TODO: Update this file when we add support for anything or make changes to the schema.</p><p>// TODO: a general review of this file&#39;s contents is warranted</p></div><p>Listed below are breaking changes from the RAMP2 schema i.e. properties in the RAMP2 config that cannot be mapped to some part of the RAMP4 config.</p><h3 id="map" tabindex="-1">Map <a class="header-anchor" href="#map" aria-label="Permalink to &quot;Map&quot;">​</a></h3><ul><li><code>components</code><ul><li><code>geoSearch</code><ul><li><code>showGraphic</code></li><li><code>showInfo</code></li></ul></li><li><code>mouseInfo</code></li><li><code>scaleBar</code><ul><li><code>attachTo</code></li><li><code>scalebarUnit</code></li></ul></li></ul></li></ul><h3 id="layers" tabindex="-1">Layers <a class="header-anchor" href="#layers" aria-label="Permalink to &quot;Layers&quot;">​</a></h3><ul><li><code>state</code><ul><li><code>boundingBox</code></li><li><code>snapshot</code></li></ul></li><li><code>refreshInterval</code></li><li><code>table</code><ul><li><code>description</code></li><li><code>maximize</code></li><li><code>lazyFilter</code></li><li><code>searchStrictMatch</code></li><li><code>printEnabled</code></li><li><code>columns</code><ul><li><code>description</code></li></ul></li></ul></li><li><code>enableStructuredDelete</code></li><li><code>suppressGetCapabilities</code> (for WMS layers only)</li><li><code>legendMimeType</code> (for WMS layers only)</li><li><code>currentStyle</code> (for WMS layer entries only)</li><li><code>allStyles</code> (for WMS layer entries only)</li><li><code>details</code> (Note: a details template can be specified, but since it must be the ID of a Vue component, the value from the RAMP2 config cannot be ported over.)</li></ul><h3 id="legend" tabindex="-1">Legend <a class="header-anchor" href="#legend" aria-label="Permalink to &quot;Legend&quot;">​</a></h3><ul><li><code>entry</code><ul><li><code>entryId</code></li><li><code>controlledIds</code></li><li><code>description</code></li><li><code>symbologyStack</code></li><li><code>symbologyRenderStyle</code></li></ul></li><li><code>group</code><ul><li><code>controls</code> and <code>disabledControls</code>: all values except visibility button.</li></ul></li><li><code>infoSection</code><ul><li><code>infoType</code>: <code>unboundLayer</code> value only.</li><li><code>export</code></li></ul></li><li><code>visibilitySet</code><ul><li><code>collapse</code></li></ul></li></ul><h3 id="services" tabindex="-1">Services <a class="header-anchor" href="#services" aria-label="Permalink to &quot;Services&quot;">​</a></h3><ul><li><code>search</code><ul><li><code>serviceUrls</code><ul><li><code>geoSuggest</code></li></ul></li><li><code>disabledSearches</code></li></ul></li><li><code>export</code><ul><li><code>map</code><ul><li><code>value</code></li></ul></li><li><code>mapElements</code><ul><li><code>value</code></li></ul></li><li><code>legend</code><ul><li><code>value</code></li><li><code>showInfoSymbology</code></li><li><code>showControlledSymbology</code></li></ul></li><li><code>timestamp</code><ul><li><code>value</code></li></ul></li><li><code>timeout</code></li><li><code>cleanCanvas</code></li></ul></li><li><code>corsEverywhere</code></li><li><code>exportMapUrl</code></li><li><code>geometryUrl</code></li><li><code>googleAPIKey</code></li><li><code>esriLibUrl</code></li><li><code>geolocation</code></li><li><code>coordInfo</code></li><li><code>print</code></li></ul><h3 id="ui" tabindex="-1">UI <a class="header-anchor" href="#ui" aria-label="Permalink to &quot;UI&quot;">​</a></h3><ul><li><code>navBar</code><ul><li><code>extra</code>: marquee and history values.</li></ul></li><li><code>fullscreen</code></li><li><code>theme</code></li><li><code>logoUrl</code></li><li><code>failureFeedback</code></li><li><code>title</code></li><li><code>restrictNavigation</code></li><li><code>about</code></li></ul>',13)]))}const m=l(d,[["render",a]]);export{h as __pageData,m as default};
