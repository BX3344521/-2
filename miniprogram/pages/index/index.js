Page({
  data: {
    //轮播图配置
    autoplay: true,
    interval: 3000,
    duration: 1200
  },
  onLoad: function () {
    var that = this; 
    var data = {
      "datas": [
        {
          "id": 1,
          "images": "/images/1.png"
        },
        {
          "id": 2,
          "images": "/images/2.png"
        },
        {
          "id": 3,
          "images": "/images/3.png"
        }
      ]
    }; 
  }
})