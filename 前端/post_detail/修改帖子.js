document.write("<script type='text/javascript' src='../usefulFunction.js'></script>");
document.write("<script type='text/javascript' src='../dataExamples.js'></script>");
document.write("<script type='text/javascript' src='../constAPI.js'></script>");

$(document).ready(function () {

    let type=get_url_parameter("type");
    alert(type);
    $("#_type_id").text(type);

    let title=getSession("tmp_title");
    alert(title);
    removeSession("tmp_title");
    $("#_title_id").text(title);

    let content=getSession("tmp_content");
    removeSession("tmp_content");
    alert(content);
    $("#_content_id").text(content);

    let url=getSession("tmp_url");
    alert(url);
    removeSession("tmp_url");
    $("#_return_href").attr("href",url);

});


