(this["webpackJsonphack-the-beer"]=this["webpackJsonphack-the-beer"]||[]).push([[0],{14:function(e,n,t){e.exports=t(22)},22:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(5),i=t(0),c=t.n(i),o=t(8),u=t(12),s=t(10),l=(Object(u.a)([576,992,1200,1300].map((function(e){return"@media (min-width: ".concat(e,"px)")}))),t(4)),f={size:32,rows:10,cols:10,spreadAfter:5};function m(){var e=Object(a.a)(["\n  position: relative;\n  width: ","px;\n  font-size: 0;\n"]);return m=function(){return e},e}var h=s.a.div(m(),f.cols*f.size),b=function(e){var n=e.counter,t=e.gameState,a=e.items,r=e.onCellClick,o=e.onContextClick,u=Object(i.useState)(!1),s=Object(l.a)(u,2),f=s[0],m=s[1],b=Object(i.useCallback)((function(){m(!0)}),[]),d=Object(i.useCallback)((function(){m(!1)}),[]);return c.a.createElement(h,{onMouseDown:b,onMouseUp:d},c.a.createElement(y,null),c.a.createElement(w,{counter:n,stress:f,gameState:t}),a.map((function(e){return c.a.createElement(g,{key:e.position,gameState:t,item:e,onClick:r,onContextClick:o})})),c.a.createElement(V,null))};function d(){var e=Object(a.a)(["\n  width: ","px;\n  height: ","px;\n  display: inline-block;\n  font-size: 16px;\n  overflow: hidden;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.5;\n  }\n"]);return d=function(){return e},e}var p=s.a.div(d(),f.size,f.size),v=function(e,n){var t=e.isRevealed,a=e.isVirus,r=e.isUnderQuarantine,i=e.isCure,c=e.hint;return t||"ongoing"!==n?r?"quarantine":a?"virus":i?"cure":c:"untouched"},g=function(e){var n=e.gameState,t=e.item,a=e.onClick,r=e.onContextClick,o=Object(i.useCallback)((function(){a(t)}),[t,a]),u=Object(i.useCallback)((function(e){e.preventDefault(),r(t)}),[t,r]);return c.a.createElement(p,{onClick:o,onContextMenu:u},c.a.createElement("img",{src:"/images/".concat(v(t,n),".png"),alt:""}))};function j(){var e=Object(a.a)(["\n  width: ","px;\n  height: ","px;\n  background-color: white;\n  display: flex;\n"]);return j=function(){return e},e}var k=s.a.div(j(),f.size*f.cols,2*f.size),O=function(e){switch(e){case"lost":case"lost-quarantine":return"fail";case"won":return"success";default:return"inprogress"}},w=function(e){var n=e.gameState,t=e.stress||"lost"===n||"lost-quarantine"===n;return c.a.createElement(k,null,c.a.createElement("img",{src:"/images/nurse-".concat(t?"stress":"normal",".png"),alt:""}),c.a.createElement("img",{src:"/images/".concat(O(n),".png"),alt:""}))};function C(){var e=Object(a.a)(["\n  background-color: #181425;\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  z-index: 2;\n\n  &:hover img {\n    opacity: 0.75;\n  }\n"]);return C=function(){return e},e}var E=["splash.png","rules.png"],x=s.a.div(C()),y=function(){var e=Object(i.useState)(0),n=Object(l.a)(e,2),t=n[0],a=n[1],r=Object(i.useCallback)((function(){a(t+1)}),[t]);return E[t]?c.a.createElement(x,null,c.a.createElement("img",{src:"/images/".concat(E[t]),onClick:r,alt:""})):null};function z(){var e=Object(a.a)(["\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  font-family: sans-serif;\n  background-color: #8b9bb4;\n  padding: 5px 10px;\n  opacity: 0.3;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  a {\n    color: #ffffff;\n  }\n"]);return z=function(){return e},e}var S=s.a.div(z()),V=function(){return c.a.createElement(S,null,c.a.createElement("a",{href:"https://twitter.com/hszanowski"},"@hszanowski"),c.a.createElement("a",{href:"https://twitter.com/wesgabes"},"@wesgabes"),c.a.createElement("a",{href:"https://github.com/hsz/corona-attacks"},"github"),c.a.createElement("a",{href:"/"},"restart"))},R=t(6);t(21);function q(){var e=Object(a.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return q=function(){return e},e}var M=s.a.div(q()),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.rows*f.cols,n=Object(R.shuffle)(Object(R.range)(e)),t=Object(l.a)(n,3),a=t[0],r=t[1],i=t[2];return Object(R.range)(e).map((function(e){return{position:e,isVirus:e===a||e===r,isCure:e===i,hint:0}}))}(),A=function(e){if(!e)return[];var n=f.cols,t=f.rows,a=e.position;return[a-1,a+1,a-1-n,a-n,a-n+1,a+n-1,a+n,a+n+1].filter((function(e){return!(e<0||e>=n*t||a%n===0&&e%n===n-1||a%n===9&&e%n===0)})).map((function(e){return U[e]}))},B=function(){var e=Object(i.useState)(0),n=Object(l.a)(e,2),t=n[0],a=n[1],r=Object(i.useState)("ongoing"),o=Object(l.a)(r,2),u=o[0],s=o[1];Object(i.useEffect)((function(){"ongoing"!==u&&U.forEach((function(e){e.isRevealed=!0}))}),[u]);var m=Object(i.useCallback)((function(e,n){e.isRevealed||(n(),a(t+1),e.isRevealed=!0,function(e){if(e>f.spreadAfter){var n=Object(R.shuffle)(A(Object(R.shuffle)(U).find((function(e){return e.isVirus})))).find((function(e){return!e.isRevealed&&!e.isCure&&!e.isVirus}));n&&(n.isVirus=!0)}U.forEach((function(e){e.hint=A(e).reduce((function(e,n){return e+ +n.isVirus}),0)}))}(t))}),[t]),h=Object(i.useCallback)((function(e){m(e,(function(){e.isVirus&&s("lost"),e.isCure&&s("won")}))}),[m]),d=Object(i.useCallback)((function(e){m(e,(function(){e.isVirus?e.isUnderQuarantine=!0:s("lost-quarantine")}))}),[m]);return c.a.createElement(M,null,c.a.createElement(b,{gameState:u,counter:t,items:U,onCellClick:h,onContextClick:d}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(){var e=Object(a.a)(["\n  body,\n  html {\n    height: 100%;\n    background-color: #181425;\n    user-select: none;\n  }\n"]);return D=function(){return e},e}var J=Object(r.c)(D()),Q=document.getElementById("root");((null===Q||void 0===Q?void 0:Q.hasChildNodes())?o.hydrate:o.render)(c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,{styles:J}),c.a.createElement(B,null)),Q),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.54dc94af.chunk.js.map