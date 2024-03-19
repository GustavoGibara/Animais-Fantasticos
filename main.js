/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={633:(t,e,r)=>{var n=r(738).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},a=Object.prototype,i=a.hasOwnProperty,c=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},s=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(e){h=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o=e&&e.prototype instanceof L?e:L,a=Object.create(o.prototype),i=new N(n||[]);return c(a,"_invoke",{value:O(t,r,i)}),a}function v(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=d;var p="suspendedStart",m="suspendedYield",y="executing",g="completed",x={};function L(){}function b(){}function w(){}var E={};h(E,s,(function(){return this}));var S=Object.getPrototypeOf,_=S&&S(S(M([])));_&&_!==a&&i.call(_,s)&&(E=_);var k=w.prototype=L.prototype=Object.create(E);function j(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function q(t,e){function r(o,a,c,u){var s=v(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var o;c(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function O(t,r,n){var o=p;return function(a,i){if(o===y)throw new Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=T(c,n);if(u){if(u===x)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=v(t,r,n);if("normal"===s.type){if(o=n.done?g:m,s.arg===x)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function T(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,T(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),x;var a=v(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,x;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,x):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,x)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function M(t){if(t||""===t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(i.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(n(t)+" is not iterable")}return b.prototype=w,c(k,"constructor",{value:w,configurable:!0}),c(w,"constructor",{value:b,configurable:!0}),b.displayName=h(w,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,h(t,f,"GeneratorFunction")),t.prototype=Object.create(k),t},r.awrap=function(t){return{__await:t}},j(q.prototype),h(q.prototype,l,(function(){return this})),r.AsyncIterator=q,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new q(d(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(k),h(k,f,"Generator"),h(k,s,(function(){return this})),h(k,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=M,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,x):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),x},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),x}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:M(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),x}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},738:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},756:(t,e,r)=>{var n=r(633)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,r){var n=document.documentElement,o="data-outside";function a(i){t.contains(i.target)||(t.removeAttribute(o),e.forEach((function(t){n.removeEventListener(t,a)})),r())}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){return n.addEventListener(t,a)}))})),t.setAttribute(o,""))}var e=document.querySelector('[data-menu="button"]'),n=document.querySelector('[data-menu="list"]');function o(){n.classList.add("active"),e.classList.add("active"),t(n,["touchstart","click"],(function(){n.classList.remove("active"),e.classList.remove("active")}))}function a(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)}))}}e&&["touchstart","click"].forEach((function(t){e.addEventListener(t,o)}));var c,u,s,l,f,h,d,v,p,m,y=r(756),g=r.n(y);function x(){var t,e=document.querySelector(".numeros");(t=new MutationObserver((function(e){e[0].target.classList.contains("ativo")&&(t.disconnect(),document.querySelectorAll("[data-numero]").forEach((function(t){var e=+t.innerText,r=0,n=setInterval((function(){r+=Math.floor(e/100),t.innerText=r,r>e&&(clearInterval(n),t.innerText=e)}),25*Math.random())})))}))).observe(e,{attributes:!0})}!function(){var t=document.querySelector(".bitcoin");function e(){return(e=i(g().mark((function e(){var r,n;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.blockchain.com/ticker");case 3:return r=e.sent,e.next=6,r.json();case 6:n=e.sent,t.innerText=(1e3/n.BRL.sell).toFixed(4),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}(),function(){var t=document.querySelector(".numeros-grid");function e(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.specie,"</h3><span data-numero>").concat(t.numero,"</span>"),e}function r(){return(r=i(g().mark((function r(n){var o;return g().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch(n);case 3:return o=r.sent,r.next=6,o.json();case 6:r.sent.forEach((function(r){var n=e(r);t.appendChild(n)})),x(),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),console.log(r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))).apply(this,arguments)}!function(t){r.apply(this,arguments)}("./animais.json")}(),u=(c=document.querySelector("[data-semana]")).dataset.semana.split(",").map(Number),s=c.dataset.horario.split(",").map(Number),f=(l=new Date).getDay(),h=l.getHours(),d=u.includes(f),v=h>=s[0]&&h<s[1],d&&v&&c.classList.add("aberto"),function(){var e=document.querySelectorAll("[data-drop-down]"),r=["touchstart","click"];function n(e){var n=this;e.preventDefault(),this.classList.toggle("active"),t.element=this,t(this,r,(function(){n.classList.remove("active")}))}e.forEach((function(t){r.forEach((function(e){t.addEventListener(e,n)}))}))}(),function(){var t=document.querySelectorAll("[data-tooltip]"),e={handleEvent:function(t){this.tooltipBox.style.top="".concat(t.pageY+20,"px"),this.tooltipBox.style.left="".concat(t.pageX+20,"px")}},r={handleEvent:function(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",r),this.element.removeEventListener("mousemove",e)}};function n(){var t=function(t){var e=document.createElement("div"),r=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=r,document.body.appendChild(e),e}(this);e.tooltipBox=t,this.addEventListener("mousemove",e),r.tooltipBox=t,r.element=this,this.addEventListener("mouseleave",r)}t.forEach((function(t){t.addEventListener("mouseover",n)}))}(),function(){var t=document.querySelector('[data-modal="abrir"]'),e=document.querySelector('[data-modal="fechar"]'),r=document.querySelector('[data-modal="container"]');function n(t){t.preventDefault(),r.classList.toggle("ativo")}t&&e&&r&&(r.addEventListener("click",(function(t){t.preventDefault(),t.target===this&&r.classList.remove("ativo")})),t.addEventListener("click",n),e.addEventListener("click",n))}(),function(){var t=document.querySelectorAll('[data-anime="accordion"] dt'),e="ativo";function r(t){t.currentTarget.nextElementSibling.classList.toggle(e),t.currentTarget.classList.toggle(e)}t&&(t[0].classList.add(e),t[0].nextElementSibling.classList.add(e),t.forEach((function(t){t.addEventListener("click",r)})))}(),function(){var t=document.querySelectorAll('[data-anime="scroll"]'),e=.6*window.innerHeight;function r(){t.forEach((function(t){t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}t&&(r(),window.addEventListener("scroll",r))}(),function(){var t=document.querySelectorAll('a[href^="#"]');function e(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}t&&t.forEach((function(t){t.addEventListener("click",e)}))}(),p=document.querySelectorAll('[data-tab="menu"] li'),(m=document.querySelectorAll('[data-tab="content"] section'))[0].classList.add("ativo"),p&&m&&p.forEach((function(t,e){t.addEventListener("click",(function(){!function(t){m.forEach((function(e){e.classList.remove("ativo",m[t].dataset.anime)})),m[t].classList.add("ativo",m[t].dataset.anime)}(e)}))}))})()})();