

exports.index = async ctx => {
  let data;
  if(ctx.querystring === "title=vueTitle"){
    data = "TZ-追梦-18期实战vue项目"
  }else if(ctx.querystring === "title=banner"){
    data = "fengyun"
  }else if(ctx.querystring === "title=banner + id"){
    data = "bujingyun"
  }else if(ctx.querystring === "title=newsList"){
    data = "步惊云"
  }else if(ctx.querystring === "title=newsList + id"){
    data = "步惊云"
  }else if(ctx.querystring === "title=shareNav"){
    data = "步惊云"
  }else if(ctx.querystring === "title=womanStar"){
    data = "步惊云"
  }else if(ctx.querystring === "title=manStar"){
    data = "步惊云"
  }else if(ctx.querystring === "title=fullView"){
    data = "步惊云"
  }else if(ctx.querystring === "title = title + id"){
    data = "步惊云"
  }else if(ctx.querystring === "title=likeYou"){
    data = "步惊云"
  }else if(ctx.querystring === "title=title + index"){
    data = "步惊云"
  }


  ctx.body = data
}