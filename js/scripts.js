$(document).ready(function(){
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