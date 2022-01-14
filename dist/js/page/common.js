
document.addEventListener("DOMContentLoaded", function () {

  /******************************************** 
  * perf-to-animate
  ********************************************/

  document.querySelector('body').classList.remove('perf-no-animation')

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

      
      if(document.querySelector('.nav-menu .show-sub') && document.body.clientWidth > 1200){
           
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

}); //DOMContentLoaded


 




