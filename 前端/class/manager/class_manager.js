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
    let id="";
    globalPost("/class/deleteClassMember",{
        "id":id
    },function (d) {
        if (d["code"]===200) {
            $(this).parent().parent().remove();
        }
    });
}

function show_class_info_content(u) {
    $("#_t1_id").text(u[""]);
    $("#_t2_id").text(u[""]);
    $("#_t3_id").text(u[""]);
    $("#_t4_id").text(u[""]);
    $("#_t5_id").text(u[""]);
    $("#_t6_id").text(u[""]);
}

function get_class_info() {
    let id="";
    let pageNumber="";

    globalGet("/class/getClassInfo",{
        "id":id,
        "pageNumber":pageNumber
    },function (d) {
        if (d["code"]===200) {
            let e=d["data"];
            let u={
                "name":e["name"],
                "sex":e["sex"],
                "place":e["place"],
                "intro":e["intro"],
                "place":e["place"],
                "intro":e["intro"]
            };
            show_class_info_content(u);
        }
    });
}



function get_stu_list() {
    let id2="";
    let pageNumber2="";
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
                    "city":u["place"],
                    "intro":u["intro"]
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
    if (isAdd===undefined) isAdd=0;
    if (isAdd===1) {
        removeSession("isAdd");
        add_stu();
    }

});




