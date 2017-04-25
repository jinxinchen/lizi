var tempFilePaths;
var src_mine = [];
Page({
    data: {
        view: false,
        src: [
            "http://wxapp1.b0.upaiyun.com/yzl/img/addimg.png"
        ],
        image_z: 1,
        back:'http://wxapp1.b0.upaiyun.com/yzl/img/back.png'
    },
    cancel: function () {
        // console.log("asd");
        this.setData({
            view: false
        })
    },
    // onShow: function () {
    //     // console.log("again");
    //     this.setData({
    //         view: true
    //     })
    // },
    show: function () {
        this.setData({
            view: true
        })
    },
    return:function(){
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
    choose_from: function () {

        // if(src_mine.length==0)
        // src_mine=src_mine.concat(this.src);

        var that = this;
        // this.src=this.src.concat(tempFilePaths)
        wx.chooseImage({
            count: 9, // 最多可以选择的图片张数，默认9
            sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
            sourceType: ['album'], // album 从相册选图，camera 使用相机，默认二者都有
            success: function (res) {
                 if(src_mine.length!=0){
                    src_mine.pop();
                }
                tempFilePaths = res.tempFilePaths;
                // console.log("res" + res);
                console.log(tempFilePaths);
                // console.log(tempFilePaths.length); //返回图片路径个数
                src_mine = src_mine.concat(tempFilePaths);
                src_mine=src_mine.concat(["http://wxapp1.b0.upaiyun.com/yzl/img/addimg.png"]);

                // for (var i = 0; i < tempFilePaths.length; i++) {

                // }
                that.setData({
                    image_z: tempFilePaths.length,
                    // src: tempFilePaths[0],
                    src: src_mine

                });
                // for (var i = 0; i < tempFilePaths.length; i++) {
                //     console.log(i);
                //     wx.uploadFile({
                //         url: 'https://api.lizi123.cn/index.php/home/index/uploads',
                //         filePath: tempFilePaths[i],
                //         name: 'Uploads',
                //         header: {
                //             'content-type': 'multipart/form-data'
                //         }, // 设置请求的 header
                //         formData: {
                //             'user': 'test'
                //         },
                //         // formData: {}, // HTTP 请求中其他额外的 form data
                //         success: function (res) {
                //             console.log("asd");
                //             var data = res.data;
                //             var numbers = res.statusCode;
                //             console.log(data);
                //             console.log(numbers);
                //             console.log(res.url);
                //             // success
                //         },
                //         fail: function () {
                //             // fail
                //         },
                //         complete: function () {
                //             // complete
                //         }
                //     })
                // }

            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            },

        });
        // console.log("zz");

    },
    camera: function () {
        var that = this;
        wx.chooseImage({
            count: 9, // 最多可以选择的图片张数，默认9
            sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
            sourceType: ['camera'], // album 从相册选图，camera 使用相机，默认二者都有
            success: function (res) {
                 if(src_mine.length!=0){
                    src_mine.pop();
                }
                tempFilePaths = res.tempFilePaths;
                console.log("res" + res);
                console.log(tempFilePaths);
                console.log(tempFilePaths.length); //返回图片路径个数
                src_mine = src_mine.concat(tempFilePaths);
                 src_mine=src_mine.concat(["http://wxapp1.b0.upaiyun.com/yzl/img/addimg.png"]);
                // for (var i = 0; i < tempFilePaths.length; i++) {

                // }
                that.setData({
                    image_z: tempFilePaths.length,
                    // src: tempFilePaths[0],
                    src: src_mine
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
