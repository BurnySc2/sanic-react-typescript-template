(this["webpackJsonptailwind-react-template"]=this["webpackJsonptailwind-react-template"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),l=(n(15),n(6)),u=n(7),s=n(9),i=n(8),m=n(1),f=n.n(m),d=n(2),p=n(3);var v=function(e){return r.a.createElement("div",null,e.listOfTodos&&e.listOfTodos.map((function(t){return r.a.createElement("ul",{key:t.id,className:"flex flex-row"},r.a.createElement("button",{className:"m-1 p-1 border-2",onClick:function(){return e.removeTodo(t.id)}},"Remove"),r.a.createElement("li",{className:"m-1 p-1"},t.content))})))},x=Object(a.createContext)("some text");function b(e){var t=Object(a.useContext)(x),n=t.contextValue,c=t.setContextValue;return console.log(n),r.a.createElement("div",null,r.a.createElement("div",null,n),r.a.createElement("button",{className:"p-1 border-2",onClick:function(e){c("asd"===n?"dsa":"asd")}},"Change data"))}var h=function(e){var t=Object(a.useState)(""),n=Object(p.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)([]),u=Object(p.a)(l,2),s=u[0],i=u[1],m=Object(a.useState)("some text"),h=Object(p.a)(m,2),E=h[0],O=h[1];console.log(E),Object(a.useEffect)((function(){w()}),[]);var w=function(){var e=Object(d.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api");case 2:if(!(t=e.sent).ok){e.next=11;break}return e.t0=i,e.next=7,t.json();case 7:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 11:i([{id:0,content:"SERVER ERROR"}]);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(d.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/".concat(c),{method:"POST"});case 2:return o(""),e.next=5,w();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/".concat(t),{method:"DELETE"});case 2:return e.next=4,w();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"flex flex-col"},r.a.createElement(x.Provider,{value:{contextValue:E,setContextValue:O}},r.a.createElement(b,null)),r.a.createElement("div",{className:"flex flex-row"},r.a.createElement("input",{type:"text",value:c,onChange:function(e){o(e.target.value)},placeholder:"My new todo item",className:"border-2 my-2 mx-1"}),r.a.createElement("button",{onClick:j,className:"border-2 my-2 mx-1"},"Submit")),r.a.createElement(v,{listOfTodos:s,removeTodo:k}))},E=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.b4a71c62.chunk.js.map