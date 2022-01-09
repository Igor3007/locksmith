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

  /******************************************** 
  * mobile menu
  ********************************************/
  document.querySelector('.btn-burger').addEventListener('click', function(){
    document.querySelector('.header__nav').classList.toggle('open')
  })

  document.querySelector('[data-menu="close"]').addEventListener('click', function(){
    document.querySelector('.header__nav').classList.remove('open')
  })

  document.querySelectorAll('.arrow-menu').forEach(function(item, index){
    item.addEventListener('click', function(event){
      event.stopPropagation()
      event.preventDefault()
      this.parentNode.parentNode.classList.toggle('show-sub')
    })
  })

  /******************************************** 
  * video
  ********************************************/

  if(document.querySelector('.video')){

    function youtube_parser(url){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }

    let videoElements = document.querySelectorAll('.video')

    videoElements.forEach(function(item){
      item.addEventListener('click', function(event){
        let videoID = youtube_parser(this.dataset.id);
        this.innerHTML = '<iframe src="https://www.youtube.com/embed/' + videoID + '?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1&rel=0&showinfo=0" allowfullscreen="" width="' + this.clientWidth + 'px" height="' + this.clientHeight + 'px"></iframe>';
        this.classList.add('play')
      })
    })

  }

 



});//DOMContentLoaded

