(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(32)},23:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(14),r=n.n(l),u=n(8),o=n(5),m=(n(23),n(17)),i="Poolsystem",E={cache:"https://pool-erikslund5.firebaseio.com/cache.json",server:"http://<project-id>.herokuapp.com/"},p=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,i),c.a.createElement("h2",null,"Poolinformation f\xf6r ",function(){var e=new Date,t=e.getDate(),n=e.getMonth(),a=e.getFullYear();return"".concat(a,"-").concat(n<10?"0"+n:n,"-").concat(t)}()),c.a.createElement(d,null))},d=function(){var e=Object(a.useState)(c.a.createElement(h,null)),t=Object(m.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)(function(){fetch(E.cache).then(function(e){return e.json()}).then(function(e){return l(c.a.createElement(s,{cache:e}))}).catch(function(e){return l(c.a.createElement(f,{message:e.message}))})},[]),c.a.createElement("div",null,n)},h=function(){return c.a.createElement("h1",null,"Loading...")},s=function(e){return c.a.createElement("div",null,c.a.createElement("h3",null,c.a.createElement("span",null,"Ansvarig denna vecka: "),c.a.createElement("u",null,e.cache.contact.name,", ",e.cache.contact.address)),c.a.createElement("h4",null,c.a.createElement("span",null,"Senast uppdaterad: "),c.a.createElement("u",null,e.cache.timestamp)),c.a.createElement("h1",null,e.cache.open?c.a.createElement("span",null,"Till\xe5tet att bada!"):c.a.createElement("span",null,"Badf\xf6rbud")),c.a.createElement("div",null,c.a.createElement("div",null,"Klorv\xe4rde:         ",e.cache.data.chlorine," ppm"),c.a.createElement("div",null,"pH-v\xe4rde:          ",e.cache.data.ph),c.a.createElement("div",null,"Vattentemperatur:  ",e.cache.data.watertemp,"\xb0C"),c.a.createElement("div",null,"Lufttemperatur:    ",e.cache.data.airtemp,"\xb0C")))},f=function(e){return c.a.createElement("div",null,c.a.createElement("h1",null,"Error!"),c.a.createElement("p",null,e.message))},v=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Report"))};r.a.render(c.a.createElement(u.a,null,c.a.createElement(function(){return c.a.createElement(o.d,null,c.a.createElement(o.b,{exact:!0,path:"/",component:p}),c.a.createElement(o.b,{exact:!0,path:"/report",component:v}),c.a.createElement(o.b,{component:(e="/",function(){return c.a.createElement(o.a,{to:e})})}));var e},null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f437de31.chunk.js.map