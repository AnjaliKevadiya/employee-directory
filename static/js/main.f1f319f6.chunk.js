(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n(0),r=n.n(s),i=n(37),c=n.n(i),o=(n(52),n(40)),l=(n(53),n(105)),h=n(107),j=n(108),u=n(109),d=Object(l.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var b=function(){var e=d();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(h.a,{position:"static",children:Object(a.jsx)(j.a,{children:Object(a.jsx)(u.a,{variant:"h6",className:e.title,children:"Employee Directory"})})})})},m=n(14),O=n(38),p=n(17),x=n(42),f=n(41),g=n(116),v=n(5),y=n(111),C=n(115),w=n(114),N=n(110),D=n(112),S=n(113),k=n(82),I=n(39),B=n.n(I);var E=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("form",{className:"form",children:Object(a.jsx)("input",{style:{margin:"15px",width:"200px",height:"30px"},value:e.search,name:"search",onChange:e.handleInputChange,type:"text",placeholder:"Search for Employee"})})})},L=function(e){Object(x.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(O.a)(this,n),(a=t.call(this,e)).handleInputChange=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(m.a)({},n,s))},a.state={users:[],search:"",sortDirection:0},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;B.a.get("https://randomuser.me/api/?results=25&nat=us").then((function(t){console.log(t.data),e.setState({users:t.data.results})}))}},{key:"sortByName",value:function(){this.state.sortDirection<1?(this.setState({users:this.state.users.sort((function(e,t){return e.name.first>t.name.first?1:-1}))}),this.setState({sortDirection:1})):(this.setState({users:this.state.users.sort((function(e,t){return e.name.first<t.name.first?1:-1}))}),this.setState({sortDirection:0}))}},{key:"render",value:function(){var e=this,t=this.props.classes;return Object(a.jsxs)(N.a,{component:k.a,children:[Object(a.jsx)(E,{search:this.state.search,handleInputChange:this.handleInputChange}),Object(a.jsxs)(y.a,{className:t.table,"aria-label":"simple table",children:[Object(a.jsx)(D.a,{children:Object(a.jsxs)(S.a,{children:[Object(a.jsx)(w.a,{children:"Image"}),Object(a.jsx)(w.a,{align:"right",onClick:function(){return e.sortByName()},children:"Name"}),Object(a.jsx)(w.a,{align:"right",children:"Phone Number"}),Object(a.jsx)(w.a,{align:"right",children:"Email"}),Object(a.jsx)(w.a,{align:"right",children:"DOB"})]})}),Object(a.jsx)(C.a,{children:this.state.users.filter((function(t){return t.name.first.toLowerCase().includes(e.state.search.toLowerCase())||t.name.last.toLowerCase().includes(e.state.search.toLowerCase())})).map((function(e){return Object(a.jsxs)(S.a,{children:[Object(a.jsx)(w.a,{component:"th",scope:"row",children:Object(a.jsx)("img",{src:e.picture.thumbnail})}),Object(a.jsxs)(w.a,{align:"right",children:[e.name.first," ",e.name.last]}),Object(a.jsx)(w.a,{align:"right",children:e.phone}),Object(a.jsx)(w.a,{align:"right",children:e.email}),Object(a.jsx)(w.a,{align:"right",children:e.dob.date})]},e.name)}))})]})]})}}]),n}(r.a.Component),G=Object(v.a)((function(){return Object(g.a)({table:{minWidth:"85%"}})}))(L);var J=function(){return Object(a.jsx)(o.a,{basename:"/employee-directory",children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(b,{}),Object(a.jsx)(G,{})]})})};n(80);c.a.render(Object(a.jsx)(J,{}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.f1f319f6.chunk.js.map