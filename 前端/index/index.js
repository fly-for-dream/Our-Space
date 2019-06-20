document.write("<script type='text/javascript' src='../usefulFunction.js'></script>");
document.write("<script type='text/javascript' src='../dataExamples.js'></script>");

function addHotElement(data) {
	for (let i=0; i<data.length; ++i)
		$("#hotpostsbody").append(get_HotElement_B(data[i]));
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

function searh() {
	search_word=$("#_search_word").val();
	console.log("dfs"+search_word);
	window.location.href = "../search/search.html";
}




$(document).ready(function () {
	globalGet("/index/getRank",null,function (d){
		showRankName(d["data"]);
	});
	globalGet("/index/getPostsList",null,function (d) {
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
	//GloGet("http://{{host}}/index/getRank",null,showRankName);
	// showRankName(nam);
	// addHotElement(data);
	// showHotElement();
});





// function init() {
// 	$("#hotpostsbody").empty();
// 	var url = "/index/getPostsList";
// 	globalGet(url,"",function(res) {
// 		var list = res.data;
// 		for(var i =0;i<10;i++){
// 			var html =
// 			"<div class='post_width'><div class='post1'><a href='#'' ><p><span>"
// 			+list[i].title+":"+list[i].info+
// 			"</span></p></a></div><div class='post1_reply_num'><p><span>"
// 			+"帖子分类"+list[i].type+
// 			"</span></p></div><div class='post_width'><div class='post1_time'><p><span>"
// 			+list[i].creattime+
// 			"</span></p></div><div class='post1_browse_num'><p><span>"
// 			+"浏览数"+list[i].remark+
// 			"</span></p></div></div><div ><img class= 'u75' src='images_index/u75.png' alt='图标'></div>";
// 			$("#hotpostsbody").append(html);
// 		}
// 	})
//
// function getRank() {
// 	var url = "/index/getRank";
// 	globalGet(url,"",function (res) {
// 		var list = res.data;
// 		for(var i = 0, length1 = list.length; i < length1; i++){
// 			$("rank").append(list[i].name);
// 		}
// 	});
// }
//
