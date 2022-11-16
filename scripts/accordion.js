// Code to make answer appear when question is clicked

$("#q1").click(function () {
    $("#q1-1").removeClass("hidden");
    $("#a1").removeClass("hidden");
    $("#q1").addClass("hidden");
});

$("#q2").click(function () {
    $("#q2-1").removeClass("hidden");
    $("#a2").removeClass("hidden");
    $("#q2").addClass("hidden");
});

$("#q3").click(function () {
    $("#q3-1").removeClass("hidden");
    $("#a3").removeClass("hidden");
    $("#q3").addClass("hidden");
});

$("#q4").click(function () {
    $("#q4-1").removeClass("hidden");
    $("#a4").removeClass("hidden");
    $("#q4").addClass("hidden");
});

// Code to make answer disappear when question is clicked again

$("#q1-1").click(function () {
    $("#q1-1").addClass("hidden");
    $("#a1").addClass("hidden");
    $("#q1").removeClass("hidden");
});

$("#q2-1").click(function () {
    $("#q2-1").addClass("hidden");
    $("#a2").addClass("hidden");
    $("#q2").removeClass("hidden");
});

$("#q3-1").click(function () {
    $("#q3-1").addClass("hidden");
    $("#a3").addClass("hidden");
    $("#q3").removeClass("hidden");
});

$("#q4-1").click(function () {
    $("#q4-1").addClass("hidden");
    $("#a4").addClass("hidden");
    $("#q4").removeClass("hidden");
});
