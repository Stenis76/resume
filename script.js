 /*jshint esversion: 6 */

$(function() {
    $(document).on('click', 'a[href^="#"]', function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000, 'linear');
    });

    $(window).scroll(function(){
    
        //Scroll to top
        if ($(this).scrollTop() > 100 ) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
        // TODO: Add an event that fades out the "scrolltop" if your not scrolling

        $(function(){
            $(".scroll").click(function(){
                $("html,body").animate({scrollTop:$(".navbar").offset().top},"500");return false;});
        });
        
        // Fade in divs
        /**
         * The value of how many pixels have been scrolled from the top
         * @type {number}
         */
        const pageTop = $(document).scrollTop();
        /**
         * The value of the bottom of the page 
         * @type {number}
         */
        const pageBottom = pageTop + $(window).height();
        /**
         * The divs tha going to be animated
         * @type {string}
         */
        const tags = $("div.animleft, div.animright");
    
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];
    
            if ($(tag).position().top < pageBottom) {
                $(tag).addClass("visible");
            } else {
                $(tag).removeClass("visible");
            }
        }
    });
});
