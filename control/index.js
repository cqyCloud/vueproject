const banner = require("../contentTemplate/banner")
const newList = require('../contentTemplate/newsList')
const details = require('../contentTemplate/bannerdetails')
const newsdetails = require('../contentTemplate/newsdetails')
const shareNav = require('../contentTemplate/shareNav')
const womenStar = require('../contentTemplate/womanStar')
const manStar = require('../contentTemplate/manStar')
const fullView = require('../contentTemplate/fullView')
const likeYou = require('../contentTemplate/likeYou')
const likeYoudetail = require('../contentTemplate/likeYoudetails')
const womanStardetail = require('../contentTemplate/womanStardetail')
const manStardetail = require('../contentTemplate/manStardetail')
const fullViewdetail = require('../contentTemplate/fullViewdetail')
// console.log(womanStardetail)
// console.log(likeYoudetail[0])
exports.index = async ctx => {
  let data;
  if(ctx.querystring === "title=vueTitle"){
    data = "TZ-追梦-18期实战vue项目"
  }else if(ctx.querystring === "title=banner"){
    data = banner
  }else if(ctx.querystring === "title=banner" + 1){
    data = details[0]
  }else if(ctx.querystring === "title=banner" + 2){
    data = details[1]
  }else if(ctx.querystring === "title=banner" + 3){
    data = details[2]
  }else if(ctx.querystring === "title=banner" + 4){
    data = details[3]
  }else if(ctx.querystring === "title=newsList"){
    data = newList
  }else if(ctx.querystring === "title=newsList"+1){
    data = newsdetails[0]
  }else if(ctx.querystring === "title=newsList"+2){
    data = newsdetails[1]
  }else if(ctx.querystring === "title=newsList"+3){
    data = newsdetails[2]
  }else if(ctx.querystring === "title=newsList"+4){
    data = newsdetails[3]
  }else if(ctx.querystring === "title=shareNav"){
    data = shareNav
  }else if(ctx.querystring === "title=womanStar"){
    data = womenStar
  }else if(ctx.querystring === "title=womanStar" + 1){
    data = womanStardetail[0]
  }else if(ctx.querystring === "title=womanStar" + 2){
    data = womanStardetail[1]
  }else if(ctx.querystring === "title=womanStar" + 3){
    data = womanStardetail[2]
  }else if(ctx.querystring === "title=womanStar" + 4){
    data = womanStardetail[3]
  }else if(ctx.querystring === "title=manStar"){
    data = manStar
  }else if(ctx.querystring === "title=manStar" + 1){
    data = manStardetail[0]
  }else if(ctx.querystring === "title=manStar" + 2){
    data = manStardetail[1]
  }else if(ctx.querystring === "title=manStar" + 3){
    data = manStardetail[2]
  }else if(ctx.querystring === "title=manStar" + 4){
    data = manStardetail[3]
  }else if(ctx.querystring === "title=fullView"){
    data = fullView
  }else if(ctx.querystring === "title=fullView" + 1){
    data = manStardetail[0]
  }else if(ctx.querystring === "title=fullView" + 2){
    data = fullViewdetail[1]
  }else if(ctx.querystring === "title=fullView" + 3){
    data = fullViewdetail[2]
  }else if(ctx.querystring === "title=fullView" + 4){
    data = fullViewdetail[3]
  }else if(ctx.querystring === "title=likeYou"){
    data = likeYou
  }else if(ctx.querystring === "title=likeYou" + 1){
    data = likeYoudetail[0]
  }else if(ctx.querystring === "title=likeYou" + 2){
    data = likeYoudetail[1]
  }else if(ctx.querystring === "title=likeYou" + 3){
    data = likeYoudetail[2]
  }else if(ctx.querystring === "title=likeYou" + 4){
    data = likeYoudetail[3]
  }


  ctx.body = data
}
