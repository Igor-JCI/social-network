"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[528],{928:function(t,s,r){r.d(s,{C:function(){return e},D:function(){return n}});var e=function(t){if(!t)return"Field is required"},n=function(t){return function(s){if(s.length>t)return"Max length is ".concat(t," symbols")}}},6125:function(t,s,r){r.d(s,{g:function(){return d},I:function(){return p}});var e=r(1413),n=r(5987),i=(r(2791),r(820)),u=r(184),o=["meta","children"],a=["input"],c=["input"],l=function(t){var s=t.meta,r=t.children,e=((0,n.Z)(t,o),s.touched&&s.error);return(0,u.jsxs)("div",{className:e?i.Z.error:"",children:[(0,u.jsx)("div",{children:r}),e&&(0,u.jsx)("span",{children:s.error})]})},d=function(t){var s=t.input,r=(0,n.Z)(t,a);return(0,u.jsx)(l,(0,e.Z)((0,e.Z)({},t),{},{children:(0,u.jsx)("textarea",(0,e.Z)((0,e.Z)({},s),r))}))},p=function(t){var s=t.input,r=(0,n.Z)(t,c);return(0,u.jsx)(l,(0,e.Z)((0,e.Z)({},t),{},{children:(0,u.jsx)("input",(0,e.Z)((0,e.Z)({},s),r))}))}},6461:function(t,s,r){r.r(s),r.d(s,{default:function(){return F}});var e=r(5671),n=r(3144),i=r(136),u=r(5716),o=r(2791),a="ProfileInfo_descriptionBlock__r5UCX",c=r(2648),l=r(885),d=r(184),p=function(t){var s=(0,o.useState)(!1),r=(0,l.Z)(s,2),e=r[0],n=r[1],i=(0,o.useState)(t.status),u=(0,l.Z)(i,2),a=u[0],c=u[1];(0,o.useEffect)((function(){c(t.status)}),[t.status]);return(0,d.jsxs)("div",{children:[!e&&(0,d.jsx)("div",{children:(0,d.jsx)("span",{onDoubleClick:function(){n(!0)},children:t.status||"------"})}),e&&(0,d.jsx)("div",{children:(0,d.jsx)("input",{onChange:function(t){c(t.currentTarget.value)},onBlur:function(){n(!1),t.updateStatus(a)},autoFocus:!0,value:a})})]})},f=function(t){return t.profile?(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:a,children:[(0,d.jsx)("img",{src:t.profile.photos.large}),(0,d.jsx)(p,{status:t.status,updateStatus:t.updateStatus})]})}):(0,d.jsx)(c.p,{})},h=r(951),m="MyPosts_postsBlock__aUOHe",x="MyPosts_posts__sR+IH",j="Post_item__KIIa8",v="Post_active__G9uRK",g=function(t){return(0,d.jsxs)("div",{className:"".concat(j," ").concat(v),children:[(0,d.jsx)("img",{src:"https://freelance.ru/img/portfolio/pics/00/3D/5C/4021338.jpg"}),t.message,(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"like"})," ",t.likesCount]})]})},_=r(6139),Z=r(704),P=r(928),S=r(6125),C=(0,P.D)(10),k=o.memo((function(t){console.log("render");return(0,d.jsxs)("div",{className:m,children:[(0,d.jsx)("h3",{children:"My posts"}),(0,d.jsx)(y,{onSubmit:function(s){t.addPost(s.newPostText)}}),(0,d.jsx)("div",{className:x,children:t.posts.map((function(t){return(0,d.jsx)(g,{message:t.message,likesCount:t.likesCount})}))})]})})),y=(0,Z.Z)({form:"profileAddNewPostForm"})((function(t){return(0,d.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,d.jsx)("div",{children:(0,d.jsx)(_.Z,{component:S.g,name:"newPostText",validate:[P.C,C],placeholder:"Post message"})}),(0,d.jsx)("div",{children:(0,d.jsx)("button",{children:"Add Post"})})]})})),b=k,I=r(8687),N=(0,I.$j)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(s){t((0,h.Pi)(s))}}}))(b),w=function(t){return(0,d.jsxs)("div",{children:[(0,d.jsx)(f,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,d.jsx)(N,{})]})},U=r(9271),A=r(7781),D=function(t){(0,i.Z)(r,t);var s=(0,u.Z)(r);function r(t){return(0,e.Z)(this,r),s.call(this,t)}return(0,n.Z)(r,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){var t=this.props.profile;return(0,d.jsx)("div",{children:(0,d.jsx)(w,{profile:t,status:this.props.status,updateStatus:this.props.updateStatus})})}}]),r}(o.Component),F=(0,A.qC)((0,I.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getUserProfile:h.et,getStatus:h.lR,updateStatus:h.Nf}),U.EN)(D)},820:function(t,s){s.Z={error:"FormsControls_error__uPXXb",formSummaryError:"FormsControls_formSummaryError__eeAb-"}}}]);
//# sourceMappingURL=528.a82d9d15.chunk.js.map