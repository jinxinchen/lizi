var app = getApp();
var src_mine = [];
var tempFilePaths;
var radio_button = "";//单选按钮值
var title;//标题
var desc;//描述
var url_address;
Page({
  data: {
    view: false,
    flag: 0,
    image_z: 0,
    button_start: "请选择分类",
    // club_id: null,
    club_id: 1,
    // user_id: null,
    disable:false,
    user_id: 2,
    time: "2017-03-20",
    saysome:"说点什么吧..",
    topic: null,
    intro: null,
    view1: false,
    image_url: null,
    images_url: [],
    image: ['http://wxapp1.b0.upaiyun.com/yzl/img/add.png'],
    images: [],
    src: [
      "http://wxapp1.b0.upaiyun.com/yzl/img/addimg.png"
    ],
    back: 'http://wxapp1.b0.upaiyun.com/yzl/img/back.png',
    xing: 'http://wxapp1.b0.upaiyun.com/yzl/img/star.png',
    leaf: 'http://wxapp1.b0.upaiyun.com/yzl/img/leaf.png'
  },
  return: function () {
    console.log(0)
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
  radioChange: function (e) {
    //  console.log(e);
    radio_button = e.detail.value;
    this.setData({
      button_start: e.detail.value
    })
  },
  quxiao: function () {
    this.setData({
      view1: false,
      disable:false,
      saysome:"说点什么吧.."
    })
  },
  choose_image: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        tempFilePaths = res.tempFilePaths
        that.setData({
          image: tempFilePaths
        });
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
  choose_splite: function () {
    this.setData({
      view1: true,
      disable:true,
      saysome:""
    })
  },
  choose_from: function () {

    // if(src_mine.length==0)
    // src_mine=src_mine.concat(this.src);

    var that = this;
    // this.src=this.src.concat(tempFilePaths)
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        if (src_mine.length != 0) {
          src_mine.pop();
        }
        tempFilePaths = res.tempFilePaths;
        // console.log("res" + res);
        console.log(111)
        console.log(tempFilePaths);
        // console.log(tempFilePaths.length); //返回图片路径个数
        src_mine = src_mine.concat(tempFilePaths);
        // src_mine = src_mine.concat(["http://wxapp1.b0.upaiyun.com/yzl/img/addimg.png"]);

        // for (var i = 0; i < tempFilePaths.length; i++) {

        // }
        that.setData({
          image_z: tempFilePaths.length,
          // src: tempFilePaths[0],
          src: src_mine

        });
        var successup = 0;
        var failup = 0;
        var k = 0;
        var length = that.data.src.length;
        // that.UpLoadDIY(successup, failup, k, length);
      }
    });
    // console.log("zz");

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
        // console.log(obj.url)

        // that.data.image_url = that.data.image_url.concat(obj.url);
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
    var that = this;

    if (that.data.image[0] == 'http://wxapp1.b0.upaiyun.com/yzl/img/add.png') {
      wx.showToast({
        icon: "wrong",
        title: "活动封面不能为空哦...",
        duration: 1000
      })
    } else if (e.detail.value.title == "") {
      wx.showToast({
        icon: "loading",
        title: "活动标题不能为空哦...",
        duration: 1000
      })

    } else if (radio_button == "") {
      wx.showToast({
        icon: "loading",
        title: "选择分类不能为空哦...",
        duration: 1000
      })
    } else if (e.detail.value.desc == "") {
      wx.showToast({
        icon: "loading",
        title: "活动介绍不能为空哦...",
        duration: 1000
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



    }





    wx.uploadFile({
      url: 'https://api.lizi123.cn/index.php/home/Index/uploads',
      filePath: tempFilePaths[0],
      name: 'name',
      // header: {}, // 设置请求的 header
      // formData: {}, // HTTP 请求中其他额外的 form data
      success: function (res) {
        var obj = JSON.parse(res.data);
        url_address = obj.url;
        console.log(e);
        title = e.detail.value.title;
        desc = e.detail.value.desc;
        console.log(title);
        console.log(desc);
        console.log(url_address);
        console.log(radio_button);

        wx.request({
          url: 'https://api.lizi123.cn/index.php/home/Activity/wxpublishact',
          method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          data: {
            'client_type':0,
            'activity_name':title,
            'activity_intro':desc,
            'image':url_address,
            'tag_name':radio_button

          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
            console.log(res);
            wx.showToast({
              title: "发布活动成功",
              duration: 3000
            })

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
        wx.navigateTo({
          url: '../recall_show/recall_show?id=that.data.club_id',
          success: function (res) {
            wx.showToast({
              title: "发布活动成功",
              duration: 3000
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

      },
      complete: function () {
        // complete
      }
    })
  }
})