# apidemo 演示

#### 介绍

- api 演示案例

# 模型地址

```
http://cimyanshi.tfhulian.com:7285/apidemonstration/data
```

# BIM 引擎配置说明

### 核心引擎

```
<!-- 核心引擎（必须引用） -->
<link href="http://60.30.241.14:2650/bimjs/tkengines/tkgis/v0.9.4/Widgets/widgets.css" rel="stylesheet" />
<script src="http://60.30.241.14:2650/bimjs/tkengines/tkgis/v0.9.4/TkEngine.js"></script>

// bim
<!-- 引擎操作器（必须引用） -->
<script src="http://60.30.241.14:2650/bimjs/tkengines/tkbim/v0.9.4/plugin/three.min.js"></script>

<!-- 提供对外bim功能接口（必须引用）-->
<script src="http://60.30.241.14:2650/bimjs/tkengines/tkbim/v0.9.4/tkbimsdk.js"></script>
<!-- 现在用的js -->
<script src="http://60.30.241.14:2650/bimjs/tkengines/tkbim/v0.9.4/tkbim.js"></script>
<script src="http://60.30.241.14:2650/bimjs/tkengines/tkbim/v0.9.4/tkbimsdk.js"></script>
```

### 引擎功能

- 当 BIM 引擎有操作的时候必须引用 jQuery

```
<!-- jquery 引擎操作工具（必须引用）-->
<script src="http://60.30.241.14:2650/bimjs/tkengines/tkbim/v0.9.4/plugin/jquery-3.4.1.min.js"></script>

<!-- html2canvas 引擎截图功能使用，不使用截图功能可不引用此js -->
<script src="http://60.30.241.14:2650/bimjs/tkengines/tkbim/v0.9.4/plugin/html2canvas.min.js"></script>

<!-- 引擎二三维联动使用，不使用联动功能可不引用此js-->
<script src="http://60.30.241.14:2650/bimjs/tkengines/tkbim/v0.9.4/plugin/konva.min.js"></script>
```

# 更新

### @update 刘明(2021-10-15)

- @desc
     - 1、修改 BIM 引擎版本：v0.9.3 -> v0.9.4
- @msg
     - 1、@王深 删除热力图需要引入的 js，现在引擎版本不在需要引入了

### @update 刘明(2021-10-28)
- @desc 
     - 将框架改为自己写的框架
