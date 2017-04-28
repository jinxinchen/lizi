var app = getApp();
Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    //
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
    aboutActivityId:[],
    toActivityId:0,
    toActivityName:""
  },
  onLoad: function (option) {
    console.log(option)
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
      },
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      success: function (res) {
        console.log("******")
        console.log(res);
        that.setData({
          aboutActivityId:res.data.activity_recommend
        })
        that.setData({
          info: res.data
        });

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
  back: function () {
    wx.switchTab({//返回有tabbar的页面
      url: '../mine/mine'
    })
  },

  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

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
  a2: function () {
    var that = this;
    that.setData({ i: that.data.i + 3 });
    wx.request({
      url: 'https://api.lizi123.cn/index.php/home/Activity/actDetail',
      data: {
        'activity_id': 1,
        'client_type': 0,
      },
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      success: function (res) {
        
        if (that.data.i <= res.data.activity_recommend.length - 3) {
          that.data.aboutPic.splice(0, 3);
          that.setData({ aboutPic: that.data.aboutPic });
          for (var j = that.data.i; j < 3 + that.data.i; j++) {
            that.data.aboutPic.push(res.data.activity_recommend[j].album_picture);
          }
          that.setData({ aboutPic: that.data.aboutPic });
        }

      },

      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },

  toActicity: function (e) {
    var that=this;
    this.setData({
      toActivityId:e.target.dataset.activityid.activity_id,
      toActivityName:e.target.dataset.activityid.activity_name
    })
      wx.redirectTo({
        url: '../club_manageactivity_concret/club_manageactivity_concret?id='+that.data.toActivityId+'&name='+that.data.toActivityName,
        success: function(res){
          // success
          console.log('success')
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