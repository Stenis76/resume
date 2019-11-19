// $(document).ready(function() {
//  console.log('dom loaded')
//   $(".anim").animate({'right': "300px"}, "slow")
//   $(".anim").animate({'right':($('body').innerWidth()-(".anim").width())}, 'slow');
// });

// $( ".anim" ).click(function() {
//     $( ".anim" ).animate({
//       opacity: 0.25,
//       left: "+=50",
//       height: "toggle"
//     }, 5000, function() {
//       // Animation complete.
//     });
//   });


$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadein').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},2000);
            }
            
        }); 
    });
});

// $(document).ready(function() {
//     $(window).scroll( function(){
//         $('.slideinleft').each( function(i){
            
//             var bottom_of_element = $(this).offset().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
            
//             if( bottom_of_window > bottom_of_element ){
//                 $(this).animate({'margin-left':'0px'},1000);
//             }
            
//         }); 
//     });
// });