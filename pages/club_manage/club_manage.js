var local = [];
var length_all;
var app = getApp()
Page({
  data: {
    club_name: '',
    club_activity: {},
    club_people: {},
    // club_id:null,
    club_id: 1,
    // user_id:null,
    user_id: 2,
    data_record: null,     //社团记忆数据
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    num: 198,
    pictureSrc: '',
    PeopleName: '',
    PeopleIntro: '',
    HeadSrc: '',
    time: '',
    bola: true,
    bolb: false,
    bola: false,
    tabs: ["社团印象", "社团活动", "社团记忆"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    column: 'http://wxapp1.b0.upaiyun.com/yzl/img/column.png',
    background: 'http://wxapp1.b0.upaiyun.com/yzl/img/backgroud.png',
    p1: 'http://wxapp1.b0.upaiyun.com/yzl/img/p1.png',
    p2: 'http://wxapp1.b0.upaiyun.com/yzl/img/p2.png',
    p3: 'http://wxapp1.b0.upaiyun.com/yzl/img/p3.png',
    head: 'http://wxapp1.b0.upaiyun.com/yzl/img/head.png',
    more: 'http://wxapp1.b0.upaiyun.com/yzl/img/more.png',
    back: 'http://wxapp1.b0.upaiyun.com/yzl/img/back.png',
    icon_first: 'http://wxapp1.b0.upaiyun.com/ljq/img/mine/class.png',
    icon_second: 'http://wxapp1.b0.upaiyun.com/ljq/img/mine/club.png',
    icon_third: 'http://wxapp1.b0.upaiyun.com/ljq/img/mine/activity.png',
    icon_fourth: 'http://wxapp1.b0.upaiyun.com/yzl/img/showshow.png',
    hotclub: "http://wxapp1.b0.upaiyun.com/yzl/img/hotclub.png",
    img: "http://wxapp1.b0.upaiyun.com/ljq/img/demo.jpg",
    time: "2016年7月8日",
    xueyuan: "厦门华侨大学计算机科学与技术学院",
    menpiao: "门票",
    title: "科技创新大赛",
    data: []
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  show: function () {
    this.setData({
      view: true
    })
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

  onLoad: function (e) {
    var that = this;

    if (e.recall_id !== null) {
      console.log(e.recall_id)
      wx.request({
        url: 'https://api.lizi123.cn/index.php/home/club/deleteRecall',
        data: {
          "client_type": 0,
          "user_id": that.data.user_id,
          "recall_id": e.recall_id,
        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
        },
        fail: function (res) {
          // fail
        },
        complete: function (res) {
          wx.request({
            url: 'https://api.lizi123.cn/index.php/home/club/clubRecall',
            data: {
              "client_type": 0,
              "club_id": that.data.club_id,
            },
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
              // success
              that.setData({
                data_record: res.data
              })
              console.log(that.data.data_record)
            },
            fail: function () {
              // fail
            },
            complete: function () {
              // complete
            }
          })
        }
      })
    } else {
      that.setData({
        club_id: e.club_id,
        club_name: e.club_name
      });
    }
    /*获取系统信息*/
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    that.setData({
      club_id: e.club_id,
      club_name: e.club_name
    });
    wx.setNavigationBarTitle({
      title: that.data.club_name,
      success: function (res) {
        // success
      }
    })
    wx.request({
      url: 'https://api.lizi123.cn/index.php/home/Club/clubImpress',
      data: {
        'client_type': 0,
        "club_id": that.data.club_id,
      },
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function (res) {
        console.log(res)
        that.setData({ all: res.data });
        that.setData({
          club_activity: res.data.activity_image,
          club_people: res.data.member
        });
        wx.request({
          url: 'https://api.lizi123.cn/index.php/home/club/clubRecall',
          data: {
            "client_type": 0,
            "club_id": that.data.club_id,
          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
            // success
            that.setData({
              data_record: res.data
            })
            console.log(that.data.data_record)
          },
          fail: function () {
            // fail
          },
          complete: function () {
            // complete
          }
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

  /* 滑动切换tab */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /*点击tab切换*/
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

  toMine: function () {
    wx.switchTab({//返回有tabbar的页面
      url: '../mine/mine'
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
        console.log(res.data);
        that.setData({
          hotact: res.data
        })
      }
    })
  },
  toActivity: function (e) {
    console.log(e)
    var toActivityId = e.target.dataset.info.activity_id;
    var toActivityName = e.target.dataset.info.activity_name
    wx.redirectTo({
      url: '../club_manageactivity_concret/club_manageactivity_concret?id='+toActivityId+'&name='+toActivityName,
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

  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
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
    console.log(e.target.id);
    var delete_id = e.target.id;
    console.log(local);
    local = Array.prototype.slice.call(local);
    local.splice(delete_id, 1);
    console.log(local);
    // console.log(local);
    this.setData({
      data: local,
    })
  }
})