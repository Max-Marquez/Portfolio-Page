$(document).ready(function(){
  $('#wrapper').fadeIn(1000);
})

$(function() {
  $('.open-menu').on('click', function() {
     $('.overlay').addClass('open');
  });

  $('.close-menu').on('click', function() {
    $('.overlay').removeClass('open');
  });
});

$(function(){

  $('.sliding .slides:gt(0)').hide();
  setInterval(function(){
    $('.sliding :first-child').fadeOut(2000).next('.slides').fadeIn(2000)
    .end().appendTo('.sliding');
    }
    , 7000);

  });

$(function(){
// Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
