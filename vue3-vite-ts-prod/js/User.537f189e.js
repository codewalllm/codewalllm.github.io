import{_ as e}from"./DialogForm.77d82fc6.js";import{_ as a,a as t,b as l}from"./Search.4da002f7.js";import"./vue.ea117135.js";import{e as s,A as i,f as o,g as n,h as r,U as d,i as u,a as m}from"./index.f86f8509.js";import{u as p}from"./vuex.16220312.js";import{a as b,j as g}from"./element-plus.d9718458.js";import{d as c,Z as y,e as f,j as v,c as j,U as k,u as h,o as w}from"./@vue.eb62a264.js";import"./Form.c4ec9d19.js";import"./vue-router.b3f333f3.js";import"./@element-plus.30484454.js";import"./lodash.a57d72c0.js";import"./dayjs.11b573ac.js";import"./axios.5fdf0182.js";import"./universal-cookie.a55469f4.js";import"./mqtt.f77a2428.js";import"./lodash-es.d4f5f48c.js";import"./@vueuse.45c6cd4e.js";import"./@popperjs.b78c3215.js";import"./@ctrl.91de2ec7.js";import"./async-validator.7592c8ba.js";import"./memoize-one.63ab667a.js";import"./normalize-wheel-es.3222b0a2.js";import"./@floating-ui.36fbce82.js";const D={class:"flex flex-column height-100p"},_=m(c({__name:"User",setup(m){p();const c=y([{type:"input",label:"用户名",key:"userName",value:""},{type:"input",label:"登录名",key:"loginName",value:""},{type:"select",label:"状态",key:"status",options:[{label:"启用",value:1},{label:"禁用",value:2},{label:"注销",value:0}]},{type:"select",label:"权限",key:"authId",options:[]}]),_=y({page:1,size:10}),L=y([{label:"用户名",key:"userName",width:90},{label:"登录名",key:"loginName",width:90},{type:"select",label:"状态",key:"status",options:{0:"注销",1:"启用",2:"禁用"},width:90},{type:"array",label:"权限",key:"authList",arrayKey:"name",width:120},{type:"datetime",label:"创建时间",key:"createdAt"},{type:"datetime",label:"修改时间",key:"updatedAt"}]),x=y({loading:!1,data:[],selectData:[],page:1,size:10,total:0}),I=y([{type:"success",label:"添加",key:"add"},{type:"primary",label:"编辑",key:"edit"},{type:"primary",label:"权限修改",key:"authEdit"},{type:"success",label:"启用",key:"on"},{type:"primary",label:"禁用",key:"off"},{type:"danger",label:"注销",key:"logout"},{type:"danger",label:"删除",key:"delete"}]),z=y({visible:!1,title:"用户信息",btnType:"",formList:[{type:"input",label:"用户名",key:"userName",rules:[{required:!0,message:"不能为空",trigger:["blur"]},{min:2,max:20,message:"长度在2-20",trigger:["blur"]}]},{required:!0,type:"input",label:"登录名",key:"loginName",rules:[{required:!0,message:"不能为空",trigger:["blur"]},{min:2,max:20,message:"长度在4-20",trigger:["blur"]}]},{type:"select",label:"权限列表",key:"authIds",multiple:!0,options:[]},{required:!0,type:"password",label:"密码",key:"password",rules:[{required:!0,message:"不能为空",trigger:["blur"]},{min:6,max:20,message:"长度在6-20",trigger:["blur"]}]}],formData:{loading:!1,userName:"",loginName:"",authIds:[],password:""}});f((()=>z.btnType),(e=>{z.formList.find((e=>"password"==(null==e?void 0:e.key))).hidden=!["add"].includes(e)})),v((()=>{O(),T()}));const N=e=>{Object.assign(_,e),O(1)},O=(e=x.page,a=x.size)=>{x.loading=!0,s({..._,page:e,size:a}).then((e=>{Object.assign(x,e.data)})).finally((()=>{x.loading=!1}))},q=async(e,a={})=>{switch(e.key){case"add":z.visible=!0,z.title=null==e?void 0:e.label,z.btnType=null==e?void 0:e.key,T();break;case"edit":case"authEdit":if(1!=x.selectData.length)return b.warning("请选择一条数据");z.visible=!0,z.title=null==e?void 0:e.label,z.btnType=null==e?void 0:e.key,await T(),Object.assign(z.formData,await B(x.selectData[0]));break;case"on":case"off":case"logout":F(e);break;case"delete":C();break;default:b.info("暂未开启，敬请期待")}},B=({_id:e})=>new Promise(((a,t)=>{o({_id:e}).then((e=>{a(e.data)}))})),T=async()=>{await i({status:1}).then((e=>{var a,t,l,s;let i=c.find((e=>"authId"==(null==e?void 0:e.key)));Object.assign(i,{options:null==(t=null==(a=null==e?void 0:e.data)?void 0:a.data)?void 0:t.map((e=>Object.assign({label:null==e?void 0:e.name,value:null==e?void 0:e._id})))});let o=z.formList.find((e=>"authIds"==(null==e?void 0:e.key)));Object.assign(o,{options:null==(s=null==(l=null==e?void 0:e.data)?void 0:l.data)?void 0:s.map((e=>Object.assign({label:null==e?void 0:e.name,value:null==e?void 0:e._id})))})}))},F=({label:e,key:a})=>{0!=x.selectData.length?g.confirm(`确定${e}用户吗？`,"提示",{draggable:!0,beforeClose:(e,t,l)=>{if("confirm"===e){t.confirmButtonLoading=!0;let e={on:1,off:2,logout:0};n({_ids:x.selectData.map((e=>e._id)),status:e[a]||0}).then((e=>{l(),b.success(e.message),O()})).finally((()=>{t.confirmButtonLoading=!1}))}else l()}}):b.warning("请至少选择一条数据")},A=async e=>{let a={add:d,edit:u,authEdit:u};e.formData.loading=!0,a[e.btnType](e.formData).then((a=>{e.visible=!1,b.success(a.message),["add"].includes(e.btnType)?O(1):x.data.forEach((async a=>{e.formData._id==a._id&&Object.assign(a,await B(a))}))})).finally((()=>{e.formData.loading=!1}))},C=()=>{if(!x.selectData.length)return b.warning("请至少选择一条数据");g.confirm("确定删除吗？","提示",{draggable:!0,beforeClose:(e,a,t)=>{if("confirm"===e)a.confirmButtonLoading=!0,r({_ids:x.selectData.map((e=>e._id)).join(",")}).then((e=>{t(),b.success(e.message),O()})).finally((()=>{a.confirmButtonLoading=!1}));else t()}})};return(s,i)=>{const o=a,n=t,r=l,d=e;return w(),j("div",D,[k(o,{formList:h(c),tableData:h(x),onQuery:N},null,8,["formList","tableData"]),k(n,{class:"flex-1-1 overflow-auto",btnInfos:h(I),tableList:h(L),tableData:h(x),onClickBtn:q},null,8,["btnInfos","tableList","tableData"]),k(r,{btnInfos:h(I),pagination:h(x),onClickBtn:q,onPage:O,onSize:i[0]||(i[0]=e=>O(1,e))},null,8,["btnInfos","pagination"]),k(d,{dialogForm:h(z),onSubmitForm:A},null,8,["dialogForm"])])}}}),[["__file","D:/nodejs-egg-template-runningspace/default/666f9cfd3276ef2d39826b3c/src/views/systemInfo/User.vue"]]);export{_ as default};
