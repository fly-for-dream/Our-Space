document.write("<script type='text/javascript' src='../../usefulFunction.js'></script>");
document.write("<script type='text/javascript' src='../../dataExamples.js'></script>");
document.write("<script type='text/javascript' src='../../constAPI.js'></script>");

function return_homepage() {
    //window.location.href="../index.html";
}

function Register() {
    let name=$("#_user_name_id").val();
    let s=$("#_mima_id").val();
    let s2=$("#_mima_id2").val();
    // document.writeln(s);
    // document.writeln(s2);
    // document.writeln(name);

    if (name==="") {
        alert("用户名不能为空!!");
        return;
    }

    if (s !==s2 ) {
        alert("两次密码不匹配！请重新输入！");
        return;
    }

    globalPost("/login/register",{"name":name, "pwd": s},function (d) {

        console.log(d);

        if (d["code"]===200) {
            alert("注册成功!!!");
        } else alert("注册失败!!!");
    })

}


