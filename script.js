
$(document).ready(function () {



  // sticky navbar

  $(window).scroll(function(){

    let position= $(this).scrollTop();
    if (position >= 718) {

      $('.navbar').addClass('navbar-background');
      $('.navbar').addClass('fixed-top');
      
    } else {

      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
      
    }
  });





  // smooth scrolling  


  // $('.nav-item a, .header-link, #back-to-top').click(function (e) {

  //   e.preventDefault();

  //   let target = $(this).attr('href');

  //   $('html, body').stop().animate({
  //     scrollTop: $(target).offset().top
  //   }, 3000)

  // });






  // footer scroll back  


  $(window).scroll(function(){

    let position= $(this).scrollTop();
    if (position >= 718) {

      $('#back-to-top').addClass('scrollTop');
      
    } else {

      $('#back-to-top').removeClass('scrollTop');
      
    }
  });





    // ripples on header

    $('#header, .info').ripples({
        dropRadius: 25,
        perturbance: 0.6,
      });






    //   magnific pop-up


    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options

        gallery: {
            enabled:true
        }
      });
    
});