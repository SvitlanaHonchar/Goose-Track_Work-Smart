"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[466],{4842:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var a,i,o,r,s=t(2791),c=t(5861),d=t(9439),u=t(4687),l=t.n(u),p=t(7689),f=t(9434),A=t(5705),x=t(6727),m=t(168),h=t(6088),b=t(6151),g=(0,h.Z)(A.l0)(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 18px;\n  padding: 40px 24px;\n  background-color: #ffffff;\n  border-radius: 8px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 24px;\n    padding: 40px;\n  }\n\n  .Title {\n    margin-top: 0;\n    margin-bottom: 32px;\n\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 1.33;\n    color: #3e85f3;\n    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),\n      0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);\n\n    @media screen and (min-width: 768px) {\n      margin-bottom: 40px;\n      font-size: 24px;\n      line-height: 1;\n    }\n  }\n\n  .Inputlabel {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 1.25;\n    color: #111111;\n\n    @media screen and (min-width: 768px) {\n      font-size: 14px;\n      line-height: 1.21;\n    }\n\n    &:not(:last-child) {\n      margin-bottom: 24px;\n\n      @media screen and (min-width: 768px) {\n        margin-bottom: 18px;\n      }\n\n      &.custom-border {\n        border: 2px solid red;\n      }\n    }\n\n    &:nth-of-type(2) {\n      margin-bottom: 32px;\n\n      @media screen and (min-width: 768px) {\n        margin-bottom: 48px;\n      }\n    }\n\n    & .ErrorMessage {\n      color: #ea3d65;\n    }\n  }\n\n  .InputField {\n    padding: 14px;\n    border-radius: 8px;\n    width: 100%;\n\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.29px;\n    color: #111111;\n\n    @media screen and (min-width: 768px) {\n      padding: 18px;\n      font-size: 16px;\n      line-height: 1.12;\n    }\n\n    &::placeholder {\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 1.29;\n      color: #dce3e5;\n\n      @media screen and (min-width: 768px) {\n        font-size: 16px;\n        line-height: 1.12;\n      }\n    }\n  }\n\n  .ValidInput {\n    border: 1px solid rgba(220, 227, 229, 0.6);\n  }\n\n  .InvalidInput {\n    border: 1px solid #ea3d65;\n  }\n\n  .InputFieldPassword::placeholder {\n    letter-spacing: 8px;\n  }\n\n  .PasswordInput {\n    position: relative;\n    width: 100%;\n  }\n"]))),Z=(0,h.Z)(b.Z)(i||(i=(0,m.Z)(["\n  padding-top: 14px;\n  padding-bottom: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 11px;\n  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);\n  border-radius: 16px;\n\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.29;\n  letter-spacing: -0.02em;\n  color: #ffffff;\n  stroke: #ffffff;\n  text-transform: none;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 16px;\n    padding-bottom: 16px;\n    font-size: 18px;\n    line-height: 1.33;\n  }\n"]))),v=(0,h.Z)(b.Z)(o||(o=(0,m.Z)(["\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n"]))),w=t(885),I=t(5822),j=t(1170),N=t(3710),W=t(9569),R=t(3386),H=t(184),k=(0,x.Ry)({email:(0,x.Z_)().required("Email is required").email("Invalid email"),password:(0,x.Z_)().required("Password is required").min(6,"Password should be 6 chars minimum.").matches(/^\S*$/,"Name must not contain spaces")}),C=function(){var n=(0,f.I0)(),e=(0,p.s0)(),t=(0,s.useState)("password"),a=(0,d.Z)(t,2),i=a[0],o=a[1],r=function(){o("password"!==i?"password":"text")};return(0,H.jsx)(A.J9,{initialValues:{email:"",password:""},validationSchema:k,onSubmit:function(){var t=(0,c.Z)(l().mark((function t(a,i){var o,r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=i.setSubmitting,r=i.resetForm,t.prev=1,t.next=4,n((0,I.eU)({email:a.email,password:a.password}));case 4:"user/login/fulfilled"===t.sent.type?((0,j.CA)(),e("/calendar/month"),o(!1),r()):(0,j.x2)(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(n,e){return t.apply(this,arguments)}}(),children:function(n){var e=n.values,t=n.isSubmitting,a=n.errors,o=n.touched;return(0,H.jsxs)(g,{children:[(0,H.jsx)("p",{className:"Title",children:" Log in"}),(0,H.jsxs)("label",{className:"Inputlabel",children:["Email",(0,H.jsx)(A.gN,{className:a.email&&o.email?"InvalidInput InputField":"ValidInput InputField",type:"email",name:"email",value:e.email,placeholder:"nadiia@gmail.com",required:!0}),(0,H.jsx)(A.Bc,{name:"email",component:"div",className:"ErrorMessage"})]}),(0,H.jsxs)("label",{className:"Inputlabel ",children:[(0,H.jsx)("span",{children:"Password"}),(0,H.jsxs)("div",{className:"PasswordInput ",children:[(0,H.jsx)(A.gN,{className:a.password&&o.password?"InvalidInput InputField InputFieldPassword":"ValidInput InputField InputFieldPassword",name:"password",value:e.password,placeholder:"\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf",type:i,required:!0}),(0,H.jsx)(v,{type:"button",onClick:r,children:"password"===i?(0,H.jsx)(N.Z,{sx:{color:R.ZP.palette.primary.main}}):(0,H.jsx)(W.Z,{sx:{color:R.ZP.palette.primary.main}})})]}),(0,H.jsx)(A.Bc,{className:"ErrorMessage",name:"password",component:"div"})]}),(0,H.jsxs)(Z,{type:"submit",disabled:t,variant:"contained",children:["Submit",(0,H.jsx)("svg",{height:"18",width:"18",children:(0,H.jsx)("use",{href:w.Z+"#loginStartPage"})})]})]})}})},L=t(8870),y=t(8789),z=t.p+"static/media/desktop_goose_loginPage.da0a17a4df6e40586bd0.png",E=t.p+"static/media/desktop_goose_loginPage@2x.bfec3c300c7fc39d87e9.png",S=(0,y.ZP)(L.Z)(r||(r=(0,m.Z)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  .ContentContainer {\n    position: relative;\n\n    @media screen and (max-width: 374px) {\n      width: 100%;\n      max-width: 335px;\n    }\n\n    @media screen and (min-width: 375px) {\n      width: 335px;\n    }\n\n    @media screen and (min-width: 768px) {\n      width: 480px;\n    }\n  }\n\n  .ImageContainer {\n    position: absolute;\n    top: 250px;\n    right: -250px;\n\n    @media screen and (max-width: 1439px) {\n      display: none;\n    }\n  }\n\n  .StyledImageGoose {\n    position: absolute;\n    top: -80px;\n    right: -40px;\n    background-image: url(",");\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    width: 178px;\n    height: 414px;\n\n    @media screen and (min-device-pixel-ratio: 2) {\n      background-image: url(",");\n    }\n  }\n\n  .StyledImageMessege {\n    position: absolute;\n    top: -170px;\n    right: -50px;\n    background-image: url(",");\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    width: 177px;\n    height: 125px;\n\n    @media screen and (min-device-pixel-ratio: 2) {\n      background-image: url(",");\n    }\n  }\n\n  .Messege {\n    position: absolute;\n    top: 23%;\n    right: 11%;\n    transform: rotate(15deg);\n    display: block;\n    width: 138px;\n    height: 48px;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 1.14;\n    color: #111111;\n  }\n\n  .MessegeFocus {\n    color: #3e85f3;\n  }\n"])),z,E,"data:image/png;base64,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","data:image/png;base64,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"),B=t(1320),K=function(){return(0,H.jsx)(S,{sx:{backgroundColor:R.ZP.palette.secondary.main},children:(0,H.jsxs)("div",{className:"ContentContainer",children:[(0,H.jsx)(C,{}),(0,H.jsx)(B.Z,{link:"/register",text:"Sign up"}),(0,H.jsxs)("div",{className:"ImageContainer",children:[(0,H.jsx)("div",{className:"StyledImageGoose"}),(0,H.jsx)("div",{className:"StyledImageMessege",children:(0,H.jsxs)("span",{className:"Messege",children:["Quickly ",(0,H.jsx)("span",{className:"MessegeFocus",children:"come in"})," and write down your tasks for the day!"]})})]})]})})},Q=function(){return(0,H.jsx)("div",{children:(0,H.jsx)(K,{})})}},1320:function(n,e,t){t.d(e,{Z:function(){return d}});t(2791);var a,i=t(168),o=t(8789),r=t(1087),s=(0,o.ZP)(r.OL)(a||(a=(0,i.Z)(["\n  display: block;\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 1.16;\n  text-decoration: underline;\n  color: #3e85f3;\n\n  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),\n    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n    line-height: 1.33;\n  }\n"]))),c=t(184),d=function(n){var e=n.link,t=n.text;return(0,c.jsx)("div",{children:(0,c.jsx)(s,{to:e,children:t})})}},1170:function(n,e,t){t.d(e,{B7:function(){return c},CA:function(){return i},J:function(){return d},eh:function(){return l},i6:function(){return f},kj:function(){return p},pz:function(){return s},qM:function(){return A},rj:function(){return r},vS:function(){return x},x2:function(){return o},xH:function(){return u}});var a=t(5218),i=function(){a.ZP.success("You have logged in successfully")},o=function(){a.ZP.error("Oohps, something has gone wrong. Try again, please.")},r=function(n){a.ZP.error(n)},s=function(){a.ZP.success("Thank you for registering! Your account has been created successfully.")},c=function(){a.ZP.error("Registration failed due to an unexpected error. Please try again later.")},d=function(){a.ZP.error("Registration failed. Probably this email is already associated with an existing account. Please try again.")},u=function(n){a.ZP.success('Task has been successfully moved to the "'.concat(n,'" column'))},l=function(n){a.ZP.success('Task has been successfully deleted from the "'.concat(n,'" column'))},p=function(){a.ZP.success("Your account has been updated successfully.")},f=function(){a.ZP.error("Update failed due to an unexpected error. Please try again later.")},A=function(n){a.ZP.error(n)},x=function(){a.ZP.error("The title is required to have at least 3 letters")}},3710:function(n,e,t){var a=t(9201),i=t(184);e.Z=(0,a.Z)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},9569:function(n,e,t){var a=t(9201),i=t(184);e.Z=(0,a.Z)((0,i.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")}}]);
//# sourceMappingURL=466.21e0fff8.chunk.js.map