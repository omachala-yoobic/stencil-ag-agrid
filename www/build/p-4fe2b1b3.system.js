var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{l(n.next(e))}catch(r){i(r)}}function o(e){try{l(n["throw"](e))}catch(r){i(r)}}function l(e){e.done?t(e.value):a(e.value).then(s,o)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="app";var a;var i;var s;var o=false;var l=false;var f=false;var $=false;var u=false;var c=typeof window!=="undefined"?window:{};var v=c.CSS;var d=c.document||{head:{}};var h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var m=function(){return(d.head.attachShadow+"").indexOf("[native")>-1}();var p=function(e){return Promise.resolve(e)};var g=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var y={};var b="{visibility:hidden}.hydrated{visibility:inherit}";var w="http://www.w3.org/1999/xlink";var R=function(e,r){if(r===void 0){r=""}{return function(){return}}};var N=function(e,r){{return function(){return}}};var S=new WeakMap;var _=function(e,r,t){var n=Oe.get(e);if(g&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}Oe.set(e,n)};var k=function(e,r,t,n){var a=C(r.$tagName$);var i=Oe.get(a);e=e.nodeType===11?e:d;if(i){if(typeof i==="string"){e=e.head||e;var s=S.get(e);var o=void 0;if(!s){S.set(e,s=new Set)}if(!s.has(a)){{if(h.$cssShim$){o=h.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=d.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var x=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=r.$flags$;var a=R("attachStyles",r.$tagName$);var i=k(m&&t.shadowRoot?t.shadowRoot:t.getRootNode(),r,e.$modeName$,t);if(n&10){t["s-sc"]=i;t.classList.add(i+"-h")}a()};var C=function(e,r){return"sc-"+e};var T={};var E=function(e){return e!=null};var j=function(e){e=typeof e;return e==="object"||e==="function"};var A=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var L=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var s=null;var o=false;var l=false;var f=[];var $=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(o=typeof e!=="function"&&!j(a)){a=String(a)}if(o&&l){f[f.length-1].$text$+=a}else{f.push(o?U(null,a):a)}l=o}}};$(t);if(r){if(r.key){i=r.key}if(r.name){s=r.name}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(r===null?{}:r,f,O)}var c=U(e,null);c.$attrs$=r;if(f.length>0){c.$children$=f}{c.$key$=i}{c.$name$=s}return c}));var U=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$key$=null}{t.$name$=null}return t};var M=e("H",{});var P=function(e){return e&&e.$tag$===M};var O={forEach:function(e,r){return e.map(B).forEach(r)},map:function(e,r){return e.map(B).map(r).map(I)}};var B=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var I=function(e){var r=U(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var z=function(e,r,t,n,a,i){if(t!==n){var s=Le(e,r);var o=r.toLowerCase();if(r==="class"){var l=e.classList;var f=q(t);var $=q(n);l.remove.apply(l,f.filter((function(e){return e&&!$.includes(e)})));l.add.apply(l,$.filter((function(e){return e&&!f.includes(e)})))}else if(r==="style"){{for(var u in t){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!t||n[u]!==t[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(r==="key");else if(r==="ref"){if(n){n(e)}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(Le(c,o)){r=o.slice(2)}else{r=o[2]+r.slice(3)}if(t){h.rel(e,r,t,false)}if(n){h.ael(e,r,n,false)}}else{var v=j(n);if((s||v&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=d){e[r]=d}}else{e[r]=n}}catch(p){}}var m=false;{if(o!==(o=o.replace(/^xlink\:?/,""))){r=o;m=true}}if(n==null||n===false){if(m){e.removeAttributeNS(w,r)}else{e.removeAttribute(r)}}else if((!s||i&4||a)&&!v){n=n===true?"":n;if(m){e.setAttributeNS(w,r,n)}else{e.setAttribute(r,n)}}}}};var H=/\s/;var q=function(e){return!e?[]:e.split(H)};var V=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||T;var s=r.$attrs$||T;{for(n in i){if(!(n in s)){z(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){z(a,n,i[n],s[n],t,r.$flags$)}};var D=function(e,r,t,n){var l=r.$children$[t];var u=0;var c;var v;var h;if(!o){f=true;if(l.$tag$==="slot"){if(a){n.classList.add(a+"-s")}l.$flags$|=l.$children$?2:1}}if(l.$text$!==null){c=l.$elm$=d.createTextNode(l.$text$)}else if(l.$flags$&1){c=l.$elm$=d.createTextNode("")}else{c=l.$elm$=d.createElement(l.$flags$&2?"slot-fb":l.$tag$);{V(null,l,$)}if(E(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(l.$children$){for(u=0;u<l.$children$.length;++u){v=D(e,l,u,c);if(v){c.appendChild(v)}}}}{c["s-hn"]=s;if(l.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=l.$name$||"";h=e&&e.$children$&&e.$children$[t];if(h&&h.$tag$===l.$tag$&&e.$elm$){F(e.$elm$,false)}}}return c};var F=function(e,r){h.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==s&&a["s-ol"]){X(a).insertBefore(a,Q(a));a["s-ol"].remove();a["s-ol"]=undefined;f=true}if(r){F(a,r)}}h.$flags$&=~1};var W=function(e,r,t,n,a,i){var o=e["s-cr"]&&e["s-cr"].parentNode||e;var l;if(o.shadowRoot&&o.tagName===s){o=o.shadowRoot}for(;a<=i;++a){if(n[a]){l=D(null,t,a,e);if(l){n[a].$elm$=l;o.insertBefore(l,Q(r))}}}};var G=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;ne(n);{l=true;if(a["s-ol"]){a["s-ol"].remove()}else{F(a,true)}}a.remove()}}};var J=function(e,r,t,n){var a=0;var i=0;var s=0;var o=0;var l=r.length-1;var f=r[0];var $=r[l];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=l&&i<=u){if(f==null){f=r[++a]}else if($==null){$=r[--l]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(K(f,c)){Y(f,c);f=r[++a];c=n[++i]}else if(K($,v)){Y($,v);$=r[--l];v=n[--u]}else if(K(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){F(f.$elm$.parentNode,false)}Y(f,v);e.insertBefore(f.$elm$,$.$elm$.nextSibling);f=r[++a];v=n[--u]}else if(K($,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){F($.$elm$.parentNode,false)}Y($,c);e.insertBefore($.$elm$,f.$elm$);$=r[--l];c=n[++i]}else{s=-1;{for(o=a;o<=l;++o){if(r[o]&&r[o].$key$!==null&&r[o].$key$===c.$key$){s=o;break}}}if(s>=0){h=r[s];if(h.$tag$!==c.$tag$){d=D(r&&r[i],t,s,e)}else{Y(h,c);r[s]=undefined;d=h.$elm$}c=n[++i]}else{d=D(r&&r[i],t,i,e);c=n[++i]}if(d){{X(f.$elm$).insertBefore(d,Q(f.$elm$))}}}}if(a>l){W(e,n[u+1]==null?null:n[u+1].$elm$,t,n,i,u)}else if(i>u){G(r,a,l)}};var K=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}{return e.$key$===r.$key$}}return false};var Q=function(e){return e&&e["s-ol"]||e};var X=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var Y=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$tag$;var s=r.$text$;var o;if(s===null){{if(i==="slot");else{V(e,r,$)}}if(n!==null&&a!==null){J(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}W(t,null,r,a,0,a.length-1)}else if(n!==null){G(n,0,n.length-1)}}else if(o=t["s-cr"]){o.parentNode.textContent=s}else if(e.$text$!==s){t.data=s}};var Z=function(e){var r=e.childNodes;var t;var n;var a;var i;var s;var o;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}Z(t)}}};var ee=[];var re=function(e){var r;var t;var n;var a;var i;var s;var o=0;var f=e.childNodes;var $=f.length;for(;o<$;o++){r=f[o];if(r["s-sr"]&&(t=r["s-cr"])){n=t.parentNode.childNodes;a=r["s-sn"];for(s=n.length-1;s>=0;s--){t=n[s];if(!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]){if(te(t,a)){i=ee.find((function(e){return e.$nodeToRelocate$===t}));l=true;t["s-sn"]=t["s-sn"]||a;if(i){i.$slotRefNode$=r}else{ee.push({$slotRefNode$:r,$nodeToRelocate$:t})}if(t["s-sr"]){ee.map((function(e){if(te(e.$nodeToRelocate$,t["s-sn"])){i=ee.find((function(e){return e.$nodeToRelocate$===t}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!ee.some((function(e){return e.$nodeToRelocate$===t}))){ee.push({$nodeToRelocate$:t})}}}}if(r.nodeType===1){re(r)}}};var te=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var ne=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(ne)}};var ae=function(e,r){var t=e.$hostElement$;var n=e.$cmpMeta$;var $=e.$vnode$||U(null,null);var u=P(r)?r:L(null,null,r);s=t.tagName;if(n.$attrsToReflect$){u.$attrs$=u.$attrs$||{};n.$attrsToReflect$.map((function(e){var r=e[0],n=e[1];return u.$attrs$[n]=t[r]}))}u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=$.$elm$=t.shadowRoot||t;{a=t["s-sc"]}{i=t["s-cr"];o=m&&(n.$flags$&1)!==0;l=false}Y($,u);{h.$flags$|=1;if(f){re(u.$elm$);var c=void 0;var v=void 0;var p=void 0;var g=void 0;var y=void 0;var b=void 0;var w=0;for(;w<ee.length;w++){c=ee[w];v=c.$nodeToRelocate$;if(!v["s-ol"]){p=d.createTextNode("");p["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=p,v)}}for(w=0;w<ee.length;w++){c=ee[w];v=c.$nodeToRelocate$;if(c.$slotRefNode$){g=c.$slotRefNode$.parentNode;y=c.$slotRefNode$.nextSibling;p=v["s-ol"];while(p=p.previousSibling){b=p["s-nr"];if(b&&b["s-sn"]===v["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.parentNode||v.nextSibling!==y){if(v!==y){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}g.insertBefore(v,y)}}}else{if(v.nodeType===1){v.hidden=true}}}}if(l){Z(u.$elm$)}h.$flags$&=~1;ee.length=0}};var ie=e("g",(function(e){return Ee(e).$hostElement$}));var se=function(e,r,t){var n=new CustomEvent(r,t);e.dispatchEvent(n);return n};var oe=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var le=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}var t=R("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$ancestorComponent$;var a=e.$lazyInstance$;var i=function(){return fe(e,a,r)};oe(e,n);var s;if(r){{s=de(a,"componentWillLoad")}}t();return he(s,(function(){return Fe(i)}))};var fe=function(e,r,t){var n=e.$hostElement$;var a=R("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(t){x(e)}var s=R("render",e.$cmpMeta$.$tagName$);{{ae(e,$e(r))}}if(h.$cssShim$){h.$cssShim$.updateHost(n)}{e.$flags$&=~16}{e.$flags$|=2}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{var o=n["s-p"];var l=function(){return ue(e)};if(o.length===0){l()}else{Promise.all(o).then(l);e.$flags$|=4;o.length=0}}};var $e=function(e){try{e=e.render&&e.render()}catch(r){Ue(r)}return e};var ue=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=R("postUpdate",r);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{me(t)}{de(a,"componentDidLoad")}n();{e.$onReadyResolve$(t);if(!i){ve()}}}else{{de(a,"componentDidUpdate")}n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Ve((function(){return le(e,false)}))}e.$flags$&=~(4|512)}};var ce=function(e){{var r=Ee(e);var t=r.$hostElement$.isConnected;if(t&&(r.$flags$&(2|16))===2){le(r,false)}return t}};var ve=function(e){{me(d.documentElement)}Ve((function(){return se(c,"appload",{detail:{namespace:n}})}))};var de=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){Ue(n)}}return undefined};var he=function(e,r){return e&&e.then?e.then(r):r()};var me=function(e){return e.classList.add("hydrated")};var pe=function(e,r){if(e!=null&&!j(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var ge=function(e,r){return Ee(e).$instanceValues$.get(r)};var ye=function(e,r,t,n){var a=Ee(e);var i=a.$instanceValues$.get(r);var s=a.$flags$;var o=a.$lazyInstance$;t=pe(t,n.$members$[r][0]);if((!(s&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(o){if(n.$watchers$&&s&128){var l=n.$watchers$[r];if(l){l.map((function(e){try{o[e](t,i,r)}catch(n){Ue(n)}}))}}if((s&(2|16))===2){le(a,false)}}}};var be=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return ge(this,n)},set:function(e){ye(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;h.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var t=e[0],n=e[1];var a=n[1]||t;i.set(a,t);if(n[0]&512){r.$attrsToReflect$.push([t,a])}return a}))}}return e};var we=function(e,n,a,i,s){return __awaiter(t,void 0,void 0,(function(){var e,t,i,o,l,f,$;return __generator(this,(function(u){switch(u.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=Pe(a);if(!s.then)return[3,2];e=N();return[4,s];case 1:s=u.sent();e();u.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}be(s,a,2);s.isProxied=true}t=R("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(c){Ue(c)}{n.$flags$&=~8}{n.$flags$|=128}t();Re(n.$lazyInstance$);i=C(a.$tagName$);if(!(!Oe.has(i)&&s.style))return[3,5];o=R("registerStyles",a.$tagName$);l=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-ac6f021f.system.js").then((function(e){return e.scopeCss(l,i,false)}))];case 3:l=u.sent();u.label=4;case 4:_(i,l,!!(a.$flags$&1));o();u.label=5;case 5:f=n.$ancestorComponent$;$=function(){return le(n,true)};if(f&&f["s-rc"]){f["s-rc"].push($)}else{$()}return[2]}}))}))};var Re=function(e){{de(e,"connectedCallback")}};var Ne=function(e){if((h.$flags$&1)===0){var r=Ee(e);var t=r.$cmpMeta$;var n=R("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{if(t.$flags$&(4|8)){Se(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){oe(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{we(e,r,t)}}else{Re(r.$lazyInstance$)}n()}};var Se=function(e){var r=e["s-cr"]=d.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var _e=function(e){if((h.$flags$&1)===0){var r=Ee(e);var t=r.$lazyInstance$;if(h.$cssShim$){h.$cssShim$.removeHost(e)}{de(t,"disconnectedCallback")}{de(t,"componentDidUnload")}}};var ke=e("b",(function(e,r){if(r===void 0){r={}}var t=R();var n=[];var a=r.exclude||[];var i=c.customElements;var s=d.head;var o=s.querySelector("meta[charset]");var l=d.createElement("style");var f=[];var $;var u=true;Object.assign(h,r);h.$resourcesUrl$=new URL(r.resourcesUrl||"./",d.baseURI).href;e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$attrsToReflect$=[]}{t.$watchers$={}}if(!m&&t.$flags$&1){t.$flags$|=8}var s=t.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;Ae(r,t);if(t.$flags$&1){if(m){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(u){f.push(this)}else{h.jmp((function(){return Ne(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return _e(e)}))};r.prototype.forceUpdate=function(){ce(this)};r.prototype.componentOnReady=function(){return Ee(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,be(o,t,1))}}))}));{l.innerHTML=n+b;l.setAttribute("data-styles","");s.insertBefore(l,o?o.nextSibling:s.firstChild)}u=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{h.jmp((function(){return $=setTimeout(ve,30)}))}}t()}));var xe=function(e){var r=new URL(e,h.$resourcesUrl$);return r.origin!==c.location.origin?r.href:r.pathname};var Ce=e("c",(function(e,r){if(r in y){return y[r]}else if(r==="window"){return c}else if(r==="document"){return d}else if(r==="isServer"||r==="isPrerender"){return false}else if(r==="isClient"){return true}else if(r==="resourcesUrl"||r==="publicPath"){return xe(".")}else if(r==="queue"){return{write:Fe,read:De,tick:{then:function(e){return Ve(e)}}}}return undefined}));var Te=new WeakMap;var Ee=function(e){return Te.get(e)};var je=e("r",(function(e,r){return Te.set(r.$lazyInstance$=e,r)}));var Ae=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return Te.set(e,t)};var Le=function(e,r){return r in e};var Ue=function(e){return console.error(e)};var Me=new Map;var Pe=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=Me.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{Me.set(i,e)}return e[a]}),Ue)};var Oe=new Map;var Be=[];var Ie=[];var ze=function(e,r){return function(t){e.push(t);if(!u){u=true;if(r&&h.$flags$&4){Ve(qe)}else{h.raf(qe)}}}};var He=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){Ue(t)}}e.length=0};var qe=function(){He(Be);{He(Ie);if(u=Be.length>0){h.raf(qe)}}};var Ve=function(e){return p().then(e)};var De=ze(Be,false);var Fe=ze(Ie,true);var We=e("a",(function(){if(!(v&&v.supports&&v.supports("color","var(--c)"))){return r.import("./p-2f8c282d.system.js").then((function(){if(h.$cssShim$=c.__cssshim){return h.$cssShim$.i()}else{return 0}}))}return p()}));var Ge=e("p",(function(){{h.$cssShim$=c.__cssshim}var e=Array.from(d.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var t=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,c.location.href)).href;{Je(t.resourcesUrl,e)}if(!c.customElements){return r.import("./p-c6833af0.system.js").then((function(){return t}))}}return p(t)}));var Je=function(e,r){var t=A(n);try{c[t]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;c[t]=function(n){var i=new URL(n,e).href;var s=a.get(i);if(!s){var o=d.createElement("script");o.type="module";o.crossOrigin=r.crossOrigin;o.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){o.onload=function(){e(c[t].m);o.remove()}}));a.set(i,s);d.head.appendChild(o)}return s}}}}}}));