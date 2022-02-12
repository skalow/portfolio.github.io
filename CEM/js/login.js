$(document).ready(function () {
    $("#pnlIz").click(function () {
        if ($(this).hasClass("activo")) {
            $(this).removeClass("activo");
            $("#panel").removeClass("activo");
        }
        else {
            $(this).addClass("activo");
            $("#panel").addClass("activo");
        }
    });
});