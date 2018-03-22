
$(document).ready(function() {
  var header = $(".header")

  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop()
    var height = header.height()
    console.log(scroll, height)

      if (height > scroll) {
        console.log('fade in')
        header.fadeIn("slow");
      } else {
        console.log('fade out')
        header.fadeOut("slow");
      }
      //

  })
})
