var reqCfg = {
  // 开发
  //requestUrl: "https://testproductadminapi.bjjypay.com.cn:14444/",
  // 测试
  //requestUrl: "https://testproductadminapi.bjjypay.com.cn:14443/",
  requestUrl: "https://tmposadminapi.bjjypay.com.cn:23601/",
  //requestUrl: "http://172.168.10.98:14443/", // (吕)
  //requestUrl: "http://172.168.10.34:14443/", //(徐)
  //requestUrl: "http://172.168.10.78:80/", //(张)
  // requestUrl: "http://xu248659885.imwork.net:31327", //(在家办公专业)
  //requestUrl: "http://lsc.free.idcfengye.com/",//(吕在家办公)
  // sn模板下载地址
  posExample: "http://testproductadminui.bjjypay.com.cn/posExample.xls",
  productInviteConfig: true,//代理商列表其他设置里邀请设置的配置
  // 超时时间
  timeOut: 10000, // 10秒
  dateArr: {
    // 代理商结算明细
    agentTranDetail: {
      day: 180, //默认时间段
      availableDay: 180 //可查询时间段
    },
    //  佣金余额明细
    achievement: {
      day: 180, //默认时间段
      availableDay: 180 //可查询时间段
    },
    //分润汇总
    distributionRecord: {
      day: 180, //默认时间段
      availableDay: 180 //可查询时间段
    },
    // 结算明细
    payDetails: {
      day: 180, //默认时间段
      availableDay: 180 //可查询时间段
      //query: 0
    },
    // pos收款明细
    tranDetail: {
      day: 180, //默认时间段
      availableDay: 180 //可查询时间段
      //query: 0
    },
    // 聚合收款明细
    wxCodeRecord: {
      day: 180, //默认时间段
      availableDay: 180 //可查询时间段
      //query: 0
    },
    //收款明细总览
    unionPayRecord: {
      day: 180, //默认时间段
      availableDay: 180 //可查询时间段
      //query: 0
    },
    //POS收款日交易统计
    posDay: {
      day: 180, //默认时间段
      availableDay: 180 //可查询时间段
    },
    //聚合收款单日交易统计
    posDay: {
      day: 180, //默认时间段
      availableDay: 180 //可查询时间段
    },
    //结算日交易统计
    settleDay: {
      day: 180, //默认时间段
      availableDay: 180 //可查询时间段
    },
    planManagement: {
      day: 180, //默认时间段
      availableDay: 180 //可查询时间段
    },
    //
    settlementControl: {
      day: 180,
      availableDay: 180
    },
    // 代理商终端发货
    terminalAgentOrder: {
      day: 180,
      availableDay: 180
    },
    posRefund: {
      day: 180,
      availableDay: 180,
      query: true //query  true加载 不配置不加载 ,默认不加载
    },
    mobilePOSCharges: {
      day: 180,
      availableDay: 180
    },
    // labelManage: {
    //   day: 2,
    //   availableDay: 10,
    //   query: true
    // },
    // 商户日账单
    customerDailyStatistics: {
      day: 6,
      availableDay: 180
    }
  },
  // feePre 借记卡费率不能超过80 以万为单位   creditFeePre 信用卡费率不能超过80
  feePre: 80,
  creditFeePre: 80,
  // minFeePre 借记卡最低不能超过50,minCreditFeePre 信用卡最低不能超过50
  minFeePre: 50,
  minCreditFeePre: 40,
  // variables_blue  // yellow//cyan
  theme: "development"
  //theme: "cyan"
};
