const navbar = document.querySelector('nav')

navbar.innerHTML = 
`<div class = "navigation flex">
  <div class = "logo">
    <img class = "pointer" src = './images/logo.png' alt = '>~hk72'/>
  </div>
  <div class = "webView">
    <ul class = "flex">
      <li class = "pointer" onclick="smoothScroll(document.getElementById('projects'))" >Projects</li>
      <li class = "pointer" onclick="smoothScroll(document.getElementById('about'))">About</li>
      <li class = "pointer" onclick="smoothScroll(document.getElementById('education'))">Education</li>
      <li class = "pointer" onclick="smoothScroll(document.getElementById('skills'))">Skills</li>
      <li class = "pointer" ><a class = "noUnderline pointer" href = "https://docs.google.com/document/d/1PL5yrsOxB5NR3YaF8XfbL-CTgIfvCr4bk1pz9Avxxfc/edit?usp=sharing">Resume</a></li>
    </ul>
  </div>
  <div class = "mobileView">
    <i class = "checkbtn fa fa-bars" aria-hidden="true" onclick="showMenuBar()"></i>
    <div id="popup"> 
      <i class="far fa-times-circle" aria-hidden="true" onclick="closeMenuBar()"></i>
      <ul>
        <li class = "pointer" onclick="smoothScroll(document.getElementById('projects')); closeMenuBar();" >Projects</li>
        <li class = "pointer" onclick="smoothScroll(document.getElementById('about')); closeMenuBar();">About</li>
        <li class = "pointer" onclick="smoothScroll(document.getElementById('education')); closeMenuBar();">Education</li>
        <li class = "pointer" onclick="smoothScroll(document.getElementById('skills')); closeMenuBar();">Skills</li>
        <li class = "pointer" ><a class = "noUnderline pointer" href = "https://docs.google.com/document/d/1PL5yrsOxB5NR3YaF8XfbL-CTgIfvCr4bk1pz9Avxxfc/edit?usp=sharing">Resume</a></li>
      </ul>
    </div>
  </div>
</div>`

const popup = document.getElementById('popup')
const body = document.querySelector("body")
const closeMenuBar = () => {
  popup.style.right = "100%"
  body.style.overflowY = "auto"
}

const showMenuBar = () => {
  popup.style.right = "0%"
  body.style.overflowY = "hidden"
}

let lastScrollTop = 0

//function to make navbar appear / disappear
window.addEventListener('scroll', () => {
  const logo = document.querySelector('.logo')
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if(scrollTop === 0){
    navbar.style.boxShadow = 'none';
    navbar.style.top = '0px';
    navbar.style.backgroundColor = "rgba(33, 33, 33, 0.0)"
    logo.style.display = "none"
  }
  else if(scrollTop > lastScrollTop){
    navbar.style.top = '-80px';
    navbar.style.boxShadow = 'none';
    navbar.style.backgroundColor = "rgba(33, 33, 33, 1.0)"
    logo.style.display = "none"
  }
  else{
    navbar.style.top = '0px';
    navbar.style.boxShadow = '0px 3px 15px white';
    navbar.style.backgroundColor = "rgba(33, 33, 33, 1.0)"
    logo.style.display = "inline"
  }

  lastScrollTop = scrollTop
})

