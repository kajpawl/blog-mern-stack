(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,n){e.exports=n(270)},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},158:function(e,t){},176:function(e,t,n){},228:function(e,t,n){},229:function(e,t,n){},230:function(e,t,n){},265:function(e,t,n){},266:function(e,t,n){},267:function(e,t,n){},269:function(e,t,n){},270:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(37),o=n.n(c),s=n(18),l=n(23),i=n(29),u=n(100),p=n(51),m=n(12),d=n(6),f=n.n(d),h=n(20),v=n(26),E=n.n(v),b="https://damp-river-81166.herokuapp.com/api",g="https://damp-river-81166.herokuapp.com",O=function(e){return"app/".concat("posts","/").concat(e)},P={data:[],request:{pending:!1,error:null,success:null},singlePost:{},amount:0,postsPerPage:10,presentPage:1},j=function(e){return e.posts.singlePost},y=function(e){return e.posts.request},k=function(e){var t=e.posts;return Math.ceil(t.amount/t.postsPerPage)},x=O("LOAD_POSTS"),N=O("LOAD_SINGLE_POST"),w=O("LOAD_POSTS_PAGE"),_=O("START_REQUEST"),C=O("END_REQUEST"),S=O("ERROR_REQUEST"),A=O("RESET_REQUEST"),R=O("RATE_POST"),q=function(e){return{post:e,type:N}},T=function(e){return{payload:e,type:w}},D=function(){return{type:_}},B=function(){return{type:C}},M=function(e){return{error:e,type:S}},I=function(e,t){return{value:e,id:t,type:R}},U=function(e){return function(){var t=Object(h.a)(f.a.mark(function t(n){var a;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(D()),t.prev=1,t.next=4,E.a.get("".concat(b,"/posts/").concat(e));case 4:a=t.sent,n(q(a.data)),n(B()),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(M(t.t0.message));case 12:case"end":return t.stop()}},t,null,[[1,9]])}));return function(e){return t.apply(this,arguments)}}()},L=function(e,t){return function(){var n=Object(h.a)(f.a.mark(function n(a){return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E.a.put("".concat(b,"/posts/").concat(e,"/").concat(t));case 3:a(I(e,t)),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),a(M(n.t0.message));case 9:case"end":return n.stop()}},n,null,[[0,6]])}));return function(e){return n.apply(this,arguments)}}()};var F=Object(i.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case x:return Object(m.a)({},e,{data:t.payload});case N:return Object(m.a)({},e,{singlePost:t.post});case _:return Object(m.a)({},e,{request:{pending:!0,error:null,success:null}});case C:return Object(m.a)({},e,{request:{pending:!1,error:null,success:!0}});case S:return Object(m.a)({},e,{request:{pending:!1,error:t.error,success:!1}});case A:return Object(m.a)({},e,{request:{pending:!1,error:null,success:null},singlePost:{}});case w:return Object(m.a)({},e,{postsPerPage:t.payload.postsPerPage,presentPage:t.payload.presentPage,amount:t.payload.amount,data:Object(p.a)(t.payload.posts)});case R:var n=e.data,a=e.singlePost,r="downvote"===t.value?-1:1,c=n.map(function(e){return e.id===t.id?Object(m.a)({},e,{rate:e.rate+r}):e});return Object(m.a)({},e,{data:c,singlePost:Object(m.a)({},a,{rate:a.rate+r})});default:return e}}}),Q=Object(i.e)(F,Object(i.d)(Object(i.a)(u.a))),W=n(7),z=n(8),G=n(10),J=n(9),H=n(11),K=n(25),Y=(n(130),function(e){var t=e.children;return r.a.createElement("div",{className:"container-fluid"},t)}),V=(n(131),function(e){e.links,e.location;return r.a.createElement("h1",{className:"logo"},"Blog.app")}),X=(n(132),function(e){var t=e.links,n=e.location;return r.a.createElement("ul",{className:"main-menu"},t.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(s.b,{className:n.pathname===e.path?"active":"",to:e.path},e.title))}))}),Z=Object(K.e)(function(e){return r.a.createElement(X,e)}),$=(n(136),function(e){function t(){var e,n;Object(W.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(G.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(r)))).state={links:[{path:"/",title:"Home"},{path:"/posts",title:"Posts"},{path:"/posts/random",title:"Random post"},{path:"/posts/new",title:"Add post"},{path:"/contact",title:"Contact"}]},n}return Object(H.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this.state.links;return r.a.createElement("nav",{className:"navbar"},r.a.createElement(V,null),r.a.createElement(Z,{links:e}))}}]),t}(r.a.Component)),ee=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(Y,null,r.a.createElement($,null),t))},te=(n(137),function(e){var t=e.children;return r.a.createElement("h1",{className:"page-title"},t)}),ne=n(24),ae=(n(138),function(e){var t=e.variant,n=void 0===t?"":t,a=e.children,c=Object(ne.a)(e,["variant","children"]);return r.a.createElement("button",Object.assign({},c,{className:"button button--".concat(n)}),a)}),re=(n(139),function(e){var t=e.ratePost,n=e.id,a=e.rate;return r.a.createElement("div",{className:"rating-post"},r.a.createElement("span",null,"Rate this post:"),r.a.createElement(ae,{variant:"info",onClick:function(){return t("upvote",n)}},"+"),a||0,r.a.createElement(ae,{variant:"info",onClick:function(){return t("downvote",n)}},"-"))}),ce=(n(140),function(e){var t=e.children,n=Object(ne.a)(e,["children"]);return r.a.createElement("h2",Object.assign({},n,{className:"small-title"}),t)}),oe=n(102),se=n.n(oe),le=function(e){var t=e.children,n=Object(ne.a)(e,["children"]);return r.a.createElement("div",Object.assign({},n,{className:"html-box"}),se()(t))},ie=(n(176),function(e){var t=e.id,n=e.title,a=e.content,c=e.author,o=e.rate,l=e.ratePost;return r.a.createElement("article",{className:"post-summary"},r.a.createElement(s.b,{to:"posts/".concat(t)},r.a.createElement(ce,null,n)),r.a.createElement(re,{ratePost:l,id:t,rate:o}),r.a.createElement("p",{className:"post-author"},"Author: ",c),r.a.createElement(le,{className:"post-content"},function(e,t){return t<1?"The content must be longer than 1 symbol.":e.length<=t?e:e.substr(0,e.lastIndexOf(" ",t))+"..."}(a,250)),r.a.createElement(s.b,{to:"posts/".concat(t)},r.a.createElement(ae,{variant:"primary"},"Read more")),r.a.createElement(s.b,{to:"posts/edit/".concat(t)},r.a.createElement(ae,{variant:"primary"},"Update post")))}),ue=function(e){var t=e.posts,n=e.ratePost;return r.a.createElement("div",null,r.a.createElement("section",{className:"posts-list"},t?t.map(function(e){return r.a.createElement(ie,Object.assign({key:e.id},e,{ratePost:n}))}):null))},pe=n(50),me=(n(228),function(){return r.a.createElement(pe.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),de=n(34),fe=(n(229),function(e){var t=e.variant,n=void 0===t?"":t,a=e.children,c=Object(ne.a)(e,["variant","children"]);return r.a.createElement(pe.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",Object.assign({},c,{className:"alert alert--".concat(n)}),function(){switch(n){case"info":return r.a.createElement(de.c,null);case"success":return r.a.createElement(de.a,null);case"warning":case"error":return r.a.createElement(de.b,null);default:return r.a.createElement(de.c,null)}}(),r.a.createElement("span",{className:"alert__desc"},a)))}),he=(n(230),function(e){function t(){var e,n;Object(W.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(G.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(r)))).state={presentPage:n.props.initialPage||1,visible:!1!==n.props.visible},n.changePage=function(e){var t=n.props.onPageChange;n.setState({presentPage:e}),t(e)},n}return Object(H.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this.props.pages,t=this.state,n=t.presentPage,a=t.visible,c=this.changePage;return r.a.createElement("div",{className:"pagination"},a&&r.a.createElement("ul",{className:"pagination__list"},1!==n&&r.a.createElement("li",{key:0,onClick:function(){c(n-1)},className:"pagination__list__item 0"},"\u2039"),Object(p.a)(Array(e)).map(function(e,t){return r.a.createElement("li",{key:++t,onClick:function(){c(t)},className:"pagination__list__item".concat(t===n?" pagination__list__item--active":"")},t)}),n!==e&&r.a.createElement("li",{key:"last",onClick:function(){c(n+1)},className:"pagination__list__item last"},"\u203a")))}}]),t}(r.a.Component)),ve=function(e){function t(){var e,n;Object(W.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(G.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(r)))).state={initialPage:1,postsNumber:n.props.postsPerPage||10,pagination:!1!==n.props.pagination},n.loadPostPage=function(e){(0,n.props.loadPostsByPage)(e)},n}return Object(H.a)(t,e),Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.loadPostsByPage,t=this.state;e(t.initialPage,t.postsNumber)}},{key:"render",value:function(){var e=this.props.request,t=e.pending,n=e.error,a=e.success,c=this.props,o=c.posts,s=c.pages,l=c.ratePost,i=this.loadPostPage,u=this.state.pagination;return r.a.createElement("div",null,(t||!a)&&r.a.createElement(me,null),r.a.createElement("ul",null,!t&&a&&o&&r.a.createElement("div",null,r.a.createElement(ue,{posts:o,ratePost:l}))),!t&&n&&r.a.createElement(fe,{variant:"error"},n),!t&&a&&0===o.length&&r.a.createElement(fe,{variant:"info"},"No posts"),r.a.createElement(he,{pages:s,onPageChange:i,visible:u}))}}]),t}(r.a.Component),Ee=Object(l.b)(function(e){return{posts:(t=e,t.posts.data),request:y(e),pages:k(e)};var t},function(e){return{loadPostsByPage:function(t,n){return e(function(e,t){return function(){var n=Object(h.a)(f.a.mark(function n(a){var r,c,o,s,l;return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(D()),n.prev=1,void 0===e&&(e=1),c=(e-1)*(r=t||10),o=r,n.next=8,E.a.get("".concat(b,"/posts/range/").concat(c,"/").concat(o));case 8:s=n.sent,l={posts:s.data.posts,amount:s.data.amount,postsPerPage:r,presentPage:e},a(T(l)),a(B()),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(1),a(M(n.t0.message));case 17:case"end":return n.stop()}},n,null,[[1,14]])}));return function(e){return n.apply(this,arguments)}}()}(t,n))},ratePost:function(t,n){return e(L(t,n))}}})(ve),be=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(te,null,"Blog"),r.a.createElement(Ee,{postsPerPage:3,pagination:!1})))},ge=function(e){function t(){return Object(W.a)(this,t),Object(G.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this.props.postsCount;return r.a.createElement("div",{className:"PostsCounter"},e?r.a.createElement("div",null,"Posts: ",e):r.a.createElement("div",null,"No posts found"))}}]),t}(r.a.Component),Oe=Object(l.b)(function(e){return{postsCount:(t=e,t.posts.amount)};var t})(ge),Pe=function(){return r.a.createElement("div",null,r.a.createElement(te,null,"Posts list"),r.a.createElement(Oe,null),r.a.createElement(Ee,null))},je=n(52),ye=function(e){function t(){var e,n;Object(W.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(G.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(r)))).state={isMounted:!1},n}return Object(H.a)(t,e),Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.loadSinglePost,n=e.match,a=e.loadRandomPost;"random"!==n?t(n):a(),this.setState({isMounted:!0})}},{key:"componentWillUnmount",value:function(){this.setState({isMounted:!1})}},{key:"render",value:function(){var e=this.props,t=e.singlePost,n=e.location,a=e.ratePost,c=this.props.singlePost,o=c.id,l=c.title,i=c.author,u=c.content,p=c.rate,m=this.props.request,d=m.pending,f=m.error,h=m.success,v=this.state.isMounted;return r.a.createElement("div",null,(d||!h)&&r.a.createElement(me,null),!d&&h&&t&&r.a.createElement("div",null,r.a.createElement(te,null,l),r.a.createElement("p",{className:"post-author"},"Author: ",i),r.a.createElement(le,{className:"post-content"},u),v&&r.a.createElement(je.FacebookProvider,{appId:"903746783320802"},r.a.createElement(je.Comments,{href:"".concat(g,"/").concat(n.pathname)}),r.a.createElement(s.b,{to:"/posts"},r.a.createElement(ae,{variant:"primary"},"Back to posts")),r.a.createElement(je.ShareButton,{className:"button button--primary",href:"".concat(g,"/").concat(n.pathname)},"Share on Facebook"),r.a.createElement(re,{ratePost:a,id:o,rate:p}))),!d&&f&&r.a.createElement(fe,{variant:"error"},f),!d&&h&&!t&&r.a.createElement(fe,{variant:"info"},"Post not found"))}}]),t}(r.a.Component),ke=Object(l.b)(function(e){return{singlePost:j(e),request:y(e)}},function(e){return{loadSinglePost:function(t){return e(U(t))},loadRandomPost:function(){return e(function(){var e=Object(h.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(D()),e.prev=1,e.next=4,E.a.get("".concat(b,"/posts/random"));case 4:n=e.sent,t(q(n.data)),t(B()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(M(e.t0.message));case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}())},ratePost:function(t,n){return e(L(t,n))}}})(ye),xe=function(e){return r.a.createElement("div",null,r.a.createElement(ke,{location:e.location,match:e.match.params.id}))},Ne=function(e){return r.a.createElement("div",null,r.a.createElement(ke,{location:e.location,match:"random"}))},we=n(49),_e=n(103),Ce=n.n(_e),Se=(n(263),n(264),n(265),function(e){var t=e.value,n=e.label,a=e.onChange,c=Object(ne.a)(e,["value","label","onChange"]);return r.a.createElement("label",{className:"text-field"},r.a.createElement("span",{className:"text-field__label ".concat(!t.length>0?"text-field__label--big":"")},n),r.a.createElement("input",Object.assign({},c,{value:t,onChange:a,className:"text-field__input"})))}),Ae=(n(266),function(e){var t=e.children;return r.a.createElement("h2",{className:"section-title"},t)}),Re=(n(267),function(e){function t(){var e,n;Object(W.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(G.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(r)))).state={post:{title:"",author:"",content:""}},n.handleChange=function(e){var t=n.state.post;n.setState({post:Object(m.a)({},t,Object(we.a)({},e.target.name,e.target.value))})},n.handleEditor=function(e){var t=n.state.post;n.setState({post:Object(m.a)({},t,{content:e})})},n.handlePostSubmit=function(e){var t=n.props,a=t.addPost,r=t.editPost,c=t.match,o=t.resetRequest,s=n.state.post;e.preventDefault(),c.params.id?(o(),r(s,c.params.id)):a(s)},n.handlePostDelete=function(e){var t=n.props,a=t.resetRequest,r=t.deletePost;a(),r(e)},n}return Object(H.a)(t,e),Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(f.a.mark(function e(){var t,n,a,r,c;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.resetRequest,a=t.loadSinglePost,r=t.match,n(),!r.params.id){e.next=5;break}return e.next=5,a(r.params.id);case 5:c=this.props.singlePost,r.params.id&&this.setState({post:c});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.post,t=this.handleChange,n=this.handleEditor,a=this.handlePostSubmit,c=this.handlePostDelete,o=this.props,s=o.request,l=o.match,i=o.singlePost;return s.error?r.a.createElement(fe,{variant:"error"},s.error):!i.title&&s.success?r.a.createElement(fe,{variant:"success"},l.params.id?"Post has been updated!":"Post has been added!"):s.pending?r.a.createElement(me,null):r.a.createElement("form",{onSubmit:a},r.a.createElement(Se,{label:"Title",value:e.title,onChange:t,name:"title"}),r.a.createElement(Se,{label:"Author",value:e.author,onChange:t,name:"author"}),r.a.createElement(Ae,null,"Edit post content"),r.a.createElement(Ce.a,{className:"content-editor",text:e.content,onChange:n,options:{placeholder:!1,toolbar:{buttons:["bold","italic","underline","anchor","h2","h3"]}}}),r.a.createElement(ae,{variant:"primary"},l.params.id?"Update post":"Add post"),l.params.id&&r.a.createElement("button",{type:"button",onClick:function(e){return c(l.params.id)},className:"button button--danger"},"Delete post"))}}]),t}(r.a.Component)),qe=Object(l.b)(function(e){return{request:y(e),singlePost:j(e)}},function(e){return{addPost:function(t){return e(function(e){return function(){var t=Object(h.a)(f.a.mark(function t(n){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(D()),t.prev=1,t.next=4,E.a.post("".concat(b,"/posts"),e);case 4:n(B()),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),n(M(t.t0.message));case 10:case"end":return t.stop()}},t,null,[[1,7]])}));return function(e){return t.apply(this,arguments)}}()}(t))},loadSinglePost:function(t){return e(U(t))},editPost:function(t,n){return e(function(e,t){return function(){var n=Object(h.a)(f.a.mark(function n(a){return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(D()),n.prev=1,n.next=4,E.a.put("".concat(b,"/posts/").concat(t),e);case 4:a(B()),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),a(M(n.t0.message));case 10:case"end":return n.stop()}},n,null,[[1,7]])}));return function(e){return n.apply(this,arguments)}}()}(t,n))},resetRequest:function(){return e({type:A})},deletePost:function(t){return e(function(e){return function(){var t=Object(h.a)(f.a.mark(function t(n){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(D()),t.prev=1,t.next=4,E.a.delete("".concat(b,"/posts/").concat(e));case 4:n(B()),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),n(M(t.t0.message));case 10:case"end":return t.stop()}},t,null,[[1,7]])}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(Re),Te=function(e){return r.a.createElement("div",null,r.a.createElement(te,null,"Add post"),r.a.createElement(qe,{match:e.match}))},De=function(e){return r.a.createElement("div",null,r.a.createElement(te,null,"Edit post"),r.a.createElement(qe,{match:e.match}))},Be=function(){return r.a.createElement("div",null,r.a.createElement(te,null,"Contact"),r.a.createElement("div",{className:"contact-content"},r.a.createElement("div",{className:"address"},"Your Favourite Blog Page Ltd.",r.a.createElement("br",null),"314 Pennsylvania Avenue",r.a.createElement("br",null),"Washington, WA 200001",r.a.createElement("br",null)),r.a.createElement("p",null,"Mobile Number: ",r.a.createElement("a",{href:"tel:+02079143411"},"207-914-3411"))),r.a.createElement("a",{href:"https://github.com/kajpawl/",style:{position:"fixed",bottom:"26px",left:0,right:0,textAlign:"center",fontSize:"14px"}},"\xa9 Kajetan Pawliszyn 2019"))},Me=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 Not Found"))},Ie=function(e){function t(){return Object(W.a)(this,t),Object(G.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(z.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo({top:0,left:0})}},{key:"render",value:function(){return this.props.children}}]),t}(a.Component),Ue=Object(K.e)(Ie),Le=function(e){function t(){return Object(W.a)(this,t),Object(G.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){return r.a.createElement(Ue,null,r.a.createElement(ee,null,r.a.createElement(K.c,null,r.a.createElement(K.a,{path:"/",exact:!0,component:be}),r.a.createElement(K.a,{path:"/posts",exact:!0,component:Pe}),r.a.createElement(K.a,{path:"/posts/random",exact:!0,component:Ne}),r.a.createElement(K.a,{path:"/posts/new",exact:!0,component:Te}),r.a.createElement(K.a,{path:"/posts/edit/:id",exact:!0,component:De}),r.a.createElement(K.a,{path:"/posts/:id",exact:!0,component:xe}),r.a.createElement(K.a,{path:"/contact",exact:!0,component:Be}),r.a.createElement(K.a,{component:Me}))))}}]),t}(r.a.Component);n(268),n(269);o.a.render(r.a.createElement(function(){return r.a.createElement(l.a,{store:Q},r.a.createElement(s.a,null,r.a.createElement(Le,null)))},null),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.6aebaf8d.chunk.js.map