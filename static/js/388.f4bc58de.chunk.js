"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[388],{928:function(e,o,n){n.d(o,{C:function(){return r},D:function(){return t}});var r=function(e){if(!e)return"Field is required"},t=function(e){return function(o){if(o.length>e)return"Max length is ".concat(e," symbols")}}},6125:function(e,o,n){n.d(o,{g:function(){return d},I:function(){return f}});var r=n(1413),t=n(5987),i=(n(2791),n(820)),s=n(184),c=["meta","children"],a=["input"],l=["input"],u=function(e){var o=e.meta,n=e.children,r=((0,t.Z)(e,c),o.touched&&o.error);return(0,s.jsxs)("div",{className:r?i.Z.error:"",children:[(0,s.jsx)("div",{children:n}),r&&(0,s.jsx)("span",{children:o.error})]})},d=function(e){var o=e.input,n=(0,t.Z)(e,a);return(0,s.jsx)(u,(0,r.Z)((0,r.Z)({},e),{},{children:(0,s.jsx)("textarea",(0,r.Z)((0,r.Z)({},o),n))}))},f=function(e){var o=e.input,n=(0,t.Z)(e,l);return(0,s.jsx)(u,(0,r.Z)((0,r.Z)({},e),{},{children:(0,s.jsx)("input",(0,r.Z)((0,r.Z)({},o),n))}))}},9388:function(e,o,n){n.r(o),n.d(o,{default:function(){return Ne}});var r=n(5671),t=n(3144),i=n(136),s=n(8557),c=n(2791),a=n(885),l=n(5987),u="ProfileInfo_descriptionBlock__r5UCX",d="ProfileInfo_mainPhoto__8TE3S",f="ProfileInfo_contact__VpXOA",p="ProfileInfo_image__mFQEq",h="ProfileInfo_content__4vBV8",m="ProfileInfo_status__jtx7e",v=n(8701),g=n(184),b=function(e){var o=(0,c.useState)(!1),n=(0,a.Z)(o,2),r=n[0],t=n[1],i=(0,c.useState)(e.status),s=(0,a.Z)(i,2),l=s[0],u=s[1];(0,c.useEffect)((function(){u(e.status)}),[e.status]);return(0,g.jsxs)("div",{children:[!r&&(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Status:"})," ",(0,g.jsx)("span",{onDoubleClick:function(){t(!0)},children:e.status||"------"})]}),r&&(0,g.jsx)("div",{children:(0,g.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},onBlur:function(){t(!1),e.updateStatus(l)},autoFocus:!0,value:l})})]})},x=n(4353),j=n(6125),C=n(6139),y=n(704),k=n(820),Z=["handleSubmit","profile","error"],P=(0,y.Z)({form:"edit-profile"})((function(e){var o=e.handleSubmit,n=e.profile,r=e.error;(0,l.Z)(e,Z);return console.log(r),(0,g.jsxs)("form",{onSubmit:o,children:[(0,g.jsx)("div",{children:(0,g.jsx)("button",{children:"Save"})}),r&&(0,g.jsx)("div",{className:k.Z.formSummaryError,children:r}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Full Name"}),": ",(0,g.jsx)(C.Z,{component:j.I,validate:[],name:"fullName",placeholder:"Full name"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Looking for a job"}),": ",(0,g.jsx)(C.Z,{component:j.I,type:"checkbox",validate:[],name:"lookingForAJob",placeholder:""})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"My professional skills"}),": ",(0,g.jsx)(C.Z,{component:j.g,validate:[],name:"lookingForAJobDescription",placeholder:"My professional skills"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"About me"}),": ",(0,g.jsx)(C.Z,{component:j.g,validate:[],name:"aboutMe",placeholder:"About me"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Contacts"}),": ",Object.keys(n.contacts).map((function(e){return(0,g.jsxs)("div",{className:f,children:[(0,g.jsx)("b",{children:e}),": ",(0,g.jsx)(C.Z,{component:j.I,validate:[],name:"contacts."+e,placeholder:e})]},e)}))]})]})})),S=n(4520),_=n(8796),O=["saveProfile"],N=function(e){var o=e.saveProfile,n=(0,l.Z)(e,O),r=(0,c.useState)(!1),t=(0,a.Z)(r,2),i=t[0],s=t[1];if(!n.profile)return(0,g.jsx)(v.p,{});return(0,g.jsx)("div",{children:(0,g.jsxs)("div",{className:u,children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:d,children:(0,g.jsx)("img",{src:n.profile.photos.large||x,className:d})}),n.isOwner&&(0,g.jsx)("div",{className:p,children:(0,g.jsx)("input",{type:"file",onChange:function(e){e.target.files&&n.savePhoto(e.target.files[0])}})})]}),i?(0,g.jsx)(P,{profile:n.profile,initialValues:n.profile,onSubmit:function(e){o(e.aboutMe,e.fullName,e.lookingForAJob,e.lookingForAJobDescription,e.contacts).then((function(){s(!1)}))}}):(0,g.jsx)(I,{goToEditMode:function(){return s(!0)},profile:n.profile,isOwner:n.isOwner}),(0,g.jsx)("div",{className:m,children:(0,g.jsx)(b,{status:n.status,updateStatus:n.updateStatus})})]})})},I=function(e){return(0,g.jsxs)("div",{children:[e.isOwner&&(0,g.jsx)("div",{children:(0,g.jsx)(S.Z,{gap:"small",wrap:"wrap",children:(0,g.jsx)(_.ZP,{type:"primary",onClick:e.goToEditMode,children:"Edit"})})}),(0,g.jsxs)("div",{className:h,children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Full Name"}),": ",e.profile.fullName]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Looking for a job"}),": ",e.profile.lookingForAJob?"yes":"no"]}),e.profile.lookingForAJob&&(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"My professional skills"}),": ",e.profile.lookingForAJobDescription]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"About me"}),": ",e.profile.aboutMe]})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.profile.contacts).map((function(o){return(0,g.jsx)(w,{contactTitle:o,contactValue:e.profile.contacts[o]},o)}))]})]})},w=function(e){return(0,g.jsxs)("div",{className:f,children:[(0,g.jsx)("b",{children:e.contactTitle}),": ",e.contactValue?e.contactValue:"none"]})},E=n(951),T="MyPosts_postsBlock__aUOHe",F="MyPosts_posts__sR+IH",M="MyPosts_title__xv4g+",A="Post_item__KIIa8",B="Post_active__G9uRK",z="Post_span__etPaP",D=function(e){return(0,g.jsxs)("div",{className:"".concat(A," ").concat(B),children:[(0,g.jsx)("img",{src:"https://freelance.ru/img/portfolio/pics/00/3D/5C/4021338.jpg"}),(0,g.jsx)("span",{children:e.message}),(0,g.jsxs)("div",{className:z,children:[(0,g.jsx)("span",{children:"like"})," ",e.likesCount]})]})},H=n(928),L=n(1046),J=n(4942),R=n(7462),U={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"},q=n(4291),X=function(e,o){return c.createElement(q.Z,(0,R.Z)({},e,{ref:o,icon:U}))};var V=c.forwardRef(X),W=n(9809),$=n.n(W),K=n(4466);function Q(e,o,n){return"boolean"===typeof e?e:void 0===o?!!n:!1!==o&&null!==o}var G=n(850),Y=n(1929),ee=n(5586),oe=n(9391),ne=n(7521),re=n(9922),te=n(6562),ie=function(e){var o=e.lineWidth,n=e.fontSizeIcon,r=e.calc,t=e.fontSizeSM;return(0,re.TS)(e,{tagFontSize:t,tagLineHeight:(0,ee.bf)(r(e.lineHeightSM).mul(t).equal()),tagIconSize:r(n).sub(r(o).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary})},se=function(e){return{defaultBg:new oe.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText}},ce=(0,te.I$)("Tag",(function(e){return function(e){var o,n,r,t=e.paddingXXS,i=e.lineWidth,s=e.tagPaddingHorizontal,c=e.componentCls,a=e.calc,l=a(s).sub(i).equal(),u=a(t).sub(i).equal();return r={},(0,J.Z)(r,c,Object.assign(Object.assign({},(0,ne.Wf)(e)),(n={display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:"".concat((0,ee.bf)(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorBorder),borderRadius:e.borderRadiusSM,opacity:1,transition:"all ".concat(e.motionDurationMid),textAlign:"start",position:"relative"},(0,J.Z)(n,"&".concat(c,"-rtl"),{direction:"rtl"}),(0,J.Z)(n,"&, a, a:hover",{color:e.defaultColor}),(0,J.Z)(n,"".concat(c,"-close-icon"),{marginInlineStart:u,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:"all ".concat(e.motionDurationMid),"&:hover":{color:e.colorTextHeading}}),(0,J.Z)(n,"&".concat(c,"-has-color"),(0,J.Z)({borderColor:"transparent"},"&, a, a:hover, ".concat(e.iconCls,"-close, ").concat(e.iconCls,"-close:hover"),{color:e.colorTextLightSolid})),(0,J.Z)(n,"&-checkable",(o={backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer"},(0,J.Z)(o,"&:not(".concat(c,"-checkable-checked):hover"),{color:e.colorPrimary,backgroundColor:e.colorFillSecondary}),(0,J.Z)(o,"&:active, &-checked",{color:e.colorTextLightSolid}),(0,J.Z)(o,"&-checked",{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}}),(0,J.Z)(o,"&:active",{backgroundColor:e.colorPrimaryActive}),o)),(0,J.Z)(n,"&-hidden",{display:"none"}),(0,J.Z)(n,"> ".concat(e.iconCls," + span, > span + ").concat(e.iconCls),{marginInlineStart:l}),n))),(0,J.Z)(r,"".concat(c,"-borderless"),{borderColor:"transparent",background:e.tagBorderlessBg}),r}(ie(e))}),se),ae=function(e,o){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(r=Object.getOwnPropertySymbols(e);t<r.length;t++)o.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(n[r[t]]=e[r[t]])}return n},le=c.forwardRef((function(e,o){var n=e.prefixCls,r=e.style,t=e.className,i=e.checked,s=e.onChange,l=e.onClick,u=ae(e,["prefixCls","style","className","checked","onChange","onClick"]),d=c.useContext(Y.E_),f=d.getPrefixCls,p=d.tag,h=f("tag",n),m=ce(h),v=(0,a.Z)(m,3),g=v[0],b=v[1],x=v[2],j=$()(h,"".concat(h,"-checkable"),(0,J.Z)({},"".concat(h,"-checkable-checked"),i),null===p||void 0===p?void 0:p.className,t,b,x);return g(c.createElement("span",Object.assign({},u,{ref:o,style:Object.assign(Object.assign({},r),null===p||void 0===p?void 0:p.style),className:j,onClick:function(e){null===s||void 0===s||s(!i),null===l||void 0===l||l(e)}})))})),ue=le,de=n(6356),fe=(0,te.bk)(["Tag","preset"],(function(e){return function(e){return(0,de.Z)(e,(function(o,n){var r=n.textColor,t=n.lightBorderColor,i=n.lightColor,s=n.darkColor;return(0,J.Z)({},"".concat(e.componentCls).concat(e.componentCls,"-").concat(o),(0,J.Z)({color:r,background:i,borderColor:t,"&-inverse":{color:e.colorTextLightSolid,background:s,borderColor:s}},"&".concat(e.componentCls,"-borderless"),{borderColor:"transparent"}))}))}(ie(e))}),se);var pe=function(e,o,n){var r,t="string"!==typeof(r=n)?r:r.charAt(0).toUpperCase()+r.slice(1);return(0,J.Z)({},"".concat(e.componentCls).concat(e.componentCls,"-").concat(o),(0,J.Z)({color:e["color".concat(n)],background:e["color".concat(t,"Bg")],borderColor:e["color".concat(t,"Border")]},"&".concat(e.componentCls,"-borderless"),{borderColor:"transparent"}))},he=(0,te.bk)(["Tag","status"],(function(e){var o=ie(e);return[pe(o,"success","Success"),pe(o,"processing","Info"),pe(o,"error","Error"),pe(o,"warning","Warning")]}),se),me=function(e,o){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(r=Object.getOwnPropertySymbols(e);t<r.length;t++)o.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(n[r[t]]=e[r[t]])}return n},ve=function(e,o){var n,r=e.prefixCls,t=e.className,i=e.rootClassName,s=e.style,l=e.children,u=e.icon,d=e.color,f=e.onClose,p=e.closeIcon,h=e.closable,m=e.bordered,v=void 0===m||m,g=me(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),b=c.useContext(Y.E_),x=b.getPrefixCls,j=b.direction,C=b.tag,y=c.useState(!0),k=(0,a.Z)(y,2),Z=k[0],P=k[1];c.useEffect((function(){"visible"in g&&P(g.visible)}),[g.visible]);var S=(0,K.o2)(d),_=(0,K.yT)(d),O=S||_,N=Object.assign(Object.assign({backgroundColor:d&&!O?d:void 0},null===C||void 0===C?void 0:C.style),s),I=x("tag",r),w=ce(I),E=(0,a.Z)(w,3),T=E[0],F=E[1],M=E[2],A=$()(I,null===C||void 0===C?void 0:C.className,(n={},(0,J.Z)(n,"".concat(I,"-").concat(d),O),(0,J.Z)(n,"".concat(I,"-has-color"),d&&!O),(0,J.Z)(n,"".concat(I,"-hidden"),!Z),(0,J.Z)(n,"".concat(I,"-rtl"),"rtl"===j),(0,J.Z)(n,"".concat(I,"-borderless"),!v),n),t,i,F,M),B=function(e){e.stopPropagation(),null===f||void 0===f||f(e),e.defaultPrevented||P(!1)},z=function(e,o,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c.createElement(V,null);if(!Q(e,o,arguments.length>4&&void 0!==arguments[4]&&arguments[4]))return[!1,null];var t="boolean"===typeof o||void 0===o||null===o?r:o;return[!0,n?n(t):t]}(h,p,(function(e){return null===e?c.createElement(V,{className:"".concat(I,"-close-icon"),onClick:B}):c.createElement("span",{className:"".concat(I,"-close-icon"),onClick:B},e)}),null,!1),D=(0,a.Z)(z,2)[1],H="function"===typeof g.onClick||l&&"a"===l.type,L=u||null,R=L?c.createElement(c.Fragment,null,L,l&&c.createElement("span",null,l)):l,U=c.createElement("span",Object.assign({},g,{ref:o,className:A,style:N}),R,D,S&&c.createElement(fe,{key:"preset",prefixCls:I}),_&&c.createElement(he,{key:"status",prefixCls:I}));return T(H?c.createElement(G.Z,{component:"Tag"},U):U)},ge=c.forwardRef(ve);ge.CheckableTag=ue;var be=ge,xe=(0,H.D)(10),je=c.memo((function(e){return(0,g.jsxs)("div",{className:T,children:[(0,g.jsx)(L.Z,{wrap:!0,className:M,children:(0,g.jsx)(be,{color:"geekblue",children:(0,g.jsx)("h3",{children:"My posts"})})}),(0,g.jsx)(Ce,{onSubmit:function(o){e.addPost(o.newPostText)}}),(0,g.jsx)("div",{className:F,children:e.posts.map((function(e){return(0,g.jsx)(D,{message:e.message,likesCount:e.likesCount},e.id)}))})]})})),Ce=(0,y.Z)({form:"profileAddNewPostForm"})((function(e){return(0,g.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,g.jsx)("div",{children:(0,g.jsx)(C.Z,{component:j.g,name:"newPostText",validate:[H.C,xe],placeholder:"Post message"})}),(0,g.jsx)("div",{children:(0,g.jsx)("button",{children:"Add Post"})})]})})),ye=je,ke=n(8687),Ze=(0,ke.$j)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(o){e((0,E.Pi)(o))}}}))(ye),Pe=function(e){return(0,g.jsxs)("div",{children:[(0,g.jsx)(N,{saveProfile:e.saveProfile,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto}),(0,g.jsx)(Ze,{})]})},Se=n(9271),_e=n(7781),Oe=function(e){(0,i.Z)(n,e);var o=(0,s.Z)(n);function n(e){return(0,r.Z)(this,n),o.call(this,e)}return(0,t.Z)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,o,n){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){var e=this.props.profile;return(0,g.jsx)("div",{children:(0,g.jsx)(Pe,{saveProfile:this.props.saveProfile,isOwner:!this.props.match.params.userId,profile:e,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto})})}}]),n}(c.Component),Ne=(0,_e.qC)((0,ke.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:E.et,getStatus:E.lR,updateStatus:E.Nf,savePhoto:E.Ju,saveProfile:E.Ii}),Se.EN)(Oe)},820:function(e,o){o.Z={error:"FormsControls_error__uPXXb",formSummaryError:"FormsControls_formSummaryError__eeAb-"}},4353:function(e,o,n){e.exports=n.p+"static/media/user.81251c2b9f690ecbfa52.png"}}]);
//# sourceMappingURL=388.f4bc58de.chunk.js.map