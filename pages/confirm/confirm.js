// pages/confirm/confirm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: {},
    activeNames: [],
    address: {},
    billInfo:{
      invoicename:'',
      invoicenum:'',
      aaddressphone:'',
      banknumber:'',
    },
    checked:'',
  },

  // 微信支付
  onSubmit(){
    console.log(this.data)
  },

  onChange(event) {
    if (event.currentTarget.dataset.name === 'activeNames') {
      this.setData({
        activeNames: event.detail
      })
    } else if (event.currentTarget.dataset.name === 'checked') {
      this.setData({
        checked: event.detail
      })
    } else if (event.currentTarget.dataset.name === 'num') {
      this.setData({
        'goods.num': event.detail,
        'goods.amount': this.data.goods.price * this.data.goods.num * 100
      })
    } else if (event.currentTarget.dataset.name === 'invoicename') {
      this.setData({
        'billInfo.invoicename': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'invoicenum') {
      this.setData({
        'billInfo.invoicenum': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'aaddressphone') {
      this.setData({
        'billInfo.aaddressphone': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'banknumber') {
      this.setData({
        'billInfo.banknumber': event.detail
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var id = options.id
    var that = this
    var goodsList = getApp().globalData.goodsList
    goodsList.forEach(function(item) {
      if (item.goodsid === id) {
        that.setData({
          goods: item
        })
      }
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