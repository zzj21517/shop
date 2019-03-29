import WxValidate from '../../utils/WxValidate.js'

const App = getApp()

Page({
  data: {
    form: {
      name: '',
      phone: '',
    },
  },
  onLoad() {
    this.initValidate()
    console.log(this.WxValidate)
  },

  showModal(error) {
    wx.showModal({
      content: error.msg,
      showCancel: false,
    })
  },
  initValidate() {
    // 验证字段的规则
    const rules = {
      name: {
        required: true,
        minlength: 2
      },
      phone: {
        required: true,
        tel: true,
      }
    }

    // 验证字段的提示信息，若不传则调用默认的信息
    const messages = {
      name: {
        required: '请填写姓名',
        minlength: '请输入正确的名称'
      },
      phone: {
        required: '请输入手机号',
        tel: '请输入正确的手机号',
      },

    }

    // 创建实例对象
    this.WxValidate = new WxValidate(rules, messages)

  },

  formSubmit: function(e) {
    console.log(e)
    console.log('form发生了submit事件，携带的数据为：', e.detail.value)
    const params = e.detail.value
    //校验表单
    if (!this.WxValidate.checkForm(params)) {
      const error = this.WxValidate.errorList[0]
      this.showModal(error)
      return false
    }
    this.showModal({
      msg: '提交成功'
    })
  }
})