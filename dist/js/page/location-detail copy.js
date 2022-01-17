
document.addEventListener("DOMContentLoaded", function () {



  /******************************************** 
  * vacancy
  ********************************************/

   if(document.querySelectorAll('.item-vacancy__head')){

    const faqItems = document.querySelectorAll('.item-vacancy__head')

    faqItems.forEach(function(item, index){
        item.addEventListener('click', function(){
            this.parentNode.classList.toggle('open')
        })
    })

} 
  

});