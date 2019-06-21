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


//解析url地址
//返回参数键值对地址
function UrlSearch() {
  var map =[];
   var name,value;
   var str=location.href; //取得整个地址栏
   var num=str.indexOf("?")
   str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]

   var arr=str.split("&"); //各个参数放到数组里
    console.log(arr);
   for(var i=0;i < arr.length;i++){
        num=arr[i].indexOf("=");
        if(num>0){
             name=arr[i].substring(0,num);
             value=arr[i].substr(num+1);
             
             map[name] = value;
        }
   }
   return map;
}


