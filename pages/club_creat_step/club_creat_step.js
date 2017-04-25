var tag_frist;
var tag_second;
var img_url;
var club_name;
Page({
    data: {
        bol: true,
        img: "http://wxapp1.b0.upaiyun.com/yzl/img/add.png",
        choose_two: "请选择",
        choose_fir: "请选择",
        bol1: false,
        bol2: true,
        bol3: true,
        bol4: true,
        bol5: true,
        bol6: true,
        bol7: false,
        bol8: true,
        bol9: true,
        view: false,
        back: 'http://wxapp1.b0.upaiyun.com/yzl/img/back.png',
        add: 'http://wxapp1.b0.upaiyun.com/ljq/img//club/club_create_step2/add.png',
        column: 'http://wxapp1.b0.upaiyun.com/yzl/img/column.png',
        choice: 'http://wxapp1.b0.upaiyun.com/yzl/img/choice.png',
        xueshu: "学术科技",
        zhiyuan: "志愿服务",
        shehui: "社会实践",
        xuesheng: "学生组织",
        wenhua: "文化艺术",
        tiyu: "体育娱乐",
        xiaoji: "校级组织",
        yuanji: "院级组织",
        xingqu: "兴趣社团",


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

    uploadImage: function () {
        var that = this;
        var bol = this.data.bol;
        this.setData({
            bol: false
        });
        wx.chooseImage({
            count: 1, // 最多可以选择的图片张数，默认9
            sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
            sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
            success: function (res) {
                // success
                var tempFilePaths = res.tempFilePaths
                that.setData({
                    img: tempFilePaths[0]
                });
                // console.log(tempFilePaths);
                img_url = tempFilePaths;
            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            }
        });
        // wx.uploadFile({
        //     url: 'https://api.lizi123.cn/index.php/home/index/uploads',
        //     filePath: tempFilePaths[0],
        //     name: 'name',
        //     header: {
        //         'content-type': 'multipart/form-data'
        //     }, // 设置请求的 header
        //     // formData: {}, // HTTP 请求中其他额外的 form data
        //     success: function (res) {
        //         console.log(0);
        //         // success
        //     },
        //     fail: function () {
        //         // fail
        //     },
        //     complete: function () {
        //         // complete
        //     }
        // })
    },


    cancel: function () {

        this.setData({
            view: false
        })
    },
    confirm: function (e) {

        // console.log(this.data.bol4);
        if (!this.data.bol1) {
            tag_second = this.data.xueshu;
            this.setData({
                choose_two: this.data.xueshu
            })
        } else if (!this.data.bol2) {
            tag_second = this.data.zhiyuan;
            this.setData({
                choose_two: this.data.zhiyuan
            })
        } else if (!this.data.bol3) {
            tag_second = this.data.shehui;
            this.setData({
                choose_two: this.data.shehui
            })
        } else if (!this.data.bol4) {
            tag_second = this.data.xuesheng;
            this.setData({
                choose_two: this.data.xuesheng
            })
        } else if (!this.data.bol5) {
            tag_second = this.data.wenhua;
            this.setData({
                choose_two: this.data.wenhua
            })
        } else {
            tag_second = this.data.tiyu;
            this.setData({
                choose_two: this.data.tiyu
            })
        }


        if (!this.data.bol7) {
            tag_frist = this.data.xiaoji;
            this.setData({
                choose_fir: this.data.xiaoji
            })
        } else if (!this.data.bol8) {
            tag_frist = this.data.yuanji;
            this.setData({
                choose_fir: this.data.yuanji
            })
        } else {
            tag_frist = this.data.xingqu;
            this.setData({
                choose_fir: this.data.xingqu
            })
        }
















        this.setData({
            view: false
        })
    },
    choose: function () {
        this.setData({
            view: true
        })
    },
    next_step: function () {
        console.log("我点了！！！！！！！！！");
        // wx.navigateTo({
        //   url: '../club_creat__step3/club_creat__step3'
        // }),
        wx.navigateTo({
            url: '../mine/mine',
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
    show1: function () {
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
    show2: function () {
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
    show3: function () {
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
    show4: function () {
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
    show5: function () {
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
    show6: function () {
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
    show7: function () {
        var bol7 = this.data.bol1;
        var bol8 = this.data.bol2;
        var bol9 = this.data.bol3;
        this.setData({
            bol7: false,
            bol8: true,
            bol9: true,
        })
    },
    show8: function () {
        var bol7 = this.data.bol1;
        var bol8 = this.data.bol2;
        var bol9 = this.data.bol3;
        this.setData({
            bol7: true,
            bol8: false,
            bol9: true,
        })
    },
    show9: function () {
        var bol7 = this.data.bol1;
        var bol8 = this.data.bol2;
        var bol9 = this.data.bol3;
        this.setData({
            bol7: true,
            bol8: true,
            bol9: false,
        })
    },
    complete: function (e) {
        club_name = e.detail.value.club_name;
        // console.log(img_url);
        // console.log(club_name);
        // console.log(tag_frist);
        // console.log(tag_second);
        wx.uploadFile({
            url: 'https://api.lizi123.cn/index.php/home/Index/uploads',
            filePath: img_url[0],
            name: 'name',
            // header: {}, // 设置请求的 header
            // formData: {}, // HTTP 请求中其他额外的 form data
            success: function (res) {
                var obj = JSON.parse(res.data);
                var url_address = obj.url;
                wx.request({
                    url: 'https://api.lizi123.cn/index.php/home/Club/wxpublishClub',
                    data: {
                         'client_type':0,
                         'club_name':club_name,
                         'image':url_address
                    },
                    method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                    header: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    success: function (res) {
                        console.log(res);
                        // success
                    },
                    fail: function () {
                        // fail
                    },
                    complete: function () {
                        // complete
                    }
                })


                // success
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