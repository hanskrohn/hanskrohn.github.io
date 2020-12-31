let lastScrollTop = 0

//function to make navbar appear / disappear
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav')
  const logo = document.querySelector('.logo')
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop

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

// Init on DOM Load
const intro = "Hi, my name is";
const myName = "Hans Krohn";
const description = ["Student", "Passionate Coder"];

const SingleWord = function(element, word, speed){
  this.speed = speed
  this.element = element
  this.word = word
  this.txt = ''
  this.typeStatic()
}

const WordArray = function(element, words){
  this.element = element
  this.words = words
  this.txt = ''
  this.index = 0
  this.blinks = 0
  this.isDeleting = false;
  this.typeDynamic()
}

const init = () => {
  const introElem = document.getElementById('intro')
  const nameElem = document.getElementById('name')

  introElem.style.borderRight = "2px solid #777777";
  new SingleWord(introElem, intro, 275);

  setTimeout(() => {
    introElem.style.borderRight = "0px";
    nameElem.style.borderRight = "2px solid #777777";
    new SingleWord(nameElem, myName, 300);
  }, 4300)

  setTimeout(() => {
    nameElem.style.borderRight = "0px";
    const descriptionElement = document.getElementById('description')
    descriptionElement.style.borderRight = "2px solid #777777";
    new WordArray(descriptionElement, description)
  }, 7900)
}

SingleWord.prototype.typeStatic = function() {
  const fullTxt = this.word

  this.txt = fullTxt.substring(0, this.txt.length + 1)
  
  this.element.innerHTML = this.txt
  if(this.txt !== fullTxt){
    setTimeout(() => this.typeStatic(), this.speed)
  }
}

WordArray.prototype.typeDynamic = function() {
  const currentIndex = this.index % this.words.length;

  const fullTxt = this.words[currentIndex]

  if(this.isDeleting){
    this.txt = fullTxt.substring(0, this.txt.length - 1)
  }else{
    this.txt = fullTxt.substring(0, this.txt.length + 1)
  }

  this.element.innerHTML = this.txt
  
  let typeSpeed = 300;

  
  if(!this.isDeleting && this.txt === fullTxt){
    typeSpeed = 3000
    this.isDeleting = true
    this.blink()
  }else if(this.isDeleting && this.txt === ''){
    this.isDeleting = false
    this.index++
    typeSpeed = 200
  }else if(this.isDeleting){
    typeSpeed /= 2
  }

  setTimeout(() => this.typeDynamic(), typeSpeed)
}

WordArray.prototype.blink = function() {
  if(this.blinks < 5){
    if(this.blinks % 2 == 0){
      this.element.style.borderRight = "2px solid #777777";
    }else{
      this.element.style.borderRight = "0px";
    }
    this.blinks++
    setTimeout(() => this.blink(), 650)
  }else{
    this.blinks = 0
  }
}

document.addEventListener('DOMContentLoaded', init);
