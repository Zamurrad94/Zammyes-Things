// Serires Lists Page
// To hover over the image links.
$(document).ready(function(){
$(".blhover").mouseenter(function(){
    $(this).animate({
        height: '330px',
        width: '215px'
    });
});
});

$(document).ready(function(){
$(".blhover").mouseleave(function(){
    $(this).animate({
        height: '300px',
        width: '185px'
    });
});
});

// Something New

$(document).ready(function(){
$(".navbar").click(function(){
    alert("You are entering another page.")
});
});

$(document).ready(function(){
$(".navbar1").click(function(){
    alert("You are entering another page.")
});
});

$(document).ready(function(){
$(".blhover").click(function(){
    alert("You have left the site and are now entering another.")
});
});
