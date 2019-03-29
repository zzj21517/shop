// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addr: '',
    type: '',
    addressList: [],

    allList: [],
    radio: '1',
  },

  changeRadio(event) {
    if (!this.data.type) {
      this.setData({
        radio: event.currentTarget.dataset.name
      })
      var pages = getCurrentPages()
      var prevPage = pages[pages.length - 2]
      prevPage.setData({
        address: event.currentTarget.dataset.address
      })
      wx.navigateBack({
        delta: 1,
      })
    }
  },

  // 新增收货地址
  addAddress() {
    wx.navigateTo({
      url: `/pages/${this.data.addr}/${this.data.addr}`,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    var addr = options.addr
    this.setData({
      addr: addr
    })

    if (options.type) {
      this.setData({
        type: options.type
      })
    }


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
    // 获取所有地址
    var that = this
    wx.request({
      url: 'http://192.168.101.66:8080/getUserAddressDTOByOpenId',
      data: {
        openid: getApp().globalData.openid
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.statusCode)
        let list = []
        if (res.statusCode === 200) {
          res.data.forEach(function(item) {
            if (item.addresstype === that.data.addr) {
              list.push(item)
            }
          })

          that.setData({
            addressList: list
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

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