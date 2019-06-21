document.write("<script type='text/javascript' src='../../usefulFunction.js'></script>");
document.write("<script type='text/javascript' src='../../dataExamples.js'></script>");
document.write("<script type='text/javascript' src='../../constAPI.js'></script>");

function return_homepage() {
    window.location.href="../index.html";
}

function try_to_login() {
    let name=$("#_user_name_id").text();
    if (name==="") {
        alert("用户名不能为空!!");
        return;
    }

    let s=$("#_mima_id").text();

    globalPost("/login/login",{"name":name, "pwd": s},function (d) {
        if (d["code"]===200) {
            alert("登录成功!!!");
        } else {
            alert("登录失败!!!可能是用户名密码不匹配!!");
            return;
        }
        setSession("user_name_login",name);
        setSession("user_id_login",d["data"]["userid"]);
        setSession("isLogin",1);

        return_homepage();
    })
}
