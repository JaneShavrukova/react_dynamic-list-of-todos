(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(4),n=c.n(a),l=c(2),i=c(1),d=(c(10),c(11),c(5)),o=c.n(d),r=c(0),j=function(e){var t=e.todos,c=e.selectedTodo,s=e.setSelectedTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed,l=c===t;return Object(r.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":l}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:t}),n?Object(r.jsx)("td",{className:"is-vcentered",children:Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}):Object(r.jsx)("td",{className:"is-vcentered"}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:n?"has-text-success":"has-text-danger",children:a})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"far ".concat(l?"fa-eye-slash":"fa-eye")})})})})]},t)}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(s||(s={}));var b=function(e){var t=e.query,c=e.setQuery,a=e.setFilter;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){a(e.target.value)},children:[Object(r.jsx)("option",{value:s.ALL,children:"All"}),Object(r.jsx)("option",{value:s.ACTIVE,children:"Active"}),Object(r.jsx)("option",{value:s.COMPLETED,children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){c(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},u=(c(13),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){var t=e.todo,c=e.setSelectedTodo,s=Object(i.useState)(null),a=Object(l.a)(s,2),n=a[0],d=a[1],o=Object(i.useState)(!1),j=Object(l.a)(o,2),b=j[0],O=j[1];Object(i.useEffect)((function(){var e;O(!0),(e=t.userId,h("/users/".concat(e))).then(d).finally((function(){return O(!1)}))}),[t.userId]);var m=t.id,x=t.title,f=t.completed;return Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),b?Object(r.jsx)(u,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(m)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:x}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[f?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]})]})},m=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(s.ALL),d=Object(l.a)(n,2),o=d[0],m=d[1],x=Object(i.useState)(""),f=Object(l.a)(x,2),v=f[0],N=f[1],p=Object(i.useState)(null),y=Object(l.a)(p,2),g=y[0],T=y[1],C=Object(i.useState)(!1),L=Object(l.a)(C,2),S=L[0],k=L[1];Object(i.useEffect)((function(){k(!0),h("/todos").then(a).finally((function(){return k(!1)}))}),[]);var E,w,A=(E=o,w=v,c.filter((function(e){switch(E){case s.ACTIVE:return!e.completed;case s.COMPLETED:return e.completed;default:return e}})).filter((function(e){return e.title.toLocaleLowerCase().includes(w.trim().toLocaleLowerCase())})));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("h1",{className:"title",children:o}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(b,{query:v,setQuery:N,setFilter:m})}),Object(r.jsxs)("div",{className:"block",children:[S&&Object(r.jsx)(u,{}),Object(r.jsx)(j,{todos:A,selectedTodo:null===g||void 0===g?void 0:g.id,setSelectedTodo:T})]})]})})}),g&&Object(r.jsx)(O,{todo:g,setSelectedTodo:T})]})};n.a.render(Object(r.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.653dc6b4.chunk.js.map