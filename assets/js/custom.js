// Counter js
function inVisible(element) {
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
        animate(element);
}

function animate(element) {
    if (!element.hasClass('animation_start')) {
        var maxval = element.data('target');
        var html = element.html();
        element.addClass("animation_start");
        $({
            countNum: element.html()
        }).animate({
            countNum: maxval
        }, {
            duration: 5000,
            easing: 'linear',
            step: function() {
                element.html(Math.floor(this.countNum) + html);
            },
            complete: function() {
                element.html(this.countNum + html);
            }
        });
    }
}
$(function() {
    $(window).scroll(function() {
        $(".counter_number").each(function() {
            inVisible($(this));
        });
    })
});
// jQuery(document).ready(function($) {
//   $('#testimonial_slider').owlCarousel({
//       loop: true,
//       center: true,
//       items: 1 ,
//       // autoplay: true,
//       autoplayTimeout: 5000,
//       responsive: {
//         0: { items: 1 },
//         768: { items: 2 },
//         1170: { items: 1 }
//       }
//   });
// });

jQuery(document).ready(function($) {
    $('#testimonial_slider').owlCarousel({
        loop: true,
        // center: true,
        items: 2,
        margin: 30,
        autoplay: true,
        dots: false,
        nav: false,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            575: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1170: {
                items: 2
            }
        }
    });
});

$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: false,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        }
    });
});
$(document).ready(function(){
    $('.tabs_list li').click(function(){
        // reset active class
        $('.tabs_list li').removeClass("active");
        // add active class to selected
        $(this).addClass("active");
        // return needed to make function work
        return false;
    });
    $(function() {
        // create an empty variable
        var selectedClass = "";
        // call function when item is clicked
        $(".tabs_list li").click(function(){
            // assigns class to selected item
            selectedClass = $(this).attr("data-filter");
            // fades out all portfolios_page items
            $(".project_grid .item").fadeOut(300);
            // fades in selected category
            $(".project_grid .item" + selectedClass).delay(300).fadeIn(300);
        });
    });
}); // document ready
