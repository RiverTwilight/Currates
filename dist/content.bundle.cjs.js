'use strict';

var n,l$1,u$1,i$1,o$1,r$1,f$1,c$1={},s$1=[],a$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h$1=Array.isArray;function v$1(n,l){for(var u in l)n[u]=l[u];return n}function p$1(n){var l=n.parentNode;l&&l.removeChild(n);}function y(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return d$1(l,f,i,o,null)}function d$1(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$1:r};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function k$1(n){return n.children}function b$1(n,l){this.props=n,this.context=l;}function g$2(n,l){if(null==l)return n.__?g$2(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?g$2(n):null}function m$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return m$1(n)}}function w$2(n){(!n.__d&&(n.__d=!0)&&i$1.push(n)&&!x.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||r$1)(x);}function x(){var n,l,u,t,o,r,e,c,s;for(i$1.sort(f$1);n=i$1.shift();)n.__d&&(l=i$1.length,t=void 0,o=void 0,r=void 0,c=(e=(u=n).__v).__e,(s=u.__P)&&(t=[],o=[],(r=v$1({},e)).__v=e.__v+1,L$1(s,e,r,u.__n,void 0!==s.ownerSVGElement,null!=e.__h?[c]:null,t,null==c?g$2(e):c,e.__h,o),M(t,e,o),e.__e!=c&&m$1(e)),i$1.length>l&&i$1.sort(f$1));x.__r=0;}function P(n,l,u,t,i,o,r,f,e,a,v){var p,y,_,b,g,m,w,x,P,S,H=0,I=t&&t.__k||s$1,T=I.length,j=T,z=l.length;for(u.__k=[],p=0;p<z;p++)null!=(b=u.__k[p]=null==(b=l[p])||"boolean"==typeof b||"function"==typeof b?null:"string"==typeof b||"number"==typeof b||"bigint"==typeof b?d$1(null,b,null,null,b):h$1(b)?d$1(k$1,{children:b},null,null,null):b.__b>0?d$1(b.type,b.props,b.key,b.ref?b.ref:null,b.__v):b)&&(b.__=u,b.__b=u.__b+1,-1===(x=A(b,I,w=p+H,j))?_=c$1:(_=I[x]||c$1,I[x]=void 0,j--),L$1(n,b,_,i,o,r,f,e,a,v),g=b.__e,(y=b.ref)&&_.ref!=y&&(_.ref&&O(_.ref,null,b),v.push(y,b.__c||g,b)),null!=g&&(null==m&&(m=g),S=!(P=_===c$1||null===_.__v)&&x===w,P?-1==x&&H--:x!==w&&(x===w+1?(H++,S=!0):x>w?j>z-w?(H+=x-w,S=!0):H--:H=x<w&&x==w-1?x-w:0),w=p+H,S=S||x==p&&!P,"function"!=typeof b.type||x===w&&_.__k!==b.__k?"function"==typeof b.type||S?void 0!==b.__d?(e=b.__d,b.__d=void 0):e=g.nextSibling:e=$$1(n,g,e):e=C$1(b,e,n),"function"==typeof u.type&&(u.__d=e)));for(u.__e=m,p=T;p--;)null!=I[p]&&("function"==typeof u.type&&null!=I[p].__e&&I[p].__e==u.__d&&(u.__d=I[p].__e.nextSibling),q$1(I[p],I[p]));}function C$1(n,l,u){for(var t,i=n.__k,o=0;i&&o<i.length;o++)(t=i[o])&&(t.__=n,l="function"==typeof t.type?C$1(t,l,u):$$1(u,t.__e,l));return l}function S(n,l){return l=l||[],null==n||"boolean"==typeof n||(h$1(n)?n.some(function(n){S(n,l);}):l.push(n)),l}function $$1(n,l,u){return null==u||u.parentNode!==n?n.insertBefore(l,null):l==u&&null!=l.parentNode||n.insertBefore(l,u),l.nextSibling}function A(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type)return u;if(t>(null!=e?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&i==e.key&&o===e.type)return f;f++;}}return -1}function H$1(n,l,u,t,i){var o;for(o in u)"children"===o||"key"===o||o in l||T$1(n,o,null,u[o],t);for(o in l)i&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||T$1(n,o,l[o],u[o],t);}function I$1(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a$1.test(l)?u:u+"px";}function T$1(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||I$1(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||I$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t||n.addEventListener(l,o?z$1:j$1,o):n.removeEventListener(l,o?z$1:j$1,o);else if("dangerouslySetInnerHTML"!==l){if(i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&"rowSpan"!==l&&"colSpan"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u));}}function j$1(n){return this.l[n.type+!1](l$1.event?l$1.event(n):n)}function z$1(n){return this.l[n.type+!0](l$1.event?l$1.event(n):n)}function L$1(n,u,t,i,o,r,f,e,c,s){var a,p,y,d,_,g,m,w,x,C,S,$,A,H,I,T=u.type;if(void 0!==u.constructor)return null;null!=t.__h&&(c=t.__h,e=u.__e=t.__e,u.__h=null,r=[e]),(a=l$1.__b)&&a(u);try{n:if("function"==typeof T){if(w=u.props,x=(a=T.contextType)&&i[a.__c],C=a?x?x.props.value:a.__:i,t.__c?m=(p=u.__c=t.__c).__=p.__E:("prototype"in T&&T.prototype.render?u.__c=p=new T(w,C):(u.__c=p=new b$1(w,C),p.constructor=T,p.render=B$2),x&&x.sub(p),p.props=w,p.state||(p.state={}),p.context=C,p.__n=i,y=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=T.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=v$1({},p.__s)),v$1(p.__s,T.getDerivedStateFromProps(w,p.__s))),d=p.props,_=p.state,p.__v=u,y)null==T.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else {if(null==T.getDerivedStateFromProps&&w!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(w,C),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(w,p.__s,C)||u.__v===t.__v)){for(u.__v!==t.__v&&(p.props=w,p.state=p.__s,p.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),S=0;S<p._sb.length;S++)p.__h.push(p._sb[S]);p._sb=[],p.__h.length&&f.push(p);break n}null!=p.componentWillUpdate&&p.componentWillUpdate(w,p.__s,C),null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(d,_,g);});}if(p.context=C,p.props=w,p.__P=n,p.__e=!1,$=l$1.__r,A=0,"prototype"in T&&T.prototype.render){for(p.state=p.__s,p.__d=!1,$&&$(u),a=p.render(p.props,p.state,p.context),H=0;H<p._sb.length;H++)p.__h.push(p._sb[H]);p._sb=[];}else do{p.__d=!1,$&&$(u),a=p.render(p.props,p.state,p.context),p.state=p.__s;}while(p.__d&&++A<25);p.state=p.__s,null!=p.getChildContext&&(i=v$1(v$1({},i),p.getChildContext())),y||null==p.getSnapshotBeforeUpdate||(g=p.getSnapshotBeforeUpdate(d,_)),P(n,h$1(I=null!=a&&a.type===k$1&&null==a.key?a.props.children:a)?I:[I],u,t,i,o,r,f,e,c,s),p.base=u.__e,u.__h=null,p.__h.length&&f.push(p),m&&(p.__E=p.__=null);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=N(t.__e,u,t,i,o,r,f,c,s);(a=l$1.diffed)&&a(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$1.__e(n,u,t);}}function M(n,u,t){for(var i=0;i<t.length;i++)O(t[i],t[++i],t[++i]);l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function N(l,u,t,i,o,r,f,e,s){var a,v,y,d=t.props,_=u.props,k=u.type,b=0;if("svg"===k&&(o=!0),null!=r)for(;b<r.length;b++)if((a=r[b])&&"setAttribute"in a==!!k&&(k?a.localName===k:3===a.nodeType)){l=a,r[b]=null;break}if(null==l){if(null===k)return document.createTextNode(_);l=o?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,_.is&&_),r=null,e=!1;}if(null===k)d===_||e&&l.data===_||(l.data=_);else {if(r=r&&n.call(l.childNodes),v=(d=t.props||c$1).dangerouslySetInnerHTML,y=_.dangerouslySetInnerHTML,!e){if(null!=r)for(d={},b=0;b<l.attributes.length;b++)d[l.attributes[b].name]=l.attributes[b].value;(y||v)&&(y&&(v&&y.__html==v.__html||y.__html===l.innerHTML)||(l.innerHTML=y&&y.__html||""));}if(H$1(l,_,d,o,e),y)u.__k=[];else if(P(l,h$1(b=u.props.children)?b:[b],u,t,i,o&&"foreignObject"!==k,r,f,r?r[0]:t.__k&&g$2(t,0),e,s),null!=r)for(b=r.length;b--;)null!=r[b]&&p$1(r[b]);e||("value"in _&&void 0!==(b=_.value)&&(b!==l.value||"progress"===k&&!b||"option"===k&&b!==d.value)&&T$1(l,"value",b,d.value,!1),"checked"in _&&void 0!==(b=_.checked)&&b!==l.checked&&T$1(l,"checked",b,d.checked,!1));}return l}function O(n,u,t){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,t);}}function q$1(n,u,t){var i,o;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||O(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,u);}i.base=i.__P=null,n.__c=void 0;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&q$1(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||p$1(n.__e),n.__=n.__e=n.__d=void 0;}function B$2(n,l,u){return this.constructor(n,u)}function D$1(u,t,i){var o,r,f,e;l$1.__&&l$1.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],L$1(t,u=(!o&&i||t).__k=y(k$1,null,[u]),r||c$1,c$1,void 0!==t.ownerSVGElement,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),M(f,u,e);}n=s$1.slice,l$1={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$1=0,b$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v$1({},this.state),"function"==typeof n&&(n=n(v$1({},u),this.props)),n&&v$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),w$2(this));},b$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),w$2(this));},b$1.prototype.render=k$1,i$1=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$1=function(n,l){return n.__v.__b-l.__v.__b},x.__r=0;

var t,r,u,i,o=0,f=[],c=[],e=l$1.__b,a=l$1.__r,v=l$1.diffed,l=l$1.__c,m=l$1.unmount;function d(t,u){l$1.__h&&l$1.__h(r,t,o||u),o=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c}),i.__[t]}function h(n){return o=1,s(B$1,n)}function s(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):B$1(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function p(u,i){var o=d(t++,3);!l$1.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__H.__h.push(o));}function _(n){return o=5,F$1(function(){return {current:n}},[])}function F$1(n,r){var u=d(t++,7);return z(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function b(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w$1),t.__H.__h=[];}catch(r){t.__H.__h=[],l$1.__e(r,t.__v);}}l$1.__b=function(n){r=null,e&&e(n);},l$1.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0;})):(i.__h.forEach(k),i.__h.forEach(w$1),i.__h=[],t=0)),u=r;},l$1.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===l$1.requestAnimationFrame||((i=l$1.requestAnimationFrame)||j)(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c;})),u=r=null;},l$1.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k),t.__h=t.__h.filter(function(n){return !n.__||w$1(n)});}catch(u){r.some(function(n){n.__h&&(n.__h=[]);}),r=[],l$1.__e(u,t.__v);}}),l&&l(t,r);},l$1.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k(n);}catch(n){r=n;}}),u.__H=void 0,r&&l$1.__e(r,u.__v));};var g$1="function"==typeof requestAnimationFrame;function j(n){var t,r=function(){clearTimeout(u),g$1&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);g$1&&(t=requestAnimationFrame(r));}function k(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function w$1(n){var t=r;n.__c=n.__(),r=t;}function z(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function B$1(n,t){return "function"==typeof t?t(n):t}

function convertToNumeric(amountStr) {
  // Remove commas
  let amount = amountStr.replace(/,/g, "");

  // Convert words like 'billion', 'million' to numeric values
  let multiplier = 1;
  if (amount.match(/billion/i)) {
    multiplier = 1e9;
  } else if (amount.match(/million/i)) {
    multiplier = 1e6;
  } else if (amount.match(/thousand/i)) {
    multiplier = 1e3;
  }
  amount = amount.replace(/(billion|million|thousand)/i, "").trim();

  // Parse the numeric value
  return parseFloat(amount) * multiplier;
}

// https://www.xe.com/symbols/
function getSymbol(currency) {
  return {
    EUR: "€",
    USD: "$",
    CNY: "¥",
    JPY: "¥",
    AFN: "؋",
    EGP: "£",
    PHP: "₱",
    CUP: "₱"
  }[currency];
}
function convertTo2Float(num) {
  return Math.floor(num * 100) / 100;
}
function extractAmount(rawText) {
  // Regex for currencies starting with a symbol, including commas
  let symbolRegex = /([\$¥£€₩](\d{1,3}(?:,\d{3})*(?:\.\d+)?))/;
  // Regex for currencies ending with a word, including large number words
  let wordRegex = /((\d{1,3}(?:,\d{3})*\s?(?:billion|million|thousand)?)\s(euros|euro|dollars|元|yen|yuan|pounds))/i;
  let symbolMatch = rawText.match(symbolRegex);
  let wordMatch = rawText.match(wordRegex);
  let amountMatched = symbolMatch ? symbolMatch[2] : wordMatch ? wordMatch[2] : null;
  let textMatched = symbolMatch ? symbolMatch[0] : wordMatch ? wordMatch[0] : null;
  console.log("SymbolMatch: ", symbolMatch);
  console.log("WordMatch: ", wordMatch);
  console.log("AmountMatch: ", amountMatched);
  let currency = "USD";
  if (textMatched.match(/(dollar|dollars|\$)/i)) {
    currency = "USD";
  } else if (textMatched.match(/(euro|euros|€)/i)) {
    currency = "EUR";
  } else if (textMatched.match(/(yen|¥)/i)) {
    currency = "JPY";
  } else if (textMatched.match(/(₩)/i)) {
    currency = "KRW";
  } else if (textMatched.match(/(元|yuan)/i)) {
    currency = "CNY";
  }
  return {
    currency,
    amount: convertToNumeric(amountMatched)
  };
}

const ITEM_VALUE = [{
  name: "iPhone 15",
  id: "iphone",
  value: 5999
}, {
  id: "egg",
  name: "Egg(s)",
  value: 3
}, {
  id: "apple",
  name: "Apple(s)",
  value: 2
}, {
  id: "paper",
  name: "Papers",
  value: 0.1
}];
function estimateValue(amount) {
  let res = {};
  for (let i = 0; i < ITEM_VALUE.length; i++) {
    let item = ITEM_VALUE[i];
    if (item.value < amount) {
      res = {
        name: item.name,
        count: Math.floor(amount / item.value),
        id: item.id
      };
      break;
    }
  }
  return res;
}

function PhoneIcon () {
  return y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 -960 960 960",
    className: "cr-fill-themed",
    width: "24"
  }, y("path", {
    d: "M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z"
  }));
}

function CoffeeIcon () {
  return y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 -960 960 960",
    width: "24",
    className: "cr-fill-themed"
  }, y("path", {
    d: "M480-120q-117 0-198.5-81.5T200-400q0-77 25.5-155t66-141.5Q332-760 382-800t98-40q49 0 98.5 40t90 103.5Q709-633 734.5-555T760-400q0 117-81.5 198.5T480-120Zm0-80q83 0 141.5-58.5T680-400q0-57-19.5-120t-49-116.5Q582-690 547-725t-67-35q-31 0-66.5 35t-65 88.5Q319-583 299.5-520T280-400q0 83 58.5 141.5T480-200Zm40-40q17 0 28.5-11.5T560-280q0-17-11.5-28.5T520-320q-50 0-85-35t-35-85q0-17-11.5-28.5T360-480q-17 0-28.5 11.5T320-440q0 83 58.5 141.5T520-240Zm-40-240Z"
  }));
}

function g(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function w(n){this.props=n;}(w.prototype=new b$1).isPureReactComponent=!0,w.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var R=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),R&&R(n);};var T=l$1.__e;l$1.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);T(n,t,e,r);};var I=l$1.unmount;function L(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),n.__c.__H=null),null!=(n=g({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return L(n,t,e)})),n}function U(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return U(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n}function D(){this.__u=0,this.t=null,this.__b=null;}function F(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function V(){this.u=null,this.o=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),I&&I(n);},(D.prototype=new b$1).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=F(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=U(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate();}},c=!0===t.__h;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i);},D.prototype.componentWillUnmount=function(){this.t=[];},D.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=L(this.__b,r,o.__O=o.__P);}this.__b=null;}var i=e.__a&&y(k$1,null,n.fallback);return i&&(i.__h=null),[y(k$1,null,e.__a?null:n.children),i]};var W=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};(V.prototype=new b$1).__a=function(n){var t=this,e=F(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),W(t,n,r)):u();};e?e(o):o();}},V.prototype.render=function(n){this.u=null,this.o=new Map;var t=S(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){W(n,e,t);});};var B="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,H=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Z=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Y=/[A-Z0-9]/g,$="undefined"!=typeof document,q=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};b$1.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(b$1.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n});}});});var K=l$1.event;function Q(){}function X(){return this.cancelBubble}function nn(){return this.defaultPrevented}l$1.event=function(n){return K&&(n=K(n)),n.persist=Q,n.isPropagationStopped=X,n.isDefaultPrevented=nn,n.nativeEvent=n};var en={enumerable:!1,configurable:!0,get:function(){return this.class}},rn=l$1.vnode;l$1.vnode=function(n){"string"==typeof n.type&&function(n){var t=n.props,e=n.type,u={};for(var o in t){var i=t[o];if(!("value"===o&&"defaultValue"in t&&null==i||$&&"children"===o&&"noscript"===e||"class"===o||"className"===o)){var l=o.toLowerCase();"defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===i?i="":"ondoubleclick"===l?o="ondblclick":"onchange"!==l||"input"!==e&&"textarea"!==e||q(t.type)?"onfocus"===l?o="onfocusin":"onblur"===l?o="onfocusout":Z.test(o)?o=l:-1===e.indexOf("-")&&H.test(o)?o=o.replace(Y,"-$&").toLowerCase():null===i&&(i=void 0):l=o="oninput","oninput"===l&&u[o=l]&&(o="oninputCapture"),u[o]=i;}}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=S(t.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value);})),"select"==e&&null!=u.defaultValue&&(u.value=S(t.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value;})),t.class&&!t.className?(u.class=t.class,Object.defineProperty(u,"className",en)):(t.className&&!t.class||t.class&&t.className)&&(u.class=u.className=t.className),n.props=u;}(n),n.$$typeof=B,rn&&rn(n);};var un=l$1.__r;l$1.__r=function(n){un&&un(n),n.__c;};var on=l$1.diffed;l$1.diffed=function(n){on&&on(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value);};

function Floating() {
  const floatingRef = _(null);
  const [popupVisible, setPopupVisible] = h(false);
  const [convertRes, setConvertRes] = h([]);
  const [rawAmount, setRawAmount] = h("$---");
  const updatePopupPosition = (x, y) => {
    if (floatingRef.current) {
      const popupWidth = 384;
      const popupHeight = 300;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // console.log("Window", `${windowWidth} x ${windowHeight}`);
      // console.log("Click", `${x} , ${y}`);
      // console.log("Floating", `${popupWidth} x ${popupHeight}`);

      // Check if the popup goes beyond the right edge of the window
      if (x + popupWidth > windowWidth) {
        x -= x + popupWidth - windowWidth;
      }

      // Check if the popup goes beyond the bottom edge of the window
      if (y + popupHeight > windowHeight) {
        y -= y + popupHeight - windowHeight;
      }
      floatingRef.current.style.left = `${x}px`;
      floatingRef.current.style.top = `${y}px`;
      floatingRef.current.style.display = "block";
      setPopupVisible(true);
    }
  };
  const hidePopup = () => {
    if (floatingRef.current) {
      floatingRef.current.style.display = "none";
      setPopupVisible(false);
    }
  };
  const itemValue = F$1(() => convertRes.length > 0 ? estimateValue(convertRes[0].amount) : null, [convertRes]);
  p(() => {
    const handleTextSelection = async e => {
      let selectedText = window.getSelection().toString();
      if (selectedText && e.target.id !== "cr_container") {
        const extractedAmount = extractAmount(selectedText);
        updatePopupPosition(e.clientX, e.clientY);
        if (rawAmount) {
          setRawAmount(`${getSymbol(extractedAmount.currency)}${extractedAmount.amount}`);
          const res = await chrome.runtime.sendMessage({
            type: "convert",
            amount: extractedAmount.amount,
            currency: extractedAmount.currency
          });
          setConvertRes(res["data"]);
        }
      }
    };
    const handleOutsideClick = e => {
      console.log(e.target);
      // Delay handling to ensure it doesn't conflict with the text selection
      setTimeout(() => {
        if (popupVisible && floatingRef.current && e.target.id !== "cr_container") {
          hidePopup();
        }
      }, 0);
    };
    document.addEventListener("mouseup", handleTextSelection);
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("mouseup", handleTextSelection);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [popupVisible]);
  return y("div", {
    ref: floatingRef,
    id: "cr_inner",
    className: "cr-z-[999] cr-text-slate-800 dark:cr-text-white cr-fixed cr-min-w-56 cr-max-w-sm cr-bg-slate-100 dark:cr-bg-slate-800 cr-rounded-lg cr-shadow-2xl cr-border-themed cr-border-solid cr-border-2",
    style: {
      display: "none"
    }
  }, y("div", {
    className: "cr-bg-themed cr-px-1 cr-justify-between p-4 cr-flex justify-between cr-items-center w-full h-12"
  }, y("div", {
    className: "cr-text-white cr-flex cr-items-center cr-space-x-1"
  }, "Current"), y("button", {
    onClick: hidePopup,
    className: "p-1"
  }, y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 -960 960 960",
    width: "24",
    className: "cr-fill-white"
  }, y("path", {
    d: "M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"
  })))), y("div", {
    className: "cr-p-2"
  }, y("div", {
    className: "cr-flex cr-justify-between items-center mb-4"
  }, y("span", {
    className: "cr-text-md cr-text-slate-400"
  }, rawAmount), y("select", {
    className: "cr-rounded-sm dark:cr-bg-slate-500"
  }, y("option", null, "CNY"))), y("div", {
    className: "cr-text-4xl cr-font-bold mb-2"
  }, convertRes.length > 0 ? `${getSymbol(convertRes[0].currency)}${Math.floor(convertRes[0].amount * 100) / 100}` : "---.--"), y("div", {
    className: "cr-bg-slate-200 dark:cr-bg-slate-500 cr-w-full cr-my-2 cr-h-[2px]"
  }), y("div", null, convertRes.slice(1).map(res => y("div", {
    className: "cr-flex cr-justify-between cr-px-1 cr-py-1"
  }, y("div", null, res.currency), y("div", null, convertTo2Float(res.amount))))), y("div", {
    className: "cr-bg-slate-200 dark:cr-bg-slate-500 cr-w-full cr-my-2 cr-h-[2px]"
  }), itemValue && y("div", {
    className: "mt-2"
  }, y("div", {
    className: "cr-text-sm cr-text-center cr-text-slate-500 dark:cr-text-gray-500"
  }, "Approximately equals to", y("span", {
    className: "cr-text-themed"
  }, ` ${itemValue.count} ${itemValue.name}`)), y("div", {
    className: "cr-flex cr-py-2 cr-justify-center"
  }, Array(Math.min(itemValue.count, 10)).fill(0).map(_ => ({
    egg: y(CoffeeIcon, null),
    coffee: y(CoffeeIcon, null),
    iphone: y(PhoneIcon, null),
    paper: y(CoffeeIcon, null)
  })[itemValue.id])))));
}

function installFloatingService() {
  const floatingContainer = document.createElement("div");
  const shadowRoot = floatingContainer.attachShadow({
    mode: "open"
  });
  floatingContainer.id = "cr_container";

  // Create a container inside the shadow root
  const shadowContainer = document.createElement("div");
  shadowRoot.appendChild(shadowContainer);
  D$1(y(Floating), shadowContainer);

  // Append the floatingContainer to the document body
  document.body.appendChild(floatingContainer);
  const link = document.createElement("link");
  link.href = chrome.runtime.getURL("css/popup.css");
  link.type = "text/css";
  link.rel = "stylesheet";
  shadowRoot.appendChild(link);
}
function main() {
  installFloatingService();
}

main();
