Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 100,
    bannerList: [{
        'bannerUrl': '/static/images/banner1.png'
      },
      {
        'bannerUrl': '/static/images/banner2.png'
      }
    ],
    goodsList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.request({
      url: 'http://192.168.101.66:8080/getAfGoods',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res)
        if (res.statusCode === 200) {
          res.data.forEach(function(item) {
            item.num = 1
            item.amount = item.price
          })
          getApp().globalData.goodsList = res.data
          that.setData({
            goodsList: getApp().globalData.goodsList
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let goodsList = getApp().globalData.goodsList
    goodsList.forEach(function(item) {
      item.num = 1
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHgoodsIde: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})