document.write("<script type='text/javascript' src='../../usefulFunction.js'></script>");
document.write("<script type='text/javascript' src='../../dataExamples.js'></script>");

function addNewPostElement(data) {
    for (let i=0; i<data.length; ++i)
        $("#newpost").append(get_HotElement_B(data[i]));
}

function addQuestionAnswerElement(data) {
    for (let i=0; i<data.length; ++i)
        $("#question_answer").append(get_HotElement_B(data[i]));
}

function addEssenceElement(data) {
    for (let i=0; i<data.length; ++i)
        $("#essence").append(get_HotElement_B(data[i]));
}

function showRankName(data) {
    for (let i=0; i<10; ++i)
        $(".rank_num").children("a").eq(i).text(/*data[i].name*/data[i]);
}

function showNewPostElement(){
    const t = $("#newpost").children(".hote");
    for (let i=0; i<t.length; ++i)
        t.eq(i).css("display","none");
    for (let i=0; i<t.length; ++i)
        t.eq(i).delay(i*300).fadeIn(1500);
}

function showQuestionAnswerElement(){
    const t = $("#question_answer").children(".hote");
    for (let i=0; i<t.length; ++i)
        t.eq(i).css("display","none");
    for (let i=0; i<t.length; ++i)
        t.eq(i).delay(i*300).fadeIn(1500);
}

function showEssenceElement(){
    const t = $("#essence").children(".hote");
    for (let i=0; i<t.length; ++i)
        t.eq(i).css("display","none");
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

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        const t=e.target.getAttribute("href");
        if (t === "#newpost") showNewPostElement();
        if (t === "#question_answer") showQuestionAnswerElement();
        if (t === "#essence") showEssenceElement();
    })
});

$(function () {
    $('#myTab li:eq(0) a').tab('show');
});
