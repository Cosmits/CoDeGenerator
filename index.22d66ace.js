!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=NaN,o="[object Symbol]",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,a=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),p=Object.prototype.toString,v=Math.max,y=Math.min,b=function(){return d.Date.now()};function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&p.call(t)==o}(t))return i;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=f.test(t);return n||c.test(t)?a(t.slice(2),n?2:8):u.test(t)?i:+t}function h(t){var e=t;setTimeout((function(){e.style.cssText="height:auto; padding:0",e.style.cssText="height: "+Number(e.scrollHeight+7)+"px"}),0)}e=function(t,e,n){var i,o,r,u,f,c,a=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var n=i,r=o;return i=o=void 0,a=e,u=t.apply(r,n)}function h(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-a>=r}function T(){var t=b();if(h(t))return j(t);f=setTimeout(T,function(t){var n=e-(t-c);return s?y(n,r-(t-a)):n}(t))}function j(t){return f=void 0,d&&i?p(t):(i=o=void 0,u)}function x(){var t=b(),n=h(t);if(i=arguments,o=this,c=t,n){if(void 0===f)return function(t){return a=t,f=setTimeout(T,e),l?p(t):u}(c);if(s)return f=setTimeout(T,e),p(c)}return void 0===f&&(f=setTimeout(T,e)),u}return e=g(e)||0,m(n)&&(l=!!n.leading,r=(s="maxWait"in n)?v(g(n.maxWait)||0,e):r,d="trailing"in n?!!n.trailing:d),x.cancel=function(){void 0!==f&&clearTimeout(f),a=0,i=c=o=f=void 0},x.flush=function(){return void 0===f?u:j(b())},x},function(){const n=document.querySelector("textarea"),i=document.querySelector(".line-numbers");function o(){const t=n.value.split("\n");i.innerHTML="";for(let o=0;o<t.length;o++){var e=document.createElement("div");e.className="line-number",e.textContent="",i.appendChild(e),h(n)}}n.addEventListener("input",t(e)(o,50)),o()}()}();
//# sourceMappingURL=index.22d66ace.js.map
