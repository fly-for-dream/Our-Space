document.write("<script type='text/javascript' src='../usefulFunction.js'></script>");
document.write("<script type='text/javascript' src='../dataExamples.js'></script>");
document.write("<script type='text/javascript' src='../constAPI.js'></script>");

function showRankName(data) {
    for (let i=0; i<Math.min(data.length,10); ++i) {
        $(".rank_num").children("a").eq(i).text(/*data[i].name*/data[i].name);
    }
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

$(document).ready(function () {

    globalGet("/index/getRank",null,function (d){
        showRankName(d["data"]);
    });

});

