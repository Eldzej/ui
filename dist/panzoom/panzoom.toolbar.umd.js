!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).window=t.window||{})}(this,(function(t){"use strict";const e=(t,...i)=>{const n=i.length;for(let o=0;o<n;o++){const n=i[o]||{};Object.entries(n).forEach((([i,n])=>{const o=Array.isArray(n)?[]:{};var s;t[i]||Object.assign(t,{[i]:o}),"object"==typeof(s=n)&&null!==s&&s.constructor===Object&&"[object Object]"===Object.prototype.toString.call(s)?Object.assign(t[i],e(o,n)):Array.isArray(n)?Object.assign(t,{[i]:[...n]}):Object.assign(t,{[i]:n})}))}return t},i=function(t,e){return t.split(".").reduce(((t,e)=>"object"==typeof t?t[e]:void 0),e)};class n{constructor(t={}){Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"events",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),this.setOptions(t);for(const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))t.startsWith("on")&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}setOptions(t){this.options=t?e({},this.constructor.defaults,t):{};for(const[t,e]of Object.entries(this.option("on")||{}))this.on(t,e)}option(t,...e){let n=i(t,this.options);return n&&"function"==typeof n&&(n=n.call(this,this,...e)),n}optionFor(t,e,n,...o){let s=i(e,t);var a;"string"!=typeof(a=s)||isNaN(a)||isNaN(parseFloat(a))||(s=parseFloat(s)),"true"===s&&(s=!0),"false"===s&&(s=!1),s&&"function"==typeof s&&(s=s.call(this,this,t,...o));let r=i(e,this.options);return r&&"function"==typeof r?s=r.call(this,this,t,...o,s):void 0===s&&(s=r),void 0===s?n:s}cn(t){const e=this.options.classes;return e&&e[t]||""}localize(t,e=[]){t=String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g,((t,e,i)=>{let n="";return i?n=this.option(`${e[0]+e.toLowerCase().substring(1)}.l10n.${i}`):e&&(n=this.option(`l10n.${e}`)),n||(n=t),n}));for(let i=0;i<e.length;i++)t=t.split(e[i][0]).join(e[i][1]);return t=t.replace(/\{\{(.*?)\}\}/g,((t,e)=>e))}on(t,e){let i=[];"string"==typeof t?i=t.split(" "):Array.isArray(t)&&(i=t),this.events||(this.events=new Map),i.forEach((t=>{let i=this.events.get(t);i||(this.events.set(t,[]),i=[]),i.includes(e)||i.push(e),this.events.set(t,i)}))}off(t,e){let i=[];"string"==typeof t?i=t.split(" "):Array.isArray(t)&&(i=t),i.forEach((t=>{const i=this.events.get(t);if(Array.isArray(i)){const t=i.indexOf(e);t>-1&&i.splice(t,1)}}))}emit(t,...e){[...this.events.get(t)||[]].forEach((t=>t(this,...e))),"*"!==t&&this.emit("*",t,...e)}}Object.defineProperty(n,"version",{enumerable:!0,configurable:!0,writable:!0,value:"5.0.9"}),Object.defineProperty(n,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{}});class o extends n{constructor(t,e){super(e),Object.defineProperty(this,"instance",{enumerable:!0,configurable:!0,writable:!0,value:t})}attach(){}detach(){}}const s={display:["zoomIn","zoomOut","toggle1to1","rotateCCW","rotateCW","flipX","flipY","reset","toggleFS"],items:{panLeft:{icon:'<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',change:{panX:-100}},panRight:{icon:'<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',change:{panX:100}},panUp:{icon:'<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',change:{panY:-100}},panDown:{icon:'<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',change:{panY:100}},zoomIn:{icon:'<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',action:"zoomIn"},zoomOut:{icon:'<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',action:"zoomOut"},toggle1to1:{icon:'<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',action:"toggleZoom"},toggleZoom:{icon:'<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',action:"toggleZoom"},iterateZoom:{icon:'<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',action:"iterateZoom"},rotateCCW:{icon:'<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',action:"rotateCCW"},rotateCW:{icon:'<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',action:"rotateCW"},flipX:{icon:'<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',action:"flipX"},flipY:{icon:'<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',action:"flipY"},fitX:{icon:'<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',action:"fitX"},fitY:{icon:'<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',action:"fitY"},reset:{icon:'<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',action:"reset"},toggleFS:{icon:'<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',action:"toggleFS"}},svgAttr:{tabindex:"-1",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}};class a extends o{constructor(){super(...arguments),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null})}addItem(t){const e=this.option("items")[t];if(!e||!this.container)return;const i=document.createElement("button");i.setAttribute("title",e.title||this.instance.localize(`{{${t.toUpperCase()}}}`)),i.classList.add("f-button");const n=(o=this.instance.localize(e.icon),(new DOMParser).parseFromString(o,"text/html").body.firstChild);var o;if(n instanceof SVGElement)for(const[t,e]of Object.entries(this.option("svgAttr")))n.getAttribute(t)||n.setAttribute(t,String(e));i.appendChild(n),e.action&&(i.dataset.panzoomAction=e.action),e.change&&(i.dataset.panzoomChange=JSON.stringify(e.change)),e.click&&i.addEventListener("click",(t=>{t.preventDefault(),t.stopPropagation(),e&&"function"==typeof e.click&&e.click(this.instance)})),this.container.appendChild(i)}createContainer(){if(this.container)return;const t=document.createElement("div");t.classList.add("f-panzoom__toolbar"),t.dataset.selectable="true",this.instance.container.prepend(t),this.container=t;for(const t of this.option("display"))this.addItem(t);this.instance.container.classList.add("has-toolbar")}removeContainer(){this.container&&this.container.remove(),this.container=null,this.instance.container.classList.remove("has-toolbar")}attach(){this.createContainer()}detach(){this.removeContainer()}}Object.defineProperty(a,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:s}),t.Toolbar=a}));
