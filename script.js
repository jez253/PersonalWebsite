// $(window).scroll(function() {

//     var $window = $(window),
//         $body = $('body'),
//         $panel = $('.part');
  
   
//     var scroll = $window.scrollTop() + ($panel.height() / 3);
   
//     $panel.each(function () {
//       var $this = $(this);
  
//       if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
   
//         var bgColor = $(this).data('background');
//         $body.css('background-color', bgColor);
//       }
//     });
  
//   }).scroll();

//   var logoHeight = $('#parallax img').height();
//     if (logoHeight < 104) {
//         var margintop = (104 - logoHeight) / 2;
//         $('#parallax img').css('margin-top', margintop);
//     }