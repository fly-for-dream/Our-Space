document.write("<script type='text/javascript' src='../usefulFunction.js'></script>");
document.write("<script type='text/javascript' src='../dataExamples.js'></script>");
document.write("<script type='text/javascript' src='../constAPI.js'></script>");

function post() {

    let content=$("#_content_id").text();
    let title=$("#_title_id").text();
    let type=getSession("type");
    let userid=getSession("user_id_login");

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




