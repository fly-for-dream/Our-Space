document.write("<script type='text/javascript' src='../usefulFunction.js'></script>");
document.write("<script type='text/javascript' src='../dataExamples.js'></script>");
document.write("<script type='text/javascript' src='../constAPI.js'></script>");


var pagenum=1;
var page_url;
var page_cnt;


function addHotElement(data) {
    // document.writeln(data.length);
    for (let i=0; i<data.length; ++i)
        $("#_search_tie_zi").prepend(get_HotElement_B(data[i]));
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

function get_tie_id() {
    return get_url_parameter("id");
}

function get_tie_page() {
    return get_url_parameter("page");
}

function go_next() {
    pagenum=parseInt(get_url_parameter("page"));
    if (pagenum<page_cnt) pagenum++; else alert("这已经是最后一页了！！！");
    globalGet("/posts/getSearch",{"value":search_word, "pageNum":pagenum},function (d) {
        if (d["code"] !== 200) {
            if (d["data"].length!==0) pagenum++; else alert("这已经是最后一页了！！！");
        }
    });
    window.location.href=change(page_url, pagenum);
}

function go_prec() {
    pagenum=parseInt(get_url_parameter("page"));
    if (pagenum>1) pagenum--; else alert("这已经是第一页了！！！");
    window.location.href=change(page_url, pagenum);
}

$(document).ready(function () {

    page_cnt=1;
    page_url=window.location.href.toString();

    globalGet("/index/getRank",null,function (d){
        showRankName(d["data"]);
    });

    let search_word=getSession("search_word");
    // document.writeln(search_word);
    // removeSession("search_word");
    // document.writeln(get_url_parameter("page"));
    // document.writeln(search_word);

    let now_page=parseInt(get_url_parameter("page"))-1;

    $("#_current_page_id").text("当前页码："+(now_page+1));

    alert(now_page);
    alert(search_word);


    globalGet("/posts/getSearch",{"value":search_word, "pageNum":now_page},function (d) {
        if (d["code"]!==200) {
            alert("搜索结果为空！");
            return;
        }
        const tmp=d["data"];
        page_cnt=Math.ceil((tmp.length)/15);
        // document.writeln(tmp.length);
        alert(tmp.length);
        const data=[];
        for (let i=0; i<tmp.length; i++) {
            const b=tmp[i];
            let e={
                "name": b["title"],
                "type": b["type"],
                "time": b["updatetime"],
                "read_num": b["readnum"],
                "remark_num": b["number"],
                "id_num" : b["id"]
            };
            data.push(e);
        }
        // for (let i=0; i<data.length; i++) document.writeln(data[i].read_num);
        addHotElement(data);
        showHotElement();
    });

});

