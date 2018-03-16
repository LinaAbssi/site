
$(document).ready(function(){
   $( ".nav__list" ).creepingAnchor( {
        offsetLeft: 0,
        position: "bottom",
        speed: 400,
        anchors: true,
        onViewChange: function ( section ) {
          console.log( section )
        }
    } );
})