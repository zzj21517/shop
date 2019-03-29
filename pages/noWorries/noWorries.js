import WxValidate from '../../utils/WxValidate.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show1: false,
    show2: false,
    actions: [{
      name: '男'
    }, {
      name: '女'
    }],
    currentInput: '',
    formInfo: {
      username: '',
      sex: '',
      phone: '',
      card: '',
      carinsurance: '',
      carnumber: '',
      address: '',
    },
    currentDate: new Date().getTime(),
    minDate: new Date().getTime()
  },

  // 校验
  validateForm(){
    if (!this.WxValidate.checkForm(this.data.formInfo)) {
      const error = this.WxValidate.errorList[0]
      this.showModal(error)
      return false
    }else{
      return true
    }
  },

  // 确认
  confirm() {
    
    console.log(this.data.formInfo)
    if (this.validateForm(this.data.formInfo)){
      this.setData({
        'formInfo.openid':getApp().globalData.openid,
        'formInfo.sex':(this.data.formInfo.sex==='男'||this.data.formInfo.sex===1)?1:2,
        'formInfo.addresstype':'noWorries'
      })
      wx.request({
        url: 'http://192.168.101.66:8080/insertAddress',
        data: this.data.formInfo,
        header: {},
        method: 'post',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          console.log(res)
          if(res.statusCode===201){
            wx.navigateTo({
              url: '/pages/address/address?addr=noWorries',
              success: function(res) {
              },
              fail: function(res) {},
              complete: function(res) {},
            })
          }
        },
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  },

  // 显示错误信息
  showModal(error) {
    wx.showModal({
      content: error.msg,
      showCancel: false,
    })
  },

  onChange(event) {
    if (event.currentTarget.dataset.name === 'username') {
      this.setData({
        'formInfo.username': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'phone') {
      this.setData({
        'formInfo.phone': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'sex') {
      this.setData({
        'formInfo.sex': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'card') {
      this.setData({
        'formInfo.card': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'carnumber') {
      this.setData({
        'formInfo.carnumber': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'carinsurance') {
      this.setData({
        'formInfo.carinsurance': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'address') {
      this.setData({
        'formInfo.address': event.detail
      })
    }
  },

  //时间确认
  confirmDate(event) {
    console.log(event)
    let temp = new Date(event.detail)
    this.setData({
      'formInfo.carinsurance': `${temp.getFullYear()}/${temp.getMonth()+1}/${temp.getDate()}`,
      show2: false
    })
  },

  //  时间取消
  cancelDate(event) {
    this.setData({
      show2: false
    })
  },

  openActionSheet(e) {
    console.log(e)
    this.setData({
      show1: true,
      currentInput: e.currentTarget.dataset.name
    })
  },
  openActionSheet2(e) {
    console.log(e)
    this.setData({
      show2: true,
      currentInput: e.currentTarget.dataset.name
    })
  },

  onSelect(event) {
    this.setData({
      show1: false,
      'formInfo.sex': event.detail.name
    })
  },
  onClose1() {
    this.setData({
      show1: false
    });
  },
  onClose2() {
    this.setData({
      show2: false
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initValidate()
    console.log(this.WxValidate)
  },

  initValidate() {
    // 验证字段的规则
    const rules = {
      username: {
        required: true,
        minlength: 2
      },
      sex: {
        required: true
      },
      phone: {
        required: true,
        tel: true,
      },
      card:{
        required:true,
        idcard:true
      },
      carnumber:{
        required:true
      },
      carinsurance:{
        required:true
      },
      address:{
        required:true
      }
    }

    // 验证字段的提示信息，若不传则调用默认的信息
    const messages = {
      username: {
        required: '请填写姓名',
        minlength: '请输入正确的名称'
      },
      sex: {
        required: '请选择性别'
      },
      phone: {
        required: '请输入手机号',
        tel: '请输入正确的手机号',
      },
      card:{
        required:'请输入身份证号',
        idcard:'请输入正确的身份证号'
      },
      carnumber:{
        required:'请输入车牌号'
      },
      carinsurance:{
        required:'请选择车险有效期'
      },
      address:{
        required:'请输入联系地址'
      }

    }

    // 创建实例对象
    this.WxValidate = new WxValidate(rules, messages)

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