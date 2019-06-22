document.write("<script type='text/javascript' src='../usefulFunction.js'></script>");
document.write("<script type='text/javascript' src='../dataExamples.js'></script>");
document.write("<script type='text/javascript' src='../constAPI.js'></script>");


function return_last() {
    let url=getSession("tmp_url");
    removeSession("tmp_url");
    window.location.href=url;
}

function add() {
    let name=$("#_name_id").val();
    let city=$("#_city_id").val();
    let intro=$("#_intro_id").val();
    let sex=$("#sex").val();
    if (sex!="男" && sex!="女") {
        alert("性别非男即女!!");
        return;
    }
    if (sex==="男") sex=1; else sex=0;
    setSession("name",name);
    setSession("city",city)
    setSession("intro",intro);
    setSession("sex",sex);
    setSession("isAdd",1);
    alert("添加成功");
    alert(getSession("isAdd"));
    return_last();
}


