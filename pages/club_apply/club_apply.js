var app = getApp();
Page({
  data: {
    all: {},
    club_name: '',
    scrollHeight: 0,
    back: 'http://wxapp1.b0.upaiyun.com/yzl/img/back.png',
    check: "待审核"
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
    //获取页面信息，并且赋予scroll-view的高度
    wx.getSystemInfo({
      success: function (res) {
        console.info(res.windowHeight);
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
    wx.request({
      url: 'https://api.lizi123.cn/index.php/home/club/clubApplyList',
      data: {
        "client_type": 0,
        "club_id": 1,
        "user_id": 1
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: { 'content-type': 'application/x-www-form-urlencoded' }, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res.data);
        that.setData({
          all: res.data,

          club_name: res.data.club_name
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

  },
  check: function (e) {
    var user_id = e.target.dataset.userid;   //用户id
    // console.log(user_id)

    wx.showModal({
      title: '',
      content: '您同意 TA 加入本社团吗？',
      cancelText: '拒绝',
      cancelColor: '#ff9912',
      confirmColor: '#ff9912',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: 'https://api.lizi123.cn/index.php/home/club/passClubApply',
            data: {
              'id': user_id,
              'client_type': 0,
              'user_id': 1,
              'club_id': 1
            },
            method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: { 'content-type': 'application/x-www-form-urlencoded' }, // 设置请求的 header
            success: function (res) {
              // success
              console.log(res)
            },
            fail: function () {
              // fail
            },
            complete: function () {
              // complete
            }
          })
        } else {

        }
      }
    })
  },

  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作
    console.log("下拉刷新....")
    this.onLoad()
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
    console.log("上拉拉加载更多....")
  },

  // //上拉与下拉
  // pullDownRefresh: function (e) {
  //   console.log("下拉刷新...."+e)
  //   // this.onLoad()
  // },

  // pullUpLoad: function (e) {
  //   // this.setData({
  //   //   page: this.data.page + 1
  //   // })

  //   // console.log("上拉拉加载更多...." + this.data.page)
  //   console.log("上拉拉加载更多...." +e)

  //   // this.getDataFromServer(this.data.page)
  // },
  // scroll:function(e){
  //   console.log(e)
  // }
})