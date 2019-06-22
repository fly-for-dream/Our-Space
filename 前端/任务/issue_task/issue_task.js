function setTask() {
	
	if(getSession("isLogin")!=1){
		alert("请先登录");
		window.location.href="../../index/index.html";
	}

	var title = $("#titletext").val();
	var text = $("#inputtext").val();
	var userid = getSession("user_id_login");
	var money = $("#moneytext").val();
	//请求接口

	var type = $('#select option:selected').val();

	var endtime = "2019-08-22 21:38:13";
	var url = "/task/publishTask";
	var data = {
		"user":userid,
		"type":type,
		"title":title,
		"status":1,
		"money":money,
		"info":text,
		"endtime":endtime
	}

	globalPost(url,data,function (res) {
		if(res["code"]==200){
			alert(res["message"]);
			window.location.href="../task.html";
		}
		else{
			alert(res["message"]);
		}
		// body...
	})

}

