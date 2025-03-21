import{_ as a,c as t,ag as o,o as i}from"./chunks/framework.VBV9lhci.js";const m=JSON.parse('{"title":"API Migration Guide","description":"","frontmatter":{},"headers":[],"relativePath":"resources/migration/api-migration.md","filePath":"resources/migration/api-migration.md"}'),r={name:"resources/migration/api-migration.md"};function n(s,e,l,c,d,p){return i(),t("div",null,e[0]||(e[0]=[o('<h1 id="api-migration-guide" tabindex="-1">API Migration Guide <a class="header-anchor" href="#api-migration-guide" aria-label="Permalink to &quot;API Migration Guide&quot;">​</a></h1><p>A list things that have changed (as in, breaking change) from the RAMP2 API</p><h2 id="instance-api" tabindex="-1">Instance API <a class="header-anchor" href="#instance-api" aria-label="Permalink to &quot;Instance API&quot;">​</a></h2><p>In RAMP2, most things were accessed by retrieving the Map API object via the global <code>RAMP</code> object.</p><p><code>var myMap = RAMP.mapById(&#39;myMapId&#39;);</code></p><p>In RAMP4, there is an Instance API for each incarnation of RAMP. This is similar to the RAMP2 Map API, but it serves as the entry point for all API calls. TODO link to API docpages and/or relevant other markdown docs.</p><h2 id="geom" tabindex="-1">GEOM <a class="header-anchor" href="#geom" aria-label="Permalink to &quot;GEOM&quot;">​</a></h2><ul><li>Geometries are no longer always in Lat-Long projection &amp; co-ord values.</li><li><code>SpatialReference</code> is added and is a property of all geometry objects.</li><li><code>XY</code> class is removed, as it&#39;s main purpose was to shuttle values between Lat-Long and other projections.</li><li><code>XYBounds</code> class is now <code>Extent</code>, and shares the same base class as other geometries.</li><li>All geometry constructors have optional spatial reference parameter. Not providing it will default to Lat-Long. Note that co-ord inputs will not be projected, they will be assumed to be in Lat-Long already.</li></ul>',8)]))}const g=a(r,[["render",n]]);export{m as __pageData,g as default};
