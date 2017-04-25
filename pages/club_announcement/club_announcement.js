var tempFilePaths;
var src_mine = [];
Page({
    data: {
        announce:"",
        view: false,
        src: [
            "http://wxapp1.b0.upaiyun.com/yzl/img/addimg.png"
        ],
        image_z: 1,
        back: 'http://wxapp1.b0.upaiyun.com/yzl/img/back.png',
        id:0
    },
    onLoad: function (params) {
        console.log("加载");
        console.log(params);
        var that = this;
        that.setData({
            id: params.id
        })
    },

    inputannounce: function (e) {
        this.setData({
            announce: e.detail.value
        })
    },

    cancel: function () {
        // console.log("asd");
        this.setData({
            view: false
        })
    },

    show: function () {
        this.setData({
            view: true
        })
    },
    return: function () {
        wx.navigateBack({
            delta: 1, // 回退前 delta(默认为1) 页面
        })
    },
    // choose_from: function () {
    //     var that = this;
    //     wx.chooseImage({
    //         count: 9, // 最多可以选择的图片张数，默认9
    //         sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
    //         sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
    //         success: function (res) {
    //             if (src_mine.length != 0) {
    //                 src_mine.pop();
    //             }
    //             tempFilePaths = res.tempFilePaths;
    //             // console.log("res" + res);
    //             console.log(tempFilePaths);
    //             // console.log(tempFilePaths.length); //返回图片路径个数
    //             src_mine = src_mine.concat(tempFilePaths);
    //             src_mine = src_mine.concat(["http://wxapp1.b0.upaiyun.com/yzl/img/addimg.png"]);
    //             that.setData({
    //                 image_z: tempFilePaths.length,
    //                 // src: tempFilePaths[0],
    //                 src: src_mine

    //             });
    //         }
    //     });
    // },

     set: function () {
        console.log("保存");
        var that = this;
        wx.request({
            url: 'https://api.lizi123.cn/index.php/home/club/clubAnnouncement',
            data: {
                'client_type': 0,
                'club_id': that.data.club_id,
                'content': that.data.announce
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
