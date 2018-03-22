$(document).ready(function() {

  var header = $(".header")

  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop()
    var height = header.height()

    if (scroll >= height + 50) {
      header.fadeOut("slow")

    } else if (scroll === 0) {
      header.fadeIn("slow")
    }

    changeTitre("#titre1", "change1", scroll)
    changeTitre("#titre2", "change2", scroll)
    changeTitre("#titre3", "change3", scroll)


  })

  function changeTitre(tag, titre, scroll) {
    var t = $(tag)
    var p = t.position()
    if (p.top < scroll + 50) {
          t.text(titre)
    } else {
          t.text("no titre")
    }
  }
})
