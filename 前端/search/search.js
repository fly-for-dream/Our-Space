document.write("<script type='text/javascript' src='../usefulFunction.js'></script>");
document.write("<script type='text/javascript' src='../dataExamples.js'></script>");
document.write("<script type='text/javascript' src='../constAPI.js'></script>");

var pagenum=1;
var page_url;
var pae_cnt;


function addHotElement(data) {
    for (let i=0; i<data.length; ++i)
        $("#_search_tie_zi").append(get_HotElement_B(data[i]));
}

function showRankName(data) {
    for (let i=0; i<Math.min(data.length,10); ++i) {
        $(".rank_num").children("a").eq(i).text(/*data[i].name*/data[i].name);
    }
}

function showHotElement(){
    const t = $(".hote");
    for (let i=0; i<t.length; ++i)
        t.eq(i).delay(i*300).fadeIn(1500);
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

    document.writeln(search_word+111);
    globalGet("/posts/getSearch",{"value":search_word, "pageNum":get_url_parameter("page")},function (d) {
        document.writeln(get_url_parameter("page"));
        document.writeln(search_word+111);
        if (d["code"]!==200) {
            alert("搜索结果为空！");
            return;
        }
        const tmp=d["data"];
        const data=[];
        for (let i=0; i<tmp.length; i++) {
            const b=tmp[i];
            let e={
                "name": b["title"],
                "type": b["type"],
                "time": b["updatetime"],
                "read_num": b["remark"],
                "remark_num": 250,
                "id_num" : b["id"]
            };
            data.push(e);
        }
        // for (let i=0; i<data.length; i++) document.writeln(data[i].read_num);
        addHotElement(data);
        showHotElement();
    });

});

