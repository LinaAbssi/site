
$(document).ready(function() {
  var header = $(".header")

  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop()
    var height = header.height()
    console.log(scroll, height)

      if (scroll >= height) {
        console.log('fade out')
        header.fadeOut("slow")
      } else {
        console.log('fade in')
        header.fadeIn("slow")
      }
      //

  })
})
