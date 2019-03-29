import WxValidate from '../../utils/WxValidate.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show1: false,
    actions: [{
      name: '男'
    }, {
      name: '女'
    }],
    currentInput: '',
    formInfo: {
      card: '',
      phone: '',
      username: '',
      sex: '',
      height: '',
      weight: '',
      education: '',
      job: '',
      unit: '',
      income: '',
      address: '',
      feeling: '',
      assset: '',
      family: '',
      otherjob: '',
      otherparty: '',
      otherfamily: '',
      otherage: '',
      otherassert: '',
      otherheight: '',
      otheralent: '',
      hobby: '',
      other: '',
    }
  },


  // 显示错误信息
  showModal(error) {
    wx.showModal({
      content: error.msg,
      showCancel: false,
    })
  },

  // 校验
  validateForm() {
    if (!this.WxValidate.checkForm(this.data.formInfo)) {
      const error = this.WxValidate.errorList[0]
      this.showModal(error)
      return false
    } else {
      return true
    }
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
    } else if (event.currentTarget.dataset.name === 'height') {
      this.setData({
        'formInfo.height': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'weight') {
      this.setData({
        'formInfo.weight': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'education') {
      this.setData({
        'formInfo.education': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'job') {
      this.setData({
        'formInfo.job': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'unit') {
      this.setData({
        'formInfo.unit': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'income') {
      this.setData({
        'formInfo.income': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'address') {
      this.setData({
        'formInfo.address': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'feeling') {
      this.setData({
        'formInfo.feeling': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'assset') {
      this.setData({
        'formInfo.assset': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'family') {
      this.setData({
        'formInfo.family': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'otherjob') {
      this.setData({
        'formInfo.otherjob': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'otherparty') {
      this.setData({
        'formInfo.otherparty': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'otherfamily') {
      this.setData({
        'formInfo.otherfamily': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'otherassert') {
      this.setData({
        'formInfo.otherassert': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'otherage') {
      this.setData({
        'formInfo.otherage': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'otherheight') {
      this.setData({
        'formInfo.otherheight': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'otherincome') {
      this.setData({
        'formInfo.otherincome': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'otherlalent') {
      this.setData({
        'formInfo.otherlalent': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'hobby') {
      this.setData({
        'formInfo.hobby': event.detail
      })
    } else if (event.currentTarget.dataset.name === 'other') {
      this.setData({
        'formInfo.other': event.detail
      })
    }
  },

  // 确认
  confirm() {

    console.log(this.data.formInfo)
    if (this.validateForm(this.data.formInfo)) {
      this.setData({
        'formInfo.openid': getApp().globalData.openid,
        'formInfo.sex': (this.data.formInfo.sex === '男' || this.data.formInfo.sex === 1) ? 1 : 2,
        'formInfo.addresstype': 'matchMaker'
      })
      wx.request({
        url: 'http://192.168.101.66:8080/insertAddress',
        data: this.data.formInfo,
        header: {},
        method: 'post',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          console.log(res)
          if (res.statusCode === 201) {
            wx.navigateTo({
              url: '/pages/address/address?addr=matchMaker',
              success: function (res) { },
              fail: function (res) { },
              complete: function (res) { },
            })
          }
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },


  openActionSheet(e) {
    console.log(e)
    this.setData({
      show1: true,
      currentInput: e.currentTarget.dataset.name
    })
    console.log(this.data.show1)
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initValidate()
  },

  initValidate() {
    // 验证字段的规则
    const rules = {
      card:{
        required:true,
        idcard:true
      },
      phone: {
        required: true,
        tel: true,
      },
      username: {
        required: true,
        minlength: 2
      },
      sex: {
        required: true
      },
      height: {
        required: true
      },
      weight: {
        required: true
      }, 
      education: {
        required: true,
      },
      job: {
        required: true,
      },
      unit: {
        required: true,
      },
      income: {
        required: true,
      },
      address: {
        required: true,
      },
      feeling: {
        required: true,
      },
      assset: {
        required: true,
      },
      family: {
        required: true,
      },
    }

    // 验证字段的提示信息，若不传则调用默认的信息
    const messages = {
      card: {
        required: '请填写身份证号',
        idcard:'请输入正确的身份证号'
      },
      phone: {
        required: '请输入手机号',
        tel: '请输入正确的手机号',
      },
      username: {
        required: '请填写姓名',
        minlength: '请输入正确的姓名'
      },
      sex: {
        required: '请选择联系人性别'
      },
      height: {
        required: '请输入身高'
      },
      weight: {
        required: '请输入体重'
      },
      education: {
        required: '请输入学历'
      },
      job: {
        required: '请输入职业'
      },
      unit: {
        required: '请输入单位'
      },
      income: {
        required: '请输入收入'
      },
      family: {
        required: '请输入家庭住址'
      },
      feeling: {
        required: '请输入感情婚姻情况'
      },
      assset: {
        required: '请输入财产情况'
      },
      family: {
        required: '请输入家庭成员'
      },

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