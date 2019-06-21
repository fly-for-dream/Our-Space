document.write("<script type='text/javascript' src='../usefulFunction.js'></script>");
document.write("<script type='text/javascript' src='../dataExamples.js'></script>");
document.write("<script type='text/javascript' src='../constAPI.js'></script>");

var pagenum=1;
var page_url;
var pae_cnt;


function getUserName() {
    let t;
    globalPost("/user/getUserInfo",{"id":getSession("user_id_login")},function (d) {
        if (d["code"]===200) t=d["code"]["name"]; else t="name";
    });
    return t;
}

function creat_Tiezi(e) {
    e["name"]=getUserName();
    return e;
}

function creat_reply_Tiezi(e) {
    e["name"]=getUserName();
    return e;
}

function show_Tiezi(e) {
    $("#_time_id").text(e["updatetime"]);
    $("#_title_id").text(e["title"]);
    $("#_type_id").text(e["type"]);
    $("#_img_id").attr("src",globalHost+"/index/getImage?id="+e["userid"]);
    $("#_content_id").text(e["info"]);
    $("#_name_id").text(e["name"]);
}

function get_reply_tiezi_Html(e) {

    // return '<div class="reply">\
    //         <div class="replier">\
    //           <div class="post_img"><img src='+ globalHost+"/index/getImage?id="+e["user"] +' alt="头像"></div>\
    //           <div class="post_name">' +e["name"]+ '</div>\
    //         </div>\
    //         <div class="reply_content">\
    //           <div class="post_time">'+ e["updatetime"] +'</div>\
    //           <div class="cut_off"><img src="../index/images_index/u678.png" alt="分割线"></div>\
    //           <div class="content">'+ e["info"] + '</div>\
    //         </div>\
    //     </div>';
    return '<div class="reply">\
                <div class="replier">\
                  <div class="post_img"><img src='+ globalHost+"/index/getImage?id="+e["user"] +' alt="头像"></div>\
                 <div class="post_name">\' +e["name"]+ \'</div>\
                </div>\
                <div class="reply_content">\
                  <div class="post_time">\'+ e["updatetime"] +\'\
                    <button type="button" class="btn btn-outline-success delete_reply">删除</button>\
                  </div>\
                  <div class="cut_off"><img src="../index/images_index/u678.png" alt="分割线"></div>\
                  <div class="content">\'+ e["info"] + \'</div>\
                </div>\
              </div>'
}

function change(s,x) {
    let t=s.lastIndexOf('=');
    return s.substring(0,t+1)+x;
}

function getpage(s) {
    let t=s.lastIndexOf('=');
    return s.substring(t+1,t.length);
}

function get_tie_id() {
    return get_url_parameter("id");
}

function get_tie_page() {
    return get_url_parameter("page");
}

function go_next() {
    pagenum=parseInt(getpage(page_url));
    if (pagenum<page_cnt) pagenum++; else alert("这已经是最后一页了！！！");
    window.location.href=change(page_url, pagenum);
}

function go_prec() {
    pagenum=parseInt(getpage(page_url));
    if (pagenum>1) pagenum--; else alert("这已经是第一页了！！！");
    window.location.href=change(page_url, pagenum);
}

function add_reply_Tiezi(data) {
    for (let i=0; i<data.length; ++i)
        $("#_reply_id").append(get_reply_tiezi_Html(data[i]));
}

function add_reply_page(no) {
    globalGet("/posts/getReply",{"postsid" : get_tie_id(), "pageNum" : no}, function (d) {
        let e=creat_reply_Tiezi(d["data"]);
        add_reply_Tiezi(e);
    })
}

function Reply_Tiezi(){
    let postsid=get_tie_id();
    let user=user_id_login;
    let info=$("#_reply_content").text();
    globalPost("/posts/replyPosts",{"postsid":postsid, "user":user, "info":info}, function (d) {
        alert(d["message"]);
        if (d["code"]===200) $("#_reply_content").text("");
    })
}


function dele_tiezi() {
    let userid=getSession("user_id_login");
    globalPost("/posts/removePosts",{"postsid":get_tie_id(),"userid":userid},function (d) {
        let e=d["data"];
        if (e) {
            alert("删除成功!!");
            window.location.reload();
        } else {
            alert("删除失败!!");
        }
    })
}



$(document).ready(function () {
    page_url=window.location.href.toString();
    page_cnt = 1;

    globalGet("/posts/getPostsInfo",{ "id" : get_tie_id() },function (d) {
        let e=creat_Tiezi(d["data"]);
        // console.log(e);
        show_Tiezi(e);
    });

    // for (let i=1; i<=page_cnt; i++) add_reply_page(i);

    add_reply_page(get_tie_page());

    let user_name_login=getSession("user_name_login");
    let user_id_login=getSession("user_id_login");
    $("#_reply_user_name").text(user_name_login);
    $("#_reply_user_img").attr("src",globalHost+"/user/getImage?id="+user_id_login);
    alert(user_name_login);
    alert(user_id_login);
    alert(globalHost+"/index/getImage?id="+user_id_login);

});
