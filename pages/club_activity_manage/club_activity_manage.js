var app = getApp();
Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    activity_id: 1,
    activity_name: "",
    i: 0,
    info: null,
    more: "../../img/more.png",
    backPic: "http://wxapp1.b0.upaiyun.com/cjx/img/1414030186725.jpg",
    headPic: "http://wxapp1.b0.upaiyun.com/cjx/img/1414030186725.jpg",
    joinPic: [],
    back: 'http://wxapp1.b0.upaiyun.com/yzl/img/back.png',
    more: 'http://wxapp1.b0.upaiyun.com/yzl/img/more.png',
    zan: 'http://wxapp1.b0.upaiyun.com/yzl/img/zan.png',
    aboutPic: [],
    aboutActivityId: [],
    toActivityId: 0,
    toActivityName: "",
    good_pic: ['http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_big_good.png', 'http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/yizan.png'],
    is_good: 0,
    is_good_pic: 'http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_big_good.png',
    good_num: 0,
    collect_pic: ['http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_like.png', 'http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_liked.png'],
    is_collect: 0,
    is_collect_pic: 'http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_like.png',
    collect_num: 0
  },
  onLoad: function (option) {
    var that = this;
    that.setData({
      activity_id: option.id,
      activity_name: option.name
    })
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    wx.setNavigationBarTitle({
      title: that.data.activity_name
    })

    wx.request({
      url: 'https://api.lizi123.cn/index.php/home/Activity/actDetail',
      data: {
        'activity_id': that.data.activity_id,
        'client_type': 0,
        'user_id':1
      },
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      success: function (res) {
        console.log(res);
        that.setData({
          aboutActivityId: res.data.activity_recommend,
          info: res.data,
          is_good: res.data.is_good,
          is_collect: res.data.is_collect,
          is_good_pic: that.data.good_pic[res.data.is_good],
          is_collect_pic: that.data.collect_pic[res.data.is_collect],
          good_num: res.data.good_num,
          collect_num: res.data.collect_num
        })

        for (var j = that.data.i; j < 3 + that.data.i; j++) {
          that.data.aboutPic.push(res.data.activity_recommend[j].album_picture);
        }
        that.setData({ aboutPic: that.data.aboutPic });
        for (var j = 0; j < res.data.member.length; j++) {
          that.data.joinPic.push(res.data.member[j].head_image);
        }
        that.setData({ joinPic: that.data.joinPic });
        console.log(that.data.joinPic.length)
      },

      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },

  /** 
   * 滑动切换tab 
   */
  bindChange: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  /**
   * 相关活动跳转
   */
  toActicity: function (e) {
    var that = this;
    this.setData({
      toActivityId: e.target.dataset.activityid.activity_id,
      toActivityName: e.target.dataset.activityid.activity_name
    })
    wx.redirectTo({
      url: '../club_manageactivity_concret/club_manageactivity_concret?id=' + that.data.toActivityId + '&name=' + that.data.toActivityName,
      success: function (res) {
        // success
        console.log('success')
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

  },

  /**
   * 点赞
   */
  like_bindtap: function () {
    var that = this;
    if (that.data.is_good == 0) {
      wx.request({
        url: 'https://api.lizi123.cn/index.php/home/activity/actGood',
        method: 'POST',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
          client_type: 0,
          activity_id: that.data.activity_id,
          user_id: 1
        },
        success: function (res) {
          that.setData({
            is_good: 1,
            is_good_pic: that.data.good_pic[1],
            good_num: ++that.data.good_num
          })
          console.log("!!!!" + that.data.is_good)
        }
      })
    } else {
      wx.request({
        url: 'https://api.lizi123.cn/index.php/home/activity/deleteActGood',
        method: 'POST',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
          client_type: 0,
          activity_id: that.data.activity_id,
          user_id: 1
        },
        success: function (res) {
          that.setData({
            is_good: 0,
            is_good_pic: that.data.good_pic[0],
            good_num: --that.data.good_num
          })
          console.log("!!!!" + that.data.is_good)
        }
      })
    }
  },

  /**
   * 收藏
   */
  collect_bindtap: function () {
    var that = this;
    if (that.data.is_collect == 0) {
      wx.request({
        url: 'https://api.lizi123.cn/index.php/home/activity/actCollect',
        method: 'POST',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
          client_type: 0,
          activity_id: that.data.activity_id,
          user_id: 1
        },
        success: function (res) {
          that.setData({
            is_collect: 1,
            is_collect_pic: that.data.collect_pic[1],
            collect_num: ++that.data.collect_num
          })
          console.log(res)
        }
      })
    } else {
      wx.request({
        url: 'https://api.lizi123.cn/index.php/home/activity/deleteActCollect',
        method: 'POST',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
          client_type: 0,
          activity_id: that.data.activity_id,
          user_id: 1
        },
        success: function (res) {
          that.setData({
            is_collect: 0,
            is_collect_pic: that.data.collect_pic[0],
            collect_num: --that.data.collect_num
          })
          console.log(res)
        }
      })
    }
  }
})
