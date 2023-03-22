!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).window=t.window||{})}(this,(function(t){"use strict";const e=(t,...s)=>{const n=s.length;for(let i=0;i<n;i++){const n=s[i]||{};Object.entries(n).forEach((([s,n])=>{const i=Array.isArray(n)?[]:{};var o;t[s]||Object.assign(t,{[s]:i}),"object"==typeof(o=n)&&null!==o&&o.constructor===Object&&"[object Object]"===Object.prototype.toString.call(o)?Object.assign(t[s],e(i,n)):Array.isArray(n)?Object.assign(t,{[s]:[...n]}):Object.assign(t,{[s]:n})}))}return t},s=function(t,e){return t.split(".").reduce(((t,e)=>"object"==typeof t?t[e]:void 0),e)};class n{constructor(t={}){Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"events",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),this.setOptions(t);for(const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))t.startsWith("on")&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}setOptions(t){this.options=t?e({},this.constructor.defaults,t):{};for(const[t,e]of Object.entries(this.option("on")||{}))this.on(t,e)}option(t,...e){let n=s(t,this.options);return n&&"function"==typeof n&&(n=n.call(this,this,...e)),n}optionFor(t,e,n,...i){let o=s(e,t);var r;"string"!=typeof(r=o)||isNaN(r)||isNaN(parseFloat(r))||(o=parseFloat(o)),"true"===o&&(o=!0),"false"===o&&(o=!1),o&&"function"==typeof o&&(o=o.call(this,this,t,...i));let a=s(e,this.options);return a&&"function"==typeof a?o=a.call(this,this,t,...i,o):void 0===o&&(o=a),void 0===o?n:o}cn(t){const e=this.options.classes;return e&&e[t]||""}localize(t,e=[]){t=String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g,((t,e,s)=>{let n="";return s?n=this.option(`${e[0]+e.toLowerCase().substring(1)}.l10n.${s}`):e&&(n=this.option(`l10n.${e}`)),n||(n=t),n}));for(let s=0;s<e.length;s++)t=t.split(e[s][0]).join(e[s][1]);return t=t.replace(/\{\{(.*?)\}\}/g,((t,e)=>e))}on(t,e){let s=[];"string"==typeof t?s=t.split(" "):Array.isArray(t)&&(s=t),this.events||(this.events=new Map),s.forEach((t=>{let s=this.events.get(t);s||(this.events.set(t,[]),s=[]),s.includes(e)||s.push(e),this.events.set(t,s)}))}off(t,e){let s=[];"string"==typeof t?s=t.split(" "):Array.isArray(t)&&(s=t),s.forEach((t=>{const s=this.events.get(t);if(Array.isArray(s)){const t=s.indexOf(e);t>-1&&s.splice(t,1)}}))}emit(t,...e){[...this.events.get(t)||[]].forEach((t=>t(this,...e))),"*"!==t&&this.emit("*",t,...e)}}Object.defineProperty(n,"version",{enumerable:!0,configurable:!0,writable:!0,value:"5.0.10"}),Object.defineProperty(n,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{}});class i extends n{constructor(t,e){super(e),Object.defineProperty(this,"instance",{enumerable:!0,configurable:!0,writable:!0,value:t})}attach(){}detach(){}}class o extends i{constructor(){super(...arguments),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"pins",{enumerable:!0,configurable:!0,writable:!0,value:[]})}onTransform(t){for(const s of this.pins){if(!((e=s)&&null!==e&&e instanceof Element&&"nodeType"in e))continue;const{fitWidth:n,fitHeight:i,fullWidth:o,fullHeight:r}=t.contentRect,a=s.dataset.x||"",l=s.dataset.y||"";let c=0,f=0;c=a.includes("%")?n*(parseFloat(a)/100):parseFloat(a)/o*n,c-=.5*n,f=l.includes("%")?i*(parseFloat(l)/100):parseFloat(l)/r*i,f-=.5*i;const p=new DOMPoint(c,f).matrixTransform(t.getMatrix());s.style.transform=`translate3d(${p.x||0}px, ${p.y||0}px, 0)`}var e}attach(){this.pins=Array.from(this.instance.container.querySelectorAll("[data-panzoom-pin]")),this.pins.length&&(this.instance.container.classList.add("has-pins"),this.instance.on("afterTransform",this.onTransform))}detach(){this.pins=[],this.instance.container.classList.remove("has-pins"),this.instance.off("afterTransform",this.onTransform)}}Object.defineProperty(o,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{}}),t.Pins=o}));
