var local = [];
var length_all;
var app = getApp()
Page({
  data: {
    back: "http://wxapp1.b0.upaiyun.com/yzl/img/back.png",
    img: "http://wxapp1.b0.upaiyun.com/ljq/img/demo.jpg",
    more:"http://wxapp1.b0.upaiyun.com/yzl/img/more.png",
    time: "2016年7月8日",
    xueyuan: "厦门华侨大学计算机科学与技术学院",
    menpiao: "门票",
    title: "科技创新大赛",
    data: [],
    hotclub: "http://wxapp1.b0.upaiyun.com/yzl/img/hotclub.png"
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
      url: 'https://api.lizi123.cn/index.php/home/club/wxgetHotActivity',
      data: {
        'client_type': 0
      },
      method: 'POST', 
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          hotact:res.data
        })
      }
    })
  },

  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  return: function () {
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
  },
  deletes: function (e) {
    console.log(e.target.id);
    var delete_id = e.target.id;
    console.log(local);
   local= Array.prototype.slice.call(local);
   local.splice(delete_id,1);
    console.log(local);
    // console.log(local);
    this.setData({
      data: local,
    })
  }
})