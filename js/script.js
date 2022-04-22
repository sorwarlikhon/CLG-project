$(document).ready(function(){
  // barfillers
    $('#bar1').barfiller({
      duration:2000,
      tooltip:false,
    });
    $('#bar2').barfiller({
        duration:2000,
        tooltip:false,
});
    $('#bar3').barfiller({
      duration:2000,
      tooltip:false,
    });
// slider
    $('.bar_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade:true,
        arrows:false,
      });

      $('.textslider_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      });

      // counter up
      $('.counter').counterUp({
        delay: 10,
        time: 1500,
    });
// venobox
    new VenoBox({
      selector: ".my-link",
      autoplay:true,
      bgcolor: "#052ddf",
      border:"4px",
      maxWidth:"70%",
  });
});
// back to top
var back_to_top = document.querySelector(".back_to_top");
window.addEventListener("scroll", function(){
  back_to_top.classList.toggle("hide",window.scrollY>150)
})
// scroll navbar
$(function() {
  var navbar = document.querySelector(".navbar")
window.addEventListener("scroll",function(){
  var magura = window.scrollY;
  if(magura>100){
    navbar.classList.add("kushtia")
  }
  else{
    navbar.classList.remove("kushtia")
  }
})
})