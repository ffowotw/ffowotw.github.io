"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[784],{6262:(e,t)=>{t.A=(e,t)=>{const i=e.__vccOpts||e;for(const[e,a]of t)i[e]=a;return i}},6061:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>n,data:()=>l});var a=i(641);const s={},n=(0,i(6262).A)(s,[["render",function(e,t){const i=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[3]||(t[3]=(0,a.Fv)('<h1 id="虛幻引擎4的格鬥遊戲插件" tabindex="-1"><a class="header-anchor" href="#虛幻引擎4的格鬥遊戲插件"><span>虛幻引擎4的格鬥遊戲插件</span></a></h1><p><a href="https://github.com/ffowotw/TRScript" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Author-FFOWOTW-blue?style=for-the-badge" alt="Author" loading="lazy"></a><a href="https://github.com/ffowotw/STRAsset/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Licence-GNU_v3.0-slime?style=for-the-badge" alt="Licence" loading="lazy"></a></p><h2 id="前文" tabindex="-1"><a class="header-anchor" href="#前文"><span>前文</span></a></h2><p>絕大多數的人會在甚麼情況下使用到了特殊的方式來製作遊戲中的角色呢？雖然不是很清楚其他人的情況，但是減少之後的工作量或是簡化流程一定是最主要的其中幾個原因。</p><p>我製作這個插件的目的除了以上提到的兩點之外，還有想要讓遊戲開發人員能更方便、快速的製作遊戲。</p><h2 id="插件介紹" tabindex="-1"><a class="header-anchor" href="#插件介紹"><span>插件介紹</span></a></h2><p>目前此插件取名是 <code>TRScript</code> ，是以我目前正在製作中的遊戲的代號取字首來命名的，之後會跟遊戲的正式名稱來改動。</p><p>此插件大幅的加快了製作一個角色需要花費的時間，可以調整的內容包括但不限於：移動速度、動畫、碰撞框、招式。</p><div class="hint-container important"><p class="hint-container-title">這個插件是有一個參考對象的</p><p>雖然有一些不同的地方，但是這個插件有一個部分很大的參考了Arc System Works的BBScript，一個該公司自製的一個方便製作和改動遊戲內的角色的腳本。</p></div><p>此插件雖然在於角色的部分已經接近完善，但是在其他部分都還在很早期的階段，目前也只有控制P1的功能。</p><h3 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式"><span>使用方式</span></a></h3><p>在此插件中，製作角色不是靠 DataTable 或是 DataAsset，而是在外部先製作一個 <code>.trscript</code> 的腳本檔案跟一個 <code>.collision</code> 的碰撞框檔案，然後把兩者拖入虛幻引擎的專案內。</p>',12)),(0,a.Lk)("p",null,[t[1]||(t[1]=(0,a.eW)("在這裡只會單純介紹各個腳本的功能，並不會深入探討。如對於更多的內容有興趣，請至 ")),(0,a.bF)(i,{to:"/trscript/"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("TRScript文檔")]))),_:1}),t[2]||(t[2]=(0,a.eW)(" 查看。"))]),t[4]||(t[4]=(0,a.Fv)('<p>以下是可位於專案內創建的物件：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>TRS: 角色腳本或是特效腳本，請使用匯入的方式使用</span></span>\n<span class="line"><span>Collision: 碰撞箱腳本，請使用匯入的方式使用</span></span>\n<span class="line"><span>Mesh Array: 一個SkeletalMesh的陣列，可以將多個部分拆出來以方便顯示與隱藏</span></span>\n<span class="line"><span>Anim Set: 一個SkeletalMesh的動畫陣列，請填入與角色腳本內相同的名稱</span></span>\n<span class="line"><span>Anim Array: 一個 Anim Set 的陣列，用來管理各個部份的 Anim Set</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="trscript" tabindex="-1"><a class="header-anchor" href="#trscript"><span>.trscript</span></a></h3><p><code>.trscript</code> 是此插件中的角色／道具腳本的檔案類型，雖然是角色跟道具的共通腳本，但是目前還沒有製作道具的部分。</p><div class="hint-container important"><p class="hint-container-title">還不存在的道具腳本</p><p>道具腳本預計會使用跟角色腳本相同的檔案類型，只是目前還沒有開始製作，預計會在角色腳本更完善之後再開始製作。</p></div><h3 id="collision" tabindex="-1"><a class="header-anchor" href="#collision"><span>.collision</span></a></h3><p><code>.collision</code> 則是此插件中的碰撞箱腳本的檔案類型，用於打擊箱與受擊箱。</p><div class="hint-container important"><p class="hint-container-title">還不存在的編輯介面</p><p>目前還沒有一個編輯用的GUI，預計在未來會製作一個方便編輯各個碰撞箱的工具，可是我對於製作UI方面的工具的經驗還很不足，可能會排在其他的功能的後面。</p></div><h3 id="將角色加入於遊戲中" tabindex="-1"><a class="header-anchor" href="#將角色加入於遊戲中"><span>將角色加入於遊戲中</span></a></h3><p>此插件提供了一個 <code>STRGameMode</code> 的遊戲模式，用於填入角色的資料，之後會想一個更聰明的方式來控制角色的資料。</p><p>想要將角色加入遊戲中需要完成的步驟有以下幾個：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>1. 將腳本匯入於角色的資料夾中</span></span>\n<span class="line"><span>2. 創建 Mesh Array 、 Anim Set 、 Anim Array，並將創建好的 Anim Set 填入 Anim Array 中</span></span>\n<span class="line"><span>3. 創建一個繼承了 STRGameMode 的遊戲模式，並將各個資料填入 CharaSet 、 DebugP1 與 DebugP2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成以上幾點步驟之後，就能在遊戲中看到填入於 <code>DebugP1</code> 與 <code>DebugP2</code> 的角色了。</p><h2 id="結語" tabindex="-1"><a class="header-anchor" href="#結語"><span>結語</span></a></h2><p>雖然整體都還很粗糙，但是已經有基本的雛型了。希望之後的功能會讓整體越來越完整，也希望之後這個插件不只適用於虛幻引擎，如果可以讓使用範圍更廣泛就更好了。</p>',15))])}]]),l=JSON.parse('{"path":"/posts/2024-11/a-ue4-fighting-game-plugin.html","title":"虛幻引擎4的格鬥遊戲插件","lang":"zh-TW","frontmatter":{"date":"2024-11-16T00:00:00.000Z","category":["發布"],"tag":["虛幻引擎","TRScript"],"star":true,"breadcrumb":false,"editLink":false,"lastUpdated":false,"comment":false,"description":"虛幻引擎4的格鬥遊戲插件 Author Licence 前文 絕大多數的人會在甚麼情況下使用到了特殊的方式來製作遊戲中的角色呢？雖然不是很清楚其他人的情況，但是減少之後的工作量或是簡化流程一定是最主要的其中幾個原因。 我製作這個插件的目的除了以上提到的兩點之外，還有想要讓遊戲開發人員能更方便、快速的製作遊戲。 插件介紹 目前此插件取名是 TRScrip...","head":[["meta",{"property":"og:url","content":"https://ffowotw.github.io/posts/2024-11/a-ue4-fighting-game-plugin.html"}],["meta",{"property":"og:site_name","content":"FFOWOFF"}],["meta",{"property":"og:title","content":"虛幻引擎4的格鬥遊戲插件"}],["meta",{"property":"og:description","content":"虛幻引擎4的格鬥遊戲插件 Author Licence 前文 絕大多數的人會在甚麼情況下使用到了特殊的方式來製作遊戲中的角色呢？雖然不是很清楚其他人的情況，但是減少之後的工作量或是簡化流程一定是最主要的其中幾個原因。 我製作這個插件的目的除了以上提到的兩點之外，還有想要讓遊戲開發人員能更方便、快速的製作遊戲。 插件介紹 目前此插件取名是 TRScrip..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.shields.io/badge/Author-FFOWOTW-blue?style=for-the-badge"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"article:tag","content":"虛幻引擎"}],["meta",{"property":"article:tag","content":"TRScript"}],["meta",{"property":"article:published_time","content":"2024-11-16T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"虛幻引擎4的格鬥遊戲插件\\",\\"image\\":[\\"https://img.shields.io/badge/Author-FFOWOTW-blue?style=for-the-badge\\",\\"https://img.shields.io/badge/Licence-GNU_v3.0-slime?style=for-the-badge\\"],\\"datePublished\\":\\"2024-11-16T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"前文","slug":"前文","link":"#前文","children":[]},{"level":2,"title":"插件介紹","slug":"插件介紹","link":"#插件介紹","children":[{"level":3,"title":"使用方式","slug":"使用方式","link":"#使用方式","children":[]},{"level":3,"title":".trscript","slug":"trscript","link":"#trscript","children":[]},{"level":3,"title":".collision","slug":"collision","link":"#collision","children":[]},{"level":3,"title":"將角色加入於遊戲中","slug":"將角色加入於遊戲中","link":"#將角色加入於遊戲中","children":[]}]},{"level":2,"title":"結語","slug":"結語","link":"#結語","children":[]}],"git":{},"filePathRelative":"posts/2024-11/a-ue4-fighting-game-plugin.md","localizedDate":"2024年11月16日","excerpt":"\\n<p><a href=\\"https://github.com/ffowotw/TRScript\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><img src=\\"https://img.shields.io/badge/Author-FFOWOTW-blue?style=for-the-badge\\" alt=\\"Author\\" loading=\\"lazy\\"></a>\\n<a href=\\"https://github.com/ffowotw/STRAsset/blob/main/LICENSE\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><img src=\\"https://img.shields.io/badge/Licence-GNU_v3.0-slime?style=for-the-badge\\" alt=\\"Licence\\" loading=\\"lazy\\"></a></p>","autoDesc":true}')}}]);