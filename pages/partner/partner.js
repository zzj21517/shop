// pages/partner/partner.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    formInfo: {
      username: '',
      sex: '',
      card: '',
      code: '',
      other: '',
      phone: '',
      openid:'',
    },
    count: 60,
  },

  // 当前输入的值
  onChange(event) {
    let name = event.currentTarget.dataset.name
    if (name === 'username') {
      this.setData({
        'formInfo.username': event.detail
      })
    } else if (name === 'sex') {
      this.setData({
        'formInfo.sex': event.detail
      })
    } else if (name === 'card') {
      this.setData({
        'formInfo.card': event.detail
      })
    } else if (name === 'phone') {
      this.setData({
        'formInfo.phone': event.detail
      })
    } else if (name === 'code') {
      this.setData({
        'formInfo.code': event.detail
      })
    } else if (name === 'other') {
      this.setData({
        'formInfo.other': event.detail
      })
    } else if (name === 'checked') {
      this.setData({
        'formInfo.checked': event.detail
      })
    }
  },

  // 获取验证码
  sendCode() {
    console.log(this.data.formInfo)
    let that = this
    wx.request({
      url: `http://192.168.101.66:8080/weixin/send?phone=${this.data.formInfo.phone}`,
      dataType: 'json',
      method: 'POST',
      success: function(res) {
        console.log(res)
        var time = setInterval(function() {
          if (that.data.count >= 1) {
            that.setData({
              count: that.data.count - 1
            })
          } else {
            clearInterval(time)
            that.setData({
              count: 60
            })
          }
        }, 1000)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  // 注册
  register() {
    this.setData({
      'formInfo.openid':getApp().globalData.openid
    })
    wx.request({
      url: 'http://192.168.101.66:8080/weixin/register',
      data: this.data.formInfo,
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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