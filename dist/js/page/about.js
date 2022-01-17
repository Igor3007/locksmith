 

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

    document.querySelector('[data-glide-prev="review"]').addEventListener('click', function(){
      review.go('<')
    })
    document.querySelector('[data-glide-next="review"]').addEventListener('click', function(){
      review.go('>')
    })

    /* event */

    let totalSlide = document.querySelectorAll('[data-glide="review"] .glide__slide:not(.glide__slide--clone)').length
    document.querySelector('.review-counter-total').innerHTML = totalSlide

    review.on(['mount', 'run'], function(event) {
      document.querySelector('.review-counter-current').innerHTML = (review._i + 1)
    })



  /******************************************** 
    * data-glide="team"
    ********************************************/

  var teamSlider = new Glide('[data-glide="team"]', {
    type: 'carousel',
    gap: 40,
    perView: 3,
    breakpoints: {
      767: {
        perView: 1,
        gap: 0,
      },
      1200: {
        perView: 2,
        gap: 30,
      }
      
    },
  })

  teamSlider.mount();

  document.querySelector('[data-glide-prev="team"]').addEventListener('click', function(){
    teamSlider.go('<')
  })
  document.querySelector('[data-glide-next="team"]').addEventListener('click', function(){
    teamSlider.go('>')
  })

  /* event */

  let totalSlideTeam = document.querySelectorAll('[data-glide="team"] .glide__slide:not(.glide__slide--clone)').length
  document.querySelector('.team-counter-total').innerHTML = totalSlideTeam

  teamSlider.on(['mount', 'run'], function(event) {
    document.querySelector('.team-counter-current').innerHTML = (review._i + 1)
  })

})// load glide

}//window.onload

 




