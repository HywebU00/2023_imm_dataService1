//自訂JS
$(document).ready(function() {

    //Responsive_slider
    $('.Responsive_slider').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [{
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });

    //Syncing_slider

    $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
    // $('.controls').html(i + '/' + slick.slideCount);//把目前第幾張放進html裡
  });

    $('.Slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.Slider-nav',
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,

    });
    $('.Slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.Slider-for',
      dots: false,
      arrows: false,
      focusOnSelect: true,
      infinite: true,
    });


  });

//
$(function() {

  $('a.goCenter').keydown(function(e) {
   if (e.which == 13) {
     $('#aC').focus(); /*#aC 是中間定位點的id*/
   }
 });

//cp_slider
$('.cp_slider').find('a').focus(function(e) {
  $(this).css('outline', '1px solid RED');
});
$('.cp_slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: false,
  autoplaySpeed: 1500,
  pauseOnHover: true,
  pauseOnFocus: true,
  focusOnSelect: true,
  accessibility: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});



//end
})