
var local = [];
var length_all;
var app = getApp()

Page({
  data: {
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
    act_id:"",
    //all指的是我的管理
    all: {},
    joinClub: {},
    choice: 'http://wxapp1.b0.upaiyun.com/yzl/img/choice.png',
    head: 'http://wxapp1.b0.upaiyun.com/yzl/img/head.png',
    people: 'http://wxapp1.b0.upaiyun.com/yzl/img/people.png',
    more: 'http://wxapp1.b0.upaiyun.com/yzl/img/more.png',
    back: 'http://wxapp1.b0.upaiyun.com/yzl/img/back.png'
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

  deletes: function (e) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '是否确认删除？',
      success: function (res) {
        if (res.confirm) {
          
          // console.log(e.target.id);
          var delete_id = e.target.id;
          // console.log(local);
          local = Array.prototype.slice.call(local);


          // console.log(local[delete_id]);
          var activity_id = local[delete_id]['id'];
          console.log(activity_id);
          local.splice(delete_id, 1)

          // console.log(local);
          // console.log(local);
          that.setData({
            hotact: local,
          });

          wx.request({
            url: 'https://api.lizi123.cn/index.php/home/activity/wxDeleteActivity',
            data: {
              'activity_id': activity_id,
              'client_type': 0

            },
            method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
              console.log(res);
              // success
            },
            fail: function () {
              // fail
            },
            complete: function () {
              // complete
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })



  },
  onLoad: function () {
    var that = this;
    /*我管理的*/ 
    wx.request({
      url: 'https://api.lizi123.cn/index.php/home/activity/manageActList',
      data: {
        'client_type': 0,
        'user_id':1
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log("!!!!!!!!!!!!!")
        console.log(res.data);
        local = res.data;
        that.setData({
          manage_act: res.data
        })
      }
    });
    

    wx.request({
      url: 'https://api.lizi123.cn/index.php/home/activity/joinActList',
      data: {
        'client_type': 0,
        'user_id':1
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log("222!!!")
        console.log(res.data);
        local = res.data;
        that.setData({
          join_act: res.data
        })
      }
    })

    /*获取系统信息*/
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    })
    var that = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000
    })
  },
  detail: function () {

  },
  /* 滑动切换tab */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },

  To_edit: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../activity_edit/activity_edit?act_id='+e.target.dataset.id ,
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
  edit:function(e){
    console.log(e)
  }
})