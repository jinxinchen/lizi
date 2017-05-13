var app = getApp()
Page({
  data: {
    motto: 'Hello lizi',
    userInfo: {},
    locat: 'http://wxapp1.b0.upaiyun.com/yzl/img/locat.png',
    mail: 'http://wxapp1.b0.upaiyun.com/ljq/img/club/news.png',
    person_image: 'http://wxapp1.b0.upaiyun.com/ljq/img/club/people/TouXiang_22club.png',
    icon_first: 'http://wxapp1.b0.upaiyun.com/ljq/img/mine/class.png',
    icon_second: 'http://wxapp1.b0.upaiyun.com/ljq/img/mine/club.png',
    icon_third: 'http://wxapp1.b0.upaiyun.com/ljq/img/mine/activity.png',
    icon_fourth: 'http://wxapp1.b0.upaiyun.com/yzl/img/showshow.png',
    addname: "",
    lat: 0,
    lng: 0
  },

  myfans: function () {
    console.log(1);
    wx.navigateTo({
      url: '../club_creat__step3/club_creat__step3'

    });
  },
  my_club: function () {
    console.log(1);
    wx.navigateTo({
      url: '../my_club/my_club',
      success: function (res) {
        // success
      }
    })
  },
  onLoad: function (options) {
    var that = this;
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
        // 成功返回函数
        that.setData({
          'lng': res.longitude,
          'lat': res.latitude
        })
      }
    }),
    wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 1000,
     
      }),
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
        console.log(res.data[0].school_name)
        that.setData({
          'addname': res.data[0].school_name
        })
      }
    })
  },
  tosearch:function(e){
    wx.navigateTo({
      url: '../getlocation/getlocation',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onShow:function(){
    console.log(app.globalData.address);
    var that=this;
    that.setData({
      'addname':app.globalData.address
    })
  }
  // getlocation: function (e) {
  //   var that = this;
  //   wx.chooseLocation({
  //     success: function (res) {
  //       that.setData({
  //         addname: res.name
  //       })
  //       //  console.log(res.name)
  //     }
  //   })
  // }
})
