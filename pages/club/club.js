var local = [];
var length_all;
var app = getApp()
Page({
  data: {
    back: "http://wxapp1.b0.upaiyun.com/yzl/img/back.png",
    img: "http://wxapp1.b0.upaiyun.com/ljq/img/demo.jpg",
    time: "2016年7月8日",
    xueyuan: "厦门华侨大学计算机科学与技术学院",
    menpiao: "门票",
    title: "科技创新大赛",
    data: [],
    all: {},
    // tab切换  
    currentTab: 0,
    bol1: false,
    bol2: true,
    bol3: true,
    bol4: true,
    bol5: true,
    bol6: true,
    message: 'http://wxapp1.b0.upaiyun.com/yzl/img/message.png',
    search: 'http://wxapp1.b0.upaiyun.com/yzl/img/search.png',
    column: 'http://wxapp1.b0.upaiyun.com/yzl/img/column.png',
    pen: 'http://wxapp1.b0.upaiyun.com/yzl/img/pen.png',
    choice: 'http://wxapp1.b0.upaiyun.com/yzl/img/choice.png',
    head: 'http://wxapp1.b0.upaiyun.com/yzl/img/head.png',
    people: 'http://wxapp1.b0.upaiyun.com/yzl/img/people.png',
    more: 'http://wxapp1.b0.upaiyun.com/yzl/img/more.png',
    hotclub: "http://wxapp1.b0.upaiyun.com/yzl/img/hotclub.png"
  },
  onShow: function () {
    var that = this;
    that.setData({
      bol1: true,
      bol2: true,
      bol3: true,
      bol4: true,
      bol5: true,
      bol6: true,
    })
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
    that.setData({
      bol1: true,
      bol2: true,
      bol3: true,
      bol4: true,
      bol5: true,
      bol6: true,
    })
    wx.request({
      url: 'https://api.lizi123.cn/index.php/home/Club/hotClub',
      data: {
        'client_type': 0,
      },
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function (res) {
        // success
        that.setData({ all: res.data });


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
  show1: function () {
    var that=this
    that.setData({
      bol1: false,
      bol2: true,
      bol3: true,
      bol4: true,
      bol5: true,
      bol6: true,
    })
    wx.request({
      url: 'https://api.lizi123.cn/index.php/home/club/clubSelectRes',
      data: {
        client_type: 1,
        type_id:3
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data)
        that.setData({
          all:res.data
        })
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },
  show2: function () {
    var that=this
    that.setData({
      bol1: true,
      bol2: false,
      bol3: true,
      bol4: true,
      bol5: true,
      bol6: true,
    })
    wx.request({
      url: 'https://api.lizi123.cn/index.php/home/club/clubSelectRes',
      data: {
        client_type: 1,
        type_id:4
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data)
        that.setData({
          all:res.data
        })
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },
  show3: function () {
    var that=this
    that.setData({
      bol1: true,
      bol2: true,
      bol3: false,
      bol4: true,
      bol5: true,
      bol6: true,
    })
    wx.request({
      url: 'https://api.lizi123.cn/index.php/home/club/clubSelectRes',
      data: {
        client_type: 1,
        type_id:1
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data)
        that.setData({
          all:res.data
        })
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },
  show4: function () {
    var that=this
    that.setData({
      bol1: true,
      bol2: true,
      bol3: true,
      bol4: false,
      bol5: true,
      bol6: true,
    })
    wx.request({
      url: 'https://api.lizi123.cn/index.php/home/club/clubSelectRes',
      data: {
        client_type: 1,
        type_id:2
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data)
        that.setData({
          all:res.data
        })
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },
  show5: function () {
    var that=this
    that.setData({
      bol1: true,
      bol2: true,
      bol3: true,
      bol4: true,
      bol5: false,
      bol6: true,
    })
    wx.request({
      url: 'https://api.lizi123.cn/index.php/home/club/clubSelectRes',
      data: {
        client_type: 1,
        type_id:5
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data)
        that.setData({
          all:res.data
        })
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },
  show6: function () {
    var that=this
    that.setData({
      bol1: true,
      bol2: true,
      bol3: true,
      bol4: true,
      bol5: true,
      bol6: false,
    })
    wx.request({
      url: 'https://api.lizi123.cn/index.php/home/club/clubSelectRes',
      data: {
        client_type: 1,
        type_id:6
      },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data)
        that.setData({
          all:res.data
        })
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },

})