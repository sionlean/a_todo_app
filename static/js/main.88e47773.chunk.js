(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},16:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(12),o=a.n(i),l=a(7),c=a(1),s=a(2),m=a(4),u=a(3),f=a(5),p=a(13),d=a.n(p),h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).toggle=function(){return{textDecoration:a.props.item.completed?"line-through":"none",flex:15,margin:0,fontSize:"1.5rem",color:"black",fontWeight:400}},a.saveEdit=function(e){var t=a.props,r=t.item,n=t.saveEdit;r.title=e.target.value,n(r)},a.binStyle={float:"right",marginRight:"50px",color:"#555",cursor:"pointer",fontSize:"2rem"},a.chooseCat=function(){var e=a.props,t=e.colors,r=e.item;return{background:t.filter(function(e){return e.name===r.category})[0].color,display:r.display}},a.chooseIcon=function(){var e=a.props,t=e.colors,r=e.item;return t.filter(function(e){return e.name===r.category})[0].icon},a.priorityStyle=function(){return{color:a.props.item.priorityColor,fontSize:"2rem",marginLeft:"0.5rem"}},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,a=t.id,r=t.title,i=e.toggle,o=e.onDelete,l=e.saveEdit;return n.a.createElement("div",{style:this.chooseCat(),className:"listitem text-light p-3 clearfix rounded align-items-center"},n.a.createElement("span",{style:{fontSize:"2.5rem",color:"#555",width:"50px"},className:this.chooseIcon()}),n.a.createElement("span",{style:this.priorityStyle(),className:"fa fa-exclamation-circle"}),n.a.createElement("input",{className:"align-middle",style:{flex:1,width:30,height:30},type:"checkbox",onChange:i.bind(this,a)}),n.a.createElement("label",{style:this.toggle()},n.a.createElement(d.a,{html:r,onChange:l})),n.a.createElement("span",{onClick:o.bind(this,a),className:"fa fa-trash",style:this.binStyle}," "))}}]),t}(r.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.toggle,r=e.onDelete,i=e.saveEdit,o=e.colors;return n.a.createElement("div",{className:"list"},t.map(function(e){return n.a.createElement(h,{key:e.id,item:e,toggle:a,onDelete:r,saveEdit:i,colors:o})}))}}]),t}(r.Component),b=a(14),g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={curCat:"Others"},a.select=function(e){return"Others"===e.name?"selected":""},a.handleChange=function(e){(0,a.props.curCat)(e.target.value),a.setState({curCat:e.target.value})},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.colors;return n.a.createElement("select",{className:"selector selectpicker p-1 form-control",value:this.state.curCat,onChange:this.handleChange},e.map(function(e){return n.a.createElement("option",{key:e.name,value:e.name,style:{background:e.color}},e.name)}))}}]),t}(r.Component),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={priority:"Low Priority"},a.handleChange=function(e){a.setState({priority:e.target.value}),a.props.handlePriority(e.target.value)},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.priority;return n.a.createElement("select",{className:"selector selectpicker p-1 form-control",onChange:this.handleChange,value:this.state.priority},e.map(function(e){return n.a.createElement("option",{key:e.name,value:e.name,style:{color:"black",backgroundColor:e.color}},e.name)}))}}]),t}(r.Component),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={title:""},a.onChange=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),a.props.addList(a.state.title),a.setState({title:""})},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.colors,a=e.curCat,r=e.priority,i=e.handlePriority;return n.a.createElement("form",{className:"form",onSubmit:this.onSubmit,style:{display:"flex",padding:"10px"}},n.a.createElement("input",{className:"rounded form-control",style:{flex:5,padding:10,height:"50px"},type:"text",name:"title",placeholder:" Type Something...",onChange:this.onChange,value:this.state.title,maxLength:"135",required:!0}),n.a.createElement(g,{colors:t,curCat:a}),n.a.createElement(v,{priority:r,handlePriority:i}),n.a.createElement("input",{style:{flex:1},className:"btn submit",type:"submit"}))}}]),t}(r.Component),E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.onReset;return n.a.createElement("div",null,n.a.createElement("button",{onClick:e,style:{border:"none",color:"white"},className:"btn navbar-btn reset"},"Reset"))}}]),t}(r.Component),C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.addList,a=e.colors,r=e.curCat,i=e.priority,o=e.handlePriority,l=e.onReset;return n.a.createElement("div",{className:"header"},n.a.createElement("nav",{className:"navbar navbar-inverse"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"navbar-header",style:{margin:"auto"}},n.a.createElement("p",{className:"navbar-brand"},"To-Do List")),n.a.createElement(E,{onReset:l}))),n.a.createElement(O,{addList:t,colors:a,curCat:r,priority:i,handlePriority:o}))}}]),t}(r.Component),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={},a.btnStyle=function(){return{backgroundColor:a.props.color.color,width:"80%",fontWeight:"bold"}},a.counters=function(){var e=a.props,t=e.items,r=e.color;return t.filter(function(e){return e.category===r.name}).length},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.color;return n.a.createElement("div",null,n.a.createElement("button",{type:"button",className:"btn btn-basic",style:this.btnStyle()},n.a.createElement("span",{style:{fontSize:"1.5rem",color:"#555",float:"left"},className:e.icon}),e.name,n.a.createElement("span",{style:{backgroundColor:"#e8e8e8",float:"right",marginTop:"3px"},className:"badge"},this.counters())))}}]),t}(r.Component),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.clearCompleted;return n.a.createElement("button",{onClick:e,className:"btn btn-danger btn-md"},"Clear Completed")}}]),t}(r.Component),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.colors,r=e.clearCompleted;return n.a.createElement("div",{className:"counterList"},n.a.createElement("p",null," Counters "),n.a.createElement("span",{className:"badge m-1"},t.length),n.a.createElement("div",null,a.map(function(e){return n.a.createElement(j,{key:e.name,color:e,items:t})})),n.a.createElement("br",null),n.a.createElement(k,{clearCompleted:r}))}}]),t}(r.Component),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.colors,a=e.filter,r=e.filterOff;return n.a.createElement("div",{className:"filter"},n.a.createElement("p",null,"Filter"),n.a.createElement("div",{className:"flex"},n.a.createElement(g,{style:{width:"50%"},colors:t,curCat:a}),n.a.createElement("button",{onClick:r,className:"btn btn-danger"},"Off Filter")))}}]),t}(r.Component),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={timeHour:"",timeMin:"",note:""},a.setHour=function(e){var t=e.target.value;a.setState({timeHour:t})},a.setMin=function(e){var t=e.target.value;a.setState({timeMin:t})},a.setText=function(e){var t=e.target.value;a.setState({note:t})},a.submitTimer=function(e){e.preventDefault(),a.props.timer(a.state.timeHour,a.state.timeMin,a.state.note),a.setState({timeHour:""}),a.setState({timeMin:""}),a.setState({note:""})},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"timer"},n.a.createElement("form",{onSubmit:this.submitTimer},n.a.createElement("p",null,"Set Timer"),n.a.createElement("div",null,"Hours:"," ",n.a.createElement("input",{onChange:this.setHour,type:"number",value:this.state.timeHour,min:"0",step:"1",max:"23"}),n.a.createElement("span",null,"Minutes:"," ",n.a.createElement("input",{onChange:this.setMin,type:"number",value:this.state.timeMin,min:"0",step:"1",max:"59"}))),n.a.createElement("div",{className:"note"},"Notes:",n.a.createElement("br",null),n.a.createElement("textarea",{onChange:this.setText,rows:"5",cols:"20",placeholder:"Reminder text...",maxLength:"100",value:this.state.note})),n.a.createElement("input",{className:"set btn",type:"submit",value:"Set"})))}}]),t}(r.Component),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.lightTheme,a=e.darkTheme,r=e.blockView,i=e.listView,o=e.clearCompleted,l=e.colors,c=e.items,s=e.curCat,m=e.filterOff,u=e.filter,f=e.timer;return n.a.createElement("div",{className:"sidenav"},n.a.createElement("div",{className:"toggleView"},n.a.createElement("p",null,"Toggle View"),n.a.createElement("span",{onClick:t,className:"fa fa-sun-o"}),n.a.createElement("span",{onClick:a,className:"fa fa-moon-o"}),n.a.createElement("p",{style:{display:"inline",fontSize:"2.7rem",color:"grey",cursor:"default"}}," ","|"," "),n.a.createElement("span",{onClick:r,className:"fa fa-th"}),n.a.createElement("span",{onClick:i,className:"fa fa-list"})),n.a.createElement(w,{items:c,colors:l,clearCompleted:o}),n.a.createElement(N,{colors:l,curCat:s,items:c,filter:u,filterOff:m}),n.a.createElement(x,{timer:f}))}}]),t}(r.Component),T=a(6),L=a.n(T),A=a(15),P=a.n(A),D=(a(27),function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={items:[{id:L.a.v4(),title:"Hi, Welcome to my very first React Application: A To-Do List",completed:!1,category:"Family",display:"flex",priorityColor:"rgba(255, 255, 255, 0)"},{id:L.a.v4(),title:"You can type in the input box above and set the category and priority level. If you want to, you can reset all contents by clicking 'reset'",completed:!1,category:"Friends",display:"flex",priorityColor:"#fdfd96"},{id:L.a.v4(),title:"On my left, you can toggle a simple night/day theme and switch between a block/list layout",completed:!1,category:"Work",display:"flex",priorityColor:"#fdfd96"},{id:L.a.v4(),title:"Furthermore, I can keep track of the number of items by category and also clear all completd items with a click",completed:!1,category:"Work",display:"flex",priorityColor:"#fdfd96"},{id:L.a.v4(),title:"For your convenience, there is filter function for filtering out the differnet category",completed:!1,category:"Work",display:"flex",priorityColor:"#ff6961"},{id:L.a.v4(),title:"You can set an alert with a note within the timespan of 1 day",completed:!1,category:"Work",display:"flex",priorityColor:"rgba(255, 255, 255, 0)"},{id:L.a.v4(),title:"You can click on me to edit the content or remove me by using the bin icon.",completed:!1,category:"Others",display:"flex",priorityColor:"#fdfd96"},{id:L.a.v4(),title:"A yellow exclaimation mark signify mid-priority while a red signify high priority",completed:!1,category:"Others",display:"flex",priorityColor:"rgba(255, 255, 255, 0)"},{id:L.a.v4(),title:"I am categorised based on either: family, friends, work or others. Each have it's own icon and colors",completed:!1,category:"Others",display:"flex",priorityColor:"#ff6961"},{id:L.a.v4(),title:"Wow. You must be bored now. If you have read everything, feel free to click the reset button and start exploring. Thank You :) ",completed:!1,category:"Others",display:"flex",priorityColor:"rgba(255, 255, 255, 0)"}],colors:[{name:"Family",color:"#adbdcf",icon:"fa fa-home"},{name:"Friends",color:"#e9c1a1",icon:"fa fa-users"},{name:"Work",color:"#f0bfe1",icon:"fa fa-briefcase"},{name:"Others",color:"#7fd7ac",icon:"fa fa-archive"}],curCat:"Others",curPri:"rgba(255, 255, 255, 0.0)",priority:[{name:"Low Priority",color:"rgba(255, 255, 255, 0.0)"},{name:"Mid Priority",color:"#fdfd96"},{name:"High Priority",color:"#ff6961"}]},a.toggle=function(e){a.setState({items:a.state.items.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},a.onDelete=function(e){a.setState({items:Object(l.a)(a.state.items.filter(function(t){return t.id!==e}))})},a.curCat=function(e){a.setState({curCat:e})},a.addList=function(e){var t={id:L.a.v4(),title:e,completed:!1,category:a.state.curCat,display:"flex",priorityColor:a.state.curPri};a.filterOff(),a.listView(),a.setState({items:[].concat(Object(l.a)(a.state.items),[t])})},a.onReset=function(){a.setState({items:[]})},a.saveEdit=function(e){var t=Object(l.a)(a.state.items);t.item=e,a.setState({items:t})},a.clearCompleted=function(){a.setState({items:Object(l.a)(a.state.items.filter(function(e){return!0!==e.completed}))})},a.filter=function(e){a.setState({items:a.state.items.map(function(e){return e.display="flex"})}),a.setState({items:a.state.items.map(function(t){return t.category!==e&&(t.display="none"),t})})},a.filterOff=function(){a.setState({items:a.state.items.map(function(e){return e.display="flex",e})})},a.handlePriority=function(e){var t=a.state.priority.filter(function(t){return t.name===e});a.setState({curPri:t[0].color})},a.timer=function(e,t,a){setTimeout(function(){alert(a)},6e4*t+36e5*e)},a.darkTheme=function(){document.getElementsByTagName("body")[0].classList.add("dark")},a.lightTheme=function(){document.getElementsByTagName("body")[0].classList.remove("dark")},a.blockView=function(){var e=document.getElementsByClassName("list"),t=document.getElementsByClassName("listitem");e[0].classList.add("listgrid");for(var a=0;a<t.length;a++)t[a].classList.add("listitemgrid")},a.listView=function(){var e=document.getElementsByClassName("list"),t=document.getElementsByClassName("listitem");e[0].classList.remove("listgrid");for(var a=0;a<t.length;a++)t[a].classList.remove("listitemgrid")},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"cover"},n.a.createElement("img",{src:P.a,className:"App-logo",alt:"logo"})),n.a.createElement(C,{addList:this.addList,onReset:this.onReset,colors:this.state.colors,curCat:this.curCat,priority:this.state.priority,handlePriority:this.handlePriority}),n.a.createElement("div",{className:"blank"}),n.a.createElement("div",{className:"flex"},n.a.createElement(S,{items:this.state.items,colors:this.state.colors,clearCompleted:this.clearCompleted,filter:this.filter,filterOff:this.filterOff,timer:this.timer,darkTheme:this.darkTheme,lightTheme:this.lightTheme,blockView:this.blockView,listView:this.listView}),n.a.createElement(y,{items:this.state.items,toggle:this.toggle,onDelete:this.onDelete,saveEdit:this.saveEdit,colors:this.state.colors})))}}]),t}(r.Component));a(28),a(29),a(32),a(33);o.a.render(n.a.createElement(D,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.88e47773.chunk.js.map