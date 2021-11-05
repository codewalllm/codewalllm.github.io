// 获取地址栏信息
let getQueryString = (name) => {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
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

// 子菜单组件
let subMenu = {
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
}
// 菜单组件
let menuC = {
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
}
