//										            	//
// Po kliknutí na tlačítko otevřeme a zavřeme offcanvas //
//										            	//

$(function() {
    $('.v-offcanvas-toggle').on("click", function (e) {
        e.preventDefault();
        $('#v-offcanvas').toggleClass('v-active');
    });
    $('.close').on("click", function (e) {
        e.preventDefault();
        $('#v-offcanvas').removeClass('v-active');
    });
});
//                     //
// Ovládání klávesnicí //
//                     //
document.onkeydown = function(evt) {
    evt = evt || window.event;
    // Pravá šipka
    if (evt.keyCode == 39) {
        $('#v-offcanvas').addClass('v-active');
    }
    // Levá šipka
    else if (evt.keyCode == 37) {
        $('#v-offcanvas').removeClass('v-active');
    }
    // ESC
    else if (evt.keyCode == 27) {
        $('#v-offcanvas').removeClass('v-active');
    }
};