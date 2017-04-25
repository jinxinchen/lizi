Page({
    data: {
        // club_id:null,
        club_id: 1,
        // user_id:null,
        user_id: 2,
        data_record: {},     //社团记忆数据
        back: 'http://wxapp1.b0.upaiyun.com/yzl/img/back.png'
    },
    return: function () {
        console.log(0)
        wx.navigateBack({
            delta: 2, // 回退前 delta(默认为1) 页面
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
        // 页面初始化 options为页面跳转所带来的参数
        // this.setData({
        //   user_id: options.id
        // });
        var that = this
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
    

})