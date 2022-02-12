let blanco = "css/monitoreoblanco.css";

$(document).ready(function () {
    $("#burguer").click(function () {
        if ($(this).hasClass("activo")) {
            $("#panel-izq").removeClass("activo");
            $("#wrapp-panel").removeClass("activo");
            $("#burguer").removeClass("activo");
        }
        else {
            $("#panel-izq").addClass("activo");
            $("#wrapp-panel").addClass("activo");
            $("#burguer").addClass("activo");
        }
    });
});

$("#btn-flip").click(function () {
    setTimeout(function () {
        $("#grafica").removeClass("flipInY");
    }, 1000);
    $("#grafica").addClass("flipInY");
});
$("#btn-flip-2").click(function () {
    setTimeout(function () {
        $("#tabla-mon").removeClass("flipInY");
    }, 1000);
    $("#tabla-mon").addClass("flipInY");
});
$("#switch-color").click(function () {
    if ($("#switch-color").hasClass('FdBlanco')) {
        $("#switch-color").removeClass('FdBlanco');
        $("#estilo").attr("href", "css/monitoreo.css");
    } else {
        $("#switch-color").addClass('FdBlanco');
        $("#estilo").attr("href", "css/monitoreoblanco.css");//otr
    }
});
// ---- �ste m�todo hace scroll horizontal----
$(function () {
    $(".scroll-horizontal").mousewheel(function (event, delta) {
        this.scrollLeft -= (delta * 95);
        this.scrollRight -= (delta * 50);
        this.style.transition = '1s';
        event.preventDefault();
    });
});

//interacciones de tablero operativo
$("#close-right-tab").click(function () {
    $("#tabla-operativa").removeClass("col-sm-6");
    $("#tabla-operativa").addClass("col-sm-12");
    $("#tabla-alertas").addClass("ocultar");
});
$("#boton-1").click(function () {
    $("#tabla-operativa").removeClass("col-sm-12");
    $("#tabla-operativa").addClass("col-sm-6");
    $("#tabla-alertas").removeClass("ocultar");
});
$("#boton-tep").click(function () {
    $("#tabla-operativa").addClass("ocultar");
    $("#tabla-tep").removeClass("ocultar");
    $("#tabla-tap").addClass("ocultar");
});
$("#close-tep").click(function () {
    $("#tabla-operativa").removeClass("ocultar");
    $("#tabla-tep").addClass("ocultar");
});
$("#boton-tap").click(function () {
    $("#tabla-operativa").addClass("ocultar");
    $("#tabla-tep").addClass("ocultar");
    $("#tabla-tap").removeClass("ocultar");
    $("#tabla-alertas").removeClass("ocultar");
});
$("#close-tap").click(function () {
    $("#tabla-operativa").removeClass("ocultar");
    $("#tabla-tap").addClass("ocultar");
});
$("#boton-2").click(function () {
    $("#tabla-operativa").addClass("ocultar");
    $("#tabla-operativa-2").removeClass("ocultar");
    $("#tabla-tap").addClass("ocultar");
});
$("#boton-tap").click(function () {
    $("#tabla-operativa").addClass("ocultar");
    $("#tabla-tep").addClass("ocultar");
    $("#tabla-tap").removeClass("ocultar");
});
$("#boton-alertas").click(function () {
    $("#table-notif").removeClass("ocultar");
});

$("#open-modal").click(function () {
    $("#modal-time").removeClass("ocultar");
});

$("#modal-close").click(function () {
    $("#modal-time").addClass("ocultar");
});

$("#notificacion").click(function () {
    $("#lista-notif").removeClass("ocultar");
});

$("#boton-tenp").click(function () {
    if ($("#table-notif").hasClass("ocultar")) {
        $("#table-notif").removeClass("ocultar");
    }
    else {
        $("#table-notif").addClass("ocultar");
    }
});

$("#notificacion").click(function () {
    if ($("#notification-list").hasClass("ocultar")) {
        $("#notification-list").removeClass("ocultar");
    }
    else {
        $("#notification-list").addClass("ocultar");
    }
});

$("#expand").click(function () {
    if ($("#izquierda").hasClass("ocultar")) {
        $("#izquierda").removeClass("ocultar");
        $("#derecha").removeClass("col-sm-12");
        $("#derecha").addClass("col-sm-6");
    }
    else {
        $("#izquierda").addClass("ocultar");
        $("#derecha").removeClass("col-sm-6");
        $("#derecha").addClass("col-sm-12");
    }
});


$("#open-alerta-clinica").click(function () {
    $("#alerta-clinica").removeClass("ocultar");
    $("#tabla-alertas-2").removeClass("ocultar");
    $("#tabla-alertas-1").addClass("ocultar");
    $("#header-alertas-2").removeClass("ocultar");
    $("#header-alertas-1").addClass("ocultar");
});
$("#close-alerta-clinica").click(function () {
    $("#alerta-clinica").addClass("ocultar");
    $("#tabla-alertas-2").addClass("ocultar");
    $("#tabla-alertas-1").removeClass("ocultar");
    $("#header-alertas-2").addClass("ocultar");
    $("#header-alertas-1").removeClass("ocultar");
});