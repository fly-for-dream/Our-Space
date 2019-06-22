$().ready(function () {
	if(getSession("isLogin")==1){
		$("#islogin1").attr("onclick",'top.location.href="../personal_information/information.html"');
		$("#notlogin1").attr("hidden","hidden");
	$("#notlogin2").attr("hidden","hidden");
	$("#islogin1").removeAttr("hidden");
	$("#islogin2").removeAttr("hidden");
	}
})


function searh() {
	// search_word=$("#_search_word").val();
	let s=$("#_search_word").val();
	if (s==="") {
		alert("请输入搜索内容!!!");
		return;
	}
	setSession("search_word",s);
	// document.writeln(search_word);
	// console.log(search_word);
	top.location.href = "../search/search.html?page=1";
}


function exitLogin() {
	alert("已退出！！");
	// removeSession("isLogin");
	// removeSession("user_name_login");
	// removeSession("user_id_login");
	clearSession();
	$("#islogin1").attr("hidden","hidden");
	$("#islogin2").attr("hidden","hidden");
	$("#notlogin1").removeAttr("hidden");
	$("#notlogin2").removeAttr("hidden");
	top.location.href="../index/index.html";
	// alert("tuichu");
	// window.location.reload();
}

function gotoPer() {
	console.log(getSession("user_id_login"))
	top.location.href="../personal_information/personal_information.html?userid="+getSession["user_id_login"];
}