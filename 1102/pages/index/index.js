// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowDay: {},
    focus: false,
    inputValue: '100.00',
    countrysList: {},
    addCountrys: [
      {
        ENname: 'USD',
        CHname: '美元',
        money: ''
      },
      {
        ENname: 'HKD',
        CHname: '港币',
        money: ''
      },
    ],
    moneyDay: {},
    moneyList: [],
    // money: {},
    isShow: false
  },

  // 自定义方法输入钱
  setMoneyNum (e) {
    this.setData({
      inputValue: e.detail.value
    })

    // 底下的汇率发生变化
    // console.log(e)

    // 调用方法
    // 对你当前的所有已经添加进来的所的国家都进行汇率重新计算
  
  },

  // 自定义方法，实现国家列表页面的切换
  getCountryPage () {
    this.setData({
      isShow: true
    })
  },

  // 自定义方法获取汇率
  getMoneys () {
    let _this = this
    wx.request({
      url: 'https://ali-waihui.showapi.com/bank10',
      data: {
        bankCode: 'BOC'
      },
      header: {
        Authorization: 'APPCODE 3480d911513a45428b061cb553071d34'
      },
      method: 'GET',
      success: (res) => {
        // console.log(res.data.showapi_res_body)
        _this.setData({
          moneyDay: res.data.showapi_res_body.day,
          moneyList: res.data.showapi_res_body.codeList
        })
      } 
    })
  },

  // 汇率计算
  getCount(moneyData) {
    // console.log(moneyData)
    let _this = this
    wx.request({
      url: 'https://ali-waihui.showapi.com/waihui-transform',
      data: {
        fromCode: 'CNY',
        money: moneyData.moneysNum,
        toCode: moneyData.enname
      },
      header: {
        Authorization: 'APPCODE 3480d911513a45428b061cb553071d34'
      },
      method: 'GET',
      success: (res) => {
        // console.log(res)
        _this.setData({
          money: res.data.showapi_res_body.money
        })
      }
    })
  },


  // 自定义方法获取国家列表
  getCountry () {
    let _this = this
    //发送请求
    wx.request({
      url: 'https://ali-waihui.showapi.com/list',
      header: {
        Authorization: 'APPCODE 3480d911513a45428b061cb553071d34'
      },
      method: 'GET',
      success: (res) => {
        // console.log(res)        
        _this.setData({
          countrysList: res.data.showapi_res_body
        })
      }
    })
  },

  // 自动以方法添加国家汇率
  setMoney (options) {
    // let enname = options.currentTarget.dataset.enname;
    let moneyData = {
      enname: options.currentTarget.dataset.enname,
      moneysNum: this.data.inputValue
    }
    let newCountrys = [
      {
        ENname: options.currentTarget.dataset.enname,
        CHname: options.currentTarget.dataset.chname,
        money: ''
      }
    ]
    // console.log(this.data.addCountrys)
    let newAddCountrys = this.data.addCountrys.concat(newCountrys);

    // 获取当前项的ENname
    this.getCount(moneyData);
    // console.log(enname)

    // 更新数据
    this.setData({
      addCountrys: newAddCountrys,
      isShow: false
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let moneyData = {
      enname: 'USD',
      moneysNum: '100.00'
    }
    this.getCountry();
    this.getMoneys();
    this.getCount(moneyData);
    // console.log(this.data.addCountrys)
    let _this = this    
    this.data.addCountrys.forEach(function (value,index) {
      console.log(value)
      wx.request({
        url: 'https://ali-waihui.showapi.com/waihui-transform',
        data: {
          fromCode: 'CNY',
          money: _this.data.inputValue,
          toCode: value.ENname
        },
        header: {
          Authorization: 'APPCODE 3480d911513a45428b061cb553071d34'
        },
        method: 'GET',
        success: (res) => {
          console.log(res.data.showapi_res_body.money)

          console.log(value.CHname)
          // res.data.showapi_res_body
        }
      })
    })
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