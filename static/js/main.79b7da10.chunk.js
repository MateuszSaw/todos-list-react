(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(1),o=n.n(s),a=n(7),i=n.n(a),r=(n(14),n(8)),u=n(4),d=n(3),l=(n(15),function(t){var e=t.addNewTask,n=Object(s.useState)(""),o=Object(d.a)(n,2),a=o[0],i=o[1],r=a.trim();return Object(c.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),""!==r&&(e(r),i(""))},children:[Object(c.jsx)("input",{value:a,className:"form__input",placeholder:"Co jest do zrobienia?",onChange:function(t){var e=t.target;return i(e.value)}}),Object(c.jsx)("button",{className:"form__button",children:"Dodaj zadanie"})]})}),j=(n(16),function(t){var e=t.tasks,n=t.hideDone,s=t.removeTask,o=t.toggleTaskDone;return Object(c.jsx)("ul",{className:"tasks",children:e.map((function(t){return Object(c.jsxs)("li",{className:"tasksItem".concat(t.done&&n?" tasksItem--hidden":""),children:[Object(c.jsx)("button",{className:"taskList__button taskList__button--done",onClick:function(){return o(t.id)},children:t.done?"\u2714":""}),Object(c.jsx)("p",{className:"tasksItem__paragraph".concat(t.done?" tasks__content--done":""),children:t.content}),Object(c.jsx)("button",{className:"taskList__button taskList__button--delete",onClick:function(){return s(t.id)},children:"\ud83d\uddd1"})]},t.id)}))})}),b=(n(17),function(t){var e=t.tasks,n=t.hideDone,s=t.toggleHideDone,o=t.setAllDone;return Object(c.jsx)("div",{className:"buttons",children:e.length>0&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("button",{onClick:s,className:"buttons__button",children:[n?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(c.jsx)("button",{className:"buttons__button",onClick:o,disabled:e.every((function(t){return t.done})),children:"Uko\u0144cz wszystkie"})]})})}),f=(n(18),function(t){var e=t.title,n=t.body,s=t.extraHeaderContent;return Object(c.jsxs)("section",{className:"section",children:[Object(c.jsxs)("header",{className:"section__header",children:[Object(c.jsx)("h2",{className:"section__title",children:e}),s]}),Object(c.jsx)("div",{className:"section__body",children:n})]})}),h=(n(19),function(t){var e=t.title;return Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:e})})}),O=(n(20),function(t){var e=t.children;return Object(c.jsx)("main",{className:"container",children:e})}),m=function(){var t=localStorage.getItem("tasks");return t?JSON.parse(t):[]};var k=function(){var t=Object(s.useState)(!1),e=Object(d.a)(t,2),n=e[0],o=e[1],a=Object(s.useState)(m),i=Object(d.a)(a,2),k=i[0],x=i[1];return Object(s.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(k))}),[k]),Object(c.jsxs)(O,{children:[Object(c.jsx)(h,{title:"Lista zada\u0144"}),Object(c.jsx)(f,{title:"Dodaj nowe zadanie",body:Object(c.jsx)(l,{addNewTask:function(t){x((function(e){return[].concat(Object(r.a)(e),[{content:t,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}})}),Object(c.jsx)(f,{title:"Lista zada\u0144",body:Object(c.jsx)(j,{tasks:k,hideDone:n,removeTask:function(t){x((function(e){return e.filter((function(e){return e.id!==t}))}))},toggleTaskDone:function(t){x((function(e){return e.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},{done:!e.done}):e}))}))}}),extraHeaderContent:Object(c.jsx)(b,{tasks:k,hideDone:n,toggleHideDone:function(){o((function(t){return!t}))},setAllDone:function(){x((function(t){return t.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{done:!0})}))}))}})})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),s(t),o(t),a(t)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),x()}],[[21,1,2]]]);
//# sourceMappingURL=main.79b7da10.chunk.js.map