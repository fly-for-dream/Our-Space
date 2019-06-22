document.write("<script type='text/javascript' src='../../usefulFunction.js'></script>");
document.write("<script type='text/javascript' src='../../dataExamples.js'></script>");
document.write("<script type='text/javascript' src='../../constAPI.js'></script>");

function return_homepage() {
    window.location.href="../index.html";
}

function try_to_login() {
    let userid;
    let name=$("#_user_name_id").val().trim();
    let s=$("#_mima_id").val().trim();

    // document.writeln(s);
    // document.writeln(name);

    // alert(name);
    // alert(s);

    if (name==="") {
        alert("用户名不能为空!!");
        return;
    }

    globalPost("/login/login",{"name":name, "pwd": s},function (d) {

        // document.writeln(d);
        // document.writeln(2333);
        // document.writeln(d["code"]);

        if (d["code"]===200) {
            alert("登录成功!!!");
            userid=d["data"];
            setSession("user_name_login",name);
            setSession("user_id_login",d["data"]);
            setSession("isLogin",1);


        } else {
            alert("登录失败!!!可能是用户名密码不匹配!!");
            return;
        }

        globalGet("/login/isTeacher",{"name":name}, function (d) {
            if (d["code"]===200 && d["data"]) {
                setSession("isTeacher",1);
            } else {
                setSession("isTeacher",0);
            }

            globalGet("/login/isAdmin",{"name":name}, function (d) {
                if (d["code"]===200 && d["data"]) {
                    setSession("isAdmin",1);
                    setSession("isTeacher",1);
                } else {
                    setSession("isAdmin",0);
                }
            });



        });

        globalPost("/class/getClassInfoByUser",{
            "userid": userid
        },function (d) {
            if (d["code"===200]) {
                let e=d["data"];
                let class_id=e["id"];
                setSession("class_id",class_id);
            }
        });

        return_homepage();
    })
}
