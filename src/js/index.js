import "./import/modules";
import "./import/components";

import svgPolyfill from "svg4everybody";
import Inputmask from "inputmask";
import lazysizes from "lazysizes"

//add simple support for background images:
document.addEventListener('lazybeforeunveil', function(e){
  var bg = e.target.getAttribute('data-bg');
  if(bg){
      e.target.style.backgroundImage = 'url(' + bg + ')';
  }
});


//svgPolyfill(); 
//Swiper.use([Pagination, Navigation]);

document.addEventListener("DOMContentLoaded", function () {

    /* inputmask */

  if(document.querySelector("input[type=tel]")){
    const IMaskPhone = new Inputmask("9(999)999-99-99")
    IMaskPhone.mask(document.querySelector("input[type=tel]"))
  }



});//DOMContentLoaded

