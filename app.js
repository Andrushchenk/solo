




var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

$(function() {


  // Fix Header
  let header = $("#header");
  let info = $("#zaholovok");
  let infoH = info.innerHeight();
  let scrollPos = $(window).scrollTop();

  checkScroll(scrollPos, infoH);

  $(window).on("scroll  resize", function(){

      infoH = info.innerHeight();
      scrollPos = $(this).scrollTop();

      checkScroll(scrollPos, infoH);

  });

  function checkScroll(scrollPos, infoH){
      if( scrollPos > infoH ){
          header.addClass("fixed");
      } else{
          header.removeClass("fixed");
      }

  }

  $("[data-scroll]").on("click", function(event) {
      event.preventDefault();

      let elementId = $(this).data('scroll');
      let elementOffset = $(elementId).offset().top;

      console.log(elementOffset);

      $("html, body").animate({
          scrollTop: elementOffset
      });


  });
});


let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 600)
});

