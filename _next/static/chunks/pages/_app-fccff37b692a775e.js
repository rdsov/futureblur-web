(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},1058:function(e,t,n){"use strict";Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return p}});var r,i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(7294)),o=(r=n(5675))&&r.__esModule?r:{default:r};function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){u=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=function(e,t,n){var r=function(e){var t,n=e.filePath,r=(null===(t=n.split("\\").pop())||void 0===t?void 0:t.split("/").pop())||"",i=n.split(r).shift(),o=n.split(".").pop();return{path:i,filename:r.substring(0,r.lastIndexOf("."))||r,extension:o||""}}({filePath:e}),i=r.filename,o=r.path,a=r.extension;if(!["JPG","JPEG","WEBP","PNG","AVIF"].includes(a.toUpperCase()))return e;var u=a;n&&["JPG","JPEG","PNG"].includes(a.toUpperCase())&&(u="WEBP");var l=o;"/"!=(null===l||void 0===l?void 0:l.substr(-1))&&(l+="/");var s=e.includes("_next/static/media"),c="".concat(s?"":l,"nextImageExportOptimizer/").concat(i,"-opt-").concat(t,".").concat(u.toUpperCase());return"/"!==c.charAt(0)&&(c="/"+c),c},f=function(e){var t=e.src;return"object"===typeof t?t.src:t};var p=function(e){var t=e.src,n=e.priority,r=void 0!==n&&n,a=e.loading,l=e.lazyRoot,p=void 0===l?null:l,h=e.lazyBoundary,g=void 0===h?"200px":h,m=e.className,v=e.width,y=e.height,b=e.objectFit,_=e.objectPosition,w=e.useWebp,j=void 0===w||w,x=e.onLoadingComplete,S=e.unoptimized,O=e.placeholder,z=void 0===O?"blur":O,A=e.blurDataURL,k=e.onError,E=s(e,["src","priority","loading","lazyRoot","lazyBoundary","className","width","height","objectFit","objectPosition","useWebp","onLoadingComplete","unoptimized","placeholder","blurDataURL","onError"]),P=c((0,i.useState)(!1),2),C=P[0],I=P[1],N=(0,i.useMemo)((function(){if(A)return A;var e="object"===typeof t?t.src:t;return!0===S?e:d(e,10,j)}),[A,t,S]);return i.default.createElement(o.default,u({},E,"object"===typeof t&&t.width&&{width:t.width},"object"===typeof t&&t.height&&{height:t.height},v&&{width:v},y&&{height:y},a&&{loading:a},p&&{lazyRoot:p},g&&{lazyBoundary:g},m&&{className:m},b&&{objectFit:b},_&&{objectPosition:_},x&&{onLoadingComplete:x},z&&{placeholder:z},S&&{unoptimized:S},r&&{priority:r},C&&{unoptimized:!0},{loader:C||!0===S?f:function(e){return function(e){var t=e.src,n=e.width,r=e.useWebp,i="object"===typeof t?t.src:t;return d(i,n,r)}({src:t,width:e.width,useWebp:j})},blurDataURL:N,onError:function(e){I(!0),k&&k(e)},onLoadingComplete:function(e){0===e.naturalWidth&&I(!0),x&&x(e)},src:"object"===typeof t?t.src:t}))}},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2373)}])},7673:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(5893),i=n(5606),o=n.n(i),a=n(7294),u=n(1058);function l(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return(0,r.jsxs)("div",{className:o().headerContainer,children:[(0,r.jsx)("div",{className:o().messageBanner,children:(0,r.jsxs)("p",{className:o().bannerText,children:["As one story ends, another begins. ",(0,r.jsx)("a",{href:"https://beta.futureblur.com",children:(0,r.jsx)("strong",{children:"Get ready for the 4th generation"})}),"."]})}),(0,r.jsx)("div",{className:o().navBarWrapper,children:(0,r.jsxs)("div",{className:o().navBar,children:[(0,r.jsx)("div",{className:o().left,children:(0,r.jsxs)("a",{href:"https://futureblur.com",style:{display:"flex"},children:[(0,r.jsx)("div",{className:o().logo,children:(0,r.jsx)(d,{})}),(0,r.jsx)("div",{className:o().logoIcon,children:(0,r.jsx)(f,{})})]})}),(0,r.jsx)(s,{navBarActive:t,toggleNavBar:function(){n(!t)}})]})})]})}function s(e){var t=e.navBarActive,n=e.toggleNavBar;return(0,r.jsxs)(r.Fragment,{children:[t?(0,r.jsx)("div",{className:o().burgerActive,onClick:n}):(0,r.jsx)("div",{className:o().burger,onClick:n}),t?(0,r.jsx)("div",{className:o().rightActive,children:(0,r.jsx)(c,{})}):(0,r.jsx)("div",{className:o().right,children:(0,r.jsx)(c,{})})]})}function c(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("a",{className:o().navLink,href:"https://instagram.com/byfutureblur",children:"Virtual Gallery"}),(0,r.jsx)("a",{className:o().navLink,href:"https://futureblur.com/github",children:"Open Source"}),(0,r.jsx)("a",{className:o().navLink,href:"https://futureblur.com/contact",children:"Contact"})]})}function d(){return(0,r.jsx)(u.Z,{src:"../images/Futureblur_Logo_White.svg",alt:"Futureblur Logo",layout:"fixed",width:188,height:30})}function f(){return(0,r.jsx)(u.Z,{src:"../images/Futureblur_Icon_White.svg",alt:"Futureblur Logo",layout:"fixed",width:64,height:30})}},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9361).Z,i=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,u=e.unoptimized,l=void 0!==u&&u,g=e.priority,m=void 0!==g&&g,_=e.loading,O=e.lazyRoot,A=void 0===O?null:O,k=e.lazyBoundary,E=e.className,P=e.quality,C=e.width,I=e.height,N=e.style,L=e.objectFit,M=e.objectPosition,R=e.onLoadingComplete,B=e.placeholder,W=void 0===B?"empty":B,D=e.blurDataURL,Z=s(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),H=c.useContext(h.ImageConfigContext),F=c.useMemo((function(){var e=v||H||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:n})}),[H]),T=Z,q=n?"responsive":"intrinsic";"layout"in T&&(T.layout&&(q=T.layout),delete T.layout);var G=S;if("loader"in T){if(T.loader){var V=T.loader;G=function(e){e.config;var t=s(e,["config"]);return V(t)}}delete T.loader}var U="";if(function(e){return"object"===typeof e&&(w(e)||function(e){return void 0!==e.src}(e))}(t)){var J=w(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(D=D||J.blurDataURL,U=J.src,(!q||"fill"!==q)&&(I=I||J.height,C=C||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}var X=!m&&("lazy"===_||"undefined"===typeof _);((t="string"===typeof t?t:U).startsWith("data:")||t.startsWith("blob:"))&&(l=!0,X=!1);y.has(t)&&(X=!1);F.unoptimized&&(l=!0);var Y,K=i(c.useState(!1),2),Q=K[0],$=K[1],ee=i(p.useIntersection({rootRef:A,rootMargin:k||"200px",disabled:!X}),3),te=ee[0],ne=ee[1],re=ee[2],ie=!X||ne,oe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ae={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue=!1,le={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:L,objectPosition:M},se=x(C),ce=x(I),de=x(P);0;var fe=Object.assign({},N,le),pe="blur"!==W||Q?{}:{backgroundSize:L||"cover",backgroundPosition:M||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(D,'")')};if("fill"===q)oe.display="block",oe.position="absolute",oe.top=0,oe.left=0,oe.bottom=0,oe.right=0;else if("undefined"!==typeof se&&"undefined"!==typeof ce){var he=ce/se,ge=isNaN(he)?"100%":"".concat(100*he,"%");"responsive"===q?(oe.display="block",oe.position="relative",ue=!0,ae.paddingTop=ge):"intrinsic"===q?(oe.display="inline-block",oe.position="relative",oe.maxWidth="100%",ue=!0,ae.maxWidth="100%",Y="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(se,"%27%20height=%27").concat(ce,"%27/%3e")):"fixed"===q&&(oe.display="inline-block",oe.position="relative",oe.width=se,oe.height=ce)}else 0;var me={src:b,srcSet:void 0,sizes:void 0};ie&&(me=j({config:F,src:t,unoptimized:l,layout:q,width:se,quality:de,sizes:n,loader:G}));var ve=t;0;var ye;0;var be=(r(ye={},"imagesrcset",me.srcSet),r(ye,"imagesizes",me.sizes),r(ye,"crossOrigin",T.crossOrigin),ye),_e=c.default.useLayoutEffect,we=c.useRef(R),je=c.useRef(t);c.useEffect((function(){we.current=R}),[R]),_e((function(){je.current!==t&&(re(),je.current=t)}),[re,t]);var xe=a({isLazy:X,imgAttributes:me,heightInt:ce,widthInt:se,qualityInt:de,layout:q,className:E,imgStyle:fe,blurStyle:pe,loading:_,config:F,unoptimized:l,placeholder:W,loader:G,srcString:ve,onLoadingCompleteRef:we,setBlurComplete:$,setIntersection:te,isVisible:ie,noscriptSizes:n},T);return c.default.createElement(c.default.Fragment,null,c.default.createElement("span",{style:oe},ue?c.default.createElement("span",{style:ae},Y?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Y}):null):null,c.default.createElement(z,Object.assign({},xe))),m?c.default.createElement(d.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+me.src+me.srcSet+me.sizes,rel:"preload",as:"image",href:me.srcSet?void 0:me.src},be))):null)};var a=n(6495).Z,u=n(2648).Z,l=n(1598).Z,s=n(7273).Z,c=l(n(7294)),d=u(n(5443)),f=n(9309),p=n(7190),h=n(9977),g=(n(3794),n(2392));function m(e){return"/"===e[0]?e.slice(1):e}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1},y=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var _=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(m(n))),a=o.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString()),o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(m(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(m(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(e){return void 0!==e.default}function j(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,a=e.width,u=e.quality,l=e.sizes,s=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var c=function(e,t,n,r){var i=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var u,l=/(^|\s)(1?\d?\d)vw/g,s=[];u=l.exec(r);u)s.push(parseInt(u[2]));if(s.length){var c,d=.01*(c=Math).min.apply(c,o(s));return{widths:a.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,i,l),d=c.widths,f=c.kind,p=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(e,r){return"".concat(s({config:t,src:n,quality:u,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:s({config:t,src:n,quality:u,width:d[p]})}}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=_.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function O(e,t,n,r,i,o){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(y.add(t),"blur"===r&&o(!0),null==i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var z=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,i=e.layout,o=e.className,u=e.imgStyle,l=e.blurStyle,d=e.isLazy,f=e.placeholder,p=e.loading,h=e.srcString,g=e.config,m=e.unoptimized,v=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,_=e.setIntersection,w=e.onLoad,x=e.onError,S=(e.isVisible,e.noscriptSizes),z=s(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return p=d?"lazy":p,c.default.createElement(c.default.Fragment,null,c.default.createElement("img",Object.assign({},z,t,{decoding:"async","data-nimg":i,className:o,style:a({},u,l),ref:c.useCallback((function(e){_(e),(null==e?void 0:e.complete)&&O(e,h,0,f,y,b)}),[_,h,i,f,y,b]),onLoad:function(e){O(e.currentTarget,h,0,f,y,b),w&&w(e)},onError:function(e){"blur"===f&&b(!0),x&&x(e)}})),(d||"blur"===f)&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},z,j({config:g,src:h,unoptimized:m,layout:i,width:n,quality:r,sizes:S,loader:v}),{decoding:"async","data-nimg":i,style:u,className:o,loading:p}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!a,c=r(i.useState(!1),2),d=c[0],f=c[1],p=r(i.useState(null),2),h=p[0],g=p[1];i.useEffect((function(){if(a){if(s||d)return;if(h&&h.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=u.get(r)))return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:i},l.push(n),u.set(n,t),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),u.delete(i);var t=l.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&l.splice(t,1)}}}(h,(function(e){return e&&f(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!d){var r=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(r)}}}),[h,s,n,t,d]);var m=i.useCallback((function(){f(!1)}),[]);return[g,d,m]};var i=n(7294),o=n(9311),a="function"===typeof IntersectionObserver,u=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default,o=(null==t?void 0:t.suspense)?{}:{loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=i({},o,e));if((o=i({},o,t)).suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");o.suspense&&(delete o.ssr,delete o.loading);o.loadableGenerated&&delete(o=i({},o,o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr&&!o.suspense){if(!o.ssr)return delete o.ssr,u(n,o);delete o.ssr}return n(o)},t.noSSR=u;var i=n(6495).Z,o=n(2648).Z,a=(o(n(7294)),o(n(4302)));function u(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext(null);t.LoadableContext=r},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9658).Z,i=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(6495).Z,a=(0,n(2648).Z)(n(7294)),u=n(6319),l=n(1849).useSyncExternalStore,s=[],c=[],d=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function h(e){return function(e,t){var n=function(){if(!s){var t=new p(e,i);s={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return s.promise()},r=function(){n();var e=a.default.useContext(u.LoadableContext);e&&Array.isArray(i.modules)&&i.modules.forEach((function(t){e(t)}))},i=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);i.suspense&&(i.lazy=a.default.lazy(i.loader));var s=null;if(!d){var f=i.webpack?i.webpack():i.modules;f&&c.push((function(e){var t=!0,r=!1,i=void 0;try{for(var o,a=f[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var u=o.value;if(-1!==e.indexOf(u))return n()}}catch(l){r=!0,i=l}finally{try{t||null==a.return||a.return()}finally{if(r)throw i}}}))}var h=i.suspense?function(e,t){return r(),a.default.createElement(i.lazy,o({},e,{ref:t}))}:function(e,t){r();var n=l(s.subscribe,s.getCurrentValue,s.getCurrentValue);return a.default.useImperativeHandle(t,(function(){return{retry:s.retry}}),[]),a.default.useMemo((function(){return n.loading||n.error?a.default.createElement(i.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:s.retry}):n.loaded?a.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,n])};return h.preload=function(){return n()},h.displayName="LoadableComponent",a.default.forwardRef(h)}(f,e)}function g(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return g(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){g(s).then(e,t)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};g(c,e).then(n,n)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var m=h;t.default=m},2373:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}n.r(t),n.d(t,{default:function(){return d}});var o=n(5893),a=(n(906),n(5152)),u=n.n(a),l=(n(7673),n(4298)),s=n.n(l),c=u()((function(){return Promise.resolve().then(n.bind(n,7673))}),{loadableGenerated:{webpack:function(){return[7673]}},ssr:!1});var d=function(e){var t=e.Component,n=e.pageProps;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s(),{type:"module",src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"}),(0,o.jsx)(s(),{noModule:!0,src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"}),(0,o.jsx)(c,{}),(0,o.jsx)(t,i({},n))]})}},5606:function(e){e.exports={messageBanner:"Header_messageBanner__zchsx",bannerText:"Header_bannerText__bZ4tN",headerContainer:"Header_headerContainer__74j6_",navBarWrapper:"Header_navBarWrapper__CSrJA",navBar:"Header_navBar__ijbgy",left:"Header_left__9aIGe",logo:"Header_logo__6vBZG",logoIcon:"Header_logoIcon__u5pMY",burger:"Header_burger__ISCur",burgerActive:"Header_burgerActive__N08Dh",right:"Header_right__K2Msm",rightActive:"Header_rightActive__3FXtg","nav-bar-slide":"Header_nav-bar-slide__eS_6j",navLink:"Header_navLink__1cl8b"}},906:function(){},5152:function(e,t,n){e.exports=n(638)},5675:function(e,t,n){e.exports=n(8045)},7651:function(e,t,n){"use strict";var r=n(7294);var i="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},o=r.useState,a=r.useEffect,u=r.useLayoutEffect,l=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(r){return!0}}var c="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),i=r[0].inst,c=r[1];return u((function(){i.value=n,i.getSnapshot=t,s(i)&&c({inst:i})}),[e,n,t]),a((function(){return s(i)&&c({inst:i}),e((function(){s(i)&&c({inst:i})}))}),[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},1849:function(e,t,n){"use strict";e.exports=n(7651)},4298:function(e,t,n){e.exports=n(699)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);