/* A script to support tooltips
    $(function() {
         $('[data-toggle="tooltip"]').tooltip()
    })
*/

/* JQuery 2 buttons script
    $(function() {
        $(".carousel").carousel({interval: 1000, pause:"false"});
        $("#carouselPause").click(function(){
            $(".carousel").carousel("pause");
        });
        $("#carouselPlay").click(function(){
            $(".carousel").carousel("cycle");
        });
    });
*/

/* jQuery 1 button 2 function */

$(function(){
    $(".carousel").carousel({interval: 1000, pause:"false"});
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

    /* Reserve Campsite and Login function */
    $("#reserveButton").click(function(){
        $("#reserveCampsites").modal("show") ;
    });

    $("#loginButton").click(function(){
        $("#loginModal").modal("show");
    });
});
