			$(document).ready(function(){

				var anchoVentana = $(window).width();
				var altoVentana = $(window).height();

                //poner botellas de vino al alto de la ventana

				$("#vinos .col > img").css("height", altoVentana -100);

                //agregar clase blur al hacer hover y quitar al hacer mouse leave
                /*
                $("#reserva").hover(function(){
                    $("#varietal").addClass("no_hover");
                });
                $("#reserva").mouseleave(function(){
                    $("#varietal").removeClass("no_hover");
                });
                $("#varietal").hover(function(){
                    $("#reserva").addClass("no_hover");
                });
                $("#varietal").mouseleave(function(){
                    $("#reserva").removeClass("no_hover");
                });
                
                */

                if( anchoVentana < 640 ){
                    //$("#enoturismo .col-izq form").appendTo("#actividades");
                }

                //$(".section_modal").mCustomScrollbar();

                $("#a_modal_enoturismo").click(function(){
                    $("#modal_enoturismo").show();
                    $("body").css("overflow","hidden");
                    return false;
                });

                $("#modal_enoturismo .cerrar_modal,.section_modal").click(function(){
                    $("#modal_enoturismo").hide();
                    $("body").css("overflow","auto");
                    return false;
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

			});

//funcion que detecta si el video termino, y vuelve a verse la imagen de frente con fadeIn
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

/*ir a la seccion especifica seleccionando desde el menu*/
                $("#btn_inicio").click(function() {
                    $("nav a").removeClass("seleccionado");
                    $('html, body').animate({
                        scrollTop: $("#inicio").offset().top
                    }, 1000);
                    return false;
                });


                $("#btn_historia").click(function() {
                    //$("nav a").removeClass("seleccionado");
                    $('html, body').animate({
                        scrollTop: $("#historia").offset().top
                    }, 1000,function(){
                        //$("#btn_historia").addClass("seleccionado");
                    });
                    return false;
                });

                $("#btn_vinos").click(function() {
                    //$("nav a").removeClass("seleccionado");
                    $('html, body').animate({
                        scrollTop: $("#vinos").offset().top
                    }, 1000,function(){
                        //$("#btn_vinos").addClass("seleccionado");
                    });
                    return false;
                });

                $("#btn_tressesenta").click(function() {
                    //$("nav a").removeClass("seleccionado");
                    $('html, body').animate({
                        scrollTop: $("#tressesenta").offset().top
                    }, 1000,function(){
                        //$("#btn_tressesenta").addClass("seleccionado");
                    });
                    return false;
                });

                $("#btn_enoturismo").click(function() {
                    //$("nav a").removeClass("seleccionado");
                    $('html, body').animate({
                        scrollTop: $("#enoturismo").offset().top
                    }, 1000,function(){
                        //$("#btn_enoturismo").addClass("seleccionado");
                    });
                    return false;
                });

                $("#btn_contacto").click(function() {
                    //$("nav a").removeClass("seleccionado");
                    $('html, body').animate({
                        scrollTop: $("#contacto").offset().top
                    }, 1000,function(){
                        //$("#btn_contacto").addClass("seleccionado");
                    });
                    return false;
                });

/***********************/

            $('#reserva ul a').click(function () {
                $(".modal_reserva").fadeIn("slow");
                $("html").css("overflow","hidden");
                return false;
            });
            $('.modal_reserva > a').click(function () {
                $(".modal_reserva").fadeOut("slow");
                //$("html").css("overflow","auto");
				$('html, body').animate({ scrollTop: $("#vinos").offset().top }, 0);
                return false;
            });

            $('#varietal ul a').click(function () {
                $(".modal_varietal").fadeIn("slow");
                $("html").css("overflow","hidden");
                return false;
            });
            $('.modal_varietal > a').click(function () {
                $(".modal_varietal").fadeOut("slow");
                //$("html").css("overflow","auto");
                $('html, body').animate({ scrollTop: $("#vinos").offset().top }, 0);
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