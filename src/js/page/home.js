
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

  /* ============================== */

  
  

});//DOMContentLoaded

  window.onload = function() {

    
  /******************************************** 
  * perf-to-animate
  ********************************************/

    document.querySelector('body').classList.remove('perf-no-animation')

  /******************************************** 
  * load swiper
  ********************************************/

    

    function loadScript(url, callback){
      var script = document.createElement("script");
      
      if (script.readyState){  // IE
          script.onreadystatechange = function(){
          if (script.readyState == "loaded" ||
                  script.readyState == "complete"){
              script.onreadystatechange = null;
              callback();
          }
          };
      } else {  // Р”СЂСѓРіРёРµ Р±СЂР°СѓР·РµСЂС‹
          script.onload = function(){
          callback();
          };
      }
      
      script.src = url;
      document.getElementsByTagName("head")[0].appendChild(script);
  }

  loadScript('/js/lib/glide.min.js', function(){
    


  /******************************************** 
  * data-glide="clients"
  ********************************************/

  const clients =  new Glide('[data-glide="clients"]', {
    type: 'carousel',
    startAt: 0,
    perView: 6,
    autoplay: 3000
  })

  clients.mount();


  /******************************************** 
  * data-glide="review"
  ********************************************/

   var review = new Glide('[data-glide="review"]', {
    type: 'carousel',
    gap: 40,
    perView: 3,
    breakpoints: {
      767: {
        perView: 1,
      },
      1200: {
        perView: 2,
        gap: 30,
      }
       
    },
  })

  review.mount();

  document.querySelector('[data-swiper-prev="review"]').addEventListener('click', function(){
    review.go('<')
  })
  document.querySelector('[data-swiper-next="review"]').addEventListener('click', function(){
    review.go('>')
  })

  /* event */

  let totalSlide = document.querySelectorAll('[data-glide="review"] .glide__slide:not(.glide__slide--clone)').length
  document.querySelector('.review-counter-total').innerHTML = totalSlide

  review.on(['mount', 'run'], function(event) {
    document.querySelector('.review-counter-current').innerHTML = (review._i + 1)
  })

})

  }//window.onload

 




