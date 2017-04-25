Page({
    data:{
        winWidth: 0,
        winHeight: 0,
        // tab切换  
        currentTab: 0,
        num:198,
        pictureSrc:'',
        PeopleName:'',
        PeopleIntro:'',
        HeadSrc:'',
        time:'',
        //all指的是我的管理
        all:{},
        joinClub:{},
        choice: 'http://wxapp1.b0.upaiyun.com/yzl/img/choice.png',
        head: 'http://wxapp1.b0.upaiyun.com/yzl/img/head.png',
        people: 'http://wxapp1.b0.upaiyun.com/yzl/img/people.png',
        more: 'http://wxapp1.b0.upaiyun.com/yzl/img/more.png',
        back:'http://wxapp1.b0.upaiyun.com/yzl/img/back.png'
    },
     return:function(){
      console.log(0)
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
onLoad: function () {
    var that = this;

    /*获取系统信息*/
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
var that = this;
    wx.request({
      url: 'https://api.lizi123.cn/index.php/home/Club/manageClubList',
      data: {
        'client_type': 0,
        'user_id': 1
      },
      header: {'content-type': 'application/x-www-form-urlencoded'},
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function (res) {
        console.log(res);
        that.setData({all:res.data})

      }
    });
    wx.request({
      url:
      'https://api.lizi123.cn/index.php/home/Club/joinClubList',
      data: {
        'client_type': 0,
        'user_id': 1
      },
      header: {'content-type': 'application/x-www-form-urlencoded'},
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function (res) {
        console.log(222)
        console.log(res);
        that.setData({joinClub:res.data})

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
})