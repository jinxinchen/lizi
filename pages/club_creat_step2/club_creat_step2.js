// pages/club_creat__step3/club_creat__step3.js
Page({
  data: {
    userinfo: [],
    pre: "http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=",
         back:'http://wxapp1.b0.upaiyun.com/yzl/img/back.png',
         search:'http://wxapp1.b0.upaiyun.com/yzl/img/sear.png'
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    var that = this;
    wx.request({
      url: 'https://api.lizi123.cn/index.php/home/user/userFansList',
      data: {
        "client_type": 1,
        "user_id": 2
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // 必须写成这个 不知道为什么
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      }, // 设置请求的 header
      success: function (res) {
        var length = res.data.user_num;
        console.log(res);


        for (var i = 0; i < length - 2; i++) {
          console.log(res.data[i].user_info.user_name);
        }

        that.setData({
          userinfo: res.data
        })

        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  return:function(){
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
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
  }
})