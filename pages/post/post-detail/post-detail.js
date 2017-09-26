// pages/post/post-detail/post-detail.js

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isC: true,
    isPlay: false,
    cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505553074010&di=ed151901efff160254a5a08c50f6f3ed&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F011bb45832608ea801219c77b0ec59.jpg',
    isId:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    var globalData = app.globalData;
    self.data.isId = options.id
    wx.setNavigationBarTitle({
      title: `王者荣耀好玩吗-${options.id}`,
    })
    // 设置缓存
    wx.setStorageSync('id', "王者荣耀")
    wx.setStorage({
      key: 'test',
      data: '王者荣耀tets',
    })

    self.setAudioState();
   if(app.globalData.g_isPlay && app.globalData.g_currentId === self.data.isId){  //获取全局状态
    self.setData({
        isPlay:true
    })
   }

    
  },
  setAudioState(){
    var self = this;
    //监听音乐播放
    wx.onBackgroundAudioPlay(function () {
      app.globalData.g_isPlay = true;
      app.globalData.g_currentId = self.data.isId
      self.setData({
        isPlay: true
      })
    })
    wx.onBackgroundAudioPause(function () {
      app.globalData.g_isPlay = false;
      app.globalData.g_currentId = null;
      self.setData({
        isPlay: false
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

  },
  onC: function () {  //收藏切换
    var self = this;
    // if(!self.data.isC){
    //   wx.showToast({
    //     title: '收藏成功',
    //     icon:"success",
    //     mask:true
    //   })
    // }else{
    //   wx.showToast({
    //     title: '取消收藏',
    //     icon: "success",
    //     mask:true
    //   })
    // }
    wx.showToast({
      title: !self.data.isC ? "收藏成功" : "取消收藏",
      icon: "success",
      mask: true,
      duration: 1000
    })
    this.setData({
      isC: !self.data.isC
    })

  },
  onMusicTap(e) {  //音乐播放
    var isPlsy = this.data.isPlay;
    if (isPlsy) {
      //暂停音乐
      wx.pauseBackgroundAudio();

      this.setData({
        isPlay: false
      })
    } else {
      // 音乐资源
      wx.playBackgroundAudio({
        dataUrl: 'http://so1.111ttt.com:8282/2016/1/06m/25/199251943186.m4a?tflag=1505542646&pin=72d6bb079e37a900eafe9eddcdd66a33&ip=183.39.199.32#.mp3',
        title: '告白气球',
        coverImgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505553074010&di=ed151901efff160254a5a08c50f6f3ed&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F011bb45832608ea801219c77b0ec59.jpg',
      });
      this.setData({
        isPlay: true,
      })

    }



  },
  showShare() {  //分享
    wx.showActionSheet({
      itemList: ["分享到微信好友", "分享到朋友圈", "分享到手机QQ"],
      success: function (res) {
        console.log(res.tapIndex)
      }
    })
  },
})