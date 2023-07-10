
$(function(){

    const button1 = $(".openForm");
    const form = $("#form");
    const button2 = $(".closeForm");
    
    $(button1).on("click", function(){
        form.css('display', 'block'); //display the form
        var formPosition = $(form).offset(); //get the position of form (top and left)
        var formHeight = $(form).height(); //get the height of the form
        $('body > *:not(#form)').css('filter', 'blur(5px)'); //blur the rest of the page
        $('html,body').animate({
           scrollTop: formPosition.top - formHeight/2 //scrolltop counts from the top of the page to the bottom
        }, 500);
    });
    
    $(button2).on("click", function(){
        $('body > *:not(#form)').css("pointer-events", "none");
        form.css('display', 'none'); //hide form
        $('body > *:not(#form)').css('filter', 'none'); //unblur page
    });

    $('body > *').on("touchstart", function(){
        $('body > *:not(#form)').css("pointer-events", "all");
        form.css('display', 'none'); //hide form
        $('body > *:not(#form)').css('filter', 'none'); //unblur page
    });

});




