
document.addEventListener("DOMContentLoaded", function () {

  //   /* inputmask */

  // if(document.querySelector("input[type=tel]")){
  //   const IMaskPhone = new Inputmask("9(999)999-99-99")
  //   IMaskPhone.mask(document.querySelector("input[type=tel]"))
  // }

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

      if(document.querySelector('.nav-menu .show-sub')){
        document.querySelector('.nav-menu .show-sub').classList.remove('show-sub')
      }else{
        this.parentNode.parentNode.classList.toggle('show-sub')
      }

      
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

  /******************************************** 
  * data-swiper="clients"
  ********************************************/

  const clients = new Swiper('[data-swiper="clients"]', {
     
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
      },
     
    
      
       
  });


  /******************************************** 
  * data-swiper="review"
  ********************************************/

   function updateFraction(slider) {

    const { params, activeIndex } = slider;

    document.querySelector('.review-counter-current').innerHTML = (activeIndex + 1)
    document.querySelector('.review-counter-total').innerHTML = (slider.slides.length)

  }

  const review = new Swiper('[data-swiper="review"]', {
     
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    navigation: {
      prevEl: '[data-swiper-prev="review"]',
      nextEl: '[data-swiper-next="review"]',
  },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      
    },

    on: {
      init() {
        setTimeout(updateFraction, 0, this);
      },
      slideChange(event) {
        updateFraction(this);
      },
      resize() {
        updateFraction(this);
      },
    },
       
  });


});//DOMContentLoaded

