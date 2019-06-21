
$(function () {
    $('#myTab li:eq(0) a').tab('show');
});

$().ready(function () {

	var isLogin = getSession("isLogin");
	if(isLogin!=1){
		alert("请先登录");
		console.log(isLogin)
		window.location.href="../index/index.html"
	}

	var userid = getSession("user_id_login");
	var num = 0;
	addTap(1,num);
	addTap(2,num);
	addTap(3,num);
	addTap(4,num);
})

function addTap(type,num) {
	var url = "/task/getTaskList";

	var data ={
		"sorttype":type,
		"pageNumber":num
	}

	globalGet(url,data,function (res) {
		if(res["code"]==200){
			var htmlc="";
			var list = res["data"]
			for (var i = 0; i < list.length; i++) {
				var task = list[i];
				var name = task.title;
				var money = task.money;
				var info = task.info;
				var time = task.creattime.slice(0, 9);
				var endtime = task.endtime.slice(0, 9);
				var str = "<table class=\"table table-bordered\"><tbody ><tr ><th class=\"first_task\">"+"任务名"
				+"</th><th class=\"first_task\">积分</th><th class=\"first_task_name\">"+
				time
				+"<div class=\"_button\"><button"+"id=\""+task.id+"\""+
				" type=\"button\" class=\"btn btn-outline-success\" onlick='gettask(this.id)'>"+
				"领取任务"
				+"</button></div></th></tr><tr><th class=\"first_task\">"+
				name
				+"</th><th class=\"first_task\">"+
				money
				+"</th><th class=\"first_task_name\">"+
				info
				+"</th></tr></tbody></table>";
				htmlc += str;

			}
			if(type==1){
					$("#new_task").html(htmlc);
				}

				else if(type==2){
					$("#hot_task").html(htmlc);
				}

				else if (type==3) {
					$("#pay_task").html(htmlc);
				}	

				else if (type==4) {
					$("#system_task").html(htmlc);
				}

		}
	})

}


function gettask(argument) {
	console.log(argument)
}