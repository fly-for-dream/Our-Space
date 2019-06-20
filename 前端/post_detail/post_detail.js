document.write("<script type='text/javascript' src='../usefulFunction.js'></script>");
document.write("<script type='text/javascript' src='../dataExamples.js'></script>");

let pagenum=1;
let page_url="post_detail.html?id="+idnum+"&page=";

$(document).ready(function () {

});

$(document).load(function () {
    pagenum=1;
});

function go_next() {
    pagenum++;
    window.location.href=page_url+pagenum;
}

function go_prec() {
    if (pagenum>1) pagenum--;
    window.location.href=page_url+pagenum;
}