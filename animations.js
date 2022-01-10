
document.addEventListener("DOMContentLoaded", function(){

  let myGif = document


});





// RESSOURCES

$(document).ready(function()
{
    $("#imgDino").hover(
        function()
        {
            $(this).attr("src", "http://www.sitevip.net/gifs/dinosaur/2348_animado.gif");
        },
        function()
        {
            $(this).attr("src", "http://bestuff.com/images/images_of_stuff/64x64crop/t-rex-51807.jpg?1176587870");
        }                         
    );                  
});


$('#toggle').addClass('active');

let toggle = document.querySelector('#toggle');
toggle.classList.add('active');


var src = $('#myImg').attr('src');

var src = document.getElementById('myImg').getAttribute('src');