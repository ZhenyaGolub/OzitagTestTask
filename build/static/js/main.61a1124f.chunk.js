(this["webpackJsonpozitag-testtask"]=this["webpackJsonpozitag-testtask"]||[]).push([[0],{33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(5),i=a.n(r),c=a(7),o=a(6),l=a.n(o),u=a(14),d=a(8),m=a(18),j=function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Please fill in the field",e.password?e.password.length<4?t.password="Must be 4 characters or more":e.password.length>20&&(t.password="Must be 20 characters or less"):t.password="Please fill in the field",t},h=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.tokenType,n=t.accessToken,e.next=3,fetch("https://tager.dev.ozitag.com/api/tager/user/profile",{headers:{Authorization:"".concat(a," ").concat(n)}});case 3:return s=e.sent,e.next=6,s.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=a(1),p=function(e){var t=e.authentication,a=Object(n.useRef)(),s=Object(n.useState)(!1),r=Object(c.a)(s,2),i=r[0],o=r[1],p=Object(m.a)({initialValues:{email:"",password:""},validate:j,onSubmit:function(){var e=Object(d.a)(l.a.mark((function e(a){var n,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,O(!0),e.next=4,fetch("https://tager.dev.ozitag.com/api/auth/user",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(Object(u.a)(Object(u.a)({},a),{},{clientId:1}))});case 4:return n=e.sent,O(!1),e.next=8,n.json();case 8:return s=e.sent,e.next=11,h(s.data);case 11:r=e.sent,t(r,s.data.tokenType,s.data.accessToken),o(!1),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),O(!1),o(!0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}()}),O=function(e){e?a.current.classList.add("animate__animated","animate__shakeX","animate__infinite","infinite"):e||a.current.classList.remove("animate__animated","animate__shakeX","animate__infinite","infinite")};return Object(b.jsxs)("form",{action:"post",className:"sign-in",onSubmit:p.handleSubmit,children:[Object(b.jsxs)("div",{className:"data",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)("input",{type:"email",name:"email",id:"email",onInput:p.handleChange,onBlur:p.handleBlur,value:p.values.email}),p.touched.email&&p.errors.email?Object(b.jsx)("div",{className:"error",children:p.errors.email}):null]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("label",{htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",id:"password",onInput:p.handleChange,onBlur:p.handleBlur,value:p.values.password}),p.touched.password&&p.errors.password?Object(b.jsx)("div",{className:"error",children:p.errors.password}):null]})]}),Object(b.jsx)("button",{type:"submit",ref:a,children:"Sign in"}),i?Object(b.jsx)("p",{className:"wrong",children:"Wrong email or password entered"}):null]})},O=function(e){var t=e.showUser;return Object(b.jsx)("div",{className:"authorization",children:Object(b.jsx)(p,{authentication:t})})},x=s.a.createContext(),f=function(e){var t=e.user,a=e.logout;return Object(n.useContext)(x)?null!==t?Object(b.jsxs)("div",{className:"user",children:[Object(b.jsx)("button",{className:"exit",onClick:a,children:"Exit"}),Object(b.jsx)("h1",{children:"User information"}),Object(b.jsxs)("div",{className:"user__information",children:[Object(b.jsxs)("h2",{children:["Username: ",t.name]}),Object(b.jsxs)("h2",{children:["Email: ",t.email]})]})]}):void 0:null},v=a(36),w=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(null),i=Object(c.a)(r,2),o=i[0],l=i[1];return Object(b.jsxs)(x.Provider,{value:a,children:[Object(b.jsx)(v.a,{in:a,timeout:300,classNames:"animation",unmountOnExit:!0,children:Object(b.jsx)(f,{user:o,logout:function(){s(!1)}})}),Object(b.jsx)(v.a,{in:!a,timeout:300,classNames:"animation",unmountOnExit:!0,children:Object(b.jsx)(O,{showUser:function(e,t,a){var n=e.data,r=n.email,i=n.name;l({email:r,name:i,type:t,token:a}),s(!0)}})})]})};a(31),a(32),a(33);i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.61a1124f.chunk.js.map