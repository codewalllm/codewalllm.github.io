const t=Math.min,e=Math.max,n=Math.round,o=Math.floor,i=t=>({x:t,y:t}),r={left:"right",right:"left",bottom:"top",top:"bottom"},l={start:"end",end:"start"};function c(n,o,i){return e(n,t(o,i))}function s(t,e){return"function"==typeof t?t(e):t}function a(t){return t.split("-")[0]}function f(t){return t.split("-")[1]}function u(t){return"x"===t?"y":"x"}function d(t){return"y"===t?"height":"width"}function m(t){return["top","bottom"].includes(a(t))?"y":"x"}function p(t){return u(m(t))}function h(t){return t.replace(/start|end/g,(t=>l[t]))}function g(t){return t.replace(/left|right|bottom|top/g,(t=>r[t]))}function y(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function x(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function w(t,e,n){let{reference:o,floating:i}=t;const r=m(e),l=p(e),c=d(l),s=a(e),u="y"===r,h=o.x+o.width/2-i.width/2,g=o.y+o.height/2-i.height/2,y=o[c]/2-i[c]/2;let x;switch(s){case"top":x={x:h,y:o.y-i.height};break;case"bottom":x={x:h,y:o.y+o.height};break;case"right":x={x:o.x+o.width,y:g};break;case"left":x={x:o.x-i.width,y:g};break;default:x={x:o.x,y:o.y}}switch(f(e)){case"start":x[l]-=y*(n&&u?-1:1);break;case"end":x[l]+=y*(n&&u?-1:1)}return x}async function v(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:l,elements:c,strategy:a}=t,{boundary:f="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:m=!1,padding:p=0}=s(e,t),h=y(p),g=c[m?"floating"===d?"reference":"floating":d],w=x(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(g)))||n?g:g.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(c.floating)),boundary:f,rootBoundary:u,strategy:a})),v="floating"===d?{...l.floating,x:o,y:i}:l.reference,b=await(null==r.getOffsetParent?void 0:r.getOffsetParent(c.floating)),R=await(null==r.isElement?void 0:r.isElement(b))&&await(null==r.getScale?void 0:r.getScale(b))||{x:1,y:1},T=x(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:v,offsetParent:b,strategy:a}):v);return{top:(w.top-T.top+h.top)/R.y,bottom:(T.bottom-w.bottom+h.bottom)/R.y,left:(w.left-T.left+h.left)/R.x,right:(T.right-w.right+h.right)/R.x}}const b=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:l,middlewareData:c}=e,u=await async function(t,e){const{placement:n,platform:o,elements:i}=t,r=await(null==o.isRTL?void 0:o.isRTL(i.floating)),l=a(n),c=f(n),u="y"===m(n),d=["left","top"].includes(l)?-1:1,p=r&&u?-1:1,h=s(e,t);let{mainAxis:g,crossAxis:y,alignmentAxis:x}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return c&&"number"==typeof x&&(y="end"===c?-1*x:x),u?{x:y*p,y:g*d}:{x:g*d,y:y*p}}(e,t);return l===(null==(n=c.offset)?void 0:n.placement)&&null!=(o=c.arrow)&&o.alignmentOffset?{}:{x:i+u.x,y:r+u.y,data:{...u,placement:l}}}}};function R(t){return L(t)?(t.nodeName||"").toLowerCase():"#document"}function T(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function E(t){var e;return null==(e=(L(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function L(t){return t instanceof Node||t instanceof T(t).Node}function A(t){return t instanceof Element||t instanceof T(t).Element}function O(t){return t instanceof HTMLElement||t instanceof T(t).HTMLElement}function D(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof T(t).ShadowRoot)}function S(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=H(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function P(t){return["table","td","th"].includes(R(t))}function C(t){const e=F(),n=H(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function F(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function k(t){return["html","body","#document"].includes(R(t))}function H(t){return T(t).getComputedStyle(t)}function W(t){return A(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function B(t){if("html"===R(t))return t;const e=t.assignedSlot||t.parentNode||D(t)&&t.host||E(t);return D(e)?e.host:e}function V(t){const e=B(t);return k(e)?t.ownerDocument?t.ownerDocument.body:t.body:O(e)&&S(e)?e:V(e)}function M(t,e,n){var o;void 0===e&&(e=[]),void 0===n&&(n=!0);const i=V(t),r=i===(null==(o=t.ownerDocument)?void 0:o.body),l=T(i);return r?e.concat(l,l.visualViewport||[],S(i)?i:[],l.frameElement&&n?M(l.frameElement):[]):e.concat(i,M(i,[],n))}function z(t){const e=H(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=O(t),l=r?t.offsetWidth:o,c=r?t.offsetHeight:i,s=n(o)!==l||n(i)!==c;return s&&(o=l,i=c),{width:o,height:i,$:s}}function N(t){return A(t)?t:t.contextElement}function I(t){const e=N(t);if(!O(e))return i(1);const o=e.getBoundingClientRect(),{width:r,height:l,$:c}=z(e);let s=(c?n(o.width):o.width)/r,a=(c?n(o.height):o.height)/l;return s&&Number.isFinite(s)||(s=1),a&&Number.isFinite(a)||(a=1),{x:s,y:a}}const q=i(0);function X(t){const e=T(t);return F()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:q}function Y(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const r=t.getBoundingClientRect(),l=N(t);let c=i(1);e&&(o?A(o)&&(c=I(o)):c=I(t));const s=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==T(t))&&e}(l,n,o)?X(l):i(0);let a=(r.left+s.x)/c.x,f=(r.top+s.y)/c.y,u=r.width/c.x,d=r.height/c.y;if(l){const t=T(l),e=o&&A(o)?T(o):o;let n=t,i=n.frameElement;for(;i&&o&&e!==n;){const t=I(i),e=i.getBoundingClientRect(),o=H(i),r=e.left+(i.clientLeft+parseFloat(o.paddingLeft))*t.x,l=e.top+(i.clientTop+parseFloat(o.paddingTop))*t.y;a*=t.x,f*=t.y,u*=t.x,d*=t.y,a+=r,f+=l,n=T(i),i=n.frameElement}}return x({width:u,height:d,x:a,y:f})}const $=[":popover-open",":modal"];function _(t){return $.some((e=>{try{return t.matches(e)}catch(n){return!1}}))}function j(t){return Y(E(t)).left+W(t).scrollLeft}function G(t,n,o){let r;if("viewport"===n)r=function(t,e){const n=T(t),o=E(t),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,c=0,s=0;if(i){r=i.width,l=i.height;const t=F();(!t||t&&"fixed"===e)&&(c=i.offsetLeft,s=i.offsetTop)}return{width:r,height:l,x:c,y:s}}(t,o);else if("document"===n)r=function(t){const n=E(t),o=W(t),i=t.ownerDocument.body,r=e(n.scrollWidth,n.clientWidth,i.scrollWidth,i.clientWidth),l=e(n.scrollHeight,n.clientHeight,i.scrollHeight,i.clientHeight);let c=-o.scrollLeft+j(t);const s=-o.scrollTop;return"rtl"===H(i).direction&&(c+=e(n.clientWidth,i.clientWidth)-r),{width:r,height:l,x:c,y:s}}(E(t));else if(A(n))r=function(t,e){const n=Y(t,!0,"fixed"===e),o=n.top+t.clientTop,r=n.left+t.clientLeft,l=O(t)?I(t):i(1);return{width:t.clientWidth*l.x,height:t.clientHeight*l.y,x:r*l.x,y:o*l.y}}(n,o);else{const e=X(t);r={...n,x:n.x-e.x,y:n.y-e.y}}return x(r)}function J(t,e){const n=B(t);return!(n===e||!A(n)||k(n))&&("fixed"===H(n).position||J(n,e))}function K(t,e,n){const o=O(e),r=E(e),l="fixed"===n,c=Y(t,!0,l,e);let s={scrollLeft:0,scrollTop:0};const a=i(0);if(o||!o&&!l)if(("body"!==R(e)||S(r))&&(s=W(e)),o){const t=Y(e,!0,l,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else r&&(a.x=j(r));return{x:c.left+s.scrollLeft-a.x,y:c.top+s.scrollTop-a.y,width:c.width,height:c.height}}function Q(t,e){return O(t)&&"fixed"!==H(t).position?e?e(t):t.offsetParent:null}function U(t,e){const n=T(t);if(!O(t)||_(t))return n;let o=Q(t,e);for(;o&&P(o)&&"static"===H(o).position;)o=Q(o,e);return o&&("html"===R(o)||"body"===R(o)&&"static"===H(o).position&&!C(o))?n:o||function(t){let e=B(t);for(;O(e)&&!k(e);){if(C(e))return e;e=B(e)}return null}(t)||n}const Z={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const l="fixed"===r,c=E(o),s=!!e&&_(e.floating);if(o===c||s&&l)return n;let a={scrollLeft:0,scrollTop:0},f=i(1);const u=i(0),d=O(o);if((d||!d&&!l)&&(("body"!==R(o)||S(c))&&(a=W(o)),O(o))){const t=Y(o);f=I(o),u.x=t.x+o.clientLeft,u.y=t.y+o.clientTop}return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-a.scrollLeft*f.x+u.x,y:n.y*f.y-a.scrollTop*f.y+u.y}},getDocumentElement:E,getClippingRect:function(n){let{element:o,boundary:i,rootBoundary:r,strategy:l}=n;const c=[..."clippingAncestors"===i?function(t,e){const n=e.get(t);if(n)return n;let o=M(t,[],!1).filter((t=>A(t)&&"body"!==R(t))),i=null;const r="fixed"===H(t).position;let l=r?B(t):t;for(;A(l)&&!k(l);){const e=H(l),n=C(l);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||S(l)&&!n&&J(t,l))?o=o.filter((t=>t!==l)):i=e,l=B(l)}return e.set(t,o),o}(o,this._c):[].concat(i),r],s=c[0],a=c.reduce(((n,i)=>{const r=G(o,i,l);return n.top=e(r.top,n.top),n.right=t(r.right,n.right),n.bottom=t(r.bottom,n.bottom),n.left=e(r.left,n.left),n}),G(o,s,l));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:U,getElementRects:async function(t){const e=this.getOffsetParent||U,n=this.getDimensions;return{reference:K(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await n(t.floating)}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:n}=z(t);return{width:e,height:n}},getScale:I,isElement:A,isRTL:function(t){return"rtl"===H(t).direction}};function tt(n,i,r,l){void 0===l&&(l={});const{ancestorScroll:c=!0,ancestorResize:s=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:f="function"==typeof IntersectionObserver,animationFrame:u=!1}=l,d=N(n),m=c||s?[...d?M(d):[],...M(i)]:[];m.forEach((t=>{c&&t.addEventListener("scroll",r,{passive:!0}),s&&t.addEventListener("resize",r)}));const p=d&&f?function(n,i){let r,l=null;const c=E(n);function s(){var t;clearTimeout(r),null==(t=l)||t.disconnect(),l=null}return function a(f,u){void 0===f&&(f=!1),void 0===u&&(u=1),s();const{left:d,top:m,width:p,height:h}=n.getBoundingClientRect();if(f||i(),!p||!h)return;const g={rootMargin:-o(m)+"px "+-o(c.clientWidth-(d+p))+"px "+-o(c.clientHeight-(m+h))+"px "+-o(d)+"px",threshold:e(0,t(1,u))||1};let y=!0;function x(t){const e=t[0].intersectionRatio;if(e!==u){if(!y)return a();e?a(!1,e):r=setTimeout((()=>{a(!1,1e-7)}),100)}y=!1}try{l=new IntersectionObserver(x,{...g,root:c.ownerDocument})}catch(w){l=new IntersectionObserver(x,g)}l.observe(n)}(!0),s}(d,r):null;let h,g=-1,y=null;a&&(y=new ResizeObserver((t=>{let[e]=t;e&&e.target===d&&y&&(y.unobserve(i),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var t;null==(t=y)||t.observe(i)}))),r()})),d&&!u&&y.observe(d),y.observe(i));let x=u?Y(n):null;return u&&function t(){const e=Y(n);!x||e.x===x.x&&e.y===x.y&&e.width===x.width&&e.height===x.height||r();x=e,h=requestAnimationFrame(t)}(),r(),()=>{var t;m.forEach((t=>{c&&t.removeEventListener("scroll",r),s&&t.removeEventListener("resize",r)})),null==p||p(),null==(t=y)||t.disconnect(),y=null,u&&cancelAnimationFrame(h)}}const et=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:l=!1,limiter:f={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...d}=s(t,e),p={x:n,y:o},h=await v(e,d),g=m(a(i)),y=u(g);let x=p[y],w=p[g];if(r){const t="y"===y?"bottom":"right";x=c(x+h["y"===y?"top":"left"],x,x-h[t])}if(l){const t="y"===g?"bottom":"right";w=c(w+h["y"===g?"top":"left"],w,w-h[t])}const b=f.fn({...e,[y]:x,[g]:w});return{...b,data:{x:b.x-n,y:b.y-o}}}}},nt=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:l,initialPlacement:c,platform:u,elements:m}=e,{mainAxis:y=!0,crossAxis:x=!0,fallbackPlacements:w,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:R="none",flipAlignment:T=!0,...E}=s(t,e);if(null!=(n=r.arrow)&&n.alignmentOffset)return{};const L=a(i),A=a(c)===c,O=await(null==u.isRTL?void 0:u.isRTL(m.floating)),D=w||(A||!T?[g(c)]:function(t){const e=g(t);return[h(t),e,h(e)]}(c));w||"none"===R||D.push(...function(t,e,n,o){const i=f(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:l;default:return[]}}(a(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(h)))),r}(c,T,R,O));const S=[c,...D],P=await v(e,E),C=[];let F=(null==(o=r.flip)?void 0:o.overflows)||[];if(y&&C.push(P[L]),x){const t=function(t,e,n){void 0===n&&(n=!1);const o=f(t),i=p(t),r=d(i);let l="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=g(l)),[l,g(l)]}(i,l,O);C.push(P[t[0]],P[t[1]])}if(F=[...F,{placement:i,overflows:C}],!C.every((t=>t<=0))){var k,H;const t=((null==(k=r.flip)?void 0:k.index)||0)+1,e=S[t];if(e)return{data:{index:t,overflows:F},reset:{placement:e}};let n=null==(H=F.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:H.placement;if(!n)switch(b){case"bestFit":{var W;const t=null==(W=F.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:W[0];t&&(n=t);break}case"initialPlacement":n=c}if(i!==n)return{reset:{placement:n}}}return{}}}},ot=e=>({name:"arrow",options:e,async fn(n){const{x:o,y:i,placement:r,rects:l,platform:a,elements:u,middlewareData:m}=n,{element:h,padding:g=0}=s(e,n)||{};if(null==h)return{};const x=y(g),w={x:o,y:i},v=p(r),b=d(v),R=await a.getDimensions(h),T="y"===v,E=T?"top":"left",L=T?"bottom":"right",A=T?"clientHeight":"clientWidth",O=l.reference[b]+l.reference[v]-w[v]-l.floating[b],D=w[v]-l.reference[v],S=await(null==a.getOffsetParent?void 0:a.getOffsetParent(h));let P=S?S[A]:0;P&&await(null==a.isElement?void 0:a.isElement(S))||(P=u.floating[A]||l.floating[b]);const C=O/2-D/2,F=P/2-R[b]/2-1,k=t(x[E],F),H=t(x[L],F),W=k,B=P-R[b]-H,V=P/2-R[b]/2+C,M=c(W,V,B),z=!m.arrow&&null!=f(r)&&V!==M&&l.reference[b]/2-(V<W?k:H)-R[b]/2<0,N=z?V<W?V-W:V-B:0;return{[v]:w[v]+N,data:{[v]:M,centerOffset:V-M-N,...z&&{alignmentOffset:N}},reset:z}}}),it=(t,e,n)=>{const o=new Map,i={platform:Z,...n},r={...i.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,c=r.filter(Boolean),s=await(null==l.isRTL?void 0:l.isRTL(e));let a=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:u}=w(a,o,s),d=o,m={},p=0;for(let h=0;h<c.length;h++){const{name:n,fn:r}=c[h],{x:g,y:y,data:x,reset:v}=await r({x:f,y:u,initialPlacement:o,placement:d,strategy:i,middlewareData:m,rects:a,platform:l,elements:{reference:t,floating:e}});f=null!=g?g:f,u=null!=y?y:u,m={...m,[n]:{...m[n],...x}},v&&p<=50&&(p++,"object"==typeof v&&(v.placement&&(d=v.placement),v.rects&&(a=!0===v.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):v.rects),({x:f,y:u}=w(a,d,s))),h=-1)}return{x:f,y:u,placement:d,strategy:i,middlewareData:m}})(t,e,{...i,platform:r})};export{ot as a,tt as b,it as c,v as d,nt as f,b as o,et as s};