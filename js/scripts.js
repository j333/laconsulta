			$(document).ready(function(){

				var anchoVentana = $(window).width();
				var altoVentana = $(window).height();

				$("#vinos img").css("height", altoVentana + "px");

                var $windows = $('section');
                $windows.windows({
                    snapping: true,
                    snapSpeed: 500,
                    snapInterval: 1100,
                    onScroll: function(s){},
                    onSnapComplete: function($el){},
                    onWindowEnter: function($el){}
                });

				//funcion que detecta si el video termino, y vuelve a verse la imagen de frente con fadeIn
				$("#video_inicio").bind("ended", function() {
				    $('#video_background').fadeIn("slow");
				});
			});

			$('#video_background').click(function () {
				$(this).fadeOut("slow");
                if ($("#video_inicio").get(0).paused) {
                    $("#video_inicio").get(0).play();
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