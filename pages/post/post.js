// pages/post/post.js
var postData = require('../../data/post_data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:'post',
    /**
     * 小程序总是会读取data对象来做数据绑定，这个动作我们成为A
     * 而这个动作A的执行，是在onLoad事件之后发生的
     * 
     */
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //页面初始化，options为页面跳转所打来的参数
    console.log(postData.postList)
  },
  go_post_detail:function(e){
    var id = e.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: `post-detail/post-detail?id=${id}`,
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