(this["webpackJsonpcacl-1"]=this["webpackJsonpcacl-1"]||[]).push([[0],{13:function(t,n,e){"use strict";e.r(n);var u=e(1),s=e.n(u),c=e(3),r=e.n(c),i=e(4),a=e(5),o=e(7),l=e(6),b=e(0),j=function(t){Object(o.a)(e,t);var n=Object(l.a)(e);function e(){var t;return Object(i.a)(this,e),(t=n.call(this)).onNumber1=function(n){t.setState((function(){return{num1:parseInt(n.target.value)}}))},t.onNumber2=function(n){t.setState((function(){return{num2:parseInt(n.target.value)}}))},t.onPlus=function(){t.setState((function(){return{result:t.state.num1+t.state.num2}}))},t.onMinus=function(){t.setState((function(){return{result:t.state.num1-t.state.num2}}))},t.onMult=function(){t.setState((function(){return{result:t.state.num1*t.state.num2}}))},t.onDivide=function(){t.setState((function(){return{result:t.state.num1/t.state.num2}}))},t.state={num1:1,num2:0,result:0},t}return Object(a.a)(e,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"number",value:this.state.num1,onChange:this.onNumber1}),Object(b.jsx)("button",{onClick:this.onPlus,children:"+"}),Object(b.jsx)("button",{onClick:this.onMinus,children:"-"}),Object(b.jsx)("button",{onClick:this.onMult,children:"*"}),Object(b.jsx)("button",{onClick:this.onDivide,children:"/"}),Object(b.jsx)("input",{type:"number",value:this.state.num2,onChange:this.onNumber2}),Object(b.jsx)("span",{children:this.state.result})]})}}]),e}(s.a.Component),h=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(j,{})})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.67f7c103.chunk.js.map