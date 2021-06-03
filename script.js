let responsive = document.querySelector('.toggle');
let view = document.querySelector('nav ul');
let hide = document.querySelector('.content')

responsive.addEventListener("click" , function () {
  if (view.style.display === "none"){
    view.style.display = 'block'
    hide.style.display ='none'
    
    
  }
  else{
    view.style.display = 'none',
    hide.style.display ='flex';

  }
});

window.addEventListener('scroll',function() {
  var nav = document.querySelector('nav');
  nav.classList.toggle('sticky',window.scrollY>0);
  
})
