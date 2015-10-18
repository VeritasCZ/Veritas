// Slide in and out canvas on click
$(function() {
    $('.v-offcanvas-toggle').on("click", function (e) {
        e.preventDefault();
        $('#v-offcanvas').toggleClass('v-active');
    });
    $('.v-close').on("click", function (e) {
        e.preventDefault();
        $('#v-offcanvas').removeClass('v-active');
    });
});
// When I press right arrow, canvas will slide in, when I press left arrow or ESC then canvas will slide out
document.onkeydown = function(evt) {
    evt = evt || window.event;
    // Pravá šipka
    if (evt.keyCode == 39) {
        $('#v-offcanvas').addClass('v-active');
    }
    // left arrow and ESC
    else if (evt.keyCode == 37 || evt.keyCode == 27) {
        $('#v-offcanvas').removeClass('v-active');
    }
};