(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function t0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ru={exports:{}},Fa={},Pu={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function hv(){if(Xp)return mt;Xp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,R={};function y(D,re,ye){this.props=D,this.context=re,this.refs=R,this.updater=ye||E}y.prototype.isReactComponent={},y.prototype.setState=function(D,re){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,re,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=y.prototype;function N(D,re,ye){this.props=D,this.context=re,this.refs=R,this.updater=ye||E}var k=N.prototype=new _;k.constructor=N,A(k,y.prototype),k.isPureReactComponent=!0;var C=Array.isArray,L=Object.prototype.hasOwnProperty,P={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function w(D,re,ye){var Ve,ze={},Ge=null,le=null;if(re!=null)for(Ve in re.ref!==void 0&&(le=re.ref),re.key!==void 0&&(Ge=""+re.key),re)L.call(re,Ve)&&!F.hasOwnProperty(Ve)&&(ze[Ve]=re[Ve]);var de=arguments.length-2;if(de===1)ze.children=ye;else if(1<de){for(var Ee=Array(de),Qe=0;Qe<de;Qe++)Ee[Qe]=arguments[Qe+2];ze.children=Ee}if(D&&D.defaultProps)for(Ve in de=D.defaultProps,de)ze[Ve]===void 0&&(ze[Ve]=de[Ve]);return{$$typeof:s,type:D,key:Ge,ref:le,props:ze,_owner:P.current}}function I(D,re){return{$$typeof:s,type:D.type,key:re,ref:D.ref,props:D.props,_owner:D._owner}}function B(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function W(D){var re={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ye){return re[ye]})}var Z=/\/+/g;function se(D,re){return typeof D=="object"&&D!==null&&D.key!=null?W(""+D.key):re.toString(36)}function q(D,re,ye,Ve,ze){var Ge=typeof D;(Ge==="undefined"||Ge==="boolean")&&(D=null);var le=!1;if(D===null)le=!0;else switch(Ge){case"string":case"number":le=!0;break;case"object":switch(D.$$typeof){case s:case e:le=!0}}if(le)return le=D,ze=ze(le),D=Ve===""?"."+se(le,0):Ve,C(ze)?(ye="",D!=null&&(ye=D.replace(Z,"$&/")+"/"),q(ze,re,ye,"",function(Qe){return Qe})):ze!=null&&(B(ze)&&(ze=I(ze,ye+(!ze.key||le&&le.key===ze.key?"":(""+ze.key).replace(Z,"$&/")+"/")+D)),re.push(ze)),1;if(le=0,Ve=Ve===""?".":Ve+":",C(D))for(var de=0;de<D.length;de++){Ge=D[de];var Ee=Ve+se(Ge,de);le+=q(Ge,re,ye,Ee,ze)}else if(Ee=x(D),typeof Ee=="function")for(D=Ee.call(D),de=0;!(Ge=D.next()).done;)Ge=Ge.value,Ee=Ve+se(Ge,de++),le+=q(Ge,re,ye,Ee,ze);else if(Ge==="object")throw re=String(D),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return le}function ee(D,re,ye){if(D==null)return D;var Ve=[],ze=0;return q(D,Ve,"","",function(Ge){return re.call(ye,Ge,ze++)}),Ve}function he(D){if(D._status===-1){var re=D._result;re=re(),re.then(function(ye){(D._status===0||D._status===-1)&&(D._status=1,D._result=ye)},function(ye){(D._status===0||D._status===-1)&&(D._status=2,D._result=ye)}),D._status===-1&&(D._status=0,D._result=re)}if(D._status===1)return D._result.default;throw D._result}var te={current:null},K={transition:null},Y={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:K,ReactCurrentOwner:P};function H(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:ee,forEach:function(D,re,ye){ee(D,function(){re.apply(this,arguments)},ye)},count:function(D){var re=0;return ee(D,function(){re++}),re},toArray:function(D){return ee(D,function(re){return re})||[]},only:function(D){if(!B(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},mt.Component=y,mt.Fragment=n,mt.Profiler=o,mt.PureComponent=N,mt.StrictMode=r,mt.Suspense=p,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,mt.act=H,mt.cloneElement=function(D,re,ye){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Ve=A({},D.props),ze=D.key,Ge=D.ref,le=D._owner;if(re!=null){if(re.ref!==void 0&&(Ge=re.ref,le=P.current),re.key!==void 0&&(ze=""+re.key),D.type&&D.type.defaultProps)var de=D.type.defaultProps;for(Ee in re)L.call(re,Ee)&&!F.hasOwnProperty(Ee)&&(Ve[Ee]=re[Ee]===void 0&&de!==void 0?de[Ee]:re[Ee])}var Ee=arguments.length-2;if(Ee===1)Ve.children=ye;else if(1<Ee){de=Array(Ee);for(var Qe=0;Qe<Ee;Qe++)de[Qe]=arguments[Qe+2];Ve.children=de}return{$$typeof:s,type:D.type,key:ze,ref:Ge,props:Ve,_owner:le}},mt.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},mt.createElement=w,mt.createFactory=function(D){var re=w.bind(null,D);return re.type=D,re},mt.createRef=function(){return{current:null}},mt.forwardRef=function(D){return{$$typeof:f,render:D}},mt.isValidElement=B,mt.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:he}},mt.memo=function(D,re){return{$$typeof:m,type:D,compare:re===void 0?null:re}},mt.startTransition=function(D){var re=K.transition;K.transition={};try{D()}finally{K.transition=re}},mt.unstable_act=H,mt.useCallback=function(D,re){return te.current.useCallback(D,re)},mt.useContext=function(D){return te.current.useContext(D)},mt.useDebugValue=function(){},mt.useDeferredValue=function(D){return te.current.useDeferredValue(D)},mt.useEffect=function(D,re){return te.current.useEffect(D,re)},mt.useId=function(){return te.current.useId()},mt.useImperativeHandle=function(D,re,ye){return te.current.useImperativeHandle(D,re,ye)},mt.useInsertionEffect=function(D,re){return te.current.useInsertionEffect(D,re)},mt.useLayoutEffect=function(D,re){return te.current.useLayoutEffect(D,re)},mt.useMemo=function(D,re){return te.current.useMemo(D,re)},mt.useReducer=function(D,re,ye){return te.current.useReducer(D,re,ye)},mt.useRef=function(D){return te.current.useRef(D)},mt.useState=function(D){return te.current.useState(D)},mt.useSyncExternalStore=function(D,re,ye){return te.current.useSyncExternalStore(D,re,ye)},mt.useTransition=function(){return te.current.useTransition()},mt.version="18.3.1",mt}var qp;function sf(){return qp||(qp=1,Pu.exports=hv()),Pu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function pv(){if(Yp)return Fa;Yp=1;var s=sf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,m){var v,S={},x=null,E=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(E=p.ref);for(v in p)r.call(p,v)&&!l.hasOwnProperty(v)&&(S[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)S[v]===void 0&&(S[v]=p[v]);return{$$typeof:e,type:f,key:x,ref:E,props:S,_owner:o.current}}return Fa.Fragment=n,Fa.jsx=u,Fa.jsxs=u,Fa}var $p;function mv(){return $p||($p=1,Ru.exports=pv()),Ru.exports}var g=mv(),Bt=sf();const n0=t0(Bt);var al={},Nu={exports:{}},zn={},Lu={exports:{}},Du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function gv(){return Kp||(Kp=1,(function(s){function e(K,Y){var H=K.length;K.push(Y);e:for(;0<H;){var D=H-1>>>1,re=K[D];if(0<o(re,Y))K[D]=Y,K[H]=re,H=D;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var Y=K[0],H=K.pop();if(H!==Y){K[0]=H;e:for(var D=0,re=K.length,ye=re>>>1;D<ye;){var Ve=2*(D+1)-1,ze=K[Ve],Ge=Ve+1,le=K[Ge];if(0>o(ze,H))Ge<re&&0>o(le,ze)?(K[D]=le,K[Ge]=H,D=Ge):(K[D]=ze,K[Ve]=H,D=Ve);else if(Ge<re&&0>o(le,H))K[D]=le,K[Ge]=H,D=Ge;else break e}}return Y}function o(K,Y){var H=K.sortIndex-Y.sortIndex;return H!==0?H:K.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var p=[],m=[],v=1,S=null,x=3,E=!1,A=!1,R=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(K){for(var Y=n(m);Y!==null;){if(Y.callback===null)r(m);else if(Y.startTime<=K)r(m),Y.sortIndex=Y.expirationTime,e(p,Y);else break;Y=n(m)}}function C(K){if(R=!1,k(K),!A)if(n(p)!==null)A=!0,he(L);else{var Y=n(m);Y!==null&&te(C,Y.startTime-K)}}function L(K,Y){A=!1,R&&(R=!1,_(w),w=-1),E=!0;var H=x;try{for(k(Y),S=n(p);S!==null&&(!(S.expirationTime>Y)||K&&!W());){var D=S.callback;if(typeof D=="function"){S.callback=null,x=S.priorityLevel;var re=D(S.expirationTime<=Y);Y=s.unstable_now(),typeof re=="function"?S.callback=re:S===n(p)&&r(p),k(Y)}else r(p);S=n(p)}if(S!==null)var ye=!0;else{var Ve=n(m);Ve!==null&&te(C,Ve.startTime-Y),ye=!1}return ye}finally{S=null,x=H,E=!1}}var P=!1,F=null,w=-1,I=5,B=-1;function W(){return!(s.unstable_now()-B<I)}function Z(){if(F!==null){var K=s.unstable_now();B=K;var Y=!0;try{Y=F(!0,K)}finally{Y?se():(P=!1,F=null)}}else P=!1}var se;if(typeof N=="function")se=function(){N(Z)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,ee=q.port2;q.port1.onmessage=Z,se=function(){ee.postMessage(null)}}else se=function(){y(Z,0)};function he(K){F=K,P||(P=!0,se())}function te(K,Y){w=y(function(){K(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(K){K.callback=null},s.unstable_continueExecution=function(){A||E||(A=!0,he(L))},s.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<K?Math.floor(1e3/K):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(K){switch(x){case 1:case 2:case 3:var Y=3;break;default:Y=x}var H=x;x=Y;try{return K()}finally{x=H}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(K,Y){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var H=x;x=K;try{return Y()}finally{x=H}},s.unstable_scheduleCallback=function(K,Y,H){var D=s.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?D+H:D):H=D,K){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=H+re,K={id:v++,callback:Y,priorityLevel:K,startTime:H,expirationTime:re,sortIndex:-1},H>D?(K.sortIndex=H,e(m,K),n(p)===null&&K===n(m)&&(R?(_(w),w=-1):R=!0,te(C,H-D))):(K.sortIndex=re,e(p,K),A||E||(A=!0,he(L))),K},s.unstable_shouldYield=W,s.unstable_wrapCallback=function(K){var Y=x;return function(){var H=x;x=Y;try{return K.apply(this,arguments)}finally{x=H}}}})(Du)),Du}var Zp;function xv(){return Zp||(Zp=1,Lu.exports=gv()),Lu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function vv(){if(Jp)return zn;Jp=1;var s=sf(),e=xv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function x(t){return p.call(S,t)?!0:p.call(v,t)?!1:m.test(t)?S[t]=!0:(v[t]=!0,!1)}function E(t,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A(t,i,a,c){if(i===null||typeof i>"u"||E(t,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,a,c,d,h,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=b}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,N);y[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,N);y[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,N);y[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function k(t,i,a,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,a,d,c)&&(a=null),c||d===null?x(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?t.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?t.setAttributeNS(c,i,a):t.setAttribute(i,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),P=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),W=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),K=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=K&&t[K]||t["@@iterator"],typeof t=="function"?t:null)}var H=Object.assign,D;function re(t){if(D===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+t}var ye=!1;function Ve(t,i){if(!t||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var c=ue}Reflect.construct(t,[],i)}else{try{i.call()}catch(ue){c=ue}t.call(i.prototype)}else{try{throw Error()}catch(ue){c=ue}t()}}catch(ue){if(ue&&c&&typeof ue.stack=="string"){for(var d=ue.stack.split(`
`),h=c.stack.split(`
`),b=d.length-1,O=h.length-1;1<=b&&0<=O&&d[b]!==h[O];)O--;for(;1<=b&&0<=O;b--,O--)if(d[b]!==h[O]){if(b!==1||O!==1)do if(b--,O--,0>O||d[b]!==h[O]){var z=`
`+d[b].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=b&&0<=O);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?re(t):""}function ze(t){switch(t.tag){case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return t=Ve(t.type,!1),t;case 11:return t=Ve(t.type.render,!1),t;case 1:return t=Ve(t.type,!0),t;default:return""}}function Ge(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case P:return"Portal";case I:return"Profiler";case w:return"StrictMode";case se:return"Suspense";case q:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case W:return(t.displayName||"Context")+".Consumer";case B:return(t._context.displayName||"Context")+".Provider";case Z:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ee:return i=t.displayName||null,i!==null?i:Ge(t.type)||"Memo";case he:i=t._payload,t=t._init;try{return Ge(t(i))}catch{}}return null}function le(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ge(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function de(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ee(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(t){var i=Ee(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,h=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(b){c=""+b,h.call(this,b)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Fe(t){t._valueTracker||(t._valueTracker=Qe(t))}function ct(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return t&&(c=Ee(t)?t.checked?"true":"false":t.value),t=c,t!==a?(i.setValue(t),!0):!1}function Vt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ut(t,i){var a=i.checked;return H({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function vt(t,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=de(i.value!=null?i.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Dt(t,i){i=i.checked,i!=null&&k(t,"checked",i,!1)}function dt(t,i){Dt(t,i);var a=de(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Zt(t,i.type,a):i.hasOwnProperty("defaultValue")&&Zt(t,i.type,de(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ft(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Zt(t,i,a){(i!=="number"||Vt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var nn=Array.isArray;function Lt(t,i,a,c){if(t=t.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=i.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&c&&(t[a].defaultSelected=!0)}else{for(a=""+de(a),i=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function Gt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return H({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function j(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(nn(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:de(a)}}function an(t,i){var a=de(i.value),c=de(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function Tt(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function U(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?U(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $,oe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return t(i,a,c,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for($=$||document.createElement("div"),$.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=$.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function fe(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Te=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Te.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function pe(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function ge(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=pe(a,i[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,d):t[a]=d}}var Re=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ye(t,i){if(i){if(Re[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Pe(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function $e(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var et=null,it=null,V=null;function Ae(t){if(t=Sa(t)){if(typeof et!="function")throw Error(n(280));var i=t.stateNode;i&&(i=So(i),et(t.stateNode,t.type,i))}}function me(t){it?V?V.push(t):V=[t]:it=t}function Ce(){if(it){var t=it,i=V;if(V=it=null,Ae(t),i)for(t=0;t<i.length;t++)Ae(i[t])}}function Ue(t,i){return t(i)}function xe(){}var Ze=!1;function Xe(t,i,a){if(Ze)return t(i,a);Ze=!0;try{return Ue(t,i,a)}finally{Ze=!1,(it!==null||V!==null)&&(xe(),Ce())}}function At(t,i){var a=t.stateNode;if(a===null)return null;var c=So(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var wt=!1;if(f)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){wt=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{wt=!1}function Jn(t,i,a,c,d,h,b,O,z){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(a,ue)}catch(_e){this.onError(_e)}}var Nr=!1,ls=null,Lr=!1,Dr=null,Jl={onError:function(t){Nr=!0,ls=t}};function no(t,i,a,c,d,h,b,O,z){Nr=!1,ls=null,Jn.apply(Jl,arguments)}function io(t,i,a,c,d,h,b,O,z){if(no.apply(this,arguments),Nr){if(Nr){var ue=ls;Nr=!1,ls=null}else throw Error(n(198));Lr||(Lr=!0,Dr=ue)}}function Rn(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function cs(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ea(t){if(Rn(t)!==t)throw Error(n(188))}function ro(t){var i=t.alternate;if(!i){if(i=Rn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,c=i;;){var d=a.return;if(d===null)break;var h=d.alternate;if(h===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===a)return ea(d),t;if(h===c)return ea(d),i;h=h.sibling}throw Error(n(188))}if(a.return!==c.return)a=d,c=h;else{for(var b=!1,O=d.child;O;){if(O===a){b=!0,a=d,c=h;break}if(O===c){b=!0,c=d,a=h;break}O=O.sibling}if(!b){for(O=h.child;O;){if(O===a){b=!0,a=h,c=d;break}if(O===c){b=!0,c=h,a=d;break}O=O.sibling}if(!b)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function Ir(t){return t=ro(t),t!==null?ta(t):null}function ta(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ta(t);if(i!==null)return i;t=t.sibling}return null}var Ur=e.unstable_scheduleCallback,na=e.unstable_cancelCallback,so=e.unstable_shouldYield,Ql=e.unstable_requestPaint,Xt=e.unstable_now,ec=e.unstable_getCurrentPriorityLevel,ia=e.unstable_ImmediatePriority,ra=e.unstable_UserBlockingPriority,T=e.unstable_NormalPriority,G=e.unstable_LowPriority,ce=e.unstable_IdlePriority,ne=null,J=null;function De(t){if(J&&typeof J.onCommitFiberRoot=="function")try{J.onCommitFiberRoot(ne,t,void 0,(t.current.flags&128)===128)}catch{}}var Ne=Math.clz32?Math.clz32:Ke,Le=Math.log,We=Math.LN2;function Ke(t){return t>>>=0,t===0?32:31-(Le(t)/We|0)|0}var at=64,lt=4194304;function Be(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _t(t,i){var a=t.pendingLanes;if(a===0)return 0;var c=0,d=t.suspendedLanes,h=t.pingedLanes,b=a&268435455;if(b!==0){var O=b&~d;O!==0?c=Be(O):(h&=b,h!==0&&(c=Be(h)))}else b=a&~d,b!==0?c=Be(b):h!==0&&(c=Be(h));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)a=31-Ne(i),d=1<<a,c|=t[a],i&=~d;return c}function Jt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(t,i){for(var a=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var b=31-Ne(h),O=1<<b,z=d[b];z===-1?((O&a)===0||(O&c)!==0)&&(d[b]=Jt(O,i)):z<=i&&(t.expiredLanes|=O),h&=~O}}function Nt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function on(){var t=at;return at<<=1,(at&4194240)===0&&(at=64),t}function Oe(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function en(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Ne(i),t[i]=a}function yt(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-Ne(a),h=1<<d;i[d]=0,c[d]=-1,t[d]=-1,a&=~h}}function Sn(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var c=31-Ne(a),d=1<<c;d&i|t[c]&i&&(t[c]|=i),a&=~d}}var ft=0;function ui(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Hi,Ct,Wt,di,It,Qn=!1,fi=[],hi=null,ar=null,or=null,sa=new Map,aa=new Map,lr=[],Ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rf(t,i){switch(t){case"focusin":case"focusout":hi=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":sa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":aa.delete(i.pointerId)}}function oa(t,i,a,c,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:h,targetContainers:[d]},i!==null&&(i=Sa(i),i!==null&&Ct(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Fg(t,i,a,c,d){switch(i){case"focusin":return hi=oa(hi,t,i,a,c,d),!0;case"dragenter":return ar=oa(ar,t,i,a,c,d),!0;case"mouseover":return or=oa(or,t,i,a,c,d),!0;case"pointerover":var h=d.pointerId;return sa.set(h,oa(sa.get(h)||null,t,i,a,c,d)),!0;case"gotpointercapture":return h=d.pointerId,aa.set(h,oa(aa.get(h)||null,t,i,a,c,d)),!0}return!1}function Pf(t){var i=Fr(t.target);if(i!==null){var a=Rn(i);if(a!==null){if(i=a.tag,i===13){if(i=cs(a),i!==null){t.blockedOn=i,It(t.priority,function(){Wt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ao(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=nc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);be=c,a.target.dispatchEvent(c),be=null}else return i=Sa(a),i!==null&&Ct(i),t.blockedOn=a,!1;i.shift()}return!0}function Nf(t,i,a){ao(t)&&a.delete(i)}function Og(){Qn=!1,hi!==null&&ao(hi)&&(hi=null),ar!==null&&ao(ar)&&(ar=null),or!==null&&ao(or)&&(or=null),sa.forEach(Nf),aa.forEach(Nf)}function la(t,i){t.blockedOn===i&&(t.blockedOn=null,Qn||(Qn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Og)))}function ca(t){function i(d){return la(d,t)}if(0<fi.length){la(fi[0],t);for(var a=1;a<fi.length;a++){var c=fi[a];c.blockedOn===t&&(c.blockedOn=null)}}for(hi!==null&&la(hi,t),ar!==null&&la(ar,t),or!==null&&la(or,t),sa.forEach(i),aa.forEach(i),a=0;a<lr.length;a++)c=lr[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<lr.length&&(a=lr[0],a.blockedOn===null);)Pf(a),a.blockedOn===null&&lr.shift()}var us=C.ReactCurrentBatchConfig,oo=!0;function kg(t,i,a,c){var d=ft,h=us.transition;us.transition=null;try{ft=1,tc(t,i,a,c)}finally{ft=d,us.transition=h}}function Bg(t,i,a,c){var d=ft,h=us.transition;us.transition=null;try{ft=4,tc(t,i,a,c)}finally{ft=d,us.transition=h}}function tc(t,i,a,c){if(oo){var d=nc(t,i,a,c);if(d===null)_c(t,i,c,lo,a),Rf(t,c);else if(Fg(d,t,i,a,c))c.stopPropagation();else if(Rf(t,c),i&4&&-1<Ug.indexOf(t)){for(;d!==null;){var h=Sa(d);if(h!==null&&Hi(h),h=nc(t,i,a,c),h===null&&_c(t,i,c,lo,a),h===d)break;d=h}d!==null&&c.stopPropagation()}else _c(t,i,c,null,a)}}var lo=null;function nc(t,i,a,c){if(lo=null,t=$e(c),t=Fr(t),t!==null)if(i=Rn(t),i===null)t=null;else if(a=i.tag,a===13){if(t=cs(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return lo=t,null}function Lf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ec()){case ia:return 1;case ra:return 4;case T:case G:return 16;case ce:return 536870912;default:return 16}default:return 16}}var cr=null,ic=null,co=null;function Df(){if(co)return co;var t,i=ic,a=i.length,c,d="value"in cr?cr.value:cr.textContent,h=d.length;for(t=0;t<a&&i[t]===d[t];t++);var b=a-t;for(c=1;c<=b&&i[a-c]===d[h-c];c++);return co=d.slice(t,1<c?1-c:void 0)}function uo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function fo(){return!0}function If(){return!1}function Gn(t){function i(a,c,d,h,b){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=h,this.target=b,this.currentTarget=null;for(var O in t)t.hasOwnProperty(O)&&(a=t[O],this[O]=a?a(h):h[O]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?fo:If,this.isPropagationStopped=If,this}return H(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),i}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=Gn(ds),ua=H({},ds,{view:0,detail:0}),zg=Gn(ua),sc,ac,da,ho=H({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==da&&(da&&t.type==="mousemove"?(sc=t.screenX-da.screenX,ac=t.screenY-da.screenY):ac=sc=0,da=t),sc)},movementY:function(t){return"movementY"in t?t.movementY:ac}}),Uf=Gn(ho),Hg=H({},ho,{dataTransfer:0}),Vg=Gn(Hg),Gg=H({},ua,{relatedTarget:0}),oc=Gn(Gg),Wg=H({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),jg=Gn(Wg),Xg=H({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qg=Gn(Xg),Yg=H({},ds,{data:0}),Ff=Gn(Yg),$g={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Zg[t])?!!i[t]:!1}function lc(){return Jg}var Qg=H({},ua,{key:function(t){if(t.key){var i=$g[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=uo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(t){return t.type==="keypress"?uo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ex=Gn(Qg),tx=H({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Of=Gn(tx),nx=H({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),ix=Gn(nx),rx=H({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=Gn(rx),ax=H({},ho,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ox=Gn(ax),lx=[9,13,27,32],cc=f&&"CompositionEvent"in window,fa=null;f&&"documentMode"in document&&(fa=document.documentMode);var cx=f&&"TextEvent"in window&&!fa,kf=f&&(!cc||fa&&8<fa&&11>=fa),Bf=" ",zf=!1;function Hf(t,i){switch(t){case"keyup":return lx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function ux(t,i){switch(t){case"compositionend":return Vf(i);case"keypress":return i.which!==32?null:(zf=!0,Bf);case"textInput":return t=i.data,t===Bf&&zf?null:t;default:return null}}function dx(t,i){if(fs)return t==="compositionend"||!cc&&Hf(t,i)?(t=Df(),co=ic=cr=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return kf&&i.locale!=="ko"?null:i.data;default:return null}}var fx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!fx[t.type]:i==="textarea"}function Wf(t,i,a,c){me(c),i=vo(i,"onChange"),0<i.length&&(a=new rc("onChange","change",null,a,c),t.push({event:a,listeners:i}))}var ha=null,pa=null;function hx(t){lh(t,0)}function po(t){var i=xs(t);if(ct(i))return t}function px(t,i){if(t==="change")return i}var jf=!1;if(f){var uc;if(f){var dc="oninput"in document;if(!dc){var Xf=document.createElement("div");Xf.setAttribute("oninput","return;"),dc=typeof Xf.oninput=="function"}uc=dc}else uc=!1;jf=uc&&(!document.documentMode||9<document.documentMode)}function qf(){ha&&(ha.detachEvent("onpropertychange",Yf),pa=ha=null)}function Yf(t){if(t.propertyName==="value"&&po(pa)){var i=[];Wf(i,pa,t,$e(t)),Xe(hx,i)}}function mx(t,i,a){t==="focusin"?(qf(),ha=i,pa=a,ha.attachEvent("onpropertychange",Yf)):t==="focusout"&&qf()}function gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return po(pa)}function xx(t,i){if(t==="click")return po(i)}function vx(t,i){if(t==="input"||t==="change")return po(i)}function _x(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var pi=typeof Object.is=="function"?Object.is:_x;function ma(t,i){if(pi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(i,d)||!pi(t[d],i[d]))return!1}return!0}function $f(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kf(t,i){var a=$f(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=i&&c>=i)return{node:a,offset:i-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$f(a)}}function Zf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Zf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Jf(){for(var t=window,i=Vt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Vt(t.document)}return i}function fc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function yx(t){var i=Jf(),a=t.focusedElem,c=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Zf(a.ownerDocument.documentElement,a)){if(c!==null&&fc(a)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,h=Math.min(c.start,d);c=c.end===void 0?h:Math.min(c.end,d),!t.extend&&h>c&&(d=c,c=h,h=d),d=Kf(a,h);var b=Kf(a,c);d&&b&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==b.node||t.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>c?(t.addRange(i),t.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Sx=f&&"documentMode"in document&&11>=document.documentMode,hs=null,hc=null,ga=null,pc=!1;function Qf(t,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pc||hs==null||hs!==Vt(c)||(c=hs,"selectionStart"in c&&fc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ga&&ma(ga,c)||(ga=c,c=vo(hc,"onSelect"),0<c.length&&(i=new rc("onSelect","select",null,i,a),t.push({event:i,listeners:c}),i.target=hs)))}function mo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ps={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},mc={},eh={};f&&(eh=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function go(t){if(mc[t])return mc[t];if(!ps[t])return t;var i=ps[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in eh)return mc[t]=i[a];return t}var th=go("animationend"),nh=go("animationiteration"),ih=go("animationstart"),rh=go("transitionend"),sh=new Map,ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,i){sh.set(t,i),l(i,[t])}for(var gc=0;gc<ah.length;gc++){var xc=ah[gc],Mx=xc.toLowerCase(),Ex=xc[0].toUpperCase()+xc.slice(1);ur(Mx,"on"+Ex)}ur(th,"onAnimationEnd"),ur(nh,"onAnimationIteration"),ur(ih,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(rh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wx=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function oh(t,i,a){var c=t.type||"unknown-event";t.currentTarget=a,io(c,i,void 0,t),t.currentTarget=null}function lh(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],d=c.event;c=c.listeners;e:{var h=void 0;if(i)for(var b=c.length-1;0<=b;b--){var O=c[b],z=O.instance,ue=O.currentTarget;if(O=O.listener,z!==h&&d.isPropagationStopped())break e;oh(d,O,ue),h=z}else for(b=0;b<c.length;b++){if(O=c[b],z=O.instance,ue=O.currentTarget,O=O.listener,z!==h&&d.isPropagationStopped())break e;oh(d,O,ue),h=z}}}if(Lr)throw t=Dr,Lr=!1,Dr=null,t}function zt(t,i){var a=i[bc];a===void 0&&(a=i[bc]=new Set);var c=t+"__bubble";a.has(c)||(ch(i,t,2,!1),a.add(c))}function vc(t,i,a){var c=0;i&&(c|=4),ch(a,t,c,i)}var xo="_reactListening"+Math.random().toString(36).slice(2);function va(t){if(!t[xo]){t[xo]=!0,r.forEach(function(a){a!=="selectionchange"&&(wx.has(a)||vc(a,!1,t),vc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[xo]||(i[xo]=!0,vc("selectionchange",!1,i))}}function ch(t,i,a,c){switch(Lf(i)){case 1:var d=kg;break;case 4:d=Bg;break;default:d=tc}a=d.bind(null,i,a,t),d=void 0,!wt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(i,a,{capture:!0,passive:d}):t.addEventListener(i,a,!0):d!==void 0?t.addEventListener(i,a,{passive:d}):t.addEventListener(i,a,!1)}function _c(t,i,a,c,d){var h=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var O=c.stateNode.containerInfo;if(O===d||O.nodeType===8&&O.parentNode===d)break;if(b===4)for(b=c.return;b!==null;){var z=b.tag;if((z===3||z===4)&&(z=b.stateNode.containerInfo,z===d||z.nodeType===8&&z.parentNode===d))return;b=b.return}for(;O!==null;){if(b=Fr(O),b===null)return;if(z=b.tag,z===5||z===6){c=h=b;continue e}O=O.parentNode}}c=c.return}Xe(function(){var ue=h,_e=$e(a),Se=[];e:{var ve=sh.get(t);if(ve!==void 0){var ke=rc,je=t;switch(t){case"keypress":if(uo(a)===0)break e;case"keydown":case"keyup":ke=ex;break;case"focusin":je="focus",ke=oc;break;case"focusout":je="blur",ke=oc;break;case"beforeblur":case"afterblur":ke=oc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=Uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=Vg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=ix;break;case th:case nh:case ih:ke=jg;break;case rh:ke=sx;break;case"scroll":ke=zg;break;case"wheel":ke=ox;break;case"copy":case"cut":case"paste":ke=qg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Of}var qe=(i&4)!==0,tn=!qe&&t==="scroll",ie=qe?ve!==null?ve+"Capture":null:ve;qe=[];for(var X=ue,ae;X!==null;){ae=X;var we=ae.stateNode;if(ae.tag===5&&we!==null&&(ae=we,ie!==null&&(we=At(X,ie),we!=null&&qe.push(_a(X,we,ae)))),tn)break;X=X.return}0<qe.length&&(ve=new ke(ve,je,null,a,_e),Se.push({event:ve,listeners:qe}))}}if((i&7)===0){e:{if(ve=t==="mouseover"||t==="pointerover",ke=t==="mouseout"||t==="pointerout",ve&&a!==be&&(je=a.relatedTarget||a.fromElement)&&(Fr(je)||je[Vi]))break e;if((ke||ve)&&(ve=_e.window===_e?_e:(ve=_e.ownerDocument)?ve.defaultView||ve.parentWindow:window,ke?(je=a.relatedTarget||a.toElement,ke=ue,je=je?Fr(je):null,je!==null&&(tn=Rn(je),je!==tn||je.tag!==5&&je.tag!==6)&&(je=null)):(ke=null,je=ue),ke!==je)){if(qe=Uf,we="onMouseLeave",ie="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(qe=Of,we="onPointerLeave",ie="onPointerEnter",X="pointer"),tn=ke==null?ve:xs(ke),ae=je==null?ve:xs(je),ve=new qe(we,X+"leave",ke,a,_e),ve.target=tn,ve.relatedTarget=ae,we=null,Fr(_e)===ue&&(qe=new qe(ie,X+"enter",je,a,_e),qe.target=ae,qe.relatedTarget=tn,we=qe),tn=we,ke&&je)t:{for(qe=ke,ie=je,X=0,ae=qe;ae;ae=ms(ae))X++;for(ae=0,we=ie;we;we=ms(we))ae++;for(;0<X-ae;)qe=ms(qe),X--;for(;0<ae-X;)ie=ms(ie),ae--;for(;X--;){if(qe===ie||ie!==null&&qe===ie.alternate)break t;qe=ms(qe),ie=ms(ie)}qe=null}else qe=null;ke!==null&&uh(Se,ve,ke,qe,!1),je!==null&&tn!==null&&uh(Se,tn,je,qe,!0)}}e:{if(ve=ue?xs(ue):window,ke=ve.nodeName&&ve.nodeName.toLowerCase(),ke==="select"||ke==="input"&&ve.type==="file")var Je=px;else if(Gf(ve))if(jf)Je=vx;else{Je=gx;var tt=mx}else(ke=ve.nodeName)&&ke.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Je=xx);if(Je&&(Je=Je(t,ue))){Wf(Se,Je,a,_e);break e}tt&&tt(t,ve,ue),t==="focusout"&&(tt=ve._wrapperState)&&tt.controlled&&ve.type==="number"&&Zt(ve,"number",ve.value)}switch(tt=ue?xs(ue):window,t){case"focusin":(Gf(tt)||tt.contentEditable==="true")&&(hs=tt,hc=ue,ga=null);break;case"focusout":ga=hc=hs=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,Qf(Se,a,_e);break;case"selectionchange":if(Sx)break;case"keydown":case"keyup":Qf(Se,a,_e)}var nt;if(cc)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else fs?Hf(t,a)&&(rt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(kf&&a.locale!=="ko"&&(fs||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&fs&&(nt=Df()):(cr=_e,ic="value"in cr?cr.value:cr.textContent,fs=!0)),tt=vo(ue,rt),0<tt.length&&(rt=new Ff(rt,t,null,a,_e),Se.push({event:rt,listeners:tt}),nt?rt.data=nt:(nt=Vf(a),nt!==null&&(rt.data=nt)))),(nt=cx?ux(t,a):dx(t,a))&&(ue=vo(ue,"onBeforeInput"),0<ue.length&&(_e=new Ff("onBeforeInput","beforeinput",null,a,_e),Se.push({event:_e,listeners:ue}),_e.data=nt))}lh(Se,i)})}function _a(t,i,a){return{instance:t,listener:i,currentTarget:a}}function vo(t,i){for(var a=i+"Capture",c=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=At(t,a),h!=null&&c.unshift(_a(t,h,d)),h=At(t,i),h!=null&&c.push(_a(t,h,d))),t=t.return}return c}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function uh(t,i,a,c,d){for(var h=i._reactName,b=[];a!==null&&a!==c;){var O=a,z=O.alternate,ue=O.stateNode;if(z!==null&&z===c)break;O.tag===5&&ue!==null&&(O=ue,d?(z=At(a,h),z!=null&&b.unshift(_a(a,z,O))):d||(z=At(a,h),z!=null&&b.push(_a(a,z,O)))),a=a.return}b.length!==0&&t.push({event:i,listeners:b})}var bx=/\r\n?/g,Tx=/\u0000|\uFFFD/g;function dh(t){return(typeof t=="string"?t:""+t).replace(bx,`
`).replace(Tx,"")}function _o(t,i,a){if(i=dh(i),dh(t)!==i&&a)throw Error(n(425))}function yo(){}var yc=null,Sc=null;function Mc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,Ax=typeof clearTimeout=="function"?clearTimeout:void 0,fh=typeof Promise=="function"?Promise:void 0,Cx=typeof queueMicrotask=="function"?queueMicrotask:typeof fh<"u"?function(t){return fh.resolve(null).then(t).catch(Rx)}:Ec;function Rx(t){setTimeout(function(){throw t})}function wc(t,i){var a=i,c=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){t.removeChild(d),ca(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ca(i)}function dr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function hh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var gs=Math.random().toString(36).slice(2),Ci="__reactFiber$"+gs,ya="__reactProps$"+gs,Vi="__reactContainer$"+gs,bc="__reactEvents$"+gs,Px="__reactListeners$"+gs,Nx="__reactHandles$"+gs;function Fr(t){var i=t[Ci];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Vi]||a[Ci]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=hh(t);t!==null;){if(a=t[Ci])return a;t=hh(t)}return i}t=a,a=t.parentNode}return null}function Sa(t){return t=t[Ci]||t[Vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function So(t){return t[ya]||null}var Tc=[],vs=-1;function fr(t){return{current:t}}function Ht(t){0>vs||(t.current=Tc[vs],Tc[vs]=null,vs--)}function kt(t,i){vs++,Tc[vs]=t.current,t.current=i}var hr={},Mn=fr(hr),Un=fr(!1),Or=hr;function _s(t,i){var a=t.type.contextTypes;if(!a)return hr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in a)d[h]=i[h];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Fn(t){return t=t.childContextTypes,t!=null}function Mo(){Ht(Un),Ht(Mn)}function ph(t,i,a){if(Mn.current!==hr)throw Error(n(168));kt(Mn,i),kt(Un,a)}function mh(t,i,a){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,le(t)||"Unknown",d));return H({},a,c)}function Eo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,Or=Mn.current,kt(Mn,t),kt(Un,Un.current),!0}function gh(t,i,a){var c=t.stateNode;if(!c)throw Error(n(169));a?(t=mh(t,i,Or),c.__reactInternalMemoizedMergedChildContext=t,Ht(Un),Ht(Mn),kt(Mn,t)):Ht(Un),kt(Un,a)}var Gi=null,wo=!1,Ac=!1;function xh(t){Gi===null?Gi=[t]:Gi.push(t)}function Lx(t){wo=!0,xh(t)}function pr(){if(!Ac&&Gi!==null){Ac=!0;var t=0,i=ft;try{var a=Gi;for(ft=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}Gi=null,wo=!1}catch(d){throw Gi!==null&&(Gi=Gi.slice(t+1)),Ur(ia,pr),d}finally{ft=i,Ac=!1}}return null}var ys=[],Ss=0,bo=null,To=0,ei=[],ti=0,kr=null,Wi=1,ji="";function Br(t,i){ys[Ss++]=To,ys[Ss++]=bo,bo=t,To=i}function vh(t,i,a){ei[ti++]=Wi,ei[ti++]=ji,ei[ti++]=kr,kr=t;var c=Wi;t=ji;var d=32-Ne(c)-1;c&=~(1<<d),a+=1;var h=32-Ne(i)+d;if(30<h){var b=d-d%5;h=(c&(1<<b)-1).toString(32),c>>=b,d-=b,Wi=1<<32-Ne(i)+d|a<<d|c,ji=h+t}else Wi=1<<h|a<<d|c,ji=t}function Cc(t){t.return!==null&&(Br(t,1),vh(t,1,0))}function Rc(t){for(;t===bo;)bo=ys[--Ss],ys[Ss]=null,To=ys[--Ss],ys[Ss]=null;for(;t===kr;)kr=ei[--ti],ei[ti]=null,ji=ei[--ti],ei[ti]=null,Wi=ei[--ti],ei[ti]=null}var Wn=null,jn=null,jt=!1,mi=null;function _h(t,i){var a=si(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function yh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Wn=t,jn=dr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Wn=t,jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=kr!==null?{id:Wi,overflow:ji}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=si(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Wn=t,jn=null,!0):!1;default:return!1}}function Pc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nc(t){if(jt){var i=jn;if(i){var a=i;if(!yh(t,i)){if(Pc(t))throw Error(n(418));i=dr(a.nextSibling);var c=Wn;i&&yh(t,i)?_h(c,a):(t.flags=t.flags&-4097|2,jt=!1,Wn=t)}}else{if(Pc(t))throw Error(n(418));t.flags=t.flags&-4097|2,jt=!1,Wn=t}}}function Sh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wn=t}function Ao(t){if(t!==Wn)return!1;if(!jt)return Sh(t),jt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Mc(t.type,t.memoizedProps)),i&&(i=jn)){if(Pc(t))throw Mh(),Error(n(418));for(;i;)_h(t,i),i=dr(i.nextSibling)}if(Sh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){jn=dr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}jn=null}}else jn=Wn?dr(t.stateNode.nextSibling):null;return!0}function Mh(){for(var t=jn;t;)t=dr(t.nextSibling)}function Ms(){jn=Wn=null,jt=!1}function Lc(t){mi===null?mi=[t]:mi.push(t)}var Dx=C.ReactCurrentBatchConfig;function Ma(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,t));var d=c,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(b){var O=d.refs;b===null?delete O[h]:O[h]=b},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Co(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Eh(t){var i=t._init;return i(t._payload)}function wh(t){function i(ie,X){if(t){var ae=ie.deletions;ae===null?(ie.deletions=[X],ie.flags|=16):ae.push(X)}}function a(ie,X){if(!t)return null;for(;X!==null;)i(ie,X),X=X.sibling;return null}function c(ie,X){for(ie=new Map;X!==null;)X.key!==null?ie.set(X.key,X):ie.set(X.index,X),X=X.sibling;return ie}function d(ie,X){return ie=Mr(ie,X),ie.index=0,ie.sibling=null,ie}function h(ie,X,ae){return ie.index=ae,t?(ae=ie.alternate,ae!==null?(ae=ae.index,ae<X?(ie.flags|=2,X):ae):(ie.flags|=2,X)):(ie.flags|=1048576,X)}function b(ie){return t&&ie.alternate===null&&(ie.flags|=2),ie}function O(ie,X,ae,we){return X===null||X.tag!==6?(X=Eu(ae,ie.mode,we),X.return=ie,X):(X=d(X,ae),X.return=ie,X)}function z(ie,X,ae,we){var Je=ae.type;return Je===F?_e(ie,X,ae.props.children,we,ae.key):X!==null&&(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===he&&Eh(Je)===X.type)?(we=d(X,ae.props),we.ref=Ma(ie,X,ae),we.return=ie,we):(we=Jo(ae.type,ae.key,ae.props,null,ie.mode,we),we.ref=Ma(ie,X,ae),we.return=ie,we)}function ue(ie,X,ae,we){return X===null||X.tag!==4||X.stateNode.containerInfo!==ae.containerInfo||X.stateNode.implementation!==ae.implementation?(X=wu(ae,ie.mode,we),X.return=ie,X):(X=d(X,ae.children||[]),X.return=ie,X)}function _e(ie,X,ae,we,Je){return X===null||X.tag!==7?(X=qr(ae,ie.mode,we,Je),X.return=ie,X):(X=d(X,ae),X.return=ie,X)}function Se(ie,X,ae){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Eu(""+X,ie.mode,ae),X.return=ie,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case L:return ae=Jo(X.type,X.key,X.props,null,ie.mode,ae),ae.ref=Ma(ie,null,X),ae.return=ie,ae;case P:return X=wu(X,ie.mode,ae),X.return=ie,X;case he:var we=X._init;return Se(ie,we(X._payload),ae)}if(nn(X)||Y(X))return X=qr(X,ie.mode,ae,null),X.return=ie,X;Co(ie,X)}return null}function ve(ie,X,ae,we){var Je=X!==null?X.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return Je!==null?null:O(ie,X,""+ae,we);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case L:return ae.key===Je?z(ie,X,ae,we):null;case P:return ae.key===Je?ue(ie,X,ae,we):null;case he:return Je=ae._init,ve(ie,X,Je(ae._payload),we)}if(nn(ae)||Y(ae))return Je!==null?null:_e(ie,X,ae,we,null);Co(ie,ae)}return null}function ke(ie,X,ae,we,Je){if(typeof we=="string"&&we!==""||typeof we=="number")return ie=ie.get(ae)||null,O(X,ie,""+we,Je);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case L:return ie=ie.get(we.key===null?ae:we.key)||null,z(X,ie,we,Je);case P:return ie=ie.get(we.key===null?ae:we.key)||null,ue(X,ie,we,Je);case he:var tt=we._init;return ke(ie,X,ae,tt(we._payload),Je)}if(nn(we)||Y(we))return ie=ie.get(ae)||null,_e(X,ie,we,Je,null);Co(X,we)}return null}function je(ie,X,ae,we){for(var Je=null,tt=null,nt=X,rt=X=0,pn=null;nt!==null&&rt<ae.length;rt++){nt.index>rt?(pn=nt,nt=null):pn=nt.sibling;var Rt=ve(ie,nt,ae[rt],we);if(Rt===null){nt===null&&(nt=pn);break}t&&nt&&Rt.alternate===null&&i(ie,nt),X=h(Rt,X,rt),tt===null?Je=Rt:tt.sibling=Rt,tt=Rt,nt=pn}if(rt===ae.length)return a(ie,nt),jt&&Br(ie,rt),Je;if(nt===null){for(;rt<ae.length;rt++)nt=Se(ie,ae[rt],we),nt!==null&&(X=h(nt,X,rt),tt===null?Je=nt:tt.sibling=nt,tt=nt);return jt&&Br(ie,rt),Je}for(nt=c(ie,nt);rt<ae.length;rt++)pn=ke(nt,ie,rt,ae[rt],we),pn!==null&&(t&&pn.alternate!==null&&nt.delete(pn.key===null?rt:pn.key),X=h(pn,X,rt),tt===null?Je=pn:tt.sibling=pn,tt=pn);return t&&nt.forEach(function(Er){return i(ie,Er)}),jt&&Br(ie,rt),Je}function qe(ie,X,ae,we){var Je=Y(ae);if(typeof Je!="function")throw Error(n(150));if(ae=Je.call(ae),ae==null)throw Error(n(151));for(var tt=Je=null,nt=X,rt=X=0,pn=null,Rt=ae.next();nt!==null&&!Rt.done;rt++,Rt=ae.next()){nt.index>rt?(pn=nt,nt=null):pn=nt.sibling;var Er=ve(ie,nt,Rt.value,we);if(Er===null){nt===null&&(nt=pn);break}t&&nt&&Er.alternate===null&&i(ie,nt),X=h(Er,X,rt),tt===null?Je=Er:tt.sibling=Er,tt=Er,nt=pn}if(Rt.done)return a(ie,nt),jt&&Br(ie,rt),Je;if(nt===null){for(;!Rt.done;rt++,Rt=ae.next())Rt=Se(ie,Rt.value,we),Rt!==null&&(X=h(Rt,X,rt),tt===null?Je=Rt:tt.sibling=Rt,tt=Rt);return jt&&Br(ie,rt),Je}for(nt=c(ie,nt);!Rt.done;rt++,Rt=ae.next())Rt=ke(nt,ie,rt,Rt.value,we),Rt!==null&&(t&&Rt.alternate!==null&&nt.delete(Rt.key===null?rt:Rt.key),X=h(Rt,X,rt),tt===null?Je=Rt:tt.sibling=Rt,tt=Rt);return t&&nt.forEach(function(fv){return i(ie,fv)}),jt&&Br(ie,rt),Je}function tn(ie,X,ae,we){if(typeof ae=="object"&&ae!==null&&ae.type===F&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case L:e:{for(var Je=ae.key,tt=X;tt!==null;){if(tt.key===Je){if(Je=ae.type,Je===F){if(tt.tag===7){a(ie,tt.sibling),X=d(tt,ae.props.children),X.return=ie,ie=X;break e}}else if(tt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===he&&Eh(Je)===tt.type){a(ie,tt.sibling),X=d(tt,ae.props),X.ref=Ma(ie,tt,ae),X.return=ie,ie=X;break e}a(ie,tt);break}else i(ie,tt);tt=tt.sibling}ae.type===F?(X=qr(ae.props.children,ie.mode,we,ae.key),X.return=ie,ie=X):(we=Jo(ae.type,ae.key,ae.props,null,ie.mode,we),we.ref=Ma(ie,X,ae),we.return=ie,ie=we)}return b(ie);case P:e:{for(tt=ae.key;X!==null;){if(X.key===tt)if(X.tag===4&&X.stateNode.containerInfo===ae.containerInfo&&X.stateNode.implementation===ae.implementation){a(ie,X.sibling),X=d(X,ae.children||[]),X.return=ie,ie=X;break e}else{a(ie,X);break}else i(ie,X);X=X.sibling}X=wu(ae,ie.mode,we),X.return=ie,ie=X}return b(ie);case he:return tt=ae._init,tn(ie,X,tt(ae._payload),we)}if(nn(ae))return je(ie,X,ae,we);if(Y(ae))return qe(ie,X,ae,we);Co(ie,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,X!==null&&X.tag===6?(a(ie,X.sibling),X=d(X,ae),X.return=ie,ie=X):(a(ie,X),X=Eu(ae,ie.mode,we),X.return=ie,ie=X),b(ie)):a(ie,X)}return tn}var Es=wh(!0),bh=wh(!1),Ro=fr(null),Po=null,ws=null,Dc=null;function Ic(){Dc=ws=Po=null}function Uc(t){var i=Ro.current;Ht(Ro),t._currentValue=i}function Fc(t,i,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===a)break;t=t.return}}function bs(t,i){Po=t,Dc=ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(On=!0),t.firstContext=null)}function ni(t){var i=t._currentValue;if(Dc!==t)if(t={context:t,memoizedValue:i,next:null},ws===null){if(Po===null)throw Error(n(308));ws=t,Po.dependencies={lanes:0,firstContext:t}}else ws=ws.next=t;return i}var zr=null;function Oc(t){zr===null?zr=[t]:zr.push(t)}function Th(t,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Oc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Xi(t,c)}function Xi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var mr=!1;function kc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ah(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function gr(t,i,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(bt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Xi(t,a)}return d=c.interleaved,d===null?(i.next=i,Oc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Xi(t,a)}function No(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,Sn(t,a)}}function Ch(t,i){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?d=h=b:h=h.next=b,a=a.next}while(a!==null);h===null?d=h=i:h=h.next=i}else d=h=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Lo(t,i,a,c){var d=t.updateQueue;mr=!1;var h=d.firstBaseUpdate,b=d.lastBaseUpdate,O=d.shared.pending;if(O!==null){d.shared.pending=null;var z=O,ue=z.next;z.next=null,b===null?h=ue:b.next=ue,b=z;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,O=_e.lastBaseUpdate,O!==b&&(O===null?_e.firstBaseUpdate=ue:O.next=ue,_e.lastBaseUpdate=z))}if(h!==null){var Se=d.baseState;b=0,_e=ue=z=null,O=h;do{var ve=O.lane,ke=O.eventTime;if((c&ve)===ve){_e!==null&&(_e=_e.next={eventTime:ke,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var je=t,qe=O;switch(ve=i,ke=a,qe.tag){case 1:if(je=qe.payload,typeof je=="function"){Se=je.call(ke,Se,ve);break e}Se=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=qe.payload,ve=typeof je=="function"?je.call(ke,Se,ve):je,ve==null)break e;Se=H({},Se,ve);break e;case 2:mr=!0}}O.callback!==null&&O.lane!==0&&(t.flags|=64,ve=d.effects,ve===null?d.effects=[O]:ve.push(O))}else ke={eventTime:ke,lane:ve,tag:O.tag,payload:O.payload,callback:O.callback,next:null},_e===null?(ue=_e=ke,z=Se):_e=_e.next=ke,b|=ve;if(O=O.next,O===null){if(O=d.shared.pending,O===null)break;ve=O,O=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(_e===null&&(z=Se),d.baseState=z,d.firstBaseUpdate=ue,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do b|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);Gr|=b,t.lanes=b,t.memoizedState=Se}}function Rh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var Ea={},Ri=fr(Ea),wa=fr(Ea),ba=fr(Ea);function Hr(t){if(t===Ea)throw Error(n(174));return t}function Bc(t,i){switch(kt(ba,i),kt(wa,t),kt(Ri,Ea),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=M(i,t)}Ht(Ri),kt(Ri,i)}function Ts(){Ht(Ri),Ht(wa),Ht(ba)}function Ph(t){Hr(ba.current);var i=Hr(Ri.current),a=M(i,t.type);i!==a&&(kt(wa,t),kt(Ri,a))}function zc(t){wa.current===t&&(Ht(Ri),Ht(wa))}var qt=fr(0);function Do(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Hc=[];function Vc(){for(var t=0;t<Hc.length;t++)Hc[t]._workInProgressVersionPrimary=null;Hc.length=0}var Io=C.ReactCurrentDispatcher,Gc=C.ReactCurrentBatchConfig,Vr=0,Yt=null,ln=null,fn=null,Uo=!1,Ta=!1,Aa=0,Ix=0;function En(){throw Error(n(321))}function Wc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!pi(t[a],i[a]))return!1;return!0}function jc(t,i,a,c,d,h){if(Vr=h,Yt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Io.current=t===null||t.memoizedState===null?kx:Bx,t=a(c,d),Ta){h=0;do{if(Ta=!1,Aa=0,25<=h)throw Error(n(301));h+=1,fn=ln=null,i.updateQueue=null,Io.current=zx,t=a(c,d)}while(Ta)}if(Io.current=ko,i=ln!==null&&ln.next!==null,Vr=0,fn=ln=Yt=null,Uo=!1,i)throw Error(n(300));return t}function Xc(){var t=Aa!==0;return Aa=0,t}function Pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?Yt.memoizedState=fn=t:fn=fn.next=t,fn}function ii(){if(ln===null){var t=Yt.alternate;t=t!==null?t.memoizedState:null}else t=ln.next;var i=fn===null?Yt.memoizedState:fn.next;if(i!==null)fn=i,ln=t;else{if(t===null)throw Error(n(310));ln=t,t={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},fn===null?Yt.memoizedState=fn=t:fn=fn.next=t}return fn}function Ca(t,i){return typeof i=="function"?i(t):i}function qc(t){var i=ii(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=ln,d=c.baseQueue,h=a.pending;if(h!==null){if(d!==null){var b=d.next;d.next=h.next,h.next=b}c.baseQueue=d=h,a.pending=null}if(d!==null){h=d.next,c=c.baseState;var O=b=null,z=null,ue=h;do{var _e=ue.lane;if((Vr&_e)===_e)z!==null&&(z=z.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),c=ue.hasEagerState?ue.eagerState:t(c,ue.action);else{var Se={lane:_e,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};z===null?(O=z=Se,b=c):z=z.next=Se,Yt.lanes|=_e,Gr|=_e}ue=ue.next}while(ue!==null&&ue!==h);z===null?b=c:z.next=O,pi(c,i.memoizedState)||(On=!0),i.memoizedState=c,i.baseState=b,i.baseQueue=z,a.lastRenderedState=c}if(t=a.interleaved,t!==null){d=t;do h=d.lane,Yt.lanes|=h,Gr|=h,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Yc(t){var i=ii(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=a.dispatch,d=a.pending,h=i.memoizedState;if(d!==null){a.pending=null;var b=d=d.next;do h=t(h,b.action),b=b.next;while(b!==d);pi(h,i.memoizedState)||(On=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,c]}function Nh(){}function Lh(t,i){var a=Yt,c=ii(),d=i(),h=!pi(c.memoizedState,d);if(h&&(c.memoizedState=d,On=!0),c=c.queue,$c(Uh.bind(null,a,c,t),[t]),c.getSnapshot!==i||h||fn!==null&&fn.memoizedState.tag&1){if(a.flags|=2048,Ra(9,Ih.bind(null,a,c,d,i),void 0,null),hn===null)throw Error(n(349));(Vr&30)!==0||Dh(a,i,d)}return d}function Dh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Yt.updateQueue,i===null?(i={lastEffect:null,stores:null},Yt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Ih(t,i,a,c){i.value=a,i.getSnapshot=c,Fh(i)&&Oh(t)}function Uh(t,i,a){return a(function(){Fh(i)&&Oh(t)})}function Fh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!pi(t,a)}catch{return!0}}function Oh(t){var i=Xi(t,1);i!==null&&_i(i,t,1,-1)}function kh(t){var i=Pi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:t},i.queue=t,t=t.dispatch=Ox.bind(null,Yt,t),[i.memoizedState,t]}function Ra(t,i,a,c){return t={tag:t,create:i,destroy:a,deps:c,next:null},i=Yt.updateQueue,i===null?(i={lastEffect:null,stores:null},Yt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,i.lastEffect=t)),t}function Bh(){return ii().memoizedState}function Fo(t,i,a,c){var d=Pi();Yt.flags|=t,d.memoizedState=Ra(1|i,a,void 0,c===void 0?null:c)}function Oo(t,i,a,c){var d=ii();c=c===void 0?null:c;var h=void 0;if(ln!==null){var b=ln.memoizedState;if(h=b.destroy,c!==null&&Wc(c,b.deps)){d.memoizedState=Ra(i,a,h,c);return}}Yt.flags|=t,d.memoizedState=Ra(1|i,a,h,c)}function zh(t,i){return Fo(8390656,8,t,i)}function $c(t,i){return Oo(2048,8,t,i)}function Hh(t,i){return Oo(4,2,t,i)}function Vh(t,i){return Oo(4,4,t,i)}function Gh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Wh(t,i,a){return a=a!=null?a.concat([t]):null,Oo(4,4,Gh.bind(null,i,t),a)}function Kc(){}function jh(t,i){var a=ii();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(a.memoizedState=[t,i],t)}function Xh(t,i){var a=ii();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(t=t(),a.memoizedState=[t,i],t)}function qh(t,i,a){return(Vr&21)===0?(t.baseState&&(t.baseState=!1,On=!0),t.memoizedState=a):(pi(a,i)||(a=on(),Yt.lanes|=a,Gr|=a,t.baseState=!0),i)}function Ux(t,i){var a=ft;ft=a!==0&&4>a?a:4,t(!0);var c=Gc.transition;Gc.transition={};try{t(!1),i()}finally{ft=a,Gc.transition=c}}function Yh(){return ii().memoizedState}function Fx(t,i,a){var c=yr(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},$h(t))Kh(i,a);else if(a=Th(t,i,a,c),a!==null){var d=Nn();_i(a,t,c,d),Zh(a,i,c)}}function Ox(t,i,a){var c=yr(t),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if($h(t))Kh(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var b=i.lastRenderedState,O=h(b,a);if(d.hasEagerState=!0,d.eagerState=O,pi(O,b)){var z=i.interleaved;z===null?(d.next=d,Oc(i)):(d.next=z.next,z.next=d),i.interleaved=d;return}}catch{}finally{}a=Th(t,i,d,c),a!==null&&(d=Nn(),_i(a,t,c,d),Zh(a,i,c))}}function $h(t){var i=t.alternate;return t===Yt||i!==null&&i===Yt}function Kh(t,i){Ta=Uo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Zh(t,i,a){if((a&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,Sn(t,a)}}var ko={readContext:ni,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},kx={readContext:ni,useCallback:function(t,i){return Pi().memoizedState=[t,i===void 0?null:i],t},useContext:ni,useEffect:zh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Fo(4194308,4,Gh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Fo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Fo(4,2,t,i)},useMemo:function(t,i){var a=Pi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var c=Pi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=Fx.bind(null,Yt,t),[c.memoizedState,t]},useRef:function(t){var i=Pi();return t={current:t},i.memoizedState=t},useState:kh,useDebugValue:Kc,useDeferredValue:function(t){return Pi().memoizedState=t},useTransition:function(){var t=kh(!1),i=t[0];return t=Ux.bind(null,t[1]),Pi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var c=Yt,d=Pi();if(jt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),hn===null)throw Error(n(349));(Vr&30)!==0||Dh(c,i,a)}d.memoizedState=a;var h={value:a,getSnapshot:i};return d.queue=h,zh(Uh.bind(null,c,h,t),[t]),c.flags|=2048,Ra(9,Ih.bind(null,c,h,a,i),void 0,null),a},useId:function(){var t=Pi(),i=hn.identifierPrefix;if(jt){var a=ji,c=Wi;a=(c&~(1<<32-Ne(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Aa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Ix++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Bx={readContext:ni,useCallback:jh,useContext:ni,useEffect:$c,useImperativeHandle:Wh,useInsertionEffect:Hh,useLayoutEffect:Vh,useMemo:Xh,useReducer:qc,useRef:Bh,useState:function(){return qc(Ca)},useDebugValue:Kc,useDeferredValue:function(t){var i=ii();return qh(i,ln.memoizedState,t)},useTransition:function(){var t=qc(Ca)[0],i=ii().memoizedState;return[t,i]},useMutableSource:Nh,useSyncExternalStore:Lh,useId:Yh,unstable_isNewReconciler:!1},zx={readContext:ni,useCallback:jh,useContext:ni,useEffect:$c,useImperativeHandle:Wh,useInsertionEffect:Hh,useLayoutEffect:Vh,useMemo:Xh,useReducer:Yc,useRef:Bh,useState:function(){return Yc(Ca)},useDebugValue:Kc,useDeferredValue:function(t){var i=ii();return ln===null?i.memoizedState=t:qh(i,ln.memoizedState,t)},useTransition:function(){var t=Yc(Ca)[0],i=ii().memoizedState;return[t,i]},useMutableSource:Nh,useSyncExternalStore:Lh,useId:Yh,unstable_isNewReconciler:!1};function gi(t,i){if(t&&t.defaultProps){i=H({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Zc(t,i,a,c){i=t.memoizedState,a=a(c,i),a=a==null?i:H({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Bo={isMounted:function(t){return(t=t._reactInternals)?Rn(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var c=Nn(),d=yr(t),h=qi(c,d);h.payload=i,a!=null&&(h.callback=a),i=gr(t,h,d),i!==null&&(_i(i,t,d,c),No(i,t,d))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var c=Nn(),d=yr(t),h=qi(c,d);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=gr(t,h,d),i!==null&&(_i(i,t,d,c),No(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Nn(),c=yr(t),d=qi(a,c);d.tag=2,i!=null&&(d.callback=i),i=gr(t,d,c),i!==null&&(_i(i,t,c,a),No(i,t,c))}};function Jh(t,i,a,c,d,h,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,h,b):i.prototype&&i.prototype.isPureReactComponent?!ma(a,c)||!ma(d,h):!0}function Qh(t,i,a){var c=!1,d=hr,h=i.contextType;return typeof h=="object"&&h!==null?h=ni(h):(d=Fn(i)?Or:Mn.current,c=i.contextTypes,h=(c=c!=null)?_s(t,d):hr),i=new i(a,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Bo,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function ep(t,i,a,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==t&&Bo.enqueueReplaceState(i,i.state,null)}function Jc(t,i,a,c){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},kc(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=ni(h):(h=Fn(i)?Or:Mn.current,d.context=_s(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Zc(t,i,h,a),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Bo.enqueueReplaceState(d,d.state,null),Lo(t,a,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,i){try{var a="",c=i;do a+=ze(c),c=c.return;while(c);var d=a}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function Qc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function eu(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Hx=typeof WeakMap=="function"?WeakMap:Map;function tp(t,i,a){a=qi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Xo||(Xo=!0,mu=c),eu(t,i)},a}function np(t,i,a){a=qi(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){eu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){eu(t,i),typeof c!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function ip(t,i,a){var c=t.pingCache;if(c===null){c=t.pingCache=new Hx;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),t=tv.bind(null,t,i,a),i.then(t,t))}function rp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function sp(t,i,a,c,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=qi(-1,1),i.tag=2,gr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var Vx=C.ReactCurrentOwner,On=!1;function Pn(t,i,a,c){i.child=t===null?bh(i,null,a,c):Es(i,t.child,a,c)}function ap(t,i,a,c,d){a=a.render;var h=i.ref;return bs(i,d),c=jc(t,i,a,c,h,d),a=Xc(),t!==null&&!On?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Yi(t,i,d)):(jt&&a&&Cc(i),i.flags|=1,Pn(t,i,c,d),i.child)}function op(t,i,a,c,d){if(t===null){var h=a.type;return typeof h=="function"&&!Mu(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,lp(t,i,h,c,d)):(t=Jo(a.type,null,c,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&d)===0){var b=h.memoizedProps;if(a=a.compare,a=a!==null?a:ma,a(b,c)&&t.ref===i.ref)return Yi(t,i,d)}return i.flags|=1,t=Mr(h,c),t.ref=i.ref,t.return=i,i.child=t}function lp(t,i,a,c,d){if(t!==null){var h=t.memoizedProps;if(ma(h,c)&&t.ref===i.ref)if(On=!1,i.pendingProps=c=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(On=!0);else return i.lanes=t.lanes,Yi(t,i,d)}return tu(t,i,a,c,d)}function cp(t,i,a){var c=i.pendingProps,d=c.children,h=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Rs,Xn),Xn|=a;else{if((a&1073741824)===0)return t=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,kt(Rs,Xn),Xn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=h!==null?h.baseLanes:a,kt(Rs,Xn),Xn|=c}else h!==null?(c=h.baseLanes|a,i.memoizedState=null):c=a,kt(Rs,Xn),Xn|=c;return Pn(t,i,d,a),i.child}function up(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function tu(t,i,a,c,d){var h=Fn(a)?Or:Mn.current;return h=_s(i,h),bs(i,d),a=jc(t,i,a,c,h,d),c=Xc(),t!==null&&!On?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Yi(t,i,d)):(jt&&c&&Cc(i),i.flags|=1,Pn(t,i,a,d),i.child)}function dp(t,i,a,c,d){if(Fn(a)){var h=!0;Eo(i)}else h=!1;if(bs(i,d),i.stateNode===null)Ho(t,i),Qh(i,a,c),Jc(i,a,c,d),c=!0;else if(t===null){var b=i.stateNode,O=i.memoizedProps;b.props=O;var z=b.context,ue=a.contextType;typeof ue=="object"&&ue!==null?ue=ni(ue):(ue=Fn(a)?Or:Mn.current,ue=_s(i,ue));var _e=a.getDerivedStateFromProps,Se=typeof _e=="function"||typeof b.getSnapshotBeforeUpdate=="function";Se||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(O!==c||z!==ue)&&ep(i,b,c,ue),mr=!1;var ve=i.memoizedState;b.state=ve,Lo(i,c,b,d),z=i.memoizedState,O!==c||ve!==z||Un.current||mr?(typeof _e=="function"&&(Zc(i,a,_e,c),z=i.memoizedState),(O=mr||Jh(i,a,O,c,ve,z,ue))?(Se||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),b.props=c,b.state=z,b.context=ue,c=O):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{b=i.stateNode,Ah(t,i),O=i.memoizedProps,ue=i.type===i.elementType?O:gi(i.type,O),b.props=ue,Se=i.pendingProps,ve=b.context,z=a.contextType,typeof z=="object"&&z!==null?z=ni(z):(z=Fn(a)?Or:Mn.current,z=_s(i,z));var ke=a.getDerivedStateFromProps;(_e=typeof ke=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(O!==Se||ve!==z)&&ep(i,b,c,z),mr=!1,ve=i.memoizedState,b.state=ve,Lo(i,c,b,d);var je=i.memoizedState;O!==Se||ve!==je||Un.current||mr?(typeof ke=="function"&&(Zc(i,a,ke,c),je=i.memoizedState),(ue=mr||Jh(i,a,ue,c,ve,je,z)||!1)?(_e||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,je,z),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,je,z)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||O===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||O===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=je),b.props=c,b.state=je,b.context=z,c=ue):(typeof b.componentDidUpdate!="function"||O===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||O===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),c=!1)}return nu(t,i,a,c,h,d)}function nu(t,i,a,c,d,h){up(t,i);var b=(i.flags&128)!==0;if(!c&&!b)return d&&gh(i,a,!1),Yi(t,i,h);c=i.stateNode,Vx.current=i;var O=b&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&b?(i.child=Es(i,t.child,null,h),i.child=Es(i,null,O,h)):Pn(t,i,O,h),i.memoizedState=c.state,d&&gh(i,a,!0),i.child}function fp(t){var i=t.stateNode;i.pendingContext?ph(t,i.pendingContext,i.pendingContext!==i.context):i.context&&ph(t,i.context,!1),Bc(t,i.containerInfo)}function hp(t,i,a,c,d){return Ms(),Lc(d),i.flags|=256,Pn(t,i,a,c),i.child}var iu={dehydrated:null,treeContext:null,retryLane:0};function ru(t){return{baseLanes:t,cachePool:null,transitions:null}}function pp(t,i,a){var c=i.pendingProps,d=qt.current,h=!1,b=(i.flags&128)!==0,O;if((O=b)||(O=t!==null&&t.memoizedState===null?!1:(d&2)!==0),O?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),kt(qt,d&1),t===null)return Nc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=c.children,t=c.fallback,h?(c=i.mode,h=i.child,b={mode:"hidden",children:b},(c&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=b):h=Qo(b,c,0,null),t=qr(t,c,a,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=ru(a),i.memoizedState=iu,t):su(i,b));if(d=t.memoizedState,d!==null&&(O=d.dehydrated,O!==null))return Gx(t,i,b,c,O,d,a);if(h){h=c.fallback,b=i.mode,d=t.child,O=d.sibling;var z={mode:"hidden",children:c.children};return(b&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=Mr(d,z),c.subtreeFlags=d.subtreeFlags&14680064),O!==null?h=Mr(O,h):(h=qr(h,b,a,null),h.flags|=2),h.return=i,c.return=i,c.sibling=h,i.child=c,c=h,h=i.child,b=t.child.memoizedState,b=b===null?ru(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},h.memoizedState=b,h.childLanes=t.childLanes&~a,i.memoizedState=iu,c}return h=t.child,t=h.sibling,c=Mr(h,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=c,i.memoizedState=null,c}function su(t,i){return i=Qo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function zo(t,i,a,c){return c!==null&&Lc(c),Es(i,t.child,null,a),t=su(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Gx(t,i,a,c,d,h,b){if(a)return i.flags&256?(i.flags&=-257,c=Qc(Error(n(422))),zo(t,i,b,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=c.fallback,d=i.mode,c=Qo({mode:"visible",children:c.children},d,0,null),h=qr(h,d,b,null),h.flags|=2,c.return=i,h.return=i,c.sibling=h,i.child=c,(i.mode&1)!==0&&Es(i,t.child,null,b),i.child.memoizedState=ru(b),i.memoizedState=iu,h);if((i.mode&1)===0)return zo(t,i,b,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var O=c.dgst;return c=O,h=Error(n(419)),c=Qc(h,c,void 0),zo(t,i,b,c)}if(O=(b&t.childLanes)!==0,On||O){if(c=hn,c!==null){switch(b&-b){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|b))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,Xi(t,d),_i(c,t,d,-1))}return Su(),c=Qc(Error(n(421))),zo(t,i,b,c)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=nv.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,jn=dr(d.nextSibling),Wn=i,jt=!0,mi=null,t!==null&&(ei[ti++]=Wi,ei[ti++]=ji,ei[ti++]=kr,Wi=t.id,ji=t.overflow,kr=i),i=su(i,c.children),i.flags|=4096,i)}function mp(t,i,a){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Fc(t.return,i,a)}function au(t,i,a,c,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=c,h.tail=a,h.tailMode=d)}function gp(t,i,a){var c=i.pendingProps,d=c.revealOrder,h=c.tail;if(Pn(t,i,c.children,a),c=qt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mp(t,a,i);else if(t.tag===19)mp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(kt(qt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)t=a.alternate,t!==null&&Do(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),au(i,!1,d,a,h);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Do(t)===null){i.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}au(i,!0,a,null,h);break;case"together":au(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ho(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Yi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Gr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=Mr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Mr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function Wx(t,i,a){switch(i.tag){case 3:fp(i),Ms();break;case 5:Ph(i);break;case 1:Fn(i.type)&&Eo(i);break;case 4:Bc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;kt(Ro,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(kt(qt,qt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?pp(t,i,a):(kt(qt,qt.current&1),t=Yi(t,i,a),t!==null?t.sibling:null);kt(qt,qt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(t.flags&128)!==0){if(c)return gp(t,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),kt(qt,qt.current),c)break;return null;case 22:case 23:return i.lanes=0,cp(t,i,a)}return Yi(t,i,a)}var xp,ou,vp,_p;xp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ou=function(){},vp=function(t,i,a,c){var d=t.memoizedProps;if(d!==c){t=i.stateNode,Hr(Ri.current);var h=null;switch(a){case"input":d=ut(t,d),c=ut(t,c),h=[];break;case"select":d=H({},d,{value:void 0}),c=H({},c,{value:void 0}),h=[];break;case"textarea":d=Gt(t,d),c=Gt(t,c),h=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=yo)}Ye(a,c);var b;a=null;for(ue in d)if(!c.hasOwnProperty(ue)&&d.hasOwnProperty(ue)&&d[ue]!=null)if(ue==="style"){var O=d[ue];for(b in O)O.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?h||(h=[]):(h=h||[]).push(ue,null));for(ue in c){var z=c[ue];if(O=d!=null?d[ue]:void 0,c.hasOwnProperty(ue)&&z!==O&&(z!=null||O!=null))if(ue==="style")if(O){for(b in O)!O.hasOwnProperty(b)||z&&z.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in z)z.hasOwnProperty(b)&&O[b]!==z[b]&&(a||(a={}),a[b]=z[b])}else a||(h||(h=[]),h.push(ue,a)),a=z;else ue==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,O=O?O.__html:void 0,z!=null&&O!==z&&(h=h||[]).push(ue,z)):ue==="children"?typeof z!="string"&&typeof z!="number"||(h=h||[]).push(ue,""+z):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(z!=null&&ue==="onScroll"&&zt("scroll",t),h||O===z||(h=[])):(h=h||[]).push(ue,z))}a&&(h=h||[]).push("style",a);var ue=h;(i.updateQueue=ue)&&(i.flags|=4)}},_p=function(t,i,a,c){a!==c&&(i.flags|=4)};function Pa(t,i){if(!jt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function wn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(i)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=a,i}function jx(t,i,a){var c=i.pendingProps;switch(Rc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(i),null;case 1:return Fn(i.type)&&Mo(),wn(i),null;case 3:return c=i.stateNode,Ts(),Ht(Un),Ht(Mn),Vc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Ao(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,mi!==null&&(vu(mi),mi=null))),ou(t,i),wn(i),null;case 5:zc(i);var d=Hr(ba.current);if(a=i.type,t!==null&&i.stateNode!=null)vp(t,i,a,c,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return wn(i),null}if(t=Hr(Ri.current),Ao(i)){c=i.stateNode,a=i.type;var h=i.memoizedProps;switch(c[Ci]=i,c[ya]=h,t=(i.mode&1)!==0,a){case"dialog":zt("cancel",c),zt("close",c);break;case"iframe":case"object":case"embed":zt("load",c);break;case"video":case"audio":for(d=0;d<xa.length;d++)zt(xa[d],c);break;case"source":zt("error",c);break;case"img":case"image":case"link":zt("error",c),zt("load",c);break;case"details":zt("toggle",c);break;case"input":vt(c,h),zt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!h.multiple},zt("invalid",c);break;case"textarea":j(c,h),zt("invalid",c)}Ye(a,h),d=null;for(var b in h)if(h.hasOwnProperty(b)){var O=h[b];b==="children"?typeof O=="string"?c.textContent!==O&&(h.suppressHydrationWarning!==!0&&_o(c.textContent,O,t),d=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(h.suppressHydrationWarning!==!0&&_o(c.textContent,O,t),d=["children",""+O]):o.hasOwnProperty(b)&&O!=null&&b==="onScroll"&&zt("scroll",c)}switch(a){case"input":Fe(c),Ft(c,h,!0);break;case"textarea":Fe(c),Tt(c);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(c.onclick=yo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{b=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=U(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=b.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=b.createElement(a,{is:c.is}):(t=b.createElement(a),a==="select"&&(b=t,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):t=b.createElementNS(t,a),t[Ci]=i,t[ya]=c,xp(t,i,!1,!1),i.stateNode=t;e:{switch(b=Pe(a,c),a){case"dialog":zt("cancel",t),zt("close",t),d=c;break;case"iframe":case"object":case"embed":zt("load",t),d=c;break;case"video":case"audio":for(d=0;d<xa.length;d++)zt(xa[d],t);d=c;break;case"source":zt("error",t),d=c;break;case"img":case"image":case"link":zt("error",t),zt("load",t),d=c;break;case"details":zt("toggle",t),d=c;break;case"input":vt(t,c),d=ut(t,c),zt("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=H({},c,{value:void 0}),zt("invalid",t);break;case"textarea":j(t,c),d=Gt(t,c),zt("invalid",t);break;default:d=c}Ye(a,d),O=d;for(h in O)if(O.hasOwnProperty(h)){var z=O[h];h==="style"?ge(t,z):h==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&oe(t,z)):h==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&fe(t,z):typeof z=="number"&&fe(t,""+z):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?z!=null&&h==="onScroll"&&zt("scroll",t):z!=null&&k(t,h,z,b))}switch(a){case"input":Fe(t),Ft(t,c,!1);break;case"textarea":Fe(t),Tt(t);break;case"option":c.value!=null&&t.setAttribute("value",""+de(c.value));break;case"select":t.multiple=!!c.multiple,h=c.value,h!=null?Lt(t,!!c.multiple,h,!1):c.defaultValue!=null&&Lt(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=yo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return wn(i),null;case 6:if(t&&i.stateNode!=null)_p(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=Hr(ba.current),Hr(Ri.current),Ao(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ci]=i,(h=c.nodeValue!==a)&&(t=Wn,t!==null))switch(t.tag){case 3:_o(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_o(c.nodeValue,a,(t.mode&1)!==0)}h&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ci]=i,i.stateNode=c}return wn(i),null;case 13:if(Ht(qt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(jt&&jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Mh(),Ms(),i.flags|=98560,h=!1;else if(h=Ao(i),c!==null&&c.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Ci]=i}else Ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;wn(i),h=!1}else mi!==null&&(vu(mi),mi=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(qt.current&1)!==0?cn===0&&(cn=3):Su())),i.updateQueue!==null&&(i.flags|=4),wn(i),null);case 4:return Ts(),ou(t,i),t===null&&va(i.stateNode.containerInfo),wn(i),null;case 10:return Uc(i.type._context),wn(i),null;case 17:return Fn(i.type)&&Mo(),wn(i),null;case 19:if(Ht(qt),h=i.memoizedState,h===null)return wn(i),null;if(c=(i.flags&128)!==0,b=h.rendering,b===null)if(c)Pa(h,!1);else{if(cn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(b=Do(t),b!==null){for(i.flags|=128,Pa(h,!1),c=b.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)h=a,t=c,h.flags&=14680066,b=h.alternate,b===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=b.childLanes,h.lanes=b.lanes,h.child=b.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=b.memoizedProps,h.memoizedState=b.memoizedState,h.updateQueue=b.updateQueue,h.type=b.type,t=b.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return kt(qt,qt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Xt()>Ps&&(i.flags|=128,c=!0,Pa(h,!1),i.lanes=4194304)}else{if(!c)if(t=Do(b),t!==null){if(i.flags|=128,c=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Pa(h,!0),h.tail===null&&h.tailMode==="hidden"&&!b.alternate&&!jt)return wn(i),null}else 2*Xt()-h.renderingStartTime>Ps&&a!==1073741824&&(i.flags|=128,c=!0,Pa(h,!1),i.lanes=4194304);h.isBackwards?(b.sibling=i.child,i.child=b):(a=h.last,a!==null?a.sibling=b:i.child=b,h.last=b)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Xt(),i.sibling=null,a=qt.current,kt(qt,c?a&1|2:a&1),i):(wn(i),null);case 22:case 23:return yu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Xn&1073741824)!==0&&(wn(i),i.subtreeFlags&6&&(i.flags|=8192)):wn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Xx(t,i){switch(Rc(i),i.tag){case 1:return Fn(i.type)&&Mo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ts(),Ht(Un),Ht(Mn),Vc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return zc(i),null;case 13:if(Ht(qt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ht(qt),null;case 4:return Ts(),null;case 10:return Uc(i.type._context),null;case 22:case 23:return yu(),null;case 24:return null;default:return null}}var Vo=!1,bn=!1,qx=typeof WeakSet=="function"?WeakSet:Set,He=null;function Cs(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Qt(t,i,c)}else a.current=null}function lu(t,i,a){try{a()}catch(c){Qt(t,i,c)}}var yp=!1;function Yx(t,i){if(yc=oo,t=Jf(),fc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,h=c.focusNode;c=c.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var b=0,O=-1,z=-1,ue=0,_e=0,Se=t,ve=null;t:for(;;){for(var ke;Se!==a||d!==0&&Se.nodeType!==3||(O=b+d),Se!==h||c!==0&&Se.nodeType!==3||(z=b+c),Se.nodeType===3&&(b+=Se.nodeValue.length),(ke=Se.firstChild)!==null;)ve=Se,Se=ke;for(;;){if(Se===t)break t;if(ve===a&&++ue===d&&(O=b),ve===h&&++_e===c&&(z=b),(ke=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=ke}a=O===-1||z===-1?null:{start:O,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sc={focusedElem:t,selectionRange:a},oo=!1,He=i;He!==null;)if(i=He,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,He=t;else for(;He!==null;){i=He;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var qe=je.memoizedProps,tn=je.memoizedState,ie=i.stateNode,X=ie.getSnapshotBeforeUpdate(i.elementType===i.type?qe:gi(i.type,qe),tn);ie.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ae=i.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){Qt(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,He=t;break}He=i.return}return je=yp,yp=!1,je}function Na(t,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&lu(i,a,h)}d=d.next}while(d!==c)}}function Go(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function cu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function Sp(t){var i=t.alternate;i!==null&&(t.alternate=null,Sp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Ci],delete i[ya],delete i[bc],delete i[Px],delete i[Nx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mp(t){return t.tag===5||t.tag===3||t.tag===4}function Ep(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=yo));else if(c!==4&&(t=t.child,t!==null))for(uu(t,i,a),t=t.sibling;t!==null;)uu(t,i,a),t=t.sibling}function du(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(du(t,i,a),t=t.sibling;t!==null;)du(t,i,a),t=t.sibling}var xn=null,xi=!1;function xr(t,i,a){for(a=a.child;a!==null;)wp(t,i,a),a=a.sibling}function wp(t,i,a){if(J&&typeof J.onCommitFiberUnmount=="function")try{J.onCommitFiberUnmount(ne,a)}catch{}switch(a.tag){case 5:bn||Cs(a,i);case 6:var c=xn,d=xi;xn=null,xr(t,i,a),xn=c,xi=d,xn!==null&&(xi?(t=xn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):xn.removeChild(a.stateNode));break;case 18:xn!==null&&(xi?(t=xn,a=a.stateNode,t.nodeType===8?wc(t.parentNode,a):t.nodeType===1&&wc(t,a),ca(t)):wc(xn,a.stateNode));break;case 4:c=xn,d=xi,xn=a.stateNode.containerInfo,xi=!0,xr(t,i,a),xn=c,xi=d;break;case 0:case 11:case 14:case 15:if(!bn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var h=d,b=h.destroy;h=h.tag,b!==void 0&&((h&2)!==0||(h&4)!==0)&&lu(a,i,b),d=d.next}while(d!==c)}xr(t,i,a);break;case 1:if(!bn&&(Cs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(O){Qt(a,i,O)}xr(t,i,a);break;case 21:xr(t,i,a);break;case 22:a.mode&1?(bn=(c=bn)||a.memoizedState!==null,xr(t,i,a),bn=c):xr(t,i,a);break;default:xr(t,i,a)}}function bp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new qx),i.forEach(function(c){var d=iv.bind(null,t,c);a.has(c)||(a.add(c),c.then(d,d))})}}function vi(t,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var h=t,b=i,O=b;e:for(;O!==null;){switch(O.tag){case 5:xn=O.stateNode,xi=!1;break e;case 3:xn=O.stateNode.containerInfo,xi=!0;break e;case 4:xn=O.stateNode.containerInfo,xi=!0;break e}O=O.return}if(xn===null)throw Error(n(160));wp(h,b,d),xn=null,xi=!1;var z=d.alternate;z!==null&&(z.return=null),d.return=null}catch(ue){Qt(d,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Tp(i,t),i=i.sibling}function Tp(t,i){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vi(i,t),Ni(t),c&4){try{Na(3,t,t.return),Go(3,t)}catch(qe){Qt(t,t.return,qe)}try{Na(5,t,t.return)}catch(qe){Qt(t,t.return,qe)}}break;case 1:vi(i,t),Ni(t),c&512&&a!==null&&Cs(a,a.return);break;case 5:if(vi(i,t),Ni(t),c&512&&a!==null&&Cs(a,a.return),t.flags&32){var d=t.stateNode;try{fe(d,"")}catch(qe){Qt(t,t.return,qe)}}if(c&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,b=a!==null?a.memoizedProps:h,O=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{O==="input"&&h.type==="radio"&&h.name!=null&&Dt(d,h),Pe(O,b);var ue=Pe(O,h);for(b=0;b<z.length;b+=2){var _e=z[b],Se=z[b+1];_e==="style"?ge(d,Se):_e==="dangerouslySetInnerHTML"?oe(d,Se):_e==="children"?fe(d,Se):k(d,_e,Se,ue)}switch(O){case"input":dt(d,h);break;case"textarea":an(d,h);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var ke=h.value;ke!=null?Lt(d,!!h.multiple,ke,!1):ve!==!!h.multiple&&(h.defaultValue!=null?Lt(d,!!h.multiple,h.defaultValue,!0):Lt(d,!!h.multiple,h.multiple?[]:"",!1))}d[ya]=h}catch(qe){Qt(t,t.return,qe)}}break;case 6:if(vi(i,t),Ni(t),c&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(qe){Qt(t,t.return,qe)}}break;case 3:if(vi(i,t),Ni(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ca(i.containerInfo)}catch(qe){Qt(t,t.return,qe)}break;case 4:vi(i,t),Ni(t);break;case 13:vi(i,t),Ni(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(pu=Xt())),c&4&&bp(t);break;case 22:if(_e=a!==null&&a.memoizedState!==null,t.mode&1?(bn=(ue=bn)||_e,vi(i,t),bn=ue):vi(i,t),Ni(t),c&8192){if(ue=t.memoizedState!==null,(t.stateNode.isHidden=ue)&&!_e&&(t.mode&1)!==0)for(He=t,_e=t.child;_e!==null;){for(Se=He=_e;He!==null;){switch(ve=He,ke=ve.child,ve.tag){case 0:case 11:case 14:case 15:Na(4,ve,ve.return);break;case 1:Cs(ve,ve.return);var je=ve.stateNode;if(typeof je.componentWillUnmount=="function"){c=ve,a=ve.return;try{i=c,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch(qe){Qt(c,a,qe)}}break;case 5:Cs(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Rp(Se);continue}}ke!==null?(ke.return=ve,He=ke):Rp(Se)}_e=_e.sibling}e:for(_e=null,Se=t;;){if(Se.tag===5){if(_e===null){_e=Se;try{d=Se.stateNode,ue?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(O=Se.stateNode,z=Se.memoizedProps.style,b=z!=null&&z.hasOwnProperty("display")?z.display:null,O.style.display=pe("display",b))}catch(qe){Qt(t,t.return,qe)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=ue?"":Se.memoizedProps}catch(qe){Qt(t,t.return,qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:vi(i,t),Ni(t),c&4&&bp(t);break;case 21:break;default:vi(i,t),Ni(t)}}function Ni(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(Mp(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(fe(d,""),c.flags&=-33);var h=Ep(t);du(t,h,d);break;case 3:case 4:var b=c.stateNode.containerInfo,O=Ep(t);uu(t,O,b);break;default:throw Error(n(161))}}catch(z){Qt(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function $x(t,i,a){He=t,Ap(t)}function Ap(t,i,a){for(var c=(t.mode&1)!==0;He!==null;){var d=He,h=d.child;if(d.tag===22&&c){var b=d.memoizedState!==null||Vo;if(!b){var O=d.alternate,z=O!==null&&O.memoizedState!==null||bn;O=Vo;var ue=bn;if(Vo=b,(bn=z)&&!ue)for(He=d;He!==null;)b=He,z=b.child,b.tag===22&&b.memoizedState!==null?Pp(d):z!==null?(z.return=b,He=z):Pp(d);for(;h!==null;)He=h,Ap(h),h=h.sibling;He=d,Vo=O,bn=ue}Cp(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,He=h):Cp(t)}}function Cp(t){for(;He!==null;){var i=He;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:bn||Go(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!bn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:gi(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Rh(i,h,c);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Rh(i,b,a)}break;case 5:var O=i.stateNode;if(a===null&&i.flags&4){a=O;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var _e=ue.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&ca(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}bn||i.flags&512&&cu(i)}catch(ve){Qt(i,i.return,ve)}}if(i===t){He=null;break}if(a=i.sibling,a!==null){a.return=i.return,He=a;break}He=i.return}}function Rp(t){for(;He!==null;){var i=He;if(i===t){He=null;break}var a=i.sibling;if(a!==null){a.return=i.return,He=a;break}He=i.return}}function Pp(t){for(;He!==null;){var i=He;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Go(4,i)}catch(z){Qt(i,a,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(z){Qt(i,d,z)}}var h=i.return;try{cu(i)}catch(z){Qt(i,h,z)}break;case 5:var b=i.return;try{cu(i)}catch(z){Qt(i,b,z)}}}catch(z){Qt(i,i.return,z)}if(i===t){He=null;break}var O=i.sibling;if(O!==null){O.return=i.return,He=O;break}He=i.return}}var Kx=Math.ceil,Wo=C.ReactCurrentDispatcher,fu=C.ReactCurrentOwner,ri=C.ReactCurrentBatchConfig,bt=0,hn=null,rn=null,vn=0,Xn=0,Rs=fr(0),cn=0,La=null,Gr=0,jo=0,hu=0,Da=null,kn=null,pu=0,Ps=1/0,$i=null,Xo=!1,mu=null,vr=null,qo=!1,_r=null,Yo=0,Ia=0,gu=null,$o=-1,Ko=0;function Nn(){return(bt&6)!==0?Xt():$o!==-1?$o:$o=Xt()}function yr(t){return(t.mode&1)===0?1:(bt&2)!==0&&vn!==0?vn&-vn:Dx.transition!==null?(Ko===0&&(Ko=on()),Ko):(t=ft,t!==0||(t=window.event,t=t===void 0?16:Lf(t.type)),t)}function _i(t,i,a,c){if(50<Ia)throw Ia=0,gu=null,Error(n(185));en(t,a,c),((bt&2)===0||t!==hn)&&(t===hn&&((bt&2)===0&&(jo|=a),cn===4&&Sr(t,vn)),Bn(t,c),a===1&&bt===0&&(i.mode&1)===0&&(Ps=Xt()+500,wo&&pr()))}function Bn(t,i){var a=t.callbackNode;Ot(t,i);var c=_t(t,t===hn?vn:0);if(c===0)a!==null&&na(a),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(a!=null&&na(a),i===1)t.tag===0?Lx(Lp.bind(null,t)):xh(Lp.bind(null,t)),Cx(function(){(bt&6)===0&&pr()}),a=null;else{switch(ui(c)){case 1:a=ia;break;case 4:a=ra;break;case 16:a=T;break;case 536870912:a=ce;break;default:a=T}a=zp(a,Np.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Np(t,i){if($o=-1,Ko=0,(bt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Ns()&&t.callbackNode!==a)return null;var c=_t(t,t===hn?vn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Zo(t,c);else{i=c;var d=bt;bt|=2;var h=Ip();(hn!==t||vn!==i)&&($i=null,Ps=Xt()+500,jr(t,i));do try{Qx();break}catch(O){Dp(t,O)}while(!0);Ic(),Wo.current=h,bt=d,rn!==null?i=0:(hn=null,vn=0,i=cn)}if(i!==0){if(i===2&&(d=Nt(t),d!==0&&(c=d,i=xu(t,d))),i===1)throw a=La,jr(t,0),Sr(t,c),Bn(t,Xt()),a;if(i===6)Sr(t,c);else{if(d=t.current.alternate,(c&30)===0&&!Zx(d)&&(i=Zo(t,c),i===2&&(h=Nt(t),h!==0&&(c=h,i=xu(t,h))),i===1))throw a=La,jr(t,0),Sr(t,c),Bn(t,Xt()),a;switch(t.finishedWork=d,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Xr(t,kn,$i);break;case 3:if(Sr(t,c),(c&130023424)===c&&(i=pu+500-Xt(),10<i)){if(_t(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){Nn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Ec(Xr.bind(null,t,kn,$i),i);break}Xr(t,kn,$i);break;case 4:if(Sr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,d=-1;0<c;){var b=31-Ne(c);h=1<<b,b=i[b],b>d&&(d=b),c&=~h}if(c=d,c=Xt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Kx(c/1960))-c,10<c){t.timeoutHandle=Ec(Xr.bind(null,t,kn,$i),c);break}Xr(t,kn,$i);break;case 5:Xr(t,kn,$i);break;default:throw Error(n(329))}}}return Bn(t,Xt()),t.callbackNode===a?Np.bind(null,t):null}function xu(t,i){var a=Da;return t.current.memoizedState.isDehydrated&&(jr(t,i).flags|=256),t=Zo(t,i),t!==2&&(i=kn,kn=a,i!==null&&vu(i)),t}function vu(t){kn===null?kn=t:kn.push.apply(kn,t)}function Zx(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],h=d.getSnapshot;d=d.value;try{if(!pi(h(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Sr(t,i){for(i&=~hu,i&=~jo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Ne(i),c=1<<a;t[a]=-1,i&=~c}}function Lp(t){if((bt&6)!==0)throw Error(n(327));Ns();var i=_t(t,0);if((i&1)===0)return Bn(t,Xt()),null;var a=Zo(t,i);if(t.tag!==0&&a===2){var c=Nt(t);c!==0&&(i=c,a=xu(t,c))}if(a===1)throw a=La,jr(t,0),Sr(t,i),Bn(t,Xt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Xr(t,kn,$i),Bn(t,Xt()),null}function _u(t,i){var a=bt;bt|=1;try{return t(i)}finally{bt=a,bt===0&&(Ps=Xt()+500,wo&&pr())}}function Wr(t){_r!==null&&_r.tag===0&&(bt&6)===0&&Ns();var i=bt;bt|=1;var a=ri.transition,c=ft;try{if(ri.transition=null,ft=1,t)return t()}finally{ft=c,ri.transition=a,bt=i,(bt&6)===0&&pr()}}function yu(){Xn=Rs.current,Ht(Rs)}function jr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Ax(a)),rn!==null)for(a=rn.return;a!==null;){var c=a;switch(Rc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Mo();break;case 3:Ts(),Ht(Un),Ht(Mn),Vc();break;case 5:zc(c);break;case 4:Ts();break;case 13:Ht(qt);break;case 19:Ht(qt);break;case 10:Uc(c.type._context);break;case 22:case 23:yu()}a=a.return}if(hn=t,rn=t=Mr(t.current,null),vn=Xn=i,cn=0,La=null,hu=jo=Gr=0,kn=Da=null,zr!==null){for(i=0;i<zr.length;i++)if(a=zr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,h=a.pending;if(h!==null){var b=h.next;h.next=d,c.next=b}a.pending=c}zr=null}return t}function Dp(t,i){do{var a=rn;try{if(Ic(),Io.current=ko,Uo){for(var c=Yt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Uo=!1}if(Vr=0,fn=ln=Yt=null,Ta=!1,Aa=0,fu.current=null,a===null||a.return===null){cn=1,La=i,rn=null;break}e:{var h=t,b=a.return,O=a,z=i;if(i=vn,O.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ue=z,_e=O,Se=_e.tag;if((_e.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=_e.alternate;ve?(_e.updateQueue=ve.updateQueue,_e.memoizedState=ve.memoizedState,_e.lanes=ve.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var ke=rp(b);if(ke!==null){ke.flags&=-257,sp(ke,b,O,h,i),ke.mode&1&&ip(h,ue,i),i=ke,z=ue;var je=i.updateQueue;if(je===null){var qe=new Set;qe.add(z),i.updateQueue=qe}else je.add(z);break e}else{if((i&1)===0){ip(h,ue,i),Su();break e}z=Error(n(426))}}else if(jt&&O.mode&1){var tn=rp(b);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),sp(tn,b,O,h,i),Lc(As(z,O));break e}}h=z=As(z,O),cn!==4&&(cn=2),Da===null?Da=[h]:Da.push(h),h=b;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var ie=tp(h,z,i);Ch(h,ie);break e;case 1:O=z;var X=h.type,ae=h.stateNode;if((h.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(vr===null||!vr.has(ae)))){h.flags|=65536,i&=-i,h.lanes|=i;var we=np(h,O,i);Ch(h,we);break e}}h=h.return}while(h!==null)}Fp(a)}catch(Je){i=Je,rn===a&&a!==null&&(rn=a=a.return);continue}break}while(!0)}function Ip(){var t=Wo.current;return Wo.current=ko,t===null?ko:t}function Su(){(cn===0||cn===3||cn===2)&&(cn=4),hn===null||(Gr&268435455)===0&&(jo&268435455)===0||Sr(hn,vn)}function Zo(t,i){var a=bt;bt|=2;var c=Ip();(hn!==t||vn!==i)&&($i=null,jr(t,i));do try{Jx();break}catch(d){Dp(t,d)}while(!0);if(Ic(),bt=a,Wo.current=c,rn!==null)throw Error(n(261));return hn=null,vn=0,cn}function Jx(){for(;rn!==null;)Up(rn)}function Qx(){for(;rn!==null&&!so();)Up(rn)}function Up(t){var i=Bp(t.alternate,t,Xn);t.memoizedProps=t.pendingProps,i===null?Fp(t):rn=i,fu.current=null}function Fp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=jx(a,i,Xn),a!==null){rn=a;return}}else{if(a=Xx(a,i),a!==null){a.flags&=32767,rn=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{cn=6,rn=null;return}}if(i=i.sibling,i!==null){rn=i;return}rn=i=t}while(i!==null);cn===0&&(cn=5)}function Xr(t,i,a){var c=ft,d=ri.transition;try{ri.transition=null,ft=1,ev(t,i,a,c)}finally{ri.transition=d,ft=c}return null}function ev(t,i,a,c){do Ns();while(_r!==null);if((bt&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=a.lanes|a.childLanes;if(yt(t,h),t===hn&&(rn=hn=null,vn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||qo||(qo=!0,zp(T,function(){return Ns(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=ri.transition,ri.transition=null;var b=ft;ft=1;var O=bt;bt|=4,fu.current=null,Yx(t,a),Tp(a,t),yx(Sc),oo=!!yc,Sc=yc=null,t.current=a,$x(a),Ql(),bt=O,ft=b,ri.transition=h}else t.current=a;if(qo&&(qo=!1,_r=t,Yo=d),h=t.pendingLanes,h===0&&(vr=null),De(a.stateNode),Bn(t,Xt()),i!==null)for(c=t.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Xo)throw Xo=!1,t=mu,mu=null,t;return(Yo&1)!==0&&t.tag!==0&&Ns(),h=t.pendingLanes,(h&1)!==0?t===gu?Ia++:(Ia=0,gu=t):Ia=0,pr(),null}function Ns(){if(_r!==null){var t=ui(Yo),i=ri.transition,a=ft;try{if(ri.transition=null,ft=16>t?16:t,_r===null)var c=!1;else{if(t=_r,_r=null,Yo=0,(bt&6)!==0)throw Error(n(331));var d=bt;for(bt|=4,He=t.current;He!==null;){var h=He,b=h.child;if((He.flags&16)!==0){var O=h.deletions;if(O!==null){for(var z=0;z<O.length;z++){var ue=O[z];for(He=ue;He!==null;){var _e=He;switch(_e.tag){case 0:case 11:case 15:Na(8,_e,h)}var Se=_e.child;if(Se!==null)Se.return=_e,He=Se;else for(;He!==null;){_e=He;var ve=_e.sibling,ke=_e.return;if(Sp(_e),_e===ue){He=null;break}if(ve!==null){ve.return=ke,He=ve;break}He=ke}}}var je=h.alternate;if(je!==null){var qe=je.child;if(qe!==null){je.child=null;do{var tn=qe.sibling;qe.sibling=null,qe=tn}while(qe!==null)}}He=h}}if((h.subtreeFlags&2064)!==0&&b!==null)b.return=h,He=b;else e:for(;He!==null;){if(h=He,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Na(9,h,h.return)}var ie=h.sibling;if(ie!==null){ie.return=h.return,He=ie;break e}He=h.return}}var X=t.current;for(He=X;He!==null;){b=He;var ae=b.child;if((b.subtreeFlags&2064)!==0&&ae!==null)ae.return=b,He=ae;else e:for(b=X;He!==null;){if(O=He,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:Go(9,O)}}catch(Je){Qt(O,O.return,Je)}if(O===b){He=null;break e}var we=O.sibling;if(we!==null){we.return=O.return,He=we;break e}He=O.return}}if(bt=d,pr(),J&&typeof J.onPostCommitFiberRoot=="function")try{J.onPostCommitFiberRoot(ne,t)}catch{}c=!0}return c}finally{ft=a,ri.transition=i}}return!1}function Op(t,i,a){i=As(a,i),i=tp(t,i,1),t=gr(t,i,1),i=Nn(),t!==null&&(en(t,1,i),Bn(t,i))}function Qt(t,i,a){if(t.tag===3)Op(t,t,a);else for(;i!==null;){if(i.tag===3){Op(i,t,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(vr===null||!vr.has(c))){t=As(a,t),t=np(i,t,1),i=gr(i,t,1),t=Nn(),i!==null&&(en(i,1,t),Bn(i,t));break}}i=i.return}}function tv(t,i,a){var c=t.pingCache;c!==null&&c.delete(i),i=Nn(),t.pingedLanes|=t.suspendedLanes&a,hn===t&&(vn&a)===a&&(cn===4||cn===3&&(vn&130023424)===vn&&500>Xt()-pu?jr(t,0):hu|=a),Bn(t,i)}function kp(t,i){i===0&&((t.mode&1)===0?i=1:(i=lt,lt<<=1,(lt&130023424)===0&&(lt=4194304)));var a=Nn();t=Xi(t,i),t!==null&&(en(t,i,a),Bn(t,a))}function nv(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),kp(t,a)}function iv(t,i){var a=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),kp(t,a)}var Bp;Bp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Un.current)On=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return On=!1,Wx(t,i,a);On=(t.flags&131072)!==0}else On=!1,jt&&(i.flags&1048576)!==0&&vh(i,To,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ho(t,i),t=i.pendingProps;var d=_s(i,Mn.current);bs(i,a),d=jc(null,i,c,t,d,a);var h=Xc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Fn(c)?(h=!0,Eo(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,kc(i),d.updater=Bo,i.stateNode=d,d._reactInternals=i,Jc(i,c,t,a),i=nu(null,i,c,!0,h,a)):(i.tag=0,jt&&h&&Cc(i),Pn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Ho(t,i),t=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=sv(c),t=gi(c,t),d){case 0:i=tu(null,i,c,t,a);break e;case 1:i=dp(null,i,c,t,a);break e;case 11:i=ap(null,i,c,t,a);break e;case 14:i=op(null,i,c,gi(c.type,t),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:gi(c,d),tu(t,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:gi(c,d),dp(t,i,c,d,a);case 3:e:{if(fp(i),t===null)throw Error(n(387));c=i.pendingProps,h=i.memoizedState,d=h.element,Ah(t,i),Lo(i,c,null,a);var b=i.memoizedState;if(c=b.element,h.isDehydrated)if(h={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=As(Error(n(423)),i),i=hp(t,i,c,a,d);break e}else if(c!==d){d=As(Error(n(424)),i),i=hp(t,i,c,a,d);break e}else for(jn=dr(i.stateNode.containerInfo.firstChild),Wn=i,jt=!0,mi=null,a=bh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ms(),c===d){i=Yi(t,i,a);break e}Pn(t,i,c,a)}i=i.child}return i;case 5:return Ph(i),t===null&&Nc(i),c=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,b=d.children,Mc(c,d)?b=null:h!==null&&Mc(c,h)&&(i.flags|=32),up(t,i),Pn(t,i,b,a),i.child;case 6:return t===null&&Nc(i),null;case 13:return pp(t,i,a);case 4:return Bc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=Es(i,null,c,a):Pn(t,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:gi(c,d),ap(t,i,c,d,a);case 7:return Pn(t,i,i.pendingProps,a),i.child;case 8:return Pn(t,i,i.pendingProps.children,a),i.child;case 12:return Pn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,h=i.memoizedProps,b=d.value,kt(Ro,c._currentValue),c._currentValue=b,h!==null)if(pi(h.value,b)){if(h.children===d.children&&!Un.current){i=Yi(t,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var O=h.dependencies;if(O!==null){b=h.child;for(var z=O.firstContext;z!==null;){if(z.context===c){if(h.tag===1){z=qi(-1,a&-a),z.tag=2;var ue=h.updateQueue;if(ue!==null){ue=ue.shared;var _e=ue.pending;_e===null?z.next=z:(z.next=_e.next,_e.next=z),ue.pending=z}}h.lanes|=a,z=h.alternate,z!==null&&(z.lanes|=a),Fc(h.return,a,i),O.lanes|=a;break}z=z.next}}else if(h.tag===10)b=h.type===i.type?null:h.child;else if(h.tag===18){if(b=h.return,b===null)throw Error(n(341));b.lanes|=a,O=b.alternate,O!==null&&(O.lanes|=a),Fc(b,a,i),b=h.sibling}else b=h.child;if(b!==null)b.return=h;else for(b=h;b!==null;){if(b===i){b=null;break}if(h=b.sibling,h!==null){h.return=b.return,b=h;break}b=b.return}h=b}Pn(t,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,bs(i,a),d=ni(d),c=c(d),i.flags|=1,Pn(t,i,c,a),i.child;case 14:return c=i.type,d=gi(c,i.pendingProps),d=gi(c.type,d),op(t,i,c,d,a);case 15:return lp(t,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:gi(c,d),Ho(t,i),i.tag=1,Fn(c)?(t=!0,Eo(i)):t=!1,bs(i,a),Qh(i,c,d),Jc(i,c,d,a),nu(null,i,c,!0,t,a);case 19:return gp(t,i,a);case 22:return cp(t,i,a)}throw Error(n(156,i.tag))};function zp(t,i){return Ur(t,i)}function rv(t,i,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(t,i,a,c){return new rv(t,i,a,c)}function Mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sv(t){if(typeof t=="function")return Mu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Z)return 11;if(t===ee)return 14}return 2}function Mr(t,i){var a=t.alternate;return a===null?(a=si(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Jo(t,i,a,c,d,h){var b=2;if(c=t,typeof t=="function")Mu(t)&&(b=1);else if(typeof t=="string")b=5;else e:switch(t){case F:return qr(a.children,d,h,i);case w:b=8,d|=8;break;case I:return t=si(12,a,i,d|2),t.elementType=I,t.lanes=h,t;case se:return t=si(13,a,i,d),t.elementType=se,t.lanes=h,t;case q:return t=si(19,a,i,d),t.elementType=q,t.lanes=h,t;case te:return Qo(a,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:b=10;break e;case W:b=9;break e;case Z:b=11;break e;case ee:b=14;break e;case he:b=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=si(b,a,i,d),i.elementType=t,i.type=c,i.lanes=h,i}function qr(t,i,a,c){return t=si(7,t,c,i),t.lanes=a,t}function Qo(t,i,a,c){return t=si(22,t,c,i),t.elementType=te,t.lanes=a,t.stateNode={isHidden:!1},t}function Eu(t,i,a){return t=si(6,t,null,i),t.lanes=a,t}function wu(t,i,a){return i=si(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function av(t,i,a,c,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oe(0),this.expirationTimes=Oe(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oe(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function bu(t,i,a,c,d,h,b,O,z){return t=new av(t,i,a,O,z),i===1?(i=1,h===!0&&(i|=8)):i=0,h=si(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(h),t}function ov(t,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:t,containerInfo:i,implementation:a}}function Hp(t){if(!t)return hr;t=t._reactInternals;e:{if(Rn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Fn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Fn(a))return mh(t,a,i)}return i}function Vp(t,i,a,c,d,h,b,O,z){return t=bu(a,c,!0,t,d,h,b,O,z),t.context=Hp(null),a=t.current,c=Nn(),d=yr(a),h=qi(c,d),h.callback=i??null,gr(a,h,d),t.current.lanes=d,en(t,d,c),Bn(t,c),t}function el(t,i,a,c){var d=i.current,h=Nn(),b=yr(d);return a=Hp(a),i.context===null?i.context=a:i.pendingContext=a,i=qi(h,b),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=gr(d,i,b),t!==null&&(_i(t,d,b,h),No(t,d,b)),b}function tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Tu(t,i){Gp(t,i),(t=t.alternate)&&Gp(t,i)}function lv(){return null}var Wp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Au(t){this._internalRoot=t}nl.prototype.render=Au.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));el(t,i,null,null)},nl.prototype.unmount=Au.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Wr(function(){el(null,t,null,null)}),i[Vi]=null}};function nl(t){this._internalRoot=t}nl.prototype.unstable_scheduleHydration=function(t){if(t){var i=di();t={blockedOn:null,target:t,priority:i};for(var a=0;a<lr.length&&i!==0&&i<lr[a].priority;a++);lr.splice(a,0,t),a===0&&Pf(t)}};function Cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function il(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jp(){}function cv(t,i,a,c,d){if(d){if(typeof c=="function"){var h=c;c=function(){var ue=tl(b);h.call(ue)}}var b=Vp(i,c,t,0,null,!1,!1,"",jp);return t._reactRootContainer=b,t[Vi]=b.current,va(t.nodeType===8?t.parentNode:t),Wr(),b}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var O=c;c=function(){var ue=tl(z);O.call(ue)}}var z=bu(t,0,!1,null,null,!1,!1,"",jp);return t._reactRootContainer=z,t[Vi]=z.current,va(t.nodeType===8?t.parentNode:t),Wr(function(){el(i,z,a,c)}),z}function rl(t,i,a,c,d){var h=a._reactRootContainer;if(h){var b=h;if(typeof d=="function"){var O=d;d=function(){var z=tl(b);O.call(z)}}el(i,b,t,d)}else b=cv(a,i,t,d,c);return tl(b)}Hi=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=Be(i.pendingLanes);a!==0&&(Sn(i,a|1),Bn(i,Xt()),(bt&6)===0&&(Ps=Xt()+500,pr()))}break;case 13:Wr(function(){var c=Xi(t,1);if(c!==null){var d=Nn();_i(c,t,1,d)}}),Tu(t,1)}},Ct=function(t){if(t.tag===13){var i=Xi(t,134217728);if(i!==null){var a=Nn();_i(i,t,134217728,a)}Tu(t,134217728)}},Wt=function(t){if(t.tag===13){var i=yr(t),a=Xi(t,i);if(a!==null){var c=Nn();_i(a,t,i,c)}Tu(t,i)}},di=function(){return ft},It=function(t,i){var a=ft;try{return ft=t,i()}finally{ft=a}},et=function(t,i,a){switch(i){case"input":if(dt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==t&&c.form===t.form){var d=So(c);if(!d)throw Error(n(90));ct(c),dt(c,d)}}}break;case"textarea":an(t,a);break;case"select":i=a.value,i!=null&&Lt(t,!!a.multiple,i,!1)}},Ue=_u,xe=Wr;var uv={usingClientEntryPoint:!1,Events:[Sa,xs,So,me,Ce,_u]},Ua={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dv={bundleType:Ua.bundleType,version:Ua.version,rendererPackageName:Ua.rendererPackageName,rendererConfig:Ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ir(t),t===null?null:t.stateNode},findFiberByHostInstance:Ua.findFiberByHostInstance||lv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{ne=sl.inject(dv),J=sl}catch{}}return zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uv,zn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cu(i))throw Error(n(200));return ov(t,i,null,a)},zn.createRoot=function(t,i){if(!Cu(t))throw Error(n(299));var a=!1,c="",d=Wp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=bu(t,1,!1,null,null,a,!1,c,d),t[Vi]=i.current,va(t.nodeType===8?t.parentNode:t),new Au(i)},zn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Ir(i),t=t===null?null:t.stateNode,t},zn.flushSync=function(t){return Wr(t)},zn.hydrate=function(t,i,a){if(!il(i))throw Error(n(200));return rl(null,t,i,!0,a)},zn.hydrateRoot=function(t,i,a){if(!Cu(t))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,d=!1,h="",b=Wp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=Vp(i,null,t,1,a??null,d,!1,h,b),t[Vi]=i.current,va(t),c)for(t=0;t<c.length;t++)a=c[t],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new nl(i)},zn.render=function(t,i,a){if(!il(i))throw Error(n(200));return rl(null,t,i,!1,a)},zn.unmountComponentAtNode=function(t){if(!il(t))throw Error(n(40));return t._reactRootContainer?(Wr(function(){rl(null,null,t,!1,function(){t._reactRootContainer=null,t[Vi]=null})}),!0):!1},zn.unstable_batchedUpdates=_u,zn.unstable_renderSubtreeIntoContainer=function(t,i,a,c){if(!il(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return rl(t,i,a,!1,c)},zn.version="18.3.1-next-f1338f8080-20240426",zn}var Qp;function _v(){if(Qp)return Nu.exports;Qp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Nu.exports=vv(),Nu.exports}var em;function yv(){if(em)return al;em=1;var s=_v();return al.createRoot=s.createRoot,al.hydrateRoot=s.hydrateRoot,al}var Sv=yv();const Mv=t0(Sv);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const af="186",Ev=0,tm=1,wv=2,Ll=1,bv=2,Wa=3,ns=0,Vn=1,tr=2,ir=0,qs=1,nm=2,im=3,rm=4,Tv=5,js=100,Av=101,Cv=102,Rv=103,Pv=104,Nv=200,Lv=201,Dv=202,Iv=203,i0=204,r0=205,Uv=206,Fv=207,Ov=208,kv=209,Bv=210,zv=211,Hv=212,Vv=213,Gv=214,pd=0,md=1,gd=2,qa=3,xd=4,vd=5,_d=6,yd=7,s0=0,Wv=1,jv=2,Oi=0,a0=1,o0=2,l0=3,c0=4,u0=5,d0=6,f0=7,h0=300,is=301,Ks=302,Iu=303,Uu=304,Xl=306,Sd=1e3,nr=1001,Md=1002,_n=1003,Xv=1004,ol=1005,Cn=1006,Fu=1007,es=1008,Kn=1009,p0=1010,m0=1011,Ya=1012,of=1013,ki=1014,Ui=1015,Bi=1016,lf=1017,cf=1018,$a=1020,g0=35902,x0=35899,v0=1021,_0=1022,wi=1023,sr=1026,ts=1027,y0=1028,uf=1029,rs=1030,df=1031,ff=1033,Dl=33776,Il=33777,Ul=33778,Fl=33779,Ed=35840,wd=35841,bd=35842,Td=35843,Ad=36196,Cd=37492,Rd=37496,Pd=37488,Nd=37489,kl=37490,Ld=37491,Dd=37808,Id=37809,Ud=37810,Fd=37811,Od=37812,kd=37813,Bd=37814,zd=37815,Hd=37816,Vd=37817,Gd=37818,Wd=37819,jd=37820,Xd=37821,qd=36492,Yd=36494,$d=36495,Kd=36283,Zd=36284,Bl=36285,Jd=36286,qv=3200,sm=0,Yv=1,Pr="",oi="srgb",zl="srgb-linear",Hl="linear",Ut="srgb",Ou=7680,$v=519,Kv=512,Zv=513,Jv=514,hf=515,Qv=516,e_=517,pf=518,t_=519,n_=35044,am="300 es",Fi=2e3,Ka=2001;function i_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function r_(){const s=Vl("canvas");return s.style.display="block",s}const om={};function lm(...s){const e="THREE."+s.shift();console.log(e,...s)}function S0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function st(...s){s=S0(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function Pt(...s){s=S0(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function Ys(...s){const e=s.join(" ");e in om||(om[e]=!0,st(...s))}function s_(s,e,n){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}const a_={[pd]:md,[gd]:_d,[xd]:yd,[qa]:vd,[md]:pd,[_d]:gd,[yd]:xd,[vd]:qa};class os{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ku=Math.PI/180,Qd=180/Math.PI;function Ja(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[n&63|128]+Tn[n>>8&255]+"-"+Tn[n>>16&255]+Tn[n>>24&255]+Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]).toLowerCase()}function Mt(s,e,n){return Math.max(e,Math.min(n,s))}function o_(s,e){return(s%e+e)%e}function Bu(s,e,n){return(1-n)*s+n*e}function Oa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const wf=class wf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wf.prototype.isVector2=!0;let xt=wf;class Js{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,u,f){let p=r[o+0],m=r[o+1],v=r[o+2],S=r[o+3],x=l[u+0],E=l[u+1],A=l[u+2],R=l[u+3];if(S!==R||p!==x||m!==E||v!==A){let y=p*x+m*E+v*A+S*R;y<0&&(x=-x,E=-E,A=-A,R=-R,y=-y);let _=1-f;if(y<.9995){const N=Math.acos(y),k=Math.sin(N);_=Math.sin(_*N)/k,f=Math.sin(f*N)/k,p=p*_+x*f,m=m*_+E*f,v=v*_+A*f,S=S*_+R*f}else{p=p*_+x*f,m=m*_+E*f,v=v*_+A*f,S=S*_+R*f;const N=1/Math.sqrt(p*p+m*m+v*v+S*S);p*=N,m*=N,v*=N,S*=N}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,o,l,u){const f=r[o],p=r[o+1],m=r[o+2],v=r[o+3],S=l[u],x=l[u+1],E=l[u+2],A=l[u+3];return e[n]=f*A+v*S+p*E-m*x,e[n+1]=p*A+v*x+m*S-f*E,e[n+2]=m*A+v*E+f*x-p*S,e[n+3]=v*A-f*S-p*x-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,p=Math.sin,m=f(r/2),v=f(o/2),S=f(l/2),x=p(r/2),E=p(o/2),A=p(l/2);switch(u){case"XYZ":this._x=x*v*S+m*E*A,this._y=m*E*S-x*v*A,this._z=m*v*A+x*E*S,this._w=m*v*S-x*E*A;break;case"YXZ":this._x=x*v*S+m*E*A,this._y=m*E*S-x*v*A,this._z=m*v*A-x*E*S,this._w=m*v*S+x*E*A;break;case"ZXY":this._x=x*v*S-m*E*A,this._y=m*E*S+x*v*A,this._z=m*v*A+x*E*S,this._w=m*v*S-x*E*A;break;case"ZYX":this._x=x*v*S-m*E*A,this._y=m*E*S+x*v*A,this._z=m*v*A-x*E*S,this._w=m*v*S+x*E*A;break;case"YZX":this._x=x*v*S+m*E*A,this._y=m*E*S+x*v*A,this._z=m*v*A-x*E*S,this._w=m*v*S-x*E*A;break;case"XZY":this._x=x*v*S-m*E*A,this._y=m*E*S-x*v*A,this._z=m*v*A+x*E*S,this._w=m*v*S+x*E*A;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],u=n[1],f=n[5],p=n[9],m=n[2],v=n[6],S=n[10],x=r+f+S;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(v-p)*E,this._y=(l-m)*E,this._z=(u-o)*E}else if(r>f&&r>S){const E=2*Math.sqrt(1+r-f-S);this._w=(v-p)/E,this._x=.25*E,this._y=(o+u)/E,this._z=(l+m)/E}else if(f>S){const E=2*Math.sqrt(1+f-r-S);this._w=(l-m)/E,this._x=(o+u)/E,this._y=.25*E,this._z=(p+v)/E}else{const E=2*Math.sqrt(1+S-r-f);this._w=(u-o)/E,this._x=(l+m)/E,this._y=(p+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,u=e._w,f=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+u*f+o*m-l*p,this._y=o*v+u*p+l*f-r*m,this._z=l*v+u*m+r*p-o*f,this._w=u*v-r*f-o*p-l*m,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let p=1-n;if(f<.9995){const m=Math.acos(f),v=Math.sin(m);p=Math.sin(p*m)/v,n=Math.sin(n*m)/v,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bf=class bf{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(cm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(cm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,p=e.w,m=2*(u*o-f*r),v=2*(f*n-l*o),S=2*(l*r-u*n);return this.x=n+p*m+u*S-f*v,this.y=r+p*v+f*m-l*S,this.z=o+p*S+l*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,u=n.x,f=n.y,p=n.z;return this.x=o*p-l*f,this.y=l*u-r*p,this.z=r*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return zu.copy(this).projectOnVector(e),this.sub(zu)}reflect(e){return this.sub(zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bf.prototype.isVector3=!0;let Q=bf;const zu=new Q,cm=new Js,Tf=class Tf{constructor(e,n,r,o,l,u,f,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,f,p,m)}set(e,n,r,o,l,u,f,p,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=n,v[4]=l,v[5]=p,v[6]=r,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],f=r[3],p=r[6],m=r[1],v=r[4],S=r[7],x=r[2],E=r[5],A=r[8],R=o[0],y=o[3],_=o[6],N=o[1],k=o[4],C=o[7],L=o[2],P=o[5],F=o[8];return l[0]=u*R+f*N+p*L,l[3]=u*y+f*k+p*P,l[6]=u*_+f*C+p*F,l[1]=m*R+v*N+S*L,l[4]=m*y+v*k+S*P,l[7]=m*_+v*C+S*F,l[2]=x*R+E*N+A*L,l[5]=x*y+E*k+A*P,l[8]=x*_+E*C+A*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],m=e[7],v=e[8];return n*u*v-n*f*m-r*l*v+r*f*p+o*l*m-o*u*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],m=e[7],v=e[8],S=v*u-f*m,x=f*p-v*l,E=m*l-u*p,A=n*S+r*x+o*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=S*R,e[1]=(o*m-v*r)*R,e[2]=(f*r-o*u)*R,e[3]=x*R,e[4]=(v*n-o*p)*R,e[5]=(o*l-f*n)*R,e[6]=E*R,e[7]=(r*p-m*n)*R,e[8]=(u*n-r*l)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,u,f){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*u+m*f)+u+e,-o*m,o*p,-o*(-m*u+p*f)+f+n,0,0,1),this}scale(e,n){return Ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hu.makeScale(e,n)),this}rotate(e){return Ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hu.makeRotation(-e)),this}translate(e,n){return Ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Tf.prototype.isMatrix3=!0;let ot=Tf;const Hu=new ot,um=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dm=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function l_(){const s={enabled:!0,workingColorSpace:zl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ut&&(o.r=rr(o.r),o.g=rr(o.g),o.b=rr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ut&&(o.r=$s(o.r),o.g=$s(o.g),o.b=$s(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Pr?Hl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[zl]:{primaries:e,whitePoint:r,transfer:Hl,toXYZ:um,fromXYZ:dm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:r,transfer:Ut,toXYZ:um,fromXYZ:dm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),s}const St=l_();function rr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ls;class c_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ls===void 0&&(Ls=Vl("canvas")),Ls.width=e.width,Ls.height=e.height;const o=Ls.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ls}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=rr(l[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(rr(n[r]/255)*255):n[r]=rr(n[r]);return{data:n,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let u_=0;class mf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Vu(o[u].image)):l.push(Vu(o[u]))}else l=Vu(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function Vu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?c_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let d_=0;const Gu=new Q;class Dn extends os{constructor(e=Dn.DEFAULT_IMAGE,n=Dn.DEFAULT_MAPPING,r=nr,o=nr,l=Cn,u=es,f=wi,p=Kn,m=Dn.DEFAULT_ANISOTROPY,v=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=Ja(),this.name="",this.source=new mf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gu).x}get height(){return this.source.getSize(Gu).y}get depth(){return this.source.getSize(Gu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){st(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==h0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sd:e.x=e.x-Math.floor(e.x);break;case nr:e.x=e.x<0?0:1;break;case Md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sd:e.y=e.y-Math.floor(e.y);break;case nr:e.y=e.y<0?0:1;break;case Md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=h0;Dn.DEFAULT_ANISOTROPY=1;const Af=class Af{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const p=e.elements,m=p[0],v=p[4],S=p[8],x=p[1],E=p[5],A=p[9],R=p[2],y=p[6],_=p[10];if(Math.abs(v-x)<.01&&Math.abs(S-R)<.01&&Math.abs(A-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(S+R)<.1&&Math.abs(A+y)<.1&&Math.abs(m+E+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const k=(m+1)/2,C=(E+1)/2,L=(_+1)/2,P=(v+x)/4,F=(S+R)/4,w=(A+y)/4;return k>C&&k>L?k<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(k),o=P/r,l=F/r):C>L?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=P/o,l=w/o):L<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(L),r=F/l,o=w/l),this.set(r,o,l,n),this}let N=Math.sqrt((y-A)*(y-A)+(S-R)*(S-R)+(x-v)*(x-v));return Math.abs(N)<.001&&(N=1),this.x=(y-A)/N,this.y=(S-R)/N,this.z=(x-v)/N,this.w=Math.acos((m+E+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this.w=Mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this.w=Mt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Af.prototype.isVector4=!0;let $t=Af;class f_ extends os{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new $t(0,0,e,n),this.scissorTest=!1,this.viewport=new $t(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},l=new Dn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new mf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends f_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class M0 extends Dn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=_n,this.minFilter=_n,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class h_ extends Dn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=_n,this.minFilter=_n,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const jl=class jl{constructor(e,n,r,o,l,u,f,p,m,v,S,x,E,A,R,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,f,p,m,v,S,x,E,A,R,y)}set(e,n,r,o,l,u,f,p,m,v,S,x,E,A,R,y){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=f,_[13]=p,_[2]=m,_[6]=v,_[10]=S,_[14]=x,_[3]=E,_[7]=A,_[11]=R,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jl().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ds.setFromMatrixColumn(e,0).length(),l=1/Ds.setFromMatrixColumn(e,1).length(),u=1/Ds.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),p=Math.cos(o),m=Math.sin(o),v=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const x=u*v,E=u*S,A=f*v,R=f*S;n[0]=p*v,n[4]=-p*S,n[8]=m,n[1]=E+A*m,n[5]=x-R*m,n[9]=-f*p,n[2]=R-x*m,n[6]=A+E*m,n[10]=u*p}else if(e.order==="YXZ"){const x=p*v,E=p*S,A=m*v,R=m*S;n[0]=x+R*f,n[4]=A*f-E,n[8]=u*m,n[1]=u*S,n[5]=u*v,n[9]=-f,n[2]=E*f-A,n[6]=R+x*f,n[10]=u*p}else if(e.order==="ZXY"){const x=p*v,E=p*S,A=m*v,R=m*S;n[0]=x-R*f,n[4]=-u*S,n[8]=A+E*f,n[1]=E+A*f,n[5]=u*v,n[9]=R-x*f,n[2]=-u*m,n[6]=f,n[10]=u*p}else if(e.order==="ZYX"){const x=u*v,E=u*S,A=f*v,R=f*S;n[0]=p*v,n[4]=A*m-E,n[8]=x*m+R,n[1]=p*S,n[5]=R*m+x,n[9]=E*m-A,n[2]=-m,n[6]=f*p,n[10]=u*p}else if(e.order==="YZX"){const x=u*p,E=u*m,A=f*p,R=f*m;n[0]=p*v,n[4]=R-x*S,n[8]=A*S+E,n[1]=S,n[5]=u*v,n[9]=-f*v,n[2]=-m*v,n[6]=E*S+A,n[10]=x-R*S}else if(e.order==="XZY"){const x=u*p,E=u*m,A=f*p,R=f*m;n[0]=p*v,n[4]=-S,n[8]=m*v,n[1]=x*S+R,n[5]=u*v,n[9]=E*S-A,n[2]=A*S-E,n[6]=f*v,n[10]=R*S+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p_,e,m_)}lookAt(e,n,r){const o=this.elements;return qn.subVectors(e,n),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),wr.crossVectors(r,qn),wr.lengthSq()===0&&(Math.abs(r.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),wr.crossVectors(r,qn)),wr.normalize(),ll.crossVectors(qn,wr),o[0]=wr.x,o[4]=ll.x,o[8]=qn.x,o[1]=wr.y,o[5]=ll.y,o[9]=qn.y,o[2]=wr.z,o[6]=ll.z,o[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],f=r[4],p=r[8],m=r[12],v=r[1],S=r[5],x=r[9],E=r[13],A=r[2],R=r[6],y=r[10],_=r[14],N=r[3],k=r[7],C=r[11],L=r[15],P=o[0],F=o[4],w=o[8],I=o[12],B=o[1],W=o[5],Z=o[9],se=o[13],q=o[2],ee=o[6],he=o[10],te=o[14],K=o[3],Y=o[7],H=o[11],D=o[15];return l[0]=u*P+f*B+p*q+m*K,l[4]=u*F+f*W+p*ee+m*Y,l[8]=u*w+f*Z+p*he+m*H,l[12]=u*I+f*se+p*te+m*D,l[1]=v*P+S*B+x*q+E*K,l[5]=v*F+S*W+x*ee+E*Y,l[9]=v*w+S*Z+x*he+E*H,l[13]=v*I+S*se+x*te+E*D,l[2]=A*P+R*B+y*q+_*K,l[6]=A*F+R*W+y*ee+_*Y,l[10]=A*w+R*Z+y*he+_*H,l[14]=A*I+R*se+y*te+_*D,l[3]=N*P+k*B+C*q+L*K,l[7]=N*F+k*W+C*ee+L*Y,l[11]=N*w+k*Z+C*he+L*H,l[15]=N*I+k*se+C*te+L*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],p=e[9],m=e[13],v=e[2],S=e[6],x=e[10],E=e[14],A=e[3],R=e[7],y=e[11],_=e[15],N=p*E-m*x,k=f*E-m*S,C=f*x-p*S,L=u*E-m*v,P=u*x-p*v,F=u*S-f*v;return n*(R*N-y*k+_*C)-r*(A*N-y*L+_*P)+o*(A*k-R*L+_*F)-l*(A*C-R*P+y*F)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],p=e[2],m=e[6],v=e[10];return n*(u*v-f*m)-r*(l*v-f*p)+o*(l*m-u*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],m=e[7],v=e[8],S=e[9],x=e[10],E=e[11],A=e[12],R=e[13],y=e[14],_=e[15],N=n*f-r*u,k=n*p-o*u,C=n*m-l*u,L=r*p-o*f,P=r*m-l*f,F=o*m-l*p,w=v*R-S*A,I=v*y-x*A,B=v*_-E*A,W=S*y-x*R,Z=S*_-E*R,se=x*_-E*y,q=N*se-k*Z+C*W+L*B-P*I+F*w;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/q;return e[0]=(f*se-p*Z+m*W)*ee,e[1]=(o*Z-r*se-l*W)*ee,e[2]=(R*F-y*P+_*L)*ee,e[3]=(x*P-S*F-E*L)*ee,e[4]=(p*B-u*se-m*I)*ee,e[5]=(n*se-o*B+l*I)*ee,e[6]=(y*C-A*F-_*k)*ee,e[7]=(v*F-x*C+E*k)*ee,e[8]=(u*Z-f*B+m*w)*ee,e[9]=(r*B-n*Z-l*w)*ee,e[10]=(A*P-R*C+_*N)*ee,e[11]=(S*C-v*P-E*N)*ee,e[12]=(f*I-u*W-p*w)*ee,e[13]=(n*W-r*I+o*w)*ee,e[14]=(R*k-A*L-y*N)*ee,e[15]=(v*L-S*k+x*N)*ee,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,u=e.x,f=e.y,p=e.z,m=l*u,v=l*f;return this.set(m*u+r,m*f-o*p,m*p+o*f,0,m*f+o*p,v*f+r,v*p-o*u,0,m*p-o*f,v*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,u=n._y,f=n._z,p=n._w,m=l+l,v=u+u,S=f+f,x=l*m,E=l*v,A=l*S,R=u*v,y=u*S,_=f*S,N=p*m,k=p*v,C=p*S,L=r.x,P=r.y,F=r.z;return o[0]=(1-(R+_))*L,o[1]=(E+C)*L,o[2]=(A-k)*L,o[3]=0,o[4]=(E-C)*P,o[5]=(1-(x+_))*P,o[6]=(y+N)*P,o[7]=0,o[8]=(A+k)*F,o[9]=(y-N)*F,o[10]=(1-(x+R))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),n.identity(),this;let u=Ds.set(o[0],o[1],o[2]).length();const f=Ds.set(o[4],o[5],o[6]).length(),p=Ds.set(o[8],o[9],o[10]).length();l<0&&(u=-u),yi.copy(this);const m=1/u,v=1/f,S=1/p;return yi.elements[0]*=m,yi.elements[1]*=m,yi.elements[2]*=m,yi.elements[4]*=v,yi.elements[5]*=v,yi.elements[6]*=v,yi.elements[8]*=S,yi.elements[9]*=S,yi.elements[10]*=S,n.setFromRotationMatrix(yi),r.x=u,r.y=f,r.z=p,this}makePerspective(e,n,r,o,l,u,f=Fi,p=!1){const m=this.elements,v=2*l/(n-e),S=2*l/(r-o),x=(n+e)/(n-e),E=(r+o)/(r-o);let A,R;if(p)A=l/(u-l),R=u*l/(u-l);else if(f===Fi)A=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(f===Ka)A=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=v,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=S,m[9]=E,m[13]=0,m[2]=0,m[6]=0,m[10]=A,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,l,u,f=Fi,p=!1){const m=this.elements,v=2/(n-e),S=2/(r-o),x=-(n+e)/(n-e),E=-(r+o)/(r-o);let A,R;if(p)A=1/(u-l),R=u/(u-l);else if(f===Fi)A=-2/(u-l),R=-(u+l)/(u-l);else if(f===Ka)A=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=v,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=S,m[9]=0,m[13]=E,m[2]=0,m[6]=0,m[10]=A,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};jl.prototype.isMatrix4=!0;let Kt=jl;const Ds=new Q,yi=new Kt,p_=new Q(0,0,0),m_=new Q(1,1,1),wr=new Q,ll=new Q,qn=new Q,fm=new Kt,hm=new Js;class ss{constructor(e=0,n=0,r=0,o=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],p=o[1],m=o[5],v=o[9],S=o[2],x=o[6],E=o[10];switch(n){case"XYZ":this._y=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,E),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Mt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,E));break;case"XZY":this._z=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,E),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hm.setFromEuler(this),this.setFromQuaternion(hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";let E0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},g_=0;const pm=new Q,Is=new Js,Ki=new Kt,cl=new Q,ka=new Q,x_=new Q,v_=new Js,mm=new Q(1,0,0),gm=new Q(0,1,0),xm=new Q(0,0,1),vm={type:"added"},__={type:"removed"},Us={type:"childadded",child:null},Wu={type:"childremoved",child:null};class yn extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new Q,n=new ss,r=new Js,o=new Q(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Kt},normalMatrix:{value:new ot}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new E0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(mm,e)}rotateY(e){return this.rotateOnAxis(gm,e)}rotateZ(e){return this.rotateOnAxis(xm,e)}translateOnAxis(e,n){return pm.copy(e).applyQuaternion(this.quaternion),this.position.add(pm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mm,e)}translateY(e){return this.translateOnAxis(gm,e)}translateZ(e){return this.translateOnAxis(xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?cl.copy(e):cl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(ka,cl,this.up):Ki.lookAt(cl,ka,this.up),this.quaternion.setFromRotationMatrix(Ki),o&&(Ki.extractRotation(o.matrixWorld),Is.setFromRotationMatrix(Ki),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vm),Us.child=e,this.dispatchEvent(Us),Us.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(__),Wu.child=e,this.dispatchEvent(Wu),Wu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vm),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,x_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,v_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*r-l[8]*o,l[13]+=r-l[1]*n-l[5]*r-l[9]*o,l[14]+=o-l[2]*n-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const S=p[m];l(e.shapes,S)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(l(e.materials,this.material[p]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(e.animations,p))}}if(n){const f=u(e.geometries),p=u(e.materials),m=u(e.textures),v=u(e.images),S=u(e.shapes),x=u(e.skeletons),E=u(e.animations),A=u(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),E.length>0&&(r.animations=E),A.length>0&&(r.nodes=A)}return r.object=o,r;function u(f){const p=[];for(const m in f){const v=f[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}yn.DEFAULT_UP=new Q(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ul extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const y_={type:"move"};class ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ul,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ul,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ul,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,u=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const R of e.hand.values()){const y=n.getJointPose(R,r),_=this._getHandJoint(m,R);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],x=v.position.distanceTo(S.position),E=.02,A=.005;m.inputState.pinching&&x>E+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=E-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(y_)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ul;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const w0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Xu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class gt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=St.workingColorSpace){return this.r=e,this.g=n,this.b=r,St.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=St.workingColorSpace){if(e=o_(e,1),n=Mt(n,0,1),r=Mt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=Xu(u,l,e+1/3),this.g=Xu(u,l,e),this.b=Xu(u,l,e-1/3)}return St.colorSpaceToWorking(this,o),this}setStyle(e,n=oi){function r(l){l!==void 0&&parseFloat(l)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=oi){const r=w0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return St.workingToColorSpace(An.copy(this),e),Math.round(Mt(An.r*255,0,255))*65536+Math.round(Mt(An.g*255,0,255))*256+Math.round(Mt(An.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=St.workingColorSpace){St.workingToColorSpace(An.copy(this),n);const r=An.r,o=An.g,l=An.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let p,m;const v=(f+u)/2;if(f===u)p=0,m=0;else{const S=u-f;switch(m=v<=.5?S/(u+f):S/(2-u-f),u){case r:p=(o-l)/S+(o<l?6:0);break;case o:p=(l-r)/S+2;break;case l:p=(r-o)/S+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=St.workingColorSpace){return St.workingToColorSpace(An.copy(this),n),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=oi){St.workingToColorSpace(An.copy(this),e);const n=An.r,r=An.g,o=An.b;return e!==oi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(br),this.setHSL(br.h+e,br.s+n,br.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(br),e.getHSL(dl);const r=Bu(br.h,dl.h,n),o=Bu(br.s,dl.s,n),l=Bu(br.l,dl.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new gt;gt.NAMES=w0;class gf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new gt(e),this.density=n}clone(){return new gf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class S_ extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Si=new Q,Zi=new Q,qu=new Q,Ji=new Q,Fs=new Q,Os=new Q,_m=new Q,Yu=new Q,$u=new Q,Ku=new Q,Zu=new $t,Ju=new $t,Qu=new $t;class Ei{constructor(e=new Q,n=new Q,r=new Q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Si.subVectors(e,n),o.cross(Si);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){Si.subVectors(o,n),Zi.subVectors(r,n),qu.subVectors(e,n);const u=Si.dot(Si),f=Si.dot(Zi),p=Si.dot(qu),m=Zi.dot(Zi),v=Zi.dot(qu),S=u*m-f*f;if(S===0)return l.set(0,0,0),null;const x=1/S,E=(m*p-f*v)*x,A=(u*v-f*p)*x;return l.set(1-E-A,A,E)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,n,r,o,l,u,f,p){return this.getBarycoord(e,n,r,o,Ji)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Ji.x),p.addScaledVector(u,Ji.y),p.addScaledVector(f,Ji.z),p)}static getInterpolatedAttribute(e,n,r,o,l,u){return Zu.setScalar(0),Ju.setScalar(0),Qu.setScalar(0),Zu.fromBufferAttribute(e,n),Ju.fromBufferAttribute(e,r),Qu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Zu,l.x),u.addScaledVector(Ju,l.y),u.addScaledVector(Qu,l.z),u}static isFrontFacing(e,n,r,o){return Si.subVectors(r,n),Zi.subVectors(e,n),Si.cross(Zi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Si.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return Ei.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let u,f;Fs.subVectors(o,r),Os.subVectors(l,r),Yu.subVectors(e,r);const p=Fs.dot(Yu),m=Os.dot(Yu);if(p<=0&&m<=0)return n.copy(r);$u.subVectors(e,o);const v=Fs.dot($u),S=Os.dot($u);if(v>=0&&S<=v)return n.copy(o);const x=p*S-v*m;if(x<=0&&p>=0&&v<=0)return u=p/(p-v),n.copy(r).addScaledVector(Fs,u);Ku.subVectors(e,l);const E=Fs.dot(Ku),A=Os.dot(Ku);if(A>=0&&E<=A)return n.copy(l);const R=E*m-p*A;if(R<=0&&m>=0&&A<=0)return f=m/(m-A),n.copy(r).addScaledVector(Os,f);const y=v*A-E*S;if(y<=0&&S-v>=0&&E-A>=0)return _m.subVectors(l,o),f=(S-v)/(S-v+(E-A)),n.copy(o).addScaledVector(_m,f);const _=1/(y+R+x);return u=R*_,f=x*_,n.copy(r).addScaledVector(Fs,u).addScaledVector(Os,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qa{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Mi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Mi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Mi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Mi):Mi.fromBufferAttribute(l,u),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fl.copy(r.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ba),hl.subVectors(this.max,Ba),ks.subVectors(e.a,Ba),Bs.subVectors(e.b,Ba),zs.subVectors(e.c,Ba),Tr.subVectors(Bs,ks),Ar.subVectors(zs,Bs),Yr.subVectors(ks,zs);let n=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-Yr.z,Yr.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,Yr.z,0,-Yr.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-Yr.y,Yr.x,0];return!ed(n,ks,Bs,zs,hl)||(n=[1,0,0,0,1,0,0,0,1],!ed(n,ks,Bs,zs,hl))?!1:(pl.crossVectors(Tr,Ar),n=[pl.x,pl.y,pl.z],ed(n,ks,Bs,zs,hl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Mi=new Q,fl=new Qa,ks=new Q,Bs=new Q,zs=new Q,Tr=new Q,Ar=new Q,Yr=new Q,Ba=new Q,hl=new Q,pl=new Q,$r=new Q;function ed(s,e,n,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){$r.fromArray(s,l);const f=o.x*Math.abs($r.x)+o.y*Math.abs($r.y)+o.z*Math.abs($r.z),p=e.dot($r),m=n.dot($r),v=r.dot($r);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>f)return!1}return!0}const sn=new Q,ml=new xt;let M_=0;class Ti extends os{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:M_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=n_,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ml.fromBufferAttribute(this,n),ml.applyMatrix3(e),this.setXY(n,ml.x,ml.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix3(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix4(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyNormalMatrix(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.transformDirection(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Oa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Oa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Hn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Oa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Hn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Oa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Hn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Oa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Hn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Hn(n,this.array),r=Hn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Hn(n,this.array),r=Hn(r,this.array),o=Hn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=Hn(n,this.array),r=Hn(r,this.array),o=Hn(o,this.array),l=Hn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class b0 extends Ti{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class T0 extends Ti{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class In extends Ti{constructor(e,n,r){super(new Float32Array(e),n,r)}}const E_=new Qa,za=new Q,td=new Q;class ql{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):E_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;za.subVectors(e,this.center);const n=za.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(za,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(za.copy(e.center).add(td)),this.expandByPoint(za.copy(e.center).sub(td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let w_=0;const ai=new Kt,nd=new yn,Hs=new Q,Yn=new Qa,Ha=new Qa,mn=new Q;class Zn extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i_(e)?T0:b0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ot().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,n,r){return ai.makeTranslation(e,n,r),this.applyMatrix4(ai),this}scale(e,n,r){return ai.makeScale(e,n,r),this.applyMatrix4(ai),this}lookAt(e){return nd.lookAt(e),nd.updateMatrix(),this.applyMatrix4(nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new In(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];Yn.setFromBufferAttribute(l),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ql);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];Ha.setFromBufferAttribute(f),this.morphTargetsRelative?(mn.addVectors(Yn.min,Ha.min),Yn.expandByPoint(mn),mn.addVectors(Yn.max,Ha.max),Yn.expandByPoint(mn)):(Yn.expandByPoint(Ha.min),Yn.expandByPoint(Ha.max))}Yn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)mn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(mn));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],p=this.morphTargetsRelative;for(let m=0,v=f.count;m<v;m++)mn.fromBufferAttribute(f,m),p&&(Hs.fromBufferAttribute(e,m),mn.add(Hs)),o=Math.max(o,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Ti(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],p=[];for(let w=0;w<r.count;w++)f[w]=new Q,p[w]=new Q;const m=new Q,v=new Q,S=new Q,x=new xt,E=new xt,A=new xt,R=new Q,y=new Q;function _(w,I,B){m.fromBufferAttribute(r,w),v.fromBufferAttribute(r,I),S.fromBufferAttribute(r,B),x.fromBufferAttribute(l,w),E.fromBufferAttribute(l,I),A.fromBufferAttribute(l,B),v.sub(m),S.sub(m),E.sub(x),A.sub(x);const W=1/(E.x*A.y-A.x*E.y);isFinite(W)&&(R.copy(v).multiplyScalar(A.y).addScaledVector(S,-E.y).multiplyScalar(W),y.copy(S).multiplyScalar(E.x).addScaledVector(v,-A.x).multiplyScalar(W),f[w].add(R),f[I].add(R),f[B].add(R),p[w].add(y),p[I].add(y),p[B].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let w=0,I=N.length;w<I;++w){const B=N[w],W=B.start,Z=B.count;for(let se=W,q=W+Z;se<q;se+=3)_(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const k=new Q,C=new Q,L=new Q,P=new Q;function F(w){L.fromBufferAttribute(o,w),P.copy(L);const I=f[w];k.copy(I),k.sub(L.multiplyScalar(L.dot(I))).normalize(),C.crossVectors(P,I);const W=C.dot(p[w])<0?-1:1;u.setXYZW(w,k.x,k.y,k.z,W)}for(let w=0,I=N.length;w<I;++w){const B=N[w],W=B.start,Z=B.count;for(let se=W,q=W+Z;se<q;se+=3)F(e.getX(se+0)),F(e.getX(se+1)),F(e.getX(se+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new Ti(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,E=r.count;x<E;x++)r.setXYZ(x,0,0,0);const o=new Q,l=new Q,u=new Q,f=new Q,p=new Q,m=new Q,v=new Q,S=new Q;if(e)for(let x=0,E=e.count;x<E;x+=3){const A=e.getX(x+0),R=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(n,A),l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,y),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,y),f.add(v),p.add(v),m.add(v),r.setXYZ(A,f.x,f.y,f.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,E=n.count;x<E;x+=3)o.fromBufferAttribute(n,x+0),l.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)mn.fromBufferAttribute(e,n),mn.normalize(),e.setXYZ(n,mn.x,mn.y,mn.z)}toNonIndexed(){function e(f,p){const m=f.array,v=f.itemSize,S=f.normalized,x=new m.constructor(p.length*v);let E=0,A=0;for(let R=0,y=p.length;R<y;R++){f.isInterleavedBufferAttribute?E=p[R]*f.data.stride+f.offset:E=p[R]*v;for(let _=0;_<v;_++)x[A++]=m[E++]}return new Ti(x,v,S)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zn,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],m=e(p,r);n.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const p=[],m=l[f];for(let v=0,S=m.length;v<S;v++){const x=m[v],E=e(x,r);p.push(E)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let S=0,x=m.length;S<x;S++){const E=m[S];v.push(E.toJSON(e.data))}v.length>0&&(o[p]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(n))}const l=e.morphAttributes;for(const m in l){const v=[],S=l[m];for(let x=0,E=S.length;x<E;x++)v.push(S[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const S=u[m];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const id=new Q,b_=new Q,T_=new ot;class Rr{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=id.subVectors(r,n).cross(b_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(id),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||T_.getNormalMatrix(e),o=this.coplanarPoint(id).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let A_=0;class eo extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=qs,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=i0,this.blendDst=r0,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$v,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ou,this.stencilZFail=Ou,this.stencilZPass=Ou,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){st(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}if(n){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new gt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Rr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new xt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const er=new Q,rd=new Q,gl=new Q,xl=new Q;class A0{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,er)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=er.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(er.copy(this.origin).addScaledVector(this.direction,n),er.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){rd.copy(e).add(n).multiplyScalar(.5),gl.copy(n).sub(e).normalize(),xl.copy(this.origin).sub(rd);const l=e.distanceTo(n)*.5,u=-this.direction.dot(gl),f=xl.dot(this.direction),p=-xl.dot(gl),m=xl.lengthSq(),v=Math.abs(1-u*u);let S,x,E,A;if(v>0)if(S=u*p-f,x=u*f-p,A=l*v,S>=0)if(x>=-A)if(x<=A){const R=1/v;S*=R,x*=R,E=S*(S+u*x+2*f)+x*(u*S+x+2*p)+m}else x=l,S=Math.max(0,-(u*x+f)),E=-S*S+x*(x+2*p)+m;else x=-l,S=Math.max(0,-(u*x+f)),E=-S*S+x*(x+2*p)+m;else x<=-A?(S=Math.max(0,-(-u*l+f)),x=S>0?-l:Math.min(Math.max(-l,-p),l),E=-S*S+x*(x+2*p)+m):x<=A?(S=0,x=Math.min(Math.max(-l,-p),l),E=x*(x+2*p)+m):(S=Math.max(0,-(u*l+f)),x=S>0?l:Math.min(Math.max(-l,-p),l),E=-S*S+x*(x+2*p)+m);else x=u>0?-l:l,S=Math.max(0,-(u*x+f)),E=-S*S+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(rd).addScaledVector(gl,x),E}intersectSphere(e,n){if(e.radius<0)return null;er.subVectors(e.center,this.origin);const r=er.dot(this.direction),o=er.dot(er)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,p=r+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,u,f,p;const m=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),v>=0?(l=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(l=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-x.z)*S,p=(e.max.z-x.z)*S):(f=(e.max.z-x.z)*S,p=(e.min.z-x.z)*S),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,er)!==null}intersectTriangle(e,n,r,o,l){const u=this.origin,f=this.direction,p=f.x,m=f.y,v=f.z,S=e.x-u.x,x=e.y-u.y,E=e.z-u.z,A=n.x-u.x,R=n.y-u.y,y=n.z-u.z,_=r.x-u.x,N=r.y-u.y,k=r.z-u.z,C=Math.abs(p),L=Math.abs(m),P=Math.abs(v);let F,w,I,B,W,Z,se,q,ee,he,te,K;if(C>=L&&C>=P?(I=p,Z=S,ee=A,K=_,p>=0?(F=m,w=v,B=x,W=E,se=R,q=y,he=N,te=k):(F=v,w=m,B=E,W=x,se=y,q=R,he=k,te=N)):L>=P?(I=m,Z=x,ee=R,K=N,m>=0?(F=v,w=p,B=E,W=S,se=y,q=A,he=k,te=_):(F=p,w=v,B=S,W=E,se=A,q=y,he=_,te=k)):(I=v,Z=E,ee=y,K=k,v>=0?(F=p,w=m,B=S,W=x,se=A,q=R,he=_,te=N):(F=m,w=p,B=x,W=S,se=R,q=A,he=N,te=_)),I===0)return null;const Y=F/I,H=w/I,D=1/I,re=B-Y*Z,ye=W-H*Z,Ve=se-Y*ee,ze=q-H*ee,Ge=he-Y*K,le=te-H*K,de=Ge*ze-le*Ve,Ee=re*le-ye*Ge,Qe=Ve*ye-ze*re;if(o){if(de<0||Ee<0||Qe<0)return null}else if((de<0||Ee<0||Qe<0)&&(de>0||Ee>0||Qe>0))return null;const Fe=de+Ee+Qe;if(Fe===0)return null;const ct=D*(de*Z+Ee*ee+Qe*K);return(Fe>0?ct<0:ct>0)?null:this.at(ct/Fe,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xa extends eo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=s0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ym=new Kt,Kr=new A0,vl=new ql,Sm=new Q,_l=new Q,yl=new Q,Sl=new Q,sd=new Q,Ml=new Q,Mm=new Q,El=new Q;class li extends yn{constructor(e=new Zn,n=new Xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Ml.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const v=f[p],S=l[p];v!==0&&(sd.fromBufferAttribute(S,e),u?Ml.addScaledVector(sd,v):Ml.addScaledVector(sd.sub(n),v))}n.add(Ml)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vl.copy(r.boundingSphere),vl.applyMatrix4(l),Kr.copy(e.ray).recast(e.near),!(vl.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(vl,Sm)===null||Kr.origin.distanceToSquared(Sm)>(e.far-e.near)**2))&&(ym.copy(l).invert(),Kr.copy(e.ray).applyMatrix4(ym),!(r.boundingBox!==null&&Kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Kr)))}_computeIntersections(e,n,r){let o;const l=this.geometry,u=this.material,f=l.index,p=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,S=l.attributes.normal,x=l.groups,E=l.drawRange;if(f!==null)if(Array.isArray(u))for(let A=0,R=x.length;A<R;A++){const y=x[A],_=u[y.materialIndex],N=Math.max(y.start,E.start),k=Math.min(f.count,Math.min(y.start+y.count,E.start+E.count));for(let C=N,L=k;C<L;C+=3){const P=f.getX(C),F=f.getX(C+1),w=f.getX(C+2);o=wl(this,_,e,r,m,v,S,P,F,w),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const A=Math.max(0,E.start),R=Math.min(f.count,E.start+E.count);for(let y=A,_=R;y<_;y+=3){const N=f.getX(y),k=f.getX(y+1),C=f.getX(y+2);o=wl(this,u,e,r,m,v,S,N,k,C),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let A=0,R=x.length;A<R;A++){const y=x[A],_=u[y.materialIndex],N=Math.max(y.start,E.start),k=Math.min(p.count,Math.min(y.start+y.count,E.start+E.count));for(let C=N,L=k;C<L;C+=3){const P=C,F=C+1,w=C+2;o=wl(this,_,e,r,m,v,S,P,F,w),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const A=Math.max(0,E.start),R=Math.min(p.count,E.start+E.count);for(let y=A,_=R;y<_;y+=3){const N=y,k=y+1,C=y+2;o=wl(this,u,e,r,m,v,S,N,k,C),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function C_(s,e,n,r,o,l,u,f){let p;if(e.side===Vn?p=r.intersectTriangle(u,l,o,!0,f):p=r.intersectTriangle(o,l,u,e.side===ns,f),p===null)return null;El.copy(f),El.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(El);return m<n.near||m>n.far?null:{distance:m,point:El.clone(),object:s}}function wl(s,e,n,r,o,l,u,f,p,m){s.getVertexPosition(f,_l),s.getVertexPosition(p,yl),s.getVertexPosition(m,Sl);const v=C_(s,e,n,r,_l,yl,Sl,Mm);if(v){const S=new Q;Ei.getBarycoord(Mm,_l,yl,Sl,S),o&&(v.uv=Ei.getInterpolatedAttribute(o,f,p,m,S,new xt)),l&&(v.uv1=Ei.getInterpolatedAttribute(l,f,p,m,S,new xt)),u&&(v.normal=Ei.getInterpolatedAttribute(u,f,p,m,S,new Q),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:f,b:p,c:m,normal:new Q,materialIndex:0};Ei.getNormal(_l,yl,Sl,x.normal),v.face=x,v.barycoord=S}return v}class R_ extends Dn{constructor(e=null,n=1,r=1,o,l,u,f,p,m=_n,v=_n,S,x){super(null,u,f,p,m,v,o,l,S,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zr=new ql,P_=new xt(.5,.5),bl=new Q;class xf{constructor(e=new Rr,n=new Rr,r=new Rr,o=new Rr,l=new Rr,u=new Rr){this.planes=[e,n,r,o,l,u]}set(e,n,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Fi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],p=l[2],m=l[3],v=l[4],S=l[5],x=l[6],E=l[7],A=l[8],R=l[9],y=l[10],_=l[11],N=l[12],k=l[13],C=l[14],L=l[15];if(o[0].setComponents(m-u,E-v,_-A,L-N).normalize(),o[1].setComponents(m+u,E+v,_+A,L+N).normalize(),o[2].setComponents(m+f,E+S,_+R,L+k).normalize(),o[3].setComponents(m-f,E-S,_-R,L-k).normalize(),r)o[4].setComponents(p,x,y,C).normalize(),o[5].setComponents(m-p,E-x,_-y,L-C).normalize();else if(o[4].setComponents(m-p,E-x,_-y,L-C).normalize(),n===Fi)o[5].setComponents(m+p,E+x,_+y,L+C).normalize();else if(n===Ka)o[5].setComponents(p,x,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){Zr.center.set(0,0,0);const n=P_.distanceTo(e.center);return Zr.radius=.7071067811865476+n,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(bl.x=o.normal.x>0?e.max.x:e.min.x,bl.y=o.normal.y>0?e.max.y:e.min.y,bl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class C0 extends eo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Em=new Kt,ef=new A0,Tl=new ql,Al=new Q;class N_ extends yn{constructor(e=new Zn,n=new C0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tl.copy(r.boundingSphere),Tl.applyMatrix4(o),Tl.radius+=l,e.ray.intersectsSphere(Tl)===!1)return;Em.copy(o).invert(),ef.copy(e.ray).applyMatrix4(Em);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=r.index,S=r.attributes.position;if(m!==null){const x=Math.max(0,u.start),E=Math.min(m.count,u.start+u.count);for(let A=x,R=E;A<R;A++){const y=m.getX(A);Al.fromBufferAttribute(S,y),wm(Al,y,p,o,e,n,this)}}else{const x=Math.max(0,u.start),E=Math.min(S.count,u.start+u.count);for(let A=x,R=E;A<R;A++)Al.fromBufferAttribute(S,A),wm(Al,A,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function wm(s,e,n,r,o,l,u){const f=ef.distanceSqToPoint(s);if(f<n){const p=new Q;ef.closestPointToPoint(s,p),p.applyMatrix4(r);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;l.push({distance:m,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class R0 extends Dn{constructor(e=[],n=is,r,o,l,u,f,p,m,v){super(e,n,r,o,l,u,f,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Za extends Dn{constructor(e,n,r=ki,o,l,u,f=_n,p=_n,m,v=sr,S=1){if(v!==sr&&v!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:S};super(x,o,l,u,f,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class L_ extends Za{constructor(e,n=ki,r=is,o,l,u=_n,f=_n,p,m=sr){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,n,r,o,l,u,f,p,m),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class P0 extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class to extends Zn{constructor(e=1,n=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],m=[],v=[],S=[];let x=0,E=0;A("z","y","x",-1,-1,r,n,e,u,l,0),A("z","y","x",1,-1,r,n,-e,u,l,1),A("x","z","y",1,1,e,r,n,o,u,2),A("x","z","y",1,-1,e,r,-n,o,u,3),A("x","y","z",1,-1,e,n,r,o,l,4),A("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new In(m,3)),this.setAttribute("normal",new In(v,3)),this.setAttribute("uv",new In(S,2));function A(R,y,_,N,k,C,L,P,F,w,I){const B=C/F,W=L/w,Z=C/2,se=L/2,q=P/2,ee=F+1,he=w+1;let te=0,K=0;const Y=new Q;for(let H=0;H<he;H++){const D=H*W-se;for(let re=0;re<ee;re++){const ye=re*B-Z;Y[R]=ye*N,Y[y]=D*k,Y[_]=q,m.push(Y.x,Y.y,Y.z),Y[R]=0,Y[y]=0,Y[_]=P>0?1:-1,v.push(Y.x,Y.y,Y.z),S.push(re/F),S.push(1-H/w),te+=1}}for(let H=0;H<w;H++)for(let D=0;D<F;D++){const re=x+D+ee*H,ye=x+D+ee*(H+1),Ve=x+(D+1)+ee*(H+1),ze=x+(D+1)+ee*H;p.push(re,ye,ze),p.push(ye,Ve,ze),K+=6}f.addGroup(E,K,I),E+=K,x+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Yl extends Zn{constructor(e=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:o};const l=[],u=[];f(o),m(r),v(),this.setAttribute("position",new In(l,3)),this.setAttribute("normal",new In(l.slice(),3)),this.setAttribute("uv",new In(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(N){const k=new Q,C=new Q,L=new Q;for(let P=0;P<n.length;P+=3)E(n[P+0],k),E(n[P+1],C),E(n[P+2],L),p(k,C,L,N)}function p(N,k,C,L){const P=L+1,F=[];for(let w=0;w<=P;w++){F[w]=[];const I=N.clone().lerp(C,w/P),B=k.clone().lerp(C,w/P),W=P-w;for(let Z=0;Z<=W;Z++)Z===0&&w===P?F[w][Z]=I:F[w][Z]=I.clone().lerp(B,Z/W)}for(let w=0;w<P;w++)for(let I=0;I<2*(P-w)-1;I++){const B=Math.floor(I/2);I%2===0?(x(F[w][B+1]),x(F[w+1][B]),x(F[w][B])):(x(F[w][B+1]),x(F[w+1][B+1]),x(F[w+1][B]))}}function m(N){const k=new Q;for(let C=0;C<l.length;C+=3)k.x=l[C+0],k.y=l[C+1],k.z=l[C+2],k.normalize().multiplyScalar(N),l[C+0]=k.x,l[C+1]=k.y,l[C+2]=k.z}function v(){const N=new Q;for(let k=0;k<l.length;k+=3){N.x=l[k+0],N.y=l[k+1],N.z=l[k+2];const C=y(N)/2/Math.PI+.5,L=_(N)/Math.PI+.5;u.push(C,1-L)}A(),S()}function S(){for(let N=0;N<u.length;N+=6){const k=u[N+0],C=u[N+2],L=u[N+4],P=Math.max(k,C,L),F=Math.min(k,C,L);P>.9&&F<.1&&(k<.2&&(u[N+0]+=1),C<.2&&(u[N+2]+=1),L<.2&&(u[N+4]+=1))}}function x(N){l.push(N.x,N.y,N.z)}function E(N,k){const C=N*3;k.x=e[C+0],k.y=e[C+1],k.z=e[C+2]}function A(){const N=new Q,k=new Q,C=new Q,L=new Q,P=new xt,F=new xt,w=new xt;for(let I=0,B=0;I<l.length;I+=9,B+=6){N.set(l[I+0],l[I+1],l[I+2]),k.set(l[I+3],l[I+4],l[I+5]),C.set(l[I+6],l[I+7],l[I+8]),P.set(u[B+0],u[B+1]),F.set(u[B+2],u[B+3]),w.set(u[B+4],u[B+5]),L.copy(N).add(k).add(C).divideScalar(3);const W=y(L);R(P,B+0,N,W),R(F,B+2,k,W),R(w,B+4,C,W)}}function R(N,k,C,L){L<0&&N.x===1&&(u[k]=N.x-1),C.x===0&&C.z===0&&(u[k]=L/2/Math.PI+.5)}function y(N){return Math.atan2(N.z,-N.x)}function _(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.vertices,e.indices,e.radius,e.detail)}}class vf extends Yl{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new vf(e.radius,e.detail)}}class _f extends Yl{constructor(e=1,n=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,o,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new _f(e.radius,e.detail)}}class $l extends Zn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,u=n/2,f=Math.floor(r),p=Math.floor(o),m=f+1,v=p+1,S=e/f,x=n/p,E=[],A=[],R=[],y=[];for(let _=0;_<v;_++){const N=_*x-u;for(let k=0;k<m;k++){const C=k*S-l;A.push(C,-N,0),R.push(0,0,1),y.push(k/f),y.push(1-_/p)}}for(let _=0;_<p;_++)for(let N=0;N<f;N++){const k=N+m*_,C=N+m*(_+1),L=N+1+m*(_+1),P=N+1+m*_;E.push(k,C,P),E.push(C,L,P)}this.setIndex(E),this.setAttribute("position",new In(A,3)),this.setAttribute("normal",new In(R,3)),this.setAttribute("uv",new In(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $l(e.width,e.height,e.widthSegments,e.heightSegments)}}class yf extends Zn{constructor(e=1,n=.4,r=64,o=8,l=2,u=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:r,radialSegments:o,p:l,q:u},r=Math.floor(r),o=Math.floor(o);const f=[],p=[],m=[],v=[],S=new Q,x=new Q,E=new Q,A=new Q,R=new Q,y=new Q,_=new Q;for(let k=0;k<=r;++k){const C=k/r*l*Math.PI*2;N(C,l,u,e,E),N(C+.01,l,u,e,A),y.subVectors(A,E),_.addVectors(A,E),R.crossVectors(y,_),_.crossVectors(R,y),R.normalize(),_.normalize();for(let L=0;L<=o;++L){const P=L/o*Math.PI*2,F=-n*Math.cos(P),w=n*Math.sin(P);S.x=E.x+(F*_.x+w*R.x),S.y=E.y+(F*_.y+w*R.y),S.z=E.z+(F*_.z+w*R.z),p.push(S.x,S.y,S.z),x.subVectors(S,E).normalize(),m.push(x.x,x.y,x.z),v.push(k/r),v.push(L/o)}}for(let k=1;k<=r;k++)for(let C=1;C<=o;C++){const L=(o+1)*(k-1)+(C-1),P=(o+1)*k+(C-1),F=(o+1)*k+C,w=(o+1)*(k-1)+C;f.push(L,P,w),f.push(P,F,w)}this.setIndex(f),this.setAttribute("position",new In(p,3)),this.setAttribute("normal",new In(m,3)),this.setAttribute("uv",new In(v,2));function N(k,C,L,P,F){const w=Math.cos(k),I=Math.sin(k),B=L/C*k,W=Math.cos(B);F.x=P*(2+W)*.5*w,F.y=P*(2+W)*I*.5,F.z=P*Math.sin(B)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yf(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function Zs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];if(bm(o))o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(bm(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[n][r]=l}else e[n][r]=o.slice();else e[n][r]=o}}return e}function Ln(s){const e={};for(let n=0;n<s.length;n++){const r=Zs(s[n]);for(const o in r)e[o]=r[o]}return e}function bm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function D_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function N0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const I_={clone:Zs,merge:Ln};var U_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends eo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U_,this.fragmentShader=F_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=D_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new gt().setHex(o.value);break;case"v2":this.uniforms[r].value=new xt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new Q().fromArray(o.value);break;case"v4":this.uniforms[r].value=new $t().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ot().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Kt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class O_ extends zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class k_ extends eo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class B_ extends eo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Sf extends yn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const ad=new Kt,Tm=new Q,Am=new Q;class L0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xf,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Tm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tm),Am.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Am),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,r,o){ad.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(ad,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,p=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===Ka||e.reversedDepth?n.set(.5*u,0,0,.5*u+p,0,.5*f,0,.5*f+m,0,0,1,0,0,0,0,1):n.set(.5*u,0,0,.5*u+p,0,.5*f,0,.5*f+m,0,0,.5,.5,0,0,0,1),n.multiply(ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Cl=new Q,Rl=new Js,Li=new Q;class D0 extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cl,Rl,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Rl,Li.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(Cl,Rl,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Rl,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new Q,Cm=new xt,Rm=new xt;class $n extends D0{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qd*2*Math.atan(Math.tan(ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,n){return this.getViewBounds(e,Cm,Rm),n.subVectors(Rm,Cm)}setViewOffset(e,n,r,o,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ku*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/p,n-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class z_ extends L0{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0}}class H_ extends Sf{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new z_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Mf extends D0{constructor(e=-1,n=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,f-=v*this.view.offsetY,p=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class V_ extends L0{constructor(){super(new Mf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class G_ extends Sf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new V_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class W_ extends Sf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Vs=-90,Gs=1;class j_ extends yn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new $n(Vs,Gs,e,n);o.layers=this.layers,this.add(o);const l=new $n(Vs,Gs,e,n);l.layers=this.layers,this.add(l);const u=new $n(Vs,Gs,e,n);u.layers=this.layers,this.add(u);const f=new $n(Vs,Gs,e,n);f.layers=this.layers,this.add(f);const p=new $n(Vs,Gs,e,n);p.layers=this.layers,this.add(p);const m=new $n(Vs,Gs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,u,f,p]=n;for(const m of n)this.remove(m);if(e===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ka)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,p,m,v]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,v),e.setRenderTarget(S,x,E),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class X_ extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}let q_=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,st("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}};const Cf=class Cf{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const l=this.elements;return l[0]=e,l[2]=n,l[1]=r,l[3]=o,this}};Cf.prototype.isMatrix2=!0;let Pm=Cf;function Nm(s,e,n,r){const o=Y_(r);switch(n){case v0:return s*e;case y0:return s*e/o.components*o.byteLength;case uf:return s*e/o.components*o.byteLength;case rs:return s*e*2/o.components*o.byteLength;case df:return s*e*2/o.components*o.byteLength;case _0:return s*e*3/o.components*o.byteLength;case wi:return s*e*4/o.components*o.byteLength;case ff:return s*e*4/o.components*o.byteLength;case Dl:case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ul:case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wd:case Td:return Math.max(s,16)*Math.max(e,8)/4;case Ed:case bd:return Math.max(s,8)*Math.max(e,8)/2;case Ad:case Cd:case Pd:case Nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Rd:case kl:case Ld:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Od:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case kd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case zd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Hd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case jd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Xd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case qd:case Yd:case $d:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Kd:case Zd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Bl:case Jd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Y_(s){switch(s){case Kn:case p0:return{byteLength:1,components:1};case Ya:case m0:case Bi:return{byteLength:2,components:1};case lf:case cf:return{byteLength:2,components:4};case ki:case of:case Ui:return{byteLength:4,components:1};case g0:case x0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:af}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=af);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function I0(){let s=null,e=!1,n=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),n(l,u)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function $_(s){const e=new WeakMap;function n(f,p){const m=f.array,v=f.usage,S=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,v),f.onUploadCallback();let E;if(m instanceof Float32Array)E=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)E=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?E=s.HALF_FLOAT:E=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=s.SHORT;else if(m instanceof Uint32Array)E=s.UNSIGNED_INT;else if(m instanceof Int32Array)E=s.INT;else if(m instanceof Int8Array)E=s.BYTE;else if(m instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,p,m){const v=p.array,S=p.updateRanges;if(s.bindBuffer(m,f),S.length===0)s.bufferSubData(m,0,v);else{S.sort((E,A)=>E.start-A.start);let x=0;for(let E=1;E<S.length;E++){const A=S[x],R=S[E];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++x,S[x]=R)}S.length=x+1;for(let E=0,A=S.length;E<A;E++){const R=S[E];s.bufferSubData(m,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:o,remove:l,update:u}}var K_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,J_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ey=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ny=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ry=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ay=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ly=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,my=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_y=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ey=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,by=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ty="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ay=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ry=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ny=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ly=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ky=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,By=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Vy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$y=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Qy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_S=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ES=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,TS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,DS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,IS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,US=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$S=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_M=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,SM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:K_,alphahash_pars_fragment:Z_,alphamap_fragment:J_,alphamap_pars_fragment:Q_,alphatest_fragment:ey,alphatest_pars_fragment:ty,aomap_fragment:ny,aomap_pars_fragment:iy,batching_pars_vertex:ry,batching_vertex:sy,begin_vertex:ay,beginnormal_vertex:oy,bsdfs:ly,iridescence_fragment:cy,bumpmap_pars_fragment:uy,clipping_planes_fragment:dy,clipping_planes_pars_fragment:fy,clipping_planes_pars_vertex:hy,clipping_planes_vertex:py,color_fragment:my,color_pars_fragment:gy,color_pars_vertex:xy,color_vertex:vy,common:_y,cube_uv_reflection_fragment:yy,defaultnormal_vertex:Sy,displacementmap_pars_vertex:My,displacementmap_vertex:Ey,emissivemap_fragment:wy,emissivemap_pars_fragment:by,colorspace_fragment:Ty,colorspace_pars_fragment:Ay,envmap_fragment:Cy,envmap_common_pars_fragment:Ry,envmap_pars_fragment:Py,envmap_pars_vertex:Ny,envmap_physical_pars_fragment:Vy,envmap_vertex:Ly,fog_vertex:Dy,fog_pars_vertex:Iy,fog_fragment:Uy,fog_pars_fragment:Fy,gradientmap_pars_fragment:Oy,lightmap_pars_fragment:ky,lights_lambert_fragment:By,lights_lambert_pars_fragment:zy,lights_pars_begin:Hy,lights_toon_fragment:Gy,lights_toon_pars_fragment:Wy,lights_phong_fragment:jy,lights_phong_pars_fragment:Xy,lights_physical_fragment:qy,lights_physical_pars_fragment:Yy,lights_fragment_begin:$y,lights_fragment_maps:Ky,lights_fragment_end:Zy,lightprobes_pars_fragment:Jy,logdepthbuf_fragment:Qy,logdepthbuf_pars_fragment:eS,logdepthbuf_pars_vertex:tS,logdepthbuf_vertex:nS,map_fragment:iS,map_pars_fragment:rS,map_particle_fragment:sS,map_particle_pars_fragment:aS,metalnessmap_fragment:oS,metalnessmap_pars_fragment:lS,morphinstance_vertex:cS,morphcolor_vertex:uS,morphnormal_vertex:dS,morphtarget_pars_vertex:fS,morphtarget_vertex:hS,normal_fragment_begin:pS,normal_fragment_maps:mS,normal_pars_fragment:gS,normal_pars_vertex:xS,normal_vertex:vS,normalmap_pars_fragment:_S,clearcoat_normal_fragment_begin:yS,clearcoat_normal_fragment_maps:SS,clearcoat_pars_fragment:MS,iridescence_pars_fragment:ES,opaque_fragment:wS,packing:bS,premultiplied_alpha_fragment:TS,project_vertex:AS,dithering_fragment:CS,dithering_pars_fragment:RS,roughnessmap_fragment:PS,roughnessmap_pars_fragment:NS,shadowmap_pars_fragment:LS,shadowmap_pars_vertex:DS,shadowmap_vertex:IS,shadowmask_pars_fragment:US,skinbase_vertex:FS,skinning_pars_vertex:OS,skinning_vertex:kS,skinnormal_vertex:BS,specularmap_fragment:zS,specularmap_pars_fragment:HS,tonemapping_fragment:VS,tonemapping_pars_fragment:GS,transmission_fragment:WS,transmission_pars_fragment:jS,uv_pars_fragment:XS,uv_pars_vertex:qS,uv_vertex:YS,worldpos_vertex:$S,background_vert:KS,background_frag:ZS,backgroundCube_vert:JS,backgroundCube_frag:QS,cube_vert:eM,cube_frag:tM,depth_vert:nM,depth_frag:iM,distance_vert:rM,distance_frag:sM,equirect_vert:aM,equirect_frag:oM,linedashed_vert:lM,linedashed_frag:cM,meshbasic_vert:uM,meshbasic_frag:dM,meshlambert_vert:fM,meshlambert_frag:hM,meshmatcap_vert:pM,meshmatcap_frag:mM,meshnormal_vert:gM,meshnormal_frag:xM,meshphong_vert:vM,meshphong_frag:_M,meshphysical_vert:yM,meshphysical_frag:SM,meshtoon_vert:MM,meshtoon_frag:EM,points_vert:wM,points_frag:bM,shadow_vert:TM,shadow_frag:AM,sprite_vert:CM,sprite_frag:RM},Ie={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Ii={basic:{uniforms:Ln([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Ln([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Ln([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Ln([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Ln([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new gt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Ln([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Ln([Ie.points,Ie.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Ln([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Ln([Ie.common,Ie.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Ln([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Ln([Ie.sprite,Ie.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Ln([Ie.common,Ie.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Ln([Ie.lights,Ie.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ii.physical={uniforms:Ln([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Pl={r:0,b:0,g:0},PM=new Kt,U0=new ot;U0.set(-1,0,0,0,1,0,0,0,1);function NM(s,e,n,r,o,l){const u=new gt(0);let f=o===!0?0:1,p,m,v=null,S=0,x=null;function E(N){let k=N.isScene===!0?N.background:null;if(k&&k.isTexture){const C=N.backgroundBlurriness>0;k=e.get(k,C)}return k}function A(N){let k=!1;const C=E(N);C===null?y(u,f):C&&C.isColor&&(y(C,1),k=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,l):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||k)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(N,k){const C=E(k);C&&(C.isCubeTexture||C.mapping===Xl)?(m===void 0&&(m=new li(new to(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:Zs(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(L,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(PM.makeRotationFromEuler(k.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(U0),m.material.toneMapped=St.getTransfer(C.colorSpace)!==Ut,(v!==C||S!==C.version||x!==s.toneMapping)&&(m.material.needsUpdate=!0,v=C,S=C.version,x=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new li(new $l(2,2),new zi({name:"BackgroundMaterial",uniforms:Zs(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,p.material.toneMapped=St.getTransfer(C.colorSpace)!==Ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||S!==C.version||x!==s.toneMapping)&&(p.material.needsUpdate=!0,v=C,S=C.version,x=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function y(N,k){N.getRGB(Pl,N0(s)),n.buffers.color.setClear(Pl.r,Pl.g,Pl.b,k,l)}function _(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(N,k=1){u.set(N),f=k,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(N){f=N,y(u,f)},render:A,addToRenderList:R,dispose:_}}function LM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,u=!1;function f(W,Z,se,q,ee){let he=!1;const te=S(W,q,se,Z);l!==te&&(l=te,m(l.object)),he=E(W,q,se,ee),he&&A(W,q,se,ee),ee!==null&&e.update(ee,s.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,C(W,Z,se,q),ee!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function p(){return s.createVertexArray()}function m(W){return s.bindVertexArray(W)}function v(W){return s.deleteVertexArray(W)}function S(W,Z,se,q){const ee=q.wireframe===!0;let he=r[Z.id];he===void 0&&(he={},r[Z.id]=he);const te=W.isInstancedMesh===!0?W.id:0;let K=he[te];K===void 0&&(K={},he[te]=K);let Y=K[se.id];Y===void 0&&(Y={},K[se.id]=Y);let H=Y[ee];return H===void 0&&(H=x(p()),Y[ee]=H),H}function x(W){const Z=[],se=[],q=[];for(let ee=0;ee<n;ee++)Z[ee]=0,se[ee]=0,q[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:se,attributeDivisors:q,object:W,attributes:{},index:null}}function E(W,Z,se,q){const ee=l.attributes,he=Z.attributes;let te=0;const K=se.getAttributes();for(const Y in K)if(K[Y].location>=0){const D=ee[Y];let re=he[Y];if(re===void 0&&(Y==="instanceMatrix"&&W.instanceMatrix&&(re=W.instanceMatrix),Y==="instanceColor"&&W.instanceColor&&(re=W.instanceColor)),D===void 0||D.attribute!==re||re&&D.data!==re.data)return!0;te++}return l.attributesNum!==te||l.index!==q}function A(W,Z,se,q){const ee={},he=Z.attributes;let te=0;const K=se.getAttributes();for(const Y in K)if(K[Y].location>=0){let D=he[Y];D===void 0&&(Y==="instanceMatrix"&&W.instanceMatrix&&(D=W.instanceMatrix),Y==="instanceColor"&&W.instanceColor&&(D=W.instanceColor));const re={};re.attribute=D,D&&D.data&&(re.data=D.data),ee[Y]=re,te++}l.attributes=ee,l.attributesNum=te,l.index=q}function R(){const W=l.newAttributes;for(let Z=0,se=W.length;Z<se;Z++)W[Z]=0}function y(W){_(W,0)}function _(W,Z){const se=l.newAttributes,q=l.enabledAttributes,ee=l.attributeDivisors;se[W]=1,q[W]===0&&(s.enableVertexAttribArray(W),q[W]=1),ee[W]!==Z&&(s.vertexAttribDivisor(W,Z),ee[W]=Z)}function N(){const W=l.newAttributes,Z=l.enabledAttributes;for(let se=0,q=Z.length;se<q;se++)Z[se]!==W[se]&&(s.disableVertexAttribArray(se),Z[se]=0)}function k(W,Z,se,q,ee,he,te){te===!0?s.vertexAttribIPointer(W,Z,se,ee,he):s.vertexAttribPointer(W,Z,se,q,ee,he)}function C(W,Z,se,q){R();const ee=q.attributes,he=se.getAttributes(),te=Z.defaultAttributeValues;for(const K in he){const Y=he[K];if(Y.location>=0){let H=ee[K];if(H===void 0&&(K==="instanceMatrix"&&W.instanceMatrix&&(H=W.instanceMatrix),K==="instanceColor"&&W.instanceColor&&(H=W.instanceColor)),H!==void 0){const D=H.normalized,re=H.itemSize,ye=e.get(H);if(ye===void 0)continue;const Ve=ye.buffer,ze=ye.type,Ge=ye.bytesPerElement,le=ze===s.INT||ze===s.UNSIGNED_INT||H.gpuType===of;if(H.isInterleavedBufferAttribute){const de=H.data,Ee=de.stride,Qe=H.offset;if(de.isInstancedInterleavedBuffer){for(let Fe=0;Fe<Y.locationSize;Fe++)_(Y.location+Fe,de.meshPerAttribute);W.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Fe=0;Fe<Y.locationSize;Fe++)y(Y.location+Fe);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let Fe=0;Fe<Y.locationSize;Fe++)k(Y.location+Fe,re/Y.locationSize,ze,D,Ee*Ge,(Qe+re/Y.locationSize*Fe)*Ge,le)}else{if(H.isInstancedBufferAttribute){for(let de=0;de<Y.locationSize;de++)_(Y.location+de,H.meshPerAttribute);W.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let de=0;de<Y.locationSize;de++)y(Y.location+de);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let de=0;de<Y.locationSize;de++)k(Y.location+de,re/Y.locationSize,ze,D,re*Ge,re/Y.locationSize*de*Ge,le)}}else if(te!==void 0){const D=te[K];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(Y.location,D);break;case 3:s.vertexAttrib3fv(Y.location,D);break;case 4:s.vertexAttrib4fv(Y.location,D);break;default:s.vertexAttrib1fv(Y.location,D)}}}}N()}function L(){I();for(const W in r){const Z=r[W];for(const se in Z){const q=Z[se];for(const ee in q){const he=q[ee];for(const te in he)v(he[te].object),delete he[te];delete q[ee]}}delete r[W]}}function P(W){if(r[W.id]===void 0)return;const Z=r[W.id];for(const se in Z){const q=Z[se];for(const ee in q){const he=q[ee];for(const te in he)v(he[te].object),delete he[te];delete q[ee]}}delete r[W.id]}function F(W){for(const Z in r){const se=r[Z];for(const q in se){const ee=se[q];if(ee[W.id]===void 0)continue;const he=ee[W.id];for(const te in he)v(he[te].object),delete he[te];delete ee[W.id]}}}function w(W){for(const Z in r){const se=r[Z],q=W.isInstancedMesh===!0?W.id:0,ee=se[q];if(ee!==void 0){for(const he in ee){const te=ee[he];for(const K in te)v(te[K].object),delete te[K];delete ee[he]}delete se[q],Object.keys(se).length===0&&delete r[Z]}}}function I(){B(),u=!0,l!==o&&(l=o,m(l.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:I,resetDefaultState:B,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfObject:w,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:y,disableUnusedAttributes:N}}function DM(s,e,n){let r;function o(p){r=p}function l(p,m){s.drawArrays(r,p,m),n.update(m,r,1)}function u(p,m,v){v!==0&&(s.drawArraysInstanced(r,p,m,v),n.update(m,r,v))}function f(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,v);let x=0;for(let E=0;E<v;E++)x+=m[E];n.update(x,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function IM(s,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==wi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const w=F===Bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Kn&&F!==Ui&&!w&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(st("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const S=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&x===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),k=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:S,reversedDepthBuffer:x,maxTextures:E,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:N,maxVaryings:k,maxFragmentUniforms:C,maxSamples:L,samples:P}}function UM(s){const e=this;let n=null,r=0,o=!1,l=!1;const u=new Rr,f=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const E=S.length!==0||x||r!==0||o;return o=x,r=S.length,E},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,x){n=v(S,x,0)},this.setState=function(S,x,E){const A=S.clippingPlanes,R=S.clipIntersection,y=S.clipShadows,_=s.get(S);if(!o||A===null||A.length===0||l&&!y)l?v(null):m();else{const N=l?0:r,k=N*4;let C=_.clippingState||null;p.value=C,C=v(A,x,k,E);for(let L=0;L!==k;++L)C[L]=n[L];_.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,x,E,A){const R=S!==null?S.length:0;let y=null;if(R!==0){if(y=p.value,A!==!0||y===null){const _=E+R*4,N=x.matrixWorldInverse;f.getNormalMatrix(N),(y===null||y.length<_)&&(y=new Float32Array(_));for(let k=0,C=E;k!==R;++k,C+=4)u.copy(S[k]).applyMatrix4(N,f),u.normal.toArray(y,C),y[C+3]=u.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}const Xs=4,FM=6,OM=20,kM=256,Va=new Mf,Lm=new gt;let od=null,ld=0,cd=0,ud=!1;const BM=new Q,Jr=new Q;class Dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,l={}){const{size:u=256,position:f=BM}=l;od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(od,ld,cd),this._renderer.xr.enabled=ud,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===is||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Bi,format:wi,colorSpace:zl,depthBuffer:!1},o=Im(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Im(e,n,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=zM(l)),this._blurMaterial=VM(l,e,n),this._ggxMaterial=HM(l,e,n)}return o}_compileMaterial(e){const n=new li(new Zn,e);this._renderer.compile(n,Va)}_sceneToCubeUV(e,n,r,o,l){const p=new $n(90,1,n,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,x=S.autoClear,E=S.toneMapping;S.getClearColor(Lm),S.toneMapping=Oi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new li(new to,new Xa({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,y=R.material;let _=!1;const N=e.background;N?N.isColor&&(y.color.copy(N),e.background=null,_=!0):(y.color.copy(Lm),_=!0);for(let k=0;k<6;k++){const C=k%3;C===0?(p.up.set(0,m[k],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+v[k],l.y,l.z)):C===1?(p.up.set(0,0,m[k]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+v[k],l.z)):(p.up.set(0,m[k],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+v[k]));const L=this._cubeSize;Ws(o,C*L,k>2?L:0,L,L),S.setRenderTarget(o),_&&S.render(R,p),S.render(e,p)}S.toneMapping=E,S.autoClear=x,e.background=N}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===is||e.mapping===Ks;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Um());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;Ws(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,Va)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const p=u.uniforms,m=r/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),S=Math.sqrt(m*m-v*v),x=m*1.25,E=S*x,{_lodMax:A}=this,R=this._sizeLods[r],y=3*R*(r>A-Xs?r-A+Xs:0),_=4*(this._cubeSize-R);p.envMap.value=e.texture,p.roughness.value=E,p.mipInt.value=A-n,Ws(l,y,_,3*R,2*R),o.setRenderTarget(l),o.render(f,Va),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=A-r,Ws(e,y,_,3*R,2*R),o.setRenderTarget(e),o.render(f,Va)}_blur(e,n,r,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,n,r,u),this._blurPass(l,e,r,r,u)}_blurPass(e,n,r,o,l){const u=this._renderer,f=this._blurMaterial,p=this._lodMeshes[o];p.material=f;const m=f.uniforms;m.envMap.value=e.texture,m.sigma.value=l,m.mipInt.value=this._lodMax-r;const v=this._sizeLods[o],S=3*v*(o>this._lodMax-Xs?o-this._lodMax+Xs:0),x=4*(this._cubeSize-v);Ws(n,S,x,3*v,2*v),u.setRenderTarget(n),u.render(p,Va)}}function zM(s){const e=[],n=[];let r=s;const o=s-Xs+1+FM;for(let l=0;l<o;l++){const u=Math.pow(2,r);e.push(u);const f=1/(u-2),p=-f,m=1+f,v=[p,p,m,p,m,m,p,p,m,m,p,m],S=6,x=6,E=3,A=new Float32Array(E*x*S),R=new Float32Array(E*x*S);for(let _=0;_<S;_++){const N=_%3*2/3-1,k=_>2?0:-1,C=[N,k,0,N+2/3,k,0,N+2/3,k+1,0,N,k,0,N+2/3,k+1,0,N,k+1,0];A.set(C,E*x*_);for(let L=0;L<x;L++){const P=v[L*2]*2-1,F=v[L*2+1]*2-1;_===0?Jr.set(1,F,P):_===1?Jr.set(-P,1,-F):_===2?Jr.set(-P,F,1):_===3?Jr.set(-1,F,-P):_===4?Jr.set(-P,-1,F):Jr.set(P,F,-1),Jr.toArray(R,(_*x+L)*E)}}const y=new Zn;y.setAttribute("position",new Ti(A,E)),y.setAttribute("outputDirection",new Ti(R,E)),n.push(new li(y,null)),r>Xs&&r--}return{lodMeshes:n,sizeLods:e}}function Im(s,e,n){const r=new bi(s,e,n);return r.texture.mapping=Xl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ws(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function HM(s,e,n){return new zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function VM(s,e,n){return new zi({name:"SphericalGaussianBlur",defines:{SAMPLES:OM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Kl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Um(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Fm(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Kl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class F0 extends bi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new R0(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new to(5,5,5),l=new zi({name:"CubemapFromEquirect",uniforms:Zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:ir});l.uniforms.tEquirect.value=n;const u=new li(o,l),f=n.minFilter;return n.minFilter===es&&(n.minFilter=Cn),new j_(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(l)}}function GM(s){let e=new WeakMap,n=new WeakMap,r=null;function o(x,E=!1){return x==null?null:E?u(x):l(x)}function l(x){if(x&&x.isTexture){const E=x.mapping;if(E===Iu||E===Uu)if(e.has(x)){const A=e.get(x).texture;return f(A,x.mapping)}else{const A=x.image;if(A&&A.height>0){const R=new F0(A.height);return R.fromEquirectangularTexture(s,x),e.set(x,R),x.addEventListener("dispose",m),f(R.texture,x.mapping)}else return null}}return x}function u(x){if(x&&x.isTexture){const E=x.mapping,A=E===Iu||E===Uu,R=E===is||E===Ks;if(A||R){let y=n.get(x);const _=y!==void 0?y.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==_)return r===null&&(r=new Dm(s)),y=A?r.fromEquirectangular(x,y):r.fromCubemap(x,y),y.texture.pmremVersion=x.pmremVersion,n.set(x,y),y.texture;if(y!==void 0)return y.texture;{const N=x.image;return A&&N&&N.height>0||R&&N&&p(N)?(r===null&&(r=new Dm(s)),y=A?r.fromEquirectangular(x):r.fromCubemap(x),y.texture.pmremVersion=x.pmremVersion,n.set(x,y),x.addEventListener("dispose",v),y.texture):null}}}return x}function f(x,E){return E===Iu?x.mapping=is:E===Uu&&(x.mapping=Ks),x}function p(x){let E=0;const A=6;for(let R=0;R<A;R++)x[R]!==void 0&&E++;return E===A}function m(x){const E=x.target;E.removeEventListener("dispose",m);const A=e.get(E);A!==void 0&&(e.delete(E),A.dispose())}function v(x){const E=x.target;E.removeEventListener("dispose",v);const A=n.get(E);A!==void 0&&(n.delete(E),A.dispose())}function S(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function WM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Ys("WebGLRenderer: "+r+" extension not supported."),o}}}function jM(s,e,n,r){const o={},l=new WeakMap;function u(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",u),delete o[x.id];const E=l.get(x);E&&(e.remove(E),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(S,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,n.memory.geometries++),x}function p(S){const x=S.attributes;for(const E in x)e.update(x[E],s.ARRAY_BUFFER)}function m(S){const x=[],E=S.index,A=S.attributes.position;let R=0;if(A===void 0)return;if(E!==null){const N=E.array;R=E.version;for(let k=0,C=N.length;k<C;k+=3){const L=N[k+0],P=N[k+1],F=N[k+2];x.push(L,P,P,F,F,L)}}else{const N=A.array;R=A.version;for(let k=0,C=N.length/3-1;k<C;k+=3){const L=k+0,P=k+1,F=k+2;x.push(L,P,P,F,F,L)}}const y=new(A.count>=65535?T0:b0)(x,1);y.version=R;const _=l.get(S);_&&e.remove(_),l.set(S,y)}function v(S){const x=l.get(S);if(x){const E=S.index;E!==null&&x.version<E.version&&m(S)}else m(S);return l.get(S)}return{get:f,update:p,getWireframeAttribute:v}}function XM(s,e,n){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function p(S,x){s.drawElements(r,x,l,S*u),n.update(x,r,1)}function m(S,x,E){E!==0&&(s.drawElementsInstanced(r,x,l,S*u,E),n.update(x,r,E))}function v(S,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,S,0,E);let R=0;for(let y=0;y<E;y++)R+=x[y];n.update(R,r,1)}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=v}function qM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(l/3);break;case s.LINES:n.lines+=f*(l/2);break;case s.LINE_STRIP:n.lines+=f*(l-1);break;case s.LINE_LOOP:n.lines+=f*l;break;case s.POINTS:n.points+=f*l;break;default:Pt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function YM(s,e,n){const r=new WeakMap,o=new $t;function l(u,f,p){const m=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=v!==void 0?v.length:0;let x=r.get(f);if(x===void 0||x.count!==S){let B=function(){w.dispose(),r.delete(f),f.removeEventListener("dispose",B)};var E=B;x!==void 0&&x.texture.dispose();const A=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],k=f.morphAttributes.color||[];let C=0;A===!0&&(C=1),R===!0&&(C=2),y===!0&&(C=3);let L=f.attributes.position.count*C,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const F=new Float32Array(L*P*4*S),w=new M0(F,L,P,S);w.type=Ui,w.needsUpdate=!0;const I=C*4;for(let W=0;W<S;W++){const Z=_[W],se=N[W],q=k[W],ee=L*P*4*W;for(let he=0;he<Z.count;he++){const te=he*I;A===!0&&(o.fromBufferAttribute(Z,he),F[ee+te+0]=o.x,F[ee+te+1]=o.y,F[ee+te+2]=o.z,F[ee+te+3]=0),R===!0&&(o.fromBufferAttribute(se,he),F[ee+te+4]=o.x,F[ee+te+5]=o.y,F[ee+te+6]=o.z,F[ee+te+7]=0),y===!0&&(o.fromBufferAttribute(q,he),F[ee+te+8]=o.x,F[ee+te+9]=o.y,F[ee+te+10]=o.z,F[ee+te+11]=q.itemSize===4?o.w:1)}}x={count:S,texture:w,size:new xt(L,P)},r.set(f,x),f.addEventListener("dispose",B)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let A=0;for(let y=0;y<m.length;y++)A+=m[y];const R=f.morphTargetsRelative?1:1-A;p.getUniforms().setValue(s,"morphTargetBaseInfluence",R),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function $M(s,e,n,r,o){let l=new WeakMap;function u(m){const v=o.render.frame,S=m.geometry,x=e.get(m,S);if(l.get(x)!==v&&(e.update(x),l.set(x,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==v&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,v))),m.isSkinnedMesh){const E=m.skeleton;l.get(E)!==v&&(E.update(),l.set(E,v))}return x}function f(){l=new WeakMap}function p(m){const v=m.target;v.removeEventListener("dispose",p),r.releaseStatesOfObject(v),n.remove(v.instanceMatrix),v.instanceColor!==null&&n.remove(v.instanceColor)}return{update:u,dispose:f}}const KM={[a0]:"LINEAR_TONE_MAPPING",[o0]:"REINHARD_TONE_MAPPING",[l0]:"CINEON_TONE_MAPPING",[c0]:"ACES_FILMIC_TONE_MAPPING",[d0]:"AGX_TONE_MAPPING",[f0]:"NEUTRAL_TONE_MAPPING",[u0]:"CUSTOM_TONE_MAPPING"};function ZM(s,e,n,r,o,l){const u=new bi(e,n,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,p=null;const m=new Zn;m.setAttribute("position",new In([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new In([0,2,0,0,2,0],2));const v=new O_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),S=new li(m,v),x=new Mf(-1,1,1,-1,0,1);let E=null,A=null,R=!1,y,_=null,N=[],k=!1;this.setSize=function(C,L){u.setSize(C,L),f!==null&&f.setSize(C,L),p!==null&&p.setSize(C,L);for(let P=0;P<N.length;P++){const F=N[P];F.setSize&&F.setSize(C,L)}},this.setEffects=function(C){N=C,k=N.length>0&&N[0].isRenderPass===!0;const L=u.width,P=u.height;N.length>0&&f===null&&(f=new bi(L,P,{type:Bi,depthBuffer:!1,stencilBuffer:!1}),p=new bi(L,P,{type:Bi,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<N.length;F++){const w=N[F];w.setSize&&w.setSize(L,P)}},this.begin=function(C,L){if(R||C.toneMapping===Oi&&N.length===0)return!1;if(_=L,L!==null){const P=L.width,F=L.height;(u.width!==P||u.height!==F)&&this.setSize(P,F)}return k===!1&&C.setRenderTarget(u),y=C.toneMapping,C.toneMapping=Oi,!0},this.hasRenderPass=function(){return k},this.end=function(C,L){C.toneMapping=y,R=!0;let P=u,F=f;for(let w=0;w<N.length;w++){const I=N[w];I.enabled!==!1&&(I.render(C,F,P,L),I.needsSwap!==!1&&(P=F,F=F===f?p:f))}if(E!==C.outputColorSpace||A!==C.toneMapping){E=C.outputColorSpace,A=C.toneMapping,v.defines={},St.getTransfer(E)===Ut&&(v.defines.SRGB_TRANSFER="");const w=KM[A];w&&(v.defines[w]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(_),C.render(S,x),_=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),p!==null&&p.dispose(),m.dispose(),v.dispose()}}const O0=new Dn,tf=new Za(1,1),k0=new M0,B0=new h_,z0=new R0,Om=[],km=[],Bm=new Float32Array(16),zm=new Float32Array(9),Hm=new Float32Array(4);function Qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let l=Om[o];if(l===void 0&&(l=new Float32Array(o),Om[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(l,f)}return l}function un(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function dn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Zl(s,e){let n=km[e];n===void 0&&(n=new Int32Array(e),km[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function JM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function QM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;s.uniform2fv(this.addr,e),dn(n,e)}}function e1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(un(n,e))return;s.uniform3fv(this.addr,e),dn(n,e)}}function t1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;s.uniform4fv(this.addr,e),dn(n,e)}}function n1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(un(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(n,e)}else{if(un(n,r))return;Hm.set(r),s.uniformMatrix2fv(this.addr,!1,Hm),dn(n,r)}}function i1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(un(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(n,e)}else{if(un(n,r))return;zm.set(r),s.uniformMatrix3fv(this.addr,!1,zm),dn(n,r)}}function r1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(un(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(n,e)}else{if(un(n,r))return;Bm.set(r),s.uniformMatrix4fv(this.addr,!1,Bm),dn(n,r)}}function s1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function a1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;s.uniform2iv(this.addr,e),dn(n,e)}}function o1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(un(n,e))return;s.uniform3iv(this.addr,e),dn(n,e)}}function l1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;s.uniform4iv(this.addr,e),dn(n,e)}}function c1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function u1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;s.uniform2uiv(this.addr,e),dn(n,e)}}function d1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(un(n,e))return;s.uniform3uiv(this.addr,e),dn(n,e)}}function f1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;s.uniform4uiv(this.addr,e),dn(n,e)}}function h1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(tf.compareFunction=n.isReversedDepthBuffer()?pf:hf,l=tf):l=O0,n.setTexture2D(e||l,o)}function p1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||B0,o)}function m1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||z0,o)}function g1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||k0,o)}function x1(s){switch(s){case 5126:return JM;case 35664:return QM;case 35665:return e1;case 35666:return t1;case 35674:return n1;case 35675:return i1;case 35676:return r1;case 5124:case 35670:return s1;case 35667:case 35671:return a1;case 35668:case 35672:return o1;case 35669:case 35673:return l1;case 5125:return c1;case 36294:return u1;case 36295:return d1;case 36296:return f1;case 35678:case 36198:case 36298:case 36306:case 35682:return h1;case 35679:case 36299:case 36307:return p1;case 35680:case 36300:case 36308:case 36293:return m1;case 36289:case 36303:case 36311:case 36292:return g1}}function v1(s,e){s.uniform1fv(this.addr,e)}function _1(s,e){const n=Qs(e,this.size,2);s.uniform2fv(this.addr,n)}function y1(s,e){const n=Qs(e,this.size,3);s.uniform3fv(this.addr,n)}function S1(s,e){const n=Qs(e,this.size,4);s.uniform4fv(this.addr,n)}function M1(s,e){const n=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function E1(s,e){const n=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function w1(s,e){const n=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function b1(s,e){s.uniform1iv(this.addr,e)}function T1(s,e){s.uniform2iv(this.addr,e)}function A1(s,e){s.uniform3iv(this.addr,e)}function C1(s,e){s.uniform4iv(this.addr,e)}function R1(s,e){s.uniform1uiv(this.addr,e)}function P1(s,e){s.uniform2uiv(this.addr,e)}function N1(s,e){s.uniform3uiv(this.addr,e)}function L1(s,e){s.uniform4uiv(this.addr,e)}function D1(s,e,n){const r=this.cache,o=e.length,l=Zl(n,o);un(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=tf:u=O0;for(let f=0;f!==o;++f)n.setTexture2D(e[f]||u,l[f])}function I1(s,e,n){const r=this.cache,o=e.length,l=Zl(n,o);un(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||B0,l[u])}function U1(s,e,n){const r=this.cache,o=e.length,l=Zl(n,o);un(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||z0,l[u])}function F1(s,e,n){const r=this.cache,o=e.length,l=Zl(n,o);un(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||k0,l[u])}function O1(s){switch(s){case 5126:return v1;case 35664:return _1;case 35665:return y1;case 35666:return S1;case 35674:return M1;case 35675:return E1;case 35676:return w1;case 5124:case 35670:return b1;case 35667:case 35671:return T1;case 35668:case 35672:return A1;case 35669:case 35673:return C1;case 5125:return R1;case 36294:return P1;case 36295:return N1;case 36296:return L1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return U1;case 36289:case 36303:case 36311:case 36292:return F1}}class k1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=x1(n.type)}}class B1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=O1(n.type)}}class z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,n[f.id],r)}}}const dd=/(\w+)(\])?(\[|\.)?/g;function Vm(s,e){s.seq.push(e),s.map[e.id]=e}function H1(s,e,n){const r=s.name,o=r.length;for(dd.lastIndex=0;;){const l=dd.exec(r),u=dd.lastIndex;let f=l[1];const p=l[2]==="]",m=l[3];if(p&&(f=f|0),m===void 0||m==="["&&u+2===o){Vm(n,m===void 0?new k1(f,s,e):new B1(f,s,e));break}else{let S=n.map[f];S===void 0&&(S=new z1(f),Vm(n,S)),n=S}}}class Ol{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(n,u),p=e.getUniformLocation(n,f.name);H1(f,p,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,u=n.length;l!==u;++l){const f=n[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Gm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const V1=37297;let G1=0;function W1(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const Wm=new ot;function j1(s){St._getMatrix(Wm,St.workingColorSpace,s);const e=`mat3( ${Wm.elements.map(n=>n.toFixed(4))} )`;switch(St.getTransfer(s)){case Hl:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function jm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+W1(s.getShaderSource(e),f)}else return l}function X1(s,e){const n=j1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const q1={[a0]:"Linear",[o0]:"Reinhard",[l0]:"Cineon",[c0]:"ACESFilmic",[d0]:"AgX",[f0]:"Neutral",[u0]:"Custom"};function Y1(s,e){const n=q1[e];return n===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Nl=new Q;function $1(){St.getLuminanceCoefficients(Nl);const s=Nl.x.toFixed(4),e=Nl.y.toFixed(4),n=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function Z1(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function J1(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function ja(s){return s!==""}function Xm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function nf(s){return s.replace(Q1,tE)}const eE=new Map;function tE(s,e){let n=ht[e];if(n===void 0){const r=eE.get(e);if(r!==void 0)n=ht[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return nf(n)}const nE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ym(s){return s.replace(nE,iE)}function iE(s,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function $m(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const rE={[Ll]:"SHADOWMAP_TYPE_PCF",[Wa]:"SHADOWMAP_TYPE_VSM"};function sE(s){return rE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aE={[is]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE",[Xl]:"ENVMAP_TYPE_CUBE_UV"};function oE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":aE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const lE={[Ks]:"ENVMAP_MODE_REFRACTION"};function cE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":lE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uE={[s0]:"ENVMAP_BLENDING_MULTIPLY",[Wv]:"ENVMAP_BLENDING_MIX",[jv]:"ENVMAP_BLENDING_ADD"};function dE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":uE[s.combine]||"ENVMAP_BLENDING_NONE"}function fE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function hE(s,e,n,r){const o=s.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=sE(n),m=oE(n),v=cE(n),S=dE(n),x=fE(n),E=K1(n),A=Z1(l),R=o.createProgram();let y,_,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(ja).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(ja).join(`
`),_.length>0&&(_+=`
`)):(y=[$m(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),_=[$m(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Oi?"#define TONE_MAPPING":"",n.toneMapping!==Oi?ht.tonemapping_pars_fragment:"",n.toneMapping!==Oi?Y1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,X1("linearToOutputTexel",n.outputColorSpace),$1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ja).join(`
`)),u=nf(u),u=Xm(u,n),u=qm(u,n),f=nf(f),f=Xm(f,n),f=qm(f,n),u=Ym(u),f=Ym(f),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",n.glslVersion===am?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===am?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const k=N+y+u,C=N+_+f,L=Gm(o,o.VERTEX_SHADER,k),P=Gm(o,o.FRAGMENT_SHADER,C);o.attachShader(R,L),o.attachShader(R,P),n.index0AttributeName!==void 0?o.bindAttribLocation(R,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function F(W){if(s.debug.checkShaderErrors){const Z=o.getProgramInfoLog(R)||"",se=o.getShaderInfoLog(L)||"",q=o.getShaderInfoLog(P)||"",ee=Z.trim(),he=se.trim(),te=q.trim();let K=!0,Y=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,R,L,P);else{const H=jm(o,L,"vertex"),D=jm(o,P,"fragment");Pt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+ee+`
`+H+`
`+D)}else ee!==""?st("WebGLProgram: Program Info Log:",ee):(he===""||te==="")&&(Y=!1);Y&&(W.diagnostics={runnable:K,programLog:ee,vertexShader:{log:he,prefix:y},fragmentShader:{log:te,prefix:_}})}o.deleteShader(L),o.deleteShader(P),w=new Ol(o,R),I=J1(o,R)}let w;this.getUniforms=function(){return w===void 0&&F(this),w};let I;this.getAttributes=function(){return I===void 0&&F(this),I};let B=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=o.getProgramParameter(R,V1)),B},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=G1++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=L,this.fragmentShader=P,this}let pE=0;class mE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new gE(e),n.set(e,r)),r}}class gE{constructor(e){this.id=pE++,this.code=e,this.usedTimes=0}}function xE(s){return s===rs||s===kl||s===Bl}function vE(s,e,n,r,o,l){const u=new E0,f=new mE,p=new Set,m=[],v=new Map,S=r.logarithmicDepthBuffer;let x=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return p.add(w),w===0?"uv":`uv${w}`}function R(w,I,B,W,Z,se){const q=W.fog,ee=Z.geometry,he=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?W.environment:null,te=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,K=e.get(w.envMap||he,te),Y=K&&K.mapping===Xl?K.image.height:null,H=E[w.type];w.precision!==null&&(x=r.getMaxPrecision(w.precision),x!==w.precision&&st("WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const D=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,re=D!==void 0?D.length:0;let ye=0;ee.morphAttributes.position!==void 0&&(ye=1),ee.morphAttributes.normal!==void 0&&(ye=2),ee.morphAttributes.color!==void 0&&(ye=3);let Ve,ze,Ge,le;if(H){const At=Ii[H];Ve=At.vertexShader,ze=At.fragmentShader}else{Ve=w.vertexShader,ze=w.fragmentShader;const At=f.getVertexShaderStage(w),wt=f.getFragmentShaderStage(w);f.update(w,At,wt),Ge=At.id,le=wt.id}const de=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),Qe=Z.isInstancedMesh===!0,Fe=Z.isBatchedMesh===!0,ct=!!w.map,Vt=!!w.matcap,ut=!!K,vt=!!w.aoMap,Dt=!!w.lightMap,dt=!!w.bumpMap&&w.wireframe===!1,Ft=!!w.normalMap,Zt=!!w.displacementMap,nn=!!w.emissiveMap,Lt=!!w.metalnessMap,Gt=!!w.roughnessMap,j=w.anisotropy>0,an=w.clearcoat>0,Tt=w.dispersion>0,U=w.retroreflectivity>0,M=w.iridescence>0,$=w.sheen>0,oe=w.transmission>0,fe=j&&!!w.anisotropyMap,Me=an&&!!w.clearcoatMap,Te=an&&!!w.clearcoatNormalMap,pe=an&&!!w.clearcoatRoughnessMap,ge=M&&!!w.iridescenceMap,Re=M&&!!w.iridescenceThicknessMap,Ye=$&&!!w.sheenColorMap,Pe=$&&!!w.sheenRoughnessMap,be=!!w.specularMap,$e=!!w.specularColorMap,et=!!w.specularIntensityMap,it=oe&&!!w.transmissionMap,V=oe&&!!w.thicknessMap,Ae=!!w.gradientMap,me=!!w.alphaMap,Ce=w.alphaTest>0,Ue=!!w.alphaHash,xe=!!w.extensions;let Ze=Oi;w.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Ze=s.toneMapping);const Xe={shaderID:H,shaderType:w.type,shaderName:w.name,vertexShader:Ve,fragmentShader:ze,defines:w.defines,customVertexShaderID:Ge,customFragmentShaderID:le,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:Fe,batchingColor:Fe&&Z._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&Z.instanceColor!==null,instancingMorph:Qe&&Z.morphTexture!==null,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:St.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:ct,matcap:Vt,envMap:ut,envMapMode:ut&&K.mapping,envMapCubeUVHeight:Y,aoMap:vt,lightMap:Dt,bumpMap:dt,normalMap:Ft,displacementMap:Zt,emissiveMap:nn,normalMapObjectSpace:Ft&&w.normalMapType===Yv,normalMapTangentSpace:Ft&&w.normalMapType===sm,packedNormalMap:Ft&&w.normalMapType===sm&&xE(w.normalMap.format),metalnessMap:Lt,roughnessMap:Gt,anisotropy:j,anisotropyMap:fe,clearcoat:an,clearcoatMap:Me,clearcoatNormalMap:Te,clearcoatRoughnessMap:pe,dispersion:Tt,retroreflection:U,iridescence:M,iridescenceMap:ge,iridescenceThicknessMap:Re,sheen:$,sheenColorMap:Ye,sheenRoughnessMap:Pe,specularMap:be,specularColorMap:$e,specularIntensityMap:et,transmission:oe,transmissionMap:it,thicknessMap:V,gradientMap:Ae,opaque:w.transparent===!1&&w.blending===qs&&w.alphaToCoverage===!1,alphaMap:me,alphaTest:Ce,alphaHash:Ue,combine:w.combine,mapUv:ct&&A(w.map.channel),aoMapUv:vt&&A(w.aoMap.channel),lightMapUv:Dt&&A(w.lightMap.channel),bumpMapUv:dt&&A(w.bumpMap.channel),normalMapUv:Ft&&A(w.normalMap.channel),displacementMapUv:Zt&&A(w.displacementMap.channel),emissiveMapUv:nn&&A(w.emissiveMap.channel),metalnessMapUv:Lt&&A(w.metalnessMap.channel),roughnessMapUv:Gt&&A(w.roughnessMap.channel),anisotropyMapUv:fe&&A(w.anisotropyMap.channel),clearcoatMapUv:Me&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:Te&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&A(w.sheenRoughnessMap.channel),specularMapUv:be&&A(w.specularMap.channel),specularColorMapUv:$e&&A(w.specularColorMap.channel),specularIntensityMapUv:et&&A(w.specularIntensityMap.channel),transmissionMapUv:it&&A(w.transmissionMap.channel),thicknessMapUv:V&&A(w.thicknessMap.channel),alphaMapUv:me&&A(w.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Ft||j),vertexNormals:!!ee.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ee.attributes.uv&&(ct||me),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||ee.attributes.normal===void 0&&Ft===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ee,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ye,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:se.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ze,decodeVideoTexture:ct&&w.map.isVideoTexture===!0&&St.getTransfer(w.map.colorSpace)===Ut,decodeVideoTextureEmissive:nn&&w.emissiveMap.isVideoTexture===!0&&St.getTransfer(w.emissiveMap.colorSpace)===Ut,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===tr,flipSided:w.side===Vn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:xe&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&w.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Xe.vertexUv1s=p.has(1),Xe.vertexUv2s=p.has(2),Xe.vertexUv3s=p.has(3),p.clear(),Xe}function y(w){const I=[];if(w.shaderID?I.push(w.shaderID):(I.push(w.customVertexShaderID),I.push(w.customFragmentShaderID)),w.defines!==void 0)for(const B in w.defines)I.push(B),I.push(w.defines[B]);return w.isRawShaderMaterial===!1&&(_(I,w),N(I,w),I.push(s.outputColorSpace)),I.push(w.customProgramCacheKey),I.join()}function _(w,I){w.push(I.precision),w.push(I.outputColorSpace),w.push(I.envMapMode),w.push(I.envMapCubeUVHeight),w.push(I.mapUv),w.push(I.alphaMapUv),w.push(I.lightMapUv),w.push(I.aoMapUv),w.push(I.bumpMapUv),w.push(I.normalMapUv),w.push(I.displacementMapUv),w.push(I.emissiveMapUv),w.push(I.metalnessMapUv),w.push(I.roughnessMapUv),w.push(I.anisotropyMapUv),w.push(I.clearcoatMapUv),w.push(I.clearcoatNormalMapUv),w.push(I.clearcoatRoughnessMapUv),w.push(I.iridescenceMapUv),w.push(I.iridescenceThicknessMapUv),w.push(I.sheenColorMapUv),w.push(I.sheenRoughnessMapUv),w.push(I.specularMapUv),w.push(I.specularColorMapUv),w.push(I.specularIntensityMapUv),w.push(I.transmissionMapUv),w.push(I.thicknessMapUv),w.push(I.combine),w.push(I.fogExp2),w.push(I.sizeAttenuation),w.push(I.morphTargetsCount),w.push(I.morphAttributeCount),w.push(I.numSunLights),w.push(I.numDirLights),w.push(I.numPointLights),w.push(I.numSpotLights),w.push(I.numSpotLightMaps),w.push(I.numHemiLights),w.push(I.numRectAreaLights),w.push(I.numSunLightShadows),w.push(I.numDirLightShadows),w.push(I.numPointLightShadows),w.push(I.numSpotLightShadows),w.push(I.numSpotLightShadowsWithMaps),w.push(I.numLightProbes),w.push(I.shadowMapType),w.push(I.toneMapping),w.push(I.numClippingPlanes),w.push(I.numClipIntersection),w.push(I.depthPacking)}function N(w,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.retroreflection&&u.enable(24),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),I.hasPositionAttribute&&u.enable(23),w.push(u.mask)}function k(w){const I=E[w.type];let B;if(I){const W=Ii[I];B=I_.clone(W.uniforms)}else B=w.uniforms;return B}function C(w,I){let B=v.get(I);return B!==void 0?++B.usedTimes:(B=new hE(s,I,w,o),m.push(B),v.set(I,B)),B}function L(w){if(--w.usedTimes===0){const I=m.indexOf(w);m[I]=m[m.length-1],m.pop(),v.delete(w.cacheKey),w.destroy()}}function P(w){f.remove(w)}function F(){f.dispose()}return{getParameters:R,getProgramCacheKey:y,getUniforms:k,acquireProgram:C,releaseProgram:L,releaseShaderCache:P,programs:m,dispose:F}}function _E(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,p){s.get(u)[f]=p}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function yE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Km(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Zm(){const s=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function u(x){let E=0;return x.isInstancedMesh&&(E+=2),x.isSkinnedMesh&&(E+=1),E}function f(x,E,A,R,y,_){let N=s[e];return N===void 0?(N={id:x.id,object:x,geometry:E,material:A,materialVariant:u(x),groupOrder:R,renderOrder:x.renderOrder,z:y,group:_},s[e]=N):(N.id=x.id,N.object=x,N.geometry=E,N.material=A,N.materialVariant=u(x),N.groupOrder=R,N.renderOrder=x.renderOrder,N.z=y,N.group=_),e++,N}function p(x,E,A,R,y,_,N){N.reversedDepth===!0&&(y=-y);const k=f(x,E,A,R,y,_);A.transmission>0?r.push(k):A.transparent===!0?o.push(k):n.push(k)}function m(x,E,A,R,y,_){const N=f(x,E,A,R,y,_);A.transmission>0?r.unshift(N):A.transparent===!0?o.unshift(N):n.unshift(N)}function v(x,E){n.length>1&&n.sort(x||yE),r.length>1&&r.sort(E||Km),o.length>1&&o.sort(E||Km)}function S(){for(let x=e,E=s.length;x<E;x++){const A=s[x];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:p,unshift:m,finish:S,sort:v}}function SE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Zm,s.set(r,[u])):o>=l.length?(u=new Zm,l.push(u)):u=l[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function ME(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new Q,color:new gt};break;case"SpotLight":n={position:new Q,direction:new Q,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new gt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":n={color:new gt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=n,n}}}function EE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let wE=0;function bE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function TE(s){const e=new ME,n=EE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const o=new Q,l=new Kt,u=new Kt;function f(m){let v=0,S=0,x=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let E=0,A=0,R=0,y=0,_=0,N=0,k=0,C=0,L=0,P=0,F=0,w=0,I=0,B=0;m.sort(bE);for(let Z=0,se=m.length;Z<se;Z++){const q=m[Z],ee=q.color,he=q.intensity,te=q.distance;let K=null;if(q.shadow&&q.shadow.map&&(q.shadow.map.texture.format===rs?K=q.shadow.map.texture:K=q.shadow.map.depthTexture||q.shadow.map.texture),q.isAmbientLight)v+=ee.r*he,S+=ee.g*he,x+=ee.b*he;else if(q.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(q.sh.coefficients[Y],he);B++}else if(q.isSunLight){const Y=e.get(q);if(Y.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const H=q.shadow,D=n.get(q);D.shadowIntensity=H.intensity,D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),r.sunShadow[A]=D,r.sunShadowMap[A]=K;const re=H.getViewportCount();for(let ye=0;ye<re;ye++)r.sunShadowMatrix[R+ye]=H.getMatrix(ye),r.sunShadowCascade[R+ye]=H._cascadeData[ye];R+=re,A++}r.sun[E]=Y,E++}else if(q.isDirectionalLight){const Y=e.get(q);if(Y.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const H=q.shadow,D=n.get(q);D.shadowIntensity=H.intensity,D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,r.directionalShadow[y]=D,r.directionalShadowMap[y]=K,r.directionalShadowMatrix[y]=q.shadow.matrix,L++}r.directional[y]=Y,y++}else if(q.isSpotLight){const Y=e.get(q);Y.position.setFromMatrixPosition(q.matrixWorld),Y.color.copy(ee).multiplyScalar(he),Y.distance=te,Y.coneCos=Math.cos(q.angle),Y.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),Y.decay=q.decay,r.spot[N]=Y;const H=q.shadow;if(q.map&&(r.spotLightMap[w]=q.map,w++,H.updateMatrices(q),q.castShadow&&I++),r.spotLightMatrix[N]=H.matrix,q.castShadow){const D=n.get(q);D.shadowIntensity=H.intensity,D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,r.spotShadow[N]=D,r.spotShadowMap[N]=K,F++}N++}else if(q.isRectAreaLight){const Y=e.get(q);Y.color.copy(ee).multiplyScalar(he),Y.halfWidth.set(q.width*.5,0,0),Y.halfHeight.set(0,q.height*.5,0),r.rectArea[k]=Y,k++}else if(q.isPointLight){const Y=e.get(q);if(Y.color.copy(q.color).multiplyScalar(q.intensity),Y.distance=q.distance,Y.decay=q.decay,q.castShadow){const H=q.shadow,D=n.get(q);D.shadowIntensity=H.intensity,D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,D.shadowCameraNear=H.camera.near,D.shadowCameraFar=H.camera.far,r.pointShadow[_]=D,r.pointShadowMap[_]=K,r.pointShadowMatrix[_]=q.shadow.matrix,P++}r.point[_]=Y,_++}else if(q.isHemisphereLight){const Y=e.get(q);Y.skyColor.copy(q.color).multiplyScalar(he),Y.groundColor.copy(q.groundColor).multiplyScalar(he),r.hemi[C]=Y,C++}}k>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=x;const W=r.hash;(W.sunLength!==E||W.directionalLength!==y||W.pointLength!==_||W.spotLength!==N||W.rectAreaLength!==k||W.hemiLength!==C||W.numSunShadows!==A||W.numDirectionalShadows!==L||W.numPointShadows!==P||W.numSpotShadows!==F||W.numSpotMaps!==w||W.numLightProbes!==B)&&(r.sun.length=E,r.directional.length=y,r.spot.length=N,r.rectArea.length=k,r.point.length=_,r.hemi.length=C,r.sunShadow.length=A,r.sunShadowMap.length=A,r.sunShadowMatrix.length=R,r.sunShadowCascade.length=R,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.directionalShadowMatrix.length=L,r.pointShadow.length=P,r.pointShadowMap.length=P,r.pointShadowMatrix.length=P,r.spotShadow.length=F,r.spotShadowMap.length=F,r.spotLightMatrix.length=F+w-I,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=B,W.sunLength=E,W.directionalLength=y,W.pointLength=_,W.spotLength=N,W.rectAreaLength=k,W.hemiLength=C,W.numSunShadows=A,W.numDirectionalShadows=L,W.numPointShadows=P,W.numSpotShadows=F,W.numSpotMaps=w,W.numLightProbes=B,r.version=wE++)}function p(m,v){let S=0,x=0,E=0,A=0,R=0,y=0;const _=v.matrixWorldInverse;for(let N=0,k=m.length;N<k;N++){const C=m[N];if(C.isSunLight){const L=r.sun[S];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(_),S++}else if(C.isDirectionalLight){const L=r.directional[x];L.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(_),x++}else if(C.isSpotLight){const L=r.spot[A];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(_),L.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(_),A++}else if(C.isRectAreaLight){const L=r.rectArea[R];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(_),u.identity(),l.copy(C.matrixWorld),l.premultiply(_),u.extractRotation(l),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),R++}else if(C.isPointLight){const L=r.point[E];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(_),E++}else if(C.isHemisphereLight){const L=r.hemi[y];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(_),y++}}}return{setup:f,setupView:p,state:r}}function Jm(s){const e=new TE(s),n=[],r=[],o=[];function l(x){S.camera=x,n.length=0,r.length=0,o.length=0}function u(x){n.push(x)}function f(x){r.push(x)}function p(x){o.push(x)}function m(){e.setup(n)}function v(x){e.setupView(n,x)}const S={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:m,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:p}}function AE(s){let e=new WeakMap;function n(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Jm(s),e.set(o,[f])):l>=u.length?(f=new Jm(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const CE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,PE=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],NE=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Qm=new Kt,Ga=new Q,fd=new Q;function LE(s,e,n){let r=new xf;const o=new xt,l=new xt,u=new $t,f=new k_,p=new B_,m={},v=n.maxTextureSize,S={[ns]:Vn,[Vn]:ns,[tr]:tr},x=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:CE,fragmentShader:RE}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const A=new Zn;A.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new li(A,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ll;let _=this.type;this.render=function(P,F,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===bv&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ll);const I=s.getRenderTarget(),B=s.getActiveCubeFace(),W=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(ir),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const se=_!==this.type;se&&F.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(ee=>ee.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,ee=P.length;q<ee;q++){const he=P[q],te=he.shadow;if(te===void 0){st("WebGLShadowMap:",he,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;o.copy(te.mapSize);const K=te.getFrameExtents();o.multiply(K),l.copy(te.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/K.x),o.x=l.x*K.x,te.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/K.y),o.y=l.y*K.y,te.mapSize.y=l.y));const Y=s.state.buffers.depth.getReversed();if(te.camera._reversedDepth=Y,te.map===null||se===!0){if(te.map!==null&&(te.map.depthTexture!==null&&(te.map.depthTexture.dispose(),te.map.depthTexture=null),te.map.dispose()),this.type===Wa){if(he.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}te.map=new bi(o.x,o.y,{format:rs,type:Bi,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),te.map.texture.name=he.name+".shadowMap",te.map.depthTexture=new Za(o.x,o.y,Ui),te.map.depthTexture.name=he.name+".shadowMapDepth",te.map.depthTexture.format=sr,te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=_n,te.map.depthTexture.magFilter=_n}else he.isPointLight?(te.map=new F0(o.x),te.map.depthTexture=new L_(o.x,ki)):(te.map=new bi(o.x,o.y),te.map.depthTexture=new Za(o.x,o.y,ki)),te.map.depthTexture.name=he.name+".shadowMap",te.map.depthTexture.format=sr,this.type===Ll?(te.map.depthTexture.compareFunction=Y?pf:hf,te.map.depthTexture.minFilter=Cn,te.map.depthTexture.magFilter=Cn):(te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=_n,te.map.depthTexture.magFilter=_n);te.camera.updateProjectionMatrix()}te.map.isWebGLCubeRenderTarget!==!0&&(te.map.width!==o.x||te.map.height!==o.y)&&te.map.setSize(o.x,o.y);const H=te.map.isWebGLCubeRenderTarget?6:te.getViewportCount();he.isPointLight!==!0&&te.updateMatrices(he,w);for(let D=0;D<H;D++){const re=te.getCamera(D);if(he.isPointLight){const ye=te.camera,Ve=te.matrix,ze=he.distance||ye.far;ze!==ye.far&&(ye.far=ze,ye.updateProjectionMatrix()),Ga.setFromMatrixPosition(he.matrixWorld),ye.position.copy(Ga),fd.copy(ye.position),fd.add(PE[D]),ye.up.copy(NE[D]),ye.lookAt(fd),ye.updateMatrixWorld(),Ve.makeTranslation(-Ga.x,-Ga.y,-Ga.z),Qm.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),te._frustum.setFromProjectionMatrix(Qm,ye.coordinateSystem,ye.reversedDepth)}if(te.map.isWebGLCubeRenderTarget)s.setRenderTarget(te.map,D),s.clear();else{D===0&&(s.setRenderTarget(te.map),s.clear());const ye=te.getViewport(D);u.set(l.x*ye.x,l.y*ye.y,l.x*ye.z,l.y*ye.w),Z.viewport(u)}r=te.getFrustum(D),C(F,w,re,he,this.type)}te.isPointLightShadow!==!0&&this.type===Wa&&N(te,w),te.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(I,B,W)};function N(P,F){const w=e.update(R);x.defines.VSM_SAMPLES!==P.blurSamples&&(x.defines.VSM_SAMPLES=P.blurSamples,E.defines.VSM_SAMPLES=P.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),P.mapPass===null?P.mapPass=new bi(o.x,o.y,{format:rs,type:Bi}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),x.uniforms.shadow_pass.value=P.map.depthTexture,x.uniforms.resolution.value.set(P.map.width,P.map.height),x.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(F,null,w,x,R,null),E.uniforms.shadow_pass.value=P.mapPass.texture,E.uniforms.resolution.value.set(P.map.width,P.map.height),E.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(F,null,w,E,R,null)}function k(P,F,w,I){let B=null;const W=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(W!==void 0)B=W;else if(B=w.isPointLight===!0?p:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Z=B.uuid,se=F.uuid;let q=m[Z];q===void 0&&(q={},m[Z]=q);let ee=q[se];ee===void 0&&(ee=B.clone(),q[se]=ee,F.addEventListener("dispose",L)),B=ee}if(B.visible=F.visible,B.wireframe=F.wireframe,I===Wa?B.side=F.shadowSide!==null?F.shadowSide:F.side:B.side=F.shadowSide!==null?F.shadowSide:S[F.side],B.alphaMap=F.alphaMap,B.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,B.map=F.map,B.clipShadows=F.clipShadows,B.clippingPlanes=F.clippingPlanes,B.clipIntersection=F.clipIntersection,B.displacementMap=F.displacementMap,B.displacementScale=F.displacementScale,B.displacementBias=F.displacementBias,B.wireframeLinewidth=F.wireframeLinewidth,B.linewidth=F.linewidth,w.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const Z=s.properties.get(B);Z.light=w}return B}function C(P,F,w,I,B){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&B===Wa)&&(!P.frustumCulled||P.intersectsFrustum(r))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const se=e.update(P),q=P.material;if(Array.isArray(q)){const ee=se.groups;for(let he=0,te=ee.length;he<te;he++){const K=ee[he],Y=q[K.materialIndex];if(Y&&Y.visible){const H=k(P,Y,I,B);P.onBeforeShadow(s,P,F,w,se,H,K),s.renderBufferDirect(w,null,se,H,P,K),P.onAfterShadow(s,P,F,w,se,H,K)}}}else if(q.visible){const ee=k(P,q,I,B);P.onBeforeShadow(s,P,F,w,se,ee,null),s.renderBufferDirect(w,null,se,ee,P,null),P.onAfterShadow(s,P,F,w,se,ee,null)}}const Z=P.children;for(let se=0,q=Z.length;se<q;se++)C(Z[se],F,w,I,B)}function L(P){P.target.removeEventListener("dispose",L);for(const w in m){const I=m[w],B=P.target.uuid;B in I&&(I[B].dispose(),delete I[B])}}}function DE(s,e){function n(){let V=!1;const Ae=new $t;let me=null;const Ce=new $t(0,0,0,0);return{setMask:function(Ue){me!==Ue&&!V&&(s.colorMask(Ue,Ue,Ue,Ue),me=Ue)},setLocked:function(Ue){V=Ue},setClear:function(Ue,xe,Ze,Xe,At){At===!0&&(Ue*=Xe,xe*=Xe,Ze*=Xe),Ae.set(Ue,xe,Ze,Xe),Ce.equals(Ae)===!1&&(s.clearColor(Ue,xe,Ze,Xe),Ce.copy(Ae))},reset:function(){V=!1,me=null,Ce.set(-1,0,0,0)}}}function r(){let V=!1,Ae=!1,me=null,Ce=null,Ue=null;return{setReversed:function(xe){if(Ae!==xe){const Ze=e.get("EXT_clip_control");xe?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Ae=xe;const Xe=Ue;Ue=null,this.setClear(Xe)}},getReversed:function(){return Ae},setTest:function(xe){xe?de(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(xe){me!==xe&&!V&&(s.depthMask(xe),me=xe)},setFunc:function(xe){if(Ae&&(xe=a_[xe]),Ce!==xe){switch(xe){case pd:s.depthFunc(s.NEVER);break;case md:s.depthFunc(s.ALWAYS);break;case gd:s.depthFunc(s.LESS);break;case qa:s.depthFunc(s.LEQUAL);break;case xd:s.depthFunc(s.EQUAL);break;case vd:s.depthFunc(s.GEQUAL);break;case _d:s.depthFunc(s.GREATER);break;case yd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ce=xe}},setLocked:function(xe){V=xe},setClear:function(xe){Ue!==xe&&(Ue=xe,Ae&&(xe=1-xe),s.clearDepth(xe))},reset:function(){V=!1,me=null,Ce=null,Ue=null,Ae=!1}}}function o(){let V=!1,Ae=null,me=null,Ce=null,Ue=null,xe=null,Ze=null,Xe=null,At=null;return{setTest:function(wt){V||(wt?de(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(wt){Ae!==wt&&!V&&(s.stencilMask(wt),Ae=wt)},setFunc:function(wt,gn,Jn){(me!==wt||Ce!==gn||Ue!==Jn)&&(s.stencilFunc(wt,gn,Jn),me=wt,Ce=gn,Ue=Jn)},setOp:function(wt,gn,Jn){(xe!==wt||Ze!==gn||Xe!==Jn)&&(s.stencilOp(wt,gn,Jn),xe=wt,Ze=gn,Xe=Jn)},setLocked:function(wt){V=wt},setClear:function(wt){At!==wt&&(s.clearStencil(wt),At=wt)},reset:function(){V=!1,Ae=null,me=null,Ce=null,Ue=null,xe=null,Ze=null,Xe=null,At=null}}}const l=new n,u=new r,f=new o,p=new WeakMap,m=new WeakMap;let v={},S={},x={},E=new WeakMap,A=[],R=null,y=!1,_=null,N=null,k=null,C=null,L=null,P=null,F=null,w=new gt(0,0,0),I=0,B=!1,W=null,Z=null,se=null,q=null,ee=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,K=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),te=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),te=K>=2);let H=null,D={};const re=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Ve=new $t().fromArray(re),ze=new $t().fromArray(ye);function Ge(V,Ae,me,Ce){const Ue=new Uint8Array(4),xe=s.createTexture();s.bindTexture(V,xe),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<me;Ze++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,Ce,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(Ae+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return xe}const le={};le[s.TEXTURE_2D]=Ge(s.TEXTURE_2D,s.TEXTURE_2D,1),le[s.TEXTURE_CUBE_MAP]=Ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[s.TEXTURE_2D_ARRAY]=Ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),le[s.TEXTURE_3D]=Ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),de(s.DEPTH_TEST),u.setFunc(qa),dt(!1),Ft(tm),de(s.CULL_FACE),vt(ir);function de(V){v[V]!==!0&&(s.enable(V),v[V]=!0)}function Ee(V){v[V]!==!1&&(s.disable(V),v[V]=!1)}function Qe(V,Ae){return x[V]!==Ae?(s.bindFramebuffer(V,Ae),x[V]=Ae,V===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ae),V===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Fe(V,Ae){let me=A,Ce=!1;if(V){me=E.get(Ae),me===void 0&&(me=[],E.set(Ae,me));const Ue=V.textures;if(me.length!==Ue.length||me[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,Ze=Ue.length;xe<Ze;xe++)me[xe]=s.COLOR_ATTACHMENT0+xe;me.length=Ue.length,Ce=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,Ce=!0);Ce&&s.drawBuffers(me)}function ct(V){return R!==V?(s.useProgram(V),R=V,!0):!1}const Vt={[js]:s.FUNC_ADD,[Av]:s.FUNC_SUBTRACT,[Cv]:s.FUNC_REVERSE_SUBTRACT};Vt[Rv]=s.MIN,Vt[Pv]=s.MAX;const ut={[Nv]:s.ZERO,[Lv]:s.ONE,[Dv]:s.SRC_COLOR,[i0]:s.SRC_ALPHA,[Bv]:s.SRC_ALPHA_SATURATE,[Ov]:s.DST_COLOR,[Uv]:s.DST_ALPHA,[Iv]:s.ONE_MINUS_SRC_COLOR,[r0]:s.ONE_MINUS_SRC_ALPHA,[kv]:s.ONE_MINUS_DST_COLOR,[Fv]:s.ONE_MINUS_DST_ALPHA,[zv]:s.CONSTANT_COLOR,[Hv]:s.ONE_MINUS_CONSTANT_COLOR,[Vv]:s.CONSTANT_ALPHA,[Gv]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(V,Ae,me,Ce,Ue,xe,Ze,Xe,At,wt){if(V===ir){y===!0&&(Ee(s.BLEND),y=!1);return}if(y===!1&&(de(s.BLEND),y=!0),V!==Tv){if(V!==_||wt!==B){if((N!==js||L!==js)&&(s.blendEquation(s.FUNC_ADD),N=js,L=js),wt)switch(V){case qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nm:s.blendFunc(s.ONE,s.ONE);break;case im:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case rm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Pt("WebGLState: Invalid blending: ",V);break}else switch(V){case qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case im:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rm:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",V);break}k=null,C=null,P=null,F=null,w.set(0,0,0),I=0,_=V,B=wt}return}Ue=Ue||Ae,xe=xe||me,Ze=Ze||Ce,(Ae!==N||Ue!==L)&&(s.blendEquationSeparate(Vt[Ae],Vt[Ue]),N=Ae,L=Ue),(me!==k||Ce!==C||xe!==P||Ze!==F)&&(s.blendFuncSeparate(ut[me],ut[Ce],ut[xe],ut[Ze]),k=me,C=Ce,P=xe,F=Ze),(Xe.equals(w)===!1||At!==I)&&(s.blendColor(Xe.r,Xe.g,Xe.b,At),w.copy(Xe),I=At),_=V,B=!1}function Dt(V,Ae){V.side===tr?Ee(s.CULL_FACE):de(s.CULL_FACE);let me=V.side===Vn;Ae&&(me=!me),dt(me),V.blending===qs&&V.transparent===!1?vt(ir):vt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),l.setMask(V.colorWrite);const Ce=V.stencilWrite;f.setTest(Ce),Ce&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),nn(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(V){W!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),W=V)}function Ft(V){V!==Ev?(de(s.CULL_FACE),V!==Z&&(V===tm?s.cullFace(s.BACK):V===wv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),Z=V}function Zt(V){V!==se&&(te&&s.lineWidth(V),se=V)}function nn(V,Ae,me){V?(de(s.POLYGON_OFFSET_FILL),(q!==Ae||ee!==me)&&(q=Ae,ee=me,u.getReversed()&&(Ae=-Ae),s.polygonOffset(Ae,me))):Ee(s.POLYGON_OFFSET_FILL)}function Lt(V){V?de(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function Gt(V){V===void 0&&(V=s.TEXTURE0+he-1),H!==V&&(s.activeTexture(V),H=V)}function j(V,Ae,me){me===void 0&&(H===null?me=s.TEXTURE0+he-1:me=H);let Ce=D[me];Ce===void 0&&(Ce={type:void 0,texture:void 0},D[me]=Ce),(Ce.type!==V||Ce.texture!==Ae)&&(H!==me&&(s.activeTexture(me),H=me),s.bindTexture(V,Ae||le[V]),Ce.type=V,Ce.texture=Ae)}function an(){const V=D[H];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Tt(){try{s.compressedTexImage2D(...arguments)}catch(V){Pt("WebGLState:",V)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(V){Pt("WebGLState:",V)}}function M(){try{s.texSubImage2D(...arguments)}catch(V){Pt("WebGLState:",V)}}function $(){try{s.texSubImage3D(...arguments)}catch(V){Pt("WebGLState:",V)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(V){Pt("WebGLState:",V)}}function fe(){try{s.compressedTexSubImage3D(...arguments)}catch(V){Pt("WebGLState:",V)}}function Me(){try{s.texStorage2D(...arguments)}catch(V){Pt("WebGLState:",V)}}function Te(){try{s.texStorage3D(...arguments)}catch(V){Pt("WebGLState:",V)}}function pe(){try{s.texImage2D(...arguments)}catch(V){Pt("WebGLState:",V)}}function ge(){try{s.texImage3D(...arguments)}catch(V){Pt("WebGLState:",V)}}function Re(V){return S[V]!==void 0?S[V]:s.getParameter(V)}function Ye(V,Ae){S[V]!==Ae&&(s.pixelStorei(V,Ae),S[V]=Ae)}function Pe(V){Ve.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ve.copy(V))}function be(V){ze.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),ze.copy(V))}function $e(V,Ae){let me=m.get(Ae);me===void 0&&(me=new WeakMap,m.set(Ae,me));let Ce=me.get(V);Ce===void 0&&(Ce=s.getUniformBlockIndex(Ae,V.name),me.set(V,Ce))}function et(V,Ae){const Ce=m.get(Ae).get(V);p.get(Ae)!==Ce&&(s.uniformBlockBinding(Ae,Ce,V.__bindingPointIndex),p.set(Ae,Ce))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},S={},H=null,D={},x={},E=new WeakMap,A=[],R=null,y=!1,_=null,N=null,k=null,C=null,L=null,P=null,F=null,w=new gt(0,0,0),I=0,B=!1,W=null,Z=null,se=null,q=null,ee=null,Ve.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:de,disable:Ee,bindFramebuffer:Qe,drawBuffers:Fe,useProgram:ct,setBlending:vt,setMaterial:Dt,setFlipSided:dt,setCullFace:Ft,setLineWidth:Zt,setPolygonOffset:nn,setScissorTest:Lt,activeTexture:Gt,bindTexture:j,unbindTexture:an,compressedTexImage2D:Tt,compressedTexImage3D:U,texImage2D:pe,texImage3D:ge,pixelStorei:Ye,getParameter:Re,updateUBOMapping:$e,uniformBlockBinding:et,texStorage2D:Me,texStorage3D:Te,texSubImage2D:M,texSubImage3D:$,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:Pe,viewport:be,reset:it}}function IE(s,e,n,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new xt,v=new WeakMap,S=new Set;let x;const E=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(U,M){return A?new OffscreenCanvas(U,M):Vl("canvas")}function y(U,M,$){let oe=1;const fe=Tt(U);if((fe.width>$||fe.height>$)&&(oe=$/Math.max(fe.width,fe.height)),oe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Me=Math.floor(oe*fe.width),Te=Math.floor(oe*fe.height);x===void 0&&(x=R(Me,Te));const pe=M?R(Me,Te):x;return pe.width=Me,pe.height=Te,pe.getContext("2d").drawImage(U,0,0,Me,Te),st("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Me+"x"+Te+")."),pe}else return"data"in U&&st("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),U;return U}function _(U){return U.generateMipmaps}function N(U){s.generateMipmap(U)}function k(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(U,M,$,oe,fe,Me=!1){if(U!==null){if(s[U]!==void 0)return s[U];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Te;oe&&(Te=e.get("EXT_texture_norm16"),Te||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=M;if(M===s.RED&&($===s.FLOAT&&(pe=s.R32F),$===s.HALF_FLOAT&&(pe=s.R16F),$===s.UNSIGNED_BYTE&&(pe=s.R8),$===s.UNSIGNED_SHORT&&Te&&(pe=Te.R16_EXT),$===s.SHORT&&Te&&(pe=Te.R16_SNORM_EXT)),M===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(pe=s.R8UI),$===s.UNSIGNED_SHORT&&(pe=s.R16UI),$===s.UNSIGNED_INT&&(pe=s.R32UI),$===s.BYTE&&(pe=s.R8I),$===s.SHORT&&(pe=s.R16I),$===s.INT&&(pe=s.R32I)),M===s.RG&&($===s.FLOAT&&(pe=s.RG32F),$===s.HALF_FLOAT&&(pe=s.RG16F),$===s.UNSIGNED_BYTE&&(pe=s.RG8),$===s.UNSIGNED_SHORT&&Te&&(pe=Te.RG16_EXT),$===s.SHORT&&Te&&(pe=Te.RG16_SNORM_EXT)),M===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(pe=s.RG8UI),$===s.UNSIGNED_SHORT&&(pe=s.RG16UI),$===s.UNSIGNED_INT&&(pe=s.RG32UI),$===s.BYTE&&(pe=s.RG8I),$===s.SHORT&&(pe=s.RG16I),$===s.INT&&(pe=s.RG32I)),M===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),$===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),$===s.UNSIGNED_INT&&(pe=s.RGB32UI),$===s.BYTE&&(pe=s.RGB8I),$===s.SHORT&&(pe=s.RGB16I),$===s.INT&&(pe=s.RGB32I)),M===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),$===s.UNSIGNED_INT&&(pe=s.RGBA32UI),$===s.BYTE&&(pe=s.RGBA8I),$===s.SHORT&&(pe=s.RGBA16I),$===s.INT&&(pe=s.RGBA32I)),M===s.RGB&&($===s.UNSIGNED_SHORT&&Te&&(pe=Te.RGB16_EXT),$===s.SHORT&&Te&&(pe=Te.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),M===s.RGBA){const ge=Me?Hl:St.getTransfer(fe);$===s.FLOAT&&(pe=s.RGBA32F),$===s.HALF_FLOAT&&(pe=s.RGBA16F),$===s.UNSIGNED_BYTE&&(pe=ge===Ut?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&Te&&(pe=Te.RGBA16_EXT),$===s.SHORT&&Te&&(pe=Te.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function L(U,M){let $;return U?M===null||M===ki||M===$a?$=s.DEPTH24_STENCIL8:M===Ui?$=s.DEPTH32F_STENCIL8:M===Ya&&($=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ki||M===$a?$=s.DEPTH_COMPONENT24:M===Ui?$=s.DEPTH_COMPONENT32F:M===Ya&&($=s.DEPTH_COMPONENT16),$}function P(U,M){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==_n&&U.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?M.mipmaps.length:1}function F(U){const M=U.target;M.removeEventListener("dispose",F),I(M),M.isVideoTexture&&v.delete(M),M.isHTMLTexture&&S.delete(M)}function w(U){const M=U.target;M.removeEventListener("dispose",w),W(M)}function I(U){const M=r.get(U);if(M.__webglInit===void 0)return;const $=U.source,oe=E.get($);if(oe){const fe=oe[M.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&B(U),Object.keys(oe).length===0&&E.delete($)}r.remove(U)}function B(U){const M=r.get(U);s.deleteTexture(M.__webglTexture);const $=U.source,oe=E.get($);delete oe[M.__cacheKey],u.memory.textures--}function W(U){const M=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(M.__webglFramebuffer[oe]))for(let fe=0;fe<M.__webglFramebuffer[oe].length;fe++)s.deleteFramebuffer(M.__webglFramebuffer[oe][fe]);else s.deleteFramebuffer(M.__webglFramebuffer[oe]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[oe])}else{if(Array.isArray(M.__webglFramebuffer))for(let oe=0;oe<M.__webglFramebuffer.length;oe++)s.deleteFramebuffer(M.__webglFramebuffer[oe]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let oe=0;oe<M.__webglColorRenderbuffer.length;oe++)M.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[oe]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=U.textures;for(let oe=0,fe=$.length;oe<fe;oe++){const Me=r.get($[oe]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),u.memory.textures--),r.remove($[oe])}r.remove(U)}let Z=0;function se(){Z=0}function q(){return Z}function ee(U){Z=U}function he(){const U=Z;return U>=o.maxTextures&&st("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+o.maxTextures),Z+=1,U}function te(U){const M=[];return M.push(U.wrapS),M.push(U.wrapT),M.push(U.wrapR||0),M.push(U.magFilter),M.push(U.minFilter),M.push(U.anisotropy),M.push(U.internalFormat),M.push(U.format),M.push(U.type),M.push(U.generateMipmaps),M.push(U.premultiplyAlpha),M.push(U.flipY),M.push(U.unpackAlignment),M.push(U.colorSpace),M.join()}function K(U,M){const $=r.get(U);if(U.isVideoTexture&&j(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&$.__version!==U.version){const oe=U.image;if(oe===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee($,U,M);return}}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+M)}function Y(U,M){const $=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){Ee($,U,M);return}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+M)}function H(U,M){const $=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){Ee($,U,M);return}n.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+M)}function D(U,M){const $=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&$.__version!==U.version){Qe($,U,M);return}n.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+M)}const re={[Sd]:s.REPEAT,[nr]:s.CLAMP_TO_EDGE,[Md]:s.MIRRORED_REPEAT},ye={[_n]:s.NEAREST,[Xv]:s.NEAREST_MIPMAP_NEAREST,[ol]:s.NEAREST_MIPMAP_LINEAR,[Cn]:s.LINEAR,[Fu]:s.LINEAR_MIPMAP_NEAREST,[es]:s.LINEAR_MIPMAP_LINEAR},Ve={[Kv]:s.NEVER,[t_]:s.ALWAYS,[Zv]:s.LESS,[hf]:s.LEQUAL,[Jv]:s.EQUAL,[pf]:s.GEQUAL,[Qv]:s.GREATER,[e_]:s.NOTEQUAL};function ze(U,M){if(M.type===Ui&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Cn||M.magFilter===Fu||M.magFilter===ol||M.magFilter===es||M.minFilter===Cn||M.minFilter===Fu||M.minFilter===ol||M.minFilter===es)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,re[M.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,re[M.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,re[M.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,ye[M.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,ye[M.minFilter]),M.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Ve[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===_n||M.minFilter!==ol&&M.minFilter!==es||M.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Ge(U,M){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,M.addEventListener("dispose",F));const oe=M.source;let fe=E.get(oe);fe===void 0&&(fe={},E.set(oe,fe));const Me=te(M);if(Me!==U.__cacheKey){fe[Me]===void 0&&(fe[Me]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,$=!0),fe[Me].usedTimes++;const Te=fe[U.__cacheKey];Te!==void 0&&(fe[U.__cacheKey].usedTimes--,Te.usedTimes===0&&B(M)),U.__cacheKey=Me,U.__webglTexture=fe[Me].texture}return $}function le(U,M,$){return Math.floor(Math.floor(U/$)/M)}function de(U,M,$,oe){const Me=U.updateRanges;if(Me.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,$,oe,M.data);else{Me.sort((Ye,Pe)=>Ye.start-Pe.start);let Te=0;for(let Ye=1;Ye<Me.length;Ye++){const Pe=Me[Te],be=Me[Ye],$e=Pe.start+Pe.count,et=le(be.start,M.width,4),it=le(Pe.start,M.width,4);be.start<=$e+1&&et===it&&le(be.start+be.count-1,M.width,4)===et?Pe.count=Math.max(Pe.count,be.start+be.count-Pe.start):(++Te,Me[Te]=be)}Me.length=Te+1;const pe=n.getParameter(s.UNPACK_ROW_LENGTH),ge=n.getParameter(s.UNPACK_SKIP_PIXELS),Re=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Ye=0,Pe=Me.length;Ye<Pe;Ye++){const be=Me[Ye],$e=Math.floor(be.start/4),et=Math.ceil(be.count/4),it=$e%M.width,V=Math.floor($e/M.width),Ae=et,me=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,it),n.pixelStorei(s.UNPACK_SKIP_ROWS,V),n.texSubImage2D(s.TEXTURE_2D,0,it,V,Ae,me,$,oe,M.data)}U.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,pe),n.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),n.pixelStorei(s.UNPACK_SKIP_ROWS,Re)}}function Ee(U,M,$){let oe=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(oe=s.TEXTURE_3D);const fe=Ge(U,M),Me=M.source;n.bindTexture(oe,U.__webglTexture,s.TEXTURE0+$);const Te=r.get(Me);if(Me.version!==Te.__version||fe===!0){if(n.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const me=St.getPrimaries(St.workingColorSpace),Ce=M.colorSpace===Pr?null:St.getPrimaries(M.colorSpace),Ue=M.colorSpace===Pr||me===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}n.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let ge=y(M.image,!1,o.maxTextureSize);ge=an(M,ge);const Re=l.convert(M.format,M.colorSpace),Ye=l.convert(M.type);let Pe=C(M.internalFormat,Re,Ye,M.normalized,M.colorSpace,M.isVideoTexture);ze(oe,M);let be;const $e=M.mipmaps,et=M.isVideoTexture!==!0,it=Te.__version===void 0||fe===!0,V=Me.dataReady,Ae=P(M,ge);if(M.isDepthTexture)Pe=L(M.format===ts,M.type),it&&(et?n.texStorage2D(s.TEXTURE_2D,1,Pe,ge.width,ge.height):n.texImage2D(s.TEXTURE_2D,0,Pe,ge.width,ge.height,0,Re,Ye,null));else if(M.isDataTexture)if($e.length>0){et&&it&&n.texStorage2D(s.TEXTURE_2D,Ae,Pe,$e[0].width,$e[0].height);for(let me=0,Ce=$e.length;me<Ce;me++)be=$e[me],et?V&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,be.width,be.height,Re,Ye,be.data):n.texImage2D(s.TEXTURE_2D,me,Pe,be.width,be.height,0,Re,Ye,be.data);M.generateMipmaps=!1}else et?(it&&n.texStorage2D(s.TEXTURE_2D,Ae,Pe,ge.width,ge.height),V&&de(M,ge,Re,Ye)):n.texImage2D(s.TEXTURE_2D,0,Pe,ge.width,ge.height,0,Re,Ye,ge.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){et&&it&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Pe,$e[0].width,$e[0].height,ge.depth);for(let me=0,Ce=$e.length;me<Ce;me++)if(be=$e[me],M.format!==wi)if(Re!==null)if(et){if(V)if(M.layerUpdates.size>0){const Ue=Nm(be.width,be.height,M.format,M.type);for(const xe of M.layerUpdates){const Ze=be.data.subarray(xe*Ue/be.data.BYTES_PER_ELEMENT,(xe+1)*Ue/be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,xe,be.width,be.height,1,Re,Ze)}}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,be.width,be.height,ge.depth,Re,be.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,Pe,be.width,be.height,ge.depth,0,be.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?V&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,be.width,be.height,ge.depth,Re,Ye,be.data):n.texImage3D(s.TEXTURE_2D_ARRAY,me,Pe,be.width,be.height,ge.depth,0,Re,Ye,be.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{et&&it&&n.texStorage2D(s.TEXTURE_2D,Ae,Pe,$e[0].width,$e[0].height);for(let me=0,Ce=$e.length;me<Ce;me++)be=$e[me],M.format!==wi?Re!==null?et?V&&n.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,be.width,be.height,Re,be.data):n.compressedTexImage2D(s.TEXTURE_2D,me,Pe,be.width,be.height,0,be.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?V&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,be.width,be.height,Re,Ye,be.data):n.texImage2D(s.TEXTURE_2D,me,Pe,be.width,be.height,0,Re,Ye,be.data)}else if(M.isDataArrayTexture)if(et){if(it&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Pe,ge.width,ge.height,ge.depth),V)if(M.layerUpdates.size>0){const me=Nm(ge.width,ge.height,M.format,M.type);for(const Ce of M.layerUpdates){const Ue=ge.data.subarray(Ce*me/ge.data.BYTES_PER_ELEMENT,(Ce+1)*me/ge.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ce,ge.width,ge.height,1,Re,Ye,Ue)}M.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Re,Ye,ge.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,ge.width,ge.height,ge.depth,0,Re,Ye,ge.data);else if(M.isData3DTexture)et?(it&&n.texStorage3D(s.TEXTURE_3D,Ae,Pe,ge.width,ge.height,ge.depth),V&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Re,Ye,ge.data)):n.texImage3D(s.TEXTURE_3D,0,Pe,ge.width,ge.height,ge.depth,0,Re,Ye,ge.data);else if(M.isFramebufferTexture){if(it)if(et)n.texStorage2D(s.TEXTURE_2D,Ae,Pe,ge.width,ge.height);else{let me=ge.width,Ce=ge.height;for(let Ue=0;Ue<Ae;Ue++)n.texImage2D(s.TEXTURE_2D,Ue,Pe,me,Ce,0,Re,Ye,null),me>>=1,Ce>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ge.parentNode!==me){me.appendChild(ge),S.add(M),me.onpaint=Ce=>{const Ue=Ce.changedElements;for(const xe of S)Ue.includes(xe.image)&&(xe.needsUpdate=!0)},me.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ge);else{const Ue=s.RGBA,xe=s.RGBA,Ze=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ue,xe,Ze,ge)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if($e.length>0){if(et&&it){const me=Tt($e[0]);n.texStorage2D(s.TEXTURE_2D,Ae,Pe,me.width,me.height)}for(let me=0,Ce=$e.length;me<Ce;me++)be=$e[me],et?V&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Re,Ye,be):n.texImage2D(s.TEXTURE_2D,me,Pe,Re,Ye,be);M.generateMipmaps=!1}else if(et){if(it){const me=Tt(ge);n.texStorage2D(s.TEXTURE_2D,Ae,Pe,me.width,me.height)}V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Ye,ge)}else n.texImage2D(s.TEXTURE_2D,0,Pe,Re,Ye,ge);_(M)&&N(oe),Te.__version=Me.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function Qe(U,M,$){if(M.image.length!==6)return;const oe=Ge(U,M),fe=M.source;n.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+$);const Me=r.get(fe);if(fe.version!==Me.__version||oe===!0){n.activeTexture(s.TEXTURE0+$);const Te=St.getPrimaries(St.workingColorSpace),pe=M.colorSpace===Pr?null:St.getPrimaries(M.colorSpace),ge=M.colorSpace===Pr||Te===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Re=M.isCompressedTexture||M.image[0].isCompressedTexture,Ye=M.image[0]&&M.image[0].isDataTexture,Pe=[];for(let xe=0;xe<6;xe++)!Re&&!Ye?Pe[xe]=y(M.image[xe],!0,o.maxCubemapSize):Pe[xe]=Ye?M.image[xe].image:M.image[xe],Pe[xe]=an(M,Pe[xe]);const be=Pe[0],$e=l.convert(M.format,M.colorSpace),et=l.convert(M.type),it=C(M.internalFormat,$e,et,M.normalized,M.colorSpace),V=M.isVideoTexture!==!0,Ae=Me.__version===void 0||oe===!0,me=fe.dataReady;let Ce=P(M,be);ze(s.TEXTURE_CUBE_MAP,M);let Ue;if(Re){V&&Ae&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,it,be.width,be.height);for(let xe=0;xe<6;xe++){Ue=Pe[xe].mipmaps;for(let Ze=0;Ze<Ue.length;Ze++){const Xe=Ue[Ze];M.format!==wi?$e!==null?V?me&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ze,0,0,Xe.width,Xe.height,$e,Xe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ze,it,Xe.width,Xe.height,0,Xe.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ze,0,0,Xe.width,Xe.height,$e,et,Xe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ze,it,Xe.width,Xe.height,0,$e,et,Xe.data)}}}else{if(Ue=M.mipmaps,V&&Ae){Ue.length>0&&Ce++;const xe=Tt(Pe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,it,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ye){V?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Pe[xe].width,Pe[xe].height,$e,et,Pe[xe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,it,Pe[xe].width,Pe[xe].height,0,$e,et,Pe[xe].data);for(let Ze=0;Ze<Ue.length;Ze++){const At=Ue[Ze].image[xe].image;V?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ze+1,0,0,At.width,At.height,$e,et,At.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ze+1,it,At.width,At.height,0,$e,et,At.data)}}else{V?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,$e,et,Pe[xe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,it,$e,et,Pe[xe]);for(let Ze=0;Ze<Ue.length;Ze++){const Xe=Ue[Ze];V?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ze+1,0,0,$e,et,Xe.image[xe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ze+1,it,$e,et,Xe.image[xe])}}}_(M)&&N(s.TEXTURE_CUBE_MAP),Me.__version=fe.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function Fe(U,M,$,oe,fe,Me){const Te=l.convert($.format,$.colorSpace),pe=l.convert($.type),ge=C($.internalFormat,Te,pe,$.normalized,$.colorSpace),Re=r.get(M),Ye=r.get($);if(Ye.__renderTarget=M,!Re.__hasExternalTextures){const Pe=Math.max(1,M.width>>Me),be=Math.max(1,M.height>>Me);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?n.texImage3D(fe,Me,ge,Pe,be,M.depth,0,Te,pe,null):n.texImage2D(fe,Me,ge,Pe,be,0,Te,pe,null)}n.bindFramebuffer(s.FRAMEBUFFER,U),Gt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,fe,Ye.__webglTexture,0,Lt(M)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,fe,Ye.__webglTexture,Me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(U,M,$){if(s.bindRenderbuffer(s.RENDERBUFFER,U),M.depthBuffer){const oe=M.depthTexture,fe=oe&&oe.isDepthTexture?oe.type:null,Me=L(M.stencilBuffer,fe),Te=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Gt(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt(M),Me,M.width,M.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt(M),Me,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Me,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,U)}else{const oe=M.textures;for(let fe=0;fe<oe.length;fe++){const Me=oe[fe],Te=l.convert(Me.format,Me.colorSpace),pe=l.convert(Me.type),ge=C(Me.internalFormat,Te,pe,Me.normalized,Me.colorSpace);Gt(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt(M),ge,M.width,M.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt(M),ge,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ge,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Vt(U,M,$){const oe=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,U),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=r.get(M.depthTexture);if(fe.__renderTarget=M,(!fe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),oe){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),fe.__webglTexture===void 0){fe.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),ze(s.TEXTURE_CUBE_MAP,M.depthTexture);const Re=l.convert(M.depthTexture.format),Ye=l.convert(M.depthTexture.type);let Pe;M.depthTexture.format===sr?Pe=s.DEPTH_COMPONENT24:M.depthTexture.format===ts&&(Pe=s.DEPTH24_STENCIL8);for(let be=0;be<6;be++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Pe,M.width,M.height,0,Re,Ye,null)}}else K(M.depthTexture,0);const Me=fe.__webglTexture,Te=Lt(M),pe=oe?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,ge=M.depthTexture.format===ts?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===sr)Gt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,Me,0,Te):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,Me,0);else if(M.depthTexture.format===ts)Gt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,Me,0,Te):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(U){const M=r.get(U),$=U.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==U.depthTexture){const oe=U.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),oe){const fe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,oe.removeEventListener("dispose",fe)};oe.addEventListener("dispose",fe),M.__depthDisposeCallback=fe}M.__boundDepthTexture=oe}if(U.depthTexture&&!M.__autoAllocateDepthBuffer)if($)for(let oe=0;oe<6;oe++)Vt(M.__webglFramebuffer[oe],U,oe);else{const oe=U.texture.mipmaps;oe&&oe.length>0?Vt(M.__webglFramebuffer[0],U,0):Vt(M.__webglFramebuffer,U,0)}else if($){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]===void 0)M.__webglDepthbuffer[oe]=s.createRenderbuffer(),ct(M.__webglDepthbuffer[oe],U,!1);else{const fe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=M.__webglDepthbuffer[oe];s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Me)}}else{const oe=U.texture.mipmaps;if(oe&&oe.length>0?n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ct(M.__webglDepthbuffer,U,!1);else{const fe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Me)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(U,M,$){const oe=r.get(U);M!==void 0&&Fe(oe.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&ut(U)}function Dt(U){const M=U.texture,$=r.get(U),oe=r.get(M);U.addEventListener("dispose",w);const fe=U.textures,Me=U.isWebGLCubeRenderTarget===!0,Te=fe.length>1;if(Te||(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=M.version,u.memory.textures++),Me){$.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[pe]=[];for(let ge=0;ge<M.mipmaps.length;ge++)$.__webglFramebuffer[pe][ge]=s.createFramebuffer()}else $.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)$.__webglFramebuffer[pe]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Te)for(let pe=0,ge=fe.length;pe<ge;pe++){const Re=r.get(fe[pe]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&Gt(U)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let pe=0;pe<fe.length;pe++){const ge=fe[pe];$.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[pe]);const Re=l.convert(ge.format,ge.colorSpace),Ye=l.convert(ge.type),Pe=C(ge.internalFormat,Re,Ye,ge.normalized,ge.colorSpace,U.isXRRenderTarget===!0),be=Lt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,be,Pe,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,$.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),ct($.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){n.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),ze(s.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)Fe($.__webglFramebuffer[pe][ge],U,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else Fe($.__webglFramebuffer[pe],U,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);_(M)&&N(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let pe=0,ge=fe.length;pe<ge;pe++){const Re=fe[pe],Ye=r.get(Re);let Pe=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Pe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Pe,Ye.__webglTexture),ze(Pe,Re),Fe($.__webglFramebuffer,U,Re,s.COLOR_ATTACHMENT0+pe,Pe,0),_(Re)&&N(Pe)}n.unbindTexture()}else{let pe=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(pe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(pe,oe.__webglTexture),ze(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)Fe($.__webglFramebuffer[ge],U,M,s.COLOR_ATTACHMENT0,pe,ge);else Fe($.__webglFramebuffer,U,M,s.COLOR_ATTACHMENT0,pe,0);_(M)&&N(pe),n.unbindTexture()}U.depthBuffer&&ut(U)}function dt(U){const M=U.textures;for(let $=0,oe=M.length;$<oe;$++){const fe=M[$];if(_(fe)){const Me=k(U),Te=r.get(fe).__webglTexture;n.bindTexture(Me,Te),N(Me),n.unbindTexture()}}}const Ft=[],Zt=[];function nn(U){if(U.samples>0){if(Gt(U)===!1){const M=U.textures,$=U.width,oe=U.height;let fe=s.COLOR_BUFFER_BIT;const Me=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=r.get(U),pe=M.length>1;if(pe)for(let Re=0;Re<M.length;Re++)n.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const ge=U.texture.mipmaps;ge&&ge.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Re]);const Ye=r.get(M[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ye,0)}s.blitFramebuffer(0,0,$,oe,0,0,$,oe,fe,s.NEAREST),p===!0&&(Ft.length=0,Zt.length=0,Ft.push(s.COLOR_ATTACHMENT0+Re),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(Ft.push(Me),Zt.push(Me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Zt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ft))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Re=0;Re<M.length;Re++){n.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Re]);const Ye=r.get(M[Re]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,Ye,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&p){const M=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Lt(U){return Math.min(o.maxSamples,U.samples)}function Gt(U){const M=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function j(U){const M=u.render.frame;v.get(U)!==M&&(v.set(U,M),U.update())}function an(U,M){const $=U.colorSpace,oe=U.format,fe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==zl&&$!==Pr&&(St.getTransfer($)===Ut?(oe!==wi||fe!==Kn)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",$)),M}function Tt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=he,this.resetTextureUnits=se,this.getTextureUnits=q,this.setTextureUnits=ee,this.setTexture2D=K,this.setTexture2DArray=Y,this.setTexture3D=H,this.setTextureCube=D,this.rebindTextures=vt,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function UE(s,e){function n(r,o=Pr){let l;const u=St.getTransfer(o);if(r===Kn)return s.UNSIGNED_BYTE;if(r===lf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===cf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===g0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===x0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===p0)return s.BYTE;if(r===m0)return s.SHORT;if(r===Ya)return s.UNSIGNED_SHORT;if(r===of)return s.INT;if(r===ki)return s.UNSIGNED_INT;if(r===Ui)return s.FLOAT;if(r===Bi)return s.HALF_FLOAT;if(r===v0)return s.ALPHA;if(r===_0)return s.RGB;if(r===wi)return s.RGBA;if(r===sr)return s.DEPTH_COMPONENT;if(r===ts)return s.DEPTH_STENCIL;if(r===y0)return s.RED;if(r===uf)return s.RED_INTEGER;if(r===rs)return s.RG;if(r===df)return s.RG_INTEGER;if(r===ff)return s.RGBA_INTEGER;if(r===Dl||r===Il||r===Ul||r===Fl)if(u===Ut)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Dl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Il)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ul)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Dl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Il)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ul)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ed||r===wd||r===bd||r===Td)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Ed)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Td)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ad||r===Cd||r===Rd||r===Pd||r===Nd||r===kl||r===Ld)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Ad||r===Cd)return u===Ut?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Rd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Pd)return l.COMPRESSED_R11_EAC;if(r===Nd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===kl)return l.COMPRESSED_RG11_EAC;if(r===Ld)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Dd||r===Id||r===Ud||r===Fd||r===Od||r===kd||r===Bd||r===zd||r===Hd||r===Vd||r===Gd||r===Wd||r===jd||r===Xd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Dd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Id)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ud)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Od)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Hd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qd||r===Yd||r===$d)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===qd)return u===Ut?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Yd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$d)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kd||r===Zd||r===Bl||r===Jd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Kd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Zd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Bl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$a?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const FE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new P0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new zi({vertexShader:FE,fragmentShader:OE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new li(new $l(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BE extends os{constructor(e,n){super();const r=this;let o=null,l=1,u=null,f="local-floor",p=1,m=null,v=null,S=null,x=null,E=null,A=null;const R=typeof XRWebGLBinding<"u",y=new kE,_={},N=n.getContextAttributes();let k=null,C=null;const L=[],P=[],F=new xt;let w=null,I=null;const B=new $n;B.viewport=new $t;const W=new $n;W.viewport=new $t;const Z=[B,W],se=new X_;let q=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let de=L[le];return de===void 0&&(de=new ju,L[le]=de),de.getTargetRaySpace()},this.getControllerGrip=function(le){let de=L[le];return de===void 0&&(de=new ju,L[le]=de),de.getGripSpace()},this.getHand=function(le){let de=L[le];return de===void 0&&(de=new ju,L[le]=de),de.getHandSpace()};function he(le){const de=P.indexOf(le.inputSource);if(de===-1)return;const Ee=L[de];Ee!==void 0&&(Ee.update(le.inputSource,le.frame,m||u),Ee.dispatchEvent({type:le.type,data:le.inputSource}))}function te(){o.removeEventListener("select",he),o.removeEventListener("selectstart",he),o.removeEventListener("selectend",he),o.removeEventListener("squeeze",he),o.removeEventListener("squeezestart",he),o.removeEventListener("squeezeend",he),o.removeEventListener("end",te),o.removeEventListener("inputsourceschange",K);for(let le=0;le<L.length;le++){const de=P[le];de!==null&&(P[le]=null,L[le].disconnect(de))}q=null,ee=null,y.reset();for(const le in _)delete _[le];if(e.setRenderTarget(k),E=null,x=null,S=null,o=null,C=null,Ge.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(F.width,F.height,!1),I!==null){const le=I.camera;le.fov=I.fov,le.zoom=I.zoom,le.updateProjectionMatrix(),I=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){l=le,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){f=le,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(le){m=le},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return S===null&&R&&(S=new XRWebGLBinding(o,n)),S},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(le){if(o=le,o!==null){if(k=e.getRenderTarget(),o.addEventListener("select",he),o.addEventListener("selectstart",he),o.addEventListener("selectend",he),o.addEventListener("squeeze",he),o.addEventListener("squeezestart",he),o.addEventListener("squeezeend",he),o.addEventListener("end",te),o.addEventListener("inputsourceschange",K),N.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(F),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Qe=null,Fe=null;N.depth&&(Fe=N.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ee=N.stencil?ts:sr,Qe=N.stencil?$a:ki);const ct={colorFormat:n.RGBA8,depthFormat:Fe,scaleFactor:l};S=this.getBinding(),x=S.createProjectionLayer(ct),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),C=new bi(x.textureWidth,x.textureHeight,{format:wi,type:Kn,depthTexture:new Za(x.textureWidth,x.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}else{const Ee={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:l};E=new XRWebGLLayer(o,n,Ee),o.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),C=new bi(E.framebufferWidth,E.framebufferHeight,{format:wi,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(f),Ge.setContext(o),Ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(le){for(let de=0;de<le.removed.length;de++){const Ee=le.removed[de],Qe=P.indexOf(Ee);Qe>=0&&(P[Qe]=null,L[Qe].disconnect(Ee))}for(let de=0;de<le.added.length;de++){const Ee=le.added[de];let Qe=P.indexOf(Ee);if(Qe===-1){for(let ct=0;ct<L.length;ct++)if(ct>=P.length){P.push(Ee),Qe=ct;break}else if(P[ct]===null){P[ct]=Ee,Qe=ct;break}if(Qe===-1)break}const Fe=L[Qe];Fe&&Fe.connect(Ee)}}const Y=new Q,H=new Q;function D(le,de,Ee){Y.setFromMatrixPosition(de.matrixWorld),H.setFromMatrixPosition(Ee.matrixWorld);const Qe=Y.distanceTo(H),Fe=de.projectionMatrix.elements,ct=Ee.projectionMatrix.elements,Vt=Fe[14]/(Fe[10]-1),ut=Fe[14]/(Fe[10]+1),vt=(Fe[9]+1)/Fe[5],Dt=(Fe[9]-1)/Fe[5],dt=(Fe[8]-1)/Fe[0],Ft=(ct[8]+1)/ct[0],Zt=Vt*dt,nn=Vt*Ft,Lt=Qe/(-dt+Ft),Gt=Lt*-dt;if(de.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Gt),le.translateZ(Lt),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Fe[10]===-1)le.projectionMatrix.copy(de.projectionMatrix),le.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const j=Vt+Lt,an=ut+Lt,Tt=Zt-Gt,U=nn+(Qe-Gt),M=vt*ut/an*j,$=Dt*ut/an*j;le.projectionMatrix.makePerspective(Tt,U,M,$,j,an),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function re(le,de){de===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(de.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(o===null)return;let de=le.near,Ee=le.far;y.texture!==null&&(y.depthNear>0&&(de=y.depthNear),y.depthFar>0&&(Ee=y.depthFar)),se.near=W.near=B.near=de,se.far=W.far=B.far=Ee,(q!==se.near||ee!==se.far)&&(o.updateRenderState({depthNear:se.near,depthFar:se.far}),q=se.near,ee=se.far),se.layers.mask=le.layers.mask|6,B.layers.mask=se.layers.mask&-5,W.layers.mask=se.layers.mask&-3;const Qe=le.parent,Fe=se.cameras;re(se,Qe);for(let ct=0;ct<Fe.length;ct++)re(Fe[ct],Qe);Fe.length===2?D(se,B,W):se.projectionMatrix.copy(B.projectionMatrix),I===null&&le.isPerspectiveCamera&&(I={camera:le,fov:le.fov,zoom:le.zoom}),ye(le,se,Qe)};function ye(le,de,Ee){Ee===null?le.matrix.copy(de.matrixWorld):(le.matrix.copy(Ee.matrixWorld),le.matrix.invert(),le.matrix.multiply(de.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(de.projectionMatrix),le.projectionMatrixInverse.copy(de.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Qd*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(x===null&&E===null))return p},this.setFoveation=function(le){p=le,x!==null&&(x.fixedFoveation=le),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=le)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(se)},this.getCameraTexture=function(le){return _[le]};let Ve=null;function ze(le,de){if(v=de.getViewerPose(m||u),A=de,v!==null){const Ee=v.views;E!==null&&(e.setRenderTargetFramebuffer(C,E.framebuffer),e.setRenderTarget(C));let Qe=!1;Ee.length!==se.cameras.length&&(se.cameras.length=0,Qe=!0);for(let ut=0;ut<Ee.length;ut++){const vt=Ee[ut];let Dt=null;if(E!==null)Dt=E.getViewport(vt);else{const Ft=S.getViewSubImage(x,vt);Dt=Ft.viewport,ut===0&&(e.setRenderTargetTextures(C,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(C))}let dt=Z[ut];dt===void 0&&(dt=new $n,dt.layers.enable(ut),dt.viewport=new $t,Z[ut]=dt),dt.matrix.fromArray(vt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(vt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),ut===0&&(se.matrix.copy(dt.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),Qe===!0&&se.cameras.push(dt)}const Fe=o.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){S=r.getBinding();const ut=S.getDepthInformation(Ee[0]);ut&&ut.isValid&&ut.texture&&y.init(ut,o.renderState)}if(Fe&&Fe.includes("camera-access")&&R){e.state.unbindTexture(),S=r.getBinding();for(let ut=0;ut<Ee.length;ut++){const vt=Ee[ut].camera;if(vt){let Dt=_[vt];Dt||(Dt=new P0,_[vt]=Dt);const dt=S.getCameraImage(vt);Dt.sourceTexture=dt}}}}for(let Ee=0;Ee<L.length;Ee++){const Qe=P[Ee],Fe=L[Ee];Qe!==null&&Fe!==void 0&&Fe.update(Qe,de,m||u)}Ve&&Ve(le,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),A=null}const Ge=new I0;Ge.setAnimationLoop(ze),this.setAnimationLoop=function(le){Ve=le},this.dispose=function(){}}}const zE=new Kt,H0=new ot;H0.set(-1,0,0,0,1,0,0,0,1);function HE(s,e){function n(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,N0(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,N,k,C){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(y,_):_.isMeshLambertMaterial?(l(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(y,_),S(y,_)):_.isMeshPhongMaterial?(l(y,_),v(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(y,_),x(y,_),_.isMeshPhysicalMaterial&&E(y,_,C)):_.isMeshMatcapMaterial?(l(y,_),A(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),R(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(u(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?p(y,_,N,k):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,n(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Vn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,n(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Vn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,n(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,n(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const N=e.get(_),k=N.envMap,C=N.envMapRotation;k&&(y.envMap.value=k,y.envMapRotation.value.setFromMatrix4(zE.makeRotationFromEuler(C)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(H0),y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,y.aoMapTransform))}function u(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function p(y,_,N,k){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*N,y.scale.value=k*.5,_.map&&(y.map.value=_.map,n(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function S(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function E(y,_,N){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Vn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.retroreflectivity>0&&(y.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,_){_.matcap&&(y.matcap.value=_.matcap)}function R(y,_){const N=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function VE(s,e,n,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,L){const P=L.program;r.uniformBlockBinding(C,P)}function m(C,L){let P=o[C.id];P===void 0&&(y(C),P=v(C),o[C.id]=P,C.addEventListener("dispose",N));const F=L.program;r.updateUBOMapping(C,F);const w=e.render.frame;l[C.id]!==w&&(x(C),l[C.id]=w)}function v(C){const L=S();C.__bindingPointIndex=L;const P=s.createBuffer(),F=C.__size,w=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,F,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,P),P}function S(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(C){const L=o[C.id],P=C.uniforms,F=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let w=0,I=P.length;w<I;w++){const B=P[w];if(Array.isArray(B))for(let W=0,Z=B.length;W<Z;W++)E(B[W],w,W,F);else E(B,w,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(C,L,P,F){if(R(C,L,P,F)===!0){const w=C.__offset,I=C.value;if(Array.isArray(I)){let B=0;for(let W=0;W<I.length;W++){const Z=I[W],se=_(Z);A(Z,C.__data,B),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(B+=se.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(I,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,C.__data)}}function A(C,L,P){typeof C=="number"||typeof C=="boolean"?L[0]=C:C.isMatrix3?(L[0]=C.elements[0],L[1]=C.elements[1],L[2]=C.elements[2],L[3]=0,L[4]=C.elements[3],L[5]=C.elements[4],L[6]=C.elements[5],L[7]=0,L[8]=C.elements[6],L[9]=C.elements[7],L[10]=C.elements[8],L[11]=0):ArrayBuffer.isView(C)?L.set(new C.constructor(C.buffer,C.byteOffset,L.length)):C.toArray(L,P)}function R(C,L,P,F){const w=C.value,I=L+"_"+P;if(F[I]===void 0)return typeof w=="number"||typeof w=="boolean"?F[I]=w:ArrayBuffer.isView(w)?F[I]=w.slice():F[I]=w.clone(),!0;{const B=F[I];if(typeof w=="number"||typeof w=="boolean"){if(B!==w)return F[I]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(B.equals(w)===!1)return B.copy(w),!0}}return!1}function y(C){const L=C.uniforms;let P=0;const F=16;for(let I=0,B=L.length;I<B;I++){const W=Array.isArray(L[I])?L[I]:[L[I]];for(let Z=0,se=W.length;Z<se;Z++){const q=W[Z],ee=Array.isArray(q.value)?q.value:[q.value];for(let he=0,te=ee.length;he<te;he++){const K=ee[he],Y=_(K),H=P%F,D=H%Y.boundary,re=H+D;P+=D,re!==0&&F-re<Y.storage&&(P+=F-re),q.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=P,P+=Y.storage}}}const w=P%F;return w>0&&(P+=F-w),C.__size=P,C.__cache={},this}function _(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(L.boundary=16,L.storage=C.byteLength):st("WebGLRenderer: Unsupported uniform value type.",C),L}function N(C){const L=C.target;L.removeEventListener("dispose",N);const P=u.indexOf(L.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function k(){for(const C in o)s.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:p,update:m,dispose:k}}const GE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Di=null;function WE(){return Di===null&&(Di=new R_(GE,16,16,rs,Bi),Di.name="DFG_LUT",Di.minFilter=Cn,Di.magFilter=Cn,Di.wrapS=nr,Di.wrapT=nr,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}class jE{constructor(e={}){const{canvas:n=r_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:x=!1,outputBufferType:E=Kn}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=u;const R=E,y=new Set([ff,df,uf]),_=new Set([Kn,ki,Ya,$a,lf,cf]),N=new Uint32Array(4),k=new Int32Array(4),C=new Q;let L=null,P=null;const F=[],w=[];let I=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let W=!1,Z=null,se=null,q=null,ee=null;this._outputColorSpace=oi;let he=0,te=0,K=null,Y=-1,H=null;const D=new $t,re=new $t;let ye=null;const Ve=new gt(0);let ze=0,Ge=n.width,le=n.height,de=1,Ee=null,Qe=null;const Fe=new $t(0,0,Ge,le),ct=new $t(0,0,Ge,le);let Vt=!1;const ut=new xf;let vt=!1,Dt=!1;const dt=new Kt,Ft=new Q,Zt=new $t,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function Gt(){return K===null?de:1}let j=r;function an(T,G){return n.getContext(T,G)}let Tt,U,M,$,oe,fe,Me,Te,pe,ge,Re,Ye,Pe,be,$e,et,it,V,Ae,me,Ce,Ue,xe;try{const T={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${af}`),n.addEventListener("webglcontextlost",At,!1),n.addEventListener("webglcontextrestored",wt,!1),n.addEventListener("webglcontextcreationerror",gn,!1),j===null){const G="webgl2";if(j=an(G,T),j===null)throw an(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(T){throw n.removeEventListener("webglcontextlost",At,!1),n.removeEventListener("webglcontextrestored",wt,!1),n.removeEventListener("webglcontextcreationerror",gn,!1),Pt("WebGLRenderer: "+T.message),T}function Ze(){Tt=new WM(j),Tt.init(),Ce=new UE(j,Tt),U=new IM(j,Tt,e,Ce),M=new DE(j,Tt),U.reversedDepthBuffer&&x&&M.buffers.depth.setReversed(!0),se=j.createFramebuffer(),q=j.createFramebuffer(),ee=j.createFramebuffer(),$=new qM(j),oe=new _E,fe=new IE(j,Tt,M,oe,U,Ce,$),Me=new GM(B),Te=new $_(j),Ue=new LM(j,Te),pe=new jM(j,Te,$,Ue),ge=new $M(j,pe,Te,Ue,$),V=new YM(j,U,fe),$e=new UM(oe),Re=new vE(B,Me,Tt,U,Ue,$e),Ye=new HE(B,oe),Pe=new SE,be=new AE(Tt),it=new NM(B,Me,M,ge,A,p),et=new LE(B,ge,U),xe=new VE(j,$,U,M),Ae=new DM(j,Tt,$),me=new XM(j,Tt,$),$.programs=Re.programs,B.capabilities=U,B.extensions=Tt,B.properties=oe,B.renderLists=Pe,B.shadowMap=et,B.state=M,B.info=$}R!==Kn&&(I=new ZM(R,n.width,n.height,f,o,l));const Xe=new BE(B,j);this.xr=Xe,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const T=Tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(T){T!==void 0&&(de=T,this.setSize(Ge,le,!1))},this.getSize=function(T){return T.set(Ge,le)},this.setSize=function(T,G,ce=!0){if(Xe.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=T,le=G,n.width=Math.floor(T*de),n.height=Math.floor(G*de),ce===!0&&(n.style.width=T+"px",n.style.height=G+"px"),I!==null&&I.setSize(n.width,n.height),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(Ge*de,le*de).floor()},this.setDrawingBufferSize=function(T,G,ce){Ge=T,le=G,de=ce,n.width=Math.floor(T*ce),n.height=Math.floor(G*ce),this.setViewport(0,0,T,G)},this.setEffects=function(T){if(R===Kn){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let G=0;G<T.length;G++)if(T[G].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(Fe)},this.setViewport=function(T,G,ce,ne){T.isVector4?Fe.set(T.x,T.y,T.z,T.w):Fe.set(T,G,ce,ne),M.viewport(D.copy(Fe).multiplyScalar(de).round())},this.getScissor=function(T){return T.copy(ct)},this.setScissor=function(T,G,ce,ne){T.isVector4?ct.set(T.x,T.y,T.z,T.w):ct.set(T,G,ce,ne),M.scissor(re.copy(ct).multiplyScalar(de).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(T){M.setScissorTest(Vt=T)},this.setOpaqueSort=function(T){Ee=T},this.setTransparentSort=function(T){Qe=T},this.getClearColor=function(T){return T.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,ce=!0){let ne=0;if(T){let J=!1;if(K!==null){const De=K.texture.format;J=y.has(De)}if(J){const De=K.texture.type,Ne=_.has(De),Le=it.getClearColor(),We=it.getClearAlpha(),Ke=Le.r,at=Le.g,lt=Le.b;Ne?(N[0]=Ke,N[1]=at,N[2]=lt,N[3]=We,j.clearBufferuiv(j.COLOR,0,N)):(k[0]=Ke,k[1]=at,k[2]=lt,k[3]=We,j.clearBufferiv(j.COLOR,0,k))}else ne|=j.COLOR_BUFFER_BIT}G&&(ne|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ne|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&j.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),Z=T},this.dispose=function(){n.removeEventListener("webglcontextlost",At,!1),n.removeEventListener("webglcontextrestored",wt,!1),n.removeEventListener("webglcontextcreationerror",gn,!1),it.dispose(),Pe.dispose(),be.dispose(),oe.dispose(),Me.dispose(),ge.dispose(),Ue.dispose(),xe.dispose(),Re.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",no),Xe.removeEventListener("sessionend",io),Rn.stop()};function At(T){T.preventDefault(),lm("WebGLRenderer: Context Lost."),W=!0}function wt(){lm("WebGLRenderer: Context Restored."),W=!1;const T=$.autoReset,G=et.enabled,ce=et.autoUpdate,ne=et.needsUpdate,J=et.type;Ze(),$.autoReset=T,et.enabled=G,et.autoUpdate=ce,et.needsUpdate=ne,et.type=J}function gn(T){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Jn(T){const G=T.target;G.removeEventListener("dispose",Jn),Nr(G)}function Nr(T){ls(T),oe.remove(T)}function ls(T){const G=oe.get(T).programs;G!==void 0&&(G.forEach(function(ce){Re.releaseProgram(ce)}),T.isShaderMaterial&&Re.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,ce,ne,J,De){G===null&&(G=nn);const Ne=J.isMesh&&J.matrixWorld.determinantAffine()<0,Le=Xt(T,G,ce,ne,J);M.setMaterial(ne,Ne);let We=ce.index,Ke=1;if(ne.wireframe===!0){if(We=pe.getWireframeAttribute(ce),We===void 0)return;Ke=2}const at=ce.drawRange,lt=ce.attributes.position;let Be=at.start*Ke,_t=(at.start+at.count)*Ke;De!==null&&(Be=Math.max(Be,De.start*Ke),_t=Math.min(_t,(De.start+De.count)*Ke)),We!==null?(Be=Math.max(Be,0),_t=Math.min(_t,We.count)):lt!=null&&(Be=Math.max(Be,0),_t=Math.min(_t,lt.count));const Jt=_t-Be;if(Jt<0||Jt===1/0)return;Ue.setup(J,ne,Le,ce,We);let Ot,Nt=Ae;if(We!==null&&(Ot=Te.get(We),Nt=me,Nt.setIndex(Ot)),J.isMesh)ne.wireframe===!0?(M.setLineWidth(ne.wireframeLinewidth*Gt()),Nt.setMode(j.LINES)):Nt.setMode(j.TRIANGLES);else if(J.isLine){let on=ne.linewidth;on===void 0&&(on=1),M.setLineWidth(on*Gt()),J.isLineSegments?Nt.setMode(j.LINES):J.isLineLoop?Nt.setMode(j.LINE_LOOP):Nt.setMode(j.LINE_STRIP)}else J.isPoints?Nt.setMode(j.POINTS):J.isSprite&&Nt.setMode(j.TRIANGLES);if(J.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const on=J._multiDrawStarts,Oe=J._multiDrawCounts,en=J._multiDrawCount,yt=We?Te.get(We).bytesPerElement:1,Sn=oe.get(ne).currentProgram.getUniforms();for(let ft=0;ft<en;ft++)Sn.setValue(j,"_gl_DrawID",ft),Nt.render(on[ft]/yt,Oe[ft])}else if(J.isInstancedMesh)Nt.renderInstances(Be,Jt,J.count);else if(ce.isInstancedBufferGeometry){const on=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Oe=Math.min(ce.instanceCount,on);Nt.renderInstances(Be,Jt,Oe)}else Nt.render(Be,Jt)};function Lr(T,G,ce,ne){Z!==null&&T.isNodeMaterial&&Z.setObject(ne,T),vt===!0&&$e.setState(T,ce,!1),T.transparent===!0&&T.side===tr&&T.forceSinglePass===!1?(T.side=Vn,T.needsUpdate=!0,Ur(T,G,ne),T.side=ns,T.needsUpdate=!0,Ur(T,G,ne),T.side=tr):Ur(T,G,ne)}this.compile=function(T,G,ce=null){ce===null&&(ce=T),Z!==null&&Z.renderStart(T,G,ce),P=be.get(ce),P.init(G),w.push(P),ce.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),T!==ce&&T.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),P.setupLights(),Z!==null&&Z.updateLights(P.state.lightsArray),Dt=this.localClippingEnabled,vt=$e.init(this.clippingPlanes,Dt),vt===!0&&$e.setGlobalState(this.clippingPlanes,G),Z!==null&&et.render(P.state.shadowsArray,ce,G);const ne=new Set;return T.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const De=J.material;if(De)if(Array.isArray(De))for(let Ne=0;Ne<De.length;Ne++){const Le=De[Ne];Lr(Le,ce,G,J),ne.add(Le)}else Lr(De,ce,G,J),ne.add(De)}),P=w.pop(),Z!==null&&Z.renderEnd(),ne},this.compileAsync=function(T,G,ce=null){const ne=this.compile(T,G,ce);return new Promise(J=>{function De(){if(ne.forEach(function(Ne){const We=oe.get(Ne).currentProgram;(We===void 0||We.isReady())&&ne.delete(Ne)}),ne.size===0){J(T);return}setTimeout(De,10)}Tt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Dr=null;function Jl(T){Dr&&Dr(T)}function no(){Rn.stop()}function io(){Rn.start()}const Rn=new I0;Rn.setAnimationLoop(Jl),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(T){Dr=T,Xe.setAnimationLoop(T),T===null?Rn.stop():Rn.start()},Xe.addEventListener("sessionstart",no),Xe.addEventListener("sessionend",io),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;Z!==null&&Z.renderStart(T,G);const ce=Xe.enabled===!0&&Xe.isPresenting===!0,ne=I!==null&&(K===null||ce)&&I.begin(B,K);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(G),G=Xe.getCamera()),T.isScene===!0&&T.onBeforeRender(B,T,G,K),P=be.get(T,w.length),P.init(G),P.state.textureUnits=fe.getTextureUnits(),w.push(P),dt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ut.setFromProjectionMatrix(dt,Fi,G.reversedDepth),Dt=this.localClippingEnabled,vt=$e.init(this.clippingPlanes,Dt),L=Pe.get(T,F.length),L.init(),F.push(L),Xe.enabled===!0&&Xe.isPresenting===!0){const Ne=B.xr.getDepthSensingMesh();Ne!==null&&cs(Ne,G,-1/0,B.sortObjects)}cs(T,G,0,B.sortObjects),L.finish(),Z!==null&&Z.updateLights(P.state.lightsArray),B.sortObjects===!0&&L.sort(Ee,Qe),Lt=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,Lt&&it.addToRenderList(L,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&$e.beginShadows();const J=P.state.shadowsArray;if(et.render(J,T,G),vt===!0&&$e.endShadows(),(ne&&I.hasRenderPass())===!1){const Ne=L.opaque,Le=L.transmissive;if(P.setupLights(),G.isArrayCamera){const We=G.cameras;if(Le.length>0)for(let Ke=0,at=We.length;Ke<at;Ke++){const lt=We[Ke];ro(Ne,Le,T,lt)}Lt&&it.render(T);for(let Ke=0,at=We.length;Ke<at;Ke++){const lt=We[Ke];ea(L,T,lt,lt.viewport)}}else Le.length>0&&ro(Ne,Le,T,G),Lt&&it.render(T),ea(L,T,G)}K!==null&&te===0&&(fe.updateMultisampleRenderTarget(K),fe.updateRenderTargetMipmap(K)),ne&&I.end(B),T.isScene===!0&&T.onAfterRender(B,T,G),Ue.resetDefaultState(),Y=-1,H=null,w.pop(),w.length>0?(P=w[w.length-1],fe.setTextureUnits(P.state.textureUnits),vt===!0&&$e.setGlobalState(B.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?L=F[F.length-1]:L=null,Z!==null&&Z.renderEnd()};function cs(T,G,ce,ne){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)ce=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLightProbeGrid)P.pushLightProbeGrid(T);else if(T.isLight)P.pushLight(T),T.castShadow&&P.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(ut)){ne&&Zt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(dt);const Ne=ge.update(T),Le=T.material;Le.visible&&L.push(T,Ne,Le,ce,Zt.z,null,G)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(ut))){const Ne=ge.update(T),Le=T.material;if(ne&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Zt.copy(T.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Zt.copy(Ne.boundingSphere.center)),Zt.applyMatrix4(T.matrixWorld).applyMatrix4(dt)),Array.isArray(Le)){const We=Ne.groups;for(let Ke=0,at=We.length;Ke<at;Ke++){const lt=We[Ke],Be=Le[lt.materialIndex];Be&&Be.visible&&L.push(T,Ne,Be,ce,Zt.z,lt,G)}}else Le.visible&&L.push(T,Ne,Le,ce,Zt.z,null,G)}}const De=T.children;for(let Ne=0,Le=De.length;Ne<Le;Ne++)cs(De[Ne],G,ce,ne)}function ea(T,G,ce,ne){const{opaque:J,transmissive:De,transparent:Ne}=T;P.setupLightsView(ce),vt===!0&&$e.setGlobalState(B.clippingPlanes,ce),ne&&M.viewport(D.copy(ne)),J.length>0&&Ir(J,G,ce),De.length>0&&Ir(De,G,ce),Ne.length>0&&Ir(Ne,G,ce),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function ro(T,G,ce,ne){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ne.id]===void 0){const Be=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ne.id]=new bi(1,1,{generateMipmaps:!0,type:Be?Bi:Kn,minFilter:es,samples:Math.max(4,U.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:St.workingColorSpace})}const De=P.state.transmissionRenderTarget[ne.id],Ne=ne.viewport||D;De.setSize(Ne.z*B.transmissionResolutionScale,Ne.w*B.transmissionResolutionScale);const Le=B.getRenderTarget(),We=B.getActiveCubeFace(),Ke=B.getActiveMipmapLevel();B.setRenderTarget(De),B.getClearColor(Ve),ze=B.getClearAlpha(),ze<1&&B.setClearColor(16777215,.5),B.clear(),Lt&&it.render(ce);const at=B.toneMapping;B.toneMapping=Oi;const lt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),P.setupLightsView(ne),vt===!0&&$e.setGlobalState(B.clippingPlanes,ne),Ir(T,ce,ne),fe.updateMultisampleRenderTarget(De),fe.updateRenderTargetMipmap(De),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let _t=0,Jt=G.length;_t<Jt;_t++){const Ot=G[_t],{object:Nt,geometry:on,material:Oe,group:en}=Ot;if(Oe.side===tr&&Nt.layers.test(ne.layers)){const yt=Oe.side;Oe.side=Vn,Oe.needsUpdate=!0,ta(Nt,ce,ne,on,Oe,en),Oe.side=yt,Oe.needsUpdate=!0,Be=!0}}Be===!0&&(fe.updateMultisampleRenderTarget(De),fe.updateRenderTargetMipmap(De))}B.setRenderTarget(Le,We,Ke),B.setClearColor(Ve,ze),lt!==void 0&&(ne.viewport=lt),B.toneMapping=at}function Ir(T,G,ce){const ne=G.isScene===!0?G.overrideMaterial:null;for(let J=0,De=T.length;J<De;J++){const Ne=T[J],{object:Le,geometry:We,group:Ke}=Ne;let at=Ne.material;at.allowOverride===!0&&ne!==null&&(at=ne),Le.layers.test(ce.layers)&&ta(Le,G,ce,We,at,Ke)}}function ta(T,G,ce,ne,J,De){Z!==null&&J.isNodeMaterial&&Z.setObject(T,J),T.onBeforeRender(B,G,ce,ne,J,De),T.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),J.onBeforeRender(B,G,ce,ne,T,De),J.transparent===!0&&J.side===tr&&J.forceSinglePass===!1?(J.side=Vn,J.needsUpdate=!0,B.renderBufferDirect(ce,G,ne,J,T,De),J.side=ns,J.needsUpdate=!0,B.renderBufferDirect(ce,G,ne,J,T,De),J.side=tr):B.renderBufferDirect(ce,G,ne,J,T,De),T.onAfterRender(B,G,ce,ne,J,De)}function Ur(T,G,ce){G.isScene!==!0&&(G=nn);const ne=oe.get(T),J=P.state.lights,De=P.state.shadowsArray,Ne=J.state.version,Le=Re.getParameters(T,J.state,De,G,ce,P.state.lightProbeGridArray),We=Re.getProgramCacheKey(Le);let Ke=ne.programs;ne.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,ne.fog=G.fog;const at=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;ne.envMap=Me.get(T.envMap||ne.environment,at),ne.envMapRotation=ne.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,Ke===void 0&&(T.addEventListener("dispose",Jn),Ke=new Map,ne.programs=Ke);let lt=Ke.get(We);if(lt!==void 0){if(ne.currentProgram===lt&&ne.lightsStateVersion===Ne)return so(T,Le),lt}else Le.uniforms=Re.getUniforms(T),Z!==null&&T.isNodeMaterial&&Z.build(T,ce,Le),T.onBeforeCompile(Le,B),lt=Re.acquireProgram(Le,We),Ke.set(We,lt),ne.uniforms=Le.uniforms;const Be=ne.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=$e.uniform),so(T,Le),ne.needsLights=ia(T),ne.lightsStateVersion=Ne,ne.needsLights&&(Be.ambientLightColor.value=J.state.ambient,Be.lightProbe.value=J.state.probe,Be.sunLights.value=J.state.sun,Be.sunLightShadows.value=J.state.sunShadow,Be.directionalLights.value=J.state.directional,Be.directionalLightShadows.value=J.state.directionalShadow,Be.spotLights.value=J.state.spot,Be.spotLightShadows.value=J.state.spotShadow,Be.rectAreaLights.value=J.state.rectArea,Be.ltc_1.value=J.state.rectAreaLTC1,Be.ltc_2.value=J.state.rectAreaLTC2,Be.pointLights.value=J.state.point,Be.pointLightShadows.value=J.state.pointShadow,Be.hemisphereLights.value=J.state.hemi,Be.sunShadowMatrix.value=J.state.sunShadowMatrix,Be.sunShadowCascade.value=J.state.sunShadowCascade,Be.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Be.spotLightMatrix.value=J.state.spotLightMatrix,Be.spotLightMap.value=J.state.spotLightMap,Be.pointShadowMatrix.value=J.state.pointShadowMatrix),ne.lightProbeGrid=P.state.lightProbeGridArray.length>0,ne.currentProgram=lt,ne.uniformsList=null,lt}function na(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=Ol.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function so(T,G){const ce=oe.get(T);ce.outputColorSpace=G.outputColorSpace,ce.batching=G.batching,ce.batchingColor=G.batchingColor,ce.instancing=G.instancing,ce.instancingColor=G.instancingColor,ce.instancingMorph=G.instancingMorph,ce.skinning=G.skinning,ce.morphTargets=G.morphTargets,ce.morphNormals=G.morphNormals,ce.morphColors=G.morphColors,ce.morphTargetsCount=G.morphTargetsCount,ce.numClippingPlanes=G.numClippingPlanes,ce.numIntersection=G.numClipIntersection,ce.vertexAlphas=G.vertexAlphas,ce.vertexTangents=G.vertexTangents,ce.toneMapping=G.toneMapping}function Ql(T,G){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;C.setFromMatrixPosition(G.matrixWorld);for(let ce=0,ne=T.length;ce<ne;ce++){const J=T[ce];if(J.texture!==null&&J.boundingBox.containsPoint(C))return J}return null}function Xt(T,G,ce,ne,J){G.isScene!==!0&&(G=nn),fe.resetTextureUnits();const De=G.fog,Ne=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?G.environment:null,Le=K===null?B.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:St.workingColorSpace,We=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ke=Me.get(ne.envMap||Ne,We),at=ne.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,lt=!!ce.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Be=!!ce.morphAttributes.position,_t=!!ce.morphAttributes.normal,Jt=!!ce.morphAttributes.color;let Ot=Oi;ne.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ot=B.toneMapping);const Nt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,on=Nt!==void 0?Nt.length:0,Oe=oe.get(ne),en=P.state.lights;if(vt===!0&&(Dt===!0||T!==H)){const It=T===H&&ne.id===Y;$e.setState(ne,T,It)}let yt=!1;ne.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==en.state.version||Oe.outputColorSpace!==Le||J.isBatchedMesh&&Oe.batching===!1||!J.isBatchedMesh&&Oe.batching===!0||J.isBatchedMesh&&Oe.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Oe.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Oe.instancing===!1||!J.isInstancedMesh&&Oe.instancing===!0||J.isSkinnedMesh&&Oe.skinning===!1||!J.isSkinnedMesh&&Oe.skinning===!0||J.isInstancedMesh&&Oe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Oe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Oe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Oe.instancingMorph===!1&&J.morphTexture!==null||Oe.envMap!==Ke||ne.fog===!0&&Oe.fog!==De||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==$e.numPlanes||Oe.numIntersection!==$e.numIntersection)||Oe.vertexAlphas!==at||Oe.vertexTangents!==lt||Oe.morphTargets!==Be||Oe.morphNormals!==_t||Oe.morphColors!==Jt||Oe.toneMapping!==Ot||Oe.morphTargetsCount!==on||!!Oe.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Oe.__version=ne.version);let Sn=Oe.currentProgram;yt===!0&&(Sn=Ur(ne,G,J),Z&&ne.isNodeMaterial&&Z.onUpdateProgram(ne,Sn,Oe));let ft=!1,ui=!1,Hi=!1;const Ct=Sn.getUniforms(),Wt=Oe.uniforms;if(M.useProgram(Sn.program)&&(ft=!0,ui=!0,Hi=!0),ne.id!==Y&&(Y=ne.id,ui=!0),Oe.needsLights){const It=Ql(P.state.lightProbeGridArray,J);Oe.lightProbeGrid!==It&&(Oe.lightProbeGrid=It,ui=!0)}if(ft||H!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ct.setValue(j,"projectionMatrix",T.projectionMatrix),Ct.setValue(j,"viewMatrix",T.matrixWorldInverse);const Qn=Ct.map.cameraPosition;Qn!==void 0&&Qn.setValue(j,Ft.setFromMatrixPosition(T.matrixWorld)),U.logarithmicDepthBuffer&&Ct.setValue(j,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ct.setValue(j,"isOrthographic",T.isOrthographicCamera===!0),H!==T&&(H=T,ui=!0,Hi=!0)}if(Oe.needsLights&&(en.state.sunShadowMap.length>0&&Ct.setValue(j,"sunShadowMap",en.state.sunShadowMap,fe),en.state.directionalShadowMap.length>0&&Ct.setValue(j,"directionalShadowMap",en.state.directionalShadowMap,fe),en.state.spotShadowMap.length>0&&Ct.setValue(j,"spotShadowMap",en.state.spotShadowMap,fe),en.state.pointShadowMap.length>0&&Ct.setValue(j,"pointShadowMap",en.state.pointShadowMap,fe)),J.isSkinnedMesh){Ct.setOptional(j,J,"bindMatrix"),Ct.setOptional(j,J,"bindMatrixInverse");const It=J.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Ct.setValue(j,"boneTexture",It.boneTexture,fe))}J.isBatchedMesh&&(Ct.setOptional(j,J,"batchingTexture"),Ct.setValue(j,"batchingTexture",J._matricesTexture,fe),Ct.setOptional(j,J,"batchingIdTexture"),Ct.setValue(j,"batchingIdTexture",J._indirectTexture,fe),Ct.setOptional(j,J,"batchingColorTexture"),J._colorsTexture!==null&&Ct.setValue(j,"batchingColorTexture",J._colorsTexture,fe));const di=ce.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&V.update(J,ce,Sn),(ui||Oe.receiveShadow!==J.receiveShadow)&&(Oe.receiveShadow=J.receiveShadow,Ct.setValue(j,"receiveShadow",J.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&G.environment!==null&&(Wt.envMapIntensity.value=G.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=WE()),ui){if(Ct.setValue(j,"toneMappingExposure",B.toneMappingExposure),Oe.needsLights&&ec(Wt,Hi),De&&ne.fog===!0&&Ye.refreshFogUniforms(Wt,De),Ye.refreshMaterialUniforms(Wt,ne,de,le,P.state.transmissionRenderTarget[T.id]),Oe.needsLights&&Oe.lightProbeGrid){const It=Oe.lightProbeGrid;Wt.probesSH.value=It.texture,Wt.probesMin.value.copy(It.boundingBox.min),Wt.probesMax.value.copy(It.boundingBox.max),Wt.probesResolution.value.copy(It.resolution)}Ol.upload(j,na(Oe),Wt,fe)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ol.upload(j,na(Oe),Wt,fe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ct.setValue(j,"center",J.center),Ct.setValue(j,"modelViewMatrix",J.modelViewMatrix),Ct.setValue(j,"normalMatrix",J.normalMatrix),Ct.setValue(j,"modelMatrix",J.matrixWorld),ne.uniformsGroups!==void 0){const It=ne.uniformsGroups;for(let Qn=0,fi=It.length;Qn<fi;Qn++){const hi=It[Qn];xe.update(hi,Sn),xe.bind(hi,Sn)}}return Sn}function ec(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.sunLights.needsUpdate=G,T.sunLightShadows.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function ia(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return he},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(T,G,ce){const ne=oe.get(T);ne.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),oe.get(T.texture).__webglTexture=G,oe.get(T.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ce,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){const ce=oe.get(T);ce.__webglFramebuffer=G,ce.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,ce=0){K=T,he=G,te=ce;let ne=null,J=!1,De=!1;if(T){const Le=oe.get(T);if(Le.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(j.FRAMEBUFFER,Le.__webglFramebuffer),D.copy(T.viewport),re.copy(T.scissor),ye=T.scissorTest,M.viewport(D),M.scissor(re),M.setScissorTest(ye),Y=-1;return}else if(Le.__webglFramebuffer===void 0)fe.setupRenderTarget(T);else if(Le.__hasExternalTextures)fe.rebindTextures(T,oe.get(T.texture).__webglTexture,oe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const at=T.depthTexture;if(Le.__boundDepthTexture!==at){if(at!==null&&oe.has(at)&&(T.width!==at.image.width||T.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(T)}}const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(De=!0);const Ke=oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ke[G])?ne=Ke[G][ce]:ne=Ke[G],J=!0):T.samples>0&&fe.useMultisampledRTT(T)===!1?ne=oe.get(T).__webglMultisampledFramebuffer:Array.isArray(Ke)?ne=Ke[ce]:ne=Ke,D.copy(T.viewport),re.copy(T.scissor),ye=T.scissorTest}else D.copy(Fe).multiplyScalar(de).floor(),re.copy(ct).multiplyScalar(de).floor(),ye=Vt;if(ce!==0&&(ne=se),M.bindFramebuffer(j.FRAMEBUFFER,ne)&&M.drawBuffers(T,ne),M.viewport(D),M.scissor(re),M.setScissorTest(ye),J){const Le=oe.get(T.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+G,Le.__webglTexture,ce)}else if(De){const Le=G;for(let We=0;We<T.textures.length;We++){const Ke=oe.get(T.textures[We]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+We,Ke.__webglTexture,ce,Le)}}else if(T!==null&&ce!==0){const Le=oe.get(T.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Le.__webglTexture,ce)}Y=-1};function ra(T){const G=oe.get(T);return(G.__readFormat!==T.format||G.__readType!==T.type)&&(G.__readFormat=T.format,G.__readType=T.type,G.__formatReadable=U.textureFormatReadable(T.format),G.__typeReadable=U.textureTypeReadable(T.type)),G}this.readRenderTargetPixels=function(T,G,ce,ne,J,De,Ne,Le=0){if(!(T&&T.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(We=We[Ne]),We){M.bindFramebuffer(j.FRAMEBUFFER,We);try{const Ke=T.textures[Le],at=Ke.format,lt=Ke.type;T.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Le);const Be=ra(Ke);if(Be.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Be.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-ne&&ce>=0&&ce<=T.height-J&&j.readPixels(G,ce,ne,J,Ce.convert(at),Ce.convert(lt),De)}finally{const Ke=K!==null?oe.get(K).__webglFramebuffer:null;M.bindFramebuffer(j.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(T,G,ce,ne,J,De,Ne,Le=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(We=We[Ne]),We)if(G>=0&&G<=T.width-ne&&ce>=0&&ce<=T.height-J){M.bindFramebuffer(j.FRAMEBUFFER,We);const Ke=T.textures[Le],at=Ke.format,lt=Ke.type;T.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Le);const Be=ra(Ke);if(Be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,_t),j.bufferData(j.PIXEL_PACK_BUFFER,De.byteLength,j.STREAM_READ),j.readPixels(G,ce,ne,J,Ce.convert(at),Ce.convert(lt),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);const Jt=K!==null?oe.get(K).__webglFramebuffer:null;M.bindFramebuffer(j.FRAMEBUFFER,Jt);const Ot=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await s_(j,Ot,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,_t),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,De),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(_t),j.deleteSync(Ot),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,ce=0){const ne=Math.pow(2,-ce),J=Math.floor(T.image.width*ne),De=Math.floor(T.image.height*ne),Ne=G!==null?G.x:0,Le=G!==null?G.y:0;fe.setTexture2D(T,0),j.copyTexSubImage2D(j.TEXTURE_2D,ce,0,0,Ne,Le,J,De),M.unbindTexture()},this.copyTextureToTexture=function(T,G,ce=null,ne=null,J=0,De=0){let Ne,Le,We,Ke,at,lt,Be,_t,Jt;const Ot=T.isCompressedTexture?T.mipmaps[De]:T.image;if(ce!==null)Ne=ce.max.x-ce.min.x,Le=ce.max.y-ce.min.y,We=ce.isBox3?ce.max.z-ce.min.z:1,Ke=ce.min.x,at=ce.min.y,lt=ce.isBox3?ce.min.z:0;else{const Wt=Math.pow(2,-J);Ne=Math.floor(Ot.width*Wt),Le=Math.floor(Ot.height*Wt),T.isDataArrayTexture?We=Ot.depth:T.isData3DTexture?We=Math.floor(Ot.depth*Wt):We=1,Ke=0,at=0,lt=0}ne!==null?(Be=ne.x,_t=ne.y,Jt=ne.z):(Be=0,_t=0,Jt=0);const Nt=Ce.convert(G.format),on=Ce.convert(G.type);let Oe;G.isData3DTexture?(fe.setTexture3D(G,0),Oe=j.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(fe.setTexture2DArray(G,0),Oe=j.TEXTURE_2D_ARRAY):(fe.setTexture2D(G,0),Oe=j.TEXTURE_2D),M.activeTexture(j.TEXTURE0),M.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,G.flipY),M.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),M.pixelStorei(j.UNPACK_ALIGNMENT,G.unpackAlignment);const en=M.getParameter(j.UNPACK_ROW_LENGTH),yt=M.getParameter(j.UNPACK_IMAGE_HEIGHT),Sn=M.getParameter(j.UNPACK_SKIP_PIXELS),ft=M.getParameter(j.UNPACK_SKIP_ROWS),ui=M.getParameter(j.UNPACK_SKIP_IMAGES);M.pixelStorei(j.UNPACK_ROW_LENGTH,Ot.width),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ot.height),M.pixelStorei(j.UNPACK_SKIP_PIXELS,Ke),M.pixelStorei(j.UNPACK_SKIP_ROWS,at),M.pixelStorei(j.UNPACK_SKIP_IMAGES,lt);const Hi=T.isDataArrayTexture||T.isData3DTexture,Ct=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const Wt=oe.get(T),di=oe.get(G),It=oe.get(Wt.__renderTarget),Qn=oe.get(di.__renderTarget);M.bindFramebuffer(j.READ_FRAMEBUFFER,It.__webglFramebuffer),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let fi=0;fi<We;fi++)Hi&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,oe.get(T).__webglTexture,J,lt+fi),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,oe.get(G).__webglTexture,De,Jt+fi)),j.blitFramebuffer(Ke,at,Ne,Le,Be,_t,Ne,Le,j.DEPTH_BUFFER_BIT,j.NEAREST);M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(J!==0||T.isRenderTargetTexture||oe.has(T)){const Wt=oe.get(T),di=oe.get(G);M.bindFramebuffer(j.READ_FRAMEBUFFER,q),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,ee);for(let It=0;It<We;It++)Hi?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Wt.__webglTexture,J,lt+It):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Wt.__webglTexture,J),Ct?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,di.__webglTexture,De,Jt+It):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,di.__webglTexture,De),J!==0?j.blitFramebuffer(Ke,at,Ne,Le,Be,_t,Ne,Le,j.COLOR_BUFFER_BIT,j.NEAREST):Ct?j.copyTexSubImage3D(Oe,De,Be,_t,Jt+It,Ke,at,Ne,Le):j.copyTexSubImage2D(Oe,De,Be,_t,Ke,at,Ne,Le);M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Ct?T.isDataTexture||T.isData3DTexture?j.texSubImage3D(Oe,De,Be,_t,Jt,Ne,Le,We,Nt,on,Ot.data):G.isCompressedArrayTexture?j.compressedTexSubImage3D(Oe,De,Be,_t,Jt,Ne,Le,We,Nt,Ot.data):j.texSubImage3D(Oe,De,Be,_t,Jt,Ne,Le,We,Nt,on,Ot):T.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,De,Be,_t,Ne,Le,Nt,on,Ot.data):T.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,De,Be,_t,Ot.width,Ot.height,Nt,Ot.data):j.texSubImage2D(j.TEXTURE_2D,De,Be,_t,Ne,Le,Nt,on,Ot);M.pixelStorei(j.UNPACK_ROW_LENGTH,en),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,yt),M.pixelStorei(j.UNPACK_SKIP_PIXELS,Sn),M.pixelStorei(j.UNPACK_SKIP_ROWS,ft),M.pixelStorei(j.UNPACK_SKIP_IMAGES,ui),De===0&&G.generateMipmaps&&j.generateMipmap(Oe),M.unbindTexture()},this.initRenderTarget=function(T){oe.get(T).__webglFramebuffer===void 0&&fe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?fe.setTextureCube(T,0):T.isData3DTexture?fe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?fe.setTexture2DArray(T,0):fe.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){he=0,te=0,K=null,M.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),n.unpackColorSpace=St._getUnpackColorSpace()}}function XE(){const s=Bt.useRef(null);return Bt.useEffect(()=>{const e=s.current;if(!e)return;const n=new S_;n.fog=new gf(16317180,.0016);const r=new $n(60,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=290;const o=new jE({alpha:!0,antialias:!0});o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(o.domElement);const l=new W_(16777215,.8);n.add(l);const u=new G_(6514417,1.2);u.position.set(100,150,120),n.add(u);const f=new H_(165063,1.5,600);f.position.set(-120,-100,100),n.add(f);const p=1200,m=new Zn,v=new Float32Array(p*3),S=new Float32Array(p*3),x=new gt("#4f46e5"),E=new gt("#0284c7"),A=new gt("#10b981"),R=new gt("#8b5cf6");for(let H=0;H<p;H++){v[H*3]=(Math.random()-.5)*880,v[H*3+1]=(Math.random()-.5)*880,v[H*3+2]=(Math.random()-.5)*650;const D=Math.random(),re=D<.35?x:D<.65?E:D<.85?A:R;S[H*3]=re.r,S[H*3+1]=re.g,S[H*3+2]=re.b}m.setAttribute("position",new Ti(v,3)),m.setAttribute("color",new Ti(S,3));const y=new C0({size:2.8,vertexColors:!0,transparent:!0,opacity:.42,blending:qs}),_=new N_(m,y);n.add(_);const N=new yf(48,12,100,16),k=new Xa({color:5195493,wireframe:!0,transparent:!0,opacity:.11}),C=new li(N,k);C.position.set(130,45,-110),n.add(C);const L=new vf(52,1),P=new Xa({color:165063,wireframe:!0,transparent:!0,opacity:.09}),F=new li(L,P);F.position.set(-155,-45,-90),n.add(F);const w=new _f(36,0),I=new Xa({color:1096065,wireframe:!0,transparent:!0,opacity:.09}),B=new li(w,I);B.position.set(20,-120,-120),n.add(B);let W=0,Z=0,se=0,q=0;const ee=H=>{W=(H.clientX-window.innerWidth/2)*.07,Z=(H.clientY-window.innerHeight/2)*.07};window.addEventListener("mousemove",ee);const he=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",he);let te;const K=new q_,Y=()=>{const H=K.getElapsedTime();se+=(W-se)*.04,q+=(Z-q)*.04,r.position.x=se,r.position.y=-q,r.lookAt(n.position),_.rotation.y=H*.02,_.rotation.x=H*.012,C.rotation.x=H*.1,C.rotation.y=H*.14,C.position.y=45+Math.sin(H*.8)*12,F.rotation.x=H*-.09,F.rotation.z=H*.12,F.position.y=-45+Math.cos(H*.7)*10,B.rotation.y=H*.15,B.rotation.x=H*.08,B.position.y=-120+Math.sin(H*.9)*8,o.render(n,r),te=requestAnimationFrame(Y)};return Y(),()=>{window.removeEventListener("mousemove",ee),window.removeEventListener("resize",he),cancelAnimationFrame(te),e&&o.domElement&&e.removeChild(o.domElement),m.dispose(),y.dispose(),N.dispose(),k.dispose(),L.dispose(),P.dispose(),w.dispose(),I.dispose(),o.dispose()}},[]),g.jsx("div",{ref:s,className:"fixed inset-0 pointer-events-none -z-20 overflow-hidden","aria-hidden":"true"})}/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function YE(s,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:qE(s),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=s=>{let e="",n=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){n=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=n?r.toUpperCase():r,n=!1}return e};/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=s=>{const e=$E(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function hd(s){return s!=null}function ZE(s,e={}){var x,E;const n=e.attributeNames??{},r=A=>n[A]??A,o=s.size??s.width??Qr.width,l=s.size??s.height??Qr.height,u=((x=s.aliases)==null?void 0:x.filter(A=>typeof A=="string"&&A.trim()!=="").map(A=>`lucide-${A}`))??[],f=[...s.name?[`lucide-${s.name}`]:[],...u],p=((E=e.className)==null?void 0:E.split(" ").filter(Boolean))??[],m=e.includeDefaultClasses===!1?rf(...p):rf("lucide",...f,...p),v=e.absoluteStrokeWidth?Number(e.strokeWidth??Qr["stroke-width"])*Number(s.size??s.width??Qr.width)/Number(e.size??e.width??Qr.width):e.strokeWidth??Qr["stroke-width"];return["svg",{...Object.entries(Qr).reduce((A,[R,y])=>(A[r(R)]=y,A),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&hd(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&hd(e.width)&&{[r("width")]:e.width},..."height"in e&&hd(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:v,...m&&{[r("class")]:m},[r("viewBox")]:`0 0 ${o} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(A=>{const[R,y,_]=A,N=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...y}:y;return _?[R,N,_]:[R,N]})]}/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function JE(s,e={}){return ZE(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},ew=Bt.createContext({}),tw=()=>Bt.useContext(ew),nw=Bt.forwardRef(({color:s,size:e,width:n,height:r,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:u,className:f="",children:p,iconNode:m=[],icon:v={node:m,aliases:[],size:24},...S},x)=>{const{size:E=24,strokeWidth:A=2,absoluteStrokeWidth:R=!1,nonScalingStroke:y=!1,color:_="currentColor",className:N=""}=tw()??{},k=!!p||QE(S),[C,L,P=[]]=JE(v,{color:s??_,width:n??e??E,height:r??e??E,strokeWidth:o??A,absoluteStrokeWidth:l??R,nonScalingStroke:u??y,className:rf(N,f),hasA11yProp:k,attributes:S});return Bt.createElement(C,{ref:x,...L},[...P.map(([F,w])=>Bt.createElement(F,w)),...Array.isArray(p)?p:[p]])});/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Et(s,e=[],n=[]){const r=typeof s=="string"?YE(s,e,n):s,o=Bt.forwardRef(({className:l,...u},f)=>Bt.createElement(nw,{ref:f,icon:r,className:l,...u}));return r.name&&(o.displayName=KE(r.name)),o}/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};V0.node;const iw=Et(V0);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};G0.node;const W0=Et(G0);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};j0.node;const Gl=Et(j0);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0={name:"arrow-up",size:24,node:[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]};X0.node;const rw=Et(X0);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};q0.node;const Y0=Et(q0);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};$0.node;const sw=Et($0);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};K0.node;const aw=Et(K0);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Z0.node;const as=Et(Z0);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};J0.node;const ow=Et(J0);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};Q0.node;const eg=Et(Q0);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};tg.node;const lw=Et(tg);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};ng.node;const cw=Et(ng);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig={name:"database",size:24,node:[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]};ig.node;const rg=Et(ig);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg={name:"file-down",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]};sg.node;const e0=Et(sg);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag={name:"globe",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]};ag.node;const uw=Et(ag);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og={name:"graduation-cap",size:24,node:[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]};og.node;const dw=Et(og);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};lg.node;const cg=Et(lg);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};ug.node;const fw=Et(ug);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};dg.node;const fg=Et(dg);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};hg.node;const hw=Et(hg);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};pg.node;const mg=Et(pg);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};gg.node;const pw=Et(gg);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg={name:"panels-top-left",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],aliases:["layout"]};xg.node;const vg=Et(xg);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};_g.node;const mw=Et(_g);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg={name:"quote",size:24,node:[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]};yg.node;const gw=Et(yg);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg={name:"rocket",size:24,node:[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]]};Sg.node;const xw=Et(Sg);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};Mg.node;const vw=Et(Mg);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};Eg.node;const _w=Et(Eg);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};wg.node;const Ef=Et(wg);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};bg.node;const Ai=Et(bg);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};Tg.node;const yw=Et(Tg);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};Ag.node;const Cg=Et(Ag);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg={name:"trophy",size:24,node:[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]]};Rg.node;const Wl=Et(Rg);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Pg.node;const Sw=Et(Pg);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};Ng.node;const Lg=Et(Ng),pt={personal:{name:"Seshaan B P",eyebrow:"FREELANCE FULL-STACK DEVELOPER • MERN SPECIALIST",headline:"Building Scalable Web Apps & Digital Products That Drive Real Business Growth.",tagline:"I help founders, businesses, and startups build fast, reliable MERN stack web applications, custom CRM portals, and modern interactive user interfaces.",availability:"Available for Freelance Projects & Remote Contracts",location:"Karur, Tamil Nadu, India (IST • UTC+5:30)",phone:"+91 8124931018",whatsapp:"https://wa.me/918124931018?text=Hi%20Seshaan!%20I%20found%20your%20freelance%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",email:"seshaanbp2709@gmail.com",linkedin:"https://linkedin.com/in/seshaanbp",github:"https://github.com/Seshaan-B-P",resumeUrl:"/Seshaan_B_P_Resume.pdf",heroImage:"/hero-image.jpg",avatarImage:"/profile.jpg",turnaround:"Fast 1–3 Weeks Delivery",pricingModel:"Fixed Project or Milestone-Based",summary:"MCA candidate and freelance Full-Stack Engineer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). Experienced in leading development teams, building production-grade web systems like custom CRMs with automated document generation and dental clinic EHR platforms. I deliver clean, maintainable code with high performance, robust security, and transparent communication."},freelanceTrustMetrics:[{value:"100%",label:"On-Time Delivery",description:"Strict adherence to agreed sprint milestones"},{value:"03+",label:"Production Web Apps",description:"Live client & academic deployments on Vercel"},{value:"01",label:"Hackathon Winner",description:"Genesis'26 Syntax2Code 1st Place Champion"},{value:"15.5k",label:"TCS CodeVita Rank",description:"Top percentile in global algorithmic coding"}],services:[{id:"saas-apps",title:"Full-Stack Web & SaaS Apps",subtitle:"End-to-End MERN Development",description:"Custom, scalable web platforms built from scratch with React frontend, Node/Express backend, and high-performance MongoDB data models.",deliverables:["Production-ready MERN Stack architecture","Role-based access control (RBAC & JWT)","Responsive, mobile-optimized layouts","Continuous Deployment setup on Vercel/Cloud"],popular:!0,tag:"Most Requested"},{id:"crm-portals",title:"Custom CRM & Internal Portals",subtitle:"Operations & Analytics Systems",description:"Automate manual business workflows with tailor-made dashboard portals featuring dynamic charting, filtered data tables, and automated Excel/PDF document exports.",deliverables:["Automated PDF & Excel report generators","Interactive KPI charts and analytics","Donor, patient, or client registry management","Audit logging and multi-tier user roles"],popular:!1,tag:"Enterprise Value"},{id:"healthcare-ehr",title:"Clinic & Healthcare Portals",subtitle:"EHR & Appointment Systems",description:"Specialized Electronic Health Record platforms with patient histories, prescription tracking, and appointment scheduling engineered with clinic privacy in mind.",deliverables:["Patient records & clinical history tracking","Doctor scheduling and calendar workflows","Accessible, high-contrast healthcare UI","Zero-downtime cloud hosting configuration"],popular:!1,tag:"Specialized"},{id:"landing-websites",title:"High-Converting Business Websites",subtitle:"Fast, Modern & SEO-Ready",description:"Sleek, lightning-fast business showcases and portfolio websites built with modern React, Vite, and Tailwind CSS designed to turn visitors into paying clients.",deliverables:["Sub-second load times & Core Web Vitals optimization","Micro-animations and modern glassmorphism aesthetic","Lead capture forms with direct WhatsApp/email triggers","Full SEO tags, Open Graph, and mobile responsiveness"],popular:!1,tag:"Quick Turnaround"},{id:"api-backend",title:"API Engineering & DB Architecture",subtitle:"Robust Backend Infrastructure",description:"Clean, documented RESTful APIs with secure JWT authentication, input sanitization, and structured MongoDB schemas ready for web and mobile frontends.",deliverables:["Modular RESTful API endpoints & Postman docs","Secure password hashing & token authentication","MongoDB schema design, indexing & aggregation","Third-party webhook & payment integration readiness"],popular:!1,tag:"Backend Core"}],calculatorPresets:{projectTypes:[{id:"saas",name:"Full-Stack SaaS / Web App",baseDays:18,focus:"MERN Architecture & DB"},{id:"crm",name:"Custom CRM / Business Portal",baseDays:14,focus:"Operations & Reporting"},{id:"ehr",name:"Clinic / Health EHR System",baseDays:16,focus:"Clinical Records & Portals"},{id:"landing",name:"High-Speed Business Website",baseDays:7,focus:"React + Tailwind Speed"}],timelines:[{id:"rush",name:"Rush Delivery (Priority Sprint)",multiplier:1.15,label:"⚡ Express Track"},{id:"standard",name:"Standard Delivery (Recommended)",multiplier:1,label:"✨ Balanced Pace"},{id:"flexible",name:"Flexible Milestone Schedule",multiplier:.95,label:"🌱 Relaxed Milestones"}],addOns:[{id:"pdf_export",name:"Automated PDF & Excel Export",extraDays:2},{id:"auth_rbac",name:"Role-Based Auth (Admin, Manager, User)",extraDays:3},{id:"whatsapp_notify",name:"Direct WhatsApp / Email Alerts",extraDays:1},{id:"analytics_dash",name:"Interactive Charts & KPI Dashboard",extraDays:2}]},freelanceProcess:[{step:"01",title:"Discovery & Scope",description:"We review your core requirements, target users, deliverables, and timeline. I provide a fixed proposal with clear milestones."},{step:"02",title:"Interactive UI & Architecture",description:"We align on modern design aesthetics, component flow, and database schemas before writing a single line of backend logic."},{step:"03",title:"Agile Sprints & Live Demos",description:"I build the features in focused sprints with regular preview links, allowing you to test real functionality as it develops."},{step:"04",title:"Production Launch & Support",description:"Zero-downtime deployment on Vercel/Cloud, complete source code handover, documentation, and complimentary post-launch support."}],projects:[{id:"eega-crm",category:"Full-Stack Custom CRM • Team Lead",title:"CRM System for EEGA Trust",clientType:"Non-Profit & Trust Operations",description:"Comprehensive custom CRM web application engineered to streamline trust operations with automated PDF/Excel report generation, granular multi-role management, and dynamic analytical dashboards.",highlights:["Led a 3-member developer team from architectural scoping to live production deployment.","Engineered secure JWT-based authentication and modular RESTful API endpoints.","Built responsive React dashboards with dynamic charts and 1-click automated Excel/PDF document export.","Designed and normalized scalable MongoDB schemas for donor and trustee data records."],tags:["MERN Stack","MongoDB","Express.js","React.js","Node.js","JWT","Vercel"],liveUrl:"https://eega-trust-crm.vercel.app/login",badge:"Team Lead",status:"Production Live"},{id:"smilecare-ehr",category:"Healthcare Platform • Team Lead",title:"SmileCare — Dental Clinic EHR",clientType:"Healthcare & Dental Clinics",description:"Specialized dental clinic Electronic Health Record (EHR) management platform designed to streamline patient records, clinical scheduling, treatments, and internal practice operations.",highlights:["Directed a 3-member engineering team building end-to-end EHR clinical workflows.","Designed clean, accessible, high-contrast clinic UI using React.js and Tailwind CSS.","Integrated patient histories, treatment tracking, and doctor assignment modules.","Optimized client-side rendering with continuous deployment on Vercel."],tags:["React.js","Tailwind CSS","Node.js","Express.js","MongoDB","JWT","Vercel"],liveUrl:"https://smile-care-rouge.vercel.app/",badge:"Team Lead",status:"Production Live"},{id:"bps-event",category:"Showcase & Booking Website",title:"BPS Event Management",clientType:"Events & Corporate Services",description:"Production-ready responsive web application crafted to showcase corporate & private event services, facilitate client inquiries, and provide dynamic package listings.",highlights:["Architected reusable modern UI component system with React.js, Tailwind CSS, and Vite.","Created an intuitive browsing experience with high performance and interactive service showcases.","Deployed production build on Vercel with automated continuous delivery."],tags:["React.js","Tailwind CSS","Vite","JavaScript","Vercel"],liveUrl:"https://event-management-eta-roan.vercel.app/",badge:"Full-Stack",status:"Production Live"}],skills:{frontend:[{name:"React.js",level:"Advanced",icon:"react"},{name:"JavaScript (ES6+)",level:"Advanced",icon:"js"},{name:"Tailwind CSS",level:"Advanced",icon:"tailwind"},{name:"HTML5 / CSS3",level:"Advanced",icon:"html"},{name:"Responsive UI/UX",level:"Advanced",icon:"layout"},{name:"Vite",level:"Proficient",icon:"vite"}],backend:[{name:"Node.js",level:"Advanced",icon:"node"},{name:"Express.js",level:"Advanced",icon:"express"},{name:"RESTful APIs",level:"Advanced",icon:"api"},{name:"JWT Authentication",level:"Advanced",icon:"lock"},{name:"Postman",level:"Proficient",icon:"postman"}],databaseAndTools:[{name:"MongoDB",level:"Advanced",icon:"mongo"},{name:"SQL",level:"Intermediate",icon:"sql"},{name:"Git & GitHub",level:"Advanced",icon:"git"},{name:"Vercel Deployment",level:"Advanced",icon:"vercel"},{name:"Microsoft Access",level:"Intermediate",icon:"db"}],languages:[{name:"JavaScript",type:"Core Web Language"},{name:"Python",type:"Scripting / Automation"},{name:"Java",type:"Object-Oriented Programming"},{name:"SQL",type:"Relational Queries"}],workEthics:["Daily asynchronous updates & clear progress logs","Clean, modular, and well-commented codebases","Prompt response time across WhatsApp and Email","Flexible revision cycles until client satisfaction","Full IP & source code transfer upon completion"]},testimonials:[{quote:"Seshaan demonstrated outstanding leadership and technical prowess when building our EEGA Trust CRM. The automated PDF report generation and role management saved our team dozens of hours every month.",author:"Trust Operations Lead",role:"EEGA Trust CRM Stakeholder",tag:"Client Impact"},{quote:"Working with Seshaan on SmileCare was effortless. He has a rare ability to understand complex healthcare workflows and turn them into an intuitive, clean interface that doctors can use without training.",author:"Co-Developer & Peer",role:"SmileCare EHR Engineering Team",tag:"Collaboration"},{quote:"Recognized as Genesis'26 Hackathon Winner for creating a functional, elegant software prototype with clean architecture under extreme time pressure. A reliable developer who delivers under deadlines.",author:"Hackathon Jury",role:"Syntax2Code Powered by RMJ Solutions",tag:"Recognition"}],experience:[{role:"Web Development Intern",company:"SkillCraft",period:"Aug 2026 – Sep 2026",type:"Internship",description:["Gained hands-on experience in modern web development practices and contributed to core application development tasks.","Collaborated with cross-functional team members to develop, test, debug, and implement user-friendly web features.","Ensured responsive layouts and code maintainability across devices."]},{role:"IT Support Intern",company:"NxtGen Instrument",period:"Dec 2024 – Jan 2025",type:"Internship",description:["Diagnosed and resolved complex network, system, and hardware technical issues to maintain high system operational availability.","Provided fast remote desktop support to resolve critical user queries and optimize internal IT operations."]},{role:"Accounting & IT Operations Intern",company:"Kolanchinathan R (GST Practitioner)",period:"Dec 2022",type:"Internship",description:["Assisted with financial audits and resolved ERP and taxation software operational issues efficiently.","Supported computerized bookkeeping and compliance records management."]}],education:[{degree:"Master of Computer Applications (MCA)",institution:"M. Kumarasamy College of Engineering, Karur",period:"Pursuing (III Semester)",score:"79%",status:"In Progress"},{degree:"Bachelor of Commerce (B.Com)",institution:"Bishop Heber College, Tiruchirappalli",period:"Graduated 2025",score:"59.5%",status:"Completed"},{degree:"Higher Secondary Certificate (HSC)",institution:"Cheran Matriculation Higher Secondary School",period:"Completed 2022",score:"75%",status:"Completed"}],achievements:[{title:"Winner — Genesis’26 Hackathon",organization:"Syntax2Code, powered by RMJ Solutions Pvt. Ltd.",year:"2026",icon:"trophy",highlight:"Recognized for innovative software solution, teamwork, speed, and clean code under strict hackathon constraints."},{title:"Global Rank 15,511 — TCS CodeVita Season 13",organization:"Tata Consultancy Services (TCS)",year:"2026",icon:"code",highlight:"Competed internationally against tens of thousands of programmers showcasing algorithmic problem solving."}],certifications:[{title:"Certificate of Participation",issuer:"Adobe University Hackathon (Adobe, Unstop)",year:"2026"},{title:"SQL (Intermediate)",issuer:"HackerRank",year:"2025"},{title:"Coding: Development & Advanced Engineering",issuer:"Accenture / Forage",year:"2025"},{title:"Machine Learning Foundations Training Badge",issuer:"AWS Educate",year:"2025"},{title:"AI & GenAI @ Work",issuer:"HCLTech",year:"2025"},{title:"Career Essentials in Data Analysis",issuer:"Microsoft & LinkedIn Learning",year:"2024"},{title:"Advanced Python: Working with Databases",issuer:"LinkedIn Learning",year:"2024"},{title:"Research Methodology & Conference Papers",issuer:"International Research Workshop (3-Day)",year:"2024"}],faqs:[{question:"What is your typical turnaround time for a freelance project?",answer:"For a focused business website or landing page, typically 5–10 days. For custom web applications, MVPs, or full-stack CRMs with authentication and database architecture, delivery ranges from 2 to 4 weeks depending on the agreed scope."},{question:"How do we structure project milestones and payments?",answer:"We typically work on a 50/50 milestone basis (50% upfront upon roadmap sign-off, 50% upon final live deployment and approval) or broken down into sprint milestones for larger projects. I provide detailed invoices."},{question:"Do you provide post-launch support and revisions?",answer:"Yes! Every freelance project includes 14 to 30 days of complimentary bug fixes and support after delivery to make sure everything runs smoothly in production."},{question:"Do I get full ownership of the source code?",answer:"100% yes. All source code, design assets, and repository ownership are transferred completely to you upon project completion."},{question:"Can we integrate WhatsApp or custom notification systems?",answer:"Absolutely. I regularly integrate direct WhatsApp click-to-chat triggers, automated email alerts via Nodemailer/SendGrid, and document export systems (Excel & PDF)."}]};function Mw(){const[s,e]=Bt.useState(!1),[n,r]=Bt.useState(!1),[o,l]=Bt.useState("home");Bt.useEffect(()=>{const f=()=>{r(window.scrollY>20);const p=["home","services","projects","process","skills","experience","contact"],m=window.scrollY+180;for(const v of p){const S=document.getElementById(v);if(S){const x=S.offsetTop,E=S.offsetHeight;if(m>=x&&m<x+E){l(v);break}}}};return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]);const u=[{name:"Services",href:"#services",id:"services"},{name:"Work",href:"#projects",id:"projects"},{name:"Process",href:"#process",id:"process"},{name:"Skills",href:"#skills",id:"skills"},{name:"Experience",href:"#experience",id:"experience"},{name:"Contact",href:"#contact",id:"contact"}];return g.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${n?"bg-white/85 backdrop-blur-2xl border-b border-slate-200/80 shadow-md shadow-slate-200/40 py-3.5":"bg-transparent py-5"}`,children:[g.jsxs("div",{className:"max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("a",{href:"#home",className:"group flex items-center gap-2",children:g.jsxs("span",{className:"font-black text-2xl tracking-tight text-slate-900 group-hover:text-brand-indigo transition-colors",children:["SB",g.jsx("span",{className:"text-brand-indigo",children:"."})]})}),g.jsxs("a",{href:"#contact",className:"hidden sm:inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors",children:[g.jsxs("span",{className:"relative flex h-2 w-2",children:[g.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),g.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),g.jsx("span",{children:"Available for Hire"})]})]}),g.jsx("nav",{className:"hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/80 border border-slate-200/80 shadow-xs backdrop-blur-xl",children:u.map(f=>{const p=o===f.id;return g.jsx("a",{href:f.href,className:`text-xs font-semibold tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-200 ${p?"bg-brand-indigo text-white shadow-sm font-bold":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,children:f.name},f.name)})}),g.jsxs("div",{className:"hidden sm:flex items-center gap-3",children:[g.jsxs("a",{href:pt.personal.resumeUrl,download:"Seshaan_B_P_Resume.pdf",className:"flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-full transition-all duration-200 hover:border-slate-300 shadow-2xs",children:[g.jsx(e0,{size:14,className:"text-slate-500"}),g.jsx("span",{children:"CV"})]}),g.jsxs("a",{href:"#contact",className:"flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-brand-indigo hover:bg-brand-indigo-dark rounded-full transition-all duration-300 shadow-md shadow-brand-indigo/25 hover:shadow-glow-indigo hover:scale-[1.02]",children:[g.jsx("span",{children:"Get a Quote"}),g.jsx(Gl,{size:14})]})]}),g.jsx("button",{onClick:()=>e(!s),className:"lg:hidden text-slate-700 hover:text-slate-900 p-2 rounded-xl bg-white border border-slate-200 shadow-2xs focus:outline-none transition-colors","aria-label":"Toggle Navigation",children:s?g.jsx(Sw,{size:20}):g.jsx(hw,{size:20})})]}),s&&g.jsxs("div",{className:"lg:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 space-y-3.5 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200",children:[g.jsxs("div",{className:"flex items-center gap-2 pb-2 text-xs font-bold text-emerald-700",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),"Available for Freelance Projects"]}),u.map(f=>g.jsx("a",{href:f.href,onClick:()=>e(!1),className:"block text-sm font-semibold text-slate-700 hover:text-brand-indigo py-1.5",children:f.name},f.name)),g.jsxs("div",{className:"pt-3 border-t border-slate-100 flex flex-col gap-2",children:[g.jsxs("a",{href:"#contact",onClick:()=>e(!1),className:"flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-white bg-brand-indigo rounded-full shadow-sm",children:[g.jsx("span",{children:"Start a Project / Hire Me"}),g.jsx(Gl,{size:14})]}),g.jsxs("a",{href:pt.personal.resumeUrl,download:"Seshaan_B_P_Resume.pdf",className:"flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full",children:[g.jsx(e0,{size:14}),g.jsx("span",{children:"Download Resume (PDF)"})]})]})]})]})}function Dg({size:s=16,className:e=""}){return g.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[g.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),g.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),g.jsx("circle",{cx:"4",cy:"4",r:"2"})]})}function Ig({size:s=16,className:e=""}){return g.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[g.jsx("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),g.jsx("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})}function ci({children:s,className:e="",maxTilt:n=12,glare:r=!0,scale:o=1.02}){const l=Bt.useRef(null),[u,f]=Bt.useState({transform:"perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",transition:"transform 0.4s ease-out"}),[p,m]=Bt.useState({x:50,y:50,opacity:0}),v=x=>{if(!l.current||window.innerWidth<768)return;const E=l.current.getBoundingClientRect(),A=x.clientX-E.left,R=x.clientY-E.top,y=(A/E.width-.5)*2,N=-((R/E.height-.5)*2)*n,k=y*n;f({transform:`perspective(1000px) rotateX(${N.toFixed(2)}deg) rotateY(${k.toFixed(2)}deg) scale3d(${o}, ${o}, ${o})`,transition:"transform 0.08s ease-out"}),r&&m({x:A/E.width*100,y:R/E.height*100,opacity:.18})},S=()=>{f({transform:"perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",transition:"transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"}),r&&m(x=>({...x,opacity:0}))};return g.jsxs("div",{ref:l,onMouseMove:v,onMouseLeave:S,style:u,className:`relative preserve-3d transition-shadow ${e}`,children:[s,r&&g.jsx("div",{className:"absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300 -z-0",style:{background:`radial-gradient(circle 260px at ${p.x}% ${p.y}%, rgba(255, 255, 255, ${p.opacity}), transparent 80%)`},"aria-hidden":"true"})]})}function Ew(){return g.jsxs("section",{id:"home",className:"relative min-h-[92vh] pt-32 pb-16 flex items-center overflow-hidden bg-radial-mesh",children:[g.jsx("div",{className:"absolute top-1/4 left-10 w-[420px] h-[420px] bg-indigo-200/35 rounded-full blur-[130px] pointer-events-none -z-10 animate-float-subtle"}),g.jsx("div",{className:"absolute bottom-1/4 right-10 w-[420px] h-[420px] bg-sky-200/30 rounded-full blur-[130px] pointer-events-none -z-10 animate-float-subtle",style:{animationDelay:"2s"}}),g.jsxs("div",{className:"max-w-7xl mx-auto px-5 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center",children:[g.jsxs("div",{className:"lg:col-span-7 space-y-6 text-left",children:[g.jsxs("div",{className:"inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-emerald-200/80 text-xs font-semibold tracking-wide text-emerald-800 shadow-sm backdrop-blur-md",children:[g.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[g.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),g.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"})]}),g.jsx("span",{children:pt.personal.availability})]}),g.jsxs("h1",{className:"text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-slate-900",children:["Engineering digital experiences that"," ",g.jsx("span",{className:"text-gradient-indigo",children:"accelerate business."})]}),g.jsxs("p",{className:"text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed",children:["I’m ",g.jsx("span",{className:"text-slate-900 font-bold",children:pt.personal.name})," — MCA candidate and freelance Full-Stack Engineer. I specialize in architecting production MERN applications, automated CRM portals, and high-performance interactive interfaces."]}),g.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 max-w-xl",children:[g.jsxs("div",{className:"flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200 shadow-card-soft text-xs font-semibold text-slate-800 hover:border-indigo-300 hover:shadow-card-hover transition-all group",children:[g.jsx("div",{className:"p-1.5 rounded-lg bg-amber-50 text-amber-500 group-hover:scale-110 transition-transform",children:g.jsx(Lg,{size:14})}),g.jsx("span",{children:"Fast 1–3 Wk Turnaround"})]}),g.jsxs("div",{className:"flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200 shadow-card-soft text-xs font-semibold text-slate-800 hover:border-indigo-300 hover:shadow-card-hover transition-all group",children:[g.jsx("div",{className:"p-1.5 rounded-lg bg-indigo-50 text-brand-indigo group-hover:scale-110 transition-transform",children:g.jsx(Ef,{size:14})}),g.jsx("span",{children:"Production MERN Stack"})]}),g.jsxs("div",{className:"flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200 shadow-card-soft text-xs font-semibold text-slate-800 hover:border-indigo-300 hover:shadow-card-hover transition-all group",children:[g.jsx("div",{className:"p-1.5 rounded-lg bg-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform",children:g.jsx(as,{size:14})}),g.jsx("span",{children:"100% Code Ownership"})]})]}),g.jsxs("div",{className:"flex flex-wrap items-center gap-3.5 pt-3",children:[g.jsxs("a",{href:"#contact",className:"px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-brand-indigo hover:bg-brand-indigo-dark rounded-full transition-all duration-300 flex items-center gap-2.5 shadow-lg shadow-brand-indigo/25 hover:shadow-glow-indigo hover:scale-[1.02] shimmer-hover",children:[g.jsx("span",{children:"Start a Project"}),g.jsx(W0,{size:15})]}),g.jsxs("a",{href:pt.personal.whatsapp,target:"_blank",rel:"noopener noreferrer",className:"px-6 py-4 text-xs font-bold uppercase tracking-wider text-emerald-900 bg-white hover:bg-emerald-50/80 border border-emerald-200 rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-[1.02] shadow-2xs",children:[g.jsx(mg,{size:15,className:"text-emerald-600"}),g.jsx("span",{children:"WhatsApp Chat"})]}),g.jsx("a",{href:"#projects",className:"px-5 py-4 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors",children:"View Client Work ↓"})]}),g.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 pt-3 border-t border-slate-200/80",children:[g.jsxs("span",{className:"flex items-center gap-1.5 text-slate-700 font-medium",children:[g.jsx(fg,{size:14,className:"text-brand-indigo"}),pt.personal.location]}),g.jsx("span",{className:"text-slate-300",children:"•"}),g.jsx("span",{className:"text-slate-700 font-medium",children:"MCA Final Year (79%)"}),g.jsx("span",{className:"text-slate-300",children:"•"}),g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("a",{href:pt.personal.linkedin,target:"_blank",rel:"noopener noreferrer",className:"text-slate-500 hover:text-brand-indigo transition-colors",title:"LinkedIn",children:g.jsx(Dg,{size:15})}),g.jsx("a",{href:pt.personal.github,target:"_blank",rel:"noopener noreferrer",className:"text-slate-500 hover:text-slate-900 transition-colors",title:"GitHub",children:g.jsx(Ig,{size:15})})]})]})]}),g.jsx("div",{className:"lg:col-span-5 flex justify-center",children:g.jsxs(ci,{maxTilt:14,className:"w-full max-w-[440px] rounded-3xl p-6 bg-white/95 border border-slate-200 shadow-xl shadow-slate-200/70 backdrop-blur-2xl",children:[g.jsxs("div",{style:{transform:"translateZ(25px)"},className:"flex items-center justify-between text-xs font-semibold text-slate-500 pb-3 border-b border-slate-100",children:[g.jsxs("span",{className:"flex items-center gap-1.5 text-brand-indigo font-bold",children:[g.jsx(Ai,{size:14}),"FULL-STACK FREELANCER"]}),g.jsx("span",{className:"text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-bold text-[11px]",children:"Accepting Projects"})]}),g.jsx("div",{style:{transform:"translateZ(35px)"},className:"relative my-5 flex justify-center",children:g.jsxs("div",{className:"relative group",children:[g.jsx("div",{className:"w-44 h-44 rounded-3xl overflow-hidden border-2 border-indigo-100 shadow-md p-1 bg-white",children:g.jsx("img",{src:pt.personal.avatarImage,alt:pt.personal.name,className:"w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500",onError:s=>{s.target.src=pt.personal.heroImage}})}),g.jsxs("div",{className:"absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-md",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),"Verified Engineer"]})]})}),g.jsxs("div",{style:{transform:"translateZ(30px)"},className:"text-center space-y-1.5",children:[g.jsx("h3",{className:"text-2xl font-black text-slate-900 tracking-tight",children:pt.personal.name}),g.jsx("p",{className:"text-xs font-medium text-slate-500",children:"MERN Specialist • Team Lead • Hackathon Winner"}),g.jsx("div",{className:"flex flex-wrap justify-center gap-1.5 pt-2",children:["React.js","Node.js","Express","MongoDB","Tailwind CSS","REST APIs"].map(s=>g.jsx("span",{className:"px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-50 text-slate-700 border border-slate-200/80 hover:border-indigo-300 hover:text-brand-indigo transition-colors",children:s},s))})]}),g.jsxs("div",{style:{transform:"translateZ(25px)"},className:"grid grid-cols-3 gap-2.5 pt-5 mt-5 border-t border-slate-100 text-center",children:[g.jsxs("div",{className:"p-2.5 rounded-2xl bg-slate-50 border border-slate-100",children:[g.jsx("div",{className:"text-lg font-black text-brand-indigo",children:"03+"}),g.jsx("div",{className:"text-[10px] text-slate-500 uppercase font-bold tracking-wider",children:"Web Apps"})]}),g.jsxs("div",{className:"p-2.5 rounded-2xl bg-slate-50 border border-slate-100",children:[g.jsx("div",{className:"text-lg font-black text-emerald-600",children:"1st"}),g.jsx("div",{className:"text-[10px] text-slate-500 uppercase font-bold tracking-wider",children:"Hackathon"})]}),g.jsxs("div",{className:"p-2.5 rounded-2xl bg-slate-50 border border-slate-100",children:[g.jsx("div",{className:"text-lg font-black text-cyan-600",children:"100%"}),g.jsx("div",{className:"text-[10px] text-slate-500 uppercase font-bold tracking-wider",children:"On-Time"})]})]})]})})]})]})}function ww(){const s=[{label:"Full-Stack MERN Architecture",icon:g.jsx(cg,{size:14,className:"text-brand-indigo"})},{label:"Genesis’26 Hackathon Winner",icon:g.jsx(Wl,{size:14,className:"text-amber-500"})},{label:"100% On-Time Sprint Milestones",icon:g.jsx(as,{size:14,className:"text-emerald-500"})},{label:"Custom CRM & EHR Engineering",icon:g.jsx(Ef,{size:14,className:"text-cyan-600"})},{label:"Fast 1–3 Weeks Delivery Track",icon:g.jsx(Lg,{size:14,className:"text-amber-500"})},{label:"100% Source Code & IP Transfer",icon:g.jsx(Ai,{size:14,className:"text-brand-indigo"})},{label:"TCS CodeVita Global Rank 15.5k",icon:g.jsx(Wl,{size:14,className:"text-brand-indigo"})},{label:"Production Vercel & Cloud Deploys",icon:g.jsx(as,{size:14,className:"text-emerald-500"})}];return g.jsx("div",{className:"w-full py-4 bg-white/70 border-y border-slate-200/80 backdrop-blur-xl overflow-hidden my-4 relative",children:g.jsx("div",{className:"animate-marquee flex items-center gap-8 whitespace-nowrap",children:[...s,...s,...s].map((e,n)=>g.jsxs("div",{className:"inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/70 text-xs font-semibold text-slate-700 shadow-2xs hover:border-indigo-300 hover:bg-white transition-all cursor-default",children:[e.icon,g.jsx("span",{children:e.label})]},n))})})}function bw({onSelectService:s}){const e={"saas-apps":g.jsx(cg,{className:"text-brand-indigo",size:26}),"crm-portals":g.jsx(rg,{className:"text-emerald-600",size:26}),"healthcare-ehr":g.jsx(iw,{className:"text-rose-500",size:26}),"landing-websites":g.jsx(vg,{className:"text-cyan-600",size:26}),"api-backend":g.jsx(Cg,{className:"text-amber-500",size:26})};return g.jsx("section",{id:"services",className:"py-24 border-t border-slate-200/80 relative",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-5 sm:px-8",children:[g.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14",children:[g.jsxs("div",{className:"max-w-2xl",children:[g.jsxs("span",{className:"text-xs font-bold text-brand-indigo uppercase tracking-widest flex items-center gap-1.5",children:[g.jsx(Ai,{size:14}),"01 — FREELANCE OFFERINGS"]}),g.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2",children:["Solutions engineered to ",g.jsx("span",{className:"text-gradient-indigo",children:"deliver business results."})]}),g.jsx("p",{className:"text-slate-600 text-sm sm:text-base mt-2 font-normal",children:"From MVP ideation to production CRM engineering, each system is crafted with clean architecture, high scalability, and 100% code ownership."})]}),g.jsxs("div",{className:"flex items-center gap-2 self-start md:self-auto text-xs font-semibold text-slate-700 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-2xs",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500"}),g.jsx("span",{children:"Fixed Scope Proposals or Sprint Retainers"})]})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7",children:pt.services.map(n=>g.jsxs(ci,{maxTilt:12,className:`rounded-3xl p-8 bg-white border transition-all duration-300 flex flex-col justify-between shadow-card-soft hover:shadow-card-hover group ${n.popular?"border-indigo-300 ring-2 ring-indigo-500/10":"border-slate-200/90"}`,children:[g.jsxs("div",{children:[g.jsxs("div",{style:{transform:"translateZ(25px)"},className:"flex items-center justify-between mb-6",children:[g.jsx("div",{className:"p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-2xs group-hover:scale-110 transition-transform",children:e[n.id]}),g.jsx("span",{className:`text-xs font-bold px-3 py-1 rounded-full border ${n.popular?"bg-brand-indigo text-white border-brand-indigo":"bg-slate-100 text-slate-700 border-slate-200"}`,children:n.tag})]}),g.jsx("span",{style:{transform:"translateZ(15px)"},className:"text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1",children:n.subtitle}),g.jsx("h3",{style:{transform:"translateZ(25px)"},className:"text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-indigo transition-colors",children:n.title}),g.jsx("p",{style:{transform:"translateZ(10px)"},className:"text-sm text-slate-600 mb-6 leading-relaxed font-normal",children:n.description}),g.jsxs("div",{style:{transform:"translateZ(15px)"},className:"space-y-2.5 pt-4 border-t border-slate-100",children:[g.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider block",children:"Deliverables Included:"}),n.deliverables.map((r,o)=>g.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-slate-700",children:[g.jsx(as,{size:15,className:"text-emerald-500 flex-shrink-0 mt-0.5"}),g.jsx("span",{children:r})]},o))]})]}),g.jsx("div",{style:{transform:"translateZ(20px)"},className:"pt-6 mt-6 border-t border-slate-100",children:g.jsxs("a",{href:"#contact",onClick:()=>s&&s(n.title),className:"w-full py-3 px-4 rounded-2xl text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-brand-indigo bg-slate-50 hover:bg-indigo-50 border border-slate-200/80 hover:border-indigo-200 flex items-center justify-center gap-2 transition-all group-hover:bg-brand-indigo group-hover:text-white group-hover:border-brand-indigo shadow-2xs",children:[g.jsx("span",{children:"Inquire This Service"}),g.jsx(W0,{size:14})]})})]},n.id))})]})})}function Tw(){const[s,e]=Bt.useState("all"),n=pt.projects.filter(r=>s==="all"?!0:s==="lead"?r.badge==="Team Lead":s==="fullstack"?r.badge==="Full-Stack":!0);return g.jsx("section",{id:"projects",className:"py-24 border-t border-slate-200/80 relative",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-5 sm:px-8",children:[g.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12",children:[g.jsxs("div",{className:"max-w-2xl",children:[g.jsxs("span",{className:"text-xs font-bold text-brand-indigo uppercase tracking-widest flex items-center gap-1.5",children:[g.jsx(Ai,{size:14}),"02 — SELECTED CASE STUDIES"]}),g.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2",children:["Proven work with ",g.jsx("span",{className:"text-gradient-indigo",children:"measurable impact."})]}),g.jsx("p",{className:"text-slate-600 text-sm sm:text-base mt-2 font-normal",children:"Production web applications engineered with MERN architecture, responsive Tailwind styling, automated PDF/Excel document flows, and live Vercel deployments."})]}),g.jsx("div",{className:"w-full md:w-auto overflow-x-auto no-scrollbar pb-1 md:pb-0",children:g.jsxs("div",{className:"inline-flex items-center gap-1.5 p-1.5 rounded-2xl md:rounded-full bg-slate-100/90 border border-slate-200 shadow-2xs",children:[g.jsxs("button",{onClick:()=>e("all"),className:`px-4 py-2 rounded-xl md:rounded-full text-xs font-semibold whitespace-nowrap tracking-wider transition-all duration-200 ${s==="all"?"bg-white text-slate-900 shadow-xs font-bold":"text-slate-600 hover:text-slate-900"}`,children:["All Work (",pt.projects.length,")"]}),g.jsx("button",{onClick:()=>e("lead"),className:`px-4 py-2 rounded-xl md:rounded-full text-xs font-semibold whitespace-nowrap tracking-wider transition-all duration-200 ${s==="lead"?"bg-brand-indigo text-white shadow-xs font-bold":"text-slate-600 hover:text-slate-900"}`,children:"Team Lead Builds"}),g.jsx("button",{onClick:()=>e("fullstack"),className:`px-4 py-2 rounded-xl md:rounded-full text-xs font-semibold whitespace-nowrap tracking-wider transition-all duration-200 ${s==="fullstack"?"bg-cyan-700 text-white shadow-xs font-bold":"text-slate-600 hover:text-slate-900"}`,children:"Business Websites"})]})})]}),g.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:n.map((r,o)=>g.jsxs(ci,{maxTilt:12,className:"rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-300 p-8 flex flex-col justify-between group shadow-card-soft hover:shadow-card-hover transition-all duration-300",children:[g.jsxs("div",{children:[g.jsxs("div",{style:{transform:"translateZ(25px)"},className:"flex items-center justify-between text-xs mb-5",children:[g.jsxs("span",{className:"font-extrabold text-slate-400 text-sm",children:["0",o+1]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold",children:r.status||"Live"}),g.jsx("span",{className:"px-3 py-1 rounded-full bg-indigo-50 text-brand-indigo border border-indigo-100 font-bold text-[11px]",children:r.badge})]})]}),g.jsx("span",{style:{transform:"translateZ(15px)"},className:"text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1.5",children:r.category}),g.jsx("h3",{style:{transform:"translateZ(30px)"},className:"text-2xl font-bold text-slate-900 group-hover:text-brand-indigo transition-colors mb-3 leading-snug",children:r.title}),g.jsx("p",{style:{transform:"translateZ(15px)"},className:"text-sm text-slate-600 leading-relaxed font-normal mb-6",children:r.description}),g.jsxs("div",{style:{transform:"translateZ(20px)"},className:"space-y-2.5 pt-4 border-t border-slate-100 mb-6",children:[g.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400 block",children:"Key Outcomes & Architecture:"}),r.highlights.map((l,u)=>g.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-slate-700",children:[g.jsx(as,{size:14,className:"text-emerald-500 flex-shrink-0 mt-0.5"}),g.jsx("span",{children:l})]},u))]})]}),g.jsxs("div",{children:[g.jsx("div",{style:{transform:"translateZ(20px)"},className:"flex flex-wrap gap-1.5 mb-6",children:r.tags.map(l=>g.jsx("span",{className:"px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-slate-50 text-slate-700 border border-slate-200/70",children:l},l))}),g.jsx("div",{style:{transform:"translateZ(30px)"},children:g.jsxs("a",{href:r.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"w-full py-3.5 px-5 rounded-2xl text-xs font-bold uppercase tracking-wider text-white bg-slate-900 group-hover:bg-brand-indigo flex items-center justify-center gap-2 transition-all duration-300 shadow-sm group-hover:shadow-glow-indigo group-hover:scale-[1.01]",children:[g.jsx("span",{children:"Launch Live Demo"}),g.jsx(Gl,{size:15})]})})]})]},r.id))})]})})}function Aw(){const s=[g.jsx(lw,{className:"text-brand-indigo",size:24}),g.jsx(pw,{className:"text-cyan-600",size:24}),g.jsx(eg,{className:"text-amber-500",size:24}),g.jsx(xw,{className:"text-emerald-600",size:24})];return g.jsx("section",{id:"process",className:"py-24 border-t border-slate-200/80 relative bg-slate-50/60",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-5 sm:px-8",children:[g.jsxs("div",{className:"max-w-2xl mb-14",children:[g.jsxs("span",{className:"text-xs font-bold text-brand-indigo uppercase tracking-widest flex items-center gap-1.5",children:[g.jsx(Ai,{size:14}),"03 — COLLABORATION WORKFLOW"]}),g.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2",children:["A transparent, ",g.jsx("span",{className:"text-gradient-indigo",children:"frictionless process."})]}),g.jsx("p",{className:"text-slate-600 text-sm sm:text-base mt-2 font-normal",children:"No endless meetings or opaque agency handoffs. Direct communication, iterative preview links, and zero guesswork from day one."})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:pt.freelanceProcess.map((e,n)=>g.jsxs(ci,{maxTilt:12,className:"p-8 rounded-3xl bg-white border border-slate-200/90 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group",children:[g.jsxs("div",{children:[g.jsxs("div",{style:{transform:"translateZ(25px)"},className:"flex items-center justify-between mb-6",children:[g.jsx("div",{className:"w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs",children:s[n]}),g.jsx("span",{className:"text-3xl font-black text-slate-200 group-hover:text-brand-indigo transition-colors",children:e.step})]}),g.jsx("h3",{style:{transform:"translateZ(20px)"},className:"text-lg font-bold text-slate-900 mb-2.5 group-hover:text-brand-indigo transition-colors",children:e.title}),g.jsx("p",{style:{transform:"translateZ(15px)"},className:"text-xs sm:text-sm text-slate-600 leading-relaxed font-normal",children:e.description})]}),g.jsxs("div",{style:{transform:"translateZ(20px)"},className:"pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:[g.jsxs("span",{children:["Phase 0",n+1]}),g.jsxs("span",{className:"text-emerald-600 font-bold flex items-center gap-1",children:[g.jsx(as,{size:13}),"Milestone Verified"]})]})]},e.step))})]})})}function Cw(){const s=[g.jsx(Ef,{className:"text-emerald-600",size:24}),g.jsx(eg,{className:"text-brand-indigo",size:24}),g.jsx(Wl,{className:"text-amber-500",size:24}),g.jsx(uw,{className:"text-cyan-600",size:24})];return g.jsx("section",{id:"about",className:"py-24 border-t border-slate-200/80 relative",children:g.jsx("div",{className:"max-w-7xl mx-auto px-5 sm:px-8",children:g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",children:[g.jsxs("div",{className:"lg:col-span-5 space-y-5",children:[g.jsxs("span",{className:"text-xs font-bold text-brand-indigo uppercase tracking-widest flex items-center gap-1.5",children:[g.jsx(Ai,{size:14}),"04 — FREELANCER PRINCIPLES"]}),g.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight",children:["Engineering with discipline.",g.jsx("br",{}),g.jsx("span",{className:"text-gradient-indigo",children:"Delivering with speed."})]}),g.jsx("p",{className:"text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-1",children:"I partner directly with founders, businesses, and engineering leads looking for an agile developer who takes genuine ownership. No corporate bureaucracy — just clean code, swift responses, and production excellence."}),g.jsxs("div",{className:"p-7 rounded-3xl bg-white border border-slate-200/90 shadow-card-soft space-y-3.5 mt-4",children:[g.jsx("span",{className:"text-xs font-bold text-slate-900 uppercase tracking-wider block",children:"My Freelance Guarantee to You:"}),g.jsx("div",{className:"space-y-3 pt-1",children:pt.skills.workEthics.map((e,n)=>g.jsxs("div",{className:"flex items-start gap-2.5 text-xs font-medium text-slate-700",children:[g.jsx(as,{size:16,className:"text-emerald-500 flex-shrink-0 mt-0.5"}),g.jsx("span",{children:e})]},n))})]})]}),g.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[g.jsx("p",{className:"text-base sm:text-lg text-slate-700 leading-relaxed font-normal",children:pt.personal.summary}),g.jsxs("p",{className:"text-sm sm:text-base text-slate-600 leading-relaxed font-normal",children:["My hands-on experience building systems like the ",g.jsx("strong",{className:"text-slate-900 font-semibold",children:"EEGA Trust CRM"})," (managing donor interactions with automated PDF and Excel report generation) and the ",g.jsx("strong",{className:"text-slate-900 font-semibold",children:"SmileCare Dental EHR"})," gives me the practical foundation to ship mission-critical web applications with confidence."]}),g.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4",children:pt.freelanceTrustMetrics.map((e,n)=>g.jsxs(ci,{maxTilt:14,className:"p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-300 shadow-card-soft hover:shadow-card-hover transition-all duration-300 group text-left",children:[g.jsx("div",{style:{transform:"translateZ(20px)"},className:"mb-3",children:s[n]}),g.jsx("div",{style:{transform:"translateZ(30px)"},className:"text-2xl sm:text-3xl font-black text-slate-900 tracking-tight group-hover:text-brand-indigo transition-colors",children:e.value}),g.jsx("div",{style:{transform:"translateZ(20px)"},className:"text-xs font-bold uppercase tracking-wider text-slate-800 mt-1",children:e.label}),g.jsx("div",{style:{transform:"translateZ(15px)"},className:"text-[11px] text-slate-500 mt-1.5 leading-tight hidden sm:block",children:e.description})]},n))})]})]})})})}function Rw(){const[s,e]=Bt.useState("all"),n=[{id:"all",label:"All Technologies"},{id:"frontend",label:"Frontend & UI"},{id:"backend",label:"Backend & APIs"},{id:"db",label:"Databases & Tools"}],r=s==="all"||s==="frontend",o=s==="all"||s==="backend",l=s==="all"||s==="db";return g.jsx("section",{id:"skills",className:"py-24 border-t border-slate-200/80 relative",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-5 sm:px-8",children:[g.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12",children:[g.jsxs("div",{className:"max-w-2xl",children:[g.jsxs("span",{className:"text-xs font-bold text-brand-indigo uppercase tracking-widest flex items-center gap-1.5",children:[g.jsx(Ai,{size:14}),"05 — TECH ARSENAL"]}),g.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2",children:["Modern stack, ",g.jsx("span",{className:"text-gradient-indigo",children:"battle-tested."})]}),g.jsx("p",{className:"text-slate-600 text-sm sm:text-base mt-2 font-normal",children:"Practical technologies chosen for high developer velocity, cross-device responsiveness, and bulletproof server stability."})]}),g.jsx("div",{className:"w-full md:w-auto overflow-x-auto no-scrollbar pb-1 md:pb-0",children:g.jsx("div",{className:"inline-flex items-center gap-1.5 p-1.5 rounded-2xl md:rounded-full bg-slate-100/90 border border-slate-200 shadow-2xs",children:n.map(u=>g.jsx("button",{onClick:()=>e(u.id),className:`px-4 py-2 rounded-xl md:rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${s===u.id?"bg-brand-indigo text-white shadow-xs font-bold":"text-slate-600 hover:text-slate-900 hover:bg-white/80"}`,children:u.label},u.id))})})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[r&&g.jsxs(ci,{maxTilt:12,className:"p-8 rounded-3xl bg-white border border-slate-200/90 shadow-card-soft hover:shadow-card-hover transition-all duration-300",children:[g.jsxs("div",{style:{transform:"translateZ(25px)"},className:"flex items-center gap-3.5 mb-6",children:[g.jsx("div",{className:"p-3.5 rounded-2xl bg-indigo-50 text-brand-indigo border border-indigo-100 shadow-2xs",children:g.jsx(vg,{size:22})}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-bold text-slate-900",children:"Frontend & Interface"}),g.jsx("p",{className:"text-xs text-slate-500",children:"Interactive, Responsive UX"})]})]}),g.jsx("div",{style:{transform:"translateZ(15px)"},className:"space-y-3",children:pt.skills.frontend.map(u=>g.jsxs("div",{className:"p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex items-center justify-between hover:bg-indigo-50/40 hover:border-indigo-200 transition-colors",children:[g.jsx("span",{className:"text-xs font-semibold text-slate-800",children:u.name}),g.jsx("span",{className:"text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white text-brand-indigo border border-slate-200 shadow-2xs",children:u.level})]},u.name))})]}),o&&g.jsxs(ci,{maxTilt:12,className:"p-8 rounded-3xl bg-white border border-slate-200/90 shadow-card-soft hover:shadow-card-hover transition-all duration-300",children:[g.jsxs("div",{style:{transform:"translateZ(25px)"},className:"flex items-center gap-3.5 mb-6",children:[g.jsx("div",{className:"p-3.5 rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-100 shadow-2xs",children:g.jsx(_w,{size:22})}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-bold text-slate-900",children:"Backend & Security"}),g.jsx("p",{className:"text-xs text-slate-500",children:"APIs, Tokens & Scalability"})]})]}),g.jsx("div",{style:{transform:"translateZ(15px)"},className:"space-y-3",children:pt.skills.backend.map(u=>g.jsxs("div",{className:"p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex items-center justify-between hover:bg-cyan-50/40 hover:border-cyan-200 transition-colors",children:[g.jsx("span",{className:"text-xs font-semibold text-slate-800",children:u.name}),g.jsx("span",{className:"text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white text-cyan-700 border border-slate-200 shadow-2xs",children:u.level})]},u.name))})]}),l&&g.jsxs(ci,{maxTilt:12,className:"p-8 rounded-3xl bg-white border border-slate-200/90 shadow-card-soft hover:shadow-card-hover transition-all duration-300",children:[g.jsxs("div",{style:{transform:"translateZ(25px)"},className:"flex items-center gap-3.5 mb-6",children:[g.jsx("div",{className:"p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-2xs",children:g.jsx(rg,{size:22})}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-bold text-slate-900",children:"Databases & Tools"}),g.jsx("p",{className:"text-xs text-slate-500",children:"Schemas & Cloud Deployments"})]})]}),g.jsx("div",{style:{transform:"translateZ(15px)"},className:"space-y-3",children:pt.skills.databaseAndTools.map(u=>g.jsxs("div",{className:"p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex items-center justify-between hover:bg-emerald-50/40 hover:border-emerald-200 transition-colors",children:[g.jsx("span",{className:"text-xs font-semibold text-slate-800",children:u.name}),g.jsx("span",{className:"text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white text-emerald-700 border border-slate-200 shadow-2xs",children:u.level})]},u.name))})]})]}),g.jsxs("div",{className:"mt-8 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-card-soft flex flex-wrap items-center justify-between gap-4",children:[g.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider",children:[g.jsx(Cg,{size:16,className:"text-brand-indigo"}),g.jsx("span",{children:"Languages & Fundamentals:"})]}),g.jsx("div",{className:"flex flex-wrap items-center gap-3",children:pt.skills.languages.map(u=>g.jsxs("span",{className:"px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 hover:border-indigo-300 transition-colors",children:[g.jsx("strong",{className:"text-slate-900 font-bold",children:u.name})," • ",u.type]},u.name))})]})]})})}function Pw(){return g.jsx("section",{id:"experience",className:"py-24 border-t border-slate-200/80 relative",children:g.jsx("div",{className:"max-w-7xl mx-auto px-5 sm:px-8",children:g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12",children:[g.jsxs("div",{className:"lg:col-span-7 space-y-8",children:[g.jsxs("div",{children:[g.jsxs("span",{className:"text-xs font-bold text-brand-indigo uppercase tracking-widest flex items-center gap-1.5",children:[g.jsx(Ai,{size:14}),"06 — EXPERIENCE & TRACK RECORD"]}),g.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2",children:["Real-world ",g.jsx("span",{className:"text-gradient-indigo",children:"industry execution."})]}),g.jsx("p",{className:"text-slate-600 text-sm sm:text-base mt-2 font-normal",children:"Hands-on internship roles covering full-stack web engineering, cross-functional collaboration, technical debugging, and IT infrastructure."})]}),g.jsx("div",{className:"relative border-l-2 border-slate-200 ml-3 pl-8 space-y-10",children:pt.experience.map((s,e)=>g.jsxs("div",{className:"relative group",children:[g.jsx("div",{className:"absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-brand-indigo group-hover:scale-125 transition-transform shadow-xs"}),g.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-1",children:[g.jsx("span",{className:"text-xs font-bold text-brand-indigo px-3 py-0.5 rounded-full bg-indigo-50 border border-indigo-100",children:s.period}),g.jsx("span",{className:"text-xs font-semibold text-slate-500 uppercase tracking-wider",children:s.type})]}),g.jsxs("h3",{className:"text-xl font-bold text-slate-900 mt-2",children:[s.role," ",g.jsx("span",{className:"text-slate-500 font-normal",children:"at"})," ",s.company]}),g.jsx("ul",{className:"mt-3 space-y-2",children:s.description.map((n,r)=>g.jsx("li",{className:"text-sm text-slate-600 leading-relaxed list-disc list-inside font-normal",children:n},r))})]},e))})]}),g.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[g.jsxs("div",{children:[g.jsx("span",{className:"text-xs font-bold text-amber-600 uppercase tracking-widest",children:"RECOGNITIONS & MILESTONES"}),g.jsx("h3",{className:"text-2xl font-bold text-slate-900 mt-2",children:"Competitive Wins"})]}),g.jsx("div",{className:"space-y-4",children:pt.achievements.map((s,e)=>g.jsx(ci,{maxTilt:12,className:"p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-amber-400 shadow-card-soft hover:shadow-card-hover transition-all duration-300",children:g.jsxs("div",{className:"flex items-start gap-4",children:[g.jsx("div",{style:{transform:"translateZ(25px)"},className:"p-3.5 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200/60 flex-shrink-0 shadow-2xs",children:g.jsx(Wl,{size:26})}),g.jsxs("div",{children:[g.jsx("div",{style:{transform:"translateZ(15px)"},className:"flex items-center gap-2 mb-1",children:g.jsx("span",{className:"text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200",children:s.year})}),g.jsx("h4",{style:{transform:"translateZ(25px)"},className:"text-lg font-bold text-slate-900",children:s.title}),g.jsx("p",{style:{transform:"translateZ(15px)"},className:"text-xs font-medium text-slate-500 mt-0.5",children:s.organization}),g.jsx("p",{style:{transform:"translateZ(15px)"},className:"text-xs text-slate-600 mt-3 leading-relaxed font-normal",children:s.highlight})]})]})},e))}),g.jsxs("div",{className:"p-7 rounded-3xl bg-white border border-slate-200/90 shadow-card-soft",children:[g.jsxs("div",{className:"flex items-center gap-2 mb-4 text-brand-indigo text-xs font-bold uppercase tracking-wider",children:[g.jsx(Y0,{size:18}),g.jsx("span",{children:"Selected Certifications"})]}),g.jsx("div",{className:"space-y-2.5",children:pt.certifications.slice(0,4).map((s,e)=>g.jsxs("div",{className:"flex items-center justify-between text-xs py-2 border-b border-slate-100 last:border-none",children:[g.jsx("span",{className:"text-slate-700 font-medium",children:s.title}),g.jsx("span",{className:"text-slate-400 font-semibold ml-2",children:s.year})]},e))})]})]})]})})})}function Nw(){return g.jsx("section",{id:"education",className:"py-24 border-t border-slate-200/80 relative",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-5 sm:px-8",children:[g.jsxs("div",{className:"max-w-2xl mb-12",children:[g.jsxs("span",{className:"text-xs font-bold text-brand-indigo uppercase tracking-widest flex items-center gap-1.5",children:[g.jsx(Ai,{size:14}),"07 — ACADEMIC FOUNDATION"]}),g.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2",children:["Education & ",g.jsx("span",{className:"text-gradient-indigo",children:"Certifications."})]}),g.jsx("p",{className:"text-slate-600 text-sm sm:text-base mt-2 font-normal",children:"Formal computer application studies, technical specializations, and verified skill badges."})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-16",children:pt.education.map((s,e)=>g.jsxs(ci,{maxTilt:12,className:"p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-300 flex flex-col justify-between shadow-card-soft hover:shadow-card-hover transition-all duration-300",children:[g.jsxs("div",{children:[g.jsxs("div",{style:{transform:"translateZ(25px)"},className:"flex items-center justify-between mb-5",children:[g.jsx("div",{className:"p-3.5 rounded-2xl bg-indigo-50 text-brand-indigo border border-indigo-100 shadow-2xs",children:g.jsx(dw,{size:22})}),g.jsxs("span",{className:"px-3 py-1 rounded-full text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold",children:["Score: ",s.score]})]}),g.jsx("h3",{style:{transform:"translateZ(25px)"},className:"text-xl font-bold text-slate-900 mb-2 leading-snug",children:s.degree}),g.jsx("p",{style:{transform:"translateZ(15px)"},className:"text-sm text-slate-600 font-medium mb-1",children:s.institution})]}),g.jsxs("div",{style:{transform:"translateZ(20px)"},className:"mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500",children:[g.jsx("span",{className:"font-medium",children:s.period}),g.jsx("span",{className:"text-brand-indigo font-bold",children:s.status})]})]},e))}),g.jsxs("div",{className:"rounded-3xl bg-white border border-slate-200/90 p-8 shadow-card-soft",children:[g.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[g.jsx(Y0,{className:"text-brand-indigo",size:22}),g.jsx("h3",{className:"text-lg font-bold text-slate-900",children:"Verified Badges & Technical Credentials"})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3.5",children:pt.certifications.map((s,e)=>g.jsxs("div",{className:"p-4 rounded-2xl bg-slate-50/70 border border-slate-200/60 flex items-center justify-between hover:bg-indigo-50/30 hover:border-indigo-200 transition-all",children:[g.jsxs("div",{className:"flex items-center gap-3.5",children:[g.jsx(aw,{size:16,className:"text-emerald-500 flex-shrink-0"}),g.jsxs("div",{children:[g.jsx("h4",{className:"text-sm font-semibold text-slate-800",children:s.title}),g.jsx("p",{className:"text-xs text-slate-500 font-normal",children:s.issuer})]})]}),g.jsx("span",{className:"text-xs font-semibold text-slate-500 ml-3 flex-shrink-0",children:s.year})]},e))})]})]})})}function Lw(){return g.jsx("section",{className:"py-24 border-t border-slate-200/80 relative bg-slate-50/50",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-5 sm:px-8",children:[g.jsxs("div",{className:"max-w-2xl mb-14",children:[g.jsxs("span",{className:"text-xs font-bold text-brand-indigo uppercase tracking-widest flex items-center gap-1.5",children:[g.jsx(Ai,{size:14}),"08 — SOCIAL PROOF & FEEDBACK"]}),g.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2",children:["What collaborators ",g.jsx("span",{className:"text-gradient-indigo",children:"say about my work."})]}),g.jsx("p",{className:"text-slate-600 text-sm sm:text-base mt-2 font-normal",children:"Feedback from team members, project stakeholders, and hackathon adjudicators on technical reliability and execution speed."})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:pt.testimonials.map((s,e)=>g.jsxs(ci,{maxTilt:12,className:"p-8 rounded-3xl bg-white border border-slate-200/90 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group",children:[g.jsxs("div",{children:[g.jsxs("div",{style:{transform:"translateZ(25px)"},className:"flex items-center justify-between mb-6",children:[g.jsx("div",{className:"p-3 rounded-2xl bg-indigo-50 text-brand-indigo shadow-2xs",children:g.jsx(gw,{size:20})}),g.jsx("div",{className:"flex items-center gap-1",children:[...Array(5)].map((n,r)=>g.jsx(yw,{size:15,className:"fill-amber-400 text-amber-400"},r))})]}),g.jsxs("p",{style:{transform:"translateZ(15px)"},className:"text-sm text-slate-700 leading-relaxed font-normal italic mb-6",children:['"',s.quote,'"']})]}),g.jsxs("div",{style:{transform:"translateZ(20px)"},className:"pt-5 border-t border-slate-100 flex items-center justify-between",children:[g.jsxs("div",{children:[g.jsx("h4",{className:"text-sm font-bold text-slate-900",children:s.author}),g.jsx("p",{className:"text-xs text-slate-500 font-medium mt-0.5",children:s.role})]}),g.jsx("span",{className:"text-[11px] font-bold px-3 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-200",children:s.tag})]})]},e))})]})})}function Dw({onShowToast:s,prefillData:e}){const[n,r]=Bt.useState(!1),[o,l]=Bt.useState({name:"",email:"",service:"Full-Stack Web App (MERN)",subject:"",message:""}),[u,f]=Bt.useState("");n0.useEffect(()=>{e&&l(v=>({...v,subject:e.subject||v.subject,message:e.message||v.message}))},[e]);const p=async()=>{try{await navigator.clipboard.writeText(pt.personal.email),r(!0),s&&s("Email copied to clipboard! ✨"),setTimeout(()=>r(!1),2200)}catch{s&&s(`Email: ${pt.personal.email}`)}},m=v=>{if(v.preventDefault(),!o.name||!o.email||!o.message){f("Please fill in your name, email, and project details.");return}const S=encodeURIComponent(`Name: ${o.name}
Email: ${o.email}
Service: ${o.service}

Project Scope & Message:
${o.message}`),x=`mailto:${pt.personal.email}?subject=${encodeURIComponent(o.subject||`Project Inquiry from ${o.name} (${o.service})`)}&body=${S}`;f("Opening your email composer... ✉"),s&&s("Launching email client... 🚀"),setTimeout(()=>{window.location.href=x},400)};return g.jsx("section",{id:"contact",className:"py-24 border-t border-slate-200/80 relative bg-slate-50/60",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-5 sm:px-8",children:[g.jsxs("div",{className:"max-w-2xl mb-12",children:[g.jsxs("span",{className:"text-xs font-bold text-brand-indigo uppercase tracking-widest flex items-center gap-1.5",children:[g.jsx(Ai,{size:14}),"09 — START A PROJECT"]}),g.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2",children:["Let’s turn your idea ",g.jsx("br",{}),"into a ",g.jsx("span",{className:"text-gradient-indigo",children:"market-ready product."})]}),g.jsx("p",{className:"text-slate-600 text-sm sm:text-base mt-2 font-normal",children:"Available for new freelance projects, contract roles, and software engineering consulting. Let's discuss your timeline and deliverables."})]}),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10",children:[g.jsx("div",{className:"lg:col-span-5 space-y-6",children:g.jsxs(ci,{maxTilt:12,className:"p-8 rounded-3xl bg-white border border-slate-200/90 space-y-5 shadow-card-soft hover:shadow-card-hover transition-all duration-300",children:[g.jsxs("div",{style:{transform:"translateZ(25px)"},className:"flex items-center justify-between",children:[g.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-widest block",children:"Direct Inquiries"}),g.jsx("span",{className:"text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200",children:"Quick Reply"})]}),g.jsxs("div",{style:{transform:"translateZ(30px)"},className:"flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/80",children:[g.jsxs("div",{className:"flex items-center gap-3 truncate",children:[g.jsx(fw,{className:"text-brand-indigo flex-shrink-0",size:20}),g.jsx("a",{href:`mailto:${pt.personal.email}`,className:"text-sm font-semibold text-slate-800 hover:text-brand-indigo transition-colors truncate",children:pt.personal.email})]}),g.jsxs("button",{type:"button",onClick:p,className:"px-3.5 py-1.5 rounded-xl bg-indigo-50 hover:bg-brand-indigo text-brand-indigo hover:text-white border border-indigo-200 text-xs font-bold flex items-center gap-1.5 transition-all ml-2 flex-shrink-0",title:"Copy Email",children:[n?g.jsx(sw,{size:14}):g.jsx(cw,{size:14}),g.jsx("span",{children:n?"Copied":"Copy"})]})]}),g.jsx("div",{style:{transform:"translateZ(25px)"},children:g.jsxs("a",{href:pt.personal.whatsapp,target:"_blank",rel:"noopener noreferrer",className:"w-full py-4 px-5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 flex items-center justify-between text-emerald-900 transition-all text-xs font-bold group shadow-2xs",children:[g.jsxs("div",{className:"flex items-center gap-2.5",children:[g.jsx(mg,{size:18,className:"text-emerald-600"}),g.jsx("span",{children:"Chat on WhatsApp Directly"})]}),g.jsx(Gl,{size:16,className:"group-hover:translate-x-0.5 transition-transform"})]})}),g.jsxs("div",{style:{transform:"translateZ(20px)"},className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1",children:[g.jsxs("a",{href:`tel:${pt.personal.phone.replace(/\s+/g,"")}`,className:"p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5 text-slate-700 hover:text-brand-indigo hover:border-indigo-200 transition-all text-xs font-semibold",children:[g.jsx(mw,{size:16,className:"text-emerald-600 flex-shrink-0"}),g.jsx("span",{children:pt.personal.phone})]}),g.jsxs("div",{className:"p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-2 text-slate-600 text-xs font-medium",children:[g.jsx(fg,{size:16,className:"text-brand-indigo flex-shrink-0"}),g.jsx("span",{children:"Karur, India (IST)"})]})]}),g.jsxs("div",{style:{transform:"translateZ(15px)"},className:"p-4 rounded-2xl bg-slate-50/70 border border-slate-200/60 text-xs text-slate-600 space-y-1",children:[g.jsxs("div",{className:"flex items-center gap-2 font-semibold text-slate-800",children:[g.jsx(ow,{size:14,className:"text-brand-indigo"}),g.jsx("span",{children:"Timezone & Availability:"})]}),g.jsx("p",{className:"text-[11px] leading-relaxed",children:"Active Monday – Saturday (9:00 AM – 8:00 PM IST). Flexible overlap for US, UK, Europe, and Asia-Pacific client schedules."})]}),g.jsxs("div",{style:{transform:"translateZ(20px)"},className:"pt-2 flex items-center justify-between border-t border-slate-100 text-xs text-slate-500 font-semibold",children:[g.jsx("span",{children:"Social Profiles:"}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("a",{href:pt.personal.linkedin,target:"_blank",rel:"noopener noreferrer",className:"p-2.5 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 text-slate-600 hover:text-brand-indigo transition-all",children:g.jsx(Dg,{size:15})}),g.jsx("a",{href:pt.personal.github,target:"_blank",rel:"noopener noreferrer",className:"p-2.5 rounded-xl bg-slate-50 hover:bg-slate-200 border border-slate-200 text-slate-600 hover:text-slate-900 transition-all",children:g.jsx(Ig,{size:15})})]})]})]})}),g.jsx("div",{className:"lg:col-span-7",children:g.jsxs("div",{className:"p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-card-soft",children:[g.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-1",children:"Send a Project Brief"}),g.jsx("p",{className:"text-xs text-slate-500 mb-6",children:"Fill in your project goals below. I’ll review your requirements and reply promptly."}),g.jsxs("form",{onSubmit:m,className:"space-y-4",children:[g.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2",children:"Your Name *"}),g.jsx("input",{type:"text",required:!0,placeholder:"e.g. John Doe / Founder",value:o.name,onChange:v=>l({...o,name:v.target.value}),className:"w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-brand-indigo focus:bg-white transition-all"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2",children:"Your Email *"}),g.jsx("input",{type:"email",required:!0,placeholder:"e.g. john@company.com",value:o.email,onChange:v=>l({...o,email:v.target.value}),className:"w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-brand-indigo focus:bg-white transition-all"})]})]}),g.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2",children:"Service Required"}),g.jsxs("select",{value:o.service,onChange:v=>l({...o,service:v.target.value}),className:"w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-brand-indigo focus:bg-white transition-all",children:[g.jsx("option",{value:"Full-Stack Web App (MERN)",children:"Full-Stack Web App (MERN)"}),g.jsx("option",{value:"Custom CRM & Internal Portal",children:"Custom CRM & Internal Portal"}),g.jsx("option",{value:"Clinic & Healthcare EHR",children:"Clinic & Healthcare EHR"}),g.jsx("option",{value:"Business Website / Landing Page",children:"Business Website / Landing Page"}),g.jsx("option",{value:"REST API & Database Architecture",children:"REST API & Database Architecture"}),g.jsx("option",{value:"Code Review / Other Consultation",children:"Other Technical Project"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2",children:"Project Subject"}),g.jsx("input",{type:"text",placeholder:"e.g. New MERN Dashboard MVP for Logistics",value:o.subject,onChange:v=>l({...o,subject:v.target.value}),className:"w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-brand-indigo focus:bg-white transition-all"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2",children:"Project Overview & Goals *"}),g.jsx("textarea",{rows:4,required:!0,placeholder:"Tell me a bit about what you want to build, any key features, and your target launch date...",value:o.message,onChange:v=>l({...o,message:v.target.value}),className:"w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-brand-indigo focus:bg-white transition-all resize-none"})]}),u&&g.jsx("div",{className:"p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs font-semibold text-brand-indigo",children:u}),g.jsx("div",{className:"pt-2",children:g.jsxs("button",{type:"submit",className:"w-full py-4 px-6 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-brand-indigo hover:bg-brand-indigo-dark shadow-md shadow-brand-indigo/30 hover:shadow-glow-indigo transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] shimmer-hover",children:[g.jsx(vw,{size:15}),g.jsx("span",{children:"Send Project Inquiry"})]})})]})]})})]})]})})}function Iw(){const s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return g.jsx("footer",{className:"border-t border-slate-200/90 py-12 bg-white text-slate-600",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-5 sm:px-8",children:[g.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100",children:[g.jsxs("div",{children:[g.jsxs("span",{className:"font-black text-2xl tracking-tight text-slate-900",children:["SB",g.jsx("span",{className:"text-brand-indigo",children:"."})]}),g.jsx("p",{className:"text-xs text-slate-500 mt-1 max-w-sm",children:"Freelance Full-Stack Developer specializing in MERN Stack, modern responsive user interfaces, and custom web applications."})]}),g.jsxs("div",{className:"flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-600",children:[g.jsx("a",{href:"#services",className:"hover:text-brand-indigo transition-colors",children:"Services"}),g.jsx("a",{href:"#projects",className:"hover:text-brand-indigo transition-colors",children:"Case Studies"}),g.jsx("a",{href:"#process",className:"hover:text-brand-indigo transition-colors",children:"Process"}),g.jsx("a",{href:"#skills",className:"hover:text-brand-indigo transition-colors",children:"Skills"}),g.jsx("a",{href:"#contact",className:"hover:text-brand-indigo transition-colors",children:"Contact"})]}),g.jsx("button",{type:"button",onClick:s,className:"p-3 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-brand-indigo transition-all border border-slate-200 shadow-2xs",title:"Back to Top",children:g.jsx(rw,{size:16})})]}),g.jsxs("div",{className:"pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400",children:[g.jsxs("div",{children:["© 2026 ",g.jsx("strong",{className:"text-slate-700 font-semibold",children:pt.personal.name}),". All rights reserved."]}),g.jsx("div",{className:"flex items-center gap-2 text-slate-500",children:g.jsx("span",{children:"Clean Light Theme • MERN Architecture"})})]})]})})}function Uw(){const[s,e]=Bt.useState(""),[n,r]=Bt.useState({x:-100,y:-100}),[o,l]=Bt.useState(null),u=p=>{e(p),setTimeout(()=>{e("")},2800)},f=p=>{l({subject:`Inquiry regarding: ${p}`,message:`Hi Seshaan, I'm interested in discussing a project for: ${p}. Here are some initial details...`});const m=document.getElementById("contact");m&&m.scrollIntoView({behavior:"smooth"})};return Bt.useEffect(()=>{const p=m=>{r({x:m.clientX,y:m.clientY})};return window.addEventListener("mousemove",p),()=>window.removeEventListener("mousemove",p)},[]),g.jsxs("div",{className:"relative min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-brand-indigo/15 selection:text-brand-indigo overflow-x-hidden",children:[g.jsx(XE,{}),g.jsx("div",{className:"fixed w-[360px] h-[360px] rounded-full pointer-events-none -z-10 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out",style:{left:`${n.x}px`,top:`${n.y}px`,background:"radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(2, 132, 199, 0.04) 40%, transparent 70%)"}}),g.jsx(Mw,{}),g.jsxs("main",{className:"relative z-10",children:[g.jsx(Ew,{}),g.jsx(ww,{}),g.jsx(bw,{onSelectService:f}),g.jsx(Tw,{}),g.jsx(Aw,{}),g.jsx(Cw,{}),g.jsx(Rw,{}),g.jsx(Pw,{}),g.jsx(Nw,{}),g.jsx(Lw,{}),g.jsx(Dw,{onShowToast:u,prefillData:o})]}),g.jsx(Iw,{}),s&&g.jsx("div",{className:"fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-slate-900 text-white text-xs font-bold border border-slate-700 shadow-xl shadow-slate-900/30 backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-3 duration-200",children:s})]})}Mv.createRoot(document.getElementById("root")).render(g.jsx(n0.StrictMode,{children:g.jsx(Uw,{})}));
