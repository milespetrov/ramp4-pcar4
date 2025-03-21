import{_ as a,c as i,ag as n,o as e}from"./chunks/framework.DP35B5W8.js";const c=JSON.parse('{"title":"Details Fixture","description":"","frontmatter":{},"headers":[],"relativePath":"using-ramp4/fixtures/details.md","filePath":"using-ramp4/fixtures/details.md"}'),t={name:"using-ramp4/fixtures/details.md"};function l(p,s,h,r,o,d){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="details-fixture" tabindex="-1">Details Fixture <a class="header-anchor" href="#details-fixture" aria-label="Permalink to &quot;Details Fixture&quot;">​</a></h1><p>The details fixture adds a panel to RAMP that displays in-depth information about any specific data point on the map. It can be opened by performing an identify query either on the map or through the RAMP API.</p><h2 id="panels" tabindex="-1">Panels <a class="header-anchor" href="#panels" aria-label="Permalink to &quot;Panels&quot;">​</a></h2><p>The details fixture consists of three sections:</p><ol><li>The <strong>Layer List</strong> is the vertical column of icons along the left side of the panel. It contains a list of map layers participating in the identify and displays how many results were found for each layer. Clicking on one of these icons will display results for that layer.</li><li>The <strong>Feature Info</strong> view displays information about a single result item. This screen will look different depending on the format of the information returned by the identify query. This is also the screen that can be customized using custom templates (see below). Scroll controls can move the view to other results in the layer. The &quot;See List&quot; button will switch to <strong>List View</strong>.</li><li>The <strong>List View</strong> contains a list of all results found for the selected layer. Clicking on an item in this list will bring you to the <strong>Feature Info</strong> screen.</li></ol><h2 id="details-configuration" tabindex="-1">Details Configuration <a class="header-anchor" href="#details-configuration" aria-label="Permalink to &quot;Details Configuration&quot;">​</a></h2><h3 id="fixture-settings" tabindex="-1">Fixture Settings <a class="header-anchor" href="#fixture-settings" aria-label="Permalink to &quot;Fixture Settings&quot;">​</a></h3><p>The fixture config supports a few global settings, such as a panel width and a <a href="./../../api-guides/panels.html#teleporting-panels">panel teleport target</a>.</p><p>The default Vue template for each detail <a href="https://ramp4-pcar4.github.io/ramp4-pcar4/main/docs/api-tech-docs/enums/geo_api_geo_defs.IdentifyResultFormat.html" target="_blank" rel="noreferrer">format</a> type can be specified. New templates must be <a href="#creating-a-custom-template">registered on the instance</a>. If not provided, the out-of-box RAMP templates will be used.</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fixtures</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    details</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        panelWidth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">450</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        templates</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            esri</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;MyCustomDefaultEsriTemplate&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;MyCustomDefaultHtmlTemplate&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="layer-settings" tabindex="-1">Layer Settings <a class="header-anchor" href="#layer-settings" aria-label="Permalink to &quot;Layer Settings&quot;">​</a></h3><p>Since content can vary per layer, each layer config can provide details configurations under its own fixture configuration object.</p><ul><li><code>name</code> (string): will override the name field used on the default ESRI template. The field defined by the layer is used if not provided.</li><li><code>template</code> (string): a <a href="#creating-a-custom-template">custom template </a> to use for this layer.</li><li><code>priority</code> (integer): will influence if this layers result is first shown on a fresh identify. The value is 50 if not provided, lower numbers have higher priority.</li><li><code>fields</code> (array of objects): can contain overriding settings for individual attributes on the default ESRI template. Object properties are <ul><li><code>field</code> (string): matches the layer field name that this object is targeting.</li><li><code>alias</code> (string): specifies a different field name alias for the details display.</li><li><code>visible</code> (boolean): controls if field will show in the display. Defaults to <code>true</code>.</li></ul></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">layers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;sample&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://fake.ca/layer&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        layerType: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;esri-feature&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        fixtures: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            details: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                priority: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fancy_field&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                fields: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    { field: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;secret_field&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, visible: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    { field: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;badly_worded_field&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, alias: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;A Nice Name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="zoom-button-configuration" tabindex="-1">Zoom Button Configuration <a class="header-anchor" href="#zoom-button-configuration" aria-label="Permalink to &quot;Zoom Button Configuration&quot;">​</a></h2><p>It is possible to change the icon for the zoom button in the default ESRI details template by using the system variable <code>zoomIcon</code>. There are two built-in icons: <code>globe</code> and <code>magnify</code>. If you would like to customize the icon, the variable may be set to any emoji or SVG. Providing this value with a URL will not fetch the remote image.</p><p>Note that if the grid fixture is added, the zoom icon will be modified there as well.</p><p>Example usage which sets the zoom icon to the magnifying glass:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    configs: {</span></span>
<span class="line"><span>        en: {</span></span>
<span class="line"><span>            system: { zoomIcon: &#39;magnify&#39; }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="creating-a-custom-template" tabindex="-1">Creating a Custom Template <a class="header-anchor" href="#creating-a-custom-template" aria-label="Permalink to &quot;Creating a Custom Template&quot;">​</a></h2><p>If you don&#39;t want to use the provided templates for your layer results, you can create your own. All you need to do is create a template Vue component on the RAMP instance, and then add the layer-to-template binding to the RAMP configuration file.</p><p>The example below explains how to create a basic template for the details panel.</p><h3 id="example-creating-a-custom-template" tabindex="-1">Example: Creating a Custom Template <a class="header-anchor" href="#example-creating-a-custom-template" aria-label="Permalink to &quot;Example: Creating a Custom Template&quot;">​</a></h3><p><strong>1.</strong> The first thing you should do is create the Vue component that you want to use as the template. You can do this in various ways, but this example will make use of template literals. If you need to include Javascript that contains more than a single expression, use the <code>methods</code> option, as shown below.</p><p>To keep this example simple, the template created here will display the name of the point when it is clicked on and call a method to display the point&#39;s symbol, if it has one.</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rInstance.$element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;My_Custom_Component&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        props: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;identifyData&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        template: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &lt;div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &lt;span&gt;The feature name is: {{this.identifyData.data[&#39;name&#39;]}}&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &lt;div v-html=&quot;displaySymbol()&quot;/&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        methods: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            displaySymbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.identifyData.data[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Symbol&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                        &lt;span&gt;The feature symbol is: \${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">identifyData</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Symbol&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><strong>Note:</strong> it is important that you include the <code>identifyData</code> prop in the component since the details fixture will populate it with the results from the identify query. The <code>identifyData</code> prop is necessary in order to access the results. The property will be an <a href="https://ramp4-pcar4.github.io/ramp4-pcar4/main/docs/api-tech-docs/interfaces/geo_layer_support_identify.IdentifyItem.html" target="_blank" rel="noreferrer">IdentifyItem</a>.</p><p><strong>2.</strong> Once the custom component has been created, you will want to add your layer to RAMP and set the new component as a custom template in the details fixture. You can do both of these in the configuration file:</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> RAMP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;map&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    map: { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    layers: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;My_New_Layer&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            layerType: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;esri-feature&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://my-website.example/path/to/esri/layer&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            fixtures: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                details: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    template: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;My_Custom_Template&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>As shown in the config snippet above, template bindings should be placed under the layer&#39;s details fixture configuration. When the details panel first loads, it looks for any template bindings in here. Note that the <code>template</code> should match the name of the custom component that you registered on the host page.</p><p>After completing these two steps, the custom component should now be displayed when requesting data from <code>My_New_Layer</code>.</p>`,31)]))}const E=a(t,[["render",l]]);export{c as __pageData,E as default};
