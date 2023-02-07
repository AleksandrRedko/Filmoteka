(()=>{"use strict";var r,n,e,t,o,a,i,s,c,l,p,u,d,f,h={890:(r,n,e)=>{e.d(n,{Z:()=>b});var t=e(81),o=e.n(t),a=e(645),i=e.n(a),s=e(667),c=e.n(s),l=new URL(e(238),e.b),p=new URL(e(452),e.b),u=new URL(e(862),e.b),d=i()(o()),f=c()(l),h=c()(p),g=c()(u);d.push([r.id,"*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\nul {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nli {\r\n    list-style: none;\r\n}\r\n\r\nbody {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nheader {\r\n    max-width: 1024px;\r\n    height: 230px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background: linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)), url("+f+");\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n\r\n}\r\n\r\n\r\n.header__container {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 41px 0 60px 0;\r\n\r\n    border: 1px solid red;\r\n\r\n    width: 882px;\r\n    height: 100%;\r\n\r\n}\r\n\r\n/* логотип */\r\n.logo {\r\n\r\n    font-size: 30px;\r\n    line-height: 1.16;\r\n\r\n    color: #FFFFFF\r\n}\r\n\r\n.logo__svg {\r\n    display: inline-block;\r\n\r\n    height: 24px;\r\n}\r\n\r\n\r\n\r\n\r\n/* навигация */\r\n.nav_container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: end;\r\n    margin-bottom: 37px;\r\n}\r\n\r\n.nav__list {\r\n    display: flex;\r\n}\r\n\r\n.nav__list_item:not(:last-child) {\r\n    margin-right: 39px;\r\n}\r\n\r\n.nav__list_link {\r\n    line-height: 1.16;\r\n    text-transform: uppercase;\r\n    color: #FFFFFF;\r\n}\r\n\r\n/* подчеркивание текущей страници  */\r\n.current {\r\n    position: relative;\r\n}\r\n\r\n.current::after {\r\n    content: ' ';\r\n    position: absolute;\r\n    top: 14px;\r\n    left: 0px;\r\n    width: 100%;\r\n\r\n\r\n    border: 1.5px solid #FF6B08;\r\n    background-color: #FF6B08;\r\n\r\n}\r\n\r\n\r\n\r\n/* форма инпут */\r\n.header__form {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.search__form {\r\n    position: relative;\r\n}\r\n\r\n.search__form_input,\r\n.search__form_input:focus {\r\n\r\n\r\n    width: 336px;\r\n    outline: none;\r\n    border: none;\r\n    border-bottom: 0.5px solid #FFFFFF;\r\n    background-color: transparent;\r\n\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 1.14;\r\n    color: #FFFFFF\r\n}\r\n\r\n.search__form_input::placeholder {\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 1.14;\r\n    color: #FFFFFF\r\n}\r\n\r\n/* иконка поиска */\r\n.btn__search {\r\n    position: absolute;\r\n    width: 12px;\r\n    height: 12px;\r\n    right: 0;\r\n    top: 0;\r\n\r\n\r\n    background-color: transparent;\r\n    border: none;\r\n    background: url("+h+");\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* кнопки */\r\n.button_list {\r\n    display: none;\r\n    /* display: flex; */\r\n    justify-content: center;\r\n}\r\n\r\n.button_list-item:not(:last-child) {\r\n    margin-right: 15px;\r\n}\r\n\r\n.not-active {\r\n    min-width: 136px;\r\n    padding: 14px 38px 12px;\r\n    background-color: transparent;\r\n    border: 1px solid #FFFFFF;\r\n    border-radius: 5px;\r\n\r\n    line-height: 1.33;\r\n    text-transform: uppercase;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.button_list-item:hover .not-active {\r\n    border: 1px solid transparent;\r\n    \r\n    background: #FF6B01;\r\n}\r\n\r\n/* library */\r\n\r\n.my__library{\r\nbackground: linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)), url("+g+");\r\n}",""]);const b=d},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<r.length;l++){var p=[].concat(r[l]);t&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},667:r=>{r.exports=function(r,n){return n||(n={}),r?(r=String(r.__esModule?r.default:r),/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),n.hash&&(r+=n.hash),/["'() \t\n]|(%20)/.test(r)||n.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r):r}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],s=0;s<r.length;s++){var c=r[s],l=t.base?c[0]+t.base:c[0],p=a[l]||0,u="".concat(l," ").concat(p);a[l]=p+1;var d=e(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var h=o(f,t);t.byIndex=s,n.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var s=e(a[i]);n[s].references--}for(var c=t(r,o),l=0;l<a.length;l++){var p=e(a[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=c}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}},238:(r,n,e)=>{r.exports=e.p+"ed3ed6ca47e808795820.png"},862:(r,n,e)=>{r.exports=e.p+"db93897b3aa5eaa112ac.png"},452:(r,n,e)=>{r.exports=e.p+"09e3411f593307d96dad.svg"}},g={};function b(r){var n=g[r];if(void 0!==n)return n.exports;var e=g[r]={id:r,exports:{}};return h[r](e,e.exports,b),e.exports}b.m=h,b.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return b.d(n,{a:n}),n},b.d=(r,n)=>{for(var e in n)b.o(n,e)&&!b.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),b.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;b.g.importScripts&&(r=b.g.location+"");var n=b.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var e=n.getElementsByTagName("script");e.length&&(r=e[e.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),b.p=r})(),b.b=document.baseURI||self.location.href,b.nc=void 0,r=b(379),n=b.n(r),e=b(795),t=b.n(e),o=b(569),a=b.n(o),i=b(565),s=b.n(i),c=b(216),l=b.n(c),p=b(589),u=b.n(p),d=b(890),(f={}).styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=l(),n()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals})();