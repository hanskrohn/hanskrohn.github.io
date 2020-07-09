  let menu = false

  let lastScrollTop = 0

  //function to make navbar appear / disappear
  window.addEventListener('scroll', () => {

    const navbar = document.getElementById('navbar')
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if(menu){
      navbar.style.boxShadow = 'none';
      navbar.style.top = '0px';
    }
    else if(scrollTop === 0){
      navbar.style.boxShadow = 'none';
      navbar.style.top = '0px';
    }
    else if(scrollTop > lastScrollTop){
      navbar.style.top = '-80px';
      navbar.style.boxShadow = 'none';
    }
    else{
      navbar.style.top = '0px';
      navbar.style.boxShadow = '0 3px 20px white';
    }

    lastScrollTop = scrollTop

  })

  const bringOutMenuBar = () => {

    const hUL = document.getElementById('hUL')
    const body = document.getElementById('landing')

    if(menu ===  false){
      hUL.style.left = '0%'
      setMenu(true)
    }
    else if (menu === true) {
      hUL.style.left = '-100%'
      setMenu(false)
    }

  }

  const setMenu = (value) => {
    menu = value
  }
