// 菜单
let apiMenu = [
    { label: "枚举", fileName: "paramConfig", config: 'enumTypes' },
    {
        label: "参数配置",
        children: [
            { label: "模型参数配置", fileName: "paramConfig", config: 'modelConfig' },
            { label: '场景参数配置', fileName: "paramConfig", config: 'sceneConfig' }
        ]
    },
    {
        label: "场景",
        children: [
            { label: "加载场景", fileName: "paramConfig", config: 'loadScene' },
            { label: "场景操作及场景信息", fileName: "paramConfig", config: 'sceneInfo' },
        ]
    },
    {
        label: "模型",
        children: [
            { label: "添加", fileName: "paramConfig", config: 'addModel' },
            { label: "模型信息", fileName: "paramConfig", config: 'modelInfo' },
            { label: "模型相关操作", fileName: "paramConfig", config: 'modelOperation' },
        ]
    },
    {
        label: "构件",
        children: [
            { label: "构件信息", fileName: "paramConfig", config: 'componentInfo' },
            { label: "构件相关操作", fileName: "paramConfig", config: 'componentOperation' },
            { label: "构件状态", fileName: "paramConfig", config: 'componentStatus' },
        ]
    },
    { label: "镜头", fileName: "paramConfig", config: 'camera' },
    { label: "剖切", fileName: "paramConfig", config: 'section' },
    { label: "二三维联动", fileName: "paramConfig", config: 'linkagemap' },
    { label: "开挖", fileName: "paramConfig", config: 'excavation' },
    { label: "测量距离", fileName: "paramConfig", config: 'measuringDistance' },
    { label: "测量面积", fileName: "paramConfig", config: 'measuringArea' },
    { label: "测量高度", fileName: "paramConfig", config: 'gaugeAltitude' },
    { label: "漫游", fileName: "paramConfig", config: 'roam' },
    { label: "标注", fileName: "paramConfig", config: 'tagging' },
    { label: "轴网", fileName: "paramConfig", config: 'axialnet' },
    { label: "可视域分析", fileName: "paramConfig", config: 'visibleRange' },
    { label: "工具类", fileName: "paramConfig", config: 'toolClass' },
    { label: "实体模型", fileName: "paramConfig", config: 'graphicsModel' },
    { label: "空间标注", fileName: "paramConfig", config: 'spatialAnnotation' },
]

// type: `String`,
// type: `Number|String`,
// type: `Boolean|String`,
// type: `Object|JsonString`,
// type: `Array<String>|JsonString`,
// type: `Function`,