(function(t){function e(e){for(var r,c,a=e[0],l=e[1],s=e[2],f=0,d=[];f<a.length;f++)c=a[f],o[c]&&d.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h2",{staticClass:"content__section header text-center"},[t._v("\n    Almighty\n  ")]),n("p",{staticClass:"bg-success text-center"},[t._v("Formにテキストいれてボタン押すとそれが投稿として処理される仕様")]),n("recognition"),n("div",{staticClass:"col-md-8"},[t._v("\n    title\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form_title,expression:"form_title"}],attrs:{type:"text"},domProps:{value:t.form_title},on:{input:function(e){e.target.composing||(t.form_title=e.target.value)}}}),t._v("\n    body\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form_text,expression:"form_text"}],attrs:{type:"text"},domProps:{value:t.form_text},on:{input:function(e){e.target.composing||(t.form_text=e.target.value)}}}),n("button",{on:{click:function(e){return t.run()}}},[t._v("Send")])]),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"well well-lg col-md-10 col-md-offset-1"},[n("div",{staticClass:"col-md-5"},[n("h3",[t._v("#1 Success")]),n("textarea",{attrs:{rows:"10",cols:"50",id:"success",disabled:""}})]),n("div",{staticClass:"col-md-5"},[n("h3",[t._v("#2 Error")]),n("textarea",{staticStyle:{color:"red"},attrs:{rows:"10",cols:"50",id:"error",disabled:""}})])])}],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",[n("button",{attrs:{id:"startSpeech"},on:{click:function(e){return t.recognitionToggle()}}},[t._v("Recognition")])])},a=[],l=function(t,e,n){return fetch(e,{method:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.state.token)},body:JSON.stringify({name:"name",body:n})})},s=function(){return"SpeechRecognition"in window?new SpeechRecognition:"webkitSpeechRecognition"in window?new webkitSpeechRecognition:void 0},u=s();u.lang="ja-JP",u.onstart=function(){},u.onresult=function(t){alert(t.results[0][0].transcript)},u.onerror=function(t){this.words=l("GET","http://localhost:1145/word").then(successHandler).catch(errorHandler)};var f=!1,d={methods:{recognitionToggle:function(){!1===f?(f=!0,u.start()):f=!1}}},p=d,m=n("2877"),v=Object(m["a"])(p,c,a,!1,null,null,null),h=v.exports,g={components:{recognition:h},data:function(){return{article:"default_article!",form_title:"default_title",form_text:"default_body"}},methods:{run:function(){}},created:function(){}},_=g,b=(n("034f"),Object(m["a"])(_,o,i,!1,null,null,null)),w=b.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(w)}}).$mount("#app")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.2bb2114c.js.map