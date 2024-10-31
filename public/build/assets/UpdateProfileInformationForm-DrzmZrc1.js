import{Q as g,T as x,f as r,b as a,a as o,u as t,d as n,w as m,i as V,p as _,g as c,q as b,e as k,o as u,j as w}from"./app-W2IystA1.js";import{a as p,b as v,_ as y}from"./TextInput-OAz2f8a1.js";import{P as h}from"./PrimaryButton-KmNJoqQq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={key:0},B={class:"mt-2 text-sm text-gray-800"},N={class:"mt-2 text-sm font-medium text-green-600"},E={class:"flex items-center gap-4"},P={key:0,class:"text-sm text-gray-600"},T={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:{type:Boolean},status:{type:String}},setup(d){const l=g().props.auth.user,s=x({name:l.name,email:l.email});return(f,e)=>(u(),r("section",null,[e[6]||(e[6]=a("header",null,[a("h2",{class:"text-lg font-medium text-gray-900"}," Profile Information "),a("p",{class:"mt-1 text-sm text-gray-600"}," Update your account's profile information and email address. ")],-1)),a("form",{onSubmit:e[2]||(e[2]=k(i=>t(s).patch(f.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[a("div",null,[o(y,{for:"name",value:"Name"}),o(p,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:t(s).name,"onUpdate:modelValue":e[0]||(e[0]=i=>t(s).name=i),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),o(v,{class:"mt-2",message:t(s).errors.name},null,8,["message"])]),a("div",null,[o(y,{for:"email",value:"Email"}),o(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(s).email,"onUpdate:modelValue":e[1]||(e[1]=i=>t(s).email=i),required:"",autocomplete:"username"},null,8,["modelValue"]),o(v,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),d.mustVerifyEmail&&t(l).email_verified_at===null?(u(),r("div",S,[a("p",B,[e[4]||(e[4]=n(" Your email address is unverified. ")),o(t(w),{href:f.route("verification.send"),method:"post",as:"button",class:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},{default:m(()=>e[3]||(e[3]=[n(" Click here to re-send the verification email. ")])),_:1},8,["href"])]),V(a("div",N," A new verification link has been sent to your email address. ",512),[[_,d.status==="verification-link-sent"]])])):c("",!0),a("div",E,[o(h,{disabled:t(s).processing},{default:m(()=>e[5]||(e[5]=[n("Save")])),_:1},8,["disabled"]),o(b,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:m(()=>[t(s).recentlySuccessful?(u(),r("p",P," Saved. ")):c("",!0)]),_:1})])],32)]))}};export{T as default};