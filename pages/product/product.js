// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categorys:[{
      name:'热榜搜索',
      id:1
    },{
      name:'会员专区',
      id:2
    },{
      name:'人伤专区',
      id:3
    },{
      name:'法律服务',
      id:4
    },{
      name:'更多产品',
      id:5
    }],
    goods: [
      {
        picture: '/static/images/goods1.png',
        name: '御驾无忧A款',
        price: 388,
        rawPrice: 580,
        goodsId: 1
      },
      {
        picture: '/static/images/goods2.png',
        name: '御驾无忧B款',
        price: 688,
        rawPrice: 1288,
        goodsId: 2
      },
      {
        picture: '/static/images/goods3.png',
        name: '御驾红娘',
        price: 488,
        rawPrice: 688,
        goodsId: 3
      },
      {
        picture: '/static/images/goods4.png',
        name: '企业法顾',
        price: 5000,
        rawPrice: 9800,
        goodsId: 4
      },
      {
        picture: '/static/images/goods5.png',
        name: '体检通套餐A',
        price: 360,
        rawPrice: 660,
        goodsId: 5
      },
      {
        picture: '/static/images/goods6.png',
        name: '体检通套餐B',
        price: 550,
        rawPrice: 950,
        goodsId: 6
      },
      {
        picture: '/static/images/goods7.png',
        name: '体检通套餐C',
        price: 880,
        rawPrice: 1580,
        goodsId: 7
      },
      {
        picture: '/static/images/goods8.png',
        name: '及时雨-医疗垫付卡',
        price: 120,
        rawPrice: 260,
        goodsId: 8
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})