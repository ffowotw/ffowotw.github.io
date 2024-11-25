"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[202],{6262:(t,d)=>{d.A=(t,d)=>{const e=t.__vccOpts||t;for(const[t,o]of d)e[t]=o;return e}},3198:(t,d,e)=>{e.r(d),e.d(d,{comp:()=>r,data:()=>a});var o=e(641);const c={},r=(0,e(6262).A)(c,[["render",function(t,d){return(0,o.uX)(),(0,o.CE)("div",null,d[0]||(d[0]=[(0,o.Fv)('<h1 id="trscript" tabindex="-1"><a class="header-anchor" href="#trscript"><span>TRScript</span></a></h1><p>有物件腳本才有辦法控制物件。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>目前的部分功能只適用於 v0.2.0 alpha 版本中。</p></div><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h2><div class="hint-container important"><p class="hint-container-title">重要</p><p>所有的命令的後面都需要使用 <code>:</code> 才能接續輸入的參數。</p><p>所有的開始初始化後面也需要結束初始化。</p></div><br><h2 id="通用命令" tabindex="-1"><a class="header-anchor" href="#通用命令"><span>通用命令</span></a></h2><table><thead><tr><th>區塊命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>beginFunction</code></td><td><code>字串</code></td><td>開始初始化一個區塊</td></tr><tr><td><code>endFunction</code></td><td></td><td>結束初始化一個區塊</td></tr></tbody></table><table><thead><tr><th>狀態命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>beginState</code></td><td><code>字串</code></td><td>開始初始化一個狀態</td></tr><tr><td><code>endState</code></td><td></td><td>結束初始化一個狀態</td></tr></tbody></table><table><thead><tr><th>參數命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>Val(輸入)</code></td><td><code>字串</code></td><td>讀取被儲存的參數，可填於 <code>數字</code> 與 <code>0(否) | 1(是)</code> 中</td></tr><tr><td><code>storeVal</code></td><td><code>字串</code>, <code>數字</code></td><td>儲存參數</td></tr></tbody></table><table><thead><tr><th>檢查式命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>checkCurrentStateName</code></td><td><code>字串</code></td><td>檢查目前的狀態</td></tr><tr><td><code>checkLastStateName</code></td><td><code>字串</code></td><td>檢查上一個狀態</td></tr></tbody></table><table><thead><tr><th>判斷式命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>if</code></td><td><code>0(否) | 1(是)</code></td><td>從輸入判斷是否會執行內部的命令</td></tr><tr><td><code>elif</code></td><td><code>0(否) | 1(是)</code></td><td>如果以上的判斷式皆沒有通過，則從輸入判斷是否會執行內部的命令</td></tr><tr><td><code>else</code></td><td></td><td>如果以上的判斷式皆沒有通過，則執行內部的命令</td></tr><tr><td><code>endif</code></td><td></td><td>結束判斷式</td></tr></tbody></table><br><h3 id="區塊專用命令" tabindex="-1"><a class="header-anchor" href="#區塊專用命令"><span>區塊專用命令</span></a></h3><table><thead><tr><th>初始化基礎數值命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>life</code></td><td><code>數字</code></td><td>初始化生命</td></tr></tbody></table><br><h3 id="狀態專用命令" tabindex="-1"><a class="header-anchor" href="#狀態專用命令"><span>狀態專用命令</span></a></h3><table><thead><tr><th>區塊相關命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>callFunction</code></td><td><code>字串</code></td><td>開始一個區塊</td></tr></tbody></table><table><thead><tr><th>狀態相關命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>jumpToState</code></td><td><code>字串</code></td><td>結束目前的狀態並且開始一個狀態</td></tr><tr><td><code>exitState</code></td><td></td><td>結束目前的狀態</td></tr></tbody></table><table><thead><tr><th>標籤命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>字串</code></td><td>建立標籤</td></tr><tr><td><code>gotoLabel</code></td><td><code>字串</code></td><td>前往標籤</td></tr><tr><td><code>gotoLabelIf</code></td><td><code>字串</code>, <code>0(否) | 1(是)</code></td><td>如果是，前往標籤</td></tr></tbody></table><table><thead><tr><th>動畫命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>sprite</code></td><td><code>字串</code>, <code>數字</code></td><td>設定目前的動畫與時間</td></tr></tbody></table><table><thead><tr><th>物件命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>createObject</code></td><td><code>字串</code></td><td>創建物件</td></tr><tr><td><code>linkObjectCollision</code></td><td><code>字串</code></td><td>使用物件的碰撞箱</td></tr></tbody></table><table><thead><tr><th>粒子效果命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>createParticle</code></td><td><code>字串</code></td><td>創建粒子效果</td></tr></tbody></table><table><thead><tr><th>狀態命令</th><th>註解</th></tr></thead><tbody><tr><td><code>hit</code></td><td>開始打擊判定</td></tr><tr><td><code>recoveryState</code></td><td>結束打擊判定，進入收招狀態</td></tr></tbody></table><table><thead><tr><th>物理命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>addPositionX</code></td><td></td><td>增加目前的水平位置</td></tr><tr><td><code>physicsXImpulse</code></td><td><code>數字</code></td><td>增加目前的橫向速度</td></tr><tr><td><code>physicsYImpulse</code></td><td><code>數字</code></td><td>增加目前的縱向速度</td></tr><tr><td><code>velocityXPercent</code></td><td><code>數字</code></td><td>設定目前的橫向移動的速度百分比</td></tr><tr><td><code>velocityYPercent</code></td><td><code>數字</code></td><td>設定目前的縱向移動的速度百分比</td></tr><tr><td><code>velocityXPercentEachFrame</code></td><td><code>數字</code></td><td>設定目前的橫向速度每幅減少的百分比</td></tr><tr><td><code>velocityYPercentEachFrame</code></td><td><code>數字</code></td><td>設定目前的縱向速度每幅減少的百分比</td></tr><tr><td></td><td></td><td></td></tr><tr><td><code>setGravity</code></td><td><code>數字</code></td><td>複寫目前的重力</td></tr><tr><td><code>resetGravity</code></td><td></td><td>重設目前的重力</td></tr></tbody></table><p>| 重力命令 | 輸入 | 註解 |</p><table><thead><tr><th>投擲命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>isThrow</code></td><td><code>0(否) | 1(是)</code></td><td>設定狀態是否為投擲</td></tr><tr><td><code>canThrowHitStun</code></td><td><code>0(否) | 1(是)</code></td><td>設定投擲是否對受擊硬直中的對手有效</td></tr><tr><td><code>throwRange</code></td><td><code>數字</code></td><td>設定投擲的有效距離</td></tr><tr><td><code>executeOnHit</code></td><td><code>字串</code></td><td>設定投擲的判定成功將執行輸入的狀態</td></tr><tr><td><code>enemyGrabSprite</code></td><td><code>數字</code></td><td>設定投擲的判定成功時，對方會顯示的動畫</td></tr></tbody></table><table><thead><tr><th>傷害命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>damage</code></td><td><code>數字</code></td><td>設定招式的傷害</td></tr><tr><td><code>setProration</code></td><td><code>數字</code></td><td>設定傷害的修正比例</td></tr><tr><td><code>minDamagePercent</code></td><td><code>數字</code></td><td>設定傷害的最小修正比例</td></tr></tbody></table><table><thead><tr><th>攻擊命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>attackLevel</code></td><td><code>數字</code></td><td>設定攻擊的強度（會影響受擊的硬直）</td></tr><tr><td><code>attackAngle</code></td><td><code>數字</code></td><td>設定攻擊的角度（會影響敵人的飛行弧度）</td></tr><tr><td><code>isAirUnblockable</code></td><td><code>數字</code></td><td>設定攻擊是否能在空中防禦</td></tr></tbody></table><table><thead><tr><th>攻擊命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>guardType</code></td><td><code>防禦類型</code></td><td>設定防禦的類型</td></tr><tr><td><code>counterHitType</code></td><td><code>反擊類型</code></td><td>設定反擊的類型</td></tr></tbody></table><div class="hint-container important"><p class="hint-container-title">重要</p><table><thead><tr><th>防禦類型</th><th>註解</th></tr></thead><tbody><tr><td><code>(ANY)</code></td><td>可以在任何狀態下防禦</td></tr><tr><td><code>(HIGH)</code></td><td>只能在站姿下防禦</td></tr><tr><td><code>(LOW)</code></td><td>只能在蹲姿下防禦</td></tr><tr><td><code>(NONE)</code></td><td>無法防禦</td></tr></tbody></table><table><thead><tr><th>反擊類型</th><th>註解</th></tr></thead><tbody><tr><td><code>(DEFAULT)</code></td><td>預設</td></tr><tr><td><code>(NO_COUNTER)</code></td><td>沒有反擊</td></tr><tr><td><code>(FORCE_COUNTER)</code></td><td>強制反擊</td></tr></tbody></table></div><table><thead><tr><th>擊中命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>hitGravity</code></td><td><code>數字</code></td><td>設定被擊中時的對手重力</td></tr><tr><td><code>hitStop</code></td><td><code>數字</code></td><td>複寫打擊的停止時間</td></tr><tr><td><code>disableHitStop</code></td><td><code>0(否) | 1(是)</code></td><td>設定打擊的停止是否為無效</td></tr><tr><td><code>hitPushbackX</code></td><td><code>數字</code></td><td>設定被擊中時的對手橫向速度</td></tr><tr><td><code>hitPushbackY</code></td><td><code>數字</code></td><td>設定被擊中時的對手縱向速度</td></tr><tr><td><code>hitAirPushbackX</code></td><td><code>數字</code></td><td>設定在空中被擊中時的對手橫向速度</td></tr><tr><td><code>hitAirPushbackY</code></td><td><code>數字</code></td><td>設定在空中被擊中時的對手縱向速度</td></tr><tr><td><code>counterHitAirPushbackX</code></td><td><code>數字</code></td><td>設定在空中被反擊時的對手橫向速度</td></tr><tr><td><code>counterHitAirPushbackY</code></td><td><code>數字</code></td><td>設定在空中被反擊時的對手縱向速度</td></tr></tbody></table><table><thead><tr><th>擊中效果命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>groundHitEffect</code></td><td><code>擊中效果</code></td><td>設定對手在地面被擊中的效果</td></tr><tr><td><code>airHitEffect</code></td><td><code>擊中效果</code></td><td>設定對手在空中被擊中的效果</td></tr><tr><td><code>groundCounterHitEffect</code></td><td><code>擊中效果</code></td><td>設定對手在地面被反擊的效果</td></tr><tr><td><code>airCounterHitEffect</code></td><td><code>擊中效果</code></td><td>設定對手在空中被反擊的效果</td></tr><tr><td><code>resetGroundHitEffect</code></td><td><code>擊中效果</code></td><td>重置對手在地面被擊中的效果</td></tr><tr><td><code>resetAirHitEffect</code></td><td><code>擊中效果</code></td><td>重置對手在空中被擊中的效果</td></tr><tr><td><code>resetGroundCounterHitEffect</code></td><td><code>擊中效果</code></td><td>重置對手在地面被反擊的效果</td></tr><tr><td><code>resetAirCounterHitEffect</code></td><td><code>擊中效果</code></td><td>重置對手在空中被反擊的效果</td></tr></tbody></table><div class="hint-container important"><p class="hint-container-title">重要</p><table><thead><tr><th>擊中效果</th><th>註解</th></tr></thead><tbody><tr><td><code>(NORMAL_UPPER)</code></td><td>命中上半身</td></tr><tr><td><code>(NORMAL_LOWER)</code></td><td>命中下半身</td></tr><tr><td><code>(AIR_FACE_UP)</code></td><td>命中時，面朝上</td></tr><tr><td><code>(AIR_FACE_DOWN)</code></td><td>命中時，面朝下</td></tr><tr><td><code>(AIR_STRONG)</code></td><td>命中時，使對手朝前方飛出</td></tr><tr><td><code>(AIR_LAUNCH)</code></td><td>命中時，使對手朝前上方飛出</td></tr><tr><td><code>(FORCE_STAND)</code></td><td>命中時，強制對手變更為站姿</td></tr><tr><td><code>(FORCE_CROUCH)</code></td><td>命中時，強制對手變更為蹲姿</td></tr></tbody></table></div><table><thead><tr><th>滾地命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>rollCount</code></td><td><code>數字</code></td><td>設定滾動的次數</td></tr><tr><td><code>rollDuration</code></td><td><code>數字</code></td><td>設定滾動的時長</td></tr><tr><td><code>counterHitRollDuration</code></td><td><code>數字</code></td><td>設定反擊時滾動的時長</td></tr></tbody></table><table><thead><tr><th>上牆命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>wallStickDuration</code></td><td><code>數字</code></td><td>設定上牆的時長</td></tr><tr><td><code>counterHitWallStickDuration</code></td><td><code>數字</code></td><td>設定反擊時上牆的時長</td></tr></tbody></table><table><thead><tr><th>彈地命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>groundBounceCount</code></td><td><code>數字</code></td><td>設定彈地的次數</td></tr><tr><td><code>counterHitGroundBounceCount</code></td><td><code>數字</code></td><td>設定反擊時彈地的次數</td></tr><tr><td><code>groundBounceYVelocityPercent</code></td><td><code>數字</code></td><td>設定彈地的縱向速度變為輸入的百分比</td></tr><tr><td><code>counterHitGroundBounceYVelocityPercent</code></td><td><code>數字</code></td><td>設定反擊時彈地的縱向速度變為輸入的百分比</td></tr></tbody></table><table><thead><tr><th>彈牆命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>wallBounceInCornerOnly</code></td><td><code>數字</code></td><td>設定彈牆的次數</td></tr><tr><td><code>counterHitWallBounceInCornerOnly</code></td><td><code>數字</code></td><td>設定反擊時彈牆的次數</td></tr><tr><td><code>wallBounceCount</code></td><td><code>數字</code></td><td>設定彈牆的次數</td></tr><tr><td><code>counterHitWallBounceCount</code></td><td><code>數字</code></td><td>設定反擊時彈牆的次數</td></tr><tr><td><code>wallBounceXVelocityPercent</code></td><td><code>數字</code></td><td>設定彈牆的橫向速度變為輸入的百分比</td></tr><tr><td><code>counterHitWallBounceXVelocityPercent</code></td><td><code>數字</code></td><td>設定反擊時彈牆的橫向速度變為輸入的百分比</td></tr></tbody></table><br>',39)]))}]]),a=JSON.parse('{"path":"/strasset/trscript/","title":"TRScript","lang":"zh-TW","frontmatter":{"article":false,"icon":"fa6-solid:file","category":["TRScript 文檔"],"tag":["TRScript","腳本"],"editLink":false,"lastUpdated":false,"comment":false,"prev":false,"next":"../collision.md","description":"TRScript 有物件腳本才有辦法控制物件。 注意 目前的部分功能只適用於 v0.2.0 alpha 版本中。 命令 重要 所有的命令的後面都需要使用 : 才能接續輸入的參數。 所有的開始初始化後面也需要結束初始化。 通用命令 區塊專用命令 狀態專用命令 | 重力命令 | 輸入 | 註解 | 重要 重要","head":[["meta",{"property":"og:url","content":"https://ffowotw.github.io/strasset/trscript/"}],["meta",{"property":"og:site_name","content":"FFOWOFF"}],["meta",{"property":"og:title","content":"TRScript"}],["meta",{"property":"og:description","content":"TRScript 有物件腳本才有辦法控制物件。 注意 目前的部分功能只適用於 v0.2.0 alpha 版本中。 命令 重要 所有的命令的後面都需要使用 : 才能接續輸入的參數。 所有的開始初始化後面也需要結束初始化。 通用命令 區塊專用命令 狀態專用命令 | 重力命令 | 輸入 | 註解 | 重要 重要"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"article:tag","content":"TRScript"}],["meta",{"property":"article:tag","content":"腳本"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"TRScript\\",\\"description\\":\\"TRScript 有物件腳本才有辦法控制物件。 注意 目前的部分功能只適用於 v0.2.0 alpha 版本中。 命令 重要 所有的命令的後面都需要使用 : 才能接續輸入的參數。 所有的開始初始化後面也需要結束初始化。 通用命令 區塊專用命令 狀態專用命令 | 重力命令 | 輸入 | 註解 | 重要 重要\\"}"]]},"headers":[{"level":2,"title":"命令","slug":"命令","link":"#命令","children":[]},{"level":2,"title":"通用命令","slug":"通用命令","link":"#通用命令","children":[{"level":3,"title":"區塊專用命令","slug":"區塊專用命令","link":"#區塊專用命令","children":[]},{"level":3,"title":"狀態專用命令","slug":"狀態專用命令","link":"#狀態專用命令","children":[]}]}],"git":{},"filePathRelative":"strasset/trscript/README.md","excerpt":"\\n<p>有物件腳本才有辦法控制物件。</p>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>目前的部分功能只適用於 v0.2.0 alpha 版本中。</p>\\n</div>\\n<h2>命令</h2>\\n<div class=\\"hint-container important\\">\\n<p class=\\"hint-container-title\\">重要</p>\\n<p>所有的命令的後面都需要使用 <code>:</code> 才能接續輸入的參數。</p>\\n<p>所有的開始初始化後面也需要結束初始化。</p>\\n</div>","autoDesc":true}')}}]);