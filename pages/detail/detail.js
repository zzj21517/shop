Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: {},
    // swiper
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 100,
    goods: {},
  },

  imageLoad: function(e) {
    var $width = e.detail.width, //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height; //图片的真实宽高比例
    var viewWidth = 750, //设置图片显示宽度
      viewHeight = 750 / ratio; //计算的高度值
    var image = this.data.images;
    //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
    image[e.target.dataset.index] = {
      width: viewWidth,
      height: viewHeight
    }
    this.setData({
      images: image
    })
  },

  // 改变数量
  onChangeStepper(event){
    this.setData({
      'goods.num':event.detail
    })
  },

  // 立即购买
  buyNow() {
    wx.navigateTo({
      url:`/pages/confirm/confirm?id=${this.data.goods.goodsid}`,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
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
    console.log(this.data.goods)
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