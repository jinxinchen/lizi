Page({
    data: {
        activity_id: 0,
        name: null,
        phone: null,
        address: null
    },
    onLoad: function (e) {
        var that = this
        that.setData({
            activity_id: e.activity_id,
        })
    },
    inputname: function (e) {
        var that = this
        that.setData({
            name: e.detail.value
        })
    },
    inputphone: function (e) {
        var that = this
        that.setData({
            phone: e.detail.value
        })
    },
    inputaddress: function (e) {
        var that = this
        that.setData({
            address: e.detail.value
        })
    },
    set: function () {
        var that = this;
        if(that.data.name != null && that.data.phone != null && that.data.address != null){
            wx.request({
                url: 'https://api.lizi123.cn/index.php/home/Activity/joinAct',
                data: {
                    'client_type': 0,
                    'name': that.data.name,
                    'phone': that.data.phone,
                    'address': that.data.address,
                    'activity_id': that.data.activity_id
                },
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                method: 'POST',
                success: function (res) {
                    console.log(res)
                    wx.showToast({
                        title: '报名成功',
                        icon: 'success',
                        duration: 1000
                    })
                    wx.navigateBack({
                        delta: 1, // 回退前 delta(默认为1) 页面
                        success: function (res) {
                        }
                    })
                }
            })
        }else{
            wx.showToast({
                title:'信息不全',
                icon:'loading',
                duration:500
            })
        }
    }

})