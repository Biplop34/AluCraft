(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function l(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(c){if(c.ep)return;c.ep=!0;const f=l(c);fetch(c.href,f)}})();function A1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Uc={exports:{}},ol={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function E1(){if(u0)return ol;u0=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function l(r,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var h in c)h!=="key"&&(f[h]=c[h])}else f=c;return c=f.ref,{$$typeof:n,type:r,key:d,ref:c!==void 0?c:null,props:f}}return ol.Fragment=i,ol.jsx=l,ol.jsxs=l,ol}var c0;function C1(){return c0||(c0=1,Uc.exports=E1()),Uc.exports}var p=C1(),Hc={exports:{}},xt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function j1(){if(f0)return xt;f0=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function E(T){return T===null||typeof T!="object"?null:(T=S&&T[S]||T["@@iterator"],typeof T=="function"?T:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,V={};function q(T,B,J){this.props=T,this.context=B,this.refs=V,this.updater=J||N}q.prototype.isReactComponent={},q.prototype.setState=function(T,B){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,B,"setState")},q.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function K(){}K.prototype=q.prototype;function Y(T,B,J){this.props=T,this.context=B,this.refs=V,this.updater=J||N}var X=Y.prototype=new K;X.constructor=Y,L(X,q.prototype),X.isPureReactComponent=!0;var $=Array.isArray;function dt(){}var I={H:null,A:null,T:null,S:null},M=Object.prototype.hasOwnProperty;function P(T,B,J){var nt=J.ref;return{$$typeof:n,type:T,key:B,ref:nt!==void 0?nt:null,props:J}}function Q(T,B){return P(T.type,B,T.props)}function mt(T){return typeof T=="object"&&T!==null&&T.$$typeof===n}function gt(T){var B={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(J){return B[J]})}var Dt=/\/+/g;function Et(T,B){return typeof T=="object"&&T!==null&&T.key!=null?gt(""+T.key):B.toString(36)}function St(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(dt,dt):(T.status="pending",T.then(function(B){T.status==="pending"&&(T.status="fulfilled",T.value=B)},function(B){T.status==="pending"&&(T.status="rejected",T.reason=B)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function O(T,B,J,nt,ot){var ut=typeof T;(ut==="undefined"||ut==="boolean")&&(T=null);var bt=!1;if(T===null)bt=!0;else switch(ut){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(T.$$typeof){case n:case i:bt=!0;break;case v:return bt=T._init,O(bt(T._payload),B,J,nt,ot)}}if(bt)return ot=ot(T),bt=nt===""?"."+Et(T,0):nt,$(ot)?(J="",bt!=null&&(J=bt.replace(Dt,"$&/")+"/"),O(ot,B,J,"",function(Ne){return Ne})):ot!=null&&(mt(ot)&&(ot=Q(ot,J+(ot.key==null||T&&T.key===ot.key?"":(""+ot.key).replace(Dt,"$&/")+"/")+bt)),B.push(ot)),1;bt=0;var Wt=nt===""?".":nt+":";if($(T))for(var Tt=0;Tt<T.length;Tt++)nt=T[Tt],ut=Wt+Et(nt,Tt),bt+=O(nt,B,J,ut,ot);else if(Tt=E(T),typeof Tt=="function")for(T=Tt.call(T),Tt=0;!(nt=T.next()).done;)nt=nt.value,ut=Wt+Et(nt,Tt++),bt+=O(nt,B,J,ut,ot);else if(ut==="object"){if(typeof T.then=="function")return O(St(T),B,J,nt,ot);throw B=String(T),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return bt}function F(T,B,J){if(T==null)return T;var nt=[],ot=0;return O(T,nt,"","",function(ut){return B.call(J,ut,ot++)}),nt}function W(T){if(T._status===-1){var B=T._result;B=B(),B.then(function(J){(T._status===0||T._status===-1)&&(T._status=1,T._result=J)},function(J){(T._status===0||T._status===-1)&&(T._status=2,T._result=J)}),T._status===-1&&(T._status=0,T._result=B)}if(T._status===1)return T._result.default;throw T._result}var vt=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},Z={map:F,forEach:function(T,B,J){F(T,function(){B.apply(this,arguments)},J)},count:function(T){var B=0;return F(T,function(){B++}),B},toArray:function(T){return F(T,function(B){return B})||[]},only:function(T){if(!mt(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return xt.Activity=x,xt.Children=Z,xt.Component=q,xt.Fragment=l,xt.Profiler=c,xt.PureComponent=Y,xt.StrictMode=r,xt.Suspense=g,xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,xt.__COMPILER_RUNTIME={__proto__:null,c:function(T){return I.H.useMemoCache(T)}},xt.cache=function(T){return function(){return T.apply(null,arguments)}},xt.cacheSignal=function(){return null},xt.cloneElement=function(T,B,J){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var nt=L({},T.props),ot=T.key;if(B!=null)for(ut in B.key!==void 0&&(ot=""+B.key),B)!M.call(B,ut)||ut==="key"||ut==="__self"||ut==="__source"||ut==="ref"&&B.ref===void 0||(nt[ut]=B[ut]);var ut=arguments.length-2;if(ut===1)nt.children=J;else if(1<ut){for(var bt=Array(ut),Wt=0;Wt<ut;Wt++)bt[Wt]=arguments[Wt+2];nt.children=bt}return P(T.type,ot,nt)},xt.createContext=function(T){return T={$$typeof:d,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:f,_context:T},T},xt.createElement=function(T,B,J){var nt,ot={},ut=null;if(B!=null)for(nt in B.key!==void 0&&(ut=""+B.key),B)M.call(B,nt)&&nt!=="key"&&nt!=="__self"&&nt!=="__source"&&(ot[nt]=B[nt]);var bt=arguments.length-2;if(bt===1)ot.children=J;else if(1<bt){for(var Wt=Array(bt),Tt=0;Tt<bt;Tt++)Wt[Tt]=arguments[Tt+2];ot.children=Wt}if(T&&T.defaultProps)for(nt in bt=T.defaultProps,bt)ot[nt]===void 0&&(ot[nt]=bt[nt]);return P(T,ut,ot)},xt.createRef=function(){return{current:null}},xt.forwardRef=function(T){return{$$typeof:h,render:T}},xt.isValidElement=mt,xt.lazy=function(T){return{$$typeof:v,_payload:{_status:-1,_result:T},_init:W}},xt.memo=function(T,B){return{$$typeof:y,type:T,compare:B===void 0?null:B}},xt.startTransition=function(T){var B=I.T,J={};I.T=J;try{var nt=T(),ot=I.S;ot!==null&&ot(J,nt),typeof nt=="object"&&nt!==null&&typeof nt.then=="function"&&nt.then(dt,vt)}catch(ut){vt(ut)}finally{B!==null&&J.types!==null&&(B.types=J.types),I.T=B}},xt.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},xt.use=function(T){return I.H.use(T)},xt.useActionState=function(T,B,J){return I.H.useActionState(T,B,J)},xt.useCallback=function(T,B){return I.H.useCallback(T,B)},xt.useContext=function(T){return I.H.useContext(T)},xt.useDebugValue=function(){},xt.useDeferredValue=function(T,B){return I.H.useDeferredValue(T,B)},xt.useEffect=function(T,B){return I.H.useEffect(T,B)},xt.useEffectEvent=function(T){return I.H.useEffectEvent(T)},xt.useId=function(){return I.H.useId()},xt.useImperativeHandle=function(T,B,J){return I.H.useImperativeHandle(T,B,J)},xt.useInsertionEffect=function(T,B){return I.H.useInsertionEffect(T,B)},xt.useLayoutEffect=function(T,B){return I.H.useLayoutEffect(T,B)},xt.useMemo=function(T,B){return I.H.useMemo(T,B)},xt.useOptimistic=function(T,B){return I.H.useOptimistic(T,B)},xt.useReducer=function(T,B,J){return I.H.useReducer(T,B,J)},xt.useRef=function(T){return I.H.useRef(T)},xt.useState=function(T){return I.H.useState(T)},xt.useSyncExternalStore=function(T,B,J){return I.H.useSyncExternalStore(T,B,J)},xt.useTransition=function(){return I.H.useTransition()},xt.version="19.2.4",xt}var d0;function Uf(){return d0||(d0=1,Hc.exports=j1()),Hc.exports}var H=Uf();const ny=A1(H);var Gc={exports:{}},ul={},qc={exports:{}},Yc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function M1(){return h0||(h0=1,(function(n){function i(O,F){var W=O.length;O.push(F);t:for(;0<W;){var vt=W-1>>>1,Z=O[vt];if(0<c(Z,F))O[vt]=F,O[W]=Z,W=vt;else break t}}function l(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var F=O[0],W=O.pop();if(W!==F){O[0]=W;t:for(var vt=0,Z=O.length,T=Z>>>1;vt<T;){var B=2*(vt+1)-1,J=O[B],nt=B+1,ot=O[nt];if(0>c(J,W))nt<Z&&0>c(ot,J)?(O[vt]=ot,O[nt]=W,vt=nt):(O[vt]=J,O[B]=W,vt=B);else if(nt<Z&&0>c(ot,W))O[vt]=ot,O[nt]=W,vt=nt;else break t}}return F}function c(O,F){var W=O.sortIndex-F.sortIndex;return W!==0?W:O.id-F.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();n.unstable_now=function(){return d.now()-h}}var g=[],y=[],v=1,x=null,S=3,E=!1,N=!1,L=!1,V=!1,q=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function X(O){for(var F=l(y);F!==null;){if(F.callback===null)r(y);else if(F.startTime<=O)r(y),F.sortIndex=F.expirationTime,i(g,F);else break;F=l(y)}}function $(O){if(L=!1,X(O),!N)if(l(g)!==null)N=!0,dt||(dt=!0,gt());else{var F=l(y);F!==null&&St($,F.startTime-O)}}var dt=!1,I=-1,M=5,P=-1;function Q(){return V?!0:!(n.unstable_now()-P<M)}function mt(){if(V=!1,dt){var O=n.unstable_now();P=O;var F=!0;try{t:{N=!1,L&&(L=!1,K(I),I=-1),E=!0;var W=S;try{e:{for(X(O),x=l(g);x!==null&&!(x.expirationTime>O&&Q());){var vt=x.callback;if(typeof vt=="function"){x.callback=null,S=x.priorityLevel;var Z=vt(x.expirationTime<=O);if(O=n.unstable_now(),typeof Z=="function"){x.callback=Z,X(O),F=!0;break e}x===l(g)&&r(g),X(O)}else r(g);x=l(g)}if(x!==null)F=!0;else{var T=l(y);T!==null&&St($,T.startTime-O),F=!1}}break t}finally{x=null,S=W,E=!1}F=void 0}}finally{F?gt():dt=!1}}}var gt;if(typeof Y=="function")gt=function(){Y(mt)};else if(typeof MessageChannel<"u"){var Dt=new MessageChannel,Et=Dt.port2;Dt.port1.onmessage=mt,gt=function(){Et.postMessage(null)}}else gt=function(){q(mt,0)};function St(O,F){I=q(function(){O(n.unstable_now())},F)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(O){O.callback=null},n.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<O?Math.floor(1e3/O):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(O){switch(S){case 1:case 2:case 3:var F=3;break;default:F=S}var W=S;S=F;try{return O()}finally{S=W}},n.unstable_requestPaint=function(){V=!0},n.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var W=S;S=O;try{return F()}finally{S=W}},n.unstable_scheduleCallback=function(O,F,W){var vt=n.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?vt+W:vt):W=vt,O){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=W+Z,O={id:v++,callback:F,priorityLevel:O,startTime:W,expirationTime:Z,sortIndex:-1},W>vt?(O.sortIndex=W,i(y,O),l(g)===null&&O===l(y)&&(L?(K(I),I=-1):L=!0,St($,W-vt))):(O.sortIndex=Z,i(g,O),N||E||(N=!0,dt||(dt=!0,gt()))),O},n.unstable_shouldYield=Q,n.unstable_wrapCallback=function(O){var F=S;return function(){var W=S;S=F;try{return O.apply(this,arguments)}finally{S=W}}}})(Yc)),Yc}var m0;function N1(){return m0||(m0=1,qc.exports=M1()),qc.exports}var Xc={exports:{}},Te={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function D1(){if(p0)return Te;p0=1;var n=Uf();function i(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)y+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var r={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(g,y,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:g,containerInfo:y,implementation:v}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Te.createPortal=function(g,y){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(i(299));return f(g,y,null,v)},Te.flushSync=function(g){var y=d.T,v=r.p;try{if(d.T=null,r.p=2,g)return g()}finally{d.T=y,r.p=v,r.d.f()}},Te.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,r.d.C(g,y))},Te.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},Te.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var v=y.as,x=h(v,y.crossOrigin),S=typeof y.integrity=="string"?y.integrity:void 0,E=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;v==="style"?r.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:E}):v==="script"&&r.d.X(g,{crossOrigin:x,integrity:S,fetchPriority:E,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Te.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var v=h(y.as,y.crossOrigin);r.d.M(g,{crossOrigin:v,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&r.d.M(g)},Te.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var v=y.as,x=h(v,y.crossOrigin);r.d.L(g,v,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Te.preloadModule=function(g,y){if(typeof g=="string")if(y){var v=h(y.as,y.crossOrigin);r.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:v,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else r.d.m(g)},Te.requestFormReset=function(g){r.d.r(g)},Te.unstable_batchedUpdates=function(g,y){return g(y)},Te.useFormState=function(g,y,v){return d.H.useFormState(g,y,v)},Te.useFormStatus=function(){return d.H.useHostTransitionStatus()},Te.version="19.2.4",Te}var g0;function k1(){if(g0)return Xc.exports;g0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Xc.exports=D1(),Xc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function R1(){if(y0)return ul;y0=1;var n=N1(),i=Uf(),l=k1();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function d(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function h(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(f(t)!==t)throw Error(r(188))}function y(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(r(188));return e!==t?null:t}for(var a=t,s=e;;){var o=a.return;if(o===null)break;var u=o.alternate;if(u===null){if(s=o.return,s!==null){a=s;continue}break}if(o.child===u.child){for(u=o.child;u;){if(u===a)return g(o),t;if(u===s)return g(o),e;u=u.sibling}throw Error(r(188))}if(a.return!==s.return)a=o,s=u;else{for(var m=!1,b=o.child;b;){if(b===a){m=!0,a=o,s=u;break}if(b===s){m=!0,s=o,a=u;break}b=b.sibling}if(!m){for(b=u.child;b;){if(b===a){m=!0,a=u,s=o;break}if(b===s){m=!0,s=u,a=o;break}b=b.sibling}if(!m)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:e}function v(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=v(t),e!==null)return e;t=t.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),dt=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),Q=Symbol.for("react.memo_cache_sentinel"),mt=Symbol.iterator;function gt(t){return t===null||typeof t!="object"?null:(t=mt&&t[mt]||t["@@iterator"],typeof t=="function"?t:null)}var Dt=Symbol.for("react.client.reference");function Et(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Dt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case L:return"Fragment";case q:return"Profiler";case V:return"StrictMode";case $:return"Suspense";case dt:return"SuspenseList";case P:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case N:return"Portal";case Y:return t.displayName||"Context";case K:return(t._context.displayName||"Context")+".Consumer";case X:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return e=t.displayName||null,e!==null?e:Et(t.type)||"Memo";case M:e=t._payload,t=t._init;try{return Et(t(e))}catch{}}return null}var St=Array.isArray,O=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},vt=[],Z=-1;function T(t){return{current:t}}function B(t){0>Z||(t.current=vt[Z],vt[Z]=null,Z--)}function J(t,e){Z++,vt[Z]=t.current,t.current=e}var nt=T(null),ot=T(null),ut=T(null),bt=T(null);function Wt(t,e){switch(J(ut,e),J(ot,t),J(nt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Rp(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Rp(e),t=Op(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}B(nt),J(nt,t)}function Tt(){B(nt),B(ot),B(ut)}function Ne(t){t.memoizedState!==null&&J(bt,t);var e=nt.current,a=Op(e,t.type);e!==a&&(J(ot,t),J(nt,a))}function De(t){ot.current===t&&(B(nt),B(ot)),bt.current===t&&(B(bt),il._currentValue=W)}var ke,Rn;function Se(t){if(ke===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);ke=e&&e[1]||"",Rn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ke+t+Rn}var ps=!1;function gs(t,e){if(!t||ps)return"";ps=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(e){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(z){var R=z}Reflect.construct(t,[],G)}else{try{G.call()}catch(z){R=z}t.call(G.prototype)}}else{try{throw Error()}catch(z){R=z}(G=t())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(z){if(z&&R&&typeof z.stack=="string")return[z.stack,R.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),m=u[0],b=u[1];if(m&&b){var w=m.split(`
`),k=b.split(`
`);for(o=s=0;s<w.length&&!w[s].includes("DetermineComponentFrameRoot");)s++;for(;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;if(s===w.length||o===k.length)for(s=w.length-1,o=k.length-1;1<=s&&0<=o&&w[s]!==k[o];)o--;for(;1<=s&&0<=o;s--,o--)if(w[s]!==k[o]){if(s!==1||o!==1)do if(s--,o--,0>o||w[s]!==k[o]){var _=`
`+w[s].replace(" at new "," at ");return t.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",t.displayName)),_}while(1<=s&&0<=o);break}}}finally{ps=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Se(a):""}function ys(t,e){switch(t.tag){case 26:case 27:case 5:return Se(t.type);case 16:return Se("Lazy");case 13:return t.child!==e&&e!==null?Se("Suspense Fallback"):Se("Suspense");case 19:return Se("SuspenseList");case 0:case 15:return gs(t.type,!1);case 11:return gs(t.type.render,!1);case 1:return gs(t.type,!0);case 31:return Se("Activity");default:return""}}function vs(t){try{var e="",a=null;do e+=ys(t,a),a=t,t=t.return;while(t);return e}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var pi=Object.prototype.hasOwnProperty,gi=n.unstable_scheduleCallback,yi=n.unstable_cancelCallback,jl=n.unstable_shouldYield,Ml=n.unstable_requestPaint,we=n.unstable_now,Nl=n.unstable_getCurrentPriorityLevel,Dl=n.unstable_ImmediatePriority,Ue=n.unstable_UserBlockingPriority,vi=n.unstable_NormalPriority,Mo=n.unstable_LowPriority,bs=n.unstable_IdlePriority,xs=n.log,No=n.unstable_setDisableYieldValue,aa=null,Ae=null;function vn(t){if(typeof xs=="function"&&No(t),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(aa,t)}catch{}}var Ee=Math.clz32?Math.clz32:Ua,Do=Math.log,ko=Math.LN2;function Ua(t){return t>>>=0,t===0?32:31-(Do(t)/ko|0)|0}var Ha=256,bi=262144,xi=4194304;function On(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Si(t,e,a){var s=t.pendingLanes;if(s===0)return 0;var o=0,u=t.suspendedLanes,m=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~u,s!==0?o=On(s):(m&=b,m!==0?o=On(m):a||(a=b&~t,a!==0&&(o=On(a))))):(b=s&~u,b!==0?o=On(b):m!==0?o=On(m):a||(a=s&~t,a!==0&&(o=On(a)))),o===0?0:e!==0&&e!==o&&(e&u)===0&&(u=o&-o,a=e&-e,u>=a||u===32&&(a&4194048)!==0)?e:o}function j(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function tt(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function at(){var t=xi;return xi<<=1,(xi&62914560)===0&&(xi=4194304),t}function ft(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function et(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ht(t,e,a,s,o,u){var m=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,w=t.expirationTimes,k=t.hiddenUpdates;for(a=m&~a;0<a;){var _=31-Ee(a),G=1<<_;b[_]=0,w[_]=-1;var R=k[_];if(R!==null)for(k[_]=null,_=0;_<R.length;_++){var z=R[_];z!==null&&(z.lane&=-536870913)}a&=~G}s!==0&&jt(t,s,0),u!==0&&o===0&&t.tag!==0&&(t.suspendedLanes|=u&~(m&~e))}function jt(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var s=31-Ee(e);t.entangledLanes|=e,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Xt(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var s=31-Ee(a),o=1<<s;o&e|t[s]&e&&(t[s]|=e),a&=~o}}function me(t,e){var a=e&-e;return a=(a&42)!==0?1:bn(a),(a&(t.suspendedLanes|e))!==0?0:a}function bn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function zn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function xn(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:n0(t.type))}function kl(t,e){var a=F.p;try{return F.p=t,e()}finally{F.p=a}}var Fe=Math.random().toString(36).slice(2),ee="__reactFiber$"+Fe,ce="__reactProps$"+Fe,cn="__reactContainer$"+Fe,fn="__reactEvents$"+Fe,wi="__reactListeners$"+Fe,Ga="__reactHandles$"+Fe,Ln="__reactResources$"+Fe,Sn="__reactMarker$"+Fe;function ia(t){delete t[ee],delete t[ce],delete t[fn],delete t[wi],delete t[Ga]}function Vn(t){var e=t[ee];if(e)return e;for(var a=t.parentNode;a;){if(e=a[cn]||a[ee]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Hp(t);t!==null;){if(a=t[ee])return a;t=Hp(t)}return e}t=a,a=t.parentNode}return null}function _n(t){if(t=t[ee]||t[cn]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function qa(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function sa(t){var e=t[Ln];return e||(e=t[Ln]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function fe(t){t[Sn]=!0}var xd=new Set,Sd={};function Ya(t,e){Ti(t,e),Ti(t+"Capture",e)}function Ti(t,e){for(Sd[t]=e,t=0;t<e.length;t++)xd.add(e[t])}var pb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wd={},Td={};function gb(t){return pi.call(Td,t)?!0:pi.call(wd,t)?!1:pb.test(t)?Td[t]=!0:(wd[t]=!0,!1)}function Rl(t,e,a){if(gb(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var s=e.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Ol(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Bn(t,e,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+s)}}function Je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ad(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yb(t,e,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var o=s.get,u=s.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return o.call(this)},set:function(m){a=""+m,u.call(this,m)}}),Object.defineProperty(t,e,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ro(t){if(!t._valueTracker){var e=Ad(t)?"checked":"value";t._valueTracker=yb(t,e,""+t[e])}}function Ed(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),s="";return t&&(s=Ad(t)?t.checked?"true":"false":t.value),t=s,t!==a?(e.setValue(t),!0):!1}function zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var vb=/[\n"\\]/g;function $e(t){return t.replace(vb,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Oo(t,e,a,s,o,u,m,b){t.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.type=m:t.removeAttribute("type"),e!=null?m==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Je(e)):t.value!==""+Je(e)&&(t.value=""+Je(e)):m!=="submit"&&m!=="reset"||t.removeAttribute("value"),e!=null?zo(t,m,Je(e)):a!=null?zo(t,m,Je(a)):s!=null&&t.removeAttribute("value"),o==null&&u!=null&&(t.defaultChecked=!!u),o!=null&&(t.checked=o&&typeof o!="function"&&typeof o!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Je(b):t.removeAttribute("name")}function Cd(t,e,a,s,o,u,m,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){Ro(t);return}a=a!=null?""+Je(a):"",e=e!=null?""+Je(e):a,b||e===t.value||(t.value=e),t.defaultValue=e}s=s??o,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.name=m),Ro(t)}function zo(t,e,a){e==="number"&&zl(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ai(t,e,a,s){if(t=t.options,e){e={};for(var o=0;o<a.length;o++)e["$"+a[o]]=!0;for(a=0;a<t.length;a++)o=e.hasOwnProperty("$"+t[a].value),t[a].selected!==o&&(t[a].selected=o),o&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Je(a),e=null,o=0;o<t.length;o++){if(t[o].value===a){t[o].selected=!0,s&&(t[o].defaultSelected=!0);return}e!==null||t[o].disabled||(e=t[o])}e!==null&&(e.selected=!0)}}function jd(t,e,a){if(e!=null&&(e=""+Je(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Je(a):""}function Md(t,e,a,s){if(e==null){if(s!=null){if(a!=null)throw Error(r(92));if(St(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),e=a}a=Je(e),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Ro(t)}function Ei(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var bb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nd(t,e,a){var s=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":s?t.setProperty(e,a):typeof a!="number"||a===0||bb.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Dd(t,e,a){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||e!=null&&e.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var o in e)s=e[o],e.hasOwnProperty(o)&&a[o]!==s&&Nd(t,o,s)}else for(var u in e)e.hasOwnProperty(u)&&Nd(t,u,e[u])}function Lo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ll(t){return Sb.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Un(){}var Vo=null;function _o(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ci=null,ji=null;function kd(t){var e=_n(t);if(e&&(t=e.stateNode)){var a=t[ce]||null;t:switch(t=e.stateNode,e.type){case"input":if(Oo(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+$e(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var s=a[e];if(s!==t&&s.form===t.form){var o=s[ce]||null;if(!o)throw Error(r(90));Oo(s,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(e=0;e<a.length;e++)s=a[e],s.form===t.form&&Ed(s)}break t;case"textarea":jd(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Ai(t,!!a.multiple,e,!1)}}}var Bo=!1;function Rd(t,e,a){if(Bo)return t(e,a);Bo=!0;try{var s=t(e);return s}finally{if(Bo=!1,(Ci!==null||ji!==null)&&(wr(),Ci&&(e=Ci,t=ji,ji=Ci=null,kd(e),t)))for(e=0;e<t.length;e++)kd(t[e])}}function Ss(t,e){var a=t.stateNode;if(a===null)return null;var s=a[ce]||null;if(s===null)return null;a=s[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,e,typeof a));return a}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uo=!1;if(Hn)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){Uo=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{Uo=!1}var la=null,Ho=null,Vl=null;function Od(){if(Vl)return Vl;var t,e=Ho,a=e.length,s,o="value"in la?la.value:la.textContent,u=o.length;for(t=0;t<a&&e[t]===o[t];t++);var m=a-t;for(s=1;s<=m&&e[a-s]===o[u-s];s++);return Vl=o.slice(t,1<s?1-s:void 0)}function _l(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bl(){return!0}function zd(){return!1}function Re(t){function e(a,s,o,u,m){this._reactName=a,this._targetInst=o,this.type=s,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Bl:zd,this.isPropagationStopped=zd,this}return x(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),e}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ul=Re(Xa),Ts=x({},Xa,{view:0,detail:0}),wb=Re(Ts),Go,qo,As,Hl=x({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==As&&(As&&t.type==="mousemove"?(Go=t.screenX-As.screenX,qo=t.screenY-As.screenY):qo=Go=0,As=t),Go)},movementY:function(t){return"movementY"in t?t.movementY:qo}}),Ld=Re(Hl),Tb=x({},Hl,{dataTransfer:0}),Ab=Re(Tb),Eb=x({},Ts,{relatedTarget:0}),Yo=Re(Eb),Cb=x({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),jb=Re(Cb),Mb=x({},Xa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Nb=Re(Mb),Db=x({},Xa,{data:0}),Vd=Re(Db),kb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ob={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ob[t])?!!e[t]:!1}function Xo(){return zb}var Lb=x({},Ts,{key:function(t){if(t.key){var e=kb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xo,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Vb=Re(Lb),_b=x({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_d=Re(_b),Bb=x({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xo}),Ub=Re(Bb),Hb=x({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gb=Re(Hb),qb=x({},Hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yb=Re(qb),Xb=x({},Xa,{newState:0,oldState:0}),Kb=Re(Xb),Qb=[9,13,27,32],Ko=Hn&&"CompositionEvent"in window,Es=null;Hn&&"documentMode"in document&&(Es=document.documentMode);var Zb=Hn&&"TextEvent"in window&&!Es,Bd=Hn&&(!Ko||Es&&8<Es&&11>=Es),Ud=" ",Hd=!1;function Gd(t,e){switch(t){case"keyup":return Qb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mi=!1;function Pb(t,e){switch(t){case"compositionend":return qd(e);case"keypress":return e.which!==32?null:(Hd=!0,Ud);case"textInput":return t=e.data,t===Ud&&Hd?null:t;default:return null}}function Fb(t,e){if(Mi)return t==="compositionend"||!Ko&&Gd(t,e)?(t=Od(),Vl=Ho=la=null,Mi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bd&&e.locale!=="ko"?null:e.data;default:return null}}var Jb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Jb[t.type]:e==="textarea"}function Xd(t,e,a,s){Ci?ji?ji.push(s):ji=[s]:Ci=s,e=Nr(e,"onChange"),0<e.length&&(a=new Ul("onChange","change",null,a,s),t.push({event:a,listeners:e}))}var Cs=null,js=null;function $b(t){Cp(t,0)}function Gl(t){var e=qa(t);if(Ed(e))return t}function Kd(t,e){if(t==="change")return e}var Qd=!1;if(Hn){var Qo;if(Hn){var Zo="oninput"in document;if(!Zo){var Zd=document.createElement("div");Zd.setAttribute("oninput","return;"),Zo=typeof Zd.oninput=="function"}Qo=Zo}else Qo=!1;Qd=Qo&&(!document.documentMode||9<document.documentMode)}function Pd(){Cs&&(Cs.detachEvent("onpropertychange",Fd),js=Cs=null)}function Fd(t){if(t.propertyName==="value"&&Gl(js)){var e=[];Xd(e,js,t,_o(t)),Rd($b,e)}}function Wb(t,e,a){t==="focusin"?(Pd(),Cs=e,js=a,Cs.attachEvent("onpropertychange",Fd)):t==="focusout"&&Pd()}function Ib(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gl(js)}function tx(t,e){if(t==="click")return Gl(e)}function ex(t,e){if(t==="input"||t==="change")return Gl(e)}function nx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var He=typeof Object.is=="function"?Object.is:nx;function Ms(t,e){if(He(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),s=Object.keys(e);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var o=a[s];if(!pi.call(e,o)||!He(t[o],e[o]))return!1}return!0}function Jd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $d(t,e){var a=Jd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=e&&s>=e)return{node:a,offset:e-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Jd(a)}}function Wd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Wd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Id(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=zl(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=zl(t.document)}return e}function Po(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var ax=Hn&&"documentMode"in document&&11>=document.documentMode,Ni=null,Fo=null,Ns=null,Jo=!1;function th(t,e,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jo||Ni==null||Ni!==zl(s)||(s=Ni,"selectionStart"in s&&Po(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ns&&Ms(Ns,s)||(Ns=s,s=Nr(Fo,"onSelect"),0<s.length&&(e=new Ul("onSelect","select",null,e,a),t.push({event:e,listeners:s}),e.target=Ni)))}function Ka(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Di={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},$o={},eh={};Hn&&(eh=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function Qa(t){if($o[t])return $o[t];if(!Di[t])return t;var e=Di[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in eh)return $o[t]=e[a];return t}var nh=Qa("animationend"),ah=Qa("animationiteration"),ih=Qa("animationstart"),ix=Qa("transitionrun"),sx=Qa("transitionstart"),lx=Qa("transitioncancel"),sh=Qa("transitionend"),lh=new Map,Wo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wo.push("scrollEnd");function dn(t,e){lh.set(t,e),Ya(e,[t])}var ql=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},We=[],ki=0,Io=0;function Yl(){for(var t=ki,e=Io=ki=0;e<t;){var a=We[e];We[e++]=null;var s=We[e];We[e++]=null;var o=We[e];We[e++]=null;var u=We[e];if(We[e++]=null,s!==null&&o!==null){var m=s.pending;m===null?o.next=o:(o.next=m.next,m.next=o),s.pending=o}u!==0&&rh(a,o,u)}}function Xl(t,e,a,s){We[ki++]=t,We[ki++]=e,We[ki++]=a,We[ki++]=s,Io|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function tu(t,e,a,s){return Xl(t,e,a,s),Kl(t)}function Za(t,e){return Xl(t,null,null,e),Kl(t)}function rh(t,e,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var o=!1,u=t.return;u!==null;)u.childLanes|=a,s=u.alternate,s!==null&&(s.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(o=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,o&&e!==null&&(o=31-Ee(a),t=u.hiddenUpdates,s=t[o],s===null?t[o]=[e]:s.push(e),e.lane=a|536870912),u):null}function Kl(t){if(50<$s)throw $s=0,uc=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ri={};function rx(t,e,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(t,e,a,s){return new rx(t,e,a,s)}function eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gn(t,e){var a=t.alternate;return a===null?(a=Ge(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function oh(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ql(t,e,a,s,o,u){var m=0;if(s=t,typeof t=="function")eu(t)&&(m=1);else if(typeof t=="string")m=d1(t,a,nt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case P:return t=Ge(31,a,e,o),t.elementType=P,t.lanes=u,t;case L:return Pa(a.children,o,u,e);case V:m=8,o|=24;break;case q:return t=Ge(12,a,e,o|2),t.elementType=q,t.lanes=u,t;case $:return t=Ge(13,a,e,o),t.elementType=$,t.lanes=u,t;case dt:return t=Ge(19,a,e,o),t.elementType=dt,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y:m=10;break t;case K:m=9;break t;case X:m=11;break t;case I:m=14;break t;case M:m=16,s=null;break t}m=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return e=Ge(m,a,e,o),e.elementType=t,e.type=s,e.lanes=u,e}function Pa(t,e,a,s){return t=Ge(7,t,s,e),t.lanes=a,t}function nu(t,e,a){return t=Ge(6,t,null,e),t.lanes=a,t}function uh(t){var e=Ge(18,null,null,0);return e.stateNode=t,e}function au(t,e,a){return e=Ge(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var ch=new WeakMap;function Ie(t,e){if(typeof t=="object"&&t!==null){var a=ch.get(t);return a!==void 0?a:(e={value:t,source:e,stack:vs(e)},ch.set(t,e),e)}return{value:t,source:e,stack:vs(e)}}var Oi=[],zi=0,Zl=null,Ds=0,tn=[],en=0,ra=null,wn=1,Tn="";function qn(t,e){Oi[zi++]=Ds,Oi[zi++]=Zl,Zl=t,Ds=e}function fh(t,e,a){tn[en++]=wn,tn[en++]=Tn,tn[en++]=ra,ra=t;var s=wn;t=Tn;var o=32-Ee(s)-1;s&=~(1<<o),a+=1;var u=32-Ee(e)+o;if(30<u){var m=o-o%5;u=(s&(1<<m)-1).toString(32),s>>=m,o-=m,wn=1<<32-Ee(e)+o|a<<o|s,Tn=u+t}else wn=1<<u|a<<o|s,Tn=t}function iu(t){t.return!==null&&(qn(t,1),fh(t,1,0))}function su(t){for(;t===Zl;)Zl=Oi[--zi],Oi[zi]=null,Ds=Oi[--zi],Oi[zi]=null;for(;t===ra;)ra=tn[--en],tn[en]=null,Tn=tn[--en],tn[en]=null,wn=tn[--en],tn[en]=null}function dh(t,e){tn[en++]=wn,tn[en++]=Tn,tn[en++]=ra,wn=e.id,Tn=e.overflow,ra=t}var pe=null,Kt=null,Ot=!1,oa=null,nn=!1,lu=Error(r(519));function ua(t){var e=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ks(Ie(e,t)),lu}function hh(t){var e=t.stateNode,a=t.type,s=t.memoizedProps;switch(e[ee]=t,e[ce]=s,a){case"dialog":Nt("cancel",e),Nt("close",e);break;case"iframe":case"object":case"embed":Nt("load",e);break;case"video":case"audio":for(a=0;a<Is.length;a++)Nt(Is[a],e);break;case"source":Nt("error",e);break;case"img":case"image":case"link":Nt("error",e),Nt("load",e);break;case"details":Nt("toggle",e);break;case"input":Nt("invalid",e),Cd(e,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Nt("invalid",e);break;case"textarea":Nt("invalid",e),Md(e,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||s.suppressHydrationWarning===!0||Dp(e.textContent,a)?(s.popover!=null&&(Nt("beforetoggle",e),Nt("toggle",e)),s.onScroll!=null&&Nt("scroll",e),s.onScrollEnd!=null&&Nt("scrollend",e),s.onClick!=null&&(e.onclick=Un),e=!0):e=!1,e||ua(t,!0)}function mh(t){for(pe=t.return;pe;)switch(pe.tag){case 5:case 31:case 13:nn=!1;return;case 27:case 3:nn=!0;return;default:pe=pe.return}}function Li(t){if(t!==pe)return!1;if(!Ot)return mh(t),Ot=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ac(t.type,t.memoizedProps)),a=!a),a&&Kt&&ua(t),mh(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=Up(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=Up(t)}else e===27?(e=Kt,Ta(t.type)?(t=Nc,Nc=null,Kt=t):Kt=e):Kt=pe?sn(t.stateNode.nextSibling):null;return!0}function Fa(){Kt=pe=null,Ot=!1}function ru(){var t=oa;return t!==null&&(Ve===null?Ve=t:Ve.push.apply(Ve,t),oa=null),t}function ks(t){oa===null?oa=[t]:oa.push(t)}var ou=T(null),Ja=null,Yn=null;function ca(t,e,a){J(ou,e._currentValue),e._currentValue=a}function Xn(t){t._currentValue=ou.current,B(ou)}function uu(t,e,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,s!==null&&(s.childLanes|=e)):s!==null&&(s.childLanes&e)!==e&&(s.childLanes|=e),t===a)break;t=t.return}}function cu(t,e,a,s){var o=t.child;for(o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){var m=o.child;u=u.firstContext;t:for(;u!==null;){var b=u;u=o;for(var w=0;w<e.length;w++)if(b.context===e[w]){u.lanes|=a,b=u.alternate,b!==null&&(b.lanes|=a),uu(u.return,a,t),s||(m=null);break t}u=b.next}}else if(o.tag===18){if(m=o.return,m===null)throw Error(r(341));m.lanes|=a,u=m.alternate,u!==null&&(u.lanes|=a),uu(m,a,t),m=null}else m=o.child;if(m!==null)m.return=o;else for(m=o;m!==null;){if(m===t){m=null;break}if(o=m.sibling,o!==null){o.return=m.return,m=o;break}m=m.return}o=m}}function Vi(t,e,a,s){t=null;for(var o=e,u=!1;o!==null;){if(!u){if((o.flags&524288)!==0)u=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var m=o.alternate;if(m===null)throw Error(r(387));if(m=m.memoizedProps,m!==null){var b=o.type;He(o.pendingProps.value,m.value)||(t!==null?t.push(b):t=[b])}}else if(o===bt.current){if(m=o.alternate,m===null)throw Error(r(387));m.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(t!==null?t.push(il):t=[il])}o=o.return}t!==null&&cu(e,t,a,s),e.flags|=262144}function Pl(t){for(t=t.firstContext;t!==null;){if(!He(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function $a(t){Ja=t,Yn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ge(t){return ph(Ja,t)}function Fl(t,e){return Ja===null&&$a(t),ph(t,e)}function ph(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Yn===null){if(t===null)throw Error(r(308));Yn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Yn=Yn.next=e;return a}var ox=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},ux=n.unstable_scheduleCallback,cx=n.unstable_NormalPriority,ne={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fu(){return{controller:new ox,data:new Map,refCount:0}}function Rs(t){t.refCount--,t.refCount===0&&ux(cx,function(){t.controller.abort()})}var Os=null,du=0,_i=0,Bi=null;function fx(t,e){if(Os===null){var a=Os=[];du=0,_i=pc(),Bi={status:"pending",value:void 0,then:function(s){a.push(s)}}}return du++,e.then(gh,gh),e}function gh(){if(--du===0&&Os!==null){Bi!==null&&(Bi.status="fulfilled");var t=Os;Os=null,_i=0,Bi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function dx(t,e){var a=[],s={status:"pending",value:null,reason:null,then:function(o){a.push(o)}};return t.then(function(){s.status="fulfilled",s.value=e;for(var o=0;o<a.length;o++)(0,a[o])(e)},function(o){for(s.status="rejected",s.reason=o,o=0;o<a.length;o++)(0,a[o])(void 0)}),s}var yh=O.S;O.S=function(t,e){tp=we(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&fx(t,e),yh!==null&&yh(t,e)};var Wa=T(null);function hu(){var t=Wa.current;return t!==null?t:qt.pooledCache}function Jl(t,e){e===null?J(Wa,Wa.current):J(Wa,e.pool)}function vh(){var t=hu();return t===null?null:{parent:ne._currentValue,pool:t}}var Ui=Error(r(460)),mu=Error(r(474)),$l=Error(r(542)),Wl={then:function(){}};function bh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function xh(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Un,Un),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,wh(t),t;default:if(typeof e.status=="string")e.then(Un,Un);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(s){if(e.status==="pending"){var o=e;o.status="fulfilled",o.value=s}},function(s){if(e.status==="pending"){var o=e;o.status="rejected",o.reason=s}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,wh(t),t}throw ti=e,Ui}}function Ia(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ti=a,Ui):a}}var ti=null;function Sh(){if(ti===null)throw Error(r(459));var t=ti;return ti=null,t}function wh(t){if(t===Ui||t===$l)throw Error(r(483))}var Hi=null,zs=0;function Il(t){var e=zs;return zs+=1,Hi===null&&(Hi=[]),xh(Hi,t,e)}function Ls(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function tr(t,e){throw e.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Th(t){function e(C,A){if(t){var D=C.deletions;D===null?(C.deletions=[A],C.flags|=16):D.push(A)}}function a(C,A){if(!t)return null;for(;A!==null;)e(C,A),A=A.sibling;return null}function s(C){for(var A=new Map;C!==null;)C.key!==null?A.set(C.key,C):A.set(C.index,C),C=C.sibling;return A}function o(C,A){return C=Gn(C,A),C.index=0,C.sibling=null,C}function u(C,A,D){return C.index=D,t?(D=C.alternate,D!==null?(D=D.index,D<A?(C.flags|=67108866,A):D):(C.flags|=67108866,A)):(C.flags|=1048576,A)}function m(C){return t&&C.alternate===null&&(C.flags|=67108866),C}function b(C,A,D,U){return A===null||A.tag!==6?(A=nu(D,C.mode,U),A.return=C,A):(A=o(A,D),A.return=C,A)}function w(C,A,D,U){var pt=D.type;return pt===L?_(C,A,D.props.children,U,D.key):A!==null&&(A.elementType===pt||typeof pt=="object"&&pt!==null&&pt.$$typeof===M&&Ia(pt)===A.type)?(A=o(A,D.props),Ls(A,D),A.return=C,A):(A=Ql(D.type,D.key,D.props,null,C.mode,U),Ls(A,D),A.return=C,A)}function k(C,A,D,U){return A===null||A.tag!==4||A.stateNode.containerInfo!==D.containerInfo||A.stateNode.implementation!==D.implementation?(A=au(D,C.mode,U),A.return=C,A):(A=o(A,D.children||[]),A.return=C,A)}function _(C,A,D,U,pt){return A===null||A.tag!==7?(A=Pa(D,C.mode,U,pt),A.return=C,A):(A=o(A,D),A.return=C,A)}function G(C,A,D){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=nu(""+A,C.mode,D),A.return=C,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case E:return D=Ql(A.type,A.key,A.props,null,C.mode,D),Ls(D,A),D.return=C,D;case N:return A=au(A,C.mode,D),A.return=C,A;case M:return A=Ia(A),G(C,A,D)}if(St(A)||gt(A))return A=Pa(A,C.mode,D,null),A.return=C,A;if(typeof A.then=="function")return G(C,Il(A),D);if(A.$$typeof===Y)return G(C,Fl(C,A),D);tr(C,A)}return null}function R(C,A,D,U){var pt=A!==null?A.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return pt!==null?null:b(C,A,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case E:return D.key===pt?w(C,A,D,U):null;case N:return D.key===pt?k(C,A,D,U):null;case M:return D=Ia(D),R(C,A,D,U)}if(St(D)||gt(D))return pt!==null?null:_(C,A,D,U,null);if(typeof D.then=="function")return R(C,A,Il(D),U);if(D.$$typeof===Y)return R(C,A,Fl(C,D),U);tr(C,D)}return null}function z(C,A,D,U,pt){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return C=C.get(D)||null,b(A,C,""+U,pt);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case E:return C=C.get(U.key===null?D:U.key)||null,w(A,C,U,pt);case N:return C=C.get(U.key===null?D:U.key)||null,k(A,C,U,pt);case M:return U=Ia(U),z(C,A,D,U,pt)}if(St(U)||gt(U))return C=C.get(D)||null,_(A,C,U,pt,null);if(typeof U.then=="function")return z(C,A,D,Il(U),pt);if(U.$$typeof===Y)return z(C,A,D,Fl(A,U),pt);tr(A,U)}return null}function it(C,A,D,U){for(var pt=null,zt=null,ct=A,At=A=0,Rt=null;ct!==null&&At<D.length;At++){ct.index>At?(Rt=ct,ct=null):Rt=ct.sibling;var Lt=R(C,ct,D[At],U);if(Lt===null){ct===null&&(ct=Rt);break}t&&ct&&Lt.alternate===null&&e(C,ct),A=u(Lt,A,At),zt===null?pt=Lt:zt.sibling=Lt,zt=Lt,ct=Rt}if(At===D.length)return a(C,ct),Ot&&qn(C,At),pt;if(ct===null){for(;At<D.length;At++)ct=G(C,D[At],U),ct!==null&&(A=u(ct,A,At),zt===null?pt=ct:zt.sibling=ct,zt=ct);return Ot&&qn(C,At),pt}for(ct=s(ct);At<D.length;At++)Rt=z(ct,C,At,D[At],U),Rt!==null&&(t&&Rt.alternate!==null&&ct.delete(Rt.key===null?At:Rt.key),A=u(Rt,A,At),zt===null?pt=Rt:zt.sibling=Rt,zt=Rt);return t&&ct.forEach(function(Ma){return e(C,Ma)}),Ot&&qn(C,At),pt}function yt(C,A,D,U){if(D==null)throw Error(r(151));for(var pt=null,zt=null,ct=A,At=A=0,Rt=null,Lt=D.next();ct!==null&&!Lt.done;At++,Lt=D.next()){ct.index>At?(Rt=ct,ct=null):Rt=ct.sibling;var Ma=R(C,ct,Lt.value,U);if(Ma===null){ct===null&&(ct=Rt);break}t&&ct&&Ma.alternate===null&&e(C,ct),A=u(Ma,A,At),zt===null?pt=Ma:zt.sibling=Ma,zt=Ma,ct=Rt}if(Lt.done)return a(C,ct),Ot&&qn(C,At),pt;if(ct===null){for(;!Lt.done;At++,Lt=D.next())Lt=G(C,Lt.value,U),Lt!==null&&(A=u(Lt,A,At),zt===null?pt=Lt:zt.sibling=Lt,zt=Lt);return Ot&&qn(C,At),pt}for(ct=s(ct);!Lt.done;At++,Lt=D.next())Lt=z(ct,C,At,Lt.value,U),Lt!==null&&(t&&Lt.alternate!==null&&ct.delete(Lt.key===null?At:Lt.key),A=u(Lt,A,At),zt===null?pt=Lt:zt.sibling=Lt,zt=Lt);return t&&ct.forEach(function(T1){return e(C,T1)}),Ot&&qn(C,At),pt}function Gt(C,A,D,U){if(typeof D=="object"&&D!==null&&D.type===L&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case E:t:{for(var pt=D.key;A!==null;){if(A.key===pt){if(pt=D.type,pt===L){if(A.tag===7){a(C,A.sibling),U=o(A,D.props.children),U.return=C,C=U;break t}}else if(A.elementType===pt||typeof pt=="object"&&pt!==null&&pt.$$typeof===M&&Ia(pt)===A.type){a(C,A.sibling),U=o(A,D.props),Ls(U,D),U.return=C,C=U;break t}a(C,A);break}else e(C,A);A=A.sibling}D.type===L?(U=Pa(D.props.children,C.mode,U,D.key),U.return=C,C=U):(U=Ql(D.type,D.key,D.props,null,C.mode,U),Ls(U,D),U.return=C,C=U)}return m(C);case N:t:{for(pt=D.key;A!==null;){if(A.key===pt)if(A.tag===4&&A.stateNode.containerInfo===D.containerInfo&&A.stateNode.implementation===D.implementation){a(C,A.sibling),U=o(A,D.children||[]),U.return=C,C=U;break t}else{a(C,A);break}else e(C,A);A=A.sibling}U=au(D,C.mode,U),U.return=C,C=U}return m(C);case M:return D=Ia(D),Gt(C,A,D,U)}if(St(D))return it(C,A,D,U);if(gt(D)){if(pt=gt(D),typeof pt!="function")throw Error(r(150));return D=pt.call(D),yt(C,A,D,U)}if(typeof D.then=="function")return Gt(C,A,Il(D),U);if(D.$$typeof===Y)return Gt(C,A,Fl(C,D),U);tr(C,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,A!==null&&A.tag===6?(a(C,A.sibling),U=o(A,D),U.return=C,C=U):(a(C,A),U=nu(D,C.mode,U),U.return=C,C=U),m(C)):a(C,A)}return function(C,A,D,U){try{zs=0;var pt=Gt(C,A,D,U);return Hi=null,pt}catch(ct){if(ct===Ui||ct===$l)throw ct;var zt=Ge(29,ct,null,C.mode);return zt.lanes=U,zt.return=C,zt}finally{}}}var ei=Th(!0),Ah=Th(!1),fa=!1;function pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ha(t,e,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Vt&2)!==0){var o=s.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),s.pending=e,e=Kl(t),rh(t,null,a),e}return Xl(t,s,e,a),Kl(t)}function Vs(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var s=e.lanes;s&=t.pendingLanes,a|=s,e.lanes=a,Xt(t,a)}}function yu(t,e){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var o=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?o=u=m:u=u.next=m,a=a.next}while(a!==null);u===null?o=u=e:u=u.next=e}else o=u=e;a={baseState:s.baseState,firstBaseUpdate:o,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var vu=!1;function _s(){if(vu){var t=Bi;if(t!==null)throw t}}function Bs(t,e,a,s){vu=!1;var o=t.updateQueue;fa=!1;var u=o.firstBaseUpdate,m=o.lastBaseUpdate,b=o.shared.pending;if(b!==null){o.shared.pending=null;var w=b,k=w.next;w.next=null,m===null?u=k:m.next=k,m=w;var _=t.alternate;_!==null&&(_=_.updateQueue,b=_.lastBaseUpdate,b!==m&&(b===null?_.firstBaseUpdate=k:b.next=k,_.lastBaseUpdate=w))}if(u!==null){var G=o.baseState;m=0,_=k=w=null,b=u;do{var R=b.lane&-536870913,z=R!==b.lane;if(z?(kt&R)===R:(s&R)===R){R!==0&&R===_i&&(vu=!0),_!==null&&(_=_.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var it=t,yt=b;R=e;var Gt=a;switch(yt.tag){case 1:if(it=yt.payload,typeof it=="function"){G=it.call(Gt,G,R);break t}G=it;break t;case 3:it.flags=it.flags&-65537|128;case 0:if(it=yt.payload,R=typeof it=="function"?it.call(Gt,G,R):it,R==null)break t;G=x({},G,R);break t;case 2:fa=!0}}R=b.callback,R!==null&&(t.flags|=64,z&&(t.flags|=8192),z=o.callbacks,z===null?o.callbacks=[R]:z.push(R))}else z={lane:R,tag:b.tag,payload:b.payload,callback:b.callback,next:null},_===null?(k=_=z,w=G):_=_.next=z,m|=R;if(b=b.next,b===null){if(b=o.shared.pending,b===null)break;z=b,b=z.next,z.next=null,o.lastBaseUpdate=z,o.shared.pending=null}}while(!0);_===null&&(w=G),o.baseState=w,o.firstBaseUpdate=k,o.lastBaseUpdate=_,u===null&&(o.shared.lanes=0),va|=m,t.lanes=m,t.memoizedState=G}}function Eh(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function Ch(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Eh(a[t],e)}var Gi=T(null),er=T(0);function jh(t,e){t=In,J(er,t),J(Gi,e),In=t|e.baseLanes}function bu(){J(er,In),J(Gi,Gi.current)}function xu(){In=er.current,B(Gi),B(er)}var qe=T(null),an=null;function ma(t){var e=t.alternate;J(It,It.current&1),J(qe,t),an===null&&(e===null||Gi.current!==null||e.memoizedState!==null)&&(an=t)}function Su(t){J(It,It.current),J(qe,t),an===null&&(an=t)}function Mh(t){t.tag===22?(J(It,It.current),J(qe,t),an===null&&(an=t)):pa()}function pa(){J(It,It.current),J(qe,qe.current)}function Ye(t){B(qe),an===t&&(an=null),B(It)}var It=T(0);function nr(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jc(a)||Mc(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kn=0,wt=null,Ut=null,ae=null,ar=!1,qi=!1,ni=!1,ir=0,Us=0,Yi=null,hx=0;function Ft(){throw Error(r(321))}function wu(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!He(t[a],e[a]))return!1;return!0}function Tu(t,e,a,s,o,u){return Kn=u,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,O.H=t===null||t.memoizedState===null?fm:Bu,ni=!1,u=a(s,o),ni=!1,qi&&(u=Dh(e,a,s,o)),Nh(t),u}function Nh(t){O.H=qs;var e=Ut!==null&&Ut.next!==null;if(Kn=0,ae=Ut=wt=null,ar=!1,Us=0,Yi=null,e)throw Error(r(300));t===null||ie||(t=t.dependencies,t!==null&&Pl(t)&&(ie=!0))}function Dh(t,e,a,s){wt=t;var o=0;do{if(qi&&(Yi=null),Us=0,qi=!1,25<=o)throw Error(r(301));if(o+=1,ae=Ut=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}O.H=dm,u=e(a,s)}while(qi);return u}function mx(){var t=O.H,e=t.useState()[0];return e=typeof e.then=="function"?Hs(e):e,t=t.useState()[0],(Ut!==null?Ut.memoizedState:null)!==t&&(wt.flags|=1024),e}function Au(){var t=ir!==0;return ir=0,t}function Eu(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Cu(t){if(ar){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ar=!1}Kn=0,ae=Ut=wt=null,qi=!1,Us=ir=0,Yi=null}function Ce(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?wt.memoizedState=ae=t:ae=ae.next=t,ae}function te(){if(Ut===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=ae===null?wt.memoizedState:ae.next;if(e!==null)ae=e,Ut=t;else{if(t===null)throw wt.alternate===null?Error(r(467)):Error(r(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},ae===null?wt.memoizedState=ae=t:ae=ae.next=t}return ae}function sr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Hs(t){var e=Us;return Us+=1,Yi===null&&(Yi=[]),t=xh(Yi,t,e),e=wt,(ae===null?e.memoizedState:ae.next)===null&&(e=e.alternate,O.H=e===null||e.memoizedState===null?fm:Bu),t}function lr(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Hs(t);if(t.$$typeof===Y)return ge(t)}throw Error(r(438,String(t)))}function ju(t){var e=null,a=wt.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var s=wt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(e={data:s.data.map(function(o){return o.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=sr(),wt.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),s=0;s<t;s++)a[s]=Q;return e.index++,a}function Qn(t,e){return typeof e=="function"?e(t):e}function rr(t){var e=te();return Mu(e,Ut,t)}function Mu(t,e,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var o=t.baseQueue,u=s.pending;if(u!==null){if(o!==null){var m=o.next;o.next=u.next,u.next=m}e.baseQueue=o=u,s.pending=null}if(u=t.baseState,o===null)t.memoizedState=u;else{e=o.next;var b=m=null,w=null,k=e,_=!1;do{var G=k.lane&-536870913;if(G!==k.lane?(kt&G)===G:(Kn&G)===G){var R=k.revertLane;if(R===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),G===_i&&(_=!0);else if((Kn&R)===R){k=k.next,R===_i&&(_=!0);continue}else G={lane:0,revertLane:k.revertLane,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},w===null?(b=w=G,m=u):w=w.next=G,wt.lanes|=R,va|=R;G=k.action,ni&&a(u,G),u=k.hasEagerState?k.eagerState:a(u,G)}else R={lane:G,revertLane:k.revertLane,gesture:k.gesture,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},w===null?(b=w=R,m=u):w=w.next=R,wt.lanes|=G,va|=G;k=k.next}while(k!==null&&k!==e);if(w===null?m=u:w.next=b,!He(u,t.memoizedState)&&(ie=!0,_&&(a=Bi,a!==null)))throw a;t.memoizedState=u,t.baseState=m,t.baseQueue=w,s.lastRenderedState=u}return o===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Nu(t){var e=te(),a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,o=a.pending,u=e.memoizedState;if(o!==null){a.pending=null;var m=o=o.next;do u=t(u,m.action),m=m.next;while(m!==o);He(u,e.memoizedState)||(ie=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),a.lastRenderedState=u}return[u,s]}function kh(t,e,a){var s=wt,o=te(),u=Ot;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=e();var m=!He((Ut||o).memoizedState,a);if(m&&(o.memoizedState=a,ie=!0),o=o.queue,Ru(zh.bind(null,s,o,t),[t]),o.getSnapshot!==e||m||ae!==null&&ae.memoizedState.tag&1){if(s.flags|=2048,Xi(9,{destroy:void 0},Oh.bind(null,s,o,a,e),null),qt===null)throw Error(r(349));u||(Kn&127)!==0||Rh(s,e,a)}return a}function Rh(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=wt.updateQueue,e===null?(e=sr(),wt.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Oh(t,e,a,s){e.value=a,e.getSnapshot=s,Lh(e)&&Vh(t)}function zh(t,e,a){return a(function(){Lh(e)&&Vh(t)})}function Lh(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!He(t,a)}catch{return!0}}function Vh(t){var e=Za(t,2);e!==null&&_e(e,t,2)}function Du(t){var e=Ce();if(typeof t=="function"){var a=t;if(t=a(),ni){vn(!0);try{a()}finally{vn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:t},e}function _h(t,e,a,s){return t.baseState=a,Mu(t,Ut,typeof s=="function"?s:Qn)}function px(t,e,a,s,o){if(cr(t))throw Error(r(485));if(t=e.action,t!==null){var u={payload:o,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};O.T!==null?a(!0):u.isTransition=!1,s(u),a=e.pending,a===null?(u.next=e.pending=u,Bh(e,u)):(u.next=a.next,e.pending=a.next=u)}}function Bh(t,e){var a=e.action,s=e.payload,o=t.state;if(e.isTransition){var u=O.T,m={};O.T=m;try{var b=a(o,s),w=O.S;w!==null&&w(m,b),Uh(t,e,b)}catch(k){ku(t,e,k)}finally{u!==null&&m.types!==null&&(u.types=m.types),O.T=u}}else try{u=a(o,s),Uh(t,e,u)}catch(k){ku(t,e,k)}}function Uh(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Hh(t,e,s)},function(s){return ku(t,e,s)}):Hh(t,e,a)}function Hh(t,e,a){e.status="fulfilled",e.value=a,Gh(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Bh(t,a)))}function ku(t,e,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do e.status="rejected",e.reason=a,Gh(e),e=e.next;while(e!==s)}t.action=null}function Gh(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function qh(t,e){return e}function Yh(t,e){if(Ot){var a=qt.formState;if(a!==null){t:{var s=wt;if(Ot){if(Kt){e:{for(var o=Kt,u=nn;o.nodeType!==8;){if(!u){o=null;break e}if(o=sn(o.nextSibling),o===null){o=null;break e}}u=o.data,o=u==="F!"||u==="F"?o:null}if(o){Kt=sn(o.nextSibling),s=o.data==="F!";break t}}ua(s)}s=!1}s&&(e=a[0])}}return a=Ce(),a.memoizedState=a.baseState=e,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qh,lastRenderedState:e},a.queue=s,a=om.bind(null,wt,s),s.dispatch=a,s=Du(!1),u=_u.bind(null,wt,!1,s.queue),s=Ce(),o={state:e,dispatch:null,action:t,pending:null},s.queue=o,a=px.bind(null,wt,o,u,a),o.dispatch=a,s.memoizedState=t,[e,a,!1]}function Xh(t){var e=te();return Kh(e,Ut,t)}function Kh(t,e,a){if(e=Mu(t,e,qh)[0],t=rr(Qn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var s=Hs(e)}catch(m){throw m===Ui?$l:m}else s=e;e=te();var o=e.queue,u=o.dispatch;return a!==e.memoizedState&&(wt.flags|=2048,Xi(9,{destroy:void 0},gx.bind(null,o,a),null)),[s,u,t]}function gx(t,e){t.action=e}function Qh(t){var e=te(),a=Ut;if(a!==null)return Kh(e,a,t);te(),e=e.memoizedState,a=te();var s=a.queue.dispatch;return a.memoizedState=t,[e,s,!1]}function Xi(t,e,a,s){return t={tag:t,create:a,deps:s,inst:e,next:null},e=wt.updateQueue,e===null&&(e=sr(),wt.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,e.lastEffect=t),t}function Zh(){return te().memoizedState}function or(t,e,a,s){var o=Ce();wt.flags|=t,o.memoizedState=Xi(1|e,{destroy:void 0},a,s===void 0?null:s)}function ur(t,e,a,s){var o=te();s=s===void 0?null:s;var u=o.memoizedState.inst;Ut!==null&&s!==null&&wu(s,Ut.memoizedState.deps)?o.memoizedState=Xi(e,u,a,s):(wt.flags|=t,o.memoizedState=Xi(1|e,u,a,s))}function Ph(t,e){or(8390656,8,t,e)}function Ru(t,e){ur(2048,8,t,e)}function yx(t){wt.flags|=4;var e=wt.updateQueue;if(e===null)e=sr(),wt.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function Fh(t){var e=te().memoizedState;return yx({ref:e,nextImpl:t}),function(){if((Vt&2)!==0)throw Error(r(440));return e.impl.apply(void 0,arguments)}}function Jh(t,e){return ur(4,2,t,e)}function $h(t,e){return ur(4,4,t,e)}function Wh(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ih(t,e,a){a=a!=null?a.concat([t]):null,ur(4,4,Wh.bind(null,e,t),a)}function Ou(){}function tm(t,e){var a=te();e=e===void 0?null:e;var s=a.memoizedState;return e!==null&&wu(e,s[1])?s[0]:(a.memoizedState=[t,e],t)}function em(t,e){var a=te();e=e===void 0?null:e;var s=a.memoizedState;if(e!==null&&wu(e,s[1]))return s[0];if(s=t(),ni){vn(!0);try{t()}finally{vn(!1)}}return a.memoizedState=[s,e],s}function zu(t,e,a){return a===void 0||(Kn&1073741824)!==0&&(kt&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=np(),wt.lanes|=t,va|=t,a)}function nm(t,e,a,s){return He(a,e)?a:Gi.current!==null?(t=zu(t,a,s),He(t,e)||(ie=!0),t):(Kn&42)===0||(Kn&1073741824)!==0&&(kt&261930)===0?(ie=!0,t.memoizedState=a):(t=np(),wt.lanes|=t,va|=t,e)}function am(t,e,a,s,o){var u=F.p;F.p=u!==0&&8>u?u:8;var m=O.T,b={};O.T=b,_u(t,!1,e,a);try{var w=o(),k=O.S;if(k!==null&&k(b,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var _=dx(w,s);Gs(t,e,_,Qe(t))}else Gs(t,e,s,Qe(t))}catch(G){Gs(t,e,{then:function(){},status:"rejected",reason:G},Qe())}finally{F.p=u,m!==null&&b.types!==null&&(m.types=b.types),O.T=m}}function vx(){}function Lu(t,e,a,s){if(t.tag!==5)throw Error(r(476));var o=im(t).queue;am(t,o,e,W,a===null?vx:function(){return sm(t),a(s)})}function im(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:W},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function sm(t){var e=im(t);e.next===null&&(e=t.alternate.memoizedState),Gs(t,e.next.queue,{},Qe())}function Vu(){return ge(il)}function lm(){return te().memoizedState}function rm(){return te().memoizedState}function bx(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Qe();t=da(a);var s=ha(e,t,a);s!==null&&(_e(s,e,a),Vs(s,e,a)),e={cache:fu()},t.payload=e;return}e=e.return}}function xx(t,e,a){var s=Qe();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},cr(t)?um(e,a):(a=tu(t,e,a,s),a!==null&&(_e(a,t,s),cm(a,e,s)))}function om(t,e,a){var s=Qe();Gs(t,e,a,s)}function Gs(t,e,a,s){var o={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(cr(t))um(e,o);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var m=e.lastRenderedState,b=u(m,a);if(o.hasEagerState=!0,o.eagerState=b,He(b,m))return Xl(t,e,o,0),qt===null&&Yl(),!1}catch{}finally{}if(a=tu(t,e,o,s),a!==null)return _e(a,t,s),cm(a,e,s),!0}return!1}function _u(t,e,a,s){if(s={lane:2,revertLane:pc(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},cr(t)){if(e)throw Error(r(479))}else e=tu(t,a,s,2),e!==null&&_e(e,t,2)}function cr(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function um(t,e){qi=ar=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function cm(t,e,a){if((a&4194048)!==0){var s=e.lanes;s&=t.pendingLanes,a|=s,e.lanes=a,Xt(t,a)}}var qs={readContext:ge,use:lr,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useLayoutEffect:Ft,useInsertionEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useSyncExternalStore:Ft,useId:Ft,useHostTransitionStatus:Ft,useFormState:Ft,useActionState:Ft,useOptimistic:Ft,useMemoCache:Ft,useCacheRefresh:Ft};qs.useEffectEvent=Ft;var fm={readContext:ge,use:lr,useCallback:function(t,e){return Ce().memoizedState=[t,e===void 0?null:e],t},useContext:ge,useEffect:Ph,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,or(4194308,4,Wh.bind(null,e,t),a)},useLayoutEffect:function(t,e){return or(4194308,4,t,e)},useInsertionEffect:function(t,e){or(4,2,t,e)},useMemo:function(t,e){var a=Ce();e=e===void 0?null:e;var s=t();if(ni){vn(!0);try{t()}finally{vn(!1)}}return a.memoizedState=[s,e],s},useReducer:function(t,e,a){var s=Ce();if(a!==void 0){var o=a(e);if(ni){vn(!0);try{a(e)}finally{vn(!1)}}}else o=e;return s.memoizedState=s.baseState=o,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:o},s.queue=t,t=t.dispatch=xx.bind(null,wt,t),[s.memoizedState,t]},useRef:function(t){var e=Ce();return t={current:t},e.memoizedState=t},useState:function(t){t=Du(t);var e=t.queue,a=om.bind(null,wt,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Ou,useDeferredValue:function(t,e){var a=Ce();return zu(a,t,e)},useTransition:function(){var t=Du(!1);return t=am.bind(null,wt,t.queue,!0,!1),Ce().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var s=wt,o=Ce();if(Ot){if(a===void 0)throw Error(r(407));a=a()}else{if(a=e(),qt===null)throw Error(r(349));(kt&127)!==0||Rh(s,e,a)}o.memoizedState=a;var u={value:a,getSnapshot:e};return o.queue=u,Ph(zh.bind(null,s,u,t),[t]),s.flags|=2048,Xi(9,{destroy:void 0},Oh.bind(null,s,u,a,e),null),a},useId:function(){var t=Ce(),e=qt.identifierPrefix;if(Ot){var a=Tn,s=wn;a=(s&~(1<<32-Ee(s)-1)).toString(32)+a,e="_"+e+"R_"+a,a=ir++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=hx++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Vu,useFormState:Yh,useActionState:Yh,useOptimistic:function(t){var e=Ce();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=_u.bind(null,wt,!0,a),a.dispatch=e,[t,e]},useMemoCache:ju,useCacheRefresh:function(){return Ce().memoizedState=bx.bind(null,wt)},useEffectEvent:function(t){var e=Ce(),a={impl:t};return e.memoizedState=a,function(){if((Vt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Bu={readContext:ge,use:lr,useCallback:tm,useContext:ge,useEffect:Ru,useImperativeHandle:Ih,useInsertionEffect:Jh,useLayoutEffect:$h,useMemo:em,useReducer:rr,useRef:Zh,useState:function(){return rr(Qn)},useDebugValue:Ou,useDeferredValue:function(t,e){var a=te();return nm(a,Ut.memoizedState,t,e)},useTransition:function(){var t=rr(Qn)[0],e=te().memoizedState;return[typeof t=="boolean"?t:Hs(t),e]},useSyncExternalStore:kh,useId:lm,useHostTransitionStatus:Vu,useFormState:Xh,useActionState:Xh,useOptimistic:function(t,e){var a=te();return _h(a,Ut,t,e)},useMemoCache:ju,useCacheRefresh:rm};Bu.useEffectEvent=Fh;var dm={readContext:ge,use:lr,useCallback:tm,useContext:ge,useEffect:Ru,useImperativeHandle:Ih,useInsertionEffect:Jh,useLayoutEffect:$h,useMemo:em,useReducer:Nu,useRef:Zh,useState:function(){return Nu(Qn)},useDebugValue:Ou,useDeferredValue:function(t,e){var a=te();return Ut===null?zu(a,t,e):nm(a,Ut.memoizedState,t,e)},useTransition:function(){var t=Nu(Qn)[0],e=te().memoizedState;return[typeof t=="boolean"?t:Hs(t),e]},useSyncExternalStore:kh,useId:lm,useHostTransitionStatus:Vu,useFormState:Qh,useActionState:Qh,useOptimistic:function(t,e){var a=te();return Ut!==null?_h(a,Ut,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ju,useCacheRefresh:rm};dm.useEffectEvent=Fh;function Uu(t,e,a,s){e=t.memoizedState,a=a(s,e),a=a==null?e:x({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Hu={enqueueSetState:function(t,e,a){t=t._reactInternals;var s=Qe(),o=da(s);o.payload=e,a!=null&&(o.callback=a),e=ha(t,o,s),e!==null&&(_e(e,t,s),Vs(e,t,s))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var s=Qe(),o=da(s);o.tag=1,o.payload=e,a!=null&&(o.callback=a),e=ha(t,o,s),e!==null&&(_e(e,t,s),Vs(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Qe(),s=da(a);s.tag=2,e!=null&&(s.callback=e),e=ha(t,s,a),e!==null&&(_e(e,t,a),Vs(e,t,a))}};function hm(t,e,a,s,o,u,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,u,m):e.prototype&&e.prototype.isPureReactComponent?!Ms(a,s)||!Ms(o,u):!0}function mm(t,e,a,s){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,s),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,s),e.state!==t&&Hu.enqueueReplaceState(e,e.state,null)}function ai(t,e){var a=e;if("ref"in e){a={};for(var s in e)s!=="ref"&&(a[s]=e[s])}if(t=t.defaultProps){a===e&&(a=x({},a));for(var o in t)a[o]===void 0&&(a[o]=t[o])}return a}function pm(t){ql(t)}function gm(t){console.error(t)}function ym(t){ql(t)}function fr(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(s){setTimeout(function(){throw s})}}function vm(t,e,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Gu(t,e,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){fr(t,e)},a}function bm(t){return t=da(t),t.tag=3,t}function xm(t,e,a,s){var o=a.type.getDerivedStateFromError;if(typeof o=="function"){var u=s.value;t.payload=function(){return o(u)},t.callback=function(){vm(e,a,s)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(t.callback=function(){vm(e,a,s),typeof o!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function Sx(t,e,a,s,o){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(e=a.alternate,e!==null&&Vi(e,a,o,!0),a=qe.current,a!==null){switch(a.tag){case 31:case 13:return an===null?Tr():a.alternate===null&&Jt===0&&(Jt=3),a.flags&=-257,a.flags|=65536,a.lanes=o,s===Wl?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([s]):e.add(s),dc(t,s,o)),!1;case 22:return a.flags|=65536,s===Wl?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([s]):a.add(s)),dc(t,s,o)),!1}throw Error(r(435,a.tag))}return dc(t,s,o),Tr(),!1}if(Ot)return e=qe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=o,s!==lu&&(t=Error(r(422),{cause:s}),ks(Ie(t,a)))):(s!==lu&&(e=Error(r(423),{cause:s}),ks(Ie(e,a))),t=t.current.alternate,t.flags|=65536,o&=-o,t.lanes|=o,s=Ie(s,a),o=Gu(t.stateNode,s,o),yu(t,o),Jt!==4&&(Jt=2)),!1;var u=Error(r(520),{cause:s});if(u=Ie(u,a),Js===null?Js=[u]:Js.push(u),Jt!==4&&(Jt=2),e===null)return!0;s=Ie(s,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=o&-o,a.lanes|=t,t=Gu(a.stateNode,s,t),yu(a,t),!1;case 1:if(e=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ba===null||!ba.has(u))))return a.flags|=65536,o&=-o,a.lanes|=o,o=bm(o),xm(o,t,a,s),yu(a,o),!1}a=a.return}while(a!==null);return!1}var qu=Error(r(461)),ie=!1;function ye(t,e,a,s){e.child=t===null?Ah(e,null,a,s):ei(e,t.child,a,s)}function Sm(t,e,a,s,o){a=a.render;var u=e.ref;if("ref"in s){var m={};for(var b in s)b!=="ref"&&(m[b]=s[b])}else m=s;return $a(e),s=Tu(t,e,a,m,u,o),b=Au(),t!==null&&!ie?(Eu(t,e,o),Zn(t,e,o)):(Ot&&b&&iu(e),e.flags|=1,ye(t,e,s,o),e.child)}function wm(t,e,a,s,o){if(t===null){var u=a.type;return typeof u=="function"&&!eu(u)&&u.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=u,Tm(t,e,u,s,o)):(t=Ql(a.type,null,s,e,e.mode,o),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Ju(t,o)){var m=u.memoizedProps;if(a=a.compare,a=a!==null?a:Ms,a(m,s)&&t.ref===e.ref)return Zn(t,e,o)}return e.flags|=1,t=Gn(u,s),t.ref=e.ref,t.return=e,e.child=t}function Tm(t,e,a,s,o){if(t!==null){var u=t.memoizedProps;if(Ms(u,s)&&t.ref===e.ref)if(ie=!1,e.pendingProps=s=u,Ju(t,o))(t.flags&131072)!==0&&(ie=!0);else return e.lanes=t.lanes,Zn(t,e,o)}return Yu(t,e,a,s,o)}function Am(t,e,a,s){var o=s.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,t!==null){for(s=e.child=t.child,o=0;s!==null;)o=o|s.lanes|s.childLanes,s=s.sibling;s=o&~u}else s=0,e.child=null;return Em(t,e,u,a,s)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Jl(e,u!==null?u.cachePool:null),u!==null?jh(e,u):bu(),Mh(e);else return s=e.lanes=536870912,Em(t,e,u!==null?u.baseLanes|a:a,a,s)}else u!==null?(Jl(e,u.cachePool),jh(e,u),pa(),e.memoizedState=null):(t!==null&&Jl(e,null),bu(),pa());return ye(t,e,o,a),e.child}function Ys(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Em(t,e,a,s,o){var u=hu();return u=u===null?null:{parent:ne._currentValue,pool:u},e.memoizedState={baseLanes:a,cachePool:u},t!==null&&Jl(e,null),bu(),Mh(e),t!==null&&Vi(t,e,s,!0),e.childLanes=o,null}function dr(t,e){return e=mr({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Cm(t,e,a){return ei(e,t.child,null,a),t=dr(e,e.pendingProps),t.flags|=2,Ye(e),e.memoizedState=null,t}function wx(t,e,a){var s=e.pendingProps,o=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Ot){if(s.mode==="hidden")return t=dr(e,s),e.lanes=536870912,Ys(null,t);if(Su(e),(t=Kt)?(t=Bp(t,nn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ra!==null?{id:wn,overflow:Tn}:null,retryLane:536870912,hydrationErrors:null},a=uh(t),a.return=e,e.child=a,pe=e,Kt=null)):t=null,t===null)throw ua(e);return e.lanes=536870912,null}return dr(e,s)}var u=t.memoizedState;if(u!==null){var m=u.dehydrated;if(Su(e),o)if(e.flags&256)e.flags&=-257,e=Cm(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(r(558));else if(ie||Vi(t,e,a,!1),o=(a&t.childLanes)!==0,ie||o){if(s=qt,s!==null&&(m=me(s,a),m!==0&&m!==u.retryLane))throw u.retryLane=m,Za(t,m),_e(s,t,m),qu;Tr(),e=Cm(t,e,a)}else t=u.treeContext,Kt=sn(m.nextSibling),pe=e,Ot=!0,oa=null,nn=!1,t!==null&&dh(e,t),e=dr(e,s),e.flags|=4096;return e}return t=Gn(t.child,{mode:s.mode,children:s.children}),t.ref=e.ref,e.child=t,t.return=e,t}function hr(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Yu(t,e,a,s,o){return $a(e),a=Tu(t,e,a,s,void 0,o),s=Au(),t!==null&&!ie?(Eu(t,e,o),Zn(t,e,o)):(Ot&&s&&iu(e),e.flags|=1,ye(t,e,a,o),e.child)}function jm(t,e,a,s,o,u){return $a(e),e.updateQueue=null,a=Dh(e,s,a,o),Nh(t),s=Au(),t!==null&&!ie?(Eu(t,e,u),Zn(t,e,u)):(Ot&&s&&iu(e),e.flags|=1,ye(t,e,a,u),e.child)}function Mm(t,e,a,s,o){if($a(e),e.stateNode===null){var u=Ri,m=a.contextType;typeof m=="object"&&m!==null&&(u=ge(m)),u=new a(s,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Hu,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=s,u.state=e.memoizedState,u.refs={},pu(e),m=a.contextType,u.context=typeof m=="object"&&m!==null?ge(m):Ri,u.state=e.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(Uu(e,a,m,s),u.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&Hu.enqueueReplaceState(u,u.state,null),Bs(e,s,u,o),_s(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),s=!0}else if(t===null){u=e.stateNode;var b=e.memoizedProps,w=ai(a,b);u.props=w;var k=u.context,_=a.contextType;m=Ri,typeof _=="object"&&_!==null&&(m=ge(_));var G=a.getDerivedStateFromProps;_=typeof G=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=e.pendingProps!==b,_||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||k!==m)&&mm(e,u,s,m),fa=!1;var R=e.memoizedState;u.state=R,Bs(e,s,u,o),_s(),k=e.memoizedState,b||R!==k||fa?(typeof G=="function"&&(Uu(e,a,G,s),k=e.memoizedState),(w=fa||hm(e,a,w,s,R,k,m))?(_||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=s,e.memoizedState=k),u.props=s,u.state=k,u.context=m,s=w):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),s=!1)}else{u=e.stateNode,gu(t,e),m=e.memoizedProps,_=ai(a,m),u.props=_,G=e.pendingProps,R=u.context,k=a.contextType,w=Ri,typeof k=="object"&&k!==null&&(w=ge(k)),b=a.getDerivedStateFromProps,(k=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==G||R!==w)&&mm(e,u,s,w),fa=!1,R=e.memoizedState,u.state=R,Bs(e,s,u,o),_s();var z=e.memoizedState;m!==G||R!==z||fa||t!==null&&t.dependencies!==null&&Pl(t.dependencies)?(typeof b=="function"&&(Uu(e,a,b,s),z=e.memoizedState),(_=fa||hm(e,a,_,s,R,z,w)||t!==null&&t.dependencies!==null&&Pl(t.dependencies))?(k||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,z,w),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,z,w)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===t.memoizedProps&&R===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&R===t.memoizedState||(e.flags|=1024),e.memoizedProps=s,e.memoizedState=z),u.props=s,u.state=z,u.context=w,s=_):(typeof u.componentDidUpdate!="function"||m===t.memoizedProps&&R===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&R===t.memoizedState||(e.flags|=1024),s=!1)}return u=s,hr(t,e),s=(e.flags&128)!==0,u||s?(u=e.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&s?(e.child=ei(e,t.child,null,o),e.child=ei(e,null,a,o)):ye(t,e,a,o),e.memoizedState=u.state,t=e.child):t=Zn(t,e,o),t}function Nm(t,e,a,s){return Fa(),e.flags|=256,ye(t,e,a,s),e.child}var Xu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ku(t){return{baseLanes:t,cachePool:vh()}}function Qu(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Ke),t}function Dm(t,e,a){var s=e.pendingProps,o=!1,u=(e.flags&128)!==0,m;if((m=u)||(m=t!==null&&t.memoizedState===null?!1:(It.current&2)!==0),m&&(o=!0,e.flags&=-129),m=(e.flags&32)!==0,e.flags&=-33,t===null){if(Ot){if(o?ma(e):pa(),(t=Kt)?(t=Bp(t,nn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ra!==null?{id:wn,overflow:Tn}:null,retryLane:536870912,hydrationErrors:null},a=uh(t),a.return=e,e.child=a,pe=e,Kt=null)):t=null,t===null)throw ua(e);return Mc(t)?e.lanes=32:e.lanes=536870912,null}var b=s.children;return s=s.fallback,o?(pa(),o=e.mode,b=mr({mode:"hidden",children:b},o),s=Pa(s,o,a,null),b.return=e,s.return=e,b.sibling=s,e.child=b,s=e.child,s.memoizedState=Ku(a),s.childLanes=Qu(t,m,a),e.memoizedState=Xu,Ys(null,s)):(ma(e),Zu(e,b))}var w=t.memoizedState;if(w!==null&&(b=w.dehydrated,b!==null)){if(u)e.flags&256?(ma(e),e.flags&=-257,e=Pu(t,e,a)):e.memoizedState!==null?(pa(),e.child=t.child,e.flags|=128,e=null):(pa(),b=s.fallback,o=e.mode,s=mr({mode:"visible",children:s.children},o),b=Pa(b,o,a,null),b.flags|=2,s.return=e,b.return=e,s.sibling=b,e.child=s,ei(e,t.child,null,a),s=e.child,s.memoizedState=Ku(a),s.childLanes=Qu(t,m,a),e.memoizedState=Xu,e=Ys(null,s));else if(ma(e),Mc(b)){if(m=b.nextSibling&&b.nextSibling.dataset,m)var k=m.dgst;m=k,s=Error(r(419)),s.stack="",s.digest=m,ks({value:s,source:null,stack:null}),e=Pu(t,e,a)}else if(ie||Vi(t,e,a,!1),m=(a&t.childLanes)!==0,ie||m){if(m=qt,m!==null&&(s=me(m,a),s!==0&&s!==w.retryLane))throw w.retryLane=s,Za(t,s),_e(m,t,s),qu;jc(b)||Tr(),e=Pu(t,e,a)}else jc(b)?(e.flags|=192,e.child=t.child,e=null):(t=w.treeContext,Kt=sn(b.nextSibling),pe=e,Ot=!0,oa=null,nn=!1,t!==null&&dh(e,t),e=Zu(e,s.children),e.flags|=4096);return e}return o?(pa(),b=s.fallback,o=e.mode,w=t.child,k=w.sibling,s=Gn(w,{mode:"hidden",children:s.children}),s.subtreeFlags=w.subtreeFlags&65011712,k!==null?b=Gn(k,b):(b=Pa(b,o,a,null),b.flags|=2),b.return=e,s.return=e,s.sibling=b,e.child=s,Ys(null,s),s=e.child,b=t.child.memoizedState,b===null?b=Ku(a):(o=b.cachePool,o!==null?(w=ne._currentValue,o=o.parent!==w?{parent:w,pool:w}:o):o=vh(),b={baseLanes:b.baseLanes|a,cachePool:o}),s.memoizedState=b,s.childLanes=Qu(t,m,a),e.memoizedState=Xu,Ys(t.child,s)):(ma(e),a=t.child,t=a.sibling,a=Gn(a,{mode:"visible",children:s.children}),a.return=e,a.sibling=null,t!==null&&(m=e.deletions,m===null?(e.deletions=[t],e.flags|=16):m.push(t)),e.child=a,e.memoizedState=null,a)}function Zu(t,e){return e=mr({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function mr(t,e){return t=Ge(22,t,null,e),t.lanes=0,t}function Pu(t,e,a){return ei(e,t.child,null,a),t=Zu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function km(t,e,a){t.lanes|=e;var s=t.alternate;s!==null&&(s.lanes|=e),uu(t.return,e,a)}function Fu(t,e,a,s,o,u){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:o,treeForkCount:u}:(m.isBackwards=e,m.rendering=null,m.renderingStartTime=0,m.last=s,m.tail=a,m.tailMode=o,m.treeForkCount=u)}function Rm(t,e,a){var s=e.pendingProps,o=s.revealOrder,u=s.tail;s=s.children;var m=It.current,b=(m&2)!==0;if(b?(m=m&1|2,e.flags|=128):m&=1,J(It,m),ye(t,e,s,a),s=Ot?Ds:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&km(t,a,e);else if(t.tag===19)km(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(o){case"forwards":for(a=e.child,o=null;a!==null;)t=a.alternate,t!==null&&nr(t)===null&&(o=a),a=a.sibling;a=o,a===null?(o=e.child,e.child=null):(o=a.sibling,a.sibling=null),Fu(e,!1,o,a,u,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,o=e.child,e.child=null;o!==null;){if(t=o.alternate,t!==null&&nr(t)===null){e.child=o;break}t=o.sibling,o.sibling=a,a=o,o=t}Fu(e,!0,a,null,u,s);break;case"together":Fu(e,!1,null,null,void 0,s);break;default:e.memoizedState=null}return e.child}function Zn(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),va|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Vi(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,a=Gn(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Gn(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Ju(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Pl(t)))}function Tx(t,e,a){switch(e.tag){case 3:Wt(e,e.stateNode.containerInfo),ca(e,ne,t.memoizedState.cache),Fa();break;case 27:case 5:Ne(e);break;case 4:Wt(e,e.stateNode.containerInfo);break;case 10:ca(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Su(e),null;break;case 13:var s=e.memoizedState;if(s!==null)return s.dehydrated!==null?(ma(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Dm(t,e,a):(ma(e),t=Zn(t,e,a),t!==null?t.sibling:null);ma(e);break;case 19:var o=(t.flags&128)!==0;if(s=(a&e.childLanes)!==0,s||(Vi(t,e,a,!1),s=(a&e.childLanes)!==0),o){if(s)return Rm(t,e,a);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),J(It,It.current),s)break;return null;case 22:return e.lanes=0,Am(t,e,a,e.pendingProps);case 24:ca(e,ne,t.memoizedState.cache)}return Zn(t,e,a)}function Om(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)ie=!0;else{if(!Ju(t,a)&&(e.flags&128)===0)return ie=!1,Tx(t,e,a);ie=(t.flags&131072)!==0}else ie=!1,Ot&&(e.flags&1048576)!==0&&fh(e,Ds,e.index);switch(e.lanes=0,e.tag){case 16:t:{var s=e.pendingProps;if(t=Ia(e.elementType),e.type=t,typeof t=="function")eu(t)?(s=ai(t,s),e.tag=1,e=Mm(null,e,t,s,a)):(e.tag=0,e=Yu(null,e,t,s,a));else{if(t!=null){var o=t.$$typeof;if(o===X){e.tag=11,e=Sm(null,e,t,s,a);break t}else if(o===I){e.tag=14,e=wm(null,e,t,s,a);break t}}throw e=Et(t)||t,Error(r(306,e,""))}}return e;case 0:return Yu(t,e,e.type,e.pendingProps,a);case 1:return s=e.type,o=ai(s,e.pendingProps),Mm(t,e,s,o,a);case 3:t:{if(Wt(e,e.stateNode.containerInfo),t===null)throw Error(r(387));s=e.pendingProps;var u=e.memoizedState;o=u.element,gu(t,e),Bs(e,s,null,a);var m=e.memoizedState;if(s=m.cache,ca(e,ne,s),s!==u.cache&&cu(e,[ne],a,!0),_s(),s=m.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:m.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Nm(t,e,s,a);break t}else if(s!==o){o=Ie(Error(r(424)),e),ks(o),e=Nm(t,e,s,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=sn(t.firstChild),pe=e,Ot=!0,oa=null,nn=!0,a=Ah(e,null,s,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Fa(),s===o){e=Zn(t,e,a);break t}ye(t,e,s,a)}e=e.child}return e;case 26:return hr(t,e),t===null?(a=Xp(e.type,null,e.pendingProps,null))?e.memoizedState=a:Ot||(a=e.type,t=e.pendingProps,s=Dr(ut.current).createElement(a),s[ee]=e,s[ce]=t,ve(s,a,t),fe(s),e.stateNode=s):e.memoizedState=Xp(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ne(e),t===null&&Ot&&(s=e.stateNode=Gp(e.type,e.pendingProps,ut.current),pe=e,nn=!0,o=Kt,Ta(e.type)?(Nc=o,Kt=sn(s.firstChild)):Kt=o),ye(t,e,e.pendingProps.children,a),hr(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Ot&&((o=s=Kt)&&(s=Ix(s,e.type,e.pendingProps,nn),s!==null?(e.stateNode=s,pe=e,Kt=sn(s.firstChild),nn=!1,o=!0):o=!1),o||ua(e)),Ne(e),o=e.type,u=e.pendingProps,m=t!==null?t.memoizedProps:null,s=u.children,Ac(o,u)?s=null:m!==null&&Ac(o,m)&&(e.flags|=32),e.memoizedState!==null&&(o=Tu(t,e,mx,null,null,a),il._currentValue=o),hr(t,e),ye(t,e,s,a),e.child;case 6:return t===null&&Ot&&((t=a=Kt)&&(a=t1(a,e.pendingProps,nn),a!==null?(e.stateNode=a,pe=e,Kt=null,t=!0):t=!1),t||ua(e)),null;case 13:return Dm(t,e,a);case 4:return Wt(e,e.stateNode.containerInfo),s=e.pendingProps,t===null?e.child=ei(e,null,s,a):ye(t,e,s,a),e.child;case 11:return Sm(t,e,e.type,e.pendingProps,a);case 7:return ye(t,e,e.pendingProps,a),e.child;case 8:return ye(t,e,e.pendingProps.children,a),e.child;case 12:return ye(t,e,e.pendingProps.children,a),e.child;case 10:return s=e.pendingProps,ca(e,e.type,s.value),ye(t,e,s.children,a),e.child;case 9:return o=e.type._context,s=e.pendingProps.children,$a(e),o=ge(o),s=s(o),e.flags|=1,ye(t,e,s,a),e.child;case 14:return wm(t,e,e.type,e.pendingProps,a);case 15:return Tm(t,e,e.type,e.pendingProps,a);case 19:return Rm(t,e,a);case 31:return wx(t,e,a);case 22:return Am(t,e,a,e.pendingProps);case 24:return $a(e),s=ge(ne),t===null?(o=hu(),o===null&&(o=qt,u=fu(),o.pooledCache=u,u.refCount++,u!==null&&(o.pooledCacheLanes|=a),o=u),e.memoizedState={parent:s,cache:o},pu(e),ca(e,ne,o)):((t.lanes&a)!==0&&(gu(t,e),Bs(e,null,null,a),_s()),o=t.memoizedState,u=e.memoizedState,o.parent!==s?(o={parent:s,cache:s},e.memoizedState=o,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=o),ca(e,ne,s)):(s=u.cache,ca(e,ne,s),s!==o.cache&&cu(e,[ne],a,!0))),ye(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function Pn(t){t.flags|=4}function $u(t,e,a,s,o){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(o&335544128)===o)if(t.stateNode.complete)t.flags|=8192;else if(lp())t.flags|=8192;else throw ti=Wl,mu}else t.flags&=-16777217}function zm(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Fp(e))if(lp())t.flags|=8192;else throw ti=Wl,mu}function pr(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?at():536870912,t.lanes|=e,Pi|=e)}function Xs(t,e){if(!Ot)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(e)for(var o=t.child;o!==null;)a|=o.lanes|o.childLanes,s|=o.subtreeFlags&65011712,s|=o.flags&65011712,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)a|=o.lanes|o.childLanes,s|=o.subtreeFlags,s|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=s,t.childLanes=a,e}function Ax(t,e,a){var s=e.pendingProps;switch(su(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return Qt(e),null;case 3:return a=e.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),e.memoizedState.cache!==s&&(e.flags|=2048),Xn(ne),Tt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Li(e)?Pn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,ru())),Qt(e),null;case 26:var o=e.type,u=e.memoizedState;return t===null?(Pn(e),u!==null?(Qt(e),zm(e,u)):(Qt(e),$u(e,o,null,s,a))):u?u!==t.memoizedState?(Pn(e),Qt(e),zm(e,u)):(Qt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==s&&Pn(e),Qt(e),$u(e,o,t,s,a)),null;case 27:if(De(e),a=ut.current,o=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==s&&Pn(e);else{if(!s){if(e.stateNode===null)throw Error(r(166));return Qt(e),null}t=nt.current,Li(e)?hh(e):(t=Gp(o,s,a),e.stateNode=t,Pn(e))}return Qt(e),null;case 5:if(De(e),o=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==s&&Pn(e);else{if(!s){if(e.stateNode===null)throw Error(r(166));return Qt(e),null}if(u=nt.current,Li(e))hh(e);else{var m=Dr(ut.current);switch(u){case 1:u=m.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:u=m.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":u=m.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":u=m.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":u=m.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof s.is=="string"?m.createElement("select",{is:s.is}):m.createElement("select"),s.multiple?u.multiple=!0:s.size&&(u.size=s.size);break;default:u=typeof s.is=="string"?m.createElement(o,{is:s.is}):m.createElement(o)}}u[ee]=e,u[ce]=s;t:for(m=e.child;m!==null;){if(m.tag===5||m.tag===6)u.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break t;for(;m.sibling===null;){if(m.return===null||m.return===e)break t;m=m.return}m.sibling.return=m.return,m=m.sibling}e.stateNode=u;t:switch(ve(u,o,s),o){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Pn(e)}}return Qt(e),$u(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==s&&Pn(e);else{if(typeof s!="string"&&e.stateNode===null)throw Error(r(166));if(t=ut.current,Li(e)){if(t=e.stateNode,a=e.memoizedProps,s=null,o=pe,o!==null)switch(o.tag){case 27:case 5:s=o.memoizedProps}t[ee]=e,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Dp(t.nodeValue,a)),t||ua(e,!0)}else t=Dr(t).createTextNode(s),t[ee]=e,e.stateNode=t}return Qt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(s=Li(e),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[ee]=e}else Fa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Qt(e),t=!1}else a=ru(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(Ye(e),e):(Ye(e),null);if((e.flags&128)!==0)throw Error(r(558))}return Qt(e),null;case 13:if(s=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(o=Li(e),s!==null&&s.dehydrated!==null){if(t===null){if(!o)throw Error(r(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(r(317));o[ee]=e}else Fa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Qt(e),o=!1}else o=ru(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=o),o=!0;if(!o)return e.flags&256?(Ye(e),e):(Ye(e),null)}return Ye(e),(e.flags&128)!==0?(e.lanes=a,e):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=e.child,o=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(o=s.alternate.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),pr(e,e.updateQueue),Qt(e),null);case 4:return Tt(),t===null&&bc(e.stateNode.containerInfo),Qt(e),null;case 10:return Xn(e.type),Qt(e),null;case 19:if(B(It),s=e.memoizedState,s===null)return Qt(e),null;if(o=(e.flags&128)!==0,u=s.rendering,u===null)if(o)Xs(s,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=nr(t),u!==null){for(e.flags|=128,Xs(s,!1),t=u.updateQueue,e.updateQueue=t,pr(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)oh(a,t),a=a.sibling;return J(It,It.current&1|2),Ot&&qn(e,s.treeForkCount),e.child}t=t.sibling}s.tail!==null&&we()>xr&&(e.flags|=128,o=!0,Xs(s,!1),e.lanes=4194304)}else{if(!o)if(t=nr(u),t!==null){if(e.flags|=128,o=!0,t=t.updateQueue,e.updateQueue=t,pr(e,t),Xs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!u.alternate&&!Ot)return Qt(e),null}else 2*we()-s.renderingStartTime>xr&&a!==536870912&&(e.flags|=128,o=!0,Xs(s,!1),e.lanes=4194304);s.isBackwards?(u.sibling=e.child,e.child=u):(t=s.last,t!==null?t.sibling=u:e.child=u,s.last=u)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=we(),t.sibling=null,a=It.current,J(It,o?a&1|2:a&1),Ot&&qn(e,s.treeForkCount),t):(Qt(e),null);case 22:case 23:return Ye(e),xu(),s=e.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(e.flags|=8192):s&&(e.flags|=8192),s?(a&536870912)!==0&&(e.flags&128)===0&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),a=e.updateQueue,a!==null&&pr(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),s!==a&&(e.flags|=2048),t!==null&&B(Wa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Xn(ne),Qt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function Ex(t,e){switch(su(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xn(ne),Tt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return De(e),null;case 31:if(e.memoizedState!==null){if(Ye(e),e.alternate===null)throw Error(r(340));Fa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Ye(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));Fa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return B(It),null;case 4:return Tt(),null;case 10:return Xn(e.type),null;case 22:case 23:return Ye(e),xu(),t!==null&&B(Wa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Xn(ne),null;case 25:return null;default:return null}}function Lm(t,e){switch(su(e),e.tag){case 3:Xn(ne),Tt();break;case 26:case 27:case 5:De(e);break;case 4:Tt();break;case 31:e.memoizedState!==null&&Ye(e);break;case 13:Ye(e);break;case 19:B(It);break;case 10:Xn(e.type);break;case 22:case 23:Ye(e),xu(),t!==null&&B(Wa);break;case 24:Xn(ne)}}function Ks(t,e){try{var a=e.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var o=s.next;a=o;do{if((a.tag&t)===t){s=void 0;var u=a.create,m=a.inst;s=u(),m.destroy=s}a=a.next}while(a!==o)}}catch(b){Bt(e,e.return,b)}}function ga(t,e,a){try{var s=e.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&t)===t){var m=s.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,o=e;var w=a,k=b;try{k()}catch(_){Bt(o,w,_)}}}s=s.next}while(s!==u)}}catch(_){Bt(e,e.return,_)}}function Vm(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Ch(e,a)}catch(s){Bt(t,t.return,s)}}}function _m(t,e,a){a.props=ai(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Bt(t,e,s)}}function Qs(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(o){Bt(t,e,o)}}function An(t,e){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(o){Bt(t,e,o)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(o){Bt(t,e,o)}else a.current=null}function Bm(t){var e=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(o){Bt(t,t.return,o)}}function Wu(t,e,a){try{var s=t.stateNode;Zx(s,t.type,a,e),s[ce]=e}catch(o){Bt(t,t.return,o)}}function Um(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ta(t.type)||t.tag===4}function Iu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Um(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ta(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tc(t,e,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Un));else if(s!==4&&(s===27&&Ta(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(tc(t,e,a),t=t.sibling;t!==null;)tc(t,e,a),t=t.sibling}function gr(t,e,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(s!==4&&(s===27&&Ta(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(gr(t,e,a),t=t.sibling;t!==null;)gr(t,e,a),t=t.sibling}function Hm(t){var e=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,o=e.attributes;o.length;)e.removeAttributeNode(o[0]);ve(e,s,a),e[ee]=t,e[ce]=a}catch(u){Bt(t,t.return,u)}}var Fn=!1,se=!1,ec=!1,Gm=typeof WeakSet=="function"?WeakSet:Set,de=null;function Cx(t,e){if(t=t.containerInfo,wc=_r,t=Id(t),Po(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var o=s.anchorOffset,u=s.focusNode;s=s.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break t}var m=0,b=-1,w=-1,k=0,_=0,G=t,R=null;e:for(;;){for(var z;G!==a||o!==0&&G.nodeType!==3||(b=m+o),G!==u||s!==0&&G.nodeType!==3||(w=m+s),G.nodeType===3&&(m+=G.nodeValue.length),(z=G.firstChild)!==null;)R=G,G=z;for(;;){if(G===t)break e;if(R===a&&++k===o&&(b=m),R===u&&++_===s&&(w=m),(z=G.nextSibling)!==null)break;G=R,R=G.parentNode}G=z}a=b===-1||w===-1?null:{start:b,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(Tc={focusedElem:t,selectionRange:a},_r=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){switch(e=de,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)o=t[a],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,a=e,o=u.memoizedProps,u=u.memoizedState,s=a.stateNode;try{var it=ai(a.type,o);t=s.getSnapshotBeforeUpdate(it,u),s.__reactInternalSnapshotBeforeUpdate=t}catch(yt){Bt(a,a.return,yt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Cc(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Cc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}}function qm(t,e,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:$n(t,a),s&4&&Ks(5,a);break;case 1:if($n(t,a),s&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(m){Bt(a,a.return,m)}else{var o=ai(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(o,e,t.__reactInternalSnapshotBeforeUpdate)}catch(m){Bt(a,a.return,m)}}s&64&&Vm(a),s&512&&Qs(a,a.return);break;case 3:if($n(t,a),s&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Ch(t,e)}catch(m){Bt(a,a.return,m)}}break;case 27:e===null&&s&4&&Hm(a);case 26:case 5:$n(t,a),e===null&&s&4&&Bm(a),s&512&&Qs(a,a.return);break;case 12:$n(t,a);break;case 31:$n(t,a),s&4&&Km(t,a);break;case 13:$n(t,a),s&4&&Qm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Lx.bind(null,a),e1(t,a))));break;case 22:if(s=a.memoizedState!==null||Fn,!s){e=e!==null&&e.memoizedState!==null||se,o=Fn;var u=se;Fn=s,(se=e)&&!u?Wn(t,a,(a.subtreeFlags&8772)!==0):$n(t,a),Fn=o,se=u}break;case 30:break;default:$n(t,a)}}function Ym(t){var e=t.alternate;e!==null&&(t.alternate=null,Ym(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ia(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Pt=null,Oe=!1;function Jn(t,e,a){for(a=a.child;a!==null;)Xm(t,e,a),a=a.sibling}function Xm(t,e,a){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(aa,a)}catch{}switch(a.tag){case 26:se||An(a,e),Jn(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:se||An(a,e);var s=Pt,o=Oe;Ta(a.type)&&(Pt=a.stateNode,Oe=!1),Jn(t,e,a),el(a.stateNode),Pt=s,Oe=o;break;case 5:se||An(a,e);case 6:if(s=Pt,o=Oe,Pt=null,Jn(t,e,a),Pt=s,Oe=o,Pt!==null)if(Oe)try{(Pt.nodeType===9?Pt.body:Pt.nodeName==="HTML"?Pt.ownerDocument.body:Pt).removeChild(a.stateNode)}catch(u){Bt(a,e,u)}else try{Pt.removeChild(a.stateNode)}catch(u){Bt(a,e,u)}break;case 18:Pt!==null&&(Oe?(t=Pt,Vp(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ns(t)):Vp(Pt,a.stateNode));break;case 4:s=Pt,o=Oe,Pt=a.stateNode.containerInfo,Oe=!0,Jn(t,e,a),Pt=s,Oe=o;break;case 0:case 11:case 14:case 15:ga(2,a,e),se||ga(4,a,e),Jn(t,e,a);break;case 1:se||(An(a,e),s=a.stateNode,typeof s.componentWillUnmount=="function"&&_m(a,e,s)),Jn(t,e,a);break;case 21:Jn(t,e,a);break;case 22:se=(s=se)||a.memoizedState!==null,Jn(t,e,a),se=s;break;default:Jn(t,e,a)}}function Km(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ns(t)}catch(a){Bt(e,e.return,a)}}}function Qm(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ns(t)}catch(a){Bt(e,e.return,a)}}function jx(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Gm),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Gm),e;default:throw Error(r(435,t.tag))}}function yr(t,e){var a=jx(t);e.forEach(function(s){if(!a.has(s)){a.add(s);var o=Vx.bind(null,t,s);s.then(o,o)}})}function ze(t,e){var a=e.deletions;if(a!==null)for(var s=0;s<a.length;s++){var o=a[s],u=t,m=e,b=m;t:for(;b!==null;){switch(b.tag){case 27:if(Ta(b.type)){Pt=b.stateNode,Oe=!1;break t}break;case 5:Pt=b.stateNode,Oe=!1;break t;case 3:case 4:Pt=b.stateNode.containerInfo,Oe=!0;break t}b=b.return}if(Pt===null)throw Error(r(160));Xm(u,m,o),Pt=null,Oe=!1,u=o.alternate,u!==null&&(u.return=null),o.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Zm(e,t),e=e.sibling}var hn=null;function Zm(t,e){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ze(e,t),Le(t),s&4&&(ga(3,t,t.return),Ks(3,t),ga(5,t,t.return));break;case 1:ze(e,t),Le(t),s&512&&(se||a===null||An(a,a.return)),s&64&&Fn&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var o=hn;if(ze(e,t),Le(t),s&512&&(se||a===null||An(a,a.return)),s&4){var u=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,o=o.ownerDocument||o;e:switch(s){case"title":u=o.getElementsByTagName("title")[0],(!u||u[Sn]||u[ee]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=o.createElement(s),o.head.insertBefore(u,o.querySelector("head > title"))),ve(u,s,a),u[ee]=t,fe(u),s=u;break t;case"link":var m=Zp("link","href",o).get(s+(a.href||""));if(m){for(var b=0;b<m.length;b++)if(u=m[b],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){m.splice(b,1);break e}}u=o.createElement(s),ve(u,s,a),o.head.appendChild(u);break;case"meta":if(m=Zp("meta","content",o).get(s+(a.content||""))){for(b=0;b<m.length;b++)if(u=m[b],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){m.splice(b,1);break e}}u=o.createElement(s),ve(u,s,a),o.head.appendChild(u);break;default:throw Error(r(468,s))}u[ee]=t,fe(u),s=u}t.stateNode=s}else Pp(o,t.type,t.stateNode);else t.stateNode=Qp(o,s,t.memoizedProps);else u!==s?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,s===null?Pp(o,t.type,t.stateNode):Qp(o,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Wu(t,t.memoizedProps,a.memoizedProps)}break;case 27:ze(e,t),Le(t),s&512&&(se||a===null||An(a,a.return)),a!==null&&s&4&&Wu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ze(e,t),Le(t),s&512&&(se||a===null||An(a,a.return)),t.flags&32){o=t.stateNode;try{Ei(o,"")}catch(it){Bt(t,t.return,it)}}s&4&&t.stateNode!=null&&(o=t.memoizedProps,Wu(t,o,a!==null?a.memoizedProps:o)),s&1024&&(ec=!0);break;case 6:if(ze(e,t),Le(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(it){Bt(t,t.return,it)}}break;case 3:if(Or=null,o=hn,hn=kr(e.containerInfo),ze(e,t),hn=o,Le(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ns(e.containerInfo)}catch(it){Bt(t,t.return,it)}ec&&(ec=!1,Pm(t));break;case 4:s=hn,hn=kr(t.stateNode.containerInfo),ze(e,t),Le(t),hn=s;break;case 12:ze(e,t),Le(t);break;case 31:ze(e,t),Le(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,yr(t,s)));break;case 13:ze(e,t),Le(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(br=we()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,yr(t,s)));break;case 22:o=t.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,k=Fn,_=se;if(Fn=k||o,se=_||w,ze(e,t),se=_,Fn=k,Le(t),s&8192)t:for(e=t.stateNode,e._visibility=o?e._visibility&-2:e._visibility|1,o&&(a===null||w||Fn||se||ii(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){w=a=e;try{if(u=w.stateNode,o)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=w.stateNode;var G=w.memoizedProps.style,R=G!=null&&G.hasOwnProperty("display")?G.display:null;b.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(it){Bt(w,w.return,it)}}}else if(e.tag===6){if(a===null){w=e;try{w.stateNode.nodeValue=o?"":w.memoizedProps}catch(it){Bt(w,w.return,it)}}}else if(e.tag===18){if(a===null){w=e;try{var z=w.stateNode;o?_p(z,!0):_p(w.stateNode,!1)}catch(it){Bt(w,w.return,it)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,yr(t,a))));break;case 19:ze(e,t),Le(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,yr(t,s)));break;case 30:break;case 21:break;default:ze(e,t),Le(t)}}function Le(t){var e=t.flags;if(e&2){try{for(var a,s=t.return;s!==null;){if(Um(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var o=a.stateNode,u=Iu(t);gr(t,u,o);break;case 5:var m=a.stateNode;a.flags&32&&(Ei(m,""),a.flags&=-33);var b=Iu(t);gr(t,b,m);break;case 3:case 4:var w=a.stateNode.containerInfo,k=Iu(t);tc(t,k,w);break;default:throw Error(r(161))}}catch(_){Bt(t,t.return,_)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Pm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Pm(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function $n(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)qm(t,e.alternate,e),e=e.sibling}function ii(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ga(4,e,e.return),ii(e);break;case 1:An(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&_m(e,e.return,a),ii(e);break;case 27:el(e.stateNode);case 26:case 5:An(e,e.return),ii(e);break;case 22:e.memoizedState===null&&ii(e);break;case 30:ii(e);break;default:ii(e)}t=t.sibling}}function Wn(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var s=e.alternate,o=t,u=e,m=u.flags;switch(u.tag){case 0:case 11:case 15:Wn(o,u,a),Ks(4,u);break;case 1:if(Wn(o,u,a),s=u,o=s.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(k){Bt(s,s.return,k)}if(s=u,o=s.updateQueue,o!==null){var b=s.stateNode;try{var w=o.shared.hiddenCallbacks;if(w!==null)for(o.shared.hiddenCallbacks=null,o=0;o<w.length;o++)Eh(w[o],b)}catch(k){Bt(s,s.return,k)}}a&&m&64&&Vm(u),Qs(u,u.return);break;case 27:Hm(u);case 26:case 5:Wn(o,u,a),a&&s===null&&m&4&&Bm(u),Qs(u,u.return);break;case 12:Wn(o,u,a);break;case 31:Wn(o,u,a),a&&m&4&&Km(o,u);break;case 13:Wn(o,u,a),a&&m&4&&Qm(o,u);break;case 22:u.memoizedState===null&&Wn(o,u,a),Qs(u,u.return);break;case 30:break;default:Wn(o,u,a)}e=e.sibling}}function nc(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Rs(a))}function ac(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Rs(t))}function mn(t,e,a,s){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fm(t,e,a,s),e=e.sibling}function Fm(t,e,a,s){var o=e.flags;switch(e.tag){case 0:case 11:case 15:mn(t,e,a,s),o&2048&&Ks(9,e);break;case 1:mn(t,e,a,s);break;case 3:mn(t,e,a,s),o&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Rs(t)));break;case 12:if(o&2048){mn(t,e,a,s),t=e.stateNode;try{var u=e.memoizedProps,m=u.id,b=u.onPostCommit;typeof b=="function"&&b(m,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(w){Bt(e,e.return,w)}}else mn(t,e,a,s);break;case 31:mn(t,e,a,s);break;case 13:mn(t,e,a,s);break;case 23:break;case 22:u=e.stateNode,m=e.alternate,e.memoizedState!==null?u._visibility&2?mn(t,e,a,s):Zs(t,e):u._visibility&2?mn(t,e,a,s):(u._visibility|=2,Ki(t,e,a,s,(e.subtreeFlags&10256)!==0||!1)),o&2048&&nc(m,e);break;case 24:mn(t,e,a,s),o&2048&&ac(e.alternate,e);break;default:mn(t,e,a,s)}}function Ki(t,e,a,s,o){for(o=o&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,m=e,b=a,w=s,k=m.flags;switch(m.tag){case 0:case 11:case 15:Ki(u,m,b,w,o),Ks(8,m);break;case 23:break;case 22:var _=m.stateNode;m.memoizedState!==null?_._visibility&2?Ki(u,m,b,w,o):Zs(u,m):(_._visibility|=2,Ki(u,m,b,w,o)),o&&k&2048&&nc(m.alternate,m);break;case 24:Ki(u,m,b,w,o),o&&k&2048&&ac(m.alternate,m);break;default:Ki(u,m,b,w,o)}e=e.sibling}}function Zs(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,s=e,o=s.flags;switch(s.tag){case 22:Zs(a,s),o&2048&&nc(s.alternate,s);break;case 24:Zs(a,s),o&2048&&ac(s.alternate,s);break;default:Zs(a,s)}e=e.sibling}}var Ps=8192;function Qi(t,e,a){if(t.subtreeFlags&Ps)for(t=t.child;t!==null;)Jm(t,e,a),t=t.sibling}function Jm(t,e,a){switch(t.tag){case 26:Qi(t,e,a),t.flags&Ps&&t.memoizedState!==null&&h1(a,hn,t.memoizedState,t.memoizedProps);break;case 5:Qi(t,e,a);break;case 3:case 4:var s=hn;hn=kr(t.stateNode.containerInfo),Qi(t,e,a),hn=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Ps,Ps=16777216,Qi(t,e,a),Ps=s):Qi(t,e,a));break;default:Qi(t,e,a)}}function $m(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Fs(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var s=e[a];de=s,Im(s,t)}$m(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wm(t),t=t.sibling}function Wm(t){switch(t.tag){case 0:case 11:case 15:Fs(t),t.flags&2048&&ga(9,t,t.return);break;case 3:Fs(t);break;case 12:Fs(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,vr(t)):Fs(t);break;default:Fs(t)}}function vr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var s=e[a];de=s,Im(s,t)}$m(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ga(8,e,e.return),vr(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,vr(e));break;default:vr(e)}t=t.sibling}}function Im(t,e){for(;de!==null;){var a=de;switch(a.tag){case 0:case 11:case 15:ga(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Rs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,de=s;else t:for(a=t;de!==null;){s=de;var o=s.sibling,u=s.return;if(Ym(s),s===a){de=null;break t}if(o!==null){o.return=u,de=o;break t}de=u}}}var Mx={getCacheForType:function(t){var e=ge(ne),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return ge(ne).controller.signal}},Nx=typeof WeakMap=="function"?WeakMap:Map,Vt=0,qt=null,Mt=null,kt=0,_t=0,Xe=null,ya=!1,Zi=!1,ic=!1,In=0,Jt=0,va=0,si=0,sc=0,Ke=0,Pi=0,Js=null,Ve=null,lc=!1,br=0,tp=0,xr=1/0,Sr=null,ba=null,re=0,xa=null,Fi=null,ta=0,rc=0,oc=null,ep=null,$s=0,uc=null;function Qe(){return(Vt&2)!==0&&kt!==0?kt&-kt:O.T!==null?pc():xn()}function np(){if(Ke===0)if((kt&536870912)===0||Ot){var t=bi;bi<<=1,(bi&3932160)===0&&(bi=262144),Ke=t}else Ke=536870912;return t=qe.current,t!==null&&(t.flags|=32),Ke}function _e(t,e,a){(t===qt&&(_t===2||_t===9)||t.cancelPendingCommit!==null)&&(Ji(t,0),Sa(t,kt,Ke,!1)),et(t,a),((Vt&2)===0||t!==qt)&&(t===qt&&((Vt&2)===0&&(si|=a),Jt===4&&Sa(t,kt,Ke,!1)),En(t))}function ap(t,e,a){if((Vt&6)!==0)throw Error(r(327));var s=!a&&(e&127)===0&&(e&t.expiredLanes)===0||j(t,e),o=s?Rx(t,e):fc(t,e,!0),u=s;do{if(o===0){Zi&&!s&&Sa(t,e,0,!1);break}else{if(a=t.current.alternate,u&&!Dx(a)){o=fc(t,e,!1),u=!1;continue}if(o===2){if(u=e,t.errorRecoveryDisabledLanes&u)var m=0;else m=t.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){e=m;t:{var b=t;o=Js;var w=b.current.memoizedState.isDehydrated;if(w&&(Ji(b,m).flags|=256),m=fc(b,m,!1),m!==2){if(ic&&!w){b.errorRecoveryDisabledLanes|=u,si|=u,o=4;break t}u=Ve,Ve=o,u!==null&&(Ve===null?Ve=u:Ve.push.apply(Ve,u))}o=m}if(u=!1,o!==2)continue}}if(o===1){Ji(t,0),Sa(t,e,0,!0);break}t:{switch(s=t,u=o,u){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:Sa(s,e,Ke,!ya);break t;case 2:Ve=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(o=br+300-we(),10<o)){if(Sa(s,e,Ke,!ya),Si(s,0,!0)!==0)break t;ta=e,s.timeoutHandle=zp(ip.bind(null,s,a,Ve,Sr,lc,e,Ke,si,Pi,ya,u,"Throttled",-0,0),o);break t}ip(s,a,Ve,Sr,lc,e,Ke,si,Pi,ya,u,null,-0,0)}}break}while(!0);En(t)}function ip(t,e,a,s,o,u,m,b,w,k,_,G,R,z){if(t.timeoutHandle=-1,G=e.subtreeFlags,G&8192||(G&16785408)===16785408){G={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Un},Jm(e,u,G);var it=(u&62914560)===u?br-we():(u&4194048)===u?tp-we():0;if(it=m1(G,it),it!==null){ta=u,t.cancelPendingCommit=it(dp.bind(null,t,e,u,a,s,o,m,b,w,_,G,null,R,z)),Sa(t,u,m,!k);return}}dp(t,e,u,a,s,o,m,b,w)}function Dx(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var o=a[s],u=o.getSnapshot;o=o.value;try{if(!He(u(),o))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sa(t,e,a,s){e&=~sc,e&=~si,t.suspendedLanes|=e,t.pingedLanes&=~e,s&&(t.warmLanes|=e),s=t.expirationTimes;for(var o=e;0<o;){var u=31-Ee(o),m=1<<u;s[u]=-1,o&=~m}a!==0&&jt(t,a,e)}function wr(){return(Vt&6)===0?(Ws(0),!1):!0}function cc(){if(Mt!==null){if(_t===0)var t=Mt.return;else t=Mt,Yn=Ja=null,Cu(t),Hi=null,zs=0,t=Mt;for(;t!==null;)Lm(t.alternate,t),t=t.return;Mt=null}}function Ji(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Jx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ta=0,cc(),qt=t,Mt=a=Gn(t.current,null),kt=e,_t=0,Xe=null,ya=!1,Zi=j(t,e),ic=!1,Pi=Ke=sc=si=va=Jt=0,Ve=Js=null,lc=!1,(e&8)!==0&&(e|=e&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=e;0<s;){var o=31-Ee(s),u=1<<o;e|=t[o],s&=~u}return In=e,Yl(),a}function sp(t,e){wt=null,O.H=qs,e===Ui||e===$l?(e=Sh(),_t=3):e===mu?(e=Sh(),_t=4):_t=e===qu?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Xe=e,Mt===null&&(Jt=1,fr(t,Ie(e,t.current)))}function lp(){var t=qe.current;return t===null?!0:(kt&4194048)===kt?an===null:(kt&62914560)===kt||(kt&536870912)!==0?t===an:!1}function rp(){var t=O.H;return O.H=qs,t===null?qs:t}function op(){var t=O.A;return O.A=Mx,t}function Tr(){Jt=4,ya||(kt&4194048)!==kt&&qe.current!==null||(Zi=!0),(va&134217727)===0&&(si&134217727)===0||qt===null||Sa(qt,kt,Ke,!1)}function fc(t,e,a){var s=Vt;Vt|=2;var o=rp(),u=op();(qt!==t||kt!==e)&&(Sr=null,Ji(t,e)),e=!1;var m=Jt;t:do try{if(_t!==0&&Mt!==null){var b=Mt,w=Xe;switch(_t){case 8:cc(),m=6;break t;case 3:case 2:case 9:case 6:qe.current===null&&(e=!0);var k=_t;if(_t=0,Xe=null,$i(t,b,w,k),a&&Zi){m=0;break t}break;default:k=_t,_t=0,Xe=null,$i(t,b,w,k)}}kx(),m=Jt;break}catch(_){sp(t,_)}while(!0);return e&&t.shellSuspendCounter++,Yn=Ja=null,Vt=s,O.H=o,O.A=u,Mt===null&&(qt=null,kt=0,Yl()),m}function kx(){for(;Mt!==null;)up(Mt)}function Rx(t,e){var a=Vt;Vt|=2;var s=rp(),o=op();qt!==t||kt!==e?(Sr=null,xr=we()+500,Ji(t,e)):Zi=j(t,e);t:do try{if(_t!==0&&Mt!==null){e=Mt;var u=Xe;e:switch(_t){case 1:_t=0,Xe=null,$i(t,e,u,1);break;case 2:case 9:if(bh(u)){_t=0,Xe=null,cp(e);break}e=function(){_t!==2&&_t!==9||qt!==t||(_t=7),En(t)},u.then(e,e);break t;case 3:_t=7;break t;case 4:_t=5;break t;case 7:bh(u)?(_t=0,Xe=null,cp(e)):(_t=0,Xe=null,$i(t,e,u,7));break;case 5:var m=null;switch(Mt.tag){case 26:m=Mt.memoizedState;case 5:case 27:var b=Mt;if(m?Fp(m):b.stateNode.complete){_t=0,Xe=null;var w=b.sibling;if(w!==null)Mt=w;else{var k=b.return;k!==null?(Mt=k,Ar(k)):Mt=null}break e}}_t=0,Xe=null,$i(t,e,u,5);break;case 6:_t=0,Xe=null,$i(t,e,u,6);break;case 8:cc(),Jt=6;break t;default:throw Error(r(462))}}Ox();break}catch(_){sp(t,_)}while(!0);return Yn=Ja=null,O.H=s,O.A=o,Vt=a,Mt!==null?0:(qt=null,kt=0,Yl(),Jt)}function Ox(){for(;Mt!==null&&!jl();)up(Mt)}function up(t){var e=Om(t.alternate,t,In);t.memoizedProps=t.pendingProps,e===null?Ar(t):Mt=e}function cp(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=jm(a,e,e.pendingProps,e.type,void 0,kt);break;case 11:e=jm(a,e,e.pendingProps,e.type.render,e.ref,kt);break;case 5:Cu(e);default:Lm(a,e),e=Mt=oh(e,In),e=Om(a,e,In)}t.memoizedProps=t.pendingProps,e===null?Ar(t):Mt=e}function $i(t,e,a,s){Yn=Ja=null,Cu(e),Hi=null,zs=0;var o=e.return;try{if(Sx(t,o,e,a,kt)){Jt=1,fr(t,Ie(a,t.current)),Mt=null;return}}catch(u){if(o!==null)throw Mt=o,u;Jt=1,fr(t,Ie(a,t.current)),Mt=null;return}e.flags&32768?(Ot||s===1?t=!0:Zi||(kt&536870912)!==0?t=!1:(ya=t=!0,(s===2||s===9||s===3||s===6)&&(s=qe.current,s!==null&&s.tag===13&&(s.flags|=16384))),fp(e,t)):Ar(e)}function Ar(t){var e=t;do{if((e.flags&32768)!==0){fp(e,ya);return}t=e.return;var a=Ax(e.alternate,e,In);if(a!==null){Mt=a;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);Jt===0&&(Jt=5)}function fp(t,e){do{var a=Ex(t.alternate,t);if(a!==null){a.flags&=32767,Mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){Mt=t;return}Mt=t=a}while(t!==null);Jt=6,Mt=null}function dp(t,e,a,s,o,u,m,b,w){t.cancelPendingCommit=null;do Er();while(re!==0);if((Vt&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(u=e.lanes|e.childLanes,u|=Io,ht(t,a,u,m,b,w),t===qt&&(Mt=qt=null,kt=0),Fi=e,xa=t,ta=a,rc=u,oc=o,ep=s,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,_x(vi,function(){return yp(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,o=F.p,F.p=2,m=Vt,Vt|=4;try{Cx(t,e,a)}finally{Vt=m,F.p=o,O.T=s}}re=1,hp(),mp(),pp()}}function hp(){if(re===1){re=0;var t=xa,e=Fi,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=F.p;F.p=2;var o=Vt;Vt|=4;try{Zm(e,t);var u=Tc,m=Id(t.containerInfo),b=u.focusedElem,w=u.selectionRange;if(m!==b&&b&&b.ownerDocument&&Wd(b.ownerDocument.documentElement,b)){if(w!==null&&Po(b)){var k=w.start,_=w.end;if(_===void 0&&(_=k),"selectionStart"in b)b.selectionStart=k,b.selectionEnd=Math.min(_,b.value.length);else{var G=b.ownerDocument||document,R=G&&G.defaultView||window;if(R.getSelection){var z=R.getSelection(),it=b.textContent.length,yt=Math.min(w.start,it),Gt=w.end===void 0?yt:Math.min(w.end,it);!z.extend&&yt>Gt&&(m=Gt,Gt=yt,yt=m);var C=$d(b,yt),A=$d(b,Gt);if(C&&A&&(z.rangeCount!==1||z.anchorNode!==C.node||z.anchorOffset!==C.offset||z.focusNode!==A.node||z.focusOffset!==A.offset)){var D=G.createRange();D.setStart(C.node,C.offset),z.removeAllRanges(),yt>Gt?(z.addRange(D),z.extend(A.node,A.offset)):(D.setEnd(A.node,A.offset),z.addRange(D))}}}}for(G=[],z=b;z=z.parentNode;)z.nodeType===1&&G.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<G.length;b++){var U=G[b];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}_r=!!wc,Tc=wc=null}finally{Vt=o,F.p=s,O.T=a}}t.current=e,re=2}}function mp(){if(re===2){re=0;var t=xa,e=Fi,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=F.p;F.p=2;var o=Vt;Vt|=4;try{qm(t,e.alternate,e)}finally{Vt=o,F.p=s,O.T=a}}re=3}}function pp(){if(re===4||re===3){re=0,Ml();var t=xa,e=Fi,a=ta,s=ep;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?re=5:(re=0,Fi=xa=null,gp(t,t.pendingLanes));var o=t.pendingLanes;if(o===0&&(ba=null),zn(a),e=e.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(aa,e,void 0,(e.current.flags&128)===128)}catch{}if(s!==null){e=O.T,o=F.p,F.p=2,O.T=null;try{for(var u=t.onRecoverableError,m=0;m<s.length;m++){var b=s[m];u(b.value,{componentStack:b.stack})}}finally{O.T=e,F.p=o}}(ta&3)!==0&&Er(),En(t),o=t.pendingLanes,(a&261930)!==0&&(o&42)!==0?t===uc?$s++:($s=0,uc=t):$s=0,Ws(0)}}function gp(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Rs(e)))}function Er(){return hp(),mp(),pp(),yp()}function yp(){if(re!==5)return!1;var t=xa,e=rc;rc=0;var a=zn(ta),s=O.T,o=F.p;try{F.p=32>a?32:a,O.T=null,a=oc,oc=null;var u=xa,m=ta;if(re=0,Fi=xa=null,ta=0,(Vt&6)!==0)throw Error(r(331));var b=Vt;if(Vt|=4,Wm(u.current),Fm(u,u.current,m,a),Vt=b,Ws(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(aa,u)}catch{}return!0}finally{F.p=o,O.T=s,gp(t,e)}}function vp(t,e,a){e=Ie(a,e),e=Gu(t.stateNode,e,2),t=ha(t,e,2),t!==null&&(et(t,2),En(t))}function Bt(t,e,a){if(t.tag===3)vp(t,t,a);else for(;e!==null;){if(e.tag===3){vp(e,t,a);break}else if(e.tag===1){var s=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ba===null||!ba.has(s))){t=Ie(a,t),a=bm(2),s=ha(e,a,2),s!==null&&(xm(a,s,e,t),et(s,2),En(s));break}}e=e.return}}function dc(t,e,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Nx;var o=new Set;s.set(e,o)}else o=s.get(e),o===void 0&&(o=new Set,s.set(e,o));o.has(a)||(ic=!0,o.add(a),t=zx.bind(null,t,e,a),e.then(t,t))}function zx(t,e,a){var s=t.pingCache;s!==null&&s.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qt===t&&(kt&a)===a&&(Jt===4||Jt===3&&(kt&62914560)===kt&&300>we()-br?(Vt&2)===0&&Ji(t,0):sc|=a,Pi===kt&&(Pi=0)),En(t)}function bp(t,e){e===0&&(e=at()),t=Za(t,e),t!==null&&(et(t,e),En(t))}function Lx(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),bp(t,a)}function Vx(t,e){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,o=t.memoizedState;o!==null&&(a=o.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(e),bp(t,a)}function _x(t,e){return gi(t,e)}var Cr=null,Wi=null,hc=!1,jr=!1,mc=!1,wa=0;function En(t){t!==Wi&&t.next===null&&(Wi===null?Cr=Wi=t:Wi=Wi.next=t),jr=!0,hc||(hc=!0,Ux())}function Ws(t,e){if(!mc&&jr){mc=!0;do for(var a=!1,s=Cr;s!==null;){if(t!==0){var o=s.pendingLanes;if(o===0)var u=0;else{var m=s.suspendedLanes,b=s.pingedLanes;u=(1<<31-Ee(42|t)+1)-1,u&=o&~(m&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,Tp(s,u))}else u=kt,u=Si(s,s===qt?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||j(s,u)||(a=!0,Tp(s,u));s=s.next}while(a);mc=!1}}function Bx(){xp()}function xp(){jr=hc=!1;var t=0;wa!==0&&Fx()&&(t=wa);for(var e=we(),a=null,s=Cr;s!==null;){var o=s.next,u=Sp(s,e);u===0?(s.next=null,a===null?Cr=o:a.next=o,o===null&&(Wi=a)):(a=s,(t!==0||(u&3)!==0)&&(jr=!0)),s=o}re!==0&&re!==5||Ws(t),wa!==0&&(wa=0)}function Sp(t,e){for(var a=t.suspendedLanes,s=t.pingedLanes,o=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var m=31-Ee(u),b=1<<m,w=o[m];w===-1?((b&a)===0||(b&s)!==0)&&(o[m]=tt(b,e)):w<=e&&(t.expiredLanes|=b),u&=~b}if(e=qt,a=kt,a=Si(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===e&&(_t===2||_t===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&yi(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||j(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(s!==null&&yi(s),zn(a)){case 2:case 8:a=Ue;break;case 32:a=vi;break;case 268435456:a=bs;break;default:a=vi}return s=wp.bind(null,t),a=gi(a,s),t.callbackPriority=e,t.callbackNode=a,e}return s!==null&&s!==null&&yi(s),t.callbackPriority=2,t.callbackNode=null,2}function wp(t,e){if(re!==0&&re!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Er()&&t.callbackNode!==a)return null;var s=kt;return s=Si(t,t===qt?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(ap(t,s,e),Sp(t,we()),t.callbackNode!=null&&t.callbackNode===a?wp.bind(null,t):null)}function Tp(t,e){if(Er())return null;ap(t,e,!0)}function Ux(){$x(function(){(Vt&6)!==0?gi(Dl,Bx):xp()})}function pc(){if(wa===0){var t=_i;t===0&&(t=Ha,Ha<<=1,(Ha&261888)===0&&(Ha=256)),wa=t}return wa}function Ap(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ll(""+t)}function Ep(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Hx(t,e,a,s,o){if(e==="submit"&&a&&a.stateNode===o){var u=Ap((o[ce]||null).action),m=s.submitter;m&&(e=(e=m[ce]||null)?Ap(e.formAction):m.getAttribute("formAction"),e!==null&&(u=e,m=null));var b=new Ul("action","action",null,s,o);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(wa!==0){var w=m?Ep(o,m):new FormData(o);Lu(a,{pending:!0,data:w,method:o.method,action:u},null,w)}}else typeof u=="function"&&(b.preventDefault(),w=m?Ep(o,m):new FormData(o),Lu(a,{pending:!0,data:w,method:o.method,action:u},u,w))},currentTarget:o}]})}}for(var gc=0;gc<Wo.length;gc++){var yc=Wo[gc],Gx=yc.toLowerCase(),qx=yc[0].toUpperCase()+yc.slice(1);dn(Gx,"on"+qx)}dn(nh,"onAnimationEnd"),dn(ah,"onAnimationIteration"),dn(ih,"onAnimationStart"),dn("dblclick","onDoubleClick"),dn("focusin","onFocus"),dn("focusout","onBlur"),dn(ix,"onTransitionRun"),dn(sx,"onTransitionStart"),dn(lx,"onTransitionCancel"),dn(sh,"onTransitionEnd"),Ti("onMouseEnter",["mouseout","mouseover"]),Ti("onMouseLeave",["mouseout","mouseover"]),Ti("onPointerEnter",["pointerout","pointerover"]),Ti("onPointerLeave",["pointerout","pointerover"]),Ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ya("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Is));function Cp(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],o=s.event;s=s.listeners;t:{var u=void 0;if(e)for(var m=s.length-1;0<=m;m--){var b=s[m],w=b.instance,k=b.currentTarget;if(b=b.listener,w!==u&&o.isPropagationStopped())break t;u=b,o.currentTarget=k;try{u(o)}catch(_){ql(_)}o.currentTarget=null,u=w}else for(m=0;m<s.length;m++){if(b=s[m],w=b.instance,k=b.currentTarget,b=b.listener,w!==u&&o.isPropagationStopped())break t;u=b,o.currentTarget=k;try{u(o)}catch(_){ql(_)}o.currentTarget=null,u=w}}}}function Nt(t,e){var a=e[fn];a===void 0&&(a=e[fn]=new Set);var s=t+"__bubble";a.has(s)||(jp(e,t,2,!1),a.add(s))}function vc(t,e,a){var s=0;e&&(s|=4),jp(a,t,s,e)}var Mr="_reactListening"+Math.random().toString(36).slice(2);function bc(t){if(!t[Mr]){t[Mr]=!0,xd.forEach(function(a){a!=="selectionchange"&&(Yx.has(a)||vc(a,!1,t),vc(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mr]||(e[Mr]=!0,vc("selectionchange",!1,e))}}function jp(t,e,a,s){switch(n0(e)){case 2:var o=y1;break;case 8:o=v1;break;default:o=zc}a=o.bind(null,e,a,t),o=void 0,!Uo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),s?o!==void 0?t.addEventListener(e,a,{capture:!0,passive:o}):t.addEventListener(e,a,!0):o!==void 0?t.addEventListener(e,a,{passive:o}):t.addEventListener(e,a,!1)}function xc(t,e,a,s,o){var u=s;if((e&1)===0&&(e&2)===0&&s!==null)t:for(;;){if(s===null)return;var m=s.tag;if(m===3||m===4){var b=s.stateNode.containerInfo;if(b===o)break;if(m===4)for(m=s.return;m!==null;){var w=m.tag;if((w===3||w===4)&&m.stateNode.containerInfo===o)return;m=m.return}for(;b!==null;){if(m=Vn(b),m===null)return;if(w=m.tag,w===5||w===6||w===26||w===27){s=u=m;continue t}b=b.parentNode}}s=s.return}Rd(function(){var k=u,_=_o(a),G=[];t:{var R=lh.get(t);if(R!==void 0){var z=Ul,it=t;switch(t){case"keypress":if(_l(a)===0)break t;case"keydown":case"keyup":z=Vb;break;case"focusin":it="focus",z=Yo;break;case"focusout":it="blur",z=Yo;break;case"beforeblur":case"afterblur":z=Yo;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Ab;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Ub;break;case nh:case ah:case ih:z=jb;break;case sh:z=Gb;break;case"scroll":case"scrollend":z=wb;break;case"wheel":z=Yb;break;case"copy":case"cut":case"paste":z=Nb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=_d;break;case"toggle":case"beforetoggle":z=Kb}var yt=(e&4)!==0,Gt=!yt&&(t==="scroll"||t==="scrollend"),C=yt?R!==null?R+"Capture":null:R;yt=[];for(var A=k,D;A!==null;){var U=A;if(D=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||D===null||C===null||(U=Ss(A,C),U!=null&&yt.push(tl(A,U,D))),Gt)break;A=A.return}0<yt.length&&(R=new z(R,it,null,a,_),G.push({event:R,listeners:yt}))}}if((e&7)===0){t:{if(R=t==="mouseover"||t==="pointerover",z=t==="mouseout"||t==="pointerout",R&&a!==Vo&&(it=a.relatedTarget||a.fromElement)&&(Vn(it)||it[cn]))break t;if((z||R)&&(R=_.window===_?_:(R=_.ownerDocument)?R.defaultView||R.parentWindow:window,z?(it=a.relatedTarget||a.toElement,z=k,it=it?Vn(it):null,it!==null&&(Gt=f(it),yt=it.tag,it!==Gt||yt!==5&&yt!==27&&yt!==6)&&(it=null)):(z=null,it=k),z!==it)){if(yt=Ld,U="onMouseLeave",C="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(yt=_d,U="onPointerLeave",C="onPointerEnter",A="pointer"),Gt=z==null?R:qa(z),D=it==null?R:qa(it),R=new yt(U,A+"leave",z,a,_),R.target=Gt,R.relatedTarget=D,U=null,Vn(_)===k&&(yt=new yt(C,A+"enter",it,a,_),yt.target=D,yt.relatedTarget=Gt,U=yt),Gt=U,z&&it)e:{for(yt=Xx,C=z,A=it,D=0,U=C;U;U=yt(U))D++;U=0;for(var pt=A;pt;pt=yt(pt))U++;for(;0<D-U;)C=yt(C),D--;for(;0<U-D;)A=yt(A),U--;for(;D--;){if(C===A||A!==null&&C===A.alternate){yt=C;break e}C=yt(C),A=yt(A)}yt=null}else yt=null;z!==null&&Mp(G,R,z,yt,!1),it!==null&&Gt!==null&&Mp(G,Gt,it,yt,!0)}}t:{if(R=k?qa(k):window,z=R.nodeName&&R.nodeName.toLowerCase(),z==="select"||z==="input"&&R.type==="file")var zt=Kd;else if(Yd(R))if(Qd)zt=ex;else{zt=Ib;var ct=Wb}else z=R.nodeName,!z||z.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?k&&Lo(k.elementType)&&(zt=Kd):zt=tx;if(zt&&(zt=zt(t,k))){Xd(G,zt,a,_);break t}ct&&ct(t,R,k),t==="focusout"&&k&&R.type==="number"&&k.memoizedProps.value!=null&&zo(R,"number",R.value)}switch(ct=k?qa(k):window,t){case"focusin":(Yd(ct)||ct.contentEditable==="true")&&(Ni=ct,Fo=k,Ns=null);break;case"focusout":Ns=Fo=Ni=null;break;case"mousedown":Jo=!0;break;case"contextmenu":case"mouseup":case"dragend":Jo=!1,th(G,a,_);break;case"selectionchange":if(ax)break;case"keydown":case"keyup":th(G,a,_)}var At;if(Ko)t:{switch(t){case"compositionstart":var Rt="onCompositionStart";break t;case"compositionend":Rt="onCompositionEnd";break t;case"compositionupdate":Rt="onCompositionUpdate";break t}Rt=void 0}else Mi?Gd(t,a)&&(Rt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Rt="onCompositionStart");Rt&&(Bd&&a.locale!=="ko"&&(Mi||Rt!=="onCompositionStart"?Rt==="onCompositionEnd"&&Mi&&(At=Od()):(la=_,Ho="value"in la?la.value:la.textContent,Mi=!0)),ct=Nr(k,Rt),0<ct.length&&(Rt=new Vd(Rt,t,null,a,_),G.push({event:Rt,listeners:ct}),At?Rt.data=At:(At=qd(a),At!==null&&(Rt.data=At)))),(At=Zb?Pb(t,a):Fb(t,a))&&(Rt=Nr(k,"onBeforeInput"),0<Rt.length&&(ct=new Vd("onBeforeInput","beforeinput",null,a,_),G.push({event:ct,listeners:Rt}),ct.data=At)),Hx(G,t,k,a,_)}Cp(G,e)})}function tl(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Nr(t,e){for(var a=e+"Capture",s=[];t!==null;){var o=t,u=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||u===null||(o=Ss(t,a),o!=null&&s.unshift(tl(t,o,u)),o=Ss(t,e),o!=null&&s.push(tl(t,o,u))),t.tag===3)return s;t=t.return}return[]}function Xx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Mp(t,e,a,s,o){for(var u=e._reactName,m=[];a!==null&&a!==s;){var b=a,w=b.alternate,k=b.stateNode;if(b=b.tag,w!==null&&w===s)break;b!==5&&b!==26&&b!==27||k===null||(w=k,o?(k=Ss(a,u),k!=null&&m.unshift(tl(a,k,w))):o||(k=Ss(a,u),k!=null&&m.push(tl(a,k,w)))),a=a.return}m.length!==0&&t.push({event:e,listeners:m})}var Kx=/\r\n?/g,Qx=/\u0000|\uFFFD/g;function Np(t){return(typeof t=="string"?t:""+t).replace(Kx,`
`).replace(Qx,"")}function Dp(t,e){return e=Np(e),Np(t)===e}function Ht(t,e,a,s,o,u){switch(a){case"children":typeof s=="string"?e==="body"||e==="textarea"&&s===""||Ei(t,s):(typeof s=="number"||typeof s=="bigint")&&e!=="body"&&Ei(t,""+s);break;case"className":Ol(t,"class",s);break;case"tabIndex":Ol(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ol(t,a,s);break;case"style":Dd(t,s,u);break;case"data":if(e!=="object"){Ol(t,"data",s);break}case"src":case"href":if(s===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ll(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(e!=="input"&&Ht(t,e,"name",o.name,o,null),Ht(t,e,"formEncType",o.formEncType,o,null),Ht(t,e,"formMethod",o.formMethod,o,null),Ht(t,e,"formTarget",o.formTarget,o,null)):(Ht(t,e,"encType",o.encType,o,null),Ht(t,e,"method",o.method,o,null),Ht(t,e,"target",o.target,o,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ll(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Un);break;case"onScroll":s!=null&&Nt("scroll",t);break;case"onScrollEnd":s!=null&&Nt("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(o.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ll(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Nt("beforetoggle",t),Nt("toggle",t),Rl(t,"popover",s);break;case"xlinkActuate":Bn(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Bn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Bn(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Bn(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Bn(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Bn(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Bn(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Bn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Bn(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Rl(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=xb.get(a)||a,Rl(t,a,s))}}function Sc(t,e,a,s,o,u){switch(a){case"style":Dd(t,s,u);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(o.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Ei(t,s):(typeof s=="number"||typeof s=="bigint")&&Ei(t,""+s);break;case"onScroll":s!=null&&Nt("scroll",t);break;case"onScrollEnd":s!=null&&Nt("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Un);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sd.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(o=a.endsWith("Capture"),e=a.slice(2,o?a.length-7:void 0),u=t[ce]||null,u=u!=null?u[a]:null,typeof u=="function"&&t.removeEventListener(e,u,o),typeof s=="function")){typeof u!="function"&&u!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,s,o);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Rl(t,a,s)}}}function ve(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nt("error",t),Nt("load",t);var s=!1,o=!1,u;for(u in a)if(a.hasOwnProperty(u)){var m=a[u];if(m!=null)switch(u){case"src":s=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Ht(t,e,u,m,a,null)}}o&&Ht(t,e,"srcSet",a.srcSet,a,null),s&&Ht(t,e,"src",a.src,a,null);return;case"input":Nt("invalid",t);var b=u=m=o=null,w=null,k=null;for(s in a)if(a.hasOwnProperty(s)){var _=a[s];if(_!=null)switch(s){case"name":o=_;break;case"type":m=_;break;case"checked":w=_;break;case"defaultChecked":k=_;break;case"value":u=_;break;case"defaultValue":b=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(137,e));break;default:Ht(t,e,s,_,a,null)}}Cd(t,u,b,w,k,m,o,!1);return;case"select":Nt("invalid",t),s=m=u=null;for(o in a)if(a.hasOwnProperty(o)&&(b=a[o],b!=null))switch(o){case"value":u=b;break;case"defaultValue":m=b;break;case"multiple":s=b;default:Ht(t,e,o,b,a,null)}e=u,a=m,t.multiple=!!s,e!=null?Ai(t,!!s,e,!1):a!=null&&Ai(t,!!s,a,!0);return;case"textarea":Nt("invalid",t),u=o=s=null;for(m in a)if(a.hasOwnProperty(m)&&(b=a[m],b!=null))switch(m){case"value":s=b;break;case"defaultValue":o=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Ht(t,e,m,b,a,null)}Md(t,s,o,u);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(s=a[w],s!=null))switch(w){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ht(t,e,w,s,a,null)}return;case"dialog":Nt("beforetoggle",t),Nt("toggle",t),Nt("cancel",t),Nt("close",t);break;case"iframe":case"object":Nt("load",t);break;case"video":case"audio":for(s=0;s<Is.length;s++)Nt(Is[s],t);break;case"image":Nt("error",t),Nt("load",t);break;case"details":Nt("toggle",t);break;case"embed":case"source":case"link":Nt("error",t),Nt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in a)if(a.hasOwnProperty(k)&&(s=a[k],s!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Ht(t,e,k,s,a,null)}return;default:if(Lo(e)){for(_ in a)a.hasOwnProperty(_)&&(s=a[_],s!==void 0&&Sc(t,e,_,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&Ht(t,e,b,s,a,null))}function Zx(t,e,a,s){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,u=null,m=null,b=null,w=null,k=null,_=null;for(z in a){var G=a[z];if(a.hasOwnProperty(z)&&G!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":w=G;default:s.hasOwnProperty(z)||Ht(t,e,z,null,s,G)}}for(var R in s){var z=s[R];if(G=a[R],s.hasOwnProperty(R)&&(z!=null||G!=null))switch(R){case"type":u=z;break;case"name":o=z;break;case"checked":k=z;break;case"defaultChecked":_=z;break;case"value":m=z;break;case"defaultValue":b=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(r(137,e));break;default:z!==G&&Ht(t,e,R,z,s,G)}}Oo(t,m,b,w,k,_,u,o);return;case"select":z=m=b=R=null;for(u in a)if(w=a[u],a.hasOwnProperty(u)&&w!=null)switch(u){case"value":break;case"multiple":z=w;default:s.hasOwnProperty(u)||Ht(t,e,u,null,s,w)}for(o in s)if(u=s[o],w=a[o],s.hasOwnProperty(o)&&(u!=null||w!=null))switch(o){case"value":R=u;break;case"defaultValue":b=u;break;case"multiple":m=u;default:u!==w&&Ht(t,e,o,u,s,w)}e=b,a=m,s=z,R!=null?Ai(t,!!a,R,!1):!!s!=!!a&&(e!=null?Ai(t,!!a,e,!0):Ai(t,!!a,a?[]:"",!1));return;case"textarea":z=R=null;for(b in a)if(o=a[b],a.hasOwnProperty(b)&&o!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ht(t,e,b,null,s,o)}for(m in s)if(o=s[m],u=a[m],s.hasOwnProperty(m)&&(o!=null||u!=null))switch(m){case"value":R=o;break;case"defaultValue":z=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:o!==u&&Ht(t,e,m,o,s,u)}jd(t,R,z);return;case"option":for(var it in a)if(R=a[it],a.hasOwnProperty(it)&&R!=null&&!s.hasOwnProperty(it))switch(it){case"selected":t.selected=!1;break;default:Ht(t,e,it,null,s,R)}for(w in s)if(R=s[w],z=a[w],s.hasOwnProperty(w)&&R!==z&&(R!=null||z!=null))switch(w){case"selected":t.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:Ht(t,e,w,R,s,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var yt in a)R=a[yt],a.hasOwnProperty(yt)&&R!=null&&!s.hasOwnProperty(yt)&&Ht(t,e,yt,null,s,R);for(k in s)if(R=s[k],z=a[k],s.hasOwnProperty(k)&&R!==z&&(R!=null||z!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,e));break;default:Ht(t,e,k,R,s,z)}return;default:if(Lo(e)){for(var Gt in a)R=a[Gt],a.hasOwnProperty(Gt)&&R!==void 0&&!s.hasOwnProperty(Gt)&&Sc(t,e,Gt,void 0,s,R);for(_ in s)R=s[_],z=a[_],!s.hasOwnProperty(_)||R===z||R===void 0&&z===void 0||Sc(t,e,_,R,s,z);return}}for(var C in a)R=a[C],a.hasOwnProperty(C)&&R!=null&&!s.hasOwnProperty(C)&&Ht(t,e,C,null,s,R);for(G in s)R=s[G],z=a[G],!s.hasOwnProperty(G)||R===z||R==null&&z==null||Ht(t,e,G,R,s,z)}function kp(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Px(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var o=a[s],u=o.transferSize,m=o.initiatorType,b=o.duration;if(u&&b&&kp(m)){for(m=0,b=o.responseEnd,s+=1;s<a.length;s++){var w=a[s],k=w.startTime;if(k>b)break;var _=w.transferSize,G=w.initiatorType;_&&kp(G)&&(w=w.responseEnd,m+=_*(w<b?1:(b-k)/(w-k)))}if(--s,e+=8*(u+m)/(o.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var wc=null,Tc=null;function Dr(t){return t.nodeType===9?t:t.ownerDocument}function Rp(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Op(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ac(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ec=null;function Fx(){var t=window.event;return t&&t.type==="popstate"?t===Ec?!1:(Ec=t,!0):(Ec=null,!1)}var zp=typeof setTimeout=="function"?setTimeout:void 0,Jx=typeof clearTimeout=="function"?clearTimeout:void 0,Lp=typeof Promise=="function"?Promise:void 0,$x=typeof queueMicrotask=="function"?queueMicrotask:typeof Lp<"u"?function(t){return Lp.resolve(null).then(t).catch(Wx)}:zp;function Wx(t){setTimeout(function(){throw t})}function Ta(t){return t==="head"}function Vp(t,e){var a=e,s=0;do{var o=a.nextSibling;if(t.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(o),ns(e);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")el(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,el(a);for(var u=a.firstChild;u;){var m=u.nextSibling,b=u.nodeName;u[Sn]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=m}}else a==="body"&&el(t.ownerDocument.body);a=o}while(a);ns(e)}function _p(t,e){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Cc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Cc(a),ia(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Ix(t,e,a,s){for(;t.nodeType===1;){var o=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Sn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==o.rel||t.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||t.getAttribute("title")!==(o.title==null?null:o.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(o.src==null?null:o.src)||t.getAttribute("type")!==(o.type==null?null:o.type)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=o.name==null?null:""+o.name;if(o.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=sn(t.nextSibling),t===null)break}return null}function t1(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=sn(t.nextSibling),t===null))return null;return t}function Bp(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=sn(t.nextSibling),t===null))return null;return t}function jc(t){return t.data==="$?"||t.data==="$~"}function Mc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function e1(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var s=function(){e(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function sn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Nc=null;function Up(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return sn(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Hp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function Gp(t,e,a){switch(e=Dr(a),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function el(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ia(t)}var ln=new Map,qp=new Set;function kr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ea=F.d;F.d={f:n1,r:a1,D:i1,C:s1,L:l1,m:r1,X:u1,S:o1,M:c1};function n1(){var t=ea.f(),e=wr();return t||e}function a1(t){var e=_n(t);e!==null&&e.tag===5&&e.type==="form"?sm(e):ea.r(t)}var Ii=typeof document>"u"?null:document;function Yp(t,e,a){var s=Ii;if(s&&typeof e=="string"&&e){var o=$e(e);o='link[rel="'+t+'"][href="'+o+'"]',typeof a=="string"&&(o+='[crossorigin="'+a+'"]'),qp.has(o)||(qp.add(o),t={rel:t,crossOrigin:a,href:e},s.querySelector(o)===null&&(e=s.createElement("link"),ve(e,"link",t),fe(e),s.head.appendChild(e)))}}function i1(t){ea.D(t),Yp("dns-prefetch",t,null)}function s1(t,e){ea.C(t,e),Yp("preconnect",t,e)}function l1(t,e,a){ea.L(t,e,a);var s=Ii;if(s&&t&&e){var o='link[rel="preload"][as="'+$e(e)+'"]';e==="image"&&a&&a.imageSrcSet?(o+='[imagesrcset="'+$e(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(o+='[imagesizes="'+$e(a.imageSizes)+'"]')):o+='[href="'+$e(t)+'"]';var u=o;switch(e){case"style":u=ts(t);break;case"script":u=es(t)}ln.has(u)||(t=x({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),ln.set(u,t),s.querySelector(o)!==null||e==="style"&&s.querySelector(nl(u))||e==="script"&&s.querySelector(al(u))||(e=s.createElement("link"),ve(e,"link",t),fe(e),s.head.appendChild(e)))}}function r1(t,e){ea.m(t,e);var a=Ii;if(a&&t){var s=e&&typeof e.as=="string"?e.as:"script",o='link[rel="modulepreload"][as="'+$e(s)+'"][href="'+$e(t)+'"]',u=o;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=es(t)}if(!ln.has(u)&&(t=x({rel:"modulepreload",href:t},e),ln.set(u,t),a.querySelector(o)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(al(u)))return}s=a.createElement("link"),ve(s,"link",t),fe(s),a.head.appendChild(s)}}}function o1(t,e,a){ea.S(t,e,a);var s=Ii;if(s&&t){var o=sa(s).hoistableStyles,u=ts(t);e=e||"default";var m=o.get(u);if(!m){var b={loading:0,preload:null};if(m=s.querySelector(nl(u)))b.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":e},a),(a=ln.get(u))&&Dc(t,a);var w=m=s.createElement("link");fe(w),ve(w,"link",t),w._p=new Promise(function(k,_){w.onload=k,w.onerror=_}),w.addEventListener("load",function(){b.loading|=1}),w.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Rr(m,e,s)}m={type:"stylesheet",instance:m,count:1,state:b},o.set(u,m)}}}function u1(t,e){ea.X(t,e);var a=Ii;if(a&&t){var s=sa(a).hoistableScripts,o=es(t),u=s.get(o);u||(u=a.querySelector(al(o)),u||(t=x({src:t,async:!0},e),(e=ln.get(o))&&kc(t,e),u=a.createElement("script"),fe(u),ve(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(o,u))}}function c1(t,e){ea.M(t,e);var a=Ii;if(a&&t){var s=sa(a).hoistableScripts,o=es(t),u=s.get(o);u||(u=a.querySelector(al(o)),u||(t=x({src:t,async:!0,type:"module"},e),(e=ln.get(o))&&kc(t,e),u=a.createElement("script"),fe(u),ve(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(o,u))}}function Xp(t,e,a,s){var o=(o=ut.current)?kr(o):null;if(!o)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=ts(a.href),a=sa(o).hoistableStyles,s=a.get(e),s||(s={type:"style",instance:null,count:0,state:null},a.set(e,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ts(a.href);var u=sa(o).hoistableStyles,m=u.get(t);if(m||(o=o.ownerDocument||o,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,m),(u=o.querySelector(nl(t)))&&!u._p&&(m.instance=u,m.state.loading=5),ln.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ln.set(t,a),u||f1(o,t,a,m.state))),e&&s===null)throw Error(r(528,""));return m}if(e&&s!==null)throw Error(r(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=es(a),a=sa(o).hoistableScripts,s=a.get(e),s||(s={type:"script",instance:null,count:0,state:null},a.set(e,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ts(t){return'href="'+$e(t)+'"'}function nl(t){return'link[rel="stylesheet"]['+t+"]"}function Kp(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function f1(t,e,a,s){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?s.loading=1:(e=t.createElement("link"),s.preload=e,e.addEventListener("load",function(){return s.loading|=1}),e.addEventListener("error",function(){return s.loading|=2}),ve(e,"link",a),fe(e),t.head.appendChild(e))}function es(t){return'[src="'+$e(t)+'"]'}function al(t){return"script[async]"+t}function Qp(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var s=t.querySelector('style[data-href~="'+$e(a.href)+'"]');if(s)return e.instance=s,fe(s),s;var o=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),fe(s),ve(s,"style",o),Rr(s,a.precedence,t),e.instance=s;case"stylesheet":o=ts(a.href);var u=t.querySelector(nl(o));if(u)return e.state.loading|=4,e.instance=u,fe(u),u;s=Kp(a),(o=ln.get(o))&&Dc(s,o),u=(t.ownerDocument||t).createElement("link"),fe(u);var m=u;return m._p=new Promise(function(b,w){m.onload=b,m.onerror=w}),ve(u,"link",s),e.state.loading|=4,Rr(u,a.precedence,t),e.instance=u;case"script":return u=es(a.src),(o=t.querySelector(al(u)))?(e.instance=o,fe(o),o):(s=a,(o=ln.get(u))&&(s=x({},a),kc(s,o)),t=t.ownerDocument||t,o=t.createElement("script"),fe(o),ve(o,"link",s),t.head.appendChild(o),e.instance=o);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(s=e.instance,e.state.loading|=4,Rr(s,a.precedence,t));return e.instance}function Rr(t,e,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=s.length?s[s.length-1]:null,u=o,m=0;m<s.length;m++){var b=s[m];if(b.dataset.precedence===e)u=b;else if(u!==o)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Dc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function kc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Or=null;function Zp(t,e,a){if(Or===null){var s=new Map,o=Or=new Map;o.set(a,s)}else o=Or,s=o.get(a),s||(s=new Map,o.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),o=0;o<a.length;o++){var u=a[o];if(!(u[Sn]||u[ee]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(e)||"";m=t+m;var b=s.get(m);b?b.push(u):s.set(m,[u])}}return s}function Pp(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function d1(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Fp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function h1(t,e,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var o=ts(s.href),u=e.querySelector(nl(o));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=zr.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=u,fe(u);return}u=e.ownerDocument||e,s=Kp(s),(o=ln.get(o))&&Dc(s,o),u=u.createElement("link"),fe(u);var m=u;m._p=new Promise(function(b,w){m.onload=b,m.onerror=w}),ve(u,"link",s),a.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=zr.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Rc=0;function m1(t,e){return t.stylesheets&&t.count===0&&Vr(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Vr(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&Rc===0&&(Rc=62500*Px());var o=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Vr(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Rc?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(o)}}:null}function zr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vr(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Lr=null;function Vr(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Lr=new Map,e.forEach(p1,t),Lr=null,zr.call(t))}function p1(t,e){if(!(e.state.loading&4)){var a=Lr.get(t);if(a)var s=a.get(null);else{a=new Map,Lr.set(t,a);for(var o=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<o.length;u++){var m=o[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),s=m)}s&&a.set(null,s)}o=e.instance,m=o.getAttribute("data-precedence"),u=a.get(m)||s,u===s&&a.set(null,o),a.set(m,o),this.count++,s=zr.bind(this),o.addEventListener("load",s),o.addEventListener("error",s),u?u.parentNode.insertBefore(o,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(o,t.firstChild)),e.state.loading|=4}}var il={$$typeof:Y,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function g1(t,e,a,s,o,u,m,b,w){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ft(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ft(0),this.hiddenUpdates=ft(null),this.identifierPrefix=s,this.onUncaughtError=o,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Jp(t,e,a,s,o,u,m,b,w,k,_,G){return t=new g1(t,e,a,m,w,k,_,G,b),e=1,u===!0&&(e|=24),u=Ge(3,null,null,e),t.current=u,u.stateNode=t,e=fu(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:s,isDehydrated:a,cache:e},pu(u),t}function $p(t){return t?(t=Ri,t):Ri}function Wp(t,e,a,s,o,u){o=$p(o),s.context===null?s.context=o:s.pendingContext=o,s=da(e),s.payload={element:a},u=u===void 0?null:u,u!==null&&(s.callback=u),a=ha(t,s,e),a!==null&&(_e(a,t,e),Vs(a,t,e))}function Ip(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Oc(t,e){Ip(t,e),(t=t.alternate)&&Ip(t,e)}function t0(t){if(t.tag===13||t.tag===31){var e=Za(t,67108864);e!==null&&_e(e,t,67108864),Oc(t,67108864)}}function e0(t){if(t.tag===13||t.tag===31){var e=Qe();e=bn(e);var a=Za(t,e);a!==null&&_e(a,t,e),Oc(t,e)}}var _r=!0;function y1(t,e,a,s){var o=O.T;O.T=null;var u=F.p;try{F.p=2,zc(t,e,a,s)}finally{F.p=u,O.T=o}}function v1(t,e,a,s){var o=O.T;O.T=null;var u=F.p;try{F.p=8,zc(t,e,a,s)}finally{F.p=u,O.T=o}}function zc(t,e,a,s){if(_r){var o=Lc(s);if(o===null)xc(t,e,s,Br,a),a0(t,s);else if(x1(o,t,e,a,s))s.stopPropagation();else if(a0(t,s),e&4&&-1<b1.indexOf(t)){for(;o!==null;){var u=_n(o);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=On(u.pendingLanes);if(m!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var w=1<<31-Ee(m);b.entanglements[1]|=w,m&=~w}En(u),(Vt&6)===0&&(xr=we()+500,Ws(0))}}break;case 31:case 13:b=Za(u,2),b!==null&&_e(b,u,2),wr(),Oc(u,2)}if(u=Lc(s),u===null&&xc(t,e,s,Br,a),u===o)break;o=u}o!==null&&s.stopPropagation()}else xc(t,e,s,null,a)}}function Lc(t){return t=_o(t),Vc(t)}var Br=null;function Vc(t){if(Br=null,t=Vn(t),t!==null){var e=f(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=d(e),t!==null)return t;t=null}else if(a===31){if(t=h(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Br=t,null}function n0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nl()){case Dl:return 2;case Ue:return 8;case vi:case Mo:return 32;case bs:return 268435456;default:return 32}default:return 32}}var _c=!1,Aa=null,Ea=null,Ca=null,sl=new Map,ll=new Map,ja=[],b1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function a0(t,e){switch(t){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ea=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":sl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ll.delete(e.pointerId)}}function rl(t,e,a,s,o,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:a,eventSystemFlags:s,nativeEvent:u,targetContainers:[o]},e!==null&&(e=_n(e),e!==null&&t0(e)),t):(t.eventSystemFlags|=s,e=t.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),t)}function x1(t,e,a,s,o){switch(e){case"focusin":return Aa=rl(Aa,t,e,a,s,o),!0;case"dragenter":return Ea=rl(Ea,t,e,a,s,o),!0;case"mouseover":return Ca=rl(Ca,t,e,a,s,o),!0;case"pointerover":var u=o.pointerId;return sl.set(u,rl(sl.get(u)||null,t,e,a,s,o)),!0;case"gotpointercapture":return u=o.pointerId,ll.set(u,rl(ll.get(u)||null,t,e,a,s,o)),!0}return!1}function i0(t){var e=Vn(t.target);if(e!==null){var a=f(e);if(a!==null){if(e=a.tag,e===13){if(e=d(a),e!==null){t.blockedOn=e,kl(t.priority,function(){e0(a)});return}}else if(e===31){if(e=h(a),e!==null){t.blockedOn=e,kl(t.priority,function(){e0(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ur(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Lc(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Vo=s,a.target.dispatchEvent(s),Vo=null}else return e=_n(a),e!==null&&t0(e),t.blockedOn=a,!1;e.shift()}return!0}function s0(t,e,a){Ur(t)&&a.delete(e)}function S1(){_c=!1,Aa!==null&&Ur(Aa)&&(Aa=null),Ea!==null&&Ur(Ea)&&(Ea=null),Ca!==null&&Ur(Ca)&&(Ca=null),sl.forEach(s0),ll.forEach(s0)}function Hr(t,e){t.blockedOn===e&&(t.blockedOn=null,_c||(_c=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,S1)))}var Gr=null;function l0(t){Gr!==t&&(Gr=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Gr===t&&(Gr=null);for(var e=0;e<t.length;e+=3){var a=t[e],s=t[e+1],o=t[e+2];if(typeof s!="function"){if(Vc(s||a)===null)continue;break}var u=_n(a);u!==null&&(t.splice(e,3),e-=3,Lu(u,{pending:!0,data:o,method:a.method,action:s},s,o))}}))}function ns(t){function e(w){return Hr(w,t)}Aa!==null&&Hr(Aa,t),Ea!==null&&Hr(Ea,t),Ca!==null&&Hr(Ca,t),sl.forEach(e),ll.forEach(e);for(var a=0;a<ja.length;a++){var s=ja[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<ja.length&&(a=ja[0],a.blockedOn===null);)i0(a),a.blockedOn===null&&ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var o=a[s],u=a[s+1],m=o[ce]||null;if(typeof u=="function")m||l0(a);else if(m){var b=null;if(u&&u.hasAttribute("formAction")){if(o=u,m=u[ce]||null)b=m.formAction;else if(Vc(o)!==null)continue}else b=m.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),l0(a)}}}function r0(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(m){return o=m})},focusReset:"manual",scroll:"manual"})}function e(){o!==null&&(o(),o=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,o=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),o!==null&&(o(),o=null)}}}function Bc(t){this._internalRoot=t}qr.prototype.render=Bc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var a=e.current,s=Qe();Wp(a,s,t,e,null,null)},qr.prototype.unmount=Bc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wp(t.current,2,null,t,null,null),wr(),e[cn]=null}};function qr(t){this._internalRoot=t}qr.prototype.unstable_scheduleHydration=function(t){if(t){var e=xn();t={blockedOn:null,target:t,priority:e};for(var a=0;a<ja.length&&e!==0&&e<ja[a].priority;a++);ja.splice(a,0,t),a===0&&i0(t)}};var o0=i.version;if(o0!=="19.2.4")throw Error(r(527,o0,"19.2.4"));F.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=y(e),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var w1={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yr.isDisabled&&Yr.supportsFiber)try{aa=Yr.inject(w1),Ae=Yr}catch{}}return ul.createRoot=function(t,e){if(!c(t))throw Error(r(299));var a=!1,s="",o=pm,u=gm,m=ym;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(s=e.identifierPrefix),e.onUncaughtError!==void 0&&(o=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(m=e.onRecoverableError)),e=Jp(t,1,!1,null,null,a,s,null,o,u,m,r0),t[cn]=e.current,bc(t),new Bc(e)},ul.hydrateRoot=function(t,e,a){if(!c(t))throw Error(r(299));var s=!1,o="",u=pm,m=gm,b=ym,w=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(w=a.formState)),e=Jp(t,1,!0,e,a??null,s,o,w,u,m,b,r0),e.context=$p(null),a=e.current,s=Qe(),s=bn(s),o=da(s),o.callback=null,ha(a,o,s),a=s,e.current.lanes=a,et(e,a),En(e),t[cn]=e.current,bc(t),new qr(e)},ul.version="19.2.4",ul}var v0;function O1(){if(v0)return Gc.exports;v0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Gc.exports=R1(),Gc.exports}var z1=O1();const Hf=H.createContext({});function Gf(n){const i=H.useRef(null);return i.current===null&&(i.current=n()),i.current}const L1=typeof window<"u",ay=L1?H.useLayoutEffect:H.useEffect,So=H.createContext(null);function qf(n,i){n.indexOf(i)===-1&&n.push(i)}function ro(n,i){const l=n.indexOf(i);l>-1&&n.splice(l,1)}const kn=(n,i,l)=>l>i?i:l<n?n:l;let Yf=()=>{};const La={},iy=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function sy(n){return typeof n=="object"&&n!==null}const ly=n=>/^0[^.\s]+$/u.test(n);function ry(n){let i;return()=>(i===void 0&&(i=n()),i)}const on=n=>n,V1=(n,i)=>l=>i(n(l)),Tl=(...n)=>n.reduce(V1),vl=(n,i,l)=>{const r=i-n;return r===0?1:(l-n)/r};class Xf{constructor(){this.subscriptions=[]}add(i){return qf(this.subscriptions,i),()=>ro(this.subscriptions,i)}notify(i,l,r){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,l,r);else for(let f=0;f<c;f++){const d=this.subscriptions[f];d&&d(i,l,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Pe=n=>n*1e3,rn=n=>n/1e3;function oy(n,i){return i?n*(1e3/i):0}const uy=(n,i,l)=>(((1-3*l+3*i)*n+(3*l-6*i))*n+3*i)*n,_1=1e-7,B1=12;function U1(n,i,l,r,c){let f,d,h=0;do d=i+(l-i)/2,f=uy(d,r,c)-n,f>0?l=d:i=d;while(Math.abs(f)>_1&&++h<B1);return d}function Al(n,i,l,r){if(n===i&&l===r)return on;const c=f=>U1(f,0,1,n,l);return f=>f===0||f===1?f:uy(c(f),i,r)}const cy=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,fy=n=>i=>1-n(1-i),dy=Al(.33,1.53,.69,.99),Kf=fy(dy),hy=cy(Kf),my=n=>n>=1?1:(n*=2)<1?.5*Kf(n):.5*(2-Math.pow(2,-10*(n-1))),Qf=n=>1-Math.sin(Math.acos(n)),py=fy(Qf),gy=cy(Qf),H1=Al(.42,0,1,1),G1=Al(0,0,.58,1),yy=Al(.42,0,.58,1),q1=n=>Array.isArray(n)&&typeof n[0]!="number",vy=n=>Array.isArray(n)&&typeof n[0]=="number",Y1={linear:on,easeIn:H1,easeInOut:yy,easeOut:G1,circIn:Qf,circInOut:gy,circOut:py,backIn:Kf,backInOut:hy,backOut:dy,anticipate:my},X1=n=>typeof n=="string",b0=n=>{if(vy(n)){Yf(n.length===4);const[i,l,r,c]=n;return Al(i,l,r,c)}else if(X1(n))return Y1[n];return n},Xr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function K1(n,i){let l=new Set,r=new Set,c=!1,f=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function g(v){d.has(v)&&(y.schedule(v),n()),v(h)}const y={schedule:(v,x=!1,S=!1)=>{const N=S&&c?l:r;return x&&d.add(v),N.add(v),v},cancel:v=>{r.delete(v),d.delete(v)},process:v=>{if(h=v,c){f=!0;return}c=!0;const x=l;l=r,r=x,l.forEach(g),l.clear(),c=!1,f&&(f=!1,y.process(v))}};return y}const Q1=40;function by(n,i){let l=!1,r=!0;const c={delta:0,timestamp:0,isProcessing:!1},f=()=>l=!0,d=Xr.reduce((Y,X)=>(Y[X]=K1(f),Y),{}),{setup:h,read:g,resolveKeyframes:y,preUpdate:v,update:x,preRender:S,render:E,postRender:N}=d,L=()=>{const Y=La.useManualTiming,X=Y?c.timestamp:performance.now();l=!1,Y||(c.delta=r?1e3/60:Math.max(Math.min(X-c.timestamp,Q1),1)),c.timestamp=X,c.isProcessing=!0,h.process(c),g.process(c),y.process(c),v.process(c),x.process(c),S.process(c),E.process(c),N.process(c),c.isProcessing=!1,l&&i&&(r=!1,n(L))},V=()=>{l=!0,r=!0,c.isProcessing||n(L)};return{schedule:Xr.reduce((Y,X)=>{const $=d[X];return Y[X]=(dt,I=!1,M=!1)=>(l||V(),$.schedule(dt,I,M)),Y},{}),cancel:Y=>{for(let X=0;X<Xr.length;X++)d[Xr[X]].cancel(Y)},state:c,steps:d}}const{schedule:Yt,cancel:Va,state:be,steps:Kc}=by(typeof requestAnimationFrame<"u"?requestAnimationFrame:on,!0);let Ir;function Z1(){Ir=void 0}const je={now:()=>(Ir===void 0&&je.set(be.isProcessing||La.useManualTiming?be.timestamp:performance.now()),Ir),set:n=>{Ir=n,queueMicrotask(Z1)}},xy=n=>i=>typeof i=="string"&&i.startsWith(n),Sy=xy("--"),P1=xy("var(--"),Zf=n=>P1(n)?F1.test(n.split("/*")[0].trim()):!1,F1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function x0(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const ds={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},bl={...ds,transform:n=>kn(0,1,n)},Kr={...ds,default:1},ml=n=>Math.round(n*1e5)/1e5,Pf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function J1(n){return n==null}const $1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ff=(n,i)=>l=>!!(typeof l=="string"&&$1.test(l)&&l.startsWith(n)||i&&!J1(l)&&Object.prototype.hasOwnProperty.call(l,i)),wy=(n,i,l)=>r=>{if(typeof r!="string")return r;const[c,f,d,h]=r.match(Pf);return{[n]:parseFloat(c),[i]:parseFloat(f),[l]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},W1=n=>kn(0,255,n),Qc={...ds,transform:n=>Math.round(W1(n))},ci={test:Ff("rgb","red"),parse:wy("red","green","blue"),transform:({red:n,green:i,blue:l,alpha:r=1})=>"rgba("+Qc.transform(n)+", "+Qc.transform(i)+", "+Qc.transform(l)+", "+ml(bl.transform(r))+")"};function I1(n){let i="",l="",r="",c="";return n.length>5?(i=n.substring(1,3),l=n.substring(3,5),r=n.substring(5,7),c=n.substring(7,9)):(i=n.substring(1,2),l=n.substring(2,3),r=n.substring(3,4),c=n.substring(4,5),i+=i,l+=l,r+=r,c+=c),{red:parseInt(i,16),green:parseInt(l,16),blue:parseInt(r,16),alpha:c?parseInt(c,16)/255:1}}const ff={test:Ff("#"),parse:I1,transform:ci.transform},El=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),ka=El("deg"),Dn=El("%"),lt=El("px"),tS=El("vh"),eS=El("vw"),S0={...Dn,parse:n=>Dn.parse(n)/100,transform:n=>Dn.transform(n*100)},ls={test:Ff("hsl","hue"),parse:wy("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:l,alpha:r=1})=>"hsla("+Math.round(n)+", "+Dn.transform(ml(i))+", "+Dn.transform(ml(l))+", "+ml(bl.transform(r))+")"},le={test:n=>ci.test(n)||ff.test(n)||ls.test(n),parse:n=>ci.test(n)?ci.parse(n):ls.test(n)?ls.parse(n):ff.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?ci.transform(n):ls.transform(n),getAnimatableNone:n=>{const i=le.parse(n);return i.alpha=0,le.transform(i)}},nS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function aS(n){var i,l;return isNaN(n)&&typeof n=="string"&&(((i=n.match(Pf))==null?void 0:i.length)||0)+(((l=n.match(nS))==null?void 0:l.length)||0)>0}const Ty="number",Ay="color",iS="var",sS="var(",w0="${}",lS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function us(n){const i=n.toString(),l=[],r={color:[],number:[],var:[]},c=[];let f=0;const h=i.replace(lS,g=>(le.test(g)?(r.color.push(f),c.push(Ay),l.push(le.parse(g))):g.startsWith(sS)?(r.var.push(f),c.push(iS),l.push(g)):(r.number.push(f),c.push(Ty),l.push(parseFloat(g))),++f,w0)).split(w0);return{values:l,split:h,indexes:r,types:c}}function rS(n){return us(n).values}function Ey({split:n,types:i}){const l=n.length;return r=>{let c="";for(let f=0;f<l;f++)if(c+=n[f],r[f]!==void 0){const d=i[f];d===Ty?c+=ml(r[f]):d===Ay?c+=le.transform(r[f]):c+=r[f]}return c}}function oS(n){return Ey(us(n))}const uS=n=>typeof n=="number"?0:le.test(n)?le.getAnimatableNone(n):n,cS=(n,i)=>typeof n=="number"?i!=null&&i.trim().endsWith("/")?n:0:uS(n);function fS(n){const i=us(n);return Ey(i)(i.values.map((r,c)=>cS(r,i.split[c])))}const yn={test:aS,parse:rS,createTransformer:oS,getAnimatableNone:fS};function Zc(n,i,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?n+(i-n)*6*l:l<1/2?i:l<2/3?n+(i-n)*(2/3-l)*6:n}function dS({hue:n,saturation:i,lightness:l,alpha:r}){n/=360,i/=100,l/=100;let c=0,f=0,d=0;if(!i)c=f=d=l;else{const h=l<.5?l*(1+i):l+i-l*i,g=2*l-h;c=Zc(g,h,n+1/3),f=Zc(g,h,n),d=Zc(g,h,n-1/3)}return{red:Math.round(c*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:r}}function oo(n,i){return l=>l>0?i:n}const Zt=(n,i,l)=>n+(i-n)*l,Pc=(n,i,l)=>{const r=n*n,c=l*(i*i-r)+r;return c<0?0:Math.sqrt(c)},hS=[ff,ci,ls],mS=n=>hS.find(i=>i.test(n));function T0(n){const i=mS(n);if(!i)return!1;let l=i.parse(n);return i===ls&&(l=dS(l)),l}const A0=(n,i)=>{const l=T0(n),r=T0(i);if(!l||!r)return oo(n,i);const c={...l};return f=>(c.red=Pc(l.red,r.red,f),c.green=Pc(l.green,r.green,f),c.blue=Pc(l.blue,r.blue,f),c.alpha=Zt(l.alpha,r.alpha,f),ci.transform(c))},df=new Set(["none","hidden"]);function pS(n,i){return df.has(n)?l=>l<=0?n:i:l=>l>=1?i:n}function gS(n,i){return l=>Zt(n,i,l)}function Jf(n){return typeof n=="number"?gS:typeof n=="string"?Zf(n)?oo:le.test(n)?A0:bS:Array.isArray(n)?Cy:typeof n=="object"?le.test(n)?A0:yS:oo}function Cy(n,i){const l=[...n],r=l.length,c=n.map((f,d)=>Jf(f)(f,i[d]));return f=>{for(let d=0;d<r;d++)l[d]=c[d](f);return l}}function yS(n,i){const l={...n,...i},r={};for(const c in l)n[c]!==void 0&&i[c]!==void 0&&(r[c]=Jf(n[c])(n[c],i[c]));return c=>{for(const f in r)l[f]=r[f](c);return l}}function vS(n,i){const l=[],r={color:0,var:0,number:0};for(let c=0;c<i.values.length;c++){const f=i.types[c],d=n.indexes[f][r[f]],h=n.values[d]??0;l[c]=h,r[f]++}return l}const bS=(n,i)=>{const l=yn.createTransformer(i),r=us(n),c=us(i);return r.indexes.var.length===c.indexes.var.length&&r.indexes.color.length===c.indexes.color.length&&r.indexes.number.length>=c.indexes.number.length?df.has(n)&&!c.values.length||df.has(i)&&!r.values.length?pS(n,i):Tl(Cy(vS(r,c),c.values),l):oo(n,i)};function jy(n,i,l){return typeof n=="number"&&typeof i=="number"&&typeof l=="number"?Zt(n,i,l):Jf(n)(n,i)}const xS=n=>{const i=({timestamp:l})=>n(l);return{start:(l=!0)=>Yt.update(i,l),stop:()=>Va(i),now:()=>be.isProcessing?be.timestamp:je.now()}},My=(n,i,l=10)=>{let r="";const c=Math.max(Math.round(i/l),2);for(let f=0;f<c;f++)r+=Math.round(n(f/(c-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},uo=2e4;function $f(n){let i=0;const l=50;let r=n.next(i);for(;!r.done&&i<uo;)i+=l,r=n.next(i);return i>=uo?1/0:i}function SS(n,i=100,l){const r=l({...n,keyframes:[0,i]}),c=Math.min($f(r),uo);return{type:"keyframes",ease:f=>r.next(c*f).value/i,duration:rn(c)}}const $t={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function hf(n,i){return n*Math.sqrt(1-i*i)}const wS=12;function TS(n,i,l){let r=l;for(let c=1;c<wS;c++)r=r-n(r)/i(r);return r}const Fc=.001;function AS({duration:n=$t.duration,bounce:i=$t.bounce,velocity:l=$t.velocity,mass:r=$t.mass}){let c,f,d=1-i;d=kn($t.minDamping,$t.maxDamping,d),n=kn($t.minDuration,$t.maxDuration,rn(n)),d<1?(c=y=>{const v=y*d,x=v*n,S=v-l,E=hf(y,d),N=Math.exp(-x);return Fc-S/E*N},f=y=>{const x=y*d*n,S=x*l+l,E=Math.pow(d,2)*Math.pow(y,2)*n,N=Math.exp(-x),L=hf(Math.pow(y,2),d);return(-c(y)+Fc>0?-1:1)*((S-E)*N)/L}):(c=y=>{const v=Math.exp(-y*n),x=(y-l)*n+1;return-Fc+v*x},f=y=>{const v=Math.exp(-y*n),x=(l-y)*(n*n);return v*x});const h=5/n,g=TS(c,f,h);if(n=Pe(n),isNaN(g))return{stiffness:$t.stiffness,damping:$t.damping,duration:n};{const y=Math.pow(g,2)*r;return{stiffness:y,damping:d*2*Math.sqrt(r*y),duration:n}}}const ES=["duration","bounce"],CS=["stiffness","damping","mass"];function E0(n,i){return i.some(l=>n[l]!==void 0)}function jS(n){let i={velocity:$t.velocity,stiffness:$t.stiffness,damping:$t.damping,mass:$t.mass,isResolvedFromDuration:!1,...n};if(!E0(n,CS)&&E0(n,ES))if(i.velocity=0,n.visualDuration){const l=n.visualDuration,r=2*Math.PI/(l*1.2),c=r*r,f=2*kn(.05,1,1-(n.bounce||0))*Math.sqrt(c);i={...i,mass:$t.mass,stiffness:c,damping:f}}else{const l=AS({...n,velocity:0});i={...i,...l,mass:$t.mass},i.isResolvedFromDuration=!0}return i}function co(n=$t.visualDuration,i=$t.bounce){const l=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:r,restDelta:c}=l;const f=l.keyframes[0],d=l.keyframes[l.keyframes.length-1],h={done:!1,value:f},{stiffness:g,damping:y,mass:v,duration:x,velocity:S,isResolvedFromDuration:E}=jS({...l,velocity:-rn(l.velocity||0)}),N=S||0,L=y/(2*Math.sqrt(g*v)),V=d-f,q=rn(Math.sqrt(g/v)),K=Math.abs(V)<5;r||(r=K?$t.restSpeed.granular:$t.restSpeed.default),c||(c=K?$t.restDelta.granular:$t.restDelta.default);let Y,X,$,dt,I,M;if(L<1)$=hf(q,L),dt=(N+L*q*V)/$,Y=Q=>{const mt=Math.exp(-L*q*Q);return d-mt*(dt*Math.sin($*Q)+V*Math.cos($*Q))},I=L*q*dt+V*$,M=L*q*V-dt*$,X=Q=>Math.exp(-L*q*Q)*(I*Math.sin($*Q)+M*Math.cos($*Q));else if(L===1){Y=mt=>d-Math.exp(-q*mt)*(V+(N+q*V)*mt);const Q=N+q*V;X=mt=>Math.exp(-q*mt)*(q*Q*mt-N)}else{const Q=q*Math.sqrt(L*L-1);Y=Et=>{const St=Math.exp(-L*q*Et),O=Math.min(Q*Et,300);return d-St*((N+L*q*V)*Math.sinh(O)+Q*V*Math.cosh(O))/Q};const mt=(N+L*q*V)/Q,gt=L*q*mt-V*Q,Dt=L*q*V-mt*Q;X=Et=>{const St=Math.exp(-L*q*Et),O=Math.min(Q*Et,300);return St*(gt*Math.sinh(O)+Dt*Math.cosh(O))}}const P={calculatedDuration:E&&x||null,velocity:Q=>Pe(X(Q)),next:Q=>{if(!E&&L<1){const gt=Math.exp(-L*q*Q),Dt=Math.sin($*Q),Et=Math.cos($*Q),St=d-gt*(dt*Dt+V*Et),O=Pe(gt*(I*Dt+M*Et));return h.done=Math.abs(O)<=r&&Math.abs(d-St)<=c,h.value=h.done?d:St,h}const mt=Y(Q);if(E)h.done=Q>=x;else{const gt=Pe(X(Q));h.done=Math.abs(gt)<=r&&Math.abs(d-mt)<=c}return h.value=h.done?d:mt,h},toString:()=>{const Q=Math.min($f(P),uo),mt=My(gt=>P.next(Q*gt).value,Q,30);return Q+"ms "+mt},toTransition:()=>{}};return P}co.applyToOptions=n=>{const i=SS(n,100,co);return n.ease=i.ease,n.duration=Pe(i.duration),n.type="keyframes",n};const MS=5;function Ny(n,i,l){const r=Math.max(i-MS,0);return oy(l-n(r),i-r)}function mf({keyframes:n,velocity:i=0,power:l=.8,timeConstant:r=325,bounceDamping:c=10,bounceStiffness:f=500,modifyTarget:d,min:h,max:g,restDelta:y=.5,restSpeed:v}){const x=n[0],S={done:!1,value:x},E=M=>h!==void 0&&M<h||g!==void 0&&M>g,N=M=>h===void 0?g:g===void 0||Math.abs(h-M)<Math.abs(g-M)?h:g;let L=l*i;const V=x+L,q=d===void 0?V:d(V);q!==V&&(L=q-x);const K=M=>-L*Math.exp(-M/r),Y=M=>q+K(M),X=M=>{const P=K(M),Q=Y(M);S.done=Math.abs(P)<=y,S.value=S.done?q:Q};let $,dt;const I=M=>{E(S.value)&&($=M,dt=co({keyframes:[S.value,N(S.value)],velocity:Ny(Y,M,S.value),damping:c,stiffness:f,restDelta:y,restSpeed:v}))};return I(0),{calculatedDuration:null,next:M=>{let P=!1;return!dt&&$===void 0&&(P=!0,X(M),I(M)),$!==void 0&&M>=$?dt.next(M-$):(!P&&X(M),S)}}}function NS(n,i,l){const r=[],c=l||La.mix||jy,f=n.length-1;for(let d=0;d<f;d++){let h=c(n[d],n[d+1]);if(i){const g=Array.isArray(i)?i[d]||on:i;h=Tl(g,h)}r.push(h)}return r}function DS(n,i,{clamp:l=!0,ease:r,mixer:c}={}){const f=n.length;if(Yf(f===i.length),f===1)return()=>i[0];if(f===2&&i[0]===i[1])return()=>i[1];const d=n[0]===n[1];n[0]>n[f-1]&&(n=[...n].reverse(),i=[...i].reverse());const h=NS(i,r,c),g=h.length,y=v=>{if(d&&v<n[0])return i[0];let x=0;if(g>1)for(;x<n.length-2&&!(v<n[x+1]);x++);const S=vl(n[x],n[x+1],v);return h[x](S)};return l?v=>y(kn(n[0],n[f-1],v)):y}function kS(n,i){const l=n[n.length-1];for(let r=1;r<=i;r++){const c=vl(0,i,r);n.push(Zt(l,1,c))}}function RS(n){const i=[0];return kS(i,n.length-1),i}function OS(n,i){return n.map(l=>l*i)}function zS(n,i){return n.map(()=>i||yy).splice(0,n.length-1)}function pl({duration:n=300,keyframes:i,times:l,ease:r="easeInOut"}){const c=q1(r)?r.map(b0):b0(r),f={done:!1,value:i[0]},d=OS(l&&l.length===i.length?l:RS(i),n),h=DS(d,i,{ease:Array.isArray(c)?c:zS(i,c)});return{calculatedDuration:n,next:g=>(f.value=h(g),f.done=g>=n,f)}}const LS=n=>n!==null;function wo(n,{repeat:i,repeatType:l="loop"},r,c=1){const f=n.filter(LS),h=c<0||i&&l!=="loop"&&i%2===1?0:f.length-1;return!h||r===void 0?f[h]:r}const VS={decay:mf,inertia:mf,tween:pl,keyframes:pl,spring:co};function Dy(n){typeof n.type=="string"&&(n.type=VS[n.type])}class Wf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,l){return this.finished.then(i,l)}}const _S=n=>n/100;class fo extends Wf{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,c;const{motionValue:l}=this.options;l&&l.updatedAt!==je.now()&&this.tick(je.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(r=this.options).onStop)==null||c.call(r))},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;Dy(i);const{type:l=pl,repeat:r=0,repeatDelay:c=0,repeatType:f,velocity:d=0}=i;let{keyframes:h}=i;const g=l||pl;g!==pl&&typeof h[0]!="number"&&(this.mixKeyframes=Tl(_S,jy(h[0],h[1])),h=[0,100]);const y=g({...i,keyframes:h});f==="mirror"&&(this.mirroredGenerator=g({...i,keyframes:[...h].reverse(),velocity:-d})),y.calculatedDuration===null&&(y.calculatedDuration=$f(y));const{calculatedDuration:v}=y;this.calculatedDuration=v,this.resolvedDuration=v+c,this.totalDuration=this.resolvedDuration*(r+1)-c,this.generator=y}updateTime(i){const l=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=l}tick(i,l=!1){const{generator:r,totalDuration:c,mixKeyframes:f,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:g}=this;if(this.startTime===null)return r.next(0);const{delay:y=0,keyframes:v,repeat:x,repeatType:S,repeatDelay:E,type:N,onUpdate:L,finalKeyframe:V}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-c/this.speed,this.startTime)),l?this.currentTime=i:this.updateTime(i);const q=this.currentTime-y*(this.playbackSpeed>=0?1:-1),K=this.playbackSpeed>=0?q<0:q>c;this.currentTime=Math.max(q,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let Y=this.currentTime,X=r;if(x){const M=Math.min(this.currentTime,c)/h;let P=Math.floor(M),Q=M%1;!Q&&M>=1&&(Q=1),Q===1&&P--,P=Math.min(P,x+1),!!(P%2)&&(S==="reverse"?(Q=1-Q,E&&(Q-=E/h)):S==="mirror"&&(X=d)),Y=kn(0,1,Q)*h}let $;K?(this.delayState.value=v[0],$=this.delayState):$=X.next(Y),f&&!K&&($.value=f($.value));let{done:dt}=$;!K&&g!==null&&(dt=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const I=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&dt);return I&&N!==mf&&($.value=wo(v,this.options,V,this.speed)),L&&L($.value),I&&this.finish(),$}then(i,l){return this.finished.then(i,l)}get duration(){return rn(this.calculatedDuration)}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+rn(i)}get time(){return rn(this.currentTime)}set time(i){i=Pe(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=i,this.tick(i))}getGeneratorVelocity(){const i=this.currentTime;if(i<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(i);const l=this.generator.next(i).value;return Ny(r=>this.generator.next(r).value,i,l)}get speed(){return this.playbackSpeed}set speed(i){const l=this.playbackSpeed!==i;l&&this.driver&&this.updateTime(je.now()),this.playbackSpeed=i,l&&this.driver&&(this.time=rn(this.currentTime))}play(){var c,f;if(this.isStopped)return;const{driver:i=xS,startTime:l}=this.options;this.driver||(this.driver=i(d=>this.tick(d))),(f=(c=this.options).onPlay)==null||f.call(c);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=l??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(je.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var i,l;this.notifyFinished(),this.teardown(),this.state="finished",(l=(i=this.options).onComplete)==null||l.call(i)}cancel(){var i,l;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(l=(i=this.options).onCancel)==null||l.call(i)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){var l;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(l=this.driver)==null||l.stop(),i.observe(this)}}function BS(n){for(let i=1;i<n.length;i++)n[i]??(n[i]=n[i-1])}const fi=n=>n*180/Math.PI,pf=n=>{const i=fi(Math.atan2(n[1],n[0]));return gf(i)},US={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:pf,rotateZ:pf,skewX:n=>fi(Math.atan(n[1])),skewY:n=>fi(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},gf=n=>(n=n%360,n<0&&(n+=360),n),C0=pf,j0=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),M0=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),HS={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:j0,scaleY:M0,scale:n=>(j0(n)+M0(n))/2,rotateX:n=>gf(fi(Math.atan2(n[6],n[5]))),rotateY:n=>gf(fi(Math.atan2(-n[2],n[0]))),rotateZ:C0,rotate:C0,skewX:n=>fi(Math.atan(n[4])),skewY:n=>fi(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function yf(n){return n.includes("scale")?1:0}function vf(n,i){if(!n||n==="none")return yf(i);const l=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,c;if(l)r=HS,c=l;else{const h=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=US,c=h}if(!c)return yf(i);const f=r[i],d=c[1].split(",").map(qS);return typeof f=="function"?f(d):d[f]}const GS=(n,i)=>{const{transform:l="none"}=getComputedStyle(n);return vf(l,i)};function qS(n){return parseFloat(n.trim())}const hs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ms=new Set(hs),N0=n=>n===ds||n===lt,YS=new Set(["x","y","z"]),XS=hs.filter(n=>!YS.has(n));function KS(n){const i=[];return XS.forEach(l=>{const r=n.getValue(l);r!==void 0&&(i.push([l,r.get()]),r.set(l.startsWith("scale")?1:0))}),i}const Oa={width:({x:n},{paddingLeft:i="0",paddingRight:l="0",boxSizing:r})=>{const c=n.max-n.min;return r==="border-box"?c:c-parseFloat(i)-parseFloat(l)},height:({y:n},{paddingTop:i="0",paddingBottom:l="0",boxSizing:r})=>{const c=n.max-n.min;return r==="border-box"?c:c-parseFloat(i)-parseFloat(l)},top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:(n,{transform:i})=>vf(i,"x"),y:(n,{transform:i})=>vf(i,"y")};Oa.translateX=Oa.x;Oa.translateY=Oa.y;const di=new Set;let bf=!1,xf=!1,Sf=!1;function ky(){if(xf){const n=Array.from(di).filter(r=>r.needsMeasurement),i=new Set(n.map(r=>r.element)),l=new Map;i.forEach(r=>{const c=KS(r);c.length&&(l.set(r,c),r.render())}),n.forEach(r=>r.measureInitialState()),i.forEach(r=>{r.render();const c=l.get(r);c&&c.forEach(([f,d])=>{var h;(h=r.getValue(f))==null||h.set(d)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}xf=!1,bf=!1,di.forEach(n=>n.complete(Sf)),di.clear()}function Ry(){di.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(xf=!0)})}function QS(){Sf=!0,Ry(),ky(),Sf=!1}class If{constructor(i,l,r,c,f,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=l,this.name=r,this.motionValue=c,this.element=f,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(di.add(this),bf||(bf=!0,Yt.read(Ry),Yt.resolveKeyframes(ky))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:l,element:r,motionValue:c}=this;if(i[0]===null){const f=c==null?void 0:c.get(),d=i[i.length-1];if(f!==void 0)i[0]=f;else if(r&&l){const h=r.readValue(l,d);h!=null&&(i[0]=h)}i[0]===void 0&&(i[0]=d),c&&f===void 0&&c.set(i[0])}BS(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),di.delete(this)}cancel(){this.state==="scheduled"&&(di.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const ZS=n=>n.startsWith("--");function Oy(n,i,l){ZS(i)?n.style.setProperty(i,l):n.style[i]=l}const PS={};function zy(n,i){const l=ry(n);return()=>PS[i]??l()}const FS=zy(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Ly=zy(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),hl=([n,i,l,r])=>`cubic-bezier(${n}, ${i}, ${l}, ${r})`,D0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:hl([0,.65,.55,1]),circOut:hl([.55,0,1,.45]),backIn:hl([.31,.01,.66,-.59]),backOut:hl([.33,1.53,.69,.99])};function Vy(n,i){if(n)return typeof n=="function"?Ly()?My(n,i):"ease-out":vy(n)?hl(n):Array.isArray(n)?n.map(l=>Vy(l,i)||D0.easeOut):D0[n]}function JS(n,i,l,{delay:r=0,duration:c=300,repeat:f=0,repeatType:d="loop",ease:h="easeOut",times:g}={},y=void 0){const v={[i]:l};g&&(v.offset=g);const x=Vy(h,c);Array.isArray(x)&&(v.easing=x);const S={delay:r,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"};return y&&(S.pseudoElement=y),n.animate(v,S)}function _y(n){return typeof n=="function"&&"applyToOptions"in n}function $S({type:n,...i}){return _y(n)&&Ly()?n.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class By extends Wf{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!i)return;const{element:l,name:r,keyframes:c,pseudoElement:f,allowFlatten:d=!1,finalKeyframe:h,onComplete:g}=i;this.isPseudoElement=!!f,this.allowFlatten=d,this.options=i,Yf(typeof i.type!="string");const y=$S(i);this.animation=JS(l,r,c,y,f),y.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const v=wo(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(v),Oy(l,r,v),this.animation.cancel()}g==null||g(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var i,l;(l=(i=this.animation).finish)==null||l.call(i)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var l,r,c;const i=(l=this.options)==null?void 0:l.element;!this.isPseudoElement&&(i!=null&&i.isConnected)&&((c=(r=this.animation).commitStyles)==null||c.call(r))}get duration(){var l,r;const i=((r=(l=this.animation.effect)==null?void 0:l.getComputedTiming)==null?void 0:r.call(l).duration)||0;return rn(Number(i))}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+rn(i)}get time(){return rn(Number(this.animation.currentTime)||0)}set time(i){const l=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Pe(i),l&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(i){this.manualStartTime=this.animation.startTime=i}attachTimeline({timeline:i,rangeStart:l,rangeEnd:r,observe:c}){var f;return this.allowFlatten&&((f=this.animation.effect)==null||f.updateTiming({easing:"linear"})),this.animation.onfinish=null,i&&FS()?(this.animation.timeline=i,l&&(this.animation.rangeStart=l),r&&(this.animation.rangeEnd=r),on):c(this)}}const Uy={anticipate:my,backInOut:hy,circInOut:gy};function WS(n){return n in Uy}function IS(n){typeof n.ease=="string"&&WS(n.ease)&&(n.ease=Uy[n.ease])}const Jc=10;class t2 extends By{constructor(i){IS(i),Dy(i),super(i),i.startTime!==void 0&&i.autoplay!==!1&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:l,onUpdate:r,onComplete:c,element:f,...d}=this.options;if(!l)return;if(i!==void 0){l.set(i);return}const h=new fo({...d,autoplay:!1}),g=Math.max(Jc,je.now()-this.startTime),y=kn(0,Jc,g-Jc),v=h.sample(g).value,{name:x}=this.options;f&&x&&Oy(f,x,v),l.setWithVelocity(h.sample(Math.max(0,g-y)).value,v,y),h.stop()}}const k0=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(yn.test(n)||n==="0")&&!n.startsWith("url("));function e2(n){const i=n[0];if(n.length===1)return!0;for(let l=0;l<n.length;l++)if(n[l]!==i)return!0}function n2(n,i,l,r){const c=n[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const f=n[n.length-1],d=k0(c,i),h=k0(f,i);return!d||!h?!1:e2(n)||(l==="spring"||_y(l))&&r}function wf(n){n.duration=0,n.type="keyframes"}const Hy=new Set(["opacity","clipPath","filter","transform"]),a2=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function i2(n){for(let i=0;i<n.length;i++)if(typeof n[i]=="string"&&a2.test(n[i]))return!0;return!1}const s2=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),l2=ry(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function r2(n){var x;const{motionValue:i,name:l,repeatDelay:r,repeatType:c,damping:f,type:d,keyframes:h}=n;if(!(((x=i==null?void 0:i.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:v}=i.owner.getProps();return l2()&&l&&(Hy.has(l)||s2.has(l)&&i2(h))&&(l!=="transform"||!v)&&!y&&!r&&c!=="mirror"&&f!==0&&d!=="inertia"}const o2=40;class u2 extends Wf{constructor({autoplay:i=!0,delay:l=0,type:r="keyframes",repeat:c=0,repeatDelay:f=0,repeatType:d="loop",keyframes:h,name:g,motionValue:y,element:v,...x}){var N;super(),this.stop=()=>{var L,V;this._animation&&(this._animation.stop(),(L=this.stopTimeline)==null||L.call(this)),(V=this.keyframeResolver)==null||V.cancel()},this.createdAt=je.now();const S={autoplay:i,delay:l,type:r,repeat:c,repeatDelay:f,repeatType:d,name:g,motionValue:y,element:v,...x},E=(v==null?void 0:v.KeyframeResolver)||If;this.keyframeResolver=new E(h,(L,V,q)=>this.onKeyframesResolved(L,V,S,!q),g,y,v),(N=this.keyframeResolver)==null||N.scheduleResolve()}onKeyframesResolved(i,l,r,c){var q,K;this.keyframeResolver=void 0;const{name:f,type:d,velocity:h,delay:g,isHandoff:y,onUpdate:v}=r;this.resolvedAt=je.now();let x=!0;n2(i,f,d,h)||(x=!1,(La.instantAnimations||!g)&&(v==null||v(wo(i,r,l))),i[0]=i[i.length-1],wf(r),r.repeat=0);const E={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>o2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:l,...r,keyframes:i},N=x&&!y&&r2(E),L=(K=(q=E.motionValue)==null?void 0:q.owner)==null?void 0:K.current;let V;if(N)try{V=new t2({...E,element:L})}catch{V=new fo(E)}else V=new fo(E);V.finished.then(()=>{this.notifyFinished()}).catch(on),this.pendingTimeline&&(this.stopTimeline=V.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=V}get finished(){return this._animation?this.animation.finished:this._finished}then(i,l){return this.finished.finally(i).then(()=>{})}get animation(){var i;return this._animation||((i=this.keyframeResolver)==null||i.resume(),QS()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var i;this._animation&&this.animation.cancel(),(i=this.keyframeResolver)==null||i.cancel()}}function Gy(n,i,l,r=0,c=1){const f=Array.from(n).sort((y,v)=>y.sortNodePosition(v)).indexOf(i),d=n.size,h=(d-1)*r;return typeof l=="function"?l(f,d):c===1?f*r:h-f*r}const c2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function f2(n){const i=c2.exec(n);if(!i)return[,];const[,l,r,c]=i;return[`--${l??r}`,c]}function qy(n,i,l=1){const[r,c]=f2(n);if(!r)return;const f=window.getComputedStyle(i).getPropertyValue(r);if(f){const d=f.trim();return iy(d)?parseFloat(d):d}return Zf(c)?qy(c,i,l+1):c}const d2={type:"spring",stiffness:500,damping:25,restSpeed:10},h2=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),m2={type:"keyframes",duration:.8},p2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},g2=(n,{keyframes:i})=>i.length>2?m2:ms.has(n)?n.startsWith("scale")?h2(i[1]):d2:p2;function Yy(n,i){if(n!=null&&n.inherit&&i){const{inherit:l,...r}=n;return{...i,...r}}return n}function td(n,i){const l=(n==null?void 0:n[i])??(n==null?void 0:n.default)??n;return l!==n?Yy(l,n):l}const y2=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function v2(n){for(const i in n)if(!y2.has(i))return!0;return!1}const ed=(n,i,l,r={},c,f)=>d=>{const h=td(r,n)||{},g=h.delay||r.delay||0;let{elapsed:y=0}=r;y=y-Pe(g);const v={keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:i.getVelocity(),...h,delay:-y,onUpdate:S=>{i.set(S),h.onUpdate&&h.onUpdate(S)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:n,motionValue:i,element:f?void 0:c};v2(h)||Object.assign(v,g2(n,v)),v.duration&&(v.duration=Pe(v.duration)),v.repeatDelay&&(v.repeatDelay=Pe(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let x=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(wf(v),v.delay===0&&(x=!0)),(La.instantAnimations||La.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,wf(v),v.delay=0),v.allowFlatten=!h.type&&!h.ease,x&&!f&&i.get()!==void 0){const S=wo(v.keyframes,h);if(S!==void 0){Yt.update(()=>{v.onUpdate(S),v.onComplete()});return}}return h.isSync?new fo(v):new u2(v)};function R0(n){const i=[{},{}];return n==null||n.values.forEach((l,r)=>{i[0][r]=l.get(),i[1][r]=l.getVelocity()}),i}function nd(n,i,l,r){if(typeof i=="function"){const[c,f]=R0(r);i=i(l!==void 0?l:n.custom,c,f)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[c,f]=R0(r);i=i(l!==void 0?l:n.custom,c,f)}return i}function hi(n,i,l){const r=n.getProps();return nd(r,i,l!==void 0?l:r.custom,n)}const Xy=new Set(["width","height","top","left","right","bottom",...hs]),O0=30,b2=n=>!isNaN(parseFloat(n));class x2{constructor(i,l={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var f;const c=je.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((f=this.events.change)==null||f.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(i),this.owner=l.owner}setCurrent(i){this.current=i,this.updatedAt=je.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=b2(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,l){this.events[i]||(this.events[i]=new Xf);const r=this.events[i].add(l);return i==="change"?()=>{r(),Yt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,l){this.passiveEffect=i,this.stopPassiveEffect=l}set(i){this.passiveEffect?this.passiveEffect(i,this.updateAndNotify):this.updateAndNotify(i)}setWithVelocity(i,l,r){this.set(l),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-r}jump(i,l=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var i;(i=this.events.change)==null||i.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=je.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>O0)return 0;const l=Math.min(this.updatedAt-this.prevUpdatedAt,O0);return oy(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)}start(i){return this.stop(),new Promise(l=>{this.hasAnimated=!0,this.animation=i(l),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var i,l;(i=this.dependents)==null||i.clear(),(l=this.events.destroy)==null||l.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function cs(n,i){return new x2(n,i)}const Tf=n=>Array.isArray(n);function S2(n,i,l){n.hasValue(i)?n.getValue(i).set(l):n.addValue(i,cs(l))}function w2(n){return Tf(n)?n[n.length-1]||0:n}function T2(n,i){const l=hi(n,i);let{transitionEnd:r={},transition:c={},...f}=l||{};f={...f,...r};for(const d in f){const h=w2(f[d]);S2(n,d,h)}}const xe=n=>!!(n&&n.getVelocity);function A2(n){return!!(xe(n)&&n.add)}function Af(n,i){const l=n.getValue("willChange");if(A2(l))return l.add(i);if(!l&&La.WillChange){const r=new La.WillChange("auto");n.addValue("willChange",r),r.add(i)}}function ad(n){return n.replace(/([A-Z])/g,i=>`-${i.toLowerCase()}`)}const E2="framerAppearId",Ky="data-"+ad(E2);function Qy(n){return n.props[Ky]}function C2({protectedKeys:n,needsAnimating:i},l){const r=n.hasOwnProperty(l)&&i[l]!==!0;return i[l]=!1,r}function Zy(n,i,{delay:l=0,transitionOverride:r,type:c}={}){let{transition:f,transitionEnd:d,...h}=i;const g=n.getDefaultTransition();f=f?Yy(f,g):g;const y=f==null?void 0:f.reduceMotion;r&&(f=r);const v=[],x=c&&n.animationState&&n.animationState.getState()[c];for(const S in h){const E=n.getValue(S,n.latestValues[S]??null),N=h[S];if(N===void 0||x&&C2(x,S))continue;const L={delay:l,...td(f||{},S)},V=E.get();if(V!==void 0&&!E.isAnimating()&&!Array.isArray(N)&&N===V&&!L.velocity){Yt.update(()=>E.set(N));continue}let q=!1;if(window.MotionHandoffAnimation){const X=Qy(n);if(X){const $=window.MotionHandoffAnimation(X,S,Yt);$!==null&&(L.startTime=$,q=!0)}}Af(n,S);const K=y??n.shouldReduceMotion;E.start(ed(S,E,N,K&&Xy.has(S)?{type:!1}:L,n,q));const Y=E.animation;Y&&v.push(Y)}if(d){const S=()=>Yt.update(()=>{d&&T2(n,d)});v.length?Promise.all(v).then(S):S()}return v}function Ef(n,i,l={}){var g;const r=hi(n,i,l.type==="exit"?(g=n.presenceContext)==null?void 0:g.custom:void 0);let{transition:c=n.getDefaultTransition()||{}}=r||{};l.transitionOverride&&(c=l.transitionOverride);const f=r?()=>Promise.all(Zy(n,r,l)):()=>Promise.resolve(),d=n.variantChildren&&n.variantChildren.size?(y=0)=>{const{delayChildren:v=0,staggerChildren:x,staggerDirection:S}=c;return j2(n,i,y,v,x,S,l)}:()=>Promise.resolve(),{when:h}=c;if(h){const[y,v]=h==="beforeChildren"?[f,d]:[d,f];return y().then(()=>v())}else return Promise.all([f(),d(l.delay)])}function j2(n,i,l=0,r=0,c=0,f=1,d){const h=[];for(const g of n.variantChildren)g.notify("AnimationStart",i),h.push(Ef(g,i,{...d,delay:l+(typeof r=="function"?0:r)+Gy(n.variantChildren,g,r,c,f)}).then(()=>g.notify("AnimationComplete",i)));return Promise.all(h)}function M2(n,i,l={}){n.notify("AnimationStart",i);let r;if(Array.isArray(i)){const c=i.map(f=>Ef(n,f,l));r=Promise.all(c)}else if(typeof i=="string")r=Ef(n,i,l);else{const c=typeof i=="function"?hi(n,i,l.custom):i;r=Promise.all(Zy(n,c,l))}return r.then(()=>{n.notify("AnimationComplete",i)})}const N2={test:n=>n==="auto",parse:n=>n},Py=n=>i=>i.test(n),Fy=[ds,lt,Dn,ka,eS,tS,N2],z0=n=>Fy.find(Py(n));function D2(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||ly(n):!0}const k2=new Set(["brightness","contrast","saturate","opacity"]);function R2(n){const[i,l]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[r]=l.match(Pf)||[];if(!r)return n;const c=l.replace(r,"");let f=k2.has(i)?1:0;return r!==l&&(f*=100),i+"("+f+c+")"}const O2=/\b([a-z-]*)\(.*?\)/gu,Cf={...yn,getAnimatableNone:n=>{const i=n.match(O2);return i?i.map(R2).join(" "):n}},jf={...yn,getAnimatableNone:n=>{const i=yn.parse(n);return yn.createTransformer(n)(i.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},L0={...ds,transform:Math.round},z2={rotate:ka,rotateX:ka,rotateY:ka,rotateZ:ka,scale:Kr,scaleX:Kr,scaleY:Kr,scaleZ:Kr,skew:ka,skewX:ka,skewY:ka,distance:lt,translateX:lt,translateY:lt,translateZ:lt,x:lt,y:lt,z:lt,perspective:lt,transformPerspective:lt,opacity:bl,originX:S0,originY:S0,originZ:lt},id={borderWidth:lt,borderTopWidth:lt,borderRightWidth:lt,borderBottomWidth:lt,borderLeftWidth:lt,borderRadius:lt,borderTopLeftRadius:lt,borderTopRightRadius:lt,borderBottomRightRadius:lt,borderBottomLeftRadius:lt,width:lt,maxWidth:lt,height:lt,maxHeight:lt,top:lt,right:lt,bottom:lt,left:lt,inset:lt,insetBlock:lt,insetBlockStart:lt,insetBlockEnd:lt,insetInline:lt,insetInlineStart:lt,insetInlineEnd:lt,padding:lt,paddingTop:lt,paddingRight:lt,paddingBottom:lt,paddingLeft:lt,paddingBlock:lt,paddingBlockStart:lt,paddingBlockEnd:lt,paddingInline:lt,paddingInlineStart:lt,paddingInlineEnd:lt,margin:lt,marginTop:lt,marginRight:lt,marginBottom:lt,marginLeft:lt,marginBlock:lt,marginBlockStart:lt,marginBlockEnd:lt,marginInline:lt,marginInlineStart:lt,marginInlineEnd:lt,fontSize:lt,backgroundPositionX:lt,backgroundPositionY:lt,...z2,zIndex:L0,fillOpacity:bl,strokeOpacity:bl,numOctaves:L0},L2={...id,color:le,backgroundColor:le,outlineColor:le,fill:le,stroke:le,borderColor:le,borderTopColor:le,borderRightColor:le,borderBottomColor:le,borderLeftColor:le,filter:Cf,WebkitFilter:Cf,mask:jf,WebkitMask:jf},Jy=n=>L2[n],V2=new Set([Cf,jf]);function $y(n,i){let l=Jy(n);return V2.has(l)||(l=yn),l.getAnimatableNone?l.getAnimatableNone(i):void 0}const _2=new Set(["auto","none","0"]);function B2(n,i,l){let r=0,c;for(;r<n.length&&!c;){const f=n[r];typeof f=="string"&&!_2.has(f)&&us(f).values.length&&(c=n[r]),r++}if(c&&l)for(const f of i)n[f]=$y(l,c)}class U2 extends If{constructor(i,l,r,c,f){super(i,l,r,c,f,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:l,name:r}=this;if(!l||!l.current)return;super.readKeyframes();for(let v=0;v<i.length;v++){let x=i[v];if(typeof x=="string"&&(x=x.trim(),Zf(x))){const S=qy(x,l.current);S!==void 0&&(i[v]=S),v===i.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!Xy.has(r)||i.length!==2)return;const[c,f]=i,d=z0(c),h=z0(f),g=x0(c),y=x0(f);if(g!==y&&Oa[r]){this.needsMeasurement=!0;return}if(d!==h)if(N0(d)&&N0(h))for(let v=0;v<i.length;v++){const x=i[v];typeof x=="string"&&(i[v]=parseFloat(x))}else Oa[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:l}=this,r=[];for(let c=0;c<i.length;c++)(i[c]===null||D2(i[c]))&&r.push(c);r.length&&B2(i,r,l)}measureInitialState(){const{element:i,unresolvedKeyframes:l,name:r}=this;if(!i||!i.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Oa[r](i.measureViewportBox(),window.getComputedStyle(i.current)),l[0]=this.measuredOrigin;const c=l[l.length-1];c!==void 0&&i.getValue(r,c).jump(c,!1)}measureEndState(){var h;const{element:i,name:l,unresolvedKeyframes:r}=this;if(!i||!i.current)return;const c=i.getValue(l);c&&c.jump(this.measuredOrigin,!1);const f=r.length-1,d=r[f];r[f]=Oa[l](i.measureViewportBox(),window.getComputedStyle(i.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([g,y])=>{i.getValue(g).set(y)}),this.resolveNoneKeyframes()}}function Wy(n,i,l){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let r=document;const c=(l==null?void 0:l[n])??r.querySelectorAll(n);return c?Array.from(c):[]}return Array.from(n).filter(r=>r!=null)}const Iy=(n,i)=>i&&typeof n=="number"?i.transform(n):n;function to(n){return sy(n)&&"offsetHeight"in n&&!("ownerSVGElement"in n)}const{schedule:sd}=by(queueMicrotask,!1),gn={x:!1,y:!1};function tv(){return gn.x||gn.y}function H2(n){return n==="x"||n==="y"?gn[n]?null:(gn[n]=!0,()=>{gn[n]=!1}):gn.x||gn.y?null:(gn.x=gn.y=!0,()=>{gn.x=gn.y=!1})}function ev(n,i){const l=Wy(n),r=new AbortController,c={passive:!0,...i,signal:r.signal};return[l,c,()=>r.abort()]}function G2(n){return!(n.pointerType==="touch"||tv())}function q2(n,i,l={}){const[r,c,f]=ev(n,l);return r.forEach(d=>{let h=!1,g=!1,y;const v=()=>{d.removeEventListener("pointerleave",N)},x=V=>{y&&(y(V),y=void 0),v()},S=V=>{h=!1,window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S),g&&(g=!1,x(V))},E=()=>{h=!0,window.addEventListener("pointerup",S,c),window.addEventListener("pointercancel",S,c)},N=V=>{if(V.pointerType!=="touch"){if(h){g=!0;return}x(V)}},L=V=>{if(!G2(V))return;g=!1;const q=i(d,V);typeof q=="function"&&(y=q,d.addEventListener("pointerleave",N,c))};d.addEventListener("pointerenter",L,c),d.addEventListener("pointerdown",E,c)}),f}const nv=(n,i)=>i?n===i?!0:nv(n,i.parentElement):!1,ld=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,Y2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function X2(n){return Y2.has(n.tagName)||n.isContentEditable===!0}const K2=new Set(["INPUT","SELECT","TEXTAREA"]);function Q2(n){return K2.has(n.tagName)||n.isContentEditable===!0}const eo=new WeakSet;function V0(n){return i=>{i.key==="Enter"&&n(i)}}function $c(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const Z2=(n,i)=>{const l=n.currentTarget;if(!l)return;const r=V0(()=>{if(eo.has(l))return;$c(l,"down");const c=V0(()=>{$c(l,"up")}),f=()=>$c(l,"cancel");l.addEventListener("keyup",c,i),l.addEventListener("blur",f,i)});l.addEventListener("keydown",r,i),l.addEventListener("blur",()=>l.removeEventListener("keydown",r),i)};function _0(n){return ld(n)&&!tv()}const B0=new WeakSet;function P2(n,i,l={}){const[r,c,f]=ev(n,l),d=h=>{const g=h.currentTarget;if(!_0(h)||B0.has(h))return;eo.add(g),l.stopPropagation&&B0.add(h);const y=i(g,h),v=(E,N)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",S),eo.has(g)&&eo.delete(g),_0(E)&&typeof y=="function"&&y(E,{success:N})},x=E=>{v(E,g===window||g===document||l.useGlobalTarget||nv(g,E.target))},S=E=>{v(E,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",S,c)};return r.forEach(h=>{(l.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),to(h)&&(h.addEventListener("focus",y=>Z2(y,c)),!X2(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),f}function rd(n){return sy(n)&&"ownerSVGElement"in n}const no=new WeakMap;let Ra;const av=(n,i,l)=>(r,c)=>c&&c[0]?c[0][n+"Size"]:rd(r)&&"getBBox"in r?r.getBBox()[i]:r[l],F2=av("inline","width","offsetWidth"),J2=av("block","height","offsetHeight");function $2({target:n,borderBoxSize:i}){var l;(l=no.get(n))==null||l.forEach(r=>{r(n,{get width(){return F2(n,i)},get height(){return J2(n,i)}})})}function W2(n){n.forEach($2)}function I2(){typeof ResizeObserver>"u"||(Ra=new ResizeObserver(W2))}function tw(n,i){Ra||I2();const l=Wy(n);return l.forEach(r=>{let c=no.get(r);c||(c=new Set,no.set(r,c)),c.add(i),Ra==null||Ra.observe(r)}),()=>{l.forEach(r=>{const c=no.get(r);c==null||c.delete(i),c!=null&&c.size||Ra==null||Ra.unobserve(r)})}}const ao=new Set;let rs;function ew(){rs=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};ao.forEach(i=>i(n))},window.addEventListener("resize",rs)}function nw(n){return ao.add(n),rs||ew(),()=>{ao.delete(n),!ao.size&&typeof rs=="function"&&(window.removeEventListener("resize",rs),rs=void 0)}}function U0(n,i){return typeof n=="function"?nw(n):tw(n,i)}function aw(n){return rd(n)&&n.tagName==="svg"}const iw=[...Fy,le,yn],sw=n=>iw.find(Py(n)),H0=()=>({translate:0,scale:1,origin:0,originPoint:0}),os=()=>({x:H0(),y:H0()}),G0=()=>({min:0,max:0}),ue=()=>({x:G0(),y:G0()}),lw=new WeakMap;function To(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function xl(n){return typeof n=="string"||Array.isArray(n)}const od=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ud=["initial",...od];function Ao(n){return To(n.animate)||ud.some(i=>xl(n[i]))}function iv(n){return!!(Ao(n)||n.variants)}function rw(n,i,l){for(const r in i){const c=i[r],f=l[r];if(xe(c))n.addValue(r,c);else if(xe(f))n.addValue(r,cs(c,{owner:n}));else if(f!==c)if(n.hasValue(r)){const d=n.getValue(r);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=n.getStaticValue(r);n.addValue(r,cs(d!==void 0?d:c,{owner:n}))}}for(const r in l)i[r]===void 0&&n.removeValue(r);return i}const Mf={current:null},sv={current:!1},ow=typeof window<"u";function uw(){if(sv.current=!0,!!ow)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>Mf.current=n.matches;n.addEventListener("change",i),i()}else Mf.current=!1}const q0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let ho={};function lv(n){ho=n}function cw(){return ho}class fw{scrapeMotionValuesFromProps(i,l,r){return{}}constructor({parent:i,props:l,presenceContext:r,reducedMotionConfig:c,skipAnimations:f,blockInitialAnimation:d,visualState:h},g={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=If,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const E=je.now();this.renderScheduledAt<E&&(this.renderScheduledAt=E,Yt.render(this.render,!1,!0))};const{latestValues:y,renderState:v}=h;this.latestValues=y,this.baseTarget={...y},this.initialValues=l.initial?{...y}:{},this.renderState=v,this.parent=i,this.props=l,this.presenceContext=r,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=f,this.options=g,this.blockInitialAnimation=!!d,this.isControllingVariants=Ao(l),this.isVariantNode=iv(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:x,...S}=this.scrapeMotionValuesFromProps(l,{},this);for(const E in S){const N=S[E];y[E]!==void 0&&xe(N)&&N.set(y[E])}}mount(i){var l,r;if(this.hasBeenMounted)for(const c in this.initialValues)(l=this.values.get(c))==null||l.jump(this.initialValues[c]),this.latestValues[c]=this.initialValues[c];this.current=i,lw.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((c,f)=>this.bindToMotionValue(f,c)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(sv.current||uw(),this.shouldReduceMotion=Mf.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var i;this.projection&&this.projection.unmount(),Va(this.notifyUpdate),Va(this.render),this.valueSubscriptions.forEach(l=>l()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(i=this.parent)==null||i.removeChild(this);for(const l in this.events)this.events[l].clear();for(const l in this.features){const r=this.features[l];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(i){this.children.add(i),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(i)}removeChild(i){this.children.delete(i),this.enteringChildren&&this.enteringChildren.delete(i)}bindToMotionValue(i,l){if(this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)(),l.accelerate&&Hy.has(i)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:g,ease:y,duration:v}=l.accelerate,x=new By({element:this.current,name:i,keyframes:h,times:g,ease:y,duration:Pe(v)}),S=d(x);this.valueSubscriptions.set(i,()=>{S(),x.cancel()});return}const r=ms.has(i);r&&this.onBindTransform&&this.onBindTransform();const c=l.on("change",d=>{this.latestValues[i]=d,this.props.onUpdate&&Yt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let f;typeof window<"u"&&window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,i,l)),this.valueSubscriptions.set(i,()=>{c(),f&&f(),l.owner&&l.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in ho){const l=ho[i];if(!l)continue;const{isEnabled:r,Feature:c}=l;if(!this.features[i]&&c&&r(this.props)&&(this.features[i]=new c(this)),this.features[i]){const f=this.features[i];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ue()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,l){this.latestValues[i]=l}update(i,l){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;for(let r=0;r<q0.length;r++){const c=q0[r];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const f="on"+c,d=i[f];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=rw(this,this.scrapeMotionValuesFromProps(i,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const l=this.getClosestVariantNode();if(l)return l.variantChildren&&l.variantChildren.add(i),()=>l.variantChildren.delete(i)}addValue(i,l){const r=this.values.get(i);l!==r&&(r&&this.removeValue(i),this.bindToMotionValue(i,l),this.values.set(i,l),this.latestValues[i]=l.get())}removeValue(i){this.values.delete(i);const l=this.valueSubscriptions.get(i);l&&(l(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,l){if(this.props.values&&this.props.values[i])return this.props.values[i];let r=this.values.get(i);return r===void 0&&l!==void 0&&(r=cs(l===null?void 0:l,{owner:this}),this.addValue(i,r)),r}readValue(i,l){let r=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return r!=null&&(typeof r=="string"&&(iy(r)||ly(r))?r=parseFloat(r):!sw(r)&&yn.test(l)&&(r=$y(i,l)),this.setBaseTarget(i,xe(r)?r.get():r)),xe(r)?r.get():r}setBaseTarget(i,l){this.baseTarget[i]=l}getBaseTarget(i){var f;const{initial:l}=this.props;let r;if(typeof l=="string"||typeof l=="object"){const d=nd(this.props,l,(f=this.presenceContext)==null?void 0:f.custom);d&&(r=d[i])}if(l&&r!==void 0)return r;const c=this.getBaseTargetFromProps(this.props,i);return c!==void 0&&!xe(c)?c:this.initialValues[i]!==void 0&&r===void 0?void 0:this.baseTarget[i]}on(i,l){return this.events[i]||(this.events[i]=new Xf),this.events[i].add(l)}notify(i,...l){this.events[i]&&this.events[i].notify(...l)}scheduleRenderMicrotask(){sd.render(this.render)}}class rv extends fw{constructor(){super(...arguments),this.KeyframeResolver=U2}sortInstanceNodePosition(i,l){return i.compareDocumentPosition(l)&2?1:-1}getBaseTargetFromProps(i,l){const r=i.style;return r?r[l]:void 0}removeValueFromRenderState(i,{vars:l,style:r}){delete l[i],delete r[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;xe(i)&&(this.childSubscription=i.on("change",l=>{this.current&&(this.current.textContent=`${l}`)}))}}class _a{constructor(i){this.isMounted=!1,this.node=i}update(){}}function ov({top:n,left:i,right:l,bottom:r}){return{x:{min:i,max:l},y:{min:n,max:r}}}function dw({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function hw(n,i){if(!i)return n;const l=i({x:n.left,y:n.top}),r=i({x:n.right,y:n.bottom});return{top:l.y,left:l.x,bottom:r.y,right:r.x}}function Wc(n){return n===void 0||n===1}function Nf({scale:n,scaleX:i,scaleY:l}){return!Wc(n)||!Wc(i)||!Wc(l)}function oi(n){return Nf(n)||uv(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function uv(n){return Y0(n.x)||Y0(n.y)}function Y0(n){return n&&n!=="0%"}function mo(n,i,l){const r=n-l,c=i*r;return l+c}function X0(n,i,l,r,c){return c!==void 0&&(n=mo(n,c,r)),mo(n,l,r)+i}function Df(n,i=0,l=1,r,c){n.min=X0(n.min,i,l,r,c),n.max=X0(n.max,i,l,r,c)}function cv(n,{x:i,y:l}){Df(n.x,i.translate,i.scale,i.originPoint),Df(n.y,l.translate,l.scale,l.originPoint)}const K0=.999999999999,Q0=1.0000000000001;function mw(n,i,l,r=!1){var h;const c=l.length;if(!c)return;i.x=i.y=1;let f,d;for(let g=0;g<c;g++){f=l[g],d=f.projectionDelta;const{visualElement:y}=f.options;y&&y.props.style&&y.props.style.display==="contents"||(r&&f.options.layoutScroll&&f.scroll&&f!==f.root&&(Mn(n.x,-f.scroll.offset.x),Mn(n.y,-f.scroll.offset.y)),d&&(i.x*=d.x.scale,i.y*=d.y.scale,cv(n,d)),r&&oi(f.latestValues)&&io(n,f.latestValues,(h=f.layout)==null?void 0:h.layoutBox))}i.x<Q0&&i.x>K0&&(i.x=1),i.y<Q0&&i.y>K0&&(i.y=1)}function Mn(n,i){n.min+=i,n.max+=i}function Z0(n,i,l,r,c=.5){const f=Zt(n.min,n.max,c);Df(n,i,l,f,r)}function P0(n,i){return typeof n=="string"?parseFloat(n)/100*(i.max-i.min):n}function io(n,i,l){const r=l??n;Z0(n.x,P0(i.x,r.x),i.scaleX,i.scale,i.originX),Z0(n.y,P0(i.y,r.y),i.scaleY,i.scale,i.originY)}function fv(n,i){return ov(hw(n.getBoundingClientRect(),i))}function pw(n,i,l){const r=fv(n,l),{scroll:c}=i;return c&&(Mn(r.x,c.offset.x),Mn(r.y,c.offset.y)),r}const gw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},yw=hs.length;function vw(n,i,l){let r="",c=!0;for(let f=0;f<yw;f++){const d=hs[f],h=n[d];if(h===void 0)continue;let g=!0;if(typeof h=="number")g=h===(d.startsWith("scale")?1:0);else{const y=parseFloat(h);g=d.startsWith("scale")?y===1:y===0}if(!g||l){const y=Iy(h,id[d]);if(!g){c=!1;const v=gw[d]||d;r+=`${v}(${y}) `}l&&(i[d]=y)}}return r=r.trim(),l?r=l(i,c?"":r):c&&(r="none"),r}function cd(n,i,l){const{style:r,vars:c,transformOrigin:f}=n;let d=!1,h=!1;for(const g in i){const y=i[g];if(ms.has(g)){d=!0;continue}else if(Sy(g)){c[g]=y;continue}else{const v=Iy(y,id[g]);g.startsWith("origin")?(h=!0,f[g]=v):r[g]=v}}if(i.transform||(d||l?r.transform=vw(i,n.transform,l):r.transform&&(r.transform="none")),h){const{originX:g="50%",originY:y="50%",originZ:v=0}=f;r.transformOrigin=`${g} ${y} ${v}`}}function dv(n,{style:i,vars:l},r,c){const f=n.style;let d;for(d in i)f[d]=i[d];c==null||c.applyProjectionStyles(f,r);for(d in l)f.setProperty(d,l[d])}function F0(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const cl={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(lt.test(n))n=parseFloat(n);else return n;const l=F0(n,i.target.x),r=F0(n,i.target.y);return`${l}% ${r}%`}},bw={correct:(n,{treeScale:i,projectionDelta:l})=>{const r=n,c=yn.parse(n);if(c.length>5)return r;const f=yn.createTransformer(n),d=typeof c[0]!="number"?1:0,h=l.x.scale*i.x,g=l.y.scale*i.y;c[0+d]/=h,c[1+d]/=g;const y=Zt(h,g,.5);return typeof c[2+d]=="number"&&(c[2+d]/=y),typeof c[3+d]=="number"&&(c[3+d]/=y),f(c)}},kf={borderRadius:{...cl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:cl,borderTopRightRadius:cl,borderBottomLeftRadius:cl,borderBottomRightRadius:cl,boxShadow:bw};function hv(n,{layout:i,layoutId:l}){return ms.has(n)||n.startsWith("origin")||(i||l!==void 0)&&(!!kf[n]||n==="opacity")}function fd(n,i,l){var d;const r=n.style,c=i==null?void 0:i.style,f={};if(!r)return f;for(const h in r)(xe(r[h])||c&&xe(c[h])||hv(h,n)||((d=l==null?void 0:l.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(f[h]=r[h]);return f}function xw(n){return window.getComputedStyle(n)}class Sw extends rv{constructor(){super(...arguments),this.type="html",this.renderInstance=dv}readValueFromInstance(i,l){var r;if(ms.has(l))return(r=this.projection)!=null&&r.isProjecting?yf(l):GS(i,l);{const c=xw(i),f=(Sy(l)?c.getPropertyValue(l):c[l])||0;return typeof f=="string"?f.trim():f}}measureInstanceViewportBox(i,{transformPagePoint:l}){return fv(i,l)}build(i,l,r){cd(i,l,r.transformTemplate)}scrapeMotionValuesFromProps(i,l,r){return fd(i,l,r)}}const ww={offset:"stroke-dashoffset",array:"stroke-dasharray"},Tw={offset:"strokeDashoffset",array:"strokeDasharray"};function Aw(n,i,l=1,r=0,c=!0){n.pathLength=1;const f=c?ww:Tw;n[f.offset]=`${-r}`,n[f.array]=`${i} ${l}`}const Ew=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function mv(n,{attrX:i,attrY:l,attrScale:r,pathLength:c,pathSpacing:f=1,pathOffset:d=0,...h},g,y,v){if(cd(n,h,y),g){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:x,style:S}=n;x.transform&&(S.transform=x.transform,delete x.transform),(S.transform||x.transformOrigin)&&(S.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),S.transform&&(S.transformBox=(v==null?void 0:v.transformBox)??"fill-box",delete x.transformBox);for(const E of Ew)x[E]!==void 0&&(S[E]=x[E],delete x[E]);i!==void 0&&(x.x=i),l!==void 0&&(x.y=l),r!==void 0&&(x.scale=r),c!==void 0&&Aw(x,c,f,d,!1)}const pv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),gv=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Cw(n,i,l,r){dv(n,i,void 0,r);for(const c in i.attrs)n.setAttribute(pv.has(c)?c:ad(c),i.attrs[c])}function yv(n,i,l){const r=fd(n,i,l);for(const c in n)if(xe(n[c])||xe(i[c])){const f=hs.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;r[f]=n[c]}return r}class jw extends rv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ue}getBaseTargetFromProps(i,l){return i[l]}readValueFromInstance(i,l){if(ms.has(l)){const r=Jy(l);return r&&r.default||0}return l=pv.has(l)?l:ad(l),i.getAttribute(l)}scrapeMotionValuesFromProps(i,l,r){return yv(i,l,r)}build(i,l,r){mv(i,l,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(i,l,r,c){Cw(i,l,r,c)}mount(i){this.isSVGTag=gv(i.tagName),super.mount(i)}}const Mw=ud.length;function vv(n){if(!n)return;if(!n.isControllingVariants){const l=n.parent?vv(n.parent)||{}:{};return n.props.initial!==void 0&&(l.initial=n.props.initial),l}const i={};for(let l=0;l<Mw;l++){const r=ud[l],c=n.props[r];(xl(c)||c===!1)&&(i[r]=c)}return i}function bv(n,i){if(!Array.isArray(i))return!1;const l=i.length;if(l!==n.length)return!1;for(let r=0;r<l;r++)if(i[r]!==n[r])return!1;return!0}const Nw=[...od].reverse(),Dw=od.length;function kw(n){return i=>Promise.all(i.map(({animation:l,options:r})=>M2(n,l,r)))}function Rw(n){let i=kw(n),l=J0(),r=!0,c=!1;const f=y=>(v,x)=>{var E;const S=hi(n,x,y==="exit"?(E=n.presenceContext)==null?void 0:E.custom:void 0);if(S){const{transition:N,transitionEnd:L,...V}=S;v={...v,...V,...L}}return v};function d(y){i=y(n)}function h(y){const{props:v}=n,x=vv(n.parent)||{},S=[],E=new Set;let N={},L=1/0;for(let q=0;q<Dw;q++){const K=Nw[q],Y=l[K],X=v[K]!==void 0?v[K]:x[K],$=xl(X),dt=K===y?Y.isActive:null;dt===!1&&(L=q);let I=X===x[K]&&X!==v[K]&&$;if(I&&(r||c)&&n.manuallyAnimateOnMount&&(I=!1),Y.protectedKeys={...N},!Y.isActive&&dt===null||!X&&!Y.prevProp||To(X)||typeof X=="boolean")continue;if(K==="exit"&&Y.isActive&&dt!==!0){Y.prevResolvedValues&&(N={...N,...Y.prevResolvedValues});continue}const M=Ow(Y.prevProp,X);let P=M||K===y&&Y.isActive&&!I&&$||q>L&&$,Q=!1;const mt=Array.isArray(X)?X:[X];let gt=mt.reduce(f(K),{});dt===!1&&(gt={});const{prevResolvedValues:Dt={}}=Y,Et={...Dt,...gt},St=W=>{P=!0,E.has(W)&&(Q=!0,E.delete(W)),Y.needsAnimating[W]=!0;const vt=n.getValue(W);vt&&(vt.liveStyle=!1)};for(const W in Et){const vt=gt[W],Z=Dt[W];if(N.hasOwnProperty(W))continue;let T=!1;Tf(vt)&&Tf(Z)?T=!bv(vt,Z):T=vt!==Z,T?vt!=null?St(W):E.add(W):vt!==void 0&&E.has(W)?St(W):Y.protectedKeys[W]=!0}Y.prevProp=X,Y.prevResolvedValues=gt,Y.isActive&&(N={...N,...gt}),(r||c)&&n.blockInitialAnimation&&(P=!1);const O=I&&M;P&&(!O||Q)&&S.push(...mt.map(W=>{const vt={type:K};if(typeof W=="string"&&(r||c)&&!O&&n.manuallyAnimateOnMount&&n.parent){const{parent:Z}=n,T=hi(Z,W);if(Z.enteringChildren&&T){const{delayChildren:B}=T.transition||{};vt.delay=Gy(Z.enteringChildren,n,B)}}return{animation:W,options:vt}}))}if(E.size){const q={};if(typeof v.initial!="boolean"){const K=hi(n,Array.isArray(v.initial)?v.initial[0]:v.initial);K&&K.transition&&(q.transition=K.transition)}E.forEach(K=>{const Y=n.getBaseTarget(K),X=n.getValue(K);X&&(X.liveStyle=!0),q[K]=Y??null}),S.push({animation:q})}let V=!!S.length;return r&&(v.initial===!1||v.initial===v.animate)&&!n.manuallyAnimateOnMount&&(V=!1),r=!1,c=!1,V?i(S):Promise.resolve()}function g(y,v){var S;if(l[y].isActive===v)return Promise.resolve();(S=n.variantChildren)==null||S.forEach(E=>{var N;return(N=E.animationState)==null?void 0:N.setActive(y,v)}),l[y].isActive=v;const x=h(y);for(const E in l)l[E].protectedKeys={};return x}return{animateChanges:h,setActive:g,setAnimateFunction:d,getState:()=>l,reset:()=>{l=J0(),c=!0}}}function Ow(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!bv(i,n):!1}function li(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function J0(){return{animate:li(!0),whileInView:li(),whileHover:li(),whileTap:li(),whileDrag:li(),whileFocus:li(),exit:li()}}function Rf(n,i){n.min=i.min,n.max=i.max}function pn(n,i){Rf(n.x,i.x),Rf(n.y,i.y)}function $0(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}const xv=1e-4,zw=1-xv,Lw=1+xv,Sv=.01,Vw=0-Sv,_w=0+Sv;function Me(n){return n.max-n.min}function Bw(n,i,l){return Math.abs(n-i)<=l}function W0(n,i,l,r=.5){n.origin=r,n.originPoint=Zt(i.min,i.max,n.origin),n.scale=Me(l)/Me(i),n.translate=Zt(l.min,l.max,n.origin)-n.originPoint,(n.scale>=zw&&n.scale<=Lw||isNaN(n.scale))&&(n.scale=1),(n.translate>=Vw&&n.translate<=_w||isNaN(n.translate))&&(n.translate=0)}function gl(n,i,l,r){W0(n.x,i.x,l.x,r?r.originX:void 0),W0(n.y,i.y,l.y,r?r.originY:void 0)}function I0(n,i,l,r=0){const c=r?Zt(l.min,l.max,r):l.min;n.min=c+i.min,n.max=n.min+Me(i)}function Uw(n,i,l,r){I0(n.x,i.x,l.x,r==null?void 0:r.x),I0(n.y,i.y,l.y,r==null?void 0:r.y)}function tg(n,i,l,r=0){const c=r?Zt(l.min,l.max,r):l.min;n.min=i.min-c,n.max=n.min+Me(i)}function po(n,i,l,r){tg(n.x,i.x,l.x,r==null?void 0:r.x),tg(n.y,i.y,l.y,r==null?void 0:r.y)}function eg(n,i,l,r,c){return n-=i,n=mo(n,1/l,r),c!==void 0&&(n=mo(n,1/c,r)),n}function Hw(n,i=0,l=1,r=.5,c,f=n,d=n){if(Dn.test(i)&&(i=parseFloat(i),i=Zt(d.min,d.max,i/100)-d.min),typeof i!="number")return;let h=Zt(f.min,f.max,r);n===f&&(h-=i),n.min=eg(n.min,i,l,h,c),n.max=eg(n.max,i,l,h,c)}function ng(n,i,[l,r,c],f,d){Hw(n,i[l],i[r],i[c],i.scale,f,d)}const Gw=["x","scaleX","originX"],qw=["y","scaleY","originY"];function ag(n,i,l,r){ng(n.x,i,Gw,l?l.x:void 0,r?r.x:void 0),ng(n.y,i,qw,l?l.y:void 0,r?r.y:void 0)}function ig(n){return n.translate===0&&n.scale===1}function wv(n){return ig(n.x)&&ig(n.y)}function sg(n,i){return n.min===i.min&&n.max===i.max}function Yw(n,i){return sg(n.x,i.x)&&sg(n.y,i.y)}function lg(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function Tv(n,i){return lg(n.x,i.x)&&lg(n.y,i.y)}function rg(n){return Me(n.x)/Me(n.y)}function og(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}function jn(n){return[n("x"),n("y")]}function Xw(n,i,l){let r="";const c=n.x.translate/i.x,f=n.y.translate/i.y,d=(l==null?void 0:l.z)||0;if((c||f||d)&&(r=`translate3d(${c}px, ${f}px, ${d}px) `),(i.x!==1||i.y!==1)&&(r+=`scale(${1/i.x}, ${1/i.y}) `),l){const{transformPerspective:y,rotate:v,rotateX:x,rotateY:S,skewX:E,skewY:N}=l;y&&(r=`perspective(${y}px) ${r}`),v&&(r+=`rotate(${v}deg) `),x&&(r+=`rotateX(${x}deg) `),S&&(r+=`rotateY(${S}deg) `),E&&(r+=`skewX(${E}deg) `),N&&(r+=`skewY(${N}deg) `)}const h=n.x.scale*i.x,g=n.y.scale*i.y;return(h!==1||g!==1)&&(r+=`scale(${h}, ${g})`),r||"none"}const Av=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Kw=Av.length,ug=n=>typeof n=="string"?parseFloat(n):n,cg=n=>typeof n=="number"||lt.test(n);function Qw(n,i,l,r,c,f){c?(n.opacity=Zt(0,l.opacity??1,Zw(r)),n.opacityExit=Zt(i.opacity??1,0,Pw(r))):f&&(n.opacity=Zt(i.opacity??1,l.opacity??1,r));for(let d=0;d<Kw;d++){const h=Av[d];let g=fg(i,h),y=fg(l,h);if(g===void 0&&y===void 0)continue;g||(g=0),y||(y=0),g===0||y===0||cg(g)===cg(y)?(n[h]=Math.max(Zt(ug(g),ug(y),r),0),(Dn.test(y)||Dn.test(g))&&(n[h]+="%")):n[h]=y}(i.rotate||l.rotate)&&(n.rotate=Zt(i.rotate||0,l.rotate||0,r))}function fg(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const Zw=Ev(0,.5,py),Pw=Ev(.5,.95,on);function Ev(n,i,l){return r=>r<n?0:r>i?1:l(vl(n,i,r))}function Fw(n,i,l){const r=xe(n)?n:cs(n);return r.start(ed("",r,i,l)),r.animation}function Sl(n,i,l,r={passive:!0}){return n.addEventListener(i,l,r),()=>n.removeEventListener(i,l)}const Jw=(n,i)=>n.depth-i.depth;class $w{constructor(){this.children=[],this.isDirty=!1}add(i){qf(this.children,i),this.isDirty=!0}remove(i){ro(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(Jw),this.isDirty=!1,this.children.forEach(i)}}function Ww(n,i){const l=je.now(),r=({timestamp:c})=>{const f=c-l;f>=i&&(Va(r),n(f-i))};return Yt.setup(r,!0),()=>Va(r)}function so(n){return xe(n)?n.get():n}class Iw{constructor(){this.members=[]}add(i){qf(this.members,i);for(let l=this.members.length-1;l>=0;l--){const r=this.members[l];if(r===i||r===this.lead||r===this.prevLead)continue;const c=r.instance;(!c||c.isConnected===!1)&&!r.snapshot&&(ro(this.members,r),r.unmount())}i.scheduleRender()}remove(i){if(ro(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const l=this.members[this.members.length-1];l&&this.promote(l)}}relegate(i){var l;for(let r=this.members.indexOf(i)-1;r>=0;r--){const c=this.members[r];if(c.isPresent!==!1&&((l=c.instance)==null?void 0:l.isConnected)!==!1)return this.promote(c),!0}return!1}promote(i,l){var c;const r=this.lead;if(i!==r&&(this.prevLead=r,this.lead=i,i.show(),r)){r.updateSnapshot(),i.scheduleRender();const{layoutDependency:f}=r.options,{layoutDependency:d}=i.options;(f===void 0||f!==d)&&(i.resumeFrom=r,l&&(r.preserveOpacity=!0),r.snapshot&&(i.snapshot=r.snapshot,i.snapshot.latestValues=r.animationValues||r.latestValues),(c=i.root)!=null&&c.isUpdating&&(i.isLayoutDirty=!0)),i.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(i=>{var l,r,c,f,d;(r=(l=i.options).onExitComplete)==null||r.call(l),(d=(c=i.resumingFrom)==null?void 0:(f=c.options).onExitComplete)==null||d.call(f)})}scheduleRender(){this.members.forEach(i=>i.instance&&i.scheduleRender(!1))}removeLeadSnapshot(){var i;(i=this.lead)!=null&&i.snapshot&&(this.lead.snapshot=void 0)}}const lo={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ic=["","X","Y","Z"],tT=1e3;let eT=0;function tf(n,i,l,r){const{latestValues:c}=i;c[n]&&(l[n]=c[n],i.setStaticValue(n,0),r&&(r[n]=0))}function Cv(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const l=Qy(i);if(window.MotionHasOptimisedAnimation(l,"transform")){const{layout:c,layoutId:f}=n.options;window.MotionCancelOptimisedAnimation(l,"transform",Yt,!(c||f))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&Cv(r)}function jv({attachResizeListener:n,defaultParent:i,measureScroll:l,checkIsScrollRoot:r,resetTransform:c}){return class{constructor(d={},h=i==null?void 0:i()){this.id=eT++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(iT),this.nodes.forEach(cT),this.nodes.forEach(fT),this.nodes.forEach(sT)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let g=0;g<this.path.length;g++)this.path[g].shouldResetTransform=!0;this.root===this&&(this.nodes=new $w)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Xf),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const g=this.eventHandlers.get(d);g&&g.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=rd(d)&&!aw(d),this.instance=d;const{layoutId:h,layout:g,visualElement:y}=this.options;if(y&&!y.current&&y.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(g||h)&&(this.isLayoutDirty=!0),n){let v,x=0;const S=()=>this.root.updateBlockedByResize=!1;Yt.read(()=>{x=window.innerWidth}),n(d,()=>{const E=window.innerWidth;E!==x&&(x=E,this.root.updateBlockedByResize=!0,v&&v(),v=Ww(S,250),lo.hasAnimatedSinceResize&&(lo.hasAnimatedSinceResize=!1,this.nodes.forEach(mg)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&y&&(h||g)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:x,hasRelativeLayoutChanged:S,layout:E})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const N=this.options.transition||y.getDefaultTransition()||gT,{onLayoutAnimationStart:L,onLayoutAnimationComplete:V}=y.getProps(),q=!this.targetLayout||!Tv(this.targetLayout,E),K=!x&&S;if(this.options.layoutRoot||this.resumeFrom||K||x&&(q||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const Y={...td(N,"layout"),onPlay:L,onComplete:V};(y.shouldReduceMotion||this.options.layoutRoot)&&(Y.delay=0,Y.type=!1),this.startAnimation(Y),this.setAnimationOrigin(v,K)}else x||mg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=E})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Va(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(dT),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Cv(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const x=this.path[v];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:g}=this.options;if(h===void 0&&!g)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const g=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),g&&this.nodes.forEach(rT),this.nodes.forEach(dg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(hg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(oT),this.nodes.forEach(uT),this.nodes.forEach(nT),this.nodes.forEach(aT)):this.nodes.forEach(hg),this.clearAllSnapshots();const h=je.now();be.delta=kn(0,1e3/60,h-be.timestamp),be.timestamp=h,be.isProcessing=!0,Kc.update.process(be),Kc.preRender.process(be),Kc.render.process(be),be.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,sd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(lT),this.sharedNodes.forEach(hT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Yt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Yt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Me(this.snapshot.measuredBox.x)&&!Me(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let g=0;g<this.path.length;g++)this.path[g].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=ue()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const g=r(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:g,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:g}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!wv(this.projectionDelta),g=this.getTransformTemplate(),y=g?g(this.latestValues,""):void 0,v=y!==this.prevTransformTemplateValue;d&&this.instance&&(h||oi(this.latestValues)||v)&&(c(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let g=this.removeElementScroll(h);return d&&(g=this.removeTransform(g)),yT(g),{animationId:this.root.animationId,measuredBox:h,layoutBox:g,latestValues:{},source:this.id}}measurePageBox(){var y;const{visualElement:d}=this.options;if(!d)return ue();const h=d.measureViewportBox();if(!(((y=this.scroll)==null?void 0:y.wasRoot)||this.path.some(vT))){const{scroll:v}=this.root;v&&(Mn(h.x,v.offset.x),Mn(h.y,v.offset.y))}return h}removeElementScroll(d){var g;const h=ue();if(pn(h,d),(g=this.scroll)!=null&&g.wasRoot)return h;for(let y=0;y<this.path.length;y++){const v=this.path[y],{scroll:x,options:S}=v;v!==this.root&&x&&S.layoutScroll&&(x.wasRoot&&pn(h,d),Mn(h.x,x.offset.x),Mn(h.y,x.offset.y))}return h}applyTransform(d,h=!1,g){var v,x;const y=g||ue();pn(y,d);for(let S=0;S<this.path.length;S++){const E=this.path[S];!h&&E.options.layoutScroll&&E.scroll&&E!==E.root&&(Mn(y.x,-E.scroll.offset.x),Mn(y.y,-E.scroll.offset.y)),oi(E.latestValues)&&io(y,E.latestValues,(v=E.layout)==null?void 0:v.layoutBox)}return oi(this.latestValues)&&io(y,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),y}removeTransform(d){var g;const h=ue();pn(h,d);for(let y=0;y<this.path.length;y++){const v=this.path[y];if(!oi(v.latestValues))continue;let x;v.instance&&(Nf(v.latestValues)&&v.updateSnapshot(),x=ue(),pn(x,v.measurePageBox())),ag(h,v.latestValues,(g=v.snapshot)==null?void 0:g.layoutBox,x)}return oi(this.latestValues)&&ag(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==be.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var E;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const g=!!this.resumingFrom||this!==h;if(!(d||g&&this.isSharedProjectionDirty||this.isProjectionDirty||(E=this.parent)!=null&&E.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:x}=this.options;if(!this.layout||!(v||x))return;this.resolvedRelativeTargetAt=be.timestamp;const S=this.getClosestProjectingParent();S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ue(),this.targetWithTransforms=ue()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Uw(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):pn(this.target,this.layout.layoutBox),cv(this.target,this.targetDelta)):pn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Nf(this.parent.latestValues)||uv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,g){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ue(),this.relativeTargetOrigin=ue(),po(this.relativeTargetOrigin,h,g,this.options.layoutAnchor||void 0),pn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var N;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let g=!0;if((this.isProjectionDirty||(N=this.parent)!=null&&N.isProjectionDirty)&&(g=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(g=!1),this.resolvedRelativeTargetAt===be.timestamp&&(g=!1),g)return;const{layout:y,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||v))return;pn(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,S=this.treeScale.y;mw(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=ue());const{target:E}=d;if(!E){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():($0(this.prevProjectionDelta.x,this.projectionDelta.x),$0(this.prevProjectionDelta.y,this.projectionDelta.y)),gl(this.projectionDelta,this.layoutCorrected,E,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==S||!og(this.projectionDelta.x,this.prevProjectionDelta.x)||!og(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",E))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const g=this.getStack();g&&g.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=os(),this.projectionDelta=os(),this.projectionDeltaWithTransform=os()}setAnimationOrigin(d,h=!1){const g=this.snapshot,y=g?g.latestValues:{},v={...this.latestValues},x=os();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const S=ue(),E=g?g.source:void 0,N=this.layout?this.layout.source:void 0,L=E!==N,V=this.getStack(),q=!V||V.members.length<=1,K=!!(L&&!q&&this.options.crossfade===!0&&!this.path.some(pT));this.animationProgress=0;let Y;this.mixTargetDelta=X=>{const $=X/1e3;pg(x.x,d.x,$),pg(x.y,d.y,$),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(po(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),mT(this.relativeTarget,this.relativeTargetOrigin,S,$),Y&&Yw(this.relativeTarget,Y)&&(this.isProjectionDirty=!1),Y||(Y=ue()),pn(Y,this.relativeTarget)),L&&(this.animationValues=v,Qw(v,y,this.latestValues,$,K,q)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=$},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,g,y;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(y=(g=this.resumingFrom)==null?void 0:g.currentAnimation)==null||y.stop(),this.pendingAnimation&&(Va(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Yt.update(()=>{lo.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=cs(0)),this.motionValue.jump(0,!1),this.currentAnimation=Fw(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:v=>{this.mixTargetDelta(v),d.onUpdate&&d.onUpdate(v)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(tT),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:g,layout:y,latestValues:v}=d;if(!(!h||!g||!y)){if(this!==d&&this.layout&&y&&Mv(this.options.animationType,this.layout.layoutBox,y.layoutBox)){g=this.target||ue();const x=Me(this.layout.layoutBox.x);g.x.min=d.target.x.min,g.x.max=g.x.min+x;const S=Me(this.layout.layoutBox.y);g.y.min=d.target.y.min,g.y.max=g.y.min+S}pn(h,g),io(h,v),gl(this.projectionDeltaWithTransform,this.layoutCorrected,h,v)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new Iw),this.sharedNodes.get(d).add(h);const y=h.options.initialPromotionConfig;h.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:g}={}){const y=this.getStack();y&&y.promote(this,g),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:g}=d;if((g.z||g.rotate||g.rotateX||g.rotateY||g.rotateZ||g.skewX||g.skewY)&&(h=!0),!h)return;const y={};g.z&&tf("z",d,y,this.animationValues);for(let v=0;v<Ic.length;v++)tf(`rotate${Ic[v]}`,d,y,this.animationValues),tf(`skew${Ic[v]}`,d,y,this.animationValues);d.render();for(const v in y)d.setStaticValue(v,y[v]),this.animationValues&&(this.animationValues[v]=y[v]);d.scheduleRender()}applyProjectionStyles(d,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const g=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=so(h==null?void 0:h.pointerEvents)||"",d.transform=g?g(this.latestValues,""):"none";return}const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=so(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!oi(this.latestValues)&&(d.transform=g?g({},""):"none",this.hasProjected=!1);return}d.visibility="";const v=y.animationValues||y.latestValues;this.applyTransformsToTarget();let x=Xw(this.projectionDeltaWithTransform,this.treeScale,v);g&&(x=g(v,x)),d.transform=x;const{x:S,y:E}=this.projectionDelta;d.transformOrigin=`${S.origin*100}% ${E.origin*100}% 0`,y.animationValues?d.opacity=y===this?v.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:d.opacity=y===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const N in kf){if(v[N]===void 0)continue;const{correct:L,applyTo:V,isCSSVariable:q}=kf[N],K=x==="none"?v[N]:L(v[N],y);if(V){const Y=V.length;for(let X=0;X<Y;X++)d[V[X]]=K}else q?this.options.visualElement.renderState.vars[N]=K:d[N]=K}this.options.layoutId&&(d.pointerEvents=y===this?so(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(dg),this.root.sharedNodes.clear()}}}function nT(n){n.updateLayout()}function aT(n){var l;const i=((l=n.resumeFrom)==null?void 0:l.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&i&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:c}=n.layout,{animationType:f}=n.options,d=i.source!==n.layout.source;if(f==="size")jn(x=>{const S=d?i.measuredBox[x]:i.layoutBox[x],E=Me(S);S.min=r[x].min,S.max=S.min+E});else if(f==="x"||f==="y"){const x=f==="x"?"y":"x";Rf(d?i.measuredBox[x]:i.layoutBox[x],r[x])}else Mv(f,i.layoutBox,r)&&jn(x=>{const S=d?i.measuredBox[x]:i.layoutBox[x],E=Me(r[x]);S.max=S.min+E,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[x].max=n.relativeTarget[x].min+E)});const h=os();gl(h,r,i.layoutBox);const g=os();d?gl(g,n.applyTransform(c,!0),i.measuredBox):gl(g,r,i.layoutBox);const y=!wv(h);let v=!1;if(!n.resumeFrom){const x=n.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:S,layout:E}=x;if(S&&E){const N=n.options.layoutAnchor||void 0,L=ue();po(L,i.layoutBox,S.layoutBox,N);const V=ue();po(V,r,E.layoutBox,N),Tv(L,V)||(v=!0),x.options.layoutRoot&&(n.relativeTarget=V,n.relativeTargetOrigin=L,n.relativeParent=x)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:i,delta:g,layoutDelta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:v})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function iT(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function sT(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function lT(n){n.clearSnapshot()}function dg(n){n.clearMeasurements()}function rT(n){n.isLayoutDirty=!0,n.updateLayout()}function hg(n){n.isLayoutDirty=!1}function oT(n){n.isAnimationBlocked&&n.layout&&!n.isLayoutDirty&&(n.snapshot=n.layout,n.isLayoutDirty=!0)}function uT(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function mg(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function cT(n){n.resolveTargetDelta()}function fT(n){n.calcProjection()}function dT(n){n.resetSkewAndRotation()}function hT(n){n.removeLeadSnapshot()}function pg(n,i,l){n.translate=Zt(i.translate,0,l),n.scale=Zt(i.scale,1,l),n.origin=i.origin,n.originPoint=i.originPoint}function gg(n,i,l,r){n.min=Zt(i.min,l.min,r),n.max=Zt(i.max,l.max,r)}function mT(n,i,l,r){gg(n.x,i.x,l.x,r),gg(n.y,i.y,l.y,r)}function pT(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const gT={duration:.45,ease:[.4,0,.1,1]},yg=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),vg=yg("applewebkit/")&&!yg("chrome/")?Math.round:on;function bg(n){n.min=vg(n.min),n.max=vg(n.max)}function yT(n){bg(n.x),bg(n.y)}function Mv(n,i,l){return n==="position"||n==="preserve-aspect"&&!Bw(rg(i),rg(l),.2)}function vT(n){var i;return n!==n.root&&((i=n.scroll)==null?void 0:i.wasRoot)}const bT=jv({attachResizeListener:(n,i)=>Sl(n,"resize",i),measureScroll:()=>{var n,i;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((i=document.body)==null?void 0:i.scrollTop)||0}},checkIsScrollRoot:()=>!0}),ef={current:void 0},Nv=jv({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!ef.current){const n=new bT({});n.mount(window),n.setOptions({layoutScroll:!0}),ef.current=n}return ef.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),dd=H.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function xg(n,i){if(typeof n=="function")return n(i);n!=null&&(n.current=i)}function xT(...n){return i=>{let l=!1;const r=n.map(c=>{const f=xg(c,i);return!l&&typeof f=="function"&&(l=!0),f});if(l)return()=>{for(let c=0;c<r.length;c++){const f=r[c];typeof f=="function"?f():xg(n[c],null)}}}}function ST(...n){return H.useCallback(xT(...n),n)}class wT extends H.Component{getSnapshotBeforeUpdate(i){const l=this.props.childRef.current;if(to(l)&&i.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=l.offsetParent,c=to(r)&&r.offsetWidth||0,f=to(r)&&r.offsetHeight||0,d=getComputedStyle(l),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=l.offsetTop,h.left=l.offsetLeft,h.right=c-h.width-h.left,h.bottom=f-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function TT({children:n,isPresent:i,anchorX:l,anchorY:r,root:c,pop:f}){var S;const d=H.useId(),h=H.useRef(null),g=H.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:y}=H.useContext(dd),v=((S=n.props)==null?void 0:S.ref)??(n==null?void 0:n.ref),x=ST(h,v);return H.useInsertionEffect(()=>{const{width:E,height:N,top:L,left:V,right:q,bottom:K}=g.current;if(i||f===!1||!h.current||!E||!N)return;const Y=l==="left"?`left: ${V}`:`right: ${q}`,X=r==="bottom"?`bottom: ${K}`:`top: ${L}`;h.current.dataset.motionPopId=d;const $=document.createElement("style");y&&($.nonce=y);const dt=c??document.head;return dt.appendChild($),$.sheet&&$.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${E}px !important;
            height: ${N}px !important;
            ${Y}px !important;
            ${X}px !important;
          }
        `),()=>{var I;(I=h.current)==null||I.removeAttribute("data-motion-pop-id"),dt.contains($)&&dt.removeChild($)}},[i]),p.jsx(wT,{isPresent:i,childRef:h,sizeRef:g,pop:f,children:f===!1?n:H.cloneElement(n,{ref:x})})}const AT=({children:n,initial:i,isPresent:l,onExitComplete:r,custom:c,presenceAffectsLayout:f,mode:d,anchorX:h,anchorY:g,root:y})=>{const v=Gf(ET),x=H.useId();let S=!0,E=H.useMemo(()=>(S=!1,{id:x,initial:i,isPresent:l,custom:c,onExitComplete:N=>{v.set(N,!0);for(const L of v.values())if(!L)return;r&&r()},register:N=>(v.set(N,!1),()=>v.delete(N))}),[l,v,r]);return f&&S&&(E={...E}),H.useMemo(()=>{v.forEach((N,L)=>v.set(L,!1))},[l]),H.useEffect(()=>{!l&&!v.size&&r&&r()},[l]),n=p.jsx(TT,{pop:d==="popLayout",isPresent:l,anchorX:h,anchorY:g,root:y,children:n}),p.jsx(So.Provider,{value:E,children:n})};function ET(){return new Map}function Dv(n=!0){const i=H.useContext(So);if(i===null)return[!0,null];const{isPresent:l,onExitComplete:r,register:c}=i,f=H.useId();H.useEffect(()=>{if(n)return c(f)},[n]);const d=H.useCallback(()=>n&&r&&r(f),[f,r,n]);return!l&&r?[!1,d]:[!0]}const Qr=n=>n.key||"";function Sg(n){const i=[];return H.Children.forEach(n,l=>{H.isValidElement(l)&&i.push(l)}),i}const Of=({children:n,custom:i,initial:l=!0,onExitComplete:r,presenceAffectsLayout:c=!0,mode:f="sync",propagate:d=!1,anchorX:h="left",anchorY:g="top",root:y})=>{const[v,x]=Dv(d),S=H.useMemo(()=>Sg(n),[n]),E=d&&!v?[]:S.map(Qr),N=H.useRef(!0),L=H.useRef(S),V=Gf(()=>new Map),q=H.useRef(new Set),[K,Y]=H.useState(S),[X,$]=H.useState(S);ay(()=>{N.current=!1,L.current=S;for(let M=0;M<X.length;M++){const P=Qr(X[M]);E.includes(P)?(V.delete(P),q.current.delete(P)):V.get(P)!==!0&&V.set(P,!1)}},[X,E.length,E.join("-")]);const dt=[];if(S!==K){let M=[...S];for(let P=0;P<X.length;P++){const Q=X[P],mt=Qr(Q);E.includes(mt)||(M.splice(P,0,Q),dt.push(Q))}return f==="wait"&&dt.length&&(M=dt),$(Sg(M)),Y(S),null}const{forceRender:I}=H.useContext(Hf);return p.jsx(p.Fragment,{children:X.map(M=>{const P=Qr(M),Q=d&&!v?!1:S===X||E.includes(P),mt=()=>{if(q.current.has(P))return;if(V.has(P))q.current.add(P),V.set(P,!0);else return;let gt=!0;V.forEach(Dt=>{Dt||(gt=!1)}),gt&&(I==null||I(),$(L.current),d&&(x==null||x()),r&&r())};return p.jsx(AT,{isPresent:Q,initial:!N.current||l?void 0:!1,custom:i,presenceAffectsLayout:c,mode:f,root:y,onExitComplete:Q?void 0:mt,anchorX:h,anchorY:g,children:M},P)})})},kv=H.createContext({strict:!1}),wg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Tg=!1;function CT(){if(Tg)return;const n={};for(const i in wg)n[i]={isEnabled:l=>wg[i].some(r=>!!l[r])};lv(n),Tg=!0}function Rv(){return CT(),cw()}function jT(n){const i=Rv();for(const l in n)i[l]={...i[l],...n[l]};lv(i)}const MT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function go(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||MT.has(n)}let Ov=n=>!go(n);function NT(n){typeof n=="function"&&(Ov=i=>i.startsWith("on")?!go(i):n(i))}try{NT(require("@emotion/is-prop-valid").default)}catch{}function DT(n,i,l){const r={};for(const c in n)c==="values"&&typeof n.values=="object"||xe(n[c])||(Ov(c)||l===!0&&go(c)||!i&&!go(c)||n.draggable&&c.startsWith("onDrag"))&&(r[c]=n[c]);return r}const Eo=H.createContext({});function kT(n,i){if(Ao(n)){const{initial:l,animate:r}=n;return{initial:l===!1||xl(l)?l:void 0,animate:xl(r)?r:void 0}}return n.inherit!==!1?i:{}}function RT(n){const{initial:i,animate:l}=kT(n,H.useContext(Eo));return H.useMemo(()=>({initial:i,animate:l}),[Ag(i),Ag(l)])}function Ag(n){return Array.isArray(n)?n.join(" "):n}const hd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function zv(n,i,l){for(const r in i)!xe(i[r])&&!hv(r,l)&&(n[r]=i[r])}function OT({transformTemplate:n},i){return H.useMemo(()=>{const l=hd();return cd(l,i,n),Object.assign({},l.vars,l.style)},[i])}function zT(n,i){const l=n.style||{},r={};return zv(r,l,n),Object.assign(r,OT(n,i)),r}function LT(n,i){const l={},r=zT(n,i);return n.drag&&n.dragListener!==!1&&(l.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(l.tabIndex=0),l.style=r,l}const Lv=()=>({...hd(),attrs:{}});function VT(n,i,l,r){const c=H.useMemo(()=>{const f=Lv();return mv(f,i,gv(r),n.transformTemplate,n.style),{...f.attrs,style:{...f.style}}},[i]);if(n.style){const f={};zv(f,n.style,n),c.style={...f,...c.style}}return c}const _T=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function md(n){return typeof n!="string"||n.includes("-")?!1:!!(_T.indexOf(n)>-1||/[A-Z]/u.test(n))}function BT(n,i,l,{latestValues:r},c,f=!1,d){const g=(d??md(n)?VT:LT)(i,r,c,n),y=DT(i,typeof n=="string",f),v=n!==H.Fragment?{...y,...g,ref:l}:{},{children:x}=i,S=H.useMemo(()=>xe(x)?x.get():x,[x]);return H.createElement(n,{...v,children:S})}function UT({scrapeMotionValuesFromProps:n,createRenderState:i},l,r,c){return{latestValues:HT(l,r,c,n),renderState:i()}}function HT(n,i,l,r){const c={},f=r(n,{});for(const S in f)c[S]=so(f[S]);let{initial:d,animate:h}=n;const g=Ao(n),y=iv(n);i&&y&&!g&&n.inherit!==!1&&(d===void 0&&(d=i.initial),h===void 0&&(h=i.animate));let v=l?l.initial===!1:!1;v=v||d===!1;const x=v?h:d;if(x&&typeof x!="boolean"&&!To(x)){const S=Array.isArray(x)?x:[x];for(let E=0;E<S.length;E++){const N=nd(n,S[E]);if(N){const{transitionEnd:L,transition:V,...q}=N;for(const K in q){let Y=q[K];if(Array.isArray(Y)){const X=v?Y.length-1:0;Y=Y[X]}Y!==null&&(c[K]=Y)}for(const K in L)c[K]=L[K]}}}return c}const Vv=n=>(i,l)=>{const r=H.useContext(Eo),c=H.useContext(So),f=()=>UT(n,i,r,c);return l?f():Gf(f)},GT=Vv({scrapeMotionValuesFromProps:fd,createRenderState:hd}),qT=Vv({scrapeMotionValuesFromProps:yv,createRenderState:Lv}),YT=Symbol.for("motionComponentSymbol");function XT(n,i,l){const r=H.useRef(l);H.useInsertionEffect(()=>{r.current=l});const c=H.useRef(null);return H.useCallback(f=>{var h;f&&((h=n.onMount)==null||h.call(n,f));const d=r.current;if(typeof d=="function")if(f){const g=d(f);typeof g=="function"&&(c.current=g)}else c.current?(c.current(),c.current=null):d(f);else d&&(d.current=f);i&&(f?i.mount(f):i.unmount())},[i])}const _v=H.createContext({});function ss(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function KT(n,i,l,r,c,f){var Y,X;const{visualElement:d}=H.useContext(Eo),h=H.useContext(kv),g=H.useContext(So),y=H.useContext(dd),v=y.reducedMotion,x=y.skipAnimations,S=H.useRef(null),E=H.useRef(!1);r=r||h.renderer,!S.current&&r&&(S.current=r(n,{visualState:i,parent:d,props:l,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:v,skipAnimations:x,isSVG:f}),E.current&&S.current&&(S.current.manuallyAnimateOnMount=!0));const N=S.current,L=H.useContext(_v);N&&!N.projection&&c&&(N.type==="html"||N.type==="svg")&&QT(S.current,l,c,L);const V=H.useRef(!1);H.useInsertionEffect(()=>{N&&V.current&&N.update(l,g)});const q=l[Ky],K=H.useRef(!!q&&typeof window<"u"&&!((Y=window.MotionHandoffIsComplete)!=null&&Y.call(window,q))&&((X=window.MotionHasOptimisedAnimation)==null?void 0:X.call(window,q)));return ay(()=>{E.current=!0,N&&(V.current=!0,window.MotionIsMounted=!0,N.updateFeatures(),N.scheduleRenderMicrotask(),K.current&&N.animationState&&N.animationState.animateChanges())}),H.useEffect(()=>{N&&(!K.current&&N.animationState&&N.animationState.animateChanges(),K.current&&(queueMicrotask(()=>{var $;($=window.MotionHandoffMarkAsComplete)==null||$.call(window,q)}),K.current=!1),N.enteringChildren=void 0)}),N}function QT(n,i,l,r){const{layoutId:c,layout:f,drag:d,dragConstraints:h,layoutScroll:g,layoutRoot:y,layoutAnchor:v,layoutCrossfade:x}=i;n.projection=new l(n.latestValues,i["data-framer-portal-id"]?void 0:Bv(n.parent)),n.projection.setOptions({layoutId:c,layout:f,alwaysMeasureLayout:!!d||h&&ss(h),visualElement:n,animationType:typeof f=="string"?f:"both",initialPromotionConfig:r,crossfade:x,layoutScroll:g,layoutRoot:y,layoutAnchor:v})}function Bv(n){if(n)return n.options.allowProjection!==!1?n.projection:Bv(n.parent)}function nf(n,{forwardMotionProps:i=!1,type:l}={},r,c){r&&jT(r);const f=l?l==="svg":md(n),d=f?qT:GT;function h(y,v){let x;const S={...H.useContext(dd),...y,layoutId:ZT(y)},{isStatic:E}=S,N=RT(y),L=d(y,E);if(!E&&typeof window<"u"){PT();const V=FT(S);x=V.MeasureLayout,N.visualElement=KT(n,L,S,c,V.ProjectionNode,f)}return p.jsxs(Eo.Provider,{value:N,children:[x&&N.visualElement?p.jsx(x,{visualElement:N.visualElement,...S}):null,BT(n,y,XT(L,N.visualElement,v),L,E,i,f)]})}h.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const g=H.forwardRef(h);return g[YT]=n,g}function ZT({layoutId:n}){const i=H.useContext(Hf).id;return i&&n!==void 0?i+"-"+n:n}function PT(n,i){H.useContext(kv).strict}function FT(n){const i=Rv(),{drag:l,layout:r}=i;if(!l&&!r)return{};const c={...l,...r};return{MeasureLayout:l!=null&&l.isEnabled(n)||r!=null&&r.isEnabled(n)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function JT(n,i){if(typeof Proxy>"u")return nf;const l=new Map,r=(f,d)=>nf(f,d,n,i),c=(f,d)=>r(f,d);return new Proxy(c,{get:(f,d)=>d==="create"?r:(l.has(d)||l.set(d,nf(d,void 0,n,i)),l.get(d))})}const $T=(n,i)=>i.isSVG??md(n)?new jw(i):new Sw(i,{allowProjection:n!==H.Fragment});class WT extends _a{constructor(i){super(i),i.animationState||(i.animationState=Rw(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();To(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:l}=this.node.prevProps||{};i!==l&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)==null||i.call(this)}}let IT=0;class tA extends _a{constructor(){super(...arguments),this.id=IT++,this.isExitComplete=!1}update(){var f;if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:l}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===r)return;if(i&&r===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const g=hi(this.node,d,h);if(g){const{transition:y,transitionEnd:v,...x}=g;for(const S in x)(f=this.node.getValue(S))==null||f.jump(x[S])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!i);l&&!i&&c.then(()=>{this.isExitComplete=!0,l(this.id)})}mount(){const{register:i,onExitComplete:l}=this.node.presenceContext||{};l&&l(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const eA={animation:{Feature:WT},exit:{Feature:tA}};function Cl(n){return{point:{x:n.pageX,y:n.pageY}}}const nA=n=>i=>ld(i)&&n(i,Cl(i));function yl(n,i,l,r){return Sl(n,i,nA(l),r)}const Uv=({current:n})=>n?n.ownerDocument.defaultView:null,Eg=(n,i)=>Math.abs(n-i);function aA(n,i){const l=Eg(n.x,i.x),r=Eg(n.y,i.y);return Math.sqrt(l**2+r**2)}const Cg=new Set(["auto","scroll"]);class Hv{constructor(i,l,{transformPagePoint:r,contextWindow:c=window,dragSnapToOrigin:f=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=E=>{this.handleScroll(E.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Zr(this.lastRawMoveEventInfo,this.transformPagePoint));const E=af(this.lastMoveEventInfo,this.history),N=this.startEvent!==null,L=aA(E.offset,{x:0,y:0})>=this.distanceThreshold;if(!N&&!L)return;const{point:V}=E,{timestamp:q}=be;this.history.push({...V,timestamp:q});const{onStart:K,onMove:Y}=this.handlers;N||(K&&K(this.lastMoveEvent,E),this.startEvent=this.lastMoveEvent),Y&&Y(this.lastMoveEvent,E)},this.handlePointerMove=(E,N)=>{this.lastMoveEvent=E,this.lastRawMoveEventInfo=N,this.lastMoveEventInfo=Zr(N,this.transformPagePoint),Yt.update(this.updatePoint,!0)},this.handlePointerUp=(E,N)=>{this.end();const{onEnd:L,onSessionEnd:V,resumeAnimation:q}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&q&&q(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const K=af(E.type==="pointercancel"?this.lastMoveEventInfo:Zr(N,this.transformPagePoint),this.history);this.startEvent&&L&&L(E,K),V&&V(E,K)},!ld(i))return;this.dragSnapToOrigin=f,this.handlers=l,this.transformPagePoint=r,this.distanceThreshold=d,this.contextWindow=c||window;const g=Cl(i),y=Zr(g,this.transformPagePoint),{point:v}=y,{timestamp:x}=be;this.history=[{...v,timestamp:x}];const{onSessionStart:S}=l;S&&S(i,af(y,this.history)),this.removeListeners=Tl(yl(this.contextWindow,"pointermove",this.handlePointerMove),yl(this.contextWindow,"pointerup",this.handlePointerUp),yl(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(i){let l=i.parentElement;for(;l;){const r=getComputedStyle(l);(Cg.has(r.overflowX)||Cg.has(r.overflowY))&&this.scrollPositions.set(l,{x:l.scrollLeft,y:l.scrollTop}),l=l.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(i){const l=this.scrollPositions.get(i);if(!l)return;const r=i===window,c=r?{x:window.scrollX,y:window.scrollY}:{x:i.scrollLeft,y:i.scrollTop},f={x:c.x-l.x,y:c.y-l.y};f.x===0&&f.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=f.x,this.lastMoveEventInfo.point.y+=f.y):this.history.length>0&&(this.history[0].x-=f.x,this.history[0].y-=f.y),this.scrollPositions.set(i,c),Yt.update(this.updatePoint,!0))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Va(this.updatePoint)}}function Zr(n,i){return i?{point:i(n.point)}:n}function jg(n,i){return{x:n.x-i.x,y:n.y-i.y}}function af({point:n},i){return{point:n,delta:jg(n,Gv(i)),offset:jg(n,iA(i)),velocity:sA(i,.1)}}function iA(n){return n[0]}function Gv(n){return n[n.length-1]}function sA(n,i){if(n.length<2)return{x:0,y:0};let l=n.length-1,r=null;const c=Gv(n);for(;l>=0&&(r=n[l],!(c.timestamp-r.timestamp>Pe(i)));)l--;if(!r)return{x:0,y:0};r===n[0]&&n.length>2&&c.timestamp-r.timestamp>Pe(i)*2&&(r=n[1]);const f=rn(c.timestamp-r.timestamp);if(f===0)return{x:0,y:0};const d={x:(c.x-r.x)/f,y:(c.y-r.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function lA(n,{min:i,max:l},r){return i!==void 0&&n<i?n=r?Zt(i,n,r.min):Math.max(n,i):l!==void 0&&n>l&&(n=r?Zt(l,n,r.max):Math.min(n,l)),n}function Mg(n,i,l){return{min:i!==void 0?n.min+i:void 0,max:l!==void 0?n.max+l-(n.max-n.min):void 0}}function rA(n,{top:i,left:l,bottom:r,right:c}){return{x:Mg(n.x,l,c),y:Mg(n.y,i,r)}}function Ng(n,i){let l=i.min-n.min,r=i.max-n.max;return i.max-i.min<n.max-n.min&&([l,r]=[r,l]),{min:l,max:r}}function oA(n,i){return{x:Ng(n.x,i.x),y:Ng(n.y,i.y)}}function uA(n,i){let l=.5;const r=Me(n),c=Me(i);return c>r?l=vl(i.min,i.max-r,n.min):r>c&&(l=vl(n.min,n.max-c,i.min)),kn(0,1,l)}function cA(n,i){const l={};return i.min!==void 0&&(l.min=i.min-n.min),i.max!==void 0&&(l.max=i.max-n.min),l}const zf=.35;function fA(n=zf){return n===!1?n=0:n===!0&&(n=zf),{x:Dg(n,"left","right"),y:Dg(n,"top","bottom")}}function Dg(n,i,l){return{min:kg(n,i),max:kg(n,l)}}function kg(n,i){return typeof n=="number"?n:n[i]||0}const dA=new WeakMap;class hA{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ue(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:l=!1,distanceThreshold:r}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const f=x=>{l&&this.snapToCursor(Cl(x).point),this.stopAnimation()},d=(x,S)=>{const{drag:E,dragPropagation:N,onDragStart:L}=this.getProps();if(E&&!N&&(this.openDragLock&&this.openDragLock(),this.openDragLock=H2(E),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),jn(q=>{let K=this.getAxisMotionValue(q).get()||0;if(Dn.test(K)){const{projection:Y}=this.visualElement;if(Y&&Y.layout){const X=Y.layout.layoutBox[q];X&&(K=Me(X)*(parseFloat(K)/100))}}this.originPoint[q]=K}),L&&Yt.update(()=>L(x,S),!1,!0),Af(this.visualElement,"transform");const{animationState:V}=this.visualElement;V&&V.setActive("whileDrag",!0)},h=(x,S)=>{this.latestPointerEvent=x,this.latestPanInfo=S;const{dragPropagation:E,dragDirectionLock:N,onDirectionLock:L,onDrag:V}=this.getProps();if(!E&&!this.openDragLock)return;const{offset:q}=S;if(N&&this.currentDirection===null){this.currentDirection=pA(q),this.currentDirection!==null&&L&&L(this.currentDirection);return}this.updateAxis("x",S.point,q),this.updateAxis("y",S.point,q),this.visualElement.render(),V&&Yt.update(()=>V(x,S),!1,!0)},g=(x,S)=>{this.latestPointerEvent=x,this.latestPanInfo=S,this.stop(x,S),this.latestPointerEvent=null,this.latestPanInfo=null},y=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:v}=this.getProps();this.panSession=new Hv(i,{onSessionStart:f,onStart:d,onMove:h,onSessionEnd:g,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:v,distanceThreshold:r,contextWindow:Uv(this.visualElement),element:this.visualElement.current})}stop(i,l){const r=i||this.latestPointerEvent,c=l||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!c||!r)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&Yt.postRender(()=>h(r,c))}cancel(){this.isDragging=!1;const{projection:i,animationState:l}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(i,l,r){const{drag:c}=this.getProps();if(!r||!Pr(i,c,this.currentDirection))return;const f=this.getAxisMotionValue(i);let d=this.originPoint[i]+r[i];this.constraints&&this.constraints[i]&&(d=lA(d,this.constraints[i],this.elastic[i])),f.set(d)}resolveConstraints(){var f;const{dragConstraints:i,dragElastic:l}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(f=this.visualElement.projection)==null?void 0:f.layout,c=this.constraints;i&&ss(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&r?this.constraints=rA(r.layoutBox,i):this.constraints=!1,this.elastic=fA(l),c!==this.constraints&&!ss(i)&&r&&this.constraints&&!this.hasMutatedConstraints&&jn(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=cA(r.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:l}=this.getProps();if(!i||!ss(i))return!1;const r=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const f=pw(r,c.root,this.visualElement.getTransformPagePoint());let d=oA(c.layout.layoutBox,f);if(l){const h=l(dw(d));this.hasMutatedConstraints=!!h,h&&(d=ov(h))}return d}startAnimation(i){const{drag:l,dragMomentum:r,dragElastic:c,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),g=this.constraints||{},y=jn(v=>{if(!Pr(v,l,this.currentDirection))return;let x=g&&g[v]||{};(d===!0||d===v)&&(x={min:0,max:0});const S=c?200:1e6,E=c?40:1e7,N={type:"inertia",velocity:r?i[v]:0,bounceStiffness:S,bounceDamping:E,timeConstant:750,restDelta:1,restSpeed:10,...f,...x};return this.startAxisValueAnimation(v,N)});return Promise.all(y).then(h)}startAxisValueAnimation(i,l){const r=this.getAxisMotionValue(i);return Af(this.visualElement,i),r.start(ed(i,r,0,l,this.visualElement,!1))}stopAnimation(){jn(i=>this.getAxisMotionValue(i).stop())}getAxisMotionValue(i){const l=`_drag${i.toUpperCase()}`,r=this.visualElement.getProps(),c=r[l];return c||this.visualElement.getValue(i,(r.initial?r.initial[i]:void 0)||0)}snapToCursor(i){jn(l=>{const{drag:r}=this.getProps();if(!Pr(l,r,this.currentDirection))return;const{projection:c}=this.visualElement,f=this.getAxisMotionValue(l);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[l],g=f.get()||0;f.set(i[l]-Zt(d,h,.5)+g)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:l}=this.getProps(),{projection:r}=this.visualElement;if(!ss(l)||!r||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};jn(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const g=h.get();c[d]=uA({min:g,max:g},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),jn(d=>{if(!Pr(d,i,null))return;const h=this.getAxisMotionValue(d),{min:g,max:y}=this.constraints[d];h.set(Zt(g,y,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;dA.set(this.visualElement,this);const i=this.visualElement.current,l=yl(i,"pointerdown",y=>{const{drag:v,dragListener:x=!0}=this.getProps(),S=y.target,E=S!==i&&Q2(S);v&&x&&!E&&this.start(y)});let r;const c=()=>{const{dragConstraints:y}=this.getProps();ss(y)&&y.current&&(this.constraints=this.resolveRefConstraints(),r||(r=mA(i,y.current,()=>this.scalePositionWithinConstraints())))},{projection:f}=this.visualElement,d=f.addEventListener("measure",c);f&&!f.layout&&(f.root&&f.root.updateScroll(),f.updateLayout()),Yt.read(c);const h=Sl(window,"resize",()=>this.scalePositionWithinConstraints()),g=f.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:v})=>{this.isDragging&&v&&(jn(x=>{const S=this.getAxisMotionValue(x);S&&(this.originPoint[x]+=y[x].translate,S.set(S.get()+y[x].translate))}),this.visualElement.render())}));return()=>{h(),l(),d(),g&&g(),r&&r()}}getProps(){const i=this.visualElement.getProps(),{drag:l=!1,dragDirectionLock:r=!1,dragPropagation:c=!1,dragConstraints:f=!1,dragElastic:d=zf,dragMomentum:h=!0}=i;return{...i,drag:l,dragDirectionLock:r,dragPropagation:c,dragConstraints:f,dragElastic:d,dragMomentum:h}}}function Rg(n){let i=!0;return()=>{if(i){i=!1;return}n()}}function mA(n,i,l){const r=U0(n,Rg(l)),c=U0(i,Rg(l));return()=>{r(),c()}}function Pr(n,i,l){return(i===!0||i===n)&&(l===null||l===n)}function pA(n,i=10){let l=null;return Math.abs(n.y)>i?l="y":Math.abs(n.x)>i&&(l="x"),l}class gA extends _a{constructor(i){super(i),this.removeGroupControls=on,this.removeListeners=on,this.controls=new hA(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||on}update(){const{dragControls:i}=this.node.getProps(),{dragControls:l}=this.node.prevProps||{};i!==l&&(this.removeGroupControls(),i&&(this.removeGroupControls=i.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const sf=n=>(i,l)=>{n&&Yt.update(()=>n(i,l),!1,!0)};class yA extends _a{constructor(){super(...arguments),this.removePointerDownListener=on}onPointerDown(i){this.session=new Hv(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Uv(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:l,onPan:r,onPanEnd:c}=this.node.getProps();return{onSessionStart:sf(i),onStart:sf(l),onMove:sf(r),onEnd:(f,d)=>{delete this.session,c&&Yt.postRender(()=>c(f,d))}}}mount(){this.removePointerDownListener=yl(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let lf=!1;class vA extends H.Component{componentDidMount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:r,layoutId:c}=this.props,{projection:f}=i;f&&(l.group&&l.group.add(f),r&&r.register&&c&&r.register(f),lf&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),lo.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:l,visualElement:r,drag:c,isPresent:f}=this.props,{projection:d}=r;return d&&(d.isPresent=f,i.layoutDependency!==l&&d.setOptions({...d.options,layoutDependency:l}),lf=!0,c||i.layoutDependency!==l||l===void 0||i.isPresent!==f?d.willUpdate():this.safeToRemove(),i.isPresent!==f&&(f?d.promote():d.relegate()||Yt.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:i,layoutAnchor:l}=this.props,{projection:r}=i;r&&(r.options.layoutAnchor=l,r.root.didUpdate(),sd.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:r}=this.props,{projection:c}=i;lf=!0,c&&(c.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(c),r&&r.deregister&&r.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function qv(n){const[i,l]=Dv(),r=H.useContext(Hf);return p.jsx(vA,{...n,layoutGroup:r,switchLayoutGroup:H.useContext(_v),isPresent:i,safeToRemove:l})}const bA={pan:{Feature:yA},drag:{Feature:gA,ProjectionNode:Nv,MeasureLayout:qv}};function Og(n,i,l){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",l==="Start");const c="onHover"+l,f=r[c];f&&Yt.postRender(()=>f(i,Cl(i)))}class xA extends _a{mount(){const{current:i}=this.node;i&&(this.unmount=q2(i,(l,r)=>(Og(this.node,r,"Start"),c=>Og(this.node,c,"End"))))}unmount(){}}class SA extends _a{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Tl(Sl(this.node.current,"focus",()=>this.onFocus()),Sl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function zg(n,i,l){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",l==="Start");const c="onTap"+(l==="End"?"":l),f=r[c];f&&Yt.postRender(()=>f(i,Cl(i)))}class wA extends _a{mount(){const{current:i}=this.node;if(!i)return;const{globalTapTarget:l,propagate:r}=this.node.props;this.unmount=P2(i,(c,f)=>(zg(this.node,f,"Start"),(d,{success:h})=>zg(this.node,d,h?"End":"Cancel")),{useGlobalTarget:l,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Lf=new WeakMap,rf=new WeakMap,TA=n=>{const i=Lf.get(n.target);i&&i(n)},AA=n=>{n.forEach(TA)};function EA({root:n,...i}){const l=n||document;rf.has(l)||rf.set(l,{});const r=rf.get(l),c=JSON.stringify(i);return r[c]||(r[c]=new IntersectionObserver(AA,{root:n,...i})),r[c]}function CA(n,i,l){const r=EA(i);return Lf.set(n,l),r.observe(n),()=>{Lf.delete(n),r.unobserve(n)}}const jA={some:0,all:1};class MA extends _a{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var g;(g=this.stopObserver)==null||g.call(this);const{viewport:i={}}=this.node.getProps(),{root:l,margin:r,amount:c="some",once:f}=i,d={root:l?l.current:void 0,rootMargin:r,threshold:typeof c=="number"?c:jA[c]},h=y=>{const{isIntersecting:v}=y;if(this.isInView===v||(this.isInView=v,f&&!v&&this.hasEnteredView))return;v&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",v);const{onViewportEnter:x,onViewportLeave:S}=this.node.getProps(),E=v?x:S;E&&E(y)};this.stopObserver=CA(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:l}=this.node;["amount","margin","root"].some(NA(i,l))&&this.startObserver()}unmount(){var i;(i=this.stopObserver)==null||i.call(this),this.hasEnteredView=!1,this.isInView=!1}}function NA({viewport:n={}},{viewport:i={}}={}){return l=>n[l]!==i[l]}const DA={inView:{Feature:MA},tap:{Feature:wA},focus:{Feature:SA},hover:{Feature:xA}},kA={layout:{ProjectionNode:Nv,MeasureLayout:qv}},RA={...eA,...DA,...bA,...kA},Nn=JT(RA,$T);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zA=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,l,r)=>r?r.toUpperCase():l.toLowerCase()),Lg=n=>{const i=zA(n);return i.charAt(0).toUpperCase()+i.slice(1)},Yv=(...n)=>n.filter((i,l,r)=>!!i&&i.trim()!==""&&r.indexOf(i)===l).join(" ").trim(),LA=n=>{for(const i in n)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var VA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=H.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:r,className:c="",children:f,iconNode:d,...h},g)=>H.createElement("svg",{ref:g,...VA,width:i,height:i,stroke:n,strokeWidth:r?Number(l)*24/Number(i):l,className:Yv("lucide",c),...!f&&!LA(h)&&{"aria-hidden":"true"},...h},[...d.map(([y,v])=>H.createElement(y,v)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=(n,i)=>{const l=H.forwardRef(({className:r,...c},f)=>H.createElement(_A,{ref:f,iconNode:i,className:Yv(`lucide-${OA(Lg(n))}`,`lucide-${n}`,r),...c}));return l.displayName=Lg(n),l};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],UA=un("arrow-right",BA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],GA=un("clock",HA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",key:"1yo7s0"}],["path",{d:"m12 9 6 6",key:"anjzzh"}],["path",{d:"m18 9-6 6",key:"1fp51s"}]],YA=un("delete",qA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["circle",{cx:"12",cy:"6",r:"1",key:"1bh7o1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["circle",{cx:"12",cy:"18",r:"1",key:"lqb9t5"}]],KA=un("divide",XA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}]],ZA=un("equal",QA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],FA=un("image",PA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M5 12h14",key:"1ays0h"}]],$A=un("minus",JA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],IA=un("plus",WA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],eE=un("rotate-ccw",tE);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aE=un("sparkles",nE);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],sE=un("trash-2",iE);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Xv=un("x",lE);function Kv(n){var i,l,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var c=n.length;for(i=0;i<c;i++)n[i]&&(l=Kv(n[i]))&&(r&&(r+=" "),r+=l)}else for(l in n)n[l]&&(r&&(r+=" "),r+=l);return r}function rE(){for(var n,i,l=0,r="",c=arguments.length;l<c;l++)(n=arguments[l])&&(i=Kv(n))&&(r&&(r+=" "),r+=i);return r}const oE=(n,i)=>{const l=new Array(n.length+i.length);for(let r=0;r<n.length;r++)l[r]=n[r];for(let r=0;r<i.length;r++)l[n.length+r]=i[r];return l},uE=(n,i)=>({classGroupId:n,validator:i}),Qv=(n=new Map,i=null,l)=>({nextPart:n,validators:i,classGroupId:l}),yo="-",Vg=[],cE="arbitrary..",fE=n=>{const i=hE(n),{conflictingClassGroups:l,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:d=>{if(d.startsWith("[")&&d.endsWith("]"))return dE(d);const h=d.split(yo),g=h[0]===""&&h.length>1?1:0;return Zv(h,g,i)},getConflictingClassGroupIds:(d,h)=>{if(h){const g=r[d],y=l[d];return g?y?oE(y,g):g:y||Vg}return l[d]||Vg}}},Zv=(n,i,l)=>{if(n.length-i===0)return l.classGroupId;const c=n[i],f=l.nextPart.get(c);if(f){const y=Zv(n,i+1,f);if(y)return y}const d=l.validators;if(d===null)return;const h=i===0?n.join(yo):n.slice(i).join(yo),g=d.length;for(let y=0;y<g;y++){const v=d[y];if(v.validator(h))return v.classGroupId}},dE=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const i=n.slice(1,-1),l=i.indexOf(":"),r=i.slice(0,l);return r?cE+r:void 0})(),hE=n=>{const{theme:i,classGroups:l}=n;return mE(l,i)},mE=(n,i)=>{const l=Qv();for(const r in n){const c=n[r];pd(c,l,r,i)}return l},pd=(n,i,l,r)=>{const c=n.length;for(let f=0;f<c;f++){const d=n[f];pE(d,i,l,r)}},pE=(n,i,l,r)=>{if(typeof n=="string"){gE(n,i,l);return}if(typeof n=="function"){yE(n,i,l,r);return}vE(n,i,l,r)},gE=(n,i,l)=>{const r=n===""?i:Pv(i,n);r.classGroupId=l},yE=(n,i,l,r)=>{if(bE(n)){pd(n(r),i,l,r);return}i.validators===null&&(i.validators=[]),i.validators.push(uE(l,n))},vE=(n,i,l,r)=>{const c=Object.entries(n),f=c.length;for(let d=0;d<f;d++){const[h,g]=c[d];pd(g,Pv(i,h),l,r)}},Pv=(n,i)=>{let l=n;const r=i.split(yo),c=r.length;for(let f=0;f<c;f++){const d=r[f];let h=l.nextPart.get(d);h||(h=Qv(),l.nextPart.set(d,h)),l=h}return l},bE=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,xE=n=>{if(n<1)return{get:()=>{},set:()=>{}};let i=0,l=Object.create(null),r=Object.create(null);const c=(f,d)=>{l[f]=d,i++,i>n&&(i=0,r=l,l=Object.create(null))};return{get(f){let d=l[f];if(d!==void 0)return d;if((d=r[f])!==void 0)return c(f,d),d},set(f,d){f in l?l[f]=d:c(f,d)}}},Vf="!",_g=":",SE=[],Bg=(n,i,l,r,c)=>({modifiers:n,hasImportantModifier:i,baseClassName:l,maybePostfixModifierPosition:r,isExternal:c}),wE=n=>{const{prefix:i,experimentalParseClassName:l}=n;let r=c=>{const f=[];let d=0,h=0,g=0,y;const v=c.length;for(let L=0;L<v;L++){const V=c[L];if(d===0&&h===0){if(V===_g){f.push(c.slice(g,L)),g=L+1;continue}if(V==="/"){y=L;continue}}V==="["?d++:V==="]"?d--:V==="("?h++:V===")"&&h--}const x=f.length===0?c:c.slice(g);let S=x,E=!1;x.endsWith(Vf)?(S=x.slice(0,-1),E=!0):x.startsWith(Vf)&&(S=x.slice(1),E=!0);const N=y&&y>g?y-g:void 0;return Bg(f,E,S,N)};if(i){const c=i+_g,f=r;r=d=>d.startsWith(c)?f(d.slice(c.length)):Bg(SE,!1,d,void 0,!0)}if(l){const c=r;r=f=>l({className:f,parseClassName:c})}return r},TE=n=>{const i=new Map;return n.orderSensitiveModifiers.forEach((l,r)=>{i.set(l,1e6+r)}),l=>{const r=[];let c=[];for(let f=0;f<l.length;f++){const d=l[f],h=d[0]==="[",g=i.has(d);h||g?(c.length>0&&(c.sort(),r.push(...c),c=[]),r.push(d)):c.push(d)}return c.length>0&&(c.sort(),r.push(...c)),r}},AE=n=>({cache:xE(n.cacheSize),parseClassName:wE(n),sortModifiers:TE(n),...fE(n)}),EE=/\s+/,CE=(n,i)=>{const{parseClassName:l,getClassGroupId:r,getConflictingClassGroupIds:c,sortModifiers:f}=i,d=[],h=n.trim().split(EE);let g="";for(let y=h.length-1;y>=0;y-=1){const v=h[y],{isExternal:x,modifiers:S,hasImportantModifier:E,baseClassName:N,maybePostfixModifierPosition:L}=l(v);if(x){g=v+(g.length>0?" "+g:g);continue}let V=!!L,q=r(V?N.substring(0,L):N);if(!q){if(!V){g=v+(g.length>0?" "+g:g);continue}if(q=r(N),!q){g=v+(g.length>0?" "+g:g);continue}V=!1}const K=S.length===0?"":S.length===1?S[0]:f(S).join(":"),Y=E?K+Vf:K,X=Y+q;if(d.indexOf(X)>-1)continue;d.push(X);const $=c(q,V);for(let dt=0;dt<$.length;++dt){const I=$[dt];d.push(Y+I)}g=v+(g.length>0?" "+g:g)}return g},jE=(...n)=>{let i=0,l,r,c="";for(;i<n.length;)(l=n[i++])&&(r=Fv(l))&&(c&&(c+=" "),c+=r);return c},Fv=n=>{if(typeof n=="string")return n;let i,l="";for(let r=0;r<n.length;r++)n[r]&&(i=Fv(n[r]))&&(l&&(l+=" "),l+=i);return l},ME=(n,...i)=>{let l,r,c,f;const d=g=>{const y=i.reduce((v,x)=>x(v),n());return l=AE(y),r=l.cache.get,c=l.cache.set,f=h,h(g)},h=g=>{const y=r(g);if(y)return y;const v=CE(g,l);return c(g,v),v};return f=d,(...g)=>f(jE(...g))},NE=[],oe=n=>{const i=l=>l[n]||NE;return i.isThemeGetter=!0,i},Jv=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,$v=/^\((?:(\w[\w-]*):)?(.+)\)$/i,DE=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,kE=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,RE=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,OE=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,zE=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,LE=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Na=n=>DE.test(n),Ct=n=>!!n&&!Number.isNaN(Number(n)),Da=n=>!!n&&Number.isInteger(Number(n)),of=n=>n.endsWith("%")&&Ct(n.slice(0,-1)),na=n=>kE.test(n),Wv=()=>!0,VE=n=>RE.test(n)&&!OE.test(n),gd=()=>!1,_E=n=>zE.test(n),BE=n=>LE.test(n),UE=n=>!st(n)&&!rt(n),HE=n=>Ba(n,eb,gd),st=n=>Jv.test(n),ri=n=>Ba(n,nb,VE),Ug=n=>Ba(n,PE,Ct),GE=n=>Ba(n,ib,Wv),qE=n=>Ba(n,ab,gd),Hg=n=>Ba(n,Iv,gd),YE=n=>Ba(n,tb,BE),Fr=n=>Ba(n,sb,_E),rt=n=>$v.test(n),fl=n=>mi(n,nb),XE=n=>mi(n,ab),Gg=n=>mi(n,Iv),KE=n=>mi(n,eb),QE=n=>mi(n,tb),Jr=n=>mi(n,sb,!0),ZE=n=>mi(n,ib,!0),Ba=(n,i,l)=>{const r=Jv.exec(n);return r?r[1]?i(r[1]):l(r[2]):!1},mi=(n,i,l=!1)=>{const r=$v.exec(n);return r?r[1]?i(r[1]):l:!1},Iv=n=>n==="position"||n==="percentage",tb=n=>n==="image"||n==="url",eb=n=>n==="length"||n==="size"||n==="bg-size",nb=n=>n==="length",PE=n=>n==="number",ab=n=>n==="family-name",ib=n=>n==="number"||n==="weight",sb=n=>n==="shadow",FE=()=>{const n=oe("color"),i=oe("font"),l=oe("text"),r=oe("font-weight"),c=oe("tracking"),f=oe("leading"),d=oe("breakpoint"),h=oe("container"),g=oe("spacing"),y=oe("radius"),v=oe("shadow"),x=oe("inset-shadow"),S=oe("text-shadow"),E=oe("drop-shadow"),N=oe("blur"),L=oe("perspective"),V=oe("aspect"),q=oe("ease"),K=oe("animate"),Y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],X=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],$=()=>[...X(),rt,st],dt=()=>["auto","hidden","clip","visible","scroll"],I=()=>["auto","contain","none"],M=()=>[rt,st,g],P=()=>[Na,"full","auto",...M()],Q=()=>[Da,"none","subgrid",rt,st],mt=()=>["auto",{span:["full",Da,rt,st]},Da,rt,st],gt=()=>[Da,"auto",rt,st],Dt=()=>["auto","min","max","fr",rt,st],Et=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],St=()=>["start","end","center","stretch","center-safe","end-safe"],O=()=>["auto",...M()],F=()=>[Na,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...M()],W=()=>[Na,"screen","full","dvw","lvw","svw","min","max","fit",...M()],vt=()=>[Na,"screen","full","lh","dvh","lvh","svh","min","max","fit",...M()],Z=()=>[n,rt,st],T=()=>[...X(),Gg,Hg,{position:[rt,st]}],B=()=>["no-repeat",{repeat:["","x","y","space","round"]}],J=()=>["auto","cover","contain",KE,HE,{size:[rt,st]}],nt=()=>[of,fl,ri],ot=()=>["","none","full",y,rt,st],ut=()=>["",Ct,fl,ri],bt=()=>["solid","dashed","dotted","double"],Wt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Tt=()=>[Ct,of,Gg,Hg],Ne=()=>["","none",N,rt,st],De=()=>["none",Ct,rt,st],ke=()=>["none",Ct,rt,st],Rn=()=>[Ct,rt,st],Se=()=>[Na,"full",...M()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[na],breakpoint:[na],color:[Wv],container:[na],"drop-shadow":[na],ease:["in","out","in-out"],font:[UE],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[na],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[na],shadow:[na],spacing:["px",Ct],text:[na],"text-shadow":[na],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Na,st,rt,V]}],container:["container"],columns:[{columns:[Ct,st,rt,h]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:$()}],overflow:[{overflow:dt()}],"overflow-x":[{"overflow-x":dt()}],"overflow-y":[{"overflow-y":dt()}],overscroll:[{overscroll:I()}],"overscroll-x":[{"overscroll-x":I()}],"overscroll-y":[{"overscroll-y":I()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:P()}],"inset-x":[{"inset-x":P()}],"inset-y":[{"inset-y":P()}],start:[{"inset-s":P(),start:P()}],end:[{"inset-e":P(),end:P()}],"inset-bs":[{"inset-bs":P()}],"inset-be":[{"inset-be":P()}],top:[{top:P()}],right:[{right:P()}],bottom:[{bottom:P()}],left:[{left:P()}],visibility:["visible","invisible","collapse"],z:[{z:[Da,"auto",rt,st]}],basis:[{basis:[Na,"full","auto",h,...M()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Ct,Na,"auto","initial","none",st]}],grow:[{grow:["",Ct,rt,st]}],shrink:[{shrink:["",Ct,rt,st]}],order:[{order:[Da,"first","last","none",rt,st]}],"grid-cols":[{"grid-cols":Q()}],"col-start-end":[{col:mt()}],"col-start":[{"col-start":gt()}],"col-end":[{"col-end":gt()}],"grid-rows":[{"grid-rows":Q()}],"row-start-end":[{row:mt()}],"row-start":[{"row-start":gt()}],"row-end":[{"row-end":gt()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Dt()}],"auto-rows":[{"auto-rows":Dt()}],gap:[{gap:M()}],"gap-x":[{"gap-x":M()}],"gap-y":[{"gap-y":M()}],"justify-content":[{justify:[...Et(),"normal"]}],"justify-items":[{"justify-items":[...St(),"normal"]}],"justify-self":[{"justify-self":["auto",...St()]}],"align-content":[{content:["normal",...Et()]}],"align-items":[{items:[...St(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...St(),{baseline:["","last"]}]}],"place-content":[{"place-content":Et()}],"place-items":[{"place-items":[...St(),"baseline"]}],"place-self":[{"place-self":["auto",...St()]}],p:[{p:M()}],px:[{px:M()}],py:[{py:M()}],ps:[{ps:M()}],pe:[{pe:M()}],pbs:[{pbs:M()}],pbe:[{pbe:M()}],pt:[{pt:M()}],pr:[{pr:M()}],pb:[{pb:M()}],pl:[{pl:M()}],m:[{m:O()}],mx:[{mx:O()}],my:[{my:O()}],ms:[{ms:O()}],me:[{me:O()}],mbs:[{mbs:O()}],mbe:[{mbe:O()}],mt:[{mt:O()}],mr:[{mr:O()}],mb:[{mb:O()}],ml:[{ml:O()}],"space-x":[{"space-x":M()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":M()}],"space-y-reverse":["space-y-reverse"],size:[{size:F()}],"inline-size":[{inline:["auto",...W()]}],"min-inline-size":[{"min-inline":["auto",...W()]}],"max-inline-size":[{"max-inline":["none",...W()]}],"block-size":[{block:["auto",...vt()]}],"min-block-size":[{"min-block":["auto",...vt()]}],"max-block-size":[{"max-block":["none",...vt()]}],w:[{w:[h,"screen",...F()]}],"min-w":[{"min-w":[h,"screen","none",...F()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[d]},...F()]}],h:[{h:["screen","lh",...F()]}],"min-h":[{"min-h":["screen","lh","none",...F()]}],"max-h":[{"max-h":["screen","lh",...F()]}],"font-size":[{text:["base",l,fl,ri]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,ZE,GE]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",of,st]}],"font-family":[{font:[XE,qE,i]}],"font-features":[{"font-features":[st]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,rt,st]}],"line-clamp":[{"line-clamp":[Ct,"none",rt,Ug]}],leading:[{leading:[f,...M()]}],"list-image":[{"list-image":["none",rt,st]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",rt,st]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:Z()}],"text-color":[{text:Z()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...bt(),"wavy"]}],"text-decoration-thickness":[{decoration:[Ct,"from-font","auto",rt,ri]}],"text-decoration-color":[{decoration:Z()}],"underline-offset":[{"underline-offset":[Ct,"auto",rt,st]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:M()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",rt,st]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",rt,st]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:T()}],"bg-repeat":[{bg:B()}],"bg-size":[{bg:J()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Da,rt,st],radial:["",rt,st],conic:[Da,rt,st]},QE,YE]}],"bg-color":[{bg:Z()}],"gradient-from-pos":[{from:nt()}],"gradient-via-pos":[{via:nt()}],"gradient-to-pos":[{to:nt()}],"gradient-from":[{from:Z()}],"gradient-via":[{via:Z()}],"gradient-to":[{to:Z()}],rounded:[{rounded:ot()}],"rounded-s":[{"rounded-s":ot()}],"rounded-e":[{"rounded-e":ot()}],"rounded-t":[{"rounded-t":ot()}],"rounded-r":[{"rounded-r":ot()}],"rounded-b":[{"rounded-b":ot()}],"rounded-l":[{"rounded-l":ot()}],"rounded-ss":[{"rounded-ss":ot()}],"rounded-se":[{"rounded-se":ot()}],"rounded-ee":[{"rounded-ee":ot()}],"rounded-es":[{"rounded-es":ot()}],"rounded-tl":[{"rounded-tl":ot()}],"rounded-tr":[{"rounded-tr":ot()}],"rounded-br":[{"rounded-br":ot()}],"rounded-bl":[{"rounded-bl":ot()}],"border-w":[{border:ut()}],"border-w-x":[{"border-x":ut()}],"border-w-y":[{"border-y":ut()}],"border-w-s":[{"border-s":ut()}],"border-w-e":[{"border-e":ut()}],"border-w-bs":[{"border-bs":ut()}],"border-w-be":[{"border-be":ut()}],"border-w-t":[{"border-t":ut()}],"border-w-r":[{"border-r":ut()}],"border-w-b":[{"border-b":ut()}],"border-w-l":[{"border-l":ut()}],"divide-x":[{"divide-x":ut()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ut()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...bt(),"hidden","none"]}],"divide-style":[{divide:[...bt(),"hidden","none"]}],"border-color":[{border:Z()}],"border-color-x":[{"border-x":Z()}],"border-color-y":[{"border-y":Z()}],"border-color-s":[{"border-s":Z()}],"border-color-e":[{"border-e":Z()}],"border-color-bs":[{"border-bs":Z()}],"border-color-be":[{"border-be":Z()}],"border-color-t":[{"border-t":Z()}],"border-color-r":[{"border-r":Z()}],"border-color-b":[{"border-b":Z()}],"border-color-l":[{"border-l":Z()}],"divide-color":[{divide:Z()}],"outline-style":[{outline:[...bt(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Ct,rt,st]}],"outline-w":[{outline:["",Ct,fl,ri]}],"outline-color":[{outline:Z()}],shadow:[{shadow:["","none",v,Jr,Fr]}],"shadow-color":[{shadow:Z()}],"inset-shadow":[{"inset-shadow":["none",x,Jr,Fr]}],"inset-shadow-color":[{"inset-shadow":Z()}],"ring-w":[{ring:ut()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:Z()}],"ring-offset-w":[{"ring-offset":[Ct,ri]}],"ring-offset-color":[{"ring-offset":Z()}],"inset-ring-w":[{"inset-ring":ut()}],"inset-ring-color":[{"inset-ring":Z()}],"text-shadow":[{"text-shadow":["none",S,Jr,Fr]}],"text-shadow-color":[{"text-shadow":Z()}],opacity:[{opacity:[Ct,rt,st]}],"mix-blend":[{"mix-blend":[...Wt(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Wt()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Ct]}],"mask-image-linear-from-pos":[{"mask-linear-from":Tt()}],"mask-image-linear-to-pos":[{"mask-linear-to":Tt()}],"mask-image-linear-from-color":[{"mask-linear-from":Z()}],"mask-image-linear-to-color":[{"mask-linear-to":Z()}],"mask-image-t-from-pos":[{"mask-t-from":Tt()}],"mask-image-t-to-pos":[{"mask-t-to":Tt()}],"mask-image-t-from-color":[{"mask-t-from":Z()}],"mask-image-t-to-color":[{"mask-t-to":Z()}],"mask-image-r-from-pos":[{"mask-r-from":Tt()}],"mask-image-r-to-pos":[{"mask-r-to":Tt()}],"mask-image-r-from-color":[{"mask-r-from":Z()}],"mask-image-r-to-color":[{"mask-r-to":Z()}],"mask-image-b-from-pos":[{"mask-b-from":Tt()}],"mask-image-b-to-pos":[{"mask-b-to":Tt()}],"mask-image-b-from-color":[{"mask-b-from":Z()}],"mask-image-b-to-color":[{"mask-b-to":Z()}],"mask-image-l-from-pos":[{"mask-l-from":Tt()}],"mask-image-l-to-pos":[{"mask-l-to":Tt()}],"mask-image-l-from-color":[{"mask-l-from":Z()}],"mask-image-l-to-color":[{"mask-l-to":Z()}],"mask-image-x-from-pos":[{"mask-x-from":Tt()}],"mask-image-x-to-pos":[{"mask-x-to":Tt()}],"mask-image-x-from-color":[{"mask-x-from":Z()}],"mask-image-x-to-color":[{"mask-x-to":Z()}],"mask-image-y-from-pos":[{"mask-y-from":Tt()}],"mask-image-y-to-pos":[{"mask-y-to":Tt()}],"mask-image-y-from-color":[{"mask-y-from":Z()}],"mask-image-y-to-color":[{"mask-y-to":Z()}],"mask-image-radial":[{"mask-radial":[rt,st]}],"mask-image-radial-from-pos":[{"mask-radial-from":Tt()}],"mask-image-radial-to-pos":[{"mask-radial-to":Tt()}],"mask-image-radial-from-color":[{"mask-radial-from":Z()}],"mask-image-radial-to-color":[{"mask-radial-to":Z()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":X()}],"mask-image-conic-pos":[{"mask-conic":[Ct]}],"mask-image-conic-from-pos":[{"mask-conic-from":Tt()}],"mask-image-conic-to-pos":[{"mask-conic-to":Tt()}],"mask-image-conic-from-color":[{"mask-conic-from":Z()}],"mask-image-conic-to-color":[{"mask-conic-to":Z()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:T()}],"mask-repeat":[{mask:B()}],"mask-size":[{mask:J()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",rt,st]}],filter:[{filter:["","none",rt,st]}],blur:[{blur:Ne()}],brightness:[{brightness:[Ct,rt,st]}],contrast:[{contrast:[Ct,rt,st]}],"drop-shadow":[{"drop-shadow":["","none",E,Jr,Fr]}],"drop-shadow-color":[{"drop-shadow":Z()}],grayscale:[{grayscale:["",Ct,rt,st]}],"hue-rotate":[{"hue-rotate":[Ct,rt,st]}],invert:[{invert:["",Ct,rt,st]}],saturate:[{saturate:[Ct,rt,st]}],sepia:[{sepia:["",Ct,rt,st]}],"backdrop-filter":[{"backdrop-filter":["","none",rt,st]}],"backdrop-blur":[{"backdrop-blur":Ne()}],"backdrop-brightness":[{"backdrop-brightness":[Ct,rt,st]}],"backdrop-contrast":[{"backdrop-contrast":[Ct,rt,st]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Ct,rt,st]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Ct,rt,st]}],"backdrop-invert":[{"backdrop-invert":["",Ct,rt,st]}],"backdrop-opacity":[{"backdrop-opacity":[Ct,rt,st]}],"backdrop-saturate":[{"backdrop-saturate":[Ct,rt,st]}],"backdrop-sepia":[{"backdrop-sepia":["",Ct,rt,st]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":M()}],"border-spacing-x":[{"border-spacing-x":M()}],"border-spacing-y":[{"border-spacing-y":M()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",rt,st]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Ct,"initial",rt,st]}],ease:[{ease:["linear","initial",q,rt,st]}],delay:[{delay:[Ct,rt,st]}],animate:[{animate:["none",K,rt,st]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[L,rt,st]}],"perspective-origin":[{"perspective-origin":$()}],rotate:[{rotate:De()}],"rotate-x":[{"rotate-x":De()}],"rotate-y":[{"rotate-y":De()}],"rotate-z":[{"rotate-z":De()}],scale:[{scale:ke()}],"scale-x":[{"scale-x":ke()}],"scale-y":[{"scale-y":ke()}],"scale-z":[{"scale-z":ke()}],"scale-3d":["scale-3d"],skew:[{skew:Rn()}],"skew-x":[{"skew-x":Rn()}],"skew-y":[{"skew-y":Rn()}],transform:[{transform:[rt,st,"","none","gpu","cpu"]}],"transform-origin":[{origin:$()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Se()}],"translate-x":[{"translate-x":Se()}],"translate-y":[{"translate-y":Se()}],"translate-z":[{"translate-z":Se()}],"translate-none":["translate-none"],accent:[{accent:Z()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:Z()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",rt,st]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":M()}],"scroll-mx":[{"scroll-mx":M()}],"scroll-my":[{"scroll-my":M()}],"scroll-ms":[{"scroll-ms":M()}],"scroll-me":[{"scroll-me":M()}],"scroll-mbs":[{"scroll-mbs":M()}],"scroll-mbe":[{"scroll-mbe":M()}],"scroll-mt":[{"scroll-mt":M()}],"scroll-mr":[{"scroll-mr":M()}],"scroll-mb":[{"scroll-mb":M()}],"scroll-ml":[{"scroll-ml":M()}],"scroll-p":[{"scroll-p":M()}],"scroll-px":[{"scroll-px":M()}],"scroll-py":[{"scroll-py":M()}],"scroll-ps":[{"scroll-ps":M()}],"scroll-pe":[{"scroll-pe":M()}],"scroll-pbs":[{"scroll-pbs":M()}],"scroll-pbe":[{"scroll-pbe":M()}],"scroll-pt":[{"scroll-pt":M()}],"scroll-pr":[{"scroll-pr":M()}],"scroll-pb":[{"scroll-pb":M()}],"scroll-pl":[{"scroll-pl":M()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",rt,st]}],fill:[{fill:["none",...Z()]}],"stroke-w":[{stroke:[Ct,fl,ri,Ug]}],stroke:[{stroke:["none",...Z()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},JE=ME(FE);function _f(...n){return JE(rE(n))}const ui={DEFAULT_APP:"app2",app1:{name:"AluCraft",description:"Professional calculator for Thai fabrication measurements and glass specs.",icon:aE},app2:{name:"Inch Calculator",description:"Specialized calculator for base-8 point math operations.",icon:FA}};function $E({onSelect:n}){return p.jsxs("div",{className:"min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6 font-sans pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]",children:[p.jsxs(Nn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center mb-12",children:[p.jsx("h1",{className:"text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent",children:"AI Multi-Service Hub"}),p.jsx("p",{className:"text-gray-400 text-lg max-w-md mx-auto",children:"Choose a service to get started. You can switch between them anytime."})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl",children:[p.jsx(qg,{title:ui.app1.name,description:ui.app1.description,icon:p.jsx(ui.app1.icon,{className:"w-8 h-8 text-blue-400"}),onClick:()=>n("app1"),delay:.1}),p.jsx(qg,{title:ui.app2.name,description:ui.app2.description,icon:p.jsx(ui.app2.icon,{className:"w-8 h-8 text-purple-400"}),onClick:()=>n("app2"),delay:.2})]}),p.jsx(Nn.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},className:"mt-16 text-xs text-gray-600 uppercase tracking-widest font-mono",children:"Powered by Google AI Studio"})]})}function qg({title:n,description:i,icon:l,onClick:r,delay:c}){return p.jsxs(Nn.button,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{delay:c},onClick:r,className:_f("group relative flex flex-col items-start p-8 rounded-2xl bg-[#141414] border border-white/10 text-left transition-all hover:border-white/20 hover:bg-[#1a1a1a]","focus:outline-none focus:ring-2 focus:ring-blue-500/50"),children:[p.jsx("div",{className:"mb-6 p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors",children:l}),p.jsx("h3",{className:"text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors",children:n}),p.jsx("p",{className:"text-gray-400 text-sm leading-relaxed mb-6",children:i}),p.jsxs("div",{className:"mt-auto flex items-center text-sm font-medium text-blue-400 group-hover:translate-x-1 transition-transform",children:["Launch Service ",p.jsx(UA,{className:"ml-2 w-4 h-4"})]})]})}
function computeBillingGuide(results){
  if(!results||!Array.isArray(results)||results.length===0){
    return{
      nonFanlightCount:0,
      fanlightCount:0,
      itemsBySize:[],
      fanlightItemsBySize:[],
      fanlightSqFt:0,
      totalWithoutFanlightSqFt:0,
      totalWithFanlightSqFt:0
    };
  }
  const getBillingFoot=(rawVal,isInch)=>{
    if(!rawVal||rawVal<=0)return 0;
    const feet=isInch?(rawVal/12.0):(rawVal/30.48);
    if(feet<=1.0001)return 1.0;
    if(feet<=2.0001)return 2.0;
    if(feet<=3.0001)return 3.0;
    return Math.ceil(Math.round(feet*1000)/1000*2)/2;
  };
  const getFanlightBillingFoot=(rawVal,isInch)=>{
    if(!rawVal||rawVal<=0)return 0;
    const feet=isInch?(rawVal/12.0):(rawVal/30.48);
    if(feet<=1)return 1.0;
    if(feet<=1.5)return 1.5;
    if(feet<=2)return 2.0;
    if(feet<=2.5)return 2.5;
    if(feet<=3)return 3.0;
    return Math.ceil(Math.round(feet*1000)/1000*2)/2;
  };
  const sizeMap={},fanlightSizeMap={};
  let nonFanlightCount=0,fanlightCount=0,fanlightSqFt=0,totalWithoutFanlightSqFt=0;
  results.forEach(item=>{
    const isFL=!!item.isSmallFrame;
    const isInch=!!item.isInchMode;
    const hRaw=parseFloat(item.rawHeight||item.outerSide||item.height||0);
    const l1Raw=parseFloat(item.rawLength1||item.outerTop||item.length1||0);
    const l2Raw=parseFloat(item.rawLength2||item.outerBottom||item.length2||0);
    const lRaw=Math.max(l1Raw,l2Raw);
    const bH=isFL?getFanlightBillingFoot(hRaw,isInch):getBillingFoot(hRaw,isInch);
    const bL=isFL?getFanlightBillingFoot(lRaw,isInch):getBillingFoot(lRaw,isInch);
    const windowSqFt=Math.round((bH*bL)*100)/100;
    if(isFL){
      fanlightCount++;
      fanlightSqFt+=windowSqFt;
      const key=`${bH} x ${bL}`;
      if(!fanlightSizeMap[key])fanlightSizeMap[key]={bH,bL,count:0,totalSqFt:0};
      fanlightSizeMap[key].count++;
      fanlightSizeMap[key].totalSqFt+=windowSqFt;
    }else{
      nonFanlightCount++;
      totalWithoutFanlightSqFt+=windowSqFt;
      const key=`${bH} x ${bL}`;
      if(!sizeMap[key]){
        sizeMap[key]={
          bH,
          bL,
          count:0,
          totalSqFt:0
        };
      }
      sizeMap[key].count++;
      sizeMap[key].totalSqFt+=windowSqFt;
    }
  });
  const itemsBySize=Object.values(sizeMap).map(sz=>({
    ...sz,
    unitSqFt:Math.round((sz.bH*sz.bL)*100)/100,
    totalSqFt:Math.round((sz.bH*sz.bL*sz.count)*100)/100
  }));
  const fanlightItemsBySize=Object.values(fanlightSizeMap).map(sz=>({
    ...sz,
    unitSqFt:Math.round((sz.bH*sz.bL)*100)/100,
    totalSqFt:Math.round((sz.bH*sz.bL*sz.count)*100)/100
  })).sort((a,b)=>a.unitSqFt-b.unitSqFt||a.bH-b.bH||a.bL-b.bL);
  const totalWithFanlightSqFt=totalWithoutFanlightSqFt+fanlightSqFt;
  let totalPerimeterRunningFt=0;
  (results||[]).forEach(item=>{
    const isInch=!!item.isInchMode;
    const hRaw=parseFloat(item.rawHeight||item.outerSide||item.height||0)||0;
    const l1Raw=parseFloat(item.rawLength1||item.outerTop||item.length1||0)||0;
    const l2Raw=parseFloat(item.rawLength2||item.outerBottom||item.length2||0)||0;
    const lRaw=Math.max(l1Raw,l2Raw);
    const inH=isInch?hRaw:(hRaw/2.54);
    const inL=isInch?lRaw:(lRaw/2.54);
    totalPerimeterRunningFt+=((inH+inL)*2)/12;
  });
  return{
    nonFanlightCount,
    fanlightCount,
    itemsBySize,
    fanlightItemsBySize,
    fanlightSqFt:Math.round(fanlightSqFt*100)/100,
    totalWithoutFanlightSqFt:Math.round(totalWithoutFanlightSqFt*100)/100,
    totalWithFanlightSqFt:Math.round(totalWithFanlightSqFt*100)/100,
    totalPerimeterRunningFt:Math.round(totalPerimeterRunningFt*100)/100
  };
}

function formatSqFt(val){
  if(val==null||isNaN(val))return"0";
  const num=Math.round(Number(val)*100)/100;
  return Number.isInteger(num)?num.toString():num.toFixed(2).replace(/\.?0+$/,"");
}

function readThaiBillingRecords(){
  try{
    let raw=localStorage.getItem("thai_billing_records")||"";
    if((!raw||raw==="{}")&&window.AndroidBridge&&typeof window.AndroidBridge.getAppData==="function"){
      raw=window.AndroidBridge.getAppData("thai_billing_records")||"";
      if(raw)localStorage.setItem("thai_billing_records",raw);
    }
    const parsed=JSON.parse(raw||"{}");
    if(Array.isArray(parsed))return Object.fromEntries(parsed.filter(x=>x&&x.jobId!=null).map(x=>[String(x.jobId),x]));
    return parsed&&typeof parsed==="object"?parsed:{};
  }catch(e){return{};}
}

function calculateWorkBill(guide,record){
  if(!record)return null;
  const squareFeetRate=Number.parseFloat(record.squareFeetRate)||0;
  const fanlightRate=Number.parseFloat(record.fanlightRate)||0;
  const hasSquareFeetRate=String(record.squareFeetRate??"").trim()!=="";
  const hasFanlightRate=String(record.fanlightRate??"").trim()!=="";
  const workSquareFeet=guide.totalWithoutFanlightSqFt||0;
  const fanlightCount=guide.fanlightCount||0;
  const totalWorkAmount=Math.round(workSquareFeet*squareFeetRate*100)/100;
  const totalFanlightAmount=Math.round(fanlightCount*fanlightRate*100)/100;
  return{
    squareFeetRate,fanlightRate,hasSquareFeetRate,hasFanlightRate,
    workSquareFeet,fanlightCount,totalWorkAmount,totalFanlightAmount,
    finalAmount:Math.round((totalWorkAmount+totalFanlightAmount)*100)/100
  };
}

function readPageHiddenEntries(key){try{let raw=localStorage.getItem(key)||"";if(!raw&&window.AndroidBridge&&typeof window.AndroidBridge.getAppData==="function"){raw=window.AndroidBridge.getAppData(key)||"";if(raw)localStorage.setItem(key,raw);}const value=JSON.parse(raw||"[]");return Array.isArray(value)?value.map(String):[];}catch(e){return[];}}
function persistPageHiddenEntries(key,entries){try{const json=JSON.stringify(Array.from(new Set(entries.map(String))));localStorage.setItem(key,json);if(window.AndroidBridge&&typeof window.AndroidBridge.saveAppData==="function")window.AndroidBridge.saveAppData(key,json);return true;}catch(e){console.error("Could not save page-only hidden entries",e);return false;}}
function customerPageKey(customer){return String(customer&& (customer.id||customer.name)||"").trim().toLowerCase();}

function uppercaseMeridiem(value){return String(value??"").replace(/\b(am|pm)\b/gi,period=>period.toUpperCase());}
function formatDateTime(date,locale,options){return uppercaseMeridiem(date.toLocaleString(locale,options));}
function formatClockTime(date,locale,options){return uppercaseMeridiem(date.toLocaleTimeString(locale,options));}

function formatBillMoney(amount,showCurrencySymbol=true){
  const value=Math.round((Number(amount)||0)*100)/100;
  return (showCurrencySymbol?"৳":"")+value.toLocaleString("en-US",{maximumFractionDigits:2});
}

function getThaiBillingReportRecord(squareFeetAmount,fanlightAmount){
  const squareFeetRate=String(squareFeetAmount??"").trim();
  const fanlightRate=String(fanlightAmount??"").trim();
  return squareFeetRate||fanlightRate?{squareFeetRate,fanlightRate}:null;
}

function saveThaiBillingRecord(jobId,squareFeetRate,fanlightRate){
  const sqft=String(squareFeetRate??"").trim();
  const fanlight=String(fanlightRate??"").trim();
  if(!sqft&&!fanlight)return false;
  try{
    const record={jobId:String(jobId),squareFeetRate:sqft,fanlightRate:fanlight};
    const records=readThaiBillingRecords();
    records[String(jobId)]=record;
    const hiddenBillingIds=readPageHiddenEntries("thai_billing_page_hidden");
    if(hiddenBillingIds.includes(String(jobId)))persistPageHiddenEntries("thai_billing_page_hidden",hiddenBillingIds.filter(id=>id!==String(jobId)));
    const json=JSON.stringify(records);
    localStorage.setItem("thai_billing_records",json);
    if(window.AndroidBridge&&typeof window.AndroidBridge.saveAppData==="function")window.AndroidBridge.saveAppData("thai_billing_records",json);
    window.dispatchEvent(new CustomEvent("billing_records_updated"));
    return true;
  }catch(e){console.error("Error saving billing record",e);return false;}
}

function WorkBillingSummary({guide,record,hideCurrencySymbol}){
  const bill=calculateWorkBill(guide,record);
  if(!bill)return null;
  const line=(label,quantity,unit,rate,hasRate,total,rateUnit)=>p.jsxs("div",{
    className:"px-3 py-2.5 rounded-xl border shadow-xs",
    style:{backgroundColor:"#ffffff",borderColor:"#e2e8f0"},
    children:[
      p.jsxs("div",{className:"flex items-center justify-between gap-3",children:[
        p.jsx("span",{className:"text-[10px] md:text-xs font-black uppercase tracking-wide",style:{color:"#334155"},children:label}),
        p.jsx("span",{className:"text-sm md:text-base font-black text-right flex-shrink-0",style:{color:"#0f766e"},children:formatBillMoney(total,!hideCurrencySymbol)})
      ]}),
      p.jsxs("p",{className:"mt-1 text-[10px] font-bold",style:{color:"#64748b"},children:[
        quantity," ",unit," × ",hasRate?formatBillMoney(rate,!hideCurrencySymbol)+" / "+rateUnit:"Rate not set"
      ]})
    ]
  });
  return p.jsxs("div",{
    className:"rounded-2xl border p-4 md:p-5 space-y-3 shadow-xs",
    style:{backgroundColor:"#f8fafc",borderColor:"#e2e8f0"},
    children:[
      p.jsx("h4",{className:"w-full px-4 py-3 rounded-xl border flex items-center justify-center text-center text-xs font-black uppercase tracking-widest shadow-xs",style:{color:"#64748b",backgroundColor:"#ffffff",borderColor:"#e2e8f0"},children:"Billing"}),
      p.jsxs("div",{className:"space-y-2.5",children:[
        line("Total Work Square Feet",formatSqFt(bill.workSquareFeet),"sq ft",bill.squareFeetRate,bill.hasSquareFeetRate,bill.totalWorkAmount,"sq ft"),
        line("Total Fanlight",bill.fanlightCount,bill.fanlightCount===1?"pc":"pcs",bill.fanlightRate,bill.hasFanlightRate,bill.totalFanlightAmount,"pc")
      ]}),
      p.jsxs("div",{className:"pt-3 border-t flex items-center justify-between gap-3",style:{borderTopColor:"#cbd5e1"},children:[
        p.jsx("span",{className:"text-xs md:text-sm font-black uppercase tracking-wide",style:{color:"#0f172a"},children:"Final Bill In Taka"}),
        p.jsx("span",{className:"text-base md:text-lg font-black",style:{color:"#0f766e"},children:formatBillMoney(bill.finalAmount,!hideCurrencySymbol)})
      ]})
    ]
  });
}

function BillingGuideContent({results}){
  const bg=computeBillingGuide(results);
  const fanlightIdx=bg.itemsBySize.length+1;
  const hasFanlight=bg.fanlightCount>0;

  return p.jsxs("div",{className:"space-y-4 text-left",children:[
    p.jsxs("div",{
      className:"p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-3 shadow-xs",
      style:{backgroundColor:"#f0fdfa",borderColor:"#99f6e4"},
      children:[
        p.jsxs("div",{children:[
          p.jsx("p",{className:"text-[10px] font-bold uppercase tracking-widest",style:{color:"#115e59"},children:hasFanlight?"Total Work Area (Without Fanlight)":"Total Work Area"}),
          p.jsxs("p",{className:"text-2xl md:text-3xl font-black mt-0.5",style:{color:"#134e4a"},children:[
            formatSqFt(bg.totalWithoutFanlightSqFt)," ",
            p.jsx("span",{className:"text-sm font-bold",style:{color:"#0f766e"},children:"sq ft"})
          ]})
        ]}),
        p.jsxs("div",{className:"text-right flex flex-col items-end gap-1.5",children:[
          p.jsxs("div",{
            className:"px-2.5 py-1 rounded-lg border flex items-center gap-1.5 shadow-2xs",
            style:{backgroundColor:"#ffffff",borderColor:"#ccfbf1"},
            children:[
              p.jsx("span",{className:"text-[10px] font-bold uppercase",style:{color:"#64748b"},children:"Windows:"}),
              p.jsxs("span",{className:"text-xs font-black",style:{color:"#0f172a"},children:[bg.nonFanlightCount," Pcs"]})
            ]
          }),
          hasFanlight?p.jsxs("div",{
            className:"px-2.5 py-1 rounded-lg border flex items-center gap-1.5 shadow-2xs",
            style:{backgroundColor:"#fffbeb",borderColor:"#fde68a"},
            children:[
              p.jsx("span",{className:"text-[10px] font-bold uppercase",style:{color:"#b45309"},children:"Fanlight Area:"}),
              p.jsxs("span",{className:"text-xs font-black",style:{color:"#78350f"},children:[formatSqFt(bg.fanlightSqFt)," sq ft"]})
            ]
          }):null
        ]})
      ]
    }),
    p.jsxs("div",{className:"space-y-2",children:[
      p.jsx("h4",{className:"w-full px-4 py-3 rounded-xl border flex items-center justify-center text-center text-xs font-black uppercase tracking-widest shadow-xs",style:{color:"#64748b",backgroundColor:"#f8fafc",borderColor:"#e2e8f0"},children:"Window Sizes & Quantities"}),
      bg.itemsBySize.length===0&&bg.fanlightCount===0?p.jsx("p",{className:"text-xs italic",style:{color:"#94a3b8"},children:"No windows calculated."}):null,
      bg.itemsBySize.map((sz,idx)=>p.jsxs("div",{
        key:idx,
        className:"px-4 py-3.5 rounded-2xl border flex items-center justify-between gap-3 shadow-xs",
        style:{backgroundColor:"#ffffff",borderColor:"#e2e8f0"},
        children:[
          p.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[
            p.jsx("div",{
              className:"w-8 h-8 rounded-xl font-black flex items-center justify-center text-xs flex-shrink-0",
              style:{backgroundColor:"#ccfbf1",color:"#115e59"},
              children:idx+1
            }),
            p.jsx("span",{
              className:"font-black text-xs md:text-sm truncate",
              style:{color:"#0f172a"},
              children:`${sz.bH} x ${sz.bL} = ${sz.count} Pcs`
            })
          ]}),
          p.jsxs("span",{
            className:"text-xs md:text-sm font-black flex-shrink-0 text-right pr-4 md:pr-5",
            style:{color:"#0d9488"},
            children:[formatSqFt(sz.totalSqFt)," sq ft"]
          })
        ]
      })),
      (bg.fanlightItemsBySize||[]).map((sz,idx)=>p.jsxs("div",{
        key:"fanlight-"+idx,
        className:"px-4 py-3.5 rounded-2xl border flex items-center justify-between gap-3 shadow-xs",
        style:{backgroundColor:"#fffbeb",borderColor:"#fde68a"},
        children:[
          p.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[
            p.jsx("div",{
              className:"w-8 h-8 rounded-xl font-black flex items-center justify-center text-xs flex-shrink-0",
              style:{backgroundColor:"#fef3c7",color:"#78350f"},
              children:bg.itemsBySize.length+idx+1
            }),
            p.jsxs("div",{className:"min-w-0",children:[
              p.jsx("p",{
                className:"font-black text-xs md:text-sm truncate",
                style:{color:"#78350f"},
                children:`Fanlight ${sz.bH} x ${sz.bL} ft`
              }),
              p.jsxs("p",{className:"text-[10px] font-bold mt-0.5",style:{color:"#92400e"},children:[
                formatSqFt(sz.unitSqFt)," sq ft each · ",sz.count," Pcs"
              ]})
            ]})
          ]}),
          p.jsxs("span",{
            className:"text-xs md:text-sm font-black flex-shrink-0 text-right pr-4 md:pr-5",
            style:{color:"#b45309"},
            children:[formatSqFt(sz.totalSqFt)," sq ft"]
          })
        ]
      }))
    ]}),
    p.jsxs("div",{
      className:"p-4 rounded-2xl border space-y-2 mt-2",
      style:{backgroundColor:"#f8fafc",borderColor:"#e2e8f0"},
      children:hasFanlight?[
        p.jsxs("div",{
          key:"without-fanlight",
          className:"flex items-center justify-between text-xs md:text-sm font-bold",
          style:{color:"#334155"},
          children:[
            p.jsx("span",{children:"Total (Without Fanlight):"}),
            p.jsxs("span",{className:"font-black text-sm md:text-base",style:{color:"#0f172a"},children:[formatSqFt(bg.totalWithoutFanlightSqFt)," sq ft"]})
          ]
        }),
        p.jsxs("div",{
          key:"with-fanlight",
          className:"flex items-center justify-between text-xs md:text-sm font-bold pt-2 border-t",
          style:{color:"#115e59",borderTopColor:"#e2e8f0"},
          children:[
            p.jsx("span",{children:"Total (With Fanlight):"}),
            p.jsxs("span",{className:"font-black text-sm md:text-base",style:{color:"#134e4a"},children:[formatSqFt(bg.totalWithFanlightSqFt)," sq ft"]})
          ]
        })
      ]:[
        p.jsxs("div",{
          key:"single-total",
          className:"flex items-center justify-between text-xs md:text-sm font-bold",
          style:{color:"#115e59"},
          children:[
            p.jsx("span",{children:"Total Work Area:"}),
            p.jsxs("span",{className:"font-black text-sm md:text-base",style:{color:"#134e4a"},children:[formatSqFt(bg.totalWithoutFanlightSqFt)," sq ft"]})
          ]
        })
      ]
    })
  ]});
}

function JobDetailModal({job,onClose,onRestore,onDelete,deleteLabel,onNavigate,hideCuttingSpecs,hideBillingCurrencySymbol,billingActions}){
  const [isCuttingOpen,setIsCuttingOpen]=H.useState(!1);
  const [isSavingImage,setIsSavingImage]=H.useState(!1);
  const [isShareFormatOpen,setIsShareFormatOpen]=H.useState(!1);
  const [isBillingRateModalOpen,setIsBillingRateModalOpen]=H.useState(!1);
  const [entrySquareFeetRate,setEntrySquareFeetRate]=H.useState("");
  const [entryFanlightRate,setEntryFanlightRate]=H.useState("");
  const printableRef=H.useRef(null);
  if(!job)return null;

  const thaiSize=job.thaiSize||"3";
  const bg=computeBillingGuide(job.results);
  const billingRecord=readThaiBillingRecords()[String(job.id)]||null;
  const openBillingRateModal=()=>{
    setEntrySquareFeetRate("");
    setEntryFanlightRate("");
    setIsBillingRateModalOpen(true);
  };
  const handleAddJobToBilling=()=>{
    const sqft=String(entrySquareFeetRate??"").trim();
    const fanlight=String(entryFanlightRate??"").trim();
    if(!sqft&&!fanlight)return;
    if(!saveThaiBillingRecord(job.id,sqft,fanlight))return;
    if(window.__clearBillingRateInputs)window.__clearBillingRateInputs();
    setEntrySquareFeetRate("");
    setEntryFanlightRate("");
    if(typeof window.triggerAutoCloudBackup==="function")window.triggerAutoCloudBackup();
    window.__billing_focus_job_id=String(job.id);
    setIsBillingRateModalOpen(false);
    if(onClose)onClose();
    if(onNavigate)onNavigate("billing");
  };

  const showBillSavedToast=()=>{
    try{
      if(typeof window!=="undefined"&&window.AndroidBridge&&typeof window.AndroidBridge.showToast==="function"){
        window.AndroidBridge.showToast("Bill Saved");
        return;
      }
    }catch(e){}
    const toast=document.createElement("div");
    toast.textContent="Bill Saved";
    toast.style.cssText="position:fixed;z-index:999999;left:50%;bottom:28px;transform:translateX(-50%);padding:10px 22px;border-radius:9999px;background:rgba(15,23,42,.95);color:#fff;font:800 12px system-ui,sans-serif;box-shadow:0 10px 25px rgba(0,0,0,.35);pointer-events:none";
    document.body.appendChild(toast);
    setTimeout(()=>toast.remove(),2500);
  };
  const captureReportImage=async()=>{
    if(!printableRef.current)throw new Error("Report image is not ready.");
    await new Promise(r=>setTimeout(r,150));
    return await QC(printableRef.current,{
      backgroundColor:"#ffffff",
      pixelRatio:2.5,
      cacheBust:true
    });
  };
  const reportFileBase=()=>{
    const custClean=(job.customerName||"Customer").replace(/[^a-zA-Z0-9]/g,"_");
    return `Thai_Billing_${custClean}_${Date.now()}`;
  };
  const downloadReportImage=(dataUrl,fileName)=>{
    const a=document.createElement("a");
    a.href=dataUrl;
    a.download=fileName;
    a.click();
  };
  const handleSaveImage=async()=>{
    setIsSavingImage(true);
    try{
      const dataUrl=await captureReportImage();
      const custClean=(job.customerName||"Customer").replace(/[^a-zA-Z0-9]/g,"_");
      const fName=`Thai_Job_${custClean}_${Date.now()}.png`;

      let savedNative=false;
      const bridge=typeof window!=="undefined"?window.AndroidBridge:null;
      if(bridge){
        try{
          if(typeof bridge.saveImageQuiet==="function")savedNative=bridge.saveImageQuiet(dataUrl,fName);
          else if(typeof bridge.saveImage==="function")savedNative=bridge.saveImage(dataUrl,fName);
        }catch(e){}
      }
      if(!savedNative){
        downloadReportImage(dataUrl,fName);
      }
      showBillSavedToast();
    }catch(err){
      console.error("Save image failed",err);
      alert("Failed to save image: "+(err.message||err));
    }finally{
      setIsSavingImage(false);
    }
  };
  const handleSavePdf=async()=>{
    setIsSavingImage(true);
    try{
      const dataUrl=await captureReportImage();
      const bridge=typeof window!=="undefined"?window.AndroidBridge:null;
      const fName=`${reportFileBase()}.pdf`;
      if(bridge&&typeof bridge.saveBillingPdf==="function"){
        if(!bridge.saveBillingPdf(dataUrl,fName))throw new Error("Could not save billing PDF.");
      }else{
        const printWindow=window.open("","_blank");
        if(!printWindow)throw new Error("Allow pop-ups to print this billing report as PDF.");
        printWindow.document.write(`<html><head><title>Billing Report</title><style>@page{size:A4;margin:0}html,body{margin:0;width:100%;height:100%}img{display:block;width:100%;height:auto;max-height:100vh;object-fit:contain;margin:auto}</style></head><body><img src="${dataUrl}" onload="window.print()"></body></html>`);
        printWindow.document.close();
      }
    }catch(err){
      console.error("Save billing PDF failed",err);
      alert(err.message||"Failed to save billing PDF.");
    }finally{
      setIsSavingImage(false);
    }
  };
  const handleShareReport=async(format)=>{
    setIsShareFormatOpen(false);
    setIsSavingImage(true);
    try{
      const dataUrl=await captureReportImage();
      const baseName=reportFileBase();
      const bridge=typeof window!=="undefined"?window.AndroidBridge:null;
      if(format==="image"){
        if(bridge&&typeof bridge.shareBillingImage==="function"){
          if(!bridge.shareBillingImage(dataUrl,`${baseName}.png`))throw new Error("Could not prepare billing image to share.");
        }else if(navigator.share&&navigator.canShare){
          const blob=await(await fetch(dataUrl)).blob();
          const file=new File([blob],`${baseName}.png`,{type:"image/png"});
          if(navigator.canShare({files:[file]}))await navigator.share({files:[file],title:job.customerName||"Billing"});
          else downloadReportImage(dataUrl,`${baseName}.png`);
        }else downloadReportImage(dataUrl,`${baseName}.png`);
      }else if(bridge&&typeof bridge.shareBillingPdf==="function"){
        if(!bridge.shareBillingPdf(dataUrl,`${baseName}.pdf`))throw new Error("Could not prepare billing PDF to share.");
      }else{
        const printWindow=window.open("","_blank");
        if(!printWindow)throw new Error("Allow pop-ups to print this billing report as PDF.");
        printWindow.document.write(`<html><head><title>Billing Report</title><style>@page{size:A4;margin:0}html,body{margin:0;width:100%;height:100%}img{display:block;width:100%;height:auto;max-height:100vh;object-fit:contain;margin:auto}</style></head><body><img src="${dataUrl}" onload="window.print()"></body></html>`);
        printWindow.document.close();
      }
    }catch(err){
      if(err.name!=="AbortError")alert(err.message||"Billing share failed.");
    }finally{
      setIsSavingImage(false);
    }
  };

  return p.jsxs("div",{
    className:"fixed inset-0 z-[120] flex items-center justify-center p-3 md:p-6 bg-black/60 transition-opacity animate-fade-in",
    onClick:onClose,
    children:[
      p.jsxs("div",{
        className:"bg-white rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border",
        style:{backgroundColor:"#ffffff",borderColor:"#cbd5e1"},
        onClick:e=>e.stopPropagation(),
        children:[
          // Header
          p.jsxs("div",{
            className:"p-4 md:p-6 border-b flex items-center justify-between",
            style:{backgroundColor:"#f8fafc",borderBottomColor:"#e2e8f0"},
            children:[
              p.jsxs("div",{className:"flex items-center gap-3",children:[
                p.jsx("div",{className:"w-10 h-10 rounded-2xl flex items-center justify-center text-xl shadow-sm",style:{backgroundColor:"#f0fdfa",color:"#0d9488"},children:"📋"}),
                p.jsxs("div",{children:[
                  p.jsxs("h3",{className:"text-base md:text-lg font-black flex items-center gap-1.5 flex-wrap",style:{color:"#0f172a"},children:[
                    job.customerName||"Unknown Customer",
                    (job.customerLocation||job.siteLocation||job.location||"").trim()?p.jsxs("span",{className:"text-xs md:text-sm font-bold text-teal-700",style:{color:"#0d9488"},children:[" (",(job.customerLocation||job.siteLocation||job.location||"").trim(),")"]}):null
                  ]}),
                  p.jsxs("p",{className:"text-[10px] md:text-xs font-bold uppercase tracking-wider",style:{color:"#94a3b8"},children:[formatDateTime(new Date(job.timestamp),"en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:true})]})
                ]})
              ]}),
              p.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[
                !billingRecord&&onNavigate&&p.jsx("button",{type:"button",onClick:openBillingRateModal,title:"Add to Billing","aria-label":"Add to Billing",className:"billing-add-icon text-teal-700 hover:bg-teal-50 active:scale-95",style:{backgroundColor:"#f0fdfa",borderColor:"#ccfbf1"},children:p.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",viewBox:"0 0 24 24",children:p.jsxs("g",{strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("path",{d:"M3 3h7l3 3v15H3z"}),p.jsx("path",{d:"M10 3v4h3"}),p.jsx("path",{d:"M5 11h5M5 14h5"}),p.jsx("path",{d:"M19 13v6m-3-3h6"})]})})}),
                onDelete&&p.jsx(DeleteEntryIcon,{label:deleteLabel||"Delete entry",onDelete:()=>onDelete(job.id)}),
                p.jsx("button",{type:"button",onClick:onClose,className:"w-8 h-8 rounded-full hover:bg-slate-200 flex items-center justify-center font-bold text-lg cursor-pointer",style:{color:"#94a3b8"},children:"✕"})
              ]})
            ]
          }),
          // Body
          p.jsxs("div",{className:"flex-1 overflow-y-auto p-4 md:p-6 space-y-4",children:[
            p.jsx("div",{
              className:"px-4 py-3 rounded-2xl border flex items-center justify-between gap-3 shadow-2xs",
              style:{backgroundColor:"#f8fafc",borderColor:"#e2e8f0"},
              children:p.jsxs("div",{className:"flex items-center gap-2",children:[
                p.jsx("span",{className:"text-sm",children:"📐"}),
                p.jsx("span",{className:"text-xs font-bold uppercase tracking-wider",style:{color:"#64748b"},children:"Profile:"}),
                p.jsxs("span",{className:"text-xs font-black px-2.5 py-1 rounded-lg border shadow-2xs",style:{backgroundColor:"#ffffff",borderColor:"#cbd5e1",color:"#0f172a"},children:[thaiSize," Inch Profile"]})
              ]})
            }),
            p.jsx(BillingGuideContent,{results:job.results}),
            billingRecord&&p.jsx(WorkBillingSummary,{guide:bg,record:billingRecord,hideCurrencySymbol:hideBillingCurrencySymbol}),
            !hideCuttingSpecs&&p.jsxs("div",{
              className:"rounded-2xl border overflow-hidden shadow-xs mt-3 mb-1",
              style:{borderColor:"#e2e8f0",backgroundColor:"#ffffff"},
              children:[
                p.jsx("button",{
                  type:"button",
                  onClick:()=>setIsCuttingOpen(!isCuttingOpen),
                  className:"w-full px-5 py-4 flex items-center justify-center gap-3 transition-all select-none text-center hover:bg-slate-100/70 active:bg-slate-200/50 cursor-pointer",
                  style:{backgroundColor:"#f8fafc"},
                  children:p.jsxs("div",{className:"flex items-center justify-center gap-2.5",children:[
                    p.jsx("span",{className:"text-base flex-shrink-0 leading-none",children:"🪟"}),
                    p.jsx("span",{className:"font-black text-xs md:text-sm uppercase tracking-wider",style:{color:"#0f172a"},children:"View Window Details & Cutting Specs"})
                  ]})
                }),
                isCuttingOpen&&p.jsx("div",{
                  className:"p-3.5 space-y-3.5 border-t",
                  style:{borderTopColor:"#e2e8f0",backgroundColor:"#f8fafc"},
                  children:(job.results||[]).map((w,widx)=>{
                    const unit=w.isInchMode?"INCH":"CM";
                    const itemLabel=w.label||(w.isSmallFrame?"Fanlight":w.isOneShutter?"1 Shutter":w.isPartition?"Partition":"Window");
                    const hasNS=thaiSize!=="3"&&!w.isOneShutter&&(w.netSectionHeight||w.netSectionLength);
                    const isOuterSame=w.outerTop===w.outerBottom;

                    return p.jsxs("div",{
                      key:widx,
                      className:"p-4 border rounded-2xl shadow-xs space-y-3",
                      style:{borderColor:"#e2e8f0",backgroundColor:"#ffffff"},
                      children:[
                        p.jsxs("div",{
                          className:"flex items-center justify-between text-xs font-black border-b pb-2",
                          style:{borderBottomColor:"#f1f5f9",color:"#0f172a"},
                          children:[
                            p.jsxs("div",{className:"flex items-center gap-2",children:[
                              p.jsxs("span",{className:"px-2 py-0.5 rounded-md font-black text-[10px]",style:{backgroundColor:"#ccfbf1",color:"#0f766e"},children:["ITEM ",widx+1]}),
                              p.jsx("span",{className:"text-xs md:text-sm",children:itemLabel})
                            ]}),
                            p.jsxs("span",{
                              className:"text-[10px] px-2 py-0.5 rounded font-bold border",
                              style:{backgroundColor:"#f8fafc",borderColor:"#e2e8f0",color:"#475569"},
                              children:[w.rawHeight||w.outerSide," × ",w.rawLength1||w.outerTop," ",unit]
                            })
                          ]
                        }),
                        p.jsxs("div",{className:"space-y-1.5",children:[
                          p.jsx("p",{className:"text-[10px] font-black uppercase tracking-wider",style:{color:"#0d9488"},children:"Frame Components"}),
                          p.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs",children:[
                            p.jsxs("div",{className:"p-2.5 rounded-xl border",style:{backgroundColor:"#f8fafc",borderColor:"#f1f5f9"},children:[
                              p.jsx("p",{className:"text-[9px] uppercase font-bold",style:{color:"#94a3b8"},children:"Outer Side"}),
                              p.jsxs("p",{className:"font-black text-xs md:text-sm mt-0.5",style:{color:"#0f172a"},children:[w.outerSide," ",p.jsx("span",{className:"text-[10px] font-normal",style:{color:"#94a3b8"},children:unit})]})
                            ]}),
                            isOuterSame?p.jsxs("div",{className:"p-2.5 rounded-xl border",style:{backgroundColor:"#f8fafc",borderColor:"#f1f5f9"},children:[
                              p.jsx("p",{className:"text-[9px] uppercase font-bold",style:{color:"#94a3b8"},children:"Outer T/B"}),
                              p.jsxs("p",{className:"font-black text-xs md:text-sm mt-0.5",style:{color:"#0f172a"},children:[w.outerTop," ",p.jsx("span",{className:"text-[10px] font-normal",style:{color:"#94a3b8"},children:unit})]})
                            ]}):p.jsxs("div",{className:"p-2.5 rounded-xl border col-span-2 sm:col-span-1 grid grid-cols-2 gap-1.5",style:{backgroundColor:"#f8fafc",borderColor:"#f1f5f9"},children:[
                              p.jsxs("div",{children:[
                                p.jsx("p",{className:"text-[9px] uppercase font-bold",style:{color:"#94a3b8"},children:"Outer Top"}),
                                p.jsxs("p",{className:"font-black text-xs mt-0.5",style:{color:"#0f172a"},children:[w.outerTop," ",p.jsx("span",{className:"text-[9px] font-normal",style:{color:"#94a3b8"},children:unit})]})
                              ]}),
                              p.jsxs("div",{children:[
                                p.jsx("p",{className:"text-[9px] uppercase font-bold",style:{color:"#94a3b8"},children:"Outer Bottom"}),
                                p.jsxs("p",{className:"font-black text-xs mt-0.5",style:{color:"#0f172a"},children:[w.outerBottom," ",p.jsx("span",{className:"text-[9px] font-normal",style:{color:"#94a3b8"},children:unit})]})
                              ]})
                            ]}),
                            p.jsxs("div",{className:"p-2.5 rounded-xl border",style:{backgroundColor:"#f8fafc",borderColor:"#f1f5f9"},children:[
                              p.jsx("p",{className:"text-[9px] uppercase font-bold",style:{color:"#94a3b8"},children:w.isOneShutter?"Lock":"S/I Lock"}),
                              p.jsxs("p",{className:"font-black text-xs md:text-sm mt-0.5",style:{color:"#0f172a"},children:[w.lockVal||"—"," ",p.jsx("span",{className:"text-[10px] font-normal",style:{color:"#94a3b8"},children:unit})]})
                            ]}),
                            p.jsxs("div",{className:"p-2.5 rounded-xl border",style:{backgroundColor:"#f8fafc",borderColor:"#f1f5f9"},children:[
                              p.jsx("p",{className:"text-[9px] uppercase font-bold",style:{color:"#94a3b8"},children:"Shutter T/B"}),
                              p.jsxs("p",{className:"font-black text-xs md:text-sm mt-0.5",style:{color:"#0f172a"},children:[w.shutterTopBottom||"—"," ",p.jsx("span",{className:"text-[10px] font-normal",style:{color:"#94a3b8"},children:unit})]})
                            ]}),
                            hasNS&&w.netSectionHeight?p.jsxs("div",{className:"p-2.5 rounded-xl border",style:{backgroundColor:"#ecfdf5",borderColor:"#a7f3d0"},children:[
                              p.jsx("p",{className:"text-[9px] uppercase font-bold",style:{color:"#059669"},children:"N/S Height"}),
                              p.jsxs("p",{className:"font-black text-xs md:text-sm mt-0.5",style:{color:"#065f46"},children:[w.netSectionHeight," ",p.jsx("span",{className:"text-[10px] font-normal",style:{color:"#059669"},children:unit})]})
                            ]}):null,
                            hasNS&&w.netSectionLength?p.jsxs("div",{className:"p-2.5 rounded-xl border",style:{backgroundColor:"#ecfdf5",borderColor:"#a7f3d0"},children:[
                              p.jsx("p",{className:"text-[9px] uppercase font-bold",style:{color:"#059669"},children:"N/S Length"}),
                              p.jsxs("p",{className:"font-black text-xs md:text-sm mt-0.5",style:{color:"#065f46"},children:[w.netSectionLength," ",p.jsx("span",{className:"text-[10px] font-normal",style:{color:"#059669"},children:unit})]})
                            ]}):null
                          ]})
                        ]}),
                        p.jsxs("div",{className:"space-y-1.5 pt-2 border-t",style:{borderTopColor:"#f1f5f9"},children:[
                          p.jsx("p",{className:"text-[10px] font-black uppercase tracking-wider",style:{color:"#0d9488"},children:"Glass (INCH)"}),
                          p.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[
                            p.jsxs("div",{className:"p-2.5 rounded-xl border",style:{backgroundColor:"#f8fafc",borderColor:"#f1f5f9"},children:[
                              p.jsx("p",{className:"text-[9px] uppercase font-bold",style:{color:"#94a3b8"},children:"Glass Height"}),
                              p.jsxs("p",{className:"font-black text-xs md:text-sm mt-0.5",style:{color:"#0f172a"},children:[w.glassHeightInch," ",p.jsx("span",{className:"text-[10px] font-normal",style:{color:"#94a3b8"},children:"Inch"})]})
                            ]}),
                            p.jsxs("div",{className:"p-2.5 rounded-xl border",style:{backgroundColor:"#f8fafc",borderColor:"#f1f5f9"},children:[
                              p.jsx("p",{className:"text-[9px] uppercase font-bold",style:{color:"#94a3b8"},children:"Glass Length"}),
                              p.jsxs("p",{className:"font-black text-xs md:text-sm mt-0.5",style:{color:"#0f172a"},children:[w.glassLengthInch," ",p.jsx("span",{className:"text-[10px] font-normal",style:{color:"#94a3b8"},children:"Inch"})]})
                            ]})
                          ]})
                        ]})
                      ]
                    });
                  })
                })
              ]
            })
          ]}),
          // Footer with "Save Image" between Delete and Load in Calculator (Single Line)
          p.jsxs("div",{
            className:"p-3 sm:p-4 border-t grid gap-2 items-center "+(billingActions?"grid-cols-3":"grid-cols-2"),
            style:{borderTopColor:"#e2e8f0",backgroundColor:"#f8fafc"},
            children:billingActions?[
              p.jsxs("button",{
                type:"button",
                disabled:isSavingImage,
                onClick:handleSaveImage,
                className:"w-full py-2.5 px-1 rounded-xl font-black text-[10px] sm:text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap",
                children:[p.jsx("span",{children:"📸"}),p.jsx("span",{children:isSavingImage?"Saving...":"Save Image"})]
              }),
              p.jsxs("button",{
                type:"button",
                disabled:isSavingImage,
                onClick:handleSavePdf,
                className:"w-full py-2.5 px-1 rounded-xl font-black text-[10px] sm:text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 bg-slate-700 hover:bg-slate-800 disabled:opacity-50 text-white flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap",
                children:[p.jsx("span",{children:"📄"}),p.jsx("span",{children:isSavingImage?"Working...":"Save PDF"})]
              }),
              p.jsxs("button",{
                type:"button",
                disabled:isSavingImage,
                onClick:()=>setIsShareFormatOpen(true),
                className:"w-full py-2.5 px-1 rounded-xl font-black text-[10px] sm:text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 bg-slate-900 hover:bg-black disabled:opacity-50 text-white flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap",
                children:[p.jsx("span",{children:"↗"}),p.jsx("span",{children:"Share"})]
              })
            ]:[
              p.jsxs("button",{
                type:"button",
                disabled:isSavingImage,
                onClick:handleSaveImage,
                className:"w-full py-2.5 px-1 rounded-xl font-black text-[11px] sm:text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap",
                children:[
                  p.jsx("span",{children:"📸"}),
                  p.jsx("span",{children:isSavingImage?"Saving...":"Save Image"})
                ]
              }),
              onRestore?p.jsx("button",{
                type:"button",
                onClick:()=>{onRestore(job);if(onClose)onClose();},
                className:"w-full py-2.5 px-1 rounded-xl font-black text-[11px] sm:text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer text-center whitespace-nowrap",
                style:{backgroundColor:"#0f172a",color:"#ffffff"},
                children:"Load Job"
              }):p.jsx("div",{})
            ]
          })
        ]
      }),
      // Offscreen printable element for High-Res JPG/PNG generation
      p.jsx("div",{
        style:{position:"fixed",left:"-9999px",top:0,width:"820px",zIndex:-1000,backgroundColor:"#ffffff"},
        children:p.jsxs("div",{
          ref:printableRef,
          style:{width:"820px",backgroundColor:"#ffffff",color:"#0f172a",fontFamily:"system-ui, -apple-system, sans-serif",padding:"28px",boxSizing:"border-box"},
          children:[
            // Header
            p.jsxs("div",{
              style:{borderBottom:"3px solid #0d9488",paddingBottom:"14px",marginBottom:"18px",display:"flex",justifyContent:"space-between",alignItems:"center"},
              children:[
                p.jsxs("div",{children:[
                  p.jsx("h1",{style:{fontSize:"20px",fontWeight:"900",color:"#0f172a",margin:"0",letterSpacing:"0.5px",textTransform:"uppercase"},children:"Thai Aluminium & Glass Fabrication Report"}),
                  p.jsx("p",{style:{fontSize:"11px",fontWeight:"800",color:"#0d9488",margin:"3px 0 0 0",letterSpacing:"1px",textTransform:"uppercase"},children:"Workshop Production & Cutting Specification Sheet"})
                ]}),
                p.jsxs("div",{style:{textAlign:"right"},children:[
                  p.jsx("p",{style:{fontSize:"9px",fontWeight:"800",color:"#64748b",margin:"0",textTransform:"uppercase"},children:"Generated Date & Time:"}),
                  p.jsx("p",{style:{fontSize:"11px",fontWeight:"900",color:"#0f172a",margin:"2px 0 0 0"},children:formatDateTime(new Date(),"en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:true})})
                ]})
              ]
            }),
            // Customer & Material Details in 2 columns
            p.jsxs("div",{
              style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginBottom:"16px"},
              children:[
                p.jsxs("div",{
                  style:{border:"1px solid #cbd5e1",borderRadius:"12px",padding:"12px",backgroundColor:"#f8fafc"},
                  children:[
                    p.jsx("p",{style:{fontSize:"11px",fontWeight:"900",color:"#0d9488",textTransform:"uppercase",letterSpacing:"0.5px",margin:"0 0 6px 0"},children:"Customer & Site Information"}),
                    p.jsxs("p",{style:{fontSize:"13px",fontWeight:"800",color:"#0f172a",margin:"0 0 4px 0"},children:[
                      "Name: ",job.customerName||"Unknown Customer"
                    ]}),
                    p.jsxs("p",{style:{fontSize:"12px",fontWeight:"600",color:"#334155",margin:"0 0 4px 0"},children:[
                      "Phone: ",job.customerPhone||"N/A"
                    ]}),
                    p.jsxs("p",{style:{fontSize:"12px",fontWeight:"600",color:"#334155",margin:"0"},children:[
                      "Site Location: ",(job.customerLocation||job.siteLocation||job.location||"N/A").trim()
                    ]})
                  ]
                }),
                p.jsxs("div",{
                  style:{border:"1px solid #cbd5e1",borderRadius:"12px",padding:"12px",backgroundColor:"#f8fafc"},
                  children:[
                    p.jsx("p",{style:{fontSize:"11px",fontWeight:"900",color:"#0d9488",textTransform:"uppercase",letterSpacing:"0.5px",margin:"0 0 6px 0"},children:"Aluminium & Glass Specifications"}),
                    p.jsxs("p",{style:{fontSize:"12px",fontWeight:"800",color:"#0f172a",margin:"0 0 4px 0"},children:[
                      "Profile: ",thaiSize," Inch Profile"
                    ]}),
                    p.jsxs("p",{style:{fontSize:"12px",fontWeight:"600",color:"#334155",margin:"0 0 4px 0"},children:[
                      "Aluminium: ",job.aluminumColor||"Standard Color"," • ",job.aluminumBrand||"Standard Brand"
                    ]}),
                    p.jsxs("p",{style:{fontSize:"12px",fontWeight:"600",color:"#334155",margin:"0"},children:[
                      "Glass: ",job.glassType||"Clear Glass"," • ",job.glassThickness||"5mm"
                    ]})
                  ]
                })
              ]
            }),
            // Square Feet & Quantities Summary (Dynamic Fanlight Detection)
            (()=>{
              const hasFL = bg && bg.fanlightCount > 0;
              return p.jsxs("div",{
                style:{border:"2px solid #0d9488",borderRadius:"12px",padding:"12px",backgroundColor:"#f0fdfa",marginBottom:"18px",display:"grid",gridTemplateColumns:hasFL?"repeat(4, 1fr)":"repeat(2, 1fr)",gap:"10px",textAlign:"center"},
                children:hasFL?[
                  p.jsxs("div",{children:[
                    p.jsx("p",{style:{fontSize:"10px",fontWeight:"800",color:"#0f766e",textTransform:"uppercase",margin:"0"},children:"Total Without Fanlight"}),
                    p.jsxs("p",{style:{fontSize:"14px",fontWeight:"900",color:"#042f2e",margin:"3px 0 0 0"},children:[
                      formatSqFt(bg&&bg.totalWithoutFanlightSqFt)," Square Feet"
                    ]})
                  ]}),
                  p.jsxs("div",{children:[
                    p.jsx("p",{style:{fontSize:"10px",fontWeight:"800",color:"#0f766e",textTransform:"uppercase",margin:"0"},children:"Total With Fanlight"}),
                    p.jsxs("p",{style:{fontSize:"14px",fontWeight:"900",color:"#042f2e",margin:"3px 0 0 0"},children:[
                      formatSqFt(bg&&bg.totalWithFanlightSqFt)," Square Feet"
                    ]})
                  ]}),
                  p.jsxs("div",{children:[
                    p.jsx("p",{style:{fontSize:"10px",fontWeight:"800",color:"#0f766e",textTransform:"uppercase",margin:"0"},children:"Window Quantities"}),
                    p.jsxs("p",{style:{fontSize:"13px",fontWeight:"900",color:"#042f2e",margin:"3px 0 0 0"},children:[
                      (bg?bg.nonFanlightCount:0)," Windows"
                    ]})
                  ]}),
                  p.jsxs("div",{children:[
                    p.jsx("p",{style:{fontSize:"10px",fontWeight:"800",color:"#0f766e",textTransform:"uppercase",margin:"0"},children:"Fanlight Count"}),
                    p.jsxs("p",{style:{fontSize:"13px",fontWeight:"900",color:"#042f2e",margin:"3px 0 0 0"},children:[
                      (bg?bg.fanlightCount:0)," Pcs"
                    ]})
                  ]})
                ]:[
                  p.jsxs("div",{children:[
                    p.jsx("p",{style:{fontSize:"11px",fontWeight:"800",color:"#0f766e",textTransform:"uppercase",margin:"0"},children:"Total Square Feet"}),
                    p.jsxs("p",{style:{fontSize:"16px",fontWeight:"900",color:"#042f2e",margin:"3px 0 0 0"},children:[
                      formatSqFt(bg&&bg.totalWithoutFanlightSqFt)," Square Feet"
                    ]})
                  ]}),
                  p.jsxs("div",{children:[
                    p.jsx("p",{style:{fontSize:"11px",fontWeight:"800",color:"#0f766e",textTransform:"uppercase",margin:"0"},children:"Total Windows"}),
                    p.jsxs("p",{style:{fontSize:"16px",fontWeight:"900",color:"#042f2e",margin:"3px 0 0 0"},children:[
                      (bg?bg.nonFanlightCount:0)," Windows"
                    ]})
                  ]})
                ]
              });
            })(),

            // Table with Window Sizes & Square Feet (Clean dimensions in feet, sq ft, qty)
            p.jsx("div",{style:{marginBottom:"14px"},children:[
              p.jsx("p",{style:{fontSize:"11px",fontWeight:"900",color:"#0f172a",textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:"8px"},children:"Window Sizes & Square Feet Specifications:"}),
              p.jsxs("table",{
                style:{width:"100%",borderCollapse:"collapse",fontSize:"11px",textAlign:"center",border:"1px solid #cbd5e1"},
                children:[
                  p.jsx("thead",{
                    style:{backgroundColor:"#0f172a",color:"#ffffff"},
                    children:p.jsxs("tr",{
                      children:[
                        p.jsx("th",{style:{padding:"8px 6px",border:"1px solid #334155",width:"8%"},children:"SL"}),
                        p.jsx("th",{style:{padding:"8px 6px",border:"1px solid #334155",width:"32%"},children:"Window Size (Feet)"}),
                        p.jsx("th",{style:{padding:"8px 6px",border:"1px solid #334155",width:"20%"},children:"Unit Area"}),
                        p.jsx("th",{style:{padding:"8px 6px",border:"1px solid #334155",width:"18%"},children:"Quantity"}),
                        p.jsx("th",{style:{padding:"8px 6px",border:"1px solid #334155",width:"22%"},children:"Total Square Feet"})
                      ]
                    })
                  }),
                  p.jsxs("tbody",{
                    children:[
                      (bg.itemsBySize||[]).map((sz,idx)=>{
                        const unitSqFt=formatSqFt(sz.bH*sz.bL);
                        return p.jsxs("tr",{
                          key:idx,
                          style:{backgroundColor:idx%2===0?"#ffffff":"#f8fafc",borderBottom:"1px solid #cbd5e1"},
                          children:[
                            p.jsx("td",{style:{padding:"7px 6px",fontWeight:"800",border:"1px solid #e2e8f0"},children:idx+1}),
                            p.jsxs("td",{style:{padding:"7px 6px",fontWeight:"800",color:"#0f172a",border:"1px solid #e2e8f0"},children:[
                              sz.bH," × ",sz.bL," ft"
                            ]}),
                            p.jsxs("td",{style:{padding:"7px 6px",fontWeight:"700",color:"#334155",border:"1px solid #e2e8f0"},children:[
                              unitSqFt," sq ft"
                            ]}),
                            p.jsxs("td",{style:{padding:"7px 6px",fontWeight:"800",color:"#0d9488",border:"1px solid #e2e8f0"},children:[
                              sz.count," Pcs"
                            ]}),
                            p.jsxs("td",{style:{padding:"7px 6px",fontWeight:"900",color:"#042f2e",border:"1px solid #e2e8f0"},children:[
                              formatSqFt(sz.totalSqFt)," sq ft"
                            ]})
                          ]
                        });
                      }),
                      (bg.fanlightItemsBySize||[]).map((sz,idx)=>p.jsxs("tr",{
                        key:"fanlight-"+idx,
                        style:{backgroundColor:"#fffbeb",borderBottom:"1px solid #cbd5e1"},
                        children:[
                          p.jsx("td",{style:{padding:"7px 6px",fontWeight:"800",border:"1px solid #fde68a"},children:bg.itemsBySize.length+idx+1}),
                          p.jsxs("td",{style:{padding:"7px 6px",fontWeight:"800",color:"#92400e",border:"1px solid #fde68a"},children:["Fanlight ",sz.bH," × ",sz.bL," ft"]}),
                          p.jsxs("td",{style:{padding:"7px 6px",fontWeight:"700",color:"#b45309",border:"1px solid #fde68a"},children:[formatSqFt(sz.unitSqFt)," sq ft"]}),
                          p.jsxs("td",{style:{padding:"7px 6px",fontWeight:"800",color:"#92400e",border:"1px solid #fde68a"},children:[sz.count," Pcs"]}),
                          p.jsx("td",{style:{padding:"7px 6px",fontWeight:"900",color:"#78350f",border:"1px solid #fde68a"},children:"-"})
                        ]
                      })),
                      // Grand Total Row
                      p.jsxs("tr",{
                        style:{backgroundColor:"#f0fdfa",borderTop:"2px solid #0d9488"},
                        children:[
                          p.jsx("td",{colSpan:3,style:{padding:"8px 6px",fontWeight:"900",fontSize:"12px",color:"#042f2e",textAlign:"right",border:"1px solid #99f6e4"},children:"TOTAL WORK AREA:"}),
                          p.jsxs("td",{style:{padding:"8px 6px",fontWeight:"900",fontSize:"12px",color:"#0f766e",border:"1px solid #99f6e4"},children:[
                            (bg.nonFanlightCount+bg.fanlightCount)," Pcs"
                          ]}),
                          p.jsxs("td",{style:{padding:"8px 6px",fontWeight:"900",fontSize:"13px",color:"#042f2e",border:"1px solid #99f6e4"},children:[
                            formatSqFt(bg.totalWithoutFanlightSqFt)," sq ft"
                          ]})
                        ]
                      })
                    ]
                  })
                ]
              })
            ]}),
                        billingRecord&&(()=>{
                          const printBill=calculateWorkBill(bg,billingRecord);
                          const row=(label,workArea,rate,amount,isFinal)=>p.jsxs("tr",{
                            style:{backgroundColor:isFinal?"#f0fdfa":"#ffffff",borderBottom:"1px solid #cbd5e1"},
                            children:[
                              p.jsx("td",{colSpan:isFinal?3:1,style:{padding:"8px 7px",fontWeight:"900",color:isFinal?"#042f2e":"#334155",border:"1px solid #cbd5e1"},children:label}),
                              !isFinal&&p.jsx("td",{style:{padding:"8px 7px",fontWeight:"700",color:"#475569",border:"1px solid #cbd5e1"},children:workArea}),
                              !isFinal&&p.jsx("td",{style:{padding:"8px 7px",fontWeight:"700",color:"#475569",textAlign:"right",whiteSpace:"nowrap",border:"1px solid #cbd5e1"},children:rate}),
                              p.jsx("td",{style:{padding:"8px 7px",fontWeight:"900",color:"#0f766e",textAlign:"right",whiteSpace:"nowrap",border:"1px solid #cbd5e1"},children:amount==null?"":formatBillMoney(amount,false)})
                            ]
                          });
                          return p.jsxs("div",{
                            style:{border:"1px solid #cbd5e1",borderRadius:"12px",padding:"12px",backgroundColor:"#f8fafc",marginBottom:"14px"},
                            children:[
                              p.jsx("p",{style:{fontSize:"11px",fontWeight:"900",color:"#0f766e",textTransform:"uppercase",letterSpacing:"0.5px",margin:"0 0 8px 0"},children:"Billing Breakdown"}),
                              p.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10px",textAlign:"left",border:"1px solid #cbd5e1"},children:[
                                p.jsx("thead",{style:{backgroundColor:"#0f172a",color:"#ffffff"},children:p.jsxs("tr",{children:[
                                  p.jsx("th",{style:{padding:"8px 7px",border:"1px solid #334155"},children:"Description"}),
                              p.jsx("th",{style:{padding:"8px 7px",border:"1px solid #334155"},children:"Total Work Area"}),
                                  p.jsx("th",{style:{padding:"8px 7px",border:"1px solid #334155",textAlign:"right"},children:"Rate"}),
                                  p.jsx("th",{style:{padding:"8px 7px",border:"1px solid #334155",textAlign:"right"},children:"Amount"})
                                ]})}),
                                p.jsxs("tbody",{children:[
                                  row("Total Work Square Feet",formatSqFt(printBill.workSquareFeet)+" sq ft",printBill.hasSquareFeetRate?formatBillMoney(printBill.squareFeetRate,false):"—",printBill.totalWorkAmount,false),
                                  row("Total Fanlight",printBill.fanlightCount+" "+(printBill.fanlightCount===1?"pc":"pcs"),printBill.hasFanlightRate?formatBillMoney(printBill.fanlightRate,false):"—",printBill.totalFanlightAmount,false),
                                  row("Final Bill In Taka","","",printBill.finalAmount,true)
                                ]})
                              ]})
                            ]
                          });
                        })(),
            // Footer
            p.jsxs("div",{
              style:{borderTop:"1px solid #cbd5e1",paddingTop:"10px",marginTop:"14px",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"10px",color:"#64748b",fontWeight:"700"},
              children:[
                p.jsx("span",{children:"Thai Fabrication Pro • Precision Workshop Specification"}),
                p.jsx("span",{children:"Page 1 of 1 • Verified Calculations"})
              ]
            })
          ]
        })
      }),
isBillingRateModalOpen&&p.jsx("div",{
  className:"fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/60",
        style:{zIndex:150},
  onClick:e=>{e.stopPropagation();setIsBillingRateModalOpen(false);},
  children:p.jsxs("div",{
    className:"w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden",
    onClick:e=>e.stopPropagation(),
    children:[
      p.jsxs("div",{className:"px-5 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-3",children:[
        p.jsxs("div",{children:[
          p.jsx("h3",{className:"text-sm md:text-base font-black text-slate-800",children:"Billing Details"}),
          p.jsx("p",{className:"text-[10px] font-bold text-slate-400 mt-0.5",children:"Set rates for this work entry"})
        ]}),
        p.jsx("button",{type:"button",onClick:()=>setIsBillingRateModalOpen(false),className:"w-8 h-8 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-400 font-bold text-lg",children:"✕"})
      ]}),
      p.jsxs("div",{className:"p-5 space-y-4",children:[
        p.jsxs("div",{className:"space-y-1.5",children:[
          p.jsx("label",{className:"text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest block",children:"Square Feet Rate"}),
          p.jsxs("div",{className:"flex items-center w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl shadow-inner focus-within:border-teal-400 focus-within:bg-white",children:[
            p.jsx("span",{className:"mr-3 flex-shrink-0 text-slate-500 font-bold",children:"৳"}),
            p.jsx("input",{type:"number",inputMode:"decimal",min:"0",step:"any",value:entrySquareFeetRate,onChange:e=>setEntrySquareFeetRate(e.target.value),className:"min-w-0 flex-1 bg-transparent outline-none font-bold text-xs md:text-sm text-slate-800",placeholder:"Enter amount"})
          ]})
        ]}),
        p.jsxs("div",{className:"space-y-1.5",children:[
          p.jsx("label",{className:"text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest block",children:"Fanlight Rate"}),
          p.jsxs("div",{className:"flex items-center w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl shadow-inner focus-within:border-teal-400 focus-within:bg-white",children:[
            p.jsx("span",{className:"mr-3 flex-shrink-0 text-slate-500 font-bold",children:"৳"}),
            p.jsx("input",{type:"number",inputMode:"decimal",min:"0",step:"any",value:entryFanlightRate,onChange:e=>setEntryFanlightRate(e.target.value),className:"min-w-0 flex-1 bg-transparent outline-none font-bold text-xs md:text-sm text-slate-800",placeholder:"Enter amount"})
          ]})
        ]}),
        p.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-1",children:[
          p.jsx("button",{type:"button",onClick:()=>setIsBillingRateModalOpen(false),className:"py-3 rounded-xl border border-slate-200 bg-white text-slate-600 font-black text-[10px] md:text-xs uppercase tracking-wide",children:"Cancel"}),
          p.jsx("button",{type:"button",onClick:handleAddJobToBilling,disabled:!String(entrySquareFeetRate??"").trim()&&!String(entryFanlightRate??"").trim(),className:"py-3 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-black text-[10px] md:text-xs uppercase tracking-wide shadow-sm",children:"Add Bill & Open Billing"})
        ]})
      ]})
    ]
  })
}),
isShareFormatOpen&&p.jsx("div",{
  className:"fixed inset-0 z-[160] flex items-center justify-center p-4 bg-black/60",
  onClick:()=>setIsShareFormatOpen(false),
  children:p.jsxs("div",{
    className:"w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden p-5 space-y-4",
    onClick:e=>e.stopPropagation(),
    children:[
      p.jsx("h3",{className:"text-base font-black text-slate-800",children:"Share billing as"}),
      p.jsx("p",{className:"text-xs font-medium text-slate-500",children:"Choose a file format to continue to the share menu."}),
      p.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[
        p.jsx("button",{type:"button",onClick:()=>handleShareReport("image"),className:"py-3 rounded-xl bg-teal-600 text-white font-black text-xs uppercase tracking-wide",style:{display:"block",visibility:"visible",opacity:1,backgroundColor:"#0d9488",color:"#ffffff",border:"1px solid #0d9488",minHeight:46},children:"Image"}),
        p.jsx("button",{type:"button",onClick:()=>handleShareReport("pdf"),className:"py-3 rounded-xl bg-teal-600 text-white font-black text-xs uppercase tracking-wide",style:{display:"block",visibility:"visible",opacity:1,backgroundColor:"#0d9488",color:"#ffffff",border:"1px solid #0d9488",minHeight:46},children:"PDF"}),
        p.jsx("button",{type:"button",onClick:()=>setIsShareFormatOpen(false),className:"col-span-2 py-3 rounded-xl border border-slate-200 text-slate-600 font-black text-xs uppercase tracking-wide",children:"Cancel"})
      ]})
    ]
  })
})
    ]
  });
}

function CustomersScreen({onNavigate}){
  const mergeCustomersFromHistory=(dbList, histList)=>{
    const map=new Map();
    (dbList||[]).forEach(c=>{
      const n=(c.name||"").trim();
      if(!n||n==="Unknown Customer"||n==="Unknown User")return;
      const key=n.toLowerCase();
      map.set(key,{...c,name:n});
    });
    let added=false;
    (histList||[]).forEach(h=>{
      const n=(h.customerName||"").trim();
      if(!n||n==="Unknown Customer"||n==="Unknown User")return;
      const key=n.toLowerCase();
      if(!map.has(key)){
        map.set(key,{
          id:"cust_h_"+key.replace(/[^a-z0-9]/g,"_"),
          name:n,
          phone:(h.customerPhone||"").trim(),
          lastLocation:(h.customerLocation||h.siteLocation||"").trim(),
          totalJobs:1,
          createdAt:h.timestamp||Date.now(),
          updatedAt:h.timestamp||Date.now()
        });
        added=true;
      }else{
        const existing=map.get(key);
        if(!existing.phone&&h.customerPhone){
          existing.phone=h.customerPhone.trim();
          added=true;
        }
      }
    });
    const merged=Array.from(map.values());
    if(added){
      try{
        localStorage.setItem("thai_customers_db",JSON.stringify(merged));
        if(window.AndroidBridge&&typeof window.AndroidBridge.saveAppData==="function"){
          window.AndroidBridge.saveAppData("thai_customers_db",JSON.stringify(merged));
        }
      }catch(e){}
    }
    return merged;
  };

  const [history,setHistory]=H.useState(()=>{try{return JSON.parse(localStorage.getItem("thai_history")||"[]");}catch(e){return[];}});
  const [customers,setCustomers]=H.useState(()=>{
    try{
      const c=JSON.parse(localStorage.getItem("thai_customers_db")||"[]");
      const h=JSON.parse(localStorage.getItem("thai_history")||"[]");
      return mergeCustomersFromHistory(c,h);
    }catch(e){return[];}
  });
  const [search,setSearch]=H.useState("");
  const [selectedCust,setSelectedCust]=H.useState(null);
  const [selectedJob,setSelectedJob]=H.useState(null);
  const [hiddenCustomerKeys,setHiddenCustomerKeys]=H.useState(()=>readPageHiddenEntries("thai_customers_page_hidden"));

  H.useEffect(()=>{
    const reload=()=>{
      try{
        const c=JSON.parse(localStorage.getItem("thai_customers_db")||"[]");
        const h=JSON.parse(localStorage.getItem("thai_history")||"[]");
        const merged=mergeCustomersFromHistory(c,h);
        setCustomers(merged);
        setHistory(h);
      }catch(e){}
    };
    reload();
    window.addEventListener("customers_updated",reload);
    window.addEventListener("history_updated",reload);
    return()=>{
      window.removeEventListener("customers_updated",reload);
      window.removeEventListener("history_updated",reload);
    };
  },[]);

  const filtered=customers.filter(c=>{
    if(hiddenCustomerKeys.includes(customerPageKey(c)))return false;
    const q=search.toLowerCase().trim();
    if(!q)return true;
    return (c.name||"").toLowerCase().includes(q)||(c.phone||"").includes(q);
  });

  const getCustJobs=(cust)=>{
    if(!cust)return[];
    const cName=(cust.name||"").trim().toLowerCase();
    return history.filter(h=>{
      const hName=(h.customerName||"").trim().toLowerCase();
      return hName===cName&&!hiddenCustomerKeys.includes("customer-job:"+String(h.id));
    });
  };

  const handleDeleteCustomerEntry=(job)=>{
    if(!job||job.id==null)return;
    if(!window.confirm("Hide this work entry from the Customers page only? Work History and Billing entries will stay unchanged."))return;
    const key="customer-job:"+String(job.id);
    const updated=[...hiddenCustomerKeys,key];
    if(!persistPageHiddenEntries("thai_customers_page_hidden",updated))return;
    setHiddenCustomerKeys(Array.from(new Set(updated)));
    if(selectedJob&&String(selectedJob.id)===String(job.id))setSelectedJob(null);
  };

  H.useEffect(()=>{
    if(!selectedCust)return;
    window.__modal_back_stack=window.__modal_back_stack||[];
    const handler=()=>{setSelectedCust(null);return true;};
    window.__modal_back_stack.push(handler);
    return()=>{
      const idx=window.__modal_back_stack.indexOf(handler);
      if(idx!==-1)window.__modal_back_stack.splice(idx,1);
    };
  },[selectedCust]);

  const handleRestore=(job)=>{
    try{localStorage.setItem("thai_pending_restore_job",JSON.stringify(job));}catch(e){}
    window.__pending_restore_job=job;
    if(window.__thai_restore_job)window.__thai_restore_job(job);
    setSelectedJob(null);
    if(onNavigate)onNavigate("app1");
  };

  return p.jsxs("div",{className:"p-4 md:p-8 max-w-4xl mx-auto space-y-6 pb-24",children:[
    p.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between gap-4",children:[
      null,
      p.jsxs("div",{className:"px-4 py-2 rounded-2xl font-black text-xs uppercase tracking-wider border",style:{backgroundColor:"#f0fdfa",borderColor:"#99f6e4",color:"#0f766e"},children:[filtered.length," Total Customers"]})
    ]}),
    p.jsx("div",{className:"relative",children:
      p.jsx("input",{
        type:"text",
        value:search,
        onChange:e=>setSearch(e.target.value),
        placeholder:"Search customers by name or phone...",
        className:"w-full px-5 py-3.5 rounded-2xl outline-none font-bold text-xs md:text-sm shadow-sm border",
        style:{backgroundColor:"#ffffff",borderColor:"#e2e8f0",color:"#0f172a"}
      })
    }),
    filtered.length===0?p.jsxs("div",{className:"p-12 text-center rounded-3xl border border-dashed space-y-3",style:{backgroundColor:"#ffffff",borderColor:"#cbd5e1"},children:[
      p.jsx("div",{className:"text-4xl",children:"👥"}),
      p.jsx("h4",{className:"font-black text-base",style:{color:"#334155"},children:"No Customers Found"}),
      p.jsx("p",{className:"text-xs max-w-sm mx-auto",style:{color:"#94a3b8"},children:"When you calculate a job and enter the customer's name, they will be automatically saved here!"})
    ]}):
    p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:filtered.map(cust=>{
      const jobs=getCustJobs(cust);
      return p.jsxs("div",{
        key:cust.id||cust.name,
        className:"p-5 rounded-3xl border shadow-sm transition-all space-y-3 cursor-pointer",
        style:{backgroundColor:"#ffffff",borderColor:"#e2e8f0"},
        onClick:()=>setSelectedCust(cust),
        children:[
          p.jsxs("div",{className:"flex items-center justify-between gap-2",children:[
            p.jsxs("div",{className:"flex items-center gap-3",children:[
              p.jsx("div",{className:"w-12 h-12 rounded-2xl font-black flex items-center justify-center text-lg",style:{backgroundColor:"#ccfbf1",color:"#0f766e"},children:(cust.name||"C")[0].toUpperCase()}),
              p.jsxs("div",{children:[
                p.jsx("h3",{className:"font-black text-sm md:text-base tracking-tight",style:{color:"#0f172a"},children:cust.name}),
                cust.phone?p.jsxs("p",{className:"text-xs font-bold mt-0.5",style:{color:"#64748b"},children:["📞 ",cust.phone]}):p.jsx("p",{className:"text-[10px] italic mt-0.5",style:{color:"#94a3b8"},children:"No phone number"})
              ]})
            ]}),
            p.jsxs("span",{className:"px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider",style:{backgroundColor:"#f1f5f9",color:"#475569"},children:[jobs.length," Works"]})
          ]}),
          p.jsxs("div",{className:"flex items-center justify-between text-[11px] font-bold pt-2 border-t",style:{borderTopColor:"#f1f5f9",color:"#0d9488"},children:[
            p.jsx("span",{children:"View Work Records"}),
            p.jsx("span",{children:"→"})
          ]})
        ]
      });
    })}),
    selectedCust&&p.jsx("div",{className:"fixed inset-0 z-[110] flex items-center justify-center p-3 md:p-6 bg-black/60 transition-opacity animate-fade-in",onClick:()=>setSelectedCust(null),children:
      p.jsxs("div",{className:"rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border",style:{backgroundColor:"#ffffff",borderColor:"#cbd5e1"},onClick:e=>e.stopPropagation(),children:[
        p.jsxs("div",{className:"p-5 border-b flex items-center justify-between",style:{backgroundColor:"#f8fafc",borderBottomColor:"#e2e8f0"},children:[
          p.jsxs("div",{className:"flex items-center gap-3",children:[
            p.jsx("div",{className:"w-10 h-10 rounded-2xl font-black flex items-center justify-center text-base",style:{backgroundColor:"#ccfbf1",color:"#0f766e"},children:(selectedCust.name||"C")[0].toUpperCase()}),
            p.jsxs("div",{children:[
              p.jsx("h3",{className:"text-base md:text-lg font-black",style:{color:"#0f172a"},children:selectedCust.name}),
              selectedCust.phone&&p.jsxs("p",{className:"text-xs font-bold",style:{color:"#64748b"},children:["📞 ",selectedCust.phone]})
            ]})
          ]}),
          p.jsx("button",{type:"button",onClick:()=>setSelectedCust(null),className:"w-8 h-8 rounded-full hover:bg-slate-200 flex items-center justify-center font-bold text-lg",style:{color:"#94a3b8"},children:"✕"})
        ]}),
        p.jsx("div",{className:"flex-1 overflow-y-auto p-4 md:p-6 space-y-3",children:(()=>{
          const jobs=getCustJobs(selectedCust);
          if(jobs.length===0)return p.jsx("div",{className:"text-center py-12 text-xs font-bold",style:{color:"#94a3b8"},children:"No saved work records found for this customer."});
          return jobs.map((job,jidx)=>{
            const bg=computeBillingGuide(job.results);
            const siteLoc=(job.customerLocation||job.siteLocation||job.location||"").trim();
            const dateStr=formatDateTime(new Date(job.timestamp),"en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:true});
            return p.jsxs("div",{
              key:job.id||jidx,
              onClick:()=>setSelectedJob(job),
              className:"p-4 rounded-2xl border transition-all cursor-pointer space-y-2 shadow-xs",
              style:{backgroundColor:"#f8fafc",borderColor:"#e2e8f0"},
              children:[
                p.jsxs("div",{className:"flex items-center justify-between text-xs gap-2",children:[
                  p.jsxs("div",{className:"flex items-center gap-1.5 min-w-0 flex-1",children:[
                    siteLoc?p.jsxs("span",{className:"font-black text-xs md:text-sm truncate",style:{color:"#0f172a"},children:[p.jsx("span",{children:"📍 "}),siteLoc]}):p.jsx("span",{className:"font-black text-xs md:text-sm",style:{color:"#0f172a"},children:dateStr})
                  ]}),
                  p.jsxs("span",{className:"font-black text-sm flex-shrink-0",style:{color:"#0f766e"},children:[bg.totalWithoutFanlightSqFt.toFixed(1)," sq ft"]})
                ]}),
                siteLoc&&p.jsx("p",{className:"text-[10px] font-bold",style:{color:"#94a3b8"},children:dateStr}),
                p.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[11px]",children:[
                  p.jsxs("span",{className:"font-bold px-2 py-0.5 rounded border",style:{backgroundColor:"#ffffff",borderColor:"#e2e8f0",color:"#334155"},children:[job.thaiSize||"3"," Inch Profile"]}),
                  p.jsxs("span",{className:"font-bold px-2 py-0.5 rounded border",style:{backgroundColor:"#f0fdfa",borderColor:"#ccfbf1",color:"#115e59"},children:[bg.nonFanlightCount," Windows"]}),
                  bg.fanlightCount>0&&p.jsxs("span",{className:"font-bold px-2 py-0.5 rounded border",style:{backgroundColor:"#fffbeb",borderColor:"#fde68a",color:"#78350f"},children:[bg.fanlightCount," Pcs Fanlight"]})
                ]}),
                p.jsxs("div",{className:"text-[10px] font-bold text-right pt-1",style:{color:"#0d9488"},children:["Tap to view full billing details →"]})
              ]
            });
          });
        })()})
      ]})
    }),
    selectedJob&&p.jsx(JobDetailModal,{job:selectedJob,onClose:()=>setSelectedJob(null),onRestore:handleRestore,onDelete:()=>handleDeleteCustomerEntry(selectedJob),deleteLabel:"Delete customer work entry",onNavigate})
  ]});
}

function WorkHistoryScreen({onNavigate}){
  const [history,setHistory]=H.useState(()=>{try{return JSON.parse(localStorage.getItem("thai_history")||"[]");}catch(e){return[];}});
  const [hiddenHistoryIds,setHiddenHistoryIds]=H.useState(()=>readPageHiddenEntries("thai_history_page_hidden"));
  const [search,setSearch]=H.useState("");
  const [selectedJob,setSelectedJob]=H.useState(null);
  const [assigningJob,setAssigningJob]=H.useState(null);
  const [assignSearch,setAssignSearch]=H.useState("");
  const [showNewCust,setShowNewCust]=H.useState(false);
  const [newCustName,setNewCustName]=H.useState("");
  const [newCustPhone,setNewCustPhone]=H.useState("");

  H.useEffect(()=>{
    const reload=()=>{try{setHistory(JSON.parse(localStorage.getItem("thai_history")||"[]"));}catch(e){}};
    reload();
    window.addEventListener("history_updated",reload);
    return()=>window.removeEventListener("history_updated",reload);
  },[]);

  H.useEffect(()=>{
    if(!assigningJob)return;
    window.__modal_back_stack=window.__modal_back_stack||[];
    const handler=()=>{setAssigningJob(null);return true;};
    window.__modal_back_stack.push(handler);
    return()=>{
      const idx=window.__modal_back_stack.indexOf(handler);
      if(idx!==-1)window.__modal_back_stack.splice(idx,1);
    };
  },[assigningJob]);

  const filtered=history.filter(h=>{
    if(hiddenHistoryIds.includes(String(h.id)))return false;
    const q=search.toLowerCase().trim();
    if(!q)return true;
    return (h.customerName||"").toLowerCase().includes(q)||(h.customerPhone||"").includes(q)||(h.customerLocation||h.siteLocation||"").toLowerCase().includes(q);
  });

  const handleDelete=(id)=>{
    if(!window.confirm("Hide this entry from Work History only? Customer and Billing pages will remain unchanged."))return;
    const updated=[...hiddenHistoryIds,String(id)];
    if(!persistPageHiddenEntries("thai_history_page_hidden",updated))return;
    setHiddenHistoryIds(Array.from(new Set(updated)));
    if(selectedJob&&String(selectedJob.id)===String(id))setSelectedJob(null);
  };

  const handleClearAllFunc=()=>{
    if(!confirm("Are you sure you want to delete ALL work history? This cannot be undone."))return;
    setHistory([]);
    localStorage.setItem("thai_history",JSON.stringify([]));
    window.dispatchEvent(new CustomEvent("history_updated"));
    setSelectedJob(null);
  };

  const handleRestore=(job)=>{
    try{localStorage.setItem("thai_pending_restore_job",JSON.stringify(job));}catch(e){}
    window.__pending_restore_job=job;
    if(window.__thai_restore_job)window.__thai_restore_job(job);
    setSelectedJob(null);
    if(onNavigate)onNavigate("app1");
  };

  const handleAssignCustomer=(targetJob,custName,custPhone,custLoc)=>{
    if(!targetJob||!custName||!custName.trim())return;
    const cName=custName.trim();
    const cPhone=(custPhone||"").trim();
    const cLoc=(custLoc||targetJob.customerLocation||targetJob.siteLocation||"").trim();

    const updatedHistory=history.map(h=>{
      if(h.id===targetJob.id){
        return {
          ...h,
          customerName:cName,
          customerPhone:cPhone||h.customerPhone||"",
          customerLocation:cLoc||h.customerLocation||""
        };
      }
      return h;
    });
    setHistory(updatedHistory);
    try{
      localStorage.setItem("thai_history",JSON.stringify(updatedHistory));
      if(window.AndroidBridge&&typeof window.AndroidBridge.saveAppData==="function"){
        window.AndroidBridge.saveAppData("thai_history",JSON.stringify(updatedHistory));
      }
    }catch(e){}

    try{
      let curC=JSON.parse(localStorage.getItem("thai_customers_db")||"[]");
      let existIdx=-1;
      if(cPhone){
        existIdx=curC.findIndex(c=>c.name.trim().toLowerCase()===cName.toLowerCase()&&c.phone&&c.phone.trim()===cPhone);
      }else{
        existIdx=curC.findIndex(c=>c.name.trim().toLowerCase()===cName.toLowerCase());
      }
      if(existIdx!==-1){
        if(cLoc)curC[existIdx].lastLocation=cLoc;
        curC[existIdx].totalJobs=(curC[existIdx].totalJobs||0)+1;
        curC[existIdx].updatedAt=Date.now();
      }else{
        curC.push({
          id:"cust_"+Date.now(),
          name:cName,
          phone:cPhone,
          lastLocation:cLoc,
          totalJobs:1,
          updatedAt:Date.now()
        });
      }
      localStorage.setItem("thai_customers_db",JSON.stringify(curC));
      if(window.AndroidBridge&&typeof window.AndroidBridge.saveAppData==="function"){
        window.AndroidBridge.saveAppData("thai_customers_db",JSON.stringify(curC));
      }
    }catch(e){}

    window.dispatchEvent(new CustomEvent("history_updated"));
    window.dispatchEvent(new CustomEvent("customers_updated"));
    setAssigningJob(null);
    setAssignSearch("");
    setShowNewCust(false);
    setNewCustName("");
    setNewCustPhone("");
  };

  return p.jsxs("div",{className:"p-4 md:p-8 max-w-4xl mx-auto space-y-6 pb-24",children:[
    null,
    p.jsx("div",{className:"relative",children:
      p.jsx("input",{
        type:"text",
        value:search,
        onChange:e=>setSearch(e.target.value),
        placeholder:"Search by customer name or phone...",
        className:"w-full px-5 py-3.5 rounded-2xl outline-none font-bold text-xs md:text-sm shadow-sm border",
        style:{backgroundColor:"#ffffff",borderColor:"#e2e8f0",color:"#0f172a"}
      })
    }),
    filtered.length===0?p.jsxs("div",{className:"p-12 text-center rounded-3xl border border-dashed space-y-3",style:{backgroundColor:"#ffffff",borderColor:"#cbd5e1"},children:[
      p.jsx("div",{className:"text-4xl",children:"📋"}),
      p.jsx("h4",{className:"font-black text-base",style:{color:"#334155"},children:"No Work History Yet"}),
      p.jsx("p",{className:"text-xs max-w-sm mx-auto",style:{color:"#94a3b8"},children:"Calculate windows in the Thai calculator, and each completed job will be automatically saved here as a summary!"})
    ]}):
    p.jsx("div",{className:"space-y-3",children:filtered.map((job,idx)=>{
      const isUnknown=!job.customerName||job.customerName==="Unknown Customer"||job.customerName==="Unknown User";
      const bg=computeBillingGuide(job.results);
      const siteLoc=(job.customerLocation||job.siteLocation||job.location||"").trim();
      return p.jsxs("div",{
        key:job.id||idx,
        onClick:()=>setSelectedJob(job),
        className:"p-4 md:p-5 rounded-3xl border shadow-sm transition-all cursor-pointer space-y-2.5",
        style:{backgroundColor:"#ffffff",borderColor:"#e2e8f0"},
        children:[
          p.jsxs("div",{className:"flex items-center justify-between gap-2",children:[
            p.jsxs("div",{className:"flex items-center gap-2.5 flex-1 min-w-0",children:[
              p.jsx("span",{className:"text-lg flex-shrink-0",children:isUnknown?"👤":"💼"}),
              p.jsxs("h3",{className:"font-black text-sm md:text-base flex items-center gap-1.5 flex-wrap",style:{color:isUnknown&&!siteLoc?"#94a3b8":"#0f172a"},children:[
                job.customerName||"Unknown Customer",
                isUnknown?p.jsx("button",{
                  type:"button",
                  onClick:(e)=>{e.stopPropagation();setAssigningJob(job);},
                  className:"inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-black text-xs shadow-xs active:scale-90 transition-transform ml-1 cursor-pointer",
                  title:"Add to Customer Database",
                  children:"+"
                }):null,
                siteLoc?p.jsxs("span",{className:"text-xs md:text-sm font-bold",style:{color:"#0d9488"},children:[" (",siteLoc,")"]}):null
              ]})
            ]}),
            p.jsx("span",{className:"text-[10px] md:text-xs font-bold flex-shrink-0",style:{color:"#94a3b8"},children:formatDateTime(new Date(job.timestamp),"en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:true})})
          ]}),
          job.customerPhone&&p.jsxs("div",{className:"text-xs",style:{color:"#64748b"},children:[
            p.jsxs("span",{children:["📞 ",job.customerPhone]})
          ]}),
          p.jsxs("div",{className:"flex flex-nowrap items-center justify-between gap-2 pt-2 border-t",style:{borderTopColor:"#f1f5f9"},children:[
            p.jsxs("div",{className:"flex flex-nowrap gap-2 text-[10px] font-bold",children:[
              p.jsxs("span",{className:"px-2.5 py-0.5 rounded-full uppercase border whitespace-nowrap flex-shrink-0",style:{backgroundColor:"#f1f5f9",borderColor:"#e2e8f0",color:"#334155"},children:[job.thaiSize||"3"," Inch Profile"]}),
              p.jsxs("span",{className:"px-2.5 py-0.5 rounded-full font-black border whitespace-nowrap flex-shrink-0",style:{backgroundColor:"#f0fdfa",borderColor:"#ccfbf1",color:"#0f766e"},children:[bg.totalWithoutFanlightSqFt.toFixed(1)," sq ft"]}),
              p.jsxs("span",{className:"px-2 py-0.5 rounded-full border whitespace-nowrap flex-shrink-0",style:{backgroundColor:"#f8fafc",borderColor:"#e2e8f0",color:"#475569"},children:[bg.nonFanlightCount+bg.fanlightCount," Windows"]})
            ]}),
            p.jsx("span",{className:"text-xs font-black whitespace-nowrap flex-shrink-0",style:{color:"#0d9488"},children:"Details →"})
          ]})
        ]
      });
    })}),
    selectedJob&&p.jsx(JobDetailModal,{job:selectedJob,onClose:()=>setSelectedJob(null),onRestore:handleRestore,onDelete:handleDelete,deleteLabel:"Delete Work History entry",onNavigate}),
    assigningJob&&p.jsx("div",{
      className:"fixed inset-0 z-[120] flex items-center justify-center p-3 md:p-6 bg-black/60 backdrop-blur-xs transition-opacity",
      onClick:()=>setAssigningJob(null),
      children:p.jsxs("div",{
        className:"bg-white rounded-3xl w-full max-w-lg max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border",
        style:{borderColor:"#cbd5e1"},
        onClick:e=>e.stopPropagation(),
        children:[
          p.jsxs("div",{
            className:"p-4 md:p-5 border-b flex items-center justify-between",
            style:{backgroundColor:"#f8fafc",borderBottomColor:"#e2e8f0"},
            children:[
              p.jsxs("div",{className:"flex items-center gap-2.5",children:[
                p.jsx("div",{className:"w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border",style:{width:"40px",height:"40px",minWidth:"40px",borderRadius:"14px",backgroundColor:"rgba(13, 148, 136, 0.18)",borderColor:"rgba(45, 212, 191, 0.4)",color:"#2dd4bf"},children:p.jsx("svg",{className:"w-5 h-5",style:{width:"20px",height:"20px"},fill:"none",stroke:"currentColor",strokeWidth:"2.2",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})})}),
                p.jsxs("div",{children:[
                  p.jsx("h3",{className:"text-base font-black text-slate-800",children:"Link to Customer"}),
                  p.jsx("p",{className:"text-[10px] text-slate-400 font-bold uppercase tracking-wider",children:"Select a customer to assign this calculation"})
                ]})
              ]}),
              p.jsx("button",{
                type:"button",
                onClick:()=>setAssigningJob(null),
                className:"w-8 h-8 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-400 font-bold text-lg cursor-pointer",
                children:"✕"
              })
            ]
          }),
          p.jsxs("div",{className:"p-4 border-b space-y-3 bg-slate-50/50",style:{borderBottomColor:"#f1f5f9"},children:[
            p.jsx("input",{
              type:"text",
              value:assignSearch,
              onChange:e=>setAssignSearch(e.target.value),
              placeholder:"Search customer by name or phone...",
              className:"w-full px-4 py-2.5 rounded-2xl outline-none font-bold text-xs shadow-xs border bg-white",
              style:{borderColor:"#cbd5e1",color:"#0f172a"}
            }),
            p.jsxs("div",{className:"flex items-center justify-between text-xs",children:[
              p.jsx("span",{className:"font-bold text-slate-500",children:"Customer not listed?"}),
              p.jsx("button",{
                type:"button",
                onClick:()=>setShowNewCust(!showNewCust),
                className:"text-teal-600 font-black hover:underline cursor-pointer",
                children:showNewCust?"Cancel":"+ Add New Customer"
              })
            ]}),
            showNewCust&&p.jsxs("div",{className:"rounded-2xl border space-y-3 mt-1 shadow-sm",style:{padding:"16px",backgroundColor:document.documentElement.classList.contains("dark")?"rgba(15, 23, 42, 0.65)":"#f8fafc",border:document.documentElement.classList.contains("dark")?"1.5px solid #0d9488":"1.5px solid #cbd5e1",borderRadius:"16px"},children:[
              p.jsxs("div",{className:"flex items-center gap-1.5 pb-2.5 border-b",style:{borderBottomColor:"rgba(45, 212, 191, 0.25)"},children:[
                p.jsx("svg",{className:"w-4 h-4 flex-shrink-0",style:{color:"#2dd4bf"},fill:"none",stroke:"currentColor",strokeWidth:"2.5",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4v16m8-8H4"})}),
                p.jsx("h4",{className:"text-xs font-black tracking-wider uppercase",style:{color:"#2dd4bf"},children:"Quick Add Customer"})
              ]}),
              p.jsx("input",{
                type:"text",
                value:newCustName,
                onChange:e=>setNewCustName(e.target.value),
                placeholder:"Customer Name (Required)",
                className:"w-full px-3.5 py-2.5 rounded-xl border text-xs font-bold outline-none",
                style:{borderColor:document.documentElement.classList.contains("dark")?"#334155":"#cbd5e1",backgroundColor:document.documentElement.classList.contains("dark")?"#0f172a":"#ffffff",color:document.documentElement.classList.contains("dark")?"#f8fafc":"#0f172a"}
              }),
              p.jsx("input",{
                type:"tel",
                value:newCustPhone,
                onChange:e=>setNewCustPhone(e.target.value),
                placeholder:"Phone Number (Optional)",
                className:"w-full px-3.5 py-2.5 rounded-xl border text-xs font-bold outline-none",
                style:{borderColor:document.documentElement.classList.contains("dark")?"#334155":"#cbd5e1",backgroundColor:document.documentElement.classList.contains("dark")?"#0f172a":"#ffffff",color:document.documentElement.classList.contains("dark")?"#f8fafc":"#0f172a"}
              }),
              p.jsx("button",{
                type:"button",
                disabled:!newCustName.trim(),
                onClick:()=>handleAssignCustomer(assigningJob,newCustName,newCustPhone),
                className:"w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-black text-xs uppercase tracking-wider shadow-sm transition-all active:scale-[0.98] cursor-pointer",
                children:"Create & Link Calculation"
              })
            ]})
          ]}),
          p.jsx("div",{className:"flex-1 overflow-y-auto p-3 space-y-2 max-h-72",children:(()=>{
            const allC = (()=>{try{return JSON.parse(localStorage.getItem("thai_customers_db")||"[]");}catch(e){return[];}})();
            const q = assignSearch.toLowerCase().trim();
            const filteredC = allC.filter(c=>!q || (c.name||"").toLowerCase().includes(q) || (c.phone||"").includes(q));
            if(filteredC.length===0){
              return p.jsxs("div",{className:"p-8 text-center space-y-2",children:[
                p.jsx("div",{className:"text-3xl",children:"👥"}),
                p.jsx("p",{className:"text-xs font-bold text-slate-500",children:"No matching customers found."}),
                p.jsx("p",{className:"text-[11px] text-slate-400",children:"Use '+ Add New Customer' above to create one."})
              ]});
            }
            return filteredC.map(cust=>p.jsxs("div",{
              key:cust.id||cust.name,
              onClick:()=>handleAssignCustomer(assigningJob,cust.name,cust.phone,cust.lastLocation),
              className:"p-3 rounded-2xl border bg-white hover:border-teal-400 hover:bg-teal-50/30 flex items-center justify-between gap-3 cursor-pointer transition-all active:scale-[0.98]",
              style:{borderColor:"#e2e8f0"},
              children:[
                p.jsxs("div",{className:"flex items-center gap-3 min-w-0 flex-1",children:[
                  p.jsx("div",{className:"w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-sm font-black text-slate-600 flex-shrink-0",children:(cust.name||"C")[0].toUpperCase()}),
                  p.jsxs("div",{className:"min-w-0 flex-1",children:[
                    p.jsx("h4",{className:"font-black text-xs md:text-sm text-slate-800 truncate",children:cust.name}),
                    cust.phone&&p.jsxs("p",{className:"text-[11px] text-slate-500 font-bold",children:["📞 ",cust.phone]}),
                    cust.lastLocation&&p.jsxs("p",{className:"text-[10px] text-teal-600 font-bold truncate",children:["📍 ",cust.lastLocation]})
                  ]})
                ]}),
                p.jsx("span",{className:"px-2.5 py-1 rounded-xl bg-teal-50 text-teal-700 font-black text-[10px] border border-teal-100 flex-shrink-0",children:"Select →"})
              ]
            }));
          })()})
        ]
      })
    })
  ]});
}

function readThaiHistoryForBilling(){
  try{
    let raw=localStorage.getItem("thai_history")||"";
    if((!raw||raw==="[]")&&window.AndroidBridge&&typeof window.AndroidBridge.getAppData==="function"){
      raw=window.AndroidBridge.getAppData("thai_history")||"";
    }
    const parsed=JSON.parse(raw||"[]");
    return Array.isArray(parsed)?parsed:[];
  }catch(e){return[];}
}

function DeleteEntryIcon({onDelete,label}){
  const title=label||"Delete";
  return p.jsx("button",{type:"button",onClick:e=>{e.stopPropagation();if(onDelete)onDelete();},title,
    "aria-label":title,
    className:"invoice-delete-icon",
    children:p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:p.jsxs("g",{children:[p.jsx("path",{d:"M3 6h18"}),p.jsx("path",{d:"M8 6V4h8v2"}),p.jsx("path",{d:"M19 6l-1 14H6L5 6"}),p.jsx("path",{d:"M10 11v6"}),p.jsx("path",{d:"M14 11v6"})]})})
  });
}

function BillingScreen({onNavigate}){
  const [history,setHistory]=H.useState(()=>readThaiHistoryForBilling());
  const [billingRecords,setBillingRecords]=H.useState(()=>readThaiBillingRecords());
  const [selectedJob,setSelectedJob]=H.useState(null);
  const [hiddenBillingIds,setHiddenBillingIds]=H.useState(()=>readPageHiddenEntries("thai_billing_page_hidden"));

  H.useEffect(()=>{
    const reload=()=>{
      setHistory(readThaiHistoryForBilling());
      setBillingRecords(readThaiBillingRecords());
    };
    reload();
    const focusId=window.__billing_focus_job_id;
    if(focusId){
      const target=readThaiHistoryForBilling().find(job=>String(job.id)===String(focusId));
      if(target)setSelectedJob(target);
      delete window.__billing_focus_job_id;
    }
    window.addEventListener("history_updated",reload);
    window.addEventListener("billing_records_updated",reload);
    return()=>{
      window.removeEventListener("history_updated",reload);
      window.removeEventListener("billing_records_updated",reload);
    };
  },[]);

  const handleDeleteBilling=(job)=>{
    const name=String(job.customerName||"Unknown Customer").trim()||"Unknown Customer";
    if(!window.confirm("Hide the Billing entry for "+name+" from the Billing page only? Its rates and Work History record will stay unchanged."))return;
    const updated=[...hiddenBillingIds,String(job.id)];
    if(!persistPageHiddenEntries("thai_billing_page_hidden",updated))return;
    setHiddenBillingIds(Array.from(new Set(updated)));
    if(selectedJob&&String(selectedJob.id)===String(job.id))setSelectedJob(null);
  };

  const openRates=()=>{
    if(onNavigate)onNavigate("app1");
    window.setTimeout(()=>window.__openBillingDetails&&window.__openBillingDetails(),220);
  };
  const billedJobs=history
    .filter(job=>{
      if(!job||job.id==null||hiddenBillingIds.includes(String(job.id)))return false;
      const record=billingRecords[String(job.id)];
      return record&&(String(record.squareFeetRate??"").trim()!==""||String(record.fanlightRate??"").trim()!=="");
    })
    .sort((a,b)=>(Number(b.timestamp)||0)-(Number(a.timestamp)||0));

  return p.jsxs("div",{className:"h-full overflow-y-auto bg-slate-50 p-4 md:p-6",children:[
    p.jsxs("div",{className:"max-w-2xl mx-auto space-y-4",children:[
      billedJobs.length===0?p.jsxs("div",{className:"p-10 text-center rounded-3xl border border-dashed space-y-3 bg-white",style:{borderColor:"#cbd5e1",padding:"24px 16px 32px",boxSizing:"border-box"},children:[
        p.jsx("div",{className:"text-4xl",children:"🧾"}),
        p.jsx("h3",{className:"font-black text-base",style:{color:"#334155"},children:"No Billing Entries Yet"}),
        p.jsx("p",{className:"text-xs max-w-sm mx-auto",style:{color:"#94a3b8"},children:"Enter a Square Feet Rate or Fanlight Rate before generating a AluCraft entry to add it here."}),
        p.jsx("button",{type:"button",onClick:openRates,className:"px-4 py-2.5 rounded-xl bg-teal-600 text-white text-xs font-black",children:"Set Billing Rates"})
      ]}):
      p.jsx("div",{className:"space-y-3",children:billedJobs.map((job,idx)=>{
        const guide=computeBillingGuide(job.results);
        const record=billingRecords[String(job.id)];
        const bill=calculateWorkBill(guide,record);
        const siteLoc=(job.customerLocation||job.siteLocation||job.location||"").trim();
        return p.jsxs("div",{
          key:job.id||idx,
          onClick:()=>setSelectedJob(job),
          className:"p-4 md:p-5 rounded-3xl border shadow-sm transition-all cursor-pointer space-y-2.5 bg-white",
          style:{borderColor:"#e2e8f0"},
          children:[
            p.jsxs("div",{className:"flex items-start justify-between gap-2",children:[
              p.jsxs("div",{className:"min-w-0",children:[
                p.jsx("h3",{className:"font-black text-sm md:text-base truncate",style:{color:"#0f172a"},children:job.customerName||"Unknown Customer"}),
                siteLoc&&p.jsx("p",{className:"text-[10px] md:text-xs font-bold truncate mt-0.5",style:{color:"#0d9488"},children:siteLoc}),
                job.customerPhone&&p.jsxs("p",{className:"text-[10px] font-bold mt-0.5",style:{color:"#64748b"},children:["📞 ",job.customerPhone]})
              ]}),
              p.jsx("span",{className:"text-[9px] md:text-[10px] font-bold text-right flex-shrink-0",style:{color:"#94a3b8"},children:formatDateTime(new Date(job.timestamp),"en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:true})})
            ]}),
            p.jsxs("div",{className:"flex flex-wrap gap-2 pt-2 border-t",style:{borderTopColor:"#f1f5f9"},children:[
              p.jsxs("span",{className:"px-2.5 py-1 rounded-full uppercase border text-[9px] font-black",style:{backgroundColor:"#f1f5f9",borderColor:"#e2e8f0",color:"#334155"},children:[job.thaiSize||"3"," Inch Profile"]}),
              p.jsxs("span",{className:"px-2.5 py-1 rounded-full border text-[9px] font-black",style:{backgroundColor:"#f0fdfa",borderColor:"#ccfbf1",color:"#0f766e"},children:[formatSqFt(guide.totalWithoutFanlightSqFt)," sq ft"]}),
              p.jsxs("span",{className:"px-2.5 py-1 rounded-full border text-[9px] font-black",style:{backgroundColor:"#fffbeb",borderColor:"#fde68a",color:"#92400e"},children:[guide.fanlightCount," Fanlights"]})
            ]}),
            p.jsxs("div",{className:"flex items-center justify-between gap-3 pt-1",children:[
              p.jsx("span",{className:"text-[10px] font-black uppercase tracking-wide",style:{color:"#64748b"},children:"Final Bill In Taka"}),
              p.jsx("span",{className:"text-sm md:text-base font-black",style:{color:"#0f766e"},children:formatBillMoney(bill?bill.finalAmount:0,false)})
            ]})
          ]
        });
      })}),
      selectedJob&&p.jsx(JobDetailModal,{job:selectedJob,onClose:()=>setSelectedJob(null),onDelete:()=>handleDeleteBilling(selectedJob),deleteLabel:"Delete billing entry",hideCuttingSpecs:true,hideBillingCurrencySymbol:true,billingActions:true})
    ]})
  ]});
}

function SettingsScreen({onNavigate}){
  const [theme,setTheme]=H.useState(()=>{try{return localStorage.getItem("app_theme")||"light";}catch(e){return"light";}});
  const [custCount,setCustCount]=H.useState(()=>{try{return JSON.parse(localStorage.getItem("thai_customers_db")||"[]").length;}catch(e){return 0;}});
  const [histCount,setHistCount]=H.useState(()=>{try{return JSON.parse(localStorage.getItem("thai_history")||"[]").length;}catch(e){return 0;}});

  // Customer Management state
  const [isCustModalOpen, setIsCustModalOpen]=H.useState(!1);
  const [customersList, setCustomersList]=H.useState([]);
  const [custQuery, setCustQuery]=H.useState("");
  const [editingCust, setEditingCust]=H.useState(null);

  // Google Drive AppData Backup state
  const [googleAccount, setGoogleAccount]=H.useState(()=>{try{return localStorage.getItem("thai_backup_account")||"";}catch(e){return"";}});
  const [autoBackup, setAutoBackup]=H.useState(()=>{try{return localStorage.getItem("thai_backup_auto")!=="false";}catch(e){return!0;}});
  const [lastBackupTime, setLastBackupTime]=H.useState(()=>{try{return localStorage.getItem("thai_backup_last_time_verified")||"";}catch(e){return"";}});
  const [backupStats, setBackupStats]=H.useState(()=>{
    try{
      const s=localStorage.getItem("thai_backup_stats_verified");
      return s?JSON.parse(s):null;
    }catch(e){return null;}
  });
  const [backupLoading, setBackupLoading]=H.useState(!1);

  // Local File Input Ref
  const localFileRef = H.useRef(null);

  H.useEffect(()=>{
    const reload=()=>{
      try{
        const c=JSON.parse(localStorage.getItem("thai_customers_db")||"[]");
        const h=JSON.parse(localStorage.getItem("thai_history")||"[]");
        setCustCount(c.length);
        setHistCount(h.length);
      }catch(e){}
    };
    reload();

    // Keep a local snapshot for recovery, but never label it or send it as a Drive backup.
    try{
      const existingSnap = localStorage.getItem("thai_cloud_backup_snapshot");
      const c=JSON.parse(localStorage.getItem("thai_customers_db")||"[]");
      const h=JSON.parse(localStorage.getItem("thai_history")||"[]");
      if(!existingSnap && (c.length>0 || h.length>0)){
        const pkg=collectAllAppBackupData("Local Snapshot");
        const jsonStr=JSON.stringify(pkg);
        localStorage.setItem("thai_cloud_backup_snapshot",jsonStr);
      }
    }catch(e){}

    window.triggerAutoCloudBackup=function(){
      try{
        const auto=localStorage.getItem("thai_backup_auto");
        const account=localStorage.getItem("thai_backup_account");
        if(auto==="false"||!account||(window.__suppressAutoCloudBackupUntil||0)>Date.now())return;
        performBackup(account,!0);
      }catch(e){}
    };

    window.onGoogleAccountSelected=function(selectedEmail){
      if(selectedEmail){
        localStorage.setItem("thai_backup_account",selectedEmail);
        setGoogleAccount(selectedEmail);
        localStorage.setItem("thai_backup_auto","true");
        setAutoBackup(!0);
        if(window.__pending_restore_after_account){
          window.__pending_restore_after_account=!1;
          executeRestore(selectedEmail);
        }else{
          performBackup(selectedEmail);
        }
      }else{
        window.__pending_restore_after_account=!1;
        setBackupLoading(!1);
      }
    };
    window.onGoogleAccountPickerError=function(message){
      window.__pending_restore_after_account=!1;
      alert("Could not open Google account selection. "+(message||"Try again on this device."));
    };
    window.onDriveBackupResult=function(resultText){
      let result={};
      try{result=JSON.parse(resultText||"{}");}catch(e){}
      const requests=window.__pendingDriveBackupRequests||{};
      const request=requests[result.operationId];
      delete requests[result.operationId];
      window.__pendingDriveBackupRequests=requests;
      setBackupLoading(!1);
      if(result.success&&request){
        const pkg=request.pkg;
        const statsObj={custs:(pkg.customers||[]).length,hist:(pkg.history||[]).length,size:(request.json.length/1024).toFixed(1)};
        localStorage.setItem("thai_cloud_backup_snapshot",request.json);
        localStorage.setItem("thai_backup_last_time_verified",pkg.displayDate);
        localStorage.setItem("thai_backup_stats_verified",JSON.stringify(statsObj));
        setLastBackupTime(pkg.displayDate);
        setBackupStats(statsObj);
      }
      if(!result.success){
        const error="Google Drive backup failed: "+(result.message||"Unknown error");
        if(request&&request.silent&&window.AndroidBridge&&typeof window.AndroidBridge.showToast==="function")window.AndroidBridge.showToast(error);
        else alert(error);
      }else if(!(request&&request.silent)){
        alert("Backup complete in Google Drive. The remote file was checked.");
      }
    };
    window.onDriveRestoreResult=function(resultText){
      let result={};
      try{result=JSON.parse(resultText||"{}");}catch(e){}
      if(!result.success){
        alert("Google Drive restore failed: "+(result.message||"Unknown error"));
        return;
      }
      try{
        const pkg=JSON.parse(result.data||"");
        if(!isValidBackupPackage(pkg))throw new Error("The Drive backup has an unsupported format.");
        const account=localStorage.getItem("thai_backup_account")||googleAccount;
        restoreAllAppBackupData(pkg,account);
        if(window.AndroidBridge&&typeof window.AndroidBridge.cacheRestoredDriveBackup==="function")window.AndroidBridge.cacheRestoredDriveBackup(result.data,account);
        localStorage.setItem("thai_cloud_backup_snapshot",result.data);
        alert("Restore complete from Google Drive.");
        if(window.AndroidBridge&&typeof window.AndroidBridge.restartApp==="function")window.AndroidBridge.restartApp();
        else window.location.reload();
      }catch(e){
        alert("Google Drive restore failed: "+(e.message||"Could not apply the backup."));
      }
    };
    window.onBackupFileSelected=(jsonStr,fileName)=>{
      handleImportLocalJsonText(jsonStr,fileName);
    };

    window.addEventListener("customers_updated",reload);
    window.addEventListener("history_updated",reload);
    return()=>{
      window.removeEventListener("customers_updated",reload);
      window.removeEventListener("history_updated",reload);
      delete window.onGoogleAccountSelected;
      delete window.onGoogleAccountPickerError;
      delete window.onDriveBackupResult;
      delete window.onDriveRestoreResult;
      delete window.onBackupFileSelected;
    };
  },[]);

  // Modal Back Navigation
  H.useEffect(()=>{
    if(!isCustModalOpen)return;
    window.__modal_back_stack = window.__modal_back_stack || [];
    const handler = () => {
      if (editingCust) {
        setEditingCust(null);
        return true;
      }
      setIsCustModalOpen(!1);
      return true;
    };
    window.__modal_back_stack.push(handler);
    return () => {
      const idx = window.__modal_back_stack.indexOf(handler);
      if (idx !== -1) window.__modal_back_stack.splice(idx, 1);
    };
  },[isCustModalOpen, editingCust]);

  const changeTheme=(mode)=>{
    setTheme(mode);
    localStorage.setItem("app_theme",mode);
    const isDark=mode==="dark"||(mode==="system"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches);
    if(isDark)document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  const handleConnectGoogle=()=>{
    if(window.AndroidBridge&&typeof window.AndroidBridge.chooseGoogleAccount==="function"){
      try{
        window.AndroidBridge.chooseGoogleAccount();
        return;
      }catch(e){}
    }
    alert("Google Drive account selection is available in the Android app.");
  };

  const handleDisconnectGoogle=()=>{
    if(!confirm("Are you sure you want to disconnect Google Account ("+googleAccount+")? Automatic cloud sync will be paused."))return;
    if(window.AndroidBridge&&typeof window.AndroidBridge.revokeDriveAccess==="function"){
      try{window.AndroidBridge.revokeDriveAccess(googleAccount);}catch(e){}
    }
    localStorage.removeItem("thai_backup_account");
    setGoogleAccount("");
  };

  const handleToggleAutoBackup=()=>{
    const newVal=!autoBackup;
    setAutoBackup(newVal);
    localStorage.setItem("thai_backup_auto",String(newVal));
    if(newVal){
      alert("Automatic Backup Turned On");
      if(googleAccount){
        performBackup(googleAccount);
      }
    }else{
      alert("Automatic Backup Turned Off");
    }
  };

  const collectAllAppBackupData=(targetAcc)=>{
    // 1. Customers
    let customers=[];
    let customerStoragePresent=!1;
    try{
      const stored=localStorage.getItem("thai_customers_db");
      customerStoragePresent=stored!==null;
      customers=JSON.parse(stored||"[]");
    }catch(e){}
    if(!customerStoragePresent&&window.AndroidBridge&&typeof window.AndroidBridge.getStoredAppData==="function"){
      try{
        const c=window.AndroidBridge.getStoredAppData("thai_customers_db");
        if(c&&c.length>2)customers=JSON.parse(c);
      }catch(e){}
    }

    // 2. Work History
    let history=[];
    let historyStoragePresent=!1;
    try{
      const stored=localStorage.getItem("thai_history");
      historyStoragePresent=stored!==null;
      history=JSON.parse(stored||"[]");
    }catch(e){}
    if(!historyStoragePresent&&window.AndroidBridge&&typeof window.AndroidBridge.getStoredAppData==="function"){
      try{
        const h=window.AndroidBridge.getStoredAppData("thai_history");
        if(h&&h.length>2)history=JSON.parse(h);
      }catch(e){}
    }

    // 3. Calculator Active Data
    let calculator=null;
    if(window.__thai_get_calculator_state){
      try{calculator=window.__thai_get_calculator_state();}catch(e){}
    }
    if(!calculator){
      try{
        const calcStr=localStorage.getItem("thai_active_calculator");
        if(calcStr!==null)calculator=calcStr==="null"?null:JSON.parse(calcStr);
      }catch(e){}
    }
    if(!calculator&&localStorage.getItem("thai_active_calculator")===null&&window.AndroidBridge&&typeof window.AndroidBridge.getStoredAppData==="function"){
      try{
        const calcStr=window.AndroidBridge.getStoredAppData("thai_active_calculator");
        if(calcStr&&calcStr.length>5)calculator=JSON.parse(calcStr);
      }catch(e){}
    }

    // 4. Base-8 Calculator Tape History
    let base8Tape=[];
    let tapeStoragePresent=!1;
    try{
      const stored=localStorage.getItem("google_base8_tape");
      tapeStoragePresent=stored!==null;
      base8Tape=JSON.parse(stored||"[]");
    }catch(e){}
    if(!tapeStoragePresent&&window.AndroidBridge&&typeof window.AndroidBridge.getStoredAppData==="function"){
      try{
        const b=window.AndroidBridge.getStoredAppData("google_base8_tape");
        if(b&&b.length>2)base8Tape=JSON.parse(b);
      }catch(e){}
    }

    // 5. Complete LocalStorage Dump
    const storageDump={};
    try{
      for(let i=0;i<localStorage.length;i++){
        const k=localStorage.key(i);
        if(k&&!k.startsWith("thai_backup_")&&k!=="thai_cloud_backup_snapshot"){
          storageDump[k]=localStorage.getItem(k);
        }
      }
    }catch(e){}
    // Include invoice data held by the native bridge even when the invoice page has a separate WebView origin.
    try{
      if(window.AndroidBridge&&typeof window.AndroidBridge.getAppData==="function"){
        ["invoice_generator_records","invoice_shop_profile"].forEach(key=>{
          if(!Object.prototype.hasOwnProperty.call(storageDump,key)){
            const value=window.AndroidBridge.getAppData(key);
            if(value)storageDump[key]=value;
          }
        });
      }
    }catch(e){}

    const nowStr=formatDateTime(new Date(),"en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:true});
    return {
      type:"thai_fabricator_complete_backup",
      version:"2.6.0",
      timestamp:new Date().toISOString(),
      displayDate:nowStr,
      account:targetAcc||localStorage.getItem("thai_backup_account")||"Local Account",
      appTheme:localStorage.getItem("app_theme")||"light",
      customers:customers,
      history:history,
      calculator:calculator,
      base8Tape:base8Tape,
      storageDump:storageDump
    };
  };

  const isValidBackupPackage=(pkg)=>{
    if(Array.isArray(pkg))return pkg.length>0&&!!pkg[0]&&(Array.isArray(pkg[0].results)||typeof pkg[0].name==="string");
    if(!pkg||typeof pkg!=="object")return!1;
    const hasKnown=["customers","clients","customerList","history","jobs","records","workHistory","calculator","base8Tape","tape","storageDump"].some(k=>Object.prototype.hasOwnProperty.call(pkg,k));
    return hasKnown&&
      (!Object.prototype.hasOwnProperty.call(pkg,"customers")||Array.isArray(pkg.customers))&&
      (!Object.prototype.hasOwnProperty.call(pkg,"history")||Array.isArray(pkg.history))&&
      (!Object.prototype.hasOwnProperty.call(pkg,"storageDump")||(pkg.storageDump&&typeof pkg.storageDump==="object"&&!Array.isArray(pkg.storageDump)))&&
      (!Object.prototype.hasOwnProperty.call(pkg,"calculator")||pkg.calculator==null||(typeof pkg.calculator==="object"&&!Array.isArray(pkg.calculator)));
  };

  const restoreAllAppBackupData=(pkg,targetAcc)=>{
    if(!isValidBackupPackage(pkg))throw new Error("The backup data is invalid or unsupported.");
    let custs=pkg.customers||pkg.clients||pkg.customerList||[];
    let hist=pkg.history||pkg.jobs||pkg.records||pkg.workHistory||[];
    let calc=pkg.calculator||null;
    let base8=pkg.base8Tape||pkg.tape||[];

    if(Array.isArray(pkg)){
      if(pkg.length>0&&pkg[0].results)hist=pkg;
      else if(pkg.length>0&&pkg[0].name)custs=pkg;
    }

    if(!Array.isArray(custs)||!Array.isArray(hist)||!Array.isArray(base8))throw new Error("The backup contains invalid customer, work, or tape data.");
    const entries={};

    // Restore full storageDump first if present, while keeping backup metadata local.
    if(pkg.storageDump&&typeof pkg.storageDump==="object"){
      for(const [k,v] of Object.entries(pkg.storageDump)){
        if(v!=null&&!k.startsWith("thai_backup_")&&k!=="thai_cloud_backup_snapshot")entries[k]=typeof v==="string"?v:JSON.stringify(v);
      }
    }
    entries.thai_customers_db=JSON.stringify(custs);
    entries.thai_history=JSON.stringify(hist);
    if(calc){
      entries.thai_active_calculator=JSON.stringify(calc);
      entries.thai_pending_restore_calculator=JSON.stringify(calc);
    }
    entries.google_base8_tape=JSON.stringify(base8);
    if(pkg.appTheme)entries.app_theme=pkg.appTheme;

    // Check browser storage before committing to the Android preferences store.
    const probeKey="__thai_restore_storage_probe__";
    const oldProbe=localStorage.getItem(probeKey);
    try{localStorage.setItem(probeKey,"1");}finally{
      if(oldProbe===null)localStorage.removeItem(probeKey);
      else localStorage.setItem(probeKey,oldProbe);
    }

    const previous=new Map();
    for(const key of Object.keys(entries))previous.set(key,localStorage.getItem(key));
    const previousAccount=localStorage.getItem("thai_backup_account");
    try{
      for(const [key,value] of Object.entries(entries))localStorage.setItem(key,value);
      if(targetAcc)localStorage.setItem("thai_backup_account",targetAcc);
      if(window.AndroidBridge&&typeof window.AndroidBridge.saveAppDataBatch==="function"){
        if(!window.AndroidBridge.saveAppDataBatch(JSON.stringify(entries)))throw new Error("The app could not persist the restored data.");
      }else if(window.AndroidBridge&&typeof window.AndroidBridge.saveAppData==="function"){
        for(const [key,value] of Object.entries(entries)){
          if(!window.AndroidBridge.saveAppData(key,value))throw new Error("The app could not persist restored data.");
        }
      }
    }catch(error){
      for(const [key,value] of previous){
        if(value===null)localStorage.removeItem(key);
        else localStorage.setItem(key,value);
      }
      if(previousAccount===null)localStorage.removeItem("thai_backup_account");
      else localStorage.setItem("thai_backup_account",previousAccount);
      throw error;
    }

    setCustCount(custs.length);
    setHistCount(hist.length);
    window.__suppressAutoCloudBackupUntil=Date.now()+10000;
    window.dispatchEvent(new CustomEvent("customers_updated"));
    window.dispatchEvent(new CustomEvent("history_updated"));
    window.dispatchEvent(new CustomEvent("calculator_restored",{detail:calc}));
    return!0;
  };

  const performBackup=(acc,silent)=>{
    const targetAcc=acc||googleAccount;
    if(!targetAcc){
      window.__pending_restore_after_account=!1;
      if(!silent)handleConnectGoogle();
      return;
    }
    setBackupLoading(!0);
    try{
      const pkg=collectAllAppBackupData(targetAcc);
      const jsonStr=JSON.stringify(pkg);
      if(!window.AndroidBridge||typeof window.AndroidBridge.requestDriveBackup!=="function")throw new Error("Google Drive backup is not available in this environment.");
      const operationId="backup-"+Date.now()+"-"+Math.random().toString(36).slice(2);
      window.__pendingDriveBackupRequests=window.__pendingDriveBackupRequests||{};
      window.__pendingDriveBackupRequests[operationId]={pkg:pkg,json:jsonStr,silent:!!silent};
      if(!window.AndroidBridge.requestDriveBackup(jsonStr,targetAcc,operationId)){
        delete window.__pendingDriveBackupRequests[operationId];
        throw new Error("The app could not start Google Drive backup.");
      }
    }catch(e){
      setBackupLoading(!1);
      if(!silent)alert("Google Drive backup failed: "+e.message);
      else if(window.AndroidBridge&&typeof window.AndroidBridge.showToast==="function")window.AndroidBridge.showToast("Google Drive backup failed: "+e.message);
    }
  };

  const executeRestore=(acc)=>{
    const targetAcc=acc||googleAccount;
    if(!targetAcc){
      alert("Select a Google account first.");
      return;
    }
    if(!window.AndroidBridge||typeof window.AndroidBridge.requestDriveRestore!=="function"){
      alert("Google Drive restore is available in the Android app.");
      return;
    }
    const operationId="restore-"+Date.now()+"-"+Math.random().toString(36).slice(2);
    if(!window.AndroidBridge.requestDriveRestore(targetAcc,operationId))alert("The app could not start Google Drive restore.");
  };

  const handleRestoreFromDrive=()=>{
    if(!googleAccount){
      window.__pending_restore_after_account=!0;
      handleConnectGoogle();
      return;
    }
    executeRestore(googleAccount);
  };

  // Local Single-File Export (.json)
  const handleExportLocalFile=()=>{
    try{
      const pkg=collectAllAppBackupData(googleAccount||"Local Backup");
      const fileName=`Thai_Fabrication_FullBackup_${Date.now()}.json`;
      const jsonStr=JSON.stringify(pkg,null,2);

      let savedNative=!1;
      if(window.AndroidBridge&&typeof window.AndroidBridge.saveLocalBackupFile==="function"){
        try{
          savedNative=window.AndroidBridge.saveLocalBackupFile(fileName,jsonStr);
        }catch(e){}
      }

      // Browser download fallback
      try{
        const blob=new Blob([jsonStr],{type:"application/json"});
        const url=URL.createObjectURL(blob);
        const a=document.createElement("a");
        a.href=url;
        a.download=fileName;
        a.click();
        URL.revokeObjectURL(url);
      }catch(e){}

      if(!savedNative){
        alert("Backup Complete In Download Folder.");
      }
    }catch(e){
      alert("Export error: "+e.message);
    }
  };

  const handleImportLocalJsonText=(jsonStr,fileName)=>{
    try{
      const pkg=JSON.parse(jsonStr);
      let custs=pkg.customers||pkg.clients||pkg.customerList||[];
      let hist=pkg.history||pkg.jobs||pkg.records||pkg.workHistory||[];
      let calc=pkg.calculator||null;

      if(Array.isArray(pkg)){
        if(pkg.length>0&&pkg[0].results)hist=pkg;
        else if(pkg.length>0&&pkg[0].name)custs=pkg;
      }

      const hasRestorableStorage=Object.keys(pkg.storageDump||{}).some(key=>key!=="app_theme"&&!key.startsWith("thai_backup_")&&key!=="thai_cloud_backup_snapshot");
      if(custs.length===0&&hist.length===0&&!calc&&!hasRestorableStorage){
        alert("⚠️ This backup file contains no data.");
        return;
      }

      if(!isValidBackupPackage(pkg))throw new Error("This backup file has an unsupported format.");
      restoreAllAppBackupData(pkg,null);

      alert("Restore Complete From Local Storage");
      if(window.AndroidBridge&&typeof window.AndroidBridge.restartApp==="function"){
        window.AndroidBridge.restartApp();
      }else{
        window.location.reload();
      }
    }catch(err){
      alert("Invalid backup file: "+err.message);
    }
  };

  // Local Single-File Import (.json)
  const handleImportLocalFile=(e)=>{
    const file=e.target.files&&e.target.files[0];
    if(!file)return;
    const reader=new FileReader();
    reader.onload=(event)=>{
      handleImportLocalJsonText(event.target.result,file.name);
      if(localFileRef.current)localFileRef.current.value="";
    };
    reader.readAsText(file);
  };

  const openCustomerManager=()=>{
    try{
      const c=JSON.parse(localStorage.getItem("thai_customers_db")||"[]");
      setCustomersList(c);
    }catch(e){
      setCustomersList([]);
    }
    setEditingCust(null);
    setCustQuery("");
    setIsCustModalOpen(!0);
  };

  const saveEditedCustomer=()=>{
    if(!editingCust||!editingCust.name.trim()){
      alert("Customer name cannot be empty!");
      return;
    }
    try{
      const raw=JSON.parse(localStorage.getItem("thai_customers_db")||"[]");
      const updated=raw.map(item=>{
        if(item.name===editingCust.originalName){
          return {
            ...item,
            name:editingCust.name.trim(),
            phone:editingCust.phone.trim()
          };
        }
        return item;
      });
      localStorage.setItem("thai_customers_db",JSON.stringify(updated));
      setCustomersList(updated);
      setEditingCust(null);
      window.dispatchEvent(new CustomEvent("customers_updated"));
      if(typeof window.triggerAutoCloudBackup==="function")window.triggerAutoCloudBackup();
      alert("Customer details updated successfully!");
    }catch(e){
      alert("Error: "+e.message);
    }
  };

  const deleteCustomerProfile=(custName)=>{
    if(!confirm("Are you sure you want to delete customer '"+custName+"'?\n\n⚠️ Note: All past Work History and calculation records will remain completely untouched and safe."))return;
    try{
      const raw=JSON.parse(localStorage.getItem("thai_customers_db")||"[]");
      const updated=raw.filter(item=>item.name!==custName);
      localStorage.setItem("thai_customers_db",JSON.stringify(updated));
      setCustomersList(updated);
      setCustCount(updated.length);
      window.dispatchEvent(new CustomEvent("customers_updated"));
      if(typeof window.triggerAutoCloudBackup==="function")window.triggerAutoCloudBackup();
      alert("Customer profile deleted. (Work history records remain completely untouched).");
    }catch(e){
      alert("Error: "+e.message);
    }
  };

  const filteredCustomers=customersList.filter(c=>{
    if(!custQuery.trim())return!0;
    const q=custQuery.toLowerCase();
    return (c.name||"").toLowerCase().includes(q)||(c.phone||"").toLowerCase().includes(q);
  });

  return p.jsxs("div",{className:"p-4 md:p-8 max-w-2xl mx-auto space-y-6 pb-24",children:[
    null,

    // App Theme Card (Simple, Clean & Elegant)
    p.jsxs("div",{className:"p-5 md:p-6 rounded-3xl border shadow-sm space-y-3",style:{backgroundColor:"#ffffff",borderColor:"#e2e8f0"},children:[
      p.jsxs("div",{children:[
        p.jsx("h3",{className:"font-black text-sm md:text-base",style:{color:"#0f172a"},children:"App Theme"}),
        p.jsx("p",{className:"text-xs font-medium mt-0.5",style:{color:"#94a3b8"},children:"Choose your preferred display theme for the entire app."})
      ]}),
      p.jsx("div",{className:"grid grid-cols-3 gap-3 pt-1",children:[
        {id:"light",label:"Light",icon:"☀️"},
        {id:"dark",label:"Dark",icon:"🌙"},
        {id:"system",label:"System",icon:"⚙️"}
      ].map(opt=>{
        const isSelected=theme===opt.id;
        return p.jsxs("button",{
          key:opt.id,
          type:"button",
          onClick:()=>changeTheme(opt.id),
          className:`py-3 px-2 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1 font-bold active:scale-95 ${isSelected?"shadow-sm":""}`,
          style:isSelected?{
            backgroundColor:"#f0fdfa",
            borderColor:"#0d9488",
            color:"#0f766e",
            fontWeight:900
          }:{
            backgroundColor:"#f8fafc",
            borderColor:"#cbd5e1",
            color:"#475569"
          },
          children:[
            p.jsx("span",{className:"text-2xl",children:opt.icon}),
            p.jsx("span",{className:"text-xs tracking-wide",children:opt.label})
          ]
        });
      })})
    ]}),

    p.jsxs("div",{className:"p-5 md:p-6 rounded-3xl border shadow-sm space-y-3",style:{backgroundColor:"#ffffff",borderColor:"#e2e8f0"},children:[
      p.jsxs("div",{children:[
        p.jsx("h3",{className:"font-black text-sm md:text-base",style:{color:"#0f172a"},children:"Invoice Shop Details"}),
        p.jsx("p",{className:"text-xs font-medium mt-0.5",style:{color:"#94a3b8"},children:"Update the shop name, logo, address, and phone numbers printed on invoices."})
      ]}),
      p.jsx("button",{
        type:"button",
        onClick:()=>{try{localStorage.setItem("invoice_open_shop_details","true");}catch(e){}if(onNavigate)onNavigate("invoice");},
        className:"w-full py-3.5 px-4 rounded-2xl font-black text-xs md:text-sm uppercase tracking-wider transition-all border flex items-center justify-between shadow-xs hover:border-teal-500 hover:bg-teal-50/50 active:scale-[0.99]",
        style:{backgroundColor:"#f8fafc",borderColor:"#cbd5e1",color:"#0f172a"},
        children:[p.jsx("span",{children:"Manage Invoice Shop Details"}),p.jsx("span",{children:"→"})]
      })
    ]}),
    // Customer Information & Management Card
    p.jsxs("div",{className:"p-5 md:p-6 rounded-3xl border shadow-sm space-y-4",style:{backgroundColor:"#ffffff",borderColor:"#e2e8f0"},children:[
      p.jsxs("div",{className:"flex items-start justify-between gap-3",children:[
        p.jsxs("div",{children:[
          p.jsxs("h3",{className:"font-black text-sm md:text-base flex items-center gap-2",style:{color:"#0f172a"},children:[
            p.jsx("span",{className:"w-9 h-9 min-w-[36px] min-h-[36px] box-border rounded-xl flex-shrink-0 flex items-center justify-center text-base leading-none",style:{backgroundColor:"#f0fdfa",color:"#0d9488"},children:"👥"}),
            "Customer Information"
          ]}),
          p.jsx("p",{className:"text-xs font-medium mt-0.5",style:{color:"#94a3b8"},children:"Modify customer name, change or add phone number, or remove customer."})
        ]}),
        p.jsxs("span",{className:"text-xs font-black px-2.5 py-1 rounded-xl border flex items-center gap-1 shadow-2xs flex-shrink-0",style:{backgroundColor:"#f0fdfa",borderColor:"#99f6e4",color:"#0f766e"},children:[
          custCount," Customers"
        ]})
      ]}),
      p.jsxs("button",{
        type:"button",
        onClick:openCustomerManager,
        className:"w-full py-3.5 px-4 rounded-2xl font-black text-xs md:text-sm uppercase tracking-wider transition-all border flex items-center justify-between shadow-xs hover:border-teal-500 hover:bg-teal-50/50 active:scale-[0.99]",
        style:{backgroundColor:"#f8fafc",borderColor:"#cbd5e1",color:"#0f172a"},
        children:[
          p.jsxs("div",{className:"flex items-center gap-2.5",children:[
            p.jsx("span",{className:"text-base",children:"✏️"}),
            p.jsx("span",{children:"Manage & Edit Customers"})
          ]}),
          p.jsx("span",{className:"text-xs font-bold text-teal-700",children:"Open →"})
        ]
      })
    ]}),

    // Google Drive Cloud Backup Card
    p.jsxs("div",{className:"p-5 md:p-6 rounded-3xl border shadow-sm space-y-4",style:{backgroundColor:"#ffffff",borderColor:"#e2e8f0"},children:[
      p.jsxs("div",{children:[
        p.jsxs("h3",{className:"font-black text-sm md:text-base flex items-center gap-2",style:{color:"#0f172a"},children:[
          p.jsx("span",{children:"☁️"}),
          "Google Drive Backup & Sync"
        ]})
      ]}),

      // Google Account Status Box (Fixed No Overlap)
      p.jsxs("div",{
        className:"p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs",
        style:{backgroundColor:googleAccount?"#f0fdfa":"#f8fafc",borderColor:googleAccount?"#99f6e4":"#e2e8f0"},
        children:[
          p.jsxs("div",{className:"flex items-center gap-3 min-w-0 flex-1",children:[
            p.jsx("div",{
              className:"w-10 h-10 rounded-xl flex items-center justify-center text-base font-black shadow-xs flex-shrink-0",
              style:{backgroundColor:googleAccount?"#14b8a6":"#e2e8f0",color:googleAccount?"#ffffff":"#64748b"},
              children:googleAccount?"G":"👤"
            }),
            p.jsxs("div",{className:"min-w-0 flex-1",children:[
              p.jsx("p",{className:"text-xs font-black truncate",style:{color:"#0f172a"},children:googleAccount||"No Google Account Connected"}),
              p.jsx("p",{className:"text-[10px] font-bold mt-0.5",style:{color:googleAccount?"#0f766e":"#94a3b8"},children:googleAccount?"● Connected & Synced":"Tap connect to select account"})
            ]})
          ]}),
          googleAccount?p.jsx("button",{
            type:"button",
            onClick:handleDisconnectGoogle,
            className:"text-[10px] font-bold uppercase tracking-wider px-3 py-2 rounded-xl border text-red-600 bg-red-50 hover:bg-red-100 border-red-200 transition-all flex-shrink-0 self-start sm:self-auto",
            children:"Disconnect"
          }):p.jsx("button",{
            type:"button",
            onClick:handleConnectGoogle,
            className:"text-xs font-black uppercase tracking-wider px-4 py-2.5 rounded-xl text-white bg-teal-600 hover:bg-teal-700 transition-all shadow-sm flex-shrink-0 self-start sm:self-auto",
            children:"Connect"
          })
        ]
      }),

      // Auto Backup Toggle (Android M3 Switch Dongle)
      p.jsxs("div",{
        className:"p-4 rounded-2xl border flex items-center justify-between gap-3 shadow-2xs",
        style:{backgroundColor:"#f8fafc",borderColor:"#e2e8f0"},
        children:[
          p.jsxs("div",{className:"flex-1 pr-2 min-w-0",children:[
            p.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[
              p.jsx("p",{className:"text-xs font-black",style:{color:"#0f172a"},children:"Automatic Backup"}),
              p.jsx("span",{
                className:`text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider border ${autoBackup?"bg-teal-100 text-teal-800 border-teal-300":"bg-slate-200 text-slate-600 border-slate-300"}`,
                children:autoBackup?"ON":"OFF"
              })
            ]}),
            p.jsx("p",{className:"text-[10px] font-bold mt-0.5",style:{color:autoBackup?"#0d9488":"#94a3b8"},children:autoBackup?"Active: Automatically backs up data on every change":"Disabled: Tap to enable automatic backups"})
          ]}),
          p.jsx("button",{
            type:"button",
            role:"switch",
            "aria-checked":autoBackup,
            "aria-label":"Toggle Automatic Backup",
            onClick:handleToggleAutoBackup,
            className:`w-14 h-8 rounded-full transition-all relative flex items-center p-1 flex-shrink-0 cursor-pointer shadow-inner border-2 ${autoBackup?"bg-teal-600 border-teal-600":"bg-slate-300 border-slate-300"}`,
            children:p.jsx("span",{
              className:`w-6 h-6 rounded-full bg-white shadow-md transform transition-all duration-200 ease-in-out flex items-center justify-center text-xs font-black ${autoBackup?"translate-x-6 text-teal-700":"translate-x-0 text-slate-400"}`,
              children:autoBackup?"✓":""
            })
          })
        ]
      }),

      // Backup Snapshot Info Box (No Overlapping, Responsive Stack)
      p.jsxs("div",{
        className:"p-4 rounded-2xl border space-y-2 text-xs w-full overflow-hidden shadow-2xs",
        style:{backgroundColor:"#f8fafc",borderColor:"#e2e8f0"},
        children:[
          p.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-1 w-full",children:[
            p.jsx("span",{className:"font-black text-slate-500 text-[10px] uppercase tracking-wider shrink-0",children:"Stored Backup Snapshot:"}),
            p.jsx("span",{className:"font-black text-teal-700 text-xs sm:text-right break-words",children:lastBackupTime?String(lastBackupTime).replace(/\b(am|pm)\b/gi,period=>period.toUpperCase()):"Never"})
          ]}),
        ]
      }),

      // Drive Backup & Restore Buttons (Spacious, No Overlap)
      p.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1",children:[
        p.jsxs("button",{
          type:"button",
          onClick:()=>performBackup(),
          disabled:backupLoading,
          className:"py-3.5 px-4 rounded-2xl font-black text-xs md:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-2",
          style:{backgroundColor:"#0d9488",color:"#ffffff"},
          children:[
            p.jsx("span",{className:"text-base",children:"☁️"}),
            backupLoading?"Syncing...":"Backup Now"
          ]
        }),
        p.jsxs("button",{
          type:"button",
          onClick:handleRestoreFromDrive,
          className:"py-3.5 px-4 rounded-2xl font-black text-xs md:text-sm uppercase tracking-wider transition-all border flex items-center justify-center gap-2 shadow-2xs hover:bg-slate-50 active:scale-95",
          style:{backgroundColor:"#ffffff",borderColor:"#cbd5e1",color:"#0f172a"},
          children:[
            p.jsx("span",{className:"text-base",children:"🔄"}),
            "Restore Data"
          ]
        })
      ]})
    ]}),

    // Local Storage File Backup Card
    p.jsxs("div",{className:"p-5 md:p-6 rounded-3xl border shadow-sm space-y-4",style:{backgroundColor:"#ffffff",borderColor:"#e2e8f0"},children:[
      p.jsxs("div",{children:[
        p.jsxs("h3",{className:"font-black text-sm md:text-base flex items-center gap-2",style:{color:"#0f172a"},children:[
          p.jsx("span",{children:"📁"}),
          "Local Storage File Backup"
        ]}),
        p.jsx("p",{className:"text-xs font-medium mt-1",style:{color:"#94a3b8"},children:"Single-file JSON backup saved directly to your device Downloads folder."})
      ]}),
      p.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[
        p.jsxs("button",{
          type:"button",
          onClick:handleExportLocalFile,
          className:"py-3.5 px-4 rounded-2xl font-black text-xs md:text-sm uppercase tracking-wider transition-all border flex items-center justify-center gap-2 shadow-xs bg-slate-50 hover:bg-slate-100 active:scale-95",
          style:{borderColor:"#cbd5e1",color:"#0f172a"},
          children:[
            p.jsx("span",{className:"text-base",children:"📥"}),
            "Export File (.json)"
          ]
        }),
        p.jsxs("button",{
          type:"button",
          onClick:()=>{
            if(window.AndroidBridge&&typeof window.AndroidBridge.pickBackupFile==="function"){
              window.AndroidBridge.pickBackupFile();
            }else if(localFileRef.current){
              localFileRef.current.click();
            }
          },
          className:"py-3.5 px-4 rounded-2xl font-black text-xs md:text-sm uppercase tracking-wider transition-all border flex items-center justify-center gap-2 shadow-xs bg-slate-50 hover:bg-slate-100 active:scale-95",
          style:{borderColor:"#cbd5e1",color:"#0f172a"},
          children:[
            p.jsx("span",{className:"text-base",children:"📂"}),
            "Import from File"
          ]
        })
      ]}),
      p.jsx("input",{
        type:"file",
        ref:localFileRef,
        onChange:handleImportLocalFile,
        accept:".json,application/json",
        className:"hidden"
      })
    ]}),

    p.jsx("div",{className:"p-4 rounded-3xl border text-center",style:{backgroundColor:"#f8fafc",borderColor:"#e2e8f0"},children:
      p.jsx("p",{className:"text-xs font-bold",style:{color:"#334155"},children:"Thai Fabrication Pro & Base-8 Calculator"})
    }),

    // Customer Management Modal
    isCustModalOpen&&p.jsx("div",{
      className:"fixed inset-0 z-[130] flex items-center justify-center p-3 md:p-6 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in",
      onClick:()=>setIsCustModalOpen(!1),
      children:p.jsxs("div",{
        className:"bg-white rounded-3xl w-full max-w-lg max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border",
        style:{backgroundColor:"#ffffff",borderColor:"#cbd5e1"},
        onClick:e=>e.stopPropagation(),
        children:[
          // Header
          p.jsxs("div",{
            className:"p-4 md:p-5 border-b flex items-center justify-between",
            style:{backgroundColor:"#f8fafc",borderBottomColor:"#e2e8f0"},
            children:[
              editingCust?p.jsxs("div",{className:"flex items-center gap-2",children:[
                p.jsx("button",{type:"button",onClick:()=>setEditingCust(null),className:"w-8 h-8 rounded-full hover:bg-slate-200 flex items-center justify-center font-bold text-sm text-slate-600 mr-1",children:"←"}),
                p.jsxs("div",{children:[
                  p.jsx("h3",{className:"text-sm md:text-base font-black",style:{color:"#0f172a"},children:"Edit Customer"}),
                  p.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wider",style:{color:"#0d9488"},children:editingCust.originalName})
                ]})
              ]}):p.jsxs("div",{className:"flex items-center gap-2.5",children:[
                p.jsx("div",{className:"w-10 h-10 min-w-[40px] min-h-[40px] box-border rounded-xl flex-shrink-0 flex items-center justify-center text-base leading-none shadow-2xs",style:{backgroundColor:"#f0fdfa",color:"#0d9488"},children:"👥"}),
                p.jsxs("div",{children:[
                  p.jsx("h3",{className:"text-sm md:text-base font-black",style:{color:"#0f172a"},children:"Manage Customers"}),
                  p.jsxs("p",{className:"text-[10px] font-bold uppercase tracking-wider",style:{color:"#94a3b8"},children:[customersList.length," Saved Profiles"]})
                ]})
              ]}),
              p.jsx("button",{
                type:"button",
                onClick:()=>setIsCustModalOpen(!1),
                className:"w-8 h-8 rounded-full hover:bg-slate-200 flex items-center justify-center font-bold text-base text-slate-400 hover:text-slate-700",
                children:"✕"
              })
            ]
          }),

          // Content Area
          p.jsx("div",{className:"flex-1 overflow-y-auto p-4 md:p-6",children:editingCust?
            // Dedicated Beautiful Edit Screen
            p.jsxs("div",{className:"space-y-4 animate-fade-in",children:[
              p.jsxs("div",{className:"p-5 rounded-2xl border space-y-4 bg-white shadow-xs",style:{borderColor:"#e2e8f0"},children:[
                p.jsxs("div",{className:"space-y-1.5",children:[
                  p.jsx("label",{className:"text-[10px] font-black uppercase tracking-wider block text-slate-500",children:"Customer Name"}),
                  p.jsx("input",{
                    type:"text",
                    value:editingCust.name,
                    onChange:e=>setEditingCust({...editingCust,name:e.target.value}),
                    className:"w-full px-4 py-3 rounded-xl border font-black text-sm outline-none bg-slate-50 focus:bg-white focus:border-teal-500 transition-all",
                    style:{borderColor:"#cbd5e1",color:"#0f172a"},
                    placeholder:"Enter customer name"
                  })
                ]}),
                p.jsxs("div",{className:"space-y-1.5",children:[
                  p.jsx("label",{className:"text-[10px] font-black uppercase tracking-wider block text-slate-500",children:"Phone Number"}),
                  p.jsx("input",{
                    type:"tel",
                    value:editingCust.phone,
                    onChange:e=>setEditingCust({...editingCust,phone:e.target.value}),
                    className:"w-full px-4 py-3 rounded-xl border font-bold text-sm outline-none bg-slate-50 focus:bg-white focus:border-teal-500 transition-all",
                    style:{borderColor:"#cbd5e1",color:"#0f172a"},
                    placeholder:"Enter phone number"
                  })
                ]})
              ]}),
              p.jsxs("div",{className:"space-y-2 pt-2",children:[
                p.jsx("button",{
                  type:"button",
                  onClick:saveEditedCustomer,
                  className:"w-full py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider text-white bg-teal-600 hover:bg-teal-700 transition-all shadow-md active:scale-98",
                  children:"Save Changes"
                }),
                p.jsx("button",{
                  type:"button",
                  onClick:()=>setEditingCust(null),
                  className:"w-full py-2.5 text-center text-xs font-bold text-slate-400 hover:text-slate-600 uppercase tracking-wider",
                  children:"Cancel"
                })
              ]})
            ]}):
            // List of customers (Spacious Cards, Zero Overlap, Edit & Delete side-by-side)
            p.jsxs("div",{className:"space-y-3",children:[
              p.jsx("input",{
                type:"text",
                value:custQuery,
                onChange:e=>setCustQuery(e.target.value),
                placeholder:"Search customer name or phone...",
                className:"w-full px-4 py-3 rounded-2xl border text-xs md:text-sm font-bold bg-slate-50 focus:bg-white focus:border-teal-400 outline-none shadow-inner",
                style:{borderColor:"#e2e8f0",color:"#0f172a"}
              }),
              filteredCustomers.length===0?p.jsxs("div",{className:"text-center py-10 text-slate-400 space-y-1",children:[
                p.jsx("p",{className:"text-3xl",children:"👥"}),
                p.jsx("p",{className:"text-xs font-bold",children:"No customers found."})
              ]}):p.jsx("div",{className:"space-y-3",children:filteredCustomers.map(c=>p.jsxs("div",{
                key:c.name,
                className:"p-4 md:p-5 rounded-2xl border flex items-center justify-between gap-3 shadow-xs bg-white hover:border-teal-300 transition-all",
                style:{borderColor:"#e2e8f0"},
                children:[
                  // Customer Info on Left (Spacious, No Overlap)
                  p.jsxs("div",{
                    className:"min-w-0 flex-1 pr-2",
                    children:[
                      p.jsx("p",{className:"font-black text-sm md:text-base text-slate-900 truncate leading-snug",children:c.name}),
                      p.jsxs("p",{className:"text-xs md:text-sm font-bold mt-1 text-slate-500 truncate",children:[
                        "📞 ",c.phone||"No phone added"
                      ]})
                    ]
                  }),
                  // Action buttons on Right: Edit & Delete side-by-side
                  p.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[
                    p.jsxs("button",{
                      type:"button",
                      onClick:()=>setEditingCust({originalName:c.name,name:c.name,phone:c.phone||""}),
                      className:"px-3 py-2 rounded-xl border text-xs font-bold transition-all bg-slate-50 hover:bg-teal-50 hover:border-teal-400 hover:text-teal-700 flex items-center gap-1 shadow-2xs active:scale-95",
                      style:{borderColor:"#cbd5e1",color:"#334155"},
                      children:[
                        p.jsx("span",{children:"✏️"}),
                        "Edit"
                      ]
                    }),
                    p.jsxs("button",{
                      type:"button",
                      onClick:()=>deleteCustomerProfile(c.name),
                      className:"px-3 py-2 rounded-xl border text-xs font-bold transition-all bg-red-50 hover:bg-red-100 border-red-200 text-red-600 flex items-center gap-1 shadow-2xs active:scale-95",
                      children:[
                        p.jsx("span",{children:"🗑️"}),
                        "Delete"
                      ]
                    })
                  ]})
                ]
              }))})
            ]})
          }),

          // Footer
          !editingCust&&p.jsx("div",{
            className:"p-3.5 border-t text-center",
            style:{backgroundColor:"#f8fafc",borderTopColor:"#e2e8f0"},
            children:p.jsx("button",{
              type:"button",
              onClick:()=>setIsCustModalOpen(!1),
              className:"w-full py-2.5 text-center text-slate-500 hover:text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-100 transition-colors",
              children:"Close"
            })
          })
        ]
      })
    })
  ]});
}
function AboutScreen({onNavigate}){
  const features=[
    {icon:"🪟",title:"AluCraft",desc:"Enter window dimensions and calculate fabrication-ready frame, shutter, lock, and glass sizes, including cutting specifications."},
    {icon:"📐",title:"3\" & 4\" Profile Support",desc:"Choose a 3-inch or 4-inch aluminium profile and get the matching fabrication allowances and measurements."},
    {icon:"🚪",title:"Window, Fanlight & Frame Modes",desc:"Calculate standard sliding windows, fanlights, partitions, small frames, and one-shutter windows using centimetres or inches."},
    {icon:"🎨",title:"Customer & Material Details",desc:"Attach customer name, phone, site location, aluminium color and brand, glass type, and glass thickness to a fabrication job."},
    {icon:"🔢",title:"Base-8 Suta Measurements",desc:"Work with workshop-style fractional inches where 1 inch equals 8 sutas, with conversions used in measurements and calculations."},
    {icon:"🧮",title:"Inch Calculator",desc:"Use the separate calculator for multi-step arithmetic with +, −, ×, and ÷ in base-8 suta units, and revisit calculation history."},
    {icon:"📏",title:"Square Feet & Billing Guide",desc:"See total work area without fanlight, window counts, fanlight quantity, and related measurements for a job."},
    {icon:"🧾",title:"Billing Page",desc:"Add eligible AluCraft work to Billing. Calculate work-area charges from the Square Feet Rate and fanlight charges from the Fanlight Rate, then view the final bill."},
    {icon:"📷",title:"Smart Scanner & Notepad Import",desc:"Import handwritten measurements from notes or drawings with image text recognition, or use the built-in notepad import."},
    {icon:"🔩",title:"Automated Hardware Estimation",desc:"Estimate wheels, locks, interlocks, screws, Wool Pile, rubber gaskets, and silicone tubes for each project."},
    {icon:"👥",title:"Customer Database",desc:"Save and manage customer names, phone numbers, and site locations. Open customer work and use the Add to Billing option."},
    {icon:"📋",title:"Work History & Reports",desc:"Review, search, restore, or remove saved jobs; export reports as images and send eligible work to Billing."},
    {icon:"💾",title:"Save Report to Gallery",desc:"Save an All In One report, save items individually, or export Bill, Aluminium, Glass, and Hardware report images."},
    {icon:"📄",title:"Invoice Generator",desc:"Create Bangla or English invoices with customer details, item descriptions, quantities, rates, and automatic totals. Preview on A4, choose Manual Signature or No Signature, then save as an image or PDF or share."},
    {icon:"🏪",title:"Invoice Shop Details",desc:"Set the shop name, logo, address, and phone numbers shown on invoices from Invoice Generator or the Settings page."},
    {icon:"⚙️",title:"Settings & Appearance",desc:"Choose Light, Dark, or System appearance, manage customer profiles, and open invoice shop details."},
    {icon:"☁️",title:"Google Drive & Local Backup",desc:"Back up app data to your private Google Drive AppData folder or export and restore a local JSON backup. The supported Drive backup can move app data between Android and Windows."},
    {icon:"📱",title:"Android App",desc:"Use AluCraft on Android phones and tablets for aluminium fabrication measurements, Inch Calculator and base-8 suta calculations, customers, work history, billing, invoices, reports, settings, and local or Google Drive backup."},
    {icon:"🖥️",title:"Windows Desktop App",desc:"Install AluCraft on Windows with a setup installer, launch it from Start or Windows Search, and use the same fabrication, calculator, customer, billing, invoice, settings, and backup features."},
    {icon:"💬",title:"Contact Me",desc:"Open the Contact Me page to reach the app developer by phone or WhatsApp."}
  ];

  return p.jsxs("div",{className:"p-4 md:p-8 max-w-4xl mx-auto space-y-6 pb-24",children:[
    null,
    p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:features.map((feat,idx)=>p.jsxs("div",{
      key:idx,
      className:"p-4 md:p-5 rounded-3xl border shadow-xs bg-white flex items-center gap-4 sm:gap-5",
      style:{borderColor:"#e2e8f0"},
      children:[
        p.jsx("div",{className:"w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-2xl flex-shrink-0 shadow-2xs",children:feat.icon}),
        p.jsxs("div",{className:"space-y-1 flex-1 min-w-0",children:[
          p.jsx("h4",{className:"font-black text-sm",style:{color:"#0f172a"},children:feat.title}),
          p.jsx("p",{className:"text-xs leading-relaxed font-medium",style:{color:"#64748b"},children:feat.desc})
        ]})
      ]
    }))}),
    p.jsxs("div",{className:"p-5 rounded-3xl border text-center space-y-3 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10",style:{borderColor:"#ccfbf1"},children:[
      p.jsx("p",{className:"text-xs md:text-sm font-bold text-slate-700",children:"Built exclusively for Thai aluminium fabrication workshops and glass technicians."}),
      p.jsx("button",{
        type:"button",
        onClick:()=>onNavigate("app1"),
        className:"px-6 py-2.5 rounded-2xl bg-teal-600 text-white font-black text-xs uppercase tracking-wider shadow-md hover:bg-teal-700 transition-all cursor-pointer",
        children:"Open AluCraft →"
      })
    ]})
  ]});
}

function ContactMeScreen(){
  const handleOpenLink=(url)=>{
    try{
      if(window.AndroidBridge&&typeof window.AndroidBridge.openUrl==="function"){
        window.AndroidBridge.openUrl(url);
      }else{
        window.open(url,"_blank");
      }
    }catch(e){
      window.location.href=url;
    }
  };

  return p.jsxs("div",{className:"p-4 md:p-8 max-w-xl mx-auto space-y-6 pb-24",children:[
    // Header
    null,

    // Profile Card without any avatar on top of name
    p.jsxs("div",{className:"p-6 md:p-8 rounded-3xl border shadow-sm bg-white space-y-3 text-center",style:{borderColor:"#e2e8f0"},children:[
      p.jsxs("div",{className:"space-y-1",children:[
        p.jsx("h3",{className:"text-2xl font-black text-slate-900 tracking-tight",children:"Biplop Islam"}),
        p.jsx("p",{className:"text-xs font-bold text-teal-600 uppercase tracking-widest",children:"Application Designer & Software Developer"})
      ]}),
      p.jsx("p",{className:"text-xs md:text-sm text-slate-600 leading-relaxed max-w-md mx-auto font-medium",children:"Application designed and built entirely by Biplop Islam. Dedicated to creating high-precision software solutions for Thai aluminium fabrication workshops, glass calculations, and technical craftsmanship. Feel free to contact me for feedback or support."})
    ]}),

    // Contact Action Cards with official brand logos & single-line buttons
    p.jsxs("div",{className:"space-y-3.5",children:[
      // Phone Call Card
      p.jsxs("div",{
        onClick:()=>handleOpenLink("tel:01623645808"),
        className:"p-4 md:p-5 rounded-3xl border bg-white shadow-xs flex items-center justify-between gap-4 cursor-pointer hover:border-teal-400 active:scale-[0.98] transition-all",
        style:{borderColor:"#e2e8f0"},
        children:[
          p.jsxs("div",{className:"flex items-center gap-4 sm:gap-5 min-w-0 flex-1",children:[
            p.jsx("div",{
              className:"w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm",
              children:p.jsx("svg",{
                className:"w-6 h-6",
                fill:"none",
                stroke:"currentColor",
                strokeWidth:"2.2",
                strokeLinecap:"round",
                strokeLinejoin:"round",
                viewBox:"0 0 24 24",
                children:p.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})
              })
            }),
            p.jsxs("div",{className:"min-w-0 flex-1",children:[
              p.jsx("h4",{className:"font-black text-sm text-slate-800",children:"Phone Call"}),
              p.jsx("p",{className:"text-xs font-bold text-teal-700 mt-0.5",children:"01623645808"})
            ]})
          ]}),
          p.jsxs("span",{
            className:"px-3.5 py-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-700 font-black text-xs border border-teal-200 shrink-0 whitespace-nowrap flex items-center gap-1",
            children:[p.jsx("span",{children:"Call Now"}),p.jsx("span",{children:"→"})]
          })
        ]
      }),

      // WhatsApp Card with Official Logo
      p.jsxs("div",{
        onClick:()=>handleOpenLink("https://wa.me/8801623645808"),
        className:"p-4 md:p-5 rounded-3xl border bg-white shadow-xs flex items-center justify-between gap-4 cursor-pointer hover:border-teal-400 active:scale-[0.98] transition-all",
        style:{borderColor:"#e2e8f0"},
        children:[
          p.jsxs("div",{className:"flex items-center gap-4 sm:gap-5 min-w-0 flex-1",children:[
            p.jsx("div",{
              className:"w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-sm",
              children:p.jsx("svg",{
                className:"w-7 h-7 fill-white",
                viewBox:"0 0 24 24",
                children:p.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})
              })
            }),
            p.jsxs("div",{className:"min-w-0 flex-1",children:[
              p.jsx("h4",{className:"font-black text-sm text-slate-800",children:"WhatsApp"}),
              p.jsx("p",{className:"text-xs font-bold text-teal-700 mt-0.5",children:"01623645808"})
            ]})
          ]}),
          p.jsxs("span",{
            className:"px-3.5 py-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-700 font-black text-xs border border-teal-200 shrink-0 whitespace-nowrap flex items-center gap-1",
            children:[p.jsx("span",{children:"Open WhatsApp"}),p.jsx("span",{children:"→"})]
          })
        ]
      }),

      // Telegram Card with Official Logo & Strictly Single Line
      p.jsxs("div",{
        onClick:()=>handleOpenLink("https://t.me/BiplopIslam"),
        className:"p-4 md:p-5 rounded-3xl border bg-white shadow-xs flex items-center justify-between gap-4 cursor-pointer hover:border-teal-400 active:scale-[0.98] transition-all",
        style:{borderColor:"#e2e8f0"},
        children:[
          p.jsxs("div",{className:"flex items-center gap-4 sm:gap-5 min-w-0 flex-1",children:[
            p.jsx("div",{
              className:"w-12 h-12 rounded-2xl bg-[#229ED9] text-white flex items-center justify-center flex-shrink-0 shadow-sm",
              children:p.jsx("svg",{
                className:"w-7 h-7 fill-white",
                viewBox:"0 0 24 24",
                children:p.jsx("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.941z"})
              })
            }),
            p.jsxs("div",{className:"min-w-0 flex-1",children:[
              p.jsx("h4",{className:"font-black text-sm text-slate-800",children:"Telegram"}),
              p.jsx("p",{className:"text-xs font-bold text-teal-700 mt-0.5",children:"@BiplopIslam (01623645808)"})
            ]})
          ]}),
          p.jsxs("span",{
            className:"px-3.5 py-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-700 font-black text-xs border border-teal-200 shrink-0 whitespace-nowrap flex items-center gap-1",
            children:[p.jsx("span",{children:"Open Telegram"}),p.jsx("span",{children:"→"})]
          })
        ]
      })
    ]})
  ]});
}

function WE({children:n,activeService:i,onSwitch:l,onExit:r}){
  const [drawerOpen,setDrawerOpen]=H.useState(!1);
  H.useEffect(()=>{
    window.__is_drawer_open=drawerOpen;
    window.__close_drawer=()=>setDrawerOpen(!1);
    return()=>{
      window.__is_drawer_open=false;
      delete window.__close_drawer;
    };
  },[drawerOpen]);
  const titles={
    app1:"AluCraft",
    app2:"Inch Calculator",billing:"Billing",invoice:"Invoice Generator",customers:"Customers",
    history:"Work History",
    settings:"Settings",
    about:"About",
    contact:"Contact Me"
  };

  H.useEffect(()=>{
    const btn=document.getElementById("hamburger-menu-btn");
    if(!btn)return;
    const onBtnClick=(e)=>{
      if(e&&e.stopPropagation)e.stopPropagation();
      setDrawerOpen(!0);
    };
    btn.addEventListener("click",onBtnClick);
    return()=>btn.removeEventListener("click",onBtnClick);
  },[]);

  H.useEffect(()=>{
    const handlePopState=(e)=>{
      if(drawerOpen){
        setDrawerOpen(!1);
        return;
      }
      if(e.state&&e.state.service){
        l(e.state.service);
      }else if(i!=="app1"){
        l("app1");
      }
    };
    window.addEventListener("popstate",handlePopState);
    return()=>window.removeEventListener("popstate",handlePopState);
  },[drawerOpen,i]);

  const navigateTo=(serviceId)=>{
    if(window.history.pushState){
      window.history.pushState({service:serviceId},"");
    }
    l(serviceId);
    setDrawerOpen(!1);
  };

  return p.jsxs("div",{className:"flex flex-col h-screen w-full bg-slate-50 overflow-hidden",children:[
    p.jsxs("header",{className:"sticky top-0 z-50 flex items-center justify-between px-3 md:px-5 py-2.5 bg-white/95 border-b border-slate-100 shrink-0",children:[
      p.jsxs("div",{className:"flex items-center gap-2",children:[
        p.jsx("button",{
          type:"button",
          id:"hamburger-menu-btn",
          "aria-label":"Open Navigation Menu",
          onClick:()=>setDrawerOpen(!0),
          className:"w-11 h-11 flex items-center justify-center text-slate-700 hover:text-slate-900 active:bg-slate-200/80 active:scale-90 rounded-xl transition-all cursor-pointer select-none -ml-1 shrink-0",
          style:{touchAction:"manipulation"},
          children:p.jsx("svg",{className:"w-6 h-6 pointer-events-none",fill:"none",stroke:"currentColor",strokeWidth:"2.5",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})
        }),
        p.jsx("img",{src:"/logo.png?v=3",alt:"Logo",className:"w-7 h-7 object-contain shrink-0",referrerPolicy:"no-referrer"}),
        p.jsx("span",{className:"font-black text-slate-800 text-xs md:text-sm tracking-wider uppercase",children:titles[i]||"AluCraft"})
      ]}),
      p.jsx("div",{className:"w-4"})
    ]}),
    p.jsxs("div",{
      id:"navigation-drawer",
      className:`app-drawer-overlay ${drawerOpen?"open":"closed"}`,
      children:[
        p.jsx("div",{
          className:"app-drawer-backdrop",
          onClick:()=>setDrawerOpen(!1)
        }),
        p.jsxs("div",{
          className:"app-drawer-panel",
          onClick:e=>e.stopPropagation(),
          children:[
            p.jsxs("div",{className:"p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50 app-drawer-header",children:[
              p.jsxs("div",{className:"flex items-center gap-2.5",children:[
                p.jsx("img",{src:"/logo.png?v=3",alt:"Logo",className:"w-7 h-7 object-contain"}),
                p.jsxs("div",{children:[
                  p.jsx("h4",{className:"font-black text-slate-900 text-sm tracking-wide uppercase",children:"AluCraft"}),
                  p.jsx("p",{className:"text-[9px] text-teal-600 font-bold uppercase tracking-widest",children:"Pro Suite"})
                ]})
              ]}),
              null
            ]}),
            p.jsxs("div",{className:"flex-1 py-4 px-3 space-y-1.5 overflow-y-auto",children:[
              [
                {id:"app1",label:"Aluminium Calculator",icon:"🪟"},
                {id:"app2",label:"Inch Calculator",icon:"🔢"},{id:"billing",label:"Billing",icon:"🧾"},{id:"invoice",label:"Invoice Generator",icon:"📄"},{id:"customers",label:"Customers",icon:"👥"},
                {id:"history",label:"Work History",icon:"📋"},
                {id:"settings",label:"Settings",icon:"⚙️"},
                {id:"about",label:"About",icon:"ℹ️"},
                {id:"contact",label:"Contact Me",icon:"👤"}
              ].map(item=>p.jsxs("button",{
                key:item.id,
                type:"button",
                onClick:()=>navigateTo(item.id),
                className:`app-drawer-item w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl font-bold text-xs md:text-sm transition-all text-left cursor-pointer active:scale-95 ${i===item.id?"active bg-teal-600 text-white shadow-md shadow-teal-600/20 font-black":"text-slate-700 hover:bg-slate-100"}`,
                children:[
                  p.jsx("span",{className:"text-lg",children:item.icon}),
                  p.jsx("span",{children:item.label})
                ]
              }))
            ]}),
            p.jsx("div",{className:"p-3 border-t border-slate-100 bg-slate-50 app-drawer-footer"})
          ]
        })
      ]
    }),
    p.jsx("main",{className:"flex-1 relative overflow-auto",children:
      p.jsx(Of,{mode:"wait",children:p.jsx(Nn.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.12},className:"h-full",children:n},i)})
    })
  ]});
}
function IE({isOpen:n,onClose:i,history:l,onRestore:r,onDelete:c,onClearAll:f}){return n?p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:p.jsxs(Nn.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"bg-white rounded-[2rem] w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col shadow-2xl",children:[p.jsxs("div",{className:"p-6 border-b border-slate-100 flex justify-between items-center",children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("div",{className:"p-2 bg-slate-100 rounded-xl",children:p.jsx(GA,{className:"w-5 h-5 text-slate-600"})}),p.jsx("h2",{className:"text-xl font-bold text-slate-800",children:"Calculation History"})]}),p.jsx("button",{onClick:i,className:"p-2 hover:bg-slate-100 rounded-lg transition-colors",children:p.jsx(Xv,{className:"w-6 h-6 text-slate-400"})})]}),p.jsx("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:l.length===0?p.jsx("div",{className:"text-center py-12 text-slate-400 font-medium",children:"No history found."}):l.map(d=>p.jsx("div",{className:"p-4 border border-slate-100 rounded-2xl hover:border-teal-200 transition-all group bg-slate-50/50",children:p.jsxs("div",{className:"flex justify-between items-start mb-3",children:[p.jsxs("div",{children:[p.jsx("p",{className:"text-sm font-bold text-slate-800",children:formatDateTime(new Date(d.timestamp))}),p.jsxs("p",{className:"text-xs text-slate-400 font-medium uppercase tracking-wider",children:[d.results.length," Items Calculated"]})]}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("button",{onClick:()=>r(d),className:"p-2 bg-white text-teal-600 border border-teal-100 rounded-xl hover:bg-teal-50 transition-all shadow-sm",title:"Restore",children:p.jsx(eE,{className:"w-4 h-4"})}),p.jsx("button",{onClick:()=>c(d.id),className:"p-2 bg-white text-red-500 border border-red-100 rounded-xl hover:bg-red-50 transition-all shadow-sm",title:"Delete",children:p.jsx(sE,{className:"w-4 h-4"})})]})]})},d.id))}),l.length>0&&p.jsx("div",{className:"p-6 border-t border-slate-100",children:p.jsx("button",{onClick:f,className:"w-full py-4 text-red-500 font-bold uppercase tracking-widest text-xs hover:bg-red-50 rounded-xl transition-all",children:"Clear All History"})})]})}):null}function tC(n,i){if(n.match(/^[a-z]+:\/\//i))return n;if(n.match(/^\/\//))return window.location.protocol+n;if(n.match(/^[a-z]+:/i))return n;const l=document.implementation.createHTMLDocument(),r=l.createElement("base"),c=l.createElement("a");return l.head.appendChild(r),l.body.appendChild(c),i&&(r.href=i),c.href=n,c.href}const eC=(()=>{let n=0;const i=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(n+=1,`u${i()}${n}`)})();function za(n){const i=[];for(let l=0,r=n.length;l<r;l++)i.push(n[l]);return i}let as=null;function lb(n={}){return as||(n.includeStyleProperties?(as=n.includeStyleProperties,as):(as=za(window.getComputedStyle(document.documentElement)),as))}function vo(n,i){const r=(n.ownerDocument.defaultView||window).getComputedStyle(n).getPropertyValue(i);return r?parseFloat(r.replace("px","")):0}function nC(n){const i=vo(n,"border-left-width"),l=vo(n,"border-right-width");return n.clientWidth+i+l}function aC(n){const i=vo(n,"border-top-width"),l=vo(n,"border-bottom-width");return n.clientHeight+i+l}function rb(n,i={}){const l=i.width||nC(n),r=i.height||aC(n);return{width:l,height:r}}function iC(){let n,i;try{i=process}catch{}const l=i&&i.env?i.env.devicePixelRatio:null;return l&&(n=parseInt(l,10),Number.isNaN(n)&&(n=1)),n||window.devicePixelRatio||1}const Ze=16384;function sC(n){(n.width>Ze||n.height>Ze)&&(n.width>Ze&&n.height>Ze?n.width>n.height?(n.height*=Ze/n.width,n.width=Ze):(n.width*=Ze/n.height,n.height=Ze):n.width>Ze?(n.height*=Ze/n.width,n.width=Ze):(n.width*=Ze/n.height,n.height=Ze))}function bo(n){return new Promise((i,l)=>{const r=new Image;r.onload=()=>{r.decode().then(()=>{requestAnimationFrame(()=>i(r))})},r.onerror=l,r.crossOrigin="anonymous",r.decoding="async",r.src=n})}async function lC(n){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(n)).then(encodeURIComponent).then(i=>`data:image/svg+xml;charset=utf-8,${i}`)}async function rC(n,i,l){const r="http://www.w3.org/2000/svg",c=document.createElementNS(r,"svg"),f=document.createElementNS(r,"foreignObject");return c.setAttribute("width",`${i}`),c.setAttribute("height",`${l}`),c.setAttribute("viewBox",`0 0 ${i} ${l}`),f.setAttribute("width","100%"),f.setAttribute("height","100%"),f.setAttribute("x","0"),f.setAttribute("y","0"),f.setAttribute("externalResourcesRequired","true"),c.appendChild(f),f.appendChild(n),lC(c)}const Be=(n,i)=>{if(n instanceof i)return!0;const l=Object.getPrototypeOf(n);return l===null?!1:l.constructor.name===i.name||Be(l,i)};function oC(n){const i=n.getPropertyValue("content");return`${n.cssText} content: '${i.replace(/'|"/g,"")}';`}function uC(n,i){return lb(i).map(l=>{const r=n.getPropertyValue(l),c=n.getPropertyPriority(l);return`${l}: ${r}${c?" !important":""};`}).join(" ")}function cC(n,i,l,r){const c=`.${n}:${i}`,f=l.cssText?oC(l):uC(l,r);return document.createTextNode(`${c}{${f}}`)}function Yg(n,i,l,r){const c=window.getComputedStyle(n,l),f=c.getPropertyValue("content");if(f===""||f==="none")return;const d=eC();try{i.className=`${i.className} ${d}`}catch{return}const h=document.createElement("style");h.appendChild(cC(d,l,c,r)),i.appendChild(h)}function fC(n,i,l){Yg(n,i,":before",l),Yg(n,i,":after",l)}const Xg="application/font-woff",Kg="image/jpeg",dC={woff:Xg,woff2:Xg,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:Kg,jpeg:Kg,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function hC(n){const i=/\.([^./]*?)$/g.exec(n);return i?i[1]:""}function yd(n){const i=hC(n).toLowerCase();return dC[i]||""}function mC(n){return n.split(/,/)[1]}function Bf(n){return n.search(/^(data:)/)!==-1}function pC(n,i){return`data:${i};base64,${n}`}async function ob(n,i,l){const r=await fetch(n,i);if(r.status===404)throw new Error(`Resource "${r.url}" not found`);const c=await r.blob();return new Promise((f,d)=>{const h=new FileReader;h.onerror=d,h.onloadend=()=>{try{f(l({res:r,result:h.result}))}catch(g){d(g)}},h.readAsDataURL(c)})}const uf={};function gC(n,i,l){let r=n.replace(/\?.*/,"");return l&&(r=n),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),i?`[${i}]${r}`:r}async function vd(n,i,l){const r=gC(n,i,l.includeQueryParams);if(uf[r]!=null)return uf[r];l.cacheBust&&(n+=(/\?/.test(n)?"&":"?")+new Date().getTime());let c;try{const f=await ob(n,l.fetchRequestInit,({res:d,result:h})=>(i||(i=d.headers.get("Content-Type")||""),mC(h)));c=pC(f,i)}catch(f){c=l.imagePlaceholder||"";let d=`Failed to fetch resource: ${n}`;f&&(d=typeof f=="string"?f:f.message),d&&console.warn(d)}return uf[r]=c,c}async function yC(n){const i=n.toDataURL();return i==="data:,"?n.cloneNode(!1):bo(i)}async function vC(n,i){if(n.currentSrc){const f=document.createElement("canvas"),d=f.getContext("2d");f.width=n.clientWidth,f.height=n.clientHeight,d==null||d.drawImage(n,0,0,f.width,f.height);const h=f.toDataURL();return bo(h)}const l=n.poster,r=yd(l),c=await vd(l,r,i);return bo(c)}async function bC(n,i){var l;try{if(!((l=n==null?void 0:n.contentDocument)===null||l===void 0)&&l.body)return await Co(n.contentDocument.body,i,!0)}catch{}return n.cloneNode(!1)}async function xC(n,i){return Be(n,HTMLCanvasElement)?yC(n):Be(n,HTMLVideoElement)?vC(n,i):Be(n,HTMLIFrameElement)?bC(n,i):n.cloneNode(ub(n))}const SC=n=>n.tagName!=null&&n.tagName.toUpperCase()==="SLOT",ub=n=>n.tagName!=null&&n.tagName.toUpperCase()==="SVG";async function wC(n,i,l){var r,c;if(ub(i))return i;let f=[];return SC(n)&&n.assignedNodes?f=za(n.assignedNodes()):Be(n,HTMLIFrameElement)&&(!((r=n.contentDocument)===null||r===void 0)&&r.body)?f=za(n.contentDocument.body.childNodes):f=za(((c=n.shadowRoot)!==null&&c!==void 0?c:n).childNodes),f.length===0||Be(n,HTMLVideoElement)||await f.reduce((d,h)=>d.then(()=>Co(h,l)).then(g=>{g&&i.appendChild(g)}),Promise.resolve()),i}function TC(n,i,l){const r=i.style;if(!r)return;const c=window.getComputedStyle(n);c.cssText?(r.cssText=c.cssText,r.transformOrigin=c.transformOrigin):lb(l).forEach(f=>{let d=c.getPropertyValue(f);f==="font-size"&&d.endsWith("px")&&(d=`${Math.floor(parseFloat(d.substring(0,d.length-2)))-.1}px`),Be(n,HTMLIFrameElement)&&f==="display"&&d==="inline"&&(d="block"),f==="d"&&i.getAttribute("d")&&(d=`path(${i.getAttribute("d")})`),r.setProperty(f,d,c.getPropertyPriority(f))})}function AC(n,i){Be(n,HTMLTextAreaElement)&&(i.innerHTML=n.value),Be(n,HTMLInputElement)&&i.setAttribute("value",n.value)}function EC(n,i){if(Be(n,HTMLSelectElement)){const r=Array.from(i.children).find(c=>n.value===c.getAttribute("value"));r&&r.setAttribute("selected","")}}function CC(n,i,l){return Be(i,Element)&&(TC(n,i,l),fC(n,i,l),AC(n,i),EC(n,i)),i}async function jC(n,i){const l=n.querySelectorAll?n.querySelectorAll("use"):[];if(l.length===0)return n;const r={};for(let f=0;f<l.length;f++){const h=l[f].getAttribute("xlink:href");if(h){const g=n.querySelector(h),y=document.querySelector(h);!g&&y&&!r[h]&&(r[h]=await Co(y,i,!0))}}const c=Object.values(r);if(c.length){const f="http://www.w3.org/1999/xhtml",d=document.createElementNS(f,"svg");d.setAttribute("xmlns",f),d.style.position="absolute",d.style.width="0",d.style.height="0",d.style.overflow="hidden",d.style.display="none";const h=document.createElementNS(f,"defs");d.appendChild(h);for(let g=0;g<c.length;g++)h.appendChild(c[g]);n.appendChild(d)}return n}async function Co(n,i,l){return!l&&i.filter&&!i.filter(n)?null:Promise.resolve(n).then(r=>xC(r,i)).then(r=>wC(n,r,i)).then(r=>CC(n,r,i)).then(r=>jC(r,i))}const cb=/url\((['"]?)([^'"]+?)\1\)/g,MC=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,NC=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function DC(n){const i=n.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${i})(['"]?\\))`,"g")}function kC(n){const i=[];return n.replace(cb,(l,r,c)=>(i.push(c),l)),i.filter(l=>!Bf(l))}async function RC(n,i,l,r,c){try{const f=l?tC(i,l):i,d=yd(i);let h;return c||(h=await vd(f,d,r)),n.replace(DC(i),`$1${h}$3`)}catch{}return n}function OC(n,{preferredFontFormat:i}){return i?n.replace(NC,l=>{for(;;){const[r,,c]=MC.exec(l)||[];if(!c)return"";if(c===i)return`src: ${r};`}}):n}function fb(n){return n.search(cb)!==-1}async function db(n,i,l){if(!fb(n))return n;const r=OC(n,l);return kC(r).reduce((f,d)=>f.then(h=>RC(h,d,i,l)),Promise.resolve(r))}async function is(n,i,l){var r;const c=(r=i.style)===null||r===void 0?void 0:r.getPropertyValue(n);if(c){const f=await db(c,null,l);return i.style.setProperty(n,f,i.style.getPropertyPriority(n)),!0}return!1}async function zC(n,i){await is("background",n,i)||await is("background-image",n,i),await is("mask",n,i)||await is("-webkit-mask",n,i)||await is("mask-image",n,i)||await is("-webkit-mask-image",n,i)}async function LC(n,i){const l=Be(n,HTMLImageElement);if(!(l&&!Bf(n.src))&&!(Be(n,SVGImageElement)&&!Bf(n.href.baseVal)))return;const r=l?n.src:n.href.baseVal,c=await vd(r,yd(r),i);await new Promise((f,d)=>{n.onload=f,n.onerror=i.onImageErrorHandler?(...g)=>{try{f(i.onImageErrorHandler(...g))}catch(y){d(y)}}:d;const h=n;h.decode&&(h.decode=f),h.loading==="lazy"&&(h.loading="eager"),l?(n.srcset="",n.src=c):n.href.baseVal=c})}async function VC(n,i){const r=za(n.childNodes).map(c=>hb(c,i));await Promise.all(r).then(()=>n)}async function hb(n,i){Be(n,Element)&&(await zC(n,i),await LC(n,i),await VC(n,i))}function _C(n,i){const{style:l}=n;i.backgroundColor&&(l.backgroundColor=i.backgroundColor),i.width&&(l.width=`${i.width}px`),i.height&&(l.height=`${i.height}px`);const r=i.style;return r!=null&&Object.keys(r).forEach(c=>{l[c]=r[c]}),n}const Qg={};async function Zg(n){let i=Qg[n];if(i!=null)return i;const r=await(await fetch(n)).text();return i={url:n,cssText:r},Qg[n]=i,i}async function Pg(n,i){let l=n.cssText;const r=/url\(["']?([^"')]+)["']?\)/g,f=(l.match(/url\([^)]+\)/g)||[]).map(async d=>{let h=d.replace(r,"$1");return h.startsWith("https://")||(h=new URL(h,n.url).href),ob(h,i.fetchRequestInit,({result:g})=>(l=l.replace(d,`url(${g})`),[d,g]))});return Promise.all(f).then(()=>l)}function Fg(n){if(n==null)return[];const i=[],l=/(\/\*[\s\S]*?\*\/)/gi;let r=n.replace(l,"");const c=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const g=c.exec(r);if(g===null)break;i.push(g[0])}r=r.replace(c,"");const f=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,d="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",h=new RegExp(d,"gi");for(;;){let g=f.exec(r);if(g===null){if(g=h.exec(r),g===null)break;f.lastIndex=h.lastIndex}else h.lastIndex=f.lastIndex;i.push(g[0])}return i}async function BC(n,i){const l=[],r=[];return n.forEach(c=>{if("cssRules"in c)try{za(c.cssRules||[]).forEach((f,d)=>{if(f.type===CSSRule.IMPORT_RULE){let h=d+1;const g=f.href,y=Zg(g).then(v=>Pg(v,i)).then(v=>Fg(v).forEach(x=>{try{c.insertRule(x,x.startsWith("@import")?h+=1:c.cssRules.length)}catch(S){console.error("Error inserting rule from remote css",{rule:x,error:S})}})).catch(v=>{console.error("Error loading remote css",v.toString())});r.push(y)}})}catch(f){const d=n.find(h=>h.href==null)||document.styleSheets[0];c.href!=null&&r.push(Zg(c.href).then(h=>Pg(h,i)).then(h=>Fg(h).forEach(g=>{d.insertRule(g,d.cssRules.length)})).catch(h=>{console.error("Error loading remote stylesheet",h)})),console.error("Error inlining remote css file",f)}}),Promise.all(r).then(()=>(n.forEach(c=>{if("cssRules"in c)try{za(c.cssRules||[]).forEach(f=>{l.push(f)})}catch(f){console.error(`Error while reading CSS rules from ${c.href}`,f)}}),l))}function UC(n){return n.filter(i=>i.type===CSSRule.FONT_FACE_RULE).filter(i=>fb(i.style.getPropertyValue("src")))}async function HC(n,i){if(n.ownerDocument==null)throw new Error("Provided element is not within a Document");const l=za(n.ownerDocument.styleSheets),r=await BC(l,i);return UC(r)}function mb(n){return n.trim().replace(/["']/g,"")}function GC(n){const i=new Set;function l(r){(r.style.fontFamily||getComputedStyle(r).fontFamily).split(",").forEach(f=>{i.add(mb(f))}),Array.from(r.children).forEach(f=>{f instanceof HTMLElement&&l(f)})}return l(n),i}async function qC(n,i){const l=await HC(n,i),r=GC(n);return(await Promise.all(l.filter(f=>r.has(mb(f.style.fontFamily))).map(f=>{const d=f.parentStyleSheet?f.parentStyleSheet.href:null;return db(f.cssText,d,i)}))).join(`
`)}async function YC(n,i){const l=i.fontEmbedCSS!=null?i.fontEmbedCSS:i.skipFonts?null:await qC(n,i);if(l){const r=document.createElement("style"),c=document.createTextNode(l);r.appendChild(c),n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r)}}async function XC(n,i={}){const{width:l,height:r}=rb(n,i),c=await Co(n,i,!0);return await YC(c,i),await hb(c,i),_C(c,i),await rC(c,l,r)}async function KC(n,i={}){const{width:l,height:r}=rb(n,i),c=await XC(n,i),f=await bo(c),d=document.createElement("canvas"),h=d.getContext("2d"),g=i.pixelRatio||iC(),y=i.canvasWidth||l,v=i.canvasHeight||r;return d.width=y*g,d.height=v*g,i.skipAutoScale||sC(d),d.style.width=`${y}`,d.style.height=`${v}`,i.backgroundColor&&(h.fillStyle=i.backgroundColor,h.fillRect(0,0,d.width,d.height)),h.drawImage(f,0,0,d.width,d.height),d}async function QC(n,i={}){return(await KC(n,i)).toDataURL();}/*! Capacitor: https://capacitorjs.com/ - MIT License */var fs;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(fs||(fs={}));class cf extends Error{constructor(i,l,r){super(i),this.message=i,this.code=l,this.data=r}}const ZC=n=>{var i,l;return n!=null&&n.androidBridge?"android":!((l=(i=n==null?void 0:n.webkit)===null||i===void 0?void 0:i.messageHandlers)===null||l===void 0)&&l.bridge?"ios":"web"},PC=n=>{const i=n.CapacitorCustomPlatform||null,l=n.Capacitor||{},r=l.Plugins=l.Plugins||{},c=()=>i!==null?i.name:ZC(n),f=()=>c()!=="web",d=x=>{const S=y.get(x);return!!(S!=null&&S.platforms.has(c())||h(x))},h=x=>{var S;return(S=l.PluginHeaders)===null||S===void 0?void 0:S.find(E=>E.name===x)},g=x=>n.console.error(x),y=new Map,v=(x,S={})=>{const E=y.get(x);if(E)return console.warn(`Capacitor plugin "${x}" already registered. Cannot register plugins twice.`),E.proxy;const N=c(),L=h(x);let V;const q=async()=>(!V&&N in S?V=typeof S[N]=="function"?V=await S[N]():V=S[N]:i!==null&&!V&&"web"in S&&(V=typeof S.web=="function"?V=await S.web():V=S.web),V),K=(M,P)=>{var Q,mt;if(L){const gt=L==null?void 0:L.methods.find(Dt=>P===Dt.name);if(gt)return gt.rtype==="promise"?Dt=>l.nativePromise(x,P.toString(),Dt):(Dt,Et)=>l.nativeCallback(x,P.toString(),Dt,Et);if(M)return(Q=M[P])===null||Q===void 0?void 0:Q.bind(M)}else{if(M)return(mt=M[P])===null||mt===void 0?void 0:mt.bind(M);throw new cf(`"${x}" plugin is not implemented on ${N}`,fs.Unimplemented)}},Y=M=>{let P;const Q=(...mt)=>{const gt=q().then(Dt=>{const Et=K(Dt,M);if(Et){const St=Et(...mt);return P=St==null?void 0:St.remove,St}else throw new cf(`"${x}.${M}()" is not implemented on ${N}`,fs.Unimplemented)});return M==="addListener"&&(gt.remove=async()=>P()),gt};return Q.toString=()=>`${M.toString()}() { [capacitor code] }`,Object.defineProperty(Q,"name",{value:M,writable:!1,configurable:!1}),Q},X=Y("addListener"),$=Y("removeListener"),dt=(M,P)=>{const Q=X({eventName:M},P),mt=async()=>{const Dt=await Q;$({eventName:M,callbackId:Dt},P)},gt=new Promise(Dt=>Q.then(()=>Dt({remove:mt})));return gt.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await mt()},gt},I=new Proxy({},{get(M,P){switch(P){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return L?dt:X;case"removeListener":return $;default:return Y(P)}}});return r[x]=I,y.set(x,{name:x,proxy:I,platforms:new Set([...Object.keys(S),...L?[N]:[]])}),I};return l.convertFileSrc||(l.convertFileSrc=x=>x),l.getPlatform=c,l.handleError=g,l.isNativePlatform=f,l.isPluginAvailable=d,l.registerPlugin=v,l.Exception=cf,l.DEBUG=!!l.DEBUG,l.isLoggingEnabled=!!l.isLoggingEnabled,l},FC=n=>n.Capacitor=PC(n),wl=FC(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),jo=wl.registerPlugin;class bd{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(i,l){let r=!1;this.listeners[i]||(this.listeners[i]=[],r=!0),this.listeners[i].push(l);const f=this.windowListeners[i];f&&!f.registered&&this.addWindowListener(f),r&&this.sendRetainedArgumentsForEvent(i);const d=async()=>this.removeListener(i,l);return Promise.resolve({remove:d})}async removeAllListeners(){this.listeners={};for(const i in this.windowListeners)this.removeWindowListener(this.windowListeners[i]);this.windowListeners={}}notifyListeners(i,l,r){const c=this.listeners[i];if(!c){if(r){let f=this.retainedEventArguments[i];f||(f=[]),f.push(l),this.retainedEventArguments[i]=f}return}c.forEach(f=>f(l))}hasListeners(i){var l;return!!(!((l=this.listeners[i])===null||l===void 0)&&l.length)}registerWindowListener(i,l){this.windowListeners[l]={registered:!1,windowEventName:i,pluginEventName:l,handler:r=>{this.notifyListeners(l,r)}}}unimplemented(i="not implemented"){return new wl.Exception(i,fs.Unimplemented)}unavailable(i="not available"){return new wl.Exception(i,fs.Unavailable)}async removeListener(i,l){const r=this.listeners[i];if(!r)return;const c=r.indexOf(l);this.listeners[i].splice(c,1),this.listeners[i].length||this.removeWindowListener(this.windowListeners[i])}addWindowListener(i){window.addEventListener(i.windowEventName,i.handler),i.registered=!0}removeWindowListener(i){i&&(window.removeEventListener(i.windowEventName,i.handler),i.registered=!1)}sendRetainedArgumentsForEvent(i){const l=this.retainedEventArguments[i];l&&(delete this.retainedEventArguments[i],l.forEach(r=>{this.notifyListeners(i,r)}))}}const Jg=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),$g=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class JC extends bd{async getCookies(){const i=document.cookie,l={};return i.split(";").forEach(r=>{if(r.length<=0)return;let[c,f]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");c=$g(c).trim(),f=$g(f).trim(),l[c]=f}),l}async setCookie(i){try{const l=Jg(i.key),r=Jg(i.value),c=i.expires?`; expires=${i.expires.replace("expires=","")}`:"",f=(i.path||"/").replace("path=",""),d=i.url!=null&&i.url.length>0?`domain=${i.url}`:"";document.cookie=`${l}=${r||""}${c}; path=${f}; ${d};`}catch(l){return Promise.reject(l)}}async deleteCookie(i){try{document.cookie=`${i.key}=; Max-Age=0`}catch(l){return Promise.reject(l)}}async clearCookies(){try{const i=document.cookie.split(";")||[];for(const l of i)document.cookie=l.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(i){return Promise.reject(i)}}async clearAllCookies(){try{await this.clearCookies()}catch(i){return Promise.reject(i)}}}jo("CapacitorCookies",{web:()=>new JC});const $C=async n=>new Promise((i,l)=>{const r=new FileReader;r.onload=()=>{const c=r.result;i(c.indexOf(",")>=0?c.split(",")[1]:c)},r.onerror=c=>l(c),r.readAsDataURL(n)}),WC=(n={})=>{const i=Object.keys(n);return Object.keys(n).map(c=>c.toLocaleLowerCase()).reduce((c,f,d)=>(c[f]=n[i[d]],c),{})},IC=(n,i=!0)=>n?Object.entries(n).reduce((r,c)=>{const[f,d]=c;let h,g;return Array.isArray(d)?(g="",d.forEach(y=>{h=i?encodeURIComponent(y):y,g+=`${f}=${h}&`}),g.slice(0,-1)):(h=i?encodeURIComponent(d):d,g=`${f}=${h}`),`${r}&${g}`},"").substr(1):null,tj=(n,i={})=>{const l=Object.assign({method:n.method||"GET",headers:n.headers},i),c=WC(n.headers)["content-type"]||"";if(typeof n.data=="string")l.body=n.data;else if(c.includes("application/x-www-form-urlencoded")){const f=new URLSearchParams;for(const[d,h]of Object.entries(n.data||{}))f.set(d,h);l.body=f.toString()}else if(c.includes("multipart/form-data")||n.data instanceof FormData){const f=new FormData;if(n.data instanceof FormData)n.data.forEach((h,g)=>{f.append(g,h)});else for(const h of Object.keys(n.data))f.append(h,n.data[h]);l.body=f;const d=new Headers(l.headers);d.delete("content-type"),l.headers=d}else(c.includes("application/json")||typeof n.data=="object")&&(l.body=JSON.stringify(n.data));return l};class ej extends bd{async request(i){const l=tj(i,i.webFetchExtra),r=IC(i.params,i.shouldEncodeUrlParams),c=r?`${i.url}?${r}`:i.url,f=await fetch(c,l),d=f.headers.get("content-type")||"";let{responseType:h="text"}=f.ok?i:{};d.includes("application/json")&&(h="json");let g,y;switch(h){case"arraybuffer":case"blob":y=await f.blob(),g=await $C(y);break;case"json":g=await f.json();break;case"document":case"text":default:g=await f.text()}const v={};return f.headers.forEach((x,S)=>{v[S]=x}),{data:g,headers:v,status:f.status,url:f.url}}async get(i){return this.request(Object.assign(Object.assign({},i),{method:"GET"}))}async post(i){return this.request(Object.assign(Object.assign({},i),{method:"POST"}))}async put(i){return this.request(Object.assign(Object.assign({},i),{method:"PUT"}))}async patch(i){return this.request(Object.assign(Object.assign({},i),{method:"PATCH"}))}async delete(i){return this.request(Object.assign(Object.assign({},i),{method:"DELETE"}))}}jo("CapacitorHttp",{web:()=>new ej});var Wg;(function(n){n.Dark="DARK",n.Light="LIGHT",n.Default="DEFAULT"})(Wg||(Wg={}));var Ig;(function(n){n.StatusBar="StatusBar",n.NavigationBar="NavigationBar"})(Ig||(Ig={}));class nj extends bd{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}jo("SystemBars",{web:()=>new nj});const aj="modulepreload",ij=function(n){return"/"+n},ty={},sj=function(i,l,r){let c=Promise.resolve();if(l&&l.length>0){let d=function(y){return Promise.all(y.map(v=>Promise.resolve(v).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),g=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));c=d(l.map(y=>{if(y=ij(y),y in ty)return;ty[y]=!0;const v=y.endsWith(".css"),x=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${x}`))return;const S=document.createElement("link");if(S.rel=v?"stylesheet":aj,v||(S.as="script"),S.crossOrigin="",S.href=y,g&&S.setAttribute("nonce",g),document.head.appendChild(S),v)return new Promise((E,N)=>{S.addEventListener("load",E),S.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${y}`)))})}))}function f(d){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=d,window.dispatchEvent(h),!h.defaultPrevented)throw d}return c.then(d=>{for(const h of d||[])h.status==="rejected"&&f(h.reason);return i().catch(f)})};function lj(n){n.CapacitorUtils.Synapse=new Proxy({},{get(i,l){return new Proxy({},{get(r,c){return(f,d,h)=>{const g=n.Capacitor.Plugins[l];if(g===void 0){h(new Error(`Capacitor plugin ${l} not found`));return}if(typeof g[c]!="function"){h(new Error(`Method ${c} not found in Capacitor plugin ${l}`));return}(async()=>{try{const y=await g[c](f);d(y)}catch(y){h(y)}})()}}})}})}function rj(n){n.CapacitorUtils.Synapse=new Proxy({},{get(i,l){return n.cordova.plugins[l]}})}function oj(n=!1){typeof window>"u"||(window.CapacitorUtils=window.CapacitorUtils||{},window.Capacitor!==void 0&&!n?lj(window):window.cordova!==void 0&&rj(window))}var xo;(function(n){n.Documents="DOCUMENTS",n.Data="DATA",n.Library="LIBRARY",n.Cache="CACHE",n.External="EXTERNAL",n.ExternalStorage="EXTERNAL_STORAGE",n.ExternalCache="EXTERNAL_CACHE",n.LibraryNoCloud="LIBRARY_NO_CLOUD",n.Temporary="TEMPORARY"})(xo||(xo={}));var ey;(function(n){n.UTF8="utf8",n.ASCII="ascii",n.UTF16="utf16"})(ey||(ey={}));const $r=jo("Filesystem",{web:()=>sj(()=>import("./web-BJ1A2ISL.js"),[]).then(n=>new n.FilesystemWeb)});oj();const uj=["Silver Color","Bronze Color","Golden Color","SS Color"],cj=["Chung Hua","KAI","PHP Shiny","PHP Solid","MAX","AXX","Others"],fj=["Clear Glass","Navy Blue Mercury","Lake Blue Mercury","Ocean Blue","Green Mercury","Coffee Light","Coffee Deep","Golden Mercury","Silver Mercury","Solid Blue","Solid Green"],dj=()=>{const computeHardware=(results,thaiSize)=>{
  if(!results||results.length===0)return null;
  const is4Inch=thaiSize!=="3";
  let totalWindows=results.length,nonFanlightCount=0,fanlightCount=0,partitionCount=0,oneShutterCount=0,standardCount=0,gatonCount=0;
  let totalRubberInches=0,total1_5Screws=0,totalMohiarInches=0,fanlightMohiarInches=0,totalNetRubberInches=0;
  const ROLL_HEIGHTS=[4,4.5,5,6,7];
  const netBuckets={4:0,4.5:0,5:0,6:0,7:0};

  results.forEach(item=>{
    const isFL=!!item.isSmallFrame,isPart=!!item.isPartition,isOne=!!item.isOneShutter,isInch=!!item.isInchMode;
    if(isFL)fanlightCount++;else nonFanlightCount++;
    if(isPart)partitionCount++;
    else if(isOne)oneShutterCount++;
    else if(!isFL){
      const h=parseFloat(item.rawHeight||item.outerSide)||0;
      const l1=parseFloat(item.rawLength1||item.outerTop)||0;
      const l2=parseFloat(item.rawLength2||item.outerBottom)||0;
      const maxL=Math.max(l1,l2);
      const sqFt=isInch?((h*maxL)/144.0):((h*maxL)/929.0304);
      const isOversized=item.isGaton!==undefined?!!item.isGaton:(sqFt>22.5);
      if(isOversized)gatonCount++;else standardCount++;
    }

    const gH=parseFloat(item.glassHeightInch)||0,gL=parseFloat(item.glassLengthInch)||0;
    const roundH=Math.round(gH),roundL=Math.round(gL);
    const glassPerimeterMult=isOne?2:4;
    const windowRubberInches=((roundH+roundL)*glassPerimeterMult)+2;totalRubberInches+=windowRubberInches;

    let windowScrews=isFL?8:isPart?34:isOne?16:27;
    total1_5Screws+=windowScrews;

    const stb=parseFloat(item.shutterTopBottom)||0,os=parseFloat(item.outerSide)||0;
    const windowMohiarInches=isInch?((stb*4)+(os*2)):(((stb*4)+(os*2))/2.54);
    totalMohiarInches+=windowMohiarInches;
    if(isFL)fanlightMohiarInches+=windowMohiarInches;

    if(!isFL){
      const nsH=parseFloat(item.netSectionHeight)||0,nsL=parseFloat(item.netSectionLength)||0;
      if(nsH>0&&nsL>0){
        totalNetRubberInches+=isInch?((nsH+nsL)*2):(((nsH+nsL)*2)/2.54);
      }
      const osInches=isInch?os:(os/2.54);
      let closestRoll=ROLL_HEIGHTS[0],minDiff=999999;
      ROLL_HEIGHTS.forEach(rh=>{
        const diff=Math.abs(osInches-(rh*12));
        if(diff<minDiff){minDiff=diff;closestRoll=rh;}
      });
      const rawL1=parseFloat(item.rawLength1||item.outerTop)||0,rawL2=parseFloat(item.rawLength2||item.outerBottom)||0;
      const maxL=Math.max(rawL1,rawL2);
      const netItemLenInches=isInch?((maxL/2)+2):(((maxL/2)/2.54)+2);
      netBuckets[closestRoll]=(netBuckets[closestRoll]||0)+netItemLenInches;
    }
  });

  const formatFeetInch=(totalInches)=>{
    if(totalInches<=0)return"0 feet";
    let ft=Math.floor(totalInches/12),inRem=Math.round(totalInches%12);
    if(inRem>=12){ft+=1;inRem=0;}
    return inRem===0?`${ft} feet`:`${ft} feet ${inRem} inch`;
  };

  const slidingLock=`${nonFanlightCount*2} pcs`;
  const slidingWheelRegular=`${standardCount*4} pcs`;
  const slidingWheelGaton=`${gatonCount*4} pcs`;
  const slidingWheelDoubt=`${partitionCount*4} pcs`;
  const slidingRubber=formatFeetInch(totalRubberInches);
  const screws1_5=`${total1_5Screws} pcs`;
  const kotScrews=`${totalWindows*8} pcs`;
  let mohiar=formatFeetInch(totalMohiarInches);
  if(fanlightCount>0&&fanlightMohiarInches>0){
    mohiar+=` (For Fanlight: ${formatFeetInch(fanlightMohiarInches)})`;
  }
  const royalPlugs=`${Math.max(0,total1_5Screws-(totalWindows*8))} pcs`;
  const mosquitoNetRubber=is4Inch?(totalNetRubberInches>0?formatFeetInch(totalNetRubberInches):"0 feet"):"N/A";
  const mosquitoNetAngel=is4Inch?`${totalWindows*4} pcs`:"N/A";
  const mosquitoNetHandle=is4Inch?`${totalWindows} pcs`:"N/A";
  const mosquitoNetWheel=is4Inch?`${nonFanlightCount*2} pcs`:"N/A";

  const mosquitoNetParts=[];
  ROLL_HEIGHTS.forEach(rh=>{
    const lenIn=netBuckets[rh];
    if(lenIn>0)mosquitoNetParts.push(`${rh}' Height: ${formatFeetInch(lenIn)}`);
  });
  const mosquitoNetStr=is4Inch?(mosquitoNetParts.length>0?mosquitoNetParts.join(" | "):"0 feet"):"N/A";

  const isItemValid=(val)=>{
    if(!val)return false;
    const s=String(val).trim();
    if(s==="0 pcs"||s==="0 feet"||s==="0"||s===""||s.startsWith("N/A"))return false;
    return true;
  };

  const candidateItems=[
    {name:"Sliding Lock",value:slidingLock},
    {name:"Sliding Wheel (Regular)",value:slidingWheelRegular},
    {name:"Sliding Wheel (Gaton)",value:slidingWheelGaton},
    {name:"Sliding Wheel (Doubt Wheel)",value:slidingWheelDoubt},
    {name:"Sliding Rubber",value:slidingRubber},
    {name:"1.5 Inch Screw",value:screws1_5},
    {name:"Kot Screw",value:kotScrews},
    {name:"Mohiar",value:mohiar},
    {name:"Royal Plug",value:royalPlugs},
    {name:"Mosquito Net Rubber",value:mosquitoNetRubber},
    {name:"Mosquito Net Angel",value:mosquitoNetAngel},
    {name:"Mosquito Net Handle (3 Inch)",value:mosquitoNetHandle},
    {name:"Mosquito Net Wheel",value:mosquitoNetWheel},
    {name:"Mosquito Net",value:mosquitoNetStr,lines:mosquitoNetParts,isMosquitoNet:true}
  ];

  const items=candidateItems.filter(it=>isItemValid(it.value));

  return {
    items,
    slidingLock,
    slidingWheelRegular,
    slidingWheelGaton,
    slidingWheelDoubt,
    slidingRubber,
    screws1_5,
    kotScrews,
    mohiar,
    royalPlugs,
    mosquitoNetRubber,
    mosquitoNetAngel,
    mosquitoNetHandle,
    mosquitoNetWheel,
    mosquitoNet:mosquitoNetStr
  };
};;const[genSuccessMsg,setGenSuccessMsg]=H.useState(!1),billPrintableRef=H.useRef(null),billingReportRecordRef=H.useRef(null),[showCustSuggest,setShowCustSuggest]=H.useState(!1),[custDb,setCustDb]=H.useState(()=>{try{return JSON.parse(localStorage.getItem("thai_customers_db")||"[]");}catch(e){return[];}}),[n,i]=H.useState(()=>[{id:Date.now(),height:"",length1:"",length2:"",isOverridden:!1,isShutterOverridden:!1,isInchMode:!1}]),[l,r]=H.useState(()=>[]),[c,f]=H.useState([]),[d,h]=H.useState(!1),[g,y]=H.useState(!1),[v,x]=H.useState("3"),[exportMode,setExportMode]=H.useState("both"),[isSaveModalOpen,setIsSaveModalOpen]=H.useState(!1),hwData=computeHardware(l,v),[isAlumGlassOpen,setIsAlumGlassOpen]=H.useState(!1),[isHardwareOpen,setIsHardwareOpen]=H.useState(!1),[isBillingOpen,setIsBillingOpen]=H.useState(!1),[S,E]=H.useState(""),[N,L]=H.useState(""),[V,q]=H.useState(""),[K,Y]=H.useState(""),[X,$]=H.useState(""),[dt,I]=H.useState(""),[M,P]=H.useState(""),[Q,mt]=H.useState(""),[gt,Dt]=H.useState(!1),[billingOpen,setBillingOpen]=H.useState(!1),[squareFeetAmount,setSquareFeetAmount]=H.useState(""),[fanlightAmount,setFanlightAmount]=H.useState(""),[Et,St]=H.useState(null),[O,F]=H.useState(!1),[W,vt]=H.useState("notepad"),[Z,T]=H.useState(""),[B,J]=H.useState(null),[nt,ot]=H.useState(!1),[ut,bt]=H.useState([]),[Wt,Tt]=H.useState("append"),[Ne,De]=H.useState(null),[ke,Rn]=H.useState(()=>{if(typeof window<"u"&&window.location.origin&&window.location.origin.includes(".run.app"))return window.location.origin;const j=localStorage.getItem("custom_api_url");return j||"https://ais-pre-mdpyxbiiy7zdnvqi3omkot-77646848800.asia-east1.run.app"}),[Se,ps]=H.useState(!1);H.useEffect(()=>{window.__openBillingDetails=()=>{setBillingOpen(true);window.setTimeout(()=>document.getElementById("billing-details-section")?.scrollIntoView({behavior:"smooth",block:"center"}),150)};window.__clearBillingRateInputs=()=>{setSquareFeetAmount("");setFanlightAmount("");localStorage.removeItem("thai_billing_square_feet_amount");localStorage.removeItem("thai_billing_fanlight_amount")};return()=>{delete window.__openBillingDetails;delete window.__clearBillingRateInputs}},[]);H.useEffect(()=>{localStorage.setItem("custom_api_url",ke)},[ke]),H.useEffect(()=>{M==="Clear Glass"&&Q==="5.5 MM"&&mt("5 MM")},[M,Q]);const gs=H.useRef(null),ys=H.useRef(null),vs=152.4,pi=182.88,gi=121.92,yi=106.68,jl=60,Ml=72,we=48,Nl=42,Dl=.393701;H.useEffect(()=>{const syncHist=()=>{try{let j=localStorage.getItem("thai_history");if(!j&&window.AndroidBridge&&typeof window.AndroidBridge.getAppData==="function"){j=window.AndroidBridge.getAppData("thai_history");if(j&&j.length>2)localStorage.setItem("thai_history",j);}if(j)f(JSON.parse(j));}catch(tt){}};syncHist();window.addEventListener("history_updated",syncHist);return()=>window.removeEventListener("history_updated",syncHist);},[]),H.useEffect(()=>{const j=tt=>{const at=tt.target;if(at.closest("button")||at.closest("a")||at.closest('[role="button"]')||at.closest('input[type="checkbox"]')||at.closest('input[type="radio"]'))try{typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(15)}catch{}};return document.addEventListener("click",j,{capture:!0}),()=>{document.removeEventListener("click",j,{capture:!0})}},[]),H.useEffect(()=>{l.length>0&&Ha(!1)},[n.map(j=>`${j.isInchMode}-${j.isOverridden}-${j.isShutterOverridden}`).join(",")]);H.useEffect(()=>{
  const reloadCusts=()=>{
    try{
      let c=JSON.parse(localStorage.getItem("thai_customers_db")||"[]");
      if(c.length===0&&window.AndroidBridge&&typeof window.AndroidBridge.getAppData==="function"){
        const nat=window.AndroidBridge.getAppData("thai_customers_db");
        if(nat&&nat.length>2){c=JSON.parse(nat);localStorage.setItem("thai_customers_db",nat);}
      }
      setCustDb(c);
    }catch(e){}
  };
  window.addEventListener("customers_updated",reloadCusts);
  window.__thai_get_calculator_state=()=>({
    sets:n,
    results:l,
    thaiSize:v,
    customerName:S,
    customerPhone:N,
    customerLocation:V,
    aluminumColor:K,
    aluminumBrand:X,
    customBrand:dt,
    glassType:M,
    glassThickness:Q
  });
  try{
    // Inputs remain transient and are not auto-saved so app opens blank
  }catch(e){}
  const onRestoreCalc=(e)=>{
    try{
      let data=e&&e.detail;
      if(!data){
        const pStr=localStorage.getItem("thai_pending_restore_calculator")||localStorage.getItem("thai_active_calculator");
        if(pStr)data=JSON.parse(pStr);
      }
      if(data){
        const itemsArr=data.sets||data.items;
        if(itemsArr&&Array.isArray(itemsArr)&&itemsArr.length>0)i(itemsArr);
        if(data.results&&Array.isArray(data.results)&&data.results.length>0)r(data.results);
        if(data.thaiSize||data.profile)x(data.thaiSize||data.profile);
        if(data.customerName)E(data.customerName);
        if(data.customerPhone)L(data.customerPhone);
        if(data.customerLocation)q(data.customerLocation);
        if(data.aluminumColor)Y(data.aluminumColor);
        if(data.aluminumBrand)$(data.aluminumBrand);
        if(data.customBrand)I(data.customBrand);
        if(data.glassType)P(data.glassType);
        if(data.glassThickness)mt(data.glassThickness);
      }
    }catch(err){}
  };
  window.addEventListener("calculator_restored",onRestoreCalc);
  window.__thai_restore_job=(job)=>{
    if(!job)return;
    const restoredSets=(job.sets&&Array.isArray(job.sets)&&job.sets.length>0)?job.sets:(job.results||[]).map((w,idx)=>({id:Date.now()+idx,height:String(w.rawHeight||w.outerSide||""),length1:String(w.rawLength1||w.outerTop||""),length2:String(w.rawLength2||(w.outerTop!==w.outerBottom?w.outerBottom:"")||""),isOverridden:!1,isShutterOverridden:!1,isInchMode:!!w.isInchMode}));
    if(restoredSets.length>0)i(restoredSets);
    if(job.results&&Array.isArray(job.results))r(job.results);
    if(job.thaiSize)x(job.thaiSize);
    if(job.customerName&&job.customerName!=="Unknown Customer"&&job.customerName!=="Unknown User")E(job.customerName);else E("");
    if(job.customerPhone)L(job.customerPhone);else L("");
    if(job.customerLocation)q(job.customerLocation);else q("");
    if(job.aluminumColor)Y(job.aluminumColor);
    if(job.aluminumBrand)$(job.aluminumBrand);
    if(job.glassType)P(job.glassType);
    if(job.glassThickness)mt(job.glassThickness);
    setTimeout(()=>{
      const resElem=document.getElementById("results-section");
      if(resElem)window.scrollTo({top:resElem.offsetTop-20,behavior:"smooth"});
    },150);
  };
  return()=>{
    window.removeEventListener("customers_updated",reloadCusts);
    window.removeEventListener("calculator_restored",onRestoreCalc);
    delete window.__thai_restore_job;
    delete window.__thai_get_calculator_state;
  };
},[n,l,v,S,N,V,K,X,dt,M,Q]);H.useEffect(()=>{
  const checkPending=()=>{
    try{
      const pStr=localStorage.getItem("thai_pending_restore_job");
      const pending=window.__pending_restore_job||(pStr?JSON.parse(pStr):null);
      if(pending){
        window.__pending_restore_job=null;
        localStorage.removeItem("thai_pending_restore_job");
        if(window.__thai_restore_job)window.__thai_restore_job(pending);
      }
    }catch(err){console.error("Pending restore error",err);}
  };
  checkPending();
},[]);H.useEffect(()=>{
  if(!O&&!isSaveModalOpen&&!Ne)return;
  window.__modal_back_stack=window.__modal_back_stack||[];
  const handler=()=>{
    if(Ne){De(null);return true;}
    if(isSaveModalOpen){setIsSaveModalOpen(!1);return true;}
    if(O){F(!1);return true;}
    return false;
  };
  window.__modal_back_stack.push(handler);
  return()=>{
    const idx=window.__modal_back_stack.indexOf(handler);
    if(idx!==-1)window.__modal_back_stack.splice(idx,1);
  };
},[O,isSaveModalOpen,Ne]);const Ue=(j,tt=!1)=>{if(j<=0)return"0.0";const at=tt?j:j*Dl;let ft=Math.floor(at),et=Math.round((at-ft)*8);return et===8&&(ft+=1,et=0),`${ft}.${et}`},vi=()=>{if(!Z.trim())return;const cleanU=v=>(v||"").replace(/[\u200B-\u200F\u202A-\u202E\uFEFF]/g,"").trim();const pNum=v=>{v=cleanU(v);const m=v.match(/^(\d+)\s*[./\-*]\s*(\d+)$/);if(m)return`${m[1]}.${m[2]}`;const mi=v.match(/^(\d+)$/);return mi?mi[1]:v.replace(/[^\d.]/g,"")};const pLen=v=>{v=cleanU(v);if(v.includes(" - ")){const p=v.split(" - ");return[pNum(p[0]),pNum(p[1])]}if(v.includes(" / ")){const p=v.split(" / ");return[pNum(p[0]),pNum(p[1])]}if(v.includes(",")){const p=v.split(",");return[pNum(p[0]),pNum(p[1])]}const mDash=v.match(/^(\d+)\s*-\s*(\d{2,}\s*[./\-*]\s*\d+|\d{2,})$/);if(mDash)return[pNum(mDash[1]),pNum(mDash[2])];const mSlFirstWhole=v.match(/^(\d{2,})\s*\/\s*(\d{2,}\s*[./\-*]\s*\d+|\d{2,})$/);if(mSlFirstWhole)return[pNum(mSlFirstWhole[1]),pNum(mSlFirstWhole[2])];const mSlDec=v.match(/^(\d+\s*[.\-*]\s*\d+)\s*\/\s*(\d+(?:\s*[./\-*]\s*\d+)?)$/);if(mSlDec)return[pNum(mSlDec[1]),pNum(mSlDec[2])];const mTri=v.match(/^(\d+\/\d)\s*\/\s*(\d+(?:[./\-*]\d+)?)$/);if(mTri)return[pNum(mTri[1]),pNum(mTri[2])];const mIntSl=v.match(/^(\d+)\s*\/\s*(\d{2,})$/);if(mIntSl)return[mIntSl[1],mIntSl[2]];return[pNum(v),""]};const j=Z.split(`\n`),tt=[];j.forEach(at=>{let s=cleanU(at);if(!s)return;s=s.replace(/^[#•\*\-+|~]+\s*/,"");s=s.replace(/^(?:item|no\.?|sl\.?|gap|ser|serial)\s*\d{1,3}[\s\/:.)\-]*/i,"");s=s.replace(/^(?:\(\d{1,3}\)|\[\d{1,3}\])[\s\/:.)\-]*/,"");s=s.replace(/^\d{1,3}\s*[\.):|\-]\s+/,"");s=s.replace(/^\d{1,3}\s*\/\s*(?=\d{2,}(?:[./\-*]\d+)?\s*[xX×*])/,"");s=s.replace(/^\d{1,3}\s+\/\s*/,"");s=s.replace(/^\d{1,3}\/\s+(?=\d{2,})/,"");s=s.replace(/^\d{1,2}\s+(?=\d{2,}(?:[./\-*]\d+)?\s*[xX×*])/i,"");s=s.replace(/^[#•\*\-+|~]+\s*/,"").trim();if(!s)return;let et=[];if(/[xX×]/.test(s)){const idx=s.search(/[xX×]/);et=[s.substring(0,idx).trim(),s.substring(idx+1).trim()]}else if(/\s+by\s+/i.test(s)){const m=s.match(/\s+by\s+/i);et=[s.substring(0,m.index).trim(),s.substring(m.index+m[0].length).trim()]}else if(/\s+\*\s+/.test(s)){const m=s.match(/\s+\*\s+/);et=[s.substring(0,m.index).trim(),s.substring(m.index+m[0].length).trim()]}else if(s.includes("*")){const m=s.match(/^(\d+(?:[./\-*]\d{1,2})?)\s*\*\s*(\d{2,}.*)$/);if(m){et=[m[1].trim(),m[2].trim()]}else{const starIdx=s.indexOf("*");et=[s.substring(0,starIdx).trim(),s.substring(starIdx+1).trim()]}}else return;if(et.length>=2){const Xt=pNum(et[0]),[me,bn]=pLen(et[1]);Xt&&me&&tt.push({id:Date.now()+Math.random(),height:Xt,length1:me,length2:bn,isOverridden:!1,isShutterOverridden:!1,isInchMode:!1})}});tt.length>0?(Wt==="replace"||n.length===1&&!n[0].height&&!n[0].length1?i(tt):i([...n,...tt]),T(""),F(!1),alert(`Successfully imported ${tt.length} items from notepad!`)):alert("No valid measurements found. Make sure format is like: Height x Length1 - Length2 (e.g., 21/2 x 46 - 45/5)")},Mo=j=>new Promise(tt=>{const at=new Image;at.onload=()=>{let et=at.width,ht=at.height;(et>2560||ht>2560)&&(et>ht?(ht=Math.round(ht*2560/et),et=2560):(et=Math.round(et*2560/ht),ht=2560));const jt=document.createElement("canvas");jt.width=et,jt.height=ht;const Xt=jt.getContext("2d");if(Xt){Xt.drawImage(at,0,0,et,ht);const me=jt.toDataURL("image/jpeg",.85);tt(me)}else tt(j)},at.onerror=()=>{tt(j)},at.src=j}),bs=j=>{var at;const tt=(at=j.target.files)==null?void 0:at[0];if(tt){const ft=new FileReader;ft.onloadend=async()=>{const et=ft.result;try{const ht=await Mo(et);J(ht)}catch{J(et)}De(null),bt([])},ft.readAsDataURL(tt);j.target.value=""}},xs=(j,tt,at)=>{bt(ft=>ft.map((et,ht)=>ht===j?{...et,[tt]:at}:et))},No=j=>{bt(tt=>tt.filter((at,ft)=>ft!==j))},aa=j=>{bt(tt=>{const at=[...tt];return at.splice(j,0,{id:0,height:"",length1:"",length2:""}),at})},Ae=()=>{bt(j=>[...j,{id:0,height:"",length1:"",length2:""}])},vn=async()=>{if(!B)return;ot(!0);De(null);bt([]);try{const bridge=window.AndroidBridge;if(!bridge||typeof bridge.scanImageViaBridge!=="function")throw new Error("On-device photo scanning is unavailable. Please reopen the Android app.");const data=await new Promise((resolve,reject)=>{const callbackName="__photo_scan_"+Math.random().toString(36).slice(2);const timer=setTimeout(()=>{delete window[callbackName];reject(new Error("Photo scan timed out"))},90000);window[callbackName]=(responseJson,errorJson)=>{clearTimeout(timer);delete window[callbackName];if(errorJson)reject(new Error(errorJson));else{try{resolve(JSON.parse(responseJson))}catch(e){reject(e)}}};bridge.scanImageViaBridge(B,callbackName)});const toDecimal=value=>String(value==null?"":value).trim().replace(/(\d)\s*[\/-]\s*(\d)/g,"$1.$2").replace(/[^0-9.]/g,"").replace(/^\.+|\.+$/g,"");const splitLengthPair=value=>{const raw=String(value==null?"":value).trim();const pair=raw.match(/^(\d+(?:\s*[./-]\s*\d{1,3})?)\s*([/-])\s*(\d{2,4}(?:\s*[./-]\s*\d{1,3})?)$/);return pair?[toDecimal(pair[1]),toDecimal(pair[3])]:[toDecimal(raw),""]};const items=Array.isArray(data?.items)?data.items:[];const normalized=items.map((item,index)=>{const [length1,length2]=splitLengthPair(item.length1);return{id:index+1,serial:String(item.serial??item.serialNumber??item.itemNo??item.number??""),height:toDecimal(item.height),length1,length2:toDecimal(item.length2)||length2}}).filter(item=>item.height&&item.length1);bt(normalized.length?normalized:[{id:Date.now(),serial:"1",height:"",length1:"",length2:""}])}catch(error){console.warn("Photo scan could not read the image",error);De("Could not read measurements in this image. Try a clear, close-up photo, or enter the values below.")}finally{ot(!1)}},Ee=()=>{const validItems=ut.filter(tt=>String(tt.height||"").trim()&&String(tt.length1||"").trim());if(validItems.length===0){De("Enter O.S. and O.T. for at least one scanned item.");return}const j=validItems.map(tt=>({id:Date.now()+Math.random(),height:tt.height||"",length1:tt.length1||"",length2:tt.length2||"",isOverridden:!1,isShutterOverridden:!1,isInchMode:!1}));Wt==="replace"||n.length===1&&!n[0].height&&!n[0].length1?i(j):i([...n,...j]),J(null),bt([]),F(!1),alert(`Successfully imported ${j.length} items from scanned image!`)},Do=()=>{i([...n,{id:Date.now(),height:"",length1:"",length2:"",isOverridden:!1,isShutterOverridden:!1,isInchMode:!1}])},ko=j=>{n.length>1&&i(n.filter(tt=>tt.id!==j))},Ua=(j,tt,at)=>{i(n.map(ft=>ft.id===j?{...ft,[tt]:at}:ft))},showNativeToast=(msg)=>{if(window.AndroidBridge&&typeof window.AndroidBridge.showToast==="function"){try{window.AndroidBridge.showToast(msg);return;}catch(e){}}let toast=document.getElementById("native-style-bottom-toast");if(!toast){toast=document.createElement("div");toast.id="native-style-bottom-toast";toast.style.cssText="position:fixed;bottom:28px;left:50%;transform:translateX(-50%);z-index:999999;background-color:rgba(15,23,42,0.95);color:#ffffff;font-size:12px;font-weight:800;letter-spacing:0.3px;padding:10px 22px;border-radius:9999px;box-shadow:0 10px 25px -5px rgba(0,0,0,0.5);pointer-events:none;transition:all 0.3s cubic-bezier(0.16,1,0.3,1);opacity:0;";document.body.appendChild(toast);}toast.innerText=msg;toast.style.opacity="1";toast.style.transform="translateX(-50%) translateY(0) scale(1)";if(window._toastTimerId)clearTimeout(window._toastTimerId);window._toastTimerId=setTimeout(()=>{if(toast){toast.style.opacity="0";toast.style.transform="translateX(-50%) translateY(12px) scale(0.95)";}},2200);},Ha=(j=!0)=>{setShowCustSuggest(!1);const tt=[];if(n.forEach((at,ft)=>{const et=parseFloat(at.height)||0,ht=parseFloat(at.length1)||0,jt=parseFloat(at.length2)||0;if(et>0&&ht>0){const Xt=!!at.isInchMode,me=Xt?et>=Ml&&ht>=we:et>=pi&&ht>=gi,bn=!Xt&&et<61&&ht<61,zn=et>=vs&&ht<yi,xn=et>=jl&&ht<Nl,kl=!me&&(zn||xn),Fe=bn&&!at.isOverridden,ee=me,ce=kl&&!at.isShutterOverridden;let cn,fn,wi,Ga,Ln,Sn,ia,Vn="",_n="";if(ce)Xt?(cn=Ue(et,!0),fn=Ue(ht*2,!0),wi=fn,Ga=Ue(et-2.7/2.54,!0),Ln=Ue(ht-4,!0),Sn=Ue(et-2.7/2.54-8/2.54,!0),ia=Ue(ht-4+1.3/2.54,!0)):(cn=et.toFixed(1),fn=(ht*2).toFixed(1),wi=fn,Ga=(et-2.7).toFixed(1),Ln=(ht-10.16).toFixed(1),Sn=Ue(et-2.7-8),ia=Ue(ht-10.16+1.3));else{const sa=Math.max(ht,jt);cn=et.toFixed(1),fn=(ht-1.3).toFixed(1),wi=jt>0?(jt-1.3).toFixed(1):fn,Ga=Fe?(et-2).toFixed(1):(et-2.7).toFixed(1),Ln=((sa-15)/2).toFixed(1),Sn=Ue(parseFloat(Ga)-8),ia=Ue(parseFloat(Ln)+1.3),Vn=(et-3).toFixed(1),_n=(parseFloat(Ln)+8.5).toFixed(1)}let qa=Fe?"Fan Light":ee?"Partition":ce?`1 Shutter ${Xt?"IN":"CM"}`:"Standard Window";tt.push({id:at.id,label:qa,outerSide:cn,outerTop:fn,outerBottom:wi,lockVal:Ga,shutterTopBottom:Ln,glassHeightInch:Sn,glassLengthInch:ia,isSmallFrame:Fe,isOneShutter:ce,isPartition:ee,isInchMode:Xt,netSectionHeight:Vn,netSectionLength:_n,rawHeight:et,rawLength1:ht,rawLength2:jt,isGaton:at.isGaton})}}),tt.length>0&&(r(tt),j)){let finalCustName=(S&&S.trim())?S.trim():"Unknown Customer";
let finalCustPhone=N?N.trim():"";
let finalCustLoc=V?V.trim():"";
const curAlumBrand=X==="Others"?(dt||"Custom Brand"):(X||"");
let isDuplicate=false;
let curH=[];
try{
  curH=JSON.parse(localStorage.getItem("thai_history")||"[]");
  if(curH.length>0){
    const last=curH[0];
    const sameCust=(last.customerName||"").trim().toLowerCase()===finalCustName.toLowerCase()&&
                   (last.customerPhone||"").trim()===finalCustPhone&&
                   (last.customerLocation||"").trim()===finalCustLoc;
    const sameSpecs=String(last.thaiSize)===String(v)&&
                    (last.aluminumColor||"")===(K||"")&&
                    (last.aluminumBrand||"")===curAlumBrand&&
                    (last.glassType||"")===(M||"")&&
                    (last.glassThickness||"")===(Q||"");
    const cleanSets=arr=>(arr||[]).map(s=>({
      h:String(s.height||"").trim(),
      l1:String(s.length1||"").trim(),
      l2:String(s.length2||"").trim(),
      in:!!s.isInchMode,
      ov:!!s.isOverridden,
      sh:!!s.isShutterOverridden
    }));
    const sameSets=JSON.stringify(cleanSets(n))===JSON.stringify(cleanSets(last.sets));
    if(sameCust&&sameSpecs&&sameSets){
      isDuplicate=true;
    }
  }
}catch(e){}
if(!isDuplicate){
  if(S&&S.trim()){
    try{
      let curC=JSON.parse(localStorage.getItem("thai_customers_db")||"[]");
      let existIdx=-1;
      if(finalCustPhone){
        existIdx=curC.findIndex(c=>c.name.trim().toLowerCase()===finalCustName.toLowerCase()&&c.phone&&c.phone.trim()===finalCustPhone);
      }else{
        existIdx=curC.findIndex(c=>c.name.trim().toLowerCase()===finalCustName.toLowerCase()&&(!c.phone||!c.phone.trim()));
      }
      if(existIdx!==-1){
        if(finalCustLoc)curC[existIdx].lastLocation=finalCustLoc;
        curC[existIdx].totalJobs=(curC[existIdx].totalJobs||0)+1;
        curC[existIdx].updatedAt=Date.now();
      }else{
        curC.push({
          id:"cust_"+Date.now(),
          name:finalCustName,
          phone:finalCustPhone,
          lastLocation:finalCustLoc,
          totalJobs:1,
          createdAt:Date.now(),
          updatedAt:Date.now()
        });
      }
      localStorage.setItem("thai_customers_db",JSON.stringify(curC));
      if(window.AndroidBridge&&typeof window.AndroidBridge.saveAppData==="function"){
        window.AndroidBridge.saveAppData("thai_customers_db",JSON.stringify(curC));
      }
      window.dispatchEvent(new CustomEvent("customers_updated"));
      if(typeof window.triggerAutoCloudBackup==="function")window.triggerAutoCloudBackup();
    }catch(err){console.error("Error saving customer DB",err);}
  }
  let at={
    id:Date.now().toString(),
    timestamp:Date.now(),
    customerName:finalCustName,
    customerPhone:finalCustPhone,
    customerLocation:finalCustLoc,
    aluminumColor:K||"",
    aluminumBrand:curAlumBrand,
    glassType:M||"",
    glassThickness:Q||"",
    thaiSize:v,
    sets:n.map(ft=>({...ft})),
    results:tt,
    hardware:computeHardware(tt,v)
  };
  billingReportRecordRef.current=getThaiBillingReportRecord(squareFeetAmount,fanlightAmount);
  saveThaiBillingRecord(at.id,squareFeetAmount,fanlightAmount);
  if(window.__clearBillingRateInputs)window.__clearBillingRateInputs();
  f(ft=>[at,...ft].slice(0,100));
  try{
    const fullHist=[at,...curH].slice(0,100);
    localStorage.setItem("thai_history",JSON.stringify(fullHist));
    if(window.AndroidBridge&&typeof window.AndroidBridge.saveAppData==="function"){
      window.AndroidBridge.saveAppData("thai_history",JSON.stringify(fullHist));
    }
    window.dispatchEvent(new CustomEvent("history_updated"));
    if(typeof window.triggerAutoCloudBackup==="function")window.triggerAutoCloudBackup();
  }catch(err){console.error("Error saving history DB",err);}
}
if(window.__clearBillingRateInputs)window.__clearBillingRateInputs();
if(j){showNativeToast("Successfully Generated All Data");}
setTimeout(()=>{const ft=document.getElementById("results-section");ft&&window.scrollTo({top:ft.offsetTop-20,behavior:"smooth"})},100)}},bi=()=>{setShowCustSuggest(!1);Ha(!0);},xi=j=>{i(j.sets),r(j.results),j.thaiSize&&x(j.thaiSize),billingReportRecordRef.current=readThaiBillingRecords()[String(j.id)]||null,h(!1)},On=()=>{billingReportRecordRef.current=null,i([{id:Date.now(),height:"",length1:"",length2:"",isOverridden:!1,isShutterOverridden:!1,isInchMode:!1}]),r([]),E(""),L(""),q(""),Y(""),$(""),I(""),P(""),mt(""),T(""),window.scrollTo({top:0,behavior:"smooth"})},reportSavedToast=message=>{
  try{
    if(typeof window!=="undefined"&&window.AndroidBridge&&typeof window.AndroidBridge.showToast==="function"){
      window.AndroidBridge.showToast(message);
      return;
    }
  }catch(e){}
  const existing=document.getElementById("report-save-toast");
  if(existing)existing.remove();
  const toast=document.createElement("div");
  toast.id="report-save-toast";
  toast.textContent=message;
  toast.style.cssText="position:fixed;z-index:999999;left:50%;bottom:24px;transform:translateX(-50%);max-width:90vw;padding:12px 18px;border-radius:9999px;background:#0f172a;color:#fff;font:700 13px system-ui,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.25);text-align:center";
  document.body.appendChild(toast);
  setTimeout(()=>toast.remove(),2500);
},saveReportFile=async(dataUrl,fileName)=>{
  const bridge=typeof window!=="undefined"?window.AndroidBridge:null;
  if(bridge){
    try{
      if(typeof bridge.saveImageQuiet==="function"){
        if(bridge.saveImageQuiet(dataUrl,fileName))return true;
      }else if(typeof bridge.saveImage==="function"&&bridge.saveImage(dataUrl,fileName))return true;
    }catch(e){}
  }
  if(wl.isNativePlatform()){
    try{
      (await $r.checkPermissions()).publicStorage!=="granted"&&await $r.requestPermissions();
      const et=dataUrl.split(",")[1];
      await $r.writeFile({path:"Download/"+fileName,data:et,directory:xo.ExternalStorage});
      return true;
    }catch{
      const et=dataUrl.split(",")[1];
      await $r.writeFile({path:fileName,data:et,directory:xo.Documents});
      return true;
    }
  }else{
    const ft=document.createElement("a");
    ft.href=dataUrl;
    ft.download=fileName;
    document.body.appendChild(ft);
    ft.click();
    document.body.removeChild(ft);
    return true;
  }
},Si=async(mode)=>{
  setIsSaveModalOpen(!1);
  const sm=mode||exportMode;
  if(mode)setExportMode(mode);
  if(!ys.current||l.length===0)return;
  y(!0);
  try{
    await new Promise(ft=>setTimeout(ft,100));
    const j=await QC(ys.current,{cacheBust:!0,backgroundColor:"#ffffff",pixelRatio:2.5});
    const pfx=sm==="aluminum"?"Thai_Aluminium":sm==="glass"?"Thai_Glass":sm==="hardware"?"Thai_Hardware":"Thai";
    const at=pfx+"_Report_"+(new Date().getTime())+".png";
    await saveReportFile(j,at);
    const message=sm==="aluminum"?"Aluminium Saved":sm==="glass"?"Glass Saved":sm==="hardware"?"Hardware Saved":"All In One Photo Saved";
    reportSavedToast(message);
  }catch(j){
    console.error("Failed to save report",j);
    alert("Error saving report: "+(j.message||"Unknown error")+". Please try again.");
  }finally{
    y(!1);
  }
},saveAllIndividually=async()=>{
  setIsSaveModalOpen(!1);
  if(!ys.current||!billPrintableRef.current||l.length===0)return;
  y(!0);
  try{
    const list=[
      {mode:"bill",pfx:"Thai_Bill"},
      {mode:"aluminum",pfx:"Thai_Aluminium"},
      {mode:"glass",pfx:"Thai_Glass"},
      {mode:"hardware",pfx:"Thai_Hardware"}
    ];
    for(let k=0;k<list.length;k++){
      const target=list[k];
      if(target.mode!=="bill"){
        setExportMode(target.mode);
        await new Promise(r=>setTimeout(r,120));
      }
      const targetRef=target.mode==="bill"?billPrintableRef.current:ys.current;
      const imgData=await QC(targetRef,{cacheBust:!0,backgroundColor:"#ffffff",pixelRatio:2.5});
      const stamp=new Date().getTime()+k*10;
      const customerName=((S&&S.trim())?S.trim():"Customer").replace(/[^a-zA-Z0-9]/g,"_");
      const fName=target.mode==="bill"?"Thai_Bill_"+customerName+"_"+stamp+".png":target.pfx+"_Report_"+stamp+".png";
      await saveReportFile(imgData,fName);
    }
    setExportMode("both");
    reportSavedToast("All Individual photo Saved");
  }catch(err){
    console.error("Failed to save all individually",err);
    alert("Error: "+(err.message||"Failed to save reports"));
  }finally{
    y(!1);
  }
},saveBillReport=async()=>{
  setIsSaveModalOpen(!1);
  if(!billPrintableRef.current||l.length===0){
    alert("Please calculate results first!");
    return;
  }
  y(!0);
  try{
    await new Promise(r=>setTimeout(r,100));
    const imgData=await QC(billPrintableRef.current,{cacheBust:!0,backgroundColor:"#ffffff",pixelRatio:2.5});
    const custClean=((S&&S.trim())?S.trim():"Customer").replace(/[^a-zA-Z0-9]/g,"_");
    const fName="Thai_Bill_"+custClean+"_"+(new Date().getTime())+".png";
    await saveReportFile(imgData,fName);
    reportSavedToast("Bill Saved");
  }catch(err){
    console.error("Failed to save bill report",err);
    alert("Error saving bill: "+(err.message||"Failed to save bill"));
  }finally{
    y(!1);
  }
};return p.jsxs("div",{className:"min-h-full bg-slate-50 p-3 md:p-8 space-y-4 md:space-y-8 pb-12",children:[null,p.jsx("div",{style:{position:"fixed",left:"-9999px",top:0,width:"820px",zIndex:-1000,backgroundColor:"#ffffff"},children:p.jsxs("div",{ref:billPrintableRef,style:{width:"820px",backgroundColor:"#ffffff",color:"#0f172a",fontFamily:"system-ui, -apple-system, sans-serif",padding:"28px",boxSizing:"border-box"},children:[p.jsxs("div",{style:{borderBottom:"3px solid #0d9488",paddingBottom:"14px",marginBottom:"18px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsxs("div",{children:[p.jsx("h1",{style:{fontSize:"20px",fontWeight:"900",color:"#0f172a",margin:"0",letterSpacing:"0.5px",textTransform:"uppercase"},children:"Thai Aluminium & Glass Fabrication Report"}),p.jsx("p",{style:{fontSize:"11px",fontWeight:"800",color:"#0d9488",margin:"3px 0 0 0",letterSpacing:"1px",textTransform:"uppercase"},children:"Workshop Production & Cutting Specification Sheet"})]}),p.jsxs("div",{style:{textAlign:"right"},children:[p.jsx("p",{style:{fontSize:"9px",fontWeight:"800",color:"#64748b",margin:"0",textTransform:"uppercase"},children:"Generated Date & Time:"}),p.jsx("p",{style:{fontSize:"11px",fontWeight:"900",color:"#0f172a",margin:"2px 0 0 0"},children:formatDateTime(new Date(),"en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})})]})]}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginBottom:"16px"},children:[p.jsxs("div",{style:{border:"1px solid #cbd5e1",borderRadius:"12px",padding:"12px",backgroundColor:"#f8fafc"},children:[p.jsx("p",{style:{fontSize:"11px",fontWeight:"900",color:"#0d9488",textTransform:"uppercase",letterSpacing:"0.5px",margin:"0 0 6px 0"},children:"Customer & Site Information"}),p.jsxs("p",{style:{fontSize:"13px",fontWeight:"800",color:"#0f172a",margin:"0 0 4px 0"},children:["Name: ",(S&&S.trim())?S.trim():"Unknown Customer"]}),p.jsxs("p",{style:{fontSize:"12px",fontWeight:"600",color:"#334155",margin:"0 0 4px 0"},children:["Phone: ",(N&&N.trim())?N.trim():"N/A"]}),p.jsxs("p",{style:{fontSize:"12px",fontWeight:"600",color:"#334155",margin:"0"},children:["Site Location: ",(V&&V.trim())?V.trim():"N/A"]})]}),p.jsxs("div",{style:{border:"1px solid #cbd5e1",borderRadius:"12px",padding:"12px",backgroundColor:"#f8fafc"},children:[p.jsx("p",{style:{fontSize:"11px",fontWeight:"900",color:"#0d9488",textTransform:"uppercase",letterSpacing:"0.5px",margin:"0 0 6px 0"},children:"Aluminium & Glass Specifications"}),p.jsxs("p",{style:{fontSize:"12px",fontWeight:"800",color:"#0f172a",margin:"0 0 4px 0"},children:["Profile: ",v," Inch Profile"]}),p.jsxs("p",{style:{fontSize:"12px",fontWeight:"600",color:"#334155",margin:"0 0 4px 0"},children:["Aluminium: ",K||"Standard Color"," • ",(X==="Others"?(dt||"Custom Brand"):(X||"Standard Brand"))]}),p.jsxs("p",{style:{fontSize:"12px",fontWeight:"600",color:"#334155",margin:"0"},children:["Glass: ",M||"Clear Glass"," • ",Q||"5mm"]})]})]}),(()=>{const bgBill=computeBillingGuide(l),hasFL=bgBill&&bgBill.fanlightCount>0;return p.jsxs("div",{style:{border:"2px solid #0d9488",borderRadius:"12px",padding:"12px",backgroundColor:"#f0fdfa",marginBottom:"18px",display:"grid",gridTemplateColumns:hasFL?"repeat(4, 1fr)":"repeat(2, 1fr)",gap:"10px",textAlign:"center"},children:hasFL?[p.jsxs("div",{children:[p.jsx("p",{style:{fontSize:"10px",fontWeight:"800",color:"#0f766e",textTransform:"uppercase",margin:"0"},children:"Total Without Fanlight"}),p.jsxs("p",{style:{fontSize:"14px",fontWeight:"900",color:"#042f2e",margin:"3px 0 0 0"},children:[formatSqFt(bgBill&&bgBill.totalWithoutFanlightSqFt)," Square Feet"]})]}),p.jsxs("div",{children:[p.jsx("p",{style:{fontSize:"10px",fontWeight:"800",color:"#0f766e",textTransform:"uppercase",margin:"0"},children:"Total With Fanlight"}),p.jsxs("p",{style:{fontSize:"14px",fontWeight:"900",color:"#042f2e",margin:"3px 0 0 0"},children:[formatSqFt(bgBill&&bgBill.totalWithFanlightSqFt)," Square Feet"]})]}),p.jsxs("div",{children:[p.jsx("p",{style:{fontSize:"10px",fontWeight:"800",color:"#0f766e",textTransform:"uppercase",margin:"0"},children:"Window Quantities"}),p.jsxs("p",{style:{fontSize:"13px",fontWeight:"900",color:"#042f2e",margin:"3px 0 0 0"},children:[(bgBill?bgBill.nonFanlightCount:0)," Windows"]})]}),p.jsxs("div",{children:[p.jsx("p",{style:{fontSize:"10px",fontWeight:"800",color:"#0f766e",textTransform:"uppercase",margin:"0"},children:"Fanlight Count"}),p.jsxs("p",{style:{fontSize:"13px",fontWeight:"900",color:"#042f2e",margin:"3px 0 0 0"},children:[(bgBill?bgBill.fanlightCount:0)," Pcs"]})]})]:[p.jsxs("div",{children:[p.jsx("p",{style:{fontSize:"11px",fontWeight:"800",color:"#0f766e",textTransform:"uppercase",margin:"0"},children:"Total Square Feet"}),p.jsxs("p",{style:{fontSize:"16px",fontWeight:"900",color:"#042f2e",margin:"3px 0 0 0"},children:[formatSqFt(bgBill&&bgBill.totalWithoutFanlightSqFt)," Square Feet"]})]}),p.jsxs("div",{children:[p.jsx("p",{style:{fontSize:"11px",fontWeight:"800",color:"#0f766e",textTransform:"uppercase",margin:"0"},children:"Total Windows"}),p.jsxs("p",{style:{fontSize:"16px",fontWeight:"900",color:"#042f2e",margin:"3px 0 0 0"},children:[(bgBill?bgBill.nonFanlightCount:0)," Windows"]})]})]})})(),(()=>{const bgBill=computeBillingGuide(l);return p.jsx("div",{style:{marginBottom:"14px"},children:[p.jsx("p",{style:{fontSize:"11px",fontWeight:"900",color:"#0f172a",textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:"8px"},children:"Window Sizes & Square Feet Specifications:"}),p.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"11px",textAlign:"center",border:"1px solid #cbd5e1"},children:[p.jsx("thead",{style:{backgroundColor:"#0f172a",color:"#ffffff"},children:p.jsxs("tr",{children:[p.jsx("th",{style:{padding:"8px 6px",border:"1px solid #334155",width:"8%"},children:"SL"}),p.jsx("th",{style:{padding:"8px 6px",border:"1px solid #334155",width:"32%"},children:"Window Size (Feet)"}),p.jsx("th",{style:{padding:"8px 6px",border:"1px solid #334155",width:"20%"},children:"Unit Area"}),p.jsx("th",{style:{padding:"8px 6px",border:"1px solid #334155",width:"18%"},children:"Quantity"}),p.jsx("th",{style:{padding:"8px 6px",border:"1px solid #334155",width:"22%"},children:"Total Square Feet"})]})}),p.jsxs("tbody",{children:[(bgBill.itemsBySize||[]).map((sz,idx)=>{const unitSqFt=formatSqFt(sz.bH*sz.bL);return p.jsxs("tr",{key:idx,style:{backgroundColor:idx%2===0?"#ffffff":"#f8fafc",borderBottom:"1px solid #cbd5e1"},children:[p.jsx("td",{style:{padding:"7px 6px",fontWeight:"800",border:"1px solid #e2e8f0"},children:idx+1}),p.jsxs("td",{style:{padding:"7px 6px",fontWeight:"800",color:"#0f172a",border:"1px solid #e2e8f0"},children:[sz.bH," × ",sz.bL," ft"]}),p.jsxs("td",{style:{padding:"7px 6px",fontWeight:"700",color:"#334155",border:"1px solid #e2e8f0"},children:[unitSqFt," sq ft"]}),p.jsxs("td",{style:{padding:"7px 6px",fontWeight:"800",color:"#0d9488",border:"1px solid #e2e8f0"},children:[sz.count," Pcs"]}),p.jsxs("td",{style:{padding:"7px 6px",fontWeight:"900",color:"#042f2e",border:"1px solid #e2e8f0"},children:[formatSqFt(sz.totalSqFt)," sq ft"]})]})}),(bgBill.fanlightItemsBySize||[]).map((sz,idx)=>p.jsxs("tr",{key:"fanlight-"+idx,style:{backgroundColor:"#fffbeb",borderBottom:"1px solid #cbd5e1"},children:[p.jsx("td",{style:{padding:"7px 6px",fontWeight:"800",border:"1px solid #fde68a"},children:bgBill.itemsBySize.length+idx+1}),p.jsxs("td",{style:{padding:"7px 6px",fontWeight:"800",color:"#92400e",border:"1px solid #fde68a"},children:["Fanlight ",sz.bH," × ",sz.bL," ft"]}),p.jsxs("td",{style:{padding:"7px 6px",fontWeight:"700",color:"#b45309",border:"1px solid #fde68a"},children:[formatSqFt(sz.unitSqFt)," sq ft"]}),p.jsxs("td",{style:{padding:"7px 6px",fontWeight:"800",color:"#92400e",border:"1px solid #fde68a"},children:[sz.count," Pcs"]}),p.jsx("td",{style:{padding:"7px 6px",fontWeight:"900",color:"#78350f",border:"1px solid #fde68a"},children:"-"})]})),p.jsxs("tr",{style:{backgroundColor:"#f0fdfa",borderTop:"2px solid #0d9488"},children:[p.jsx("td",{colSpan:3,style:{padding:"8px 6px",fontWeight:"900",fontSize:"12px",color:"#042f2e",textAlign:"right",border:"1px solid #99f6e4"},children:"TOTAL WORK AREA:"}),p.jsxs("td",{style:{padding:"8px 6px",fontWeight:"900",fontSize:"12px",color:"#0f766e",border:"1px solid #99f6e4"},children:[(bgBill.nonFanlightCount+bgBill.fanlightCount)," Pcs"]}),p.jsxs("td",{style:{padding:"8px 6px",fontWeight:"900",fontSize:"13px",color:"#042f2e",border:"1px solid #99f6e4"},children:[formatSqFt(bgBill.totalWithoutFanlightSqFt)," sq ft"]})]})]})]})]})})(),(()=>{
  const reportBillingRecord=getThaiBillingReportRecord(squareFeetAmount,fanlightAmount)||billingReportRecordRef.current;
  if(!reportBillingRecord)return null;
  const printGuide=computeBillingGuide(l);
  const printBill=calculateWorkBill(printGuide,reportBillingRecord);
  if(!printBill)return null;
  const row=(label,workArea,rate,amount,isFinal)=>p.jsxs("tr",{
                            style:{backgroundColor:isFinal?"#f0fdfa":"#ffffff",borderBottom:"1px solid #cbd5e1"},
                            children:[
                              p.jsx("td",{colSpan:isFinal?3:1,style:{padding:"8px 7px",fontWeight:"900",color:isFinal?"#042f2e":"#334155",border:"1px solid #cbd5e1"},children:label}),
                              !isFinal&&p.jsx("td",{style:{padding:"8px 7px",fontWeight:"700",color:"#475569",border:"1px solid #cbd5e1"},children:workArea}),
                              !isFinal&&p.jsx("td",{style:{padding:"8px 7px",fontWeight:"700",color:"#475569",textAlign:"right",whiteSpace:"nowrap",border:"1px solid #cbd5e1"},children:rate}),
                              p.jsx("td",{style:{padding:"8px 7px",fontWeight:"900",color:"#0f766e",textAlign:"right",whiteSpace:"nowrap",border:"1px solid #cbd5e1"},children:amount==null?"":formatBillMoney(amount,false)})
                            ]
                          });
  return p.jsxs("div",{
    style:{border:"1px solid #cbd5e1",borderRadius:"12px",padding:"12px",backgroundColor:"#f8fafc",marginBottom:"14px"},
    children:[
      p.jsx("p",{style:{fontSize:"11px",fontWeight:"900",color:"#0f766e",textTransform:"uppercase",letterSpacing:"0.5px",margin:"0 0 8px 0"},children:"Billing Breakdown"}),
      p.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10px",textAlign:"left",border:"1px solid #cbd5e1"},children:[
        p.jsx("thead",{style:{backgroundColor:"#0f172a",color:"#ffffff"},children:p.jsxs("tr",{children:[
          p.jsx("th",{style:{padding:"8px 7px",border:"1px solid #334155"},children:"Description"}),
          p.jsx("th",{style:{padding:"8px 7px",border:"1px solid #334155"},children:"Total Work Area"}),
          p.jsx("th",{style:{padding:"8px 7px",border:"1px solid #334155",textAlign:"right"},children:"Rate"}),
                                  p.jsx("th",{style:{padding:"8px 7px",border:"1px solid #334155",textAlign:"right"},children:"Amount"})
        ]})}),
        p.jsxs("tbody",{children:[
          row("Total Work Square Feet",formatSqFt(printBill.workSquareFeet)+" sq ft",printBill.hasSquareFeetRate?formatBillMoney(printBill.squareFeetRate,false):"—",printBill.totalWorkAmount,false),
          row("Total Fanlight",printBill.fanlightCount+" "+(printBill.fanlightCount===1?"pc":"pcs"),printBill.hasFanlightRate?formatBillMoney(printBill.fanlightRate,false):"—",printBill.totalFanlightAmount,false),
          row("Final Bill In Taka","","",printBill.finalAmount,true)
        ]})
      ]})
    ]
  });
})(),p.jsxs("div",{style:{borderTop:"1px solid #cbd5e1",paddingTop:"10px",marginTop:"14px",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"10px",color:"#64748b",fontWeight:"700"},children:[p.jsx("span",{children:"Thai Fabrication Pro • Precision Workshop Specification"}),p.jsx("span",{children:"Page 1 of 1 • Verified Calculations"})]})]})}),p.jsx("div",{className:"fixed -left-[10000px] top-0 pointer-events-none",style:{position:"fixed",left:"-10000px",top:0,pointerEvents:"none",zIndex:-1000,backgroundColor:"#ffffff"},children:p.jsx("div",{ref:ys,className:(exportMode==="glass"||exportMode==="hardware")?"w-[760px] bg-white p-8 relative flex flex-col":"w-[1200px] bg-white p-12 relative flex flex-col",style:{minHeight:"auto",height:"auto"},children:p.jsxs("div",{className:"relative z-10 flex flex-col",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between items-start border-b-4 border-slate-900 pb-6 mb-8",children:[p.jsxs("div",{children:[p.jsx("h1",{className:(exportMode==="glass"||exportMode==="hardware"?"text-4xl":"text-5xl")+" font-black text-slate-900 uppercase tracking-tight mb-2",style:exportMode==="hardware"?{fontSize:"30px"}:exportMode==="glass"?{fontSize:"38px"}:undefined,children:exportMode==="hardware"?"HARDWARE & FITTINGS":exportMode==="glass"?"REQUIRED GLASS":exportMode==="aluminum"?"ALUMINIUM FABRICATION":"ALL IN ONE"}),((exportMode!=="glass"&&(S||N||V))||(exportMode!=="hardware"&&(X||K||M||Q)))&&p.jsxs("div",{className:"text-slate-900 font-bold text-base space-y-1 mt-2 text-left",children:[exportMode!=="glass"&&S&&p.jsxs("p",{children:["Customer Name : ",S]}),exportMode!=="glass"&&N&&p.jsxs("p",{children:["Customer Phone Number : ",N]}),exportMode!=="glass"&&V&&p.jsxs("p",{children:["Customer / Site Location : ",V]}),exportMode!=="hardware"&&p.jsxs(p.Fragment,{children:[exportMode!=="glass"&&(X||K)&&p.jsx("p",{children:[v+" Inch",X?(X==="Others"?(dt||"Custom Brand"):X):"",K?K.replace(" Color",""):"",(X||K)?"Aluminum":""].filter(Boolean).join(" ")}),exportMode!=="aluminum"&&(M||Q)&&p.jsx("p",{children:["Glass Type:",M||"Not selected","• Thickness:",Q||"Not selected"].join(" ")})]})]})]}),p.jsxs("div",{className:"text-right",children:[p.jsx("p",{className:(exportMode==="glass"?"text-base":"text-xl")+" font-black text-slate-900",children:new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"long",year:"numeric"})}),p.jsx("p",{className:"text-sm font-bold text-teal-600 uppercase tracking-widest",children:formatClockTime(new Date(),"en-US",{hour:"2-digit",minute:"2-digit",hour12:true})})]})]}),exportMode!=="hardware"&&p.jsx("div",{className:"w-full overflow-visible pb-1",children:p.jsxs("table",{className:"w-full border-collapse border-2 border-black text-center text-sm",style:{borderCollapse:"collapse",border:"2px solid black",borderBottom:"2px solid black"},children:[p.jsx("thead",{children:exportMode==="glass"?p.jsx("tr",{className:"bg-white",children:[p.jsx("th",{className:"border border-black p-2 font-bold text-black w-20",children:"SL. NO."}),p.jsx("th",{className:"border border-black p-2 font-bold text-black",children:"Glass Section (Inch)"})]}):p.jsxs(p.Fragment,{children:[p.jsxs("tr",{className:"bg-white",children:[p.jsx("th",{rowSpan:2,className:"border border-black p-2 font-bold text-black",children:"Gap NO."}),p.jsx("th",{colSpan:v==="3"?4:6,className:"border border-black p-2 font-bold text-black",children:"Aluminium Section"}),exportMode==="both"&&p.jsx("th",{rowSpan:2,className:"border border-black p-2 font-bold text-black",children:"Glass Section (Inch)"})]}),p.jsxs("tr",{className:"bg-white",children:[p.jsx("th",{className:"border border-black p-2 font-bold text-black",children:"Outer Side"}),p.jsx("th",{className:"border border-black p-2 font-bold text-black",children:"Outer T/B"}),p.jsx("th",{className:"border border-black p-2 font-bold text-black",children:"S/I Lock"}),p.jsx("th",{className:"border border-black p-2 font-bold text-black",children:"Shutter T/B"}),v!=="3"&&p.jsxs(p.Fragment,{children:[p.jsx("th",{className:"border border-black p-2 font-bold text-black",children:"N/S Height"}),p.jsx("th",{className:"border border-black p-2 font-bold text-black",children:"N/S Length"})]})]})]})}),p.jsx("tbody",{children:l.map((j,tt)=>{const isLast=tt===l.length-1,tdCls=isLast?"border border-black border-b-2 border-b-black p-2":"border border-black p-2",tdSty=isLast?{borderBottom:"2px solid black"}:undefined;return p.jsxs("tr",{key:j.id,className:"bg-white",children:[p.jsx("td",{className:`${tdCls} font-medium text-black`,style:tdSty,children:tt+1}),exportMode!=="glass"&&p.jsxs(p.Fragment,{children:[p.jsx("td",{className:`${tdCls} text-black`,style:tdSty,children:j.outerSide}),p.jsx("td",{className:`${tdCls} text-black`,style:tdSty,children:j.outerTop===j.outerBottom?j.outerTop:p.jsxs("div",{className:"flex flex-col text-[10px] leading-tight",children:[p.jsxs("span",{children:["T: ",j.outerTop]}),p.jsxs("span",{children:["B: ",j.outerBottom]})]})}),p.jsx("td",{className:`${tdCls} text-black`,style:tdSty,children:j.lockVal}),p.jsx("td",{className:`${tdCls} text-black`,style:tdSty,children:j.shutterTopBottom}),v!=="3"&&p.jsxs(p.Fragment,{children:[p.jsx("td",{className:`${tdCls} text-black`,style:tdSty,children:j.netSectionHeight||""}),p.jsx("td",{className:`${tdCls} text-black`,style:tdSty,children:j.netSectionLength||""})]})]}),exportMode!=="aluminum"&&p.jsx("td",{className:`${tdCls} text-black font-semibold`,style:tdSty,children:(exportMode==="glass"?"":(tt+1)+". ")+j.glassHeightInch+" x "+j.glassLengthInch+" = 2p"})]})})})]})})]}),(exportMode==="both"||exportMode==="hardware")&&hwData&&hwData.items.length>0&&p.jsxs("div",{className:exportMode==="both"?"mt-7":"mt-2",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-3 mt-1 border-b-2 border-slate-900 pb-2",children:[p.jsxs("h2",{className:"text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2",children:[p.jsx("span",{className:"text-xl",children:"⚙️"}),"Required Hardware"]})]}),p.jsxs("table",{className:"w-full border-collapse border-2 border-black text-center text-sm",style:{borderCollapse:"collapse",border:"2px solid black",borderBottom:"2px solid black"},children:[p.jsx("thead",{children:p.jsxs("tr",{className:"bg-slate-100",children:[p.jsx("th",{className:"border border-black p-2 font-bold text-black w-14",children:"SL."}),p.jsx("th",{className:"border border-black p-2 font-bold text-black text-left pl-4",children:"Hardware Item Name"}),p.jsx("th",{className:"border border-black p-2 font-bold text-black text-left pl-4",children:"Quantity / Size"})]})}),p.jsx("tbody",{children:hwData.items.map((hw,idx)=>{const isLastHw=idx===hwData.items.length-1,hwCls=isLastHw?"border border-black border-b-2 border-b-black p-2":"border border-black p-2",hwSty=isLastHw?{borderBottom:"2px solid black"}:undefined;return p.jsxs("tr",{key:hw.name,className:idx%2===0?"bg-white":"bg-slate-50/50",children:[p.jsx("td",{className:`${hwCls} font-medium text-black`,style:hwSty,children:idx+1}),p.jsx("td",{className:`${hwCls} font-bold text-black text-left pl-4`,style:hwSty,children:hw.name}),p.jsxs("td",{className:`${hwCls} font-bold text-black text-left pl-4`,style:hwSty,children:[hw.lines&&hw.lines.length>0?p.jsx("div",{className:"flex flex-col gap-1 items-start text-left",children:hw.lines.map((ln,lidx)=>p.jsx("div",{key:lidx,className:"leading-tight text-left",children:ln}))}):p.jsx("span",{children:hw.value}),hw.isMosquitoNet&&p.jsx("div",{className:"text-xs mt-0.5 text-left",style:{color:"#dc2626",fontWeight:"bold"},children:"(Please Cross Check Mosquito Net By Yourself)"})]})]})})})]})]}),p.jsx("div",{className:"mt-8 pt-6 border-t-2 border-slate-100 text-center",children:p.jsx("p",{className:"text-sm font-black text-slate-300 uppercase tracking-[0.6em]",children:"Professional AluCraft"})})]})})}),p.jsx("div",{className:"w-full",children:p.jsxs("div",{className:"bg-white md:rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border-y border-slate-200 md:border overflow-hidden",children:[p.jsxs("div",{className:"hidden",children:[p.jsxs("div",{className:"flex items-center gap-3 md:gap-4 overflow-hidden",children:[p.jsx("div",{className:"flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-teal-100 text-teal-600 shadow-inner",children:p.jsx("svg",{className:"w-5 h-5 md:w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})}),p.jsxs("div",{className:"overflow-hidden",children:[p.jsx("h2",{className:"text-lg md:text-xl font-black text-slate-800 tracking-tight leading-none truncate md:leading-normal",children:"Thai Specs"}),p.jsx("p",{className:"text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 md:mt-0 truncate",children:"Configure frame"})]})]}),p.jsxs("button",{onClick:()=>h(!0),className:"flex-shrink-0 px-2.5 md:px-4 py-2 md:py-3 bg-white hover:bg-slate-100 text-slate-600 rounded-xl md:rounded-2xl transition-all border border-slate-200 flex items-center gap-2 group shadow-sm active:scale-95",children:[p.jsx("svg",{className:"flex-shrink-0 w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:rotate-12",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),p.jsx("span",{className:"text-[10px] md:text-xs font-black uppercase tracking-wider md:tracking-widest whitespace-nowrap",children:"History"})]})]}),p.jsxs("div",{className:"p-4 md:p-8 space-y-6 md:space-y-8",children:[p.jsxs("div",{className:"flex items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm",children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("div",{className:"w-1.5 h-6 bg-teal-500 rounded-full"}),p.jsxs("div",{children:[p.jsx("h4",{className:"text-xs md:text-sm font-black text-slate-800 tracking-tight uppercase leading-none",children:"Frame Size"}),p.jsx("p",{className:"text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1",children:"Select 3 Inch or 4 Inch profile"})]})]}),p.jsxs("div",{className:"flex bg-slate-200/50 p-0.5 rounded-xl border border-slate-200",children:[p.jsx("button",{onClick:()=>x("3"),className:`px-3 md:px-5 py-2 rounded-lg text-[9px] md:text-xs font-black uppercase tracking-wider transition-all duration-200 active:scale-95 ${v==="3"?"bg-teal-600 text-white shadow-md":"text-slate-600 hover:text-teal-600"}`,children:"3 Inch"}),p.jsx("button",{onClick:()=>x("4"),className:`px-3 md:px-5 py-2 rounded-lg text-[9px] md:text-xs font-black uppercase tracking-wider transition-all duration-200 active:scale-95 ${v==="4"?"bg-teal-600 text-white shadow-md":"text-slate-600 hover:text-teal-600"}`,children:"4 Inch"})]})]}),p.jsxs("div",{className:"bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300",children:[p.jsx("style",{dangerouslySetInnerHTML:{__html:`
                @keyframes scanBeam {
                  0% { top: 0%; opacity: 0.8; }
                  50% { top: 100%; opacity: 0.8; }
                  100% { top: 0%; opacity: 0.8; }
                }
                .scanner-laser-line {
                  animation: scanBeam 2.5s ease-in-out infinite;
                }
              `}}),p.jsxs("button",{type:"button",onClick:()=>F(!O),className:"smart-scanner-toggle-btn w-full flex items-center justify-between px-4 md:px-6 py-4 bg-slate-100/80 hover:bg-slate-100/90 transition-all font-black text-[10px] md:text-xs text-slate-700 uppercase tracking-widest",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("div",{className:"w-6 h-6 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600",children:p.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),p.jsx("span",{children:"SMART SCANNER & NOTEPAD IMPORT"})]}),p.jsx("div",{className:"flex items-center gap-2",children:p.jsx("svg",{className:`w-4 h-4 text-slate-500 transition-transform duration-300 ${O?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M19 9l-7 7-7-7"})})})]}),O&&p.jsxs("div",{className:"p-4 md:p-6 space-y-6 border-t border-slate-100 bg-white",children:[p.jsxs("div",{className:"space-y-4 animate-fade-in",children:[p.jsx("div",{className:"space-y-1",children:p.jsx("textarea",{rows:6,value:Z,onChange:j=>T(j.target.value),placeholder:"Paste Notepad Notes Here",className:"w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold shadow-inner focus:border-teal-400 focus:bg-white text-xs md:text-sm font-mono"})}),p.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 pt-2",children:[p.jsx("div",{className:"flex gap-2",children:Z&&p.jsx("button",{type:"button",onClick:()=>T(""),className:"text-[9px] bg-slate-50 hover:bg-slate-100 text-slate-500 font-bold px-3 py-1.5 rounded-lg border border-slate-100 transition-all",children:"Clear"})}),p.jsxs("button",{type:"button",disabled:!Z.trim(),onClick:vi,className:`px-6 py-2.5 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest transition-all shadow-md active:scale-95 flex items-center gap-1.5 ${Z.trim()?"bg-teal-600 hover:bg-teal-700 text-white shadow-teal-600/10":"bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"}`,children:[p.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M12 4v16m8-8H4"})}),"Import List"]})]})]}),W==="photo"&&p.jsxs("div",{className:"space-y-4 animate-fade-in text-left",children:[
  p.jsx("input",{id:"measurement-camera-input",type:"file",accept:"image/*",capture:"environment",onChange:bs,className:"hidden"}),
  p.jsx("input",{id:"measurement-upload-input",type:"file",accept:"image/*",onChange:bs,className:"hidden"}),
  p.jsxs("div",{className:"flex flex-col items-center justify-center border-2 border-dashed border-teal-200 rounded-2xl p-5 bg-teal-50/40 space-y-3",children:[
    p.jsx("div",{className:"w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-3xl shadow-sm",children:"📷"}),
    p.jsxs("div",{className:"space-y-1 text-center",children:[
      p.jsx("h4",{className:"text-sm md:text-base font-black text-slate-800 tracking-tight",children:"Scan Handwritten Measurements"}),
      p.jsx("p",{className:"text-xs text-slate-600 font-medium leading-relaxed",children:"Take a clear, well-lit photo of your numbered measurements on white paper, or upload a Notepad screenshot."})
    ]}),
    p.jsxs("div",{className:"grid grid-cols-2 gap-2 w-full",children:[
      p.jsx("button",{type:"button",disabled:nt,onClick:()=>document.getElementById("measurement-camera-input")?.click(),className:"w-full py-3 px-2 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-black text-[10px] uppercase tracking-wider shadow-sm transition-all active:scale-95",children:"📷 Open Camera"}),
      p.jsx("button",{type:"button",disabled:nt,onClick:()=>document.getElementById("measurement-upload-input")?.click(),className:"w-full py-3 px-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-50 text-slate-700 font-black text-[10px] uppercase tracking-wider shadow-sm transition-all active:scale-95",children:"🖼️ Upload Photo"})
    ]})
  ]}),
  B&&p.jsxs("div",{className:"p-3 rounded-2xl border border-slate-200 bg-white space-y-3",children:[
    p.jsx("img",{src:B,alt:"Selected measurement sheet",className:"max-h-64 max-w-full mx-auto object-contain rounded-xl border border-slate-100 bg-slate-50"}),
    p.jsx("button",{type:"button",disabled:nt,onClick:()=>{J(null);bt([]);De(null)},className:"w-full py-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 font-bold text-[10px] uppercase tracking-wider disabled:opacity-50",children:"Remove / Retake Image"})
  ]}),
  B&&p.jsx("button",{type:"button",disabled:nt,onClick:vn,className:`w-full py-3 rounded-xl text-white font-black text-xs uppercase tracking-widest shadow-md transition-all active:scale-95 ${nt?"bg-slate-400":"bg-teal-600 hover:bg-teal-700"}`,children:nt?"Reading Measurements...":"Scan Image with AI"}),
  nt&&p.jsx("p",{className:"text-center text-xs font-bold text-teal-700 animate-pulse",children:"Reading serial numbers and dimensions. Please wait..."}),
  Ne&&p.jsx("div",{className:"p-3 rounded-xl border border-red-200 bg-red-50 text-red-700 text-xs font-bold leading-relaxed",children:Ne}),
  ut.length>0&&p.jsxs("div",{className:"p-3 md:p-4 rounded-2xl border border-slate-200 bg-white space-y-3",children:[
    p.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[
      p.jsxs("div",{children:[p.jsx("h4",{className:"text-sm font-black text-slate-800",children:"Review Scanned Items"}),p.jsx("p",{className:"text-[10px] text-slate-500 font-medium",children:"Check O.S., O.T. and optional lower length before adding."})]}),
      p.jsxs("div",{className:"flex gap-1.5",children:[
        p.jsx("button",{type:"button",onClick:()=>Tt("append"),className:`px-2.5 py-1.5 rounded-lg border text-[9px] font-black uppercase ${Wt==="append"?"bg-teal-600 border-teal-600 text-white":"bg-white border-slate-200 text-slate-500"}`,children:"Add to List"}),
        p.jsx("button",{type:"button",onClick:()=>Tt("replace"),className:`px-2.5 py-1.5 rounded-lg border text-[9px] font-black uppercase ${Wt==="replace"?"bg-teal-600 border-teal-600 text-white":"bg-white border-slate-200 text-slate-500"}`,children:"Replace List"})
      ]})
    ]}),
    ut.map((row,idx)=>p.jsxs("div",{className:"p-3 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2",children:[
      p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("span",{className:"text-xs font-black text-slate-700",children:["Item ",row.serial||idx+1]}),p.jsx("button",{type:"button",onClick:()=>No(idx),className:"text-[10px] font-bold text-red-500 px-2 py-1 rounded-lg hover:bg-red-50",children:"Remove"})]}),
      p.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[
        p.jsxs("label",{className:"text-[9px] font-black uppercase tracking-wide text-slate-500",children:["O.S",p.jsx("input",{type:"text",inputMode:"decimal",value:row.height||"",onChange:e=>xs(idx,"height",e.target.value),placeholder:"136.5",className:"mt-1 w-full px-2 py-2 rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-800 outline-none focus:border-teal-500"})]}),
        p.jsxs("label",{className:"text-[9px] font-black uppercase tracking-wide text-slate-500",children:["O.T",p.jsx("input",{type:"text",inputMode:"decimal",value:row.length1||"",onChange:e=>xs(idx,"length1",e.target.value),placeholder:"48.2",className:"mt-1 w-full px-2 py-2 rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-800 outline-none focus:border-teal-500"})]}),
        p.jsxs("label",{className:"text-[9px] font-black uppercase tracking-wide text-slate-500",children:["Optional O.B",p.jsx("input",{type:"text",inputMode:"decimal",value:row.length2||"",onChange:e=>xs(idx,"length2",e.target.value),placeholder:"Optional",className:"mt-1 w-full px-2 py-2 rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-800 outline-none focus:border-teal-500"})]})
      ]})
    ]},row.id||idx)),
    p.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[
      p.jsx("button",{type:"button",onClick:Ae,className:"py-2.5 rounded-xl border border-dashed border-slate-300 bg-white text-slate-600 font-black text-[10px] uppercase tracking-wider",children:"+ Add Row"}),
      p.jsx("button",{type:"button",onClick:Ee,className:"py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-black text-[10px] uppercase tracking-wider shadow-sm",children:"Add to Calculator"})
    ]})
  ]})
]})]})]}),n.map((j,tt)=>{const at=parseFloat(j.height)||0,ft=parseFloat(j.length1)||0,et=at>0&&ft>0&&(j.isInchMode?at>=Ml&&ft>=we:at>=pi&&ft>=gi),ht=at>0&&ft>0&&(at>=vs&&ft<yi||at>=jl&&ft<Nl),jt=!j.isInchMode&&at>0&&ft>0&&at<61&&ft<61;return p.jsxs("div",{className:`relative p-4 md:p-6 border rounded-2xl md:rounded-[2rem] group transition-all hover:shadow-lg ${et?"bg-emerald-50/30 border-emerald-200":"bg-slate-50/20 border-slate-100 hover:border-teal-100"}`,children:[p.jsxs("div",{className:"flex items-center justify-between mb-4 md:mb-6",children:[p.jsxs("div",{className:"flex flex-wrap items-center gap-2 md:gap-3",children:[p.jsxs("span",{className:"px-3 md:px-4 py-1.5 bg-slate-900 text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-lg md:rounded-xl shadow-lg shadow-slate-900/10",children:["Item ",tt+1]}),jt&&p.jsx("button",{onClick:()=>Ua(j.id,"isOverridden",!j.isOverridden),className:`px-3 md:px-4 py-1.5 text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-lg md:rounded-xl transition-all border ${j.isOverridden?"bg-white border-slate-200 text-slate-400":"bg-amber-600 border-amber-500 text-white shadow-md"}`,children:"Fan Light"}),et&&p.jsxs("div",{className:"px-3 md:px-4 py-1.5 bg-emerald-600 border border-emerald-500 text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-lg md:rounded-xl flex items-center gap-1.5 md:gap-2 cursor-default select-none shadow-md shadow-emerald-600/20",children:[p.jsx("span",{className:"w-1.5 md:w-2 h-1.5 md:h-2 bg-emerald-200 rounded-full animate-pulse"}),"Partition"]}),ht&&!et&&p.jsx("div",{className:"flex items-center gap-2",children:p.jsx("button",{onClick:()=>Ua(j.id,"isShutterOverridden",!j.isShutterOverridden),className:`px-3 md:px-4 py-1.5 text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-lg transition-all border ${j.isShutterOverridden?"bg-white border-slate-200 text-slate-400":"bg-indigo-600 border-indigo-500 text-white shadow-md"}`,children:"1 Shutter"})})]}),n.length>1&&p.jsx("button",{onClick:()=>ko(j.id),className:"p-1.5 md:p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg md:rounded-xl transition-all",children:p.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]}),p.jsxs("div",{className:"grid grid-cols-3 gap-2 md:gap-6",children:[p.jsxs("div",{className:"space-y-1 md:space-y-2",children:[p.jsxs("label",{className:"text-[7px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest ml-0.5 truncate block",children:["Height (",j.isInchMode?"INCH":"CM",")"]}),p.jsx("input",{type:"number",inputMode:"decimal",value:j.height,onChange:Xt=>Ua(j.id,"height",Xt.target.value),className:"w-full px-2 md:px-5 py-3 md:py-4 bg-white border rounded-lg md:rounded-2xl outline-none font-bold shadow-inner focus:border-teal-400 text-xs md:text-base",placeholder:"O/S"})]}),p.jsxs("div",{className:"space-y-1 md:space-y-2",children:[p.jsx("label",{className:"text-[7px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest ml-0.5 truncate block",children:"Length 1"}),p.jsx("input",{type:"number",inputMode:"decimal",value:j.length1,onChange:Xt=>Ua(j.id,"length1",Xt.target.value),className:"w-full px-2 md:px-5 py-3 md:py-4 bg-white border rounded-lg md:rounded-2xl outline-none font-bold shadow-inner focus:border-teal-400 text-xs md:text-base",placeholder:"O/T"})]}),p.jsxs("div",{className:"space-y-1 md:space-y-2",children:[p.jsx("label",{className:"text-[7px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest ml-0.5 truncate block",children:"Length 2"}),p.jsx("input",{type:"number",inputMode:"decimal",value:j.length2,onChange:Xt=>Ua(j.id,"length2",Xt.target.value),className:"w-full px-2 md:px-5 py-3 md:py-4 bg-white border rounded-lg md:rounded-2xl outline-none font-bold shadow-inner focus:border-teal-400 text-xs md:text-base",placeholder:"Opt O/B"})]})]})]},j.id)})]}),p.jsxs("div",{className:"p-4 md:p-8 bg-slate-50 border-t border-slate-200 space-y-3 md:space-y-4",children:[p.jsxs("button",{onClick:Do,className:"w-full flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 py-4 md:py-5 bg-white text-slate-600 border border-dashed border-slate-300 rounded-xl md:rounded-[1.5rem] font-black hover:border-teal-400 hover:text-teal-600 transition-all shadow-sm uppercase tracking-widest text-[10px] md:text-xs",children:[p.jsx("svg",{className:"w-4 h-4 md:w-5 md:h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M12 4v16m8-8H4"})}),"Add Item"]}),p.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl md:rounded-[1.5rem] shadow-sm overflow-hidden transition-all duration-300",children:[p.jsxs("button",{type:"button",onClick:()=>Dt(!gt),className:"customer-details-toggle-btn w-full flex items-center justify-between px-4 md:px-6 py-4 bg-slate-100/60 hover:bg-slate-100 transition-all font-black text-[10px] md:text-xs text-slate-700 uppercase tracking-widest",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("svg",{className:"w-4 h-4 text-teal-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),p.jsx("span",{children:"Customer Details"})]}),p.jsx("svg",{className:`w-4 h-4 text-slate-500 transition-transform duration-300 ${gt?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M19 9l-7 7-7-7"})})]}),gt&&p.jsxs("div",{className:"p-4 md:p-6 space-y-4 border-t border-slate-100 bg-white",children:[p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[p.jsxs("div",{className:"space-y-1 relative",children:[
  p.jsx("label",{className:"text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest block",children:"Customer Name"}),
  p.jsx("input",{
    type:"text",
    value:S,
    onChange:j=>{const val=j.target.value;E(val);setShowCustSuggest(!!val.trim());},
    onFocus:()=>setShowCustSuggest(!!S.trim()),
    onBlur:()=>{setTimeout(()=>setShowCustSuggest(!1),250);},
    className:"w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold shadow-inner focus:border-teal-400 focus:bg-white text-xs md:text-sm",
    placeholder:"Enter name to search or add"
  }),
  showCustSuggest&&S.trim()&&(()=>{
    const q=S.toLowerCase().trim();
    const mCusts=custDb.filter(c=>(c.name||"").toLowerCase().includes(q)&&(c.name||"").trim().toLowerCase()!==q);
    if(mCusts.length===0)return null;
    return p.jsxs("div",{className:"absolute left-0 right-0 top-full mt-1 bg-white border border-slate-200 rounded-xl shadow-2xl z-50 max-h-48 overflow-y-auto divide-y divide-slate-100",children:
      mCusts.slice(0,8).map(c=>p.jsxs("div",{
        key:c.id||c.name+(c.phone||""),
        onMouseDown:e=>{
          e.preventDefault();
          E(c.name);
          if(c.phone)L(c.phone);
          setShowCustSuggest(!1);
        },
        className:"p-3 hover:bg-teal-50 cursor-pointer flex items-center justify-between text-left transition-colors",
        children:[
          p.jsxs("div",{children:[
            p.jsx("p",{className:"font-black text-slate-800 text-xs",children:c.name}),
            c.phone&&p.jsxs("p",{className:"text-[10px] text-slate-500 font-bold mt-0.5",children:["📞 ",c.phone]}),
            c.lastLocation&&p.jsxs("p",{className:"text-[9px] text-slate-400",children:["📍 ",c.lastLocation]})
          ]}),
          p.jsx("span",{className:"text-[9px] bg-teal-100 text-teal-800 font-black px-2 py-0.5 rounded-full uppercase tracking-wider",children:"Select"})
        ]
      }))
    });
  })()
]}),p.jsxs("div",{className:"space-y-1",children:[p.jsx("label",{className:"text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest block",children:"Customer Phone Number"}),p.jsx("input",{type:"tel",value:N,onChange:j=>L(j.target.value),className:"w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold shadow-inner focus:border-teal-400 focus:bg-white text-xs md:text-sm",placeholder:"Enter phone number"})]}),p.jsxs("div",{className:"space-y-1",children:[p.jsx("label",{className:"text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest block",children:"Customer / Site Location"}),p.jsx("input",{type:"text",value:V,onChange:j=>q(j.target.value),className:"w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold shadow-inner focus:border-teal-400 focus:bg-white text-xs md:text-sm",placeholder:"Enter site location"})]})]}),p.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[p.jsxs("div",{className:"space-y-1",children:[p.jsx("label",{className:"text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest block",children:"Aluminum Color"}),p.jsxs("button",{type:"button",onClick:()=>St("alumColor"),className:"w-full text-left px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-xs md:text-sm text-slate-800 hover:border-teal-400 hover:bg-teal-50/10 transition-all flex justify-between items-center",children:[p.jsx("span",{className:`truncate ${K?"text-slate-800":"text-slate-400 font-medium"}`,children:K||"Select Color"}),p.jsx("svg",{className:"w-4 h-4 text-slate-400 flex-shrink-0 ml-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M19 9l-7 7-7-7"})})]})]}),p.jsxs("div",{className:"space-y-1",children:[p.jsx("label",{className:"text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest block",children:"Aluminum Brand"}),p.jsxs("button",{type:"button",onClick:()=>St("alumBrand"),className:"w-full text-left px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-xs md:text-sm text-slate-800 hover:border-teal-400 hover:bg-teal-50/10 transition-all flex justify-between items-center",children:[p.jsx("span",{className:`truncate ${X?"text-slate-800":"text-slate-400 font-medium"}`,children:X||"Select Brand"}),p.jsx("svg",{className:"w-4 h-4 text-slate-400 flex-shrink-0 ml-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M19 9l-7 7-7-7"})})]})]}),p.jsxs("div",{className:"space-y-1",children:[p.jsx("label",{className:"text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest block",children:"Glass Type"}),p.jsxs("button",{type:"button",onClick:()=>St("glassType"),className:"w-full text-left px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-xs md:text-sm text-slate-800 hover:border-teal-400 hover:bg-teal-50/10 transition-all flex justify-between items-center",children:[p.jsx("span",{className:`truncate ${M?"text-slate-800":"text-slate-400 font-medium"}`,children:M||"Select Type"}),p.jsx("svg",{className:"w-4 h-4 text-slate-400 flex-shrink-0 ml-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M19 9l-7 7-7-7"})})]})]}),p.jsxs("div",{className:"space-y-1",children:[p.jsx("label",{className:"text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest block",children:"Glass Thickness"}),p.jsxs("button",{type:"button",onClick:()=>St("glassThickness"),className:"w-full text-left px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-xs md:text-sm text-slate-800 hover:border-teal-400 hover:bg-teal-50/10 transition-all flex justify-between items-center",children:[p.jsx("span",{className:`truncate ${Q?"text-slate-800":"text-slate-400 font-medium"}`,children:Q||"Select Thickness"}),p.jsx("svg",{className:"w-4 h-4 text-slate-400 flex-shrink-0 ml-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M19 9l-7 7-7-7"})})]})]})]}),X==="Others"&&p.jsxs("div",{className:"pt-2 max-w-md animate-fade-in",children:[p.jsx("label",{className:"text-[8px] md:text-[10px] font-black text-amber-600 uppercase tracking-widest block mb-1",children:"Specify Other Brand"}),p.jsx("input",{type:"text",value:dt,onChange:j=>I(j.target.value),className:"w-full px-4 py-3 bg-amber-50/30 border border-amber-200 rounded-xl outline-none font-bold focus:border-amber-500 focus:bg-white text-xs md:text-sm text-slate-800",placeholder:"Type Brand Name"})]})]})]}),p.jsxs("div",{id:"billing-details-section",className:"bg-white border border-slate-200 rounded-xl md:rounded-[1.5rem] shadow-sm overflow-hidden transition-all duration-300",children:[
p.jsxs("button",{type:"button",onClick:()=>setBillingOpen(!billingOpen),className:"customer-details-toggle-btn w-full flex items-center justify-between px-4 md:px-6 py-4 bg-slate-100/60 hover:bg-slate-100 transition-all font-black text-[10px] md:text-xs text-slate-700 uppercase tracking-widest",children:[
p.jsxs("div",{className:"flex items-center gap-2",children:[
p.jsx("svg",{className:"w-4 h-4 text-teal-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M7 3h8l4 4v14H5V3h2zm1 8h8m-8 4h8"})}),
p.jsx("span",{children:"Billing Details"})
]}),
p.jsx("svg",{className:`w-4 h-4 text-slate-500 transition-transform duration-300 ${billingOpen?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M19 9l-7 7-7-7"})})
]}),
billingOpen&&p.jsxs("div",{className:"p-4 md:p-6 space-y-4 border-t border-slate-100 bg-white",children:[
p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[
p.jsxs("div",{className:"space-y-1",children:[
p.jsx("label",{className:"text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest block",children:"Square Feet Rate"}),
p.jsxs("div",{className:"flex items-center w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl shadow-inner focus-within:border-teal-400 focus-within:bg-white",children:[
p.jsx("span",{className:"mr-3 flex-shrink-0 text-slate-500 font-bold",children:"৳"}),
p.jsx("input",{type:"number",inputMode:"decimal",min:"0",step:"any",value:squareFeetAmount,onChange:j=>{const amount=j.target.value;setSquareFeetAmount(amount);if(amount)localStorage.setItem("thai_billing_square_feet_amount",amount);else localStorage.removeItem("thai_billing_square_feet_amount")},className:"min-w-0 flex-1 bg-transparent outline-none font-bold text-xs md:text-sm text-slate-800",placeholder:"Enter amount"})
]})
]}),
p.jsxs("div",{className:"space-y-1",children:[
p.jsx("label",{className:"text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest block",children:"Fanlight Rate"}),
p.jsxs("div",{className:"flex items-center w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl shadow-inner focus-within:border-teal-400 focus-within:bg-white",children:[
p.jsx("span",{className:"mr-3 flex-shrink-0 text-slate-500 font-bold",children:"৳"}),
p.jsx("input",{type:"number",inputMode:"decimal",min:"0",step:"any",value:fanlightAmount,onChange:j=>{const amount=j.target.value;setFanlightAmount(amount);if(amount)localStorage.setItem("thai_billing_fanlight_amount",amount);else localStorage.removeItem("thai_billing_fanlight_amount")},className:"min-w-0 flex-1 bg-transparent outline-none font-bold text-xs md:text-sm text-slate-800",placeholder:"Enter amount"})
]})
]})
]}),
(squareFeetAmount||fanlightAmount)&&p.jsx("button",{type:"button",onClick:()=>{billingReportRecordRef.current=null;setSquareFeetAmount("");setFanlightAmount("");localStorage.removeItem("thai_billing_rate_type");localStorage.removeItem("thai_billing_square_feet_amount");localStorage.removeItem("thai_billing_fanlight_amount")},className:"ml-auto block text-right text-[10px] md:text-xs font-black uppercase tracking-wider text-teal-700 hover:underline",children:"Clear Rate Selection"})
]})
]}),p.jsxs("button",{onClick:bi,className:"w-full bg-slate-900 text-cyan-400 font-black py-5 md:py-6 rounded-xl md:rounded-[1.5rem] shadow-2xl hover:bg-slate-800 transition-all tracking-widest text-xs md:text-sm flex items-center justify-center gap-2 group",children:["GENERATE LIST ",p.jsx("svg",{className:"w-5 h-5 transition-transform group-hover:translate-x-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})]})]})}),p.jsx("div",{id:"results-section",ref:gs,className:"w-full pt-4 px-3 md:px-0",children:l.length>0?p.jsxs("div",{className:"space-y-6 md:space-y-10",children:[p.jsx("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between px-2 gap-4",children:p.jsxs("div",{className:"flex items-center gap-3 md:gap-4",children:[p.jsx("div",{className:"w-1 md:w-1.5 h-8 md:h-10 bg-teal-500 rounded-full"}),p.jsxs("div",{children:[p.jsx("h2",{className:"text-xl md:text-2xl font-black text-slate-800 tracking-tight leading-none",children:"Output"}),p.jsx("p",{className:"text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1",children:"Fabrication Ready"})]})]})}),p.jsxs("div",{id:"alum-glass-section",className:"bg-white rounded-2xl md:rounded-[2.5rem] shadow-xl border border-slate-200 overflow-hidden",children:[p.jsxs("button",{type:"button",onClick:()=>setIsAlumGlassOpen(!isAlumGlassOpen),className:"w-full p-4 md:p-6 bg-slate-50 flex items-center justify-between transition-all hover:bg-slate-100/70 select-none text-left",style:{backgroundColor:"#f8fafc",borderBottom:isAlumGlassOpen?"1px solid #e2e8f0":"none"},children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("span",{className:"text-2xl md:text-3xl leading-none flex-shrink-0 select-none",children:"🪟"}),p.jsx("h3",{className:"text-xl md:text-2xl font-black tracking-tight leading-tight",style:{color:"#0f172a",fontWeight:900},children:"Aluminum and Glass"})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"text-xs md:text-sm font-bold text-slate-500",children:isAlumGlassOpen?"Hide":"Show"}),p.jsx("span",{className:"text-slate-400 text-sm md:text-base font-bold",children:isAlumGlassOpen?"▲":"▼"})]})]}),isAlumGlassOpen&&p.jsx("div",{className:"p-4 md:p-6 bg-slate-50/30",children:p.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8",children:l.map((j,tt)=>{const at=!!j.isPartition,ft=j.isSmallFrame?"bg-amber-50 border-amber-200":j.isOneShutter?"bg-indigo-50 border-indigo-200":at?"bg-emerald-50 border-emerald-200":"bg-white border-slate-200",et=j.isSmallFrame?"bg-amber-600":j.isOneShutter?"bg-indigo-600":at?"bg-emerald-600":"bg-slate-900",ht=j.isInchMode?"INCH":"CM",jt=j.isSmallFrame?"amber":j.isOneShutter?"indigo":at?"emerald":"teal";return p.jsxs("div",{className:`rounded-[1.5rem] md:rounded-[2.5rem] shadow-xl border overflow-hidden transition-all hover:scale-[1.01] ${ft}`,children:[p.jsxs("div",{className:`flex items-center justify-between px-4 md:px-8 py-3 md:py-5 text-white ${et}`,children:[p.jsxs("span",{className:"text-[10px] md:text-xs font-black tracking-widest uppercase",children:["ITEM ",tt+1," — ",j.label]}),p.jsx("span",{className:"text-[8px] md:text-[10px] px-2 md:px-3 py-0.5 md:py-1 rounded-lg border text-white font-black bg-black/20 border-white/10 tracking-widest uppercase",children:ht})]}),p.jsxs("div",{className:"p-4 md:p-8",children:[p.jsxs("div",{className:"mb-6 md:mb-10",children:[p.jsxs("div",{className:"flex items-center gap-2 md:gap-3 mb-4 md:mb-6",children:[p.jsx("span",{className:`w-1 md:w-1.5 h-4 md:h-5 rounded-full bg-${jt}-500`}),p.jsx("h4",{className:`text-[10px] md:text-xs font-black uppercase tracking-[0.15em] text-${jt}-600`,children:"Frame Components"})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-2 md:gap-4 items-stretch",children:[p.jsx(Cn,{label:"Outer Side",value:j.outerSide,unit:ht,accent:jt}),j.outerTop===j.outerBottom?p.jsx(Cn,{label:"Outer T/B",value:j.outerTop,unit:ht,accent:jt}):p.jsxs("div",{className:"grid grid-cols-1 gap-2 col-span-1",children:[p.jsx(Cn,{label:"Outer Top",value:j.outerTop,unit:ht,accent:jt}),p.jsx(Cn,{label:"Outer Bottom",value:j.outerBottom,unit:ht,accent:jt})]}),p.jsx(Cn,{label:j.isOneShutter?"Lock":"S/I Lock",value:j.lockVal,unit:ht,accent:jt}),p.jsx(Cn,{label:"Shutter T/B",value:j.shutterTopBottom,unit:ht,accent:jt}),v!=="3"&&!j.isOneShutter&&j.netSectionHeight&&p.jsx(Cn,{label:"N/S Height",value:j.netSectionHeight,unit:ht,accent:"emerald"}),v!=="3"&&!j.isOneShutter&&j.netSectionLength&&p.jsx(Cn,{label:"N/S Length",value:j.netSectionLength,unit:ht,accent:"emerald"})]})]}),p.jsxs("div",{className:`pt-6 md:pt-8 border-t border-dashed border-${jt}-200/50`,children:[p.jsxs("div",{className:"flex items-center gap-2 md:gap-3 mb-4 md:mb-6",children:[p.jsx("span",{className:`w-1 md:w-1.5 h-4 md:h-5 rounded-full bg-${jt}-500`}),p.jsx("h4",{className:`text-[10px] md:text-xs font-black uppercase tracking-[0.15em] text-${jt}-600`,children:"Glass (INCH)"})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-2 md:gap-4",children:[p.jsx(Cn,{label:"Glass Height",value:j.glassHeightInch,unit:"Inch",accent:jt}),p.jsx(Cn,{label:"Glass Length",value:j.glassLengthInch,unit:"Inch",accent:jt})]})]})]})]},j.id)})})})]}),hwData&&hwData.items.length>0&&p.jsxs("div",{id:"hardware-section",className:"mt-6 md:mt-10 bg-white rounded-2xl md:rounded-[2.5rem] shadow-xl border border-slate-200 overflow-hidden",children:[
  p.jsxs("button",{type:"button",onClick:()=>setIsHardwareOpen(!isHardwareOpen),className:"w-full p-4 md:p-6 bg-slate-50 flex items-center justify-between transition-all hover:bg-slate-100/70 select-none text-left",style:{backgroundColor:"#f8fafc",borderBottom:isHardwareOpen?"1px solid #e2e8f0":"none"},children:[
    p.jsxs("div",{className:"flex items-center gap-3",children:[
      p.jsx("span",{className:"text-2xl md:text-3xl leading-none flex-shrink-0 select-none",children:"⚙️"}),
      p.jsx("h3",{className:"text-xl md:text-2xl font-black tracking-tight leading-tight",style:{color:"#0f172a",fontWeight:900},children:"Required Hardware"})
    ]}),
    p.jsxs("div",{className:"flex items-center gap-2",children:[
      p.jsx("span",{className:"text-xs md:text-sm font-bold text-slate-500",children:isHardwareOpen?"Hide":"Show"}),
      p.jsx("span",{className:"text-slate-400 text-sm md:text-base font-bold",children:isHardwareOpen?"▲":"▼"})
    ]})
  ]}),
  isHardwareOpen&&p.jsx("div",{className:"p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4",children:hwData.items.map(item=>p.jsxs("div",{key:item.name,className:"p-4 rounded-xl md:rounded-2xl border border-slate-100 bg-slate-50/80 hover:bg-white hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-center",children:[
    p.jsx("span",{className:"text-xs md:text-sm font-bold text-slate-600 mb-1",children:item.name}),
    item.lines&&item.lines.length>0?p.jsx("div",{className:"text-base md:text-xl font-black text-slate-900 tracking-tight flex flex-col gap-1",children:item.lines.map((ln,lidx)=>p.jsx("div",{key:lidx,className:"leading-tight",children:ln}))}):p.jsx("div",{className:"text-base md:text-xl font-black text-slate-900 tracking-tight",children:item.value}),
    item.isMosquitoNet&&p.jsx("p",{className:"text-[11px] md:text-xs font-bold mt-1.5",style:{color:"#dc2626",fontWeight:"bold"},children:"(Please Cross Check Mosquito Net By Yourself)"})
  ]}))})
]}),p.jsxs("div",{className:"rounded-[1.5rem] md:rounded-[2.5rem] bg-white shadow-xl border border-slate-200 overflow-hidden",children:[
  p.jsxs("button",{type:"button",onClick:()=>setIsBillingOpen(!isBillingOpen),className:"w-full p-4 md:p-6 bg-slate-50 flex items-center justify-between transition-all hover:bg-slate-100/70 select-none text-left",style:{backgroundColor:"#f8fafc",borderBottom:isBillingOpen?"1px solid #e2e8f0":"none"},children:[
    p.jsxs("div",{className:"flex items-center gap-3",children:[
      p.jsx("span",{className:"text-2xl md:text-3xl leading-none flex-shrink-0 select-none",children:"📐"}),
      p.jsx("h3",{className:"text-xl md:text-2xl font-black tracking-tight leading-tight",style:{color:"#0f172a",fontWeight:900},children:"Billing Guide"})
    ]}),
    p.jsxs("div",{className:"flex items-center gap-2",children:[
      p.jsx("span",{className:"text-xs md:text-sm font-bold text-slate-500",children:isBillingOpen?"Hide":"Show"}),
      p.jsx("span",{className:"text-slate-400 text-sm md:text-base font-bold",children:isBillingOpen?"▲":"▼"})
    ]})
  ]}),
  isBillingOpen&&p.jsx("div",{className:"p-4 md:p-6 bg-slate-50/30",children:p.jsx(BillingGuideContent,{results:l})})
]})]}):null}),Et&&p.jsx("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 transition-opacity animate-fade-in",children:p.jsxs("div",{className:"w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col animate-slide-up",children:[p.jsxs("div",{className:"px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50",children:[p.jsxs("div",{children:[p.jsxs("h3",{className:"text-sm md:text-base font-black text-slate-800 uppercase tracking-wider",children:[Et==="alumColor"&&"Select Aluminum Color",Et==="alumBrand"&&"Select Aluminum Brand",Et==="glassType"&&"Select Glass Type",Et==="glassThickness"&&"Select Glass Thickness"]}),p.jsx("p",{className:"text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1",children:"Tap an option to select"})]}),p.jsx("button",{onClick:()=>St(null),className:"p-1.5 hover:bg-slate-200 rounded-full text-slate-400 hover:text-slate-700 transition-all",children:p.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M6 18L18 6M6 6l12 12"})})})]}),p.jsxs("div",{className:"p-6 overflow-y-auto space-y-2.5",children:[Et==="alumColor"&&uj.map(j=>p.jsxs("button",{onClick:()=>{Y(j),St(null)},className:`w-full text-left px-5 py-4 rounded-xl font-bold text-xs md:text-sm border transition-all flex items-center justify-between ${K===j?"bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-600/10":"bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100/70 hover:border-slate-200"}`,children:[p.jsx("span",{children:j}),K===j&&p.jsx("svg",{className:"w-4.5 h-4.5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M5 13l4 4L19 7"})})]},j)),Et==="alumBrand"&&cj.map(j=>p.jsxs("button",{onClick:()=>{$(j),St(null)},className:`w-full text-left px-5 py-4 rounded-xl font-bold text-xs md:text-sm border transition-all flex items-center justify-between ${X===j?"bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-600/10":"bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100/70 hover:border-slate-200"}`,children:[p.jsx("span",{children:j}),X===j&&p.jsx("svg",{className:"w-4.5 h-4.5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M5 13l4 4L19 7"})})]},j)),Et==="glassType"&&fj.map(j=>p.jsxs("button",{onClick:()=>{P(j),St(null)},className:`w-full text-left px-5 py-4 rounded-xl font-bold text-xs md:text-sm border transition-all flex items-center justify-between ${M===j?"bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-600/10":"bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100/70 hover:border-slate-200"}`,children:[p.jsx("span",{children:j}),M===j&&p.jsx("svg",{className:"w-4.5 h-4.5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M5 13l4 4L19 7"})})]},j)),Et==="glassThickness"&&(M==="Clear Glass"?["5 MM","6 MM"]:["5 MM","5.5 MM","6 MM"]).map(j=>p.jsxs("button",{onClick:()=>{mt(j),St(null)},className:`w-full text-left px-5 py-4 rounded-xl font-bold text-xs md:text-sm border transition-all flex items-center justify-between ${Q===j?"bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-600/10":"bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100/70 hover:border-slate-200"}`,children:[p.jsx("span",{children:j}),Q===j&&p.jsx("svg",{className:"w-4.5 h-4.5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M5 13l4 4L19 7"})})]},j))]})]})}),p.jsx(IE,{isOpen:d,onClose:()=>h(!1),history:c,onRestore:xi,onDelete:j=>f(c.filter(tt=>tt.id!==j)),onClearAll:()=>f([])}),(()=>{const hasItemInput=n.some(j=>(j.height&&j.height.toString().trim().length>0)||(j.length1&&j.length1.toString().trim().length>0)||(j.length2&&j.length2.toString().trim().length>0));const hasNotepadInput=!!(Z&&Z.trim().length>0);const hasCustInput=!!((S&&S.trim())||(N&&N.trim())||(V&&V.trim()));const hasAnyDataToClear=hasItemInput||hasNotepadInput||hasCustInput||l.length>0;if(!hasAnyDataToClear&&l.length===0)return null;return p.jsxs("div",{className:"flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 px-4",children:[l.length>0&&p.jsx("button",{onClick:()=>{if(!l||l.length===0){alert("Please calculate results first!");return}setIsSaveModalOpen(!0)},disabled:g,className:`flex items-center gap-2 md:gap-3 px-6 md:px-10 py-3 md:py-4 ${g?"bg-slate-400":"bg-gradient-to-br from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800"} text-white rounded-xl md:rounded-[1.5rem] font-black transition-all shadow-xl shadow-teal-500/20 uppercase tracking-widest text-[10px] md:text-xs active:scale-95`,children:g?"Saving...":"Save Report to Gallery"}),hasAnyDataToClear&&p.jsx("button",{onClick:On,className:"flex items-center gap-2 md:gap-3 px-6 md:px-10 py-3 md:py-4 bg-white text-red-500 border border-red-100 rounded-xl md:rounded-[1.5rem] font-black hover:bg-red-50 transition-all shadow-xl uppercase tracking-widest text-[10px] md:text-xs active:scale-95 cursor-pointer",children:"Clear All Data"})]})})(),isSaveModalOpen&&p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn",onClick:()=>setIsSaveModalOpen(!1),children:p.jsxs("div",{className:"w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-slate-200 p-5 md:p-6 space-y-4 animate-scale-up",onClick:Xt=>Xt.stopPropagation(),children:[p.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-100",children:[p.jsxs("div",{children:[p.jsxs("h3",{className:"text-sm md:text-base font-black text-slate-900 tracking-tight flex items-center gap-2",children:[p.jsx("span",{children:"💾"}),"Save Report to Gallery"]}),p.jsx("p",{className:"text-[10px] md:text-xs font-bold text-slate-400 mt-0.5",children:"Choose report format to download as photo"})]}),p.jsx("button",{type:"button",onClick:()=>setIsSaveModalOpen(!1),className:"w-7 h-7 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors font-bold text-sm",children:"✕"})]}),p.jsxs("div",{className:"space-y-2.5",children:[p.jsxs("div",{className:"grid grid-cols-2 gap-2.5",children:[p.jsxs("button",{type:"button",onClick:()=>Si("both"),disabled:g,className:"p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-teal-500 hover:bg-teal-50/20 transition-all text-center flex flex-col items-center justify-center gap-1.5 active:scale-95 shadow-2xs cursor-pointer",children:[p.jsx("span",{className:"text-2xl",children:"📑"}),p.jsx("span",{className:"text-xs font-black text-slate-800 leading-tight",children:"All In One"})]}),p.jsxs("button",{type:"button",onClick:()=>saveAllIndividually(),disabled:g,className:"p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-teal-500 hover:bg-teal-50/20 transition-all text-center flex flex-col items-center justify-center gap-1.5 active:scale-95 shadow-2xs cursor-pointer",children:[p.jsx("span",{className:"text-2xl",children:"🗂️"}),p.jsx("span",{className:"text-xs font-black text-slate-800 leading-tight",children:"Save All Individually"})]})]}),p.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[p.jsxs("button",{type:"button",onClick:()=>saveBillReport(),disabled:g,className:"p-3 rounded-2xl border border-slate-200 bg-white hover:border-teal-500 hover:bg-teal-50/20 transition-all text-center flex flex-col items-center justify-center gap-1 active:scale-95 shadow-2xs cursor-pointer",children:[p.jsx("span",{className:"text-2xl",children:"🧾"}),p.jsx("span",{className:"text-[11px] font-black text-slate-700 leading-tight",children:"Bill"})]}),p.jsxs("button",{type:"button",onClick:()=>Si("aluminum"),disabled:g,className:"p-3 rounded-2xl border border-slate-200 bg-white hover:border-teal-500 hover:bg-teal-50/20 transition-all text-center flex flex-col items-center justify-center gap-1 active:scale-95 shadow-2xs cursor-pointer",children:[p.jsx("span",{className:"text-2xl",children:"🪟"}),p.jsx("span",{className:"text-[11px] font-black text-slate-700 leading-tight",children:"Aluminium"})]}),p.jsxs("button",{type:"button",onClick:()=>Si("glass"),disabled:g,className:"p-3 rounded-2xl border border-slate-200 bg-white hover:border-teal-500 hover:bg-teal-50/20 transition-all text-center flex flex-col items-center justify-center gap-1 active:scale-95 shadow-2xs cursor-pointer",children:[p.jsx("span",{className:"text-2xl",children:"🔍"}),p.jsx("span",{className:"text-[11px] font-black text-slate-700 leading-tight",children:"Glass"})]}),p.jsxs("button",{type:"button",onClick:()=>Si("hardware"),disabled:g,className:"p-3 rounded-2xl border border-slate-200 bg-white hover:border-teal-500 hover:bg-teal-50/20 transition-all text-center flex flex-col items-center justify-center gap-1 active:scale-95 shadow-2xs cursor-pointer",children:[p.jsx("span",{className:"text-2xl",children:"⚙️"}),p.jsx("span",{className:"text-[11px] font-black text-slate-700 leading-tight",children:"Hardware"})]})]})]}),p.jsx("button",{type:"button",onClick:()=>setIsSaveModalOpen(!1),className:"w-full py-2.5 text-center text-slate-500 hover:text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-100 transition-colors uppercase tracking-wider",children:"Cancel"})]})})]})},Cn=({label:n,value:i,unit:l="CM",accent:r})=>{const f={amber:"hover:border-amber-400",indigo:"hover:border-indigo-400",emerald:"hover:border-emerald-400",teal:"hover:border-teal-400"}[r]||"hover:border-teal-400";return p.jsxs("div",{className:`p-3 md:p-5 rounded-xl md:rounded-2xl border transition-all bg-white border-slate-100 text-slate-800 ${f} group shadow-sm flex flex-col justify-center h-full`,children:[p.jsx("p",{className:"text-[8px] md:text-[9px] font-black mb-0.5 md:mb-1.5 uppercase tracking-[0.15em] text-slate-400 group-hover:text-slate-500 transition-colors",children:n}),p.jsxs("div",{className:"flex items-baseline gap-1 md:gap-2",children:[p.jsx("p",{className:"text-lg md:text-2xl font-black leading-none tracking-tight",children:i}),p.jsx("span",{className:"text-[8px] md:text-[10px] font-black opacity-30 tracking-widest",children:l})]})]})},Wr=n=>{if(!n||n===".")return 0;const[i,l]=n.split("."),r=parseInt(i||"0",10),c=parseInt(l||"0",10);return r*8+c},dl=n=>{const i=n<0,l=Math.abs(n),r=Math.floor(l/8),c=l%8;return`${i?"-":""}${r}.${c}`};function hj() {
  const [expr, setExpr] = H.useState("");
  const [cursorPos, setCursorPos] = H.useState(0);
  const [isCommitted, setIsCommitted] = H.useState(!1);
  const [history, setHistory] = H.useState(() => {
    if (typeof window < "u") {
      try {
        const m = localStorage.getItem("google_base8_tape");
        return m ? JSON.parse(m) : [];
      } catch (e) {
        return [];
      }
    }
    return [];
  });
  const [showHistory, setShowHistory] = H.useState(!1);
  const [copied, setCopied] = H.useState(!1);
  const screenEndRef = H.useRef(null);

  H.useEffect(() => {
    try {
      localStorage.setItem("google_base8_tape", JSON.stringify(history));
    } catch (e) {}
  }, [history]);

  // Auto-scroll screen as expression grows upward/downward
  H.useEffect(() => {
    if (screenEndRef.current) {
      screenEndRef.current.scrollTop = screenEndRef.current.scrollHeight;
    }
  }, [expr, cursorPos]);

  // Base-8 (Suta) Math Logic: 1 Inch = 8 Sutas
  const toSutas = n => {
    if (!n || n === "." || n === "-") return 0;
    const isNeg = n.startsWith("-");
    const raw = isNeg ? n.slice(1) : n;
    const parts = raw.split(".");
    const inches = parseInt(parts[0] || "0", 10);
    const sutas = parseInt(parts[1] || "0", 10);
    const total = inches * 8 + sutas;
    return isNeg ? -total : total;
  };

  const fromSutas = s => {
    const isNeg = s < 0;
    const abs = Math.abs(s);
    const inches = Math.floor(abs / 8);
    const sutas = abs % 8;
    return `${isNeg ? "-" : ""}${inches}.${sutas}`;
  };

  // Full expression Base-8 evaluator
  const evalBase8 = raw => {
    if (!raw || !raw.trim()) return "0";
    let clean = raw.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-").trim();
    clean = clean.replace(/[\+\-\*\/]\s*$/, "").replace(/\.\s*$/, "").trim();
    if (!clean) return "0";

    const tokens = clean.match(/(\d+(?:\.\d+)?|[\+\-\*\/])/g);
    if (!tokens || tokens.length === 0) return "0";

    const parsed = [];
    for (let i = 0; i < tokens.length; i++) {
      const t = tokens[i];
      if (t === "+" || t === "-" || t === "*" || t === "/") {
        parsed.push(t);
      } else {
        parsed.push(toSutas(t));
      }
    }

    // Pass 1: * and /
    const stage1 = [];
    let idx = 0;
    while (idx < parsed.length) {
      const item = parsed[idx];
      if (item === "*" || item === "/") {
        if (stage1.length > 0 && idx + 1 < parsed.length) {
          const prev = stage1.pop();
          const next = parsed[idx + 1];
          if (typeof next === "number") {
            const res = item === "*" ? Math.round((prev * next) / 8) : (next === 0 ? 0 : Math.round((prev * 8) / next));
            stage1.push(res);
            idx += 2;
            continue;
          }
        }
      }
      stage1.push(item);
      idx++;
    }

    if (stage1.length === 0) return "0";

    // Pass 2: + and -
    let total = typeof stage1[0] === "number" ? stage1[0] : 0;
    let j = 1;
    while (j < stage1.length) {
      const op = stage1[j];
      const val = stage1[j + 1];
      if (typeof val === "number") {
        if (op === "+") total += val;
        else if (op === "-") total -= val;
        j += 2;
      } else {
        j++;
      }
    }

    return fromSutas(total);
  };

  const liveResult = H.useMemo(() => evalBase8(expr), [expr]);

  // Keypad Actions with Live Middle-Edit Cursor Support
  const handleDigit = d => {
    if (isCommitted) {
      setExpr(d);
      setCursorPos(1);
      setIsCommitted(!1);
      return;
    }
    const safePos = Math.min(Math.max(0, cursorPos), expr.length);
    const next = expr.slice(0, safePos) + d + expr.slice(safePos);
    setExpr(next);
    setCursorPos(safePos + 1);
  };

  const handleDot = () => {
    if (isCommitted) {
      setExpr("0.");
      setCursorPos(2);
      setIsCommitted(!1);
      return;
    }
    const safePos = Math.min(Math.max(0, cursorPos), expr.length);
    const next = expr.slice(0, safePos) + "." + expr.slice(safePos);
    setExpr(next);
    setCursorPos(safePos + 1);
  };

  const handleOperator = opChar => {
    if (isCommitted) {
      const next = `${liveResult} ${opChar} `;
      setExpr(next);
      setCursorPos(next.length);
      setIsCommitted(!1);
      return;
    }
    if (!expr || !expr.trim()) {
      const next = `0 ${opChar} `;
      setExpr(next);
      setCursorPos(next.length);
      return;
    }
    const safePos = Math.min(Math.max(0, cursorPos), expr.length);
    const left = expr.slice(0, safePos);
    const right = expr.slice(safePos);
    const trimmedLeft = left.replace(/\s*[\+\−\×\÷\-\*\/]\s*$/, "");
    const trimmedRight = right.replace(/^\s*[\+\−\×\÷\-\*\/]\s*/, "");
    const next = `${trimmedLeft} ${opChar} ${trimmedRight}`;
    const newPos = `${trimmedLeft} ${opChar} `.length;
    setExpr(next);
    setCursorPos(newPos);
  };

  const handleBackspace = () => {
    if (isCommitted) {
      setIsCommitted(!1);
    }
    const safePos = Math.min(Math.max(0, cursorPos), expr.length);
    if (safePos <= 0) return;

    const before = expr.slice(0, safePos);
    const after = expr.slice(safePos);
    if (before.endsWith(" ")) {
      const trimmed = before.replace(/\s*[\+\−\×\÷\-\*\/]\s*$/, "");
      setExpr(trimmed + after);
      setCursorPos(trimmed.length);
    } else {
      setExpr(expr.slice(0, safePos - 1) + after);
      setCursorPos(safePos - 1);
    }
  };

  const handleClear = () => {
    setExpr("");
    setCursorPos(0);
    setIsCommitted(!1);
  };

  // Equal Handler: STOPS DUPLICATE HISTORY ENTRY ON REPEATED '=' TAPS
  const handleEqual = () => {
    if (!expr || !expr.trim()) return;
    if (isCommitted) return; // Already calculated, prevent duplicate history!
    const finalVal = evalBase8(expr);
    const lastItem = history[0];
    if (lastItem && lastItem.expression === expr && lastItem.result === finalVal) {
      setIsCommitted(!0);
      return;
    }
    const entry = {
      id: Date.now().toString(),
      expression: expr,
      result: finalVal
    };
    setHistory(h => [entry, ...h].slice(0, 30));
    setIsCommitted(!0);
  };

  const handleCopy = () => {
    try {
      if (navigator && navigator.clipboard) {
        navigator.clipboard.writeText(liveResult);
      }
    } catch (e) {}
    setCopied(!0);
    setTimeout(() => setCopied(!1), 1500);
  };

  const clearHistory = () => {
    setHistory([]);
    try {
      localStorage.removeItem("google_base8_tape");
    } catch (e) {}
  };

  const safePos = Math.min(Math.max(0, cursorPos), expr.length);

  return p.jsxs("div", {
    className: "google-calc",
    children: [
      // Minimal Top Bar (History Clock Only)
      p.jsx("div", {
        className: "google-calc-top-bar",
        children: p.jsx("button", {
          type: "button",
          onClick: () => setShowHistory(!showHistory),
          className: "google-calc-icon-btn",
          title: "Calculation History",
          children: p.jsx(GA, { size: 20 })
        })
      }),

      // History Slide-down Drawer (ABSOLUTE OVERLAY: Keypad never moves!)
      showHistory && p.jsxs("div", {
        className: "google-calc-history",
        children: [
          p.jsxs("div", {
            className: "google-calc-history-header",
            children: [
              p.jsxs("div", {
                style: { display: "flex", alignItems: "center", gap: "6px" },
                children: [
                  p.jsx(GA, { size: 16, style: { color: "#0b57d0" } }),
                  p.jsx("span", { children: "Calculation History" })
                ]
              }),
              p.jsxs("div", {
                style: { display: "flex", alignItems: "center", gap: "10px" },
                children: [
                  history.length > 0 && p.jsx("button", {
                    type: "button",
                    onClick: clearHistory,
                    style: {
                      background: "none",
                      border: "none",
                      color: "#ba1a1a",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: "700"
                    },
                    children: "Clear All"
                  }),
                  p.jsx("button", {
                    type: "button",
                    onClick: () => setShowHistory(!1),
                    style: {
                      background: "#f1f5f9",
                      border: "none",
                      borderRadius: "6px",
                      padding: "2px 8px",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#475569"
                    },
                    children: "Close"
                  })
                ]
              })
            ]
          }),
          history.length === 0 ? p.jsx("div", {
            style: { textAlign: "center", color: "#747775", fontSize: "14px", padding: "24px 0" },
            children: "No calculations in history yet"
          }) : history.map(item => p.jsxs("div", {
            key: item.id,
            className: "google-calc-history-item",
            title: "Tap to load full formula into live calculator",
            onClick: () => {
              setExpr(item.expression);
              setCursorPos(item.expression.length);
              setIsCommitted(!1);
              setShowHistory(!1);
            },
            children: [
              p.jsx("div", {
                style: { color: "#444746", fontSize: "15px", fontFamily: "Roboto, sans-serif", wordBreak: "break-all" },
                children: item.expression
              }),
              p.jsxs("div", {
                style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: "4px" },
                children: [
                  p.jsx("span", {
                    style: { fontSize: "11px", color: "#94a3b8", fontWeight: "500" },
                    children: "Tap To Edit Calculation"
                  }),
                  p.jsxs("span", {
                    style: { color: "#0b57d0", fontWeight: "700", fontSize: "20px" },
                    children: ["= ", item.result]
                  })
                ]
              })
            ]
          }))
        ]
      }),

      // Fixed Display Screen (Multi-line formulas flow UPWARD into blank space)
      p.jsxs("div", {
        ref: screenEndRef,
        className: "google-calc-screen",
        children: [
          // Upper Expression Line (Natural wrapping, grows upward, all values 100% visible)
          p.jsx("div", {
            className: "google-calc-expr-container",
            children: p.jsx("div", {
              className: "google-calc-expr-line",
              onClick: () => setCursorPos(expr.length),
              children: expr.length === 0 ? p.jsx("span", { style: { opacity: 0.3 }, children: "0" }) : p.jsxs(p.Fragment, {
                children: [
                  p.jsx("span", {
                    onClick: e => {
                      e.stopPropagation();
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const ratio = Math.max(0, Math.min(1, clickX / rect.width));
                      setCursorPos(Math.round(ratio * safePos));
                    },
                    children: expr.slice(0, safePos)
                  }),
                  p.jsx("span", { className: "google-cursor" }),
                  p.jsx("span", {
                    onClick: e => {
                      e.stopPropagation();
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const ratio = Math.max(0, Math.min(1, clickX / rect.width));
                      setCursorPos(safePos + Math.round(ratio * (expr.length - safePos)));
                    },
                    children: expr.slice(safePos)
                  })
                ]
              })
            })
          }),

          // Lower Result Line (Permanent fixed place, never shifts)
          p.jsx("div", {
            className: `google-calc-result-line ${isCommitted ? "google-calc-result-committed" : "google-calc-result-live"}`,
            onClick: handleCopy,
            title: "Tap to copy",
            children: copied ? "Copied" : liveResult
          })
        ]
      }),

      // Keypad Grid (Firmly docked at the bottom, NEVER MOVES under any condition)
      p.jsxs("div", {
        className: "google-calc-keypad",
        children: [
          // Row 1: AC (Wide 2-col), Backspace (1-col), Divide (1-col)
          p.jsx("button", {
            type: "button",
            onClick: handleClear,
            className: "google-key google-key-ac",
            style: { gridColumn: "span 2" },
            children: "AC"
          }),
          p.jsx("button", {
            type: "button",
            onClick: handleBackspace,
            className: "google-key google-key-back",
            children: p.jsx(YA, { size: 22 })
          }),
          p.jsx("button", {
            type: "button",
            onClick: () => handleOperator("÷"),
            className: "google-key google-key-op",
            children: "÷"
          }),

          // Row 2: 7, 8, 9, ×
          p.jsx("button", {
            type: "button",
            onClick: () => handleDigit("7"),
            className: "google-key google-key-num",
            children: "7"
          }),
          p.jsx("button", {
            type: "button",
            onClick: () => handleDigit("8"),
            className: "google-key google-key-num",
            children: "8"
          }),
          p.jsx("button", {
            type: "button",
            onClick: () => handleDigit("9"),
            className: "google-key google-key-num",
            children: "9"
          }),
          p.jsx("button", {
            type: "button",
            onClick: () => handleOperator("×"),
            className: "google-key google-key-op",
            children: "×"
          }),

          // Row 3: 4, 5, 6, −
          p.jsx("button", {
            type: "button",
            onClick: () => handleDigit("4"),
            className: "google-key google-key-num",
            children: "4"
          }),
          p.jsx("button", {
            type: "button",
            onClick: () => handleDigit("5"),
            className: "google-key google-key-num",
            children: "5"
          }),
          p.jsx("button", {
            type: "button",
            onClick: () => handleDigit("6"),
            className: "google-key google-key-num",
            children: "6"
          }),
          p.jsx("button", {
            type: "button",
            onClick: () => handleOperator("−"),
            className: "google-key google-key-op",
            children: "−"
          }),

          // Row 4: 1, 2, 3, +
          p.jsx("button", {
            type: "button",
            onClick: () => handleDigit("1"),
            className: "google-key google-key-num",
            children: "1"
          }),
          p.jsx("button", {
            type: "button",
            onClick: () => handleDigit("2"),
            className: "google-key google-key-num",
            children: "2"
          }),
          p.jsx("button", {
            type: "button",
            onClick: () => handleDigit("3"),
            className: "google-key google-key-num",
            children: "3"
          }),
          p.jsx("button", {
            type: "button",
            onClick: () => handleOperator("+"),
            className: "google-key google-key-op",
            children: "+"
          }),

          // Row 5: 0 (Wide 2-col), ., =
          p.jsx("button", {
            type: "button",
            onClick: () => handleDigit("0"),
            className: "google-key google-key-num google-key-zero",
            style: { gridColumn: "span 2" },
            children: "0"
          }),
          p.jsx("button", {
            type: "button",
            onClick: handleDot,
            className: "google-key google-key-num",
            children: "."
          }),
          p.jsx("button", {
            type: "button",
            onClick: handleEqual,
            className: "google-key google-key-equal google-key-eq",
            children: "="
          })
        ]
      })
    ]
  });
}
function mj(){
  const[screenStack,setScreenStack]=H.useState(()=>{try{const s=localStorage.getItem("active_app")||"app1";return[s];}catch(e){return["app1"];}});
  const n=screenStack[screenStack.length-1]||"app1";
  const l=c=>{
    if(c===n)return;
    setScreenStack(prev=>{
      if(c==="app1")return["app1"];
      return[...prev,c];
    });
    try{localStorage.setItem("active_app",c);}catch(e){}
  };
  const r=()=>{
    setScreenStack(["app1"]);
    try{localStorage.setItem("active_app","app1");}catch(e){}
  };

  H.useEffect(()=>{
    window.handleAndroidBack=()=>{
      if(n==="invoice"){
        try{
          const invoiceFrame=document.querySelector('iframe[title="Invoice Generator"]');
          if(invoiceFrame&&invoiceFrame.contentWindow&&typeof invoiceFrame.contentWindow.handleInvoiceAndroidBack==="function")
            invoiceFrame.contentWindow.handleInvoiceAndroidBack();
        }catch(e){}
        return "handled";
      }
      if(window.__modal_back_stack&&window.__modal_back_stack.length>0){
        const handler=window.__modal_back_stack.pop();
        if(handler&&handler())return "handled";
      }
      if(window.__is_drawer_open&&window.__close_drawer){
        window.__close_drawer();
        return "handled";
      }
      if(screenStack.length>1){
        setScreenStack(prev=>{
          const next=prev.slice(0,-1);
          const target=next[next.length-1]||"app1";
          try{localStorage.setItem("active_app",target);}catch(e){}
          return next;
        });
        return "handled";
      }
      if(n!=="app1"){
        setScreenStack(["app1"]);
        try{localStorage.setItem("active_app","app1");}catch(e){}
        return "handled";
      }
      return "unhandled";
    };
    return()=>{delete window.handleAndroidBack;};
  },[screenStack,n]);

  return n?p.jsxs(WE,{activeService:n,onSwitch:l,onExit:r,children:[
    p.jsx("div",{className:n==="app1"?"block h-full":"hidden",children:p.jsx(dj,{onNavigate:l})}),
    p.jsx("div",{className:n==="app2"?"block h-full":"hidden",children:p.jsx(hj,{onNavigate:l})}),
    n==="customers"&&p.jsx(CustomersScreen,{onNavigate:l}),
    n==="history"&&p.jsx(WorkHistoryScreen,{onNavigate:l}),
    n==="billing"&&p.jsx(BillingScreen,{onNavigate:l}),
    n==="invoice"&&p.jsx("div",{className:"flex-1 min-h-0 h-full",children:p.jsx("iframe",{src:"/invoice-generator.html?v=14",title:"Invoice Generator",className:"w-full h-full border-0 bg-slate-50"})}),
    n==="settings"&&p.jsx(SettingsScreen,{onNavigate:l}),
    n==="about"&&p.jsx(AboutScreen,{onNavigate:l}),
    n==="contact"&&p.jsx(ContactMeScreen,{})
  ]}):p.jsx($E,{onSelect:l});
}z1.createRoot(document.getElementById("root")).render(p.jsx(H.StrictMode,{children:p.jsx(mj,{})}));export{ey as E,bd as W,tj as b};
