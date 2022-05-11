jQuery(document).ready(function($) {

    /*-- Strict mode enabled --*/
    'use strict';

    var popup       = $('.agrikon_mini_cart_wrapper'),
        win         = $( window ),
        fixed       = $( '.main-header__cart-btn.cart--fixed' ),
        maincart    = $( '.main-header__cart-btn.trigger--popup' ),
        close       = popup.find( '.header_cart_close' ),
        close_popup = function(){
            // remove class open
            popup.removeClass( 'open' );
        };

    close.on( 'click', function (e) {
        e.preventDefault();
        close_popup();
    });

    fixed.on( 'click', function(e){
        e.preventDefault();
        popup.addClass('open');
    });
    maincart.on( 'click', function(e){
        e.preventDefault();
        popup.addClass('open');
    });
    // === window When scroll === //
    win.on("scroll", function () {
        var bodyScroll = win.scrollTop();

        if ( bodyScroll > 100 ) {
            close.trigger("click");
        }
    });
    $('body').on( 'added_to_cart', function( ev, fragmentsJSON, cart_hash, button ){

        if( typeof fragmentsJSON == 'undefined' )
        fragmentsJSON = $.parseJSON( sessionStorage.getItem( wc_cart_fragments_params.fragment_name ) );

        $.each( fragmentsJSON, function( key, value ) {

            if ( key == 'div.header_cart_detail' ) {

                setTimeout(function () {
                    popup.addClass('open');
                }, 500);
                return false;
            }
        });
    });

    sliderCategories();
    function sliderCategories() {
        var myContainer = $('.products-cats-wrapper'),
            mySlick = $('.swiper-wrapper', myContainer),
            product_cats = $('.products.woocommerce--row .product_cat_item');
        if ( product_cats.length ) {
            product_cats.each(function (i, el) {
                $(this).appendTo('.swiper-wrapper');
            });

            myContainer.each(function () {
                const options = JSON.parse(this.dataset.swiperOptions);
                let mySlider = new NTSwiper($(this), options);
            });
        }
    }

});
