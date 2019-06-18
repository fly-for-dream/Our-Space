var NormalStatusCode = 200;

/**
 * @return {boolean}
 */
function CheckCode(res) {
    if (res.code === NormalStatusCode) {
        console.log("成功");
        return true;
    } else {
        console.log(res.message);
        return false;
    }
}

function GloGet(url, data, f) {
    globalGet(url,data,function (res) {
        if (CheckCode(res)) {
            f(res.data);
        }
    });
}

function get_HotElement(e) {
    return "<div class = \"hote\" style='display: none'><div class=\"post_width\"> \
            <div class=\"post1\"><a href=\"#\" ><p><span style='font-size: large'><b>" + e.name + "</b></span></p></a></div> \
            <div class=\"post1_reply_num\"><p><span style='font-size: large'><b><i>" + e.type + "</i>></b></span></p></div> \
            </div> \
            <div class=\"post_width\"> \
                <div class=\"post1_time\"><p><span>" + e.time + "</span></p></div> \
            <div class=\"post1_browse_num\"><p><span>阅读" + e.read_num+'/评论'+ e.remark_num + "</span></p></div> \
            </div> \
            <div ><img class= \"u75\" src=\"images_index/u75.png\" alt=\"图标\"></div> </div>";
}

function get_Element_2(e) {
    return "<div class = \"hote\" style='display: none'><div class=\"post_width\"> \
            <div class=\"post1\"><a href=\"#\" ><p><span style='font-size: large'><b>" + e.name + "</b></span></p></a></div> \
            <div class=\"post1_reply_num\"><p><span style='font-size: large'><b><i>" + e.type + "</i>></b></span></p></div> \
            </div> \
            <div class=\"post_width\"> \
                <div class=\"post1_time\"><p><span>" + e.time + "</span></p></div> \
            <div class=\"post1_browse_num\"><p><span>阅读" + e.read_num+'/评论'+ e.remark_num + "</span></p></div> \
            </div> \
            <div ><img class= \"u75\" src=\"../../index/images_index/u75.png\" alt=\"图标\"></div> </div>";
}

function get_HotElement_B(e) {
    return "<div class = 'hote' style='display: none'>\
    <div class='panel panel-success'>\
        <div class='panel-heading'>\
            <h3 class='panel-title'>帖子</h3>\
        </div>\
        <div class='panel-body'>\
            <div class='post_width'>\
                <div class='post1'><a href='#' ><p><span style='font-size: large'>" + e.name + "</span></p></a></div>\
                <div class='post1_reply_num'><p><span style='font-size: large'><b>" + e.type + "</b></span></p></div>\
            </div>\
            <div class='post_width'>\
                <div class='post1_time'><p><span>"+e.time+"</span></p></div>\
                <div class='post1_browse_num'><p><span>" + "阅读" + e.read_num+ "/"+ "评论" +e.remark_num +"</span></p></div>\
            </div>\
        </div>\
    </div>\
</div>";
}

function include(s, k) {
    let t = s;
    for (let i=0; i<k; ++i) t+='../';
    document.write("<script type='text/javascript' src="+ t +"></script>");
}
