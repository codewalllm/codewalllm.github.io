import{C as e,a,b as t,_ as l,c as i,d as n,e as s,f as o,g as r}from"./Search-011d1ab6.js";import{d,k as b,o as c,a as f,b as m,g,E as y,l as p}from"./index-10b29ba2.js";import"./_plugin-vue_export-helper-1b428a4d.js";const u={class:"flex flex-column h-100p"},k=d({__name:"ServerAddress",setup(d){const k=b([{type:"input",label:"代码名称",key:"codeName",value:""},{type:"input",label:"代码地址",key:"codeUrl",value:""},{type:"input",label:"备注",key:"notes",value:""}]),D=b({page:1,size:10}),h=b([{label:"代码名称",key:"codeName",width:90},{type:"codeUrl",label:"代码地址",key:"codeUrl",width:150},{type:"select",label:"存放方式",key:"svnorgit",options:{svn:"svn",git:"git"},width:90},{label:"node版本",key:"nodeVersion",width:90},{label:"备注",key:"notes",width:120},{type:"datetime",label:"创建时间",key:"createdTime"},{type:"datetime",label:"修改时间",key:"modifyTime"}]),v=b({loading:!1,data:[],selectData:[],page:1,size:10,total:0}),j=b([{type:"success",label:"添加",key:"add"},{type:"primary",label:"编辑",key:"edit"},{type:"danger",label:"删除",key:"delete"},{type:"info",label:"详情",key:"details"}]),L=b({visible:!1,btnInfo:{},formList:[],formData:{loading:!1}}),w=b({formList:[{required:!0,type:"input",label:"代码地址",key:"codeUrl"},{required:!0,type:"input",label:"代码名称",maxlength:20,key:"codeName"},{required:!0,type:"select",label:"存放方式",key:"svnorgit",options:[{label:"svn",value:"svn"},{label:"git",value:"git"}]},{required:!0,type:"nodeVersion",label:"node版本",key:"nodeVersion"},{type:"textarea",label:"备注",maxlength:500,key:"notes"}],formData:{loading:!1,id:"",codeUrl:"",codeName:"",svnorgit:"",nodeVersion:"",notes:""}}),O=e=>{Object.assign(D,e),x()},x=(a=v.page,t=v.size)=>{v.loading=!0,e({...D,page:a,size:t}).then((e=>{Object.assign(v,e.data)})).catch((e=>{y.error(e.msg)})).finally((()=>{v.loading=!1}))},I=e=>{switch(L.formList.length=0,e.key){case"add":Object.assign(L.formList,w.formList),Object.assign(L.formData,w.formData),Object.assign(L.btnInfo,e),L.visible=!0;break;case"edit":case"details":Object.assign(L.formList,w.formList),Object.assign(L.formData,w.formData),Object.assign(L.btnInfo,e),z().then((()=>{L.visible=!0}));break;case"delete":_();break;default:y.info("暂未开启")}},z=()=>new Promise(((e,t)=>{if(1!=v.selectData.length)return y.warning("请选择一条数据"),t();L.formData.loading=!0,a({id:v.selectData[0].id}).then((a=>{Object.assign(L.formData,a.data),v.data.forEach((e=>{e.id==v.selectData[0].id&&Object.assign(e,a.data)})),e(L.formData)})).finally((()=>{L.formData.loading=!1,t()}))})),U=e=>{let a={add:o,edit:r};L.formData.loading=!0,a[e.btnInfo.key](e.formData).then((a=>{L.visible=!1,y.success(a.msg),["add"].includes(e.btnInfo.key)?x():z()})).finally((()=>{L.formData.loading=!1}))},_=()=>{if(!v.selectData.length)return y.warning("请至少选择一条数据");p.confirm("确定删除吗？","提示",{draggable:!0,beforeClose:(e,a,l)=>{if("confirm"===e)a.confirmButtonLoading=!0,t({ids:v.selectData.map((e=>e.id))}).then((e=>{l(),y.success(e.msg),x()})).finally((()=>{a.confirmButtonLoading=!1}));else l()}})};return(e,a)=>{const t=l,o=i,r=n,d=s;return c(),f("div",u,[m(t,{formList:g(k),tableData:g(v),onQuery:O},null,8,["formList","tableData"]),m(o,{class:"flex-1-1 overflow-auto",btnInfos:g(j),tableList:g(h),tableData:g(v),onClickBtn:I},null,8,["btnInfos","tableList","tableData"]),m(r,{btnInfos:g(j),pagination:g(v),onClickBtn:I,onPage:x,onSize:a[0]||(a[0]=e=>x(1,e))},null,8,["btnInfos","pagination"]),m(d,{dialogForm:g(L),onSubmitForm:U},null,8,["dialogForm"])])}}});export{k as default};
