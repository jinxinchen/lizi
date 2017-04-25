var app = getApp()
Page({
  data: {
    manageClub: {}
  },
  onLoad: function () {
    console.log("我管理的社团列表");
    var that = this;
    wx.request({
      url: 'https://api.lizi123.cn/index.php/home/club/manageClubList',
      data: {
        'client_type': 1
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: function (res) {
        console.log(res)
        that.setData({
          manageClub: res.data
        });
        //console.log(that.data['manageClub'])
      }
    })
  },
  onPullDownRefresh:function(){
    console.log("下拉刷新")
    this.onLoad()
  }
})