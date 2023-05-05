
// 初始化地图
var map = new AMap.Map('container', {
  center: [116.397448, 39.909193],
  // resizeEnable: true,
  // viewMode: '3D',
  // pitch: 75,// 地图俯仰角度，有效范围 0 度- 83 度
  zoom: 18
})

// 路线规划
var driving = null;

// 同时引入工具条插件，比例尺插件和鹰眼插件
AMap.plugin(['AMap.Geolocation', 'AMap.Geocoder', 'AMap.Driving', 'AMap.PlaceSearch'], () => {

  // 路线规划方法
  driving = new AMap.Driving({
    map: map,
    // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
    policy: AMap.DrivingPolicy.LEAST_TIME
  })

  GetGeolocation()

  // //构造地点查询类
  // var placeSearch = new AMap.PlaceSearch({
  //   pageSize: 100, // 单页显示结果条数
  //   pageIndex: 1, // 页码
  //   city: "010", // 兴趣点城市
  // });
  // console.log('++++++++++++++++++')
  // //关键字查询
  // placeSearch.search('泰康', (status, result) => {
  //   console.log(placeSearch, status, result)

  // });


  //详情查询
  // placeSearch.getDetails("B000A83U0P", function (status, result) {
  //   if (status === 'complete' && result.info === 'OK') {
  //     console.log('getDetails', result);
  //   }
  // });
});

// 定位信息
function GetGeolocation() {
  return new Promise((reslove, reject) => {
    let geolocation = new AMap.Geolocation({
      // 是否使用高精度定位，默认：true
      enableHighAccuracy: true,
      // 设置定位超时时间，默认：无穷大
      timeout: 10000,
      // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
      buttonOffset: new AMap.Pixel(10, 20),
      //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      zoomToAccuracy: true,
      //  定位按钮的排放位置,  RB表示右下
      buttonPosition: 'RB'
    })
    // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
    map.addControl(geolocation);

    geolocation.getCurrentPosition((status, result) => {
      console.log('getCurrentPosition', status, result)

      var placeSearch = new AMap.PlaceSearch({
        type: '', // 兴趣点类别
        pageSize: 50, // 单页显示结果条数
        pageIndex: 1, // 页码
        city: "010", // 兴趣点城市
        map: map, // 展现结果的地图实例
        autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
      });

      var cpoint = [result.position.lng, result.position.lat]; //中心点坐标
      placeSearch.searchNearBy('', cpoint, 1000, (statu, resul) => {
        console.log('searchNearBy', statu, resul)
      });
    })
  })
}

// 地图点击事件
map.on('click', (e) => {
  let lnglatXY = [e.lnglat.getLng(), e.lnglat.getLat()];
  regeocoder(lnglatXY)
  GetGeolocation().then(data => {
    GetDrivingCar([data.position.lng, data.position.lat], lnglatXY)
  })
})

// 根据坐标返回地址:regeocoder(lnglatXY)
function regeocoder(loc) {
  console.log(loc)
  let geocoder = new AMap.Geocoder({ radius: 1000, extensions: 'all' })
  geocoder.getAddress(loc, (status, result) => {
    console.log('Geocoder', status, result)
  })
  map.setFitView();
}

// 规划行车路线
function GetDrivingCar(startXY, endXY) {
  driving.search(new AMap.LngLat(startXY[0], startXY[1]), new AMap.LngLat(endXY[0], endXY[1]), (status, result) => {
    console.log(status, result)
  })
}
