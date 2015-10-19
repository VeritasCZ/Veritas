$(".v-scroll").click(function(event){     
    event.preventDefault(); // Prevents moving to top
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000); //Animation in html,body to href with 1ms speed
});