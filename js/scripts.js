$(document).ready(function(){

	var anchoVentana = $(window).width();
	var altoVentana = $(window).height();

	$("#vinos .col > img,.modal_imagen img").css("height", altoVentana -100);

    window.onresize = function() {
        altoVentana = $(window).height();
        $("#vinos .col > img,.modal_imagen img").css("height", altoVentana -100);
    }

    var formHeight = $("#enoturismo .col.col-der").height();
    $("#enoturismo .col.col-izq form").height(formHeight-18);

    function funcionesComunesVinos(){
        if(anchoVentana > 768){
            $('html,body').animate({scrollTop: $("#vinos").offset().top}, 500);
        }
        $("body").css("overflow-y","hidden");
    }
    function funcionesComunesVinosReserva(){
        $("#reserva").removeClass("seleccionado");
        $("#reserva").addClass("seleccionado");

        $("#reserva strong").removeClass("seleccionadoResStrong");
        $("#reserva img").removeClass("seleccionadoResImg");

        //$(this).find('strong').addClass("seleccionadoResStrong");
        //$(this).find('img').addClass("seleccionadoResImg");

        $(".modal_reserva").fadeOut(0);
    }
    function funcionesComunesVinosVarietal(){
        $("#varietal").removeClass("seleccionado");
        $("#varietal").addClass("seleccionado");

        $("#varietal strong").removeClass("seleccionadoVariStrong");
        $("#varietal img").removeClass("seleccionadoVariImg");

        //$(this).find('strong').addClass("seleccionadoVariStrong");
        //$(this).find('img').addClass("seleccionadoVariImg");

        $(".modal_varietal").fadeOut(0);
    }

    $("#abrir_modal_reserva_mb").click(function(e){
        funcionesComunesVinos();
        funcionesComunesVinosReserva();
        $(this).find('strong').addClass("seleccionadoResStrong");
        $(this).find('img').addClass("seleccionadoResImg");
        $("#modal_reserva_mb").fadeIn(0);
        $("#reserva > img").attr("src","img/La_Consulta_Reserva_MB.jpg");
        e.preventDefault();
    });

    $("#abrir_modal_reserva_cs").click(function(e){
        funcionesComunesVinos();
        funcionesComunesVinosReserva();
        $(this).find('strong').addClass("seleccionadoResStrong");
        $(this).find('img').addClass("seleccionadoResImg");
        $("#modal_reserva_cs").fadeIn(0);
        $("#reserva > img").attr("src","img/La_Consulta_Reserva_CS.jpg");
        e.preventDefault();
    });
    
    $("#abrir_modal_reserva_mb").click(function(e){
        funcionesComunesVinos();
        funcionesComunesVinosReserva();
        $(this).find('strong').addClass("seleccionadoResStrong");
        $(this).find('img').addClass("seleccionadoResImg");
        $("#modal_reserva_mb").fadeIn(0);
        $("#reserva > img").attr("src","img/La_Consulta_Reserva_MB.jpg");
        e.preventDefault();
    });

    $("#abrir_modal_reserva_to").click(function(e){
        funcionesComunesVinos();
        funcionesComunesVinosReserva();
        $(this).find('strong').addClass("seleccionadoResStrong");
        $(this).find('img').addClass("seleccionadoResImg");
        $("#modal_reserva_to").fadeIn(0);
        $("#reserva > img").attr("src","img/La_Consulta_Reserva_TO.jpg");
        e.preventDefault();
    });
    
    $("#abrir_modal_reserva_ch").click(function(e){
        funcionesComunesVinos();
        funcionesComunesVinosReserva();
        $(this).find('strong').addClass("seleccionadoResStrong");
        $(this).find('img').addClass("seleccionadoResImg");
        $("#modal_reserva_ch").fadeIn(0);
        $("#reserva > img").attr("src","img/La_Consulta_Reserva_CH.jpg");
        e.preventDefault();
    });

    $("#abrir_modal_varietal_mb").click(function(e){
        funcionesComunesVinos();
        funcionesComunesVinosVarietal();
        $(this).find('strong').addClass("seleccionadoVariStrong");
        $(this).find('img').addClass("seleccionadoVariImg");
        $("#modal_varietal_mb").fadeIn(0);
        $("#varietal > img").attr("src","img/La_Consulta_MB.jpg");
        e.preventDefault();
    });

    $("#abrir_modal_varietal_cs").click(function(e){
        funcionesComunesVinos();
        funcionesComunesVinosVarietal();
        $(this).find('strong').addClass("seleccionadoVariStrong");
        $(this).find('img').addClass("seleccionadoVariImg");
        $("#modal_varietal_cs").fadeIn(0);
        $("#varietal > img").attr("src","img/La_Consulta_CS.jpg");
        e.preventDefault();
    });
    
        $("#abrir_modal_varietal_ro").click(function(e){
        funcionesComunesVinos();
        funcionesComunesVinosVarietal();
        $(this).find('strong').addClass("seleccionadoVariStrong");
        $(this).find('img').addClass("seleccionadoVariImg");
        $("#modal_varietal_ro").fadeIn(0);
        $("#varietal > img").attr("src","img/La_Consulta_RO.jpg");
        e.preventDefault();
    });

    $("#abrir_modal_varietal_ch").click(function(e){
        funcionesComunesVinos();
        funcionesComunesVinosVarietal();
        $(this).find('strong').addClass("seleccionadoVariStrong");
        $(this).find('img').addClass("seleccionadoVariImg");
        $("#modal_varietal_ch").fadeIn(0);
        $("#varietal > img").attr("src","img/La_Consulta_CH.jpg");
        e.preventDefault();
    });
    
        $("#abrir_modal_varietal_pg").click(function(e){
        funcionesComunesVinos();
        funcionesComunesVinosVarietal();
        $(this).find('strong').addClass("seleccionadoVariStrong");
        $(this).find('img').addClass("seleccionadoVariImg");
        $("#modal_varietal_pg").fadeIn(0);
        $("#varietal > img").attr("src","img/La_Consulta_PG.jpg");
        e.preventDefault();
    });

    $("#abrir_modal_varietal_to").click(function(e){
        funcionesComunesVinos();
        funcionesComunesVinosVarietal();
        $(this).find('strong').addClass("seleccionadoVariStrong");
        $(this).find('img').addClass("seleccionadoVariImg");
        $("#modal_varietal_to").fadeIn(0);
        $("#varietal > img").attr("src","img/La_Consulta_TO.jpg");
        e.preventDefault();
    });

    $(".vino_modal .cerrar_modal").click(function(e){
        $("#varietal > img").attr("src","img/La_Consulta_Varietal_MB_tr.jpg");
        $("#reserva > img").attr("src","img/La_Consulta_Reserva_CS.jpg");
        $("#reserva").removeClass("seleccionado");
        $("#varietal").removeClass("seleccionado");
        $("#varietal strong").removeClass("seleccionadoVariStrong");
        $("#varietal img").removeClass("seleccionadoVariImg");
        $("#reserva strong").removeClass("seleccionadoResStrong");
        $("#reserva img").removeClass("seleccionadoResImg");
        $(".vino_modal").fadeOut(0);
        $("body").css("overflow-y","auto");
        e.preventDefault();
    });

    $("#a_modal_enoturismo").click(function(e){
        $("#modal_enoturismo").fadeIn(0);
        $("body").css("overflow-y","hidden");
        e.preventDefault();
    });

    $("#modal_enoturismo .cerrar_modal,#modal_enoturismo").click(function(e){
        $("#modal_enoturismo").fadeOut(0);
        $("body").css("overflow-y","auto");
        e.preventDefault();
    });

    $('#play_ini').click(function () {
        if(anchoVentana > 640){
            $(this).fadeOut("slow");
            $("#video_background").fadeOut("slow");
            if ($("#video_inicio").get(0).paused) {
                $("#video_inicio").get(0).play();
                $(".detener_video").fadeIn("slow");
            }
            else {
                $("#video_inicio").get(0).pause();
            }
        }
        return false;
    });

    $("#borrar_form").click(function(){
        $("#enoturismo input[type='text'],#enoturismo input[type='email'],#enoturismo input[type='date'],#enoturismo input[type='number']").val("");
        $("#enoturismo textarea").val("");
        return false;
    });

    $(".scroll_down").click(function(){
        $('html, body').animate({
            scrollTop: $("#historia").offset().top
        }, 1000);
        return false;
    });

    $("#enoturismo form input[type='submit']").click(function(){
        $('html, body').animate({
            scrollTop: $("#enoturismo form").offset().top
        }, 1000,function(){
            $("#enoturismo form legend,#enoturismo form label,#enoturismo form input,#enoturismo form textarea,#enoturismo form p,#borrar_form").fadeOut("slow",function(){
                $(".msj_reserva").fadeIn("slow");
            });
        });
        return false;
    });

    $("#otra_reserva").click(function(){
        $(".msj_reserva").fadeOut("slow",function(){
            $("#enoturismo form legend,#enoturismo form label,#enoturismo form input,#enoturismo form textarea,#enoturismo form p,#borrar_form").fadeIn("slow");
        });
        return false;
    });

    $("#video_inicio").bind("ended", function() {
        $('#play_ini').fadeIn("slow");
        $("#video_background").fadeIn("slow");
        $(".detener_video").fadeOut();
    });

    $(".detener_video").click(function(){
        $('#play_ini').fadeIn("slow");
        $("#video_background").fadeIn("slow");
        $(".detener_video").fadeOut();
        $('#video_inicio').get(0).pause();
        $("#video_inicio").get(0).currentTime = 0;
        return false;
    });

    $("#btn_inicio").click(function() {
        $("nav a").removeClass("seleccionado");
        $('html, body').animate({
            scrollTop: $("#inicio").offset().top
        }, 1000);
        return false;
    });

    $("#btn_historia").click(function() {
        $('html, body').animate({
            scrollTop: $("#historia").offset().top
        }, 1000,function(){
        });
        return false;
    });

    $("#btn_vinos").click(function() {
        $('html, body').animate({
            scrollTop: $("#vinos").offset().top
        }, 1000);
        return false;
    });

    $("#btn_tressesenta").click(function() {
        $('html, body').animate({
            scrollTop: $("#tressesenta").offset().top
        }, 1000,function(){
        });
        return false;
    });

    $("#btn_enoturismo").click(function() {
        $('html, body').animate({
            scrollTop: $("#enoturismo").offset().top
        }, 1000,function(){
        });
        return false;
    });

    $("#btn_contacto").click(function() {
        $('html, body').animate({
            scrollTop: $("#contacto").offset().top
        }, 1000,function(){
        });
        return false;
    });

    var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
    showLeftPush = document.getElementById( 'showLeftPush' ),
    body = document.body;
    showLeftPush.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( body, 'cbp-spmenu-push-toright' );
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
        disableOther( 'showLeftPush' );
    };

    function disableOther( button ) {
        if( button !== 'showLeftPush' ) {
            classie.toggle( showLeftPush, 'disabled' );
        }
    }

});