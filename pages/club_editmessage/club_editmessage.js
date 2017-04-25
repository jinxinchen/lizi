Page({
    data: {
        info: {},
        name: "",
        intro: "",
        logo: "",
        image: "",
        school_id: 0,
        id: 0
    },

    onLoad: function (params) {
        console.log("加载社团资料");
        console.log(params);
        var that = this;
        that.setData({
            name: params.name,
            intro: params.intro,
            image: params.image,
            id: params.id,
            image: params.image,
            school_id: params.school_id
        })
    },

    inputname: function (e) {
        this.setData({
            name: e.detail.value
        })
    },
    inputintro: function (e) {
        this.setData({
            intro: e.detail.value
        })
    },
    inputschool: function (e) {
        this.setData({
            school_id: e.detail.value
        })
    },
    inputtag: function (e) {
        this.setData({
            tag: e.detail.value
        })
    },

    change_image: function () {
        console.log("更改头像");
        var that = this;
        wx.chooseImage({
            success: function (res) {
                var tempFilePaths = res.tempFilePaths
                wx.uploadFile({
                    url: 'https://api.lizi123.cn/index.php/home/index/uploads',
                    filePath: tempFilePaths[0],
                    name: 'file',
                    formData: {
                        'user': 'test'
                    },
                    success: function (res) {
                        console.log(res)
                        var data = res.data
                        console.log("上传成功")
                        var obj=JSON.parse(res.data)
                        that.setData({
                            image:that.data.image.concat(obj.url)
                        })
                    }
                })
            }
        })
    },

    Set: function () {
        console.log("保存");
        var that = this;
        wx.request({
            url: 'https://api.lizi123.cn/index.php/home/club/editClubInfo',
            data: {
                'client_type': 0,
                'club_id': that.data.id,
                'club_name': that.data.name,
                'club_intro': that.data.intro,
                'school_id': that.data.school_id
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            success: function (res) {
                console.log(res)
                that.setData({
                    clubinfo: res.data
                })
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

  /*  change_intro: function () {
        console.log("编辑社团简介");
        var that = this;
        wx.request({
            url: 'https://api.lizi123.cn/index.php/home/club/editClubInfo',
            data: {
                'client_type': 1,
                'club_id': cid,
                'club_name': cname,
                'club_intro': cintro,
                'club_sign': csign,
                'club_logo': clogo,
                'club_image': cimage
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            success: function (res) {
                console.log(res)
                that.setData({
                    clubinfo: res.data
                })
            }
        })
    },

    change_sign: function () {
        console.log("编辑社团简介");
        var that = this;
        wx.request({
            url: 'https://api.lizi123.cn/index.php/home/club/editClubInfo',
            data: {
                'client_type': 1,
                'club_id': cid,
                'club_name': cname,
                'club_intro': cintro,
                'club_sign': csign,
                'club_logo': clogo,
                'club_image': cimage
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            success: function (res) {
                console.log(res)
                that.setData({
                    clubinfo: res.data
                })
            }
        })
    },

    change_logo: function () {
        console.log("编辑社团头像");
        var that = this;
        wx.request({
            url: 'https://api.lizi123.cn/index.php/home/club/editClubInfo',
            data: {
                'client_type': 1,
                'club_id': cid,
                'club_name': cname,
                'club_intro': cintro,
                'club_sign': csign,
                'club_logo': clogo,
                'club_image': cimage
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            success: function (res) {
                console.log(res)
                that.setData({
                    clubinfo: res.data
                })
            }
        })
    },

    change_image: function () {
        console.log("编辑社团封面");
        var that = this;
        wx.request({
            url: 'https://api.lizi123.cn/index.php/home/club/editClubInfo',
            data: {
                'client_type': 1,
                'club_id': cid,
                'club_name': cname,
                'club_intro': cintro,
                'club_sign': csign,
                'club_logo': clogo,
                'club_image': cimage
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            success: function (res) {
                console.log(res)
                that.setData({
                    clubinfo: res.data
                })
            }
        })
    },
*/
