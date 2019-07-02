const banner = require("../contentTemplate/banner")
const newList = require('../contentTemplate/newsList')
const details = require('../contentTemplate/bannerdetails')
const newsdetails = require('../contentTemplate/newsdetails')
const shareNav = require('../contentTemplate/shareNav')
const womenStar = require('../contentTemplate/womanStar')
const manStar = require('../contentTemplate/manStar')
const fullView = require('../contentTemplate/fullView')
// console.log(banner)
// console.log(details)
// console.log({detail,id})
// const 
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
  }else if(ctx.querystring === "title=manStar"){
    data = manStar
  }else if(ctx.querystring === "title=fullView"){
    data = fullView
  }else if(ctx.querystring === "title = title + id"){
    data = "步惊云"
  }else if(ctx.querystring === "title=likeYou"){
    data = "步惊云"
  }else if(ctx.querystring === "title=title + index"){
    data = "步惊云"
  }


  ctx.body = data
}

exports.banner = async ctx => {

}