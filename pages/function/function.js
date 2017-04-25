Page({
  data: {
    // tab切换  
    currentTab: 0,
    bol1: false,
    bol2: true,
    bol3: true,
    bol4: true,
    bol5: true,
    bol6: true,
    message:'http://wxapp1.b0.upaiyun.com/yzl/img/message.png',
    search:'http://wxapp1.b0.upaiyun.com/yzl/img/search.png',
    column: 'http://wxapp1.b0.upaiyun.com/yzl/img/column.png',
    pen: 'http://wxapp1.b0.upaiyun.com/yzl/img/pen.png',
    choice: 'http://wxapp1.b0.upaiyun.com/yzl/img/choice.png',
    head: 'http://wxapp1.b0.upaiyun.com/yzl/img/head.png',
    people: 'http://wxapp1.b0.upaiyun.com/yzl/img/people.png',
    more: 'http://wxapp1.b0.upaiyun.com/yzl/img/more.png'
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
      url: 'https://api.lizi123.cn/index.php/home/Club/clubShowList',
      data: {
        'client_type': 0,
        'club_id': 1
      },
      header: {'content-type': 'application/x-www-form-urlencoded'},
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function (res) {
        // success
        
        console.log(res.data[0]);
        that.setData({num:res.data[0].club_id});
        that.setData({
          pictureSrc:res.data[0].images[0],
          PeopleName:res.data[0].user_info.user_name,
          PeopleIntro:res.data[0].user_info.intro,
          HeadSrc:res.data[0].user_info.head_image,
          time:res.data[0].time
          });

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
    show1:function(){
        var bol1 = this.data.bol1;
        var bol2 = this.data.bol2;
        var bol3 = this.data.bol3;
        var bol4 = this.data.bol4;
        var bol5 = this.data.bol5;
        var bol6 = this.data.bol6;
        this.setData({
            bol1: false,
            bol2: true,
            bol3: true,
            bol4: true,
            bol5: true,
            bol6: true,
        })
    },
    show2:function(){
        var bol1 = this.data.bol1;
        var bol2 = this.data.bol2;
        var bol3 = this.data.bol3;
        var bol4 = this.data.bol4;
        var bol5 = this.data.bol5;
        var bol6 = this.data.bol6;
        this.setData({
            bol1: true,
            bol2: false,
            bol3: true,
            bol4: true,
            bol5: true,
            bol6: true,
        })
    },
    show3:function(){
        var bol1 = this.data.bol1;
        var bol2 = this.data.bol2;
        var bol3 = this.data.bol3;
        var bol4 = this.data.bol4;
        var bol5 = this.data.bol5;
        var bol6 = this.data.bol6;
        this.setData({
            bol1: true,
            bol2: true,
            bol3: false,
            bol4: true,
            bol5: true,
            bol6: true,
        })
    },
    show4:function(){
        var bol1 = this.data.bol1;
        var bol2 = this.data.bol2;
        var bol3 = this.data.bol3;
        var bol4 = this.data.bol4;
        var bol5 = this.data.bol5;
        var bol6 = this.data.bol6;
        this.setData({
            bol1: true,
            bol2: true,
            bol3: true,
            bol4: false,
            bol5: true,
            bol6: true,
        })
    },
    show5:function(){
        var bol1 = this.data.bol1;
        var bol2 = this.data.bol2;
        var bol3 = this.data.bol3;
        var bol4 = this.data.bol4;
        var bol5 = this.data.bol5;
        var bol6 = this.data.bol6;
        this.setData({
            bol1: true,
            bol2: true,
            bol3: true,
            bol4: true,
            bol5: false,
            bol6: true,
        })
    },
    show6:function(){
        var bol1 = this.data.bol1;
        var bol2 = this.data.bol2;
        var bol3 = this.data.bol3;
        var bol4 = this.data.bol4;
        var bol5 = this.data.bol5;
        var bol6 = this.data.bol6;
        this.setData({
            bol1: true,
            bol2: true,
            bol3: true,
            bol4: true,
            bol5: true,
            bol6: false,
        })
    },
    
})