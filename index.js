window.addEventListener('scroll',function(){
    const nav = document.getElementById('navContainer');
    if(window.pageYOffset>10){
      nav.classList.add("addShadow");
    }else{
      nav.classList.remove("addShadow");
    }
  });