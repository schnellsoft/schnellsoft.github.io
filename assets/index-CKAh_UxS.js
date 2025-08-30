(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=globalThis,Dt=vt.ShadowRoot&&(vt.ShadyCSS===void 0||vt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ot=Symbol(),Ht=new WeakMap;let Kt=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==Ot)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Dt&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=Ht.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Ht.set(e,t))}return t}toString(){return this.cssText}};const ie=s=>new Kt(typeof s=="string"?s:s+"",void 0,Ot),y=(s,...t)=>{const e=s.length===1?s[0]:t.reduce(((o,i,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[r+1]),s[0]);return new Kt(e,s,Ot)},oe=(s,t)=>{if(Dt)s.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const o=document.createElement("style"),i=vt.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=e.cssText,s.appendChild(o)}},Tt=Dt?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return ie(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:re,defineProperty:ne,getOwnPropertyDescriptor:de,getOwnPropertyNames:ae,getOwnPropertySymbols:he,getPrototypeOf:le}=Object,xt=globalThis,Bt=xt.trustedTypes,ce=Bt?Bt.emptyScript:"",_e=xt.reactiveElementPolyfillSupport,lt=(s,t)=>s,yt={toAttribute(s,t){switch(t){case Boolean:s=s?ce:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Lt=(s,t)=>!re(s,t),Nt={attribute:!0,type:String,converter:yt,reflect:!1,useDefault:!1,hasChanged:Lt};Symbol.metadata??=Symbol("metadata"),xt.litPropertyMetadata??=new WeakMap;let et=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Nt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);i!==void 0&&ne(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){const{get:i,set:r}=de(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const a=i?.call(this);r?.call(this,n),this.requestUpdate(t,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Nt}static _$Ei(){if(this.hasOwnProperty(lt("elementProperties")))return;const t=le(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(lt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(lt("properties"))){const e=this.properties,o=[...ae(e),...he(e)];for(const i of o)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,i]of e)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const i=this._$Eu(e,o);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)e.unshift(Tt(i))}else t!==void 0&&e.push(Tt(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return oe(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(i!==void 0&&o.reflect===!0){const r=(o.converter?.toAttribute!==void 0?o.converter:yt).toAttribute(e,o.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const o=this.constructor,i=o._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const r=o.getPropertyOptions(i),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:yt;this._$Em=i;const a=n.fromAttribute(e,r.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,o){if(t!==void 0){const i=this.constructor,r=this[t];if(o??=i.getPropertyOptions(t),!((o.hasChanged??Lt)(r,e)||o.useDefault&&o.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,o))))return;this.C(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:i,wrapped:r},n){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,r]of o){const{wrapped:n}=r,a=this[i];n!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,r,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((o=>o.hostUpdate?.())),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};et.elementStyles=[],et.shadowRootOptions={mode:"open"},et[lt("elementProperties")]=new Map,et[lt("finalized")]=new Map,_e?.({ReactiveElement:et}),(xt.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=globalThis,wt=Pt.trustedTypes,Ut=wt?wt.createPolicy("lit-html",{createHTML:s=>s}):void 0,Zt="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,Qt="?"+T,me=`<${Qt}>`,G=document,ct=()=>G.createComment(""),_t=s=>s===null||typeof s!="object"&&typeof s!="function",It=Array.isArray,pe=s=>It(s)||typeof s?.[Symbol.iterator]=="function",At=`[ 	
\f\r]`,at=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vt=/-->/g,Ft=/>/g,F=RegExp(`>|${At}(?:([^\\s"'>=/]+)(${At}*=${At}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wt=/'/g,qt=/"/g,Yt=/^(?:script|style|textarea|title)$/i,ue=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),h=ue(1),J=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Gt=new WeakMap,q=G.createTreeWalker(G,129);function te(s,t){if(!It(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ut!==void 0?Ut.createHTML(t):t}const be=(s,t)=>{const e=s.length-1,o=[];let i,r=t===2?"<svg>":t===3?"<math>":"",n=at;for(let a=0;a<e;a++){const d=s[a];let l,u,c=-1,b=0;for(;b<d.length&&(n.lastIndex=b,u=n.exec(d),u!==null);)b=n.lastIndex,n===at?u[1]==="!--"?n=Vt:u[1]!==void 0?n=Ft:u[2]!==void 0?(Yt.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=F):u[3]!==void 0&&(n=F):n===F?u[0]===">"?(n=i??at,c=-1):u[1]===void 0?c=-2:(c=n.lastIndex-u[2].length,l=u[1],n=u[3]===void 0?F:u[3]==='"'?qt:Wt):n===qt||n===Wt?n=F:n===Vt||n===Ft?n=at:(n=F,i=void 0);const p=n===F&&s[a+1].startsWith("/>")?" ":"";r+=n===at?d+me:c>=0?(o.push(l),d.slice(0,c)+Zt+d.slice(c)+T+p):d+T+(c===-2?a:p)}return[te(s,r+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class mt{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let r=0,n=0;const a=t.length-1,d=this.parts,[l,u]=be(t,e);if(this.el=mt.createElement(l,o),q.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=q.nextNode())!==null&&d.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(Zt)){const b=u[n++],p=i.getAttribute(c).split(T),w=/([.?@])?(.*)/.exec(b);d.push({type:1,index:r,name:w[2],strings:p,ctor:w[1]==="."?ge:w[1]==="?"?ve:w[1]==="@"?ye:kt}),i.removeAttribute(c)}else c.startsWith(T)&&(d.push({type:6,index:r}),i.removeAttribute(c));if(Yt.test(i.tagName)){const c=i.textContent.split(T),b=c.length-1;if(b>0){i.textContent=wt?wt.emptyScript:"";for(let p=0;p<b;p++)i.append(c[p],ct()),q.nextNode(),d.push({type:2,index:++r});i.append(c[b],ct())}}}else if(i.nodeType===8)if(i.data===Qt)d.push({type:2,index:r});else{let c=-1;for(;(c=i.data.indexOf(T,c+1))!==-1;)d.push({type:7,index:r}),c+=T.length-1}r++}}static createElement(t,e){const o=G.createElement("template");return o.innerHTML=t,o}}function st(s,t,e=s,o){if(t===J)return t;let i=o!==void 0?e._$Co?.[o]:e._$Cl;const r=_t(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(s),i._$AT(s,e,o)),o!==void 0?(e._$Co??=[])[o]=i:e._$Cl=i),i!==void 0&&(t=st(s,i._$AS(s,t.values),i,o)),t}let fe=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,i=(t?.creationScope??G).importNode(e,!0);q.currentNode=i;let r=q.nextNode(),n=0,a=0,d=o[0];for(;d!==void 0;){if(n===d.index){let l;d.type===2?l=new ot(r,r.nextSibling,this,t):d.type===1?l=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(l=new we(r,this,t)),this._$AV.push(l),d=o[++a]}n!==d?.index&&(r=q.nextNode(),n++)}return q.currentNode=G,i}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}};class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=st(this,t,e),_t(t)?t===x||t==null||t===""?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==J&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):pe(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==x&&_t(this._$AH)?this._$AA.nextSibling.data=t:this.T(G.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=mt.createElement(te(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(e);else{const r=new fe(i,this),n=r.u(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let e=Gt.get(t.strings);return e===void 0&&Gt.set(t.strings,e=new mt(t)),e}k(t){It(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const r of t)i===e.length?e.push(o=new ot(this.O(ct()),this.O(ct()),this,this.options)):o=e[i],o._$AI(r),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class kt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,r){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=x}_$AI(t,e=this,o,i){const r=this.strings;let n=!1;if(r===void 0)t=st(this,t,e,0),n=!_t(t)||t!==this._$AH&&t!==J,n&&(this._$AH=t);else{const a=t;let d,l;for(t=r[0],d=0;d<r.length-1;d++)l=st(this,a[o+d],e,d),l===J&&(l=this._$AH[d]),n||=!_t(l)||l!==this._$AH[d],l===x?t=x:t!==x&&(t+=(l??"")+r[d+1]),this._$AH[d]=l}n&&!i&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ge extends kt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}}class ve extends kt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==x)}}class ye extends kt{constructor(t,e,o,i,r){super(t,e,o,i,r),this.type=5}_$AI(t,e=this){if((t=st(this,t,e,0)??x)===J)return;const o=this._$AH,i=t===x&&o!==x||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==x&&(o===x||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class we{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){st(this,t)}}const xe={I:ot},ke=Pt.litHtmlPolyfillSupport;ke?.(mt,ot),(Pt.litHtmlVersions??=[]).push("3.3.1");const $e=(s,t,e)=>{const o=e?.renderBefore??t;let i=o._$litPart$;if(i===void 0){const r=e?.renderBefore??null;o._$litPart$=i=new ot(t.insertBefore(ct(),r),r,void 0,e??{})}return i._$AI(s),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=globalThis;let g=class extends et{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$e(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}};g._$litElement$=!0,g.finalized=!0,zt.litElementHydrateSupport?.({LitElement:g});const Se=zt.litElementPolyfillSupport;Se?.({LitElement:g});(zt.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=s=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(s,t)})):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce={attribute:!0,type:String,converter:yt,reflect:!1,hasChanged:Lt},Ee=(s=Ce,t,e)=>{const{kind:o,metadata:i}=e;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),o==="setter"&&((s=Object.create(s)).wrapped=!0),r.set(e.name,s),o==="accessor"){const{name:n}=e;return{set(a){const d=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,d,s)},init(a){return a!==void 0&&this.C(n,void 0,s,a),a}}}if(o==="setter"){const{name:n}=e;return function(a){const d=this[n];t.call(this,a),this.requestUpdate(n,d,s)}}throw Error("Unsupported decorator location: "+o)};function _(s){return(t,e)=>typeof e=="object"?Ee(s,t,e):((o,i,r)=>{const n=i.hasOwnProperty(r);return i.constructor.createProperty(r,o),n?Object.getOwnPropertyDescriptor(i,r):void 0})(s,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(s){return _({...s,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee=(s,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(s,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(s,t){return(e,o,i)=>{const r=n=>n.renderRoot?.querySelector(s)??null;return ee(e,o,{get(){return r(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ae;function $t(s){return(t,e)=>ee(t,e,{get(){return(this.renderRoot??(Ae??=document.createDocumentFragment())).querySelectorAll(s)}})}const St=y`
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
`;var Me=Object.defineProperty,De=Object.getOwnPropertyDescriptor,pt=(s,t,e,o)=>{for(var i=o>1?void 0:o?De(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Me(t,e,i),i};let X=class extends g{constructor(){super(),this._status="closed",this._refTO=-1}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerup",this._changeState.bind(this)),this._setEvents()}firstUpdated(s){this.addEventListener("opensearch",()=>{console.log("hi there dan")})}_setEvents(){this._openMobMenu=new Event("openmobmenu",{bubbles:!0,composed:!0,cancelable:!1}),this._closeMobMenu=new Event("closemobmenu",{bubbles:!0,composed:!0,cancelable:!1})}_changeState(){switch(this._status){case"closed":this._bar_top&&(this._bar_top.classList.remove("snd-bar-top-close"),this._bar_top.classList.add("snd-bar-top-open")),this._bar_middle&&(this._bar_middle.classList.remove("snd-bar-middle-close"),this._bar_middle.classList.add("snd-bar-middle-open")),this._bar_bottom&&(this._bar_bottom.classList.remove("snd-bar-bottom-close"),this._bar_bottom.classList.add("snd-bar-bottom-open")),this._openMobMenu&&this.dispatchEvent(this._openMobMenu),this._status="opened";break;case"opened":this._bar_top&&(this._bar_top.classList.remove("snd-bar-top-open"),this._bar_top.classList.add("snd-bar-top-close")),this._bar_middle&&(this._bar_middle.classList.remove("snd-bar-middle-open"),this._bar_middle.classList.add("snd-bar-middle-close")),this._bar_bottom&&(this._bar_bottom.classList.remove("snd-bar-bottom-open"),this._bar_bottom.classList.add("snd-bar-bottom-close")),this._closeMobMenu&&this.dispatchEvent(this._closeMobMenu),this._status="closed",this._refTO&&(clearTimeout(this._refTO),this._refTO=setTimeout(()=>{this._bar_top?.classList.remove("snd-bar-top-close"),this._bar_middle?.classList.remove("snd-bar-middle-close"),this._bar_bottom?.classList.remove("snd-bar-bottom-close")},1700));break}}disconnectedCallback(){}render(){return h`
      <div class="snd-bar snd-bar-top"></div>
      <div class="snd-bar snd-bar-middle"></div>
      <div class="snd-bar snd-bar-bottom"></div>
    `}};X.styles=[y`
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
    `,St];pt([m(".snd-bar-top")],X.prototype,"_bar_top",2);pt([m(".snd-bar-middle")],X.prototype,"_bar_middle",2);pt([m(".snd-bar-bottom")],X.prototype,"_bar_bottom",2);pt([v()],X.prototype,"_status",2);X=pt([k("snd-menu-mob-btn-aa")],X);function f(s="fb",t="24px",e="24px"){switch(s){case"close":return h`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#close"></use>
      </svg>`;case"search":return h`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#search"></use>
      </svg>`;case"location":return h`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#fb"></use>
      </svg>`;case"facebook":return h`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#fb"></use>
      </svg>`;case"youtube":return h`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#ytb"></use>
      </svg>`;case"instagram":return h`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#insta"></use>
      </svg>`;case"phone":return h`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#phone"></use>
      </svg>`;case"arrdown":return h`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#arrdown"></use>
      </svg>`;case"arrup":return h`<svg
        class="snd-icon"
        style="width: ${t}; height:  ${e};"
      >
        <use xlink:href="./src/assets/sndicap.svg#arrup"></use>
      </svg>`;default:return h``}}function se(s="fb",t="24px",e="24px"){switch(s){case"close":return`<svg
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
      </svg>`;default:return""}}var Oe=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,ut=(s,t,e,o)=>{for(var i=o>1?void 0:o?Le(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Oe(t,e,i),i};let K=class extends g{constructor(){super(),this.gap="5px",this._ctsub_visible=!1,this._has_subitems=!1,this._has_icon=!1,this._arrow=h``,this._setDefaultValues()}connectedCallback(){super.connectedCallback(),this._setDefaultValues(),this._loadItemIntoOb(),this._setDim(),this._setFlags(),this._setControls(),this._addEvents()}disconnectedCallback(){super.disconnectedCallback()}firstUpdated(s){this._createControls()}_setDefaultValues(){this._dim_default='{"width":"1rem", "height":"1rem"}'}_setDim(){let s=this._dim_default;const t=JSON.parse(s);this._obItem&&(this._obItem.dim?(this._obItem.dim.width||(this._obItem.dim.width=t.width),this._obItem.dim.height||(this._obItem.dim.height=t.height)):this._obItem.dim={width:"1rem",height:"1rem"})}_loadItemIntoOb(){this.item&&(this._obItem=JSON.parse(this.item))}_loadSubitemsIntoCTSub(){if(this.item&&this._ctsub&&this._has_subitems){const s=this._obItem?.subitems.length;if(s&&s>0){let t=0,e,o,i,r;for(t==0;t<s;t++)e=document.createElement("div"),e.setAttribute("class","snd-ct-sub-item"),e.setAttribute("class","snd_ct_sub-item-sep"),o=document.createElement("a"),o.setAttribute("class","snd-link-sub-item"),o.setAttribute("href",this._obItem?.subitems[t].link??"#"),i=document.createElement("div"),i.setAttribute("class","snd-sub-item-icon"),i.innerHTML=`${se(this._obItem?.subitems[t].symbol,this._obItem?.subitems[t].dim.width,this._obItem?.subitems[t].dim.height)}`,o.appendChild(i),r=document.createElement("div"),r.setAttribute("class","snd-sub-item-text"),r.textContent=this._obItem?.subitems[t].text??"",o.appendChild(r),e.appendChild(o),this._ctsub.appendChild(e),this._ctsub.style.display="none"}}}_setFlags(){this._obItem&&(this._has_subitems=this._obItem.subitems.length>0,this._has_icon=this._obItem.symbol.length>0)}_createControls(){this._ctsub=document.createElement("div"),this._ctsub.setAttribute("class","snd-ct-subp");const s=this.getBoundingClientRect().width;this._ctsub_parent?.appendChild(this._ctsub),this._ctsub.style.top=this.getBoundingClientRect().height+"px";const e=this._ctsub.getBoundingClientRect().width-s;this._ctsub.style.left=-e/2+"px",this._loadSubitemsIntoCTSub()}_setControls(){this._has_subitems&&(this._arrow=h`${f("arrdown")}`,this._ctsub_parent=this.renderRoot)}_addEvents(){this.addEventListener("pointerup",this._show_hide_ctsub.bind(this))}_changeIcon(){this._ctsub_visible?this._arrow=h`${f("arrup")}`:this._arrow=h`${f("arrdown")}`}_show_hide_ctsub(s){s.stopPropagation(),this._has_subitems&&this._ctsub&&(s.preventDefault(),this._ctsub.classList.remove("snd-ct-subp-open"),this._ctsub.classList.remove("snd-ct-subp-close"),this._ctsub_visible?(this._ctsub.classList.add("snd-ct-subp-close"),this._ctsub.style.display="none",this._ctsub.style.opacity="0"):(this._ctsub.classList.add("snd-ct-subp-open"),this._ctsub.style.display="flex",this._ctsub.style.opacity="1"),this._ctsub_visible=!this._ctsub_visible,setTimeout(()=>{this._ctsub?.classList.remove("snd-ct-subp-open"),this._ctsub?.classList.remove("snd-ct-subp-close")},1e3),this._changeIcon())}render(){return h`
      <a
        href="${this._has_subitems?"#":this._obItem?.link}"
        class="snd-link-item"
      >
        ${this._has_icon?h`<div class="snd-item-icon">
              ${f(this._obItem?.symbol,this._obItem?.dim.width,this._obItem?.dim.height)}
            </div>`:""}
        <div class="snd-item-text">${this._obItem?.text}</div>
        ${this._has_subitems?h`<div class="snd-sub-icon">${this._arrow}</div>`:""}
      </a>
    `}};K.styles=y`
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
  `;ut([_()],K.prototype,"item",2);ut([_()],K.prototype,"gap",2);ut([m("snd-ct-subp")],K.prototype,"_subct",2);ut([v()],K.prototype,"_ctsub_visible",2);K=ut([k("snd-menu-mob-art-aa")],K);var Pe=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,bt=(s,t,e,o)=>{for(var i=o>1?void 0:o?Ie(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Pe(t,e,i),i};let Z=class extends g{constructor(){super(),this.sizeableDisabled=!1,this._status="closed",this._content=h``,this._refTO=-1}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerup",this._changeState.bind(this)),this._content=h`
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
    `}firstUpdated(s){this._vel&&(this._vel.forEach(t=>{t.style.marginTop="-30px"}),this._vel.forEach(t=>{t.classList.add("snd-mg")}))}_changeState(){switch(this._status){case"closed":this._status="opened";break;case"opened":this._status="closed",this._refTO&&(clearTimeout(this._refTO),this._refTO=setTimeout(()=>{},2e3));break}}disconnectedCallback(){}showOutsideCT(){console.log("show the outside ct")}render(){return h` <div class="snd-content">${this._content}</div> `}};Z.styles=[y`
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
    `,St];bt([_({type:Boolean,attribute:"sizeable-disabled"})],Z.prototype,"sizeableDisabled",2);bt([m(".snd-top")],Z.prototype,"_top",2);bt([$t("snd-menu-mob-art-aa")],Z.prototype,"_vel",2);bt([v()],Z.prototype,"_status",2);Z=bt([k("snd-menu-mob-outside-aa")],Z);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze={CHILD:2},je=s=>(...t)=>({_$litDirective$:s,values:t});class Re{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:He}=xe,Jt=()=>document.createComment(""),ht=(s,t,e)=>{const o=s._$AA.parentNode,i=t===void 0?s._$AB:t._$AA;if(e===void 0){const r=o.insertBefore(Jt(),i),n=o.insertBefore(Jt(),i);e=new He(r,n,s,s.options)}else{const r=e._$AB.nextSibling,n=e._$AM,a=n!==s;if(a){let d;e._$AQ?.(s),e._$AM=s,e._$AP!==void 0&&(d=s._$AU)!==n._$AU&&e._$AP(d)}if(r!==i||a){let d=e._$AA;for(;d!==r;){const l=d.nextSibling;o.insertBefore(d,i),d=l}}}return e},W=(s,t,e=s)=>(s._$AI(t,e),s),Te={},Be=(s,t=Te)=>s._$AH=t,Ne=s=>s._$AH,Mt=s=>{s._$AR(),s._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=(s,t,e)=>{const o=new Map;for(let i=t;i<=e;i++)o.set(s[i],i);return o},jt=je(class extends Re{constructor(s){if(super(s),s.type!==ze.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,t,e){let o;e===void 0?e=t:t!==void 0&&(o=t);const i=[],r=[];let n=0;for(const a of s)i[n]=o?o(a,n):n,r[n]=e(a,n),n++;return{values:r,keys:i}}render(s,t,e){return this.dt(s,t,e).values}update(s,[t,e,o]){const i=Ne(s),{values:r,keys:n}=this.dt(t,e,o);if(!Array.isArray(i))return this.ut=n,r;const a=this.ut??=[],d=[];let l,u,c=0,b=i.length-1,p=0,w=r.length-1;for(;c<=b&&p<=w;)if(i[c]===null)c++;else if(i[b]===null)b--;else if(a[c]===n[p])d[p]=W(i[c],r[p]),c++,p++;else if(a[b]===n[w])d[w]=W(i[b],r[w]),b--,w--;else if(a[c]===n[w])d[w]=W(i[c],r[w]),ht(s,d[w+1],i[c]),c++,w--;else if(a[b]===n[p])d[p]=W(i[b],r[p]),ht(s,i[c],i[b]),b--,p++;else if(l===void 0&&(l=Xt(n,p,w),u=Xt(a,c,b)),l.has(a[c]))if(l.has(a[b])){const P=u.get(n[p]),Et=P!==void 0?i[P]:null;if(Et===null){const Rt=ht(s,i[c]);W(Rt,r[p]),d[p]=Rt}else d[p]=W(Et,r[p]),ht(s,i[c],Et),i[P]=null;p++}else Mt(i[b]),b--;else Mt(i[c]),c++;for(;p<=w;){const P=ht(s,d[w+1]);W(P,r[p]),d[p++]=P}for(;c<=b;){const P=i[c++];P!==null&&Mt(P)}return this.ut=n,Be(s,d),J}});var Ue=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,z=(s,t,e,o)=>{for(var i=o>1?void 0:o?Ve(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Ue(t,e,i),i};let C=class extends g{constructor(){super(),this.moreDisabled=!1,this.gap="5px",this.stack_hidden_empty=!0,this._stack_in=[],this._stack_out=[],this._set_in=new Set,this._set_out=new Set,this._tot_w_in=0,this._tot_w_out=0,this._ct_w=0,this._html_items=h``,this._ctMoreVisible=!1}reinit(){console.log("reinit from resct-mob")}_setDefaultValues(){this._dim_default='{"width":"70%", "height":"3rem"}'}_setDim(){let s=this._dim_default;this.dim&&(s=this.dim);const t=JSON.parse(s);this.style.height=t.height,this.style.width=t.width}_get_ct_width(){this._ct_w=this._ctItems?.getBoundingClientRect().width}_ff(s){let t=s.target?.tagName.trim().toLowerCase();this._ctMoreVisible&&t!=="snd-resct-aa"&&this._showOrHideMoreCt(s)}_fff(s){if(s.stopPropagation(),s&&s.target){let t=s.target.getAttribute("class")?.trim().toLowerCase();this._ctMoreVisible&&t!=="snd-more-icon"&&this._showOrHideMoreCt(s)}}_addWindowEvents(){window.addEventListener("pointerup",this._ff.bind(this))}_removeWindowEvents(){window.removeEventListener("pointerup",this._ff.bind(this))}_addEvents(){this.renderRoot.addEventListener("pointerup",this._fff.bind(this))}_more_senzor(){this.moreDisabled||!this._ctMenuMore||(this._stack_out.length?this._ctMenuMore.style.display="flex":(this._ctMenuMore.style.display="none",this._ctMore&&(this._ctMore.style.display="none"),this._ctMoreVisible=!1))}_createMoreContainer(){this.moreDisabled||(this._ctMore=document.createElement("div"),this._ctMore.setAttribute("class","snd-more-ct"),this.renderRoot.appendChild(this._ctMore))}_addInMoreContainer(s){if(!(this.moreDisabled||!this._ctMore)&&s.element){const t=this.renderRoot.querySelector(`#${s.id}`);if(t){let e=t?.cloneNode();e.id=s.id+"_clone",e.classList.remove("snd-hidden"),e.innerHTML=t?.innerHTML,this._ctMore.insertAdjacentElement("afterbegin",e)}}}_showOrHideMoreCt(s){if(s.stopPropagation(),this.moreDisabled||!this._ctMore)return;let t=this.getBoundingClientRect().height;this._ctMoreVisible?(this._ctMore.style.display="none",this._ctMoreVisible=!1):this._stack_out.length&&(this._ctMore.style.top=t+"px",this._ctMore.style.display="flex",this._ctMoreVisible=!0)}_removeFromMoreContainer(s){if(this._ctMore&&s.element){const t=this._ctMore.querySelector(`#${s.id}_clone`);t&&this._ctMore.removeChild(t)}}_refresh_visible(){this._stack_out.forEach(s=>{s.element.classList.add("snd-removed")}),this._stack_in.forEach(s=>{s.element.classList.remove("snd-removed")})}at_visible(){console.log("from mob - visible")}_init_stacks(){let s=0,t=0,e=0,o=parseInt(this.gap),i="",r=this._items,n=0,a=0;t=r?.length??0,r?.forEach(l=>{s+=l.getBoundingClientRect().width,i=l.id,n===t-1&&(this._last_id=i),this._set_in.has(i)||(this._set_in.add(i),this._stack_in.unshift({element:l,width:l.getBoundingClientRect().width,id:i})),n=n+1}),t&&(s+=(t-1)*o),this._tot_w_in=s,this._tot_w_out=0;let d;if(this._ct_w&&s>this._ct_w){e=0;do d=this._stack_in.pop(),this._stack_out.push(d),this._set_out.add(d.id),this._set_in.delete(d.id),this._addInMoreContainer(d),s=s-d.width,a=a+d.width,d.id!==this._last_id&&(s=s-o,a=a+o),e=e+1;while(e<100&&s>this._ct_w);this._tot_w_in=s,this._tot_w_out=a}this._stack_out.forEach(l=>{l.element.classList.add("snd-removed"),l.element.classList.remove("snd-hidden")}),this._stack_in.forEach(l=>{l.element.classList.remove("snd-hidden")}),this._more_senzor()}_loadItems(){if(!this.items)return;const s=JSON.parse(this.items);let t=h``;this._html_items=h`${jt(s,e=>e.id,e=>{switch(t=h``,e.type){case"svg-icon":e.link&&e.link.trim().length>0?t=h`<div class="snd-item snd-hidden" id="${e.id}">
                <a href=${e.link} class="snd-link-item">
                  <div class="snd-item-icon snd-item-icon-svg">
                    ${f(e.symbol,e.dim.width,e.dim.height)}
                  </div>
                </a>
              </div>`:t=h`<div class="snd-item snd-hidden" id="${e.id}">
                <div class="snd-item-icon snd-item-icon-svg">
                  ${f(e.symbol,e.dim.width,e.dim.height)}
                </div>
              </div>`;break;case"svg-icon-text":e.link&&e.link.trim().length>0?t=h`<div class="snd-item snd-hidden" id="${e.id}">
                <a href=${e.link} class="snd-link-item">
                  <div class="snd-item-icon snd-item-icon-svg">
                    ${f(e.symbol,e.dim.width,e.dim.height)}
                  </div>
                  <div class="snd-item-text">${e.text}</div>
                </a>
              </div>`:t=h`<div class="snd-item snd-hidden" id="${e.id}">
                <div class="snd-item-icon snd-item-icon-svg">
                  ${f(e.symbol,e.dim.width,e.dim.height)}
                </div>
                <div class="snd-item-text">${e.text}</div>
              </div>`;break}return t})}`}_refresh_stacks(s){let t,e=0,o=0,i=parseInt(this.gap),r,n=0,a=0,d=0,l=!1;for(const u of s){if(n=u.borderBoxSize[0].inlineSize,n<this._tot_w_in&&this._stack_in.length){o=this._tot_w_in,e=0;do{if(!this._stack_in.length)break;r=this._stack_in.pop(),this._stack_out.push(r),this._set_out.add(r.id),this._set_in.delete(r.id),this._addInMoreContainer(r),o=o-r.width,this._tot_w_out+=r.width,this._tot_w_in-=r.width,r.id!==this._last_id&&(this._tot_w_out+=i,this._tot_w_in-=i),e=e+1}while(e<100&&o>n)}if(l=!1,n>this._tot_w_in&&(a=n-this._tot_w_in,d=0,this._stack_out.length&&(t=this._stack_out[this._stack_out.length-1],d=t.width,t.id!==this._last_id&&(d+=i),a>d&&(l=!0))),l){e=0,o=0;do r=this._stack_out.pop(),this._stack_in.push(r),this._set_in.add(r.id),this._set_out.delete(r.id),this._removeFromMoreContainer(r),o=o+r.width,this._tot_w_out-=r.width,this._tot_w_in+=r.width,r.id!==this._last_id&&(this._tot_w_out-=i,this._tot_w_in+=i),e=e+1;while(e<100&&o>n)}}this._refresh_visible(),this._more_senzor()}_createControls(){this._createMoreContainer()}connectedCallback(){super.connectedCallback(),this._setDefaultValues(),this._setDim(),this._loadItems(),this._createControls(),this._addWindowEvents(),this._addEvents()}disconnectedCallback(){super.disconnectedCallback(),this._res_obs?.unobserve(this._ctItems),this._removeWindowEvents()}willUpdate(s){}firstUpdated(s){this._ctItems&&(this._ctItems.style.gap=this.gap),this._get_ct_width(),this._init_stacks(),this._res_obs=new ResizeObserver(this._refresh_stacks.bind(this)),this._res_obs?.observe(this._ctItems)}render(){return h`<div @pointerup=${this._showOrHideMoreCt} class="snd-more-icon">
        <svg class="snd-icon">
          <use xlink:href="./src/assets/sndresctaa.svg#more"></use>
        </svg>
      </div>
      <div class="snd-ct-items">${this._html_items}</div>`}};C.styles=y`
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
  `;z([_({type:Boolean,attribute:"more-disabled"})],C.prototype,"moreDisabled",2);z([_()],C.prototype,"gap",2);z([_()],C.prototype,"dim",2);z([_()],C.prototype,"items",2);z([v()],C.prototype,"stack_hidden_empty",2);z([m(".snd-ct-items")],C.prototype,"_ctItems",2);z([m(".snd-more-icon")],C.prototype,"_ctMenuMore",2);z([$t(".snd-item")],C.prototype,"_items",2);C=z([k("snd-resct-mob-aa")],C);var Fe=Object.defineProperty,We=Object.getOwnPropertyDescriptor,tt=(s,t,e,o)=>{for(var i=o>1?void 0:o?We(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Fe(t,e,i),i};let I=class extends g{constructor(){super(),this.sizeableDisabled=!1,this.idResult="",this._ctresults_visible=!1,this.sstate="pasive",this._icon=h``}_handleButton(){this._evOpenSearch&&dispatchEvent(this._evOpenSearch)}_setDefaultValues(){this.sstate="pasive",this._icon=f("search")}_addEvents(){this._evOpenSearch=new CustomEvent("opensearch")}connectedCallback(){super.connectedCallback(),this._setDefaultValues(),this._addEvents()}disconnectedCallback(){}firstUpdated(s){}closeSearch(){}render(){return h`<button
      class="snd-search-btn"
      style="width: 2rem, height: 2rem"
      @pointerup=${this._handleButton}
    >
      ${this._icon}
    </button>`}};I.styles=y`
    :host {
      background-color: var(--snd-header-bkr-clr, #674439ff);
      color: var(--snd-header-clr, #000);
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .snd-search-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 0;
      flex-shrink: 0;
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      background-color: var(--snd-header-bkr-clr, #674439ff);
      color: var(--snd-header-clr, #000);
    }
  `;tt([_({type:Boolean,attribute:"sizeable-disabled"})],I.prototype,"sizeableDisabled",2);tt([_({type:String,attribute:"id-result"})],I.prototype,"idResult",2);tt([_()],I.prototype,"dim",2);tt([_({type:String,attribute:"form-name"})],I.prototype,"formName",2);tt([v()],I.prototype,"_ctresults_visible",2);tt([v()],I.prototype,"sstate",2);I=tt([k("snd-search-mob-btn")],I);var qe=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,ft=(s,t,e,o)=>{for(var i=o>1?void 0:o?Ge(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&qe(t,e,i),i};let Q=class extends g{constructor(){super(),this._status="closed"}connectedCallback(){super.connectedCallback(),this._setEvents(),this.addEventListener("pointerup",()=>{this._evCloseSearch&&(dispatchEvent(this._evCloseSearch),console.log("close search"))})}_setEvents(){this._evCloseSearch=new CustomEvent("closesearch")}disconnectedCallback(){}render(){return h`
      <div class="snd-bar snd-bar-top snd-bar-top-open"></div>
      <div class="snd-bar snd-bar-middle snd-bar-middle-open"></div>
      <div class="snd-bar snd-bar-bottom snd-bar-bottom-open"></div>
    `}};Q.styles=[y`
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
        display: none;
      }
      .snd-bar {
        width: 2rem;
        height: 0.1rem;
        background-color: var(--snd-header-clr, #ffffffff);
        transform-origin: center;
      }
      .snd-bar-middle-open {
        animation-duration: 1.5s;
        animation-name: scale-middle;
        animation-fill-mode: forwards;
      }

      .snd-bar-top-open {
        animation-duration: 1s;
        animation-name: rotate-top;
        animation-fill-mode: forwards;
      }

      .snd-bar-bottom-open {
        animation-duration: 1s;
        animation-name: rotate-bottom;
        animation-fill-mode: forwards;
      }

      @keyframes scale-middle {
        from {
          transform: scale(1);
        }
        to {
          transform: scale(0.7);
        }
      }

      @keyframes rotate-top {
        from {
          height: 0.1rem;
          transform: scale(1) rotate(0deg) translate(0, 0);
        }
        to {
          height: 0.2rem;
          transform: scale(0.4) rotate(-30deg) translate(-1.2rem, 0.5rem);
        }
      }

      @keyframes rotate-bottom {
        from {
          height: 0.1rem;
          transform: scale(1) rotate(0deg) translate(0, 0);
        }
        to {
          height: 0.2rem;
          transform: scale(0.4) rotate(30deg) translate(-1.2rem, -0.5rem);
        }
      }
    `,St];ft([m(".snd-bar-top")],Q.prototype,"_bar_top",2);ft([m(".snd-bar-middle")],Q.prototype,"_bar_middle",2);ft([m(".snd-bar-bottom")],Q.prototype,"_bar_bottom",2);ft([v()],Q.prototype,"_status",2);Q=ft([k("snd-search-mob-btn-exit")],Q);var Je=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,rt=(s,t,e,o)=>{for(var i=o>1?void 0:o?Xe(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Je(t,e,i),i};let B=class extends g{constructor(){super(),this.sizeableDisabled=!1,this.idResult="",this._ctresults_visible=!1,this.sstate="pasive"}openForm(){console.log("open search form")}closeForm(){console.log("close search form")}_search_in_db(){}_addEvents(){window.addEventListener("opensearch",()=>{this.style.display="flex",this.style.top="0"}),window.addEventListener("closesearch",()=>{this.style.top="-3rem",this.style.display="none"})}connectedCallback(){super.connectedCallback(),this._addEvents()}disconnectedCallback(){}firstUpdated(s){}closeSearch(){}render(){return h`
      <form action="#" name="fsearch" class="searchform">
        <input
          type="search"
          class="snd-input-search"
          placeholder="Search..."
          @keyup=${this._search_in_db}
        />
      </form>
    `}};B.styles=y`
    :host {
      background-color: var(--snd-header-bkr-clr, #674439ff);
      color: var(--snd-header-clr, #000);
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 3rem;
      width: calc(100vw - 7rem);
      position: absolute;
      z-index: 20;
      top: -3rem;
      display: none;
    }
    .searchform {
      display: flex;
      justify-content: flex-center;
      align-items: center;
      overflow: hidden;
      border: 0;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      width: 77%;
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
      font-size: 1.2rem;
      width: 100%;
      height: 2rem;
      flex-basis: 100px;
      flex-grow: 1;
      margin: 0;
      outline: 0;
      padding-left: 5px;
      border-radius: 10px;
      color: var(--snd-header-clr, #ddffcc88);
      background-color: #6a6a6aff;
    }
  `;rt([_({type:Boolean,attribute:"sizeable-disabled"})],B.prototype,"sizeableDisabled",2);rt([_({type:String,attribute:"id-result"})],B.prototype,"idResult",2);rt([_({type:String,attribute:"form-name"})],B.prototype,"formName",2);rt([v()],B.prototype,"_ctresults_visible",2);rt([v()],B.prototype,"sstate",2);B=rt([k("snd-search-mob-form")],B);var Ke=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,Ct=(s,t,e,o)=>{for(var i=o>1?void 0:o?Ze(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Ke(t,e,i),i};let it=class extends g{constructor(){super(),this.sstate="pasive"}openResults(){}closeResults(){}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}firstUpdated(s){window.addEventListener("opensearch",()=>{this.classList.add("snd-open-results")}),window.addEventListener("closesearch",()=>{this.classList.remove("snd-open-results")})}render(){return h``}};it.styles=[y`
      :host {
        background-color: var(--snd-header-bkr-clr, #674439ff);
        color: var(--snd-header-clr, #000);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100vw;
        min-height: 100vh;
        position: fixed;
        top: 3rem;
        left: 110vw;
      }
    `];Ct([_()],it.prototype,"dim",2);Ct([v()],it.prototype,"sstate",2);Ct([m(".snd-search-ct-button")],it.prototype,"_btn_search",2);it=Ct([k("snd-search-mob-results")],it);var Qe=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,V=(s,t,e,o)=>{for(var i=o>1?void 0:o?Ye(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Qe(t,e,i),i};let D=class extends g{constructor(){super(),this.sizeableDisabled=!1,this._isDesktop=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("openmobmenu",s=>{s.stopPropagation(),this._mob_outside?.classList.add("snd-open-menu"),this._mob_outside?.classList.remove("snd-close-menu")}),this.addEventListener("closemobmenu",()=>{this._mob_outside?.classList.add("snd-close-menu"),this._mob_outside?.classList.remove("snd-open-menu")}),window.addEventListener("DOMContentLoaded",()=>{this._detectViewport(),this._isDesktop&&(this.style.display="none")}),window.addEventListener("resize",()=>{if(this._detectViewport(),this._isDesktop){this.style.display="none";const s=document.querySelector("snd-header-aa");s&&(s.style.display="flex")}})}async firstUpdated(s){await this.updateComplete,window.addEventListener("opensearch",()=>{this._mob_menu_btn&&this._mob_search_btn_exit&&(this._mob_menu_btn.style.display="none",this._mob_search_btn_exit.style.display="flex")}),window.addEventListener("closesearch",()=>{console.log("close search from window"),this._mob_menu_btn&&this._mob_search_btn_exit&&(this._mob_search_btn_exit.style.display="none",this._mob_menu_btn.style.display="flex")})}_detectViewport(){this._isDesktop=!1;let s=0;window.innerWidth!==void 0?s=window.innerWidth:s=document.documentElement.clientWidth,s>768&&(this._isDesktop=!0)}render(){return h`
      <div class="snd-mob-header">
        <snd-menu-mob-btn-aa></snd-menu-mob-btn-aa>
        <snd-search-mob-btn-exit></snd-search-mob-btn-exit>
        <snd-search-mob-form></snd-search-mob-form>
        <snd-resct-mob-aa
          class="snd-mob-links snd-center"
          id="resct01"
          dim='{"width":"50%","height":"3rem"}'
          gap="15px"
          items='[{"type":"svg-icon","symbol":"youtube","vbmob":true,"dim":{"width":"2.2rem","height":"2.2rem"},"link":"https://www.google.ro","id":"it01"},{"type":"svg-icon","symbol":"facebook","vbmob":true,"dim":{"width":"2.2rem","height":"2.2rem"}, "link":"https://www.google.ro", "id":"it02"},{"type":"svg-icon-text","symbol":"phone","vbmob":true,"dim":{"width":"1.7rem","height":"1.7rem"},"text":"Tarabentino", "link":"https://www.google.ro", "id":"it03"},{"type":"svg-icon","symbol":"instagram","vbmob":true,"dim":{"width":"2.2rem","height":"2.2rem"},"link":"https://www.google.ro","id":"it04"}, {"type":"svg-icon","symbol":"youtube","vbmob":true,"dim":{"width":"2.2rem","height":"2.2rem"},"link":"https://www.google.ro","id":"it05"}]'
        ></snd-resct-mob-aa>
        <div class="snd-mob-search snd-border snd-center">
          <snd-search-mob-btn></snd-search-mob-btn>
        </div>
      </div>
      <snd-search-mob-results></snd-search-mob-results>
      <snd-menu-mob-outside-aa class="snd-border"></snd-menu-mob-outside-aa>
    `}};D.styles=[y`
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
      .snd-mob-header-hidden,
      .snd-btn-hidden {
        display: none;
      }
      .snd-open-results {
        animation-duration: 0.5s;
        animation-name: translatect;
        animation-fill-mode: forwards;
      }

      @keyframes translatect {
        0% {
          left: 110vw;
        }
        100% {
          left: 0;
        }
      }
    `,St];V([_({type:Boolean,attribute:"sizeable-disabled"})],D.prototype,"sizeableDisabled",2);V([m(".snd-search-ct-button")],D.prototype,"_btn_search",2);V([m("snd-menu-mob-outside-aa")],D.prototype,"_mob_outside",2);V([m("snd-menu-mob-btn-aa")],D.prototype,"_mob_menu_btn",2);V([m("snd-search-mob-btn-exit")],D.prototype,"_mob_search_btn_exit",2);V([m("snd-resct-mob-aa")],D.prototype,"_resct_mob",2);V([v()],D.prototype,"_macao",2);D=V([k("snd-header-mob-aa")],D);var ts=Object.defineProperty,es=Object.getOwnPropertyDescriptor,j=(s,t,e,o)=>{for(var i=o>1?void 0:o?es(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&ts(t,e,i),i};let E=class extends g{constructor(){super(),this.logoMinDisabled=!1,this.logoMinOnly=!1,this._min_only=!1,this._has_logo_min=!1,this._logo_src="",this._logo_min_src="",this._min_only=!1,this._rendres=h`<div class="logo"></div>`,this._logo_src="",this._logo_min_src="",window.addEventListener("lhidden",()=>{this._activateLogoMin()}),window.addEventListener("lshowed",()=>{console.log("arata logo mare - from snd-logo-aa"),this._activateLogo()})}commuteOnMin(){this.logoMinDisabled||(this._min_only=!this._min_only,this._min_only?this._activateLogoMin():this._activateLogo())}_setLogo(){if(this._logo&&this._logo_src.trim().length>0&&this.dim){let s=null,t,e;this.dim&&(s=JSON.parse(this.dim).logo_dim,t=s.width,e=s.height),this._logo.style=`width: ${t}; height: ${e}; background-image: url("${this._logo_src}"); background-size: cover; background-position: center;`}}_setLogoMin(){if(this._logo_min&&this._logo_min_src.trim().length>0&&this.dim){let s=null,t,e;this.dim&&(s=JSON.parse(this.dim).logo_min_dim,t=s.width,e=s.height),this._logo_min.style=`width: ${t}; height: ${e}; background-image: url("${this._logo_min_src}"); background-size: cover; background-position: center;`}}_activateLogo(){this.logoMinOnly||(this._logo_min?.classList.add("chidden"),this._logo?.classList.remove("chidden"))}_activateLogoMin(){this._has_logo_min&&(this._logo?.classList.add("chidden"),this._logo_min?.classList.remove("chidden"))}willUpdate(s){this._logo_src="",this._logo_min_src="";let t=null;this.logos&&(t=JSON.parse(this.logos)),t&&(this._logo_src=t.logo,this._logo_min_src=t.logo_min,this._logo_min_src.trim().length>0?(this._rendres=h`<div class="logo_min chidden"></div>
          <div class="logo"></div>`,this.logoMinOnly&&(this._rendres=h`<div class="logo_min"></div>
            <div class="logo chidden"></div>`),this._has_logo_min=!0):this._has_logo_min=!1)}firstUpdated(s){this._logo&&this._setLogo(),this._has_logo_min&&this._setLogoMin()}render(){return h` ${this._rendres} `}};E.styles=y`
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
  `;j([_({type:Boolean,attribute:"logo-min-disabled"})],E.prototype,"logoMinDisabled",2);j([_({type:Boolean,attribute:"logo-min-only"})],E.prototype,"logoMinOnly",2);j([_()],E.prototype,"logos",2);j([_()],E.prototype,"dim",2);j([v()],E.prototype,"_min_only",2);j([v()],E.prototype,"_has_logo_min",2);j([m(".logo")],E.prototype,"_logo",2);j([m(".logo_min")],E.prototype,"_logo_min",2);E=j([k("snd-logo-aa")],E);var ss=Object.defineProperty,is=Object.getOwnPropertyDescriptor,R=(s,t,e,o)=>{for(var i=o>1?void 0:o?is(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&ss(t,e,i),i};let A=class extends g{constructor(){super(),this.moreDisabled=!1,this.gap="5px",this.stack_hidden_empty=!0,this._stack_in=[],this._stack_out=[],this._set_in=new Set,this._set_out=new Set,this._tot_w_in=0,this._tot_w_out=0,this._ct_w=0,this._html_items=h``,this._ctMoreVisible=!1,this._more_isOn=!1,this._l_is_hidden=!1,this._s1_is_hidden=!1,this._s2_is_hidden=!0,this._evHideS1=new CustomEvent("search1hidden"),this._evShowS1=new CustomEvent("search1showed"),this._evHideS2=new CustomEvent("search2hidden"),this._evShowS2=new CustomEvent("search2showed"),this._evHideL=new CustomEvent("lhidden"),this._evShowL=new CustomEvent("lshowed")}_setDefaultValues(){this._dim_default='{"width":"70%", "height":"3rem"}'}_setDim(){let s=this._dim_default;this.dim&&(s=this.dim);const t=JSON.parse(s);this.style.height=t.height,this.style.width=t.width}_get_ct_width(){this._ct_w=this._ctItems?.getBoundingClientRect().width}_ff(s){let t=s.target?.tagName.trim().toLowerCase();this._ctMoreVisible&&t!=="snd-resct-aa"&&this._showOrHideMoreCt(s)}_fff(s){if(s.stopPropagation(),s&&s.target){let t=s.target.getAttribute("class")?.trim().toLowerCase();this._ctMoreVisible&&t!=="snd-more-icon"&&this._showOrHideMoreCt(s)}}_addWindowEvents(){window.addEventListener("pointerup",this._ff.bind(this))}_removeWindowEvents(){window.removeEventListener("pointerup",this._ff.bind(this))}_addEvents(){this.renderRoot.addEventListener("pointerup",this._fff.bind(this))}_more_senzor(){let s=this._more_isOn;this.moreDisabled||!this._ctMenuMore||(this._stack_out.length?(this._ctMenuMore.style.display="flex",this._more_isOn=!0):(this._ctMenuMore.style.display="none",this._ctMore&&(this._ctMore.style.display="none"),this._ctMoreVisible=!1,this._more_isOn=!1),s!==this._more_isOn&&this._more_isOn&&(this._evHideL&&!this._l_is_hidden?(dispatchEvent(this._evHideL),this._l_is_hidden=!0):this._evHideS1&&this._evShowS2&&this._l_is_hidden&&(dispatchEvent(this._evHideS1),dispatchEvent(this._evShowS2),this._s1_is_hidden=!0,this._s2_is_hidden=!1)))}_createMoreContainer(){this.moreDisabled||(this._ctMore=document.createElement("div"),this._ctMore.setAttribute("class","snd-more-ct"),this.renderRoot.appendChild(this._ctMore))}_addInMoreContainer(s){if(!(this.moreDisabled||!this._ctMore)&&s.element){const t=this.renderRoot.querySelector(`#${s.id}`);if(t){let e=t?.cloneNode();e.id=s.id+"_clone",e.classList.remove("snd-hidden"),e.innerHTML=t?.innerHTML,this._ctMore.insertAdjacentElement("afterbegin",e)}}}_showOrHideMoreCt(s){if(s.stopPropagation(),this.moreDisabled||!this._ctMore)return;let t=this.getBoundingClientRect().height+15,e=this.getBoundingClientRect().left;this._ctMoreVisible?(this._ctMore.style.display="none",this._ctMoreVisible=!1):this._stack_out.length&&(this._ctMore.style.top=t+"px",this._ctMore.style.left=e+"px",this._ctMore.style.display="flex",this._ctMoreVisible=!0)}_removeFromMoreContainer(s){if(this._ctMore&&s.element){const t=this._ctMore.querySelector(`#${s.id}_clone`);t&&this._ctMore.removeChild(t)}}_refresh_visible(){this._stack_out.forEach(s=>{s.element.classList.add("snd-removed")}),this._stack_in.forEach(s=>{s.element.classList.remove("snd-removed")})}_init_stacks(){let s=0,t=0,e=0,o=parseInt(this.gap),i="",r=this._items,n=0,a=0;t=r?.length??0,r?.forEach(l=>{s+=l.getBoundingClientRect().width,i=l.id,n===t-1&&(this._last_id=i),this._set_in.has(i)||(this._set_in.add(i),this._stack_in.unshift({element:l,width:l.getBoundingClientRect().width,id:i})),n=n+1}),t&&(s+=(t-1)*o),this._tot_w_in=s,this._tot_w_out=0;let d;if(this._ct_w&&s>this._ct_w){e=0;do d=this._stack_in.pop(),this._stack_out.push(d),this._set_out.add(d.id),this._set_in.delete(d.id),this._addInMoreContainer(d),s=s-d.width,a=a+d.width,d.id!==this._last_id&&(s=s-o,a=a+o),e=e+1;while(e<100&&s>this._ct_w);this._tot_w_in=s,this._tot_w_out=a}this._stack_out.forEach(l=>{l.element.classList.add("snd-removed"),l.element.classList.remove("snd-hidden")}),this._stack_in.forEach(l=>{l.element.classList.remove("snd-hidden")}),this._more_senzor()}_loadItems(){if(!this.items)return;const s=JSON.parse(this.items);let t=h``;this._html_items=h`${jt(s,e=>e.id,e=>{switch(t=h``,e.type){case"svg-icon":e.link&&e.link.trim().length>0?t=h`<div class="snd-item snd-hidden" id="${e.id}">
                <a href=${e.link} class="snd-link-item">
                  <div class="snd-item-icon snd-item-icon-svg">
                    ${f(e.symbol,e.dim.width,e.dim.height)}
                  </div>
                </a>
              </div>`:t=h`<div class="snd-item snd-hidden" id="${e.id}">
                <div class="snd-item-icon snd-item-icon-svg">
                  ${f(e.symbol,e.dim.width,e.dim.height)}
                </div>
              </div>`;break;case"svg-icon-text":e.link&&e.link.trim().length>0?t=h`<div class="snd-item snd-hidden" id="${e.id}">
                <a href=${e.link} class="snd-link-item">
                  <div class="snd-item-icon snd-item-icon-svg">
                    ${f(e.symbol,e.dim.width,e.dim.height)}
                  </div>
                  <div class="snd-item-text">${e.text}</div>
                </a>
              </div>`:t=h`<div class="snd-item snd-hidden" id="${e.id}">
                <div class="snd-item-icon snd-item-icon-svg">
                  ${f(e.symbol,e.dim.width,e.dim.height)}
                </div>
                <div class="snd-item-text">${e.text}</div>
              </div>`;break}return t})}`}_refresh_stacks(s){let t,e=0,o=0,i=parseInt(this.gap),r,n=0,a=0,d=0,l=!1;for(const u of s){if(n=u.borderBoxSize[0].inlineSize,n<this._tot_w_in&&this._stack_in.length){o=this._tot_w_in,e=0;do{if(!this._stack_in.length)break;r=this._stack_in.pop(),this._stack_out.push(r),this._set_out.add(r.id),this._set_in.delete(r.id),this._addInMoreContainer(r),o=o-r.width,this._tot_w_out+=r.width,this._tot_w_in-=r.width,r.id!==this._last_id&&(this._tot_w_out+=i,this._tot_w_in-=i),e=e+1}while(e<100&&o>n)}if(l=!1,n>this._tot_w_in&&(a=n-this._tot_w_in,d=0,this._stack_out.length&&(t=this._stack_out[this._stack_out.length-1],d=t.width,t.id!==this._last_id&&(d+=i),a>d&&(l=!0))),l){e=0,o=0;do r=this._stack_out.pop(),this._stack_in.push(r),this._set_in.add(r.id),this._set_out.delete(r.id),this._removeFromMoreContainer(r),o=o+r.width,this._tot_w_out-=r.width,this._tot_w_in+=r.width,r.id!==this._last_id&&(this._tot_w_out-=i,this._tot_w_in+=i),e=e+1;while(e<100&&o>n)}let c=n-this._tot_w_in;this._s1_is_hidden&&!this._s2_is_hidden?n>this._tot_w_in&&c>300&&(this._evShowS1&&dispatchEvent(this._evShowS1),this._evHideS2&&dispatchEvent(this._evHideS2),this._s1_is_hidden=!1,this._s2_is_hidden=!0):this._l_is_hidden&&!this._s1_is_hidden&&this._evShowL&&c>160&&(console.log("arata logo mare - from res_ct-aa"),dispatchEvent(this._evShowL),this._l_is_hidden=!1)}this._refresh_visible(),this._more_senzor()}_createControls(){this._createMoreContainer()}connectedCallback(){super.connectedCallback(),this._setDefaultValues(),this._setDim(),this._loadItems(),this._createControls(),this._addWindowEvents(),this._addEvents()}disconnectedCallback(){super.disconnectedCallback(),this._res_obs?.unobserve(this._ctItems),this._removeWindowEvents()}willUpdate(s){}firstUpdated(s){this._ctItems&&(this._ctItems.style.gap=this.gap),this._get_ct_width(),this._init_stacks(),this._res_obs=new ResizeObserver(this._refresh_stacks.bind(this)),this._res_obs?.observe(this._ctItems),this._evHideS1&&this._evShowS2&&this._l_is_hidden&&(dispatchEvent(this._evHideS1),dispatchEvent(this._evShowS2),this._s1_is_hidden=!0,this._s2_is_hidden=!1)}render(){return h` <div
        @pointerup=${this._showOrHideMoreCt}
        class="snd-more-icon"
      >
        <svg class="snd-icon">
          <use xlink:href="./src/assets/sndresctaa.svg#more"></use>
        </svg>
      </div>
      <div class="snd-ct-items">${this._html_items}</div>`}};A.styles=y`
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
  `;R([_({type:Boolean,attribute:"more-disabled"})],A.prototype,"moreDisabled",2);R([_()],A.prototype,"gap",2);R([_()],A.prototype,"dim",2);R([_()],A.prototype,"items",2);R([v()],A.prototype,"stack_hidden_empty",2);R([m(".snd-ct-items")],A.prototype,"_ctItems",2);R([m(".snd-more-icon")],A.prototype,"_ctMenuMore",2);R([$t(".snd-item")],A.prototype,"_items",2);A=R([k("snd-resct-aa")],A);var os=Object.defineProperty,rs=Object.getOwnPropertyDescriptor,O=(s,t,e,o)=>{for(var i=o>1?void 0:o?rs(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&os(t,e,i),i};let $=class extends g{constructor(){super(),this.sizeableDisabled=!1,this.idResult="",this._ctresults_visible=!1,this.sstate="pasive",this._icon=h``,this._stask=-1,this._button_clicked=!1,this._opened=!1,window.addEventListener("search1hidden",()=>{console.log("hidden from header-aa"),this.hide()}),window.addEventListener("search1showed",()=>{console.log("shown from header-aa"),this.show()})}connectedCallback(){super.connectedCallback(),this._setDefaultValues()}disconnectedCallback(){}firstUpdated(s){this._btn_search&&(this._btn_search.style.width=this._obDim?.height??"1rem",this._btn_search.style.height=this._obDim?.height??"1rem"),this._addEvents()}show(){this.style.display="block"}hide(){this.style.display="none"}closeSearch(){this._input&&(this._input.value="",this._input.blur(),this._changeStatus({vb_pasive:!0}))}_openResults(){}_closeResults(){}_search_in_db(){console.log("I'm searching in database now ..."),this._input&&(this._input.value.trim().length?(this._stask&&clearTimeout(this._stask),this._changeStatus({vb_searching:!0}),this._stask=setTimeout(()=>{this._input&&this._input.value.trim().length&&(this._changeStatus({vb_founded:!0}),this._openResults()),this._input&&!this._input.value.trim().length&&(this._changeStatus({vb_active:!0}),this._closeResults())},1e3)):(this._stask&&clearTimeout(this._stask),this._stask=-1,this._changeStatus({vb_active:!0}),this._closeResults()))}_handleButton(s){s.preventDefault(),s.stopPropagation(),this._button_clicked=!0}_fsubmit(s){if(s.stopPropagation(),s.preventDefault(),console.log("submit"),(this.sstate==="pasive"||this.sstate==="active")&&this._button_clicked){this.sizeableDisabled||(this._opened?this.style.width=this._obDim?.height??"1rem":this.style.width=this._obDim?.width??"1rem",this._opened=!this._opened);return}if(this.sstate==="founded"&&this._button_clicked){this._input&&(this._input.value="",this._input.blur(),this._changeStatus({vb_active:!0}),this._closeResults());return}this._button_clicked=!1,!(this.sstate==="active"||this.sstate==="pasive")&&(this._search_in_db(),this._handleStateChange())}_addEvents(){this._form&&this._form.addEventListener("submit",this._fsubmit.bind(this))}_handleStateChange(){this.sstate==="pasive"&&this.sizeableDisabled&&(this._input?.focus(),this._changeStatus({vb_active:!0}))}_showIcon(s="lens"){s==="lens"&&(this._icon=f("search")),s==="close"&&(this._icon=f("close")),s==="searching"&&(this._icon=h`<div class="snd-loader"></div>`)}_changeStatus({vb_pasive:s=!1,vb_active:t=!1,vb_searching:e=!1,vb_founded:o=!1}){s&&(this.sstate="pasive",this._showIcon("lens")),t&&(this.sstate="active",this._showIcon("lens")),e&&(this.sstate="searching",this._showIcon("searching")),o&&(this.sstate="founded",this._showIcon("close"))}_setDefaultValues(){this.dim||(this.dim='{"width":"200px","height":"4rem"}'),this.formName||(this.formName="fsearch"),this._setDim(),this.sstate="pasive",this._icon=f("search")}_setDim(){this.dim&&(this._obDim=JSON.parse(this.dim)),this.sizeableDisabled?this.style.width=this._obDim?.width??"1rem":this.style.width=this._obDim?.height??"1rem",this.style.height=this._obDim?.height??"1rem"}render(){return h`
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
    `}};$.styles=[y`
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
  `,y`
      .snd-search-ct-input {
        flex-grow: 1;
        flex-shrink: 1;
        height: 2rem;
      }
    `];O([_({type:Boolean,attribute:"sizeable-disabled"})],$.prototype,"sizeableDisabled",2);O([_({type:String,attribute:"id-result"})],$.prototype,"idResult",2);O([_()],$.prototype,"dim",2);O([_({type:String,attribute:"form-name"})],$.prototype,"formName",2);O([v()],$.prototype,"_ctresults_visible",2);O([v()],$.prototype,"sstate",2);O([m(".snd-search-ct-button")],$.prototype,"_btn_search",2);O([m(".snd-input-search")],$.prototype,"_input",2);O([m(".searchform")],$.prototype,"_form",2);$=O([k("snd-search-aa")],$);var ns=Object.defineProperty,ds=Object.getOwnPropertyDescriptor,L=(s,t,e,o)=>{for(var i=o>1?void 0:o?ds(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&ns(t,e,i),i};let S=class extends g{constructor(){super(),this.sizeableDisabled=!1,this.idResult="",this._ctresults_visible=!1,this.sstate="pasive",this._icon=h``,this._stask=-1,this._button_clicked=!1,this._opened=!1,window.addEventListener("search2hidden",()=>{console.log("hidden from header-aa"),this.hide()}),window.addEventListener("search2showed",()=>{console.log("shown from header-aa"),this.show()})}connectedCallback(){super.connectedCallback(),this._setDefaultValues()}disconnectedCallback(){}firstUpdated(s){this._btn_search&&(this._btn_search.style.width=this._obDim?.height??"1rem",this._btn_search.style.height=this._obDim?.height??"1rem"),this._addEvents()}show(){this.style.display="block"}hide(){this.style.display="none"}closeSearch(){this._input&&(this._input.value="",this._input.blur(),this._changeStatus({vb_pasive:!0}))}_openResults(){}_closeResults(){}_search_in_db(){console.log("I'm searching in database now ..."),this._input&&(this._input.value.trim().length?(this._stask&&clearTimeout(this._stask),this._changeStatus({vb_searching:!0}),this._stask=setTimeout(()=>{this._input&&this._input.value.trim().length&&(this._changeStatus({vb_founded:!0}),this._openResults()),this._input&&!this._input.value.trim().length&&(this._changeStatus({vb_active:!0}),this._closeResults())},1e3)):(this._stask&&clearTimeout(this._stask),this._stask=-1,this._changeStatus({vb_active:!0}),this._closeResults()))}_handleButton(s){s.preventDefault(),s.stopPropagation(),this._button_clicked=!0}_fsubmit(s){if(s.stopPropagation(),s.preventDefault(),(this.sstate==="pasive"||this.sstate==="active")&&this._button_clicked){this.sizeableDisabled||(this._opened?(this.style.width=this._obDim?.height??"1rem",this._input&&(this._input.style.display="none")):(this.style.width=this._obDim?.width??"1rem",this._input&&(this._input.style.display="flex")),this._opened=!this._opened);return}if(this.sstate==="founded"&&this._button_clicked){this._input&&(this._input.value="",this._input.blur(),this._changeStatus({vb_active:!0}),this._closeResults());return}this._button_clicked=!1,!(this.sstate==="active"||this.sstate==="pasive")&&(this._search_in_db(),this._handleStateChange())}_addEvents(){this._form&&this._form.addEventListener("submit",this._fsubmit.bind(this))}_handleStateChange(){this.sstate==="pasive"&&this.sizeableDisabled&&(this._input?.focus(),this._changeStatus({vb_active:!0}))}_showIcon(s="lens"){s==="lens"&&(this._icon=f("search")),s==="close"&&(this._icon=f("close")),s==="searching"&&(this._icon=h`<div class="snd-loader"></div>`)}_changeStatus({vb_pasive:s=!1,vb_active:t=!1,vb_searching:e=!1,vb_founded:o=!1}){s&&(this.sstate="pasive",this._showIcon("lens")),t&&(this.sstate="active",this._showIcon("lens")),e&&(this.sstate="searching",this._showIcon("searching")),o&&(this.sstate="founded",this._showIcon("close"))}_setDefaultValues(){this.dim||(this.dim='{"width":"300px","height":"3rem"}'),this.formName||(this.formName="fsearch"),this._setDim(),this.sstate="pasive",this._icon=f("search")}_setDim(){this.dim&&(this._obDim=JSON.parse(this.dim)),this.sizeableDisabled?this.style.width=this._obDim?.width??"1rem":this.style.width=this._obDim?.height??"1rem",this.style.height=this._obDim?.height??"1rem"}render(){return h`
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
    `}};S.styles=[y`
      :host {
        background-color: var(--snd-header-bkr-clr, #674439ff);
        color: var(--snd-header-clr, #000);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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
        border: 0px solid var(--snd-header-clrx, #ddffcc6e);
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

        width: 250px;
        height: 100%;
        flex-basis: 300px;
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
    `,y`
      .snd-search-ct-input {
        flex-grow: 1;
        flex-shrink: 1;
        height: 2rem;
      }
    `];L([_({type:Boolean,attribute:"sizeable-disabled"})],S.prototype,"sizeableDisabled",2);L([_({type:String,attribute:"id-result"})],S.prototype,"idResult",2);L([_()],S.prototype,"dim",2);L([_({type:String,attribute:"form-name"})],S.prototype,"formName",2);L([v()],S.prototype,"_ctresults_visible",2);L([v()],S.prototype,"sstate",2);L([m(".snd-search-ct-button")],S.prototype,"_btn_search",2);L([m(".snd-input-search")],S.prototype,"_input",2);L([m(".searchform")],S.prototype,"_form",2);S=L([k("snd-search-ab")],S);var as=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,gt=(s,t,e,o)=>{for(var i=o>1?void 0:o?hs(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&as(t,e,i),i};let Y=class extends g{constructor(){super(...arguments),this.visibilityDisabled=!1}_closeResults(s){s.closeSearch(),this.style.display="none"}closeResults(){this.style.display="none",console.log("close results")}_addEventsOnClose(){if(this.idSearchElements&&this.idSearchElements.length){let s;this._vid?.forEach(t=>{s=document.getElementById(t),s&&this._close&&this._close.addEventListener("pointerup",this._closeResults.bind(this,s))})}}connectedCallback(){super.connectedCallback()}firstUpdated(s){this.idSearchElements&&(this._vid=JSON.parse(this.idSearchElements),this._addEventsOnClose())}_handleClose(){}render(){return h`
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
    `}};Y.styles=y`
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
  `;gt([_({type:Boolean,attribute:"visibility-disabled"})],Y.prototype,"visibilityDisabled",2);gt([_({attribute:"id-search-elements"})],Y.prototype,"idSearchElements",2);gt([_()],Y.prototype,"dim",2);gt([m(".snd-res-top-close ")],Y.prototype,"_close",2);Y=gt([k("snd-search-results-aa")],Y);var ls=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,nt=(s,t,e,o)=>{for(var i=o>1?void 0:o?cs(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&ls(t,e,i),i};let N=class extends g{constructor(){super(),this.widthh="",this.gap="5px",this._ctsub_visible=!1,this._has_subitems=!1,this._has_icon=!1,this._arrow=h``,this._setDefaultValues()}connectedCallback(){super.connectedCallback(),this._setDefaultValues(),this._loadItemIntoOb(),this._setDim(),this._setFlags(),this._setControls(),this._addEvents()}disconnectedCallback(){super.disconnectedCallback()}firstUpdated(s){this._createControls();let t=this.renderRoot.querySelector("a")?.getBoundingClientRect().width;console.log("wwx: "+t),t&&t>0&&(this.style.width=t+"px")}_setDefaultValues(){this._dim_default='{"width":"1rem", "height":"1rem"}'}_setDim(){let s=this._dim_default;const t=JSON.parse(s);this._obItem&&(this._obItem.dim?(this._obItem.dim.width||(this._obItem.dim.width=t.width),this._obItem.dim.height||(this._obItem.dim.height=t.height)):this._obItem.dim={width:"1rem",height:"1rem"})}_loadItemIntoOb(){this.item&&(this._obItem=JSON.parse(this.item))}_loadSubitemsIntoCTSub(){if(this.item&&this._ctsub&&this._has_subitems){const s=this._obItem?.subitems.length;if(s&&s>0){let t=0,e,o,i,r;for(t==0;t<s;t++)e=document.createElement("div"),e.setAttribute("class","snd-ct-sub-item"),t<s-1&&e.setAttribute("class","snd_ct_sub-item-sep"),o=document.createElement("a"),o.setAttribute("class","snd-link-sub-item"),o.setAttribute("href",this._obItem?.subitems[t].link??"#"),i=document.createElement("div"),i.setAttribute("class","snd-sub-item-icon"),i.innerHTML=`${se(this._obItem?.subitems[t].symbol,this._obItem?.subitems[t].dim.width,this._obItem?.subitems[t].dim.height)}`,o.appendChild(i),r=document.createElement("div"),r.setAttribute("class","snd-sub-item-text"),r.textContent=this._obItem?.subitems[t].text??"",o.appendChild(r),e.appendChild(o),this._ctsub.appendChild(e),this._ctsub.style.display="none"}}}_setFlags(){this._obItem&&(this._has_subitems=this._obItem.subitems.length>0,this._has_icon=this._obItem.symbol.length>0)}_createControls(){this._ctsub=document.createElement("div"),this._ctsub.setAttribute("class","snd-ct-sub");const s=this.getBoundingClientRect().width;this._ctsub_parent?.appendChild(this._ctsub),this._ctsub.style.minWidth=this.getBoundingClientRect().width+"px",this._ctsub.style.top=this.getBoundingClientRect().height+"px";const e=this._ctsub.getBoundingClientRect().width-s;this._ctsub.style.left=-e/2+"px",this._loadSubitemsIntoCTSub()}_setControls(){this._has_subitems&&(this._arrow=h`${f("arrdown")}`,this._ctsub_parent=this.renderRoot)}_addEvents(){this.addEventListener("pointerup",this._show_hide_ctsub.bind(this))}_changeIcon(){this._ctsub_visible?this._arrow=h`${f("arrup")}`:this._arrow=h`${f("arrdown")}`}_show_hide_ctsub(s){s.stopPropagation(),this._has_subitems&&this._ctsub&&(s.preventDefault(),this._ctsub_visible?this._ctsub.style.display="none":this._ctsub.style.display="flex",this._ctsub_visible=!this._ctsub_visible,this._changeIcon())}render(){return h`
      <a
        href="${this._has_subitems?"#":this._obItem?.link}"
        class="snd-link-item"
      >
        ${this._has_icon?h`<div class="snd-item-icon">
              ${f(this._obItem?.symbol,this._obItem?.dim.width,this._obItem?.dim.height)}
            </div>`:""}
        <div class="snd-item-text">Tousbdf wkshdg</div>
        ${this._has_subitems?h`<div class="snd-sub-icon">${this._arrow}</div>`:""}
      </a>
    `}};N.styles=y`
    :host {
      display: flex;
      width: max-content;
      background-color: var(--snd-header-bkr-clr, #94be94ff);
      color: var(--snd-header-clr, #decf8c);
      
      height: auto;
      margin: 0;
      padding: 5px;
      box-sizing: border-box;
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
    .snd-item-icon,
    .snd-item-text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 0;
      flex-shrink: 0;
      overflow: hidden;
    }
    .snd-sub-item-icon,
    .snd-sub-item-text {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-grow: 0;
      flex-shrink: 0;
      overflow: hidden;
    }

    .snd-sub-item-text {
      flex-grow: 1;
      flex-shrink: 1;
      font-size: var(--snd-mob-header-submenu-fsz, 0.7rem);
      color: var(--snd-header-clr, #decf8c);
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
      color: var(--snd-header-clr, #decf8c); 
    }
    .snd-sub-icon {
      width: 24px;
      height: 24px;
      margin-top: -5px;
      color: var(--snd-header-clr, #decf8c); 
    }
    a.snd-link-item,
    a.snd-link-sub-item {
      text-decoration: none;
      outline: 0;    
      width: max-content;
      min-height: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      flex-grow: 0;
      flex-shrink: 0;         
      color: var(--snd-header-clr, #decf8c);   
    }
    a.snd-link-sub-item {
      width: 100%; 
      color: var(--snd-header-clr, #decf8c);   
    }
    .snd-ct-sub {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: left;
      min-width: 5rem;
      width: max-content;
      height: min-content;
      position: absolute;
      top: 1rem;
      left: 0;
      
            
      padding: 0.5rem;
      gap: 7.5px;
      z-index: 20;
    }
    .snd-ct-sub-item {
      width: 100%;
      height: 3rem:
      
      padding: 5px 0.5rem;
      
    }
      .snd_ct_sub-item-sep {
      border-bottom: 1px solid #604545ff;
      }
  `;nt([_()],N.prototype,"item",2);nt([_({attribute:"widthh",reflect:!0})],N.prototype,"widthh",2);nt([_()],N.prototype,"gap",2);nt([m(".snd-lnik-item")],N.prototype,"lnk",2);nt([v()],N.prototype,"_ctsub_visible",2);N=nt([k("snd-menu-art-aa")],N);var _s=Object.defineProperty,ms=Object.getOwnPropertyDescriptor,H=(s,t,e,o)=>{for(var i=o>1?void 0:o?ms(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&_s(t,e,i),i};let M=class extends g{constructor(){super(),this.moreDisabled=!1,this.gap="5px",this.stack_hidden_empty=!0,this._stack_in=[],this._stack_out=[],this._set_in=new Set,this._set_out=new Set,this._tot_w_in=0,this._tot_w_out=0,this._ct_w=0,this._html_items=h``,this._ctMoreVisible=!1,this._more_isOn=!1,this._l_is_hidden=!1,this._s1_is_hidden=!1,this._s2_is_hidden=!0}_setDefaultValues(){this._dim_default='{"width":"70%", "height":"3rem"}'}_setDim(){let s=this._dim_default;this.dim&&(s=this.dim);const t=JSON.parse(s);this.style.height=t.height,this.style.width=t.width}_get_ct_width(){this._ct_w=this._ctItems?.getBoundingClientRect().width}_ff(s){let t=s.target?.tagName.trim().toLowerCase();this._ctMoreVisible&&t!=="snd-resct-aa"&&this._showOrHideMoreCt(s)}_fff(s){if(s.stopPropagation(),s&&s.target){let t=s.target.getAttribute("class")?.trim().toLowerCase();this._ctMoreVisible&&t!=="snd-more-icon"&&this._showOrHideMoreCt(s)}}_addWindowEvents(){window.addEventListener("pointerup",this._ff.bind(this))}_removeWindowEvents(){window.removeEventListener("pointerup",this._ff.bind(this))}_addEvents(){this.renderRoot.addEventListener("pointerup",this._fff.bind(this))}_more_senzor(){let s=this._more_isOn;this.moreDisabled||!this._ctMenuMore||(this._stack_out.length?(this._ctMenuMore.style.display="flex",this._more_isOn=!0):(this._ctMenuMore.style.display="none",this._ctMore&&(this._ctMore.style.display="none"),this._ctMoreVisible=!1,this._more_isOn=!1),s!==this._more_isOn&&this._more_isOn&&(this._evHideL&&!this._l_is_hidden?(dispatchEvent(this._evHideL),this._l_is_hidden=!0):this._evHideS1&&this._evShowS2&&this._l_is_hidden&&(dispatchEvent(this._evHideS1),dispatchEvent(this._evShowS2),this._s1_is_hidden=!0,this._s2_is_hidden=!1)))}_createMoreContainer(){this.moreDisabled||(this._ctMore=document.createElement("div"),this._ctMore.setAttribute("class","snd-more-ct"),this.renderRoot.appendChild(this._ctMore))}_addInMoreContainer(s){if(console.log("adaugare in container"),!(this.moreDisabled||!this._ctMore)&&s.element){const t=this.renderRoot.querySelector(`#${s.id}`);if(t){let e=t?.cloneNode();e.id=s.id+"_clone",e.classList.remove("snd-hidden"),e.innerHTML=t?.innerHTML,this._ctMore.insertAdjacentElement("afterbegin",e)}}}_showOrHideMoreCt(s){if(s.stopPropagation(),this.moreDisabled||!this._ctMore)return;let t=this.getBoundingClientRect().height+15,e=this.getBoundingClientRect().left;this._ctMoreVisible?(this._ctMore.style.display="none",this._ctMoreVisible=!1):this._stack_out.length&&(this._ctMore.style.top=t+"px",this._ctMore.style.left=e+"px",this._ctMore.style.display="flex",this._ctMoreVisible=!0)}_removeFromMoreContainer(s){if(this._ctMore&&s.element){const t=this._ctMore.querySelector(`#${s.id}_clone`);t&&this._ctMore.removeChild(t)}}_refresh_visible(){this._stack_out.forEach(s=>{s.element.classList.add("snd-removed")}),this._stack_in.forEach(s=>{s.element.classList.remove("snd-removed")})}_init_stacks(){let s=0,t=0,e=0,o=parseInt(this.gap),i="",r=this._items,n=0,a=0;t=r?.length??0,r?.forEach(l=>{s+=parseFloat(l.style.width),console.log("w->: "+s),i=l.id,t&&n===t-1&&(this._last_id=i),this._set_in.has(i)||(this._set_in.add(i),this._stack_in.unshift({element:l,width:l.getBoundingClientRect().width,id:i})),n=n+1}),t&&(s+=(t-1)*o),this._tot_w_in=s,this._tot_w_out=0;let d;if(this._ct_w&&s>this._ct_w){e=0;do d=this._stack_in.pop(),console.log("el_aux: "+d),this._stack_out.push(d),this._set_out.add(d.id),this._set_in.delete(d.id),this._addInMoreContainer(d),s=s-d.width,a=a+d.width,d.id!==this._last_id&&(s=s-o,a=a+o),e=e+1;while(e<100&&s>this._ct_w);this._tot_w_in=s,this._tot_w_out=a}this._stack_out.forEach(l=>{l.element.classList.add("snd-removed"),l.element.classList.remove("snd-hidden")}),this._stack_in.forEach(l=>{l.element.classList.remove("snd-hidden")}),this._more_senzor()}async _loadItems(){if(!this.items)return;const s=JSON.parse(this.items);this._html_items=h`${jt(s,t=>t.id,t=>{let e=JSON.stringify(t);return h`
          <snd-menu-art-aa
            id="${t.id}"
            item="${e}"
            class="snd-item snd-hidden"
            style="width: 7px"
          ></snd-menu-art-aa>
        `})}`}_refresh_stacks(s){let t,e=0,o=0,i=parseInt(this.gap),r,n=0,a=0,d=0,l=!1;for(const u of s){if(n=u.borderBoxSize[0].inlineSize,n<this._tot_w_in&&this._stack_in.length){o=this._tot_w_in,e=0;do{if(!this._stack_in.length)break;r=this._stack_in.pop(),this._stack_out.push(r),this._set_out.add(r.id),this._set_in.delete(r.id),this._addInMoreContainer(r),o=o-r.width,this._tot_w_out+=r.width,this._tot_w_in-=r.width,r.id!==this._last_id&&(this._tot_w_out+=i,this._tot_w_in-=i),e=e+1}while(e<100&&o>n)}if(l=!1,n>this._tot_w_in&&(a=n-this._tot_w_in,d=0,this._stack_out.length&&(t=this._stack_out[this._stack_out.length-1],d=t.width,t.id!==this._last_id&&(d+=i),a>d&&(l=!0))),l){e=0,o=0;do r=this._stack_out.pop(),this._stack_in.push(r),this._set_in.add(r.id),this._set_out.delete(r.id),this._removeFromMoreContainer(r),o=o+r.width,this._tot_w_out-=r.width,this._tot_w_in+=r.width,r.id!==this._last_id&&(this._tot_w_out-=i,this._tot_w_in+=i),e=e+1;while(e<100&&o>n)}let c=n-this._tot_w_in;this._s1_is_hidden&&!this._s2_is_hidden?n>this._tot_w_in&&c>300&&(this._evShowS1&&dispatchEvent(this._evShowS1),this._evHideS2&&dispatchEvent(this._evHideS2),this._s1_is_hidden=!1,this._s2_is_hidden=!0):this._l_is_hidden&&!this._s1_is_hidden&&this._evShowL&&c>160&&(console.log("arata logo mare - from res_ct-aa"),dispatchEvent(this._evShowL),this._l_is_hidden=!1)}this._refresh_visible(),this._more_senzor()}_createControls(){this._createMoreContainer()}connectedCallback(){super.connectedCallback(),this._setDefaultValues(),this._setDim(),this._loadItems(),this._createControls(),this._addWindowEvents(),this._addEvents()}disconnectedCallback(){super.disconnectedCallback(),this._res_obs?.unobserve(this._ctItems),this._removeWindowEvents()}willUpdate(s){}async firstUpdated(s){await this.updateComplete,this._ctItems&&(this._ctItems.style.gap=this.gap),this._get_ct_width(),this._init_stacks(),this._res_obs=new ResizeObserver(this._refresh_stacks.bind(this)),this._res_obs?.observe(this._ctItems),this._evHideS1&&this._evShowS2&&this._l_is_hidden&&(dispatchEvent(this._evHideS1),dispatchEvent(this._evShowS2),this._s1_is_hidden=!0,this._s2_is_hidden=!1)}render(){return h` <div
        @pointerup=${this._showOrHideMoreCt}
        class="snd-more-icon"
      >
        <svg class="snd-icon">
          <use xlink:href="./src/assets/sndresctaa.svg#more"></use>
        </svg>
      </div>
      <div class="snd-ct-items">${this._html_items}</div>`}};M.styles=y`
    :host {
      display: flex;
      background-color: var(--snd-header-bkr-clr, #94be94ff);
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
      scrollbar-width: none;
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
  `;H([_({type:Boolean,attribute:"more-disabled"})],M.prototype,"moreDisabled",2);H([_()],M.prototype,"gap",2);H([_()],M.prototype,"dim",2);H([_()],M.prototype,"items",2);H([v()],M.prototype,"stack_hidden_empty",2);H([m(".snd-ct-items")],M.prototype,"_ctItems",2);H([m(".snd-more-icon")],M.prototype,"_ctMenuMore",2);H([$t(".snd-item")],M.prototype,"_items",2);M=H([k("snd-menu-aa")],M);var ps=Object.defineProperty,us=Object.getOwnPropertyDescriptor,dt=(s,t,e,o)=>{for(var i=o>1?void 0:o?us(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&ps(t,e,i),i};let U=class extends g{constructor(){super(),this.sizeableDisabled=!1,this._isDesktop=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("DOMContentLoaded",()=>{this._detectViewport(),this._isDesktop||(this.style.display="none")}),window.addEventListener("resize",()=>{if(this._detectViewport(),!this._isDesktop){console.log("resize"),this.style.display="none";const s=document.querySelector("snd-header-mob-aa");s&&(s.style.display="flex")}})}disconnectedCallback(){}firstUpdated(s){}_detectViewport(){let s=0;this._isDesktop=!1,window.innerWidth!==void 0?s=window.innerWidth:s=document.documentElement.clientWidth,s>768&&(this._isDesktop=!0)}render(){return h`
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
          dim='{"width":"400px","height":"3rem"}'
          sizeable-disabled
        ></snd-search-aa>
      </div>
      <div class="snd-ct-resct-menu">
        <div class="snd-menu-aa">
          <snd-menu-aa
            items='[{"symbol":"youtube","dim":{"width":"2rem","height":"2rem"},"text":"Terrence Hill","link":"https://google.ro","id":"it01","subitems":[{"symbol":"location","dim":{"width":"3rem","height":"3rem"},"text":"Bud Spencer","link":"https://google.ro","id":"it02"},{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Facebook","link":"https://google.ro","id":"it03"},{"symbol":"phone","dim":{"width":"3rem","height":"3rem"},"text":"Ger Naprasnic","link":"https://google.ro","id":"it04"},{"symbol":"facebook","dim":{"width":"3rem","height":"3rem"},"text":"Dorul Lelii","link":"https://google.ro","id":"it05"}]},
  {"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Terrence Hill","link":"https://google.ro","id":"it001","subitems":[{"symbol":"location","dim":{"width":"3rem","height":"3rem"},"text":"Bud Spencer","link":"https://google.ro","id":"it002"},{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Facebook","link":"https://google.ro","id":"it003"},{"symbol":"phone","dim":{"width":"3rem","height":"3rem"},"text":"Ger Naprasnic","link":"https://google.ro","id":"it00x2"},{"symbol":"facebook","dim":{"width":"3rem","height":"3rem"},"text":"Dorul Lelii","link":"https://google.ro","id":"it00x3"}]},
  {"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Terrence Hill","link":"https://google.ro","id":"it0y1","subitems":[{"symbol":"location","dim":{"width":"3rem","height":"3rem"},"text":"Bud Spencer","link":"https://google.ro","id":"it0y2"},{"symbol":"youtube","dim":{"width":"3rem","height":"3rem"},"text":"Facebook","link":"https://google.ro","id":"it0y3"},{"symbol":"phone","dim":{"width":"3rem","height":"3rem"},"text":"Ger Naprasnic","link":"https://google.ro","id":"it0y2"},{"symbol":"facebook","dim":{"width":"3rem","height":"3rem"},"text":"Dorul Lelii","link":"https://google.ro","id":"it0y3"}]}]'
          ></snd-menu-aa>
        </div>
        <snd-search-ab
          class="snd-search-ab"
          id="src01b"
          id-result="res01"
          form-name="fsearch"
          dim='{"width":"300px","height":"3rem"}'
        ></snd-search-ab>
      </div>
      <snd-search-results-aa
        dim='{"width":"97vw","height":"77vh"}'
        id="res01"
        id-search-elements='["src01"]'
      ></snd-search-results-aa>
    `}};U.styles=[y`
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
        height: auto;
        width: 100%;
        overflow: visible;
        scrollbar-width: none;
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
        scrollbar-width: none;
      }
      .snd-ct-resct-menu {
        border: 0px solid #fff;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 400px;
        overflow: hidden;
        overflow-y: visible;
        scrollbar-width: none;
      }

      .snd-menu-aa {
        display: flex;
        overflow-y: visible;
        position: relative;
        scrollbar-width: none;
        width: 100%;
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
    `];dt([_({type:Boolean,attribute:"sizeable-disabled"})],U.prototype,"sizeableDisabled",2);dt([m(".snd-search-ct-button")],U.prototype,"_btn_search",2);dt([m(".snd-resct")],U.prototype,"_resct",2);dt([m(".snd-search")],U.prototype,"_search",2);dt([v()],U.prototype,"_macao",2);U=dt([k("snd-header-aa")],U);
