function submit_comment() {
    var name = $("#comment_name").val();
    var comment = $("#comment_area").val();
    if (comment=="" || name=="") {
        alert("Please check that you have filled both the name and comment boxes.");
    }
    else {
        $("#comment_list").append("<p><b>" + name + "</b> said: " + comment + "</p>")
    }
}

function setup() {
    $("#comment_ok").click(submit_comment)
}

$(document).ready(setup);
