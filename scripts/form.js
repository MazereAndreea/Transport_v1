// for blurring the rest of the page and display form

$(function(){

    const button = $(".openForm");
    const form = $("#form");

    button.click(function()
    {
        form.css('display','block');
        $('body > *:not(#form)').css('filter', 'blur(5px)');
        
    });
});

// for escaping form touching a button
function closeForm() {
    document.getElementById("form").style.display = "none";
}

// for escaping form touching outside of it

