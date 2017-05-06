Page({
  data: {
    club_id: null,
    club_recall_id: null,
    ImagewWidth: null,
    data_club_recall: {},
    back: 'http://wxapp1.b0.upaiyun.com/yzl/img/back.png',
    xing: 'http://wxapp1.b0.upaiyun.com/yzl/img/star.png',
    leaf: 'http://wxapp1.b0.upaiyun.com/yzl/img/leaf.png'
  },
  return: function () {
        console.log(0)
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
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    var that = this;
    that.setData({
      club_id: options.club_id,
      club_recall_id: options.recall_id
    });


    wx.getSystemInfo({
      success: function (res) {
        var Width = res.windowWidth / 3;
        Width = Width-5;
        console.log(Width)
        that.setData({
          ImagewWidth: Width
        })
      }
    });


    wx.request({
      url: 'https://api.lizi123.cn/index.php/home/club/clubRecall',
      data: {
        "client_type": 0,
        "club_id": that.data.club_id
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        // success
        for (var item in res.data) {
          if (res.data[item].id == that.data.club_recall_id) {
            that.setData({
              data_club_recall: res.data[item]
            })
          }
        }
        console.log(that.data.data_club_recall)
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  
    previewImage: function (e) {
        wx.previewImage({
            current: e.currentTarget.id, // 当前显示图片的http链接
            urls: this.data.data_club_recall.images // 需要预览的图片http链接列表
        })
    },
})