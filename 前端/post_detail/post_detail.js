document.write("<script type='text/javascript' src='../usefulFunction.js'></script>");
document.write("<script type='text/javascript' src='../dataExamples.js'></script>");

var pagenum=1;
let page_url;

$(document).ready(function () {
    page_url=window.location.href.toString();
});

function change(s,x) {
    let t=s.lastIndexOf('=');
    return s.substring(0,t+1)+x;
}

function getpage(s) {
    let t=s.lastIndexOf('=');
    return s.substring(t+1,t.length);
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