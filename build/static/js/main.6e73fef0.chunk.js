(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n);var r=t(14),c=t.n(r),a=t(4),i=t(2),o=t(3),u=t.n(o),s="/api/persons",d=function(){return u.a.get(s)},l=function(e){return u.a.post(s,e)},h=function(e,n){return u.a.put("".concat(s,"/").concat(e),n)},b=function(e){return u.a.delete("".concat(s,"/").concat(e))},j=t(0),f=function(e){var n=e.person,t=e.handlePersonDelete;return Object(j.jsxs)("p",{children:[n.name," ",n.number," ",Object(j.jsx)("button",{onClick:function(){return t(n.id)},children:"delete"})]})},m=function(e){var n=e.persons,t=e.handlePersonDelete;return Object(j.jsx)("div",{children:n.map((function(e){return Object(j.jsx)(f,{person:e,handlePersonDelete:t},e.id)}))})},O=function(e){var n=e.handleSubmit,t=e.newName,r=e.newNumber,c=e.handleNameChange,a=e.handleNumberChange;return Object(j.jsxs)("form",{onSubmit:n,children:[Object(j.jsxs)("div",{children:["name: ",Object(j.jsx)("input",{value:t,onChange:c})]}),Object(j.jsxs)("div",{children:["number: ",Object(j.jsx)("input",{value:r,onChange:a})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"add"})})]})},p=function(e){var n=e.filter,t=e.handleFilterChange;return Object(j.jsxs)("form",{children:["filter shown with ",Object(j.jsx)("input",{value:n,onChange:t})]})},v=function(){var e=Object(i.useState)([]),n=Object(a.a)(e,2),t=n[0],r=n[1],c=Object(i.useState)(""),o=Object(a.a)(c,2),u=o[0],s=o[1],f=Object(i.useState)(""),v=Object(a.a)(f,2),x=v[0],w=v[1],g=Object(i.useState)(""),C=Object(a.a)(g,2),N=C[0],k=C[1];Object(i.useEffect)((function(){d().then((function(e){r(e.data)}))}),[]);var S=""===N?t:t.filter((function(e){return e.name.toLowerCase().includes(N.toLowerCase())}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Phonebook"}),Object(j.jsx)(p,{filter:N,handleFilterChange:function(e){k(e.target.value)}}),Object(j.jsx)("h3",{children:"Add a new person"}),Object(j.jsx)(O,{handleSubmit:function(e){e.preventDefault();var n={name:u,number:x};if(t.map((function(e){return e.name})).includes(u)){var c=t.filter((function(e){return e.name===u})).map((function(e){return e.id}));window.confirm("".concat(u," is already added to phonebook, replace the old number with a new one?"))&&h(c,n).then((function(e){r(t.map((function(n){return n.id===e.data.id?e.data:n})))}))}else l(n).then((function(e){r(t.concat(e.data))}));s(""),w("")},newName:u,newNumber:x,handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){w(e.target.value)}}),Object(j.jsx)("h3",{children:"Numbers"}),Object(j.jsx)(m,{persons:S,handlePersonDelete:function(e){var n=t.filter((function(n){return n.id===e})).map((function(e){return e.name}));window.confirm("Delete ".concat(n," ?"))&&b(e).then((function(n){r(t.filter((function(n){return n.id!==e})))}))}})]})};c.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.6e73fef0.chunk.js.map