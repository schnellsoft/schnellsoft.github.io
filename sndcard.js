(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,L=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),W=new WeakMap;let et=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(L&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=W.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&W.set(e,t))}return t}toString(){return this.cssText}};const nt=r=>new et(typeof r=="string"?r:r+"",void 0,j),at=(r,...t)=>{const e=r.length===1?r[0]:t.reduce(((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1]),r[0]);return new et(e,r,j)},ht=(r,t)=>{if(L)r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const s=document.createElement("style"),i=M.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},J=L?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return nt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:lt,defineProperty:ct,getOwnPropertyDescriptor:dt,getOwnPropertyNames:pt,getOwnPropertySymbols:ut,getPrototypeOf:mt}=Object,k=globalThis,K=k.trustedTypes,ft=K?K.emptyScript:"",$t=k.reactiveElementPolyfillSupport,E=(r,t)=>r,H={toAttribute(r,t){switch(t){case Boolean:r=r?ft:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},D=(r,t)=>!lt(r,t),F={attribute:!0,type:String,converter:H,reflect:!1,useDefault:!1,hasChanged:D};Symbol.metadata??=Symbol("metadata"),k.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=F){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&ct(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=dt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const h=i?.call(this);o?.call(this,n),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??F}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=mt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const e=this.properties,s=[...pt(e),...ut(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(J(i))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ht(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:H).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:H;this._$Em=i;const h=n.fromAttribute(e,o.type);this[i]=h??this._$Ej?.get(i)??h,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){const i=this.constructor,o=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??D)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s){const{wrapped:n}=o,h=this[i];n!==!0||this._$AL.has(i)||h===void 0||this.C(i,void 0,o,h)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[E("elementProperties")]=new Map,v[E("finalized")]=new Map,$t?.({ReactiveElement:v}),(k.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,N=I.trustedTypes,Z=N?N.createPolicy("lit-html",{createHTML:r=>r}):void 0,st="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,it="?"+f,_t=`<${it}>`,g=document,P=()=>g.createComment(""),C=r=>r===null||typeof r!="object"&&typeof r!="function",B=Array.isArray,gt=r=>B(r)||typeof r?.[Symbol.iterator]=="function",z=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,G=/>/g,$=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Q=/'/g,X=/"/g,rt=/^(?:script|style|textarea|title)$/i,yt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),vt=yt(1),A=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),tt=new WeakMap,_=g.createTreeWalker(g,129);function ot(r,t){if(!B(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Z!==void 0?Z.createHTML(t):t}const At=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=w;for(let h=0;h<e;h++){const a=r[h];let c,p,l=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===w?p[1]==="!--"?n=Y:p[1]!==void 0?n=G:p[2]!==void 0?(rt.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=$):p[3]!==void 0&&(n=$):n===$?p[0]===">"?(n=i??w,l=-1):p[1]===void 0?l=-2:(l=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?$:p[3]==='"'?X:Q):n===X||n===Q?n=$:n===Y||n===G?n=w:(n=$,i=void 0);const m=n===$&&r[h+1].startsWith("/>")?" ":"";o+=n===w?a+_t:l>=0?(s.push(c),a.slice(0,l)+st+a.slice(l)+f+m):a+f+(l===-2?h:m)}return[ot(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class x{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const h=t.length-1,a=this.parts,[c,p]=At(t,e);if(this.el=x.createElement(c,s),_.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=_.nextNode())!==null&&a.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(st)){const u=p[n++],m=i.getAttribute(l).split(f),U=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:U[2],strings:m,ctor:U[1]==="."?wt:U[1]==="?"?Et:U[1]==="@"?St:R}),i.removeAttribute(l)}else l.startsWith(f)&&(a.push({type:6,index:o}),i.removeAttribute(l));if(rt.test(i.tagName)){const l=i.textContent.split(f),u=l.length-1;if(u>0){i.textContent=N?N.emptyScript:"";for(let m=0;m<u;m++)i.append(l[m],P()),_.nextNode(),a.push({type:2,index:++o});i.append(l[u],P())}}}else if(i.nodeType===8)if(i.data===it)a.push({type:2,index:o});else{let l=-1;for(;(l=i.data.indexOf(f,l+1))!==-1;)a.push({type:7,index:o}),l+=f.length-1}o++}}static createElement(t,e){const s=g.createElement("template");return s.innerHTML=t,s}}function b(r,t,e=r,s){if(t===A)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const o=C(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=b(r,i._$AS(r,t.values),i,s)),t}class bt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??g).importNode(e,!0);_.currentNode=i;let o=_.nextNode(),n=0,h=0,a=s[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new O(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Pt(o,this,t)),this._$AV.push(c),a=s[++h]}n!==a?.index&&(o=_.nextNode(),n++)}return _.currentNode=g,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class O{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),C(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):gt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(g.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=x.createElement(ot(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const o=new bt(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=tt.get(t.strings);return e===void 0&&tt.set(t.strings,e=new x(t)),e}k(t){B(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new O(this.O(P()),this.O(P()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=b(this,t,e,0),n=!C(t)||t!==this._$AH&&t!==A,n&&(this._$AH=t);else{const h=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=b(this,h[s+a],e,a),c===A&&(c=this._$AH[a]),n||=!C(c)||c!==this._$AH[a],c===d?t=d:t!==d&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class wt extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Et extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class St extends R{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=b(this,t,e,0)??d)===A)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Pt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const Ct=I.litHtmlPolyfillSupport;Ct?.(x,O),(I.litHtmlVersions??=[]).push("3.3.1");const xt=(r,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const o=e?.renderBefore??null;s._$litPart$=i=new O(t.insertBefore(P(),o),o,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis;class S extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}}S._$litElement$=!0,S.finalized=!0,q.litElementHydrateSupport?.({LitElement:S});const Ot=q.litElementPolyfillSupport;Ot?.({LitElement:S});(q.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=r=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(r,t)})):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:D},Mt=(r=Ut,t,e)=>{const{kind:s,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),s==="accessor"){const{name:n}=e;return{set(h){const a=t.get.call(this);t.set.call(this,h),this.requestUpdate(n,a,r)},init(h){return h!==void 0&&this.C(n,void 0,r,h),h}}}if(s==="setter"){const{name:n}=e;return function(h){const a=this[n];t.call(this,h),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+s)};function Ht(r){return(t,e)=>typeof e=="object"?Mt(r,t,e):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function V(r,t){return(e,s,i)=>{const o=n=>n.renderRoot?.querySelector(r)??null;return Nt(e,s,{get(){return o(this)}})}}var kt=Object.defineProperty,Rt=Object.getOwnPropertyDescriptor,T=(r,t,e,s)=>{for(var i=s>1?void 0:s?Rt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&kt(t,e,i),i};let y=class extends S{constructor(){super(...arguments),this.item="",this._isTouch=!1,this._hasText=!1}connectedCallback(){super.connectedCallback(),this._loatItem(),this._detectTouch()}firstUpdated(r){this._adaptControl()}_loatItem(){if(this.item&&this.item.trim().length>0){let r=JSON.parse(this.item);r&&r.image&&r.image.trim().length>0&&(this._image=r.image),r&&r.name&&r.name.trim().length>0&&(this._name=r.name),r&&r.text&&r.text.trim().length>0&&(this._text=r.text,this._hasText=!0)}}_handleClick(){this.ct&&(this.ct.dataset.state=="up"?this.ct.dataset.state="down":(this.ct.dataset.state=="down"||this.ct.dataset.state=="")&&(this.ct.dataset.state="up"))}_detectTouch(){this._isTouch="ontouchstart"in window||navigator.maxTouchPoints>0}_adaptControl(){this.btn&&(this.btn.style.display="none"),this._isTouch?this.btn&&this._hasText&&(this.btn.style.display="grid"):(this.card?.addEventListener("mouseover",()=>{this.ct&&this._hasText&&(this.ct.dataset.state=="down"||this.ct.dataset.state=="")&&(this.ct.dataset.state="up")}),this.card?.addEventListener("mouseout",()=>{this.ct&&this._hasText&&(this.ct.dataset.state=="up"||this.ct.dataset.state=="")&&(this.ct.dataset.state="down")}))}render(){return vt`
      <div class="card">
        <div class="item1 skeleton">
          <img src="${this._image}" alt="huhu" />
        </div>
        <div class="item2">
          <div class="item2p" data-state>
            <div class="item21">
              <div class="item21x" @click=${this._handleClick}>
                <span>Y</span>
              </div>
            </div>
            <div class="item22">
              <h2>${this._name}</h2>
              <p>${this._text}</p>
            </div>
          </div>
        </div>
      </div>
    `}};y.styles=at`
    :host {
      margin-right: 1rem;
    }
    div.card {
      block-size: 21rem;
      inline-size: 19rem;
      margin-inline: auto;
      display: grid;
      grid-template-columns: 1rem 1rem 1fr 2rem 1rem 1rem;
      grid-template-rows: 0.1rem 3rem 1fr 3rem 2rem;
    }
    .card > .item1 {
      grid-column: 1 / -1;
      grid-row: 1 / -2;
      overflow: hidden;
    }
    .item1 > img {
      display: block;
      width: 100%;
    }
    .card > .item2 {
      grid-column: 2 / -2;
      grid-row: 2 / -1;
      display: grid;
      grid-template-columns: subgrid;
      grid-template-rows: subgrid;
      overflow: hidden;
    }
    .item2p {
      grid-column: 1 / -1;
      grid-row: 1 / -1;
      display: grid;
      grid-template-columns: 1rem 1fr 2rem 1rem;
      grid-template-rows: 3rem 1fr;
      overflow: hidden;
      position: relative;
      top: 0;
      /* transition: top 300ms ease-in-out; */
    }
    .item21 {
      grid-column: 1 / -1;
      grid-row: 1 / 2;
      display: grid;
      grid-template-columns: subgrid;
      grid-template-rows: subgrid;
    }
    .item21x {
      grid-row: 1 / 2;
      grid-column: 3 / -1;
      block-size: 3rem;
      inline-size: 3rem;
      min-inline-size: 3rem;
      margin-left: auto;
      display: grid;
      place-content: center;
      background-color: #4d4753af;
      color: #dbdf9aff;
      font-weight: 700;
      cursor: default;
      font-size: 1.4rem;
      border-radius: 50%;
      line-height: 3rem;
    }
    .item22 {
      grid-column: 2 / -2;
      grid-row: 2 / -1;
      display: flex;
      flex-direction: column;
      background-color: #4d4753b0;
      color: #dbdf9aff;
      padding: 0 0.3rem;
    }
    .item22 > h2 {
      text-align: center;
      block-size: 2rem;
      font-size: clamp(1.2rem, 1rem + 7vw, 1.7rem);
      margin: 0.2rem 0;
      overflow: hidden;
      line-height: 1.1;
    }
    .item22 > p {
      margin-top: 0.3rem;
      font-size: clamp(1.1rem, 1rem + 3vw, 1.3rem);
    }
    .item2p {
      top: calc(21rem - 5.46rem);
    }
    .item2p[data-state="down"] {
      animation: adown 0.5s linear forwards;
    }
    @keyframes adown {
      0% {
        top: 0;
      }
      100% {
        top: calc(21rem - 5.46rem);
      }
    }
    .item2p[data-state] .item21x {
      transform: rotate(180deg);
    }
    .item2p[data-state="down"] .item21x {
      transform: rotate(180deg);
      animation: adownp 0.5s linear forwards;
    }
    @keyframes adownp {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(180deg);
      }
    }
    .item2p[data-state="up"] {
      animation: aup 0.5s linear forwards;
    }
    @keyframes aup {
      0% {
        top: calc(21rem - 5.46rem);
      }
      100% {
        top: 0;
      }
    }
    .item2p[data-state="up"] .item21x {
      animation: aupp 0.5s linear forwards;
    }
    @keyframes aupp {
      0% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    .skeleton {
      animation: skeleton-loading 1s linear infinite alternate;
    }
    @keyframes skeleton-loading {
      0% {
        background-color: hsl(200, 20%, 45%);
      }

      100% {
        background-color: hsl(200, 20%, 25%);
      }
    }
  `;T([Ht()],y.prototype,"item",2);T([V(".card")],y.prototype,"card",2);T([V(".item21x")],y.prototype,"btn",2);T([V(".item2p")],y.prototype,"ct",2);y=T([Tt("snd-card-aa")],y);
