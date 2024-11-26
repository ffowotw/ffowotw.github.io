"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[378],{6262:(s,n)=>{n.A=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}},6041:(s,n,a)=>{a.r(n),a.d(n,{comp:()=>i,data:()=>l});var e=a(641);const t={},i=(0,a(6262).A)(t,[["render",function(s,n){return(0,e.uX)(),(0,e.CE)("div",null,n[0]||(n[0]=[(0,e.Fv)('<h1 id="特效物件腳本" tabindex="-1"><a class="header-anchor" href="#特效物件腳本"><span>特效物件腳本</span></a></h1><h2 id="特效物件腳本範本" tabindex="-1"><a class="header-anchor" href="#特效物件腳本範本"><span>特效物件腳本範本</span></a></h2><div class="language-trscript line-numbers-mode" data-highlighter="shiki" data-ext="trscript" data-title="trscript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>beginState: &quot;FireballObj&quot;</span></span>\n<span class="line"><span>    numberOfHits: 1</span></span>\n<span class="line"><span>    destroyOnDamageCollision: 1</span></span>\n<span class="line"><span>    destroyOnEnemyDamage: 1</span></span>\n<span class="line"><span>    destroyOnEnemyGuard: 1</span></span>\n<span class="line"><span>    addDisableFlag: 1</span></span>\n<span class="line"><span>    attackLevel: 2</span></span>\n<span class="line"><span>    damage: 30</span></span>\n<span class="line"><span>    setProration: 90</span></span>\n<span class="line"><span>    physicsXImpulse: 35000</span></span>\n<span class="line"><span>    linkParticle: &quot;fireball_loop&quot;</span></span>\n<span class="line"><span>    hit:</span></span>\n<span class="line"><span>    label: &quot;loop&quot;</span></span>\n<span class="line"><span>    sprite: &quot;fireball_00&quot;, 2</span></span>\n<span class="line"><span>    sprite: &quot;fireball_01&quot;, 2</span></span>\n<span class="line"><span>    sprite: &quot;fireball_02&quot;, 2</span></span>\n<span class="line"><span>    sprite: &quot;fireball_03&quot;, 2</span></span>\n<span class="line"><span>    sprite: &quot;fireball_04&quot;, 2</span></span>\n<span class="line"><span>    sprite: &quot;fireball_05&quot;, 2</span></span>\n<span class="line"><span>    gotoLabel: &quot;loop&quot;</span></span>\n<span class="line"><span>endState:</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h2><div class="hint-container important"><p class="hint-container-title">重要</p><p>所有的命令的後面都需要使用 <code>:</code> 才能接續輸入的參數。</p><p>所有的開始初始化後面也需要結束初始化。</p></div><br><h2 id="特效物件專用命令" tabindex="-1"><a class="header-anchor" href="#特效物件專用命令"><span>特效物件專用命令</span></a></h2><h3 id="狀態專用命令" tabindex="-1"><a class="header-anchor" href="#狀態專用命令"><span>狀態專用命令</span></a></h3><table><thead><tr><th>招式鎖定命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>addDisableFlag</code></td><td><code>字串</code></td><td>鎖定招式</td></tr></tbody></table><table><thead><tr><th>攻擊命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>normalAttack</code></td><td><code>字串</code></td><td>通常技攻擊</td></tr><tr><td><code>normalAttack</code></td><td><code>字串</code></td><td>必殺技攻擊</td></tr><tr><td><code>normalAttack</code></td><td><code>字串</code></td><td>覺醒必殺技攻擊</td></tr><tr><td><code>numberOfHit</code></td><td><code>字串</code></td><td>攻擊的次數</td></tr></tbody></table><table><thead><tr><th>消除指令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>requestDestroy</code></td><td></td><td>呼叫消除</td></tr><tr><td><code>destroyOnPlayerStateChanged</code></td><td><code>0(否) | 1(是)</code></td><td>在角色的狀態變更時呼叫消除</td></tr><tr><td><code>destroyOnDamageCollision</code></td><td><code>0(否) | 1(是)</code></td><td>在擊中受擊箱時呼叫消除</td></tr><tr><td><code>destroyOnEnemyDamage</code></td><td><code>0(否) | 1(是)</code></td><td>在對手被此物件擊中時呼叫消除</td></tr><tr><td><code>destroyOnEnemyGuard</code></td><td><code>0(否) | 1(是)</code></td><td>在對手防禦此物件的攻擊時呼叫消除</td></tr></tbody></table><table><thead><tr><th>綁定指令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>unlinkObject</code></td><td></td><td>取消與父物件之間的綁定</td></tr></tbody></table><table><thead><tr><th>粒子效果指令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>linkParticle</code></td><td></td><td>創建並綁定粒子效果</td></tr></tbody></table>',14)]))}]]),l=JSON.parse('{"path":"/strasset/trscript/effectobject.html","title":"特效物件腳本","lang":"zh-TW","frontmatter":{"article":false,"icon":"fa6-solid:file","category":["TRScript 文檔"],"tag":["TRScript","腳本"],"editLink":false,"lastUpdated":false,"comment":false,"prev":"chara.md","next":"valueid.md","description":"特效物件腳本 特效物件腳本範本 命令 重要 所有的命令的後面都需要使用 : 才能接續輸入的參數。 所有的開始初始化後面也需要結束初始化。 特效物件專用命令 狀態專用命令","head":[["meta",{"property":"og:url","content":"https://ffowotw.github.io/strasset/trscript/effectobject.html"}],["meta",{"property":"og:site_name","content":"FFOWOFF"}],["meta",{"property":"og:title","content":"特效物件腳本"}],["meta",{"property":"og:description","content":"特效物件腳本 特效物件腳本範本 命令 重要 所有的命令的後面都需要使用 : 才能接續輸入的參數。 所有的開始初始化後面也需要結束初始化。 特效物件專用命令 狀態專用命令"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"article:tag","content":"TRScript"}],["meta",{"property":"article:tag","content":"腳本"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"特效物件腳本\\",\\"description\\":\\"特效物件腳本 特效物件腳本範本 命令 重要 所有的命令的後面都需要使用 : 才能接續輸入的參數。 所有的開始初始化後面也需要結束初始化。 特效物件專用命令 狀態專用命令\\"}"]]},"headers":[{"level":2,"title":"特效物件腳本範本","slug":"特效物件腳本範本","link":"#特效物件腳本範本","children":[]},{"level":2,"title":"命令","slug":"命令","link":"#命令","children":[]},{"level":2,"title":"特效物件專用命令","slug":"特效物件專用命令","link":"#特效物件專用命令","children":[{"level":3,"title":"狀態專用命令","slug":"狀態專用命令","link":"#狀態專用命令","children":[]}]}],"git":{},"filePathRelative":"strasset/trscript/effectobject.md","excerpt":"\\n<h2>特效物件腳本範本</h2>\\n<div class=\\"language-trscript line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"trscript\\" data-title=\\"trscript\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>beginState: \\"FireballObj\\"</span></span>\\n<span class=\\"line\\"><span>    numberOfHits: 1</span></span>\\n<span class=\\"line\\"><span>    destroyOnDamageCollision: 1</span></span>\\n<span class=\\"line\\"><span>    destroyOnEnemyDamage: 1</span></span>\\n<span class=\\"line\\"><span>    destroyOnEnemyGuard: 1</span></span>\\n<span class=\\"line\\"><span>    addDisableFlag: 1</span></span>\\n<span class=\\"line\\"><span>    attackLevel: 2</span></span>\\n<span class=\\"line\\"><span>    damage: 30</span></span>\\n<span class=\\"line\\"><span>    setProration: 90</span></span>\\n<span class=\\"line\\"><span>    physicsXImpulse: 35000</span></span>\\n<span class=\\"line\\"><span>    linkParticle: \\"fireball_loop\\"</span></span>\\n<span class=\\"line\\"><span>    hit:</span></span>\\n<span class=\\"line\\"><span>    label: \\"loop\\"</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"fireball_00\\", 2</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"fireball_01\\", 2</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"fireball_02\\", 2</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"fireball_03\\", 2</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"fireball_04\\", 2</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"fireball_05\\", 2</span></span>\\n<span class=\\"line\\"><span>    gotoLabel: \\"loop\\"</span></span>\\n<span class=\\"line\\"><span>endState:</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);