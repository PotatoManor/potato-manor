(function(e){function t(t){for(var r,a,u=t[0],i=t[1],f=t[2],l=0,s=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(s.length)s.shift()();return c.push.apply(c,f||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-ff022636":"f18ccf5a","chunk-65e61982":"18fb52b7","chunk-703aa077":"cf10a6d1"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-ff022636":1,"chunk-65e61982":1,"chunk-703aa077":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-ff022636":"c8244300","chunk-65e61982":"0f865683","chunk-703aa077":"dc30b30f"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var f=c[u],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===o))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){f=s[u],l=f.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var s=new Error;f=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var d=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=t,f=f.slice();for(var s=0;s<f.length;s++)t(f[s]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},18:function(e,t){},19:function(e,t){},2:function(e,t){},20:function(e,t){},"209b":function(e,t,n){},21:function(e,t){},3:function(e,t){},4:function(e,t){},4360:function(e,t,n){"use strict";var r=n("2909"),a=(n("99af"),n("5502"));t["a"]=Object(a["a"])({state:{accounts:[],provider:null,currentBalance:"",locale:"",initem:"",price:"",chartData:[]},mutations:{updateAccount:function(e,t){e.accounts=t},updateProvider:function(e,t){e.provider=t},updateCurrentBalance:function(e,t){e.currentBalance=t},updateLocale:function(e,t){e.locale=t},updatePrice:function(e,t){e.price=t},initChartData:function(e,t){e.chartData=[].concat(Object(r["a"])(t),Object(r["a"])(e.chartData))},updateChartData:function(e,t){e.chartData.push(t)},updateInitem:function(e,t){e.initem=t}},actions:{},modules:{}})},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1"),n("1276"),n("ac1f"),n("159b"),n("5319"),n("caad6"),n("2532"),n("fb6a");var r=n("7a23"),a={class:"app-content"};function o(e,t,n,o,c,u){var i=Object(r["H"])("router-view");return Object(r["A"])(),Object(r["h"])("div",a,[Object(r["k"])(i,null,{default:Object(r["Q"])((function(t){var n=t.Component;return[(Object(r["A"])(),Object(r["h"])(r["b"],null,[e.$route.meta.keepAlive?(Object(r["A"])(),Object(r["h"])(Object(r["J"])(n),{key:0})):Object(r["i"])("",!0)],1024)),e.$route.meta.keepAlive?Object(r["i"])("",!0):(Object(r["A"])(),Object(r["h"])(Object(r["J"])(n),{key:0}))]})),_:1})])}var c=n("ee10"),u={name:"App",setup:function(){c["a"].initWeb3(),document.documentElement.addEventListener("touchstart",(function(e){e.touches.length>1&&e.preventDefault()}),!1);var e=0;document.addEventListener("touchend",(function(t){var n=Date.now();n-e<=300&&t.preventDefault(),e=n}),!1),document.addEventListener("gesturestart",(function(e){e.preventDefault()}))}},i=(n("e8ae"),n("d959")),f=n.n(i);const l=f()(u,[["render",o]]);var s=l,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),p=[{path:"/",name:"Index",component:function(){return Promise.all([n.e("chunk-ff022636"),n.e("chunk-703aa077")]).then(n.bind(null,"37f9"))},meta:{title:""}},{path:"/game",name:"Game",component:function(){return Promise.all([n.e("chunk-ff022636"),n.e("chunk-65e61982")]).then(n.bind(null,"88e6"))},meta:{title:""}}],b=Object(d["a"])({history:Object(d["b"])(),routes:p});b.beforeEach((function(e){e.meta.title&&(document.title=e.meta.title)}));var h=b,m=n("4360"),v=n("b970"),g=(n("157a"),n("98b3")),w=n("79fa"),k=n("b9b9"),O=n.n(k),y=g["b"].get()||"en";Object(w["c"])(y);var j=function(){history.length>0?h.go(-1):h.push({name:"Welcome"})},P=function(e){if(!e||"0"===e)return{};var t=decodeURIComponent(e).split("&"),n={};return t.forEach((function(e){var t=e.split("=");1===t.length?n.id=t[0]:n[t[0]]=t[1]})),n},S=window.location.href.replace(/#/g,"").replace(/\?utm_source=tokenpocket/g,"");if(S.includes("?")){var x=S.slice(S.indexOf("?")+1,S.length),A=P(x);A.intro&&g["a"].set(A.intro)}var C=Object(r["g"])(s);C.config.globalProperties.$goBack=j,C.config.globalProperties.$dateformat=O.a,C.use(h).use(m["a"]).use(w["b"]).use(v["a"]).mount("#app")},6:function(e,t){},7:function(e,t){},"79fa":function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return v})),n.d(t,"a",(function(){return g}));var r=n("5530"),a=n("47e2"),o=n("98b3"),c=n("4360"),u=n("cb6e"),i=n("edd4"),f=n("3c69"),l=n("c6e7"),s=n.n(l),d=n("91f4"),p=n.n(d);function b(e){switch(e){case"zh-tw":f["a"].use("zh-TW",s.a);break;case"en":f["a"].use("en-US",p.a);break}}function h(e){b(e)}var m=Object(a["a"])({locale:"en",messages:{"zh-tw":Object(r["a"])({},u),en:Object(r["a"])({},i)}}),v=function(e){m.global.locale=e,c["a"].commit("updateLocale",e),o["b"].set(e),h(e)},g=function(){return m&&m.global.locale}},8:function(e,t){},9:function(e,t){},"98b3":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=c("intro",localStorage),a=c("locale",localStorage);c("initemStorage",sessionStorage);function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:localStorage;try{n.setItem(e,t)}catch(r){}}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:localStorage;return{get:function(){return t.getItem(e)},set:function(n){o(e,n,t)},remove:function(){t.removeItem(e)}}}},cb6e:function(e){e.exports=JSON.parse('{"game":{"盲盒":"盲盒","授權":"授權","連線錢包":"連線錢包","授權成功":"授權成功","USDT餘額不足":"USDT餘額不足","開心收下":"開心收下","土豆幣":"土豆幣","我的道具":"我的道具","立即開啟":"立即開啟"},"index":{"複製失敗":"複製失敗","複製成功!":"複製成功！"},"web3":{"連線錢包":"連線錢包","暫未檢測到錢包外掛，請安裝MetaMask錢包， 或在imtoken里打開":"暫未檢測到錢包外掛，請安裝MetaMask錢包， 或在imtoken里打開"}}')},e8ae:function(e,t,n){"use strict";n("209b")},edd4:function(e){e.exports=JSON.parse('{"game":{"盲盒":"Blind Box","連線錢包":"Connect Wallet","授權":"Authorization","授權成功":"Authorized success","USDT餘額不足":"Usdt balance is less than","開心收下":"Happy to accept","土豆幣":"Potato","我的道具":"My props","立即開啟":"Immediately open"},"index":{"複製失敗":"Copy failed","複製成功!":"Copy success!"},"web3":{"連線錢包":"Connect wallet","暫未檢測到錢包外掛，請安裝MetaMask錢包， 或在imtoken里打開":"The wallet plug-in is not detected yet, please install MetaMask wallet or open it in imtoken"}}')},ee10:function(e,t,n){"use strict";var r=n("1da1"),a=(n("96cf"),n("d3b7"),n("99e5")),o=n.n(a),c=n("4360"),u=n("d399"),i=n("47e2"),f={web3:{},t:null,factoryContract:{},web3Provider:{},getBlance:function(e){f.web3.eth.getBalance(e).then((function(e){c["a"].commit("updateCurrentBalance",f.web3.utils.fromWei(e,"ether"))}))},initWeb3:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=14;break}return f.web3Provider=window.ethereum,window.ethereum.on("accountsChanged",(function(e){c["a"].commit("updateAccount",e)})),f.web3=new o.a(f.web3Provider),e.prev=4,e.next=7,window.ethereum.enable();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](4),Promise.reject(e.t0);case 12:e.next=15;break;case 14:window.web3?(f.web3Provider=window.web3.currentProvider,f.web3=new o.a(f.web3Provider)):(f.web3.t||(f.web3.t=Object(i["b"])().t),Object(u["a"])(f.web3.t("web3.暫未檢測到錢包外掛，請安裝MetaMask錢包， 或在imtoken里打開")));case 15:c["a"].commit("updateProvider",f.web3),f.web3.eth.getAccounts().then((function(e){return c["a"].commit("updateAccount",e),f.getBlance(e[0])}));case 17:case"end":return e.stop()}}),e,null,[[4,9]])})));function t(){return e.apply(this,arguments)}return t}()};t["a"]=f}});
//# sourceMappingURL=app.cfbe5f0d.js.map