var demoMenu = [
    {
        "meta": {
            "icon": "fa-globe"
        },
        "name": "场景",
        "children": [
            {
                "name": "浏览",
                "children": [
                    {
                        "name": "你好BIM",
                        "path": "Initialization"
                    },
                    {
                        "name": "模型参数配置",
                        "path": "ModelConfig"
                    },
                    {
                        "name": "场景配置",
                        "path": "SceneConfig"
                    }
                ]
            },
            {
                "name": "场景操作",
                "children": [
                    {
                        "name": "切换GIS/BIM模式",
                        "path": "GISorBIM"
                    },
                    {
                        "name": "截屏",
                        "path": "screenCapture"
                    }
                ]
            }
        ]
    },
    {
        "meta": {
            "icon": "fa-street-view"
        },
        "name": "场景漫游",
        "children": [
            {
                "name": "漫游操作",
                "children": [
                    {
                        "name": "漫游",
                        "path": "Roam"
                    }
                ]
            }
        ]
    },
    {
        "meta": {
            "icon": "fa fa-video-camera"
        },
        "name": "镜头",
        "children": [
            {
                "name": "镜头操作",
                "children": [
                    {
                        "name": "镜头",
                        "path": "MovingLens"
                    }
                ]
            }
        ]
    },
    {
        "meta": {
            "icon": "fa-cubes"
        },
        "name": "3DTiles",
        "children": [
            {
                "name": "操作",
                "children": [
                    {
                        "name": "模型显隐",
                        "path": "ModelsShowHidden"
                    },
                    {
                        "name": "轴网",
                        "path": "AxisNet"
                    }
                ]
            },
            {
                "name": "裁剪",
                "children": [
                    {
                        "name": "开挖",
                        "path": "Excavation"
                    },
                    {
                        "name": "剖切",
                        "path": "Sectioning"
                    }
                ]
            },
            {
                "name": "测量",
                "children": [
                    {
                        "name": "测量距离",
                        "path": "MeasuringDistance"
                    },
                    {
                        "name": "测量面积",
                        "path": "MeasurementArea"
                    },
                    {
                        "name": "测量高度",
                        "path": "GaugeAltitude"
                    }
                ]
            }
        ]
    },
    {
        "meta": {
            "icon": "fa-object-group"
        },
        "name": "构件",
        "children": [
            {
                "name": "构件操作",
                "children": [
                    {
                        "name": "构件显隐",
                        "path": "ShowHiddenArtifacts"
                    },
                    {
                        "name": "构件变色",
                        "path": "ArtifactsBecomeAngry"
                    },
                    {
                        "name": "构件半透",
                        "path": "ArtifactsSemiPermeable"
                    },
                    {
                        "name": "定位到构件",
                        "path": "PositioningComponents"
                    },
                    {
                        "name": "选中/取消选中构件",
                        "path": "SelectionOfComponent"
                    },
                    {
                        "name": "框选构件",
                        "path": "BoxSelectedComponents"
                    }
                ]
            }
        ]
    },
    {
        "meta": {
            "icon": "fa-map-marker"
        },
        "name": "标记",
        "children": [
            {
                "name": "标记控制",
                "children": [
                    {
                        "name": "添加标点",
                        "path": "DIVContainerTag"
                    },
                    {
                        "name": "添加信息板",
                        "path": "Board"
                    }
                ]
            }
        ]
    },
    {
        "meta": {
            "icon": "fa fa-map"
        },
        "name": "联动",
        "children": [
            {
                "name": "联动操作",
                "children": [
                    {
                        "name": "二三维联动",
                        "path": "Map2D"
                    }
                ]
            }
        ]
    },
    {
        "meta": {
            "icon": "fa-cubes"
        },
        "name": "图形/实体模型",
        "children": [
            {
                "name": "添加",
                "children": [
                    {
                        "name": "gltf模型",
                        "path": "AddCustomComponent"
                    },
                    {
                        "name": "圆柱模型",
                        "path": "CylinderModel"
                    },
                    {
                        "name": "折线模型",
                        "path": "LineModel"
                    },
                    {
                        "name": "带箭头的线段模型",
                        "path": "LineArrowModel"
                    },
                    {
                        "name": "管路模型",
                        "path": "PipelineModel"
                    },
                    {
                        "name": "图片模型",
                        "path": "AddImage"
                    }
                ]
            },
            {
                "name": "移动",
                "children": [
                    {
                        "name": "轴向",
                        "path": "ModelMoveAxis"
                    },
                    {
                        "name": "坐标",
                        "path": "ModelMovePosition"
                    }
                ]
            },
            {
                "name": "鼠标",
                "children": [
                    {
                        "name": "鼠标拾取",
                        "path": "MouseCallback"
                    }
                ]
            }
        ]
    },
    {
        "meta": {
            "icon": "fa fa-commenting"
        },
        "name": "空间标注",
        "children": [
            {
                "name": "空间标注",
                "children": [
                    {
                        "name": "加载显示",
                        "path": "classificationLoad"
                    },
                    {
                        "name": "添加/移除标签",
                        "path": "classificationLabel"
                    },
                    {
                        "name": "添加边线",
                        "path": "classificationOutLine"
                    }
                ]
            }
        ]
    },
    {
        "meta": {
            "icon": "fa-eye"
        },
        "name": "分析",
        "children": [
            {
                "name": "空间分析",
                "children": [
                    {
                        "name": "可视域分析",
                        "path": "VisibilityAnalysis"
                    }
                ]
            }
        ]
    }
]
// 修改菜单路径、将路径改为唯一值
addIndex(demoMenu)
function addIndex(demoMenu, indexArr = ["menu"]) {
    return demoMenu.map((item, i) => {
        if (item.children && item.children.length) {
            // 修改为没有路径的添加唯一标识、不然在qpi文档跳转到demo的时候无法查找到菜单的位置
            // item.path = `${indexArr.join('_')}_${i + 1}${item.path ? ("_" + item.path) : ""}`;
            item.path = `${indexArr.join('_')}_${i + 1}`;
            addIndex(item.children, [...indexArr, i + 1])
        }
    })
}