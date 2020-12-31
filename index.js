let menu = false

let lastScrollTop = 0

//function to make navbar appear / disappear
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav')
  const logo = document.querySelector('.logo')
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop

  // if(menu){
  //   console.log('1')
  //   navbar.style.boxShadow = 'none';
  //   navbar.style.top = '0px';
  // }
  // else 
  console.log(scrollTop, lastScrollTop)
  if(scrollTop === 0){
    navbar.style.boxShadow = 'none';
    navbar.style.top = '0px';
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.0)"
    logo.style.display = "none"
  }
  else if(scrollTop > lastScrollTop){
    navbar.style.top = '-80px';
    navbar.style.boxShadow = 'none';
    navbar.style.backgroundColor = "rgba(0, 0, 0, 1.0)"
    logo.style.display = "none"
  }
  else{
    navbar.style.top = '0px';
    navbar.style.boxShadow = '0px 3px 15px black';
    navbar.style.backgroundColor = "rgba(0, 0, 0, 1.0)"
    logo.style.display = "inline"
  }

  lastScrollTop = scrollTop

})