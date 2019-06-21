document.write("<script type='text/javascript' src='../usefulFunction.js'></script>");
document.write("<script type='text/javascript' src='../dataExamples.js'></script>");
document.write("<script type='text/javascript' src='../constAPI.js'></script>");

function post() {

    let content=$("#_content_id").val();
    let title=$("#_title_id").val();
    // let type=getSession("type");
    let type=$("#_type_id").text().toLowerCase();
    let userid=getSession("user_id_login");

    alert("type="+type);
    // alert("title="+title);
    // alert("content="+content);
    alert("userid="+userid);

    globalPost("/posts/newPosts",{
        "userid":userid,
        "type":type,
        "title":title,
        "info":content,
        "authority":0
    },function (d) {
        if (d["code"]===200) {
            alert("发帖成功!!");
            return;
        } else alert("发帖失败!!");
    })

}




