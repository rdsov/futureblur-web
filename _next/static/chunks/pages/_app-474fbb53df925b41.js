(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(8484)}])},292:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893),a=r(3695),u=r.n(a),o=r(7294);function i(){var e=(0,o.useState)(!1),t=e[0],r=e[1],a=function(){r(!t)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:u().navBarWrapper,children:(0,n.jsxs)("div",{className:u().navBar,children:[(0,n.jsx)("div",{className:u().left,children:(0,n.jsx)("a",{href:"https://futureblur.com",style:{display:"block"},children:(0,n.jsx)("img",{className:u().logo,src:"../futureblur-light.png",alt:"futureblur logo"})})}),t?(0,n.jsx)("div",{className:u().burgerActive,onClick:a}):(0,n.jsx)("div",{className:u().burger,onClick:a}),t?(0,n.jsxs)("div",{className:u().rightActive,children:[(0,n.jsx)("a",{className:u().navLink,href:"https://instagram.com/itsfutureblur",children:"Virtual Gallery"}),(0,n.jsx)("a",{className:u().navLink,href:"#",children:"About"}),(0,n.jsx)("a",{className:u().navLink,href:"https://futureblur.com/contact",children:"Contact"})]}):(0,n.jsxs)("div",{className:u().right,children:[(0,n.jsx)("a",{className:u().navLink,href:"https://instagram.com/itsfutureblur",children:"Virtual Gallery"}),(0,n.jsx)("a",{className:u().navLink,href:"#",children:"About"}),(0,n.jsx)("a",{className:u().navLink,href:"https://futureblur.com/contact",children:"Contact"})]})]})})})}},7645:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}t.default=function(e,t){var r=u.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};o=e,s=Promise,(null!=s&&"undefined"!==typeof Symbol&&s[Symbol.hasInstance]?s[Symbol.hasInstance](o):o instanceof s)?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=a({},n,e));var o,s;var l=n=a({},n,t);if(l.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(l.suspense)return r(l);n.loadableGenerated&&delete(n=a({},n,n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,i(r,n);delete n.ssr}return r(n)};o(r(7294));var u=o(r(4588));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}},3644:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=a},4588:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},s=r(2021),l=r(3644);var c=[],f=[],d=!1;function p(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var b=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,r,a;return t=e,(r=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;if(t.loading){if("number"===typeof r.delay)if(0===r.delay)this._state.pastDelay=!0;else{var n=this;this._delay=setTimeout((function(){n._update({pastDelay:!0})}),r.delay)}if("number"===typeof r.timeout){var a=this;this._timeout=setTimeout((function(){a._update({timedOut:!0})}),r.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&n(t.prototype,r),a&&n(t,a),e}();function v(e){return function(e,t){var r=function(){if(!a){var t=new b(e,n);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()},n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=i.default.lazy(n.loader));var a=null;if(!d&&!n.suspense){var o=n.webpack?n.webpack():n.modules;o&&f.push((function(e){var t=!0,n=!1,a=void 0;try{for(var u,i=o[Symbol.iterator]();!(t=(u=i.next()).done);t=!0){var s=u.value;if(-1!==e.indexOf(s))return r()}}catch(l){n=!0,a=l}finally{try{t||null==i.return||i.return()}finally{if(n)throw a}}}))}var c=n.suspense?function(e,t){return i.default.createElement(n.lazy,u({},e,{ref:t}))}:function(e,t){r();var u=i.default.useContext(l.LoadableContext),o=s.useSubscription(a);return i.default.useImperativeHandle(t,(function(){return{retry:a.retry}}),[]),u&&Array.isArray(n.modules)&&n.modules.forEach((function(e){u(e)})),i.default.useMemo((function(){return o.loading||o.error?i.default.createElement(n.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:a.retry}):o.loaded?i.default.createElement(function(e){return e&&e.__esModule?e.default:e}(o.loaded),e):null}),[e,o])};return c.preload=function(){return!n.suspense&&r()},c.displayName="LoadableComponent",i.default.forwardRef(c)}(p,e)}function h(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return h(e,t)}))}v.preloadAll=function(){return new Promise((function(e,t){h(c).then(e,t)}))},v.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return d=!0,t()};h(f,e).then(r,r)}))},window.__NEXT_PRELOADREADY=v.preloadReady;var m=v;t.default=m},8484:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=(r(6774),r(5152)),u=(r(292),r(4298));function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}var s=(0,a.default)((function(){return Promise.resolve().then(r.bind(r,292))}),{loadableGenerated:{webpack:function(){return[292]}},ssr:!1});t.default=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.default,{type:"module",src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"}),(0,n.jsx)(u.default,{noModule:!0,src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"}),(0,n.jsx)(s,{}),(0,n.jsx)(t,i({},r))]})}},3695:function(e){e.exports={navBarWrapper:"Header_navBarWrapper__CSrJA",navBar:"Header_navBar__ijbgy",left:"Header_left__9aIGe",logo:"Header_logo__6vBZG",burger:"Header_burger__ISCur",burgerActive:"Header_burgerActive__N08Dh",right:"Header_right__K2Msm",rightActive:"Header_rightActive__3FXtg","nav-bar-slide":"Header_nav-bar-slide__eS_6j",navLink:"Header_navLink__1cl8b"}},6774:function(){},2021:function(e,t,r){(()=>{"use strict";var t={800:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}()?Object.assign:function(e,u){for(var o,i,s=a(e),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))r.call(o,c)&&(s[c]=o[c]);if(t){i=t(o);for(var f=0;f<i.length;f++)n.call(o,i[f])&&(s[i[f]]=o[i[f]])}}return s}},569:(e,t,r)=>{0},403:(e,t,r)=>{var n=r(800),a=r(522);t.useSubscription=function(e){var t=e.getCurrentValue,r=e.subscribe,u=a.useState((function(){return{getCurrentValue:t,subscribe:r,value:t()}}));e=u[0];var o=u[1];return u=e.value,e.getCurrentValue===t&&e.subscribe===r||(u=t(),o({getCurrentValue:t,subscribe:r,value:u})),a.useDebugValue(u),a.useEffect((function(){function e(){if(!a){var e=t();o((function(a){return a.getCurrentValue!==t||a.subscribe!==r||a.value===e?a:n({},a,{value:e})}))}}var a=!1,u=r(e);return e(),function(){a=!0,u()}}),[t,r]),u}},138:(e,t,r)=>{e.exports=r(403)},522:e=>{e.exports=r(7294)}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var u=n[e]={exports:{}},o=!0;try{t[e](u,u.exports,a),o=!1}finally{o&&delete n[e]}return u.exports}a.ab="//";var u=a(138);e.exports=u})()},5152:function(e,t,r){e.exports=r(7645)},4298:function(e,t,r){e.exports=r(3573)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(880)}));var r=e.O();_N_E=r}]);