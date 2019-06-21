
var map = {};	
$(function () {
    $('#myTab li:eq(0) a').tab('show');
});

$().ready(function() {
	map = UrlSearch();
	var flag = true;
	var id = "";
	var userid =map["userid"];
	if(userid==null)
		userid = getSession("userid");
	if(userid == getSession("userid")){
		console.log("222");
		id = getSession("userid");
	}
	else {
		id = userid;
		flag = false;
	}
	getUserInfo(id);
	getPostsInfo(id);
	getReply(id);

	if(flag ==false){
		$("#ctluser").attr("style","display:none");
		$("#ctlposts").attr("style","display:none");
	}

})


function getReply(userid) {
	var url = "/user/getReply";
	var data = {
		"userid":userid,
		"pageNum":"0"
	}

	globalPost(url,data,function (res) {
		if(res["code"]==200){
			var list = res["data"];
			for(var i=0;i<list.length;i++){
				console.log(list[i])
				var postsid = list[i].id;
				var info = list[i].info;
				var time = list[i].creattime.slice(0,9);

				var htmlc = "<div ><img class= \"u678\" src=\"../index/images_index/u678.png\" alt=\"图标\"></div>"+"<div class=\"post_width\"><div class=\"post1\"><a href=\"#\" ><p><span>"+
				info
				+"</span></p></a></div><div class=\"post1_reply_num\"><p><span>"+
				postsid
				+"</span></p></div></div><div class=\"post_width\"><div class=\"post1_time\"><p><span></span></p></div><div class=\"post1_browse_num\"><p><span>"+
				time
				+"</span></p></div></div>";

				$("#_reply").append(htmlc);

			}
		}
		else{
			console.log(res["message"]);
		}
	})

}

function getUserInfo(userid) {
	var data = {
		"id":userid
	}
	var url = "/user/getUserInfo";
	globalPost(url,data,function(res) {
		if(res["code"]==200){
			var list = res["data"];
			console.log(list);
			var name = list.name;
			var sex = list.name==0?"女":"男";
			var str = (list.birth);
			var birth = str.slice(0, 9);
			console.log(birth)
			var city = list.city;
			var signa = list.signature;
			var register = list.creattime.slice(0,9);
			var power = list.power==0?"管理员":list.power==1?"教师":"学生";
			console.log(name)
			$("#bigname").text(name) ;
			$("#name").text(name) ;
			$("#sex").text(sex) ;
			$("#birth").text(birth) ;
			$("#city").text(city) ;
			$("#power").text(power) ;
			$("#signa").text(signa);
			$("#register").append(register) ;
			$("#icon").attr("src",globalHost+"/user/getImage?id="+list.id);
		}	$("#icon").attr("style","width:100%;height:100%");
	})
}


function getPostsInfo(userid) {
	var data = {
		"userid":userid,
		"pageNum":"0"
	}

	var url = "/user/getPosts";

	globalPost(url,data,function (res) {
		if(res["code"]==200){
			var list = res["data"];
			for (var i = 0; i < list.length; i++) {
				var title = list[i].title;
				var number = list[i].number;
				var time = list[i].creattime.slice(0,9);
				var read = list[i].readnum;

				var str = "<div ><img class= \"u678\" src=\"../index/images_index/u678.png\" alt=\"图标\"></div><div class=\"post_width\"><div class=\"post1\"><a href=\"#\" ><p><span>"+
				title
				+"</span></p></a></div><div class=\"post1_reply_num\"><p><span>"+
				number
				+"</span></p></div></div><div class=\"post_width\"><div class=\"post1_time\"><p><span>"+
				time
				+"</span></p></div><div class=\"post1_browse_num\"><p><span>"+
				read
				+"</span></p></div></div>";
				$("#_theme").append(str);
			}
		}
		else{
			console.log(res["message"]);
		}
		
	})
	
}


