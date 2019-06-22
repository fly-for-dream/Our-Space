$().ready(function () {
	var login = getSession("isLogin");
	if(login!=1){
		alert("请先登录");
		window.location.href="../../index/index.html";
	}
	var userid = getSession("usri_id_login");
	// body...

	
})