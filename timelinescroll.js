/**********************Scroll Animation "START"************************************/
$(document).ready(function () {
    var $animation_elements = $('.anim');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('animated');
            } else {
                $element.removeClass('animated');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
});
    /**********************Scroll Animation "END"************************************/

    $(document).ready(function() {
 console.log('dom loaded')
  $(".anim").animate({'right': "300px"}, "slow")
  $(".anim").animate({'right':($('body').innerWidth()-(".anim").width())}, 'slow');
});

$( ".anim" ).click(function() {
    $( ".anim" ).animate({
      opacity: 0.25,
      left: "+=50",
      height: "toggle"
    }, 5000, function() {
      // Animation complete.
    });
  });


$(document).ready(function() {
    $(window).scroll( function(){
        $('.slideinleft').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'0px'},1000);
            }
            
        }); 
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).animleft();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})


$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $("section")

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i]

        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible")
        } else {
            $(tag).removeClass("visible")
        }
    }
})

$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000, 'linear');
});