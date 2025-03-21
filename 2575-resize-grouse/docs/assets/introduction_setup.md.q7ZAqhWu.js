import{_ as s,c as a,ag as o,o as t}from"./chunks/framework.DODkh1b9.js";const u=JSON.parse('{"title":"Demo Setup for Forked Repos","description":"","frontmatter":{},"headers":[],"relativePath":"introduction/setup.md","filePath":"introduction/setup.md"}'),i={name:"introduction/setup.md"};function r(n,e,l,d,p,c){return t(),a("div",null,e[0]||(e[0]=[o('<h1 id="demo-setup-for-forked-repos" tabindex="-1">Demo Setup for Forked Repos <a class="header-anchor" href="#demo-setup-for-forked-repos" aria-label="Permalink to &quot;Demo Setup for Forked Repos&quot;">​</a></h1><p>When you push changes to your forked repo, a demo preview is automatically generated. The demo preview will update each time you push changes. Note that demos are deleted daily whenever the source branch or tag is deleted from your forked repo.</p><h3 id="accessing-your-demo-previews" tabindex="-1">Accessing Your Demo Previews: <a class="header-anchor" href="#accessing-your-demo-previews" aria-label="Permalink to &quot;Accessing Your Demo Previews:&quot;">​</a></h3><ul><li><strong>Branch or Tag Preview</strong>: Visit <code>https://YOUR-GITHUB-USERNAME.github.io/ramp4-pcar4/BRANCH-OR-TAG-NAME</code> to see a live preview of the branch or tag you&#39;ve pushed.</li><li><strong>List of All Demos</strong>: View all your demo previews by navigating to <code>https://github.com/YOUR-GITHUB-USERNAME/ramp4-pcar4/tree/demo-page</code>.</li></ul><h3 id="enabling-demos-for-your-forked-repo" tabindex="-1">Enabling Demos for Your Forked Repo: <a class="header-anchor" href="#enabling-demos-for-your-forked-repo" aria-label="Permalink to &quot;Enabling Demos for Your Forked Repo:&quot;">​</a></h3><p>To enable demo previews on your forked repository, update the following settings:</p><ol><li><p><strong>GitHub Pages</strong>:</p><ul><li>Go to <code>Settings -&gt; Pages -&gt; Build and deployment source</code> and select <strong>GitHub Actions</strong>.</li></ul></li><li><p><strong>Deployment Branches and Tags</strong>:</p><ul><li>Navigate to <code>Settings -&gt; Environments -&gt; github-pages -&gt; Deployment branches and tags</code> and choose <strong>No restriction</strong>.</li></ul></li><li><p><strong>Actions Permissions</strong>:</p><ul><li>Under <code>Settings -&gt; Actions -&gt; General -&gt; Actions permissions</code>, set it to <strong>Allow all actions and reusable workflows</strong>.</li></ul></li><li><p><strong>Workflow Permissions</strong>:</p><ul><li>Go to <code>Settings -&gt; Actions -&gt; General -&gt; Workflow permissions</code>, and select <strong>Read and write permissions</strong>.</li></ul></li></ol><h1 id="local-development" tabindex="-1">Local development <a class="header-anchor" href="#local-development" aria-label="Permalink to &quot;Local development&quot;">​</a></h1><h2 id="project-setup" tabindex="-1">Project Setup <a class="header-anchor" href="#project-setup" aria-label="Permalink to &quot;Project Setup&quot;">​</a></h2><p>Download <a href="https://nodejs.org/en/blog/release/v22.12.0" target="_blank" rel="noreferrer">Node v22.12.0</a>.</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ci</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="compile-and-hot-reload-for-development" tabindex="-1">Compile and Hot-Reload for Development <a class="header-anchor" href="#compile-and-hot-reload-for-development" aria-label="Permalink to &quot;Compile and Hot-Reload for Development&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Current Samples: <code>https://localhost:5173/demos/enhanced-samples.html</code>. Legacy Samples: <code>https://localhost:5173/demos/index-samples.html</code>.</p><h3 id="serve-via-http" tabindex="-1">Serve via <code>http</code> <a class="header-anchor" href="#serve-via-http" aria-label="Permalink to &quot;Serve via `http`&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev-http</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="build-for-production" tabindex="-1">Build for production <a class="header-anchor" href="#build-for-production" aria-label="Permalink to &quot;Build for production&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>The production files will be placed in the <code>dist</code> folder.</p><h2 id="preview-production-build-after-running-build" tabindex="-1">Preview production build (after running build) <a class="header-anchor" href="#preview-production-build-after-running-build" aria-label="Permalink to &quot;Preview production build (after running build)&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> preview</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Open <code>http://localhost:5050</code> in your browser.</p><h2 id="recommended-ide-setup" tabindex="-1">Recommended IDE Setup <a class="header-anchor" href="#recommended-ide-setup" aria-label="Permalink to &quot;Recommended IDE Setup&quot;">​</a></h2><p><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCode</a> with the recommended extensions (VSCode should bug you to install them).</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ol><li>Install <a href="https://marketplace.visualstudio.com/items?itemName=vue.volar" target="_blank" rel="noreferrer">Volar</a>.</li><li>Disable/remove <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" rel="noreferrer">Vetur</a>.</li><li>Type <code>@builtin typescript</code> in the search box on the VSCode extensions tab and <strong>disable</strong> &quot;TypeScript and JavaScript Language Features&quot;. Volar has its own TS language server so we don&#39;t want to run two concurrently.</li></ol></div><h2 id="public-vs-demos-folders" tabindex="-1">public vs demos folders <a class="header-anchor" href="#public-vs-demos-folders" aria-label="Permalink to &quot;public vs demos folders&quot;">​</a></h2><p>The <code>public</code> folder is a <strong>static only</strong> folder. It contains the help md files and end-user demo assets and the compiled ramp library source code. Files in this folder are not processed by vite and therefore cannot reference outside files. This is useful for testing if things are broken between the develop and production build.</p><p>To test the files in the <code>public</code> folder locally:</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm run build</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm run preview</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Then open <code>http://localhost:5050/index.html</code> in your browser.</p><p>The <code>demos</code> folder <strong>is</strong> processed by vite and can therefore reference any source file in the repo. This is the starting point for local development. For example, the <code>demos/starter-scripts/main.js</code> file imports <code>{ createInstance, geo } from &#39;@/main&#39;;</code> whereas <code>public/starter-scripts/index.js</code> doesn&#39;t since RAMP is globally defined by the <code>index.html</code> file when it loads <code>&lt;script src=&quot;./ramp.browser.iife.js&quot;&gt;&lt;/script&gt;</code>.</p><p>Run <code>npm run dev</code> then open <code>http://localhost:3000/demos/index.html</code> in your browser.</p><p>During build, the <code>public</code> folder contents are placed into the <code>dist</code> folder.</p><h2 id="demo-builds" tabindex="-1">Demo Builds <a class="header-anchor" href="#demo-builds" aria-label="Permalink to &quot;Demo Builds&quot;">​</a></h2><p>The demos of the most recent build are available at <a href="https://ramp4-pcar4.github.io/ramp4-pcar4/main/demos/enhanced-all.html" target="_blank" rel="noreferrer">https://ramp4-pcar4.github.io/ramp4-pcar4/main/demos/enhanced-all.html</a>.</p><p>Demo builds are automatically generated for pull requests if you are a member of the <a href="https://github.com/orgs/ramp4-pcar4/people" target="_blank" rel="noreferrer">ramp4-pcar4 organization</a> and have your visibility set to public.</p>',36)]))}const m=s(i,[["render",r]]);export{u as __pageData,m as default};
