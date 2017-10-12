// pages/movies/movies.js
var utils = require("../../utils/utils.js")

var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    api_hot:{},
    api_soon:{},
    api_top:{},
  },
  //  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var baseUrl = app.globalData.g_baseUrl;

    var api_hot = "/v2/movie/in_theaters";  //正在热映
    var api_soon = "/v2/movie/coming_soon";   //即将上映
    var api_top = "/v2/movie/top250";  //top 250

    that.get_in_theaters(baseUrl, api_hot).then(function(res){
      console.log(res.data)
      that.processDoubanData(res.data,"api_hot")
    });
    that.get_in_theaters(baseUrl, api_soon).then(function(res){
      that.processDoubanData(res.data, "api_soon")
    });
    that.get_in_theaters(baseUrl, api_top).then(function(res){
      that.processDoubanData(res.data, "api_top")
    });
  },
  onMoreTap(e){  //更多
    wx.navigateTo({
      url: `more-movie/more-movie?category=${e.currentTarget.dataset.category}`,
    })
  },
  get_in_theaters(url,api) {
   return new Promise(function(resolve,reject){
     wx.request({
       url: url + api,
       method: "GET",
       header: {
         'Content-Type': 'application/xml'
       },
       data: {
         "city": '深圳',
         "start": 0,
         "count": 3
       },
       success: function (res) {
          resolve(res)
       },
     })
   })
  },
  processDoubanData:function(moviesDouban,msg){
    var movies = [];
    for (let n in moviesDouban.subjects){
      var subject = moviesDouban.subjects[n];
      var title = subject.title;
      if(title.length >= 6){
        title = title.substring(0,6) + '...';
      }
      var temp = {
        stars: utils.covertTostarsArry(subject.rating.stars),
        title:title,
        average:subject.rating.average,
        coverageUrl:subject.images.large,
        movieId:subject.id
      }
      movies.push(temp);
      var readyData = {};
      var t = moviesDouban.title;
      readyData[msg] = {movies,t}
      this.setData(readyData)
    }
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