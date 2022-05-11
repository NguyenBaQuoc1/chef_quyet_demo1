$(document).ready(function() {
    $(".icon-messenger").click(function() {
        $(".chat-popup").toggleClass("hidden");
    });

    $(".close-icon").click(function() {
        $(".chat-popup").toggleClass("hidden");
    });
  });
  $(document).ready(function() {
    $(".icon-cart").click(function() {
        $(".chat-popup-cart").toggleClass("hidden");
        $('body').addClass('body-background');
    });

    $(".close-icon-cart").click(function() {
        $(".chat-popup-cart").toggleClass("hidden");
        $('body').removeClass('body-background');
    });
  });
  