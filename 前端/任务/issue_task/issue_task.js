function setTask() {
	
	if(getSession("isLogin")!=1){
		alert("请先登录");
		window.location.href="../../index/index.html";
	}

	var title = $("#titletext").val();
	var text = $("#inputtext").val();
	var userid = getSession("user_id_login");

	console.log(userid)
	console.log(title);
	console.log(text);

}