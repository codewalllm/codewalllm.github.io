import{n as e,h as l}from"./element-plus.d9718458.js";import{_ as o}from"./Form.c4ec9d19.js";import"./vue.ea117135.js";import{u as i}from"./vuex.16220312.js";import{d as a,k as t,b as d,M as r,O as s,u as n,o as u,a as m,S as g,c as v,U as f,F as p}from"./@vue.eb62a264.js";import{a as c}from"./index.f86f8509.js";const b={class:"dialog-footer"},F=c(a({__name:"DialogForm",props:{dialogForm:{type:Object,default:{visible:!1,title:"标题",width:"40%",formList:[{required:!0,type:"select",label:"存放方式",key:"svnorgit",options:[{label:"svn",value:"svn"},{label:"git",value:"git"}]},{required:!0,type:"input",label:"代码地址",key:"codeUrl"},{required:!0,type:"nodeVersion",label:"node版本",key:"nodeVersion"},{type:"textarea",label:"备注",key:"notes"}],formData:{}}}},emits:["submitForm"],setup(a,{emit:c}){const F=i(),y=a,k=t((()=>["xl","lg"].includes(F.getters.screenSize)?"40%":["md","sm"].includes(F.getters.screenSize)?"60%":"80%")),_=c,j=d(null);return(i,t)=>{var d,c;const q=o,D=l,h=e;return u(),r(h,{modelValue:a.dialogForm.visible,"onUpdate:modelValue":t[3]||(t[3]=e=>a.dialogForm.visible=e),title:(null==(d=a.dialogForm)?void 0:d.title)||"标题",width:(null==(c=a.dialogForm)?void 0:c.width)||n(k),"min-width":"200px",draggable:"","close-on-click-modal":!1,"destroy-on-close":"",onClosed:t[4]||(t[4]=e=>(()=>{var e;j.value&&(null==(e=j.value)||e.elfrom.resetFields())})())},{footer:s((()=>{var e,l,o,i,d,c,k,q,h,w,x,V,C;return[m("span",b,[(null==(e=n(j))?void 0:e.pageDisabled)?(u(),r(D,{key:0,onClick:t[0]||(t[0]=e=>a.dialogForm.visible=!1)},{default:s((()=>[g(" 关 闭 ")])),_:1})):(u(),v(p,{key:1},[f(D,{disabled:null==(i=null==(o=null==(l=n(F))?void 0:l.getters)?void 0:o.loading)?void 0:i.request,loading:(null==(k=null==(c=null==(d=n(F))?void 0:d.getters)?void 0:c.loading)?void 0:k.request)||a.dialogForm.formData.loading,onClick:t[1]||(t[1]=e=>a.dialogForm.visible=!1)},{default:s((()=>[g(" 取 消 ")])),_:1},8,["disabled","loading"]),f(D,{disabled:null==(w=null==(h=null==(q=n(F))?void 0:q.getters)?void 0:h.loading)?void 0:w.request,loading:(null==(C=null==(V=null==(x=n(F))?void 0:x.getters)?void 0:V.loading)?void 0:C.request)||a.dialogForm.formData.loading,type:"primary",onClick:t[2]||(t[2]=e=>(async()=>{var e;j.value&&await(null==(e=j.value)?void 0:e.elfrom.validate((e=>{e&&_("submitForm",y.dialogForm)})))})())},{default:s((()=>[g(" 保 存 ")])),_:1},8,["disabled","loading"])],64))])]})),default:s((()=>[f(q,{ref_key:"formRef",ref:j,formInfo:a.dialogForm},null,8,["formInfo"])])),_:1},8,["modelValue","title","width"])}}}),[["__file","D:/nodejs-egg-template-runningspace/default/666f9cfd3276ef2d39826b3c/src/components/page/DialogForm.vue"]]);export{F as _};