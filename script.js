let responsive = document.querySelector('.toggle');
let view = document.querySelector('nav ul');
let hide = document.querySelector('.content')
let home = document.querySelector('.home')
responsive.addEventListener("click" , function () {
  if (view.style.display === "none"){
    view.style.display = 'block'
    hide.style.display ='none'
    home.style.top = '-17em'
    
    
  }
  else{
    view.style.display = 'none',
    hide.style.display ='flex';
    home.style.top = '-5.2em'
    
  }
});



