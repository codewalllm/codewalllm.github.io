// 页面参数数据配置
let pageDataConfig = {
    enumTypes: [
        {
            name: `功能枚举对象`,
            childs: [
                {
                    childs: [
                        { name: `NONE`, type: 0, desc: `无操作` },
                        { name: `MEASURE`, type: 1, desc: `测量` },
                        { name: `EXCAVATION`, type: 2, desc: `开挖` },
                        { name: `ROAMING`, type: 3, desc: `漫游` },
                        { name: `SECTIONBOX`, type: 4, desc: `剖切` },
                        { name: `SELECTELE`, type: 5, desc: `选中构件` },
                        { name: `MOVECAMEAR`, type: 6, desc: `移动镜头` },
                        { name: `LOCATIONTO`, type: 7, desc: `定位到` },
                        { name: `MARKER`, type: 8, desc: `标点` }
                    ]
                }
            ]
        },
        {
            name: `场景视图模式枚举`,
            childs: [
                {
                    childs: [
                        { name: `BIM`, type: 0, desc: `BIM 视图` },
                        { name: `GIS`, type: 1, desc: `GIS 视图` },
                    ]
                }
            ]
        },
        {
            name: `场景操作中心枚举`,
            childs: [
                {
                    childs: [
                        { name: `TILESET`, type: 0, desc: `以3dtiles模型为中心` },
                        { name: `GIS`, type: 1, desc: `以GIS视图为中心` },
                    ]
                }
            ]
        },
        {
            name: `镜头焦距枚举`,
            childs: [
                {
                    childs: [
                        { name: `ORTHOGRAPHIC`, type: 0, desc: `正交` },
                        { name: `PERSPECTIVE`, type: 1, desc: `透视` },
                    ]
                }
            ]
        },
        {
            name: `剖切模式枚举`,
            childs: [
                {
                    childs: [
                        { name: `OUTSIDE`, type: 0, desc: `保留剖切盒外数据` },
                        { name: `INSIDE`, type: 1, desc: `保留剖切盒内数据` },
                    ]
                }
            ]
        }
    ],
    modelConfig: [
        {
            name: `Bim模型属性配置`,
            desc: `在当前环境下添加的模型需要配置哪些参数及参数意思`,
            demo: { name: `模型参数配置`, href: `ModelConfig` },
            childs: [
                {
                    name: `必填参数`,
                    childs: [
                        { name: `projectId`, type: `String`, desc: `项目id,用与模型添加时候的项目区分` },
                        { name: `viewId`, type: `String`, desc: `模型清晰度id,类似于视频的普通、超清或者蓝光` },
                        { name: `modelCenter`, type: `Object`, desc: `模型中心点坐标：{经度,纬度,高程}` },
                    ]
                },
                {
                    name: `非必填参数`,
                    childs: [
                        { name: `baseDomain`, type: `String`, desc: `BIM模型数据接口服务域名地址` },
                        { name: `contentId`, type: `String`, desc: `渲染三维场景的div元素Id,非必要,默认使用id:tkEngineContainer` },
                        { name: `version`, type: `String`, desc: `模型版本（不填写则默认使用最新版本）` },
                        { name: `isLocalCache`, type: `Boolean`, desc: `需要开启本地缓存工具，然后再项目中设置访问ip和端口，在使用缓存` },
                        { name: `localCachePort`, type: `Number`, desc: `本地模型加载地址端口号，若isLocalCache=true，则需设置此属性` },
                        { name: `maximumMemoryUsage`, type: `Number`, desc: `模型在浏览器中占用的最大缓存（单位:M）,默认0` },
                        { name: `viewRatio`, type: `Number`, desc: `模型可视距离系数，默认15` },
                    ]
                },
            ]
        },
        {
            name: `其他模型属性配置`,
            desc: `除添加当前BIM模型外，还有可能添加倾斜摄影，城市区域的白膜，用此方法`,
            childs: [
                {
                    name: `必填参数`,
                    childs: [
                        { name: `id`, type: `String`, desc: `模型id` },
                        { name: `url`, type: `String`, desc: `3DTileset模型地址` },
                    ]
                },
                {
                    name: `非必填参数`,
                    childs: [
                        { name: `offsetPos`, type: `Array<Number>`, desc: `倾斜摄影坐标偏移量,该坐标根据倾斜摄影tileset文件中的模型坐标进行偏移,默认[0,0,0]` },
                        { name: `LOD`, type: `Number`, desc: `LOD精细度,数值越大精细度越低,,默认1` },
                        { name: `maximumMemoryUsage`, type: `Number`, desc: `模型在浏览器中占用的最大缓存（单位:M）,默认0` },
                    ]
                },
            ]
        }
    ],
    sceneConfig: [
        {
            name: `场景配置`,
            desc: `添加场景时，设置初始信息，展示模式，是否有操作器等`,
            childs: [
                {
                    name: `非必填参数`,
                    childs: [
                        { name: `isBimViewMode`, type: `Boolean`, desc: `是否BIM模式加载(false:GIS模式，true:BIM模式，默认true)` },
                        { name: `isModelsCenter`, type: `Boolean`, desc: `设置模型场景下的旋转中心( true：以模型为中心,false：以GIS场景为中心，默认true)` },
                        { name: `isTransparentOfDis`, type: `Number`, desc: `相机与选中构件透明化大距离，设置为0则相机与构件中间始终透明` },
                        { name: `controls`, type: `Object`, desc: `操作器和帧率的状态` },
                    ]
                },
                {
                    name: `controls`,
                    childs: [
                        { name: `visibleCube`, type: `Boolean`, desc: `是否显示操作器(右上角的正方体，显示上下左右的)` },
                        { name: `visibleFPS`, type: `Boolean`, desc: `是否显示帧率(右上角显示)` },
                    ]
                },
            ]
        }
    ],
    loadScene: [
        {
            name: `加载场景`,
            desc: `设置当前场景的显示情况，是有地图还是没地图，有没有操作器(右上角的正方体，显示上下左右的)，有没有帧率(右上角显示)等等`,
            demo: { name: `场景参数配置`, href: `SceneConfig` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Scene.loadScene(token,options,initedCallbacks)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `token`, type: `String`, desc: `系统token，用于用户验证信息` }
                    ]
                },
                {
                    name: `非必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `参数查看场景参数配置` },
                        { name: `initedCallbacks`, type: `Function`, desc: `场景添加完成后回调，方法返回参数看示例` }
                    ]
                },
            ]
        }
    ],
    sceneInfo: [
        {
            name: `设置操作器显隐`,
            desc: `设置操作器控件的显示隐藏`,
            demo: { name: `场景参数配置`, href: `SceneConfig` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Control.setVisibleCube(isVidible)`,
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `isVisible`, type: `Boolean`, desc: `显示：true,隐藏：flase` },
                    ]
                },
            ]
        },
        {
            name: `设置帧率显隐`,
            desc: `设置帧率控件的显示隐藏`,
            demo: { name: `场景参数配置`, href: `SceneConfig` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Control.setVisibleCube(isVidible)`,
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `isVisible`, type: `Boolean`, desc: `显示：true,隐藏：flase` },
                    ]
                },
            ]
        },
        {
            name: `修改场景的操作中心`,
            desc: `设置模型场景下的旋转中心是以模型为中心还是以GIS为中心`,
            demo: { name: `切换GIS/BIM模式`, href: `GISorBIM` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Scene.changeViewCenter(VIEWCENTERMODE)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `VIEWCENTERMODE`, type: `Number`, desc: `传入当前参数或传入枚举对应的数值` },
                    ]
                },
                {
                    name: `VIEWCENTERMODE(枚举类)`,
                    childs: [
                        { name: `VIEWCENTERMODE.MODEL`, type: `String`, desc: `设置以当前的配置的模型组包围盒为中心` },
                        { name: `VIEWCENTERMODE.GIS`, type: `String`, desc: `设置以GIS场景为中心` },
                    ]
                },
            ]
        },
        {
            name: `获取当前场景操作中心`,
            desc: `获取当前模型场景操作中心`,
            demo: { name: `切换GIS/BIM模式`, href: `GISorBIM` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Scene.getViewCenter()`,
                    childs: [
                        { name: `VIEWCENTERMODE`, type: `Number`, desc: `返回当前显示模式,状态值说明看场景操作中心枚举` },
                    ]
                },
            ]
        },
        {
            name: `切换显示模式`,
            desc: `切换显示模式（BIM模式/GIS模式）`,
            demo: { name: `切换GIS/BIM模式`, href: `GISorBIM` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Scene.changeViewMode(VIEWMODE)`,
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `VIEWMODE`, type: `Number`, desc: `传入当前参数或传入枚举对应的数值` },
                    ]
                },
                {
                    name: `VIEWMODE(枚举类)`,
                    childs: [
                        { name: `VIEWMODE.BIM`, type: `String`, desc: `BIM模式` },
                        { name: `VIEWMODE.GIS`, type: `String`, desc: `GIS模式` },
                    ]
                },
            ]
        },
        {
            name: `获取当前显示模式`,
            desc: `获取当前显示模式（bim模式/GIS模式）`,
            demo: { name: `切换GIS/BIM模式`, href: `GISorBIM` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Scene.getViewMode()`,
                    childs: [
                        { name: `VIEWMODE`, type: `Number`, desc: `返回当前显示模式,状态值说明看场景视图模式枚举` },
                    ]
                },
            ]
        },
        {
            name: `场景截屏`,
            desc: `截取当前模型场景图片，返回屏幕截图的base64字符串`,
            demo: { name: `截屏`, href: `screenCapture` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Scene.screenCapture(imgCallback)`,
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `imgCallback`, type: `Function`, desc: `返回屏幕截图的base64字符串` },
                    ]
                },
            ]
        },
        {
            name: `获取当前操作状态`,
            desc: `获取引擎当前操作状态值，返回值：当前正在进行的操作`,
            demo: { name: `漫游`, href: `Roam` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Scene.getOperationStatus()`,
                    childs: [
                        { name: `status`, type: `Number`, desc: `返回当前显示模式,状态值说明看功能项枚举` },
                    ]
                },
            ]
        },
        {
            name: `恢复到默认视角`,
            desc: `恢复镜头到默认视角。注：由于默认视角与当前加载的模型有关，因此需要在调用本接口前设置模型组`,
            demo: { name: `切换GIS/BIM模式`, href: `GISorBIM` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Scene.resetView()`,
                },
            ]
        },
    ],
    addModel: [
        {
            name: '添加模型',
            demo: { name: `模型参数配置`, href: `ModelConfig` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.TK3DTileset.add3DTiles_Bim(options,modelAddedCallback)`,
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `模型配置对象,看Bim模型属性配置` },
                    ]
                },
                {
                    name: `非必填参数`,
                    childs: [
                        { name: `modelAddedCallback`, type: `Function`, desc: `模型加载完毕回调，返回已加载完毕的模型viewId。注：若再调用loadScene()接口前添加模型，则此回调不起作用。` },
                    ]
                },
            ]
        },
        {
            name: '批量添加模型',
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.TK3DTileset.add3DTiles_Bims(options,modelAddedCallback)`,
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `模型配置对象的数组，模型配置对象,看Bim模型属性配置` },
                    ]
                },
                {
                    name: `非必填参数`,
                    childs: [
                        { name: `modelAddedCallback`, type: `Function`, desc: `模型加载完毕回调，返回已加载完毕的模型viewId。注：若再调用loadScene()接口前添加模型，则此回调不起作用。` },
                    ]
                },
                {
                    name: `返回值`,
                    desc: `返回值是数组，数组中是对象形式`,
                    childs: [
                        { name: `projectId`, type: `String`, desc: `项目Id` },
                        { name: `viewId`, type: `String`, desc: `模型Id` },
                        { name: `version`, type: `String`, desc: `模型版本` },
                    ]
                }
            ]
        },
        {
            name: '添加其他3DTiles模型',
            desc: `添加其他3D-Tiles类型的模型，如3dtiles格式的倾斜摄影、白膜、点云等模型数据`,
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.TK3DTileset.add3DTiles_Other(options,addedCallback)`,
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `模型配置对象,看其他模型属性配置` },
                    ]
                },
                {
                    name: `非必填参数`,
                    childs: [
                        { name: `addedCallback`, type: `Function`, desc: `3dtiles加载完毕回调，返回已加载完毕的模型id。注：若再调用loadScene()接口前添加模型，则此回调不起作用` },
                    ]
                },
                {
                    name: `返回值`,
                    childs: [
                        { name: `id`, type: `String`, desc: `添加的3DTileset模型id` },
                    ]
                }
            ]
        },
    ],
    modelOperation: [
        {
            name: '设置模型集合（模型组）',
            desc: `设置当前模型组`,
            demo: { name: `模型参数配置`, href: `ModelConfig` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.TK3DTileset.setCollect(viewIds，isMove)`,
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `viewIds`, type: `Array<String>`, desc: `模型viewId数组` }
                    ]
                },
                {
                    name: `非必填参数`,
                    childs: [
                        { name: `isMove`, type: `Boolean`, desc: `置后是否移动镜头到该模型集合` }
                    ]
                },
            ]
        },
        {
            name: '设置模型显隐',
            desc: `批量设置模型显隐`,
            demo: { name: `模型显隐`, href: `ModelsShowHidden` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.TK3DTileset.setVisible(viewIds,isVisible)`,
                },
                {
                    name: `必填参数`,
                    childs: [
                        {
                            name: `viewIds`, type: `Array<String>`, desc: `模型viewId数组`
                        },
                        { name: `isVisible`, type: `Boolean`, desc: `是否显示 true：显示，false：隐藏` },
                    ]
                },
            ]
        },
        {
            name: '设置模型颜色',
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.TK3DTileset.setColor(viewIds,color)`,
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `viewIds`, type: `Array<String>`, desc: `模型viewId数组` },
                    ]
                },
                {
                    name: `非必填参数`,
                    childs: [
                        { name: `color`, type: `Array<Number>`, desc: `颜色值:[r,g,b]。rgb取值0~255，默认值：[255, 255, 255]` },
                    ]
                },
            ]
        },
        {
            name: '重置模型颜色',
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.TK3DTileset.resetColor(viewIds)`,
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `viewIds`, type: `Array<String>`, desc: `模型viewId数组` },
                    ]
                },
            ]
        },
        {
            name: '设置模型透明',
            desc: `设置模型透明度`,
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.TK3DTileset.setAlpha(viewIds,alphaValue)`,
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `viewIds`, type: `Array<String>`, desc: `模型viewId数组` },
                        { name: `alphaValue`, type: `Number`, desc: `透明度，取值范围0-1的浮点数` },
                    ]
                },
            ]
        },
        {
            name: '重置模型透明',
            desc: `重置模型为不透明`,
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.TK3DTileset.resetAlpha(viewIds)`,
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `viewIds`, type: `Array<String>`, desc: `模型viewId数组` },
                    ]
                },
            ]
        },
    ],
    modelInfo: [
        {
            name: '获取当前模型版本',
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.TK3DTileset.getCurrentVersion(viewId)`,
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `viewId`, type: `String`, desc: `被查询模型的viewId` }
                    ]
                },
                {
                    name: `返回值`,
                    childs: [
                        {
                            name: `version`, type: `String`, desc: `模型当前版本。注：若引擎未加载过该模型则抛出异常`
                        }
                    ]
                },
            ]
        },
        {
            name: '获取模型包围盒',
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.TK3DTileset.getBoundingBox(viewIds)`,
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `viewIds`, type: `Array<String>`, desc: `模型viewId数组` }
                    ]
                },
                {
                    name: `返回值`,
                    childs: [
                        {
                            name: `boxOpt`, type: `Array<Number>`, desc: `模型包围盒数据数组[x1,x2,y1,y2,z1,z2]`
                        }
                    ]
                },
            ]
        },
    ],
    componentInfo: [
        {
            name: `获取构件包围盒中心点`,
            desc: `根据模型id、构件id获取该构件的包围盒中心点`,
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Element.getBoxCenter(viewId,elementId)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `viewId`, type: `String`, desc: `模型Id` },
                        { name: `elementId`, type: `String`, desc: `构件Id` },
                    ]
                },
            ]
        },
        {
            name: `开始框选`,
            desc: `鼠标左键框选。框选后的数据可通过setScene()接口传入的回调对象获取`,
            demo: { name: `框选构件`, href: `BoxSelectedComponents` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Element.boxChooseStart(chooseCallbacked)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `chooseCallbacked`, type: `Function`, desc: `框选回调,返回选择框内的构件viewId及elementId数组` },
                    ]
                },
                {
                    name: `chooseCallbacked返回值`,
                    childs: [
                        { name: `callbackData`, type: `Object`, desc: `{viewId: [eleId...],viewId: [eleId...],}` },
                    ]
                },
            ]
        },
        {
            name: `结束框选`,
            desc: `结束框选功能`,
            demo: { name: `框选构件`, href: `BoxSelectedComponents` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Element.boxChooseExit()`
                },
            ]
        },
    ],
    componentOperation: [
        {
            name: `设置构件为场景焦点`,
            desc: `设置场景旋转焦点为选中的构件`,
            demo: { name: `选中构件/取消选中构件`, href: `SelectionOfComponent` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Scene.setViewCenterByElement(viewId,elementId)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `viewId`, type: `String`, desc: `模型Id` },
                        { name: `elementId`, type: `String`, desc: `构件Id` },
                    ]
                },
            ]
        },
        {
            name: `取消以构件为场景焦点`,
            desc: `取消选中构件`,
            demo: { name: `选中构件/取消选中构件`, href: `SelectionOfComponent` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Scene.cancelViewCenterByElement()`
                },
            ]
        },
        {
            name: `定位到构件`,
            demo: { name: `定位到构件`, href: `PositioningComponents` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Element.locationTo(viewId,elementId,options)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `viewId`, type: `String`, desc: `模型Id` },
                        { name: `elementId`, type: `Number`, desc: `构件Id` },
                    ]
                },
                {
                    name: `非必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `定位参数` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `durationTime`, type: `Number`, desc: `定位过程中的飞行时间,默认3秒` },
                        { name: `cameraAngle`, type: `Object`, desc: `相机位置` },
                    ]
                },
                {
                    name: `cameraAngle`,
                    childs: [
                        { name: `rangeCoeff`, type: `Number`, desc: `距离系数,数值越小，摄像头距离目标越近,默认1` },
                        { name: `heading`, type: `Number`, desc: `镜头偏航角(角度值),镜头左右方向,正北方为0°,正值为右,负值为左,默认0` },
                        { name: `pitch`, type: `Number`, desc: `镜头仰俯角(角度值),镜头上下方向,平视为0°,正值为上,负值为下,默认0` },
                    ]
                }
            ]
        },
        {
            name: `设置构件颜色`,
            desc: `批量设置构件颜色`,
            demo: { name: `设置构件颜色`, href: `ArtifactsBecomeAngry` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Element.setColor(viewId,elementIds,color)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `viewId`, type: `String`, desc: `模型Id` },
                        { name: `elementIds`, type: `Array<String>`, desc: `构件Id数组` },
                        { name: `color`, type: `Array<Number>`, desc: `颜色值:[r,g,b],rgb取值0--255` },
                    ]
                },
            ]
        },
        {
            name: `重置构件颜色`,
            desc: `批量恢复构件颜色`,
            demo: { name: `设置构件颜色`, href: `ArtifactsBecomeAngry` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Element.resetColor(viewId,elementIds)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `viewId`, type: `String`, desc: `模型Id` },
                        { name: `elementIds`, type: `Array<String>`, desc: `构件Id数组` },
                    ]
                },
            ]
        },
        {
            name: `重置所有构件颜色`,
            desc: `恢复所有构件颜色`,
            demo: { name: `设置构件颜色`, href: `ArtifactsBecomeAngry` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Element.resetColorAll()`
                },
            ]
        },
        {
            name: `设置构件透明`,
            desc: `设置构件透明度`,
            demo: { name: `构件透明度`, href: `ArtifactsSemiPermeable` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Element.setAlpha(viewId,elementIds,alphaValue)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `viewId`, type: `String`, desc: `模型Id` },
                        { name: `elementIds`, type: `Array<String>`, desc: `构件Id数组` },
                        { name: `alphaValue`, type: `Number`, desc: `透明度，取值范围0-1的浮点数` },
                    ]
                },
            ]
        },
        {
            name: `重置构件透明`,
            desc: `重置构件透明度`,
            demo: { name: `构件透明度`, href: `ArtifactsSemiPermeable` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Element.resetAlpha(viewId,elementIds)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `viewId`, type: `String`, desc: `模型Id` },
                        { name: `elementIds`, type: `Array<String>`, desc: `构件Id数组` },
                    ]
                },
            ]
        },
        {
            name: `重置所有构件透明`,
            desc: `重置所有构件透明度`,
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Element.resetAlphaAll()`
                },
            ]
        },
    ],
    componentStatus: [
        {
            name: `设置构件显隐`,
            desc: `构件显隐`,
            demo: { name: `构件显隐`, href: `ShowHiddenArtifacts` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Element.setVisible(viewId,elementIds,isVisible)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `viewId`, type: `String`, desc: `模型Id` },
                        { name: `elementIds`, type: `Array<String>`, desc: `构件Id数组` },
                        { name: `isVisible`, type: `Object`, desc: `true:显示构件，false:隐藏构件` },
                    ]
                },
            ]
        },
        {
            name: `重置所有构件显示`,
            desc: `所有隐藏构件恢复显示`,
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Element.resetVisibleAll()`
                },
            ]
        },
    ],
    camera: [
        {
            name: `设置镜头`,
            desc: '设置镜头属性',
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Camera.setCameraInfo(options)`
                },
                {
                    name: `参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `目标坐标信息对象` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `coordinate`, type: `Object`, desc: `{x:0,y:0,z:0}或{longitude:0,latitude:0,altitude:0},//目标点坐标` },
                        { name: `rotate`, type: `Object`, desc: `{heading:0,pitch:0}` },
                    ]
                },
                {
                    name: `rotate`,
                    childs: [
                        { name: `heading`, type: `Number`, desc: `镜头偏航角(角度值),镜头左右方向,正北方为0°,正值为右,负值为左,默认保持当前偏航角` },
                        { name: `pitch`, type: `Number`, desc: `镜头仰俯角(角度值),镜头上下方向,平视为0°,正值为上,负值为下,默认保持当前仰俯角` },
                    ]
                },
            ]
        },
        {
            name: `设置镜头(飞行效果)`,
            desc: '设置镜头属性(飞行效果)',
            demo: { name: `镜头`, href: `MovingLens` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Camera.doCameraFly(options)`
                },
                {
                    name: `参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `目标坐标信息对象` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `coordinate`, type: `Object`, desc: `{x:0,y:0,z:0}或{longitude:0,latitude:0,altitude:0},//目标点坐标` },
                        { name: `rotate`, type: `Object`, desc: `{heading:0,pitch:0}` },
                    ]
                },
                {
                    name: `rotate`,
                    childs: [
                        { name: `heading`, type: `Number`, desc: `镜头偏航角(角度值),镜头左右方向,正北方为0°,正值为右,负值为左,默认保持当前偏航角` },
                        { name: `pitch`, type: `Number`, desc: `镜头仰俯角(角度值),镜头上下方向,平视为0°,正值为上,负值为下,默认保持当前仰俯角` },
                    ]
                },
            ]
        },
        {
            name: `获取当前镜头信息`,
            desc: `获取当前镜头信息（坐标、角度等）`,
            demo: { name: `镜头`, href: `MovingLens` },
            childs: [
                {
                    name: `方法`,
                    desc: `let options = TKBimSdk.Camera.getCameraInfo()`
                },
                {
                    name: `参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `目标坐标信息对象` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `coordinate`, type: `Object`, desc: `{x:0,y:0,z:0}或{longitude:0,latitude:0,altitude:0},//目标点坐标` },
                        { name: `rotate`, type: `Object`, desc: `{heading:0,pitch:0}` },
                    ]
                },
                {
                    name: `rotate`,
                    childs: [
                        { name: `heading`, type: `Number`, desc: `镜头偏航角(角度值),镜头左右方向,正北方为0°,正值为右,负值为左,默认保持当前偏航角` },
                        { name: `pitch`, type: `Number`, desc: `镜头仰俯角(角度值),镜头上下方向,平视为0°,正值为上,负值为下,默认保持当前仰俯角` },
                    ]
                },
            ]
        },
        {
            name: `摄像机切换正交/透视`,
            desc: `切换镜头类型：透视/正交，默认透视类型`,
            demo: { name: `镜头`, href: `MovingLens` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Camera.setCameraType(CAMERATYPE)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `CAMERATYPE`, type: `Number`, desc: `传入当前参数或传入枚举对应的数值` },
                    ]
                },
                {
                    name: `CAMERATYPE(枚举类)`,
                    childs: [
                        { name: `CAMERATYPE.PERSPECTIVE`, type: `String`, desc: `切换到透视` },
                        { name: `CAMERATYPE.ORTHOGRAPHIC`, type: `String`, desc: `切换到正交` },
                    ]
                },
            ]
        },
    ],
    section: [
        {
            name: `开始自定义剖切`,
            demo: { name: `剖切`, href: `Sectioning` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Section.start(viewIds,options)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `viewIds`, type: `Array<String>`, desc: `参与剖切的模型Id数组` },
                        { name: `options`, type: `Object`, desc: `剖切参数` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `coordinate`, type: `Object`, desc: `{x:0,y:0,z:0},剖切盒中心点坐标（笛卡尔坐标）,非必要` },
                        { name: `sectionBoxValues`, type: `Array<Number>`, desc: `剖切盒大小,默认[10,10,10,10,10,10],非必要` },
                        { name: `boxAngle`, type: `Number`, desc: `旋转角度，0-360，默认0,非必要` },
                        { name: `boxAlpha`, type: `Number`, desc: `包围盒透明度0-1的数值，默认0.3,非必要` },
                    ]
                },
            ]
        },
        {
            name: `修改自定义剖切值`,
            desc: `修改剖切盒大小`,
            demo: { name: `剖切`, href: `Sectioning` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Section.setValue(boxSize)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `boxSize`, type: `Array<Number>`, desc: `剖切盒大小：[x1,x2,y1,y2,z1,z2]` },
                    ]
                },
            ]
        },
        {
            name: `修改自定义剖切盒旋转角度`,
            desc: `旋转剖切盒`,
            demo: { name: `剖切`, href: `Sectioning` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Section.setAngle(angle)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `angle`, type: `Number`, desc: `旋转角度：0-360` },
                    ]
                },
            ]
        },
        {
            name: `修改自定义剖切模式`,
            desc: `切换显示剖切盒内或盒外`,
            demo: { name: `剖切`, href: `Sectioning` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Section.setMode(SECTIONMODE)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `SECTIONMODE`, type: `Number`, desc: `剖切模式` },
                    ]
                },
                {
                    name: `SECTIONMODE(枚举类)`,
                    childs: [
                        { name: `SECTIONMODE.OUTSIDE`, type: `String`, desc: `盒外` },
                        { name: `SECTIONMODE.INSIDE`, type: `String`, desc: `盒内` },
                    ]
                },
            ]
        },
        {
            name: `清理自定义剖切`,
            demo: { name: `剖切`, href: `Sectioning` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Section.clean()`
                },
            ]
        },
    ],
    linkagemap: [
        {
            name: `打开2D图`,
            desc: `打开并渲染2D地图`,
            demo: { name: `2D图`, href: `Map2D` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.LinkageMap.renderMap(options)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        {
                            name: `options`, type: `Object`, desc: `{}`
                        },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `containerId`, type: `String`, desc: `显示地图的div元素id` },
                        { name: `imgUrl`, type: `String`, desc: `图片地址` },
                        { name: `extent`, type: `Object`, desc: `` },
                    ]
                },
                {
                    name: `extent`,
                    childs: [
                        { name: `maxLon`, type: `Number`, desc: `图片左下角经度` },
                        { name: `maxLat`, type: `Number`, desc: `图片左下角纬度` },
                        { name: `minLon`, type: `Number`, desc: `图片右上角经度` },
                        { name: `minLat`, type: `Number`, desc: `图片右上角纬度` },
                    ]
                },
            ]
        },
        {
            name: `添加标记到2D图`,
            desc: `在2D图添加标记`,
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.LinkageMap.addSignToLinkageMap(coordinate)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `coordinate`, type: `Object`, desc: `标记坐标{longitude:0,latitude:0,altitude:0}/{ x: 0, y: 0, z: 0}` },
                    ]
                },
            ]
        },
        {
            name: `关闭2D图`,
            desc: `清空并关闭2D图同时停止联动`,
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.LinkageMap.close()`
                },
            ]
        },
    ],
    excavation: [
        {
            name: `开始开挖`,
            demo: { name: `开挖`, href: `Excavation` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Excavation.start(viewIds,options,excavatedCallBack)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `viewIds`, type: `Array<String>`, desc: `参与开挖的模型viewId数组` },
                        { name: `options`, type: `Object`, desc: `开挖参数` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `bottom`, type: `Number`, desc: `开挖深度，默认30米` },
                        { name: `isShowChartlet`, type: `Boolean`, desc: `是否显示开挖后的贴图,默认true` },
                    ]
                },
                {
                    name: `非必填参数`,
                    childs: [
                        { name: `excavatedCallBack`, type: `Function`, desc: `开挖完成回调,返回开挖面积,单位：平方米` }, ,
                    ]
                },
            ]
        },
        {
            name: `根据坐标点开挖`,
            desc: `根据传入的坐标点进行开挖`,
            demo: { name: `开挖`, href: `Excavation` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Excavation.startFromCoordinates(viewIds,options,excavatedCallBack)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `viewIds`, type: `Array<String>`, desc: `参与开挖的模型viewId数组` },
                    ]
                },
                {
                    name: `非必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `开挖参数` },
                        { name: `excavatedCallBack`, type: `Function`, desc: `开挖完成回调,返回开挖面积,单位：平方米` }, ,
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `coordinates`, type: `Object`, desc: `[{ longitude: 0, latitude: 0, altitude: 0 },..]或[{ x: 0, y: 0, z: 0 },...]` },
                        { name: `bottom`, type: `Number`, desc: `开挖深度，默认30米` },
                        { name: `isShowChartlet`, type: `Boolean`, desc: `是否显示开挖后的贴图,默认true` },
                    ]
                },
            ]
        },
        {
            name: `修改开挖深度`,
            demo: { name: `开挖`, href: `Excavation` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Excavation.setDepth(depth)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `depth`, type: `Number`, desc: `开挖深度` },
                    ]
                },
            ]
        },
        {
            name: `清理开挖`,
            demo: { name: `开挖`, href: `Excavation` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Excavation.clean()`
                },
            ]
        },
    ],
    measuringDistance: [
        {
            name: `开始测距`,
            desc: `距离测量`,
            demo: { name: `测量距离`, href: `MeasuringDistance` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.MeasureDistance.start()`
                },
            ]
        },
        {
            name: `停止测距`,
            desc: `停止距离测量`,
            demo: { name: `测量距离`, href: `MeasuringDistance` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.MeasureDistance.stop()`
                },
            ]
        },
        {
            name: `清理测距`,
            desc: `清理距离测量数据`,
            demo: { name: `测量距离`, href: `MeasuringDistance` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.MeasureDistance.clean()`
                },
            ]
        },
    ],
    measuringArea: [
        {
            name: `开始测面`,
            desc: `面积测量`,
            demo: { name: `测量面积`, href: `MeasuringArea` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.MeasureArea.start()`
                },
            ]
        },
        {
            name: `停止测面积`,
            desc: `停止面积测量`,
            demo: { name: `测量面积`, href: `MeasuringArea` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.MeasureArea.stop()`
                },
            ]
        },
        {
            name: `清理测面积`,
            desc: `清理面积测量数据`,
            demo: { name: `测量面积`, href: `MeasuringArea` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.MeasureArea.clean()`
                },
            ]
        },
    ],
    gaugeAltitude: [
        {
            name: `开始测高`,
            desc: `高度测量`,
            demo: { name: `测量高度`, href: `GaugeAltitude` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.MeasureHeight.start()`
                },
            ]
        },
        {
            name: `停止测高`,
            desc: `停止高度测量`,
            demo: { name: `测量高度`, href: `GaugeAltitude` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.MeasureHeight.stop()`
                },
            ]
        },
        {
            name: `清理测高`,
            desc: `清理高度测量数据`,
            demo: { name: `测量高度`, href: `GaugeAltitude` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.MeasureHeight.clean()`
                },
            ]
        },
    ],
    roam: [
        {
            name: `开始漫游`,
            demo: { name: `漫游`, href: `Roam` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Roaming.start(options)`
                },
                {
                    name: `非必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `漫游参数` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `speed`, type: `Number`, desc: `漫游速度(建议0-15之间),默认0.5` },
                        { name: `isGravity`, type: `Boolean`, desc: `是否开启重力,默认true` },
                        { name: `forwardDir`, type: `Boolean`, desc: `操作方向,true正向,false反向,默认true` },
                        { name: `viewType`, type: `Object`, desc: `漫游视角参数` },
                    ]
                },
                {
                    name: `viewType`,
                    childs: [
                        { name: `isFirstPerson`, type: `Boolean`, desc: `是否第一人称视角,默认false` },
                        { name: `scope`, type: `Number`, desc: `第一人称下的视角扩展系数，,默认1` },
                        { name: `sightHeight`, type: `Number`, desc: `第一人称视角下视线高度,默认2` },
                        { name: `barrierHeight`, type: `Number`, desc: `可越过的障碍物（模型）高度,默认1.5` },
                        { name: `modelUrl`, type: `String`, desc: `模型路径地址,第一人称漫游状态下可不设置` },
                        { name: `coordinate`, type: `Object`, desc: `{x:0,y:0,z:0}或{longitude:0,latitude:0,altitude:0},起始漫游点坐标（笛卡尔坐标/经纬度坐标）,默认使用当前镜头坐标` },
                    ]
                },
            ]
        },
        {
            name: `修改漫游速度`,
            demo: { name: `漫游`, href: `Roam` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Roaming.setSpeed(speed)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `speed`, type: `Number`, desc: `漫游速度(建议0-15之间)` },
                    ]
                },
            ]
        },
        {
            name: `设置漫游状态`,
            demo: { name: `漫游`, href: `Roam` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Roaming.setStauts(isGravity,forwardDir)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `isGravity`, type: `Boolean`, desc: `是否开启重力（true：是，false：否）` },
                        { name: `forwardDir`, type: `Boolean`, desc: `操作方向设置（true：正向，false：反向）` },
                    ]
                },
            ]
        },
        {
            name: `获取当前漫游位置`,
            demo: { name: `漫游`, href: `Roam` },
            childs: [
                {
                    name: `方法`,
                    desc: `let coordinate = TKBimSdk.Roaming.getLocation()`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `coordinate`, type: `Object`, desc: `{x:0,y:0,z:0}` },
                    ]
                },
            ]
        },
        {
            name: `漫游视角模式设置`,
            demo: { name: `漫游`, href: `Roam` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Roaming.setView(options)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `漫游视角参数` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `isFirstPerson`, type: `Boolean`, desc: `是否第一人称视角,默认false` },
                        { name: `sightHeight`, type: `Number`, desc: `第一人称视角下视线高度,默认2` },
                        { name: `barrierHeight`, type: `Number`, desc: `可越过的障碍物（模型）高度,默认1.5` },
                        { name: `modelUrl`, type: `String`, desc: `第三人称视角模型路径地址` },
                        { name: `coordinate`, type: `Object`, desc: `{x:0,y:0,z:0}或{longitude:0,latitude:0,altitude:0},添加标点的坐标(笛卡尔坐标/经纬度坐标)` },
                    ]
                },
            ]
        },
        {
            name: `结束漫游`,
            demo: { name: `漫游`, href: `Roam` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Roaming.end()`
                },
            ]
        },
    ],
    tagging: [
        {
            name: `添加标点`,
            desc: `添加空间信息标注`,
            demo: { name: `添加标点`, href: `DIVContainerTag` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Marker.addMarker(options,clickCallBack)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `标注参数` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `id`, type: `String`, desc: `标点id` },
                        { name: `alwaysShow`, type: `Boolean`, desc: `是否是保持显示（不被三维中的物体遮挡）,默认false` },
                        { name: `coordinate`, type: `Object`, desc: `{x:0,y:0,z:0}或{longitude:0,latitude:0,altitude:0},添加标点的坐标(笛卡尔坐标/经纬度坐标)` },
                        { name: `imgData`, type: `Object`, desc: `标点图标属性` },
                        { name: `msgData`, type: `Object`, desc: `标点文字标注,默认无文字信息` },
                    ]
                },
                {
                    name: `imgData`,
                    childs: [
                        { name: `img`, type: `String`, desc: `图片路径/base64格式图片` },
                        { name: `width`, type: `Number`, desc: `宽，默认32` },
                        { name: `height`, type: `Number`, desc: `高，默认32` },
                    ]
                },
                {
                    name: `msgData`,
                    childs: [
                        { name: `msg`, type: `String`, desc: `标点文字标注` },
                        { name: `font`, type: `Number`, desc: `字体信息(20px sans-serif)` },
                        { name: `color`, type: `Array<Number>`, desc: `[255,0, 0, 1]` },
                    ]
                },
                {
                    name: `非必填参数`,
                    childs: [
                        { name: `clickCallBack`, type: `Function`, desc: `标点点击回调，回调返回 id` },
                    ]
                },
            ]
        },
        {
            name: `修改标点图片`,
            desc: `修改标注图标`,
            demo: { name: `添加标点`, href: `DIVContainerTag` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Marker.setMarkerImg(id,img)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `id`, type: `String`, desc: `标点id` },
                        { name: `img`, type: `String`, desc: `图片路径 或 图片base64格式字符串` },
                    ]
                },
            ]
        },
        {
            name: `添加信息板`,
            desc: `添加信息板标注（该标注的定位、删除功能同标点）`,
            demo: { name: `添加信息板`, href: `Board` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Marker.addInfoBoard(options,clickCallBack)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `信息板属性` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `id`, type: `String`, desc: `标点id` },
                        { name: `alwaysShow`, type: `Boolean`, desc: `是否是保持显示（不被三维中的物体遮挡）,默认false` },
                        { name: `coordinate`, type: `Object`, desc: `{x:0,y:0,z:0}或{longitude:0,latitude:0,altitude:0},添加标点的坐标(笛卡尔坐标/经纬度坐标)` },
                        { name: `boardData`, type: `Object`, desc: `标点图标属性` },
                    ]
                },
                {
                    name: `boardData`,
                    childs: [
                        { name: `content`, type: `String`, desc: `html元素Id/图片路径/base64格式图片` },
                        { name: `width`, type: `Number`, desc: `宽，默认64` },
                        { name: `height`, type: `Number`, desc: `高，默认64` },
                    ]
                },
                {
                    name: `非必填参数`,
                    childs: [
                        { name: `clickCallBack`, type: `Function`, desc: `标点点击回调，回调返回 id` },
                    ]
                },
            ]
        },
        {
            name: `注册标注点/信息板实时坐标`,
            desc: `注册标注实时坐标回调,可实时获取标点/信息板的屏幕坐标。注：此功能只会返回最后一次监听的标点坐标`,
            demo: { name: `添加标点`, href: `DIVContainerTag` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Marker.setMarkerImg(id,img)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `id`, type: `String`, desc: `标注/信息板Id` },
                    ]
                },
                {
                    name: `非必填参数`,
                    childs: [
                        { name: `locationCallBack`, type: `Function`, desc: `标注实时坐标回调，回调返回屏幕坐标对象，格式{x:0,y:0}` },
                    ]
                },
            ]
        },
        {
            name: `移除标注点/信息板实时坐标`,
            desc: `移除标注实时坐标回调`,
            demo: { name: `添加标点`, href: `DIVContainerTag` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Marker.removeLocationListener(id)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `id`, type: `String`, desc: `标注/信息板Id` },
                    ]
                },
            ]
        },
        {
            name: `定位到标点/信息板`,
            desc: `定位到标注`,
            demo: { name: `添加标点`, href: `DIVContainerTag` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Marker.locationTo(id)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `id`, type: `String`, desc: `标注/信息板Id` },
                    ]
                },
            ]
        },
        {
            name: `删除标点/信息板`,
            desc: `删除标签`,
            demo: { name: `添加标点`, href: `DIVContainerTag` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Marker.remove(id)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `id`, type: `String`, desc: `标注/信息板Id` },
                    ]
                },
            ]
        },
        {
            name: `删除所有标点/信息板`,
            desc: `删除所有标注`,
            demo: { name: `添加标点`, href: `DIVContainerTag` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Marker.removeAll()`
                },
            ]
        },
    ],
    axialnet: [
        {
            name: `轴网显隐`,
            desc: `显示/隐藏viewId模型轴网`,
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Axialnet.setVisible(viewId,isShow)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `viewId`, type: `String`, desc: `模型Id` },
                        { name: `isShow`, type: `Boolean`, desc: `是否显示轴网` },
                    ]
                },
            ]
        },
        {
            name: `设置轴网高度索引`,
            desc: `根据索引设置轴网高度`,
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Axialnet.setLevel(levelIndex)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `levelIndex`, type: `Number`, desc: `轴网标高数组索引，标高数据调用后台接口获得` },
                    ]
                },
            ]
        },
    ],
    visibleRange: [
        {
            name: `根据参数添加可视域`,
            desc: `添加一个可视域`,
            demo: { name: `可视域分析`, href: `VisibilityAnalysis` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.VisibleRange.addByOptions(options)`
                },
                {
                    name: `非必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `可视域配置参数` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `id`, type: `String`, desc: `可视域id` },
                        { name: `coordinate`, type: `Object`, desc: `{x:0,y:0,z:0}或{longitude:0,latitude:0,altitude:0},坐标` },
                        { name: `distance`, type: `Number`, desc: `视距,默认30米` },
                        { name: `visualAngle`, type: `Object`, desc: `视野` },
                        { name: `rotate`, type: `Object`, desc: `镜头` },
                    ]
                },
                {
                    name: `visualAngle`,
                    childs: [
                        { name: `horizonalAngle`, type: `Number`, desc: `视线宽度（x轴角度)，默认120` },
                        { name: `verticalAngle`, type: `Number`, desc: `视线高度(y轴角度)，默认90` },
                    ]
                },
                {
                    name: `rotate`,
                    childs: [
                        { name: `heading`, type: `Number`, desc: `镜头偏航角(角度值),镜头左右方向,正北方为0°,正值为右,负值为左，默认120` },
                        { name: `pitch`, type: `Number`, desc: `镜头仰俯角(角度值),镜头上下方向,平视为0°,正值为上,负值为下，默认-30` },
                    ]
                },
            ]
        },
        {
            name: `鼠标添加可视域`,
            desc: `使用鼠标操作添加一个可视域`,
            demo: { name: `可视域分析`, href: `VisibilityAnalysis` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.VisibleRange.addByMouse()`
                },
            ]
        },
        {
            name: `根据Id移除可视域`,
            desc: `根据可视域对象中的id移除可视域信息`,
            // demo: { name: `可视域分析`, href: `VisibilityAnalysis` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.VisibleRange.removeById(id)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `id`, type: `String`, desc: `可视域对象id` },
                    ]
                },
                {
                    name: `返回值`,
                    childs: [
                        { name: `rangeIds`, type: `Array`, desc: `当前可视域信息数组` },
                    ]
                },
            ]
        },
        {
            name: `根据索引移除可视域`,
            desc: `根据当前可视域数组中的索引移除可视域信息`,
            // demo: { name: `可视域分析`, href: `VisibilityAnalysis` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.VisibleRange.removeByIndex(index)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `index`, type: `Number`, desc: `要移除的可视域信息在当前可视域信息数组中的索引` },
                    ]
                },
            ]
        },
        {
            name: `结束可视域分析`,
            desc: `结束可视域分析功能，清空场景中的可视域信息`,
            demo: { name: `可视域分析`, href: `VisibilityAnalysis` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.VisibleRange.end()`
                },
            ]
        },
    ],
    toolClass: [
        {
            name: `笛卡尔坐标转经纬度`,
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Tools.cartesianToCoordinate(cartesian)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `cartesian`, type: `Object`, desc: `笛卡尔坐标 {x:0,y:0,z:0}` },
                    ]
                },
                {
                    name: `返回值`,
                    childs: [
                        { name: `coordinate`, type: `Object`, desc: `{longitude:0,latitude:0,altitude:0}` },
                    ]
                },
            ]
        },
        {
            name: `经纬度转笛卡尔坐标`,
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Tools.coordinateToCartesian(coordinate)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `coordinate`, type: `Object`, desc: `经纬度坐标 {longitude:0,latitude:0,altitude:0}` },
                    ]
                },
                {
                    name: `返回值`,
                    childs: [
                        { name: `cartesian`, type: `Object`, desc: `{x:0,y:0,z:0}` },
                    ]
                },
            ]
        },
        {
            name: `相对坐标转转笛卡坐标`,
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Tools.localToCartesian(localCartesian)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `localCartesian`, type: `Object`, desc: `相对坐标 {x:0,y:0,z:0}` },
                    ]
                },
                {
                    name: `返回值`,
                    childs: [
                        { name: `cartesian`, type: `Object`, desc: `{x:0,y:0,z:0}` },
                    ]
                },
            ]
        },
        {
            name: `转笛卡坐标转相对坐标`,
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Tools.cartesianToLocal(cartesian)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `cartesian`, type: `Object`, desc: `笛卡尔坐标 {x:0,y:0,z:0}` },
                    ]
                },
                {
                    name: `返回值`,
                    childs: [
                        { name: `localCartesian`, type: `Object`, desc: `{x:0,y:0,z:0}` },
                    ]
                },
            ]
        },
        {
            name: `获取折线长度`,
            desc: `计算线段长度`,
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Tools.getDistanceByLine(coordinates)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `coordinates`, type: `Object`, desc: `线段坐标数组[{ longitude: 0, latitude: 0, altitude: 0 }..]或[{ x: 0, y: 0, z: 0 }..],` },
                    ]
                },
                {
                    name: `返回值`,
                    childs: [
                        { name: `distance`, type: `String`, desc: `线段长度，单位：米` },
                    ]
                },
            ]
        },
    ],
    graphicsModel: [
        {
            name: `添加gltf模型`,
            desc: `添加gltf、glb等实体模型`,
            demo: { name: `添加自定义构件/模型`, href: `AddCustomComponent` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.GraphicsModel.addGltf(options)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `添加的实体模型参数` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `id`, type: `String`, desc: `模型id` },
                        { name: `url`, type: `String`, desc: `模型路径` },
                        { name: `scale`, type: `Number`, desc: `模型缩放比例,默认1.0` },
                        { name: `coordinates`, type: `Object`, desc: `{longitude:0,latitude:0,altitude:0}或{x:0,y:0,z:0},坐标` },
                        { name: `labelAlwaysShow`, type: `Boolean`, desc: `标签是否是保持显示（不被三维中的物体遮挡）,默认false` },
                        { name: `rotate`, type: `Object`, desc: `模型摆放角度` },
                        { name: `textLabel`, type: `Object`, desc: `文字标签` },
                        { name: `imgLabel`, type: `Object`, desc: `图片标签` },
                    ]
                },
                {
                    name: `rotate`,
                    childs: [
                        { name: `heading`, type: `Number`, desc: `默认0` },
                        { name: `pitch`, type: `Number`, desc: `默认0` },
                        { name: `roll`, type: `Number`, desc: `默认0` },
                    ]
                },
                {
                    name: `textLabel`,
                    childs: [
                        { name: `text`, type: `String`, desc: `文字内容` },
                        { name: `pixelOffset`, type: `Object`, desc: `{x:0,y:0},标签像素偏移量,默认0` },
                        { name: `backgroundColor`, type: `Array<Number>`, desc: `[255,0,0,1],标签背景颜色,默认无背景颜色` },
                    ]
                },
                {
                    name: `imgLabel`,
                    childs: [
                        { name: `img`, type: `String`, desc: `图片路径或base64格式图片` },
                        { name: `width`, type: `Number`, desc: `图片宽,默认32` },
                        { name: `height`, type: `Number`, desc: `图片高,默认32` },
                        { name: `pixelOffset`, type: `Object`, desc: `{x:0,y:0}标签像素偏移量` },
                    ]
                },
            ]
        },
        {
            name: `设置gltf模型边线`,
            desc: `设置实体模型的边线颜色及线宽`,
            demo: { name: `添加自定义构件/模型`, href: `AddCustomComponent` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.GraphicsModel.setGltfOutLine(options)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `添加的实体模型参数` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `id`, type: `String`, desc: `模型id` },
                        { name: `outLineColor`, type: `Array<Number>`, desc: `[255,0,0,1],标签背景颜色,默认无背景颜色` },
                        { name: `outLineWidth`, type: `Number`, desc: `线宽，默认1` },
                    ]
                },
            ]
        },
        {
            name: `移动gltf模型(轴向)`,
            desc: `根据轴向移动实体模型`,
            demo: { name: `模型移动 - 轴向`, href: `ModelMoveAxis` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.GraphicsModel.moveGltfByAxis(options)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `参数` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `id`, type: `String`, desc: `模型id` },
                        { name: `x_axis`, type: `Number`, desc: `东西移动：正值向东，负值向西` },
                        { name: `y_axis`, type: `Number`, desc: `南北移动：正值向北，负值向南` },
                        { name: `z_axis`, type: `Number`, desc: `上下移动：正值向上，负值向下` },
                    ]
                },
            ]
        },
        {
            name: `停止移动gltf模型(轴向)`,
            desc: `停止实体模型的移动`,
            demo: { name: `模型移动 - 轴向`, href: `ModelMoveAxis` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.GraphicsModel.stopGltfByAxis(id)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `id`, type: `String`, desc: `模型id` },
                    ]
                },
            ]
        },
        {
            name: `移动gltf模型(坐标)`,
            desc: `根据起始坐标移动实体模型`,
            demo: { name: `模型移动 - 坐标`, href: `ModelMovePosition` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.GraphicsModel.moveGltfByCoordinate(options,movedCallback)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `参数` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `id`, type: `String`, desc: `模型id` },
                        { name: `startCoordinate`, type: `Object`, desc: `{longitude:0,latitude:0,altitude:0}或{x:0,y:0,z:0},起点坐标` },
                        { name: `endCoordinate`, type: `Object`, desc: `{longitude:0,latitude:0,altitude:0}或{x:0,y:0,z:0},终点坐标` },
                        { name: `durationTime`, type: `Number`, desc: `移动持续时间，默认3秒` },
                    ]
                },
                {
                    name: `非必填参数`,
                    childs: [
                        { name: `movedCallback`, type: `Function`, desc: `移动完成的回调` },
                    ]
                },
            ]
        },
        {
            name: `停止移动gltf模型(坐标)`,
            desc: `停止实体模型的移动`,
            demo: { name: `模型移动 - 坐标`, href: `ModelMovePosition` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.GraphicsModel.stopGltfByCoordinate(id)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `id`, type: `String`, desc: `模型id` },
                    ]
                },
            ]
        },
        {
            name: `添加圆柱体模型`,
            demo: { name: `圆柱模型`, href: `CylinderModel` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.GraphicsModel.addCylinder(options)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `图形模型属性` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `id`, type: `String`, desc: `模型id` },
                        { name: `coordinates`, type: `Object`, desc: `{longitude:0,latitude:0,altitude:0}或{x:0,y:0,z:0},坐标` },
                        { name: `topRadius`, type: `Number`, desc: `圆柱顶部半径,默认1,单位：米` },
                        { name: `bottomRadius`, type: `Number`, desc: `圆柱底部半径,默认1,单位：米` },
                        { name: `height`, type: `Number`, desc: `圆柱高度,默认1,单位：米` },
                        { name: `labelAlwaysShow`, type: `Boolean`, desc: `标签是否是保持显示（不被三维中的物体遮挡）,默认false` },
                        { name: `color`, type: `Array<Number>`, desc: `模型颜色,默认[255,0,0,1]` },
                        { name: `textLabel`, type: `Object`, desc: `文字标签` },
                        { name: `imgLabel`, type: `Object`, desc: `图片标签` },
                    ]
                },
                {
                    name: `textLabel`,
                    childs: [
                        { name: `text`, type: `String`, desc: `文字内容` },
                        { name: `pixelOffset`, type: `Object`, desc: `{x:0,y:0},标签像素偏移量,默认0` },
                        { name: `backgroundColor`, type: `Array<Number>`, desc: `[255,0,0,1],标签背景颜色,默认无背景颜色` },
                    ]
                },
                {
                    name: `imgLabel`,
                    childs: [
                        { name: `img`, type: `String`, desc: `图片路径或base64格式图片` },
                        { name: `width`, type: `Number`, desc: `图片宽,默认32` },
                        { name: `height`, type: `Number`, desc: `图片高,默认32` },
                        { name: `pixelOffset`, type: `Object`, desc: `{x:0,y:0}标签像素偏移量` },
                    ]
                },
            ]
        },
        {
            name: `添加折线`,
            desc: `添加线段模型`,
            demo: { name: `折线模型`, href: `LineModel` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.GraphicsModel.addLine(options)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `图形模型属性` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `id`, type: `String`, desc: `模型id` },
                        { name: `lineCoordinates`, type: `Array<Object>`, desc: `[{longitude:0,latitude:0,altitude:0}..]或[{x:0,y:0,z:0}..],线段坐标数组` },
                        { name: `lineWidth`, type: `Number`, desc: `线段宽度,默认1` },
                        { name: `color`, type: `Array<Number>`, desc: `模型颜色,默认[255,0,0,1]` },
                        { name: `labelAlwaysShow`, type: `Boolean`, desc: `标签是否是保持显示（不被三维中的物体遮挡）,默认false` },
                        { name: `textLabel`, type: `Object`, desc: `文字标签` },
                        { name: `imgLabel`, type: `Object`, desc: `图片标签` },
                    ]
                },
                {
                    name: `textLabel`,
                    childs: [
                        { name: `text`, type: `String`, desc: `文字内容` },
                        { name: `labelCoordinate`, type: `Object`, desc: `{longitude:0,latitude:0,altitude:0}或{x:0,y:0,z:0},标签坐标` },
                        { name: `pixelOffset`, type: `Object`, desc: `{x:0,y:20},标签像素偏移量` },
                        { name: `backgroundColor`, type: `Array<Number>`, desc: `[0,0,0,0.2],标签背景颜色,默认无背景颜色` },
                    ]
                },
                {
                    name: `imgLabel`,
                    childs: [
                        { name: `img`, type: `String`, desc: `图片路径或base64格式图片` },
                        { name: `width`, type: `Number`, desc: `图片宽,默认32` },
                        { name: `height`, type: `Number`, desc: `图片高,默认32` },
                        { name: `pixelOffset`, type: `Object`, desc: `{x:0,y:20}标签像素偏移量` },
                    ]
                },
            ]
        },
        {
            name: `添加带箭头的线段模型`,
            desc: `添加带箭头的线段。该线段暂时无法定位、描边及鼠标拾取等操作`,
            demo: { name: `带箭头的线段模型`, href: `LineArrowModel` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.GraphicsModel.addLineArrow(options)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `图形模型属性` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `id`, type: `String`, desc: `模型id` },
                        { name: `lineCoordinate`, type: `Array<Object>`, desc: `{longitude:0,latitude:0,altitude:0}或{x:0,y:0,z:0},线段起点坐标` },
                        { name: `lineLength`, type: `Number`, desc: `线段长度，默认1` },
                        { name: `lineWidth`, type: `Number`, desc: `线段宽度,默认1` },
                        { name: `color`, type: `Array<Number>`, desc: `模型颜色,默认[255,0,0,1]` },
                        { name: `visualRange`, type: `Number`, desc: `距离多远隐藏箭头线段，默认50` },
                        { name: `rotate`, type: `Object`, desc: `线段箭头朝向，角度,默认0` },
                    ]
                },
                {
                    name: `rotate`,
                    childs: [
                        { name: `heading`, type: `Number`, desc: `默认0` },
                        { name: `pitch`, type: `Number`, desc: `默认0` },
                        { name: `roll`, type: `Number`, desc: `默认0` },
                    ]
                },
            ]
        },
        {
            name: `添加管路模型`,
            demo: { name: `管路模型`, href: `PipelineModel` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.GraphicsModel.addPipeline(options)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `图形模型属性` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `id`, type: `String`, desc: `模型id` },
                        { name: `lineCoordinates`, type: `Array<Object>`, desc: `[{longitude:0,latitude:0,altitude:0}..]或[{x:0,y:0,z:0}..],线段坐标数组` },
                        { name: `lineRadius`, type: `Number`, desc: `管路半径` },
                        { name: `color`, type: `Array<Number>`, desc: `[1, 0, 0, 1],线颜色` },
                        { name: `labelCoordinate`, type: `Object`, desc: `{longitude:0,latitude:0,altitude:0}或{x:0,y:0,z:0},标签坐标` },
                        { name: `labelAlwaysShow`, type: `Boolean`, desc: `标签是否是保持显示（不被三维中的物体遮挡）,默认false` },
                        { name: `textLabel`, type: `Object`, desc: `文字标签` },
                        { name: `imgLabel`, type: `Object`, desc: `图片标签` },
                    ]
                },
                {
                    name: `textLabel`,
                    childs: [
                        { name: `text`, type: `String`, desc: `文字内容` },
                        { name: `pixelOffset`, type: `Object`, desc: `{x:0,y:0},标签像素偏移量` },
                        { name: `backgroundColor`, type: `Array<Number>`, desc: `[255,255,0,1],标签背景颜色` },
                    ]
                },
                {
                    name: `imgLabel`,
                    childs: [
                        { name: `img`, type: `String`, desc: `图片路径或base64格式图片` },
                        { name: `width`, type: `Number`, desc: `图片宽,默认32` },
                        { name: `height`, type: `Number`, desc: `图片高,默认32` },
                        { name: `pixelOffset`, type: `Object`, desc: `{x:0,y:20}标签像素偏移量` },
                    ]
                },
            ]
        },
        {
            name: `添加图片模型`,
            desc: `添加图片`,
            demo: { name: `添加图片模型`, href: `AddImage` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.GraphicsModel.addImage(options)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `参数` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `id`, type: `String`, desc: `图片id` },
                        { name: `url`, type: `String`, desc: `图片路径` },
                        { name: `coordinate`, type: `Object`, desc: `{longitude:0,latitude:0,altitude:0}或{x:0,y:0,z:0},坐标` },
                        { name: `rotate`, type: `Object`, desc: `模图片摆放角度,默认0` },
                        { name: `size`, type: `Object`, desc: `图片宽高,默认20` },
                    ]
                },
                {
                    name: `rotate`,
                    childs: [
                        { name: `heading`, type: `Number`, desc: `默认0` },
                        { name: `pitch`, type: `Number`, desc: `默认0` },
                        { name: `roll`, type: `Number`, desc: `默认0` },
                    ]
                },
                {
                    name: `size`,
                    childs: [
                        { name: `width`, type: `Number`, desc: `默认20` },
                        { name: `height`, type: `Number`, desc: `默认20` },
                    ]
                },
            ]
        },
        {
            name: `移除模型`,
            demo: { name: `管路模型`, href: `PipelineModel` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.GraphicsModel.remove(id)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `id`, type: `String`, desc: `模型id` },
                    ]
                },
            ]
        },
        {
            name: `设置图形/实体模型坐标`,
            desc: `设置模型坐标。该功能仅对gltf、圆柱体模型有效`,
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.GraphicsModel.setCoordinate(id,coordinate)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `id`, type: `String`, desc: `模型id` },
                        { name: `coordinate`, type: `Object`, desc: `新的坐标{longitude:0,latitude:0,altitude:0}或{x:0,y:0,z:0}` },
                    ]
                },
            ]
        },
        {
            name: `定位到模型`,
            desc: `设置模型坐标。该功能仅对gltf、圆柱体模型有效`,
            demo: { name: `鼠标拾取的回调`, href: `MouseCallback` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.GraphicsModel.locationTo(options,locationCallback)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `{}` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `id`, type: `String`, desc: `模型id` },
                        { name: `durationTime`, type: `Number`, desc: `移动到目标坐标所用时间，单位：秒` },
                        { name: `rangeCoeff`, type: `Number`, desc: `视距，距目标物体距离，数值越大距离越远` },
                        { name: `rotate`, type: `Object`, desc: `定位后，镜头偏航角和仰俯角，单位：角度` },
                    ]
                },
                {
                    name: `rotate`,
                    childs: [
                        { name: `heading`, type: `Number`, desc: `默认0` },
                        { name: `pitch`, type: `Number`, desc: `默认0` },
                    ]
                },
                {
                    name: `非必填参数`,
                    childs: [
                        { name: `locationCallback`, type: `Function`, desc: `定位完成后的回调，不返回数据，仅触发回调` },
                    ]
                },
            ]
        },
        {
            name: `注册鼠标拾取回调`,
            desc: `注册图形及实体模型的鼠标拾取回调。该接口对带箭头的线段模型无效`,
            demo: { name: `鼠标拾取的回调`, href: `MouseCallback` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.GraphicsModel.addMouseOverCallback(callback)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `callback`, type: `Function`, desc: `回调方法` },
                    ]
                },
                {
                    name: `返回数据`,
                    childs: [
                        { name: `id`, type: `String`, desc: `模型id` },
                        { name: `screenX`, type: `Number`, desc: `屏幕X坐标` },
                        { name: `screenY`, type: `Number`, desc: `屏幕Y轴坐标` },
                    ]
                },
            ]
        },
        {
            name: `移除鼠标拾取回调`,
            desc: `移除图形及实体模型的鼠标拾取回调`,
            demo: { name: `鼠标拾取的回调`, href: `MouseCallback` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.GraphicsModel.removeMouseOverCallback()`
                },
            ]
        },
    ],
    spatialAnnotation: [
        {
            name: `加载空间标注数据`,
            desc: `<div>添加空间标注数据</div>
            <div>注：</div>
            <div>本接口仅加载空间标注数据到引擎，加载后需调用show接口进行显示。</div>
            <div>每次加载数据会将上次加载的数据覆盖。</div>
            <div>空间标注目前支持三中类型，立方体、多边形、椭球。</div>`,
            demo: { name: `加载空间标注`, href: `classificationLoad` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Classification.load(options)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Array<Object>`, desc: `空间标注数据数组,[立方体,多边形,椭球,...]` },
                    ]
                },
                {
                    name: `立方体`,
                    childs: [
                        { name: `id`, type: `String`, desc: `空间标注id` },
                        { name: `type:"box"`, type: `String`, desc: `空间标注类型` },
                        { name: `coordinate`, type: `Object`, desc: `{longitude:0,latitude:0,altitude:0}或{x:0,y:0,z:0},立方体中心点坐标` },
                        { name: `attrData`, type: `Object`, desc: `属性数据` },
                    ]
                },
                {
                    name: `立方体：attrData`,
                    childs: [
                        { name: `name`, type: `String`, desc: `空间标注名称` },
                        { name: `length`, type: `Number`, desc: `立方体长度,单位：米,默认1` },
                        { name: `width`, type: `Number`, desc: `立方体宽度,单位：米,默认1` },
                        { name: `height`, type: `Number`, desc: `立方体高度（层高）,单位：米,默认1` },
                        { name: `heading`, type: `Number`, desc: `标注的旋转角度,默认0` },
                    ]
                },
                {
                    name: `多边形`,
                    childs: [
                        { name: `id`, type: `String`, desc: `空间标注id` },
                        { name: `type:"polygon"`, type: `String`, desc: `空间标注类型` },
                        { name: `coordinate`, type: `Object`, desc: `[{longitude:0,latitude:0,altitude:0}或{x:0,y:0,z:0}...],多边形坐标数组` },
                        { name: `attrData`, type: `Object`, desc: `属性数据` },
                    ]
                },
                {
                    name: `多边形：attrData`,
                    childs: [
                        { name: `name`, type: `String`, desc: `空间标注名称` },
                        { name: `height`, type: `Number`, desc: `高度,单位：米,默认1` },
                        { name: `color`, type: `Array<Number>`, desc: `颜色值[r,g,b,a],默认[255,0,0,1]` },
                    ]
                },
                {
                    name: `椭球`,
                    childs: [
                        { name: `id`, type: `String`, desc: `空间标注id` },
                        { name: `type:"ellipse"`, type: `String`, desc: `空间标注类型` },
                        { name: `coordinate`, type: `Object`, desc: `{longitude:0,latitude:0,altitude:0}或{x:0,y:0,z:0},中心点坐标` },
                        { name: `attrData`, type: `Object`, desc: `属性数据` },
                    ]
                },
                {
                    name: `椭球：attrData`,
                    childs: [
                        { name: `name`, type: `String`, desc: `空间标注名称` },
                        { name: `axisRadii`, type: `Array<Number>`, desc: `[1,1,1],x、y、z三个轴向的半径,单位：米,默认1` },
                    ]
                },
            ]
        },
        {
            name: `显示空间标注数据`,
            desc: `显示（改变空间标注数据颜色）编辑器加载的空间标注类的数据`,
            demo: { name: `加载空间标注`, href: `classificationLoad` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Classification.show(options)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `参数` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `id`, type: `String`, desc: `空间信息id` },
                        { name: `floor`, type: `Number`, desc: `要显示第几层,默认1(此属性仅对box类型的空间标注起作用)` },
                        { name: `color`, type: `Array<Number>`, desc: `颜色值[r,g,b,a],默认[255,0,0,1]` },
                        { name: `isShowBox`, type: `Boolean`, desc: `是否显示图形外观，默认true` },
                    ]
                },
            ]
        },
        {
            name: `隐藏空间标注数据`,
            desc: `隐藏空间标注`,
            demo: { name: `加载空间标注`, href: `classificationLoad` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Classification.hide(options)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `参数` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `id`, type: `String`, desc: `空间信息id` },
                        { name: `floor`, type: `Number`, desc: `隐藏第几层,默认1` },
                    ]
                },
            ]
        },
        {
            name: `空间标注数据添加标签`,
            desc: `给空间标注数据添加标签`,
            demo: { name: `加载空间标注`, href: `classificationLoad` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Classification.addLabel(options)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `参数` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `id`, type: `String`, desc: `空间信息id` },
                        { name: `floor`, type: `Number`, desc: `隐藏第几层,默认1` },
                        { name: `text`, type: `String`, desc: `标注信息` },
                        { name: `visualRange`, type: `Number`, desc: `距离多远隐藏,默认50` },
                    ]
                },
            ]
        },
        {
            name: `移除空间标注数据的标签`,
            desc: `移除空间标注标签`,
            demo: { name: `加载空间标注`, href: `classificationLoad` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Classification.removeLabel(options)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `参数` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `id`, type: `String`, desc: `空间信息id` },
                        { name: `floor`, type: `Number`, desc: `移除第几层的标注信息,默认1` },
                    ]
                },
            ]
        },
        {
            name: `定位到空间标注数据`,
            desc: `定位到自定义构件/模型`,
            demo: { name: `加载空间标注`, href: `classificationLoad` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Classification.locationTo(options,locationCallback)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `参数` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `id`, type: `String`, desc: `空间信息id` },
                        { name: `durationTime`, type: `Number`, desc: `移动到目标坐标所用时间，单位：秒,默认2` },
                        { name: `rangeCoeff`, type: `Number`, desc: `视距，距目标物体距离，数值越大距离越远,默认15` },
                        { name: `rotate`, type: `Object`, desc: `定位后，镜头偏航角和仰俯角，单位：角度,默认0` },
                    ]
                },
                {
                    name: `rotate`,
                    childs: [
                        { name: `heading`, type: `Number`, desc: `默认0` },
                        { name: `pitch`, type: `Number`, desc: `默认0` },
                    ]
                },
                {
                    name: `非必填参数`,
                    childs: [
                        { name: `locationCallback`, type: `Function`, desc: `定位完成后的回调，不返回数据，仅触发回调` },
                    ]
                },
            ]
        },
        {
            name: `移除所有空间标注数据`,
            desc: `移除所有空间信息及标注`,
            demo: { name: `加载空间标注`, href: `classificationLoad` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Classification.removeAll()`
                },
            ]
        },
        {
            name: `设置空间标注数据边线`,
            desc: `定位到自定义构件/模型`,
            demo: { name: `添加边线`, href: `classificationOutLine` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Classification.setOutLine(options)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `options`, type: `Object`, desc: `参数` },
                    ]
                },
                {
                    name: `options`,
                    childs: [
                        { name: `id`, type: `String`, desc: `构件/模型id` },
                        { name: `lineWidth`, type: `Number`, desc: `边线宽度,默认1` },
                        { name: `color`, type: `Array<Number>`, desc: `边线颜色，默认[255,0,0,1]` },
                    ]
                },
            ]
        },
        {
            name: `注册自定义模型点击回调`,
            demo: { name: `加载空间标注`, href: `classificationLoad` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Classification.addClickCallback(clickCb)`
                },
                {
                    name: `必填参数`,
                    childs: [
                        { name: `clickCb`, type: `Function`, desc: `自定义模型点击回调，回调返回点击的模型id` },
                    ]
                },
            ]
        },
        {
            name: `移除自定义模型点击回调`,
            demo: { name: `加载空间标注`, href: `classificationLoad` },
            childs: [
                {
                    name: `方法`,
                    desc: `TKBimSdk.Classification.removeClickCallback()`
                },
            ]
        },
    ],
}