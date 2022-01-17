
document.addEventListener("DOMContentLoaded", function () {



  /******************************************** 
  * faq
  ********************************************/

   if(document.querySelectorAll('.faq-item__question')){

    const faqItems = document.querySelectorAll('.faq-item__question')


    faqItems.forEach(function(item, index){
        item.addEventListener('click', function(){
            this.parentNode.classList.toggle('open')
        })
    })

} 


  
  

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

 




