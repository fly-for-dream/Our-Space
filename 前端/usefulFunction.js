//document.write("<script type='text/javascript' src='jquerysession.js'></script>");


(function($){$.session={_id:null,_cookieCache:undefined,_init:function()
    {if(!window.name){window.name=Math.random();}
        this._id=window.name;this._initCache();var matches=(new RegExp(this._generatePrefix()+"=([^;]+);")).exec(document.cookie);if(matches&&document.location.protocol!==matches[1]){this._clearSession();for(var key in this._cookieCache){try{window.sessionStorage.setItem(key,this._cookieCache[key]);}catch(e){};}}
        document.cookie=this._generatePrefix()+"="+document.location.protocol+';path=/;expires='+(new Date((new Date).getTime()+120000)).toUTCString();},_generatePrefix:function()
    {return '__session:'+this._id+':';},_initCache:function()
    {var cookies=document.cookie.split(';');this._cookieCache={};for(var i in cookies){var kv=cookies[i].split('=');if((new RegExp(this._generatePrefix()+'.+')).test(kv[0])&&kv[1]){this._cookieCache[kv[0].split(':',3)[2]]=kv[1];}}},_setFallback:function(key,value,onceOnly)
    {var cookie=this._generatePrefix()+key+"="+value+"; path=/";if(onceOnly){cookie+="; expires="+(new Date(Date.now()+120000)).toUTCString();}
        document.cookie=cookie;this._cookieCache[key]=value;return this;},_getFallback:function(key)
    {if(!this._cookieCache){this._initCache();}
        return this._cookieCache[key];},_clearFallback:function()
    {for(var i in this._cookieCache){document.cookie=this._generatePrefix()+i+'=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';}
        this._cookieCache={};},_deleteFallback:function(key)
    {document.cookie=this._generatePrefix()+key+'=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';delete this._cookieCache[key];},get:function(key)
    {return window.sessionStorage.getItem(key)||this._getFallback(key);},set:function(key,value,onceOnly)
    {try{window.sessionStorage.setItem(key,value);}catch(e){}
        this._setFallback(key,value,onceOnly||false);return this;},'delete':function(key){return this.remove(key);},remove:function(key)
    {try{window.sessionStorage.removeItem(key);}catch(e){};this._deleteFallback(key);return this;},_clearSession:function()
    {try{window.sessionStorage.clear();}catch(e){for(var i in window.sessionStorage){window.sessionStorage.removeItem(i);}}},clear:function()
    {this._clearSession();this._clearFallback();return this;}};$.session._init();})(jQuery);



var NormalStatusCode = 200;
var user_name_login = "name";
var user_id_login = "";
var search_word="";




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
//     return "<div class = 'hote' style='display: none'>\
//     <div class='panel panel-success'>\
//         <div class='panel-heading'>\
//             <h3 class='panel-title'>帖子</h3>\
//         </div>\
//         <div class='panel-body'>\
//             <div class='post_width'>\
//                 <div class='post1'><a href='#' ><p><span style='font-size: large'>" + e.name + "</span></p></a></div>\
//                 <div class='post1_reply_num'><p><span style='font-size: large'><b>" + e.type + "</b></span></p></div>\
//             </div>\
//             <div class='post_width'>\
//                 <div class='post1_time'><p><span>"+e.time+"</span></p></div>\
//                 <div class='post1_browse_num'><p><span>" + "阅读" + e.read_num+ "/"+ "评论" +e.remark_num +"</span></p></div>\
//             </div>\
//         </div>\
//     </div>\
// </div>";


        // "<div class='container'>\
        //     <div class='card'>\
        //         <div class='card-header'>帖子</div>\
        //         <div class='card-body'>\
        //             <div class='post_width'>\
        //             <div class='post1'><a href='#' ><p><span style='font-size: large'>" + e.name + "</span></p></a></div>\
        //             <div class='post1_reply_num'><p><span style='font-size: large'><b>" + e.type + "</b></span></p></div>\
        //             </div>\
        //             <div class='post_width'>\
        //             <div class='post1_time'><p><span>"+e.time+"</span></p></div>\
        //             <div class='post1_browse_num'><p><span>" + "阅读" + e.read_num+ "/"+ "评论" +e.remark_num +"</span></p></div>\
        //             </div>\
        //         </div>\
        //     </div>\
        // </div>\"

    return "<div class='container'>\
            <div class='card'>\
                <div class='card-header'>帖子</div>\
                <div class='card-body'>\
                    <div class='post_width'>\
                    <div class='post1'><a href='../post_detail/post_detail.html?id="+e.id_num+"&page=1"+"' ><p><span style='font-size: large'>" + e.name + "</span></p></a></div>\
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



function get_HotElement_C(e) {

    return "<div class='container'>\
            <div class='card'>\
                <div class='card-header'>帖子</div>\
                <div class='card-body'>\
                    <div class='post_width'>\
                    <div class='post1'><a href='../post_detail/post_detail.html?id="+e.id_num+"&page=1"+"' ><p><span style='font-size: large'>" + e.name + "</span></p></a></div>\
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


function get_url_parameter(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null) return  unescape(r[2]);
    return null;
}

function removeSession(name) {
    $.session.remove(name);
}

function clearSession() {
    $.session.clear();
}

function getSession(name) {
    return $.session.get(name);
}

function setSession(name,value) {
    let t=getSession(name);
    if (t!==undefined) removeSession(name);
    $.session.set(name,value);
}


