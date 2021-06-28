(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8333],{7037:function(e,t,s){"use strict";var n,a=s(7294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}t.Z=function(e){return a.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 29.25 29.25"},e),n||(n=a.createElement("path",{"data-name":"Icon ionic-ios-checkmark-circle",d:"M14.625 0A14.625 14.625 0 1029.25 14.625 14.623 14.623 0 0014.625 0zm7.488 10.582l-9.4 9.443h-.008a1.27 1.27 0 01-.816.387 1.231 1.231 0 01-.823-.4l-3.941-3.939a.28.28 0 010-.4l1.256-1.248a.272.272 0 01.394 0l3.122 3.122 8.578-8.641a.278.278 0 01.2-.084.255.255 0 01.2.084l1.23 1.273a.277.277 0 01.008.403z",fill:"currentColor"})))}},2161:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return P}});var n=s(5893),a=s(6156),i=s(1163),r=s(7294),l=s(463),o=s(9226),d=s(4015),c=s(7667),m=s(6570),u=s(9299),x=s(2283),f=s(7037),p=s(1089),h=s(1455);function b(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function j(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?b(Object(s),!0).forEach((function(t){(0,a.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):b(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var g=function(e){var t,s,a=e.isVerified,i=e.setPublicAddressVerified,l=(0,o.I0)(),d=(0,x.cI)(),c=d.formState,m=d.register,u=d.handleSubmit,b=d.watch,g=(0,r.useState)(!1),y=g[0],w=g[1],_=/^01[0-9a-fA-F]{64}$/,v=/^02[0-9a-fA-F]{66}$/,N=function(e){return _.test(e)?"valid_ed25519":!!v.test(e)&&"valid_secp256k1"},O=b("publicAddress");(0,r.useEffect)((function(){!1===N(O)&&i(!1)}),[O]);return(0,n.jsxs)("form",{className:"pt-8",onSubmit:u((function(e){var t=e.publicAddress;w(!0),l((0,h.Kt)({pubAddress:t},(function(){i(!0)}),(function(){w(!1)})))})),children:[(0,n.jsx)("p",{className:"text-2.5xl whitespace-pre-line animate__animated animate__fadeInLeft animate__delay-2s",children:"Please enter the public address of your validator node and\npress submit"}),(0,n.jsx)("p",{className:"text-sm mt-2 text-dark1 animate__animated animate__fadeInLeft animate__delay-4s",children:"Clicking below will open up the hellosign document for capturing your electronic signature"}),(0,n.jsxs)("div",{className:"md:relative mt-12 animate__animated animate__fadeInUp animate__delay-6s",children:[(0,n.jsx)("input",j({type:"text",readOnly:a,className:"w-full h-16 text-xl px-7 md:pr-72 rounded-full shadow-md focus:outline-none",name:"publicAddress"},m("publicAddress",{validate:function(e){return!1!==N(e)||"This is not a valid address"}}))),(0,n.jsx)("span",{className:"md:absolute right-0",children:(0,n.jsx)(p.z,{type:"submit",isDisabled:y||!O,isLoading:y,title:"Verify",className:"text-lg text-white w-full md:w-64 h-16 rounded-full bg-primary focus:outline-none mt-2 md:mt-0 disabled:opacity-30 disabled:cursor-not-allowed"})}),a&&(0,n.jsx)(f.Z,{className:"absolute bottom-4 -right-20 hidden md:block text-primary text-3xl"})]}),(null===(t=c.errors)||void 0===t?void 0:t.publicAddress)&&(0,n.jsx)("p",{className:"pl-7 mt-2 text-primary",children:null===(s=c.errors.publicAddress)||void 0===s?void 0:s.message})]})},y=function(e){var t=e.isUploaded,s=e.onUpload,a=e.onContinue,i=e.onHandleViewGuide;return(0,n.jsxs)("div",{className:"pt-8",children:[(0,n.jsx)("p",{className:"text-2.5xl animate__animated animate__fadeInLeft animate__delay-2s",children:"Thanks"}),(0,n.jsx)("p",{className:"text-sm mt-2 text-dark1 whitespace-pre-line animate__animated animate__fadeInLeft animate__delay-4s",children:"Thanks! Now we need to verify this node address is owned or controlled by you. Please follow\nthe steps below:"}),(0,n.jsxs)("div",{className:"mt-12 mr-8",children:[(0,n.jsxs)("div",{className:"flex animate__animated animate__fadeInUp animate__delay-6s",children:[(0,n.jsx)("p",{className:"text-2xl -mt-2 md:mt-0",children:"1."}),(0,n.jsxs)("div",{className:"flex-grow md:flex ml-8 md:items-end",children:[(0,n.jsx)("p",{className:"text-sm md:flex-grow pb-1",children:"Download this message file for signing."}),(0,n.jsx)("button",{type:"button",className:"bg-primary rounded-full text-white w-32 h-8 shadow-md focus:outline-none",children:(0,n.jsx)("a",{href:"/files/SAMPLE.pdf",download:!0,children:"Download"})})]})]}),(0,n.jsxs)("div",{className:"flex my-8 animate__animated animate__fadeInUp animate__delay-7s",children:[(0,n.jsx)("p",{className:"text-2xl -mt-2 md:mt-0",children:"2."}),(0,n.jsxs)("div",{className:"flex-grow md:flex ml-8 md:items-end",children:[(0,n.jsx)("p",{className:"text-sm md:flex-grow pb-1",children:"Sign the message with your node. See guide for more details."}),(0,n.jsx)("button",{type:"button",className:"bg-primary rounded-full text-white w-32 h-8 shadow-md focus:outline-none",onClick:i,children:"View Guide"})]})]}),(0,n.jsxs)("div",{className:"flex animate__animated animate__fadeInUp animate__delay-8s",children:[(0,n.jsx)("p",{className:"text-2xl -mt-2 md:mt-0",children:"3."}),(0,n.jsxs)("div",{className:"flex-grow md:flex ml-8 md:items-end",children:[(0,n.jsx)("p",{className:"text-sm md:flex-grow pb-1",children:"Upload the signed file for the system to check."}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("button",{type:"button",className:"bg-primary rounded-full text-white w-32 h-8 shadow-md focus:outline-none",onClick:s,children:"Upload"}),t&&(0,n.jsx)(f.Z,{className:"-mr-8 ml-4 mt-2 text-primary text-base"})]})]})]})]}),(0,n.jsx)("button",{type:"button",className:"text-lg text-white w-full md:w-64 h-16 rounded-full bg-primary focus:outline-none mt-12 disabled:opacity-30 md:hidden",disabled:!t,onClick:a,children:"Continue"})]})},w=s(733),_=s.n(w),v=function(e){var t=e.status,s=e.onContinue;return(0,n.jsxs)("div",{className:"pt-8",children:["checking"===t&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{className:"text-2.5xl animate__animated animate__fadeInLeft animate__delay-2s",children:"Thank you"}),(0,n.jsx)("p",{className:"text-sm mt-2 text-dark1 whitespace-pre-line animate__animated animate__fadeInLeft animate__delay-4s",children:"We are checking your message file. Do not exit this screen."}),(0,n.jsx)("div",{className:"md:relative mt-24 animate__animated animate__fadeIn animate__delay-6s",children:(0,n.jsx)(_(),{type:"spinningBubbles",color:"#FF473E",width:137,height:141})})]}),"succeed"===t&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.Z,{className:"text-6xl 2xl:text-5xl text-success"}),(0,n.jsxs)("p",{className:"mt-12 text-2.5xl",children:["Your node is: ",(0,n.jsx)("span",{className:"text-success",children:"Verified"})]}),(0,n.jsx)("p",{className:"text-sm text-dark1 mt-1",children:"Way to go! Your signed message has verified your node. This step is complete."})]}),"failed"===t&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{src:"/images/ic_x.svg",alt:"fail"}),(0,n.jsxs)("p",{className:"mt-12 text-2.5xl",children:["Your node is: ",(0,n.jsx)("span",{className:"text-primary",children:"Not Verified"})]}),(0,n.jsx)("p",{className:"text-sm text-dark1 mt-1",children:"Please go back and start the previous step again. If this has happened more than once, contact support."})]}),(0,n.jsx)("button",{type:"button",className:"text-lg text-white w-full md:w-64 h-16 rounded-full bg-primary focus:outline-none mt-12 disabled:opacity-30 md:hidden ".concat("checking"!==t?"block":""),onClick:s,children:"Continue"})]})},N=s(3022);function O(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function k(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?O(Object(s),!0).forEach((function(t){(0,a.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):O(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var P=(0,d.a)((function(){var e=(0,o.I0)(),t=(0,r.useState)(1),s=t[0],a=t[1],d=(0,r.useState)(!1),x=d[0],f=d[1],p=(0,r.useState)(!1),b=p[0],j=p[1],w=(0,r.useState)("checking"),_=w[0],O=w[1],P=(0,r.useState)(!1),S=P[0],C=P[1],I=function(e){"open"===e?(document.getElementById("custom-content").classList.add("remove-animation"),C(!0)):"close"===e&&C(!1)},D=(0,r.useCallback)((function(t){var s=t[0],n={lastModified:s.lastModified,lastModifiedDate:s.lastModifiedDate,type:s.type},a=new File([s],"signature",n);I("close"),C(!1),e((0,h.Dr)({newFile:a},(function(){j(!0)})))}),[]),E=(0,l.u)({multiple:!1,onDrop:D}),F=E.getRootProps,A=E.getInputProps,U=(0,i.useRouter)(),V=function(){3===s?(U.push("/onboard"),e((0,N.Nq)({node_verified_at:!0}))):a(s+1)},L=function(){return 1===s?x:2!==s||b};return(0,n.jsx)("div",{className:"flex justify-center min-h-screen",children:(0,n.jsxs)("div",{className:"w-full md:max-w-screen-2xl md:p-9 p-4 flex flex-col",children:[(0,n.jsx)(m.Z,{theme:"dark"}),(0,n.jsx)("div",{className:"flex-grow md:flex md:items-center justify-center mt-12 md:mt-0",children:(0,n.jsx)(u.Z,{title:"Verify Node Ownership",description:"Please choose Sign In if you have an existing account or Register if this is your first time here.",imageUrl:"/images/img_ownership_blur.png",currentStep:s,totalSteps:3,stepContent:1===s?(0,n.jsx)(g,{setPublicAddressVerified:f,isVerified:x}):2===s?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{isUploaded:b,onUpload:function(){return I("open")},onContinue:V,onHandleViewGuide:function(){e((0,h.S5)())}}),S&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"backdrop-filter backdrop-blur-sm justify-center items-center flex fixed inset-0 z-50",children:(0,n.jsxs)("div",{className:"w-full max-w-2xl shadow-2xl mx-4 relative bg-white",children:[(0,n.jsx)("div",k(k({},F()),{},{children:(0,n.jsx)("div",{className:"py-36 flex flex-col items-center justify-between border-2 border-dashed border-gray",children:(0,n.jsxs)("div",{className:"flex flex-col items-center justify-between",children:[(0,n.jsx)("input",k({},A())),(0,n.jsx)("img",{src:"/images/ic_upload.svg",alt:"upload",className:"align-middle mb-6"}),(0,n.jsx)("button",{type:"button",className:"mb-2.5 text-lg text-white w-full px-14 py-5 shadow-lg rounded-full bg-primary hover:opacity-40 focus:outline-none",children:"Upload Signed File"}),(0,n.jsx)("span",{className:"hidden md:block",children:"Or Drap File Here"})]})})})),(0,n.jsx)("button",{type:"button",className:"transform -translate-x-1/2 absolute left-1/2 bottom-6 text-primary text-xs underline",onClick:function(){return I("close")},children:"Cancel"})]})}),(0,n.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]})]}):3===s?(setTimeout((function(){O("succeed")}),3e3),(0,n.jsx)(v,{status:_,onContinue:V})):(0,n.jsx)(n.Fragment,{}),showNextButton:L(),showContinueButton:L(),continueButtonTitle:3===s?"Complete":"Next",onPrev:function(){1===s?U.back():a(s-1)},onNext:V})}),(0,n.jsx)(c.Z,{theme:"dark"})]})})}),"onboarding")},649:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/onboard/verify-node-ownership",function(){return s(2161)}])}},function(e){e.O(0,[9774,1282,319,6993,733,2283,463,3113],(function(){return t=649,e(e.s=t);var t}));var t=e.O();_N_E=t}]);