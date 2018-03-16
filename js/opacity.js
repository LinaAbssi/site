var divs = $('#teaser,#nom');

$(window).scroll(function() {
   var st = $(this).scrollTop();
   $('.teaser').css({ 'opacity' : (1 - st/300) });
   $('.nom').css({ 'opacity' : (1 - st/200) });
 
 
});
