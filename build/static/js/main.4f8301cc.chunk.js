(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(29)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/alert.5665aa81.m4a"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(9),c=n.n(s),o=(n(17),n(1)),l=n.n(o),i=n(2),u=n(3),m=n(4),d=n(6),p=n(5),h=n(7),f=(n(19),n(10)),g=n.n(f),v={particles:{number:{value:5}}},E=function(){return r.a.createElement("header",{className:"header"},r.a.createElement(g.a,{className:"particles",params:v}),r.a.createElement("div",{className:"left"},r.a.createElement("h1",{className:"head"},r.a.createElement("span",null,"A"),"-chat"),r.a.createElement("p",null,"The best chatting experience ever.")))},y=(n(20),function(e){var t=e.name,n=e.message,a=e.time;return r.a.createElement("div",{className:"message-box"},r.a.createElement("span",null,t),r.a.createElement("p",null,n," ",r.a.createElement("span",{className:"time"},a)))}),S=function(e){var t=e.details,n=t.map(function(e,n){return r.a.createElement(y,{key:t[n].id,name:t[n].name,message:t[n].message,time:t[n].mtime})});return r.a.createElement("div",null,n)},w=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).onclick=Object(i.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=document.createElement("p")).classList.add("loader","loaderm"),document.querySelector(".message-list").appendChild(t),console.log(document.querySelector("input").value),e.next=6,fetch("https://cryptic-cliffs-40445.herokuapp.com/send-message",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.props.name,message:document.querySelector("input").value})}).catch(function(e){t.remove()});case 6:return t.remove(),e.next=9,fetch("https://cryptic-cliffs-40445.herokuapp.com/messages").then(function(e){return e.json()}).then(function(e){n.setState({messages:e})});case 9:document.querySelector("input").value="",document.querySelector(".message-list").scrollBy(0,1e4);case 11:case"end":return e.stop()}},e)})),n.state={messages:[],length:0},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(Object(i.a)(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://cryptic-cliffs-40445.herokuapp.com/messages").then(function(e){return e.json()}).then(function(t){e.setState({messages:t}),setTimeout(function(){e.setState({length:t.length})},1e3),t.length>e.state.length&&(document.querySelector("audio").play(),document.querySelector(".message-list").scrollBy(0,1e4))});case 2:case"end":return t.stop()}},t)})),1e3),document.querySelector("input").addEventListener("keypress",function(t){"Enter"===t.key&&e.onclick()})}},{key:"render",value:function(){return r.a.createElement("div",{className:"message"},r.a.createElement("div",{className:"message-list"},r.a.createElement(S,{details:this.state.messages})),r.a.createElement("div",{className:"form"},r.a.createElement("input",{placeholder:"Enter message"}),r.a.createElement("button",{onClick:this.onclick},"Send")),r.a.createElement("audio",null,r.a.createElement("source",{src:n(21)})))}}]),t}(a.Component),b=(n(22),function(e){var t=e.users,n=t.map(function(e,n){return r.a.createElement("div",{className:"fri"},r.a.createElement("div",null," ",t[n].name," "),r.a.createElement("span",null," ",t[n].joined," "))});return r.a.createElement("div",{className:"friends"},r.a.createElement("h1",{className:"f-head"},"Users of Group chat"),r.a.createElement("ol",{className:"ol"},n))}),N=(n(23),function(e){var t=e.name,n=e.users;return r.a.createElement("div",{className:"content"},r.a.createElement(b,{users:n}),r.a.createElement(w,{name:t}))}),k=(n(24),n(25),n(26),function(){document.querySelector(".register").classList.add("show"),document.querySelector(".signin").classList.add("go"),setTimeout(function(){document.querySelector(".signin").classList.add("ani")},300)}),q=function(e){var t=e.onrouteChange;return r.a.createElement("div",{className:"signin"},r.a.createElement("h1",null,"Sign In"),r.a.createElement("input",{className:"name",placeholder:"Username or Email"}),r.a.createElement("input",{className:"pin",type:"password",placeholder:"Password"}),r.a.createElement("button",{onClick:t},"Sign in"),r.a.createElement("span",{onClick:k},"Register"))},C=(n(27),function(e){var t=e.onSubmitRegister;return r.a.createElement("div",{className:"signin register"},r.a.createElement("h1",null,"Register"),r.a.createElement("input",{className:"rname",placeholder:"Username"}),r.a.createElement("input",{className:"email",placeholder:"Email"}),r.a.createElement("input",{className:"rpassword",type:"password",placeholder:"Password"}),r.a.createElement("button",{onClick:t},"Register"))}),j=function(e){var t=e.onrouteChange,n=e.onSubmitRegister;return r.a.createElement("div",{className:"home-page"},r.a.createElement(q,{onrouteChange:t}),r.a.createElement(C,{onSubmitRegister:n}))},O=n(11),x=(n(28),["family","classmates","friends","co-workers"]),T=function(e){Object(O.a)(e);setInterval(function(){document.querySelector(".word").style="transform: translateY(2rem) rotateX(80deg); opacity: 0;",setTimeout(function(){document.querySelector(".word").style="transform: translateY(0) rotateX(0); opacity: 1; border: none;";var e=Math.round(Math.random()*x.length-1),t=x[e];document.querySelector(".word").textContent=t,setTimeout(function(){document.querySelector(".word").style="transform: translateY(-2rem) rotateX(-60deg);  opacity: 0",setTimeout(function(){document.querySelector(".word").style="display: none"},700)},2e3)},100),console.log(5)},2900);return r.a.createElement("div",{className:"anime"},r.a.createElement("h2",{className:"h1"},"The best chatting interface for you and your ",r.a.createElement("span",{className:"el"}," ",r.a.createElement("span",{span:!0,className:"word"}))))},L=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).onrouteChange=Object(i.a)(l.a.mark(function t(){var n,a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={name:document.querySelector(".name").value,password:document.querySelector(".pin").value},(a=document.createElement("p")).classList.add("loader"),document.querySelector(".signin").appendChild(a),t.next=6,fetch("https://cryptic-cliffs-40445.herokuapp.com/users").then(function(e){return e.json()}).then(function(t){console.log(t,"........");if(function(){for(var e=0;e<t.length;e++)if(n.name===t[e].name&&n.password===t[e].password)return!0}())a.remove(),console.log(55555555555),e.setState({route:"home"}),e.setState({name:n.name});else{a.remove();var r=document.createElement("p");r.classList.add("err"),r.textContent="Authentication failed",document.querySelector(".signin").appendChild(r)}}).catch(function(e){var t=document.createElement("p");t.classList.add("err"),t.textContent="(Network error)",document.querySelector(".signin").appendChild(t),a.remove()});case 6:case"end":return t.stop()}},t)})),e.onSubmitRegister=function(){var t=document.querySelector(".register .email").value,n=document.querySelector(".register .rpassword").value;document.querySelector(".register .rname").value;if(""!==t&&""!==n)fetch("https://cryptic-cliffs-40445.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:document.querySelector(".register .email").value,password:document.querySelector(".register .rpassword").value,name:document.querySelector(".register .rname").value})}),e.setState({route:"home"}),e.setState({name:document.querySelector(".register .rname").value});else{var a=document.createElement("p");a.classList.add("err"),a.textContent="Please fill out the forms",document.querySelector(".register").appendChild(a)}},e.state={name:"",route:"signin",users:[]},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){fetch("https://cryptic-cliffs-40445.herokuapp.com/users").then(function(e){return e.json()}).then(function(t){e.setState({users:t})})},1e4)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(T,null),"signin"===this.state.route?r.a.createElement("div",null,r.a.createElement(j,{onrouteChange:this.onrouteChange,state:this.state,onSubmitRegister:this.onSubmitRegister})):r.a.createElement("div",null,r.a.createElement(N,{name:this.state.name,users:this.state.users})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.4f8301cc.chunk.js.map