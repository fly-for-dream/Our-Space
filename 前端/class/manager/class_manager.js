document.write("<script type='text/javascript' src='../../usefulFunction.js'></script>");
document.write("<script type='text/javascript' src='../../dataExamples.js'></script>");
document.write("<script type='text/javascript' src='../../constAPI.js'></script>");


function get_stu_item(e) {
    return '<tr class="_stu_list_item_class">\
        <td>'+e["name"]+'</td>\
        <td>'+e["sex"]+'</td>\
        <td>'+e["city"]+'</td>\
        <td>'+e["intro"]+'</td>\
        <td><button class="btn" onclick="dele_stu()">删除学生</button></td>\
    </tr>';

}



function dele_stu() {
    let isTeacher=getSession("isTeacher");
    if (isTeacher===undefined) isTeacher=0;
    if (!isTeacher) {
        alert("您不是老师，或者无此权限！！！");
        return;
    }
    let id=$(this).parent().parent().children("td").eq(0).text();
    alert(id);
    globalPost("/class/deleteClassMember",{
        "id":id
    },function (d) {
        if (d["code"]===200) {
            $(this).parent().parent().remove();
            alert("删除成功!!!");
        }
    });
}

function show_class_info_content(u) {
    // $("#_t1_id").text("软件工程");
    $("#_t2_id").text(u["teacher"]);
    $("#_t3_id").text(u["info"]);
    $("#_t4_id").text(u["operator"]);
    $("#_t5_id").text(u["creattime"]);
    $("#_t6_id").text(u["updatetime"]);
}

function get_class_info() {
    let id=getSession("user_id_login");
    alert(id);
    globalGet("/class/getClassInfo",{
        "id":id
    },function (d) {
        if (d["code"]===200) {
            let e=d["data"];
            let u={
                "info":e["info"],
                "operator":e["operator"],
                "creattime":e["creattime"],
                "updatetime":e["updatetime"],
                "teacher":e["teacher"]
            };
            show_class_info_content(u);
        }
    });
}



function get_stu_list() {
    let id2=getSession("class_id");
    alert(id2);
    let pageNumber2=0;
    globalGet("/class/getStudentList",{
        "id":id2,
        "pageNumber":pageNumber2
    },function (d) {
        if (d["code"]===200) {
            let e=d["data"];
            for (let i=0; i<e.length; i++) {
                let u=e[i];
                let sex=u["sex"];
                if (sex===0) sex="女"; else sex="男";
                let tt={
                    "name":u["name"],
                    "sex":sex,
                    "city":u["city"],
                    "intro":u["signature"]
                };
                $("#_tbody_id").append(get_stu_item(tt));
            }
        }
    });
}


function add_stu() {
    let name=getSession("name");
    let city=getSession("city");
    let sex=getSession("sex");
    let intro=getSession("intro");
    if (sex===0) sex="女"; else sex="男";


    // globalGet("/class/addStudent",{
    //     "classid":classid,
    //     "user":user,
    //     "operator":operator,
    //     "Remark":Remark
    // },function (d) {
    //     if (d["code"]===200) {
    //
    //     }
    // });


    let e={
        "name":name,
        "city":city,
        "intro":intro,
        "sex":sex
    };
    let s=get_stu_item(e);
    $("#_tbody_id").append(s);


}


function show_stu_list() {
    get_stu_list();
}

function show_class_info() {
    get_class_info();
}

function goto_add() {
    let tt=getSession("isTeacher");
    if (tt===undefined) tt=0;
    if (!tt) {
        alert("您不是老师，或者无此权限！！");
        return;
    }
    setSession("tmp_url",window.location.href);
    window.location.href="../add_stu.html";
}

$(document).ready(function () {

    let isLogin=getSession("isLogin");
    if (isLogin===undefined) isLogin=0;
    if (!isLogin) {
        alert("请先登录!!!");
        window.location.href="../../index/index.html";
    }
    show_stu_list();
    show_class_info();

    let isAdd=getSession("isAdd");
    alert(isAdd);
    if (isAdd===undefined) isAdd=0;
    if (isAdd===1) {
        removeSession("isAdd");
        add_stu();
    }

});




