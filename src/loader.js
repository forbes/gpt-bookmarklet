!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){"use strict";var o=function(t,e){for(var n in e)t.style[n]=e[n]};t.exports={dom:function(t,e,n,r,i){var a=document.createElement(t);if(e&&o(a,e),n)for(var s in n)a[s]=n[s];return r&&a.appendChild(document.createTextNode(r)),i&&(a.onclick=i),a},nonEmptyString:function(t){return""!==t},setStyle:o}},function(t,e,n){"use strict";var o=n(0),r=void 0,i=void 0,a=void 0,s=void 0,d=void 0,p=function(){i.innerHTML=r.outerHTML,setTimeout(function(){u()},300)},l=function(t,e){var n=-1!==t.indexOf("Creative")?"https://admanager.google.com/7175#delivery/CreativeDetail/creativeId=":"https://admanager.google.com/7175#delivery/LineItemDetail/lineItemId=",r=o.dom("li"),i=void 0;return e.length>0?(i=o.dom("div",{},{class:"gpt-bm__slot-creative"},null),e.forEach(function(t){var e=o.dom("a",{},{href:""+(n+t)},""+t);i.appendChild(e)})):i=document.createTextNode("Not found. If an ad is playing try refresh."),r.appendChild(o.dom("b",{},{},""+t)),r.appendChild(i),r},c=function(t){return[t.getCreativeId()].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(t.getWrapperCreativeIds()||[])).filter(o.nonEmptyString)},f=function(){s.innerText="Retry",d.innerHTML="There is no video ad data available.",i.appendChild(s),i.appendChild(d)},u=function(){if(window.videojs){var t,e,n=(t=(window.videojs||{}).players,e=Object.keys(t),t[e[e.length-1]]);if(n){var r=!(!n.ima3||!n.ima3.adsManager)&&n.ima3.adsManager.getCurrentAd();if(r){var a=(r.getWrapperAdIds()||[]).filter(o.nonEmptyString),d=c(r),p=o.dom("div",{},{className:"gpt-bm__slot"}),u=o.dom("ul"),m=l("Line Item ID(s): ",a),g=l("Creative ID(s): ",d);s.innerText="Refresh",u.appendChild(m),u.appendChild(g),u.appendChild(s),p.appendChild(u),i.appendChild(p)}else f()}else f()}else f()};t.exports={initVideo:function(){return i=o.dom("div",{},{className:"gpt-bm__video"},""),r=o.dom("h2",{},{className:"gpt-bm__h2"},"Video Ad Info"),a=o.dom("button",{marginTop:"10px"},{className:"gpt-bm__btn gpt-bm__btn--rect-sm gpt-bm__btn--black"},"Click For Video Ad Info"),d=o.dom("p",{},{className:"gpt-bm__p--desc"},""),a.addEventListener("click",p),i.appendChild(r),i.appendChild(a),(s=o.dom("button",{marginTop:"10px"},{className:"gpt-bm__btn gpt-bm__btn--rect-sm gpt-bm__btn--black"},"Refresh")).addEventListener("click",p),i}}},function(t,e,n){"use strict";var o=n(0),r=function(t,e,n){return"https://www.google.com/dfp/"+t+"#delivery/"+e+"Detail/"+e+"Id="+n},i=function(t){var e=t.getName();return/^\/(\d+)\//.exec(e)[1]};t.exports={getDomId:function(t){return t.getSlotId().getDomId()},getClientAdIds:function(t){var e=t.getResponseInformation(),n=i(t),a={};return e&&e.creativeId?a["Creative ID"]=[o.dom("a",{},{href:r(n,"creative",e.creativeId),target:"_new"},e.creativeId)]:e&&e.sourceAgnosticCreativeId&&(a["Creative ID"]=[o.dom("a",{},{href:r(n,"creative",e.sourceAgnosticCreativeId),target:"_new"},e.sourceAgnosticCreativeId)]),e&&e.lineItemId?a["Line Item ID"]=[o.dom("a",{},{href:r(n,"lineItem",e.lineItemId),target:"_new"},e.lineItemId)]:e&&e.sourceAgnosticLineItemId&&(a["Line Item ID"]=[o.dom("a",{},{href:r(n,"lineItem",e.sourceAgnosticLineItemId),target:"_new"},e.sourceAgnosticLineItemId)]),a},getLink:r,getAccountName:i,getSlotSizes:function(t){for(var e=[],n=t.getSizes(),o=0;o<n.length;o++)"string"==typeof n[o]?e.push(n[o]):e.push(n[o].getWidth()+"x"+n[o].getHeight());return e}}},function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=n(2),i=n(0),a=n(1),s=void 0,d=void 0,p=function t(e){if(e.offsetParent){var n=t(e.offsetParent);return{left:n.left+e.offsetLeft,top:n.top+e.offsetTop}}return{left:e.offsetLeft,top:e.offsetTop}},l=function(t){var e=i.dom("button",{},{className:"gpt-bm__btn gpt-bm__btn--rect-sm gpt-bm__btn--black"},"Swap Side",m),n=i.dom("button",{},{className:"gpt-bm__btn gpt-bm__btn--rect-sm gpt-bm__btn--black"},"Refresh",f),o=i.dom("button",{},{className:"gpt-bm__btn gpt-bm__btn--circle gpt-bm__btn--black"}," X ",c),r=i.dom("div",{},{className:"gpt-bm__buttons"});t?r.append(e,n,o):r.append(o),d.appendChild(r)},c=function(){var t=document.getElementById("ad-inspector");document.body.removeChild(t),document.body.removeChild(s)},f=function(){for(;d.hasChildNodes();)d.removeChild(d.lastChild);[].forEach.call(s.querySelectorAll(".gpt-bm__highlight"),function(t){s.removeChild(t)}),b()},u=function(t){var e=t.getTargetingMap();e.Sizes=r.getSlotSizes(t),e=Object.assign(e,r.getClientAdIds(t));var n=i.dom("div",{},{className:"gpt-bm__slot"}),o="("+t.getSlotId().getName()+")",a=t.getSlotElementId(),l=i.dom("h3",{},{className:"gpt-bm__h3"},a);l.append(i.dom("span",{},{},o));var c=g(e);if(null!=document.getElementById(r.getDomId(t))){var f=document.getElementById(r.getDomId(t)),u=f.querySelector("iframe")||f,m=i.dom("div",function(t){var e=p(t);for(var n in e)e[n]=Math.max(0,e[n]-10)+"px";return e.width=Math.min(document.width||document.body.offsetWidth,t.offsetWidth+20)+"px",e.height=Math.min(document.height||document.body.offsetHeight,t.offsetHeight+20)+"px",e}(u),{className:"gpt-bm__highlight"});s.appendChild(m);n.onclick=function(){var t;[].forEach.call(s.querySelectorAll(".gpt-bm__highlight"),function(t){t.classList.remove("gpt-bm__highlight--visible")}),m.classList.add("gpt-bm__highlight--visible"),t=p(m).top,window.scroll(0,t-60)}}n.appendChild(l),n.appendChild(c),d.appendChild(n)},m=function(){d.classList.contains("gpt-bm__wrapper--left")?d.classList.remove("gpt-bm__wrapper--left"):d.classList.add("gpt-bm__wrapper--left")},g=function(t){var e=i.dom("ul");for(var n in t){var r=i.dom("b",{},{},n+": "),a=i.dom("li",{},{});a.appendChild(r);for(var s=0,d=(t[n]||[]).length;s<d;s++)if("object"==o(t[n][s]))a.appendChild(t[n][s]),s!=d-1&&a.appendChild(document.createTextNode(", "));else{var p=t[n][s].length;s!=d-1&&(""===t[n][s].charAt(p-1)&&","===t[n][s].charAt(p-2)?t[n][s]+="":""!=t[n][s]&&(t[n][s]+=", ")),a.appendChild(document.createTextNode(t[n][s]))}e.appendChild(a)}return e},b=function(){if(window.googletag&&googletag.pubads){var t=googletag.pubads().getSlots(),e=googletag.pubads().getTargetingKeys(),n=[];l(!0),d.appendChild(i.dom("img",{},{className:"gpt-bm__forbes-logo",src:"https://i.forbesimg.com/assets/images/forbes-ad-inspector.png"})),d.appendChild(i.dom("h1",{},{className:"gpt-bm__h1"},"Ad Inspector")),d.appendChild(a.initVideo()),d.appendChild(i.dom("h2",{},{className:"gpt-bm__h2"},"Page Level Targeting"));for(var o=0;o<e.length;o++)n[e[o]]=googletag.pubads().getTargeting(e[o]);d.appendChild(g(n)),d.appendChild(i.dom("h2",{},{className:"gpt-bm__h2"},"Slot Level Targeting"));for(var r=0;r<t.length;r++){var s=t[r];u(s)}}else l(!1),d.appendChild(i.dom("h1",{},{className:"gpt-bm__h1"},"No GPT Ads Found"))};t.exports={contentInit:b,structureInit:function(){s=i.dom("div",{},{className:"gpt-bm"}),d=i.dom("div",{},{className:"gpt-bm__wrapper"}),s.append(d),document.body.appendChild(s)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,n){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),d=null,p=0,l=[],c=n(4);function f(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(v(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(v(o.parts[a],e));i[o.id]={id:o.id,refs:1,parts:s}}}}function u(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function m(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,r)}}function g(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function b(t){var e=document.createElement("style");return t.attrs.type="text/css",h(e,t.attrs),m(t,e),e}function h(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function v(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var a=p++;n=d||(d=b(e)),o=x.bind(null,n,a,!1),r=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",h(e,t.attrs),m(t,e),e}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=c(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),r=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),o=function(t,e){var n=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){g(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=u(t,e);return f(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var a=n[r];(s=i[a.id]).refs--,o.push(s)}t&&f(u(t,e),e);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete i[s.id]}}}};var _,y=(_=[],function(t,e){return _[t]=e,_.filter(Boolean).join("\n")});function x(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,'.gpt-bm {}\n.gpt-bm__wrapper {\n\tbackground: #fff;\n\tborder-radius: 10px;\n\tborder: 5px solid #666;\n\tbottom: 10px;\n\toverflow: auto;\n\tpadding: 10px 0;\n\tposition: fixed;\n\tright: 10px;\n\ttop: 10px;\n\twidth: 410px;\n\tz-index: 10000000000;\n}\n.gpt-bm__wrapper--left {\n\tleft: 10px;\n\tright: auto;\n}\n.gpt-bm__forbes-logo {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n}\n/* Fonts */\n.gpt-bm__h1,\n.gpt-bm__h2,\n.gpt-bm__h3,\n.gpt-bm li,\n.gpt-bm__btn {\n\tfont-family: Avenir, "Noto Sans", "Droid Sans", "Helvetica Neue", Helvetica, Arial;\n\tfont-weight: normal;\n}\n/* Buttons */\n.gpt-bm__buttons {\n\talign-items: center;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tpadding: 0 10px;\n\tposition: absolute;\n\tright: 0;\n\ttop: 5px;\n}\n.gpt-bm__btn {\n\talign-items: center;\n\tborder-radius: 5px;\n\tborder: none;\n\tbox-sizing: border-box;\n\tcursor: pointer;\n\tdisplay: inline-flex;\n\tfont-size: 0.875rem;\n\tfont-weight: bold;\n\tjustify-content: center;\n\tline-height: 1;\n\tmargin-left: 10px;\n\ttransition: all 200ms ease;\n}\n.gpt-bm__btn.gpt-bm__btn--rect-lg {\n\tpadding: 1.5em 1em;\n}\n.gpt-bm__btn.gpt-bm__btn--rect-sm {\n\tpadding: 0.75em 1em;\n}\n.gpt-bm__btn.gpt-bm__btn--square {\n\twidth: 45px;\n\theight: 45px;\n\tpadding: 1.1em 1em;\n}\n.gpt-bm__btn.gpt-bm__btn--circle {\n  width: 2rem;\n\theight: 2rem;\n\tborder-radius: 50%;\n}\n.gpt-bm__btn.gpt-bm__btn--black {\n  background-color: #fff;\n  border: 2px solid #000;\n\tcolor: #000;\n}\n.gpt-bm__btn:hover {\n\tbox-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n}\n/* Video */\n.gpt-bm__video {\n\twidth: 100%;\n}\n.gpt-bm__p--desc {\n\tdisplay: inline;\n\tpadding-left: 5px;\n}\n/* Slots */\n.gpt-bm__slot {\n\tcursor: pointer;\n\tpadding: 10px;\n}\n.gpt-bm__slot:hover {\n\tbackground: white;\n\tborder-radius: 10px;\n}\n.gpt-bm__slot a {\n\tcolor: #003891;\n}\n.gpt-bm__slot-creative a {\n\tdisplay: block;\n}\n/* Headers */\n.gpt-bm__h1 {\n\tfont-size: 40px;\n\tline-height: 64px;\n\tborder-bottom: 1px solid black;\n\tmargin: 30px 10px 0;\n}\n.gpt-bm__h2 {\n\tfont-size: 32px;\n\tline-height: 51.2px;\n\tmargin-top: 10px;\n\tpadding-left: 10px;\n}\n.gpt-bm__h3 {\n\tborder-top-left-radius: 5px;\n\tborder-top-right-radius: 5px;\n\tbackground: #666;\n\tcolor: #fff;\n\tfont-size: 24px;\n\tline-height: 38.4px;\n\tpadding: 0 10px;\n}\n.gpt-bm__h3 span {\n\tfont-size: 12px;\n\tmargin-left: 10px;\n}\n/* Highlights */\n.gpt-bm__highlight {\n\tbackground: rgba(200, 200, 200, 0.5);\n\tdisplay: none;\n\tborder-radius: 10px;\n\tposition: absolute;\n\tz-index: 2;\n}\n.gpt-bm__highlight--visible {\n\tdisplay: block;\n}\n/* Page level */\n.gpt-bm ul {\n\tborder: 1px solid #666;\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n\tmargin: 0 10px;\n\tpadding: 5px;\n}\n.gpt-bm .gpt-bm__slot ul {\n\tmargin: 0;\n}\n.gpt-bm li {\n\tfont-size: 16px;\n\tline-height: 25.6px;\n\tword-wrap: break-word;\n}\n.gpt-bm li b {\n\tfont-weight: bold;\n}\n',""])},function(t,e,n){var o=n(7);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(5)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){"use strict";n(8);var o=n(3);o.structureInit(),o.contentInit()}]);