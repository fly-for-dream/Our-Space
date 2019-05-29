document.write("<script type='text/javascript' src='../../usefulFunction.js'></script>");
document.write("<script type='text/javascript' src='../../dataExamples.js'></script>");

function addNewPostElement(data) {
    for (let i=0; i<data.length; ++i)
        $("#newpost").append(get_Element_2(data[i]));
}

function addQuestionAnswerElement(data) {
    for (let i=0; i<data.length; ++i)
        $("#question_answer").append(get_Element_2(data[i]));
}

function addEssenceElement(data) {
    for (let i=0; i<data.length; ++i)
        $("#essence").append(get_Element_2(data[i]));
}

function showRankName(data) {
    for (let i=0; i<10; ++i)
        $(".rank_num").children("a").eq(i).text(/*data[i].name*/data[i]);
}

function showNewPostElement(){
    const t = $("#newpost").children(".hote");
    for (let i=0; i<t.length; ++i)
        t.eq(i).delay(i*300).fadeIn(1500);
}

function showQuestionAnswerElement(){
    const t = $("#question_answer").children(".hote");
    for (let i=0; i<t.length; ++i)
        t.eq(i).delay(i*300).fadeIn(1500);
}

function showEssenceElement(){
    const t = $("#essence").children(".hote");
    for (let i=0; i<t.length; ++i)
        t.eq(i).delay(i*300).fadeIn(1500);
}

$(document).ready(function () {
    addNewPostElement(data);
    addQuestionAnswerElement(data);
    addEssenceElement(data);

    showRankName(nam);

    showNewPostElement();
    showQuestionAnswerElement();
    showEssenceElement();

});

$(function () {
    $('#myTab li:eq(0) a').tab('show');
});
