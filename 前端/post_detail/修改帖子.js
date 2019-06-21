document.write("<script type='text/javascript' src='../usefulFunction.js'></script>");
document.write("<script type='text/javascript' src='../dataExamples.js'></script>");
document.write("<script type='text/javascript' src='../constAPI.js'></script>");

function update_it() {

    alert(get_url_parameter("id"));
    alert(getSession("user_id_login"));
    alert($("#_title_id").val());
    alert($("#_type_id").text().toLowerCase());
    alert($("#_content_id").val());

    globalPost("/posts/updatePosts",{
        "postsid":get_url_parameter("id"),
        "userid":getSession("user_id_login"),
        "title":$("#_title_id").val(),
        "type":$("#_type_id").text().toLowerCase(),
        "info":$("#_content_id").val(),
        "authority":0
    },function (d) {
        if (d["code"]===201) alert("无权限修改！！"); else
            if (d["code"]===200) {
                alert("修改成功!!");
                window.location.href=getSession("tmp_url");
            }
    });
}



$(document).ready(function () {

    let type=get_url_parameter("type");
    alert(type);
    $("#_type_id").text(type);

    let title=getSession("tmp_title");
    alert(title);
    removeSession("tmp_title");
    $("#_title_id").val(title);

    let content=getSession("tmp_content");
    removeSession("tmp_content");
    alert(content);
    $("#_content_id").val(content);

    let url=getSession("tmp_url");
    alert(url);
    // removeSession("tmp_url");
    $("#_return_href").attr("href",url);

});


