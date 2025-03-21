import{_ as s,o as a,c as e,S as l}from"./chunks/framework.12fba297.js";const u=JSON.parse('{"title":"API Geometry Classes","description":"","frontmatter":{},"headers":[],"relativePath":"api-guides/geometry.md","filePath":"api-guides/geometry.md"}'),o={name:"api-guides/geometry.md"};function p(t,n,i,r,c,m){return a(),e("div",null,n[0]||(n[0]=[l(`<h1 id="api-geometry-classes" tabindex="-1">API Geometry Classes <a class="header-anchor" href="#api-geometry-classes" aria-label="Permalink to &quot;API Geometry Classes&quot;">​</a></h1><p>In general, the constructors are very flexible in accepting the varying and mixed geometry formats. The geometry input is parsed recursively, so in almost all cases if it makes sense logically, the constructor will parse it.</p><p>This document uses the global <code>RAMP.geo.geom</code> object as the source of geometry constructors. However they are also available on the Ramp Instance API, via the <code>.geo.geom</code> object. So <code>RAMP.geo.geom.Point()</code> and <code>rInstance.geo.geom.Point()</code> are the same. Use whichever source is most convenient.</p><h2 id="spatial-reference" tabindex="-1">Spatial Reference <a class="header-anchor" href="#spatial-reference" aria-label="Permalink to &quot;Spatial Reference&quot;">​</a></h2><p>This is fairly in-line with ESRI&#39;s format. It supports WKID and WKT, and optional latestWKID parameters.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const g = RAMP.geo.geom;</span></span>
<span class="line"><span style="color:#A6ACCD;">const lambertSR = new g.SpatialReference(3978);</span></span>
<span class="line"><span style="color:#A6ACCD;">const fancySRwithLatest = new g.SpatialReference(102100, 3857);</span></span>
<span class="line"><span style="color:#A6ACCD;">const azimuthSR = new g.SpatialReference(&#39;PROJCS[&quot;Sphere_ARC_INFO_Azimuthal_Equidistant&quot;,GEOGCS[&quot;GCS_Sphere_ARC_INFO&quot;,DATUM[&quot;D_Sphere_ARC_INFO&quot;,SPHEROID[&quot;Sphere_ARC_INFO&quot;,6370997.0,0.0]],PRIMEM[&quot;Greenwich&quot;,0.0],UNIT[&quot;Degree&quot;,0.0174532925199433]],PROJECTION[&quot;Azimuthal_Equidistant&quot;],PARAMETER[&quot;False_Easting&quot;,0.0],PARAMETER[&quot;False_Northing&quot;,0.0],PARAMETER[&quot;Central_Meridian&quot;,-90.0],PARAMETER[&quot;Latitude_Of_Origin&quot;,90.0],UNIT[&quot;Meter&quot;,1.0]]&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const iAmFalse = lambertSR.isEqual(aziumthSR);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="point" tabindex="-1">Point <a class="header-anchor" href="#point" aria-label="Permalink to &quot;Point&quot;">​</a></h2><p>Various co-ordinate inputs of the constructors.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const g = RAMP.geo.geom;</span></span>
<span class="line"><span style="color:#A6ACCD;">const pt1 = new g.Point(&#39;myid&#39;, [-76.77, 44.42]);</span></span>
<span class="line"><span style="color:#A6ACCD;">const pt2 = new g.Point(&#39;myid&#39;, {x: -76.77, y: 44.42});</span></span>
<span class="line"><span style="color:#A6ACCD;">const pt3 = new g.Point(&#39;myid&#39;, pt2);</span></span>
<span class="line"><span style="color:#A6ACCD;">const pt4 = new g.Point(&#39;myid&#39;, [-76.77, &#39;44.42&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;">const pt5 = new g.Point(&#39;myid&#39;, {x: &#39;-76.77&#39;, y: 44.42});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Various methods</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const pt = new RAMP.geo.geom.Point(&#39;myid&#39;, [-76.77, 44.42]);</span></span>
<span class="line"><span style="color:#A6ACCD;">pt.type; // &#39;Point&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">pt.id; // &#39;myid&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">pt.sr; // { wkid: 4326 }</span></span>
<span class="line"><span style="color:#A6ACCD;">pt.x; // -76.77</span></span>
<span class="line"><span style="color:#A6ACCD;">pt.y; // 44.42</span></span>
<span class="line"><span style="color:#A6ACCD;">pt.toArray(); // [-76.77, 44.42]</span></span>
<span class="line"><span style="color:#A6ACCD;">pt.x = -77.13; // point has updated.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="spatial-references-on-geometry" tabindex="-1">Spatial References on Geometry <a class="header-anchor" href="#spatial-references-on-geometry" aria-label="Permalink to &quot;Spatial References on Geometry&quot;">​</a></h3><p>The optional constructor parameter for spatial references is available on all geometry. We will use <code>Point</code> to illustrate.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const g = RAMP.geo.geom;</span></span>
<span class="line"><span style="color:#A6ACCD;">const lambertSR = new g.SpatialReference(3978);</span></span>
<span class="line"><span style="color:#A6ACCD;">const lambertPt1 = new g.Point(&#39;myid&#39;, [1461066.3, -303263.6], lambertSR);</span></span>
<span class="line"><span style="color:#A6ACCD;">const lambertPt2 = new g.Point(&#39;myid&#39;, [1461066.3, -303263.6], 3978);</span></span>
<span class="line"><span style="color:#A6ACCD;">const lambertPt3 = new g.Point(&#39;myid&#39;, lambertPt); // Note no explicit spatial reference passed in. Single RAMP geometry inputs provide their SR to the new instance</span></span>
<span class="line"><span style="color:#A6ACCD;">const badLambertPt = new g.Point(&#39;myid&#39;, [1461066.3, -303263.6]); // will have lambert values and Lat-Long spatial reference</span></span>
<span class="line"><span style="color:#A6ACCD;">const wktPt = new g.Point(&#39;myid&#39;, [123, 456], &#39;wkt string value&#39;);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="raw-input-for-geometry" tabindex="-1">Raw Input for Geometry <a class="header-anchor" href="#raw-input-for-geometry" aria-label="Permalink to &quot;Raw Input for Geometry&quot;">​</a></h3><p>If the co-ordinate input is a well formed array of numbers (including that all polygon rings are closed), we can leverage the optional <code>raw</code> flag on the constructor. This is an efficiency flag, indicating the data can be consumed as is, there is no need to validate and parse the values. This option exists for all geometry types except <code>Extent</code>. If in doubt of the array format, it will always match the output of the <code>.toArray()</code> method of the particular geometry type.</p><p>While our <code>Point</code> example may seem trivial, performance gains are to be had when dealing with geometries having high vertex counts.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const lambertPt = new RAMP.geo.geom.Point(&#39;myid&#39;, [1461066.3, -303263.6], 3978, true);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="multipoint" tabindex="-1">MultiPoint <a class="header-anchor" href="#multipoint" aria-label="Permalink to &quot;MultiPoint&quot;">​</a></h2><p>Various co-ordinate inputs of the constructors.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const g = RAMP.geo.geom;</span></span>
<span class="line"><span style="color:#A6ACCD;">const mptFromCoords = new g.MultiPoint(&#39;myid&#39;, [[-76.77, 44.42], [-68.69, 51.39]]);</span></span>
<span class="line"><span style="color:#A6ACCD;">const mptFromMultiPt = new g.MultiPoint(&#39;myid&#39;, mptFromCoords);</span></span>
<span class="line"><span style="color:#A6ACCD;">const pt = new g.Point(&#39;myid&#39;, [-76.77, 44.42]);</span></span>
<span class="line"><span style="color:#A6ACCD;">const mptMixedPoints = new g.MultiPoint(&#39;myid&#39;, [pt, [-68.69, 51.39], {x: &quot;-97.86&quot;, y: 55.74}]);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Various methods</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const mpt = new RAMP.geo.geom.MultiPoint(&#39;myid&#39;, [[-76.77, 44.42], [-68.69, 51.39]]);</span></span>
<span class="line"><span style="color:#A6ACCD;">mpt.type;                // &#39;MultiPoint&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">mpt.id;                  // &#39;myid&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">mpt.sr;                  // { wkid: 4326 }</span></span>
<span class="line"><span style="color:#A6ACCD;">mpt.length;              // 2</span></span>
<span class="line"><span style="color:#A6ACCD;">mpt.pointArray;          // [Point, Point] where each Point corresponds to the co-ords and is typed as RAMP API Point. These Points are not bound to the MultiPoint.</span></span>
<span class="line"><span style="color:#A6ACCD;">mpt.toArray();           // [[-76.77, 44.42], [-68.69, 51.39]]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const pt = mpt.getAt(0); // Point corresponding to -76.77, 44.42. This object is not bound to the MultiPoint</span></span>
<span class="line"><span style="color:#A6ACCD;">pt.x = -78.22;           // pt has updated, mpt has not</span></span>
<span class="line"><span style="color:#A6ACCD;">mpt.updateAt(pt, 0);     // multipoint innards are now [[-78.22, 44.42], [-68.69, 51.39]]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="line-string" tabindex="-1">Line String <a class="header-anchor" href="#line-string" aria-label="Permalink to &quot;Line String&quot;">​</a></h2><p>This has effectively the same interface as <code>MultiPoint</code>, so examples will be sparse. <code>LineString</code> enforces a minimum of two vertices.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const lineFromCoords = new RAMP.geo.geom.LineString(&#39;myid&#39;, [[-76.77, 44.42], [-68.69, 51.39]]);</span></span>
<span class="line"><span style="color:#A6ACCD;">const lineFromLine = new RAMP.geo.geom.LineString(&#39;myid&#39;, lineFromCoords); // also accepts MultiPoint</span></span>
<span class="line"><span style="color:#A6ACCD;">lineFromCoords.type; // &#39;LineString&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="linear-ring" tabindex="-1">Linear Ring <a class="header-anchor" href="#linear-ring" aria-label="Permalink to &quot;Linear Ring&quot;">​</a></h2><p>This also has effectively the same interface as <code>MultiPoint</code>. <code>LinearRing</code> enforces that the last vertex must be identical to the first vertex. However, being both smart and kind, the constructor will inject a closing vertex if it is missing from the source. After closure, <code>LinearRing</code> expects a minimum of four vertices. For optimal drawing, the vertices should be in a clockwise order.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const ringIncomplete = new RAMP.geo.geom.LinearRing(&#39;myid&#39;, [[-76.77, 44.42], [-97.86, 55.74], [-68.69, 51.39]]);</span></span>
<span class="line"><span style="color:#A6ACCD;">ringIncomplete.toArray(); // [[-76.77, 44.42], [-97.86, 55.74], [-68.69, 51.39], [-76.77, 44.42]]</span></span>
<span class="line"><span style="color:#A6ACCD;">ringIncomplete.type;      // &#39;LinearRing&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="multi-line-string" tabindex="-1">Multi Line String <a class="header-anchor" href="#multi-line-string" aria-label="Permalink to &quot;Multi Line String&quot;">​</a></h2><p>Various co-ordinate inputs of the constructors.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const g = RAMP.geo.geom;</span></span>
<span class="line"><span style="color:#A6ACCD;">const mlsFromCoords = new g.MultiLineString(&#39;myid&#39;, [[[-76.77, 44.42], [-80.95, 49.96], [-68.69, 51.39]], [[-97.86, 55.74], [-82.15, 49.34]]]);</span></span>
<span class="line"><span style="color:#A6ACCD;">const mlsFromMultiLine = new g.MultiLineString(&#39;myid&#39;, mlsFromCoords); // also accepts LineString, MultiPoint</span></span>
<span class="line"><span style="color:#A6ACCD;">const line = new g.LineString(&#39;myid&#39;, [[-97.86, 55.74], [-82.15, 49.34]]);</span></span>
<span class="line"><span style="color:#A6ACCD;">const point = new g.Point(&#39;myid&#39;, [-68.69, 51.39]);</span></span>
<span class="line"><span style="color:#A6ACCD;">const mlsFromMixedLines = new g.MultiLineString(&#39;myid&#39;, [[[-76.77, &quot;44.42&quot;], {x: &quot;-80.95&quot;, y: 49.96}, point], line]);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Various methods</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const mls = new RAMP.geo.geom.MultiLineString(&#39;myid&#39;, [[[-76.77, 44.42], [-80.95, 49.96], [-68.69, 51.39]], [[-97.86, 55.74], [-82.15, 49.34]]]);</span></span>
<span class="line"><span style="color:#A6ACCD;">mls.type;                // &#39;MultiLineString&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">mls.id;                  // &#39;myid&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">mls.sr;                  // { wkid: 4326 }</span></span>
<span class="line"><span style="color:#A6ACCD;">mls.length;              // 2</span></span>
<span class="line"><span style="color:#A6ACCD;">mls.lineArray;           // [LineString, LineString] where each LineString corresponds to the line co-ords and is typed as RAMP API LineString. These LineStrings are not bound to the MultiLineString.</span></span>
<span class="line"><span style="color:#A6ACCD;">mls.toArray();           // [[[-76.77, 44.42], [-80.95, 49.96], [-68.69, 51.39]], [[-97.86, 55.74], [-82.15, 49.34]]]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const ln = mls.getAt(1); // Line corresponding to [-97.86, 55.74], [-82.15, 49.34]. This object is not bound to the MultiLineString</span></span>
<span class="line"><span style="color:#A6ACCD;">const pt = new RAMP.geo.geom.Point(&#39;pt&#39;, [-99, 55]);</span></span>
<span class="line"><span style="color:#A6ACCD;">ln.updateAt(pt, 0);</span></span>
<span class="line"><span style="color:#A6ACCD;">mls.updateAt(ln, 1);     // multilinestring innards are now [[[-76.77, 44.42], [-80.95, 49.96], [-68.69, 51.39]], [[-99, 55], [-82.15, 49.34]]]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="polygon" tabindex="-1">Polygon <a class="header-anchor" href="#polygon" aria-label="Permalink to &quot;Polygon&quot;">​</a></h2><p>Various co-ordinate inputs of the constructors.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const g = RAMP.geo.geom;</span></span>
<span class="line"><span style="color:#A6ACCD;">const polyFromCoords = new g.Polygon(&#39;myid&#39;, [[[-76.77, 44.42], [-80.95, 49.96], [-68.69, 51.39], [-76.77, 44.42]], [[-97.86, 55.74], [-82.15, 49.34], [-116.95, 51.30], [-97.86, 55.74]]]);</span></span>
<span class="line"><span style="color:#A6ACCD;">const polyFromPoly = new g.Polygon(&#39;myid&#39;, polyFromCoords); // also accepts MultiLineString, LinearRing, LineString, MultiPoint</span></span>
<span class="line"><span style="color:#A6ACCD;">const line = new g.MultiPoint(&#39;myid&#39;, [[-97.86, 55.74], [-82.15, 49.34], [-76.77, 44.42]]);</span></span>
<span class="line"><span style="color:#A6ACCD;">const point = new g.Point(&#39;myid&#39;, [-68.69, 51.39]);</span></span>
<span class="line"><span style="color:#A6ACCD;">const polyFromMixedUnclosedRings = new g.Polygon(&#39;myid&#39;, [[[-116.95, 51.30], point, {x: &quot;-80.95&quot;, y: 49.96}], line]);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Various methods</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const poly = new RAMP.geo.geom.Polygon(&#39;myid&#39;, [[[-76.77, 44.42], [-80.95, 49.96], [-68.69, 51.39]], [[-97.86, 55.74], [-82.15, 49.34], [-116.95, 51.30]]]);</span></span>
<span class="line"><span style="color:#A6ACCD;">poly.type;                // &#39;Polygon&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">poly.id;                  // &#39;myid&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">poly.sr;                  // { wkid: 4326 }</span></span>
<span class="line"><span style="color:#A6ACCD;">poly.length;              // 2</span></span>
<span class="line"><span style="color:#A6ACCD;">poly.ringArray;           // [LinearRing, LinearRing] where each LinearRing corresponds to the ring co-ords (including closing vertex) and is typed as RAMP API LinearRing. These LinearRings are not bound to the Polygon.</span></span>
<span class="line"><span style="color:#A6ACCD;">poly.toArray();           // [[[-76.77, 44.42], [-80.95, 49.96], [-68.69, 51.39], [-76.77, 44.42]], [[-97.86, 55.74], [-82.15, 49.34], [-116.95, 51.30], [-97.86, 55.74]]]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const lr = new RAMP.geo.geom.LinearRing(&#39;lr&#39;, [[-97.86, 55.74], [-88, 44], [-116.95, 51.30]]);</span></span>
<span class="line"><span style="color:#A6ACCD;">poly.addLinearRings([lr]); // new ring is added</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>odds are more methods will be added to Polygon, including the <code>getAt()</code> and <code>updateAt()</code> that are present on other geometries.</p><h2 id="multipolygon" tabindex="-1">MultiPolygon <a class="header-anchor" href="#multipolygon" aria-label="Permalink to &quot;MultiPolygon&quot;">​</a></h2><p>Various co-ordinate inputs of the constructors.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const mpyFromCoords = new RAMP.geo.geom.MultiPolygon(&#39;myid&#39;, [[[[-76.77, 44.42], [-80.95, 49.96], [-68.69, 51.39], [-76.77, 44.42]]], [[[-97.86, 55.74], [-82.15, 49.34], [-116.95, 51.30], [-97.86, 55.74]]]]);</span></span>
<span class="line"><span style="color:#A6ACCD;">const mpyFromMPoly = new RAMP.geo.geom.MultiPolygon(&#39;myid&#39;, mpyFromCoords); // also accepts Polygon, MultiLineString, LinearRing, LineString, MultiPoint</span></span>
<span class="line"><span style="color:#A6ACCD;">// the examples are getting large, so omitted, but rest assured the constructor will accept an array of mixed formats that equate to Polygon-esque structures</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Various methods</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const mpy = new RAMP.geo.geom.MultiPolygon(&#39;myid&#39;, [[[[-76.77, 44.42], [-80.95, 49.96], [-68.69, 51.39]]], [[[-97.86, 55.74], [-82.15, 49.34], [-116.95, 51.30]]]]);</span></span>
<span class="line"><span style="color:#A6ACCD;">mpy.type;                // &#39;MultiPolygon&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">mpy.id;                  // &#39;myid&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">mpy.sr;                  // { wkid: 4326 }</span></span>
<span class="line"><span style="color:#A6ACCD;">mpy.length;              // 2</span></span>
<span class="line"><span style="color:#A6ACCD;">mpy.polygonArray;        // [Polygon, Polygon] where each Polygon corresponds to the polygon co-ords and is typed as RAMP API Polygon. These Polygons are not bound to the MultiPolygon.</span></span>
<span class="line"><span style="color:#A6ACCD;">mpy.toArray();           // [[[[-76.77, 44.42], [-80.95, 49.96], [-68.69, 51.39], [-76.77, 44.42]]], [[[-97.86, 55.74], [-82.15, 49.34], [-116.95, 51.30], [-97.86, 55.74]]]]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const poly = new RAMP.geo.geom.Polygon(&#39;p&#39;, [[[-97.86, 55.74], [-88, 44], [-116.95, 51.30]]]);</span></span>
<span class="line"><span style="color:#A6ACCD;">mpy.addPolygon(poly); // new polygon is added</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>odds are more methods will be added to MultiPolygon, including the <code>getAt()</code> and <code>updateAt()</code> that are present on other geometries.</p><p>more to be added...</p>`,47)]))}const b=s(o,[["render",p]]);export{u as __pageData,b as default};
