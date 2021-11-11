/**
 * @update 刘明(2021-10-14)
 * @desc 需要加载的引擎文件地址
 */

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
let LOADENGINE = () => {
    return new Promise((resolve) => {
        // 按顺序加载引擎文件
        let engineFiles = [
            "http://60.30.241.14:2650/bimjs/tkengines/tkgis/v0.9.4/Widgets/widgets.css",
            "http://60.30.241.14:2650/bimjs/tkengines/tkgis/v0.9.4/TkEngine.js",
            "http://60.30.241.14:2650/bimjs/tkengines/tkbim/v0.9.4/plugin/jquery-3.4.1.min.js",
            // "http://60.30.241.14:2650/bimjs/tkengines/tkbim/v0.9.4/plugin/html2canvas.min.js",
            // "http://60.30.241.14:2650/bimjs/tkengines/tkbim/v0.9.4/plugin/konva.min.js",
            "http://60.30.241.14:2650/bimjs/tkengines/tkbim/v0.9.4/plugin/three.min.js",
            "http://60.30.241.14:2650/bimjs/tkengines/tkbim/v0.9.4/tkbim.js",
            "http://60.30.241.14:2650/bimjs/tkengines/tkbim/v0.9.4/tkbimsdk.js"
        ];
        // 加载引擎
        LOADFILE(engineFiles).then(() => {
            resolve()
        });
    })
}