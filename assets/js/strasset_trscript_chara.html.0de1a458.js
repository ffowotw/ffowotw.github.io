"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[77],{6262:(t,d)=>{d.A=(t,d)=>{const e=t.__vccOpts||t;for(const[t,n]of d)e[t]=n;return e}},3335:(t,d,e)=>{e.r(d),e.d(d,{comp:()=>a,data:()=>c});var n=e(641);const s={},a=(0,e(6262).A)(s,[["render",function(t,d){return(0,n.uX)(),(0,n.CE)("div",null,d[0]||(d[0]=[(0,n.Fv)('<h1 id="角色腳本" tabindex="-1"><a class="header-anchor" href="#角色腳本"><span>角色腳本</span></a></h1><h2 id="角色腳本範本" tabindex="-1"><a class="header-anchor" href="#角色腳本範本"><span>角色腳本範本</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>beginFunction: &quot;PreInit&quot;</span></span>\n<span class="line"><span>endFunction:</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>beginFunction: &quot;Init&quot;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>    ...</span></span>\n<span class="line"><span>    addMove: &quot;NmlAct5A&quot;</span></span>\n<span class="line"><span>        moveType: (NORMAL)</span></span>\n<span class="line"><span>        charaState: (STANDING)</span></span>\n<span class="line"><span>        moveInput: (INPUT_PRESS_A)</span></span>\n<span class="line"><span>    endMove:</span></span>\n<span class="line"><span>    addMove: &quot;SP_00&quot;</span></span>\n<span class="line"><span>        moveType: (SPECIAL)</span></span>\n<span class="line"><span>        charaState: (STANDING)</span></span>\n<span class="line"><span>        moveInput: (INPUT_236)</span></span>\n<span class="line"><span>        moveInput: (INPUT_PRESS_A)</span></span>\n<span class="line"><span>        disableFlag: 1</span></span>\n<span class="line"><span>    endMove:</span></span>\n<span class="line"><span>endFunction:</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>beginState: &quot;NmlAct5A&quot;</span></span>\n<span class="line"><span>    attackLevel: 0</span></span>\n<span class="line"><span>    damage: 10</span></span>\n<span class="line"><span>    sprite: &quot;200_00&quot;, 2</span></span>\n<span class="line"><span>    sprite: &quot;200_01&quot;, 2</span></span>\n<span class="line"><span>    hit:</span></span>\n<span class="line"><span>    sprite: &quot;200_02&quot;, 4</span></span>\n<span class="line"><span>    recoveryState:</span></span>\n<span class="line"><span>    sprite: &quot;200_03&quot;, 2</span></span>\n<span class="line"><span>    sprite: &quot;200_04&quot;, 2</span></span>\n<span class="line"><span>endState:</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>beginState: &quot;SP_00&quot;</span></span>\n<span class="line"><span>    sprite: &quot;300_00&quot;, 1</span></span>\n<span class="line"><span>    sprite: &quot;300_01&quot;, 2</span></span>\n<span class="line"><span>    sprite: &quot;300_02&quot;, 2</span></span>\n<span class="line"><span>    createObject: &quot;FireballObj&quot;</span></span>\n<span class="line"><span>    sprite: &quot;300_03&quot;, 4</span></span>\n<span class="line"><span>    sprite: &quot;300_04&quot;, 4</span></span>\n<span class="line"><span>    sprite: &quot;300_05&quot;, 4</span></span>\n<span class="line"><span>    sprite: &quot;300_06&quot;, 4</span></span>\n<span class="line"><span>    sprite: &quot;300_07&quot;, 4</span></span>\n<span class="line"><span>    recoveryState:</span></span>\n<span class="line"><span>    sprite: &quot;300_08&quot;, 4</span></span>\n<span class="line"><span>    sprite: &quot;300_09&quot;, 4</span></span>\n<span class="line"><span>    sprite: &quot;300_10&quot;, 4</span></span>\n<span class="line"><span>    sprite: &quot;300_11&quot;, 4</span></span>\n<span class="line"><span>    sprite: &quot;300_12&quot;, 4</span></span>\n<span class="line"><span>endState:</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h2><div class="hint-container important"><p class="hint-container-title">重要</p><p>所有的命令的後面都需要使用 <code>:</code> 才能接續輸入的參數。</p><p>所有的開始初始化後面也需要結束初始化。</p></div><br><h2 id="角色專用命令" tabindex="-1"><a class="header-anchor" href="#角色專用命令"><span>角色專用命令</span></a></h2><div class="hint-container important"><p class="hint-container-title">重要</p><table><thead><tr><th>招式指令</th><th>描述</th></tr></thead><tbody><tr><td><code>(INPUT_PRESS_按鈕)</code></td><td>按下按鈕</td></tr><tr><td><code>(INPUT_HOLD_按鈕)</code></td><td>按住按鈕</td></tr><tr><td><code>(INPUT_RELEASE_按鈕)</code></td><td>放開按鈕</td></tr><tr><td><code>(INPUT_ANY_方向)</code></td><td>能接受的方向</td></tr><tr><td><code>(INPUT_NO_方向)</code></td><td>不能接受的方向</td></tr><tr><td><code>(INPUT_CHARGE_開始方向_結束方向_長度F)</code></td><td>蓄力指令</td></tr><tr><td><code>(INPUT_方向指令)</code></td><td>方向指令</td></tr><tr><td><code>(INPUT_DASH)</code></td><td>前衝</td></tr><tr><td><code>(INPUT_BDASH)</code></td><td>後衝</td></tr><tr><td><code>(INPUT_BOOLEAN_OR)</code></td><td>或著的判斷式</td></tr></tbody></table><br><div class="hint-container important"><p class="hint-container-title">重要</p><p>按鈕能在插件內部編輯。</p><p>如有需求請自行增加或是減少，抑或是修改。</p><div class="hint-container info"><p class="hint-container-title">指令範例</p><p>checkInput: (INPUT_PRESS_A)</p></div><table><thead><tr><th>按鈕</th><th>描述</th></tr></thead><tbody><tr><td><code>A</code></td><td>A</td></tr><tr><td><code>B</code></td><td>B</td></tr><tr><td><code>C</code></td><td>C</td></tr><tr><td><code>D</code></td><td>D</td></tr><tr><td><code>TAUNT</code></td><td>挑釁</td></tr></tbody></table></div><div class="hint-container important"><p class="hint-container-title">重要</p><div class="hint-container info"><p class="hint-container-title">指令範例</p><p>checkInput: (INPUT_CHARGE_DOWN_UP_45F)</p></div><table><thead><tr><th>方向</th><th>描述</th></tr></thead><tbody><tr><td><code>FORWARD</code></td><td>前</td></tr><tr><td><code>BACK</code></td><td>後</td></tr><tr><td><code>UP</code></td><td>左</td></tr><tr><td><code>DOWN</code></td><td>右</td></tr></tbody></table></div><div class="hint-container important"><p class="hint-container-title">重要</p><p>雖然此文檔不建議，但是方向指令可以在插件內部編輯。</p><div class="hint-container info"><p class="hint-container-title">指令範例</p><p>checkInput: (INPUT_236)</p></div><table><thead><tr><th>方向指令</th><th>描述</th></tr></thead><tbody><tr><td><code>66</code></td><td>前，置中，前</td></tr><tr><td><code>22</code></td><td>下，置中，下</td></tr><tr><td><code>236</code></td><td>下，前下，前</td></tr><tr><td><code>214</code></td><td>下，後下，後</td></tr><tr><td><code>623</code></td><td>前，下，前下</td></tr><tr><td><code>421</code></td><td>後，下，後下</td></tr><tr><td><code>41236</code></td><td>後，後下，下，前下，前</td></tr><tr><td><code>63214</code></td><td>前，前下，下，後下，後</td></tr><tr><td><code>236236</code></td><td>下，前下，前，下，前下，前</td></tr><tr><td><code>214214</code></td><td>下，後下，後，下，後下，後</td></tr><tr><td><code>236214</code></td><td>下，前下，前，下，後下，後</td></tr><tr><td><code>214236</code></td><td>下，後下，後，下，前下，前</td></tr></tbody></table></div></div><br><table><thead><tr><th>檢查式命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>checkInput</code></td><td><code>招式指令</code></td><td>檢查招式指令</td></tr></tbody></table><table><thead><tr><th>模型集合命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>setDefaultMeshSet</code></td><td><code>字串</code></td><td>設定預設模型集合</td></tr><tr><td><code>resetDefaultMeshSet</code></td><td></td><td>重置預設模型集合</td></tr><tr><td><code>changeDefaultMeshSet</code></td><td></td><td>切換為預設模型集合</td></tr></tbody></table><br><h3 id="區塊專用命令" tabindex="-1"><a class="header-anchor" href="#區塊專用命令"><span>區塊專用命令</span></a></h3><table><thead><tr><th>早期初始化基礎數值命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>charaName</code></td><td><code>數字</code></td><td>初始化角色生命</td></tr><tr><td></td><td></td><td></td></tr><tr><td><code>weight</code></td><td><code>數字</code></td><td>初始化重量</td></tr><tr><td><code>airJumpCount</code></td><td><code>數字</code></td><td>初始化空中跳躍的最大次數</td></tr><tr><td><code>airDashCount</code></td><td><code>數字</code></td><td>初始化空中衝刺的最大次數</td></tr></tbody></table><table><thead><tr><th>初始化走動命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>walkFSpeed</code></td><td><code>數字</code></td><td>初始化前走的速度</td></tr><tr><td><code>walkBSpeed</code></td><td><code>數字</code></td><td>初始化後走的速度</td></tr></tbody></table><table><thead><tr><th>初始化跑動命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>dashFInitSpeed</code></td><td><code>數字</code></td><td>初始化前衝的初始速度</td></tr><tr><td><code>dashFAcceleration</code></td><td><code>數字</code></td><td>初始化前衝的加速度</td></tr><tr><td><code>dashFriction</code></td><td><code>數字</code></td><td>初始化前衝的摩擦力</td></tr><tr><td></td><td></td><td></td></tr><tr><td><code>dashBXSpeed</code></td><td><code>數字</code></td><td>初始化後衝的橫向速度</td></tr><tr><td><code>dashBYSpeed</code></td><td><code>數字</code></td><td>初始化後衝的縱向速度</td></tr><tr><td><code>dashBGravity</code></td><td><code>數字</code></td><td>初始化後衝的重力</td></tr></tbody></table><table><thead><tr><th>初始化普通跳命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>jumpFXSpeed</code></td><td><code>數字</code></td><td>初始化前跳的橫向速度</td></tr><tr><td><code>jumpBXSpeed</code></td><td><code>數字</code></td><td>初始化後跳的橫向速度</td></tr><tr><td><code>jumpYSpeed</code></td><td><code>數字</code></td><td>初始化跳躍的縱向速度</td></tr><tr><td><code>jumpGravity</code></td><td><code>數字</code></td><td>初始化跳躍的重力</td></tr></tbody></table><table><thead><tr><th>初始化高跳命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>highJumpFXSpeed</code></td><td><code>數字</code></td><td>初始化前高跳的橫向速度</td></tr><tr><td><code>highJumpBXSpeed</code></td><td><code>數字</code></td><td>初始化後高跳的橫向速度</td></tr><tr><td><code>highJumpYSpeed</code></td><td><code>數字</code></td><td>初始化高跳的縱向速度</td></tr><tr><td><code>highJumpGravity</code></td><td><code>數字</code></td><td>初始化高跳的重力</td></tr></tbody></table><table><thead><tr><th>初始化空中衝刺命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>airDashMinHeight</code></td><td><code>數字</code></td><td>初始化上升時空中衝刺的最低高度</td></tr><tr><td><code>airDashFTime</code></td><td><code>數字</code></td><td>初始化空中前衝的時長</td></tr><tr><td><code>airDashBTime</code></td><td><code>數字</code></td><td>初始化空中後衝的時長</td></tr><tr><td><code>airDashFSpeed</code></td><td><code>數字</code></td><td>初始化空中前衝的速度</td></tr><tr><td><code>airDashBSpeed</code></td><td><code>數字</code></td><td>初始化空中後衝的速度</td></tr><tr><td><code>airDashFAttackLockTime</code></td><td><code>數字</code></td><td>初始化空中前衝的不可攻擊的時長</td></tr><tr><td><code>airDashBAttackLockTime</code></td><td><code>數字</code></td><td>初始化空中後衝的不可攻擊的時長</td></tr></tbody></table><table><thead><tr><th>初始化推擠箱命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>pushboxWidthStand</code></td><td><code>數字</code></td><td>初始化站姿時的推擠箱寬度</td></tr><tr><td><code>pushboxHeightStand</code></td><td><code>數字</code></td><td>初始化站姿時的推擠箱高度</td></tr><tr><td><code>pushboxWidthCrouch</code></td><td><code>數字</code></td><td>初始化蹲姿時的推擠箱寬度</td></tr><tr><td><code>pushboxHeightCrouch</code></td><td><code>數字</code></td><td>初始化蹲姿時的推擠箱高度</td></tr><tr><td><code>pushboxWidthAir</code></td><td><code>數字</code></td><td>初始化空中時的推擠箱寬度</td></tr><tr><td><code>pushboxHeightAir</code></td><td><code>數字</code></td><td>初始化空中時的推擠箱高度</td></tr><tr><td><code>pushboxHeightLowAir</code></td><td><code>數字</code></td><td>初始化空中時的推擠箱向下的高度</td></tr></tbody></table><table><thead><tr><th>初始化招式命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>addMove</code></td><td><code>字串</code></td><td>開始初始化招式</td></tr><tr><td><code>endMove</code></td><td><code>字串</code></td><td>結束初始化招式</td></tr><tr><td></td><td></td><td></td></tr><tr><td><code>moveType</code></td><td><code>(NORMAL) | (SPECIAL) | (ULTMATE)</code></td><td>初始化招式的類型：通常技 | 必殺技 | 覺醒技</td></tr><tr><td><code>charaState</code></td><td><code>(STANDING) | (CROUCHING) | (JUMPING)</code></td><td>初始化角色的狀態：站姿 | 蹲姿 | 空中</td></tr><tr><td><code>moveInput</code></td><td><code>招式指令</code></td><td>初始化招式的招式指令，可重複使用</td></tr><tr><td><code>moveRequirement</code></td><td><code>(REQUIRES_HALF_METER) | (REQUIRES_FULL_METER)</code></td><td>初始化招式需要的能量：一半 | 全部</td></tr><tr><td><code>disableMoveCanceling</code></td><td><code>0(否) | 1(是)</code></td><td>初始化禁止招式取消</td></tr><tr><td><code>isFollowupMove</code></td><td><code>0(否) | 1(是)</code></td><td>初始化只能接續在取消</td></tr><tr><td><code>disableFlag</code></td><td><code>數字</code></td><td>初始化招式的鎖定編號</td></tr></tbody></table><table><thead><tr><th>初始化傷害定格的動畫</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>setDamageSprite</code></td><td><code>數字</code>, <code>字串</code></td><td>初始化傷害定格的動畫</td></tr></tbody></table><table><thead><tr><th>初始化模型集合命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>beginMeshSet</code></td><td><code>字串</code></td><td>開始初始化模型集合</td></tr><tr><td><code>endMeshSet</code></td><td></td><td>結束初始化模型集合</td></tr><tr><td></td><td></td><td></td></tr><tr><td><code>addToMeshSet</code></td><td><code>字串</code></td><td>將模型加入模型集合</td></tr></tbody></table><br><h3 id="狀態專用命令" tabindex="-1"><a class="header-anchor" href="#狀態專用命令"><span>狀態專用命令</span></a></h3><table><thead><tr><th>動畫命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>playAnimation</code></td><td><code>字串</code>, <code>0(否) | 1(是)</code></td><td>設定播放的動畫與是否循環</td></tr><tr><td><code>playCameraAnimation</code></td><td><code>字串</code></td><td>設定播放的攝影機動畫</td></tr><tr><td><code>swapMeshSet</code></td><td><code>字串</code></td><td>替換成不同的外觀</td></tr><tr><td><code>meshDisplay</code></td><td><code>字串</code>, <code>0(否) | 1(是)</code></td><td>設定模組的顯示</td></tr></tbody></table><table><thead><tr><th>物理命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>inertiaPercent</code></td><td><code>數字</code></td><td>設定目前的慣性</td></tr><tr><td><code>gravityPercent</code></td><td></td><td>設定目前的重力百分比</td></tr></tbody></table><table><thead><tr><th>無敵命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>setInvul</code></td><td><code>無敵類型</code>, <code>0(否) | 1(是)</code></td><td>設定是否為無敵</td></tr><tr><td><code>setInvulForTime</code></td><td><code>無敵類型</code>, <code>數字</code></td><td>設定無敵的時間</td></tr></tbody></table><div class="hint-container important"><p class="hint-container-title">重要</p><table><thead><tr><th>無敵類型</th><th>註解</th></tr></thead><tbody><tr><td><code>(STRIKE)</code></td><td>打擊</td></tr><tr><td><code>(THROW)</code></td><td>投擲</td></tr></tbody></table></div><table><thead><tr><th>重置命令</th><th>註解</th></tr></thead><tbody><tr><td><code>resetAirJump</code></td><td>重置空中跳躍的次數</td></tr><tr><td><code>resetAirDash</code></td><td>重置空中衝刺的次數</td></tr></tbody></table><table><thead><tr><th>覺醒必殺技命令</th><th>註解</th></tr></thead><tbody><tr><td><code>hideOthers</code></td><td>設定其他物件的使否隱藏</td></tr><tr><td><code>ultimateFreeze</code></td><td>設定覺性必殺技的暫停</td></tr><tr><td><code>addDelayTime</code></td><td>增加延遲的時間</td></tr></tbody></table><table><thead><tr><th>取消命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>addWhiffCancel</code></td><td><code>字串</code></td><td>新增攻擊沒有擊中的取消</td></tr><tr><td><code>addHitCancel</code></td><td><code>字串</code></td><td>新增攻擊擊中的取消</td></tr><tr><td><code>removeWhiffCancel</code></td><td><code>字串</code></td><td>移除攻擊沒有擊中的取消</td></tr><tr><td><code>removeHitCancel</code></td><td><code>字串</code></td><td>移除攻擊擊中的取消</td></tr></tbody></table><table><thead><tr><th>推擠箱命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>setNoCollision</code></td><td><code>0(否) | 1(是)</code></td><td>設定推擠箱是否為無效</td></tr><tr><td><code>setPushboxHeight</code></td><td><code>數字</code></td><td>設定推擠箱的高度</td></tr><tr><td><code>setPushboxHeightLow</code></td><td><code>數字</code></td><td>設定推擠箱下方的高度</td></tr></tbody></table><table><thead><tr><th>允許命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>enableJump</code></td><td><code>0(否) | 1(是)</code></td><td>設定是否允許跳躍</td></tr><tr><td><code>enableNormals</code></td><td><code>0(否) | 1(是)</code></td><td>設定是否允許通常技</td></tr><tr><td><code>enableSpecials</code></td><td><code>0(否) | 1(是)</code></td><td>設定是否允許必殺技</td></tr><tr><td><code>enableJumpCancel</code></td><td><code>0(否) | 1(是)</code></td><td>設定是否允許跳躍取消</td></tr><tr><td><code>enableWhiffCancel</code></td><td><code>0(否) | 1(是)</code></td><td>設定是否允許空揮取消</td></tr><tr><td><code>enableSpecialCancel</code></td><td><code>0(否) | 1(是)</code></td><td>設定是否允許必殺技取消</td></tr></tbody></table><table><thead><tr><th>蹲姿命令</th><th>輸入</th><th>註解</th></tr></thead><tbody><tr><td><code>setCrouch</code></td><td><code>0(否) | 1(是)</code></td><td>設定是否為蹲姿</td></tr></tbody></table>',36)]))}]]),c=JSON.parse('{"path":"/strasset/trscript/chara.html","title":"角色腳本","lang":"zh-TW","frontmatter":{"article":false,"icon":"fa6-solid:file","category":["TRScript 文檔"],"tag":["TRScript","腳本"],"editLink":false,"lastUpdated":false,"comment":false,"prev":false,"next":"effectobject.md","description":"角色腳本 角色腳本範本 命令 重要 所有的命令的後面都需要使用 : 才能接續輸入的參數。 所有的開始初始化後面也需要結束初始化。 角色專用命令 重要 重要 按鈕能在插件內部編輯。 如有需求請自行增加或是減少，抑或是修改。 指令範例 checkInput: (INPUT_PRESS_A) 重要 指令範例 checkInput: (INPUT_CHARGE...","head":[["meta",{"property":"og:url","content":"https://ffowotw.github.io/strasset/trscript/chara.html"}],["meta",{"property":"og:site_name","content":"FFOWOFF"}],["meta",{"property":"og:title","content":"角色腳本"}],["meta",{"property":"og:description","content":"角色腳本 角色腳本範本 命令 重要 所有的命令的後面都需要使用 : 才能接續輸入的參數。 所有的開始初始化後面也需要結束初始化。 角色專用命令 重要 重要 按鈕能在插件內部編輯。 如有需求請自行增加或是減少，抑或是修改。 指令範例 checkInput: (INPUT_PRESS_A) 重要 指令範例 checkInput: (INPUT_CHARGE..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"article:tag","content":"TRScript"}],["meta",{"property":"article:tag","content":"腳本"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"角色腳本\\",\\"description\\":\\"角色腳本 角色腳本範本 命令 重要 所有的命令的後面都需要使用 : 才能接續輸入的參數。 所有的開始初始化後面也需要結束初始化。 角色專用命令 重要 重要 按鈕能在插件內部編輯。 如有需求請自行增加或是減少，抑或是修改。 指令範例 checkInput: (INPUT_PRESS_A) 重要 指令範例 checkInput: (INPUT_CHARGE...\\"}"]]},"headers":[{"level":2,"title":"角色腳本範本","slug":"角色腳本範本","link":"#角色腳本範本","children":[]},{"level":2,"title":"命令","slug":"命令","link":"#命令","children":[]},{"level":2,"title":"角色專用命令","slug":"角色專用命令","link":"#角色專用命令","children":[{"level":3,"title":"區塊專用命令","slug":"區塊專用命令","link":"#區塊專用命令","children":[]},{"level":3,"title":"狀態專用命令","slug":"狀態專用命令","link":"#狀態專用命令","children":[]}]}],"git":{},"filePathRelative":"strasset/trscript/chara.md","excerpt":"\\n<h2>角色腳本範本</h2>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>beginFunction: \\"PreInit\\"</span></span>\\n<span class=\\"line\\"><span>endFunction:</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>beginFunction: \\"Init\\"</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    ...</span></span>\\n<span class=\\"line\\"><span>    addMove: \\"NmlAct5A\\"</span></span>\\n<span class=\\"line\\"><span>        moveType: (NORMAL)</span></span>\\n<span class=\\"line\\"><span>        charaState: (STANDING)</span></span>\\n<span class=\\"line\\"><span>        moveInput: (INPUT_PRESS_A)</span></span>\\n<span class=\\"line\\"><span>    endMove:</span></span>\\n<span class=\\"line\\"><span>    addMove: \\"SP_00\\"</span></span>\\n<span class=\\"line\\"><span>        moveType: (SPECIAL)</span></span>\\n<span class=\\"line\\"><span>        charaState: (STANDING)</span></span>\\n<span class=\\"line\\"><span>        moveInput: (INPUT_236)</span></span>\\n<span class=\\"line\\"><span>        moveInput: (INPUT_PRESS_A)</span></span>\\n<span class=\\"line\\"><span>        disableFlag: 1</span></span>\\n<span class=\\"line\\"><span>    endMove:</span></span>\\n<span class=\\"line\\"><span>endFunction:</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>beginState: \\"NmlAct5A\\"</span></span>\\n<span class=\\"line\\"><span>    attackLevel: 0</span></span>\\n<span class=\\"line\\"><span>    damage: 10</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"200_00\\", 2</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"200_01\\", 2</span></span>\\n<span class=\\"line\\"><span>    hit:</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"200_02\\", 4</span></span>\\n<span class=\\"line\\"><span>    recoveryState:</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"200_03\\", 2</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"200_04\\", 2</span></span>\\n<span class=\\"line\\"><span>endState:</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>beginState: \\"SP_00\\"</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"300_00\\", 1</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"300_01\\", 2</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"300_02\\", 2</span></span>\\n<span class=\\"line\\"><span>    createObject: \\"FireballObj\\"</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"300_03\\", 4</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"300_04\\", 4</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"300_05\\", 4</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"300_06\\", 4</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"300_07\\", 4</span></span>\\n<span class=\\"line\\"><span>    recoveryState:</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"300_08\\", 4</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"300_09\\", 4</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"300_10\\", 4</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"300_11\\", 4</span></span>\\n<span class=\\"line\\"><span>    sprite: \\"300_12\\", 4</span></span>\\n<span class=\\"line\\"><span>endState:</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);