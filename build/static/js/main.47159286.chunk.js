(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var r=t(16),c=t.n(r),a=t(3),o=t(2),u=t(4),i=t.n(u),s="/api/persons",d=function(){return i.a.get(s).then((function(e){return e.data}))},l=function(e){return i.a.post(s,e).then((function(e){return e.data}))},j=function(e,n){return i.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return i.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},h=t(0),f=function(e){var n=e.notification;return null===n?null:n.includes("removed")?Object(h.jsx)("div",{className:"errorRed error",children:n}):Object(h.jsx)("div",{className:"error",children:n})},m=function(e){var n=e.persons,t=e.deletePerson;return Object(h.jsx)("ul",{children:n.map((function(e){return Object(h.jsxs)("li",{children:[e.name," ",e.number,Object(h.jsx)("button",{id:"delete_"+e.id,onClick:function(){return t(e)},children:"delete"})]},e.id)}))})},O=function(e){var n=e.search,t=e.onChange;return Object(h.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(h.jsxs)("div",{children:["search:",Object(h.jsx)("input",{value:n,onChange:t})]})})},v=function(e){var n=e.addName,t=e.newName,r=e.newNumber,c=e.onChangeName,a=e.onChangeNumber;return Object(h.jsxs)("form",{onSubmit:n,children:[Object(h.jsxs)("div",{children:["name:",Object(h.jsx)("input",{value:t,onChange:c})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:r,onChange:a})]}),Object(h.jsx)("button",{type:"submit",children:"add"})]})},p=function(){var e=Object(o.useState)([]),n=Object(a.a)(e,2),t=n[0],r=n[1],c=Object(o.useState)(""),u=Object(a.a)(c,2),i=u[0],s=u[1],p=Object(o.useState)(""),x=Object(a.a)(p,2),w=x[0],g=x[1],C=Object(o.useState)(""),N=Object(a.a)(C,2),L=N[0],S=N[1],k=Object(o.useState)(null),y=Object(a.a)(k,2),P=y[0],D=y[1];Object(o.useEffect)((function(){d().then((function(e){r(e)}))}),[]);var E=function(e){D(e),setTimeout((function(){D(null)}),5e3)},J=""===L?t:t.filter((function(e){return e.name.toLowerCase().includes(L.toLowerCase())}));return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(f,{notification:P}),Object(h.jsx)(O,{search:L,onChange:function(e){return S(e.target.value)}}),Object(h.jsx)("h2",{children:"Add new"}),Object(h.jsx)(v,{addName:function(e){if(e.preventDefault(),t.map((function(e){return e.name.toLowerCase()})).includes(i.toLowerCase())){var n=t.filter((function(e){return e.name.toLowerCase()==i.toLocaleLowerCase()}))[0];window.confirm("".concat(n.name," already exists in the phonebook, update the phone number?"))&&j(n.id,{name:i,number:w}).then((function(e){r(t.filter((function(e){return e!=n})).concat(e)),E("".concat(i," number changed to ").concat(w)),s(""),g("")})).catch((function(e){E("".concat(i," has already been removed from the server"))}))}else{var c={name:i,number:w,id:t.length+1};l(c).then((function(e){r(t.concat(e)),E("".concat(i," added")),s(""),g("")}))}},newName:i,newNumber:w,onChangeNumber:function(e){return g(e.target.value)},onChangeName:function(e){return s(e.target.value)}}),Object(h.jsx)("h2",{children:"Numbers"}),Object(h.jsx)(m,{persons:J,deletePerson:function(e){window.confirm("Delete ".concat(e.name,"?"))&&b(e.id).then(r(t.filter((function(n){return n!=e})))).catch((function(e){return E("Person was already removed from the server")}))}})]})};t(40);c.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.47159286.chunk.js.map