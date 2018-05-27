module.exports=__NEXT_REGISTER_PAGE("/_error",function(){var e=webpackJsonp([1],{193:function(e,r,t){e.exports=t(194)},194:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:true});var n=t(0);var a=i(n);var o=t(195);function i(e){return e&&e.__esModule?e:{default:e}}function u(){return a.default.createElement("div",{className:"c-page-error"},a.default.createElement("div",{className:"container"},a.default.createElement("h1",null,"404"),a.default.createElement("p",null,"This page could not be found"),a.default.createElement(o.Link,{route:"home"},a.default.createElement("a",{className:"c-button -a"},"Go to Resource Watch"))))}r.default=u},195:function(e,r,t){"use strict";var n=t(196);var a=n();a.add("home","/","home");e.exports=a},196:function(e,r,t){"use strict";var n="src/index.js";var a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};var o=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(r,t,n){t&&e(r.prototype,t);n&&e(r,n);return r}}();var i=t(197);var u=h(i);var f=t(0);var l=h(f);var s=t(65);var c=t(198);var p=h(c);var v=t(210);var d=h(v);function h(e){return e&&e.__esModule?e:{default:e}}function y(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true}):e[r]=t;return e}function m(e,r){var t={};for(var n in e){if(r.indexOf(n)>=0)continue;if(!Object.prototype.hasOwnProperty.call(e,n))continue;t[n]=e[n]}return t}function g(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}e.exports=function(e){return new b(e)};var b=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.Link,n=void 0===t?p.default:t,a=r.Router,o=void 0===a?d.default:a;g(this,e);this.routes=[];this.Link=this.getLink(n);this.Router=this.getRouter(o)}o(e,[{key:"add",value:function e(r,t,n){var a=void 0;if(r instanceof Object){a=r;r=a.name}else{if("/"===r[0]){n=t;t=r;r=null}a={name:r,pattern:t,page:n}}if(this.findByName(r))throw new Error('Route "'+r+'" already exists');this.routes.push(new w(a));return this}},{key:"findByName",value:function e(r){if(r)return this.routes.filter(function(e){return e.name===r})[0]}},{key:"match",value:function e(r){var t=(0,s.parse)(r,true);var n=t.pathname,o=t.query;return this.routes.reduce(function(e,r){if(e.route)return e;var t=r.match(n);if(!t)return e;return a({},e,{route:r,params:t,query:a({},o,t)})},{query:o,parsedUrl:t})}},{key:"findAndGetUrls",value:function e(r,t){var n=this.findByName(r);if(n)return{route:n,urls:n.getUrls(t),byName:true};var a=this.match(r),o=a.route,i=a.query;var u=o?o.getHref(i):r;var f={href:u,as:r};return{route:o,urls:f}}},{key:"getRequestHandler",value:function e(r,t){var n=this;var a=r.getRequestHandler();return function(e,o){var i=n.match(e.url),u=i.route,f=i.query,l=i.parsedUrl;u?t?t({req:e,res:o,route:u,query:f}):r.render(e,o,u.page,f):a(e,o,l)}}},{key:"getLink",value:function e(r){var t=this;var o=function e(o){var i=o.route,u=o.params,f=o.to,s=m(o,["route","params","to"]);var c=i||f;c&&Object.assign(s,t.findAndGetUrls(c,u).urls);return l.default.createElement(r,a({},s,{__source:{fileName:n,lineNumber:99}}))};return o}},{key:"getRouter",value:function e(r){var t=this;var n=function e(n){return function(e,a,o){var i=t.findAndGetUrls(e,a),u=i.byName,f=i.urls,l=f.as,s=f.href;return r[n](s,l,u?o:a)}};r.pushRoute=n("push");r.replaceRoute=n("replace");r.prefetchRoute=n("prefetch");return r}}]);return e}();var w=function(){function e(r){var t=r.name,n=r.pattern,a=r.page,o=void 0===a?t:a;g(this,e);if(!t&&!o)throw new Error('Missing page to render for route "'+n+'"');this.name=t;this.pattern=n||"/"+t;this.page=o.replace(/(^|\/)index$/,"").replace(/^\/?/,"/");this.regex=(0,u.default)(this.pattern,this.keys=[]);this.keyNames=this.keys.map(function(e){return e.name});this.toPath=u.default.compile(this.pattern)}o(e,[{key:"match",value:function e(r){var t=this.regex.exec(r);if(t)return this.valuesToParams(t.slice(1))}},{key:"valuesToParams",value:function e(r){var t=this;return r.reduce(function(e,r,n){if(void 0===r)return e;return Object.assign(e,y({},t.keys[n].name,decodeURIComponent(r)))},{})}},{key:"getHref",value:function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.page+"?"+x(r)}},{key:"getAs",value:function e(){var r=this;var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var n=this.toPath(t)||"/";var a=Object.keys(t);var o=a.filter(function(e){return-1===r.keyNames.indexOf(e)});if(!o.length)return n;var i=o.reduce(function(e,r){return Object.assign(e,y({},r,t[r]))},{});return n+"?"+x(i)}},{key:"getUrls",value:function e(r){var t=this.getAs(r);var n=this.getHref(r);return{as:t,href:n}}}]);return e}();var x=function e(r){return Object.keys(r).filter(function(e){return null!==r[e]&&void 0!==r[e]}).map(function(e){var t=r[e];Array.isArray(t)&&(t=t.join("/"));return[encodeURIComponent(e),encodeURIComponent(t)].join("=")}).join("&")}},197:function(e,r){e.exports=h;e.exports.parse=o;e.exports.compile=i;e.exports.tokensToFunction=u;e.exports.tokensToRegExp=d;var t="/";var n="./";var a=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function o(e,r){var o=[];var i=0;var u=0;var s="";var c=r&&r.delimiter||t;var p=r&&r.delimiters||n;var v=false;var d;while(null!==(d=a.exec(e))){var h=d[0];var y=d[1];var m=d.index;s+=e.slice(u,m);u=m+h.length;if(y){s+=y[1];v=true;continue}var g="";var b=e[u];var w=d[2];var x=d[3];var k=d[4];var E=d[5];if(!v&&s.length){var _=s.length-1;if(p.indexOf(s[_])>-1){g=s[_];s=s.slice(0,_)}}if(s){o.push(s);s="";v=false}var O=""!==g&&void 0!==b&&b!==g;var j="+"===E||"*"===E;var T="?"===E||"*"===E;var R=g||c;var A=x||k;o.push({name:w||i++,prefix:g,delimiter:R,optional:T,repeat:j,partial:O,pattern:A?l(A):"[^"+f(R)+"]+?"})}(s||u<e.length)&&o.push(s+e.substr(u));return o}function i(e,r){return u(o(e,r))}function u(e){var r=new Array(e.length);for(var t=0;t<e.length;t++)"object"===typeof e[t]&&(r[t]=new RegExp("^(?:"+e[t].pattern+")$"));return function(t,n){var a="";var o=n&&n.encode||encodeURIComponent;for(var i=0;i<e.length;i++){var u=e[i];if("string"===typeof u){a+=u;continue}var f=t?t[u.name]:void 0;var l;if(Array.isArray(f)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but got array');if(0===f.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var s=0;s<f.length;s++){l=o(f[s]);if(!r[i].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'"');a+=(0===s?u.prefix:u.delimiter)+l}continue}if("string"===typeof f||"number"===typeof f||"boolean"===typeof f){l=o(String(f));if(!r[i].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but got "'+l+'"');a+=u.prefix+l;continue}if(u.optional){u.partial&&(a+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be '+(u.repeat?"an array":"a string"))}return a}}function f(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function l(e){return e.replace(/([=!:$/()])/g,"\\$1")}function s(e){return e&&e.sensitive?"":"i"}function c(e,r){if(!r)return e;var t=e.source.match(/\((?!\?)/g);if(t)for(var n=0;n<t.length;n++)r.push({name:n,prefix:null,delimiter:null,optional:false,repeat:false,partial:false,pattern:null});return e}function p(e,r,t){var n=[];for(var a=0;a<e.length;a++)n.push(h(e[a],r,t).source);return new RegExp("(?:"+n.join("|")+")",s(t))}function v(e,r,t){return d(o(e,t),r,t)}function d(e,r,a){a=a||{};var o=a.strict;var i=false!==a.end;var u=f(a.delimiter||t);var l=a.delimiters||n;var c=[].concat(a.endsWith||[]).map(f).concat("$").join("|");var p="";var v=false;for(var d=0;d<e.length;d++){var h=e[d];if("string"===typeof h){p+=f(h);v=d===e.length-1&&l.indexOf(h[h.length-1])>-1}else{var y=f(h.prefix);var m=h.repeat?"(?:"+h.pattern+")(?:"+y+"(?:"+h.pattern+"))*":h.pattern;r&&r.push(h);h.optional?h.partial?p+=y+"("+m+")?":p+="(?:"+y+"("+m+"))?":p+=y+"("+m+")"}}if(i){o||(p+="(?:"+u+")?");p+="$"===c?"$":"(?="+c+")"}else{o||(p+="(?:"+u+"(?="+c+"))?");v||(p+="(?="+u+"|"+c+")")}return new RegExp("^"+p,s(a))}function h(e,r,t){if(e instanceof RegExp)return c(e,r);if(Array.isArray(e))return p(e,r,t);return v(e,r,t)}},198:function(e,r,t){e.exports=t(199)},199:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:true});var n=t(41);var a=T(n);var o=t(200);var i=T(o);var u=t(29);var f=T(u);var l=t(9);var s=T(l);var c=t(10);var p=T(c);var v=t(30);var d=T(v);var h=t(31);var y=T(h);var m=t(65);var g=t(0);var b=T(g);var w=t(11);var x=T(w);var k=t(202);var E=T(k);var _=t(28);var O=T(_);var j=t(16);function T(e){return e&&e.__esModule?e:{default:e}}var R=function(e){(0,y.default)(r,e);function r(e){var t;(0,s.default)(this,r);for(var n=arguments.length,a=Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];var i=(0,d.default)(this,(t=r.__proto__||(0,f.default)(r)).call.apply(t,[this,e].concat(a)));i.linkClicked=i.linkClicked.bind(i);i.formatUrls(e);return i}(0,p.default)(r,[{key:"componentWillReceiveProps",value:function e(r){this.formatUrls(r)}},{key:"linkClicked",value:function e(r){var t=this;if("A"===r.currentTarget.nodeName&&(r.metaKey||r.ctrlKey||r.shiftKey||r.nativeEvent&&2===r.nativeEvent.which))return;var n=this.props.shallow;var a=this.href,o=this.as;if(!A(a))return;var i=window.location.pathname;a=(0,m.resolve)(i,a);o=o?(0,m.resolve)(i,o):a;r.preventDefault();var u=this.props.scroll;null==u&&(u=o.indexOf("#")<0);var f=this.props.replace;var l=f?"replace":"push";O.default[l](a,o,{shallow:n}).then(function(e){if(!e)return;if(u){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){t.props.onError&&t.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var r=window.location.pathname;var t=(0,m.resolve)(r,this.href);O.default.prefetch(t)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(r){(0,i.default)(this.props.href)!==(0,i.default)(r.href)&&this.prefetch()}},{key:"formatUrls",value:function e(r){this.href=r.href&&"object"===(0,a.default)(r.href)?(0,m.format)(r.href):r.href;this.as=r.as&&"object"===(0,a.default)(r.as)?(0,m.format)(r.as):r.as}},{key:"render",value:function e(){var r=this.props.children;var t=this.href,n=this.as;"string"===typeof r&&(r=b.default.createElement("a",null,r));var a=g.Children.only(r);var o={onClick:this.linkClicked};!this.props.passHref&&("a"!==a.type||"href"in a.props)||(o.href=n||t);o.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=(0,_._rewriteUrlForNextExport)(o.href));return b.default.cloneElement(a,o)}}]);return r}(g.Component);R.propTypes=(0,E.default)({href:x.default.oneOfType([x.default.string,x.default.object]).isRequired,as:x.default.oneOfType([x.default.string,x.default.object]),prefetch:x.default.bool,replace:x.default.bool,shallow:x.default.bool,passHref:x.default.bool,scroll:x.default.bool,children:x.default.oneOfType([x.default.element,function(e,r){var t=e[r];"string"===typeof t&&N("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired});r.default=R;function A(e){var r=(0,m.parse)(e,false,true);var t=(0,m.parse)((0,j.getLocationOrigin)(),false,true);return!r.host||r.protocol===t.protocol&&r.host===t.host}var N=(0,j.execOnce)(j.warn)},200:function(e,r,t){e.exports={default:t(201),__esModule:true}},201:function(e,r,t){var n=t(1);var a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function e(r){return a.stringify.apply(a,arguments)}},202:function(e,r,t){Object.defineProperty(r,"__esModule",{value:true});r["default"]=y;var n=t(96);var a=l(n);var o=t(208);var i=l(o);var u=t(209);var f=l(u);function l(e){return e&&e.__esModule?e:{default:e}}function s(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true}):e[r]=t;return e}var c="​";var p="prop-types-exact: "+c;var v={};function d(e){return(0,a["default"])(e,s({},p,v))}function h(e){return e&&e[p]===v}function y(e){if(!(0,f["default"])(e))throw new TypeError("given propTypes must be an object");if((0,i["default"])(e,p)&&!h(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,a["default"])({},e,s({},p,d(function(){function r(r,t,n){var a=Object.keys(r).filter(function(r){return!(0,i["default"])(e,r)});if(a.length>0)return new TypeError(String(n)+": unknown props found: "+String(a.join(", ")));return null}return r}())))}e.exports=r["default"]},208:function(e,r,t){var n=t(100);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},209:function(e,r){Object.defineProperty(r,"__esModule",{value:true});var t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":t(e))&&!Array.isArray(e)}e.exports=r["default"]},210:function(e,r,t){e.exports=t(28)}},[193]);return{page:e.default}});