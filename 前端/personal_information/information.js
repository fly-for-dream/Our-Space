
var map = {};	
$(function () {
    $('#myTab li:eq(0) a').tab('show');
});

function load() {
	map = UrlSearch();
	console.log(map);
	

}

