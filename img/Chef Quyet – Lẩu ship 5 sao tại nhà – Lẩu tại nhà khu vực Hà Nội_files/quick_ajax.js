jQuery(document).ready(function($) {
    "use strict";

    $('a.button.agrikon-btn-quick-view').on('click', function(event){
        event.preventDefault();
        var btn = $(this),
        id = btn.data('product_id');
        btn.addClass('loading');
        $.ajax({
            url: myAjax.ajaxurl,
            data: {
                action: 'quick_view',
                product_id : id,
            },
            dataType: 'html',
            type: 'POST',
            success: function (data) {
                btn.removeClass('loading');
                jQuery(".quick_view_wrapper").append( data ).addClass('open');
            }
        });
    });

    $('.quick-close, .quick_view_overlay').on('click', function(event){
        event.preventDefault();
        jQuery(".quick_view_wrapper").removeClass('open');
        setTimeout(function(){
            jQuery(".quick_view_wrapper > .ajax_quick_view").remove();
        },1000);
    });

});
