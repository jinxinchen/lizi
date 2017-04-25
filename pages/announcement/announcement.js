Page({
    data: {
        info: {},
        id: 0,
        news: ""
    },

    onLoad: function (params) {
        console.log("加载社团资料");
        console.log(params);
        var that = this;
        that.setData({
            id: params.id
        })
    },

    inputnews: function (e) {
        this.setData({
            news: e.detail.value
        })
    },

    set: function () {
        console.log("保存");
        var that = this;
        wx.request({
            url: 'https://api.lizi123.cn/index.php/home/club/clubAnnouncement',
            data: {
                'client_type': 0,
                'club_id': that.data.id,
                'content': that.data.news
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            success: function (res) {
                console.log(res)
                console.log(保存成功)
            }
        }),
            wx.navigateBack({
                delta: 1, // 回退前 delta(默认为1) 页面
                success: function (res) {
                    // success
                }
            })
    }
})