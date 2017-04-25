var app = getApp();
Page({
    data: {
        info: {},
        name: ""
    },
    onLoad: function (option) {
        var that = this;
        wx.request({
            url: 'https://api.lizi123.cn/index.php/home/Index/findschool',
            data: {},
            header: { 'content-type': 'application/x-www-form-urlencoded' },
            method: 'POST',
            success: function (res) {
                console.log(res);
                that.setData({
                    info: res.data
                })
            }
        })
    },
    back: function (e) {
        var that=this;
        console.log(e.currentTarget.dataset.add)
        app.globalData.address=e.currentTarget.dataset.add;
        wx.navigateBack({
          delta: 1, // 回退前 delta(默认为1) 页面
          success: function(res){
            that.setData({
                
            })
          },
          
        })
    }
})