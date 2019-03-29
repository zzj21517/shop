//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: function(res) {
        if (res.code) {
          wx.request({
            method: 'get',
            url: 'http://192.168.101.66:8080/weixin/login',
            data: {
              code: res.code
            },
            success(res) {
              console.log(res)
              if(res.statusCode===200){
                getApp().globalData.openid=res.data.openid
              }
            }
          })
        } else {
          console.log('登录失败' + res.errMsg)
        }
      },
      fail: function(res) {
        console.log(fail)
      },
      complete: function(res) {
        console.log(res)
      },
    })
   // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    goodsList: [],
    openid:null,
    // goodsList: [
    //   {
    //     picture: '/static/images/goods1.png',
    //     name: '御驾无忧A款',
    //     price: 388,
    //     rawPrice: 580,
    //     goodsId: 1,
    //     banners: ['/static/images/banner-1.png', '/static/images/driver-2.png', '/static/images/banner-3.png'],
    //     detailPicture: '/static/images/draiver11.6.jpg'
    //   },
    //   {
    //     picture: '/static/images/goods2.png',
    //     name: '御驾无忧B款',
    //     price: 688,
    //     rawPrice: 1288,
    //     goodsId: 2
    //   },
    //   {
    //     picture: '/static/images/goods3.png',
    //     name: '御驾红娘',
    //     price: 488,
    //     rawPrice: 688,
    //     goodsId: 3
    //   },
    //   {
    //     picture: '/static/images/goods4.png',
    //     name: '企业法顾',
    //     price: 5000,
    //     rawPrice: 9800,
    //     goodsId: 4
    //   },
    //   {
    //     picture: '/static/images/goods5.png',
    //     name: '体检通套餐A',
    //     price: 360,
    //     rawPrice: 660,
    //     goodsId: 5
    //   },
    //   {
    //     picture: '/static/images/goods6.png',
    //     name: '体检通套餐B',
    //     price: 550,
    //     rawPrice: 950,
    //     goodsId: 6
    //   },
    //   {
    //     picture: '/static/images/goods7.png',
    //     name: '体检通套餐C',
    //     price: 880,
    //     rawPrice: 1580,
    //     goodsId: 7
    //   },
    //   {
    //     picture: '/static/images/goods8.png',
    //     name: '及时雨-医疗垫付卡',
    //     price: 120,
    //     rawPrice: 260,
    //     goodsId: 8
    //   },
    // ],
  }
})