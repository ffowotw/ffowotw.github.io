"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[524],{1709:(e,t,l)=>{l.d(t,{l:()=>a});const a={category:{"/":{path:"/category/",map:{"STR Asset 公告":{path:"/category/str-asset-%E5%85%AC%E5%91%8A/",indexes:[0,1]},日誌:{path:"/category/%E6%97%A5%E8%AA%8C/",indexes:[2]}}}},tag:{"/":{path:"/tag/",map:{虛幻引擎:{path:"/tag/%E8%99%9B%E5%B9%BB%E5%BC%95%E6%93%8E/",indexes:[1]},"STR Asset":{path:"/tag/str-asset/",indexes:[0,1]}}}}}},4776:(e,t,l)=>{l.d(t,{M:()=>a});const a=["/posts/2024-11/strasset-0.2.0-alpha-announcement.html","/posts/2024-11/a-ue4-fighting-game-plugin.html","/posts/2024-11/the-start-of-my-blog.html"]},3781:(e,t,l)=>{l.d(t,{U:()=>a});const a={article:{"/":{path:"/article/",indexes:[0,1,2]}},star:{"/":{path:"/star/",indexes:[1,2]}},timeline:{"/":{path:"/timeline/",indexes:[0,1,2]}}}},7877:(e,t,l)=>{l.d(t,{B:()=>G});var a={};l.r(a);var s={};l.r(s);var i={};l.r(i),l.d(i,{default:()=>u});var r={};l.r(r);var n={};l.r(n),l.d(n,{default:()=>T});var o={};l.r(o),l.d(o,{default:()=>S});var d={};l.r(d),l.d(d,{default:()=>w});var h=l(2442),c=l(3073),p=l(9403),g=l(596),m=l(8831);const u={enhance:({app:e})=>{(0,h.L4)("FontIcon")||e.component("FontIcon",p.A),(0,h.L4)("Badge")||e.component("Badge",g.A),(0,h.L4)("VPCard")||e.component("VPCard",m.A)},setup:()=>{(0,c.r9V)("https://cdn.jsdelivr.net/npm/iconify-icon@1")},rootComponents:[]};var b=l(6358),v=l(3827),f=l(355),k=l(1599),x=l(8913),A=l(457),L=l(3349),F=l(1781),y=l(9212);const T={enhance:({app:e})=>{e.component("CodeTabs",F.S),e.component("Tabs",y.t)}},S={enhance:({app:e})=>{}};var E=l(5753),B=l(2614),R=l(5054),C=l(9402),I=l(8465),O=l(641),_=l(4638);(0,I.M_)((e=>{const t=e.t,l=!1!==e.I,a=e.i;return l?{title:t,content:a?()=>[(0,O.h)(C.GB,{icon:a}),t]:null,order:e.O,index:e.I}:null}));const w={enhance:({app:e,router:t})=>{const{scrollBehavior:l}=t.options;t.options.scrollBehavior=async(...e)=>(await C.lE.wait(),l(...e)),(0,C.fk)(e),e.component("HopeIcon",C.GB),e.component("BloggerInfo",_.tI),e.component("SocialMedias",_.rS)},setup:()=>{(0,C.PV)(),(0,C.i$)(),(0,_.su)()},layouts:{Layout:C.PE,NotFound:C.Mk,BlogCategory:_.Pn,BlogHome:_.qX,BlogType:_.z7,Timeline:_.Kf}},G=[a,s,i,b,v,f,k,x,A,L,r,n,o,E,B,R,d].map((e=>e.default)).filter(Boolean)},8164:(e,t,l)=>{l.d(t,{J:()=>s,c:()=>a});const a=JSON.parse("{}"),s=Object.fromEntries([["/",{loader:()=>l.e(470).then(l.bind(l,9908)),meta:{t:"首頁",i:"fa6-solid:house"}}],["/strasset/collision.html",{loader:()=>l.e(386).then(l.bind(l,3601)),meta:{t:"Collision",i:"fa6-solid:vector-square"}}],["/strasset/",{loader:()=>l.e(118).then(l.bind(l,7601)),meta:{t:"STRAsset 文檔",i:"fa6-solid:lightbulb"}}],["/posts/2024-11/a-ue4-fighting-game-plugin.html",{loader:()=>l.e(784).then(l.bind(l,539)),meta:{d:17317152e5,l:"2024年11月16日",c:["STR Asset 公告"],g:["虛幻引擎","STR Asset"],e:'\n<p><a href="https://github.com/ffowotw/TRScript" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Author-FFOWOTW-blue?style=for-the-badge" alt="Author" loading="lazy"></a>\n<a href="https://github.com/ffowotw/STRAsset/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Licence-GNU_v3.0-slime?style=for-the-badge" alt="Licence" loading="lazy"></a></p>',t:"虛幻引擎4的格鬥遊戲插件",y:"a"}}],["/posts/2024-11/strasset-0.2.0-alpha-announcement.html",{loader:()=>l.e(961).then(l.bind(l,2834)),meta:{d:17324928e5,l:"2024年11月25日",c:["STR Asset 公告"],g:["STR Asset"],e:"\n<h2>前文</h2>\n<p>本插件在此暫時更名為 <code>STRAsset</code> ，之後將會將前面的 <code>STR</code> 修改為新的工作室的名稱簡寫。</p>\n<p>插件內部的資料夾也已經有了些修改，相同的功能或是類別的文件大部分都已經被移動到了相同的資料夾內。</p>\n<p>之後一定還會有更多的檔案被歸類，如果有修改程式碼的使用者，在此還要說聲抱歉。</p>\n<br>\n<h2>v0.2.0 alpha - 物件與特效 -</h2>\n<p>這次的 <code>v0.2.0 alpha</code> 的主要要素為 <code>物件與特效</code> ，主要的內容是將角色腳本更改為物件腳本，並從中並從中衍生出角色腳本跟特效物件腳本這兩個分支。</p>",t:"STRAsset v0.2.0 alpha 的更新公告",i:"fa6-solid:calendar-check",y:"a"}}],["/posts/2024-11/the-start-of-my-blog.html",{loader:()=>l.e(630).then(l.bind(l,550)),meta:{d:17315424e5,l:"2024年11月14日",c:["日誌"],e:"\n<h2>個人介紹</h2>\n<p>我是一位遊戲開發人員，目前主要使用的引擎有Unity跟虛幻引擎兩個。\n雖然有正職，平常也會在空閒的時間開發自己的遊戲或是工具，但是很多技術都是從網路上自學而來的，對於業界的知識也還很淺。</p>\n<p>雖然之前有用Google的Blogger，但是嚴格說起，這還是我第一次寫這種類型的文章。\n會開始這個個人網站的原因也不會太複雜，主要還是因為想要把自己的學習成果或是其他的東西分享出來讓有興趣的人了解。</p>\n<p>目前正職開發中的遊戲保密中，未來可能也不會分享。\n自己在空閒時間正在使用虛幻引擎獨自開發一款東方Project的同人遊戲，基礎框架已經接近完整了，把部分細節打理好就能公開了。也有考慮要不要在遊戲完成之後將框架開源出來讓大家使用。</p>",t:"部落格的開始",y:"a"}}],["/strasset/3d/animarray.html",{loader:()=>l.e(770).then(l.bind(l,4924)),meta:{t:"Anim Array",i:"fa6-solid:person-running"}}],["/strasset/3d/animset.html",{loader:()=>l.e(367).then(l.bind(l,8357)),meta:{t:"Anim Set",i:"fa6-solid:person-running"}}],["/strasset/3d/mesharray.html",{loader:()=>l.e(246).then(l.bind(l,3805)),meta:{t:"Mesh Array",i:"fa6-solid:cubes"}}],["/strasset/3d/",{loader:()=>l.e(764).then(l.bind(l,508)),meta:{t:"3D",i:"fa6-solid:cube"}}],["/strasset/get-started/chara.html",{loader:()=>l.e(994).then(l.bind(l,7656)),meta:{t:"創建角色",i:"fa6-solid:person"}}],["/strasset/get-started/gamemode.html",{loader:()=>l.e(976).then(l.bind(l,2301)),meta:{t:"讓遊戲可以遊玩",i:"fa6-solid:gamepad"}}],["/strasset/get-started/git.html",{loader:()=>l.e(389).then(l.bind(l,4479)),meta:{t:"安裝 Git",i:"fa6-brands:git-alt"}}],["/strasset/get-started/project.html",{loader:()=>l.e(156).then(l.bind(l,374)),meta:{t:"設置專案",i:"fa6-solid:folder-plus"}}],["/strasset/get-started/",{loader:()=>l.e(393).then(l.bind(l,7637)),meta:{t:"快速上手",i:"fa6-solid:leaf"}}],["/strasset/trscript/chara.html",{loader:()=>l.e(77).then(l.bind(l,2997)),meta:{t:"角色腳本",i:"fa6-solid:file"}}],["/strasset/trscript/effectobject.html",{loader:()=>l.e(378).then(l.bind(l,1778)),meta:{t:"特效物件腳本",i:"fa6-solid:file"}}],["/strasset/trscript/",{loader:()=>l.e(202).then(l.bind(l,9216)),meta:{t:"TRScript",i:"fa6-solid:file"}}],["/404.html",{loader:()=>l.e(490).then(l.bind(l,1489)),meta:{t:""}}],["/posts/2024-11/",{loader:()=>l.e(192).then(l.bind(l,5071)),meta:{t:"2024 11"}}],["/posts/",{loader:()=>l.e(666).then(l.bind(l,8063)),meta:{t:"Posts"}}],["/category/",{loader:()=>l.e(583).then(l.bind(l,3233)),meta:{t:"分類",I:!1}}],["/category/str-asset-%E5%85%AC%E5%91%8A/",{loader:()=>l.e(655).then(l.bind(l,4781)),meta:{t:"STR Asset 公告 分類",I:!1}}],["/category/%E6%97%A5%E8%AA%8C/",{loader:()=>l.e(733).then(l.bind(l,8345)),meta:{t:"日誌 分類",I:!1}}],["/tag/",{loader:()=>l.e(797).then(l.bind(l,951)),meta:{t:"標籤",I:!1}}],["/tag/%E8%99%9B%E5%B9%BB%E5%BC%95%E6%93%8E/",{loader:()=>l.e(303).then(l.bind(l,6462)),meta:{t:"標籤: 虛幻引擎",I:!1}}],["/tag/str-asset/",{loader:()=>l.e(768).then(l.bind(l,6718)),meta:{t:"標籤: STR Asset",I:!1}}],["/article/",{loader:()=>l.e(511).then(l.bind(l,2772)),meta:{t:"文章",I:!1}}],["/star/",{loader:()=>l.e(199).then(l.bind(l,353)),meta:{t:"星標",I:!1}}],["/timeline/",{loader:()=>l.e(464).then(l.bind(l,4695)),meta:{t:"時間軸",I:!1}}]])},5124:(e,t,l)=>{l.d(t,{o:()=>a});const a=[{title:"首頁",headers:[],path:"/",pathLocale:"/",extraFields:[]},{title:"Collision",headers:[{level:2,title:"命令",slug:"命令",link:"#命令",children:[]}],path:"/strasset/collision.html",pathLocale:"/",extraFields:[]},{title:"STRAsset 文檔",headers:[{level:2,title:"STRAsset 是什麼？",slug:"strasset-是什麼",link:"#strasset-是什麼",children:[]}],path:"/strasset/",pathLocale:"/",extraFields:[]},{title:"虛幻引擎4的格鬥遊戲插件",headers:[{level:2,title:"前文",slug:"前文",link:"#前文",children:[]},{level:2,title:"插件介紹",slug:"插件介紹",link:"#插件介紹",children:[{level:3,title:"使用方式",slug:"使用方式",link:"#使用方式",children:[]},{level:3,title:"TRScript -- 角色／物件腳本",slug:"trscript-角色-物件腳本",link:"#trscript-角色-物件腳本",children:[]},{level:3,title:"Collision -- 碰撞箱腳本",slug:"collision-碰撞箱腳本",link:"#collision-碰撞箱腳本",children:[]},{level:3,title:"將角色加入於遊戲中",slug:"將角色加入於遊戲中",link:"#將角色加入於遊戲中",children:[]}]},{level:2,title:"結語",slug:"結語",link:"#結語",children:[]}],path:"/posts/2024-11/a-ue4-fighting-game-plugin.html",pathLocale:"/",extraFields:[]},{title:"STRAsset v0.2.0 alpha 的更新公告",headers:[{level:2,title:"前文",slug:"前文",link:"#前文",children:[]},{level:2,title:"v0.2.0 alpha - 物件與特效 -",slug:"v0-2-0-alpha-物件與特效",link:"#v0-2-0-alpha-物件與特效",children:[{level:3,title:"v0.2.0 alpha 中的細微修改優化",slug:"v0-2-0-alpha-中的細微修改優化",link:"#v0-2-0-alpha-中的細微修改優化",children:[]},{level:3,title:"v0.2.0 alpha 中會處理的修正",slug:"v0-2-0-alpha-中會處理的修正",link:"#v0-2-0-alpha-中會處理的修正",children:[]},{level:3,title:"TRScript 的未來規劃",slug:"trscript-的未來規劃",link:"#trscript-的未來規劃",children:[]},{level:3,title:"Github 頁面的更動",slug:"github-頁面的更動",link:"#github-頁面的更動",children:[]}]},{level:2,title:"結語",slug:"結語",link:"#結語",children:[]}],path:"/posts/2024-11/strasset-0.2.0-alpha-announcement.html",pathLocale:"/",extraFields:[]},{title:"部落格的開始",headers:[{level:2,title:"個人介紹",slug:"個人介紹",link:"#個人介紹",children:[]},{level:2,title:"網站的內容規劃",slug:"網站的內容規劃",link:"#網站的內容規劃",children:[]},{level:2,title:"結語",slug:"結語",link:"#結語",children:[]}],path:"/posts/2024-11/the-start-of-my-blog.html",pathLocale:"/",extraFields:[]},{title:"Anim Array",headers:[{level:2,title:"創建方式",slug:"創建方式",link:"#創建方式",children:[]},{level:2,title:"初始化",slug:"初始化",link:"#初始化",children:[]}],path:"/strasset/3d/animarray.html",pathLocale:"/",extraFields:[]},{title:"Anim Set",headers:[{level:2,title:"創建方式",slug:"創建方式",link:"#創建方式",children:[]},{level:2,title:"初始化",slug:"初始化",link:"#初始化",children:[{level:3,title:"動畫藍圖",slug:"動畫藍圖",link:"#動畫藍圖",children:[]}]}],path:"/strasset/3d/animset.html",pathLocale:"/",extraFields:[]},{title:"Mesh Array",headers:[{level:2,title:"創建方式",slug:"創建方式",link:"#創建方式",children:[]},{level:2,title:"初始化",slug:"初始化",link:"#初始化",children:[]}],path:"/strasset/3d/mesharray.html",pathLocale:"/",extraFields:[]},{title:"3D",headers:[],path:"/strasset/3d/",pathLocale:"/",extraFields:[]},{title:"創建角色",headers:[{level:2,title:"1. 在專案中建立角色的資料夾",slug:"_1-在專案中建立角色的資料夾",link:"#_1-在專案中建立角色的資料夾",children:[]},{level:2,title:"2. 建立並匯入角色腳本",slug:"_2-建立並匯入角色腳本",link:"#_2-建立並匯入角色腳本",children:[]},{level:2,title:"3. 建立剩餘的要素",slug:"_3-建立剩餘的要素",link:"#_3-建立剩餘的要素",children:[]}],path:"/strasset/get-started/chara.html",pathLocale:"/",extraFields:[]},{title:"讓遊戲可以遊玩",headers:[{level:2,title:"創建遊戲模式，讓遊戲能正常執行",slug:"創建遊戲模式-讓遊戲能正常執行",link:"#創建遊戲模式-讓遊戲能正常執行",children:[]}],path:"/strasset/get-started/gamemode.html",pathLocale:"/",extraFields:[]},{title:"安裝 Git",headers:[{level:2,title:"從頭安裝 Git",slug:"從頭安裝-git",link:"#從頭安裝-git",children:[]}],path:"/strasset/get-started/git.html",pathLocale:"/",extraFields:[]},{title:"設置專案",headers:[{level:2,title:"將插件從 Github 複製到資料夾中",slug:"將插件從-github-複製到資料夾中",link:"#將插件從-github-複製到資料夾中",children:[]},{level:2,title:"在專案中啟用此插件",slug:"在專案中啟用此插件",link:"#在專案中啟用此插件",children:[]}],path:"/strasset/get-started/project.html",pathLocale:"/",extraFields:[]},{title:"快速上手",headers:[{level:2,title:"教學",slug:"教學",link:"#教學",children:[]}],path:"/strasset/get-started/",pathLocale:"/",extraFields:[]},{title:"角色腳本",headers:[],path:"/strasset/trscript/chara.html",pathLocale:"/",extraFields:[]},{title:"特效物件腳本",headers:[],path:"/strasset/trscript/effectobject.html",pathLocale:"/",extraFields:[]},{title:"TRScript",headers:[{level:2,title:"命令",slug:"命令",link:"#命令",children:[]},{level:2,title:"通用命令",slug:"通用命令",link:"#通用命令",children:[{level:3,title:"區塊專用",slug:"區塊專用",link:"#區塊專用",children:[]},{level:3,title:"狀態專用",slug:"狀態專用",link:"#狀態專用",children:[]}]},{level:2,title:"角色專用命令",slug:"角色專用命令",link:"#角色專用命令",children:[{level:3,title:"區塊專用",slug:"區塊專用-1",link:"#區塊專用-1",children:[]},{level:3,title:"狀態專用",slug:"狀態專用-1",link:"#狀態專用-1",children:[]}]},{level:2,title:"特效物件專用",slug:"特效物件專用",link:"#特效物件專用",children:[{level:3,title:"狀態專用",slug:"狀態專用-2",link:"#狀態專用-2",children:[]}]}],path:"/strasset/trscript/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[]},{title:"2024 11",headers:[],path:"/posts/2024-11/",pathLocale:"/",extraFields:[]},{title:"Posts",headers:[],path:"/posts/",pathLocale:"/",extraFields:[]},{title:"分類",headers:[],path:"/category/",pathLocale:"/",extraFields:[]},{title:"STR Asset 公告 分類",headers:[],path:"/category/str-asset-%E5%85%AC%E5%91%8A/",pathLocale:"/",extraFields:[]},{title:"日誌 分類",headers:[],path:"/category/%E6%97%A5%E8%AA%8C/",pathLocale:"/",extraFields:[]},{title:"標籤",headers:[],path:"/tag/",pathLocale:"/",extraFields:[]},{title:"標籤: 虛幻引擎",headers:[],path:"/tag/%E8%99%9B%E5%B9%BB%E5%BC%95%E6%93%8E/",pathLocale:"/",extraFields:[]},{title:"標籤: STR Asset",headers:[],path:"/tag/str-asset/",pathLocale:"/",extraFields:[]},{title:"文章",headers:[],path:"/article/",pathLocale:"/",extraFields:[]},{title:"星標",headers:[],path:"/star/",pathLocale:"/",extraFields:[]},{title:"時間軸",headers:[],path:"/timeline/",pathLocale:"/",extraFields:[]}]},8761:(e,t,l)=>{l.d(t,{U:()=>a});const a=JSON.parse('{"base":"/","lang":"zh-TW","title":"FFOWOFF","description":"FFOWOFF的個人網站","head":[],"locales":{}}')},6653:(e,t,l)=>{l.d(t,{K:()=>a});const a=JSON.parse('{"encrypt":{},"docsDir":"src","pageInfo":["Date","Category","Tag"],"footer":"","displayFooter":true,"blog":{"description":"臭魚爛蝦、遊戲開發人員"},"locales":{"/":{"lang":"zh-TW","navbarLocales":{"langName":"繁體中文","selectLangAriaLabel":"選擇語言"},"metaLocales":{"author":"作者","date":"寫作日期","origin":"原創","views":"訪問量","category":"分類","tag":"標籤","readingTime":"閱讀時間","words":"字數","toc":"此頁內容","prev":"上一頁","next":"下一頁","lastUpdated":"上次編輯於","contributors":"貢獻者","editLink":"編輯此頁","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分類","tag":"標籤","timeline":"時間軸","timelineTitle":"昨日不在","all":"全部","intro":"個人介紹","star":"星標","empty":"$text 為空"},"paginationLocales":{"prev":"上一頁","next":"下一頁","navigate":"跳轉到","action":"前往","errorText":"請輸入 1 到 $page 之前的頁碼！"},"outlookLocales":{"themeColor":"主題色","darkmode":"主題模式","fullscreen":"全屏"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"頁面不存在","notFoundMsg":["這裡什麼也沒有","我們是怎麼來到這兒的？","這 是 四 零 四 !","看起来你訪問了一個失效的鏈結"],"back":"返回上一頁","home":"帶我回家"},"navbar":[{"text":"文章","link":"/article/","icon":"fa6-solid:book"},{"text":"STRAsset 文檔","link":"/strasset/","icon":"fa6-solid:lightbulb"},"/timeline/"],"sidebar":{"/posts/":[{"text":"文章","icon":"fa6-solid:book","children":[{"text":"2024-11","icon":"fa6-solid:calendar","prefix":"2024-11/","collapsible":true,"expanded":true,"children":"structure"}]}],"/strasset/":[{"text":"快速上手","link":"get-started/","icon":"fa6-solid:leaf","prefix":"get-started/","collapsible":true,"children":["git.md","project.md","chara.md","gamemode.md"]},{"text":"STRAsset 文檔","link":"/strasset/","icon":"fa6-solid:lightbulb","children":["trscript.md","collision.md",{"text":"3D","icon":"fa6-solid:cube","prefix":"3d/","collapsible":true,"children":["mesharray.md","animset.md","animarray.md"]}]}]}}}}')},4923:(e,t,l)=>{},8123:(e,t,l)=>{l.d(t,{v:()=>a});const a={"/posts/2024-11/":["the-start-of-my-blog","a-ue4-fighting-game-plugin","strasset-0.2.0-alpha-announcement"]}},2878:(e,t,l)=>{l.d(t,{P:()=>a});const a={}}},e=>{e.O(0,[671,146],(()=>e(e.s=8731))),e.O()}]);