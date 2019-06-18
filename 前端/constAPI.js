const errorResult = {
	"code": "403",
	"message": "请求失败",
	"data": ""
};

//服务器地址
// var globalHost = "http://localhost:8080";
const globalHost = "http://129.211.65.94:8080/forum";


//url：地址，data：表单数据,如:data={"id":123456,"name":name}
//Post请求，返回一个封装好的data，格式同上的errorResult
function globalPost(url,data,callback) {
	url = globalHost + url;
	$.ajax({
		url:url,
		type:"post",
		data:data,
		timeout:30000,
		success:function(msg){
			console.log(msg);
			callback(msg);
		},
		error:function(res){
			console.log(res);
			callback(errorResult);
		}
	});
}

//url：地址，data：表单数据,回调函数
//Get请求，返回一个封装好的data
function globalGet(url,data,callback) {
	url = globalHost + url;
	$.ajax({
		url:url,
		type:"get",
		data:data,
		timeout:30000,
		success:function(msg){
			console.log(msg);
			callback(msg);
		},
		error:function(res){
			console.log(res);
			callback(errorResult);
		}
	});

}

//检测是否登录
//返回true或false
function globalIsLogin(callback){
	const url = globalHost + "/check/isLogin";
	$.ajax({
		url:url,
		type:"get",
		timeout:30000,
		success:function(msg){
			callback(msg);
		},
		error:function(res){
			callback(errorResult);
		}
	});
}



