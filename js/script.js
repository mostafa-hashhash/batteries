$(document).ready(function(){
    $(window).scroll(function(){
    
         if($(this).scrollTop() >= 400){
              $("nav").css("background-color","#0C154A");
         }
         else{
              $("nav").css("background-color","#00000000");
         }
    });

    // working on the pop-ups.
    $("#Continue-reading").click(function(){
        $("#Read-More").fadeIn(1000); 
    });
    $("#Read-More").on("click",function(){
        $(this).fadeOut(1000);
    });
    $("#Read-More .inner").on("click",function(e){
        e.stopPropagation();
    });

    $("#More-Details-btn-1").click(function(){
        $("#More-Details-1").fadeIn(1000); 
    });
    $("#More-Details-1").on("click",function(){
        $(this).fadeOut(1000);
    });
    $("#More-Details-1 .inner").on("click",function(e){
        e.stopPropagation();
    });
    $("#More-Details-btn-2").click(function(){
        $("#More-Details-2").fadeIn(1000); 
    });
    $("#More-Details-2").on("click",function(){
        $(this).fadeOut(1000);
    });
    $("#More-Details-2 .inner").on("click",function(e){
        e.stopPropagation();
    });
    $(document).on('keydown', function(event) {
        if (event.key == "Escape") {
            $(".pop-up").fadeOut(1000);
        };
    });
    // end working on pop ups.
});
More-Details-btn-1