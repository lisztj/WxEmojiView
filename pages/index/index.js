
var WxEmoji = require('../../WxEmojiView/WxEmojiView.js');
//index.js
//获取应用实例
var temTextArea;
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
    var that = this
    WxEmoji.bindThis(this);
    var tempWxEmojiArray = WxEmoji.transEmojiStr(that.data.WxEmojiData);
    that.setData({
      WxEmojiArray: tempWxEmojiArray
    });
  },
  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
  },
  WxEmojiTextareaFocus:function(e) {
    temTextArea = e;
    e.detail.value = "1111111";
    console.log(e.detail.value);
    
  },
  WxEmojiTextareaBlur:function(e){
    var that = this
    WxEmoji.WxEmojiTextareaBlur(that,e);
  },
  wxPreEmojiTap: function(e){
    var preText = e.target.dataset.text;
    temTextArea.detail.value = temTextArea.detail.value + preText;
    console.log(temTextArea.detail.value);
  }
})
