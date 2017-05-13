Page({
    data: {
        activity_id: 0,
        intro: "",
        address: "",
        type_id: 0,
        time: "",
        name: ""

    },
    onLoad: function (e) {
        var that = this
        that.setData({
            activity_id: e.act_id
        })
        wx.request({
            url: 'https://api.lizi123.cn/index.php/home/activity/actDetail',
            data: {
                client_type: 0,
                activity_id:that.data.activity_id
            },
            method: 'POST',
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
                that.setData({
                    time: res.data.act_starting,
                    type_id: res.data.type_id,
                    tag_name: res.data.tag_name,
                    address: res.data.address,
                    intro: res.data.intro,
                    name: res.data.name
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
    inputname:function(e){
         var that = this
        that.setData({
            name: e.detail.value
        })
    },
    inputtime: function (e) {
       
        var that = this
        that.setData({
            time: e.detail.value
        })
    },
    inputtype_id: function (e) {
        var that = this
        that.setData({
            type_id: e.detail.value
        })
    },
    inputtag_name: function (e) {
        var that = this
        that.setData({
            tag_name: e.detail.value
        })
    },
    inputaddress: function (e) {
        var that = this
        that.setData({
            address: e.detail.value
        })
    },
    inputintro: function (e) {
        var that = this
        that.setData({
            intro: e.detail.value
        })
    },
    set: function () {
        var that = this;
        if (that.data.name != null && that.data.address != null && that.data.intro != null && that.data.type_id != null && that.data.time != null) {
            wx.request({
                url: 'https://api.lizi123.cn/index.php/home/Activity/editActivity',
                data: {
                    'client_type': 0,
                    'activity_id': that.data.activity_id,
                    'name': that.data.name,
                    'time': that.data.time,
                    'address': that.data.address,
                    'type_id': that.data.type_id,
                    'tag_name':that.data.tag_name,
                    'intro':that.data.intro,
                    'user_id':1
                },
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                method: 'POST',
                success: function (res) {
                    console.log("$$$$$$$$")
                    console.log(that.data.name)
                    console.log(res)
                    wx.showToast({
                        title: '修改成功',
                        icon: 'success',
                        duration: 2000
                    })
                    wx.navigateBack({
                        delta: 1, // 回退前 delta(默认为1) 页面
                        success: function (res) {
                        }
                    })
                }
            })
        } else {
            wx.showToast({
                title: '信息不全',
                icon: 'loading',
                duration: 2000
            })
        }
    }
})