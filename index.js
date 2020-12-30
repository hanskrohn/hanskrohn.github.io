let menu = false

let lastScrollTop = 0

//function to make navbar appear / disappear
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav')
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop

  // if(menu){
  //   console.log('1')
  //   navbar.style.boxShadow = 'none';
  //   navbar.style.top = '0px';
  // }
  // else 

  if(scrollTop === 0){
    navbar.style.boxShadow = 'none';
    navbar.style.top = '0px';
  }
  else if(scrollTop > lastScrollTop){
    navbar.style.top = '-80px';
    navbar.style.boxShadow = 'none';
  }
  else{
    navbar.style.top = '0px';
    navbar.style.boxShadow = '0px 3px 15px black';
  }

  lastScrollTop = scrollTop

})