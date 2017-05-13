var app = getApp();
var src_mine = [];
var tempFilePaths;
Page({
    data: {
        view: false,
        flag: 0,
        image_z: 1,
        // club_id: null,
        club_id: 1,
        // user_id: null,
        user_id: 2,
        time: "2017-03-20",
        topic: null,
        intro: null,
        image_url: null,
        images_url: [],
        image: ['http://wxapp1.b0.upaiyun.com/yzl/img/add.png'],
        images: [],
        src: [],
        back: 'http://wxapp1.b0.upaiyun.com/yzl/img/back.png',
        xing: 'http://wxapp1.b0.upaiyun.com/yzl/img/star.png',
        leaf: 'http://wxapp1.b0.upaiyun.com/yzl/img/leaf.png'
    },
    return: function () {
        wx.navigateBack({
            delta: 1, // 回退前 delta(默认为1) 页面
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
    //选择社团头像
    choose_image: function () {
        var that = this;
        wx.chooseImage({
            count: 1, // 最多可以选择的图片张数，默认9
            sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
            sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
            success: function (res) {
                // success
                var tempFilePaths = res.tempFilePaths
                that.setData({
                    image: tempFilePaths
                });
                console.log("头像是：");
                console.log(that.data.image);
            }

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

    //更多图片
    choose_from: function () {

        // if(src_mine.length==0)
        // src_mine=src_mine.concat(this.src);

        var that = this;
        // this.src=this.src.concat(tempFilePaths)
        wx.chooseImage({
            count: 9, // 最多可以选择的图片张数，默认9
            sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
            sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
            success: function (res) {
                tempFilePaths = res.tempFilePaths;
                console.log(111)
                console.log(tempFilePaths);
                src_mine = src_mine.concat(tempFilePaths);
                that.setData({
                    image_z: tempFilePaths.length,
                    src: src_mine

                });
                var successup = 0;
                var failup = 0;
                var k = 0;
                var length = that.data.src.length;
                that.UpLoadDIY(successup, failup, k, length);
            }
        });

    },

    UpLoadDIY: function (successup, failup, i, length) {
        var that = this;
        wx.uploadFile({
            url: 'https://api.lizi123.cn/index.php/home/index/uploads',
            filePath: that.data.src[i],
            name: 'name',
            header: {
                'content-type': 'multipart/form-data'
            },
            success: function (res) {
                successup++;
                console.log("!!!!!!!")
                console.log(res);
                var obj = JSON.parse(res.data)
                that.setData({
                    images_url: that.data.images_url.concat(obj.url)
                });
                console.log(that.data.images_url)
            },
            fail: function () {
                failup++;
            },
            complete: function () {
                i++;
                if (i == length) {
                    console.log("总共" + successup + "上传成功," + failup + "张上传失败");
                    that.setData({
                        flag: 1
                    })
                } else {
                    that.UpLoadDIY(successup, failup, i, length);
                }
            }
        })
    },

    bindTimeChange: function (e) {
        this.setData({
            time: e.detail.value
        })
    },
    previewImage: function (e) {
        wx.previewImage({
            current: e.currentTarget.id, // 当前显示图片的http链接
            urls: this.data.images // 需要预览的图片http链接列表
        })
    },
    /**
     * 按钮事件
     */
    publicRecall: function (e) {
        console.log(e)
        var that = this;
        var t = e.detail.value.topic;
        var i = e.detail.value.intro
        that.setData({
            topic: t,
            intro: i
        })
        console.log(that.data.image[0])
        console.log(that.data.topic)
        if (that.data.image[0] == 'http://wxapp1.b0.upaiyun.com/yzl/img/add.png') {
            wx.showToast({
                icon: "wrong",
                title: "记忆封面不能为空哦...",
                duration: 1000
            })
        } else if (that.data.topic == "") {
            wx.showToast({
                icon: "loading",
                title: "记忆标题不能为空哦...",
                duration: 1000
            })

        } else if (that.data.intro == "") {
            wx.showToast({
                icon: "wrong",
                title: "记忆介绍不能为空哦...",
                duration: 1000
            })
        } else if (that.data.src.length == 0) {
            wx.showToast({
                icon: "wrong",
                title: "记忆照片不能为空哦...",
                duration: 2000
            })
        } else if (that.data.flag == 0) {
            wx.showToast({
                icon: "loading",
                title: "图片正在上传...",
                duration: 2000
            })
        } else {
            wx.showToast({
                title: "发布中...",
                icon: "loading",
                duration: 5000
            })
            that.data.src.pop();
            console.log(that.data.src);
            wx.uploadFile({
                url: 'https://api.lizi123.cn/index.php/home/index/uploads',
                filePath: that.data.image[0],
                name: 'name',
                header: {
                    'content-type': 'multipart/form-data'
                },
                success: function (res) {
                    console.log(res)
                    var obj = JSON.parse(res.data)
                    console.log(obj)
                    that.setData({
                        image_url: obj.url
                    })
                    that.publicRecall_request()
                },
                fail: function (e) {
                    console.log(e)
                },
                complete: function () {

                }
            })

        }



    },


    /**
     * request的封装，直接调用减少代码量
     */
    publicRecall_request: function () {
        var that = this;
        wx.request({
            url: 'https://api.lizi123.cn/index.php/home/club/publishClubRecall',
            data: {
                "client_type": 0,
                "club_id": that.data.club_id,
                "user_id": that.data.user_id,
                "topic": that.data.topic,
                "intro": that.data.intro,
                "time": that.data.time,
                "image": that.data.image_url,
                "images": that.data.images_url
            },
            method: 'POST',
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
                console.log(res)
                wx.redirectTo({
                    url: '../recall_show/recall_show?id=that.data.club_id',
                    success: function (res) {
                        wx.showToast({
                            title: "发布记忆成功",
                            duration: 3000
                        })
                        that.setData({
                            images:[]
                        })
                        console.log(that.data)
                    },
                    fail: function () {

                    },
                    complete: function () {

                    }
                })
            },
            fail: function (e) {
                console.log("fail")
            },
            complete: function () {
                // complete
            }
        })
    }
})