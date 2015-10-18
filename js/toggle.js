// Show and hide any element with class or ID in data-toggle
$(function() {
    $('.v-toggle').on("click", function (e) {
        var data = $('.v-toggle').attr("data-toggle");
        $(data).toggle();
        e.preventDefault();
    });
});