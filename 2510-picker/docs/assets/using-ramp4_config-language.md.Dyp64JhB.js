import{_ as a,c as n,ag as e,o as i}from"./chunks/framework.VBV9lhci.js";const g=JSON.parse('{"title":"Configuration Language Switching","description":"","frontmatter":{},"headers":[],"relativePath":"using-ramp4/config-language.md","filePath":"using-ramp4/config-language.md"}'),t={name:"using-ramp4/config-language.md"};function l(p,s,r,o,h,c){return i(),n("div",null,s[0]||(s[0]=[e(`<h1 id="configuration-language-switching" tabindex="-1">Configuration Language Switching <a class="header-anchor" href="#configuration-language-switching" aria-label="Permalink to &quot;Configuration Language Switching&quot;">​</a></h1><p>The main configuration file in RAMP to use is determined by the current language of the app. Each language is restricted to being linked to a single config and is in the format of key-value pairings where the key is the language code with its associated formatted config object as the value.</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>registeredConfigs = {</span></span>
<span class="line"><span>    en: enConfig,</span></span>
<span class="line"><span>    fr: frConfig,</span></span>
<span class="line"><span>    es: esConfig</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="registering-configs" tabindex="-1">Registering Configs <a class="header-anchor" href="#registering-configs" aria-label="Permalink to &quot;Registering Configs&quot;">​</a></h2><p>In order to register a config on app startup, the user can pass in one or more configs as part of a constructor parameter when making the call to initialize the RAMP Instance.</p><p>In the RAMP instance constructor, the first config (required) will be registered for all supported app languages (contained in <code>i18n.messages</code>). Any subsequent config file will be registered directly to its specified language.</p><p><strong>TODO</strong>: link a doc on <code>i18n</code> setup <em>here</em> when complete</p><p>A more detailed description of the process will be covered with the examples below.</p><h3 id="example-1-passing-a-single-config-in-ramp-instance-constructor" tabindex="-1">Example 1: Passing a single config in RAMP Instance constructor <a class="header-anchor" href="#example-1-passing-a-single-config-in-ramp-instance-constructor" aria-label="Permalink to &quot;Example 1: Passing a single config in RAMP Instance constructor&quot;">​</a></h3><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RAMP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), { en: enConfig })</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>If the user chooses to pass a single config like above, RAMP will take that config and populate it for all available app languages in <code>i18n.messages</code>.</p><p>For example, if <code>i18n.messages</code> contains <strong>en</strong>, <strong>fr</strong> and <strong>es</strong>, then the registered configs by the end of the instance constructor will look like this:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>registeredConfigs = {</span></span>
<span class="line"><span>    &#39;en&#39;: enConfig,</span></span>
<span class="line"><span>    &#39;fr&#39;: enConfig,</span></span>
<span class="line"><span>    &#39;es&#39;: enConfig</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="example-2-passing-multiple-configs-in-ramp-instance-constructor" tabindex="-1">Example 2: Passing multiple configs in RAMP Instance constructor <a class="header-anchor" href="#example-2-passing-multiple-configs-in-ramp-instance-constructor" aria-label="Permalink to &quot;Example 2: Passing multiple configs in RAMP Instance constructor&quot;">​</a></h3><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RAMP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    en: enConfig,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fr: frConfig</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>If the user chooses to pass in more than one config file, each user specified language will be linked to its unique config, while any remaining languages in <code>i18n.messages</code> will default to the first config passed in the parameter. The registered configs will look like this at the end of the instance constructor:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>registeredConfigs = {</span></span>
<span class="line"><span>    &#39;en&#39;: enConfig,</span></span>
<span class="line"><span>    &#39;fr&#39;: frConfig,</span></span>
<span class="line"><span>    &#39;es&#39;: enConfig</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="switching-languages" tabindex="-1">Switching Languages <a class="header-anchor" href="#switching-languages" aria-label="Permalink to &quot;Switching Languages&quot;">​</a></h3><p>Switching to a different language in-app will cause RAMP to conduct an analysis on <code>registeredConfigs</code> to identify the config pertaining to the new app language.</p><p>Say we change the app language from <strong>en</strong> to <strong>fr</strong>. In the first example, the new active config remains the same (<code>enConfig</code>) and in the second example, the new active config changes from <code>enConfig</code> to <code>frConfig</code>.</p><p><strong>Note</strong>: If the app switches to a language that is not associated with a config (i.e., language unsupported by RAMP), an error will be thrown with a message informing the user.</p><h3 id="number-localization" tabindex="-1">Number Localization <a class="header-anchor" href="#number-localization" aria-label="Permalink to &quot;Number Localization&quot;">​</a></h3><p><strong>TODO</strong>: Revisit this once we decide what to do with <code>numberFormats</code></p><p>The default config for number localization can be found in the <code>numberFormats</code> object in <code>src/lang/index.ts</code>. The localization options use the built-in Internalization API and the documentation for it can be found <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat" target="_blank" rel="noreferrer">here</a>.</p><p>Example usage of number formatting:</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000.119</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rInstance.$i18n.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;number&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1000.119 (for en)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1000,119(for fr)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Localization options can also be passed in when the formatting function is called:</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000.119</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rInstance.$i18n.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;number&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    maximumFractionDigits: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    useGrouping: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1,000.1 (for en)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1 000,1 (for fr)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="localization" tabindex="-1">Localization <a class="header-anchor" href="#localization" aria-label="Permalink to &quot;Localization&quot;">​</a></h2><h3 id="core" tabindex="-1">Core <a class="header-anchor" href="#core" aria-label="Permalink to &quot;Core&quot;">​</a></h3><p><a href="https://kazupon.github.io/vue-i18n/" target="_blank" rel="noreferrer">Vue-i18n</a> is used to localize the application and the core messages are injected into the RAMP instance when it&#39;s first created. All messages are stored in a CSV file of the following format:</p><table tabindex="0"><thead><tr><th>key</th><th>enValue</th><th>enValid</th><th>frValue</th><th>frValid</th></tr></thead><tbody><tr><td>lang-native</td><td>English</td><td>1</td><td>Français</td><td>1</td></tr></tbody></table><p>First column is the message key that will be used in component templates, and the rest of the file is split into languages sections, two columns per language. The first of these columns specifies a locale value for the message key and the second indicates if the value has been confirmed to be correct or if it&#39;s a mere placeholder (1 - valid; 0 - not valid).</p><p>Right now, only two languages are included, but it&#39;s possible to add new languages following the same pattern--adding two columns (<code>xxValue</code> and <code>xxValid</code>) per language where the first two letters are the short, two-letter language code.</p><h3 id="fixtures" tabindex="-1">Fixtures <a class="header-anchor" href="#fixtures" aria-label="Permalink to &quot;Fixtures&quot;">​</a></h3><p>Fixtures themselves do not require localization, but they <strong>must</strong> provide locale messages to panels, screens, and on-map components it creates. There are several ways to do that.</p><h4 id="panel-registration-options" tabindex="-1">Panel Registration Options <a class="header-anchor" href="#panel-registration-options" aria-label="Permalink to &quot;Panel Registration Options&quot;">​</a></h4><p>Pass locale messages as part of the <code>PanelRegistrationOptions</code> when registering panels:</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// fixture.ts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// with a single panel</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.$iApi.panel.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">register</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;panel-one&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        config: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            screens: &lt;...&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        i18n: &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">i18nOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// or several panels</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.$iApi.panel.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">register</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;panel-one&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            screens: &lt;...&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;panel-two&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            screens: &lt;...&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        i18n: &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">i18nOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p><code>i18n</code> options use the following type:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>type I18nComponentOptions = {</span></span>
<span class="line"><span>    messages?: VueI18n.LocaleMessages;  // https://kazupon.github.io/vue-i18n/guide/messages.html#structure</span></span>
<span class="line"><span>    dateTimeFormats?: VueI18n.DateTimeFormats;  // https://kazupon.github.io/vue-i18n/guide/datetime.html#datetime-localization</span></span>
<span class="line"><span>    numberFormats?: VueI18n.NumberFormats;  // https://kazupon.github.io/vue-i18n/guide/number.html#custom-formatting</span></span>
<span class="line"><span>    sharedMessages?: VueI18n.LocaleMessages;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>The above code will merge <code>messages</code>, <code>dateTimeFormats</code> and <code>numberFormats</code> into the corresponding global locales, while the <code>sharedMessages</code> property will be ignored.</p><blockquote><p><strong>Important:</strong> Because all values are merged into the global locales, all components--even ones that do not belong to this panel or fixtures--will be able to use these messages. There is a potential for key name collisions.</p><p>As a rule of thumb, fixture locale keys should be prefixed with the fixture name (or its abbreviation (<code>basemap</code> =&gt; <code>bm</code>) for brevity):</p><table tabindex="0"><thead><tr><th>key</th><th>enValue</th><th>enValid</th><th>frValue</th><th>frValid</th></tr></thead><tbody><tr><td>**basemap.**refresh</td><td>Map refresh required</td><td>1</td><td>Actualiser la carte</td><td>1</td></tr><tr><td>**basemap.**select</td><td>Select basemap</td><td>1</td><td>Sélectionner la carte de base</td><td>1</td></tr></tbody></table></blockquote><h4 id="vue-component-options" tabindex="-1">Vue Component Options <a class="header-anchor" href="#vue-component-options" aria-label="Permalink to &quot;Vue Component Options&quot;">​</a></h4><p>Additionally, it&#39;s possible to provide locale messages directly to the screen component as follows:</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// screen-component.vue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    i18n: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        messages: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            en: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                hello: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;world&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>The above requires hardcoding locale string into the component file. If using a CSV file, <code>ramp-locale-loader</code> will fold the CSV content into the <code>VueI18n.LocaleMessages</code> form automatically (the file name needs to end in <code>lang.csv</code>):</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// screen-component.vue</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> messages </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./lang.csv&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    i18n: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        messages</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>The above approach can be used in the core fixtures and in external fixtures compiled with webpack given that <code>ramp-locale-loader</code> package is used. For all other cases, it&#39;s responsibility of the fixture to format their locale messages appropriately as <code>VueI18n.LocaleMessages</code>.</p><p>If two methods of passing locale messages are used, more specific <code>i18n</code> options take precedence:</p><ul><li>component file options</li><li>common panel registration options</li></ul><p>If the string key cannot be found there, <code>i18n</code> falls back to the core strings, so it&#39;s possible to use any of the common core strings in any screen components without specifying any locale messages at all.</p><h3 id="non-fixture-components" tabindex="-1">Non-Fixture Components <a class="header-anchor" href="#non-fixture-components" aria-label="Permalink to &quot;Non-Fixture Components&quot;">​</a></h3><p>A fixture is not required for registering panels or creating on-map components; this can be done directly on the RAMP API. The ways of providing localization in such cases are exactly the same as when using a fixture.</p>`,54)]))}const k=a(t,[["render",l]]);export{g as __pageData,k as default};
