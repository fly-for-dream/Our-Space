$().ready(function () {
	
	var userid = getSession("user_id_login");

	globalPost("/task/myTask",{"user":userid,"pageNumber":0},function (res) {
		if(res["code"]==200){
			var list = res["data"];
			for (var i = 0; i < list.length; i++) {
				task = list[i];
				var name = task.title;
				var money = task.money;
				var end = task.endtime.slice(0, 9);
				var time = task.creattime.slice(0,9);

				var str = "<div class=\"one_task\"><div class=\"time_content1\">"+
				name
				+"</div><div class=\"reward_num\"><div class=\"reward\">"+
				"悬赏"+money
				+"</div><div class=\"_num1\">0</div><div class=\"people_num\">"+
				"截至："+end
				+"</div><div class=\"_num2\">3</div><div class=\"end_time\">截止日期：</div><div class=\"_time\">"+
				time
				+"</div><div class=\"recipient\"><a href=\"recipient.html?taskid="+task.id+"\">点击查看承接人</a></div></div></div>"

				$("#tasklist").append(str)

			}
		}
	})



})