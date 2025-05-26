(function(){'use strict';var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
var fa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=fa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if(typeof Object.setPrototypeOf=="function")ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function y(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function A(a){if(!(a instanceof Array)){a=y(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function oa(a){return pa(a,a)}
function pa(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function qa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ra=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)qa(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||ra});
function sa(){this.A=!1;this.u=null;this.i=void 0;this.h=1;this.o=this.H=0;this.P=this.j=null}
function ta(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
sa.prototype.G=function(a){this.i=a};
function ua(a,b){a.j={exception:b,zd:!0};a.h=a.H||a.o}
sa.prototype.return=function(a){this.j={return:a};this.h=this.o};
sa.prototype.yield=function(a,b){this.h=b;return{value:a}};
sa.prototype.B=function(a){this.h=a};
function va(a,b,c){a.H=b;c!=void 0&&(a.o=c)}
function wa(a,b){a.h=b;a.H=0}
function xa(a){a.H=0;var b=a.j.exception;a.j=null;return b}
function ya(a){var b=a.P.splice(0)[0];(b=a.j=a.j||b)?b.zd?a.h=a.H||a.o:b.B!=void 0&&a.o<b.B?(a.h=b.B,a.j=null):a.h=a.o:a.h=0}
function za(a){this.h=new sa;this.i=a}
function Aa(a,b){ta(a.h);var c=a.h.u;if(c)return Ba(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ca(a)}
function Ba(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.A=!1,e;var f=e.value}catch(g){return a.h.u=null,ua(a.h,g),Ca(a)}a.h.u=null;d.call(a.h,f);return Ca(a)}
function Ca(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.A=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ua(a.h,c)}a.h.A=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.zd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Da(a){this.next=function(b){ta(a.h);a.h.u?b=Ba(a,a.h.u.next,b,a.h.G):(a.h.G(b),b=Ca(a));return b};
this.throw=function(b){ta(a.h);a.h.u?b=Ba(a,a.h.u["throw"],b,a.h.G):(ua(a.h,b),b=Ca(a));return b};
this.return=function(b){return Aa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ea(new Da(new za(a)))}
function C(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("globalThis",function(a){return a||da});
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ia});
u("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.X=0;this.bb=void 0;this.h=[];this.u=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.U),reject:g(this.j)}};
b.prototype.U=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Z(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.P(g):this.o(g)}};
b.prototype.P=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}typeof h=="function"?this.ha(h,g):this.o(g)};
b.prototype.j=function(g){this.H(2,g)};
b.prototype.o=function(g){this.H(1,g)};
b.prototype.H=function(g,h){if(this.X!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.X);this.X=g;this.bb=h;this.X===2&&this.Y();this.A()};
b.prototype.Y=function(){var g=this;e(function(){if(g.G()){var h=da.console;typeof h!=="undefined"&&h.error(g.bb)}},1)};
b.prototype.G=function(){if(this.u)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.bb;return k(g)};
b.prototype.A=function(){if(this.h!=null){for(var g=0;g<this.h.length;++g)f.i(this.h[g]);this.h=null}};
var f=new c;b.prototype.Z=function(g){var h=this.i();g.kc(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return typeof r=="function"?function(w){try{l(r(w))}catch(x){m(x)}}:t}
var l,m,n=new b(function(r,t){l=r;m=t});
this.kc(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.kc=function(g,h){function k(){switch(l.X){case 1:g(l.bb);break;case 2:h(l.bb);break;default:throw Error("Unexpected state: "+l.X);}}
var l=this;this.h==null?f.i(k):this.h.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=y(g),m=l.next();!m.done;m=l.next())d(m.value).kc(h,k)})};
b.all=function(g){var h=y(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(w){return function(x){r[w]=x;t--;t==0&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).kc(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||na});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=y(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!qa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!qa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&qa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&qa(k,g)&&qa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&qa(k,g)&&qa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ea(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&qa(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=y(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(y([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=y(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(y([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Fa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Fa(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Fa(this,function(b){return b})}});
function Ga(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)qa(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ga(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)qa(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Fa(this,function(b,c){return c})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ha=Ha||{},D=this||self;function E(a,b,c){a=a.split(".");c=c||D;for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ka(a){var b=F("CLOSURE_FLAGS");a=b&&b[a];return a!=null?a:!1}
function F(a,b){a=a.split(".");b=b||D;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function La(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Oa(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Pa(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++Ra)}
var Qa="closure_uid_"+(Math.random()*1E9>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ua(a,b,c){Ua=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Sa:Ta;return Ua.apply(null,arguments)}
function Va(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ya(){return Date.now()}
function Za(a){return a}
function $a(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function ab(a,b){return(a=(new RegExp("[^#]*[?&]"+b+"=([^&#]*)")).exec(a))?a[1]:null}
function bb(a){var b=C.apply(1,arguments).filter(Boolean).join("&");if(!b)return a;var c=a.match(/[?&]adurl=/);return c?a.slice(0,c.index+1)+b+"&"+a.slice(c.index+1):a+(a.indexOf("?")<0?"?":"&")+b}
function cb(a,b){return b?"&"+a+"="+encodeURIComponent(b):""}
function db(a){var b=a.url;a=a.ci;this.h=b;this.j=a;this.i=(new Date).getTime()-17040672E5}
function eb(a){a=a.j;if(!a)return"";var b=cb("uap",a.platform)+cb("uapv",a.platformVersion)+cb("uafv",a.uaFullVersion)+cb("uaa",a.architecture)+cb("uam",a.model)+cb("uab",a.bitness);a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(function(c){return encodeURIComponent(c.brand)+";"+encodeURIComponent(c.version)}).join("|")));
a.wow64!=null&&(b+="&uaw="+Number(a.wow64));return b.slice(1)}
;function fb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,fb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
$a(fb,Error);fb.prototype.name="CustomError";function gb(a){return a}
;var hb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var ib=globalThis.trustedTypes,jb;function kb(){var a=null;if(!ib)return a;try{var b=function(c){return c};
a=ib.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function lb(){jb===void 0&&(jb=kb());return jb}
;function nb(a){this.h=a}
nb.prototype.toString=function(){return this.h+""};
function ob(a){var b=lb();a=b?b.createScriptURL(a):a;return new nb(a)}
function pb(a){if(a instanceof nb)return a.h;throw Error("");}
;var qb=oa([""]),rb=pa(["\x00"],["\\0"]),sb=pa(["\n"],["\\n"]),tb=pa(["\x00"],["\\u0000"]);function ub(a){return a.toString().indexOf("`")===-1}
ub(function(a){return a(qb)})||ub(function(a){return a(rb)})||ub(function(a){return a(sb)})||ub(function(a){return a(tb)});function vb(a){this.h=a}
vb.prototype.toString=function(){return this.h};
var wb=new vb("about:invalid#zClosurez");function xb(a){this.Ge=a}
function yb(a){return new xb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var zb=[yb("data"),yb("http"),yb("https"),yb("mailto"),yb("ftp"),new xb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],Ab=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function Cb(a){if(a instanceof vb)if(a instanceof vb)a=a.h;else throw Error("");else a=Ab.test(a)?a:void 0;return a}
;function Db(a,b){b=Cb(b);b!==void 0&&(a.href=b)}
;function Eb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;function Fb(a){this.h=a}
Fb.prototype.toString=function(){return this.h+""};function Gb(a){a=a===void 0?document:a;var b,c;a=(c=(b=a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Hb(a){this.h=a}
Hb.prototype.toString=function(){return this.h+""};
function Ib(a){var b=lb();a=b?b.createScript(a):a;return new Hb(a)}
function Jb(a){if(a instanceof Hb)return a.h;throw Error("");}
;function Kb(a){var b=Gb(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function Lb(a,b){a.src=pb(b);Kb(a)}
;function Mb(){this.h=Nb[0].toLowerCase()}
Mb.prototype.toString=function(){return this.h};function Ob(a){var b="true".toString(),c=[new Mb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Mb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;var Pb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Qb(a,b){if(b instanceof nb)a.href=pb(b).toString(),a.rel="stylesheet";else{if(Pb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=Cb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;var Sb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Tb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Ub=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Vb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Wb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Tb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Xb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Yb(a,b){b=Sb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Zb(a){var b=a.length;if(b>0){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function $b(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ac(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function bc(a){var b=F("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||D.$googDebugFname||b}catch(g){e="Not available",c=!0}b=cc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,dc[c])c=dc[c];else{c=String(c);if(!dc[c]){var f=/function\s+([^\(]+)/m.exec(c);dc[c]=f?f[1]:"[Anonymous]"}c=dc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function cc(a,b){b||(b={});b[ec(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[ec(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=cc(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[ec(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=cc(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function ec(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var dc={};function fc(a){return decodeURIComponent(a.replace(/\+/g," "))}
function hc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var ic=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jc(a){return a?decodeURI(a):a}
function kc(a){return jc(a.match(ic)[3]||null)}
function lc(a){return jc(a.match(ic)[5]||null)}
function mc(a){var b=a.match(ic);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function nc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function oc(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(d>=0){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?fc(e):"")}}}
function pc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)pc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function qc(a){var b=[],c;for(c in a)pc(c,a[c],b);return b.join("&")}
function rc(a,b){b=qc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function sc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var tc=/#|$/,uc=/[?&]($|#)/;function vc(a,b){for(var c=a.search(tc),d=0,e,f=[];(e=sc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(uc,"$1")}
;function wc(){try{var a,b;return!!((a=window)==null?0:(b=a.top)==null?0:b.location.href)&&!1}catch(c){return!0}}
;function xc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function yc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ma(d)?yc.apply(null,d):xc(d)}}
;function I(){this.ea=this.ea;this.H=this.H}
I.prototype.ea=!1;I.prototype.dispose=function(){this.ea||(this.ea=!0,this.ba())};
I.prototype[Symbol.dispose]=function(){this.dispose()};
function zc(a,b){a.addOnDisposeCallback(Va(xc,b))}
I.prototype.addOnDisposeCallback=function(a,b){this.ea?b!==void 0?a.call(b):a():(this.H||(this.H=[]),b&&(a=a.bind(b)),this.H.push(a))};
I.prototype.ba=function(){if(this.H)for(;this.H.length;)this.H.shift()()};function Ac(){var a=Bc();a=a===void 0?"bevasrsg":a;return new Promise(function(b){var c=window===window.top?window:wc()?window:window.top,d=c[a],e;((e=d)==null?0:e.bevasrs)?b(new Cc(d.bevasrs)):(d||(d={},d=(d.nqfbel=[],d),c[a]=d),d.nqfbel.push(function(f){b(new Cc(f))}))})}
function Cc(a){I.call(this);var b=this;this.vm=a;this.i="keydown keypress keyup input focusin focusout select copy cut paste change click dblclick auxclick pointerover pointerdown pointerup pointermove pointerout dragenter dragleave drag dragend mouseover mousedown mouseup mousemove mouseout touchstart touchend touchmove wheel".split(" ");this.h=void 0;this.cd=this.vm.p;this.j=this.o.bind(this);this.addOnDisposeCallback(function(){return void Dc(b)})}
v(Cc,I);Cc.prototype.snapshot=function(a){return this.vm.s(Object.assign({},a.wb&&{c:a.wb},a.ed&&{s:a.ed},a.gd!==void 0&&{p:a.gd}))};
Cc.prototype.o=function(a){this.vm.e(a)};
function Dc(a){a.h!==void 0&&(a.i.forEach(function(b){var c;(c=a.h)==null||c.removeEventListener(b,a.j)}),a.h=void 0)}
;function Ec(a){var b=b===void 0?49:b;var c=[];Fc(a,Gc,6).forEach(function(d){Hc(d,2)<=b&&c.push(Hc(d,1))});
return c}
function Ic(a){var b=b===void 0?49:b;var c=[];Fc(a,Gc,6).forEach(function(d){Hc(d,2)>b&&c.push(Hc(d,1))});
return c}
;var Jc;function Kc(){I.apply(this,arguments);this.j=1;this[Jc]=this.dispose}
v(Kc,I);Kc.prototype.share=function(){if(this.ea)throw Error("E:AD");this.j++;return this};
Kc.prototype.dispose=function(){--this.j||I.prototype.dispose.call(this)};
Jc=Symbol.dispose;function Lc(a){return{fieldType:2,fieldName:a}}
function Mc(a){return{fieldType:3,fieldName:a}}
;function Nc(a){this.h=a;a.Jc("/client_streamz/bg/frs",Mc("mk"))}
Nc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Oc(a){this.h=a;a.Jc("/client_streamz/bg/wrl",Mc("mn"),Lc("ac"),Lc("sc"),Mc("rk"),Mc("mk"))}
Oc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Pc(a){this.h=a;a.Nb("/client_streamz/bg/ec",Mc("en"),Mc("mk"))}
Pc.prototype.kb=function(a,b){this.h.Kb("/client_streamz/bg/ec",a,b)};
function Qc(a){this.h=a;a.Jc("/client_streamz/bg/el",Mc("en"),Mc("mk"))}
Qc.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/el",a,b,c)};
function Rc(a){this.h=a;a.Nb("/client_streamz/bg/cec",Lc("ec"),Mc("mk"))}
Rc.prototype.kb=function(a,b){this.h.Kb("/client_streamz/bg/cec",a,b)};
function Sc(a){this.h=a;a.Nb("/client_streamz/bg/po/csc",Lc("cs"),Mc("mk"))}
Sc.prototype.kb=function(a,b){this.h.Kb("/client_streamz/bg/po/csc",a,b)};
function Tc(a){this.h=a;a.Nb("/client_streamz/bg/po/ctav",Mc("av"),Mc("mk"))}
Tc.prototype.kb=function(a,b){this.h.Kb("/client_streamz/bg/po/ctav",a,b)};
function Uc(a){this.h=a;a.Nb("/client_streamz/bg/po/cwsc",Mc("su"),Mc("mk"))}
Uc.prototype.kb=function(a,b){this.h.Kb("/client_streamz/bg/po/cwsc",a,b)};function Vc(a){D.setTimeout(function(){throw a;},0)}
;var Wc=Ka(610401301),Xc=Ka(1981196515);function Yc(){var a=D.navigator;return a&&(a=a.userAgent)?a:""}
var Zc,$c=D.navigator;Zc=$c?$c.userAgentData||null:null;function ad(a){if(!Wc||!Zc)return!1;for(var b=0;b<Zc.brands.length;b++){var c=Zc.brands[b].brand;if(c&&c.indexOf(a)!=-1)return!0}return!1}
function J(a){return Yc().indexOf(a)!=-1}
;function bd(){return Wc?!!Zc&&Zc.brands.length>0:!1}
function cd(){return bd()?!1:J("Opera")}
function dd(){return J("Firefox")||J("FxiOS")}
function ed(){return bd()?ad("Chromium"):(J("Chrome")||J("CriOS"))&&!(bd()?0:J("Edge"))||J("Silk")}
;function fd(){return Wc?!!Zc&&!!Zc.platform:!1}
function gd(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;function hd(a){hd[" "](a);return a}
hd[" "]=function(){};var id=cd(),jd=bd()?!1:J("Trident")||J("MSIE"),kd=J("Edge"),ld=J("Gecko")&&!(Yc().toLowerCase().indexOf("webkit")!=-1&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),md=Yc().toLowerCase().indexOf("webkit")!=-1&&!J("Edge");md&&J("Mobile");fd()||J("Macintosh");fd()||J("Windows");(fd()?Zc.platform==="Linux":J("Linux"))||fd()||J("CrOS");var nd=fd()?Zc.platform==="Android":J("Android");gd();J("iPad");J("iPod");gd()||J("iPad")||J("iPod");Yc().toLowerCase().indexOf("kaios");dd();var od=gd()||J("iPod"),pd=J("iPad");!J("Android")||ed()||dd()||cd()||J("Silk");ed();var qd=J("Safari")&&!(ed()||(bd()?0:J("Coast"))||cd()||(bd()?0:J("Edge"))||(bd()?ad("Microsoft Edge"):J("Edg/"))||(bd()?ad("Opera"):J("OPR"))||dd()||J("Silk")||J("Android"))&&!(gd()||J("iPad")||J("iPod"));var rd={},sd=null;function td(a,b){Ma(a);b===void 0&&(b=0);ud();b=rd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function vd(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;wd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function wd(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=sd[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
ud();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function ud(){if(!sd){sd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));rd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];sd[f]===void 0&&(sd[f]=e)}}}}
;var xd=typeof Uint8Array!=="undefined",yd=!jd&&typeof btoa==="function",zd=/[-_.]/g,Ad={"-":"+",_:"/",".":"="};function Bd(a){return Ad[a]||""}
var Cd={};function Dd(a,b){Ed(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
Dd.prototype.sizeBytes=function(){Ed(Cd);var a=this.h;if(!(a==null||xd&&a!=null&&a instanceof Uint8Array))if(typeof a==="string")if(yd){a=zd.test(a)?a.replace(zd,Bd):a;a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=vd(a);else La(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};
var Fd;function Ed(a){if(a!==Cd)throw Error("illegal external caller");}
;var Gd=void 0;function Hd(a){a=Error(a);ac(a,"warning");return a}
function Id(a,b){if(a!=null){var c;var d=(c=Gd)!=null?c:Gd={};c=d[a]||0;c>=b||(d[a]=c+1,a=Error(),ac(a,"incident"),Vc(a))}}
;var Jd=typeof Symbol==="function"&&typeof Symbol()==="symbol";function Kd(a,b,c){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?(c===void 0?0:c)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b}
var Ld=Kd("jas",void 0,!0),Md=Kd(void 0,"1oa"),Nd=Kd(void 0,Symbol()),Od=Kd(void 0,"0ub"),Pd=Kd(void 0,"0actk"),Qd=Kd("m_m","Mh",!0),Rd=Kd(void 0,"vps"),Sd=Kd();Math.max.apply(Math,A(Object.values({nh:1,mh:2,lh:4,qh:8,sh:16,oh:32,Of:64,jh:128,Uf:256,rh:512,Vf:1024,Pf:2048,kh:4096,ph:8192})));var Td={Fe:{value:0,configurable:!0,writable:!0,enumerable:!1}},Ud=Object.defineProperties,K=Jd?Ld:"Fe",Vd,Wd=[];Xd(Wd,7);Vd=Object.freeze(Wd);function Yd(a,b){Jd||K in a||Ud(a,Td);a[K]|=b}
function Xd(a,b){Jd||K in a||Ud(a,Td);a[K]=b}
;function Zd(){return typeof BigInt==="function"}
;var $d={};function ae(a,b){if(b===void 0){if(b=a.h!==be)b=!!(2&(a.F[K]|0));return b}return!!(2&b)&&a.h!==be}
var be={},ce=Object.freeze({}),de={};function ee(a){a.Hh=!0;return a}
;var fe=ee(function(a){return typeof a==="number"}),ge=ee(function(a){return typeof a==="string"}),he=ee(function(a){return typeof a==="boolean"});
function ie(){var a=je;return ee(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var ke=ee(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"});var le=typeof D.BigInt==="function"&&typeof D.BigInt(0)==="bigint";function me(a){var b=a;if(ge(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(fe(b)&&!Number.isSafeInteger(b))throw Error(String(b));return le?BigInt(a):a=he(a)?a?"1":"0":ge(a)?a.trim()||"0":String(a)}
var se=ee(function(a){return le?a>=ne&&a<=oe:a[0]==="-"?pe(a,qe):pe(a,re)}),qe=Number.MIN_SAFE_INTEGER.toString(),ne=le?BigInt(Number.MIN_SAFE_INTEGER):void 0,re=Number.MAX_SAFE_INTEGER.toString(),oe=le?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function pe(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var te=0,ue=0;function ve(a){var b=a>>>0;te=b;ue=(a-b)/4294967296>>>0}
function we(a){if(a<0){ve(0-a);var b=y(xe(te,ue));a=b.next().value;b=b.next().value;te=a>>>0;ue=b>>>0}else ve(a)}
function ye(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Zd()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+ze(c)+ze(a));return c}
function ze(a){a=String(a);return"0000000".slice(a.length)+a}
function Ae(){var a=te,b=ue;b&2147483648?Zd()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=y(xe(a,b)),a=b.next().value,b=b.next().value,a="-"+ye(a,b)):a=ye(a,b);return a}
function xe(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Be(a){return Array.prototype.slice.call(a)}
;var Ce=typeof BigInt==="function"?BigInt.asIntN:void 0,De=Number.isSafeInteger,Ee=Number.isFinite,Fe=Math.trunc;function Ge(a){return a.displayName||a.name||"unknown type name"}
function He(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+La(a)+": "+a);return a}
var Ie=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Je(a){switch(typeof a){case "bigint":return!0;case "number":return Ee(a);case "string":return Ie.test(a);default:return!1}}
function Ke(a){if(typeof a!=="number")throw Hd("int32");if(!Ee(a))throw Hd("int32");return a|0}
function Le(a){return a==null?a:Ke(a)}
function Me(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return Ee(a)?a|0:void 0}
function Ne(a){var b=0;b=b===void 0?0:b;if(!Je(a))throw Hd("int64");var c=typeof a;switch(b){case 512:switch(c){case "string":return Oe(a);case "bigint":return String(Ce(64,a));default:return Pe(a)}case 1024:switch(c){case "string":return Qe(a);case "bigint":return me(Ce(64,a));default:return Re(a)}case 0:switch(c){case "string":return Oe(a);case "bigint":return me(Ce(64,a));default:return Se(a)}default:return Eb(b,"Unknown format requested type for int64")}}
function Te(a){return a==null?a:Ne(a)}
function Ue(a){var b=a.length;return a[0]==="-"?b<20?!0:b===20&&Number(a.substring(0,7))>-922337:b<19?!0:b===19&&Number(a.substring(0,6))<922337}
function Ve(a){a.indexOf(".");if(Ue(a))return a;if(a.length<16)we(Number(a));else if(Zd())a=BigInt(a),te=Number(a&BigInt(4294967295))>>>0,ue=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");ue=te=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),ue*=1E6,te=te*1E6+d,te>=4294967296&&(ue+=Math.trunc(te/4294967296),ue>>>=0,te>>>=0);b&&(b=y(xe(te,ue)),a=b.next().value,b=b.next().value,te=a,ue=b)}return Ae()}
function Se(a){Je(a);a=Fe(a);if(!De(a)){we(a);var b=te,c=ue;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);var d=c*4294967296+(b>>>0);b=Number.isSafeInteger(d)?d:ye(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function Pe(a){Je(a);a=Fe(a);if(De(a))a=String(a);else{var b=String(a);Ue(b)?a=b:(we(a),a=Ae())}return a}
function Oe(a){Je(a);var b=Fe(Number(a));if(De(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Ve(a)}
function Qe(a){var b=Fe(Number(a));if(De(b))return me(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Zd()?me(Ce(64,BigInt(a))):me(Ve(a))}
function Re(a){return De(a)?me(Se(a)):me(Pe(a))}
function We(a){if(typeof a!=="string")throw Error();return a}
function Xe(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Ye(a){return a==null||typeof a==="string"?a:void 0}
function Ze(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Ge(b)+" but got "+(a&&Ge(a.constructor)));}
function $e(a,b,c){if(a!=null&&typeof a==="object"&&a[Qd]===$d)return a;if(Array.isArray(a)){var d=a[K]|0;c=d|c&32|c&2;c!==d&&Xd(a,c);return new b(a)}}
;var af={};function bf(a){return a}
;var cf={Vh:!0};function df(a,b,c,d){var e=d!==void 0;d=!!d;var f=[],g=a.length,h=4294967295,k=!1,l=!!(b&64),m=l?b&128?0:-1:void 0;if(!(b&1)){var n=g&&a[g-1];n!=null&&typeof n==="object"&&n.constructor===Object?(g--,h=g):n=void 0;if(l&&!(b&128)&&!e){k=!0;var r;h=((r=ef)!=null?r:bf)(h-m,m,a,n)+m}}b=void 0;for(e=0;e<g;e++)if(r=a[e],r!=null&&(r=c(r,d))!=null)if(l&&e>=h){var t=e-m,w=void 0;((w=b)!=null?w:b={})[t]=r}else f[e]=r;if(n)for(var x in n)a=n[x],a!=null&&(a=c(a,d))!=null&&(g=+x,e=void 0,l&&!Number.isNaN(g)&&
(e=g+m)<h?f[e]=a:(g=void 0,((g=b)!=null?g:b={})[x]=a));b&&(k?f.push(b):f[h]=b);return f}
function ff(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return se(a)?Number(a):""+a;case "boolean":return a?1:0;case "object":if(Array.isArray(a)){var b=a[K]|0;return a.length===0&&b&1?void 0:df(a,b,ff)}if(a[Qd]===$d)return gf(a);if(a instanceof Dd){b=a.h;if(b==null)a="";else if(typeof b==="string")a=b;else{if(yd){for(var c="",d=0,e=b.length-10240;d<e;)c+=String.fromCharCode.apply(null,b.subarray(d,d+=10240));c+=String.fromCharCode.apply(null,d?b.subarray(d):b);
b=btoa(c)}else b=td(b);a=a.h=b}return a}return}return a}
var ef;function hf(a,b){if(b){ef=b==null||b===bf||b[Rd]!==af?bf:b;try{return gf(a)}finally{ef=void 0}}return gf(a)}
function gf(a){a=a.F;return df(a,a[K]|0,ff)}
;function L(a,b,c){var d=d===void 0?0:d;if(a==null){var e=32;c?(a=[c],e|=128):a=[];b&&(e=e&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");e=a[K]|0;4096&e&&!(2&e)&&jf();if(e&256)throw Error("farr");if(e&64)return d!==0||e&4096||Xd(a,e|4096),a;if(c&&(e|=128,c!==a[0]))throw Error("mid");a:{c=a;e|=64;var f=c.length;if(f){var g=f-1,h=c[g];if(h!=null&&typeof h==="object"&&h.constructor===Object){b=e&128?0:-1;g-=b;if(g>=1024)throw Error("pvtlmt");for(var k in h)f=+k,f<g&&(c[f+b]=h[k],
delete h[k]);e=e&-16760833|(g&1023)<<14;break a}}if(b){k=Math.max(b,f-(e&128?0:-1));if(k>1024)throw Error("spvt");e=e&-16760833|(k&1023)<<14}}}e|=64;d===0&&(e|=4096);Xd(a,e);return a}
function jf(){Id(Pd,5)}
;function kf(a,b){if(typeof a!=="object")return a;if(Array.isArray(a)){var c=a[K]|0;a.length===0&&c&1?a=void 0:c&2||(!b||8192&c||16&c?a=lf(a,c,!1,b&&!(c&16)):(Yd(a,34),c&4&&Object.freeze(a)));return a}if(a[Qd]===$d)return b=a.F,c=b[K]|0,ae(a,c)?a:lf(b,c);if(a instanceof Dd)return a}
function lf(a,b,c,d){d!=null||(d=!!(34&b));a=df(a,b,kf,d);d=32;c||(d|=2);b=b&16761025|d;Xd(a,b);return a}
function mf(a){var b=a.F,c=b[K]|0;return ae(a,c)?new a.constructor(lf(b,c,!0)):a}
function nf(a){if(a.h!==be)return!1;var b=a.F;b=lf(b,b[K]|0,!0);a.F=b;a.h=void 0;a.i=void 0;return!0}
function of(a){if(!nf(a)&&ae(a,a.F[K]|0))throw Error();}
;var pf=me(0),qf={};function rf(a,b,c,d){Object.isExtensible(a);b=sf(a.F,b,c);if(b!==null||d&&a.i!==be)return b}
function sf(a,b,c,d){if(b===-1)return null;var e=b+(c?0:-1),f=a.length-1;if(!(f<1+(c?0:-1))){if(e>=f){var g=a[f];if(g!=null&&typeof g==="object"&&g.constructor===Object){c=g[b];var h=!0}else if(e===f)c=g;else return}else c=a[e];if(d&&c!=null){d=d(c);if(d==null)return d;if(!Object.is(d,c))return h?g[b]=d:a[e]=d,d}return c}}
function tf(a,b,c,d){of(a);var e=a.F;uf(e,e[K]|0,b,c,d);return a}
function uf(a,b,c,d,e){var f=c+(e?0:-1),g=a.length-1;if(g>=1+(e?0:-1)&&f>=g){var h=a[g];if(h!=null&&typeof h==="object"&&h.constructor===Object)return h[c]=d,b}if(f<=g)return a[f]=d,b;if(d!==void 0){var k;g=((k=b)!=null?k:b=a[K]|0)>>14&1023||536870912;c>=g?d!=null&&(f={},a[g+(e?0:-1)]=(f[c]=d,f)):a[f]=d}return b}
function vf(a){return!!(2&a)&&!!(4&a)||!!(256&a)}
function wf(a,b,c){of(a);var d=a.F,e=d[K]|0;if(b==null)return uf(d,e,3),a;if(!Array.isArray(b))throw Hd();var f=b===Vd?7:b[K]|0,g=f,h=vf(f),k=h||Object.isFrozen(b);h||(f=0);k||(b=Be(b),g=0,f=xf(f,e),k=!1);f|=5;h=4&f?512&f?512:1024&f?1024:0:void 0;h=h!=null?h:0;for(var l=0;l<b.length;l++){var m=b[l],n=c(m,h);Object.is(m,n)||(k&&(b=Be(b),g=0,f=xf(f,e),k=!1),b[l]=n)}f!==g&&(k&&(b=Be(b),f=xf(f,e)),Xd(b,f));uf(d,e,3,b);return a}
function yf(a,b,c,d){of(a);a=a.F;var e=a[K]|0;if(d==null){var f=zf(a);if(Af(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=zf(a);var g=Af(f,a,e,c);g!==b&&(g&&(e=uf(a,e,g)),f.set(c,b))}uf(a,e,b,d)}
function zf(a){if(Jd){var b;return(b=a[Md])!=null?b:a[Md]=new Map}if(Md in a)return a[Md];b=new Map;Object.defineProperty(a,Md,{value:b});return b}
function Af(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];sf(b,g)!=null&&(e!==0&&(c=uf(b,c,e)),e=g)}a.set(d,e);return e}
function Bf(a,b,c,d,e){var f=!1;a=sf(a,d,e,function(g){var h=$e(g,c,b);f=h!==g&&h!=null;return h});
if(a!=null)return f&&ae(a),a}
function Cf(a,b,c,d){var e=a.F,f=e[K]|0;b=Bf(e,f,b,c,d);if(b==null)return b;f=e[K]|0;if(!ae(a,f)){var g=mf(b);g!==b&&(nf(a)&&(e=a.F,f=e[K]|0),b=g,uf(e,f,c,b,d))}return b}
function Fc(a,b,c){var d=void 0===ce?2:4;var e=a.F,f=e,g=e[K]|0;e=!1;var h=ae(a,g);d=h?1:d;e=!!e||d===3;var k=!h;(d===2||k)&&nf(a)&&(f=a.F,g=f[K]|0);a=sf(f,c);h=Array.isArray(a)?a:Vd;var l=h===Vd?7:h[K]|0;a=l;2&g&&(a|=2);var m=a|1;if(a=!(4&m)){var n=h,r=g,t=!!(2&m);t&&(r|=2);for(var w=!t,x=!0,z=0,G=0;z<n.length;z++){var H=$e(n[z],b,r);if(H instanceof b){if(!t){var S=ae(H);w&&(w=!S);x&&(x=S)}n[G++]=H}}G<z&&(n.length=G);m|=4;m=x?m&-8193:m|8192;m=w?m|8:m&-9}m!==l&&(Xd(h,m),2&m&&Object.freeze(h));if(k&&
!(8&m||!h.length&&(d===1||(d!==4?0:2&m||!(16&m)&&32&g)))){vf(m)&&(h=Be(h),m=xf(m,g),g=uf(f,g,c,h));b=h;k=m;for(l=0;l<b.length;l++)n=b[l],m=mf(n),n!==m&&(b[l]=m);k|=8;m=k=b.length?k|8192:k&-8193;Xd(h,m)}b=h;k=h=m;d===1||(d!==4?0:2&h||!(16&h)&&32&g)?vf(h)||(h|=!b.length||a&&!(8192&h)||32&g&&!(8192&h||16&h)?2:256,h!==k&&Xd(b,h),Object.freeze(b)):(d===2&&vf(h)&&(b=Be(b),k=0,h=xf(h,g),uf(f,g,c,b)),vf(h)||(e||(h|=16),h!==k&&Xd(b,h)));return b}
function Df(a,b,c,d,e){d!=null?Ze(d,b):d=void 0;tf(a,c,d,e);d&&ae(d);return a}
function Ef(a,b,c,d){of(a);var e=a.F,f=e[K]|0;if(d==null)return uf(e,f,c),a;if(!Array.isArray(d))throw Hd();for(var g=d===Vd?7:d[K]|0,h=g,k=vf(g),l=k||Object.isFrozen(d),m=!0,n=!0,r=0;r<d.length;r++){var t=d[r];Ze(t,b);k||(t=ae(t),m&&(m=!t),n&&(n=t))}k||(g=m?13:5,g=n?g&-8193:g|8192);l&&g===h||(d=Be(d),h=0,g=xf(g,f));g!==h&&Xd(d,g);uf(e,f,c,d);return a}
function xf(a,b){return a=(2&b?a|2:a&-3)&-273}
function Hc(a,b,c){c=c===void 0?0:c;a=Me(rf(a,b));return a!=null?a:c}
function Ff(a,b,c){c=c===void 0?pf:c;a=rf(a,b);b=typeof a;a=a==null?a:b==="bigint"?me(Ce(64,a)):Je(a)?b==="string"?Qe(a):Re(a):void 0;return a!=null?a:c}
function Gf(a,b,c,d){c=c===void 0?"":c;var e;return(e=Ye(rf(a,b,d)))!=null?e:c}
function Hf(a){var b=b===void 0?0:b;a=rf(a,1);a=a==null?a:Ee(a)?a|0:void 0;return a!=null?a:b}
function If(a,b,c){return tf(a,b,Xe(c))}
function Jf(a,b,c){c=Xe(c);of(a);a=a.F;uf(a,a[K]|0,b,c===""?void 0:c,de)}
function Kf(a,b,c){if(c!=null){if(!Ee(c))throw Hd("enum");c|=0}return tf(a,b,c)}
;function M(a,b,c){this.F=L(a,b,c)}
M.prototype.toJSON=function(){return hf(this)};
M.prototype.serialize=function(a){return JSON.stringify(hf(this,a))};
function Lf(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");Yd(b,32);return new a(b)}
M.prototype.clone=function(){var a=this.F;return new this.constructor(lf(a,a[K]|0,!0))};
M.prototype[Qd]=$d;M.prototype.toString=function(){return this.F.toString()};function Mf(){var a=Nf;this.ctor=Of;this.isRepeated=0;this.h=Cf;this.defaultValue=void 0;this.i=a.Me!=null?de:void 0}
Mf.prototype.register=function(){hd(this)};function Pf(a){return function(b){return Lf(a,b)}}
;function Qf(a){this.F=L(a)}
v(Qf,M);function Rf(a,b){return wf(a,b,Ke)}
;function Sf(a){this.F=L(a)}
v(Sf,M);var Tf=[1,2,3];function Uf(a){this.F=L(a)}
v(Uf,M);var Vf=[1,2,3];function Wf(a){this.F=L(a)}
v(Wf,M);function Xf(a){this.F=L(a)}
v(Xf,M);function Yf(a){this.F=L(a)}
v(Yf,M);function Zf(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function $f(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,t=0;t<64;t+=4)r[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(n<<1|n>>>31)&4294967295;n=e[0];var w=e[1],x=e[2],z=e[3],G=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var H=z^w&(x^z);var S=1518500249}else H=w^x^z,S=1859775393;else t<60?(H=w&x|z&(w|x),S=2400959708):(H=w^x^z,S=3395469782);H=((n<<5|n>>>27)&4294967295)+H+G+S+r[t]&4294967295;G=z;z=x;x=(w<<30|w>>>2)&4294967295;w=n;n=H}e[0]=e[0]+n&4294967295;e[1]=e[1]+w&4294967295;e[2]=
e[2]+x&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+G&4294967295}
function c(n,r){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],w=0,x=n.length;w<x;++w)t.push(n.charCodeAt(w));n=t}r||(r=n.length);t=0;if(l==0)for(;t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<r;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],r=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;t<5;t++)for(var w=24;w>=0;w-=8)n[r++]=e[t]>>w&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,je:function(){for(var n=d(),r="",t=0;t<n.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return r}}}
;function ag(a,b,c){var d=String(D.location.href);return d&&a&&b?[b,bg(Zf(d),a,c||null)].join(" "):null}
function bg(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Tb(d,function(h){e.push(h)}),cg(e.join(" "));
var f=[],g=[];Tb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Tb(d,function(h){e.push(h)});
a=cg(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function cg(a){var b=$f();b.update(a);return b.je().toLowerCase()}
;function dg(a){this.h=a||{cookie:""}}
p=dg.prototype;p.isEnabled=function(){if(!D.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Xb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
p.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.cf;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Xb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=hb(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Xb:0,path:b,domain:c});return d};
p.Tb=function(){return eg(this).keys};
p.Wa=function(){return eg(this).values};
p.clear=function(){for(var a=eg(this).keys,b=a.length-1;b>=0;b--)this.remove(a[b])};
function eg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=hb(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var fg=new dg(typeof document=="undefined"?null:document);function gg(){var a=D.__SAPISID||D.__APISID||D.__3PSAPISID||D.__1PSAPISID||D.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new dg(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function hg(a,b,c,d){(a=D[a])||typeof document==="undefined"||(a=(new dg(document)).get(b));return a?ag(a,c,d):null}
function ig(a){var b=Zf(String(D.location.href)),c=[];if(gg()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?D.__SAPISID:D.__APISID;d||typeof document==="undefined"||(d=new dg(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?ag(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=hg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=hg("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function jg(){}
jg.prototype.compress=function(a){var b,c,d,e;return B(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
jg.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function kg(a){this.F=L(a)}
v(kg,M);function lg(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Ya()};
this.i=this.h()}
lg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
lg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
lg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
lg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function mg(a){this.F=L(a)}
v(mg,M);function ng(a){this.F=L(a)}
v(ng,M);function og(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
p=og.prototype;p.clone=function(){return new og(this.x,this.y)};
p.equals=function(a){return a instanceof og&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
p.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
p.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
p.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
p.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function pg(a,b){this.width=a;this.height=b}
p=pg.prototype;p.clone=function(){return new pg(this.width,this.height)};
p.aspectRatio=function(){return this.width/this.height};
p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
p.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function qg(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function rg(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function sg(a){var b=tg,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ug(a){for(var b in a)return!1;return!0}
function vg(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function wg(a){return a!==null&&"privembed"in a?a.privembed:!1}
function xg(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function yg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function zg(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=zg(a[c]);return b}
var Ag="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Bg(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ag.length;f++)c=Ag[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Cg(a,b){this.h=a===Dg&&b||""}
Cg.prototype.toString=function(){return this.h};
var Dg={};new Cg(Dg,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Eg(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Fg(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Gg(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Hg(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Ig(a){this.F=L(a)}
v(Ig,M);Ig.prototype.qc=function(){return Hf(this)};function Jg(a){this.F=L(a)}
v(Jg,M);function Kg(a){this.F=L(a)}
v(Kg,M);function Lg(a){Ef(Mg,Jg,1,a)}
var Ng=Pf(Kg);function Og(a){this.F=L(a)}
v(Og,M);var Pg=["platform","platformVersion","architecture","model","uaFullVersion"],Mg=new Kg,Qg=null;function Rg(a,b){b=b===void 0?Pg:b;if(!Qg){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));Lg((a.brands||[]).map(function(e){var f=new Jg;f=If(f,1,e.brand);return If(f,2,e.version)}));
typeof a.mobile==="boolean"&&tf(Mg,2,He(a.mobile));Qg=a.getHighEntropyValues(b)}var d=new Set(b);return Qg.then(function(e){var f=Mg.clone();d.has("platform")&&If(f,3,e.platform);d.has("platformVersion")&&If(f,4,e.platformVersion);d.has("architecture")&&If(f,5,e.architecture);d.has("model")&&If(f,6,e.model);d.has("uaFullVersion")&&If(f,7,e.uaFullVersion);return f.serialize()}).catch(function(){return Mg.serialize()})}
;function Sg(a){this.F=L(a)}
v(Sg,M);function Tg(a){return Kf(a,1,1)}
;function Ug(a){this.F=L(a,4)}
v(Ug,M);function Vg(a){this.F=L(a,36)}
v(Vg,M);function Wg(a){this.F=L(a,19)}
v(Wg,M);Wg.prototype.ac=function(a){return Kf(this,2,a)};function Xg(a,b){this.Oa=b=b===void 0?!1:b;this.j=this.locale=null;this.i=0;this.isFinal=!1;this.h=new Wg;Number.isInteger(a)&&this.h.ac(a);b||(this.locale=document.documentElement.getAttribute("lang"));Yg(this,new Sg)}
Xg.prototype.ac=function(a){this.h.ac(a);return this};
function Yg(a,b){Df(a.h,Sg,1,b);Hf(b)||Tg(b);a.Oa||(b=Zg(a),Gf(b,5)||If(b,5,a.locale));a.j&&(b=Zg(a),Cf(b,Kg,9)||Df(b,Kg,9,a.j))}
function $g(a,b){a.i=b}
function ah(a){var b=b===void 0?Pg:b;var c=a.Oa?void 0:window;c?Rg(c,b).then(function(d){a.j=Ng(d!=null?d:"[]");d=Zg(a);Df(d,Kg,9,a.j);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function Zg(a){a=Cf(a.h,Sg,1);var b=Cf(a,Og,11);b||(b=new Og,Df(a,Og,11,b));return b}
function bh(a,b,c,d,e,f,g){c=c===void 0?0:c;d=d===void 0?0:d;e=e===void 0?null:e;f=f===void 0?0:f;g=g===void 0?0:g;if(!a.Oa){var h=Zg(a);var k=new Ig;k=Kf(k,1,a.i);k=tf(k,2,He(a.isFinal));d=tf(k,3,Le(d>0?d:void 0));d=tf(d,4,Le(f>0?f:void 0));d=tf(d,5,Le(g>0?g:void 0));f=d.F;g=f[K]|0;d=ae(d,g)?d:new d.constructor(lf(f,g));Df(h,Ig,10,d)}a=a.h.clone();h=Date.now().toString();a=tf(a,4,Te(h));b=b.slice();b=Ef(a,Vg,3,b);e&&(a=new mg,e=tf(a,13,Le(e)),a=new ng,e=Df(a,mg,2,e),a=new Ug,e=Df(a,ng,1,e),e=Kf(e,
2,9),Df(b,Ug,18,e));c&&tf(b,14,Te(c));return b}
;var ch=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
D.addEventListener("test",c,b);D.removeEventListener("test",c,b)}catch(d){}return a}();function dh(a){this.h=this.i=this.j=a}
dh.prototype.reset=function(){this.h=this.i=this.j};
dh.prototype.getValue=function(){return this.i};function Nf(a){this.F=L(a,8)}
v(Nf,M);var eh=Pf(Nf);function Of(a){this.F=L(a)}
v(Of,M);var fh;fh=new Mf;function gh(a){I.call(this);var b=this;this.componentId="";this.h=[];this.Ra="";this.pageId=null;this.fb=this.ma=-1;this.G=this.experimentIds=null;this.A=this.o=0;this.U=null;this.Z=this.ha=0;this.Lb=1;this.timeoutMillis=0;this.xa=!1;this.logSource=a.logSource;this.yb=a.yb||function(){};
this.j=new Xg(a.logSource,a.Oa);this.network=a.network||null;this.ob=a.ob||null;this.bufferSize=1E3;this.P=a.Af||null;this.sessionIndex=a.sessionIndex||null;this.Rb=a.Rb||!1;this.logger=null;this.withCredentials=!a.sd;this.Oa=a.Oa||!1;this.Y=!this.Oa&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.Qa=typeof URLSearchParams!=="undefined"&&!!(new URL(hh())).searchParams&&!!(new URL(hh())).searchParams.set;var c=Tg(new Sg);Yg(this.j,c);this.u=new dh(1E4);a=ih(this,a.od);this.i=
new lg(this.u.getValue(),a);this.Fa=new lg(6E5,a);this.Rb||this.Fa.start();this.Oa||(document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden"){jh(b);var d;(d=b.U)==null||d.flush()}}),document.addEventListener("pagehide",function(){jh(b);
var d;(d=b.U)==null||d.flush()}))}
v(gh,I);function ih(a,b){return a.Qa?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
gh.prototype.ba=function(){jh(this);this.i.stop();this.Fa.stop();I.prototype.ba.call(this)};
function kh(a){a.P||(a.P=hh());try{return(new URL(a.P)).toString()}catch(b){return(new URL(a.P,window.location.origin)).toString()}}
function lh(a,b,c){a.U&&a.U.kb(b,c)}
gh.prototype.log=function(a){lh(this,2,1);if(this.Qa){a=a.clone();var b=this.Lb++;a=tf(a,21,Te(b));this.componentId&&If(a,26,this.componentId);b=a;var c=rf(b,1);var d=d===void 0?!1:d;var e=typeof c;d=c==null?c:e==="bigint"?String(Ce(64,c)):Je(c)?e==="string"?Oe(c):d?Pe(c):Se(c):void 0;d==null&&(d=Date.now(),d=Number.isFinite(d)?d.toString():"0",tf(b,1,Te(d)));d=rf(b,15);d!=null&&(typeof d==="bigint"?se(d)?d=Number(d):(d=Ce(64,d),d=se(d)?Number(d):String(d)):d=Je(d)?typeof d==="number"?Se(d):Oe(d):
void 0);d==null&&tf(b,15,Te((new Date).getTimezoneOffset()*60));this.experimentIds&&(d=this.experimentIds.clone(),Df(b,kg,16,d));lh(this,1,1);b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b,lh(this,3,b));this.h.push(a);this.Rb||this.i.enabled||this.i.start()}};
gh.prototype.flush=function(a,b){var c=this;if(this.h.length===0)a&&a();else if(this.xa&&this.Y)this.j.i=3,mh(this);else{var d=Date.now();if(this.fb>d&&this.ma<d)b&&b("throttled");else{this.network&&(typeof this.network.qc==="function"?$g(this.j,this.network.qc()):this.j.i=0);var e=this.h.length,f=bh(this.j,this.h,this.o,this.A,this.ob,this.ha,this.Z),g=this.yb();if(g&&this.Ra===g)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&this.i.stop();this.o=0;d=f.serialize();var h;this.G&&this.G.isSupported(d.length)&&
(h=this.G.compress(d));var k=nh(this,d,g),l=function(r){c.u.reset();c.i.setInterval(c.u.getValue());if(r){var t=null;try{var w=JSON.stringify(JSON.parse(r.replace(")]}'\n","")));t=eh(w)}catch(G){}if(t){r=Number(Ff(t,1,me("-1")));r>0&&(c.ma=Date.now(),c.fb=c.ma+r);r=Za(Nd);var x;Jd&&r&&((x=t.F[r])==null?void 0:x[175237375])!=null&&Id(Od,3);a:{var z=z===void 0?!1:z;if(Za(Sd)&&Za(Nd)&&void 0===Sd){x=t.F;r=x[Nd];if(!r)break a;if(r=r.Wh)try{r(x,175237375,cf);break a}catch(G){Vc(G)}}z&&(z=t.F,(x=Za(Nd))&&
x in z&&(z=z[x])&&delete z[175237375])}z=fh.ctor?fh.h(t,fh.ctor,175237375,fh.i):fh.h(t,175237375,null,fh.i);if(z=z===null?void 0:z)z=Hc(z,1,-1),z!==-1&&(c.u=new dh(z<1?1:z),c.i.setInterval(c.u.getValue()))}}a&&a();c.A=0},m=function(r,t){var w=Fc(f,Vg,3);
var x=Number(Ff(f,14)),z=c.u;z.h=Math.min(3E5,z.h*2);z.i=Math.min(3E5,z.h+Math.round(.1*(Math.random()-.5)*2*z.h));c.i.setInterval(c.u.getValue());r===401&&g&&(c.Ra=g);x&&(c.o+=x);t===void 0&&(t=c.isRetryable(r));t&&(c.h=w.concat(c.h),c.Rb||c.i.enabled||c.i.start());lh(c,7,1);b&&b("net-send-failed",r);++c.A},n=function(){c.network&&c.network.send(k,l,m)};
h?h.then(function(r){lh(c,5,e);k.Ec["Content-Encoding"]="gzip";k.Ec["Content-Type"]="application/binary";k.body=r;k.ce=2;n()},function(){lh(c,6,e);
n()}):n()}}}};
function nh(a,b,c){c=c===void 0?null:c;var d=d===void 0?a.withCredentials:d;var e={},f=new URL(kh(a));c&&(e.Authorization=c);a.sessionIndex&&(e["X-Goog-AuthUser"]=a.sessionIndex,f.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(e,"X-Goog-PageId",{value:a.pageId}),f.searchParams.set("pageId",a.pageId));return{url:f.toString(),body:b,ce:1,Ec:e,requestType:"POST",withCredentials:d,timeoutMillis:a.timeoutMillis}}
function jh(a){a.j.isFinal=!0;a.flush();a.j.isFinal=!1}
function mh(a){oh(a,function(b,c){b=new URL(b);b.searchParams.set("format","json");var d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch(e){}d||(a.Y=!1);return d})}
function oh(a,b){if(a.h.length!==0){var c=new URL(kh(a));c.searchParams.delete("format");var d=a.yb();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){var e=a.h.slice(0,32),f=bh(a.j,e,a.o,a.A,a.ob,a.ha,a.Z);if(!b(c.toString(),f)){++a.A;break}a.o=0;a.A=0;a.ha=0;a.Z=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
gh.prototype.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function hh(){return"https://play.google.com/log?format=json&hasfast=true"}
;function ph(){this.Wd=typeof AbortController!=="undefined"}
ph.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,r,t;return B(function(w){switch(w.h){case 1:return f=(e=d.Wd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,va(w,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.Ec)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),w.yield(fetch(a.url,g),5);case 5:h=w.i;if(h.status!==200){(k=c)==null||k(h.status);w.B(3);break}if((l=b)==null){w.B(7);break}return w.yield(h.text(),8);case 8:l(w.i);case 7:case 3:w.P=[w.j];w.H=0;w.o=0;clearTimeout(f);ya(w);break;case 2:m=xa(w);switch((n=m)==null?void 0:n.name){case "AbortError":(r=c)==null||r(408);break;default:(t=c)==null||t(400)}w.B(3)}})};
ph.prototype.qc=function(){return 4};function qh(a,b){b=b===void 0?"0":b;I.call(this);this.logSource=a;this.sessionIndex=b;this.Va="https://play.google.com/log?format=json&hasfast=true";this.i=null;this.o=!1;this.network=null;this.componentId="";this.h=this.ob=null;this.j=!1;this.pageId=null;this.bufferSize=void 0}
v(qh,I);function rh(a,b){a.i=b;return a}
function th(a,b){a.network=b;return a}
function uh(a,b){a.h=b}
function vh(a){a.j=!0;return a}
qh.prototype.sd=function(){this.u=!0;return this};
function wh(a){a.network||(a.network=new ph);var b=new gh({logSource:a.logSource,yb:a.yb?a.yb:ig,sessionIndex:a.sessionIndex,Af:a.Va,Oa:a.o,Rb:!1,sd:a.u,od:a.od,network:a.network});zc(a,b);if(a.i){var c=a.i,d=Zg(b.j);If(d,7,c)}b.G=new jg;a.componentId&&(b.componentId=a.componentId);a.ob&&(b.ob=a.ob);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new kg),c=b.experimentIds,d=d.serialize(),If(c,4,d)):b.experimentIds&&tf(b.experimentIds,4));a.j&&(b.xa=b.Y);ah(b.j);a.bufferSize&&
(b.bufferSize=a.bufferSize);a.network.ac&&a.network.ac(a.logSource);a.network.pf&&a.network.pf(b);return b}
;function xh(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;I.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new qh(a,"0"),a.componentId=b,zc(this,a),c!==""&&(a.Va=c),d&&(a.o=!0),e&&rh(a,e),g&&th(a,g),b=wh(a));this.h=b}
v(xh,I);
xh.prototype.flush=function(a){var b=a||[];if(b.length){a=new Yf;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new Xf;f=If(f,1,e.i);var g=yh(e);f=wf(f,g,We);g=[];var h=[];for(var k=y(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.o;for(var n=e.Nc(l)||[],r=[],t=0;t<n.length;t++){var w=n[t],x=w&&w.h;w=new Uf;switch(m){case 3:x=Number(x);Number.isFinite(x)&&yf(w,1,Vf,Te(x));break;case 2:x=Number(x);if(x!=null&&typeof x!=="number")throw Error("Value of float/double field must be a number, found "+typeof x+
": "+x);yf(w,2,Vf,x)}r.push(w)}m=r;for(n=0;n<m.length;n++){r=m[n];t=new Wf;r=Df(t,Uf,2,r);t=l;w=[];x=zh(e);for(var z=0;z<x.length;z++){var G=x[z],H=t[z],S=new Sf;switch(G){case 3:yf(S,1,Tf,Xe(String(H)));break;case 2:G=Number(H);Number.isFinite(G)&&yf(S,2,Tf,Le(G));break;case 1:yf(S,3,Tf,He(H==="true"))}w.push(S)}Ef(r,Sf,1,w);g.push(r)}}Ef(f,Wf,4,g);c.push(f);e.clear()}Ef(a,Xf,1,c);b=this.h;if(a instanceof Vg)b.log(a);else try{var Z=new Vg,mb=a.serialize();var Rb=If(Z,8,mb);b.log(Rb)}catch(Wa){lh(b,
4,1)}this.h.flush()}};function Ah(a){this.h=a}
;function Bh(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function zh(a){return a.fields.map(function(b){return b.fieldType})}
function yh(a){return a.fields.map(function(b){return b.fieldName})}
p=Bh.prototype;p.Xd=function(a){var b=C.apply(1,arguments),c=this.Nc(b);c?c.push(new Ah(a)):this.Kd(a,b)};
p.Kd=function(a){var b=this.nd(C.apply(1,arguments));this.h.set(b,[new Ah(a)])};
p.Nc=function(){var a=this.nd(C.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
p.we=function(){var a=this.Nc(C.apply(0,arguments));return a&&a.length?a[0]:void 0};
p.clear=function(){this.h.clear()};
p.nd=function(){var a=C.apply(0,arguments);return a?a.join(","):"key"};function Ch(a,b){Bh.call(this,a,3,b)}
v(Ch,Bh);Ch.prototype.j=function(a){var b=C.apply(1,arguments),c=0,d=this.we(b);d&&(c=d.h);this.Kd(c+a,b)};function Dh(a,b){Bh.call(this,a,2,b)}
v(Dh,Bh);Dh.prototype.record=function(a){this.Xd(a,C.apply(1,arguments))};function Eh(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Eh.prototype.stopPropagation=function(){this.j=!0};
Eh.prototype.preventDefault=function(){this.defaultPrevented=!0};function Fh(a,b){Eh.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
$a(Fh,Eh);
Fh.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&Fh.Aa.preventDefault.call(this)};
Fh.prototype.stopPropagation=function(){Fh.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Fh.prototype.preventDefault=function(){Fh.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Gh="closure_listenable_"+(Math.random()*1E6|0);var Hh=0;function Ih(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.uc=e;this.key=++Hh;this.Zb=this.jc=!1}
function Jh(a){a.Zb=!0;a.listener=null;a.proxy=null;a.src=null;a.uc=null}
;function Kh(a){this.src=a;this.listeners={};this.h=0}
Kh.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Lh(a,b,d,e);g>-1?(b=a[g],c||(b.jc=!1)):(b=new Ih(b,this.src,f,!!d,e),b.jc=c,a.push(b));return b};
Kh.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Lh(e,b,c,d);return b>-1?(Jh(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Mh(a,b){var c=b.type;c in a.listeners&&Yb(a.listeners[c],b)&&(Jh(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Lh(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Zb&&f.listener==b&&f.capture==!!c&&f.uc==d)return e}return-1}
;var Nh="closure_lm_"+(Math.random()*1E6|0),Oh={},Ph=0;function Qh(a,b,c,d,e){if(d&&d.once)Rh(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Qh(a,b[f],c,d,e);else c=Sh(c),a&&a[Gh]?a.listen(b,c,Oa(d)?!!d.capture:!!d,e):Th(a,b,c,!1,d,e)}
function Th(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Oa(e)?!!e.capture:!!e,h=Uh(a);h||(a[Nh]=h=new Kh(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Vh();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ch||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Wh(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ph++}}
function Vh(){function a(c){return b.call(a.src,a.listener,c)}
var b=Xh;return a}
function Rh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Rh(a,b[f],c,d,e);else c=Sh(c),a&&a[Gh]?Yh(a,b,c,Oa(d)?!!d.capture:!!d,e):Th(a,b,c,!0,d,e)}
function Zh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Zh(a,b[f],c,d,e);else(d=Oa(d)?!!d.capture:!!d,c=Sh(c),a&&a[Gh])?a.i.remove(String(b),c,d,e):a&&(a=Uh(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Lh(b,c,d,e)),(c=a>-1?b[a]:null)&&$h(c))}
function $h(a){if(typeof a!=="number"&&a&&!a.Zb){var b=a.src;if(b&&b[Gh])Mh(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Wh(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ph--;(c=Uh(b))?(Mh(c,a),c.h==0&&(c.src=null,b[Nh]=null)):Jh(a)}}}
function Wh(a){return a in Oh?Oh[a]:Oh[a]="on"+a}
function Xh(a,b){if(a.Zb)a=!0;else{b=new Fh(b,this);var c=a.listener,d=a.uc||a.src;a.jc&&$h(a);a=c.call(d,b)}return a}
function Uh(a){a=a[Nh];return a instanceof Kh?a:null}
var ai="__closure_events_fn_"+(Math.random()*1E9>>>0);function Sh(a){if(typeof a==="function")return a;a[ai]||(a[ai]=function(b){return a.handleEvent(b)});
return a[ai]}
;function bi(){I.call(this);this.i=new Kh(this);this.xa=this;this.Z=null}
$a(bi,I);bi.prototype[Gh]=!0;p=bi.prototype;p.addEventListener=function(a,b,c,d){Qh(this,a,b,c,d)};
p.removeEventListener=function(a,b,c,d){Zh(this,a,b,c,d)};
function ci(a,b){var c=a.Z;if(c){var d=[];for(var e=1;c;c=c.Z)d.push(c),++e}a=a.xa;c=b.type||b;typeof b==="string"?b=new Eh(b,a):b instanceof Eh?b.target=b.target||a:(e=b,b=new Eh(c,a),Bg(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=di(g,c,!0,b)&&e}b.j||(g=b.h=a,e=di(g,c,!0,b)&&e,b.j||(e=di(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=di(g,c,!1,b)&&e}
p.ba=function(){bi.Aa.ba.call(this);this.removeAllListeners();this.Z=null};
p.listen=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Yh(a,b,c,d,e){a.i.add(String(b),c,!0,d,e)}
p.removeAllListeners=function(a){if(this.i){var b=this.i;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Jh(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function di(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Zb&&g.capture==c){var h=g.listener,k=g.uc||g.src;g.jc&&Mh(a.i,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var ei=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function fi(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
fi.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function gi(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function hi(){this.i=this.h=null}
hi.prototype.add=function(a,b){var c=ii.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
hi.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var ii=new fi(function(){return new ji},function(a){return a.reset()});
function ji(){this.next=this.scope=this.h=null}
ji.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
ji.prototype.reset=function(){this.next=this.scope=this.h=null};var ki,li=!1,mi=new hi;function ni(a,b){ki||oi();li||(ki(),li=!0);mi.add(a,b)}
function oi(){var a=Promise.resolve(void 0);ki=function(){a.then(pi)}}
function pi(){for(var a;a=mi.remove();){try{a.h.call(a.scope)}catch(b){Vc(b)}gi(ii,a)}li=!1}
;function qi(){}
function ri(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function si(a){this.X=0;this.bb=void 0;this.vb=this.Ta=this.parent_=null;this.sc=this.Mc=!1;if(a!=qi)try{var b=this;a.call(void 0,function(c){ti(b,2,c)},function(c){ti(b,3,c)})}catch(c){ti(this,3,c)}}
function ui(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
ui.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var vi=new fi(function(){return new ui},function(a){a.reset()});
function wi(a,b,c){var d=vi.get();d.i=a;d.h=b;d.context=c;return d}
function xi(a){return new si(function(b,c){c(a)})}
si.prototype.then=function(a,b,c){return yi(this,ei(typeof a==="function"?a:null),ei(typeof b==="function"?b:null),c)};
si.prototype.$goog_Thenable=!0;function zi(a,b,c,d){Ai(a,wi(b||qi,c||null,d))}
p=si.prototype;p.finally=function(a){var b=this;a=ei(a);return new Promise(function(c,d){zi(b,function(e){a();c(e)},function(e){a();
d(e)})})};
p.Gc=function(a,b){return yi(this,null,ei(a),b)};
p.catch=si.prototype.Gc;p.cancel=function(a){if(this.X==0){var b=new Bi(a);ni(function(){Ci(this,b)},this)}};
function Ci(a,b){if(a.X==0)if(a.parent_){var c=a.parent_;if(c.Ta){for(var d=0,e=null,f=null,g=c.Ta;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.X==0&&d==1?Ci(c,b):(f?(d=f,d.next==c.vb&&(c.vb=d),d.next=d.next.next):Di(c),Ei(c,e,3,b)))}a.parent_=null}else ti(a,3,b)}
function Ai(a,b){a.Ta||a.X!=2&&a.X!=3||Fi(a);a.vb?a.vb.next=b:a.Ta=b;a.vb=b}
function yi(a,b,c,d){var e=wi(null,null,null);e.child=new si(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof Bi?g(h):f(k)}catch(l){g(l)}}:g});
e.child.parent_=a;Ai(a,e);return e.child}
p.yf=function(a){this.X=0;ti(this,2,a)};
p.zf=function(a){this.X=0;ti(this,3,a)};
function ti(a,b,c){if(a.X==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.X=1;a:{var d=c,e=a.yf,f=a.zf;if(d instanceof si){zi(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Oa(d))try{var k=d.then;if(typeof k==="function"){Gi(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.bb=c,a.X=b,a.parent_=null,Fi(a),b!=3||c instanceof Bi||Hi(a,c))}}
function Gi(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Fi(a){a.Mc||(a.Mc=!0,ni(a.qe,a))}
function Di(a){var b=null;a.Ta&&(b=a.Ta,a.Ta=b.next,b.next=null);a.Ta||(a.vb=null);return b}
p.qe=function(){for(var a;a=Di(this);)Ei(this,a,this.X,this.bb);this.Mc=!1};
function Ei(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.sc;a=a.parent_)a.sc=!1;if(b.child)b.child.parent_=null,Ii(b,c,d);else try{b.j?b.i.call(b.context):Ii(b,c,d)}catch(e){Ji.call(null,e)}gi(vi,b)}
function Ii(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Hi(a,b){a.sc=!0;ni(function(){a.sc&&Ji.call(null,b)})}
var Ji=Vc;function Bi(a){fb.call(this,a)}
$a(Bi,fb);Bi.prototype.name="cancel";function Ki(a,b){bi.call(this);this.j=a||1;this.h=b||D;this.o=Ua(this.uf,this);this.u=Ya()}
$a(Ki,bi);p=Ki.prototype;p.enabled=!1;p.Ea=null;p.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
p.uf=function(){if(this.enabled){var a=Ya()-this.u;a>0&&a<this.j*.8?this.Ea=this.h.setTimeout(this.o,this.j-a):(this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null),ci(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
p.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.h.setTimeout(this.o,this.j),this.u=Ya())};
p.stop=function(){this.enabled=!1;this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null)};
p.ba=function(){Ki.Aa.ba.call(this);this.stop();delete this.h};function Li(a){I.call(this);this.G=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.A=new Set;this.flushInterval=3E4;this.h=new Ki(this.flushInterval);this.h.listen("tick",this.dc,!1,this);zc(this,this.h)}
v(Li,I);p=Li.prototype;p.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function Mi(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.dc()}
p.dc=function(){var a=this.i.values();a=[].concat(A(a)).filter(function(b){return b.h.size});
a.length&&this.G.flush(a,this.u);Ni(a);this.j=0;this.h.enabled&&this.h.stop()};
p.Nb=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new Ch(a,b))};
p.Jc=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new Dh(a,b))};
function Oi(a,b){return a.A.has(b)?void 0:a.i.get(b)}
p.Kb=function(a){this.Vd(a,1,C.apply(1,arguments))};
p.Vd=function(a,b){var c=C.apply(2,arguments),d=Oi(this,a);d&&d instanceof Ch&&(d.j(b,c),Mi(this))};
p.record=function(a,b){var c=C.apply(2,arguments),d=Oi(this,a);d&&d instanceof Dh&&(d.record(b,c),Mi(this))};
function Ni(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Pi(){}
Pi.prototype.serialize=function(a){var b=[];Qi(this,a,b);return b.join("")};
function Qi(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Qi(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Ri(d,c),c.push(":"),Qi(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ri(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Si={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Ti=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ri(a,b){b.push('"',a.replace(Ti,function(c){var d=Si[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Si[c]=d);return d}),'"')}
;function Ui(){bi.call(this);this.headers=new Map;this.h=!1;this.K=null;this.o=this.Y="";this.j=this.U=this.A=this.P=!1;this.G=0;this.u=null;this.ma="";this.ha=!1}
$a(Ui,bi);var Vi=/^https?$/i,Wi=["POST","PUT"],Xi=[];function Yi(a,b,c,d,e,f,g){var h=new Ui;Xi.push(h);b&&h.listen("complete",b);Yh(h,"ready",h.ee);f&&(h.G=Math.max(0,f));g&&(h.ha=g);h.send(a,c,d,e)}
p=Ui.prototype;p.ee=function(){this.dispose();Yb(Xi,this)};
p.send=function(a,b,c,d){if(this.K)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Y+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Y=a;this.o="";this.P=!1;this.h=!0;this.K=new XMLHttpRequest;this.K.onreadystatechange=ei(Ua(this.Dd,this));try{this.getStatus(),this.U=!0,this.K.open(b,String(a),!0),this.U=!1}catch(g){this.getStatus();Zi(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=y(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=D.FormData&&a instanceof D.FormData;!(Sb(Wi,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=y(c);for(d=b.next();!d.done;d=b.next())c=y(d.value),d=c.next().value,c=c.next().value,this.K.setRequestHeader(d,c);this.ma&&(this.K.responseType=this.ma);"withCredentials"in this.K&&this.K.withCredentials!==this.ha&&(this.K.withCredentials=this.ha);try{this.u&&(clearTimeout(this.u),this.u=null),this.G>0&&(this.getStatus(),this.u=setTimeout(this.xf.bind(this),this.G)),
this.getStatus(),this.A=!0,this.K.send(a),this.A=!1}catch(g){this.getStatus(),Zi(this,g)}};
p.xf=function(){typeof Ha!="undefined"&&this.K&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),ci(this,"timeout"),this.abort(8))};
function Zi(a,b){a.h=!1;a.K&&(a.j=!0,a.K.abort(),a.j=!1);a.o=b;$i(a);aj(a)}
function $i(a){a.P||(a.P=!0,ci(a,"complete"),ci(a,"error"))}
p.abort=function(){this.K&&this.h&&(this.getStatus(),this.h=!1,this.j=!0,this.K.abort(),this.j=!1,ci(this,"complete"),ci(this,"abort"),aj(this))};
p.ba=function(){this.K&&(this.h&&(this.h=!1,this.j=!0,this.K.abort(),this.j=!1),aj(this,!0));Ui.Aa.ba.call(this)};
p.Dd=function(){this.ea||(this.U||this.A||this.j?bj(this):this.Oe())};
p.Oe=function(){bj(this)};
function bj(a){if(a.h&&typeof Ha!="undefined")if(a.A&&(a.K?a.K.readyState:0)==4)setTimeout(a.Dd.bind(a),0);else if(ci(a,"readystatechange"),a.isComplete()){a.getStatus();a.h=!1;try{if(cj(a))ci(a,"complete"),ci(a,"success");else{try{var b=(a.K?a.K.readyState:0)>2?a.K.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";$i(a)}}finally{aj(a)}}}
function aj(a,b){if(a.K){a.u&&(clearTimeout(a.u),a.u=null);var c=a.K;a.K=null;b||ci(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
p.isActive=function(){return!!this.K};
p.isComplete=function(){return(this.K?this.K.readyState:0)==4};
function cj(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=String(a.Y).match(ic)[1]||null,!a&&D.self&&D.self.location&&(a=D.self.location.protocol.slice(0,-1)),b=!Vi.test(a?a.toLowerCase():"");c=b}return c}
p.getStatus=function(){try{return(this.K?this.K.readyState:0)>2?this.K.status:-1}catch(a){return-1}};
p.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function dj(){}
dj.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
Yi(a.url,function(d){d=d.target;if(cj(d)){try{var e=d.K?d.K.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Ec,a.timeoutMillis,a.withCredentials)};
dj.prototype.qc=function(){return 1};function ej(a,b){this.logger=a;this.event=b;this.startTime=fj()}
ej.prototype.done=function(){this.logger.Wb(this.event,fj()-this.startTime)};
function gj(){Kc.apply(this,arguments)}
v(gj,Kc);function hj(a,b){var c=fj();b=b();a.Wb("n",fj()-c);return b}
function ij(){gj.apply(this,arguments)}
v(ij,gj);p=ij.prototype;p.Rc=function(){};
p.Db=function(){};
p.Wb=function(){};
p.Ha=function(){};
p.Dc=function(){};
p.Pd=function(){};
function jj(a){return{sf:new Nc(a),errorCount:new Rc(a),eventCount:new Pc(a),pe:new Qc(a),gi:new Oc(a),ii:new Sc(a),wh:new Tc(a),hi:new Uc(a)}}
function kj(a,b,c,d){a=vh(th(rh(new qh(1828,"0"),a),new dj));b.length&&uh(a,Rf(new Qf,b));d!==void 0&&(a.Va=d);var e=new xh(1828,"","",!1,"",wh(a));zc(e,a);var f=new Li({flush:function(g){try{e.flush(g)}catch(h){c(h)}}});
f.addOnDisposeCallback(function(){setTimeout(function(){try{f.dc()}finally{e.dispose()}})});
f.o=1E5;f.flushInterval=3E4;f.h.setInterval(3E4);return f}
function lj(a,b){I.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
v(lj,I);function mj(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-fj());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=fj(),a.timer=void 0}},b)}}
function nj(a,b){gj.call(this);this.metrics=a;this.Da=b}
v(nj,gj);nj.prototype.Rc=function(a){this.metrics.sf.record(a,this.Da)};
nj.prototype.Db=function(a){this.metrics.eventCount.kb(a,this.Da)};
nj.prototype.Wb=function(a,b){this.metrics.pe.record(b,a,this.Da)};
nj.prototype.Ha=function(a){this.metrics.errorCount.kb(a,this.Da)};
function oj(a,b){b=b===void 0?[]:b;var c={Da:a.Da||"_",pc:a.pc||[],xc:a.xc|0,Va:a.Va,yc:a.yc||function(){},
Jb:a.Jb||function(e,f){return kj(e,f,c.yc,c.Va)}};
b=c.Jb("49",c.pc.concat(b));nj.call(this,jj(b),c.Da);var d=this;this.options=c;this.service=b;this.i=!a.Jb;this.h=new lj(function(){return void d.service.dc()},c.xc);
this.addOnDisposeCallback(function(){d.h.dispose();d.i&&d.service.dispose()})}
v(oj,nj);oj.prototype.Pd=function(a){var b=this;this.h.dispose();this.i&&this.service.dispose();this.service=this.options.Jb("49",this.options.pc.concat(a));this.h=new lj(function(){return void b.service.dc()},this.options.xc);
this.metrics=jj(this.service)};
oj.prototype.Dc=function(){mj(this.h)};
function fj(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function pj(a){this.F=L(a)}
v(pj,M);function qj(a){this.F=L(a)}
v(qj,M);function rj(a){this.F=L(a,0,"bfkj")}
v(rj,M);var sj=function(a){return ee(function(b){return b instanceof a&&!ae(b)})}(rj);
rj.Me="bfkj";function Gc(a){this.F=L(a)}
v(Gc,M);function tj(a){this.F=L(a)}
v(tj,M);var uj=Pf(tj);function vj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function wj(a,b,c){if(a.disable)return new ij;b=b?Ec(b):[];if(c)return c.Pd(b),c.share();a={Da:a.Da,pc:a.Dh,xc:a.Oh,Va:a.Va,yc:a.yc,Jb:a.Jb};c=b;c=c===void 0?[]:c;return new oj(a,c)}
function xj(a){function b(w,x,z,G){Promise.resolve().then(function(){k.done();h.Dc();h.dispose();g.resolve({Zd:w,rf:x,Se:z,yh:G})})}
function c(w,x,z,G){if(!d.logger.ea){var H="k";x?H="h":z&&(H="u");H!=="k"?G!==0&&(d.logger.Db(H),d.logger.Wb(H,w)):d.i<=0?(d.logger.Db(H),d.logger.Wb(H,w),d.i=Math.floor(Math.random()*200)):d.i--}}
I.call(this);var d=this;this.i=Math.floor(Math.random()*200);this.h=new tj;if("challenge"in a&&sj(a.challenge)){var e=Gf(a.challenge,4,void 0,de);var f=Gf(a.challenge,5,void 0,de);Gf(a.challenge,7,void 0,de)&&(this.h=uj(Gf(a.challenge,7,void 0,de)))}else e=a.program,f=a.globalName;this.addOnDisposeCallback(function(){var w,x,z;return B(function(G){if(G.h==1)return G.yield(d.j,2);w=G.i;x=w.rf;(z=x)==null||z();G.h=0})});
this.logger=wj(a.Bd||{},this.h,a.zh);zc(this,this.logger);var g=new vj;this.j=g.promise;this.logger.Db("t");var h=this.logger.share(),k=new ej(h,"t");if(!D[f])throw this.logger.Ha(25),Error("EGOU");if(!D[f].a)throw this.logger.Ha(26),Error("ELIU");try{var l=D[f].a;f=[];for(var m=[],n=Ec(this.h),r=0;r<n.length;r++)f.push(n[r]),m.push(1);var t=Ic(this.h);for(n=0;n<t.length;n++)f.push(t[n]),m.push(2);this.u=y(l(e,b,!0,a.fi,c,[f,m],Gf(this.h,5))).next().value;this.cd=g.promise.then(function(){})}catch(w){throw this.logger.Ha(28),
w;
}}
v(xj,I);xj.prototype.snapshot=function(a){if(this.ea)throw Error("Already disposed");this.logger.Db("n");var b=this.logger.share();return this.j.then(function(c){var d=c.Zd;return new Promise(function(e){var f=new ej(b,"n");d(function(g){f.done();b.Rc(g.length);b.Dc();b.dispose();e(g)},[a.wb,
a.ed,a.Cf,a.gd])})})};
xj.prototype.hd=function(a){var b=this;if(this.ea)throw Error("Already disposed");this.logger.Db("n");var c=hj(this.logger,function(){return b.u([a.wb,a.ed,a.Cf,a.gd])});
this.logger.Rc(c.length);this.logger.Dc();return c};
xj.prototype.o=function(a){this.j.then(function(b){var c;(c=b.Se)==null||c(a)})};function yj(a){if(!a)return null;a=Ye(rf(a,4,void 0,qf));return a===null||a===void 0?null:ob(a)}
;function zj(){this.promises={};this.h=null}
function Aj(){zj.instance||(zj.instance=new zj);return zj.instance}
function Bj(a,b){return Cj(a,Cf(b,pj,1,de),Cf(b,qj,2,de),Gf(b,3,void 0,de))}
function Cj(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return Dj(b,c);var e;(e=a.promises)[d]||(e[d]=new Promise(function(f,g){Dj(b,c).then(function(){a.h=d;f()},function(h){delete a.promises[d];
g(h)})}));
return a.promises[d]}
function Dj(a,b){return b?Ej(b):a?Fj(a):Promise.resolve()}
function Ej(a){return new Promise(function(b,c){var d=Fg("SCRIPT"),e=yj(a);Lb(d,e);d.onload=function(){Gg(d);b()};
d.onerror=function(){Gg(d);c(Error("EWLS"))};
(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(d)})}
function Fj(a){return new Promise(function(b){var c=Fg("SCRIPT");if(a){var d=Ye(rf(a,6,void 0,qf));d=d===null||d===void 0?null:Ib(d)}else d=null;c.textContent=Jb(d);Kb(c);(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(c);Gg(c);b()})}
;var Gj=window;function Hj(a){var b=Ij;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Jj(){var a=[];Hj(function(b){a.push(b)});
return a}
var Ij={Df:"allow-forms",Ef:"allow-modals",Ff:"allow-orientation-lock",Gf:"allow-pointer-lock",Hf:"allow-popups",If:"allow-popups-to-escape-sandbox",Jf:"allow-presentation",Kf:"allow-same-origin",Lf:"allow-scripts",Mf:"allow-top-navigation",Nf:"allow-top-navigation-by-user-activation"},Kj=ri(function(){return Jj()});
function Lj(){var a=Mj(),b={};Tb(Kj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Mj(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Nj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Oj=(new Date).getTime();function Pj(a){bi.call(this);var b=this;this.A=this.j=0;this.Ca=a!=null?a:{pa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.h=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return B(function(e){return e.yield(Qj(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||Rj(this)}
v(Pj,bi);function Sj(){var a=Tj;Pj.instance||(Pj.instance=new Pj(a));return Pj.instance}
Pj.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ca.qa(this.A);delete Pj.instance};
Pj.prototype.ta=function(){return this.h};
function Rj(a){a.A=a.Ca.pa(function(){var b;return B(function(c){if(c.h==1)return a.h?((b=window.navigator)==null?0:b.onLine)?c.B(3):c.yield(Qj(a),3):c.yield(Qj(a),3);Rj(a);c.h=0})},3E4)}
function Qj(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,va(h,2,3),d&&(a.j=a.Ca.pa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.P=[h.j];h.H=0;h.o=0;a.u=void 0;a.j&&(a.Ca.qa(a.j),a.j=0);g!==a.h&&(a.h=g,a.h?ci(a,"networkstatus-online"):ci(a,"networkstatus-offline"));c(g);ya(h);break;case 2:xa(h),g=!1,h.B(3)}})})}
;function Uj(){this.data=[];this.h=-1}
Uj.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Uj.prototype.get=function(a){return!!this.data[a]};
function Vj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Wj(){this.blockSize=-1}
;function Xj(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.H=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
$a(Xj,Wj);Xj.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Yj(a,b,c){c||(c=0);var d=a.H;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
Xj.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)Yj(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Yj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Yj(this,e);f=0;break}}this.i=f;this.o+=b}};
Xj.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;Yj(this,this.u);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Zj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function ak(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function bk(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Zj(a).match(/\S+/g)||[],b=Sb(a,b)>=0);return b}
function ck(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):bk(a,"inverted-hdpi")&&ak(a,Array.prototype.filter.call(a.classList?a.classList:Zj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function dk(){}
dk.prototype.next=function(){return ek};
var ek={done:!0,value:void 0};function fk(a){return{value:a,done:!1}}
dk.prototype.tb=function(){return this};function gk(a){if(a instanceof hk||a instanceof ik||a instanceof jk)return a;if(typeof a.next=="function")return new hk(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new hk(function(){return a[Symbol.iterator]()});
if(typeof a.tb=="function")return new hk(function(){return a.tb()});
throw Error("Not an iterator or iterable.");}
function hk(a){this.h=a}
hk.prototype.tb=function(){return new ik(this.h())};
hk.prototype[Symbol.iterator]=function(){return new jk(this.h())};
hk.prototype.i=function(){return new jk(this.h())};
function ik(a){this.h=a}
v(ik,dk);ik.prototype.next=function(){return this.h.next()};
ik.prototype[Symbol.iterator]=function(){return new jk(this.h)};
ik.prototype.i=function(){return new jk(this.h)};
function jk(a){hk.call(this,function(){return a});
this.j=a}
v(jk,hk);jk.prototype.next=function(){return this.j.next()};function N(a){I.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.A=!!a}
$a(N,I);p=N.prototype;p.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
p.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.fc(a)}return!1};
p.fc=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Yb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
p.sb=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.A)for(f=0;f<c.length;f++)e=c[f],kk(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.ea;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.fc(c)}}return f!=0}return!1};
function kk(a,b,c){ni(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.fc,this),delete this.i[a])}else this.h.length=0,this.i={}};
p.ba=function(){N.Aa.ba.call(this);this.clear();this.j.length=0};function lk(a){this.h=a}
lk.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Pi).serialize(b))};
lk.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
lk.prototype.remove=function(a){this.h.remove(a)};function mk(a){this.h=a}
$a(mk,lk);function nk(a){this.data=a}
function ok(a){return a===void 0||a instanceof nk?a:new nk(a)}
mk.prototype.set=function(a,b){mk.Aa.set.call(this,a,ok(b))};
mk.prototype.i=function(a){a=mk.Aa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
mk.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function pk(a){this.h=a}
$a(pk,mk);pk.prototype.set=function(a,b,c){if(b=ok(b)){if(c){if(c<Ya()){pk.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ya()}pk.Aa.set.call(this,a,b)};
pk.prototype.i=function(a){var b=pk.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ya()||c&&c>Ya())pk.prototype.remove.call(this,a);else return b}};function qk(){}
;function rk(){}
$a(rk,qk);rk.prototype[Symbol.iterator]=function(){return gk(this.tb(!0)).i()};
rk.prototype.clear=function(){var a=Array.from(this);a=y(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function sk(a){this.h=a;this.i=null}
$a(sk,rk);p=sk.prototype;p.isAvailable=function(){if(!Xc||this.i===null){var a=this.h;if(a)try{performance.now();a.setItem("__sak","1");a.removeItem("__sak");performance.now();var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;this.i=b}return this.i};
p.set=function(a,b){tk(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){tk(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){tk(this);this.h.removeItem(a)};
p.tb=function(a){tk(this);var b=0,c=this.h,d=new dk;d.next=function(){if(b>=c.length)return ek;var e=c.key(b++);if(a)return fk(e);e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return fk(e)};
return d};
p.clear=function(){tk(this);this.h.clear()};
p.key=function(a){tk(this);return this.h.key(a)};
function tk(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;(Xc?a.isAvailable():(b=a.i)!=null?b:a.isAvailable())||Vc(Error("Storage mechanism: Storage unavailable"))}
;function uk(){var a=null;try{a=D.localStorage||null}catch(b){}sk.call(this,a)}
$a(uk,sk);function vk(a,b){this.i=a;this.h=b+"::"}
$a(vk,rk);vk.prototype.set=function(a,b){this.i.set(this.h+a,b)};
vk.prototype.get=function(a){return this.i.get(this.h+a)};
vk.prototype.remove=function(a){this.i.remove(this.h+a)};
vk.prototype.tb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new dk;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return fk(a?e.slice(c.h.length):c.i.get(e))};
return d};function wk(a){if(a.Wa&&typeof a.Wa=="function")return a.Wa();if(typeof Map!=="undefined"&&a instanceof Map||typeof Set!=="undefined"&&a instanceof Set)return Array.from(a.values());if(typeof a==="string")return a.split("");if(Ma(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return rg(a)}
function xk(a){if(a.Tb&&typeof a.Tb=="function")return a.Tb();if(!a.Wa||typeof a.Wa!="function"){if(typeof Map!=="undefined"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set!=="undefined"&&a instanceof Set)){if(Ma(a)||typeof a==="string"){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}}
function yk(a,b,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(b,c);else if(Ma(a)||typeof a==="string")Array.prototype.forEach.call(a,b,c);else for(var d=xk(a),e=wk(a),f=e.length,g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}
;function zk(a){this.i=this.A=this.j="";this.G=null;this.u=this.h="";this.o=!1;var b;a instanceof zk?(this.o=a.o,Ak(this,a.j),this.A=a.A,this.i=a.i,Bk(this,a.G),this.h=a.h,Ck(this,a.H.clone()),this.u=a.u):a&&(b=String(a).match(ic))?(this.o=!1,Ak(this,b[1]||"",!0),this.A=Dk(b[2]||""),this.i=Dk(b[3]||"",!0),Bk(this,b[4]),this.h=Dk(b[5]||"",!0),Ck(this,b[6]||"",!0),this.u=Dk(b[7]||"")):(this.o=!1,this.H=new Ek(null,this.o))}
zk.prototype.toString=function(){var a=[],b=this.j;b&&a.push(Fk(b,Gk,!0),":");var c=this.i;if(c||b=="file")a.push("//"),(b=this.A)&&a.push(Fk(b,Gk,!0),"@"),a.push(Hk(encodeURIComponent(String(c)))),c=this.G,c!=null&&a.push(":",String(c));if(c=this.h)this.i&&c.charAt(0)!="/"&&a.push("/"),a.push(Fk(c,c.charAt(0)=="/"?Ik:Jk,!0));(c=this.H.toString())&&a.push("?",c);(c=this.u)&&a.push("#",Fk(c,Kk));return a.join("")};
zk.prototype.resolve=function(a){var b=this.clone(),c=!!a.j;c?Ak(b,a.j):c=!!a.A;c?b.A=a.A:c=!!a.i;c?b.i=a.i:c=a.G!=null;var d=a.h;if(c)Bk(b,a.G);else if(c=!!a.h){if(d.charAt(0)!="/")if(this.i&&!this.h)d="/"+d;else{var e=b.h.lastIndexOf("/");e!=-1&&(d=b.h.slice(0,e+1)+d)}e=d;if(e==".."||e==".")d="";else if(e.indexOf("./")!=-1||e.indexOf("/.")!=-1){d=e.lastIndexOf("/",0)==0;e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];h=="."?d&&g==e.length&&f.push(""):h==".."?((f.length>1||f.length==1&&
f[0]!="")&&f.pop(),d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.h=d:c=a.H.toString()!=="";c?Ck(b,a.H.clone()):c=!!a.u;c&&(b.u=a.u);return b};
zk.prototype.clone=function(){return new zk(this)};
function Ak(a,b,c){a.j=c?Dk(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))}
function Bk(a,b){if(b){b=Number(b);if(isNaN(b)||b<0)throw Error("Bad port number "+b);a.G=b}else a.G=null}
function Ck(a,b,c){b instanceof Ek?(a.H=b,Lk(a.H,a.o)):(c||(b=Fk(b,Mk)),a.H=new Ek(b,a.o))}
function Dk(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function Fk(a,b,c){return typeof a==="string"?(a=encodeURI(a).replace(b,Nk),c&&(a=Hk(a)),a):null}
function Nk(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
function Hk(a){return a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")}
var Gk=/[#\/\?@]/g,Jk=/[#\?:]/g,Ik=/[#\?]/g,Mk=/[#\?@]/g,Kk=/#/g;function Ek(a,b){this.i=this.h=null;this.j=a||null;this.o=!!b}
function Ok(a){a.h||(a.h=new Map,a.i=0,a.j&&oc(a.j,function(b,c){a.add(fc(b),c)}))}
p=Ek.prototype;p.add=function(a,b){Ok(this);this.j=null;a=Pk(this,a);var c=this.h.get(a);c||this.h.set(a,c=[]);c.push(b);this.i=this.i+1;return this};
p.remove=function(a){Ok(this);a=Pk(this,a);return this.h.has(a)?(this.j=null,this.i=this.i-this.h.get(a).length,this.h.delete(a)):!1};
p.clear=function(){this.h=this.j=null;this.i=0};
function Qk(a,b){Ok(a);b=Pk(a,b);return a.h.has(b)}
p.forEach=function(a,b){Ok(this);this.h.forEach(function(c,d){c.forEach(function(e){a.call(b,e,d,this)},this)},this)};
p.Tb=function(){Ok(this);for(var a=Array.from(this.h.values()),b=Array.from(this.h.keys()),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
p.Wa=function(a){Ok(this);var b=[];if(typeof a==="string")Qk(this,a)&&(b=b.concat(this.h.get(Pk(this,a))));else{a=Array.from(this.h.values());for(var c=0;c<a.length;c++)b=b.concat(a[c])}return b};
p.set=function(a,b){Ok(this);this.j=null;a=Pk(this,a);Qk(this,a)&&(this.i=this.i-this.h.get(a).length);this.h.set(a,[b]);this.i=this.i+1;return this};
p.get=function(a,b){if(!a)return b;a=this.Wa(a);return a.length>0?String(a[0]):b};
p.toString=function(){if(this.j)return this.j;if(!this.h)return"";for(var a=[],b=Array.from(this.h.keys()),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.Wa(d);for(var f=0;f<d.length;f++){var g=e;d[f]!==""&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.j=a.join("&")};
p.clone=function(){var a=new Ek;a.j=this.j;this.h&&(a.h=new Map(this.h),a.i=this.i);return a};
function Pk(a,b){b=String(b);a.o&&(b=b.toLowerCase());return b}
function Lk(a,b){b&&!a.o&&(Ok(a),a.j=null,a.h.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),this.remove(e),c.length>0&&(this.j=null,this.h.set(Pk(this,e),Zb(c)),this.i=this.i+c.length))},a));
a.o=b}
p.extend=function(a){for(var b=0;b<arguments.length;b++)yk(arguments[b],function(c,d){this.add(d,c)},this)};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},Rk=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.dd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Sk={ub:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
ud:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Tk={ub:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
ud:function(a){return[].concat.apply([],a)}};
O.qf=function(){Rk?(O.rb=Uint8Array,O.Ja=Uint16Array,O.Ud=Int32Array,O.assign(O,Sk)):(O.rb=Array,O.Ja=Array,O.Ud=Array,O.assign(O,Tk))};
O.qf();var Uk=!0;try{new Uint8Array(1)}catch(a){Uk=!1}
function Vk(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new O.rb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Wk={};Wk=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Xk={},Yk,Zk=[],$k=0;$k<256;$k++){Yk=$k;for(var al=0;al<8;al++)Yk=Yk&1?3988292384^Yk>>>1:Yk>>>1;Zk[$k]=Yk}Xk=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Zk[(a^b[d])&255];return a^-1};var bl={};bl={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function cl(a){for(var b=a.length;--b>=0;)a[b]=0}
var dl=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],el=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],fl=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],gl=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],hl=Array(576);cl(hl);var il=Array(60);cl(il);var jl=Array(512);cl(jl);var kl=Array(256);cl(kl);var ll=Array(29);cl(ll);var ml=Array(30);cl(ml);function nl(a,b,c,d,e){this.Md=a;this.te=b;this.se=c;this.le=d;this.Le=e;this.xd=a&&a.length}
var ol,pl,ql;function rl(a,b){this.td=a;this.Fb=0;this.cb=b}
function sl(a,b){a.aa[a.pending++]=b&255;a.aa[a.pending++]=b>>>8&255}
function tl(a,b,c){a.ia>16-c?(a.oa|=b<<a.ia&65535,sl(a,a.oa),a.oa=b>>16-a.ia,a.ia+=c-16):(a.oa|=b<<a.ia&65535,a.ia+=c)}
function ul(a,b,c){tl(a,c[b*2],c[b*2+1])}
function vl(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function wl(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=vl(d[e]++,e))}
function xl(a){var b;for(b=0;b<286;b++)a.ra[b*2]=0;for(b=0;b<30;b++)a.hb[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.ra[512]=1;a.Pa=a.Ib=0;a.ya=a.matches=0}
function yl(a){a.ia>8?sl(a,a.oa):a.ia>0&&(a.aa[a.pending++]=a.oa);a.oa=0;a.ia=0}
function zl(a,b,c){yl(a);sl(a,c);sl(a,~c);O.ub(a.aa,a.window,b,c,a.pending);a.pending+=c}
function Al(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Bl(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Na;){e<a.Na&&Al(b,a.da[e+1],a.da[e],a.depth)&&e++;if(Al(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function Cl(a,b,c){var d=0;if(a.ya!==0){do{var e=a.aa[a.Qb+d*2]<<8|a.aa[a.Qb+d*2+1];var f=a.aa[a.Qc+d];d++;if(e===0)ul(a,f,b);else{var g=kl[f];ul(a,g+256+1,b);var h=dl[g];h!==0&&(f-=ll[g],tl(a,f,h));e--;g=e<256?jl[e]:jl[256+(e>>>7)];ul(a,g,c);h=el[g];h!==0&&(e-=ml[g],tl(a,e,h))}}while(d<a.ya)}ul(a,256,b)}
function Dl(a,b){var c=b.td,d=b.cb.Md,e=b.cb.xd,f=b.cb.le,g,h=-1;a.Na=0;a.Ab=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Na]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Na<2;){var k=a.da[++a.Na]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Pa--;e&&(a.Ib-=d[k*2+1])}b.Fb=h;for(g=a.Na>>1;g>=1;g--)Bl(a,c,g);k=f;do g=a.da[1],a.da[1]=a.da[a.Na--],Bl(a,c,1),d=a.da[1],a.da[--a.Ab]=g,a.da[--a.Ab]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.da[1]=k++,Bl(a,c,1);while(a.Na>=
2);a.da[--a.Ab]=a.da[1];g=b.td;k=b.Fb;d=b.cb.Md;e=b.cb.xd;f=b.cb.te;var l=b.cb.se,m=b.cb.Le,n,r=0;for(n=0;n<=15;n++)a.Ka[n]=0;g[a.da[a.Ab]*2+1]=0;for(b=a.Ab+1;b<573;b++){var t=a.da[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,r++);g[t*2+1]=n;if(!(t>k)){a.Ka[n]++;var w=0;t>=l&&(w=f[t-l]);var x=g[t*2];a.Pa+=x*(n+w);e&&(a.Ib+=x*(d[t*2+1]+w))}}if(r!==0){do{for(n=m-1;a.Ka[n]===0;)n--;a.Ka[n]--;a.Ka[n+1]+=2;a.Ka[m]--;r-=2}while(r>0);for(n=m;n!==0;n--)for(t=a.Ka[n];t!==0;)d=a.da[--b],d>k||(g[d*2+1]!==n&&(a.Pa+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}wl(c,h,a.Ka)}
function El(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Fl(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do ul(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(ul(a,l,a.ja),g--),ul(a,16,a.ja),tl(a,g-3,2)):g<=10?(ul(a,17,a.ja),tl(a,g-3,3)):(ul(a,18,a.ja),tl(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Gl(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ra[c*2]!==0)return 0;if(a.ra[18]!==0||a.ra[20]!==0||a.ra[26]!==0)return 1;for(c=32;c<256;c++)if(a.ra[c*2]!==0)return 1;return 0}
var Hl=!1;function Il(a,b,c){a.aa[a.Qb+a.ya*2]=b>>>8&255;a.aa[a.Qb+a.ya*2+1]=b&255;a.aa[a.Qc+a.ya]=c&255;a.ya++;b===0?a.ra[c*2]++:(a.matches++,b--,a.ra[(kl[c]+256+1)*2]++,a.hb[(b<256?jl[b]:jl[256+(b>>>7)])*2]++);return a.ya===a.Vb-1}
;function Jl(a,b){a.msg=bl[b];return b}
function Kl(a){for(var b=a.length;--b>=0;)a[b]=0}
function Ll(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(O.ub(a.output,b.aa,b.Yb,c,a.Gb),a.Gb+=c,b.Yb+=c,a.jd+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.Yb=0))}
function Ml(a,b){var c=a.va>=0?a.va:-1,d=a.v-a.va,e=0;if(a.level>0){a.M.Lc===2&&(a.M.Lc=Gl(a));Dl(a,a.wc);Dl(a,a.nc);El(a,a.ra,a.wc.Fb);El(a,a.hb,a.nc.Fb);Dl(a,a.qd);for(e=18;e>=3&&a.ja[gl[e]*2+1]===0;e--);a.Pa+=3*(e+1)+5+5+4;var f=a.Pa+3+7>>>3;var g=a.Ib+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)tl(a,b?1:0,3),zl(a,c,d);else if(a.strategy===4||g===f)tl(a,2+(b?1:0),3),Cl(a,hl,il);else{tl(a,4+(b?1:0),3);c=a.wc.Fb+1;d=a.nc.Fb+1;e+=1;tl(a,c-257,5);tl(a,d-1,5);tl(a,e-4,4);for(f=0;f<e;f++)tl(a,
a.ja[gl[f]*2+1],3);Fl(a,a.ra,c-1);Fl(a,a.hb,d-1);Cl(a,a.ra,a.hb)}xl(a);b&&yl(a);a.va=a.v;Ll(a.M)}
function P(a,b){a.aa[a.pending++]=b}
function Nl(a,b){a.aa[a.pending++]=b>>>8&255;a.aa[a.pending++]=b&255}
function Ol(a,b){var c=a.Ad,d=a.v,e=a.wa,f=a.Cd,g=a.v>a.la-262?a.v-(a.la-262):0,h=a.window,k=a.eb,l=a.Ia,m=a.v+258,n=h[d+e-1],r=h[d+e];a.wa>=a.wd&&(c>>=2);f>a.D&&(f=a.D);do{var t=b;if(h[t+e]===r&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.Eb=b;e=t;if(t>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.D?e:a.D}
function Pl(a){var b=a.la,c;do{var d=a.Sd-a.D-a.v;if(a.v>=b+(b-262)){O.ub(a.window,a.window,b,b,0);a.Eb-=b;a.v-=b;a.va-=b;var e=c=a.vc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(a.M.na===0)break;e=a.M;c=a.window;f=a.v+a.D;var g=e.na;g>d&&(g=d);g===0?c=0:(e.na-=g,O.ub(c,e.input,e.nb,g,f),e.state.wrap===1?e.J=Wk(e.J,c,g,f):e.state.wrap===2&&(e.J=Xk(e.J,c,g,f)),e.nb+=g,e.qb+=g,c=g);a.D+=c;if(a.D+a.sa>=3)for(d=a.v-a.sa,a.R=a.window[d],
a.R=(a.R<<a.Ma^a.window[d+1])&a.La;a.sa&&!(a.R=(a.R<<a.Ma^a.window[d+3-1])&a.La,a.Ia[d&a.eb]=a.head[a.R],a.head[a.R]=d,d++,a.sa--,a.D+a.sa<3););}while(a.D<262&&a.M.na!==0)}
function Ql(a,b){for(var c;;){if(a.D<262){Pl(a);if(a.D<262&&b===0)return 1;if(a.D===0)break}c=0;a.D>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.eb]=a.head[a.R],a.head[a.R]=a.v);c!==0&&a.v-c<=a.la-262&&(a.T=Ol(a,c));if(a.T>=3)if(c=Il(a,a.v-a.Eb,a.T-3),a.D-=a.T,a.T<=a.Sc&&a.D>=3){a.T--;do a.v++,a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.eb]=a.head[a.R],a.head[a.R]=a.v;while(--a.T!==0);a.v++}else a.v+=a.T,a.T=0,a.R=a.window[a.v],a.R=(a.R<<a.Ma^a.window[a.v+1])&a.La;else c=Il(a,0,
a.window[a.v]),a.D--,a.v++;if(c&&(Ml(a,!1),a.M.S===0))return 1}a.sa=a.v<2?a.v:2;return b===4?(Ml(a,!0),a.M.S===0?3:4):a.ya&&(Ml(a,!1),a.M.S===0)?1:2}
function Rl(a,b){for(var c,d;;){if(a.D<262){Pl(a);if(a.D<262&&b===0)return 1;if(a.D===0)break}c=0;a.D>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.eb]=a.head[a.R],a.head[a.R]=a.v);a.wa=a.T;a.Fd=a.Eb;a.T=2;c!==0&&a.wa<a.Sc&&a.v-c<=a.la-262&&(a.T=Ol(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.v-a.Eb>4096)&&(a.T=2));if(a.wa>=3&&a.T<=a.wa){d=a.v+a.D-3;c=Il(a,a.v-1-a.Fd,a.wa-3);a.D-=a.wa-1;a.wa-=2;do++a.v<=d&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.eb]=a.head[a.R],a.head[a.R]=a.v);
while(--a.wa!==0);a.lb=0;a.T=2;a.v++;if(c&&(Ml(a,!1),a.M.S===0))return 1}else if(a.lb){if((c=Il(a,0,a.window[a.v-1]))&&Ml(a,!1),a.v++,a.D--,a.M.S===0)return 1}else a.lb=1,a.v++,a.D--}a.lb&&(Il(a,0,a.window[a.v-1]),a.lb=0);a.sa=a.v<2?a.v:2;return b===4?(Ml(a,!0),a.M.S===0?3:4):a.ya&&(Ml(a,!1),a.M.S===0)?1:2}
function Sl(a,b){for(var c,d,e,f=a.window;;){if(a.D<=258){Pl(a);if(a.D<=258&&b===0)return 1;if(a.D===0)break}a.T=0;if(a.D>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.D&&(a.T=a.D)}a.T>=3?(c=Il(a,1,a.T-3),a.D-=a.T,a.v+=a.T,a.T=0):(c=Il(a,0,a.window[a.v]),a.D--,a.v++);if(c&&(Ml(a,!1),a.M.S===0))return 1}a.sa=0;return b===4?(Ml(a,!0),a.M.S===0?3:4):
a.ya&&(Ml(a,!1),a.M.S===0)?1:2}
function Tl(a,b){for(var c;;){if(a.D===0&&(Pl(a),a.D===0)){if(b===0)return 1;break}a.T=0;c=Il(a,0,a.window[a.v]);a.D--;a.v++;if(c&&(Ml(a,!1),a.M.S===0))return 1}a.sa=0;return b===4?(Ml(a,!0),a.M.S===0?3:4):a.ya&&(Ml(a,!1),a.M.S===0)?1:2}
function Ul(a,b,c,d,e){this.ye=a;this.Ke=b;this.Ne=c;this.Je=d;this.ue=e}
var Vl;Vl=[new Ul(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(a.D<=1){Pl(a);if(a.D===0&&b===0)return 1;if(a.D===0)break}a.v+=a.D;a.D=0;var d=a.va+c;if(a.v===0||a.v>=d)if(a.D=a.v-d,a.v=d,Ml(a,!1),a.M.S===0)return 1;if(a.v-a.va>=a.la-262&&(Ml(a,!1),a.M.S===0))return 1}a.sa=0;if(b===4)return Ml(a,!0),a.M.S===0?3:4;a.v>a.va&&Ml(a,!1);return 1}),
new Ul(4,4,8,4,Ql),new Ul(4,5,16,8,Ql),new Ul(4,6,32,32,Ql),new Ul(4,4,16,16,Rl),new Ul(8,16,32,32,Rl),new Ul(8,16,128,128,Rl),new Ul(8,32,128,256,Rl),new Ul(32,128,258,1024,Rl),new Ul(32,258,258,4096,Rl)];
function Wl(){this.M=null;this.status=0;this.aa=null;this.wrap=this.pending=this.Yb=this.za=0;this.I=null;this.Ba=0;this.method=8;this.Cb=-1;this.eb=this.md=this.la=0;this.window=null;this.Sd=0;this.head=this.Ia=null;this.Cd=this.wd=this.strategy=this.level=this.Sc=this.Ad=this.wa=this.D=this.Eb=this.v=this.lb=this.Fd=this.T=this.va=this.Ma=this.La=this.Oc=this.vc=this.R=0;this.ra=new O.Ja(1146);this.hb=new O.Ja(122);this.ja=new O.Ja(78);Kl(this.ra);Kl(this.hb);Kl(this.ja);this.qd=this.nc=this.wc=
null;this.Ka=new O.Ja(16);this.da=new O.Ja(573);Kl(this.da);this.Ab=this.Na=0;this.depth=new O.Ja(573);Kl(this.depth);this.ia=this.oa=this.sa=this.matches=this.Ib=this.Pa=this.Qb=this.ya=this.Vb=this.Qc=0}
function Xl(a,b){if(!a||!a.state||b>5||b<0)return a?Jl(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.na!==0||c.status===666&&b!==4)return Jl(a,a.S===0?-5:-2);c.M=a;var d=c.Cb;c.Cb=b;if(c.status===42)if(c.wrap===2)a.J=0,P(c,31),P(c,139),P(c,8),c.I?(P(c,(c.I.text?1:0)+(c.I.Xa?2:0)+(c.I.extra?4:0)+(c.I.name?8:0)+(c.I.comment?16:0)),P(c,c.I.time&255),P(c,c.I.time>>8&255),P(c,c.I.time>>16&255),P(c,c.I.time>>24&255),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,c.I.os&255),c.I.extra&&c.I.extra.length&&
(P(c,c.I.extra.length&255),P(c,c.I.extra.length>>8&255)),c.I.Xa&&(a.J=Xk(a.J,c.aa,c.pending,0)),c.Ba=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,3),c.status=113);else{var e=8+(c.md-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;Nl(c,e+(31-e%31));c.v!==0&&(Nl(c,a.J>>>16),Nl(c,a.J&65535));a.J=1}if(c.status===69)if(c.I.extra){for(e=c.pending;c.Ba<(c.I.extra.length&65535)&&(c.pending!==c.za||
(c.I.Xa&&c.pending>e&&(a.J=Xk(a.J,c.aa,c.pending-e,e)),Ll(a),e=c.pending,c.pending!==c.za));)P(c,c.I.extra[c.Ba]&255),c.Ba++;c.I.Xa&&c.pending>e&&(a.J=Xk(a.J,c.aa,c.pending-e,e));c.Ba===c.I.extra.length&&(c.Ba=0,c.status=73)}else c.status=73;if(c.status===73)if(c.I.name){e=c.pending;do{if(c.pending===c.za&&(c.I.Xa&&c.pending>e&&(a.J=Xk(a.J,c.aa,c.pending-e,e)),Ll(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ba<c.I.name.length?c.I.name.charCodeAt(c.Ba++)&255:0;P(c,f)}while(f!==0);c.I.Xa&&c.pending>
e&&(a.J=Xk(a.J,c.aa,c.pending-e,e));f===0&&(c.Ba=0,c.status=91)}else c.status=91;if(c.status===91)if(c.I.comment){e=c.pending;do{if(c.pending===c.za&&(c.I.Xa&&c.pending>e&&(a.J=Xk(a.J,c.aa,c.pending-e,e)),Ll(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ba<c.I.comment.length?c.I.comment.charCodeAt(c.Ba++)&255:0;P(c,f)}while(f!==0);c.I.Xa&&c.pending>e&&(a.J=Xk(a.J,c.aa,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.I.Xa?(c.pending+2>c.za&&Ll(a),c.pending+2<=c.za&&(P(c,
a.J&255),P(c,a.J>>8&255),a.J=0,c.status=113)):c.status=113);if(c.pending!==0){if(Ll(a),a.S===0)return c.Cb=-1,0}else if(a.na===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return Jl(a,-5);if(c.status===666&&a.na!==0)return Jl(a,-5);if(a.na!==0||c.D!==0||b!==0&&c.status!==666){d=c.strategy===2?Tl(c,b):c.strategy===3?Sl(c,b):Vl[c.level].ue(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.Cb=-1),0;if(d===2&&(b===1?(tl(c,2,3),ul(c,256,hl),c.ia===16?(sl(c,c.oa),c.oa=0,c.ia=0):c.ia>=
8&&(c.aa[c.pending++]=c.oa&255,c.oa>>=8,c.ia-=8)):b!==5&&(tl(c,0,3),zl(c,0,0),b===3&&(Kl(c.head),c.D===0&&(c.v=0,c.va=0,c.sa=0))),Ll(a),a.S===0))return c.Cb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(P(c,a.J&255),P(c,a.J>>8&255),P(c,a.J>>16&255),P(c,a.J>>24&255),P(c,a.qb&255),P(c,a.qb>>8&255),P(c,a.qb>>16&255),P(c,a.qb>>24&255)):(Nl(c,a.J>>>16),Nl(c,a.J&65535));Ll(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var Yl={};Yl=function(){this.input=null;this.qb=this.na=this.nb=0;this.output=null;this.jd=this.S=this.Gb=0;this.msg="";this.state=null;this.Lc=2;this.J=0};var Zl=Object.prototype.toString;
function $l(a){if(!(this instanceof $l))return new $l(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.M=new Yl;this.M.S=0;var b=this.M;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=Jl(b,-2);else{e===8&&(e=9);var k=new Wl;b.state=k;k.M=b;k.wrap=h;k.I=null;k.md=e;k.la=1<<k.md;k.eb=k.la-1;k.Oc=f+7;k.vc=1<<k.Oc;k.La=k.vc-1;k.Ma=~~((k.Oc+3-1)/3);k.window=new O.rb(k.la*2);k.head=new O.Ja(k.vc);k.Ia=new O.Ja(k.la);k.Vb=1<<f+6;k.za=k.Vb*4;k.aa=new O.rb(k.za);k.Qb=1*k.Vb;k.Qc=3*k.Vb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.qb=b.jd=0;b.Lc=2;c=b.state;c.pending=0;c.Yb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.J=c.wrap===2?
0:1;c.Cb=0;if(!Hl){d=Array(16);for(f=g=0;f<28;f++)for(ll[f]=g,e=0;e<1<<dl[f];e++)kl[g++]=f;kl[g-1]=f;for(f=g=0;f<16;f++)for(ml[f]=g,e=0;e<1<<el[f];e++)jl[g++]=f;for(g>>=7;f<30;f++)for(ml[f]=g<<7,e=0;e<1<<el[f]-7;e++)jl[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)hl[e*2+1]=8,e++,d[8]++;for(;e<=255;)hl[e*2+1]=9,e++,d[9]++;for(;e<=279;)hl[e*2+1]=7,e++,d[7]++;for(;e<=287;)hl[e*2+1]=8,e++,d[8]++;wl(hl,287,d);for(e=0;e<30;e++)il[e*2+1]=5,il[e*2]=vl(e,5);ol=new nl(hl,dl,257,286,15);pl=new nl(il,
el,0,30,15);ql=new nl([],fl,0,19,7);Hl=!0}c.wc=new rl(c.ra,ol);c.nc=new rl(c.hb,pl);c.qd=new rl(c.ja,ql);c.oa=0;c.ia=0;xl(c);c=0}else c=Jl(b,-2);c===0&&(b=b.state,b.Sd=2*b.la,Kl(b.head),b.Sc=Vl[b.level].Ke,b.wd=Vl[b.level].ye,b.Cd=Vl[b.level].Ne,b.Ad=Vl[b.level].Je,b.v=0,b.va=0,b.D=0,b.sa=0,b.T=b.wa=2,b.lb=0,b.R=0);b=c}}else b=-2;if(b!==0)throw Error(bl[b]);a.header&&(b=this.M)&&b.state&&b.state.wrap===2&&(b.state.I=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=Vk(a.dictionary):
Zl.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.M;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.D)b=-2;else{b===1&&(a.J=Wk(a.J,f,g,0));l.wrap=0;g>=l.la&&(b===0&&(Kl(l.head),l.v=0,l.va=0,l.sa=0),c=new O.rb(l.la),O.ub(c,f,g-l.la,l.la,0),f=c,g=l.la);c=a.na;d=a.nb;e=a.input;a.na=g;a.nb=0;a.input=f;for(Pl(l);l.D>=3;){f=l.v;g=l.D-2;do l.R=(l.R<<l.Ma^l.window[f+3-1])&l.La,l.Ia[f&l.eb]=l.head[l.R],l.head[l.R]=f,f++;while(--g);
l.v=f;l.D=2;Pl(l)}l.v+=l.D;l.va=l.v;l.sa=l.D;l.D=0;l.T=l.wa=2;l.lb=0;a.nb=d;a.input=e;a.na=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(bl[b]);this.th=!0}}
$l.prototype.push=function(a,b){var c=this.M,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=Vk(a):Zl.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.nb=0;c.na=c.input.length;do{c.S===0&&(c.output=new O.rb(d),c.Gb=0,c.S=d);a=Xl(c,e);if(a!==1&&a!==0)return am(this,a),this.ended=!0,!1;if(c.S===0||c.na===0&&(e===4||e===2))if(this.options.to==="string"){var f=O.dd(c.output,c.Gb);b=f;f=f.length;if(f<65537&&(b.subarray&&Uk||!b.subarray))b=
String.fromCharCode.apply(null,O.dd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.dd(c.output,c.Gb),this.chunks.push(b)}while((c.na>0||c.S===0)&&a!==1);if(e===4)return(c=this.M)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=Jl(c,-2):(c.state=null,a=d===113?Jl(c,-3):0)):a=-2,am(this,a),this.ended=!0,a===0;e===2&&(am(this,0),c.S=0);return!0};
function am(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):O.ud(a.chunks));a.chunks=[];a.err=b;a.msg=a.M.msg}
function bm(a,b){b=b||{};b.gzip=!0;b=new $l(b);b.push(a,!0);if(b.err)throw b.msg||bl[b.err];return b.result}
;function cm(a){return a?(a=a.privateDoNotAccessOrElseSafeScriptWrappedValue)?Ib(a):null:null}
function dm(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?ob(a):null:null}
;function em(a){return ob(a===null?"null":a===void 0?"undefined":a)}
;function fm(a){this.name=a}
;var gm=new fm("rawColdConfigGroup");var hm=new fm("rawHotConfigGroup");function im(a){this.F=L(a)}
v(im,M);function jm(a){this.F=L(a)}
v(jm,M);jm.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new Dd(a,Cd):Fd||(Fd=new Dd(null,Cd));else if(a.constructor!==Dd)if(xd&&a!=null&&a instanceof Uint8Array)a instanceof Uint8Array||Array.isArray(a),a=a.length?new Dd(new Uint8Array(a),Cd):Fd||(Fd=new Dd(null,Cd));else throw Error();return tf(this,1,a)};var km=new fm("continuationCommand");var lm=new fm("webCommandMetadata");var mm=new fm("signalServiceEndpoint");var nm={Tf:"EMBEDDED_PLAYER_MODE_UNKNOWN",Qf:"EMBEDDED_PLAYER_MODE_DEFAULT",Sf:"EMBEDDED_PLAYER_MODE_PFP",Rf:"EMBEDDED_PLAYER_MODE_PFL"};var om=new fm("feedbackEndpoint");var je={Xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",hh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",ih:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",Ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
Vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
Yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DOCUMENT_PICTURE_IN_PICTURE_SUPPORTED",Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHORTS_NON_DEFAULT_ASPECT_RATIO"};var pm=new fm("shareEndpoint"),qm=new fm("shareEntityEndpoint"),rm=new fm("shareEntityServiceEndpoint"),sm=new fm("webPlayerShareEntityServiceEndpoint");var tm=new fm("playlistEditEndpoint");var um=new fm("modifyChannelNotificationPreferenceEndpoint");var wm=new fm("undoFeedbackEndpoint");var xm=new fm("unsubscribeEndpoint");var ym=new fm("subscribeEndpoint");function zm(){var a=Am;F("yt.ads.biscotti.getId_")||E("yt.ads.biscotti.getId_",a)}
function Bm(a){E("yt.ads.biscotti.lastId_",a)}
;function Cm(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var Dm=D.window,Em,Fm,Gm=(Dm==null?void 0:(Em=Dm.yt)==null?void 0:Em.config_)||(Dm==null?void 0:(Fm=Dm.ytcfg)==null?void 0:Fm.data_)||{};E("yt.config_",Gm);function Hm(){Cm(Gm,arguments)}
function R(a,b){return a in Gm?Gm[a]:b}
function Im(a){var b=Gm.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Jm=[];function Km(a){Jm.forEach(function(b){return b(a)})}
function Lm(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Mm(b)}}:a}
function Mm(a){var b=F("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Hm("ERRORS",b));Km(a)}
function Nm(a,b,c,d,e){var f=F("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Hm("ERRORS",f))}
;var Om=/^[\w.]*$/,Pm={q:!0,search_query:!0};function Qm(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=Rm(f[0]||""),h=Rm(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?$b(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,m=f[0],n=String(Qm);l.args=[{key:m,value:f[1],query:a,method:Sm===n?"unchanged":n}];Pm.hasOwnProperty(m)||Nm(l)}}return c}
var Sm=String(Qm);function Tm(a){var b=[];qg(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Tb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function Um(a){a.charAt(0)==="?"&&(a=a.substring(1));return Qm(a,"&")}
function Vm(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),Um(a.length>1?a[1]:a[0])):{}}
function Wm(a,b){return Xm(a,b||{},!0)}
function Xm(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Um(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return rc(a,e)+d}
function Ym(a){if(!b)var b=window.location.href;var c=a.match(ic)[1]||null,d=kc(a);c&&d?(a=a.match(ic),b=b.match(ic),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?kc(b)===d&&(Number(b.match(ic)[4]||null)||null)===(Number(a.match(ic)[4]||null)||null):!0;return a}
function Rm(a){return a&&a.match(Om)?a:fc(a)}
;function Zm(a){var b=$m;a=a===void 0?F("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Oj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ia){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?Gj:g;try{var h=g.history.length}catch(Ia){h=0}e.u_his=h;var k;e.u_h=(k=Gj.screen)==null?void 0:k.height;var l;e.u_w=(l=Gj.screen)==null?void 0:l.width;var m;e.u_ah=(m=Gj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=Gj.screen)==null?void 0:n.availWidth;var r;e.u_cd=(r=Gj.screen)==null?void 0:r.colorDepth}catch(Ia){}var t;h=b.h;try{var w=h.screenX;var x=h.screenY}catch(Ia){}try{var z=h.outerWidth;var G=h.outerHeight}catch(Ia){}try{var H=h.innerWidth;var S=h.innerHeight}catch(Ia){}try{var Z=h.screenLeft;var mb=h.screenTop}catch(Ia){}try{H=h.innerWidth,S=h.innerHeight}catch(Ia){}try{var Rb=h.screen.availWidth;var Wa=h.screen.availTop}catch(Ia){}w=[Z,mb,w,x,Rb,Wa,z,G,H,S];try{var Bb=(b.h.top||window).document,
Xa=Bb.compatMode=="CSS1Compat"?Bb.documentElement:Bb.body;var Na=(new pg(Xa.clientWidth,Xa.clientHeight)).round()}catch(Ia){Na=new pg(-12245933,-12245933)}Bb=Na;Na={};var Ja=Ja===void 0?D:Ja;Xa=new Uj;"SVGElement"in Ja&&"createElementNS"in Ja.document&&Xa.set(0);x=Lj();x["allow-top-navigation-by-user-activation"]&&Xa.set(1);x["allow-popups-to-escape-sandbox"]&&Xa.set(2);Ja.crypto&&Ja.crypto.subtle&&Xa.set(3);"TextDecoder"in Ja&&"TextEncoder"in Ja&&Xa.set(4);Ja=Vj(Xa);Na.bc=Ja;Na.bih=Bb.height;Na.biw=
Bb.width;Na.brdim=w.join();b=b.i;b=b.prerendering?3:(t={visible:1,hidden:2,prerender:3,preview:4,unloaded:5,"":0}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""])!=null?t:0;t=(Na.vis=b,Na.wgl=!!Gj.WebGLRenderingContext,Na);c=d.call(c,e,t);c.ca_type="image";a&&(c.bid=a);return c}
var $m=new function(){var a=window.document;this.h=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return Tm(Zm(a))});Ya();navigator.userAgent.indexOf(" (CrKey ");var an="XMLHttpRequest"in D?function(){return new XMLHttpRequest}:null;
function bn(){if(!an)return null;var a=an();return"open"in a?a:null}
function cn(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function dn(a,b){typeof a==="function"&&(a=Lm(a));return window.setTimeout(a,b)}
;var en="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(A(en),["client_dev_set_cookie"]);function T(a){a=fn(a);return typeof a==="string"&&a==="false"?!1:!!a}
function gn(a,b){a=fn(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function fn(a){return R("EXPERIMENT_FLAGS",{})[a]}
function hn(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=y(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});d=y(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var jn={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},kn="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(A(en)),ln=!1;function mn(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&Lm(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=bn();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;T("debug_forward_web_query_parameters")&&(a=nn(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=on(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){Nm(n)}}l.send(d);return l}
function on(a,b){b=b===void 0?{}:b;var c=Ym(a),d=R("INNERTUBE_CLIENT_NAME"),e=T("web_ajax_ignore_global_headers_if_set"),f;for(f in jn){var g=R(jn[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=R("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(kc(a)?!1:!0))){k=a;var l;if(l=T("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=kc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=lc(k)||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!kc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!kc(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&kc(a)||(b["X-YouTube-Ad-Signals"]=Tm(Zm()));return b}
function pn(a,b){b.method="POST";b.postParams||(b.postParams={});return qn(a,b)}
function qn(a,b){var c=b.format||"JSON";a=rn(a,b);var d=sn(a,b),e=!1,f=tn(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=cn(k),m=null,n=400<=k.status&&k.status<500,r=500<=k.status&&k.status<600;if(l||n||r)m=un(a,c,k,b.convertToSafeHtml);l&&(l=vn(c,k,m));m=m||{};n=b.context||D;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=dn(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||D,f))},d)}return f}
function rn(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Wm(a,b);return a}
function sn(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||kc(a)&&!b.withCredentials&&kc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=Um(e),Bg(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):qc(e));f=e||f&&!ug(f);!ln&&f&&b.method!=="POST"&&(ln=!0,Mm(Error("AJAX request with postData should use POST")));return e}
function un(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Nm(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?wn(a):null)e={},Tb(a.getElementsByTagName("*"),function(g){e[g.tagName]=xn(g)})}d&&yn(e);
return e}
function yn(a){if(Oa(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=a[b];var d=lb();c=d?d.createHTML(c):c;a[b]=new Fb(c)}else yn(a[b])}}
function vn(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function wn(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function xn(a){var b="";Tb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function nn(a){var b=window.location.search,c=kc(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Ym(a)&&(c=document.location.hostname);var d=lc(a);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Um(b),f={};Tb(kn,function(g){e[g]&&(f[g]=e[g])});
return Xm(a,f||{},!1)}
var tn=mn;var zn=[{Tc:function(a){return"Cannot read property '"+a.key+"'"},
zc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Tc:function(a){return"Cannot call '"+a.key+"'"},
zc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Tc:function(a){return a.key+" is not defined"},
zc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Bn={Za:[],Ua:[{callback:An,weight:500}]};function An(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Cn(){this.Ua=[];this.Za=[]}
var Dn;function En(){if(!Dn){var a=Dn=new Cn;a.Za.length=0;a.Ua.length=0;Bn.Za&&a.Za.push.apply(a.Za,Bn.Za);Bn.Ua&&a.Ua.push.apply(a.Ua,Bn.Ua)}return Dn}
;var Fn=new N;function Gn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Hn(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=Hn(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=Hn(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function Hn(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function In(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Jn(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=Gn(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Jn(f+".ve",g,h,k):0;d+=f;d+=Jn(e,a[e],b,c);if(d>500)break}}else c[b]=Kn(a),d+=c[b].length;else c[b]=Kn(a),d+=c[b].length;return d}
function Jn(a,b,c,d){c+="."+a;a=Kn(b);d[c]=a;return c.length+a.length}
function Kn(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Ln(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Mn(){if(!D.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return D.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":D.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":D.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":D.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Nn(){this.Nd=!0}
function On(){Nn.instance||(Nn.instance=new Nn);return Nn.instance}
function Pn(a,b){a={};var c=[];"USER_SESSION_ID"in Gm&&c.push({key:"u",value:R("USER_SESSION_ID")});if(c=ig(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Gm||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in Gm&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID"));return a}
;var Qn={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Rn(a,b,c,d,e){fg.set(""+a,b,{Xb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function Sn(a){return fg.get(""+a,void 0)}
function Tn(a,b,c){fg.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function Un(){if(T("embeds_web_enable_cookie_detection_fix")){if(!D.navigator.cookieEnabled)return!1}else if(!fg.isEnabled())return!1;if(fg.h.cookie)return!0;T("embeds_web_enable_cookie_detection_fix")?fg.set("TESTCOOKIESENABLED","1",{Xb:60,cf:"none",secure:!0}):fg.set("TESTCOOKIESENABLED","1",{Xb:60});if(fg.get("TESTCOOKIESENABLED")!=="1")return!1;fg.remove("TESTCOOKIESENABLED");return!0}
;var Vn=F("ytglobal.prefsUserPrefsPrefs_")||{};E("ytglobal.prefsUserPrefsPrefs_",Vn);function Wn(){this.h=R("ALT_PREF_COOKIE_NAME","PREF");this.i=R("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Sn(this.h);a&&this.parse(a)}
var Xn;function Yn(){Xn||(Xn=new Wn);return Xn}
p=Wn.prototype;p.get=function(a,b){Zn(a);$n(a);a=Vn[a]!==void 0?Vn[a].toString():null;return a!=null?a:b?b:""};
p.set=function(a,b){Zn(a);$n(a);if(b==null)throw Error("ExpectedNotNull");Vn[a]=b.toString()};
function ao(a){return!!((bo("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
p.remove=function(a){Zn(a);$n(a);delete Vn[a]};
p.clear=function(){for(var a in Vn)delete Vn[a]};
function $n(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Zn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function bo(a){a=Vn[a]!==void 0?Vn[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
p.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Vn[d]=c.toString())}};var co={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},eo={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function fo(){var a=D.navigator;return a?a.connection:void 0}
function go(){var a=fo();if(a){var b=co[a.type||"unknown"]||"CONN_UNKNOWN";a=co[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function ho(){var a=fo();if(a!=null&&a.effectiveType)return eo.hasOwnProperty(a.effectiveType)?eo[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function U(a){var b=C.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(A(b));Object.setPrototypeOf(this,this.constructor.prototype)}
v(U,Error);function io(){try{return jo(),!0}catch(a){return!1}}
function jo(a){if(R("DATASYNC_ID")!==void 0)return R("DATASYNC_ID");throw new U("Datasync ID not set",a===void 0?"unknown":a);}
;function ko(){}
function lo(a,b){return Tj.Sa(a,0,b)}
ko.prototype.pa=function(a,b){return this.Sa(a,1,b)};
ko.prototype.Mb=function(a){var b=F("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var mo=gn("web_emulated_idle_callback_delay",300),no=1E3/60-3,oo=[8,5,4,3,2,1,0];
function po(a){a=a===void 0?{}:a;I.call(this);this.i=[];this.j={};this.Z=this.h=0;this.Y=this.u=!1;this.P=[];this.U=this.ha=!1;for(var b=y(oo),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.Ic=a.timeout||1;this.G=no;this.A=0;this.xa=this.Pe.bind(this);this.Lb=this.wf.bind(this);this.Qa=this.Yd.bind(this);this.Ra=this.ze.bind(this);this.fb=this.We.bind(this);this.Fa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.ma=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.xa)}
v(po,I);p=po.prototype;p.Mb=function(a){var b=Ya();qo(this,a);a=Ya()-b;this.u||(this.G-=a)};
p.Sa=function(a,b,c){++this.Z;if(b===10)return this.Mb(a),this.Z;var d=this.Z;this.j[d]=a;this.u&&!c?this.P.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.u||(this.h!==0&&ro(this)!==this.A&&this.stop(),this.start()));return d};
p.qa=function(a){delete this.j[a]};
function so(a){a.P.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
p.isHidden=function(){return!!document.hidden||!1};
function to(a){return!a.isHidden()&&a.ma}
function ro(a){if(a.i[8].length){if(a.U)return 4;if(to(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?to(a)?3:2:1;return 0}
p.Ha=function(a){var b=F("yt.logging.errors.log");b&&b(a)};
function qo(a,b){try{b()}catch(c){a.Ha(c)}}
function uo(a){for(var b=y(oo),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
p.ze=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ha=!0;vo(this,b);this.ha=!1};
p.wf=function(){vo(this)};
p.Yd=function(){wo(this)};
p.We=function(a){this.U=!0;var b=ro(this);b===4&&b!==this.A&&(this.stop(),this.start());vo(this,void 0,a);this.U=!1};
p.Pe=function(){this.isHidden()||wo(this);this.h&&(this.stop(),this.start())};
function wo(a){a.stop();a.u=!0;for(var b=Ya(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&qo(a,e)}xo(a);a.u=!1;uo(a)&&a.start();b=Ya()-b;a.G-=b}
function xo(a){for(var b=0,c=a.P.length;b<c;b++){var d=a.P[b];a.i[d.priority].push(d.id)}a.P.length=0}
function vo(a,b,c){a.U&&a.A===4&&a.h||a.stop();a.u=!0;b=Ya()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ha(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&qo(a,f);d=a.ha?0:1;d=a.o>d?a.o:d;if(!(Ya()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&qo(a,c)}while(c&&Ya()<b)}a.u=!1;xo(a);a.G=no;uo(a)&&a.start()}
p.start=function(){this.Y=!1;if(this.h===0)switch(this.A=ro(this),this.A){case 1:var a=this.Ra;this.h=this.Fa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,mo);break;case 2:this.h=window.setTimeout(this.Lb,this.Ic);break;case 3:this.h=window.requestAnimationFrame(this.fb);break;case 4:this.h=window.setTimeout(this.Qa,0)}};
p.pause=function(){this.stop();this.Y=!0};
p.stop=function(){if(this.h){switch(this.A){case 1:var a=this.h;this.Fa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
p.ba=function(){so(this);this.stop();this.ma&&document.removeEventListener("visibilitychange",this.xa);I.prototype.ba.call(this)};var yo=F("yt.scheduler.instance.timerIdMap_")||{},zo=gn("kevlar_tuner_scheduler_soft_state_timer_ms",800),Ao=0,Bo=0;function Co(){var a=F("ytglobal.schedulerInstanceInstance_");if(!a||a.ea)a=new po(R("scheduler")||{}),E("ytglobal.schedulerInstanceInstance_",a);return a}
function Do(){Eo();var a=F("ytglobal.schedulerInstanceInstance_");a&&(xc(a),E("ytglobal.schedulerInstanceInstance_",null))}
function Eo(){so(Co());for(var a in yo)yo.hasOwnProperty(a)&&delete yo[Number(a)]}
function Fo(a,b,c){if(!c)return c=c===void 0,-Co().Sa(a,b,c);var d=window.setTimeout(function(){var e=Co().Sa(a,b);yo[d]=e},c);
return d}
function Go(a){Co().Mb(a)}
function Ho(a){var b=Co();if(a<0)b.qa(-a);else{var c=yo[a];c?(b.qa(c),delete yo[a]):window.clearTimeout(a)}}
function Io(){Jo()}
function Jo(){window.clearTimeout(Ao);Co().start()}
function Ko(){Co().pause();window.clearTimeout(Ao);Ao=window.setTimeout(Io,zo)}
function Lo(){window.clearTimeout(Bo);Bo=window.setTimeout(function(){Mo(0)},zo)}
function Mo(a){Lo();var b=Co();b.o=a;b.start()}
function No(a){Lo();var b=Co();b.o>a&&(b.o=a,b.start())}
function Oo(){window.clearTimeout(Bo);var a=Co();a.o=0;a.start()}
;function Po(){ko.apply(this,arguments)}
v(Po,ko);function Qo(){Po.instance||(Po.instance=new Po);return Po.instance}
Po.prototype.Sa=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=F("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):dn(a,c||0)};
Po.prototype.qa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=F("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Po.prototype.start=function(){var a=F("yt.scheduler.instance.start");a&&a()};
Po.prototype.pause=function(){var a=F("yt.scheduler.instance.pause");a&&a()};
var Tj=Qo();
T("web_scheduler_auto_init")&&!F("yt.scheduler.initialized")&&(E("yt.scheduler.instance.dispose",Do),E("yt.scheduler.instance.addJob",Fo),E("yt.scheduler.instance.addImmediateJob",Go),E("yt.scheduler.instance.cancelJob",Ho),E("yt.scheduler.instance.cancelAllJobs",Eo),E("yt.scheduler.instance.start",Jo),E("yt.scheduler.instance.pause",Ko),E("yt.scheduler.instance.setPriorityThreshold",Mo),E("yt.scheduler.instance.enablePriorityThreshold",No),E("yt.scheduler.instance.clearPriorityThreshold",Oo),E("yt.scheduler.initialized",
!0));function Ro(a){var b=new uk;this.h=(a=b.isAvailable()?a?new vk(b,a):b:null)?new pk(a):null;this.i=document.domain||window.location.hostname}
Ro.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Pi).serialize(b))}catch(f){return}else e=escape(b);Rn(a,e,c,this.i)};
Ro.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Sn(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ro.prototype.remove=function(a){this.h&&this.h.remove(a);Tn(a,"/",this.i)};var So=function(){var a;return function(){a||(a=new Ro("ytidb"));return a}}();
function To(){var a;return(a=So())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Uo=[],Vo,Wo=!1;function Xo(){var a={};for(Vo=new Yo(a.handleError===void 0?Zo:a.handleError,a.logEvent===void 0?$o:a.logEvent);Uo.length>0;)switch(a=Uo.shift(),a.type){case "ERROR":Vo.Ha(a.payload);break;case "EVENT":Vo.logEvent(a.eventType,a.payload)}}
function ap(a){Wo||(Vo?Vo.Ha(a):(Uo.push({type:"ERROR",payload:a}),Uo.length>10&&Uo.shift()))}
function bp(a,b){Wo||(Vo?Vo.logEvent(a,b):(Uo.push({type:"EVENT",eventType:a,payload:b}),Uo.length>10&&Uo.shift()))}
;function cp(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function dp(a){return a.substr(0,a.indexOf(":"))||a}
;var ep=od||pd;function fp(a){var b=Yc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var gp={},hp=(gp.AUTH_INVALID="No user identifier specified.",gp.EXPLICIT_ABORT="Transaction was explicitly aborted.",gp.IDB_NOT_SUPPORTED="IndexedDB is not supported.",gp.MISSING_INDEX="Index not created.",gp.MISSING_OBJECT_STORES="Object stores not created.",gp.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",gp.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",gp.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
gp.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",gp.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",gp.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",gp.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",gp),ip={},jp=(ip.AUTH_INVALID="ERROR",ip.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",ip.EXPLICIT_ABORT="IGNORED",ip.IDB_NOT_SUPPORTED="ERROR",ip.MISSING_INDEX=
"WARNING",ip.MISSING_OBJECT_STORES="ERROR",ip.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",ip.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",ip.QUOTA_EXCEEDED="WARNING",ip.QUOTA_MAYBE_EXCEEDED="WARNING",ip.UNKNOWN_ABORT="WARNING",ip.INCOMPATIBLE_DB_VERSION="WARNING",ip),kp={},lp=(kp.AUTH_INVALID=!1,kp.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,kp.EXPLICIT_ABORT=!1,kp.IDB_NOT_SUPPORTED=!1,kp.MISSING_INDEX=!1,kp.MISSING_OBJECT_STORES=!1,kp.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,kp.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,kp.QUOTA_EXCEEDED=!1,kp.QUOTA_MAYBE_EXCEEDED=!0,kp.UNKNOWN_ABORT=!0,kp.INCOMPATIBLE_DB_VERSION=!1,kp);function mp(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?hp[a]:c;d=d===void 0?jp[a]:d;e=e===void 0?lp[a]:e;U.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,mp.prototype)}
v(mp,U);function np(a,b){mp.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},hp.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,np.prototype)}
v(np,mp);function op(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,op.prototype)}
v(op,Error);var pp=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function qp(a,b,c,d){b=dp(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof mp)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new mp("QUOTA_EXCEEDED",a);if(qd&&e.name==="UnknownError")return new mp("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof op)return new mp("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&pp.some(function(f){return e.message.includes(f)}))return new mp("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new mp("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Ed:e.name})];e.level="WARNING";return e}
function rp(a,b,c){var d=To();return new mp("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function sp(a){if(!a)throw Error();throw a;}
function tp(a){return a}
function up(a){this.h=a}
function vp(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=y(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=y(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
vp.all=function(a){return new vp(new up(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={Bb:0};f.Bb<a.length;f={Bb:f.Bb},++f.Bb)vp.resolve(a[f.Bb]).then(function(g){return function(h){d[g.Bb]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
vp.resolve=function(a){return new vp(new up(function(b,c){a instanceof vp?a.then(b,c):b(a)}))};
vp.reject=function(a){return new vp(new up(function(b,c){c(a)}))};
vp.prototype.then=function(a,b){var c=this,d=a!=null?a:tp,e=b!=null?b:sp;return new vp(new up(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){wp(c,c,d,f,g)}),c.i.push(function(){xp(c,c,e,f,g)})):c.state.status==="FULFILLED"?wp(c,c,d,f,g):c.state.status==="REJECTED"&&xp(c,c,e,f,g)}))};
vp.prototype.catch=function(a){return this.then(void 0,a)};
function wp(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof vp?yp(a,b,f,d,e):d(f)}catch(g){e(g)}}
function xp(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof vp?yp(a,b,f,d,e):d(f)}catch(g){e(g)}}
function yp(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof vp?yp(a,b,f,d,e):d(f)},function(f){e(f)})}
;function zp(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Ap(a){return new Promise(function(b,c){zp(a,b,c)})}
function Bp(a){return new vp(new up(function(b,c){zp(a,b,c)}))}
;function Cp(a,b){return new vp(new up(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Dp=window,V=Dp.ytcsi&&Dp.ytcsi.now?Dp.ytcsi.now:Dp.performance&&Dp.performance.timing&&Dp.performance.now&&Dp.performance.timing.navigationStart?function(){return Dp.performance.timing.navigationStart+Dp.performance.now()}:function(){return(new Date).getTime()};function Ep(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(V());this.i=!1}
p=Ep.prototype;p.add=function(a,b,c){return Fp(this,[a],{mode:"readwrite",ka:!0},function(d){return d.objectStore(a).add(b,c)})};
p.clear=function(a){return Fp(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
p.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
p.count=function(a,b){return Fp(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).count(b)})};
function Gp(a,b,c){a=a.h.createObjectStore(b,c);return new Hp(a)}
p.delete=function(a,b){return Fp(this,[a],{mode:"readwrite",ka:!0},function(c){return c.objectStore(a).delete(b)})};
p.get=function(a,b){return Fp(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).get(b)})};
function Ip(a,b,c){return Fp(a,[b],{mode:"readwrite",ka:!0},function(d){d=d.objectStore(b);return Bp(d.h.put(c,void 0))})}
p.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Fp(a,b,c,d){var e,f,g,h,k,l,m,n,r,t,w,x;return B(function(z){switch(z.h){case 1:var G={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){z.B(4);break}g++;k=Math.round(V());va(z,5);l=a.h.transaction(b,e.mode);G=z.yield;var H=new Jp(l);H=Kp(H,d);return G.call(z,H,7);case 7:return m=z.i,n=Math.round(V()),Lp(a,k,n,g,void 0,b.join(),e),z.return(m);case 5:r=xa(z);t=Math.round(V());w=qp(r,
a.h.name,b.join(),a.h.version);if((x=w instanceof mp&&!w.h)||g>=f)Lp(a,k,t,g,w,b.join(),e),h=w;z.B(2);break;case 4:return z.return(Promise.reject(h))}})}
function Lp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof mp&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&bp("QUOTA_EXCEEDED",{dbName:dp(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof mp&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),bp("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Mp(a,!1,d,f,b,g.tag),ap(e)):Mp(a,!0,d,f,b,g.tag)}
function Mp(a,b,c,d,e,f){bp("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
p.getName=function(){return this.h.name};
function Hp(a){this.h=a}
p=Hp.prototype;p.add=function(a,b){return Bp(this.h.add(a,b))};
p.autoIncrement=function(){return this.h.autoIncrement};
p.clear=function(){return Bp(this.h.clear()).then(function(){})};
function Np(a,b,c){a.h.createIndex(b,c,{unique:!1})}
p.count=function(a){return Bp(this.h.count(a))};
function Op(a,b){return Pp(a,{query:b},function(c){return c.delete().then(function(){return Qp(c)})}).then(function(){})}
p.delete=function(a){return a instanceof IDBKeyRange?Op(this,a):Bp(this.h.delete(a))};
p.get=function(a){return Bp(this.h.get(a))};
p.index=function(a){try{return new Rp(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new op(a,this.h.name);throw b;}};
p.getName=function(){return this.h.name};
p.keyPath=function(){return this.h.keyPath};
function Pp(a,b,c){a=a.h.openCursor(b.query,b.direction);return Sp(a).then(function(d){return Cp(d,c)})}
function Jp(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=mp;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Kp(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return y(d).next().value})}
Jp.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new mp("EXPLICIT_ABORT");};
Jp.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Hp(a),this.i.set(a,b));return b};
function Rp(a){this.h=a}
p=Rp.prototype;p.count=function(a){return Bp(this.h.count(a))};
p.delete=function(a){return Tp(this,{query:a},function(b){return b.delete().then(function(){return Qp(b)})})};
p.get=function(a){return Bp(this.h.get(a))};
p.keyPath=function(){return this.h.keyPath};
p.unique=function(){return this.h.unique};
function Tp(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return Sp(a).then(function(d){return Cp(d,c)})}
function Up(a,b){this.request=a;this.cursor=b}
function Sp(a){return Bp(a).then(function(b){return b?new Up(a,b):null})}
function Qp(a){a.cursor.continue(void 0);return Sp(a.request)}
Up.prototype.delete=function(){return Bp(this.cursor.delete()).then(function(){})};
Up.prototype.getValue=function(){return this.cursor.value};
Up.prototype.update=function(a){return Bp(this.cursor.update(a))};function Vp(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Ep(g.result,{closed:n}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.be,k=c.blocking,l=c.tf,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&bp("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:dp(a)});var w=f(),x=new Jp(g.transaction);
m&&m(w,function(z){return t.oldVersion<z&&t.newVersion>=z},x);
x.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){bp("IDB_UNEXPECTEDLY_CLOSED",{dbName:dp(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Wp(a,b,c){c=c===void 0?{}:c;return Vp(a,b,c)}
function Xp(a,b){b=b===void 0?{}:b;var c,d,e,f;return B(function(g){if(g.h==1)return va(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.be)&&c.addEventListener("blocked",function(){e()}),g.yield(Ap(c),4);
if(g.h!=2)return wa(g,0);f=xa(g);throw qp(f,a,"",-1);})}
;function Yp(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}
Yp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return Wp(a,b,c)};
Yp.prototype.delete=function(a){a=a===void 0?{}:a;return Xp(this.name,a)};
function Zp(a,b){return new mp("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function $p(a,b){if(!b)throw rp("openWithToken",dp(a.name));return a.open()}
Yp.prototype.open=function(){function a(){var f,g,h,k,l,m,n,r,t,w;return B(function(x){switch(x.h){case 1:return g=(f=Error().stack)!=null?f:"",va(x,2),x.yield(c.i(c.name,c.options.version,e),4);case 4:for(var z=h=x.i,G=c.options,H=[],S=y(Object.keys(G.Hb)),Z=S.next();!Z.done;Z=S.next()){Z=Z.value;var mb=G.Hb[Z],Rb=mb.Xe===void 0?Number.MAX_VALUE:mb.Xe;!(z.h.version>=mb.Ob)||z.h.version>=Rb||z.h.objectStoreNames.contains(Z)||H.push(Z)}k=H;if(k.length===0){x.B(5);break}l=Object.keys(c.options.Hb);
m=h.objectStoreNames();if(c.u<gn("ytidb_reopen_db_retries",0))return c.u++,h.close(),ap(new mp("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());if(!(c.o<gn("ytidb_remake_db_retries",1))){x.B(6);break}c.o++;return x.yield(c.delete(),7);case 7:return ap(new mp("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());case 6:throw new np(m,l);case 5:return x.return(h);case 2:n=xa(x);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){x.B(8);break}return x.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=x.i;t=r.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw r.close(),c.j=!1,Zp(c,t);return x.return(r);case 8:throw b(),n instanceof
Error&&!T("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),qp(n,c.name,"",(w=c.options.version)!=null?w:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw Zp(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,tf:b,upgrade:this.options.upgrade};return this.h=d=a()};var aq=new Yp("YtIdbMeta",{Hb:{databases:{Ob:1}},upgrade:function(a,b){b(1)&&Gp(a,"databases",{keyPath:"actualName"})}});
function bq(a,b){var c;return B(function(d){if(d.h==1)return d.yield($p(aq,b),2);c=d.i;return d.return(Fp(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Bp(f.h.put(a,void 0)).then(function(){})})}))})}
function cq(a,b){var c;return B(function(d){if(d.h==1)return a?d.yield($p(aq,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function dq(a,b){var c,d;return B(function(e){return e.h==1?(c=[],e.yield($p(aq,b),2)):e.h!=3?(d=e.i,e.yield(Fp(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return Pp(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return Qp(g)})}),3)):e.return(c)})}
function eq(a){return dq(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function fq(a,b,c){return dq(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function gq(a){var b,c;return B(function(d){if(d.h==1)return b=jo("YtIdbMeta hasAnyMeta other"),d.yield(dq(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var hq,iq=new function(){}(new function(){});
function jq(){var a,b,c,d;return B(function(e){switch(e.h){case 1:a=To();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=ep)f=/WebKit\/([0-9]+)/.exec(Yc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Yc()),f=!(f&&parseInt(f[1],10)>=602));if(f||kd)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
va(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(bq(d,iq),4);case 4:return e.yield(cq("yt-idb-test-do-not-use",iq),5);case 5:return e.return(!0);case 2:return xa(e),e.return(!1)}})}
function kq(){if(hq!==void 0)return hq;Wo=!0;return hq=jq().then(function(a){Wo=!1;var b;if((b=So())!=null&&b.h){var c;b={hasSucceededOnce:((c=To())==null?void 0:c.hasSucceededOnce)||a};var d;(d=So())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function lq(){return F("ytglobal.idbToken_")||void 0}
function mq(){var a=lq();return a?Promise.resolve(a):kq().then(function(b){(b=b?iq:void 0)&&E("ytglobal.idbToken_",b);return b})}
;var nq=0;function oq(a,b){nq||(nq=Tj.pa(function(){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:return h.yield(mq(),2);case 2:c=h.i;if(!c)return h.return();d=!0;va(h,3);return h.yield(fq(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.B(6);break}f=e[0];return h.yield(Xp(f.actualName),7);case 7:return h.yield(cq(f.actualName,c),6);case 6:wa(h,4);break;case 3:g=xa(h),ap(g),d=!1;case 4:Tj.qa(nq),nq=0,d&&oq(a,b),h.h=0}})}))}
function pq(){var a;return B(function(b){return b.h==1?b.yield(mq(),2):(a=b.i)?b.return(gq(a)):b.return(!1)})}
new vj;function qq(a){if(!io())throw a=new mp("AUTH_INVALID",{dbName:a}),ap(a),a;var b=jo();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function rq(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(mq(),2);case 2:g=m.i;if(!g)throw h=rp("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),ap(h),h;cp(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:qq(a);va(m,3);return m.yield(bq(k,g),5);case 5:return m.yield(Wp(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=xa(m),va(m,7),m.yield(cq(k.actualName,
g),9);case 9:wa(m,8);break;case 7:xa(m);case 8:throw l;}})}
function sq(a,b,c){c=c===void 0?{}:c;return rq(a,b,!1,c)}
function tq(a,b,c){c=c===void 0?{}:c;return rq(a,b,!0,c)}
function uq(a,b){b=b===void 0?{}:b;var c,d;return B(function(e){if(e.h==1)return e.yield(mq(),2);if(e.h!=3){c=e.i;if(!c)return e.return();cp(a);d=qq(a);return e.yield(Xp(d.actualName,b),3)}return e.yield(cq(d.actualName,c),0)})}
function vq(a,b,c){a=a.map(function(d){return B(function(e){return e.h==1?e.yield(Xp(d.actualName,b),2):e.yield(cq(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function wq(){var a=a===void 0?{}:a;var b,c;return B(function(d){if(d.h==1)return d.yield(mq(),2);if(d.h!=3){b=d.i;if(!b)return d.return();cp("LogsDatabaseV2");return d.yield(eq(b),3)}c=d.i;return d.yield(vq(c,a,b),0)})}
function xq(a,b){b=b===void 0?{}:b;var c;return B(function(d){if(d.h==1)return d.yield(mq(),2);if(d.h!=3){c=d.i;if(!c)return d.return();cp(a);return d.yield(Xp(a,b),3)}return d.yield(cq(a,c),0)})}
;function yq(a,b){Yp.call(this,a,b);this.options=b;cp(a)}
v(yq,Yp);function zq(a,b){var c;return function(){c||(c=new yq(a,b));return c}}
yq.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?tq:sq)(a,b,Object.assign({},c))};
yq.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?xq:uq)(this.name,a)};
function Aq(a,b){return zq(a,b)}
;var Bq={},Cq=Aq("ytGcfConfig",{Hb:(Bq.coldConfigStore={Ob:1},Bq.hotConfigStore={Ob:1},Bq),shared:!1,upgrade:function(a,b){b(1)&&(Np(Gp(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Np(Gp(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Dq(a){return $p(Cq(),a)}
function Eq(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:V()},g.yield(Dq(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Ip(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Fq(a,b,c,d){var e,f,g;return B(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:V()},h.yield(Dq(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Ip(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Gq(a){var b,c;return B(function(d){return d.h==1?d.yield(Dq(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Fp(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return Tp(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Hq(a){var b,c;return B(function(d){return d.h==1?d.yield(Dq(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Fp(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return Tp(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Iq(){I.call(this);this.i=[];this.h=[];var a=F("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(A(a)),this.h=a):(this.h=[],E("yt.gcf.config.hotUpdateCallbacks",this.h))}
v(Iq,I);Iq.prototype.ba=function(){for(var a=y(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;I.prototype.ba.call(this)};function Jq(){this.h=0;this.i=new Iq}
function Kq(){var a;return(a=F("yt.gcf.config.hotConfigGroup"))!=null?a:R("RAW_HOT_CONFIG_GROUP")}
function Lq(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:if(!T("start_client_gcf")){g.B(0);break}c&&(a.j=c,E("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=lq();if(!d){g.B(3);break}if(c){g.B(4);break}return g.yield(Hq(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(Eq(c,b,d),3);case 3:if(c)for(var h=c,k=y(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function Mq(a,b,c){var d,e,f,g;return B(function(h){if(h.h==1){if(!T("start_client_gcf"))return h.B(0);a.coldHashData=b;E("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=lq())?c?h.B(4):h.yield(Gq(d),5):h.B(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.B(0);g=c.configData;return h.yield(Fq(c,b,g,d),0)})}
function Nq(){if(!Jq.instance){var a=new Jq;Jq.instance=a}a=Jq.instance;var b=V()-a.h;if(!(a.h!==0&&b<gn("send_config_hash_timer"))){b=F("yt.gcf.config.coldConfigData");var c=F("yt.gcf.config.hotHashData"),d=F("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=V());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
Jq.prototype.o=function(a){this.hotHashData=a;E("yt.gcf.config.hotHashData",this.hotHashData||null)};function Oq(){return"INNERTUBE_API_KEY"in Gm&&"INNERTUBE_API_VERSION"in Gm}
function Pq(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),Ae:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),yd:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Fh:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ce:R("INNERTUBE_CONTEXT_HL"),Be:R("INNERTUBE_CONTEXT_GL"),De:R("INNERTUBE_HOST_OVERRIDE")||"",Ee:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Gh:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Qq(a){var b={client:{hl:a.Ce,gl:a.Be,clientName:a.yd,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ae}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=D.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=hn();c.length>0&&(b.request={internalExperimentFlags:c});c=a.yd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=Mn()}(d=F("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(T("web_log_memory_total_kbytes")&&((e=D.navigator)==null?0:e.deviceMemory)){var f;e=(f=D.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=go())&&b&&(b.client.connectionType=a);T("web_log_effective_connection_type")&&
(a=ho())&&b&&(b.client.effectiveConnectionType=a);T("start_client_gcf")&&(e=Nq())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));R("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=R("INNERTUBE_CONTEXT");var g;if(T("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=y(Object.entries(Um(R("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=y(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function Rq(a,b,c){c=c===void 0?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||R("AUTHORIZATION");b||(a?b="Bearer "+F("gapi.auth.getToken")().uh:(a=Pn(On()),T("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var Sq=typeof TextEncoder!=="undefined"?new TextEncoder:null,Tq=Sq?function(a){return Sq.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var Uq={next:"wn_s",browse:"br_s",search:"sr_s",reel:"r_wrs",player:"ps_s"},Vq={next:"wn_r",browse:"br_r",search:"sr_r",reel:"r_wrr",player:"ps_r"};function Wq(a,b){this.version=a;this.args=b}
Wq.prototype.serialize=function(){return{version:this.version,args:this.args}};function Xq(a,b){this.topic=a;this.h=b}
Xq.prototype.toString=function(){return this.topic};var Yq=F("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.fc;N.prototype.publish=N.prototype.sb;N.prototype.clear=N.prototype.clear;E("ytPubsub2Pubsub2Instance",Yq);var Zq=F("ytPubsub2Pubsub2SubscribedKeys")||{};E("ytPubsub2Pubsub2SubscribedKeys",Zq);var $q=F("ytPubsub2Pubsub2TopicToKeys")||{};E("ytPubsub2Pubsub2TopicToKeys",$q);var ar=F("ytPubsub2Pubsub2IsAsync")||{};E("ytPubsub2Pubsub2IsAsync",ar);
E("ytPubsub2Pubsub2SkipSubKey",null);function br(a,b){var c=cr();c&&c.publish.call(c,a.toString(),a,b)}
function dr(a){var b=er,c=cr();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=F("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Zq[d])try{if(f&&b instanceof Xq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Qd){var l=new h;h.Qd=l.version}var m=h.Qd}catch(n){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
Zb(k.args))}catch(n){throw n.message="yt.pubsub2.Data.deserialize(): "+n.message,n;}}catch(n){throw n.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+n.message,n;}a.call(window,f)}catch(n){Mm(n)}},ar[b.toString()]?F("yt.scheduler.instance")?Tj.pa(g):dn(g,0):g())});
Zq[d]=!0;$q[b.toString()]||($q[b.toString()]=[]);$q[b.toString()].push(d);return d}
function fr(){var a=gr,b=dr(function(c){a.apply(void 0,arguments);hr(b)});
return b}
function hr(a){var b=cr();b&&(typeof a==="number"&&(a=[a]),Tb(a,function(c){b.unsubscribeByKey(c);delete Zq[c]}))}
function cr(){return F("ytPubsub2Pubsub2Instance")}
;function ir(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&br("meta_logging_csi_event",{timerName:a,bi:b})}
;var jr=void 0,kr=void 0;function lr(){kr||(kr=dm(R("WORKER_SERIALIZATION_URL")));return kr||void 0}
function mr(){var a=lr();jr||a===void 0||(jr=new Worker(pb(a),void 0));return jr}
;var nr=gn("max_body_size_to_compress",5E5),or=gn("min_body_size_to_compress",500),pr=!0,qr=0,rr=0,sr=gn("compression_performance_threshold_lr",250),tr=gn("slow_compressions_before_abandon_count",4),ur=!1,vr=new Map,wr=1,xr=!0;function yr(){if(typeof Worker==="function"&&lr()&&!ur){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=vr.get(c.key);d&&(zr(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),vr.delete(c.key))}},b=mr();
b&&(b.addEventListener("message",a),b.onerror=function(){vr.clear()},ur=!0)}}
function Ar(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:V(),ticks:{},infos:{}};if(pr)try{var g=Br(b);if(g!=null&&(g>nr||g<or))d(a,c);else{if(T("gzip_gel_with_worker")&&(T("initial_gzip_use_main_thread")&&!xr||!T("initial_gzip_use_main_thread"))){ur||yr();var h=mr();if(h&&!e){vr.set(wr,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:wr});wr++;return}}var k=bm(Tq(b));zr(k,f,a,c,d)}}catch(l){Nm(l),d(a,c)}else d(a,c)}
function zr(a,b,c,d,e){xr=!1;var f=V();b.ticks.gelc=f;rr++;T("disable_compression_due_to_performance_degredation")&&f-b.startTime>=sr&&(qr++,T("abandon_compression_after_N_slow_zips")?rr===gn("compression_disable_point")&&qr>tr&&(pr=!1):pr=!1);Cr(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Dr(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=V(),e={startTime:d,ticks:{},infos:{}},f=b?F("yt.logging.gzipForFetch",!1):!0;if(pr&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=Br(g);if(h!=null&&(h>nr||h<or))return a;c=b?{level:1}:void 0;f=bm(Tq(g),c);var k=V();e.ticks.gelc=k;if(b){rr++;if((T("disable_compression_due_to_performance_degredation")||T("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=sr)if(qr++,T("abandon_compression_after_N_slow_zips")||T("abandon_compression_after_N_slow_zips_lr")){b=qr/rr;var l=tr/gn("compression_disable_point");rr>0&&rr%gn("compression_disable_point")===0&&b>=l&&(pr=!1)}else pr=!1;Cr(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return Nm(m),a}}else return a}
function Br(a){try{return(new Blob(a.split(""))).size}catch(b){return Nm(b),null}}
function Cr(a){T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||ir("gel_compression",a,{sampleRate:.1})}
;function Er(a){a=Object.assign({},a);delete a.Authorization;var b=ig();if(b){var c=new Xj;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=td(c.digest(),3)}return a}
;var Fr;function Gr(){Fr||(Fr=new Ro("yt.innertube"));return Fr}
function Hr(a,b,c,d){if(d)return null;d=Gr().get("nextId",!0)||1;var e=Gr().get("requests",!0)||{};e[d]={method:a,request:b,authState:Er(c),requestTime:Math.round(V())};Gr().set("nextId",d+1,86400,!0);Gr().set("requests",e,86400,!0);return d}
function Ir(a){var b=Gr().get("requests",!0)||{};delete b[a];Gr().set("requests",b,86400,!0)}
function Jr(a){var b=Gr().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(V())-d.requestTime<6E4)){var e=d.authState,f=Er(Rq(!1));xg(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(V())),Kr(a,d.method,e,{}));delete b[c]}}Gr().set("requests",b,86400,!0)}}
;function Lr(a){this.ic=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.zb=function(){};
this.now=Date.now;this.Sb=!1;var b;this.Od=(b=a.Od)!=null?b:100;var c;this.Jd=(c=a.Jd)!=null?c:1;var d;this.Hd=(d=a.Hd)!=null?d:2592E6;var e;this.Gd=(e=a.Gd)!=null?e:12E4;var f;this.Id=(f=a.Id)!=null?f:5E3;var g;this.V=(g=a.V)!=null?g:void 0;this.oc=!!a.oc;var h;this.lc=(h=a.lc)!=null?h:.1;var k;this.Bc=(k=a.Bc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.zb&&(this.zb=a.zb);a.Sb&&(this.Sb=a.Sb);a.ic&&(this.ic=a.ic);this.W=a.W;this.Ca=a.Ca;this.ga=a.ga;this.fa=a.fa;this.sendFn=a.sendFn;
this.Yc=a.Yc;this.Vc=a.Vc;Mr(this)&&(!this.W||this.W("networkless_logging"))&&Nr(this)}
function Nr(a){Mr(a)&&!a.Sb&&(a.h=!0,a.oc&&Math.random()<=a.lc&&a.ga.de(a.V),Or(a),a.fa.ta()&&a.ec(),a.fa.listen(a.Yc,a.ec.bind(a)),a.fa.listen(a.Vc,a.rd.bind(a)))}
p=Lr.prototype;p.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(Mr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ga.set(d,this.V).then(function(e){d.id=e;c.fa.ta()&&Pr(c,d)}).catch(function(e){Pr(c,d);
Qr(c,e)})}else this.sendFn(a,b)};
p.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(Mr(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.ta()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(k.h==1)return k.yield(d.ga.set(e,d.V).catch(function(l){Qr(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ga.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
Qr(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
p.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(Mr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ga.xb(d.id,c.V):e=!0;c.fa.mb&&c.W&&c.W("vss_network_hint")&&c.fa.mb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ga.set(d,this.V).then(function(g){d.id=g;e&&c.ga.xb(d.id,c.V)}).catch(function(g){Qr(c,g)})}else this.sendFn(a,b,void 0,!0)};
p.ec=function(){var a=this;if(!Mr(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ca.pa(function(){var b;return B(function(c){if(c.h==1)return c.yield(a.ga.vd("NEW",a.V),2);if(c.h!=3)return b=c.i,b?c.yield(Pr(a,b),3):(a.rd(),c.return());a.i&&(a.i=0,a.ec());c.h=0})},this.Od))};
p.rd=function(){this.Ca.qa(this.i);this.i=0};
function Pr(a,b){var c;return B(function(d){switch(d.h){case 1:if(!Mr(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.B(2);break}return d.yield(a.ga.Ie(b.id,a.V),3);case 3:(c=d.i)||a.zb(Error("The request cannot be found in the database."));case 2:if(Rr(a,b,a.Hd)){d.B(4);break}a.zb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.B(5);break}return d.yield(a.ga.xb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=Sr(a,
b));if(!b){d.B(0);break}if(!b.skipRetry||b.id===void 0){d.B(8);break}return d.yield(a.ga.xb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function Sr(a,b){if(!Mr(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.h){case 1:g=Tr(f);(h=Ur(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Bc)){m.B(2);break}if(!a.fa.Fc){m.B(3);break}return m.yield(a.fa.Fc(),3);case 3:if(a.fa.ta()){m.B(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.B(6);
break}return m.yield(a.ga.Zc(b.id,a.V,!1),6);case 6:return m.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Bc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.B(8);break}return b.sendCount<a.Jd?m.yield(a.ga.Zc(b.id,a.V,!0,h?!1:void 0),12):m.yield(a.ga.xb(b.id,a.V),8);case 12:a.Ca.pa(function(){a.fa.ta()&&a.ec()},a.Id);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.B(2):h.yield(a.ga.xb(b.id,a.V),2);a.fa.mb&&a.W&&a.W("vss_network_hint")&&a.fa.mb(!0);d(e,f);h.h=0})};
return b}
function Rr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Or(a){if(!Mr(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ga.vd("QUEUED",a.V).then(function(b){b&&!Rr(a,b,a.Gd)?a.Ca.pa(function(){return B(function(c){if(c.h==1)return b.id===void 0?c.B(2):c.yield(a.ga.Zc(b.id,a.V),2);Or(a);c.h=0})}):a.fa.ta()&&a.ec()})}
function Qr(a,b){a.Td&&!a.fa.ta()?a.Td(b):a.handleError(b)}
function Mr(a){return!!a.V||a.ic}
function Tr(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function Ur(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var Vr;
function Wr(){if(Vr)return Vr();var a={};Vr=Aq("LogsDatabaseV2",{Hb:(a.LogsRequestsStore={Ob:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&Gp(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),Np(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Vr()}
;function Xr(a){return $p(Wr(),a)}
function Yr(a,b){var c,d,e,f;return B(function(g){if(g.h==1)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(Xr(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Ip(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=V();Zr(c);return g.return(f)})}
function $r(a,b){var c,d,e,f,g,h,k,l;return B(function(m){if(m.h==1)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(Xr(b),2);if(m.h!=3)return d=m.i,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,V()],h=IDBKeyRange.bound(f,g),k="prev",T("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(Fp(d,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(n){return Tp(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(r){r.getValue()&&(l=r.getValue(),a==="NEW"&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=V();Zr(c);return m.return(l)})}
function as(a,b){var c;return B(function(d){if(d.h==1)return d.yield(Xr(b),2);c=d.i;return d.return(Fp(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Bp(f.h.put(g,void 0)).then(function(){return g})})}))})}
function bs(a,b,c,d){c=c===void 0?!0:c;var e;return B(function(f){if(f.h==1)return f.yield(Xr(b),2);e=f.i;return f.return(Fp(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),Bp(h.h.put(k,void 0)).then(function(){return k})):vp.resolve(void 0)})}))})}
function cs(a,b){var c;return B(function(d){if(d.h==1)return d.yield(Xr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function ds(a){var b,c;return B(function(d){if(d.h==1)return d.yield(Xr(a),2);b=d.i;c=V()-2592E6;return d.yield(Fp(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return Pp(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return Qp(f)})})}),0)})}
function es(){B(function(a){return a.yield(wq(),0)})}
function Zr(a){T("nwl_csi_killswitch")||ir("networkless_performance",a,{sampleRate:1})}
;var gs={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,producerProjectDiskInsufficientExportFailure:516,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,
miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,
shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514,producerProjectElementModified:515,
adsSeenClientLogging:517};var hs={},is=Aq("ServiceWorkerLogsDatabase",{Hb:(hs.SWHealthLog={Ob:1},hs),shared:!0,upgrade:function(a,b){b(1)&&Np(Gp(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function js(a){return $p(is(),a)}
function ks(a){var b,c;B(function(d){if(d.h==1)return d.yield(js(a),2);b=d.i;c=V()-2592E6;return d.yield(Fp(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return Pp(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return Qp(f)})})}),0)})}
function ls(a){var b;return B(function(c){if(c.h==1)return c.yield(js(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var ms={},ns=0;function ps(a){var b=b===void 0?{}:b;var c=new Image,d=""+ns++;ms[d]=c;c.onload=c.onerror=function(){delete ms[d]};
b.Xh&&(c.referrerPolicy="no-referrer");c.src=a}
;var qs;function rs(){qs||(qs=new Ro("yt.offline"));return qs}
function ss(a){if(T("offline_error_handling")){var b=rs().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);rs().set("errors",b,2592E3,!0)}}
;function ts(){this.h=new Map;this.i=!1}
function us(){if(!ts.instance){var a=F("yt.networkRequestMonitor.instance")||new ts;E("yt.networkRequestMonitor.instance",a);ts.instance=a}return ts.instance}
ts.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
ts.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
ts.prototype.removeParams=function(a){return a.split("?")[0]};
ts.prototype.removeParams=ts.prototype.removeParams;ts.prototype.isEndpointCFR=ts.prototype.isEndpointCFR;ts.prototype.requestComplete=ts.prototype.requestComplete;ts.getInstance=us;function vs(){bi.call(this);var a=this;this.j=!1;this.h=Sj();this.h.listen("networkstatus-online",function(){if(a.j&&T("offline_error_handling")){var b=rs().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new U(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Mm(d)}rs().set("errors",{},2592E3,!0)}}})}
v(vs,bi);function ws(){if(!vs.instance){var a=F("yt.networkStatusManager.instance")||new vs;E("yt.networkStatusManager.instance",a);vs.instance=a}return vs.instance}
p=vs.prototype;p.ta=function(){return this.h.ta()};
p.mb=function(a){this.h.h=a};
p.xe=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
p.ne=function(){this.j=!0};
p.listen=function(a,b){return this.h.listen(a,b)};
p.Fc=function(a){a=Qj(this.h,a);a.then(function(b){T("use_cfr_monitor")&&us().requestComplete("generate_204",b)});
return a};
vs.prototype.sendNetworkCheckRequest=vs.prototype.Fc;vs.prototype.listen=vs.prototype.listen;vs.prototype.enableErrorFlushing=vs.prototype.ne;vs.prototype.getWindowStatus=vs.prototype.xe;vs.prototype.networkStatusHint=vs.prototype.mb;vs.prototype.isNetworkAvailable=vs.prototype.ta;vs.getInstance=ws;function xs(a){a=a===void 0?{}:a;bi.call(this);var b=this;this.h=this.u=0;this.j=ws();var c=F("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){ys(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){ys(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){ci(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){ci(b,"publicytnetworkstatus-offline")})))}
v(xs,bi);xs.prototype.ta=function(){var a=F("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
xs.prototype.mb=function(a){var b=F("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
xs.prototype.Fc=function(a){var b=this,c;return B(function(d){c=F("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return T("skip_network_check_if_cfr")&&us().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.mb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ta())})):c?d.return(c(a)):d.return(!0)})};
function ys(a,b){a.rateLimit?a.h?(Tj.qa(a.u),a.u=Tj.pa(function(){a.o!==b&&(ci(a,b),a.o=b,a.h=V())},a.rateLimit-(V()-a.h))):(ci(a,b),a.o=b,a.h=V()):ci(a,b)}
;var zs;function As(){var a=Lr.call;zs||(zs=new xs({Lh:!0,Ch:!0}));a.call(Lr,this,{ga:{de:ds,xb:cs,vd:$r,Ie:as,Zc:bs,set:Yr},fa:zs,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;b=new U(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code);Nm(b,void 0,void 0,void 0,!0)}else Mm(b)},
zb:Nm,sendFn:Bs,now:V,Td:ss,Ca:Qo(),Yc:"publicytnetworkstatus-online",Vc:"publicytnetworkstatus-offline",oc:!0,lc:.1,Bc:gn("potential_esf_error_limit",10),W:T,Sb:!(io()&&Cs())});this.j=new vj;T("networkless_immediately_drop_all_requests")&&es();xq("LogsDatabaseV2")}
v(As,Lr);function Ds(){var a=F("yt.networklessRequestController.instance");a||(a=new As,E("yt.networklessRequestController.instance",a),T("networkless_logging")&&mq().then(function(b){a.V=b;Nr(a);a.j.resolve();a.oc&&Math.random()<=a.lc&&a.V&&ks(a.V);T("networkless_immediately_drop_sw_health_store")&&Es(a)}));
return a}
As.prototype.writeThenSend=function(a,b){b||(b={});b=Fs(a,b);io()||(this.h=!1);Lr.prototype.writeThenSend.call(this,a,b)};
As.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Fs(a,b);io()||(this.h=!1);Lr.prototype.sendThenWrite.call(this,a,b,c)};
As.prototype.sendAndWrite=function(a,b){b||(b={});b=Fs(a,b);io()||(this.h=!1);Lr.prototype.sendAndWrite.call(this,a,b)};
As.prototype.awaitInitialization=function(){return this.j.promise};
function Es(a){var b;B(function(c){if(!a.V)throw b=rp("clearSWHealthLogsDb"),b;return c.return(ls(a.V).catch(function(d){a.handleError(d)}))})}
function Bs(a,b,c,d){d=d===void 0?!1:d;b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&Gs(a,b);if(T("use_request_time_ms_header"))b.headers&&Ym(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(V())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)mn(a,void 0,"POST",f,void 0);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)mn(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{c:{var k=new db({url:a});if(ab(k.h,"dsh")==="1")var l=null;else{var m=ab(k.h,"ae");if(m==="1"){var n=ab(k.h,"adurl");if(n)try{l={version:3,ke:decodeURIComponent(n),ae:bb(k.h,"act=1","ri=1",eb(k))};break c}catch(Z){}}l=m==="2"?{version:4,ke:bb(k.h,"dct=1","suid="+k.i,""),ae:bb(k.h,"act=1","ri=1","suid="+k.i)}:null}}if(l){var r=lc(a),t;if(!(t=!r||!r.endsWith("/aclk"))){var w=a.search(tc),x=sc(a,0,"ri",w);if(x<0)var z=null;else{var G=a.indexOf("&",
x);if(G<0||G>w)G=w;z=fc(a.slice(x+3,G!==-1?G:0))}t=z!=="1"}var H=!t;break b}}catch(Z){}H=!1}if(H){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var S=!0;break b}}catch(Z){}S=!1}c=S?!0:!1}else c=!1;c||ps(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Ar(a,b.postBody,b,qn,d)):Ar(a,JSON.stringify(b.postParams),b,pn,d):qn(a,b)}
function Fs(a,b){T("use_event_time_ms_header")&&Ym(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(V())));return b}
function Gs(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){us().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){us().requestComplete(a,!0);d(e,f)}}
function Cs(){return kc(document.location.toString())!=="www.youtube-nocookie.com"}
;var Hs=!1,Is=D.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Hs};E("ytNetworklessLoggingInitializationOptions",Is);function Js(){var a;B(function(b){if(b.h==1)return b.yield(mq(),2);a=b.i;if(!a||!io()&&!T("nwl_init_require_datasync_id_killswitch")||!Cs())return b.B(0);Hs=!0;Is.isNwlInitialized=Hs;return b.yield(Ds().awaitInitialization(),0)})}
;function Ks(a){var b=this;this.config_=null;a?this.config_=a:Oq()&&(this.config_=Pq());lo(function(){Jr(b)},5E3)}
Ks.prototype.isReady=function(){!this.config_&&Oq()&&(this.config_=Pq());return!!this.config_};
function Kr(a,b,c,d){function e(n){n=n===void 0?!1:n;var r;if(d.retry&&h!="www.youtube-nocookie.com"&&(n||T("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(r=Hr(b,c,l,k)),r)){var t=g.onSuccess,w=g.onFetchSuccess;g.onSuccess=function(G,H){Ir(r);t(G,H)};
c.onFetchSuccess=function(G,H){Ir(r);w(G,H)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Ds().writeThenSend(m,g):Ds().sendAndWrite(m,g);
else if(d.compress){var x=!d.networklessOptions.writeThenSend;if(g.postBody){var z=g.postBody;typeof z!=="string"&&(z=JSON.stringify(g.postBody));Ar(m,z,g,qn,x)}else Ar(m,JSON.stringify(g.postParams),g,pn,x)}else T("web_all_payloads_via_jspb")?qn(m,g):pn(m,g)}catch(G){if(G.name==="InvalidAccessError")r&&(Ir(r),r=0),Nm(Error("An extension is blocking network request."));else throw G;}r&&lo(function(){Jr(a)},5E3)}
!R("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&Nm(new U("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new U("innertube xhrclient not ready",b,c,d);Mm(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,r){if(d.onSuccess)d.onSuccess(r)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,r){if(d.onError)d.onError(r)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.De)&&(h=f);var k=a.config_.Ee||!1,l=Rq(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=Wm(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(F("ytNetworklessLoggingInitializationOptions")?Is.isNwlInitialized:Hs)?kq().then(function(n){e(n)}):e(!1)}
;var Ls=0,Ms=md?"webkit":ld?"moz":jd?"ms":id?"o":"";E("ytDomDomGetNextId",F("ytDomDomGetNextId")||function(){return++Ls});var Rs={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Ss(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Rs||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Ts(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Ss.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Ss.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Ss.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var tg=D.ytEventsEventsListeners||{};E("ytEventsEventsListeners",tg);var Us=D.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",Us);
function Vs(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return sg(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&xg(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Ws(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Vs(a,b,c,d);if(e)return e;e=++Us.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Ss(h);if(!Hg(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Ss(h);
h.currentTarget=a;return c.call(a,h)};
g=Lm(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Xs()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);tg[e]=[a,b,c,g,d];return e}
function Ys(a){a&&(typeof a=="string"&&(a=[a]),Tb(a,function(b){if(b in tg){var c=tg[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Xs()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete tg[b]}}))}
var Xs=ri(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function Zs(a){this.G=a;this.h=null;this.o=0;this.A=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=Ws(window,"mousemove",Ua(this.Y,this));a=Ua(this.P,this);typeof a==="function"&&(a=Lm(a));this.Z=window.setInterval(a,25)}
$a(Zs,I);Zs.prototype.Y=function(a){a.h===void 0&&Ts(a);var b=a.h;a.i===void 0&&Ts(a);this.h=new og(b,a.i)};
Zs.prototype.P=function(){if(this.h){var a=V();if(this.o!=0){var b=this.A,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.A=this.h;this.j=(this.j+1)%4}};
Zs.prototype.ba=function(){window.clearInterval(this.Z);Ys(this.U)};var $s={};
function at(a){var b=a===void 0?{}:a;a=b.Ue===void 0?!1:b.Ue;b=b.oe===void 0?!0:b.oe;if(F("_lact",window)==null){var c=parseInt(R("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;E("_lact",c,window);E("_fact",c,window);c==-1&&bt();Ws(document,"keydown",bt);Ws(document,"keyup",bt);Ws(document,"mousedown",bt);Ws(document,"mouseup",bt);a?Ws(window,"touchmove",function(){ct("touchmove",200)},{passive:!0}):(Ws(window,"resize",function(){ct("resize",200)}),b&&Ws(window,"scroll",function(){ct("scroll",200)}));
new Zs(function(){ct("mouse",100)});
Ws(document,"touchstart",bt,{passive:!0});Ws(document,"touchend",bt,{passive:!0})}}
function ct(a,b){$s[a]||($s[a]=!0,Tj.pa(function(){bt();$s[a]=!1},b))}
function bt(){F("_lact",window)==null&&at();var a=Date.now();E("_lact",a,window);F("_fact",window)==-1&&E("_fact",a,window);(a=F("ytglobal.ytUtilActivityCallback_"))&&a()}
function dt(){var a=F("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var et=D.ytPubsubPubsubInstance||new N,ft=D.ytPubsubPubsubSubscribedKeys||{},gt=D.ytPubsubPubsubTopicToKeys||{},ht=D.ytPubsubPubsubIsSynchronous||{};function jt(a,b){var c=kt();if(c&&b){var d=c.subscribe(a,function(){function e(){ft[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{ht[a]?e():dn(e,0)}catch(g){Mm(g)}},void 0);
ft[d]=!0;gt[a]||(gt[a]=[]);gt[a].push(d);return d}return 0}
function lt(a){var b=kt();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Tb(a,function(c){b.unsubscribeByKey(c);delete ft[c]}))}
function mt(a,b){var c=kt();c&&c.publish.apply(c,arguments)}
function nt(a){var b=kt();if(b)if(b.clear(a),a)ot(a);else for(var c in gt)ot(c)}
function kt(){return D.ytPubsubPubsubInstance}
function ot(a){gt[a]&&(a=gt[a],Tb(a,function(b){ft[b]&&delete ft[b]}),a.length=0)}
N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.fc;N.prototype.publish=N.prototype.sb;N.prototype.clear=N.prototype.clear;E("ytPubsubPubsubInstance",et);E("ytPubsubPubsubTopicToKeys",gt);E("ytPubsubPubsubIsSynchronous",ht);E("ytPubsubPubsubSubscribedKeys",ft);var pt=Symbol("injectionDeps");function qt(a){this.name=a}
qt.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function rt(a){this.key=a}
function st(a){return new rt(a)}
function tt(){this.i=new Map;this.j=new Map;this.h=new Map}
function ut(a,b){a.i.set(b.pb,b);var c=a.j.get(b.pb);if(c)try{c.Uh(a.resolve(b.pb))}catch(d){c.Sh(d)}}
tt.prototype.resolve=function(a){return a instanceof rt?vt(this,a.key,[],!0):vt(this,a,[])};
function vt(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.kd!==void 0)var e=d.kd;else if(d.Bf)e=d[pt]?wt(a,d[pt],c):[],e=d.Bf.apply(d,A(e));else if(d.Hc){e=d.Hc;var f=e[pt]?wt(a,e[pt],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(A(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.ai||a.h.set(b,e);return e}
function wt(a,b,c){return b?b.map(function(d){return d instanceof rt?vt(a,d.key,c,!0):vt(a,d,c)}):[]}
;var xt;function zt(){xt||(xt=new tt);return xt}
;var At=window;function Bt(){var a,b;return"h5vcc"in At&&((a=At.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=At.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in At&&At.performance.mark&&At.performance.measure?2:0}
function Ct(a){var b=Bt();switch(b){case 1:At.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:At.performance.mark(a+"-start");break;case 0:break;default:Eb(b,"unknown trace type")}}
function Dt(a){var b=Bt();switch(b){case 1:At.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";At.performance.mark(c);At.performance.measure(a,b,c);break;case 0:break;default:Eb(b,"unknown trace type")}}
;var Et=T("web_enable_lifecycle_monitoring")&&Bt()!==0,Ft=T("web_enable_lifecycle_monitoring");function Gt(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function Ht(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?Qo():d;this.j=c;this.scheduler=d;this.i=new vj;this.h=a;for(a={jb:0};a.jb<this.h.length;a={Ac:void 0,jb:a.jb},a.jb++)a.Ac=this.h[a.jb],c=function(e){return function(){e.Ac.Pc();b.h[e.jb].Cc=!0;b.h.every(function(f){return f.Cc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.Ac),d=this.scheduler.Sa(c,d),this.h[a.jb]=Object.assign({},a.Ac,{Pc:c,
jobId:d})}
function It(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=y(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.Cc||(a.scheduler.qa(c.jobId),a.scheduler.Sa(c.Pc,10))}
Ht.prototype.cancel=function(){for(var a=y(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.Cc||this.scheduler.qa(b.jobId),b.Cc=!0;this.i.resolve()};
Ht.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function Jt(a){this.state=a;this.plugins=[];this.o=void 0;this.A={};Et&&Ct(this.state)}
p=Jt.prototype;p.install=function(a){this.plugins.push(a);return this};
p.uninstall=function(){var a=this;C.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
p.transition=function(a,b){var c=this;Et&&Dt(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(It(this.j),this.j=void 0);Kt(this,a,b);this.state=a;Et&&Ct(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Lt(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Lt(a,b){var c=b.filter(function(e){return Mt(a,e)===10}),d=b.filter(function(e){return Mt(a,e)!==10});
return a.A.Zh?function(){var e=C.apply(0,arguments);return B(function(f){if(f.h==1)return f.yield(a.af.apply(a,[c].concat(A(e))),2);a.Ld.apply(a,[d].concat(A(e)));f.h=0})}:function(){var e=C.apply(0,arguments);
a.bf.apply(a,[c].concat(A(e)));a.Ld.apply(a,[d].concat(A(e)))}}
p.bf=function(a){for(var b=C.apply(1,arguments),c=Qo(),d=y(a),e=d.next(),f={};!e.done;f={Ub:void 0},e=d.next())f.Ub=e.value,c.Mb(function(g){return function(){Nt(g.Ub.name);Ot(function(){return g.Ub.callback.apply(g.Ub,A(b))});
Pt(g.Ub.name)}}(f))};
p.af=function(a){var b=C.apply(1,arguments),c,d,e,f,g;return B(function(h){h.h==1&&(c=Qo(),d=y(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.B(0);f.Ya=e.value;f.hc=void 0;g=function(k){return function(){Nt(k.Ya.name);var l=Ot(function(){return k.Ya.callback.apply(k.Ya,A(b))});
ke(l)?k.hc=T("web_lifecycle_error_handling_killswitch")?l.then(function(){Pt(k.Ya.name)}):l.then(function(){Pt(k.Ya.name)},function(m){Gt(m);
Pt(k.Ya.name)}):Pt(k.Ya.name)}}(f);
c.Mb(g);return f.hc?h.yield(f.hc,3):h.B(3)}f={Ya:void 0,hc:void 0};e=d.next();return h.B(2)})};
p.Ld=function(a){var b=C.apply(1,arguments),c=this,d=a.map(function(e){return{Pc:function(){Nt(e.name);Ot(function(){return e.callback.apply(e,A(b))});
Pt(e.name)},
priority:Mt(c,e)}});
d.length&&(this.j=new Ht(d))};
function Mt(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function Nt(a){Et&&a&&Ct(a)}
function Pt(a){Et&&a&&Dt(a)}
function Kt(a,b,c){Ft&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(Jt.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function Ot(a){if(T("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){Gt(b)}}
;function Qt(a){Jt.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Rt;v(Qt,Jt);Qt.prototype.i=function(a,b){var c=this;this.h=lo(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
Qt.prototype.u=function(a,b){this.h&&(Tj.qa(this.h),this.h=null);a(b==null?void 0:b.event)};
function St(){Rt||(Rt=new Qt);return Rt}
;var Tt=[];E("yt.logging.transport.getScrapedGelPayloads",function(){return Tt});function Ut(){this.store={};this.h={}}
Ut.prototype.storePayload=function(a,b){a=Vt(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);T("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
Ut.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Wt(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,A(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,A(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,A(this.smartExtractMatchingEntries(a))));return c};
Ut.prototype.extractMatchingEntries=function(a){a=Wt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,A(this.store[a[c]])),delete this.store[a[c]]);return b};
Ut.prototype.getSequenceCount=function(a){a=Wt(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function Wt(a,b){var c=Vt(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&Vt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Xt(b.auth,g[0])){var h=b.isJspb;Xt(h===void 0?"undefined":h?"true":"false",g[1])&&Xt(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),Xt(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Xt(a,b){return a===void 0||a==="undefined"?!0:a===b}
Ut.prototype.getSequenceCount=Ut.prototype.getSequenceCount;Ut.prototype.extractMatchingEntries=Ut.prototype.extractMatchingEntries;Ut.prototype.smartExtractMatchingEntries=Ut.prototype.smartExtractMatchingEntries;Ut.prototype.storePayload=Ut.prototype.storePayload;function Vt(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function Yt(a,b){if(a)return a[b.name]}
;var Zt=gn("initial_gel_batch_timeout",2E3),$t=gn("gel_queue_timeout_max_ms",6E4),au=gn("gel_min_batch_size",5),bu=void 0;function cu(){this.o=this.h=this.i=0;this.j=!1}
var du=new cu,eu=new cu,fu=new cu,gu=new cu,hu,iu=!0,ju=D.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",ju);var ku={};function lu(){var a=F("yt.logging.ims");a||(a=new Ut,E("yt.logging.ims",a));return a}
function mu(a,b){if(a.endpoint==="log_event"){nu(a);var c=ou(a),d=pu(a.payload)||"";a:{if(T("enable_web_tiered_gel")){var e=gs[d||""];var f,g,h,k=zt().resolve(st(Jq))==null?void 0:(f=Kq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!T("web_payload_policy_disabled_killswitch"))return;k=qu(e.tier);if(k===400){ru(a,b);return}}ku[c]=
!0;c={cttAuthInfo:c,isJspb:!1,tier:k};lu().storePayload(c,a.payload);su(b,c,d==="gelDebuggingEvent")}}
function su(a,b,c){function d(){tu({writeThenSend:!0},void 0,e,b.tier)}
var e=!1;e=e===void 0?!1:e;c=c===void 0?!1:c;a&&(bu=new a);a=gn("tvhtml5_logging_max_batch_ads_fork")||gn("tvhtml5_logging_max_batch")||gn("web_logging_max_batch")||100;var f=V(),g=uu(e,b.tier),h=g.o;c&&(g.j=!0);c=0;b&&(c=lu().getSequenceCount(b));c>=1E3?d():c>=a?hu||(hu=vu(function(){d();hu=void 0},0)):f-h>=10&&(wu(e,b.tier),g.o=f)}
function ru(a,b){if(a.endpoint==="log_event"){T("more_accurate_gel_parser")&&lu().storePayload({isJspb:!1},a.payload);nu(a);var c=ou(a),d=new Map;d.set(c,[a.payload]);var e=pu(a.payload)||"";b&&(bu=new b);return new si(function(f,g){bu&&bu.isReady()?xu(d,bu,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function ou(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);ju[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function tu(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new si(function(e,f){var g=uu(c,d),h=g.j;g.j=!1;yu(g.i);yu(g.h);g.h=0;bu&&bu.isReady()?d===void 0&&T("enable_web_tiered_gel")?zu(e,f,a,b,c,300,h):zu(e,f,a,b,c,d,h):(wu(c,d),e())})}
function zu(a,b,c,d,e,f,g){var h=bu;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=T("enable_web_tiered_gel")?lu().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):lu().extractMatchingEntries(e),k.set(d,f);else for(d=y(Object.keys(ku)),l=d.next();!l.done;l=d.next())l=l.value,e=T("enable_web_tiered_gel")?lu().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):lu().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete ku[l];xu(k,h,a,b,c,!1,g)}
function wu(a,b){function c(){tu({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=uu(a,b),e=d===gu||d===fu?5E3:$t;T("web_gel_timeout_cap")&&!d.h&&(e=vu(function(){c()},e),d.h=e);
yu(d.i);e=R("LOGGING_BATCH_TIMEOUT",gn("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&iu&&(e=Zt);e=vu(function(){gn("gel_min_batch_size")>0?lu().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=au&&c():c()},e);
d.i=e}
function xu(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(V()),k=a.size,l=(g===void 0?0:g)&&T("vss_through_gel_video_stats")?"video_stats":"log_event";a=y(a);var m=a.next();for(g={};!m.done;g={Uc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Xc:void 0,Wc:void 0},m=a.next()){var n=y(m.value);m=n.next().value;n=n.next().value;g.batchRequest=zg({context:Qq(b.config_||Pq())});if(!Ma(n)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=ju[m])&&
Au(g.batchRequest,m,n);delete ju[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";Bu(g.batchRequest,h,g.dangerousLogToVisitorSession);T("always_send_and_write")&&(e.writeThenSend=!1);g.Xc=function(r){T("start_client_gcf")&&Tj.pa(function(){return B(function(t){return t.yield(Cu(r),0)})});
k--;k||c()};
g.Uc=0;g.Wc=function(r){return function(){r.Uc++;if(e.bypassNetworkless&&r.Uc===1)try{Kr(b,l,r.batchRequest,Du({writeThenSend:!0},r.dangerousLogToVisitorSession,r.Xc,r.Wc,f)),iu=!1}catch(t){Mm(t),d()}k--;k||c()}}(g);
try{Kr(b,l,g.batchRequest,Du(e,g.dangerousLogToVisitorSession,g.Xc,g.Wc,f)),iu=!1}catch(r){Mm(r),d()}}}
function Du(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,vh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};Eu()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));return a}
function Bu(a,b,c){Eu()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&((c=R("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),Hm("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Au(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function nu(a){var b=fn("il_payload_scraping");b=(b!==void 0?String(b):"")==="enable_il_payload_scraping";if(!F("yt.logging.transport.enableScrapingForTest"))if(b)Tt=[],E("yt.logging.transport.enableScrapingForTest",!0),E("yt.logging.transport.scrapedPayloadsForTesting",Tt),E("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
E("yt.logging.transport.scrapeClientEvent",!0);else return;b=F("yt.logging.transport.scrapedPayloadsForTesting");var c=F("yt.logging.transport.payloadToScrape"),d=F("yt.logging.transport.scrapeClientEvent");if(c&&c.length>=1)for(var e=0;e<c.length;e++)if(a&&a.payload[c[e]])if(d)b.push(a.payload);else{var f=void 0;b.push(((f=a)==null?void 0:f.payload)[c[e]])}E("yt.logging.transport.scrapedPayloadsForTesting",b)}
function Eu(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function vu(a,b){return T("transport_use_scheduler")===!1?dn(a,b):T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?lo(function(){if(St().currentState==="none")a();else{var c={};St().install((c.none={callback:a},c))}},b):lo(a,b)}
function yu(a){T("transport_use_scheduler")?Tj.qa(a):window.clearTimeout(a)}
function Cu(a){var b,c,d,e,f,g,h,k,l,m;return B(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=Yt(d,hm),g=(f=d)==null?void 0:f.hotHashData,h=Yt(d,gm),l=(k=d)==null?void 0:k.coldHashData,(m=zt().resolve(st(Jq)))?g?e?n.yield(Lq(m,g,e),2):n.yield(Lq(m,g),2):n.B(2):n.return()):l?h?n.yield(Mq(m,l,h),0):n.yield(Mq(m,l),0):n.B(0)})}
function uu(a,b){b=b===void 0?200:b;return a?b===300?gu:eu:b===300?fu:du}
function pu(a){a=Object.keys(a);a=y(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,gs[b])return b}
function qu(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Fu=D.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Fu);
function Gu(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||V());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=dt();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Fu[b]=b in Fu?Fu[b]+1:0,a.sequence={index:Fu[b],groupKey:b},d.endOfSequence&&delete Fu[d.sequenceGroup]);(d.sendIsolatedPayload?ru:mu)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function $o(a,b,c){c=c===void 0?{}:c;var d=Ks;R("ytLoggingEventsDefaultDisabled",!1)&&Ks===Ks&&(d=null);Gu(a,b,d,c)}
;function Hu(a){return a.slice(0,void 0).map(function(b){return b.name}).join(" > ")}
;var Iu=new Set,Ju=0,Ku=0,Lu=0,Mu=[],Nu=[],Ou=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Zo(a){Pu(a)}
function Qu(a){Pu(a,"WARNING")}
function Ru(a){a instanceof Error?Pu(a):(a=Oa(a)?JSON.stringify(a):String(a),a=new U(a),a.name="RejectedPromiseError",Qu(a))}
function Pu(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(Ju>=5))){d=[];e=y(Nu);for(f=e.next();!f.done;f=e.next()){f=f.value;try{f()&&d.push(f())}catch(z){}}d=[].concat(A(Mu),A(d));var k=bc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&
a.args&&a.args.length)for(var r=0;r<a.args.length&&!(n=In(a.args[r],"params."+r,c,n),n>=500);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(r in t){if(t[r]){var w="params."+r,x=Kn(t[r]);c[w]=x;n+=w.length+x.length;if(n>500)break}}else c.params=Kn(t)}if(d.length)for(r=0;r<d.length&&!(n=In(d[r],"params.context."+r,c,n),n>=500);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:m,
fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=r.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=En();c=y(a.Za);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.Nh)){a=d.weight;break a}a=y(a.Ua);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=y(zn);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.zc[r.name])for(e=y(c.zc[r.name]),d=e.next();!d.done;d=e.next())if(f=
d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};for(m=0;m<e.length;m++)f[e[m]]=d[m+1],r.params["params.error."+e[m]]=d[m+1];r.message=c.Tc(f);break}r.params||(r.params={});a=En();r.params["params.errorServiceSignature"]="msg="+a.Za.length+"&cb="+a.Ua.length;r.params["params.serviceWorker"]="false";D.document&&D.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new Cg(Dg,"sample")).constructor!==
Cg&&(r.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(r);if(r.sampleWeight!==0&&!Iu.has(r.message)){if(g&&T("web_enable_error_204"))Su(b===void 0?"ERROR":b,r);else{b=b===void 0?"ERROR":b;b==="ERROR"?(Fn.sb("handleError",r),T("record_app_crashed_web")&&Lu===0&&r.sampleWeight===1&&(Lu++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},T("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),$o("appCrashed",
g)),Ku++):b==="WARNING"&&Fn.sb("handleWarning",r);if(T("kevlar_gel_error_routing")){g=b;h=h===void 0?{}:h;b:{a=y(Ou);for(c=a.next();!c.done;c=a.next())if(fp(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=
Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,sampleWeight:r.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];R("FEXP_EXPERIMENTS")&&(h.experimentIds=R("FEXP_EXPERIMENTS"));d=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Im("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=R("SERVER_NAME");e=R("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&($o("clientError",h),(g==="ERROR"||T("errors_flush_gel_always_killswitch"))&&tu(void 0,void 0,!1))}T("suppress_error_204_logging")||
Su(b,r)}try{Iu.add(r.message)}catch(z){}Ju++}}}
function Su(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=y(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=y(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];(c=R("LAVA_VERSION"))&&(a.postParams["lava.version"]=c);c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}qn(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function Tu(a){var b=C.apply(1,arguments);a.args||(a.args=[]);Array.isArray(a.args)&&a.args.push.apply(a.args,A(b))}
;function Uu(){this.register=new Map}
function Vu(a){a=y(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Rh("ABORTED")}
Uu.prototype.clear=function(){Vu(this);this.register.clear()};
var Wu=new Uu;var Xu=Date.now().toString();
function Yu(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(Xu)for(a=1,b=0;b<Xu.length;b++)d[a%16]^=d[(a-1)%16]/4^Xu.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Zu,$u=D.ytLoggingDocDocumentNonce_;$u||($u=Yu(),E("ytLoggingDocDocumentNonce_",$u));Zu=$u;function av(a){this.h=a}
p=av.prototype;p.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
p.getAsJspb=function(){var a=new jm;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&tf(a,2,Le(this.h.veType)),this.h.veCounter!==void 0&&tf(a,6,Le(this.h.veCounter)),this.h.elementIndex!==void 0&&tf(a,3,Le(this.h.elementIndex)),this.h.isCounterfactual&&tf(a,5,He(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();Df(a,jm,7,b)}this.h.youtubeData!==void 0&&Df(a,im,8,this.h.jspbYoutubeData);return a};
p.toString=function(){return JSON.stringify(this.getAsJson())};
p.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
p.getLoggingDirectives=function(){return this.h.loggingDirectives};function bv(a){return R("client-screen-nonce-store",{})[a===void 0?0:a]}
function cv(a,b){b=b===void 0?0:b;var c=R("client-screen-nonce-store");c||(c={},Hm("client-screen-nonce-store",c));c[b]=a}
function dv(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function ev(a){return R(dv(a===void 0?0:a))}
E("yt_logging_screen.getRootVeType",ev);function fv(){var a=R("csn-to-ctt-auth-info");a||(a={},Hm("csn-to-ctt-auth-info",a));return a}
function gv(){return Object.values(R("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function hv(a){a=bv(a===void 0?0:a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
E("yt_logging_screen.getCurrentCsn",hv);function iv(a,b,c){var d=fv();(c=hv(c))&&delete d[c];b&&(d[a]=b)}
function jv(a){return fv()[a]}
E("yt_logging_screen.getCttAuthInfo",jv);E("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==bv(c)||b!==R(dv(c)))if(iv(a,d,c),cv(a,c),Hm(dv(c),b),b=function(){setTimeout(function(){a&&$o("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Zu,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function kv(){var a=yg(lv),b;return(new si(function(c,d){a.onSuccess=function(e){cn(e)?c(new mv(e)):d(new nv("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new nv("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new nv("Request timed out","net.timeout",e))};
b=qn("//googleads.g.doubleclick.net/pagead/id",a)})).Gc(function(c){if(c instanceof Bi){var d;
(d=b)==null||d.abort()}return xi(c)})}
function nv(a,b,c){fb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(nv,fb);function mv(a){this.xhr=a}
;function ov(){this.X=0;this.h=null}
ov.prototype.then=function(a,b,c){return this.X===1&&a?(a=a.call(c,this.h))&&typeof a.then==="function"?a:pv(a):this.X===2&&b?(a=b.call(c,this.h))&&typeof a.then==="function"?a:qv(a):this};
ov.prototype.getValue=function(){return this.h};
ov.prototype.isRejected=function(){return this.X==2};
ov.prototype.$goog_Thenable=!0;function qv(a){var b=new ov;a=a===void 0?null:a;b.X=2;b.h=a===void 0?null:a;return b}
function pv(a){var b=new ov;a=a===void 0?null:a;b.X=1;b.h=a===void 0?null:a;return b}
;function rv(a){var b=R("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(mc(a)));return a}
function sv(a){var b={};T("json_condensed_response")&&(b.prettyPrint="false");return a=Xm(a,b||{},!1)}
function tv(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:Ym(a)?"same-origin":"cors",credentials:Ym(a)?"same-origin":"include"};b={};for(var d=y(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function uv(){return gg()||(od||pd)&&fp("applewebkit")&&!fp("version")&&(!fp("safari")||fp("gsa/"))||nd&&fp("version/")?!0:R("EOM_VISITOR_DATA")?!1:!0}
;function vv(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null}
;function wv(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in nm)if(nm[d]==c.embeddedPlayerMode){b=nm[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function xv(a){fb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof yv;this.isTimeout=a instanceof nv&&a.errorCode=="net.timeout";this.isCanceled=a instanceof Bi}
v(xv,fb);xv.prototype.name="BiscottiError";function yv(){fb.call(this,"Biscotti ID is missing from server")}
v(yv,fb);yv.prototype.name="BiscottiMissingError";var lv={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},zv=null;function Av(){if(T("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!uv())return Error("User has not consented - not fetching biscotti id.");var a=R("PLAYER_VARS",{});if(wg(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(wv(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Am(){var a=Av();if(a!==void 0)return xi(a);zv||(zv=kv().then(Bv).Gc(function(b){return Cv(2,b)}));
return zv}
function Bv(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new yv;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new yv;a=a.id;Bm(a);zv=pv(a);Dv(18E5,2);return a}
function Cv(a,b){b=new xv(b);Bm("");zv=qv(b);a>0&&Dv(12E4,a-1);throw b;}
function Dv(a,b){dn(function(){kv().then(Bv,function(c){return Cv(b,c)}).Gc(qi)},a)}
function Ev(){try{var a=F("yt.ads.biscotti.getId_");return a?a():Am()}catch(b){return xi(b)}}
;var Nb=oa(["data-"]);function Fv(a){a&&(a.dataset?a.dataset[Gv()]="true":Ob(a))}
function Hv(a){return a?a.dataset?a.dataset[Gv()]:a.getAttribute("data-loaded"):null}
var Iv={};function Gv(){return Iv.loaded||(Iv.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Jv(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||yg(b);this.assets=a.assets||{};this.attrs=a.attrs||yg(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Jv.prototype.clone=function(){var a=new Jv,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];La(c)=="object"?a[b]=yg(c):a[b]=c}return a};var Kv=["att/get"],Lv=["share/get_share_panel"],Mv=["share/get_web_player_share_panel"],Nv=["feedback"],Ov=["notification/modify_channel_preference"],Pv=["browse/edit_playlist"],Qv=["subscription/subscribe"],Rv=["subscription/unsubscribe"];var Sv=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};E("yt.msgs_",Sv);function Tv(a){Cm(Sv,arguments)}
;function Uv(a,b,c){Vv(a,b,c===void 0?null:c)}
function Wv(a){a=Xv(a);var b=document.getElementById(a);b&&(nt(a),b.parentNode.removeChild(b))}
function Yv(a,b){a&&b&&(a=""+Pa(b),(a=Zv[a])&&lt(a))}
function Vv(a,b,c){c=c===void 0?null:c;var d=Xv(a),e=document.getElementById(d),f=e&&Hv(e),g=e&&!f;f?b&&b():(b&&(f=jt(d,b),b=""+Pa(b),Zv[b]=f),g||(e=$v(a,d,function(){Hv(e)||(Fv(e),mt(d),dn(function(){nt(d)},0))},c)))}
function $v(a,b,c,d){d=d===void 0?null:d;var e=Fg("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Lb(e,em(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Xv(a){var b=document.createElement("a");Db(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+hc(a)}
var Zv={};function aw(a){var b=bw(a),c=document.getElementById(b),d=c&&Hv(c);d||c&&!d||(c=cw(a,b,function(){if(!Hv(c)){Fv(c);mt(b);var e=Va(nt,b);dn(e,0)}}))}
function cw(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=em(a);Qb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function bw(a){var b=Fg("A");Db(b,new vb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+hc(a)}
;function dw(a){var b=C.apply(1,arguments);if(!ew(a)||b.some(function(d){return!ew(d)}))throw Error("Only objects may be merged.");
b=y(b);for(var c=b.next();!c.done;c=b.next())fw(a,c.value)}
function fw(a,b){for(var c in b)if(ew(b[c])){if(c in a&&!ew(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});fw(a[c],b[c])}else if(gw(b[c])){if(c in a&&!gw(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);hw(a[c],b[c])}else a[c]=b[c];return a}
function hw(a,b){b=y(b);for(var c=b.next();!c.done;c=b.next())c=c.value,ew(c)?a.push(fw({},c)):gw(c)?a.push(hw([],c)):a.push(c);return a}
function ew(a){return typeof a==="object"&&!Array.isArray(a)}
function gw(a){return typeof a==="object"&&Array.isArray(a)}
;var iw="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function jw(a,b){var c=c===void 0?!0:c;var d=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=kc(window.location.href);e&&d.push(e);e=kc(a);if(Sb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),Db(d,a),a=d.href)if(a=mc(a),a=nc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:hv()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&kw(a,b,f)}else kw(a,b)}
function kw(a,b,c){a=lw(a);b=b?qc(b):"";c=c||5;uv()&&Rn(a,b,c)}
function lw(a){for(var b=y(iw),c=b.next();!c.done;c=b.next())a=vc(a,c.value);return"ST-"+hc(a).toString(36)}
;function mw(a){Wq.call(this,1,arguments);this.csn=a}
v(mw,Wq);var er=new Xq("screen-created",mw),nw=[],ow=0,pw=new Map,qw=new Map,rw=new Map;
function sw(a,b,c,d,e){e=e===void 0?!1:e;for(var f=tw({cttAuthInfo:jv(b)||void 0},b),g=y(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(ug(k)||!k.trackingParams&&!k.veType)&&Qu(Error("Child VE logged with no data"));if(T("no_client_ve_attach_unless_shown")){var l=uw(h,b);if(k.veType&&!qw.has(l)&&!rw.has(l)&&!e){if(!T("il_attach_cache_limit")||pw.size<1E3){pw.set(l,[a,b,c,h]);return}T("il_attach_cache_limit")&&pw.size>1E3&&Qu(new U("IL Attach cache exceeded limit"))}h=uw(c,b);pw.has(h)?
vw(c,b):rw.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Vb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?ww("visualElementAttached",f,c):a?Gu("visualElementAttached",c,a,f):$o("visualElementAttached",c,f)}
function ww(a,b,c){nw.push({Te:a,payload:c,Ih:void 0,options:b});ow||(ow=fr())}
function gr(a){if(nw){for(var b=y(nw),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,$o(c.Te,c.payload,c.options));nw.length=0}ow=0}
function uw(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function vw(a,b){a=uw(a,b);pw.has(a)&&(b=pw.get(a)||[],sw(b[0],b[1],b[2],[b[3]],!0),pw.delete(a))}
function tw(a,b){T("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function xw(){try{return!!self.localStorage}catch(a){return!1}}
;function yw(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function zw(a){if(xw()){var b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=yw(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function Aw(){if(!xw())return!1;var a=jo(),b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=yw(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Bw(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(R("INNERTUBE_CLIENT_NAME")==="WEB"||R("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function Cw(){var a=a===void 0?!0:a;try{window.sessionStorage.removeItem("stickiness_reload");window.sessionStorage.removeItem("session_logininfo");Hm("LOGIN_INFO","");a&&window.sessionStorage.setItem("from_switch_account","1");a=!0;a=a===void 0?!1:a;var b,c=Dw;c||(c=document.querySelector("#persist_identity"));if(b=c){var d=b.src?(new URL(b.src)).origin:"*";if(a){var e;(e=b.contentWindow)==null||e.postMessage({action:"clear"},d)}else if(!(Number(window.sessionStorage.getItem("stickiness_reload"))>=
2)){var f=window.sessionStorage.getItem("session_logininfo");if(f){var g;(g=b.contentWindow)==null||g.postMessage({loginInfo:f},d)}}}}catch(h){}}
function Ew(a){if(a)if(a.startsWith("https://accounts.google.com/AddSession"))Cw();else if(a.startsWith("https://accounts.google.com/ServiceLogin"))Cw();else{var b;if(b=a.startsWith("https://myaccount.google.com"))b=(a instanceof zk?a.clone():new zk(a)).h.endsWith("/youtubeoptions");b&&Cw()}if(R("LOGGED_IN",!0)&&Bw()){b=R("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=kc(window.location.href);c&&b.push(c);c=kc(a);Sb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=mc(a),(b=nc(b))?(b=lw(b),b=(b=Sn(b)||null)?Um(b):
{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;Bw()?(d||(d=R("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&jw(a,b)}}
var Dw=null;function Fw(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));b&&jw(a,b);if(c)return!1;Ew(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;b=rc(a,e);Ew(b);a=void 0;a=a===void 0?zb:a;a:if(f=b+f,a=a===void 0?zb:a,!(f instanceof vb)){for(b=0;b<a.length;++b)if(c=a[b],c instanceof xb&&c.Ge(f)){f=new vb(f);break a}f=void 0}g=g.location;f=Cb(f||wb);f!==void 0&&(g.href=f);return!0}
;function Gw(a){if(wg(R("PLAYER_VARS",{}))!="1"){a&&zm();try{Ev().then(function(){},function(){}),dn(Gw,18E5)}catch(b){Mm(b)}}}
;var Hw=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Iw(){var a=a===void 0?window.location.href:a;if(T("kevlar_disable_theme_param"))return null;var b=lc(a);if(T("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=Vm(a).theme;return Hw.get(c)||null}catch(d){}return null}
;function Jw(){this.h={};if(this.i=Un()){var a=Sn("CONSISTENCY");a&&Kw(this,{encryptedTokenJarContents:a})}}
Jw.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Ga.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=y(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Kw(this,a)}};
function Kw(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&Rn("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Lw=window.location.hostname.split(".").slice(-2).join(".");function Mw(){this.j=-1;var a=R("LOCATION_PLAYABILITY_TOKEN");R("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=Nw(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Ow;function Pw(){Ow=F("yt.clientLocationService.instance");Ow||(Ow=new Mw,E("yt.clientLocationService.instance",Ow));return Ow}
p=Mw.prototype;
p.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
p.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,R("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=Nw(this))&&this.h.set("yt-location-playability-token",a,15552E3):Rn("YT_CL",JSON.stringify({loctok:a}),15552E3,Lw,!0))};
function Nw(a){return a.h===void 0?new Ro("yt-client-location"):a.h}
p.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=Nw(this))&&this.h.remove("yt-location-playability-token"):Tn("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
p.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;R("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
p.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
p.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function Qw(a,b,c){b=b===void 0?!1:b;c=c===void 0?!1:c;var d=R("INNERTUBE_CONTEXT");if(!d)return Pu(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=zg(d);T("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;e.clientName==="MWEB"&&e.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(e.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;
e.screenPixelDensity=Math.round(window.devicePixelRatio||1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var f=f===void 0?!1:f;Yn();var g="USER_INTERFACE_THEME_LIGHT";ao(165)?g="USER_INTERFACE_THEME_DARK":ao(174)?g="USER_INTERFACE_THEME_LIGHT":!T("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(g="USER_INTERFACE_THEME_DARK");
f=f?g:Iw()||g;e.userInterfaceTheme=f;if(!b){if(f=go())e.connectionType=f;T("web_log_effective_connection_type")&&(f=ho())&&(d.client.effectiveConnectionType=f)}var h;if(T("web_log_memory_total_kbytes")&&((h=D.navigator)==null?0:h.deviceMemory)){var k;h=(k=D.navigator)==null?void 0:k.deviceMemory;d.client.memoryTotalKbytes=""+h*1E6}T("web_gcf_hashes_innertube")&&(f=Nq())&&(k=f.coldConfigData,h=f.coldHashData,f=f.hotHashData,d.client.configInfo=d.client.configInfo||{},k&&(d.client.configInfo.coldConfigData=
k),h&&(d.client.configInfo.coldHashData=h),f&&(d.client.configInfo.hotHashData=f));k=Vm(D.location.href);!T("web_populate_internal_geo_killswitch")&&k.internalcountrycode&&(e.internalGeo=k.internalcountrycode);e.clientName==="MWEB"||e.clientName==="WEB"?(e.mainAppWebInfo={graftUrl:D.location.href},T("kevlar_woffle")&&Ln.instance&&(k=Ln.instance,e.mainAppWebInfo.pwaInstallabilityStatus=!k.h&&k.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),e.mainAppWebInfo.webDisplayMode=
Mn(),e.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):e.clientName==="TVHTML5"&&(!T("web_lr_app_quality_killswitch")&&(k=R("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:k})),k=R("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:k}));if(!T("web_populate_time_zone_itc_killswitch")){a:{if(typeof Intl!=="undefined")try{var l=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break a}catch(Z){}l=
void 0}l&&(e.timeZone=l)}(l=R("EXPERIMENTS_TOKEN",""))?e.experimentsToken=l:delete e.experimentsToken;l=hn();Jw.instance||(Jw.instance=new Jw);d.request=Object.assign({},d.request,{internalExperimentFlags:l,consistencyTokenJars:rg(Jw.instance.h)});!T("web_prequest_context_killswitch")&&(l=R("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=l);e=Yn();l=ao(58);e=e.get("gsml","");d.user=Object.assign({},d.user);l&&(d.user.enableSafetyMode=l);e&&(d.user.lockedSafetyMode=!0);T("warm_op_csn_cleanup")?
c&&(b=hv())&&(d.clientScreenNonce=b):!b&&(b=hv())&&(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=F("yt.mdx.remote.remoteClient_"))d.remoteClient=a;Pw().setLocationOnInnerTubeContext(d);try{var m=Zm(),n=m.bid;delete m.bid;d.adSignalsInfo={params:[],bid:n};for(var r=y(Object.entries(m)),t=r.next();!t.done;t=r.next()){var w=y(t.value),x=w.next().value,z=w.next().value;m=x;n=z;a=void 0;(a=d.adSignalsInfo.params)==null||a.push({key:m,value:""+n})}var G,H;if(((G=d.client)==null?
void 0:G.clientName)==="TVHTML5"||((H=d.client)==null?void 0:H.clientName)==="TVHTML5_UNPLUGGED"){var S=R("INNERTUBE_CONTEXT");S.adSignalsInfo&&(d.adSignalsInfo.advertisingId=S.adSignalsInfo.advertisingId,d.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",d.adSignalsInfo.limitAdTracking=S.adSignalsInfo.limitAdTracking)}}catch(Z){Pu(Z)}return d}
;function Rw(a){var b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);R("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=R("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=R("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a),R("ENABLE_LAVA_HEADER_ON_IT_EXPANSION")&&(a=R("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a));return b}
;function Sw(){this.h={}}
p=Sw.prototype;p.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
p.get=function(a){if(this.contains(a))return this.h[a]};
p.set=function(a,b){this.h[a]=b};
p.Tb=function(){return Object.keys(this.h)};
p.remove=function(a){delete this.h[a]};function Tw(){this.mappings=new Sw}
Tw.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
Tw.prototype.get=function(a){var b=this.mappings.get(a.toString());a:switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Eb(b)}return a};
new Tw;function Uw(a){return function(){return new a}}
;var Vw={},Ww=(Vw.WEB_UNPLUGGED="^unplugged/",Vw.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Vw.WEB_UNPLUGGED_OPS="^unplugged/",Vw.WEB_UNPLUGGED_PUBLIC="^unplugged/",Vw.WEB_CREATOR="^creator/",Vw.WEB_KIDS="^kids/",Vw.WEB_EXPERIMENTS="^experiments/",Vw.WEB_MUSIC="^music/",Vw.WEB_REMIX="^music/",Vw.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Vw.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Vw);
function Xw(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=Ww[b];if(c){c=new RegExp(c);for(var d=y(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(Ww).forEach(function(g){var h=y(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=y(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function Yw(){}
Yw.prototype.u=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?Qn:c;var d={context:Qw(a.clickTrackingParams,!1,this.o)};var e=this.i(a);if(e){this.h(d,e,b);var f;b="/youtubei/v1/"+Xw(this.j());(e=(f=Yt(a.commandMetadata,lm))==null?void 0:f.apiUrl)&&(b=e);f=sv(rv(b));a=Object.assign({},{command:a},void 0);d={input:f,ab:tv(f),Ga:d,config:a};d.config.Pb?d.config.Pb.identity=c:d.config.Pb={identity:c};return d}c=new U("Error: Failed to create Request from Command.",a);Pu(c)};
da.Object.defineProperties(Yw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function Zw(){}
v(Zw,Yw);function $w(){}
v($w,Zw);$w.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",ab:tv("/getDatasyncIdsEndpoint","GET"),Ga:{}}};
$w.prototype.j=function(){return[]};
$w.prototype.i=function(){};
$w.prototype.h=function(){};var ax={},bx=(ax.GET_DATASYNC_IDS=Uw($w),ax);function cx(a){var b;(b=F("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},E("ytcsi."+(a||"")+"data_",b));return b}
function dx(){var a=cx();a.info||(a.info={});return a.info}
function ex(a){a=cx(a);a.metadata||(a.metadata={});return a.metadata}
function fx(a){a=cx(a);a.tick||(a.tick={});return a.tick}
function gx(a){a=cx(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function hx(a){a=gx(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function ix(a){var b=cx(a).nonce;b||(b=Yu(),cx(a).nonce=b);return b}
;function jx(){var a=F("ytcsi.debug");a||(a=[],E("ytcsi.debug",a),E("ytcsi.reference",{}));return a}
function kx(a){a=a||"";var b=F("ytcsi.reference");b||(jx(),b=F("ytcsi.reference"));if(b[a])return b[a];var c=jx(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},lx=(W.auto_search="LATENCY_ACTION_AUTO_SEARCH",W.ad_to_ad="LATENCY_ACTION_AD_TO_AD",W.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",W.app_startup="LATENCY_ACTION_APP_STARTUP",W.browse="LATENCY_ACTION_BROWSE",W.cast_splash="LATENCY_ACTION_CAST_SPLASH",W.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",W.channels="LATENCY_ACTION_CHANNELS",W.chips="LATENCY_ACTION_CHIPS",W.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",W.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",W.editor=
"LATENCY_ACTION_EDITOR",W.embed="LATENCY_ACTION_EMBED",W.embed_no_video="LATENCY_ACTION_EMBED_NO_VIDEO",W.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",W.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",W.explore="LATENCY_ACTION_EXPLORE",W.favorites="LATENCY_ACTION_FAVORITES",W.home="LATENCY_ACTION_HOME",W.inboarding="LATENCY_ACTION_INBOARDING",W.landing="LATENCY_ACTION_LANDING",W.library="LATENCY_ACTION_LIBRARY",W.live="LATENCY_ACTION_LIVE",
W.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",W.management="LATENCY_ACTION_MANAGEMENT",W.mini_app="LATENCY_ACTION_MINI_APP_PLAY",W.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",W.onboarding="LATENCY_ACTION_ONBOARDING",W.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",W.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",W.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",W.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",W.prebuffer=
"LATENCY_ACTION_PREBUFFER",W.prefetch="LATENCY_ACTION_PREFETCH",W.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",W.profile_switcher="LATENCY_ACTION_LOGIN",W.projects="LATENCY_ACTION_PROJECTS",W.reel_watch="LATENCY_ACTION_REEL_WATCH",W.results="LATENCY_ACTION_RESULTS",W.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",W.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",W.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",W.review="LATENCY_ACTION_REVIEW",W.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",
W.search_ui="LATENCY_ACTION_SEARCH_UI",W.search_suggest="LATENCY_ACTION_SUGGEST",W.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",W.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",W.seek="LATENCY_ACTION_PLAYER_SEEK",W.settings="LATENCY_ACTION_SETTINGS",W.store="LATENCY_ACTION_STORE",W.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",W.tenx="LATENCY_ACTION_TENX",W.video_preview="LATENCY_ACTION_VIDEO_PREVIEW",W.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",W.watch="LATENCY_ACTION_WATCH",
W.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",W["watch,watch7"]="LATENCY_ACTION_WATCH",W["watch,watch7_html5"]="LATENCY_ACTION_WATCH",W["watch,watch7ad"]="LATENCY_ACTION_WATCH",W["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",W.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",W.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",W.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",W.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",W.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",
W.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",W.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",W.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",W);function mx(a,b){Wq.call(this,1,arguments);this.timer=b}
v(mx,Wq);var nx=new Xq("aft-recorded",mx);E("ytLoggingGelSequenceIdObj_",D.ytLoggingGelSequenceIdObj_||{});var ox=D.ytLoggingLatencyUsageStats_||{};E("ytLoggingLatencyUsageStats_",ox);function px(){this.h=0}
function qx(){px.instance||(px.instance=new px);return px.instance}
px.prototype.tick=function(a,b,c,d){rx(this,"tick_"+a+"_"+b)||$o("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
px.prototype.info=function(a,b,c){var d=Object.keys(a).join("");rx(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,$o("latencyActionInfo",a,{cttAuthInfo:c}))};
px.prototype.jspbInfo=function(){};
px.prototype.span=function(a,b,c){var d=Object.keys(a).join("");rx(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,$o("latencyActionSpan",a,{cttAuthInfo:c}))};
function rx(a,b){ox[b]=ox[b]||{count:0};var c=ox[b];c.count++;c.time=V();a.h||(a.h=lo(function(){var d=V(),e;for(e in ox)ox[e]&&d-ox[e].time>6E4&&delete ox[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new U("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||Qu(c)),!0):!1}
;var sx=window;function tx(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function ux(){var a;if(T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=X==null?void 0:(a=X.getEntriesByType)==null?void 0:(b=a.call(X,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=vx(e.requestStart),e.responseEnd=vx(e.responseEnd),e.redirectStart=vx(e.redirectStart),e.redirectEnd=vx(e.redirectEnd),e.domainLookupEnd=vx(e.domainLookupEnd),e.connectStart=vx(e.connectStart),e.connectEnd=
vx(e.connectEnd),e.responseStart=vx(e.responseStart),e.secureConnectionStart=vx(e.secureConnectionStart),e.domainLookupStart=vx(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=X.timing}else a=T("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(X.timing)):X.timing;return a}
function vx(a){return Math.round(wx()+a)}
function wx(){return(T("csi_use_time_origin")||T("csi_use_time_origin_tvhtml5"))&&X.timeOrigin?Math.floor(X.timeOrigin):X.timing.navigationStart}
var X=sx.performance||sx.mozPerformance||sx.msPerformance||sx.webkitPerformance||new tx;var xx=!1,yx=!1,zx={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj",'script[name="embed_client"]':"ecj",'link[rel="stylesheet"][name="embed-ui"]':"ecc"};Ua(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||qi,X);function Ax(a,b){if(!T("web_csi_action_sampling_enabled")||!cx(b).actionDisabled){var c=kx(b||"");dw(c.info,a);a.loadType&&(c=a.loadType,ex(b).loadType=c);dw(hx(b),a);c=ix(b);b=cx(b).cttAuthInfo;qx().info(a,c,b)}}
function Bx(){var a,b,c,d;return((d=zt().resolve(st(Jq))==null?void 0:(a=Kq())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Cx(a,b,c){if(!T("web_csi_action_sampling_enabled")||!cx(c).actionDisabled){var d=ix(c),e;if(e=T("web_csi_debug_sample_enabled")&&d){(zt().resolve(st(Jq))==null?0:Kq())&&!yx&&(yx=!0,Cx("gcfl",V(),c));var f,g,h;e=(zt().resolve(st(Jq))==null?void 0:(f=Kq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=Bx();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=0x800000000000);e=f%1E5%e!==0;cx(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Ax(f,c));cx(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,X.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||T("web_csi_disable_alt_time_performance_mark"))X.mark(e);else{f=T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")?f-X.timeOrigin:f-(X.timeOrigin||X.timing.navigationStart);try{X.mark(e,
{startTime:f})}catch(k){}}e=kx(c||"");e.tick[a]=b||V();if(e.callback&&e.callback[a])for(e=y(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=gx(c);e.gelTicks&&(e.gelTicks[a]=!0);f=fx(c);e=b||V();T("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=cx(c).cttAuthInfo;a==="_start"?(a=qx(),rx(a,"baseline_"+d)||$o("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):qx().tick(a,d,b,f);Dx(c);return e}}}
function Ex(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Ms+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Fx(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=y(Object.entries(R("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=y(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Gx(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Gb(document)&&a.setAttribute("nonce",Gb(document));return c?(a=X.getEntriesByName(c))&&a[0]&&(a=a[0],c=wx(),Cx("rsf_"+b,c+Math.round(a.fetchStart)),Cx("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function Hx(){var a=window.location.protocol,b=X.getEntriesByType("resource");b=Ub(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Wb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Cx("wffs",vx(b.startTime)),Cx("wffe",vx(b.responseEnd)))}
function Ix(a){var b=Jx("aft",a);if(b)return b;b=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Jx(b[d],a);if(e)return e}return NaN}
function Jx(a,b){if(a=fx(b)[a])return typeof a==="number"?a:a[a.length-1]}
function Dx(a){var b=Jx("_start",a),c=Ix(a),d=!xx;b&&c&&d&&(br(nx,new mx(Math.round(c-b),a)),xx=!0)}
function Kx(){if(X.getEntriesByType){var a=X.getEntriesByType("paint");if(a=Xb(a,function(c){return c.name==="first-paint"}))return vx(a.startTime)}var b;
T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")?b=X.getEntriesByType("first-paint")[0].startTime:b=X.timing.Ph;return b?Math.max(0,b):0}
;function Lx(a,b){Lm(function(){kx("").info.actionType=a;b&&Hm("TIMING_AFT_KEYS",b);Hm("TIMING_ACTION",a);var c=Fx();Object.keys(c).length>0&&Ax(c);c={isNavigation:!0,actionType:lx[R("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=R("PREVIOUS_ACTION");d&&(c.previousAction=lx[d]||"LATENCY_ACTION_UNKNOWN");if(d=R("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=R("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=hv())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=Ex();if(d===1||d===-1)c.isVisible=!0;ex();dx();
c.loadType="cold";d=dx();var e=ux(),f=wx(),g=R("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!T("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Cx("srt",e.responseStart),d.prerender!==1&&Cx("_start",f,void 0));d=Kx();d>0&&Cx("fpt",d);d=ux();d.isPerformanceNavigationTiming&&Ax({performanceNavigationTiming:!0},void 0);Cx("nreqs",d.requestStart,void 0);Cx("nress",d.responseStart,void 0);Cx("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Cx("nrs",d.redirectStart,void 0),Cx("nre",
d.redirectEnd,void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Cx("ndnss",d.domainLookupStart,void 0),Cx("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Cx("ntcps",d.connectStart,void 0),Cx("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=wx()&&d.connectEnd-d.secureConnectionStart>0&&(Cx("nstcps",d.secureConnectionStart,void 0),Cx("ntcpe",d.connectEnd,void 0));X&&"getEntriesByType"in X&&Hx();d=[];if(document.querySelector&&X&&X.getEntriesByName)for(var h in zx)zx.hasOwnProperty(h)&&
(e=zx[h],Gx(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=y(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Ax(c);c=gx();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=hx();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(ex().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=fx();e=gx();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Cx(k,Jx(k));else if(T("log_repeated_ytcsi_ticks"))for(f=
y(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Cx(k.slice(1),g);k={};d=!1;h=y(h);for(e=h.next();!e.done;e=h.next())d=e.value,dw(c,d),dw(k,d),d=!0;d&&Ax(k)}E("ytglobal.timingready_",!0);k=R("TIMING_ACTION");F("ytglobal.timingready_")&&k&&Mx()&&Ix()&&Dx()})()}
function Mx(a){return Lm(function(){return Nx("_start",a)})()}
function Ox(a,b,c){Lm(Ax)(a,b,c===void 0?!1:c)}
function Px(a,b,c){return Lm(Cx)(a,b,c)}
function Nx(a,b){return Lm(function(){var c=fx(b);return a in c})()}
function Qx(a){if(!T("universal_csi_network_ticks"))return"";a=lc(a)||"";for(var b=Object.keys(Uq),c=0;c<b.length;c++){var d=b[c];if(a.includes(d))return d}return""}
function Rx(a){if(!T("universal_csi_network_ticks"))return function(){};
var b=Uq[a];return b?(Sx(b),function(){var c=T("universal_csi_network_ticks")?(c=Vq[a])?Sx(c):!1:!1;return c}):function(){}}
function Sx(a){return Lm(function(){if(Nx(a))return!1;Px(a,void 0,void 0);return!0})()}
function Tx(a){Lm(function(){if(!Mx("attestation_challenge_fetch")||Nx(a,"attestation_challenge_fetch"))return!1;Px(a,void 0,"attestation_challenge_fetch");return!0})()}
function Ux(){Lm(function(){var a=ix();requestAnimationFrame(function(){setTimeout(function(){a===ix()&&Px("ol",void 0,void 0)},0)})})()}
var Vx=window;Vx.ytcsi&&(Vx.ytcsi.infoGel=Ox,Vx.ytcsi.tick=Px);var Wx="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),Xx=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function Yx(a,b,c,d){this.u=a;this.fa=b;this.j=c;this.o=d;this.i=void 0;this.h=new Map;a.cc||(a.cc={});a.cc=Object.assign({},bx,a.cc)}
function Zx(a,b,c,d){if(Yx.instance!==void 0){if(d=Yx.instance,a=[a!==d.u,b!==d.fa,c!==d.j,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new U("InnerTubeTransportService is already initialized",a);
}else Yx.instance=new Yx(a,b,c,d)}
function $x(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?Qn:c;var d=ay(a,b);return d?new si(function(e,f){var g,h,k,l,m;return B(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.u(b,void 0,c);if(!h){f(new U("Error: Failed to build request for command.",b));n.B(0);break}Ew(h.input);l=((k=h.ab)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.j.Nd){m=by(h.config,l);n.B(4);break}return n.yield(cy(h.config,l),5);case 5:m=n.i;case 4:e(dy(a,h,m)),n.h=
0}})}):xi(new U("Error: No request builder found for command.",b))}
function ey(a,b){function c(){}
var d="/youtubei/v1/"+Xw(Kv);var e=e===void 0?{Pb:{identity:Qn}}:e;var f=f===void 0?!0:f;c=Rx(Qx(d));b.context||(b.context=Qw(void 0,f));return new si(function(g){var h,k,l,m,n;return B(function(r){if(r.h==1)return h=rv(d),k=Ym(h)?"same-origin":"cors",a.j.Nd?(l=by(e,k),r.B(2)):r.yield(cy(e,k),3);r.h!=2&&(l=r.i);m=sv(rv(d));n={input:m,ab:tv(m),Ga:b,config:e};g(dy(a,n,l,c));r.h=0})})}
function fy(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.o){d=y(Wx);for(var e=d.next();!e.done;e=d.next())e=e.value,a.o[e]&&a.o[e].handleResponse(b,c)}}
function dy(a,b,c,d){d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,r,t,w,x,z,G,H,S,Z,mb,Rb,Wa,Bb,Xa,Na,Ja,Ia,sh,Ns,Os,Ps,Qs;return B(function(ha){switch(ha.h){case 1:ha.B(2);break;case 3:if((e=ha.i)&&!e.isExpired())return ha.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Ga)==null?0:g.context)){ha.B(4);break}h=b.Ga.context;ha.B(5);break;case 5:k=y([]),l=k.next();case 8:if(l.done){ha.B(4);break}m=l.value;return ha.yield(m.Qh(h),9);case 9:l=k.next();ha.B(8);break;case 4:if((n=a.i)==null||!n.Yh(b.input,b.Ga)){ha.B(12);break}return ha.yield(a.i.Kh(b.input,
b.Ga),13);case 13:return r=ha.i,fy(a,r,b),ha.return(r);case 12:return(x=(w=b.config)==null?void 0:w.Th)&&a.h.has(x)?t=a.h.get(x):(z=JSON.stringify(b.Ga),S=(H=(G=b.ab)==null?void 0:G.headers)!=null?H:{},b.ab=Object.assign({},b.ab,{headers:Object.assign({},S,c)}),Z=Object.assign({},b.ab),b.ab.method==="POST"&&(Z=Object.assign({},Z,{body:z})),((mb=b.config)==null?0:mb.Ye)&&Px(b.config.Ye),Rb=function(){return a.fa.fetch(b.input,Z,b.config)},t=Rb(),x&&a.h.set(x,t)),ha.yield(t,14);
case 14:if((Wa=ha.i)&&"error"in Wa&&((Bb=Wa)==null?0:(Xa=Bb.error)==null?0:Xa.details))for(Na=Wa.error.details,Ja=y(Na),Ia=Ja.next();!Ia.done;Ia=Ja.next())sh=Ia.value,(Ns=sh["@type"])&&Xx.indexOf(Ns)>-1&&(delete sh["@type"],Wa=sh);x&&a.h.has(x)&&a.h.delete(x);((Os=b.config)==null?0:Os.Ze)&&Px(b.config.Ze);if(Wa||(Ps=a.i)==null||!Ps.xh(b.input,b.Ga)){ha.B(15);break}return ha.yield(a.i.Jh(b.input,b.Ga),16);case 16:Wa=ha.i;case 15:return fy(a,Wa,b),((Qs=b.config)==null?0:Qs.Ve)&&Px(b.config.Ve),d(),
ha.return(Wa||void 0)}})}
function ay(a,b){a:{a=a.u;var c,d=(c=Yt(b,mm))==null?void 0:c.signal;if(d&&a.cc&&(c=a.cc[d])){var e=c();break a}var f;if((c=(f=Yt(b,km))==null?void 0:f.request)&&a.he&&(f=a.he[c])){e=f();break a}for(e in b)if(a.Kc[e]&&(b=a.Kc[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function cy(a,b){var c,d,e,f;return B(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Pb)==null?void 0:d.sessionIndex;var h=g.yield;var k=Pn(0,{sessionIndex:e});if(!(k instanceof si)){var l=new si(qi);ti(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Rw(b),f)))})}
function by(a,b){var c;a=a==null?void 0:(c=a.Pb)==null?void 0:c.sessionIndex;c=Pn(0,{sessionIndex:a});return Object.assign({},Rw(b),c)}
;var gy=new qt("INNERTUBE_TRANSPORT_TOKEN");function hy(){}
v(hy,Zw);hy.prototype.j=function(){return Qv};
hy.prototype.i=function(a){return Yt(a,ym)||void 0};
hy.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(hy.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function iy(){}
v(iy,Zw);iy.prototype.j=function(){return Rv};
iy.prototype.i=function(a){return Yt(a,xm)||void 0};
iy.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(iy.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var jy=new qt("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function ky(a){this.H=a}
v(ky,Zw);ky.prototype.j=function(){return Lv};
ky.prototype.i=function(a){return Yt(a,qm)||Yt(a,rm)||Yt(a,pm)};
ky.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.H)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.H.i(b.clientParamIdentifier)}};
ky[pt]=[jy];function ly(){}
v(ly,Zw);ly.prototype.j=function(){return Nv};
ly.prototype.i=function(a){return Yt(a,om)||void 0};
ly.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(ly.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function my(){}
v(my,Zw);my.prototype.j=function(){return Ov};
my.prototype.i=function(a){return Yt(a,um)||void 0};
my.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function ny(){}
v(ny,Zw);ny.prototype.j=function(){return Pv};
ny.prototype.i=function(a){return Yt(a,tm)||void 0};
ny.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function oy(){}
v(oy,Zw);oy.prototype.j=function(){return Mv};
oy.prototype.i=function(a){return Yt(a,sm)};
oy.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var py=new qt("FETCH_FN_TOKEN"),qy=new qt("PARSE_FN_TOKEN"),ry=new qt("WINDOW_REQUEST_TOKEN");function sy(a,b){var c=C.apply(2,arguments);a=a===void 0?0:a;U.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
v(sy,U);var ty=new qt("NETWORK_SLI_TOKEN");function uy(a,b,c,d){this.h=a;this.i=b;this.j=c;this.o=d}
uy.prototype.fetch=function(a,b,c){var d=this,e,f,g;return B(function(h){e=vy(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){Qu(k);
if((c==null?0:c.re)&&k instanceof sy&&k.errorType===1)return Promise.reject(k)}))})};
function vy(a,b,c){if(a.h){var d=lc(vc(b,"key"))||"/UNKNOWN_PATH";a.h.start(d)}d=c;T("wug_networking_gzip_request")&&(d=Dr(c));var e;return new ((e=a.o)!=null?e:window.Request)(b,d)}
uy.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.He)&&a.ok)return Lf(b.He,e);e=e.replace(")]}'","");if((b==null?0:b.re)&&e)try{var f=d(e)}catch(h){throw new sy(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Eh(),c=c.then(function(e){Qu(new U("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
uy[pt]=[st(ty),st(py),st(qy),st(ry)];var wy=new qt("NETWORK_MANAGER_TOKEN");var xy;function yy(a){var b=new rj;if(a.interpreterJavascript){var c=cm(a.interpreterJavascript);c=Jb(c).toString();var d=new pj;If(d,6,c);Df(b,pj,1,d,de)}else a.interpreterUrl&&(c=dm(a.interpreterUrl),c=pb(c).toString(),d=new qj,If(d,4,c),Df(b,qj,2,d,de));a.interpreterHash&&Jf(b,3,a.interpreterHash);a.program&&Jf(b,4,a.program);a.globalName&&Jf(b,5,a.globalName);a.clientExperimentsStateBlob&&Jf(b,7,a.clientExperimentsStateBlob);return b}
function zy(a){var b={};a=y(a.split("&"));for(var c=a.next();!c.done;c=a.next())c=c.value.split("="),c.length===2&&(b[c[0]]=c[1]);return b}
;function Bc(){if(T("bg_st_hr"))return"havuokmhhs-0";var a,b=((a=performance)==null?void 0:a.timeOrigin)||0;return"havuokmhhs-"+Math.floor(b)}
function Ay(a){this.h=a}
Ay.prototype.bindInnertubeChallengeFetcher=function(a){this.h.bicf(a)};
Ay.prototype.registerChallengeFetchedCallback=function(a){this.h.bcr(a)};
Ay.prototype.getLatestChallengeResponse=function(){return this.h.blc()};
function By(){return new Promise(function(a){var b=window.top;b.ntpevasrs!==void 0?a(new Ay(b.ntpevasrs)):(b.ntpqfbel===void 0&&(b.ntpqfbel=[]),b.ntpqfbel.push(function(c){a(new Ay(c))}))})}
;var Cy=[],Dy=!1;function Ey(){if(!T("disable_biscotti_fetch_for_ad_blocker_detection")&&!T("disable_biscotti_fetch_entirely_for_all_web_clients")&&uv()){var a=R("PLAYER_VARS",{});if(wg(a)!="1"&&!wv(a)){var b=function(){Dy=!0;"google_ad_status"in window?Hm("DCLKSTAT",1):Hm("DCLKSTAT",2)};
try{Uv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Cy.push(Tj.pa(function(){if(!(Dy||"google_ad_status"in window)){try{Yv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Dy=!0;Hm("DCLKSTAT",3)}},5E3))}}}
function Fy(){var a=Number(R("DCLKSTAT",0));return isNaN(a)?0:a}
;function Y(a){this.h=a}
[new Y("b.f_"),new Y("j.s_"),new Y("r.s_"),new Y("e.h_"),new Y("i.s_"),new Y("s.t_"),new Y("p.h_"),new Y("s.i_"),new Y("f.i_"),new Y("a.b_"),new Y("a.o_"),new Y("g.o_"),new Y("p.i_"),new Y("p.m_"),new Y("n.k_"),new Y("i.f_"),new Y("a.s_"),new Y("m.c_"),new Y("n.h_"),new Y("o.p_"),new Y("m.p_"),new Y("o.a_"),new Y("d.p_")].reduce(function(a,b){a[b.h]=b;return a},{});function Gy(a,b,c){var d=this;this.network=a;this.options=b;this.o=c;this.h=null;if(b.di){var e=new vj;this.h=e.promise;D.ytAtRC&&Tj.Sa(function(){var f,g;return B(function(h){if(h.h==1){if(!D.ytAtRC)return h.return();f=Hy(null);return h.yield(d.ib(f),2)}g=h.i;D.ytAtRC&&D.ytAtRC(JSON.stringify(g));h.h=0})},2);
By().then(function(f){var g,h,k,l;return B(function(m){if(m.h==1)return f.bindInnertubeChallengeFetcher(function(n){return d.ib(Hy(n))}),m.yield(Ac(),2);
g=m.i;h=f.getLatestChallengeResponse();k=h.challenge;if(!k)throw Error("BGE_MACIL");l={challenge:k,gb:zy(k),vm:g,bgChallenge:new rj};e.resolve(l);f.registerChallengeFetchedCallback(function(n){n=n.challenge;if(!n)throw Error("BGE_MACR");n={challenge:n,gb:zy(n),vm:g,bgChallenge:new rj};d.h=Promise.resolve(n)});
m.h=0})})}else b.preload&&Iy(this,new Promise(function(f){lo(function(){f(Jy(d))},0)}))}
Gy.prototype.j=function(){var a=this;return B(function(b){return b.h==1?b.yield(Promise.race([a.h,null]),2):b.return(!!b.i)})};
Gy.prototype.i=function(a,b,c){var d=this,e,f,g;return B(function(h){d.h===null&&Iy(d,Jy(d));e=!1;f={};g=function(){var k,l,m;return B(function(n){switch(n.h){case 1:return n.yield(d.h,2);case 2:k=n.i;f.challenge=k.challenge;if(!k.vm){"c1a"in k.gb&&(f.error="ATTESTATION_ERROR_VM_NOT_INITIALIZED");n.B(3);break}l=Object.assign({},{c:k.challenge,e:a},b);va(n,4);e=!0;if(T("attbs")&&!T("attmusi")){m=k.vm.hd({wb:l});n.B(6);break}return n.yield(k.vm.snapshot({wb:l}),7);case 7:m=n.i;case 6:m?f.webResponse=
m:f.error="ATTESTATION_ERROR_VM_NO_RESPONSE";wa(n,3);break;case 4:xa(n),f.error="ATTESTATION_ERROR_VM_INTERNAL_ERROR";case 3:if(a==="ENGAGEMENT_TYPE_PLAYBACK"){var r=k.gb,t={};r.c6a&&(t.reportingStatus=String(Number(r.c)^Fy()));r.c6b&&(t.broadSpectrumDetectionResult=String(Number(r.c)^Number(R("CATSTAT",0))));f.adblockReporting=t}return n.return(f)}})};
return h.return(Promise.race([g(),Ky(c,function(){var k=Object.assign({},f);e&&(k.error="ATTESTATION_ERROR_VM_TIMEOUT");return k})]))})};
function Hy(a){var b={engagementType:"ENGAGEMENT_TYPE_UNBOUND"};a&&(b.interpreterHash=a);return b}
function Jy(a,b){b=b===void 0?0:b;var c,d,e,f,g,h,k,l,m,n,r,t;return B(function(w){switch(w.h){case 1:c=Hy(Aj().h);if(T("att_fet_ks"))return va(w,7),w.yield(a.ib(c),9);va(w,4);return w.yield(Ly(a,c),6);case 6:g=w.i;e=g.Qe;f=g.Re;d=g;wa(w,3);break;case 4:return xa(w),Qu(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),My(a,864E5),w.return({challenge:"",gb:{},vm:void 0,bgChallenge:void 0});case 9:d=w.i;if(!d)throw Error("Fetching Attestation challenge returned falsy");
if(!d.challenge)throw Error("Missing Attestation challenge");e=d.challenge;f=zy(e);if("c1a"in f&&(!d.bgChallenge||!d.bgChallenge.program))throw Error("Expected bg challenge but missing.");wa(w,3);break;case 7:h=xa(w);Qu(h);b++;if(b>=5)return Qu(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),My(a,864E5),w.return({challenge:"",gb:{},vm:void 0,bgChallenge:void 0});k=1E3*Math.pow(2,b-1)+Math.random()*1E3;return w.return(new Promise(function(x){lo(function(){x(Jy(a,
b))},k)}));
case 3:l=Number(f.t)||7200;My(a,l*1E3);m=void 0;if(!("c1a"in f&&d.bgChallenge)){w.B(10);break}n=yy(d.bgChallenge);va(w,11);return w.yield(Bj(Aj(),n),13);case 13:wa(w,12);break;case 11:return r=xa(w),Qu(r),w.return({challenge:e,gb:f,vm:m,bgChallenge:n});case 12:return va(w,14),m=new xj({challenge:n,Bd:{Da:"aGIf"}}),w.yield(m.cd,16);case 16:wa(w,10);break;case 14:t=xa(w),Qu(t),m=void 0;case 10:return w.return({challenge:e,gb:f,vm:m,bgChallenge:n})}})}
Gy.prototype.ib=function(a){var b=this,c;return B(function(d){c=b.o;if(!c||c.ta())return d.return(b.network.ib(a));Tx("att_pna");return d.return(new Promise(function(e){Yh(c,"publicytnetworkstatus-online",function(){b.network.ib(a).then(e)})}))})};
function Ny(a){if(!a)throw Error("Fetching Attestation challenge returned falsy");if(!a.challenge)throw Error("Missing Attestation challenge");var b=a.challenge,c=zy(b);if("c1a"in c&&(!a.bgChallenge||!a.bgChallenge.program))throw Error("Expected bg challenge but missing.");return Object.assign({},a,{Qe:b,Re:c})}
function Ly(a,b){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:c=void 0,d=0,e={};case 2:if(!(d<5)){h.B(4);break}if(!(d>0)){h.B(5);break}e.pd=1E3*Math.pow(2,d-1)+Math.random()*1E3;return h.yield(new Promise(function(k){return function(l){lo(function(){l(void 0)},k.pd)}}(e)),5);
case 5:return va(h,7),h.yield(a.ib(b),9);case 9:return f=h.i,h.return(Ny(f));case 7:c=g=xa(h),g instanceof Error&&Qu(g);case 8:d++;e={pd:void 0};h.B(2);break;case 4:throw c;}})}
function Iy(a,b){a.h=b}
function Oy(a){var b,c,d;return B(function(e){if(e.h==1)return e.yield(Promise.race([a.h,null]),2);b=e.i;var f=Jy(a);a.h=f;(c=b)==null||(d=c.vm)==null||d.dispose();e.h=0})}
function My(a,b){function c(){var e;return B(function(f){e=d-Date.now();return e<1E3?f.yield(Oy(a),0):(lo(c,Math.min(e,6E4)),f.B(0))})}
var d=Date.now()+b;c()}
function Ky(a,b){return new Promise(function(c){lo(function(){c(b())},a)})}
;function Py(a){this.h=a}
Py.prototype.ib=function(a){Tx("att_fsr");return ey(this.h,a).then(function(b){Tx("att_frr");return b})};function Qy(){var a,b,c;return B(function(d){if(d.h==1)return a=zt().resolve(gy),a?d.yield($x(a),2):(Qu(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Qu(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Ah;return d.return(c)}Qu(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function Ry(){}
v(Ry,Zw);Ry.prototype.j=function(){return Nv};
Ry.prototype.i=function(a){return Yt(a,wm)};
Ry.prototype.h=function(a,b){b.undoToken&&(a.feedbackTokens=[b.undoToken]);b.isUndoTokenUnencrypted&&(a.isFeedbackTokenUnencrypted=b.isUndoTokenUnencrypted)};
da.Object.defineProperties(Ry.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Sy(){var a;return(a=R("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var Ty=D.caches,Uy;function Vy(a){var b=a.indexOf(":");return b===-1?{Ed:a}:{Ed:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Wy(){return B(function(a){if(Uy!==void 0)return a.return(Uy);Uy=new Promise(function(b){var c;return B(function(d){switch(d.h){case 1:return va(d,2),d.yield(Ty.open("test-only"),4);case 4:return d.yield(Ty.delete("test-only"),5);case 5:wa(d,3);break;case 2:if(c=xa(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Uy)})}
function Xy(a){var b,c,d,e,f,g,h;B(function(k){if(k.h==1)return k.yield(Wy(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(Ty.keys(),3)}c=k.i;d=y(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Vy(f),h=g.datasyncId,!h||a.includes(h)||b.push(Ty.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function Yy(){var a,b,c,d,e,f,g;return B(function(h){if(h.h==1)return h.yield(Wy(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=jo("cache contains other");return h.yield(Ty.keys(),3)}b=h.i;c=y(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Vy(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Zy(){try{return!!self.sessionStorage}catch(a){return!1}}
;function $y(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function az(a){if(Zy()){var b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=$y(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function bz(){if(!Zy())return!1;var a=jo(),b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=$y(c.value),c!==void 0&&c!==a)return!0;return!1}
;function cz(){Qy().then(function(a){a&&(oq(a),Xy(a),zw(a),az(a))})}
function dz(){var a=new xs;Tj.pa(function(){var b,c,d,e,f;return B(function(g){switch(g.h){case 1:if(T("ytidb_clear_optimizations_killswitch")){g.B(2);break}b=jo("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];oq(h);Xy(h);zw(h);az(h);return g.return()}c=Aw();d=bz();return g.yield(Yy(),3);case 3:return e=g.i,g.yield(pq(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.ta()?cz():Yh(a,"publicytnetworkstatus-online",cz),g.h=0}})})}
;var ez=["www.youtube-nocookie.com","www.youtubeeducation.com","youtube.googleapis.com"];function fz(){this.state=1;this.vm=null;this.h=void 0}
p=fz.prototype;p.initialize=function(a,b,c,d){this.h=d;if(a.program){var e;d=(e=a.interpreterUrl)!=null?e:null;if(a.interpreterSafeScript)e=cm(a.interpreterSafeScript);else{var f;e=(f=a.interpreterScript)!=null?f:null}a.interpreterSafeUrl&&(d=dm(a.interpreterSafeUrl).toString());gz(this,e,d,a.program,b,c)}else Qu(Error("BL:CIP"))};
function gz(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,Uv(c,function(){window[g]?hz(a,d,g,e):(a.state=3,Wv(c),Qu(new U("BL:ULB",""+c)))},f)):b?(f=Fg("SCRIPT"),b instanceof Hb?(f.textContent=Jb(b),Kb(f)):f.textContent=b,f.nonce=Gb(document),document.head.appendChild(f),document.head.removeChild(f),window[g]?hz(a,d,g,e):(a.state=4,Qu(new U("BL:ULBJ")))):Qu(new U("BL:ULV"))}
p.isLoading=function(){return this.state===2};
function hz(a,b,c,d){a.state=5;var e=!!a.h&&ez.includes(kc(a.h)||"");try{var f=new xj({program:b,globalName:c,Bd:{disable:!T("att_web_record_metrics")||!T("att_skip_metrics_for_cookieless_domains_ks")&&e,Da:"aGIf"}});f.cd.then(function(){a.state=6;d&&d(b)});
a.bd(f)}catch(g){a.state=7,g instanceof Error&&Qu(g)}}
p.invoke=function(a){a=a===void 0?{}:a;return this.ld()?this.Rd({wb:a}):null};
p.dispose=function(){this.bd(null);this.state=8};
p.ld=function(){return!!this.vm};
p.Rd=function(a){return this.vm.hd(a)};
p.bd=function(a){xc(this.vm);this.vm=a};function iz(){var a=F("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function jz(){fz.apply(this,arguments)}
v(jz,fz);jz.prototype.bd=function(a){var b;(b=iz())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.hd.bind(a)},E("yt.abuse.playerAttLoader",b),E("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(E("yt.abuse.playerAttLoader",null),E("yt.abuse.playerAttLoaderRun",null))};
jz.prototype.ld=function(){return!!iz()};
jz.prototype.Rd=function(a){return iz().bgvmc(a)};var kz=new qt("AUTH_SERVICE_TOKEN");function lz(a){Jt.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.H},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.H},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
v(lz,Jt);lz.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
lz.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
lz.prototype.H=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
lz.prototype.i=function(){this.h=new Map};function mz(a){Jt.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.H},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.H},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.H},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
T("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
v(mz,Jt);mz.prototype.i=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
mz.prototype.h=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
mz.prototype.u=function(a,b){a(b==null?void 0:b.event)};
mz.prototype.H=function(a,b){a(b==null?void 0:b.event)};function nz(){this.o=new lz;this.u=new mz}
nz.prototype.install=function(){var a=C.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.u.install(c)})};function oz(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
oz.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=hv(c===void 0?0:c)){a=this.client;d=new av({trackingParams:d});var e=void 0;if(T("no_client_ve_attach_unless_shown")){var f=uw(d,c);qw.set(f,!0);vw(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=tw({cttAuthInfo:jv(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?ww("visualElementGestured",f,d):a?Gu("visualElementGestured",d,a,f):$o("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
oz.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new av({trackingParams:a}),b,c===void 0?0:c)};
oz.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=hv(d);a||(a=(a=ev(d===void 0?0:d))?new av({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=tw({cttAuthInfo:jv(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?ww("visualElementStateChanged",d,b):a?Gu("visualElementStateChanged",b,a,d):$o("visualElementStateChanged",b,d))}};
function pz(a,b){if(b===void 0)for(var c=gv(),d=0;d<c.length;d++)c[d]!==void 0&&pz(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&sw(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function qz(){nz.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));T("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));T("web_log_cfg_cee_ks")||lo(rz)}
v(qz,nz);qz.prototype.j=function(){$o("finalPayload",{csn:hv()})};
qz.prototype.h=function(){Vu(Wu)};
qz.prototype.i=function(){var a=pz;oz.instance||(oz.instance=new oz);a(oz.instance)};
function rz(){var a=R("CLIENT_EXPERIMENT_EVENTS");if(a){var b=ie();a=y(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&$o("genericClientExperimentEvent",{eventType:c});delete Gm.CLIENT_EXPERIMENT_EVENTS}}
;function sz(){}
function tz(){var a=F("ytglobal.storage_");a||(a=new sz,E("ytglobal.storage_",a));return a}
sz.prototype.estimate=function(){var a,b,c;return B(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(uz()):d.return()})};
function uz(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
E("ytglobal.storageClass_",sz);function Yo(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
Yo.prototype.Ha=function(a){this.handleError(a)};
Yo.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":T("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":T("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":vz(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function vz(a,b){tz().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:wz(c==null?void 0:c.usage),deviceStorageQuotaMbytes:wz(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function wz(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var xz={Kc:{feedbackEndpoint:Uw(ly),modifyChannelNotificationPreferenceEndpoint:Uw(my),playlistEditEndpoint:Uw(ny),shareEntityEndpoint:Uw(ky),subscribeEndpoint:Uw(hy),undoFeedbackEndpoint:Uw(Ry),unsubscribeEndpoint:Uw(iy),webPlayerShareEntityServiceEndpoint:Uw(oy)}};function yz(){var a=zt();ut(a,{pb:wy,Hc:uy});ut(a,{pb:kz,Hc:Nn});var b=Pw(),c=a.resolve(kz),d=a.resolve(wy),e={};b&&(e.client_location=b);Zx(xz,d,c,e);ut(a,{pb:gy,kd:Yx.instance})}
;var zz={},Az=(zz["api.invalidparam"]=2,zz.auth=150,zz["drm.auth"]=150,zz["heartbeat.net"]=150,zz["heartbeat.servererror"]=150,zz["heartbeat.stop"]=150,zz["html5.unsupportedads"]=5,zz["fmt.noneavailable"]=5,zz["fmt.decode"]=5,zz["fmt.unplayable"]=5,zz["html5.missingapi"]=5,zz["html5.unsupportedlive"]=5,zz["drm.unavailable"]=5,zz["mrm.blocked"]=151,zz["embedder.identity.denied"]=152,zz);var Bz=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function Cz(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function Dz(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=y(Bz);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Ez(a,b,c,d){if(Oa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function Fz(a){I.call(this);var b=this;this.api=a;this.Y=this.u=!1;this.A=[];this.P={};this.j=[];this.i=[];this.Z=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=T("web_player_split_event_bus_iframe");this.o=R("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.G=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.Y=!0;b.u=!1;b.sendMessage("initialDelivery",Gz(b));b.sendMessage("onReady");e=y(b.A);for(d=e.next();!d.done;d=e.next())Hz(b,d.value);b.A=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.Z&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.P[e]||e==="onReady"||
(c=Iz(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.P[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&Cz(e)){var f=d;if(Oa(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=Dz(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=Dz(g);break;case "loadPlaylist":case "cuePlaylist":g=Ez(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);Cz(e)&&Jz(b,Gz(b))}}}};
Kz.addEventListener("message",this.G);if(a=R("WIDGET_ID"))this.sessionId=a;Lz(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.Z=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?Az[c]||d:d;b.sendMessage("onError",Number(b.errorCode))}});
Lz(this,"onVideoProgress",this.lf.bind(this));Lz(this,"onVolumeChange",this.mf.bind(this));Lz(this,"onApiChange",this.df.bind(this));Lz(this,"onPlaybackQualityChange",this.hf.bind(this));Lz(this,"onPlaybackRateChange",this.jf.bind(this));Lz(this,"onStateChange",this.kf.bind(this));Lz(this,"onWebglSettingsChanged",this.nf.bind(this));Lz(this,"onCaptionsTrackListChanged",this.ef.bind(this));Lz(this,"captionssettingschanged",this.ff.bind(this))}
v(Fz,I);function Jz(a,b){a.sendMessage("infoDelivery",b)}
p=Fz.prototype;p.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.Y?Hz(this,a):this.A.push(a)};
function Iz(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function Lz(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function Gz(a){if(!a.api)return null;var b=a.api.getApiInterface();Yb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
p.kf=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&!T("embeds_enable_vfsyb")&&(a.storyboardFormat=this.api.getStoryboardFormat());Jz(this,a)};
p.hf=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());Jz(this,a)};
p.jf=function(a){Jz(this,{playbackRate:a})};
p.df=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
p.mf=function(){Jz(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
p.lf=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Jz(this,a)};
p.nf=function(){Jz(this,{sphericalProperties:this.api.getSphericalProperties()})};
p.ef=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};Jz(this,a)}};
p.ff=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};Jz(this,a)}};
function Hz(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){Qu(d)}}}
p.ba=function(){I.prototype.ba.call(this);Kz.removeEventListener("message",this.G);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var Kz=window;function Mz(a,b,c){I.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=T("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.ea){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=Nz(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=Oz(g,f))&&Pz(d,g,f))}}}}}};
Qz.addEventListener("message",this.i);Pz(this,"RECEIVING")}
v(Mz,I);p=Mz.prototype;p.addListener=function(a,b){if(!(a in this.h)){var c=this.gf.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
p.gf=function(a,b){this.ea||Pz(this,a,Rz(a,b))};
p.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
p.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
p.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function Nz(a,b){switch(a){case "loadVideoById":return[Dz(b)];case "cueVideoById":return[Dz(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[Ez(b)];case "cuePlaylist":return[Ez(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Oz(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function Rz(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function Pz(a,b,c){a.ea||(b={id:a.id,command:b},c&&(b.data=c),Sz.postMessage(JSON.stringify(b),a.origin))}
p.ba=function(){Qz.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);I.prototype.ba.call(this)};
var Qz=window,Sz=window.parent;var Tz=new jz;function Uz(){return Tz.ld()}
function Vz(a){a=a===void 0?{}:a;return Tz.invoke(a)}
;function Wz(a,b,c,d,e){I.call(this);var f=this;this.A=b;this.webPlayerContextConfig=d;this.Lb=e;this.Qa=!1;this.api={};this.ma=this.u=null;this.U=new N;this.h={};this.Z=this.xa=this.elementId=this.Ra=this.config=null;this.Y=!1;this.j=this.G=null;this.Fa={};this.Ic=["onReady"];this.lastError=null;this.fb=NaN;this.P={};this.ha=0;this.i=this.o=a;zc(this,this.U);Xz(this);c?this.ha=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(Yz(this),Zz(this))}
v(Wz,I);p=Wz.prototype;p.getId=function(){return this.A};
p.loadNewVideoConfig=function(a){if(!this.ea){this.ha&&(clearTimeout(this.ha),this.ha=0);var b=a||{};b instanceof Jv||(b=new Jv(b));this.config=b;this.setConfig(a);Zz(this);this.isReady()&&$z(this)}};
function Yz(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
p.setConfig=function(a){this.Ra=a;this.config=aA(a);Yz(this);if(!this.xa){var b;this.xa=bA(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Nj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Nj(Number(a)||a))};
function $z(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function cA(a){var b=!0,c=dA(a);c&&a.config&&(b=c.dataset.version===eA(a));return b&&!!F("yt.player.Application.create")}
function Zz(a){if(!a.ea&&!a.Y){var b=cA(a);if(b&&(dA(a)?"html5":null)==="html5")a.Z="html5",a.isReady()||fA(a);else if(gA(a),a.Z="html5",b&&a.j&&a.o)a.o.appendChild(a.j),fA(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=hA(a,"player_bootstrap_method")?F("yt.player.Application.createAlternate")||F("yt.player.Application.create"):F("yt.player.Application.create");var e=a.config?aA(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.Lb);fA(a)};
a.Y=!0;b?a.G():(Uv(eA(a),a.G),(b=iA(a))&&aw(b||""),jA(a)&&!c&&E("yt.player.Application.create",null))}}}
function dA(a){var b=Eg(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function fA(a){if(!a.ea){var b=dA(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!hA(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}kA(a)}else a.fb=setTimeout(function(){fA(a)},50)}}
function kA(a){Xz(a);a.Qa=!0;var b=dA(a);if(b){a.u=lA(a,b,"addEventListener");a.ma=lA(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=lA(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);$z(a);a.xa&&a.xa(a.api);a.U.sb("onReady",a.api)}
function lA(a,b,c){var d=b[c];return function(){var e=C.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new U("PlayerProxy error in method call",{error:f,method:c,playerId:a.A}),e.level="WARNING",e;}}}
function Xz(a){a.Qa=!1;if(a.ma)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ma(b,a.h[b]);for(var c in a.P)a.P.hasOwnProperty(c)&&clearTimeout(Number(c));a.P={};a.u=null;a.ma=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ra};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
p.isReady=function(){return this.Qa};
p.addEventListener=function(a,b){var c=this,d=bA(this,b);d&&(Sb(this.Ic,a)>=0||this.h[a]||(b=mA(this,a),this.u&&this.u(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
p.removeEventListener=function(a,b){this.ea||(b=bA(this,b))&&this.U.unsubscribe(a,b)};
function bA(a,b){var c=b;if(typeof b==="string"){if(a.Fa[b])return a.Fa[b];c=function(){var d=C.apply(0,arguments),e=F(b);if(e)try{e.apply(D,d)}catch(f){throw d=new U("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Fa[b]=c}return c?c:null}
function mA(a,b){function c(d){function e(){if(!a.ea)try{a.U.sb(b,d!=null?d:void 0)}catch(h){var g=new U("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.A,data:d,originalStack:h.stack,componentStack:h.ge});g.level="WARNING";throw g;}}
if(hA(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.P,h=String(f);h in g&&delete g[h]},0);
vg(a.P,String(f))}}
return a.h[b]=c}
p.getPlayerType=function(){return this.Z||(dA(this)?"html5":null)};
p.getLastError=function(){return this.lastError};
function gA(a){a.cancel();Xz(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=dA(a);b&&(cA(a)||!jA(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
p.cancel=function(){this.G&&Yv(eA(this),this.G);clearTimeout(this.fb);this.Y=!1};
p.ba=function(){gA(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new U("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Fa=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Ra=this.config=this.api=null;delete this.o;delete this.i;I.prototype.ba.call(this)};
function jA(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function eA(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function iA(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function hA(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function aA(a){for(var b={},c=y(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?yg(e):e}return b}
;var nA={},oA="player_uid_"+(Math.random()*1E9>>>0);function pA(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Eg(c):c;var e=oA+"_"+Pa(c),f=nA[e];if(f&&d)return qA(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Wz(c,e,a,b,void 0);nA[e]=f;f.addOnDisposeCallback(function(){delete nA[f.getId()]});
return f.api}
function qA(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var rA=null,sA=null;
function tA(){Ux();var a=Yn(),b=ao(119),c=window.devicePixelRatio>1;if(document.body&&bk(document.body,"exp-invert-logo"))if(c&&!bk(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!bk(d,"inverted-hdpi")){var e=Zj(d);ak(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&bk(document.body,"inverted-hdpi")&&ck();if(b!=c){b="f"+(Math.floor(119/31)+1);d=bo(b)||0;d=c?d|67108864:d&-67108865;d===0?delete Vn[b]:(c=d.toString(16),Vn[b]=c.toString());
c=!0;T("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Vn)Vn.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Vn[f])));var f=d.join("&");Rn(b,f,63072E3,a.i,c)}}
function uA(){vA()}
function wA(){Px("ep_init_pr");vA()}
function vA(){var a=rA.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function xA(){rA&&rA.sendAbandonmentPing&&rA.sendAbandonmentPing();R("PL_ATT")&&Tz.dispose();for(var a=Tj,b=0,c=Cy.length;b<c;b++)a.qa(Cy[b]);Cy.length=0;Wv("//static.doubleclick.net/instream/ad_status.js");Dy=!1;Hm("DCLKSTAT",0);yc(sA);rA&&(rA.removeEventListener("onVideoDataChange",uA),rA.destroy())}
;Px("ep_init_eps");E("yt.setConfig",Hm);E("yt.config.set",Hm);E("yt.setMsg",Tv);E("yt.msgs.set",Tv);E("yt.logging.errors.log",Pu);
E("writeEmbed",function(){Px("ep_init_wes");var a=R("PLAYER_CONFIG");if(!a){var b=R("PLAYER_VARS");b&&(a={args:b})}Gw(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);c=Sy();if(!c.serializedForcedExperimentIds){var d=Vm(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)?Lx("watch",["pbs","pbu","pbp"]):a.args&&vv(a.args)?Lx("video_preview",["ol"]):Lx("embed_no_video",["ep_init_pr"]);rA=gb(pA(a,c));rA.addEventListener("onVideoDataChange",uA);rA.addEventListener("onReady",wA);a=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?sA=new Fz(rA):R("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(sA=new Mz(rA,a,b));Ey();T("ytidb_create_logger_embed_killswitch")||Xo();a={};qz.h||(qz.h=new qz);qz.h.install((a.flush_logs=
{callback:function(){tu()}},a));
Js();if(T("embeds_enable_separate_ITS")){yz();var f=function(){return Yx.instance}}else f=function(){var g,h;
if(!xy){var k=zt();ut(k,{pb:wy,Hc:uy});var l={Kc:{feedbackEndpoint:Uw(ly),modifyChannelNotificationPreferenceEndpoint:Uw(my),playlistEditEndpoint:Uw(ny),shareEntityEndpoint:Uw(ky),subscribeEndpoint:Uw(hy),unsubscribeEndpoint:Uw(iy),webPlayerShareEntityServiceEndpoint:Uw(oy)}},m=Pw(),n={};m&&(n.client_location=m);g===void 0&&(g=On());h===void 0&&(h=k.resolve(wy));Zx(l,h,g,n);ut(k,{pb:gy,kd:Yx.instance});xy=k.resolve(gy)}return xy};
T("ytidb_clear_embedded_player")&&Tj.pa(function(){f();dz()});
T("enable_rta_manager")&&lo(function(){var g=new Py(f());var h={preload:!T("enable_rta_npi")},k=!1;if(typeof h==="boolean")var l={preload:h};else typeof h==="undefined"?l={preload:!0}:(l=h,k=!!h.Bh);h=k?void 0:new xs;Gy.instance=new Gy(g,l,h);g=Gy.instance;l=g.i.bind(g);E("yt.aba.att",l);g=g.j.bind(g);E("yt.aba.att2",g)});
Px("ep_init_wee")});
E("yt.abuse.player.botguardInitialized",F("yt.abuse.player.botguardInitialized")||Uz);E("yt.abuse.player.invokeBotguard",F("yt.abuse.player.invokeBotguard")||Vz);E("yt.abuse.dclkstatus.checkDclkStatus",F("yt.abuse.dclkstatus.checkDclkStatus")||Fy);E("yt.player.exports.navigate",F("yt.player.exports.navigate")||Fw);E("yt.util.activity.init",F("yt.util.activity.init")||at);E("yt.util.activity.getTimeSinceActive",F("yt.util.activity.getTimeSinceActive")||dt);
E("yt.util.activity.setTimestamp",F("yt.util.activity.setTimestamp")||bt);window.addEventListener("load",Lm(function(){tA()}));
window.addEventListener("pageshow",Lm(function(a){a.persisted||tA()}));
window.addEventListener("pagehide",Lm(function(a){T("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?xA():a.persisted||xA()}));
window.onerror=function(a,b,c,d,e){var f;b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=Im("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new U(h),e.name="UnhandledWindowError",e.message=
h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!T("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.ge)f||(f={}),f.componentStack=Hu(m)}f&&Tu(e,f);g?Pu(e):Qu(e)}};
Ji=Ru;window.addEventListener("unhandledrejection",function(a){Ru(a.reason)});
Tb(R("ERRORS")||[],function(a){Pu.apply(null,a)});
Hm("ERRORS",[]);Px("ep_init_epe");}).call(this);
