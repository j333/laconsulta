			$(document).ready(function(){

				var anchoVentana = $(window).width();
				var altoVentana = $(window).height();

				$("#vinos .col > img").css("height", altoVentana -100);

                var $windows = $('section');
                $windows.windows({
                    snapping: true,
                    snapSpeed: 500,
                    snapInterval: 1100,
                    onScroll: function(s){},
                    onSnapComplete: function($el){},
                    onWindowEnter: function($el){}
                });

			});

//funcion que detecta si el video termino, y vuelve a verse la imagen de frente con fadeIn
                $("#video_inicio").bind("ended", function() {
                    $('#video_background').fadeIn("slow");
                    $(".detener_video").fadeOut();
                });

                $(".detener_video").click(function(){
                    $(this).fadeOut();
                    $('#video_inicio')[0].stop();
                });

/*ir a la seccion especifica seleccionando desde el menu*/
                $("#btn_inicio").click(function() {
                    $("nav a").removeClass("seleccionado");
                    $('html, body').animate({
                        scrollTop: $("#inicio").offset().top
                    }, 1000);
                });

                $("#btn_historia").click(function() {
                    $("nav a").removeClass("seleccionado");
                    $('html, body').animate({
                        scrollTop: $("#historia").offset().top
                    }, 1000,function(){
                        $("#btn_historia").addClass("seleccionado");
                    });
                });

                $("#btn_vinos").click(function() {
                    $("nav a").removeClass("seleccionado");
                    $('html, body').animate({
                        scrollTop: $("#vinos").offset().top
                    }, 1000,function(){
                        $("#btn_vinos").addClass("seleccionado");
                    });
                });

                $("#btn_tressesenta").click(function() {
                    $("nav a").removeClass("seleccionado");
                    $('html, body').animate({
                        scrollTop: $("#tressesenta").offset().top
                    }, 1000,function(){
                        $("#btn_tressesenta").addClass("seleccionado");
                    });
                });

                $("#btn_enoturismo").click(function() {
                    $("nav a").removeClass("seleccionado");
                    $('html, body').animate({
                        scrollTop: $("#enoturismo").offset().top
                    }, 1000,function(){
                        $("#btn_enoturismo").addClass("seleccionado");
                    });
                });

                $("#btn_contacto").click(function() {
                    $("nav a").removeClass("seleccionado");
                    $('html, body').animate({
                        scrollTop: $("#contacto").offset().top
                    }, 1000,function(){
                        $("#btn_contacto").addClass("seleccionado");
                    });
                });

/***********************/

			$('#video_background').click(function () {
				$(this).fadeOut("slow");             
                if ($("#video_inicio").get(0).paused) {
                    $("#video_inicio").get(0).play();
                    $(".detener_video").fadeIn("slow");   
                }
                else {
                    $("#video_inicio").get(0).pause();
                }
            });

            $('#reserva > a').click(function () {
                $("#modal_reserva").fadeIn("slow");
                return false;
            });
            $('#modal_reserva > a').click(function () {
                $("#modal_reserva").fadeOut("slow");
				$('html, body').animate({ scrollTop: $("#vinos").offset().top }, 0);
                return false;
            });

            $('#varietal > a').click(function () {
                $("#modal_varietal").fadeIn("slow");
                return false;
            });
            $('#modal_varietal > a').click(function () {
                $("#modal_varietal").fadeOut("slow");
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