function init() {
	$("#hotpostsbody").empty();
	var url = "/index/getPostsList";
	globalGet(url,"",function(res) {
		var list = res.data;
		for(var i =0;i<10;i++){
			var html = 
			"<div class='post_width'><div class='post1'><a href='#'' ><p><span>"
			+list[i].title+":"+list[i].info+
			"</span></p></a></div><div class='post1_reply_num'><p><span>"
			+"帖子分类"+list[i].type+
			"</span></p></div><div class='post_width'><div class='post1_time'><p><span>"
			+list[i].creattime+
			"</span></p></div><div class='post1_browse_num'><p><span>"
			+"浏览数"+list[i].remark+
			"</span></p></div></div><div ><img class= 'u75' src='images_index/u75.png' alt='图标'></div>";
			$("#hotpostsbody").append(html);
		}
	})

function getRank() {
	var url = "/index/getRank";
	globalGet(url,"",function (res) {
		var list = res.data;
		for(var i = 0, length1 = list.length; i < length1; i++){
			$("rank").append(list[i].name);
		}
	});
}

