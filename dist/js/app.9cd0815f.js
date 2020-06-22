(function(t){function e(e){for(var n,c,i=e[0],u=e[1],s=e[2],d=0,p=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,c=1;c<o.length;c++){var u=o[c];0!==r[u]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},a=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8dab2948"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=n);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(t);var s=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(d);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,o[1](s)}r[t]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var l=s;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"01a8":function(t,e,o){},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"08a4":function(t,e,o){"use strict";var n=o("96a9"),r=o.n(n);r.a},"161f":function(t,e,o){},"2ea9":function(t,e,o){"use strict";var n=o("161f"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("router-view")],1)},a=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("h1",[t._v("Todo List")]),o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])},i=[],u={name:"Header"},s=u,d=(o("08a4"),o("2877")),l=Object(d["a"])(s,c,i,!1,null,"3f224b84",null),p=l.exports,f={name:"app",components:{Header:p}},m=f,v=(o("034f"),Object(d["a"])(m,r,a,!1,null,null,null)),h=v.exports,b=(o("d3b7"),o("8c4f")),g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("AddTodo",{on:{"add-todo":t.addTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo}})],1)},y=[],_=(o("99af"),o("4de4"),o("2909")),w=(o("96cf"),o("1da1")),j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,(function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)})),0)},x=[],O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"is-complete":t.todo.completed}},[o("p",[o("input",{attrs:{type:"checkbox"},on:{change:t.markComplete}}),t._v(" "+t._s(t.todo.title)+" "),o("button",{staticClass:"del",on:{click:function(e){return t.$emit("del-todo",t.todo.id)}}},[t._v("x")])])])},T=[],k={name:"TodoItem",props:["todo"],methods:{markComplete:function(){this.todo.completed=!this.todo.completed}}},E=k,P=(o("2ea9"),Object(d["a"])(E,O,T,!1,null,"6325a906",null)),$=P.exports,C={name:"Todos",components:{TodoItem:$},props:["todos"]},A=C,H=Object(d["a"])(A,j,x,!1,null,"af1e6b6c",null),R=H.exports,S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:t.addTodo}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add Todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"submit"}})])])},M=[],I=o("ec26"),L={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(t){t.preventDefault();var e={id:Object(I["a"])(),title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}},J=L,q=(o("c524"),Object(d["a"])(J,S,M,!1,null,"3eb0a79a",null)),D=q.exports,N=o("bc3a"),z=o.n(N),B={name:"Home",components:{Todos:R,AddTodo:D},data:function(){return{todos:[]}},methods:{deleteTodo:function(t){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,z.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t));case 3:e.todos=e.todos.filter((function(e){return e.id!==t})),o.next=9;break;case 6:o.prev=6,o.t0=o["catch"](0),console.log("Error: "+o.t0);case 9:e.todos=e.todos.filter((function(e){return e.id!==t}));case 10:case"end":return o.stop()}}),o,null,[[0,6]])})))()},addTodo:function(t){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function o(){var n,r,a;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,n=t.title,r=t.completed,o.next=4,z.a.post("https://jsonplaceholder.typicode.com/todos",{title:n,completed:r});case 4:a=o.sent,e.todos=[].concat(Object(_["a"])(e.todos),[a.data]),o.next=11;break;case 8:o.prev=8,o.t0=o["catch"](0),console.log("Error: "+o.t0);case 11:case"end":return o.stop()}}),o,null,[[0,8]])})))()}},created:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.get("https://jsonplaceholder.typicode.com/todos?_limit=4");case 3:o=e.sent,t.todos=o.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("Error: "+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},F=B,G=(o("cccb"),Object(d["a"])(F,g,y,!1,null,null,null)),K=G.exports;n["a"].use(b["a"]);var Q=[{path:"/",name:"Home",component:K},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],U=new b["a"]({routes:Q}),V=U;n["a"].config.productionTip=!1,new n["a"]({router:V,render:function(t){return t(h)}}).$mount("#app")},"5ced":function(t,e,o){},"85ec":function(t,e,o){},"96a9":function(t,e,o){},c524:function(t,e,o){"use strict";var n=o("01a8"),r=o.n(n);r.a},cccb:function(t,e,o){"use strict";var n=o("5ced"),r=o.n(n);r.a}});
//# sourceMappingURL=app.9cd0815f.js.map