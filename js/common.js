// 获取地址栏信息
let getQueryString = (name) => {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

// 两个数组中、获取第二个在第一个中不存在的
let GETTWOARRAYELSE = (oneArr, twoArr, key) => {
    // 根据唯一key值
    if (key) {
        return twoArr.filter(twoItem => !oneArr.some(oneItem => oneItem[key] == twoItem[key]))
    } else {
        return twoArr.filter(item => !oneArr.includes(item))
    }
}

// 获取两个数组中相同的
let GETARRAYEQUAL = (oneArr, twoArr, key) => {
    // 根据唯一key值
    if (key) {
        return twoArr.filter(twoItem => oneArr.some(oneItem => oneItem[key] == twoItem[key]))
    } else {
        return twoArr.filter(item => oneArr.includes(item))
    }
}

// 解析时间
let PARSETIME = (time, cFormat) => {
    const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
    let date;
    if (typeof time === "object") {
        date = time;
    } else {
        if (("" + time).length === 10) time = parseInt(time) * 1000;
        date = new Date(time);
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    };
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key];
        // Note: getDay() returns 0 on Sunday
        if (key === "a") {
            return ["日", "一", "二", "三", "四", "五", "六"][value];
        }
        if (result.length > 0 && value < 10) {
            value = "0" + value;
        }
        return value || 0;
    });
    return time_str;
}

// 获取文件名
let GETFILEINFO = (filePath) => {
    return new Promise((resolve) => {
        // 文件按/切割成数组
        let filePathArr = filePath.split("/");
        // 文件名按.切割成数组
        let filePointArr = filePathArr[filePathArr.length - 1].split(".");
        // 文件后缀
        let fileId = filePointArr[0];
        // 文件后缀
        let fileType = filePointArr[filePointArr.length - 1];
        resolve({ filePath, fileId, fileType });
    })
}

// 删除文件
let DELDOC = ({ fileId }) => {
    return new Promise((resolve) => {
        let e = document.getElementById(fileId);
        if (e) {
            e.remove();
        }
        resolve();
    });
}

// 添加外链文档
let ADDDOC = ({ filePath, fileId, fileType }) => {
    return new Promise((resolve) => {
        var head = document.getElementsByTagName("head")[0];
        var doc = null;
        if (fileType == "css") {
            doc = document.createElement("link");
            doc.rel = "stylesheet";
            doc.type = "text/css";
            doc.href = filePath;
        } else {
            doc = document.createElement("script");
            doc.setAttribute("type", "text/javascript");
            doc.setAttribute("src", filePath);
        }
        doc.id = fileId;
        head.appendChild(doc);
        doc.onload = doc.onreadystatechange = () => {
            doc.onload = doc.onreadystatechange = null;
            resolve();
        };
    });
}

let DELALLDOC = (files = engineFiles) => {
    return new Promise((resolve) => {
        // 动态加载文件
        dynamicLoad(0)
        function dynamicLoad(number) {
            GETFILEINFO(files[number]).then(({ fileId }) => {
                DELDOC({ fileId }).then(() => {
                    if (number < files.length - 1) {
                        dynamicLoad(++number);
                    } else {
                        resolve()
                    }
                });
            });
        }
    })
}

// 加载文件 - 加载前先删除文件
let LOADFILE = (files) => {
    return new Promise((resolve) => {
        // 动态加载文件
        dynamicLoad(0)
        function dynamicLoad(number) {
            GETFILEINFO(files[number]).then(({ filePath, fileId, fileType }) => {
                DELDOC({ fileId }).then(() => {
                    ADDDOC({ filePath, fileId, fileType, number }).then(() => {
                        if (number < files.length - 1) {
                            dynamicLoad(++number);
                        } else {
                            resolve()
                        }
                    });
                });
            });
        }
    })
}

// 加载引擎
let LOADENGINE = (engineFiles) => {
    return new Promise((resolve) => {
        // 加载引擎
        LOADFILE(engineFiles).then(() => {
            resolve()
        });
    })
}


// vue功能
let VUEFUNCTION = () => {
    return {
        // 指令
        directive: {
            // 拖拽
            drag: {
                beforeMount: function (el) {
                    if (el.querySelector('.cursor-move')) {
                        el.querySelector('.cursor-move').onmousedown = function (e) {
                            var disx = e.pageX - el.offsetLeft;
                            var disy = e.pageY - el.offsetTop;
                            document.onmousemove = function (e) {
                                el.style.left = e.pageX - disx + 'px';
                                el.style.top = e.pageY - disy + 'px';
                            }
                            document.onmouseup = function () {
                                document.onmousemove = document.onmouseup = null;
                            }
                        }
                    }
                }
            }
        },
        // 组件
        components: {
            // 菜单组件
            menu: {
                template: `
            <div :style="collapse?'min-width: 0px;':'min-width:220px;'">
                <div class="align-center flex flex-align-center cursor-pointer" @click="collapse = !collapse" style="height:40px;background-color: rgb(45,45,45);">
                    <i class="f-20 flex-1 color-f" :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
                </div>
                <el-menu :collapse="collapse" :unique-opened="true"
                    class="pageMenu el-menu-vertical-demo" background-color="rgb(66,66,66)" text-color="#fff"
                     active-text-color="#ffd04b" :default-active="defaultactive" 
                     @select="menuSelect" 
                     @open="locationPage" 
                     @close="locationPage"
                     style="overflow: auto">
                     <sub-menu :menus="menus" />
                </el-menu>
            </div>`,
                props: ["menus", "iscollapse", "defaultactive"],
                data() {
                    return {
                        collapse: true
                    }
                },
                watch: {
                    collapse() {
                        setTimeout(() => {
                            this.getWindowResizing()
                        }, 500)
                    }
                },
                mounted() {
                    this.collapse = this.iscollapse
                    window.addEventListener("resize", this.getWindowResizing);
                    this.getWindowResizing();
                },
                methods: {
                    // 窗口的宽高
                    getWindowResizing() {
                        $(".pageMenu").height(`${window.innerHeight - 60 - 40}px`)
                    },
                    // 返回参数
                    menuSelect(item) { this.$emit('select', item) },
                    locationPage(item) { location.href = "#" + item },
                }
            },
            // 子菜单组件
            subMenu: {
                template: `<template v-for="(menu,menuI) in menus" :key="menuI">
                    <template v-if="menu.children&&menu.children.length">
                        <el-sub-menu :index="menu.path">
                            <template #title>
                                <i v-if="menu.meta&&menu.meta.icon"
                                    class="fa iconName align-center" :class="menu.meta.icon"
                                    style="width: 25px; font-size: 14px;"></i>
                                <span style="margin-left: 5px;">{{menu.name}}</span>
                            </template>
                            <sub-menu :menus="menu.children" />
                        </el-sub-menu>
                    </template>
                    <template v-else>
                        <el-menu-item :index="menu.path">
                            {{menu.name}}
                        </el-menu-item>
                    </template>
                </template>`,
                props: ["menus"],
            },
        }
    }
}