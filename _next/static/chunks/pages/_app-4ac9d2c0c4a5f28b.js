(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},1058:function(e,t,n){"use strict";t.Z=void 0;var r=l(n(5152)),i=l(n(5675)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){u=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=function(e){var t=e.src,n=e.width,r=function(e){var t,n=e.filePath,r=(null===(t=n.split("\\").pop())||void 0===t?void 0:t.split("/").pop())||"",i=n.split(r).shift(),o=n.split(".").pop();return{path:i,filename:r.substring(0,r.lastIndexOf("."))||r,extension:o||""}}({filePath:t}),i=r.filename,o=r.path,a=r.extension;if(!["JPG","JPEG","WEBP","PNG","AVIF"].includes(a.toUpperCase()))return t;var u=a;["JPG","JPEG","PNG"].includes(a.toUpperCase())&&(u="WEBP");var l=o;return"/"!=(null===l||void 0===l?void 0:l.substr(-1))&&(l+="/"),"".concat(l,"nextImageExportOptimizer/").concat(i,"-opt-").concat(n,".").concat(u.toUpperCase())},f=function(e){return e.src};function p(e){var t=e.src,n=e.priority,r=void 0!==n&&n,a=e.loading,l=e.lazyRoot,p=void 0===l?null:l,h=e.lazyBoundary,g=void 0===h?"200px":h,v=e.className,m=e.quality,y=e.width,b=e.height,_=e.objectFit,w=e.objectPosition,j=e.onLoadingComplete,x=e.placeholder,O=void 0===x?"empty":x,S=e.blurDataURL,k=s(e,["src","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),z=c(o.useState(!1),2),P=z[0],A=z[1];return o.default.createElement(i.default,u({},k,y&&{width:y},b&&{height:b},r&&{priority:r},a&&{loading:a},p&&{lazyRoot:p},g&&{lazyBoundary:g},v&&{className:v},m&&{quality:m},_&&{objectFit:_},w&&{objectPosition:w},j&&{onLoadingComplete:j},O&&{placeholder:O},S&&{blurDataURL:S},{loader:P?f:d,src:t,onError:function(){A(!0)}}))}var h=r.default((function(){return Promise.resolve(p)}),{ssr:!1});t.Z=h},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2373)}])},7673:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(5893),i=n(5606),o=n.n(i),a=n(7294),u=n(1058);function l(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return(0,r.jsxs)("div",{className:o().headerContainer,children:[(0,r.jsx)("div",{className:o().messageBanner,children:(0,r.jsxs)("p",{className:o().bannerText,children:["As one story ends, another begins. ",(0,r.jsx)("a",{href:"soon-to-come",children:(0,r.jsx)("strong",{children:"Get ready for the 4th generation"})}),"."]})}),(0,r.jsx)("div",{className:o().navBarWrapper,children:(0,r.jsxs)("div",{className:o().navBar,children:[(0,r.jsx)("div",{className:o().left,children:(0,r.jsxs)("a",{href:"https://futureblur.com",style:{display:"flex"},children:[(0,r.jsx)("div",{className:o().logo,children:(0,r.jsx)(d,{})}),(0,r.jsx)("div",{className:o().logoIcon,children:(0,r.jsx)(f,{})})]})}),(0,r.jsx)(s,{navBarActive:t,toggleNavBar:function(){n(!t)}})]})})]})}function s(e){var t=e.navBarActive,n=e.toggleNavBar;return(0,r.jsxs)(r.Fragment,{children:[t?(0,r.jsx)("div",{className:o().burgerActive,onClick:n}):(0,r.jsx)("div",{className:o().burger,onClick:n}),t?(0,r.jsx)("div",{className:o().rightActive,children:(0,r.jsx)(c,{})}):(0,r.jsx)("div",{className:o().right,children:(0,r.jsx)(c,{})})]})}function c(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("a",{className:o().navLink,href:"https://instagram.com/byfutureblur",children:"Virtual Gallery"}),(0,r.jsx)("a",{className:o().navLink,href:"https://futureblur.com/github",children:"Open Source"}),(0,r.jsx)("a",{className:o().navLink,href:"https://futureblur.com/contact",children:"Contact"})]})}function d(){return(0,r.jsx)(u.Z,{src:"../images/Futureblur_Logo_White.svg",alt:"Futureblur Logo",layout:"fixed",width:188,height:30})}function f(){return(0,r.jsx)(u.Z,{src:"../images/Futureblur_Icon_White.svg",alt:"Futureblur Logo",layout:"fixed",width:64,height:30})}},8045:function(e,t,n){"use strict";var r=n(9361).Z,i=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,f=void 0!==a&&a,h=e.priority,v=void 0!==h&&h,w=e.loading,k=e.lazyRoot,P=void 0===k?null:k,A=e.lazyBoundary,E=e.className,C=e.quality,I=e.width,N=e.height,L=e.style,M=e.objectFit,R=e.objectPosition,B=e.onLoadingComplete,D=e.placeholder,q=void 0===D?"empty":D,H=e.blurDataURL,F=g(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),W=u.useContext(d.ImageConfigContext),T=u.useMemo((function(){var e=y||W||s.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return p({},e,{allSizes:t,deviceSizes:n})}),[W]),G=F,U=n?"responsive":"intrinsic";"layout"in G&&(G.layout&&(U=G.layout),delete G.layout);var Z=S;if("loader"in G){if(G.loader){var V=G.loader;Z=function(e){e.config;var t=g(e,["config"]);return V(t)}}delete G.loader}var J="";if(function(e){return"object"===typeof e&&(j(e)||function(e){return void 0!==e.src}(e))}(t)){var X=j(t)?t.default:t;if(!X.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(H=H||X.blurDataURL,J=X.src,(!U||"fill"!==U)&&(N=N||X.height,I=I||X.width,!X.height||!X.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)))}t="string"===typeof t?t:J;var Y=O(I),K=O(N),Q=O(C),$=!v&&("lazy"===w||"undefined"===typeof w);(t.startsWith("data:")||t.startsWith("blob:"))&&(f=!0,$=!1);b.has(t)&&($=!1);m&&(f=!0);var ee,te=i(u.useState(!1),2),ne=te[0],re=te[1],ie=i(c.useIntersection({rootRef:P,rootMargin:A||"200px",disabled:!$}),3),oe=ie[0],ae=ie[1],ue=ie[2],le=!$||ae,se={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:R};0;var pe=Object.assign({},L,fe),he="blur"!==q||ne?{}:{backgroundSize:M||"cover",backgroundPosition:R||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(H,'")')};if("fill"===U)se.display="block",se.position="absolute",se.top=0,se.left=0,se.bottom=0,se.right=0;else if("undefined"!==typeof Y&&"undefined"!==typeof K){var ge=K/Y,ve=isNaN(ge)?"100%":"".concat(100*ge,"%");"responsive"===U?(se.display="block",se.position="relative",de=!0,ce.paddingTop=ve):"intrinsic"===U?(se.display="inline-block",se.position="relative",se.maxWidth="100%",de=!0,ce.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Y,"%27%20height=%27").concat(K,"%27/%3e")):"fixed"===U&&(se.display="inline-block",se.position="relative",se.width=Y,se.height=K)}else 0;var me={src:_,srcSet:void 0,sizes:void 0};le&&(me=x({config:T,src:t,unoptimized:f,layout:U,width:Y,quality:Q,sizes:n,loader:Z}));var ye=t;0;var be;0;var _e=(r(be={},"imagesrcset",me.srcSet),r(be,"imagesizes",me.sizes),be),we=u.default.useLayoutEffect,je=u.useRef(B),xe=u.useRef(t);u.useEffect((function(){je.current=B}),[B]),we((function(){xe.current!==t&&(ue(),xe.current=t)}),[ue,t]);var Oe=p({isLazy:$,imgAttributes:me,heightInt:K,widthInt:Y,qualityInt:Q,layout:U,className:E,imgStyle:pe,blurStyle:he,loading:w,config:T,unoptimized:f,placeholder:q,loader:Z,srcString:ye,onLoadingCompleteRef:je,setBlurComplete:re,setIntersection:oe,isVisible:le,noscriptSizes:n},G);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:se},de?u.default.createElement("span",{style:ce},ee?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,u.default.createElement(z,Object.assign({},Oe))),v?u.default.createElement(l.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+me.src+me.srcSet+me.sizes,rel:"preload",as:"image",href:me.srcSet?void 0:me.src},_e))):null)};var a,u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=h();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(7294)),l=(a=n(5443))&&a.__esModule?a:{default:a},s=n(9309),c=n(7190),d=n(9977),f=(n(3794),n(2392));function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function h(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function g(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom"}||{},m=v.experimentalUnoptimized,y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom"},b=new Set,_=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(P(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(P(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(P(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function j(e){return void 0!==e.default}function x(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,a=e.width,u=e.quality,l=e.sizes,s=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var c=function(e,t,n,r){var i=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var u,l=/(^|\s)(1?\d?\d)vw/g,s=[];u=l.exec(r);u)s.push(parseInt(u[2]));if(s.length){var c,d=.01*(c=Math).min.apply(c,o(s));return{widths:a.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,i,l),d=c.widths,f=c.kind,p=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(e,r){return"".concat(s({config:t,src:n,quality:u,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:s({config:t,src:n,quality:u,width:d[p]})}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=w.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(n))}function k(e,t,n,r,i,o){e&&e.src!==_&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===r&&o(!0),null==i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var z=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,i=e.layout,o=e.className,a=e.imgStyle,l=e.blurStyle,s=e.isLazy,c=e.placeholder,d=e.loading,f=e.srcString,h=e.config,v=e.unoptimized,m=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,_=e.setIntersection,w=e.onLoad,j=e.onError,O=(e.isVisible,e.noscriptSizes),S=g(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return d=s?"lazy":d,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},S,t,{decoding:"async","data-nimg":i,className:o,style:p({},a,l),ref:u.useCallback((function(e){_(e),(null==e?void 0:e.complete)&&k(e,f,0,c,y,b)}),[_,f,i,c,y,b]),onLoad:function(e){k(e.currentTarget,f,0,c,y,b),w&&w(e)},onError:function(e){"blur"===c&&b(!0),j&&j(e)}})),(s||"blur"===c)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},S,x({config:h,src:f,unoptimized:v,layout:i,width:n,quality:r,sizes:O,loader:m}),{decoding:"async","data-nimg":i,style:a,className:o,loading:d}))))};function P(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!a,c=i.useRef(),d=r(i.useState(!1),2),f=d[0],p=d[1],h=r(i.useState(null),2),g=h[0],v=h[1];i.useEffect((function(){if(a){if(c.current&&(c.current(),c.current=void 0),s||f)return;return g&&g.tagName&&(c.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=u.get(r)))return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:i},l.push(n),u.set(n,t),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),u.delete(i);var t=l.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&l.splice(t,1)}}}(g,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==c.current||c.current(),c.current=void 0}}if(!f){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[g,s,n,t,f]);var m=i.useCallback((function(){p(!1)}),[]);return[v,f,m]};var i=n(7294),o=n(9311),a="function"===typeof IntersectionObserver;var u=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},638:function(e,t,n){"use strict";var r=n(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=i.default,a={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=o({},a,e));if((a=o({},a,t)).suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");a.loadableGenerated&&delete(a=o({},a,a.loadableGenerated)).loadableGenerated;if("boolean"===typeof a.ssr&&!a.suspense){if(!a.ssr)return delete a.ssr,u(n,a);delete a.ssr}return n(a)},t.noSSR=u;a(n(7294));var i=a(n(4302));function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=i},4302:function(e,t,n){"use strict";var r=n(9658).Z,i=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},u=n(6319);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var s=n(1849).useSyncExternalStore,c=[],d=[],f=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var h=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var i=this;this._timeout=setTimeout((function(){i._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=l({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function g(e){return function(e,t){var n=function(){if(!o){var t=new h(e,i);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},r=function(){n();var e=a.default.useContext(u.LoadableContext);e&&Array.isArray(i.modules)&&i.modules.forEach((function(t){e(t)}))},i=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);i.suspense&&(i.lazy=a.default.lazy(i.loader));var o=null;if(!f){var c=i.webpack?i.webpack():i.modules;c&&d.push((function(e){var t=!0,r=!1,i=void 0;try{for(var o,a=c[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var u=o.value;if(-1!==e.indexOf(u))return n()}}catch(l){r=!0,i=l}finally{try{t||null==a.return||a.return()}finally{if(r)throw i}}}))}var p=i.suspense?function(e,t){return r(),a.default.createElement(i.lazy,l({},e,{ref:t}))}:function(e,t){r();var n=s(o.subscribe,o.getCurrentValue,o.getCurrentValue);return a.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),a.default.useMemo((function(){return n.loading||n.error?a.default.createElement(i.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:o.retry}):n.loaded?a.default.createElement(function(e){return e&&e.__esModule?e.default:e}(n.loaded),e):null}),[e,n])};return p.preload=function(){return n()},p.displayName="LoadableComponent",a.default.forwardRef(p)}(p,e)}function v(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return v(e,t)}))}g.preloadAll=function(){return new Promise((function(e,t){v(c).then(e,t)}))},g.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return f=!0,t()};v(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=g.preloadReady;var m=g;t.default=m},2373:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}n.r(t),n.d(t,{default:function(){return d}});var o=n(5893),a=(n(906),n(5152)),u=n.n(a),l=(n(7673),n(4298)),s=n.n(l),c=u()((function(){return Promise.resolve().then(n.bind(n,7673))}),{loadableGenerated:{webpack:function(){return[7673]}},ssr:!1});var d=function(e){var t=e.Component,n=e.pageProps;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s(),{type:"module",src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"}),(0,o.jsx)(s(),{noModule:!0,src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"}),(0,o.jsx)(c,{}),(0,o.jsx)(t,i({},n))]})}},5606:function(e){e.exports={messageBanner:"Header_messageBanner__zchsx",bannerText:"Header_bannerText__bZ4tN",headerContainer:"Header_headerContainer__74j6_",navBarWrapper:"Header_navBarWrapper__CSrJA",navBar:"Header_navBar__ijbgy",left:"Header_left__9aIGe",logo:"Header_logo__6vBZG",logoIcon:"Header_logoIcon__u5pMY",burger:"Header_burger__ISCur",burgerActive:"Header_burgerActive__N08Dh",right:"Header_right__K2Msm",rightActive:"Header_rightActive__3FXtg","nav-bar-slide":"Header_nav-bar-slide__eS_6j",navLink:"Header_navLink__1cl8b"}},906:function(){},5152:function(e,t,n){e.exports=n(638)},5675:function(e,t,n){e.exports=n(8045)},7651:function(e,t,n){"use strict";var r=n(7294);var i="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},o=r.useState,a=r.useEffect,u=r.useLayoutEffect,l=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(r){return!0}}var c="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),i=r[0].inst,c=r[1];return u((function(){i.value=n,i.getSnapshot=t,s(i)&&c({inst:i})}),[e,n,t]),a((function(){return s(i)&&c({inst:i}),e((function(){s(i)&&c({inst:i})}))}),[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},1849:function(e,t,n){"use strict";e.exports=n(7651)},4298:function(e,t,n){e.exports=n(699)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);