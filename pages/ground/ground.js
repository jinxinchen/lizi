Page({
    data: {
        userInfo:[],
        head: 'http://wxapp1.b0.upaiyun.com/yzl/img/head.png'
    },

    userinfo: function(){
        var that = this;
        wx.request({
          url: 'https://api.lizi123.cn/index.php/home/user/userFansList',
          data: {
              "client_type":1,
              "user_id":2
          }, 
          method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: {
              'content-type':'application/x-www-form-urlencoded'
          }, // 设置请求的 header
          success: function(res){
            // success
            console.log(res)
            that.setData({
              userInfo: res.data
            })
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
        wx.login({
            success: function (res) {
                // success
                wx.getUserInfo({
                    success: function (res) {
                        // success
                        var nickName = res.nickName;
                        this.avatarUrl = res.avatarUrl;
                        console.log(res)
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
        });

    }
})