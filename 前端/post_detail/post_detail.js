document.write("<script type='text/javascript' src='../usefulFunction.js'></script>");
document.write("<script type='text/javascript' src='../dataExamples.js'></script>");
document.write("<script type='text/javascript' src='../constAPI.js'></script>");

var pagenum=1;
let page_url;

function creat_Tiezi(e) {
    e["name"]="name";
    return e;
}

function show_Tiezi(e) {
    $("#_time_id").text(e["updatetime"]);
    $("#_title_id").text(e["title"]);
    $("#_type_id").text(e["type"]);
    $("#_img_id").attr("src",globalHost+"/index/getImage?id="+get_tie_id());
    $("#_content_id").text(e["info"]);
    $("#_name_id").text(e["name"]);
}


$(document).ready(function () {
    page_url=window.location.href.toString();

    globalGet("/posts/getPostsInfo",{ "id" : get_tie_id() },function (d) {
        let e=creat_Tiezi(d["data"]);
        console.log(e);
        show_Tiezi(e);
    })

});

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

function go_next() {
    pagenum=parseInt(getpage(page_url));
    pagenum++;
    window.location.href=change(page_url, pagenum);
}

function go_prec() {
    pagenum=parseInt(getpage(page_url));
    if (pagenum>1) pagenum--;
    window.location.href=change(page_url, pagenum);
}