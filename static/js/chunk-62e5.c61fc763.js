(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-62e5"],{"/C6F":function(t,e,n){"use strict";n.r(e);var a=n("QbLZ"),i=n.n(a),s=n("rY9o"),l=n("L2JU"),r=n("7Qib"),o=n("X4fA"),u=n("6Uqi"),d=n("caUn"),c=n("4Vms"),h={name:"settleDay",components:{PageTable:u.a,timeBox:d.a,agentBox:c.a},data:function(){return{productAgentidArr:[],userType:Object(o.f)(),listQuery:{productAgentId:"",productId:"",startDate:"",endDate:"",pageNum:1,pageSize:10,flag:2,tag:3,agentFindType:3},posData:{list:[],pageNum:1,pageSize:10,total:0,loading:!1},listLoading:!1,currentButton:[],multipleSelection:[],listQuery2:{},startDate:new Date((new Date).setDate((new Date).getDate()-7)),endDate:new Date,table_list:[{label:"代理商名称",width:"120px",name:"productAgentName",checked:!0},{type:"labelType",label:"订单日期",name:"exactTime",checked:!0,width:"120px"},{type:"number",label:"交易总笔数",width:"130px",name:"totalTransactionCount",checked:!0},{type:"money",label:"交易总金额(元)",name:"totalMoney",width:"130px",checked:!0},{type:"money",label:"手续费总金额(元)",width:"140px",name:"totalFee",checked:!0},{type:"number",label:"T0结算交易笔数",width:"150px",name:"t0TransactionCount",checked:!0},{type:"money",label:"T0结算交易金额(元)",width:"180px",name:"t0Money",checked:!0},{type:"money",label:"T0手续费金额(元)",width:"140px",name:"t0Fee",checked:!0},{type:"number",label:"T1结算交易笔数",width:"130px",name:"t1TransactionCount",checked:!0},{type:"money",label:"T1结算交易金额(元)",width:"180px",name:"t1Money",checked:!0},{type:"money",label:"T1手续费金额(元)",width:"180px",name:"t1Fee",checked:!0}]}},computed:i()({},Object(l.b)(["agentList","day_settle_list","productInfo"])),mounted:function(){var t=this;this.$nextTick(function(){t.pageLoad()})},methods:{pageLoad:function(){this.sizeChange(10)},currentChange:function(t){this.select_query(t)},sizeChange:function(t){this.listQuery2=this.copy_obj(this.listQuery),this.select_query(1,t)},select_query:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;for(var a in this.table_list)"labelType"==this.table_list[a].type&&(1==this.listQuery2.flag?this.table_list[a].label="清算日":this.table_list[a].label="订单日期");var i=JSON.parse(Object(o.b)());this.listQuery2.productId=i.id,this.listQuery2.startDate=Object(r.g)(this.startDate)+" 00:00:00",this.listQuery2.endDate=Object(r.g)(this.endDate)+" 23:59:59",this.listQuery2.pageNum=e||this.posData.pageNum,this.listQuery2.pageSize=n||this.posData.pageSize,this.posData.loading=!0,this.$store.dispatch("reqUrl_SysData",{reqName:s.Vc,dataName:"day_settle_list",data:this.listQuery2}).then(function(e){t.posData.list=e.data.getPosPayDayOrders,t.posData.total=e.total,t.posData.loading=!1,t.posData.pageNum=t.listQuery2.pageNum,t.posData.pageSize=t.listQuery2.pageSize}).catch(function(e){t.posData.loading=!1})},handleSelectionChange:function(t){this.multipleSelection=t},updateFlag:function(t,e,n){this.listQuery.flag=t,this.flag=t,this.startDate=e,this.endDate=n},selectAgentFun:function(t,e,n){this.listQuery.productAgentId=t,this.listQuery.agentFindType=e,1===n&&this.pageLoad()},btnClickHandle:function(t){switch(t){case"export":this.getCheckData("结算日订单统计",this.multipleSelection,this.table_list)}}}},p=(n("KgxZ"),n("KHd+")),D=Object(p.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"table"},[n("div",{staticClass:"container"},[n("nav",[n("el-row",[n("agentBox",{on:{selectAgentFun:t.selectAgentFun}}),t._v(" "),n("timeBox",{attrs:{page:"settleDay",showday:"1"},on:{updateFlag:t.updateFlag}}),t._v(" "),n("el-button",{staticClass:"search margin-t-20",attrs:{type:"primary",icon:"search"},on:{click:function(e){t.sizeChange(10)}}},[t._v("查询")])],1)],1),t._v(" "),n("div",{staticClass:"tip clearfix"},[n("div",{staticClass:"fl margin-r-30"},[t._v("\n          交易总笔数：\n          "),n("span",{staticClass:"color-blue"},[t._v(t._s(t.day_settle_list.list&&t.day_settle_list.list.allTotalTransactionCount))]),t._v("笔\n        ")]),t._v(" "),n("div",{staticClass:"fl margin-r-30"},[t._v("\n          交易总金额：\n          "),n("span",{staticClass:"color-blue"},[t._v(t._s(t._f("formatToYuan")(t.day_settle_list.list&&t.day_settle_list.list.allTotalMoney)))]),t._v("元\n        ")]),t._v(" "),n("div",{staticClass:"fl margin-r-30"},[t._v("\n          手续费总金额：\n          "),n("span",{staticClass:"color-blue"},[t._v(t._s(t._f("formatToYuan")(t.day_settle_list.list&&t.day_settle_list.list.allTotalFee)))]),t._v("元\n        ")])]),t._v(" "),n("PageTable",{attrs:{listWidth:!0,showSummary:!0,tableList:t.table_list,tableData:t.posData},on:{handleSelectionChange:t.handleSelectionChange,sizeChange:t.sizeChange,currentChange:t.currentChange,btnClickHandle:t.btnClickHandle}})],1)])])},[],!1,null,null,null);D.options.__file="settleDay.vue";e.default=D.exports},KgxZ:function(t,e,n){"use strict";var a=n("kxov");n.n(a).a},Nu6g:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},RQWr:function(t,e,n){var a=n("snek");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("SZ7m").default)("28ef560a",a,!0,{})},"RU/L":function(t,e,n){n("Rqdy");var a=n("WEpk").Object;t.exports=function(t,e,n){return a.defineProperty(t,e,n)}},Rqdy:function(t,e,n){var a=n("Y7ZC");a(a.S+a.F*!n("jmDH"),"Object",{defineProperty:n("2faE").f})},SEkw:function(t,e,n){t.exports={default:n("RU/L"),__esModule:!0}},YEIV:function(t,e,n){"use strict";e.__esModule=!0;var a=function(t){return t&&t.__esModule?t:{default:t}}(n("SEkw"));e.default=function(t,e,n){return e in t?(0,a.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},caUn:function(t,e,n){"use strict";var a=n("QbLZ"),i=n.n(a),s=n("L2JU"),l=(n("rY9o"),n("X4fA"),{props:["page","timeOption","refund","showday","defaultDate","disType"],data:function(){var t=this;return{flag:2,loading:!1,timeBox:"",regDate:new Date((new Date).setDate((new Date).getDate()-7)),startDate:new Date((new Date).setDate((new Date).getDate()-7)),endDate:new Date,timeValue:0,pickerBeginDateBefore:{disabledDate:function(e){if(t.endDate)return e.getTime()>(new Date).getTime()}},pickerBeginDateAfter:{disabledDate:function(e){var n=t.startDate,a=t.availableDay,i=new Date(new Date(n).setDate(new Date(n).getDate()+a));if(n)return e.getTime()<n||e.getTime()>i||e.getTime()>(new Date).getTime()}}}},watch:{flag:function(t){this.$emit("updateFlag",this.flag,this.startDate,this.endDate)},timeOption:function(t){this.timeValue=t[0].value},defaultDay:function(t){this.resetDate()}},computed:i()({},Object(s.b)([""]),{availableDay:function(){return reqCfg.dateArr&&reqCfg.dateArr[""+this.page]&&reqCfg.dateArr[""+this.page].availableDay?reqCfg.dateArr[""+this.page].availableDay:this.defaultDate&&this.defaultDate.availableDay?this.defaultDate.availableDay:30},defaultDay:function(){return reqCfg.dateArr&&reqCfg.dateArr[""+this.page]&&reqCfg.dateArr[""+this.page].day?reqCfg.dateArr[""+this.page].day:this.defaultDate&&this.defaultDate.day||this.defaultDate&&0===this.defaultDate.day?this.defaultDate.day:7}}),mounted:function(){var t=this;this.$nextTick(function(){t.$route.query.startDate&&(t.startDate=new Date(t.$route.query.startDate)),t.$route.query.endDate&&(t.endDate=new Date(t.$route.query.endDate)),t.$route.query.startDate||t.$route.query.endDate||(t.regDate=t.startDate=new Date((new Date).setDate((new Date).getDate()-t.defaultDay))),t.$route.query.timeValue&&(t.timeValue=t.$route.query.timeValue-0),t.timeOption&&t.timeOption.length&&(t.timeValue=t.timeOption[0].value),t.timeOption&&t.timeOption.length?t.$emit("updateTimeValue",t.timeValue,t.startDate,t.endDate):t.$emit("updateFlag",t.flag,t.startDate,t.endDate)})},methods:{statusChange:function(t){this.startDate=this.regDate,this.endDate=new Date},timeValueChange:function(t){this.timeValue=t,this.startDate=this.regDate,this.endDate=new Date,this.timeOption&&this.timeOption.length?this.$emit("updateTimeValue",this.timeValue,this.startDate,this.endDate):this.$emit("updateFlag",this.flag,this.startDate,this.endDate)},resetDate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.startDate=new Date((new Date).setDate((new Date).getDate()-this.defaultDay)),this.endDate=new Date,t&&t(this.startDate,this.endDate),this.$emit("updateTimeValue",this.timeValu,this.startDate,this.endDate)},startDateChange:function(t){var e=new Date(new Date(t).setDate(new Date(t).getDate()+this.availableDay)),n=new Date(new Date(t).setDate(new Date(t).getDate()+this.defaultDay));this.endDate=e<n.getTime()?e<(new Date).getTime()?e:new Date:n<(new Date).getTime()?n:new Date,this.timeOption&&this.timeOption.length?this.$emit("updateTimeValue",this.timeValue,this.startDate,this.endDate):this.$emit("updateFlag",this.flag,this.startDate,this.endDate)},endDateChange:function(t){this.timeOption&&this.timeOption.length?this.$emit("updateTimeValue",this.timeValue,this.startDate,this.endDate):this.$emit("updateFlag",this.flag,this.startDate,this.endDate)}}}),r=(n("nAPR"),n("KHd+")),o=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"nav-select"},[t.timeOption&&t.timeOption.length>1?n("div",{staticClass:"nav-select-title select-input-style"},[n("el-select",{staticClass:"handle-select select-w-2 big-small select-date-style",attrs:{slot:"prepend",placeholder:"请选择"},on:{change:t.timeValueChange},slot:"prepend",model:{value:t.timeValue,callback:function(e){t.timeValue=e},expression:"timeValue"}},t._l(t.timeOption,function(t,e){return n("el-option",{key:e,attrs:{label:t.text,value:t.value}})}))],1):t.timeOption&&1==t.timeOption.length?n("div",{staticClass:"nav-select-title select-input-style"},[t._v(t._s(t.timeOption[0].text))]):n("div",{staticClass:"nav-select-title select-input-style"},[n("el-select",{staticClass:"handle-select select-w-2 big-small select-date-style",attrs:{slot:"prepend",placeholder:"请选择"},on:{change:t.statusChange},slot:"prepend",model:{value:t.flag,callback:function(e){t.flag=e},expression:"flag"}},[n("el-option",{attrs:{label:1==t.showday?"订单日期":"订单时间",value:2}}),t._v(" "),n("el-option",{attrs:{label:"清算日",value:1}}),t._v(" "),1==t.refund?n("el-option",{attrs:{label:"退款时间",value:3}}):t._e()],1)],1),t._v(" "),n("el-date-picker",{attrs:{editable:!1,type:"date","picker-options":t.pickerBeginDateBefore,disabled:t.disType||!1},on:{change:t.startDateChange},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}}),t._v(" -\n    "),n("el-date-picker",{attrs:{editable:!1,type:"date","picker-options":t.pickerBeginDateAfter,disabled:t.disType||!1},on:{change:t.endDateChange},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1)])},[],!1,null,"320aab82",null);o.options.__file="timeBox.vue";e.a=o.exports},kxov:function(t,e,n){var a=n("Nu6g");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("SZ7m").default)("73e4b34d",a,!0,{})},nAPR:function(t,e,n){"use strict";var a=n("RQWr");n.n(a).a},snek:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n.select-input-style[data-v-320aab82] .el-select .el-input__inner:focus {\r\n  border-color: rgba(0, 0, 0, 0);\n}\n.select-date-style[data-v-320aab82] .el-input__inner {\r\n  background-color: rgba(0, 0, 0, 0);\r\n  border: none;\n}\n.select-date-style[data-v-320aab82] .el-input__inner {\r\n  padding-right: 0px;\r\n  padding-left: 0px;\r\n  color: #909399;\n}\n.select-date-style[data-v-320aab82] .el-select__caret {\r\n  margin-right: -20px !important;\n}\r\n",""])}}]);