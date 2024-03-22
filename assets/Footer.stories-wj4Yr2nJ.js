import{j as dt}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";/*! @license DOMPurify 3.0.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.11/LICENSE */const{entries:Tt,setPrototypeOf:ot,isFrozen:Bt,getPrototypeOf:Yt,getOwnPropertyDescriptor:jt}=Object;let{freeze:g,seal:L,create:_t}=Object,{apply:De,construct:be}=typeof Reflect<"u"&&Reflect;g||(g=function(n){return n});L||(L=function(n){return n});De||(De=function(n,l,s){return n.apply(l,s)});be||(be=function(n,l){return new n(...l)});const te=R(Array.prototype.forEach),it=R(Array.prototype.pop),X=R(Array.prototype.push),re=R(String.prototype.toLowerCase),Re=R(String.prototype.toString),rt=R(String.prototype.match),V=R(String.prototype.replace),Xt=R(String.prototype.indexOf),Vt=R(String.prototype.trim),y=R(Object.prototype.hasOwnProperty),S=R(RegExp.prototype.test),$=$t(TypeError);function R(r){return function(n){for(var l=arguments.length,s=new Array(l>1?l-1:0),d=1;d<l;d++)s[d-1]=arguments[d];return De(r,n,s)}}function $t(r){return function(){for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return be(r,l)}}function a(r,n){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:re;ot&&ot(r,null);let s=n.length;for(;s--;){let d=n[s];if(typeof d=="string"){const N=l(d);N!==d&&(Bt(n)||(n[s]=N),d=N)}r[d]=!0}return r}function qt(r){for(let n=0;n<r.length;n++)y(r,n)||(r[n]=null);return r}function w(r){const n=_t(null);for(const[l,s]of Tt(r))y(r,l)&&(Array.isArray(s)?n[l]=qt(s):s&&typeof s=="object"&&s.constructor===Object?n[l]=w(s):n[l]=s);return n}function ne(r,n){for(;r!==null;){const s=jt(r,n);if(s){if(s.get)return R(s.get);if(typeof s.value=="function")return R(s.value)}r=Yt(r)}function l(){return null}return l}const at=g(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Le=g(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ye=g(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Kt=g(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Oe=g(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Zt=g(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),st=g(["#text"]),lt=g(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Ne=g(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ct=g(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),oe=g(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Jt=L(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Qt=L(/<%[\w\W]*|[\w\W]*%>/gm),en=L(/\${[\w\W]*}/gm),tn=L(/^data-[\-\w.\u00B7-\uFFFF]/),nn=L(/^aria-[\-\w]+$/),Et=L(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),on=L(/^(?:\w+script|data):/i),rn=L(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),gt=L(/^html$/i),an=L(/^[a-z][.\w]*(-[.\w]+)+$/i);var ft=Object.freeze({__proto__:null,MUSTACHE_EXPR:Jt,ERB_EXPR:Qt,TMPLIT_EXPR:en,DATA_ATTR:tn,ARIA_ATTR:nn,IS_ALLOWED_URI:Et,IS_SCRIPT_OR_DATA:on,ATTR_WHITESPACE:rn,DOCTYPE_NAME:gt,CUSTOM_ELEMENT:an});const sn=function(){return typeof window>"u"?null:window},ln=function(n,l){if(typeof n!="object"||typeof n.createPolicy!="function")return null;let s=null;const d="data-tt-policy-suffix";l&&l.hasAttribute(d)&&(s=l.getAttribute(d));const N="dompurify"+(s?"#"+s:"");try{return n.createPolicy(N,{createHTML(x){return x},createScriptURL(x){return x}})}catch{return console.warn("TrustedTypes policy "+N+" could not be created."),null}};function ht(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:sn();const n=i=>ht(i);if(n.version="3.0.11",n.removed=[],!r||!r.document||r.document.nodeType!==9)return n.isSupported=!1,n;let{document:l}=r;const s=l,d=s.currentScript,{DocumentFragment:N,HTMLTemplateElement:x,Node:ae,Element:Ie,NodeFilter:z,NamedNodeMap:At=r.NamedNodeMap||r.MozNamedAttrMap,HTMLFormElement:St,DOMParser:Rt,trustedTypes:q}=r,K=Ie.prototype,Lt=ne(K,"cloneNode"),yt=ne(K,"nextSibling"),Ot=ne(K,"childNodes"),se=ne(K,"parentNode");if(typeof x=="function"){const i=l.createElement("template");i.content&&i.content.ownerDocument&&(l=i.content.ownerDocument)}let E,W="";const{implementation:le,createNodeIterator:Nt,createDocumentFragment:Dt,getElementsByTagName:bt}=l,{importNode:It}=s;let O={};n.isSupported=typeof Tt=="function"&&typeof se=="function"&&le&&le.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:ce,ERB_EXPR:fe,TMPLIT_EXPR:ue,DATA_ATTR:Ct,ARIA_ATTR:Mt,IS_SCRIPT_OR_DATA:wt,ATTR_WHITESPACE:Ce,CUSTOM_ELEMENT:xt}=ft;let{IS_ALLOWED_URI:Me}=ft,u=null;const we=a({},[...at,...Le,...ye,...Oe,...st]);let m=null;const xe=a({},[...lt,...Ne,...ct,...oe]);let f=Object.seal(_t(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),G=null,me=null,Pe=!0,pe=!0,ke=!1,ve=!0,P=!1,C=!1,de=!1,Te=!1,k=!1,Z=!1,J=!1,Ue=!0,Fe=!1;const Pt="user-content-";let _e=!0,B=!1,v={},U=null;const He=a({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ze=null;const We=a({},["audio","video","img","source","image","track"]);let Ee=null;const Ge=a({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Q="http://www.w3.org/1998/Math/MathML",ee="http://www.w3.org/2000/svg",D="http://www.w3.org/1999/xhtml";let F=D,ge=!1,he=null;const kt=a({},[Q,ee,D],Re);let Y=null;const vt=["application/xhtml+xml","text/html"],Ut="text/html";let p=null,H=null;const Ft=l.createElement("form"),Be=function(e){return e instanceof RegExp||e instanceof Function},Ae=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(H&&H===e)){if((!e||typeof e!="object")&&(e={}),e=w(e),Y=vt.indexOf(e.PARSER_MEDIA_TYPE)===-1?Ut:e.PARSER_MEDIA_TYPE,p=Y==="application/xhtml+xml"?Re:re,u=y(e,"ALLOWED_TAGS")?a({},e.ALLOWED_TAGS,p):we,m=y(e,"ALLOWED_ATTR")?a({},e.ALLOWED_ATTR,p):xe,he=y(e,"ALLOWED_NAMESPACES")?a({},e.ALLOWED_NAMESPACES,Re):kt,Ee=y(e,"ADD_URI_SAFE_ATTR")?a(w(Ge),e.ADD_URI_SAFE_ATTR,p):Ge,ze=y(e,"ADD_DATA_URI_TAGS")?a(w(We),e.ADD_DATA_URI_TAGS,p):We,U=y(e,"FORBID_CONTENTS")?a({},e.FORBID_CONTENTS,p):He,G=y(e,"FORBID_TAGS")?a({},e.FORBID_TAGS,p):{},me=y(e,"FORBID_ATTR")?a({},e.FORBID_ATTR,p):{},v=y(e,"USE_PROFILES")?e.USE_PROFILES:!1,Pe=e.ALLOW_ARIA_ATTR!==!1,pe=e.ALLOW_DATA_ATTR!==!1,ke=e.ALLOW_UNKNOWN_PROTOCOLS||!1,ve=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,P=e.SAFE_FOR_TEMPLATES||!1,C=e.WHOLE_DOCUMENT||!1,k=e.RETURN_DOM||!1,Z=e.RETURN_DOM_FRAGMENT||!1,J=e.RETURN_TRUSTED_TYPE||!1,Te=e.FORCE_BODY||!1,Ue=e.SANITIZE_DOM!==!1,Fe=e.SANITIZE_NAMED_PROPS||!1,_e=e.KEEP_CONTENT!==!1,B=e.IN_PLACE||!1,Me=e.ALLOWED_URI_REGEXP||Et,F=e.NAMESPACE||D,f=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Be(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(f.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Be(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(f.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(f.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),P&&(pe=!1),Z&&(k=!0),v&&(u=a({},st),m=[],v.html===!0&&(a(u,at),a(m,lt)),v.svg===!0&&(a(u,Le),a(m,Ne),a(m,oe)),v.svgFilters===!0&&(a(u,ye),a(m,Ne),a(m,oe)),v.mathMl===!0&&(a(u,Oe),a(m,ct),a(m,oe))),e.ADD_TAGS&&(u===we&&(u=w(u)),a(u,e.ADD_TAGS,p)),e.ADD_ATTR&&(m===xe&&(m=w(m)),a(m,e.ADD_ATTR,p)),e.ADD_URI_SAFE_ATTR&&a(Ee,e.ADD_URI_SAFE_ATTR,p),e.FORBID_CONTENTS&&(U===He&&(U=w(U)),a(U,e.FORBID_CONTENTS,p)),_e&&(u["#text"]=!0),C&&a(u,["html","head","body"]),u.table&&(a(u,["tbody"]),delete G.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw $('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw $('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');E=e.TRUSTED_TYPES_POLICY,W=E.createHTML("")}else E===void 0&&(E=ln(q,d)),E!==null&&typeof W=="string"&&(W=E.createHTML(""));g&&g(e),H=e}},Ye=a({},["mi","mo","mn","ms","mtext"]),je=a({},["foreignobject","desc","title","annotation-xml"]),Ht=a({},["title","style","font","a","script"]),Xe=a({},[...Le,...ye,...Kt]),Ve=a({},[...Oe,...Zt]),zt=function(e){let t=se(e);(!t||!t.tagName)&&(t={namespaceURI:F,tagName:"template"});const o=re(e.tagName),c=re(t.tagName);return he[e.namespaceURI]?e.namespaceURI===ee?t.namespaceURI===D?o==="svg":t.namespaceURI===Q?o==="svg"&&(c==="annotation-xml"||Ye[c]):!!Xe[o]:e.namespaceURI===Q?t.namespaceURI===D?o==="math":t.namespaceURI===ee?o==="math"&&je[c]:!!Ve[o]:e.namespaceURI===D?t.namespaceURI===ee&&!je[c]||t.namespaceURI===Q&&!Ye[c]?!1:!Ve[o]&&(Ht[o]||!Xe[o]):!!(Y==="application/xhtml+xml"&&he[e.namespaceURI]):!1},I=function(e){X(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch{e.remove()}},Se=function(e,t){try{X(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch{X(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!m[e])if(k||Z)try{I(t)}catch{}else try{t.setAttribute(e,"")}catch{}},$e=function(e){let t=null,o=null;if(Te)e="<remove></remove>"+e;else{const _=rt(e,/^[\r\n\t ]+/);o=_&&_[0]}Y==="application/xhtml+xml"&&F===D&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const c=E?E.createHTML(e):e;if(F===D)try{t=new Rt().parseFromString(c,Y)}catch{}if(!t||!t.documentElement){t=le.createDocument(F,"template",null);try{t.documentElement.innerHTML=ge?W:c}catch{}}const T=t.body||t.documentElement;return e&&o&&T.insertBefore(l.createTextNode(o),T.childNodes[0]||null),F===D?bt.call(t,C?"html":"body")[0]:C?t.documentElement:T},qe=function(e){return Nt.call(e.ownerDocument||e,e,z.SHOW_ELEMENT|z.SHOW_COMMENT|z.SHOW_TEXT|z.SHOW_PROCESSING_INSTRUCTION|z.SHOW_CDATA_SECTION,null)},Wt=function(e){return e instanceof St&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof At)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},Ke=function(e){return typeof ae=="function"&&e instanceof ae},b=function(e,t,o){O[e]&&te(O[e],c=>{c.call(n,t,o,H)})},Ze=function(e){let t=null;if(b("beforeSanitizeElements",e,null),Wt(e))return I(e),!0;const o=p(e.nodeName);if(b("uponSanitizeElement",e,{tagName:o,allowedTags:u}),e.hasChildNodes()&&!Ke(e.firstElementChild)&&S(/<[/\w]/g,e.innerHTML)&&S(/<[/\w]/g,e.textContent)||e.nodeType===7)return I(e),!0;if(!u[o]||G[o]){if(!G[o]&&Qe(o)&&(f.tagNameCheck instanceof RegExp&&S(f.tagNameCheck,o)||f.tagNameCheck instanceof Function&&f.tagNameCheck(o)))return!1;if(_e&&!U[o]){const c=se(e)||e.parentNode,T=Ot(e)||e.childNodes;if(T&&c){const _=T.length;for(let h=_-1;h>=0;--h)c.insertBefore(Lt(T[h],!0),yt(e))}}return I(e),!0}return e instanceof Ie&&!zt(e)||(o==="noscript"||o==="noembed"||o==="noframes")&&S(/<\/no(script|embed|frames)/i,e.innerHTML)?(I(e),!0):(P&&e.nodeType===3&&(t=e.textContent,te([ce,fe,ue],c=>{t=V(t,c," ")}),e.textContent!==t&&(X(n.removed,{element:e.cloneNode()}),e.textContent=t)),b("afterSanitizeElements",e,null),!1)},Je=function(e,t,o){if(Ue&&(t==="id"||t==="name")&&(o in l||o in Ft))return!1;if(!(pe&&!me[t]&&S(Ct,t))){if(!(Pe&&S(Mt,t))){if(!m[t]||me[t]){if(!(Qe(e)&&(f.tagNameCheck instanceof RegExp&&S(f.tagNameCheck,e)||f.tagNameCheck instanceof Function&&f.tagNameCheck(e))&&(f.attributeNameCheck instanceof RegExp&&S(f.attributeNameCheck,t)||f.attributeNameCheck instanceof Function&&f.attributeNameCheck(t))||t==="is"&&f.allowCustomizedBuiltInElements&&(f.tagNameCheck instanceof RegExp&&S(f.tagNameCheck,o)||f.tagNameCheck instanceof Function&&f.tagNameCheck(o))))return!1}else if(!Ee[t]){if(!S(Me,V(o,Ce,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&Xt(o,"data:")===0&&ze[e])){if(!(ke&&!S(wt,V(o,Ce,"")))){if(o)return!1}}}}}}return!0},Qe=function(e){return e!=="annotation-xml"&&rt(e,xt)},et=function(e){b("beforeSanitizeAttributes",e,null);const{attributes:t}=e;if(!t)return;const o={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:m};let c=t.length;for(;c--;){const T=t[c],{name:_,namespaceURI:h,value:M}=T,j=p(_);let A=_==="value"?M:Vt(M);if(o.attrName=j,o.attrValue=A,o.keepAttr=!0,o.forceKeepAttr=void 0,b("uponSanitizeAttribute",e,o),A=o.attrValue,o.forceKeepAttr||(Se(_,e),!o.keepAttr))continue;if(!ve&&S(/\/>/i,A)){Se(_,e);continue}P&&te([ce,fe,ue],nt=>{A=V(A,nt," ")});const tt=p(e.nodeName);if(Je(tt,j,A)){if(Fe&&(j==="id"||j==="name")&&(Se(_,e),A=Pt+A),E&&typeof q=="object"&&typeof q.getAttributeType=="function"&&!h)switch(q.getAttributeType(tt,j)){case"TrustedHTML":{A=E.createHTML(A);break}case"TrustedScriptURL":{A=E.createScriptURL(A);break}}try{h?e.setAttributeNS(h,_,A):e.setAttribute(_,A),it(n.removed)}catch{}}}b("afterSanitizeAttributes",e,null)},Gt=function i(e){let t=null;const o=qe(e);for(b("beforeSanitizeShadowDOM",e,null);t=o.nextNode();)b("uponSanitizeShadowNode",t,null),!Ze(t)&&(t.content instanceof N&&i(t.content),et(t));b("afterSanitizeShadowDOM",e,null)};return n.sanitize=function(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=null,o=null,c=null,T=null;if(ge=!i,ge&&(i="<!-->"),typeof i!="string"&&!Ke(i))if(typeof i.toString=="function"){if(i=i.toString(),typeof i!="string")throw $("dirty is not a string, aborting")}else throw $("toString is not a function");if(!n.isSupported)return i;if(de||Ae(e),n.removed=[],typeof i=="string"&&(B=!1),B){if(i.nodeName){const M=p(i.nodeName);if(!u[M]||G[M])throw $("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof ae)t=$e("<!---->"),o=t.ownerDocument.importNode(i,!0),o.nodeType===1&&o.nodeName==="BODY"||o.nodeName==="HTML"?t=o:t.appendChild(o);else{if(!k&&!P&&!C&&i.indexOf("<")===-1)return E&&J?E.createHTML(i):i;if(t=$e(i),!t)return k?null:J?W:""}t&&Te&&I(t.firstChild);const _=qe(B?i:t);for(;c=_.nextNode();)Ze(c)||(c.content instanceof N&&Gt(c.content),et(c));if(B)return i;if(k){if(Z)for(T=Dt.call(t.ownerDocument);t.firstChild;)T.appendChild(t.firstChild);else T=t;return(m.shadowroot||m.shadowrootmode)&&(T=It.call(s,T,!0)),T}let h=C?t.outerHTML:t.innerHTML;return C&&u["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&S(gt,t.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+h),P&&te([ce,fe,ue],M=>{h=V(h,M," ")}),E&&J?E.createHTML(h):h},n.setConfig=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ae(i),de=!0},n.clearConfig=function(){H=null,de=!1},n.isValidAttribute=function(i,e,t){H||Ae({});const o=p(i),c=p(e);return Je(o,c,t)},n.addHook=function(i,e){typeof e=="function"&&(O[i]=O[i]||[],X(O[i],e))},n.removeHook=function(i){if(O[i])return it(O[i])},n.removeHooks=function(i){O[i]&&(O[i]=[])},n.removeAllHooks=function(){O={}},n}var cn=ht();class fn{constructor(n){this._element=document.createElement("footer"),this._element.classList.add("storybook-footer"),this._element.style.backgroundColor="gray",this._element.innerText="Footer",n.appendChild(this._element)}get element(){return this._element}}function un(r){return new fn(r)}function mn(){return dt.jsx("div",{})}const Tn={title:"Example/Footer",component:mn,render:({container:r})=>{const n=un(r);return dt.jsx("div",{dangerouslySetInnerHTML:{__html:cn.sanitize(n.element.outerHTML)}})},tags:["autodocs"],parameters:{layout:"fullscreen"}},ie={args:{container:document.createElement("div")}};var ut,mt,pt;ie.parameters={...ie.parameters,docs:{...(ut=ie.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  args: {
    container: document.createElement('div')
  }
}`,...(pt=(mt=ie.parameters)==null?void 0:mt.docs)==null?void 0:pt.source}}};const _n=["LoggedIn"];export{ie as LoggedIn,_n as __namedExportsOrder,Tn as default};