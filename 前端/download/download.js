$().ready(function () {
	
	var list = ["html","c","css","java","http","js","py","php","csharp","c++"];
	addTap(list[0],"#Html");
	addTap(list[1],"#c");
	addTap(list[2],"#css");
	addTap(list[3],"#java");
	addTap(list[4],"#http");
	addTap(list[5],"#js");
	addTap(list[6],"#py");
	addTap(list[7],"#php");
	addTap(list[8],"#csharp");
	addTap(list[9],"#c++");
});


function addTap(type,name) {
	globalGet("/download/getDownList",{"type":type},function(res) {
			if(res["code"]==200){
				var downlist = res["data"];
				for (var i = 0; i < downlist.length; i++) {
					var vname = downlist[i].name;
					console.log(vname)
					var id = downlist[i].id;
					var str = "<a href=\""+globalHost+"/download/down?downid="+id+"\" download><button id=\""+
					id
					+"\" class=\"btn\" >"+
					vname
					+"</button></a>";
					$(name).append(str);
				} 
			}
			else{
				console.log(res["message"]);
				alert(res["mssage"]);
				window.location.href="../index/index.html";
			}
		})
}