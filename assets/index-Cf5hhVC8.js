(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=globalThis,gt=lt.ShadowRoot&&(lt.ShadyCSS===void 0||lt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vt=Symbol(),Ct=new WeakMap;let Ht=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==vt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(gt&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=Ct.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Ct.set(e,t))}return t}toString(){return this.cssText}};const qt=s=>new Ht(typeof s=="string"?s:s+"",void 0,vt),w=(s,...t)=>{const e=s.length===1?s[0]:t.reduce(((o,i,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[r+1]),s[0]);return new Ht(e,s,vt)},Gt=(s,t)=>{if(gt)s.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const o=document.createElement("style"),i=lt.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=e.cssText,s.appendChild(o)}},Et=gt?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return qt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Jt,defineProperty:Xt,getOwnPropertyDescriptor:Kt,getOwnPropertyNames:Zt,getOwnPropertySymbols:Qt,getPrototypeOf:Yt}=Object,_t=globalThis,Dt=_t.trustedTypes,te=Dt?Dt.emptyScript:"",ee=_t.reactiveElementPolyfillSupport,st=(s,t)=>s,ct={toAttribute(s,t){switch(t){case Boolean:s=s?te:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},yt=(s,t)=>!Jt(s,t),Mt={attribute:!0,type:String,converter:ct,reflect:!1,useDefault:!1,hasChanged:yt};Symbol.metadata??=Symbol("metadata"),_t.litPropertyMetadata??=new WeakMap;let X=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Mt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);i!==void 0&&Xt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){const{get:i,set:r}=Kt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const h=i?.call(this);r?.call(this,n),this.requestUpdate(t,h,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Mt}static _$Ei(){if(this.hasOwnProperty(st("elementProperties")))return;const t=Yt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(st("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(st("properties"))){const e=this.properties,o=[...Zt(e),...Qt(e)];for(const i of o)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,i]of e)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const i=this._$Eu(e,o);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)e.unshift(Et(i))}else t!==void 0&&e.push(Et(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(i!==void 0&&o.reflect===!0){const r=(o.converter?.toAttribute!==void 0?o.converter:ct).toAttribute(e,o.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const o=this.constructor,i=o._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const r=o.getPropertyOptions(i),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:ct;this._$Em=i;const h=n.fromAttribute(e,r.type);this[i]=h??this._$Ej?.get(i)??h,this._$Em=null}}requestUpdate(t,e,o){if(t!==void 0){const i=this.constructor,r=this[t];if(o??=i.getPropertyOptions(t),!((o.hasChanged??yt)(r,e)||o.useDefault&&o.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,o))))return;this.C(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:i,wrapped:r},n){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,r]of o){const{wrapped:n}=r,h=this[i];n!==!0||this._$AL.has(i)||h===void 0||this.C(i,void 0,r,h)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((o=>o.hostUpdate?.())),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};X.elementStyles=[],X.shadowRootOptions={mode:"open"},X[st("elementProperties")]=new Map,X[st("finalized")]=new Map,ee?.({ReactiveElement:X}),(_t.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=globalThis,mt=wt.trustedTypes,Ot=mt?mt.createPolicy("lit-html",{createHTML:s=>s}):void 0,Nt="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,Bt="?"+j,se=`<${Bt}>`,V=document,it=()=>V.createComment(""),ot=s=>s===null||typeof s!="object"&&typeof s!="function",xt=Array.isArray,ie=s=>xt(s)||typeof s?.[Symbol.iterator]=="function",bt=`[ 	
\f\r]`,tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pt=/-->/g,Lt=/>/g,N=RegExp(`>|${bt}(?:([^\\s"'>=/]+)(${bt}*=${bt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zt=/'/g,It=/"/g,Ut=/^(?:script|style|textarea|title)$/i,oe=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),d=oe(1),F=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Rt=new WeakMap,U=V.createTreeWalker(V,129);function Vt(s,t){if(!xt(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ot!==void 0?Ot.createHTML(t):t}const re=(s,t)=>{const e=s.length-1,o=[];let i,r=t===2?"<svg>":t===3?"<math>":"",n=tt;for(let h=0;h<e;h++){const a=s[h];let l,b,c=-1,u=0;for(;u<a.length&&(n.lastIndex=u,b=n.exec(a),b!==null);)u=n.lastIndex,n===tt?b[1]==="!--"?n=Pt:b[1]!==void 0?n=Lt:b[2]!==void 0?(Ut.test(b[2])&&(i=RegExp("</"+b[2],"g")),n=N):b[3]!==void 0&&(n=N):n===N?b[0]===">"?(n=i??tt,c=-1):b[1]===void 0?c=-2:(c=n.lastIndex-b[2].length,l=b[1],n=b[3]===void 0?N:b[3]==='"'?It:zt):n===It||n===zt?n=N:n===Pt||n===Lt?n=tt:(n=N,i=void 0);const _=n===N&&s[h+1].startsWith("/>")?" ":"";r+=n===tt?a+se:c>=0?(o.push(l),a.slice(0,c)+Nt+a.slice(c)+j+_):a+j+(c===-2?h:_)}return[Vt(s,r+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class rt{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let r=0,n=0;const h=t.length-1,a=this.parts,[l,b]=re(t,e);if(this.el=rt.createElement(l,o),U.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=U.nextNode())!==null&&a.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(Nt)){const u=b[n++],_=i.getAttribute(c).split(j),g=/([.?@])?(.*)/.exec(u);a.push({type:1,index:r,name:g[2],strings:_,ctor:g[1]==="."?ae:g[1]==="?"?he:g[1]==="@"?de:pt}),i.removeAttribute(c)}else c.startsWith(j)&&(a.push({type:6,index:r}),i.removeAttribute(c));if(Ut.test(i.tagName)){const c=i.textContent.split(j),u=c.length-1;if(u>0){i.textContent=mt?mt.emptyScript:"";for(let _=0;_<u;_++)i.append(c[_],it()),U.nextNode(),a.push({type:2,index:++r});i.append(c[u],it())}}}else if(i.nodeType===8)if(i.data===Bt)a.push({type:2,index:r});else{let c=-1;for(;(c=i.data.indexOf(j,c+1))!==-1;)a.push({type:7,index:r}),c+=j.length-1}r++}}static createElement(t,e){const o=V.createElement("template");return o.innerHTML=t,o}}function K(s,t,e=s,o){if(t===F)return t;let i=o!==void 0?e._$Co?.[o]:e._$Cl;const r=ot(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(s),i._$AT(s,e,o)),o!==void 0?(e._$Co??=[])[o]=i:e._$Cl=i),i!==void 0&&(t=K(s,i._$AS(s,t.values),i,o)),t}let ne=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,i=(t?.creationScope??V).importNode(e,!0);U.currentNode=i;let r=U.nextNode(),n=0,h=0,a=o[0];for(;a!==void 0;){if(n===a.index){let l;a.type===2?l=new Z(r,r.nextSibling,this,t):a.type===1?l=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(l=new le(r,this,t)),this._$AV.push(l),a=o[++h]}n!==a?.index&&(r=U.nextNode(),n++)}return U.currentNode=V,i}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}};class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),ot(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==F&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ie(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==v&&ot(this._$AH)?this._$AA.nextSibling.data=t:this.T(V.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=rt.createElement(Vt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(e);else{const r=new ne(i,this),n=r.u(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let e=Rt.get(t.strings);return e===void 0&&Rt.set(t.strings,e=new rt(t)),e}k(t){xt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const r of t)i===e.length?e.push(o=new Z(this.O(it()),this.O(it()),this,this.options)):o=e[i],o._$AI(r),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class pt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=v}_$AI(t,e=this,o,i){const r=this.strings;let n=!1;if(r===void 0)t=K(this,t,e,0),n=!ot(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{const h=t;let a,l;for(t=r[0],a=0;a<r.length-1;a++)l=K(this,h[o+a],e,a),l===F&&(l=this._$AH[a]),n||=!ot(l)||l!==this._$AH[a],l===v?t=v:t!==v&&(t+=(l??"")+r[a+1]),this._$AH[a]=l}n&&!i&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ae extends pt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}}class he extends pt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}}class de extends pt{constructor(t,e,o,i,r){super(t,e,o,i,r),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??v)===F)return;const o=this._$AH,i=t===v&&o!==v||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==v&&(o===v||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class le{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const ce={I:Z},me=wt.litHtmlPolyfillSupport;me?.(rt,Z),(wt.litHtmlVersions??=[]).push("3.3.1");const _e=(s,t,e)=>{const o=e?.renderBefore??t;let i=o._$litPart$;if(i===void 0){const r=e?.renderBefore??null;o._$litPart$=i=new Z(t.insertBefore(it(),r),r,void 0,e??{})}return i._$AI(s),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=globalThis;let y=class extends X{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=_e(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};y._$litElement$=!0,y.finalized=!0,$t.litElementHydrateSupport?.({LitElement:y});const pe=$t.litElementPolyfillSupport;pe?.({LitElement:y});($t.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=s=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(s,t)})):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue={attribute:!0,type:String,converter:ct,reflect:!1,hasChanged:yt},be=(s=ue,t,e)=>{const{kind:o,metadata:i}=e;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),o==="setter"&&((s=Object.create(s)).wrapped=!0),r.set(e.name,s),o==="accessor"){const{name:n}=e;return{set(h){const a=t.get.call(this);t.set.call(this,h),this.requestUpdate(n,a,s)},init(h){return h!==void 0&&this.C(n,void 0,s,h),h}}}if(o==="setter"){const{name:n}=e;return function(h){const a=this[n];t.call(this,h),this.requestUpdate(n,a,s)}}throw Error("Unsupported decorator location: "+o)};function m(s){return(t,e)=>typeof e=="object"?be(s,t,e):((o,i,r)=>{const n=i.hasOwnProperty(r);return i.constructor.createProperty(r,o),n?Object.getOwnPropertyDescriptor(i,r):void 0})(s,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(s){return m({...s,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft=(s,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(s,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function p(s,t){return(e,o,i)=>{const r=n=>n.renderRoot?.querySelector(s)??null;return Ft(e,o,{get(){return r(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let fe;function kt(s){return(t,e)=>Ft(t,e,{get(){return(this.renderRoot??(fe??=document.createDocumentFragment())).querySelectorAll(s)}})}const St=w`
  .snd-red {
    background-color: red;
  }
  .snd-mob-header {
    width: 100%;
    height: 3rem;
    border: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .snd-mob-search {
    width: 3rem;
    height: 3rem;
    flex-grow: 0;
    background-color: var(--snd-header-bkr-clr, #517a7aff);
  }
  .snd-mob-links {
    flex-grow: 1;
  }
  .snd-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .snd-flex-column {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .snd-border {
    border: 1px solid #ccc;
    border: 0;
  }
`;var ge=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,nt=(s,t,e,o)=>{for(var i=o>1?void 0:o?ve(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&ge(t,e,i),i};let W=class extends y{constructor(){super(),this._status="closed",this._refTO=-1}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerup",this._changeState.bind(this)),this._setEvents()}_setEvents(){this._openMobMenu=new Event("openmobmenu",{bubbles:!0,composed:!0,cancelable:!1}),this._closeMobMenu=new Event("closemobmenu",{bubbles:!0,composed:!0,cancelable:!1})}_changeState(){switch(this._status){case"closed":this._bar_top&&(this._bar_top.classList.remove("snd-bar-top-close"),this._bar_top.classList.add("snd-bar-top-open")),this._bar_middle&&(this._bar_middle.classList.remove("snd-bar-middle-close"),this._bar_middle.classList.add("snd-bar-middle-open")),this._bar_bottom&&(this._bar_bottom.classList.remove("snd-bar-bottom-close"),this._bar_bottom.classList.add("snd-bar-bottom-open")),this._openMobMenu&&this.dispatchEvent(this._openMobMenu),this._status="opened";break;case"opened":this._bar_top&&(this._bar_top.classList.remove("snd-bar-top-open"),this._bar_top.classList.add("snd-bar-top-close")),this._bar_middle&&(this._bar_middle.classList.remove("snd-bar-middle-open"),this._bar_middle.classList.add("snd-bar-middle-close")),this._bar_bottom&&(this._bar_bottom.classList.remove("snd-bar-bottom-open"),this._bar_bottom.classList.add("snd-bar-bottom-close")),this._closeMobMenu&&this.dispatchEvent(this._closeMobMenu),this._status="closed",this._refTO&&(clearTimeout(this._refTO),this._refTO=setTimeout(()=>{this._bar_top?.classList.remove("snd-bar-top-close"),this._bar_middle?.classList.remove("snd-bar-middle-close"),this._bar_bottom?.classList.remove("snd-bar-bottom-close")},1700));break}}disconnectedCallback(){}render(){return d`
      <div class="snd-bar snd-bar-top"></div>
      <div class="snd-bar snd-bar-middle"></div>
      <div class="snd-bar snd-bar-bottom"></div>
    `}};W.styles=[w`
      :host {
        background-color: var(--snd-header-bkr-clr, #674439ff);
        color: var(--snd-header-clr, #000);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 7px;
        height: 3rem;
        width: 3rem;
      }
      .snd-bar {
        width: 2rem;
        height: 0.1rem;
        background-color: var(--snd-header-clr, #daff35ff);
        transform-origin: center;
      }
      .snd-bar-middle-open {
        animation-duration: 1.5s;
        animation-name: scale-middle;
        animation-fill-mode: forwards;
      }
      .snd-bar-middle-close {
        animation-duration: 1.5s;
        animation-name: scale-middle-back;
        animation-fill-mode: forwards;
      }
      .snd-bar-top-open {
        animation-duration: 1s;
        animation-name: rotate-top;
        animation-fill-mode: forwards;
      }
      .snd-bar-top-close {
        animation-duration: 1s;
        animation-name: rotate-top-back;
        animation-fill-mode: forwards;
      }
      .snd-bar-bottom-open {
        animation-duration: 1s;
        animation-name: rotate-bottom;
        animation-fill-mode: forwards;
      }

      .snd-bar-bottom-close {
        animation-duration: 1s;
        animation-name: rotate-bottom-back;
        animation-fill-mode: forwards;
      }

      @keyframes rotate-top {
        from {
          transform: rotate(0deg) translate(0, 0);
        }
        to {
          transform: rotate(45deg) translate(0.3rem, 0.45rem);
        }
      }

      @keyframes rotate-top-back {
        from {
          transform: rotate(45deg) translate(0.3rem, 0.45rem);
        }
        to {
          transform: rotate(0deg) translate(0, 0);
        }
      }

      @keyframes rotate-bottom {
        from {
          transform: rotate(0deg) translate(0, 0);
        }
        to {
          transform: rotate(-45deg) translate(0.3rem, -0.45rem);
        }
      }

      @keyframes rotate-bottom-back {
        from {
          transform: rotate(-45deg) translate(0.3rem, -0.45rem);
        }
        to {
          transform: rotate(0deg) translate(0, 0);
        }
      }

      @keyframes scale-middle {
        from {
          transform: scale(1);
        }
        to {
          transform: scale(0);
        }
      }

      @keyframes scale-middle-back {
        from {
          transform: scale(0);
        }
        to {
          transform: scale(1);
        }
      }
    `,St];nt([p(".snd-bar-top")],W.prototype,"_bar_top",2);nt([p(".snd-bar-middle")],W.prototype,"_bar_middle",2);nt([p(".snd-bar-bottom")],W.prototype,"_bar_bottom",2);nt([x()],W.prototype,"_status",2);W=nt([A("snd-menu-mob-btn-aa")],W);function f(s="fb",t="24px",e="24px"){switch(s){case"close":return d`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#close"></use>
      </svg>`;case"search":return d`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#search"></use>
      </svg>`;case"location":return d`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#fb"></use>
      </svg>`;case"facebook":return d`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#fb"></use>
      </svg>`;case"youtube":return d`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#ytb"></use>
      </svg>`;case"instagram":return d`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#insta"></use>
      </svg>`;case"phone":return d`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#phone"></use>
      </svg>`;case"arrdown":return d`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#arrdown"></use>
      </svg>`;case"arrup":return d`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#arrup"></use>
      </svg>`;default:return d``}}function ye(s="fb",t="24px",e="24px"){switch(s){case"close":return`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#close"></use>
      </svg>`;case"search":return`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#search"></use>
      </svg>`;case"location":return`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#location"></use>
      </svg>`;case"facebook":return`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#fb"></use>
      </svg>`;case"youtube":return`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#ytb"></use>
      </svg>`;case"instagram":return`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#insta"></use>
      </svg>`;case"phone":return`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#phone"></use>
      </svg>`;case"arrdown":return`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#arrdown"></use>
      </svg>`;case"arrup":return`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#arrup"></use>
      </svg>`;default:return""}}var we=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,at=(s,t,e,o)=>{for(var i=o>1?void 0:o?xe(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&we(t,e,i),i};let q=class extends y{constructor(){super(),this.gap="5px",this._ctsub_visible=!1,this._has_subitems=!1,this._has_icon=!1,this._arrow=d``,this._setDefaultValues()}connectedCallback(){super.connectedCallback(),this._setDefaultValues(),this._loadItemIntoOb(),this._setDim(),this._setFlags(),this._setControls(),this._addEvents()}disconnectedCallback(){super.disconnectedCallback()}firstUpdated(s){this._createControls()}_setDefaultValues(){this._dim_default='{"width":"1rem", "height":"1rem"}'}_setDim(){let s=this._dim_default;const t=JSON.parse(s);this._obItem&&(this._obItem.dim?(this._obItem.dim.width||(this._obItem.dim.width=t.width),this._obItem.dim.height||(this._obItem.dim.height=t.height)):this._obItem.dim={width:"1rem",height:"1rem"})}_loadItemIntoOb(){this.item&&(this._obItem=JSON.parse(this.item))}_loadSubitemsIntoCTSub(){if(this.item&&this._ctsub&&this._has_subitems){const s=this._obItem?.subitems.length;if(s&&s>0){let t=0,e,o,i,r;for(t==0;t<s;t++)e=document.createElement("div"),e.setAttribute("class","snd-ct-sub-item"),e.setAttribute("class","snd_ct_sub-item-sep"),o=document.createElement("a"),o.setAttribute("class","snd-link-sub-item"),o.setAttribute("href",this._obItem?.subitems[t].link??"#"),i=document.createElement("div"),i.setAttribute("class","snd-sub-item-icon"),i.innerHTML=`${ye(this._obItem?.subitems[t].symbol,this._obItem?.subitems[t].dim.width,this._obItem?.subitems[t].dim.height)}`,o.appendChild(i),r=document.createElement("div"),r.setAttribute("class","snd-sub-item-text"),r.textContent=this._obItem?.subitems[t].text??"",o.appendChild(r),e.appendChild(o),this._ctsub.appendChild(e),this._ctsub.style.display="none"}}}_setFlags(){this._obItem&&(this._has_subitems=this._obItem.subitems.length>0,this._has_icon=this._obItem.symbol.length>0)}_createControls(){this._ctsub=document.createElement("div"),this._ctsub.setAttribute("class","snd-ct-subp");const s=this.getBoundingClientRect().width;this._ctsub_parent?.appendChild(this._ctsub),this._ctsub.style.top=this.getBoundingClientRect().height+"px";const e=this._ctsub.getBoundingClientRect().width-s;this._ctsub.style.left=-e/2+"px",this._loadSubitemsIntoCTSub()}_setControls(){this._has_subitems&&(this._arrow=d`${f("arrdown")}`,this._ctsub_parent=this.renderRoot)}_addEvents(){this.addEventListener("pointerup",this._show_hide_ctsub.bind(this))}_changeIcon(){this._ctsub_visible?this._arrow=d`${f("arrup")}`:this._arrow=d`${f("arrdown")}`}_show_hide_ctsub(s){s.stopPropagation(),this._has_subitems&&this._ctsub&&(s.preventDefault(),this._ctsub.classList.remove("snd-ct-subp-open"),this._ctsub.classList.remove("snd-ct-subp-close"),this._ctsub_visible?(this._ctsub.classList.add("snd-ct-subp-close"),this._ctsub.style.display="none",this._ctsub.style.opacity="0"):(this._ctsub.classList.add("snd-ct-subp-open"),this._ctsub.style.display="flex",this._ctsub.style.opacity="1"),this._ctsub_visible=!this._ctsub_visible,setTimeout(()=>{this._ctsub?.classList.remove("snd-ct-subp-open"),this._ctsub?.classList.remove("snd-ct-subp-close")},1e3),this._changeIcon())}render(){return d`
      <a
        href="${this._has_subitems?"#":this._obItem?.link}"
        class="snd-link-item"
      >
        ${this._has_icon?d`<div class="snd-item-icon">
              ${f(this._obItem?.symbol,this._obItem?.dim.width,this._obItem?.dim.height)}
            </div>`:""}
        <div class="snd-item-text">${this._obItem?.text}</div>
        ${this._has_subitems?d`<div class="snd-sub-icon">${this._arrow}</div>`:""}
      </a>
    `}};q.styles=w`
    :host {
      display: flex;
      flex-direction: column;
      width: 90vw;
      background-color: var(--snd-header-bkr-clr, #94be94ff);
      color: var(--snd-header-clr, #000);
      border: 1px solid var(--snd-header-clr, #000);
      border-radius: 15px;
      height: auto;
      margin: 0;
      padding: 5px 10px;
      box-sizing: border-box;
      justify-content: center;
      align-items: flex-start;
      gap: 5px;
    }
    div {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    .snd-item-text {
      text-align: left;
      flex-grow: 1;
      overflow: hidden;
    }
    .snd-item-icon{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 0;
      flex-shrink: 0;
      overflow: hidden;
    }
    .snd-sub-item-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 0;
      flex-shrink: 0;
      overflow: hidden;
    }

    .snd-sub-item-text {
      flex-grow: 1;
      flex-shrink: 1;
      text-align: left;
      width: 100%; 
     }
    .snd-hidden {
      visibility: hidden;
    }
    .snd-removed {
      display: none;
    }
    .snd-icon {
      width: 24px;
      height: 24px;
      color: var(--snd-header-clr, #000);;
    }
    .snd-sub-icon {
      width: 24px;
      height: 24px;
      margin-top: -5px;
      color: currentColor;
      margin-left: auto;
    }
    a.snd-link-item,
    a.snd-link-sub-item {
      text-decoration: none;
      outline: 0;
      color: var(--snd-header-clr, #dfe59bff);
      background-color: var(--snd-header-bkr-clr, #0b0808ff);
      font-size: var(--snd-mob-header-fsz, 1.2rem);
      width: 100%;
      box-sizing: border-box;
      min-height: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 7px;
      flex-grow: 1;
      flex-shrink: 0;
      height: min-content;
      
      
    }
    a.snd-link-sub-item {
      width: 100%;
      border-radius: 10px;
      padding: 5px 10px;
    }
    
    .snd-ct-subp {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-width: 5rem;
      width: 100%;
      height: auto;
      
      background-color: var(--snd-resct-bkr-clrX, #646360ff);
      color: var(--snd-resct-clrX, #000);
      color: black;
      padding: 3px 0.5rem;
      gap: 2px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      opacity: 0;

      
    } 

    .snd-ct-subp-open {
      animation-duration: 0.2s;
      animation-name: snd-open;
      animation-fill-mode: forwards;
    }

    @keyframes snd-open {
      from {
        display: none;
        opacity: 0;
      }
      to {
        display: flex;
        opacity: 1;
      }  
    }

    .snd-ct-subp-close {
      animation-duration: 0.41s;
      animation-name: snd-close;
      animation-fill-mode: forwards;
    }

    @keyframes snd-close {
      from {
        display: flex;
        opacity: 1;
      }
      to {
        display: none;
        opacity: 0;
      }  
    }

    .snd-ct-sub-item {
      width: 100%;
      height: 3rem:
      padding: 0;  
    }
    .snd_ct_sub-item-sep {
      border-bottom: 0px solid #604545ff;
      border: 0;
    }
  `;at([m()],q.prototype,"item",2);at([m()],q.prototype,"gap",2);at([p("snd-ct-subp")],q.prototype,"_subct",2);at([x()],q.prototype,"_ctsub_visible",2);q=at([A("snd-menu-mob-art-aa")],q);var $e=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,ht=(s,t,e,o)=>{for(var i=o>1?void 0:o?ke(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&$e(t,e,i),i};let G=class extends y{constructor(){super(),this.sizeableDisabled=!1,this._status="closed",this._content=d``,this._refTO=-1}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerup",this._changeState.bind(this)),this._content=d`
      <snd-menu-mob-art-aa
        id="it007"
        item='{"symbol":"youtube","dim":{"width":"2.2rem","height":"2.2rem"},"text":"Terrence Hill & Bud Spencer1","link":"https://google.ro","id":"it01","subitems":[{"symbol":"location","dim":{"width":"1.3rem","height":"1.3rem"},"text":"Bud Spencer","link":"https://google.ro","id":"it02"},{"symbol":"youtube","dim":{"width":"1.3rem","height":"1.3rem"},"text":"Facebook","link":"https://google.ro","id":"it03"},{"symbol":"phone","dim":{"width":"1.13rem","height":"1.13rem"},"text":"Ger Naprasnic","link":"https://google.ro","id":"it02"},{"symbol":"facebook","dim":{"width":"1.3rem","height":"1.3rem"},"text":"Dorul Lelii","link":"https://google.ro","id":"it03"}]}'
        gap="15px"
      ></snd-menu-mob-art-aa>

      <snd-menu-mob-art-aa
        id="it007"
        item='{"symbol":"youtube","dim":{"width":"2.2rem","height":"2.2rem"},"text":"Terrence Hill2","link":"https://google.ro","id":"it01","subitems":[{"symbol":"location","dim":{"width":"3rem","height":"3rem"},"text":"Bud Spencer","link":"https://google.ro","id":"it02"},{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Facebook","link":"https://google.ro","id":"it03"},{"symbol":"phone","dim":{"width":"3rem","height":"3rem"},"text":"Ger Naprasnic vbvbv sfgafsg afs","link":"https://google.ro","id":"it02"},{"symbol":"facebook","dim":{"width":"3rem","height":"3rem"},"text":"Dorul Lelii","link":"https://google.ro","id":"it03"}]}'
        gap="15px"
      ></snd-menu-mob-art-aa>
      <snd-menu-mob-art-aa
        id="it007"
        item='{"symbol":"youtube","dim":{"width":"2.2rem","height":"2.2rem"},"text":"Terrence Hill3","link":"https://google.ro","id":"it01","subitems":[{"symbol":"location","dim":{"width":"3rem","height":"3rem"},"text":"Bud Spencer","link":"https://google.ro","id":"it02"},{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Facebook","link":"https://google.ro","id":"it03"},{"symbol":"phone","dim":{"width":"3rem","height":"3rem"},"text":"Ger Naprasnic","link":"https://google.ro","id":"it02"},{"symbol":"facebook","dim":{"width":"3rem","height":"3rem"},"text":"Dorul Lelii","link":"https://google.ro","id":"it03"}]}'
        gap="15px"
      ></snd-menu-mob-art-aa>

      <snd-menu-mob-art-aa
        id="it007"
        item='{"symbol":"youtube","dim":{"width":"2.2rem","height":"2.2rem"},"text":"Terrence Hill4","link":"https://google.ro","id":"it01","subitems":[{"symbol":"location","dim":{"width":"3rem","height":"3rem"},"text":"Bud Spencer","link":"https://google.ro","id":"it02"},{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Facebook","link":"https://google.ro","id":"it03"},{"symbol":"phone","dim":{"width":"3rem","height":"3rem"},"text":"Ger Naprasnic","link":"https://google.ro","id":"it02"},{"symbol":"facebook","dim":{"width":"3rem","height":"3rem"},"text":"Dorul Lelii","link":"https://google.ro","id":"it03"}]}'
        gap="15px"
      ></snd-menu-mob-art-aa>
      <snd-menu-mob-art-aa
        id="it007"
        item='{"symbol":"youtube","dim":{"width":"2.2rem","height":"2.2rem"},"text":"Terrence Hill5 & Bud Spencer","link":"https://google.ro","id":"it01","subitems":[{"symbol":"location","dim":{"width":"3rem","height":"3rem"},"text":"Bud Spencer","link":"https://google.ro","id":"it02"},{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Facebook","link":"https://google.ro","id":"it03"},{"symbol":"phone","dim":{"width":"3rem","height":"3rem"},"text":"Ger Naprasnic","link":"https://google.ro","id":"it02"},{"symbol":"facebook","dim":{"width":"3rem","height":"3rem"},"text":"Dorul Lelii","link":"https://google.ro","id":"it03"}]}'
        gap="15px"
      ></snd-menu-mob-art-aa>
      <snd-menu-mob-art-aa
        id="it007"
        item='{"symbol":"youtube","dim":{"width":"2rem","height":"2rem"},"text":"Terrence Hill6","link":"https://google.ro","id":"it01","subitems":[{"symbol":"location","dim":{"width":"3rem","height":"3rem"},"text":"Bud Spencer","link":"https://google.ro","id":"it02"},{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Facebook","link":"https://google.ro","id":"it03"},{"symbol":"phone","dim":{"width":"3rem","height":"3rem"},"text":"Ger Naprasnic vbvbv sfgafsg afs","link":"https://google.ro","id":"it02"},{"symbol":"facebook","dim":{"width":"3rem","height":"3rem"},"text":"Dorul Lelii","link":"https://google.ro","id":"it03"}]}'
        gap="15px"
      ></snd-menu-mob-art-aa>
      <snd-menu-mob-art-aa
        id="it007"
        item='{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Terrence Hill7","link":"https://google.ro","id":"it01","subitems":[{"symbol":"location","dim":{"width":"3rem","height":"3rem"},"text":"Bud Spencer","link":"https://google.ro","id":"it02"},{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Facebook","link":"https://google.ro","id":"it03"},{"symbol":"phone","dim":{"width":"3rem","height":"3rem"},"text":"Ger Naprasnic","link":"https://google.ro","id":"it02"},{"symbol":"facebook","dim":{"width":"3rem","height":"3rem"},"text":"Dorul Lelii","link":"https://google.ro","id":"it03"}]}'
        gap="15px"
      ></snd-menu-mob-art-aa>
      <snd-menu-mob-art-aa
        id="it007"
        item='{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Terrence Hill8","link":"https://google.ro","id":"it01","subitems":[{"symbol":"location","dim":{"width":"3rem","height":"3rem"},"text":"Bud Spencer","link":"https://google.ro","id":"it02"},{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Facebook","link":"https://google.ro","id":"it03"},{"symbol":"phone","dim":{"width":"3rem","height":"3rem"},"text":"Ger Naprasnic","link":"https://google.ro","id":"it02"},{"symbol":"facebook","dim":{"width":"3rem","height":"3rem"},"text":"Dorul Lelii","link":"https://google.ro","id":"it03"}]}'
        gap="15px"
      ></snd-menu-mob-art-aa>

      <snd-menu-mob-art-aa
        id="it007"
        item='{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Terrence Hill9 & Bud Spencer","link":"https://google.ro","id":"it01","subitems":[{"symbol":"location","dim":{"width":"3rem","height":"3rem"},"text":"Bud Spencer","link":"https://google.ro","id":"it02"},{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Facebook","link":"https://google.ro","id":"it03"},{"symbol":"phone","dim":{"width":"3rem","height":"3rem"},"text":"Ger Naprasnic","link":"https://google.ro","id":"it02"},{"symbol":"facebook","dim":{"width":"3rem","height":"3rem"},"text":"Dorul Lelii","link":"https://google.ro","id":"it03"}]}'
        gap="15px"
      ></snd-menu-mob-art-aa>
      <snd-menu-mob-art-aa
        id="it007"
        item='{"symbol":"youtube","dim":{"width":"2rem","height":"2rem"},"text":"Terrence Hill10","link":"https://google.ro","id":"it01","subitems":[{"symbol":"location","dim":{"width":"3rem","height":"3rem"},"text":"Bud Spencer","link":"https://google.ro","id":"it02"},{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Facebook","link":"https://google.ro","id":"it03"},{"symbol":"phone","dim":{"width":"3rem","height":"3rem"},"text":"Ger Naprasnic vbvbv sfgafsg afs","link":"https://google.ro","id":"it02"},{"symbol":"facebook","dim":{"width":"3rem","height":"3rem"},"text":"Dorul Lelii","link":"https://google.ro","id":"it03"}]}'
        gap="15px"
      ></snd-menu-mob-art-aa>
      <snd-menu-mob-art-aa
        id="it007"
        item='{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Terrence Hill11","link":"https://google.ro","id":"it01","subitems":[{"symbol":"location","dim":{"width":"3rem","height":"3rem"},"text":"Bud Spencer","link":"https://google.ro","id":"it02"},{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Facebook","link":"https://google.ro","id":"it03"},{"symbol":"phone","dim":{"width":"3rem","height":"3rem"},"text":"Ger Naprasnic","link":"https://google.ro","id":"it02"},{"symbol":"facebook","dim":{"width":"3rem","height":"3rem"},"text":"Dorul Lelii","link":"https://google.ro","id":"it03"}]}'
        gap="15px"
      ></snd-menu-mob-art-aa>
      <snd-menu-mob-art-aa
        id="it007"
        item='{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Terrence Hill12","link":"https://google.ro","id":"it01","subitems":[{"symbol":"location","dim":{"width":"3rem","height":"3rem"},"text":"Bud Spencer","link":"https://google.ro","id":"it02"},{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Facebook","link":"https://google.ro","id":"it03"},{"symbol":"phone","dim":{"width":"3rem","height":"3rem"},"text":"Ger Naprasnic","link":"https://google.ro","id":"it02"},{"symbol":"facebook","dim":{"width":"3rem","height":"3rem"},"text":"Dorul Lelii","link":"https://google.ro","id":"it03"}]}'
        gap="15px"
      ></snd-menu-mob-art-aa>
      <snd-menu-mob-art-aa
        id="it007"
        item='{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Terrence Hill & Bud Spencer","link":"https://google.ro","id":"it01","subitems":[{"symbol":"location","dim":{"width":"3rem","height":"3rem"},"text":"Bud Spencer","link":"https://google.ro","id":"it02"},{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Facebook","link":"https://google.ro","id":"it03"},{"symbol":"phone","dim":{"width":"3rem","height":"3rem"},"text":"Ger Naprasnic","link":"https://google.ro","id":"it02"},{"symbol":"facebook","dim":{"width":"3rem","height":"3rem"},"text":"Dorul Lelii","link":"https://google.ro","id":"it03"}]}'
        gap="15px"
      ></snd-menu-mob-art-aa>
      <snd-menu-mob-art-aa
        id="it007"
        item='{"symbol":"youtube","dim":{"width":"2rem","height":"2rem"},"text":"Terrence Hill","link":"https://google.ro","id":"it01","subitems":[{"symbol":"location","dim":{"width":"3rem","height":"3rem"},"text":"Bud Spencer","link":"https://google.ro","id":"it02"},{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Facebook","link":"https://google.ro","id":"it03"},{"symbol":"phone","dim":{"width":"3rem","height":"3rem"},"text":"Ger Naprasnic vbvbv sfgafsg afs","link":"https://google.ro","id":"it02"},{"symbol":"facebook","dim":{"width":"3rem","height":"3rem"},"text":"Dorul Lelii","link":"https://google.ro","id":"it03"}]}'
        gap="15px"
      ></snd-menu-mob-art-aa>
      <snd-menu-mob-art-aa
        id="it007"
        item='{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Terrence Hill","link":"https://google.ro","id":"it01","subitems":[{"symbol":"location","dim":{"width":"3rem","height":"3rem"},"text":"Bud Spencer","link":"https://google.ro","id":"it02"},{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Facebook","link":"https://google.ro","id":"it03"},{"symbol":"phone","dim":{"width":"3rem","height":"3rem"},"text":"Ger Naprasnic","link":"https://google.ro","id":"it02"},{"symbol":"facebook","dim":{"width":"3rem","height":"3rem"},"text":"Dorul Lelii","link":"https://google.ro","id":"it03"}]}'
        gap="15px"
      ></snd-menu-mob-art-aa>
      <snd-menu-mob-art-aa
        id="it007"
        item='{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Terrence Hill","link":"https://google.ro","id":"it01","subitems":[{"symbol":"location","dim":{"width":"3rem","height":"3rem"},"text":"Bud Spencer","link":"https://google.ro","id":"it02"},{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Facebook","link":"https://google.ro","id":"it03"},{"symbol":"phone","dim":{"width":"3rem","height":"3rem"},"text":"Ger Naprasnic","link":"https://google.ro","id":"it02"},{"symbol":"facebook","dim":{"width":"3rem","height":"3rem"},"text":"Dorul Lelii","link":"https://google.ro","id":"it03"}]}'
        gap="15px"
      ></snd-menu-mob-art-aa>
    `}firstUpdated(s){this._vel&&(this._vel.forEach(t=>{t.style.marginTop="-30px"}),this._vel.forEach(t=>{t.classList.add("snd-mg")}))}_changeState(){switch(this._status){case"closed":this._status="opened";break;case"opened":this._status="closed",this._refTO&&(clearTimeout(this._refTO),this._refTO=setTimeout(()=>{},2e3));break}}disconnectedCallback(){}showOutsideCT(){console.log("show the outside ct")}render(){return d` <div class="snd-content">${this._content}</div> `}};G.styles=[w`
      :host {
        background-color: #00000000;
        color: var(--snd-header-clr, #f5e214ff);
        color: yellow;
        margin: 0;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 7px;
        position: fixed;
        z-index: -10;
        display: none;
        height: calc(100vh - 3rem);
        width: 90vw;
        overflow: hidden;
      }

      @media (min-width: 25em) {
        :host {
          width: 70vw;
        }
      }

      @media (min-width: 32em) {
        :host {
          width: 60vw;
        }
      }

      @media (min-width: 40em) {
        :host {
          width: 50vw;
        }
      }

      .snd-content {
        width: 100%;
        height: auto;
        scrollbar-width: none;
        overflow-y: scroll;
      }
      .snd-content::-webkit-scrollbar {
        display: none;
      }
      snd-menu-mob-art-aa {
        width: 100%;
        height: auto;
      }
      .snd-mg {
        animation-duration: 0.5s;
        animation-name: givemg;
        animation-fill-mode: forwards;
      }

      @keyframes givemg {
        from {
        }
        to {
          margin-top: 5px;
        }
      }
    `,St];ht([m({type:Boolean,attribute:"sizeable-disabled"})],G.prototype,"sizeableDisabled",2);ht([p(".snd-top")],G.prototype,"_top",2);ht([kt("snd-menu-mob-art-aa")],G.prototype,"_vel",2);ht([x()],G.prototype,"_status",2);G=ht([A("snd-menu-mob-outside-aa")],G);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se={CHILD:2},Ae=s=>(...t)=>({_$litDirective$:s,values:t});class Ce{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ee}=ce,jt=()=>document.createComment(""),et=(s,t,e)=>{const o=s._$AA.parentNode,i=t===void 0?s._$AB:t._$AA;if(e===void 0){const r=o.insertBefore(jt(),i),n=o.insertBefore(jt(),i);e=new Ee(r,n,s,s.options)}else{const r=e._$AB.nextSibling,n=e._$AM,h=n!==s;if(h){let a;e._$AQ?.(s),e._$AM=s,e._$AP!==void 0&&(a=s._$AU)!==n._$AU&&e._$AP(a)}if(r!==i||h){let a=e._$AA;for(;a!==r;){const l=a.nextSibling;o.insertBefore(a,i),a=l}}}return e},B=(s,t,e=s)=>(s._$AI(t,e),s),De={},Me=(s,t=De)=>s._$AH=t,Oe=s=>s._$AH,ft=s=>{s._$AR(),s._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=(s,t,e)=>{const o=new Map;for(let i=t;i<=e;i++)o.set(s[i],i);return o},Wt=Ae(class extends Ce{constructor(s){if(super(s),s.type!==Se.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,t,e){let o;e===void 0?e=t:t!==void 0&&(o=t);const i=[],r=[];let n=0;for(const h of s)i[n]=o?o(h,n):n,r[n]=e(h,n),n++;return{values:r,keys:i}}render(s,t,e){return this.dt(s,t,e).values}update(s,[t,e,o]){const i=Oe(s),{values:r,keys:n}=this.dt(t,e,o);if(!Array.isArray(i))return this.ut=n,r;const h=this.ut??=[],a=[];let l,b,c=0,u=i.length-1,_=0,g=r.length-1;for(;c<=u&&_<=g;)if(i[c]===null)c++;else if(i[u]===null)u--;else if(h[c]===n[_])a[_]=B(i[c],r[_]),c++,_++;else if(h[u]===n[g])a[g]=B(i[u],r[g]),u--,g--;else if(h[c]===n[g])a[g]=B(i[c],r[g]),et(s,a[g+1],i[c]),c++,g--;else if(h[u]===n[_])a[_]=B(i[u],r[_]),et(s,i[c],i[u]),u--,_++;else if(l===void 0&&(l=Tt(n,_,g),b=Tt(h,c,u)),l.has(h[c]))if(l.has(h[u])){const L=b.get(n[_]),ut=L!==void 0?i[L]:null;if(ut===null){const At=et(s,i[c]);B(At,r[_]),a[_]=At}else a[_]=B(ut,r[_]),et(s,i[c],ut),i[L]=null;_++}else ft(i[u]),u--;else ft(i[c]),c++;for(;_<=g;){const L=et(s,a[g+1]);B(L,r[_]),a[_++]=L}for(;c<=u;){const L=i[c++];L!==null&&ft(L)}return this.ut=n,Me(s,a),F}});var Pe=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,z=(s,t,e,o)=>{for(var i=o>1?void 0:o?Le(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Pe(t,e,i),i};let C=class extends y{constructor(){super(),this.moreDisabled=!1,this.gap="5px",this.stack_hidden_empty=!0,this._stack_in=[],this._stack_out=[],this._set_in=new Set,this._set_out=new Set,this._tot_w_in=0,this._tot_w_out=0,this._ct_w=0,this._html_items=d``,this._ctMoreVisible=!1}reinit(){console.log("reinit from resct-mob")}_setDefaultValues(){this._dim_default='{"width":"70%", "height":"3rem"}'}_setDim(){let s=this._dim_default;this.dim&&(s=this.dim);const t=JSON.parse(s);this.style.height=t.height,this.style.width=t.width}_get_ct_width(){this._ct_w=this._ctItems?.getBoundingClientRect().width}_ff(s){let t=s.target?.tagName.trim().toLowerCase();this._ctMoreVisible&&t!=="snd-resct-aa"&&this._showOrHideMoreCt(s)}_fff(s){if(s.stopPropagation(),s&&s.target){let t=s.target.getAttribute("class")?.trim().toLowerCase();this._ctMoreVisible&&t!=="snd-more-icon"&&this._showOrHideMoreCt(s)}}_addWindowEvents(){window.addEventListener("pointerup",this._ff.bind(this))}_removeWindowEvents(){window.removeEventListener("pointerup",this._ff.bind(this))}_addEvents(){this.renderRoot.addEventListener("pointerup",this._fff.bind(this))}_more_senzor(){this.moreDisabled||!this._ctMenuMore||(this._stack_out.length?this._ctMenuMore.style.display="flex":(this._ctMenuMore.style.display="none",this._ctMore&&(this._ctMore.style.display="none"),this._ctMoreVisible=!1))}_createMoreContainer(){this.moreDisabled||(this._ctMore=document.createElement("div"),this._ctMore.setAttribute("class","snd-more-ct"),this.renderRoot.appendChild(this._ctMore))}_addInMoreContainer(s){if(!(this.moreDisabled||!this._ctMore)&&s.element){const t=this.renderRoot.querySelector(`#${s.id}`);if(t){let e=t?.cloneNode();e.id=s.id+"_clone",e.classList.remove("snd-hidden"),e.innerHTML=t?.innerHTML,this._ctMore.insertAdjacentElement("afterbegin",e)}}}_showOrHideMoreCt(s){if(s.stopPropagation(),this.moreDisabled||!this._ctMore)return;let t=this.getBoundingClientRect().height;this._ctMoreVisible?(this._ctMore.style.display="none",this._ctMoreVisible=!1):this._stack_out.length&&(this._ctMore.style.top=t+"px",this._ctMore.style.display="flex",this._ctMoreVisible=!0)}_removeFromMoreContainer(s){if(this._ctMore&&s.element){const t=this._ctMore.querySelector(`#${s.id}_clone`);t&&this._ctMore.removeChild(t)}}_refresh_visible(){this._stack_out.forEach(s=>{s.element.classList.add("snd-removed")}),this._stack_in.forEach(s=>{s.element.classList.remove("snd-removed")})}at_visible(){console.log("from mob - visible")}_init_stacks(){let s=0,t=0,e=0,o=parseInt(this.gap),i="",r=this._items,n=0,h=0;t=r?.length??0,r?.forEach(l=>{s+=l.getBoundingClientRect().width,i=l.id,n===t-1&&(this._last_id=i),this._set_in.has(i)||(this._set_in.add(i),this._stack_in.unshift({element:l,width:l.getBoundingClientRect().width,id:i})),n=n+1}),t&&(s+=(t-1)*o),this._tot_w_in=s,this._tot_w_out=0;let a;if(this._ct_w&&s>this._ct_w){e=0;do a=this._stack_in.pop(),this._stack_out.push(a),this._set_out.add(a.id),this._set_in.delete(a.id),this._addInMoreContainer(a),s=s-a.width,h=h+a.width,a.id!==this._last_id&&(s=s-o,h=h+o),e=e+1;while(e<100&&s>this._ct_w);this._tot_w_in=s,this._tot_w_out=h}this._stack_out.forEach(l=>{l.element.classList.add("snd-removed"),l.element.classList.remove("snd-hidden")}),this._stack_in.forEach(l=>{l.element.classList.remove("snd-hidden")}),this._more_senzor()}_loadItems(){if(!this.items)return;const s=JSON.parse(this.items);let t=d``;this._html_items=d`${Wt(s,e=>e.id,e=>{switch(t=d``,e.type){case"svg-icon":e.link&&e.link.trim().length>0?t=d`<div class="snd-item snd-hidden" id="${e.id}">
                <a href=${e.link} class="snd-link-item">
                  <div class="snd-item-icon snd-item-icon-svg">
                    ${f(e.symbol,e.dim.width,e.dim.height)}
                  </div>
                </a>
              </div>`:t=d`<div class="snd-item snd-hidden" id="${e.id}">
                <div class="snd-item-icon snd-item-icon-svg">
                  ${f(e.symbol,e.dim.width,e.dim.height)}
                </div>
              </div>`;break;case"svg-icon-text":e.link&&e.link.trim().length>0?t=d`<div class="snd-item snd-hidden" id="${e.id}">
                <a href=${e.link} class="snd-link-item">
                  <div class="snd-item-icon snd-item-icon-svg">
                    ${f(e.symbol,e.dim.width,e.dim.height)}
                  </div>
                  <div class="snd-item-text">${e.text}</div>
                </a>
              </div>`:t=d`<div class="snd-item snd-hidden" id="${e.id}">
                <div class="snd-item-icon snd-item-icon-svg">
                  ${f(e.symbol,e.dim.width,e.dim.height)}
                </div>
                <div class="snd-item-text">${e.text}</div>
              </div>`;break}return t})}`}_refresh_stacks(s){let t,e=0,o=0,i=parseInt(this.gap),r,n=0,h=0,a=0,l=!1;for(const b of s){if(n=b.borderBoxSize[0].inlineSize,n<this._tot_w_in&&this._stack_in.length){o=this._tot_w_in,e=0;do{if(!this._stack_in.length)break;r=this._stack_in.pop(),this._stack_out.push(r),this._set_out.add(r.id),this._set_in.delete(r.id),this._addInMoreContainer(r),o=o-r.width,this._tot_w_out+=r.width,this._tot_w_in-=r.width,r.id!==this._last_id&&(this._tot_w_out+=i,this._tot_w_in-=i),e=e+1}while(e<100&&o>n)}if(l=!1,n>this._tot_w_in&&(h=n-this._tot_w_in,a=0,this._stack_out.length&&(t=this._stack_out[this._stack_out.length-1],a=t.width,t.id!==this._last_id&&(a+=i),h>a&&(l=!0))),l){e=0,o=0;do r=this._stack_out.pop(),this._stack_in.push(r),this._set_in.add(r.id),this._set_out.delete(r.id),this._removeFromMoreContainer(r),o=o+r.width,this._tot_w_out-=r.width,this._tot_w_in+=r.width,r.id!==this._last_id&&(this._tot_w_out-=i,this._tot_w_in+=i),e=e+1;while(e<100&&o>n)}}this._refresh_visible(),this._more_senzor()}_createControls(){this._createMoreContainer()}connectedCallback(){super.connectedCallback(),this._setDefaultValues(),this._setDim(),this._loadItems(),this._createControls(),this._addWindowEvents(),this._addEvents()}disconnectedCallback(){super.disconnectedCallback(),this._res_obs?.unobserve(this._ctItems),this._removeWindowEvents()}willUpdate(s){}firstUpdated(s){this._ctItems&&(this._ctItems.style.gap=this.gap),this._get_ct_width(),this._init_stacks(),this._res_obs=new ResizeObserver(this._refresh_stacks.bind(this)),this._res_obs?.observe(this._ctItems)}render(){return d`<div @pointerup=${this._showOrHideMoreCt} class="snd-more-icon">
        <svg class="snd-icon">
          <use xlink:href="./src/assets/sndresctaa.svg#more"></use>
        </svg>
      </div>
      <div class="snd-ct-items">${this._html_items}</div>`}};C.styles=w`
    :host {
      display: flex;
      width: 70%;
      background-color: var(--snd-resct-bkr-clr, #94be94ff);
      color: var(--snd-resct-clr, #000);

      height: auto;
      margin: 0;
      padding: 5px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;

      position: relative;
    }
    div {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .snd-ct-items {
      height: auto;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      gap: 5px;
      overflow: hidden;
    }
    .snd-item {
      font-size: var(--snd-resct-fsz, 1.4rem);
      width: min-content;
      min-height: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      flex-grow: 0;
      flex-shrink: 0;
    }
    .snd-item-icon,
    .snd-item-text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 0;
      flex-shrink: 0;
      overflow: hidden;
      color: currentColor;
    }
    .snd-hidden {
      visibility: hidden;
    }
    .snd-removed {
      display: none;
    }
    .snd-icon {
      width: 24px;
      height: 24px;
      color: currentColor;
    }
    a.snd-link-item {
      text-decoration: none;
      outline: 0;
      color: currentColor;
      font-size: var(--snd-resct-fsz, 1.4rem);
      width: max-content;
      min-height: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      flex-grow: 0;
      flex-shrink: 0;
    }
    .snd-more-icon {
      display: none;
      justify-content: center;
      align-items: center;
      flex-grow: 0;
      flex-shrink: 1;
      width: 2rem;
      height: 100%;
      overflow: hidden;
      color: currentColor;
    }
    .snd-more-ct {
      display: none;
      flex-direction: column;
      justify-content: flex-start;
      align-items: left;
      min-width: 5rem;
      height: min-content;
      position: absolute;
      top: 6rem;
      left: 0;
      background-color: red;
      color: currentColor;
      padding: 3px 0.5rem;
      gap: 0.2rem;
    }
  `;z([m({type:Boolean,attribute:"more-disabled"})],C.prototype,"moreDisabled",2);z([m()],C.prototype,"gap",2);z([m()],C.prototype,"dim",2);z([m()],C.prototype,"items",2);z([x()],C.prototype,"stack_hidden_empty",2);z([p(".snd-ct-items")],C.prototype,"_ctItems",2);z([p(".snd-more-icon")],C.prototype,"_ctMenuMore",2);z([kt(".snd-item")],C.prototype,"_items",2);C=z([A("snd-resct-mob-aa")],C);var ze=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,M=(s,t,e,o)=>{for(var i=o>1?void 0:o?Ie(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&ze(t,e,i),i};let $=class extends y{constructor(){super(),this.sizeableDisabled=!1,this.idResult="",this._ctresults_visible=!1,this.sstate="pasive",this._icon=d``,this._stask=-1,this._button_clicked=!1,this._opened=!1}connectedCallback(){super.connectedCallback(),this._setDefaultValues()}disconnectedCallback(){}firstUpdated(s){this._btn_search&&(this._btn_search.style.width=this._obDim?.height??"1rem",this._btn_search.style.height=this._obDim?.height??"1rem"),this._addEvents()}closeSearch(){this._input&&(this._input.value="",this._input.blur(),this._changeStatus({vb_pasive:!0}))}_openResults(){}_closeResults(){}_search_in_db(){console.log("I'm searching in database now ..."),this._input&&(this._input.value.trim().length?(this._stask&&clearTimeout(this._stask),this._changeStatus({vb_searching:!0}),this._stask=setTimeout(()=>{this._input&&this._input.value.trim().length&&(this._changeStatus({vb_founded:!0}),this._openResults()),this._input&&!this._input.value.trim().length&&(this._changeStatus({vb_active:!0}),this._closeResults())},1e3)):(this._stask&&clearTimeout(this._stask),this._stask=-1,this._changeStatus({vb_active:!0}),this._closeResults()))}_handleButton(s){s.preventDefault(),s.stopPropagation(),this._button_clicked=!0}_fsubmit(s){if(s.stopPropagation(),s.preventDefault(),console.log("submit"),(this.sstate==="pasive"||this.sstate==="active")&&this._button_clicked){this.sizeableDisabled||(this._opened?this.style.width=this._obDim?.height??"1rem":this.style.width=this._obDim?.width??"1rem",this._opened=!this._opened);return}if(this.sstate==="founded"&&this._button_clicked){this._input&&(this._input.value="",this._input.blur(),this._changeStatus({vb_active:!0}),this._closeResults());return}this._button_clicked=!1,!(this.sstate==="active"||this.sstate==="pasive")&&(this._search_in_db(),this._handleStateChange())}_addEvents(){this._form&&this._form.addEventListener("submit",this._fsubmit.bind(this))}_handleStateChange(){this.sstate==="pasive"&&this.sizeableDisabled&&(this._input?.focus(),this._changeStatus({vb_active:!0}))}_showIcon(s="lens"){s==="lens"&&(this._icon=f("search")),s==="close"&&(this._icon=f("close")),s==="searching"&&(this._icon=d`<div class="snd-loader"></div>`)}_changeStatus({vb_pasive:s=!1,vb_active:t=!1,vb_searching:e=!1,vb_founded:o=!1}){s&&(this.sstate="pasive",this._showIcon("lens")),t&&(this.sstate="active",this._showIcon("lens")),e&&(this.sstate="searching",this._showIcon("searching")),o&&(this.sstate="founded",this._showIcon("close"))}_setDefaultValues(){this.dim||(this.dim='{"width":"200px","height":"4rem"}'),this.formName||(this.formName="fsearch"),this._setDim(),this.sstate="pasive",this._icon=f("search")}_setDim(){this.dim&&(this._obDim=JSON.parse(this.dim)),this.sizeableDisabled?this.style.width=this._obDim?.width??"1rem":this.style.width=this._obDim?.height??"1rem",this.style.height=this._obDim?.height??"1rem"}render(){return d`
      <form action="#" name="fsearch" class="searchform">
        <div class="snd-search-ct-input">
          <input
            type="search"
            class="snd-input-search"
            placeholder="Search..."
            @keyup=${this._search_in_db}
          />
        </div>
        <button
          class="snd-search-ct-button"
          style="width: ${this._obDim?.height}, height:${this._obDim?.height}; "
          @pointerup=${this._handleButton}
        >
          ${this._icon}
        </button>
      </form>
    `}};$.styles=[w`
    :host {      
      background-color: var(--snd-bkr-clrX, #674439ff);
      color: var(--snd-clrX, #000);
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      
    }
    .searchform {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--snd-bkr-clrX, #674439ff);
      color: var(--snd-clrX, #000);
      border: 0;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      padding-left: 5px;
    }
    .snd-search-ct-input {
      flex-grow: 1;
      flex-shrink: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      
      
    }
    [type="search"]::-webkit-search-decoration,
    [type="search"]::-webkit-search-cancel-button {
        appearance: none;
    }

    .snd-input-search::placeholder {
      color: #786363ff;
    }
    .snd-input-search {
        border: 0;
        font-size: 1.4rem;
        width: 100%;
        height: 100%;
        margin: 0;
        outline: 0;
        font-size: 1.3rem:        
    }
    .snd-search-ct-button {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 0;
      flex-shrink: 0;
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      color: currentColor;
      background-color: background-color: var(--snd-bkr-clrX, #94be94ff);
      
    }
    .snd-search-ct-button:active,
    .snd-search-ct-button:visited {
      color: var(--snd-primary-color-a);
    }
    .snd-input-search {
      background-color: var(--snd-bkr-clrX, #94be94ff);
      color: var(--snd-clrX, #000);
    }
    .snd-icon {
      width: 24px;
      height: 24px;
      color: #ccc;
    }
    .snd-loader {
      width: 1rem;
      height: 1rem;
      border: 2px solid var(--snd-primary-color, #94be94ff);
      border-bottom-color: transparent;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,w`
      .snd-search-ct-input {
        flex-grow: 1;
        flex-shrink: 1;
        height: 2rem;
      }
    `];M([m({type:Boolean,attribute:"sizeable-disabled"})],$.prototype,"sizeableDisabled",2);M([m({type:String,attribute:"id-result"})],$.prototype,"idResult",2);M([m()],$.prototype,"dim",2);M([m({type:String,attribute:"form-name"})],$.prototype,"formName",2);M([x()],$.prototype,"_ctresults_visible",2);M([x()],$.prototype,"sstate",2);M([p(".snd-search-ct-button")],$.prototype,"_btn_search",2);M([p(".snd-input-search")],$.prototype,"_input",2);M([p(".searchform")],$.prototype,"_form",2);$=M([A("snd-search-mob-aa")],$);var Re=Object.defineProperty,je=Object.getOwnPropertyDescriptor,Q=(s,t,e,o)=>{for(var i=o>1?void 0:o?je(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Re(t,e,i),i};let T=class extends y{constructor(){super(),this.sizeableDisabled=!1,this._isDesktop=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("openmobmenu",s=>{s.stopPropagation(),this._mob_outside?.classList.add("snd-open-menu"),this._mob_outside?.classList.remove("snd-close-menu")}),this.addEventListener("closemobmenu",()=>{this._mob_outside?.classList.add("snd-close-menu"),this._mob_outside?.classList.remove("snd-open-menu")}),window.addEventListener("DOMContentLoaded",()=>{this._detectViewport(),this._isDesktop&&(this.style.display="none")}),window.addEventListener("resize",()=>{if(this._detectViewport(),this._isDesktop){this.style.display="none";const s=document.querySelector("snd-header-aa");s&&(s.style.display="flex")}})}firstUpdated(s){}_detectViewport(){this._isDesktop=!1;let s=0;window.innerWidth!==void 0?s=window.innerWidth:s=document.documentElement.clientWidth,s>768&&(this._isDesktop=!0)}render(){return d`
      <div class="snd-mob-header">
        <snd-menu-mob-btn-aa class="snd-border"></snd-menu-mob-btn-aa>
        <snd-resct-mob-aa
          class="snd-mob-links snd-center"
          id="resct01"
          dim='{"width":"50%","height":"3rem"}'
          gap="15px"
          items='[{"type":"svg-icon","symbol":"youtube","vbmob":true,"dim":{"width":"2.2rem","height":"2.2rem"},"link":"https://www.google.ro","id":"it01"},{"type":"svg-icon","symbol":"facebook","vbmob":true,"dim":{"width":"2.2rem","height":"2.2rem"}, "link":"https://www.google.ro", "id":"it02"},{"type":"svg-icon-text","symbol":"phone","vbmob":true,"dim":{"width":"1.7rem","height":"1.7rem"},"text":"Tarabentino", "link":"https://www.google.ro", "id":"it03"},{"type":"svg-icon","symbol":"instagram","vbmob":true,"dim":{"width":"2.2rem","height":"2.2rem"},"link":"https://www.google.ro","id":"it04"}, {"type":"svg-icon","symbol":"youtube","vbmob":true,"dim":{"width":"2.2rem","height":"2.2rem"},"link":"https://www.google.ro","id":"it05"}]'
        ></snd-resct-mob-aa>
        <div class="snd-mob-search snd-border snd-center">S</div>
      </div>
      <snd-menu-mob-outside-aa class="snd-border"></snd-menu-mob-outside-aa>
    `}};T.styles=[w`
      :host {
        background-color: var(--snd-header-bkr-clr, #674439ff);
        color: var(--snd-header-clr, #000);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        position: sticky;
        top: 0;
        height: 3rem;
        width: 100%;
      }
      .snd-mob-links {
        background-color: var(--snd-header-bkr-clr, #674439ff);
        height: 3rem;
      }
      .snd-open-menu {
        animation-duration: 0.3s;
        animation-name: open-menu;
        animation-fill-mode: forwards;
        display: flex;
      }
      @keyframes open-menu {
        from {
          top: 0;
        }
        to {
          top: 3rem;
        }
      }
      .snd-close-menu {
        display: none;
      }
      .snd-mob-header-hidden {
        display: none;
      }
    `,St];Q([m({type:Boolean,attribute:"sizeable-disabled"})],T.prototype,"sizeableDisabled",2);Q([p(".snd-search-ct-button")],T.prototype,"_btn_search",2);Q([p("snd-menu-mob-outside-aa")],T.prototype,"_mob_outside",2);Q([p("snd-resct-mob-aa")],T.prototype,"_resct_mob",2);Q([x()],T.prototype,"_macao",2);T=Q([A("snd-header-mob-aa")],T);var Te=Object.defineProperty,He=Object.getOwnPropertyDescriptor,I=(s,t,e,o)=>{for(var i=o>1?void 0:o?He(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Te(t,e,i),i};let E=class extends y{constructor(){super(),this.logoMinDisabled=!1,this.logoMinOnly=!1,this._min_only=!1,this._has_logo_min=!1,this._logo_src="",this._logo_min_src="",this._min_only=!1,this._rendres=d`<div class="logo"></div>`,this._logo_src="",this._logo_min_src="",window.addEventListener("lhidden",()=>{this._activateLogoMin()}),window.addEventListener("lshowed",()=>{console.log("arata logo mare - from snd-logo-aa"),this._activateLogo()})}commuteOnMin(){this.logoMinDisabled||(this._min_only=!this._min_only,this._min_only?this._activateLogoMin():this._activateLogo())}_setLogo(){if(this._logo&&this._logo_src.trim().length>0&&this.dim){let s=null,t,e;this.dim&&(s=JSON.parse(this.dim).logo_dim,t=s.width,e=s.height),this._logo.style=`width: ${t}; height: ${e}; background-image: url("${this._logo_src}"); background-size: cover; background-position: center;`}}_setLogoMin(){if(this._logo_min&&this._logo_min_src.trim().length>0&&this.dim){let s=null,t,e;this.dim&&(s=JSON.parse(this.dim).logo_min_dim,t=s.width,e=s.height),this._logo_min.style=`width: ${t}; height: ${e}; background-image: url("${this._logo_min_src}"); background-size: cover; background-position: center;`}}_activateLogo(){this.logoMinOnly||(this._logo_min?.classList.add("chidden"),this._logo?.classList.remove("chidden"))}_activateLogoMin(){this._has_logo_min&&(this._logo?.classList.add("chidden"),this._logo_min?.classList.remove("chidden"))}willUpdate(s){this._logo_src="",this._logo_min_src="";let t=null;this.logos&&(t=JSON.parse(this.logos)),t&&(this._logo_src=t.logo,this._logo_min_src=t.logo_min,this._logo_min_src.trim().length>0?(this._rendres=d`<div class="logo_min chidden"></div>
          <div class="logo"></div>`,this.logoMinOnly&&(this._rendres=d`<div class="logo_min"></div>
            <div class="logo chidden"></div>`),this._has_logo_min=!0):this._has_logo_min=!1)}firstUpdated(s){this._logo&&this._setLogo(),this._has_logo_min&&this._setLogoMin()}render(){return d` ${this._rendres} `}};E.styles=w`
    :host {
      display: block;
      margin: 0;
      padding: 0;
      width: min-content;
      height: auto;
      background-color: var(--snd-header-bkr-clr, #674439ff);
    }
    img {
      margin: 0;
      padding: 0;
    }

    .chidden {
      display: none;
    }
  `;I([m({type:Boolean,attribute:"logo-min-disabled"})],E.prototype,"logoMinDisabled",2);I([m({type:Boolean,attribute:"logo-min-only"})],E.prototype,"logoMinOnly",2);I([m()],E.prototype,"logos",2);I([m()],E.prototype,"dim",2);I([x()],E.prototype,"_min_only",2);I([x()],E.prototype,"_has_logo_min",2);I([p(".logo")],E.prototype,"_logo",2);I([p(".logo_min")],E.prototype,"_logo_min",2);E=I([A("snd-logo-aa")],E);var Ne=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,R=(s,t,e,o)=>{for(var i=o>1?void 0:o?Be(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Ne(t,e,i),i};let D=class extends y{constructor(){super(),this.moreDisabled=!1,this.gap="5px",this.stack_hidden_empty=!0,this._stack_in=[],this._stack_out=[],this._set_in=new Set,this._set_out=new Set,this._tot_w_in=0,this._tot_w_out=0,this._ct_w=0,this._html_items=d``,this._ctMoreVisible=!1,this._more_isOn=!1,this._l_is_hidden=!1,this._s1_is_hidden=!1,this._s2_is_hidden=!0,this._evHideS1=new CustomEvent("search1hidden"),this._evShowS1=new CustomEvent("search1showed"),this._evHideS2=new CustomEvent("search2hidden"),this._evShowS2=new CustomEvent("search2showed"),this._evHideL=new CustomEvent("lhidden"),this._evShowL=new CustomEvent("lshowed")}_setDefaultValues(){this._dim_default='{"width":"70%", "height":"3rem"}'}_setDim(){let s=this._dim_default;this.dim&&(s=this.dim);const t=JSON.parse(s);this.style.height=t.height,this.style.width=t.width}_get_ct_width(){this._ct_w=this._ctItems?.getBoundingClientRect().width}_ff(s){let t=s.target?.tagName.trim().toLowerCase();this._ctMoreVisible&&t!=="snd-resct-aa"&&this._showOrHideMoreCt(s)}_fff(s){if(s.stopPropagation(),s&&s.target){let t=s.target.getAttribute("class")?.trim().toLowerCase();this._ctMoreVisible&&t!=="snd-more-icon"&&this._showOrHideMoreCt(s)}}_addWindowEvents(){window.addEventListener("pointerup",this._ff.bind(this))}_removeWindowEvents(){window.removeEventListener("pointerup",this._ff.bind(this))}_addEvents(){this.renderRoot.addEventListener("pointerup",this._fff.bind(this))}_more_senzor(){let s=this._more_isOn;this.moreDisabled||!this._ctMenuMore||(this._stack_out.length?(this._ctMenuMore.style.display="flex",this._more_isOn=!0):(this._ctMenuMore.style.display="none",this._ctMore&&(this._ctMore.style.display="none"),this._ctMoreVisible=!1,this._more_isOn=!1),s!==this._more_isOn&&this._more_isOn&&(this._evHideL&&!this._l_is_hidden?(dispatchEvent(this._evHideL),this._l_is_hidden=!0):this._evHideS1&&this._evShowS2&&this._l_is_hidden&&(dispatchEvent(this._evHideS1),dispatchEvent(this._evShowS2),this._s1_is_hidden=!0,this._s2_is_hidden=!1)))}_createMoreContainer(){this.moreDisabled||(this._ctMore=document.createElement("div"),this._ctMore.setAttribute("class","snd-more-ct"),this.renderRoot.appendChild(this._ctMore))}_addInMoreContainer(s){if(!(this.moreDisabled||!this._ctMore)&&s.element){const t=this.renderRoot.querySelector(`#${s.id}`);if(t){let e=t?.cloneNode();e.id=s.id+"_clone",e.classList.remove("snd-hidden"),e.innerHTML=t?.innerHTML,this._ctMore.insertAdjacentElement("afterbegin",e)}}}_showOrHideMoreCt(s){if(s.stopPropagation(),this.moreDisabled||!this._ctMore)return;let t=this.getBoundingClientRect().height+15,e=this.getBoundingClientRect().left;this._ctMoreVisible?(this._ctMore.style.display="none",this._ctMoreVisible=!1):this._stack_out.length&&(this._ctMore.style.top=t+"px",this._ctMore.style.left=e+"px",this._ctMore.style.display="flex",this._ctMoreVisible=!0)}_removeFromMoreContainer(s){if(this._ctMore&&s.element){const t=this._ctMore.querySelector(`#${s.id}_clone`);t&&this._ctMore.removeChild(t)}}_refresh_visible(){this._stack_out.forEach(s=>{s.element.classList.add("snd-removed")}),this._stack_in.forEach(s=>{s.element.classList.remove("snd-removed")})}_init_stacks(){let s=0,t=0,e=0,o=parseInt(this.gap),i="",r=this._items,n=0,h=0;t=r?.length??0,r?.forEach(l=>{s+=l.getBoundingClientRect().width,i=l.id,n===t-1&&(this._last_id=i),this._set_in.has(i)||(this._set_in.add(i),this._stack_in.unshift({element:l,width:l.getBoundingClientRect().width,id:i})),n=n+1}),t&&(s+=(t-1)*o),this._tot_w_in=s,this._tot_w_out=0;let a;if(this._ct_w&&s>this._ct_w){e=0;do a=this._stack_in.pop(),this._stack_out.push(a),this._set_out.add(a.id),this._set_in.delete(a.id),this._addInMoreContainer(a),s=s-a.width,h=h+a.width,a.id!==this._last_id&&(s=s-o,h=h+o),e=e+1;while(e<100&&s>this._ct_w);this._tot_w_in=s,this._tot_w_out=h}this._stack_out.forEach(l=>{l.element.classList.add("snd-removed"),l.element.classList.remove("snd-hidden")}),this._stack_in.forEach(l=>{l.element.classList.remove("snd-hidden")}),this._more_senzor()}_loadItems(){if(!this.items)return;const s=JSON.parse(this.items);let t=d``;this._html_items=d`${Wt(s,e=>e.id,e=>{switch(t=d``,e.type){case"svg-icon":e.link&&e.link.trim().length>0?t=d`<div class="snd-item snd-hidden" id="${e.id}">
                <a href=${e.link} class="snd-link-item">
                  <div class="snd-item-icon snd-item-icon-svg">
                    ${f(e.symbol,e.dim.width,e.dim.height)}
                  </div>
                </a>
              </div>`:t=d`<div class="snd-item snd-hidden" id="${e.id}">
                <div class="snd-item-icon snd-item-icon-svg">
                  ${f(e.symbol,e.dim.width,e.dim.height)}
                </div>
              </div>`;break;case"svg-icon-text":e.link&&e.link.trim().length>0?t=d`<div class="snd-item snd-hidden" id="${e.id}">
                <a href=${e.link} class="snd-link-item">
                  <div class="snd-item-icon snd-item-icon-svg">
                    ${f(e.symbol,e.dim.width,e.dim.height)}
                  </div>
                  <div class="snd-item-text">${e.text}</div>
                </a>
              </div>`:t=d`<div class="snd-item snd-hidden" id="${e.id}">
                <div class="snd-item-icon snd-item-icon-svg">
                  ${f(e.symbol,e.dim.width,e.dim.height)}
                </div>
                <div class="snd-item-text">${e.text}</div>
              </div>`;break}return t})}`}_refresh_stacks(s){let t,e=0,o=0,i=parseInt(this.gap),r,n=0,h=0,a=0,l=!1;for(const b of s){if(n=b.borderBoxSize[0].inlineSize,n<this._tot_w_in&&this._stack_in.length){o=this._tot_w_in,e=0;do{if(!this._stack_in.length)break;r=this._stack_in.pop(),this._stack_out.push(r),this._set_out.add(r.id),this._set_in.delete(r.id),this._addInMoreContainer(r),o=o-r.width,this._tot_w_out+=r.width,this._tot_w_in-=r.width,r.id!==this._last_id&&(this._tot_w_out+=i,this._tot_w_in-=i),e=e+1}while(e<100&&o>n)}if(l=!1,n>this._tot_w_in&&(h=n-this._tot_w_in,a=0,this._stack_out.length&&(t=this._stack_out[this._stack_out.length-1],a=t.width,t.id!==this._last_id&&(a+=i),h>a&&(l=!0))),l){e=0,o=0;do r=this._stack_out.pop(),this._stack_in.push(r),this._set_in.add(r.id),this._set_out.delete(r.id),this._removeFromMoreContainer(r),o=o+r.width,this._tot_w_out-=r.width,this._tot_w_in+=r.width,r.id!==this._last_id&&(this._tot_w_out-=i,this._tot_w_in+=i),e=e+1;while(e<100&&o>n)}let c=n-this._tot_w_in;this._s1_is_hidden&&!this._s2_is_hidden?n>this._tot_w_in&&c>300&&(this._evShowS1&&dispatchEvent(this._evShowS1),this._evHideS2&&dispatchEvent(this._evHideS2),this._s1_is_hidden=!1,this._s2_is_hidden=!0):this._l_is_hidden&&!this._s1_is_hidden&&this._evShowL&&c>160&&(console.log("arata logo mare - from res_ct-aa"),dispatchEvent(this._evShowL),this._l_is_hidden=!1)}this._refresh_visible(),this._more_senzor()}_createControls(){this._createMoreContainer()}connectedCallback(){super.connectedCallback(),this._setDefaultValues(),this._setDim(),this._loadItems(),this._createControls(),this._addWindowEvents(),this._addEvents()}disconnectedCallback(){super.disconnectedCallback(),this._res_obs?.unobserve(this._ctItems),this._removeWindowEvents()}willUpdate(s){}firstUpdated(s){this._ctItems&&(this._ctItems.style.gap=this.gap),this._get_ct_width(),this._init_stacks(),this._res_obs=new ResizeObserver(this._refresh_stacks.bind(this)),this._res_obs?.observe(this._ctItems),this._evHideS1&&this._evShowS2&&this._l_is_hidden&&(dispatchEvent(this._evHideS1),dispatchEvent(this._evShowS2),this._s1_is_hidden=!0,this._s2_is_hidden=!1)}render(){return d`<div @pointerup=${this._showOrHideMoreCt} class="snd-more-icon">
        <svg class="snd-icon">
          <use xlink:href="./src/assets/sndresctaa.svg#more"></use>
        </svg>
      </div>
      <div class="snd-ct-items">${this._html_items}</div>`}};D.styles=w`
    :host {
      display: flex;
      background-color: var(--snd-header-bkr-clr, #94be94ff);
      color: var(--snd-resct-clrX, #000);
      color: var(--snd-header-clr, #f51a1aff);
      border: 0px solid blue;
      height: auto;
      margin: 0;
      padding: 5px;
      box-sizing: border-box;
      justify-content: center;
      align-items: center;
      gap: 5px;
      position: relative;
      flex-grow: 1;
      flex-shrink: 1;
      width: 100%;
      overflow: hidden;
      overflow-y: visible;
    }
    div {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .snd-ct-items {
      border: 0px solid blue;
      height: auto;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      gap: 5px;
      overflow: hidden;
    }
    .snd-item {
      font-size: var(--snd-resct-fsz, 1.4rem);
      width: min-content;
      min-height: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      flex-grow: 0;
      flex-shrink: 0;
      border: 0px solid;
    }
    .snd-item-icon,
    .snd-item-text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 0;
      flex-shrink: 0;
      overflow: hidden;
      color: var(--snd-header-clr, #f51a1aff);
    }
    .snd-hidden {
      visibility: hidden;
    }
    .snd-removed {
      display: none;
    }
    .snd-icon {
      width: 24px;
      height: 24px;
      color: currentColor;
    }
    a.snd-link-item {
      text-decoration: none;
      outline: 0;
      color: currentColor;
      font-size: var(--snd-resct-fsz, 1.4rem);
      width: max-content;
      min-height: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      flex-grow: 0;
      flex-shrink: 0;
      border: 0px solid;
    }
    .snd-more-icon {
      display: none;
      justify-content: center;
      align-items: center;
      flex-grow: 0;
      flex-shrink: 1;
      width: 2rem;
      height: 100%;
      overflow: hidden;
    }
    .snd-more-ct {
      display: none;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      min-width: 5rem;
      height: min-content;
      position: fixed;
      top: 5.5rem;
      left: 5rem;
      background-color: var(--snd-header-bkr-clr, #f51a1aff);
      color: var(--snd-header-clr, #f51a1aff);
      padding: 3px 0.5rem;
      gap: 0.2rem;
      z-index: 100;
      padding: 0.5rem;
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
    }
  `;R([m({type:Boolean,attribute:"more-disabled"})],D.prototype,"moreDisabled",2);R([m()],D.prototype,"gap",2);R([m()],D.prototype,"dim",2);R([m()],D.prototype,"items",2);R([x()],D.prototype,"stack_hidden_empty",2);R([p(".snd-ct-items")],D.prototype,"_ctItems",2);R([p(".snd-more-icon")],D.prototype,"_ctMenuMore",2);R([kt(".snd-item")],D.prototype,"_items",2);D=R([A("snd-resct-aa")],D);var Ue=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,O=(s,t,e,o)=>{for(var i=o>1?void 0:o?Ve(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Ue(t,e,i),i};let k=class extends y{constructor(){super(),this.sizeableDisabled=!1,this.idResult="",this._ctresults_visible=!1,this.sstate="pasive",this._icon=d``,this._stask=-1,this._button_clicked=!1,this._opened=!1,window.addEventListener("search1hidden",()=>{console.log("hidden from header-aa"),this.hide()}),window.addEventListener("search1showed",()=>{console.log("shown from header-aa"),this.show()})}connectedCallback(){super.connectedCallback(),this._setDefaultValues()}disconnectedCallback(){}firstUpdated(s){this._btn_search&&(this._btn_search.style.width=this._obDim?.height??"1rem",this._btn_search.style.height=this._obDim?.height??"1rem"),this._addEvents()}show(){this.style.display="block"}hide(){this.style.display="none"}closeSearch(){this._input&&(this._input.value="",this._input.blur(),this._changeStatus({vb_pasive:!0}))}_openResults(){}_closeResults(){}_search_in_db(){console.log("I'm searching in database now ..."),this._input&&(this._input.value.trim().length?(this._stask&&clearTimeout(this._stask),this._changeStatus({vb_searching:!0}),this._stask=setTimeout(()=>{this._input&&this._input.value.trim().length&&(this._changeStatus({vb_founded:!0}),this._openResults()),this._input&&!this._input.value.trim().length&&(this._changeStatus({vb_active:!0}),this._closeResults())},1e3)):(this._stask&&clearTimeout(this._stask),this._stask=-1,this._changeStatus({vb_active:!0}),this._closeResults()))}_handleButton(s){s.preventDefault(),s.stopPropagation(),this._button_clicked=!0}_fsubmit(s){if(s.stopPropagation(),s.preventDefault(),console.log("submit"),(this.sstate==="pasive"||this.sstate==="active")&&this._button_clicked){this.sizeableDisabled||(this._opened?this.style.width=this._obDim?.height??"1rem":this.style.width=this._obDim?.width??"1rem",this._opened=!this._opened);return}if(this.sstate==="founded"&&this._button_clicked){this._input&&(this._input.value="",this._input.blur(),this._changeStatus({vb_active:!0}),this._closeResults());return}this._button_clicked=!1,!(this.sstate==="active"||this.sstate==="pasive")&&(this._search_in_db(),this._handleStateChange())}_addEvents(){this._form&&this._form.addEventListener("submit",this._fsubmit.bind(this))}_handleStateChange(){this.sstate==="pasive"&&this.sizeableDisabled&&(this._input?.focus(),this._changeStatus({vb_active:!0}))}_showIcon(s="lens"){s==="lens"&&(this._icon=f("search")),s==="close"&&(this._icon=f("close")),s==="searching"&&(this._icon=d`<div class="snd-loader"></div>`)}_changeStatus({vb_pasive:s=!1,vb_active:t=!1,vb_searching:e=!1,vb_founded:o=!1}){s&&(this.sstate="pasive",this._showIcon("lens")),t&&(this.sstate="active",this._showIcon("lens")),e&&(this.sstate="searching",this._showIcon("searching")),o&&(this.sstate="founded",this._showIcon("close"))}_setDefaultValues(){this.dim||(this.dim='{"width":"200px","height":"4rem"}'),this.formName||(this.formName="fsearch"),this._setDim(),this.sstate="pasive",this._icon=f("search")}_setDim(){this.dim&&(this._obDim=JSON.parse(this.dim)),this.sizeableDisabled?this.style.width=this._obDim?.width??"1rem":this.style.width=this._obDim?.height??"1rem",this.style.height=this._obDim?.height??"1rem"}render(){return d`
      <form action="#" name="fsearch" class="searchform">
        <div class="snd-search-ct-input">
          <input
            type="search"
            class="snd-input-search"
            placeholder="Search..."
            @keyup=${this._search_in_db}
          />
        </div>
        <button
          class="snd-search-ct-button"
          style="width: ${this._obDim?.height}, height:${this._obDim?.height}; "
          @pointerup=${this._handleButton}
        >
          ${this._icon}
        </button>
      </form>
    `}};k.styles=[w`
    :host {      
      background-color: var(--snd-header-bkr-clr, #674439ff);
      color: var(--snd-header-clr, #000);
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      width: 200px;
      border: 0px solid var( --snd-header-clr, #ddffcc);
    }
    .searchform {
      display: flex;
      justify-content: center;
      align-items: center;
      
      
      border: 1px solid var( --snd-header-clrx, #ddffcc6e);
      border-radius: 7px;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      padding-left: 5px;
    }
    .snd-search-ct-input {
      flex-grow: 1;
      flex-shrink: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      
      
    }
    [type="search"]::-webkit-search-decoration,
    [type="search"]::-webkit-search-cancel-button {
        appearance: none;
    }

    .snd-input-search::placeholder {
      color: #aca576ff;
    }
    .snd-input-search {
        border: 0;
        font-size: 1.4rem;
        width: 100%;
        height: 100%;
        margin: 0;
        outline: 0;
        padding-left: 5px;
        font-size: 1.3rem:    
        color: var(--snd-header-clr, #ddffcc88);   
        border-top-left-radius: 5px; 
        border-bottom-left-radius: 5px; 
        
    }
    .snd-search-ct-button {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 0;
      flex-shrink: 0;
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      color: var(--snd-header-clr, #ddffcc);  
      background-color: var(--snd-header-bkr-clr, #674439ff);
      height: 2rem;
      border-radius: 7px;
    }
    .snd-search-ct-button:active,
    .snd-search-ct-button:visited {
      color: var(--snd-primary-color-a);
    }
    .snd-input-search {
      background-color:  #5e615eff;
      color: var(--snd-header-clr, #ddffcc);
    }
    .snd-icon {
      width: 24px;
      height: 24px;
      color: #ccc;
    }
    .snd-loader {
      width: 1rem;
      height: 1rem;
      border: 2px solid var(--snd-primary-color, #94be94ff);
      border-bottom-color: transparent;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,w`
      .snd-search-ct-input {
        flex-grow: 1;
        flex-shrink: 1;
        height: 2rem;
      }
    `];O([m({type:Boolean,attribute:"sizeable-disabled"})],k.prototype,"sizeableDisabled",2);O([m({type:String,attribute:"id-result"})],k.prototype,"idResult",2);O([m()],k.prototype,"dim",2);O([m({type:String,attribute:"form-name"})],k.prototype,"formName",2);O([x()],k.prototype,"_ctresults_visible",2);O([x()],k.prototype,"sstate",2);O([p(".snd-search-ct-button")],k.prototype,"_btn_search",2);O([p(".snd-input-search")],k.prototype,"_input",2);O([p(".searchform")],k.prototype,"_form",2);k=O([A("snd-search-aa")],k);var Fe=Object.defineProperty,We=Object.getOwnPropertyDescriptor,P=(s,t,e,o)=>{for(var i=o>1?void 0:o?We(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Fe(t,e,i),i};let S=class extends y{constructor(){super(),this.sizeableDisabled=!1,this.idResult="",this._ctresults_visible=!1,this.sstate="pasive",this._icon=d``,this._stask=-1,this._button_clicked=!1,this._opened=!1,window.addEventListener("search2hidden",()=>{console.log("hidden from header-aa"),this.hide()}),window.addEventListener("search2showed",()=>{console.log("shown from header-aa"),this.show()})}connectedCallback(){super.connectedCallback(),this._setDefaultValues()}disconnectedCallback(){}firstUpdated(s){this._btn_search&&(this._btn_search.style.width=this._obDim?.height??"1rem",this._btn_search.style.height=this._obDim?.height??"1rem"),this._addEvents()}show(){this.style.display="block"}hide(){this.style.display="none"}closeSearch(){this._input&&(this._input.value="",this._input.blur(),this._changeStatus({vb_pasive:!0}))}_openResults(){}_closeResults(){}_search_in_db(){console.log("I'm searching in database now ..."),this._input&&(this._input.value.trim().length?(this._stask&&clearTimeout(this._stask),this._changeStatus({vb_searching:!0}),this._stask=setTimeout(()=>{this._input&&this._input.value.trim().length&&(this._changeStatus({vb_founded:!0}),this._openResults()),this._input&&!this._input.value.trim().length&&(this._changeStatus({vb_active:!0}),this._closeResults())},1e3)):(this._stask&&clearTimeout(this._stask),this._stask=-1,this._changeStatus({vb_active:!0}),this._closeResults()))}_handleButton(s){s.preventDefault(),s.stopPropagation(),this._button_clicked=!0}_fsubmit(s){if(s.stopPropagation(),s.preventDefault(),console.log("submit"),(this.sstate==="pasive"||this.sstate==="active")&&this._button_clicked){this.sizeableDisabled||(this._opened?(this.style.width=this._obDim?.height??"1rem",this._input&&(this._input.style.display="none")):(this.style.width=this._obDim?.width??"1rem",this._input&&(this._input.style.display="flex")),this._opened=!this._opened);return}if(this.sstate==="founded"&&this._button_clicked){this._input&&(this._input.value="",this._input.blur(),this._changeStatus({vb_active:!0}),this._closeResults());return}this._button_clicked=!1,!(this.sstate==="active"||this.sstate==="pasive")&&(this._search_in_db(),this._handleStateChange())}_addEvents(){this._form&&this._form.addEventListener("submit",this._fsubmit.bind(this))}_handleStateChange(){this.sstate==="pasive"&&this.sizeableDisabled&&(this._input?.focus(),this._changeStatus({vb_active:!0}))}_showIcon(s="lens"){s==="lens"&&(this._icon=f("search")),s==="close"&&(this._icon=f("close")),s==="searching"&&(this._icon=d`<div class="snd-loader"></div>`)}_changeStatus({vb_pasive:s=!1,vb_active:t=!1,vb_searching:e=!1,vb_founded:o=!1}){s&&(this.sstate="pasive",this._showIcon("lens")),t&&(this.sstate="active",this._showIcon("lens")),e&&(this.sstate="searching",this._showIcon("searching")),o&&(this.sstate="founded",this._showIcon("close"))}_setDefaultValues(){this.dim||(this.dim='{"width":"200px","height":"4rem"}'),this.formName||(this.formName="fsearch"),this._setDim(),this.sstate="pasive",this._icon=f("search")}_setDim(){this.dim&&(this._obDim=JSON.parse(this.dim)),this.sizeableDisabled?this.style.width=this._obDim?.width??"1rem":this.style.width=this._obDim?.height??"1rem",this.style.height=this._obDim?.height??"1rem"}render(){return d`
      <form action="#" name="fsearch" class="searchform">
        <div class="snd-search-ct-input">
          <input
            type="search"
            class="snd-input-search"
            placeholder="Search..."
            @keyup=${this._search_in_db}
          />
        </div>
        <button
          class="snd-search-ct-button"
          style="width: ${this._obDim?.height}, height:${this._obDim?.height}; "
          @pointerup=${this._handleButton}
        >
          ${this._icon}
        </button>
      </form>
    `}};S.styles=[w`
      :host {
        background-color: var(--snd-header-bkr-clr, #674439ff);
        color: var(--snd-header-clr, #000);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 200px;
        display: none;
        border-radius: 7px;
        margin-right: 5px;
      }
      .searchform {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-color: var(--snd-header-bkr-clr, #674439ff);
        overflow: hidden;
        color: var(--snd-clrX, #000);
        border: 0;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        padding-left: 5px;
        border-radius: 7px;
        border: 1px solid var(--snd-header-clrx, #ddffcc6e);
      }
      .snd-search-ct-input {
        flex-grow: 1;
        flex-shrink: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 7px;
      }
      [type="search"]::-webkit-search-decoration,
      [type="search"]::-webkit-search-cancel-button {
        appearance: none;
      }

      .snd-input-search::placeholder {
        color: #cbc8a4ff;
      }
      .snd-input-search {
        border: 0;
        font-size: 1.4rem;
        width: 100%;
        height: 100%;
        margin: 0;
        outline: 0;
        padding-left: 5px;
        font-size: 1.3rem;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        color: var(--snd-header-clr, #ddffcc88);
        background-color: #6a6a6aff;
        display: none;
      }
      .snd-search-ct-button {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 0;
        flex-shrink: 0;
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        color: var(--snd-header-clr, #ddffcc);
        background-color: var(--snd-header-bkr-clr, #674439ff);
        border-radius: 7px;
      }
      .snd-search-ct-button:active,
      .snd-search-ct-button:visited {
        color: var(--snd-primary-color-a);
      }

      .snd-icon {
        width: 24px;
        height: 24px;
        color: #ccc;
      }
      .snd-loader {
        width: 1rem;
        height: 1rem;
        border: 2px solid var(--snd-primary-color, #94be94ff);
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
      }

      @keyframes rotation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,w`
      .snd-search-ct-input {
        flex-grow: 1;
        flex-shrink: 1;
        height: 2rem;
      }
    `];P([m({type:Boolean,attribute:"sizeable-disabled"})],S.prototype,"sizeableDisabled",2);P([m({type:String,attribute:"id-result"})],S.prototype,"idResult",2);P([m()],S.prototype,"dim",2);P([m({type:String,attribute:"form-name"})],S.prototype,"formName",2);P([x()],S.prototype,"_ctresults_visible",2);P([x()],S.prototype,"sstate",2);P([p(".snd-search-ct-button")],S.prototype,"_btn_search",2);P([p(".snd-input-search")],S.prototype,"_input",2);P([p(".searchform")],S.prototype,"_form",2);S=P([A("snd-search-ab")],S);var qe=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,dt=(s,t,e,o)=>{for(var i=o>1?void 0:o?Ge(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&qe(t,e,i),i};let J=class extends y{constructor(){super(...arguments),this.visibilityDisabled=!1}_closeResults(s){s.closeSearch(),this.style.display="none"}closeResults(){this.style.display="none",console.log("close results")}_addEventsOnClose(){if(this.idSearchElements&&this.idSearchElements.length){let s;this._vid?.forEach(t=>{s=document.getElementById(t),s&&this._close&&this._close.addEventListener("pointerup",this._closeResults.bind(this,s))})}}connectedCallback(){super.connectedCallback()}firstUpdated(s){this.idSearchElements&&(this._vid=JSON.parse(this.idSearchElements),this._addEventsOnClose())}_handleClose(){}render(){return d`
      <div class="snd-res-top">
        <div class="snd-res-top-title">Search Results</div>
        <div class="snd-res-top-close" @pointerup=${this._handleClose}>
          ${f("close")}
        </div>
      </div>
      <div class="snd-res-ct">
        <div class="snd-res-content">
          <div class="snd-res">Result 01</div>
          <div class="snd-res">Result 02</div>
          <div class="snd-res">Result 03</div>
        </div>
        <div class="snd-res-pub">Pubicity</div>
      </div>
    `}};J.styles=w`
    :host {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 10rem;
      left: 1.5rem;
      z-index: 12000;
      width: 97vw;
      min-height: 970px;
      background-color: #ac0909ff;
      left: 50%;
      transform: translateX(-50%);
    }
    .snd-res-top {
      display: flex;
    }
    .snd-res-top-title {
      flex-grow: 1;
    }
    .snd-res-top-close {
      width: 3rem;
      height: 3rem;
      flex-grow: 0;
      margin-left: auto;
    }
  `;dt([m({type:Boolean,attribute:"visibility-disabled"})],J.prototype,"visibilityDisabled",2);dt([m({attribute:"id-search-elements"})],J.prototype,"idSearchElements",2);dt([m()],J.prototype,"dim",2);dt([p(".snd-res-top-close ")],J.prototype,"_close",2);J=dt([A("snd-search-results-aa")],J);var Je=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Y=(s,t,e,o)=>{for(var i=o>1?void 0:o?Xe(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Je(t,e,i),i};let H=class extends y{constructor(){super(),this.sizeableDisabled=!1,this._isDesktop=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("DOMContentLoaded",()=>{this._detectViewport(),this._isDesktop||(this.style.display="none")}),window.addEventListener("resize",()=>{if(this._detectViewport(),!this._isDesktop){console.log("resize"),this.style.display="none";const s=document.querySelector("snd-header-mob-aa");s&&(s.style.display="flex")}})}disconnectedCallback(){}firstUpdated(s){}_detectViewport(){let s=0;this._isDesktop=!1,window.innerWidth!==void 0?s=window.innerWidth:s=document.documentElement.clientWidth,s>768&&(this._isDesktop=!0)}render(){return d`
      <snd-logo-aa
        dim='{"logo_dim": {"width":"15rem","height":"5rem"},"logo_min_dim": {"width":"5rem","height":"5rem"}}'
        logos='{"logo_min":"./src/assets/logo_min.png", "logo":"./src/assets/logo.png" }'
        id="logo01"
      >
      </snd-logo-aa>
      <div class="snd-ct-resct-search">
        <snd-resct-aa
          class="snd-resct"
          id="resct01"
          dim='{"width":"50%","height":"4rem"}'
          gap="15px"
          items='[{"type":"svg-icon","symbol":"youtube","vbmob":true,"dim":{"width":"3rem","height":"3rem"},"link":"https://www.google.ro","id":"it01"},{"type":"svg-icon","symbol":"facebook","vbmob":true,"dim":{"width":"3rem","height":"3rem"}, "link":"https://www.google.ro", "id":"it02"},{"type":"svg-icon-text","symbol":"phone","vbmob":true,"dim":{"width":"3rem","height":"3rem"},"text":"Tarabentino", "link":"https://www.google.ro", "id":"it03"},{"type":"svg-icon","symbol":"instagram","vbmob":true,"dim":{"width":"3rem","height":"3rem"},"link":"https://www.google.ro","id":"it04"}, {"type":"svg-icon","symbol":"youtube","vbmob":true,"dim":{"width":"3rem","height":"3rem"},"link":"https://www.google.ro","id":"it05"}]'
        ></snd-resct-aa>
        <snd-search-aa
          class="snd-search"
          id="src01"
          id-result="res01"
          form-name="fsearch"
          dim='{"width":"300px","height":"3rem"}'
          sizeable-disabled
        ></snd-search-aa>
      </div>
      <div class="snd-ct-resct-menu">
        <div class="snd-menu-aa">menu</div>
        <snd-search-ab
          class="snd-search-ab"
          id="src01b"
          id-result="res01"
          form-name="fsearch"
          dim='{"width":"250px","height":"3rem"}'
        ></snd-search-ab>
      </div>
      <snd-search-results-aa
        dim='{"width":"97vw","height":"77vh"}'
        id="res01"
        id-search-elements='["src01"]'
      ></snd-search-results-aa>
    `}};H.styles=[w`
      :host {
        background-color: var(--snd-header-bkr-clr, #674439ff);
        color: var(--snd-header-clr, #000);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        position: sticky;
        top: 0;
        height: 3rem;
        width: 100%;
        overflow: visible;
      }
      snd-logo-aa,
      snd-search-aa,
      snd-search-results-aa {
        display: none;
      }
      .snd-resct-hidden {
        display: none;
      }

      .snd-ct-resct-search {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-grow: 2;
        position: relative;
        overflow: hidden;
        overflow-y: visible;
      }
      .snd-ct-resct-menu {
        border: 1px solid #fff;
        width: 100%;
        height: 5rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-grow: 1;
        flex-shrink: 1;
        width: 400px;
      }

      @media only screen and (min-width: 48em) {
        :host {
          height: 6rem;
        }
        snd-logo-aa,
        snd-search-aa {
          display: block;
        }
        snd-resct-aa {
          display: flex;
        }
        .snd-resct-hidden {
          display: flex;
        }
      }
    `];Y([m({type:Boolean,attribute:"sizeable-disabled"})],H.prototype,"sizeableDisabled",2);Y([p(".snd-search-ct-button")],H.prototype,"_btn_search",2);Y([p(".snd-resct")],H.prototype,"_resct",2);Y([p(".snd-search")],H.prototype,"_search",2);Y([x()],H.prototype,"_macao",2);H=Y([A("snd-header-aa")],H);
