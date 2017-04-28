var app = getApp()
Page({
    data: {
        club_name: "",
        club_id: 0,
        info:{}
    },
    onLoad: function (e) {
        var that = this;
        console.log(e)
        that.setData({
            club_name: e.name,
            club_id: e.id
        })
        wx.request({
            url: 'https://api.lizi123.cn/index.php/home/Club/getClubAct',
            data: {
                'client_type': 0,
                'club_id': that.data.club_id
            },
            method: 'POST',
            header: { 'content-type': 'application/x-www-form-urlencoded' },
            success: function (res) {
                that.setData({
                    info:res.data
                })
                console.log(that.data.info)
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