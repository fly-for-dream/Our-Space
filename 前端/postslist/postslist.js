


//初始化函数：在body标签中加入onload=“load()”
function load() {
  var map = UrlSearch();

  //加载主体数据
  getPostsList(map["type"],map["pageNum"],"creattime","#newpost");
  getPostsList(map["type"],map["pageNum"],"readnum","#question_answer");
  getPostsList(map["type"],map["pageNum"],"number","#essence");
  
  //加载排行榜
  //加载分类表

}


//获取帖子数据并加载
function getPostsList(type,page,rule,name) {
  //构造参数
  var data = {
    "type":type,
    "pageNumber":page,
    "rule":rule
  };

  var url = "/posts/getPostsList";

  globalGet(url,data,function (res) {
    if(res["code"]==200){
      addTap(res["data"],name);
    }
    else {
      window.alert(res.message);
    }
  });




}

//根据标签的id加入内容
function addTap(data,name) {
  var list = [];
  for (let i=0; i<data.length; i++) {
      var a = data[i];
      console.log(a);
      var str = "<div class='container'>\
            <div class='card'>\
                <div class='card-header'>"+a["title"]+"</div>\
                <div class='card-body'>\
                    <div class='post_width'>\
                    <div class='post1'><a href='../post_detail/post_detail.html?id="+a.id+"&page=1"+"' ><p><span style='font-size: large'>" + a.info + "</span></p></a></div>\
                    <div class='post1_reply_num'><p><span style='font-size: large'><b>" + a.type + "</b></span></p></div>\
                    </div>\
                    <div class='post_width'>\
                    <div class='post1_time'><p><span>"+a.creattime+"</span></p></div>\
                    <div class='post1_browse_num'><p><span>" + "阅读" + a.read+ "/"+ "评论" +a.number +"</span></p></div>\
                    </div>\
                </div>\
            </div>\
        </div>";

      $(name).append(str);

    }

}