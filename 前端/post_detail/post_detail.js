let pagenum=1;
let page_url="post_detail.html?id=";

$(document).ready(function () {

});

$(document).load(function () {
    
});

function go_next() {
    pagenum++;
    window.location.href=page_url+pagenum;
}

function go_prec() {
    if (pagenum>1) pagenum--;
    window.location.href=page_url+pagenum;
}