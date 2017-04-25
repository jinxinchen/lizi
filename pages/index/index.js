var local = [];
var length_all;
var app = getApp()
Page({
  data: {
    //轮播图信息
    background: [],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    lat: 0,
    lng: 0,
    duration: 500,
    hotact:[],
    addname: "",
    locat: 'http://wxapp1.b0.upaiyun.com/yzl/img/locat.png',
    search: 'http://wxapp1.b0.upaiyun.com/yzl/img/search.png',
    message: 'http://wxapp1.b0.upaiyun.com/yzl/img/message.png',


    hotclub: "http://wxapp1.b0.upaiyun.com/yzl/img/hotclub.png",
    img: "http://wxapp1.b0.upaiyun.com/ljq/img/demo.jpg",
    time: "2016年7月8日",
    xueyuan: "厦门华侨大学计算机科学与技术学院",
    menpiao: "门票",
    title: "科技创新大赛",
    data: []
  },

  onLoad: function (options) {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
        // 成功返回函数
        that.setData({
          'lng' : res.longitude,
          'lat' : res.latitude
        })
      }
    })
    wx.request({
      url: 'https://api.lizi123.cn/index.php/home/index/bannerTabs',
      data: {'client_type':0},
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res){
        console.log(res);
        for(var i=0;i<res.data.length;i++){
          that.data.background.push(res.data[i].image);
          that.setData({
            background:that.data.background
          })
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    wx.request({
      url: 'https://api.lizi123.cn/index.php/home/index/getLocation',
      data: {
        'client_type': 0,
        'lat': that.data.lat,
        'lng': that.data.lng
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: function (res) {
        that.setData({
          'addname':res.data[0].school_name
        })
      }
    })
  },

  onShow: function () {
    var that = this;
    wx.request({
      url: 'https://api.lizi123.cn/index.php/home/club/wxgetHotActivity',
      data: {
        'client_type': 0
      },
      method: 'POST', 
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        that.setData({
          hotact:res.data
        })
      }
    })
  },

  return: function () {
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  deletes: function (e) {
    var delete_id = e.target.id;
    console.log(local);
    local = Array.prototype.slice.call(local);
    local.splice(delete_id, 1);
    console.log(local);
    // console.log(local);
    this.setData({
      data: local,
    })
  },
  getlocation: function (e) {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        that.setData({
          addname: res.name
        })
        //  console.log(res.name)
      }
    })
  }


})
