document.write("<script type='text/javascript' src='../../usefulFunction.js'></script>");
document.write("<script type='text/javascript' src='../../dataExamples.js'></script>");
document.write("<script type='text/javascript' src='../../constAPI.js'></script>");


function dele_stu() {
    let id="";
    globalPost("/class/deleteClassMember",{
        "id":id
    },function (d) {
        if (d["code"]===200) {

        }
    });
}

function get_class_info() {
    let id="";
    let pageNumber="";
    globalGet("/class/getClassInfo",{
        "id":id,
        "pageNumber":pageNumber
    },function (d) {
        if (d["code"]===200) {

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

        }
    });
}


function add_stu() {
    let classid="";
    let user="";
    let operator="";
    let Remark="";
    globalGet("/class/addStudent",{
        "classid":classid,
        "user":user,
        "operator":operator,
        "Remark":Remark
    },function (d) {
        if (d["code"]===200) {

        }
    });
}


$(document).ready(function () {



});




