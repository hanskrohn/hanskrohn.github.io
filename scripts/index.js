// Init on DOM Load
const intro = "Hi, my name is";
const myName = "Hans Krohn";
const description = ["Software Engineer", "Life long learner", "Passionate Coder", "Clean code Enthusiast"];

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
  const aside = document.getElementById('aside')
  if(window.innerWidth > 800){
    setTimeout(() => {
      aside.innerHTML = `<a data-aos="fade-right" data-aos-offset="0" data-aos-once="true" data-aos-delay="0" class = "pointer" href = 'https://github.com/hanskrohn'><i class="fa fa-github" aria-hidden="true"></i></a>
                          <a data-aos="fade-right" data-aos-offset="0" data-aos-once="true" data-aos-delay="150" class = "pointer" href = 'https://www.linkedin.com/in/hans-krohn'><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                          <a data-aos="fade-right" data-aos-offset="0" data-aos-once="true" data-aos-delay="300" class = "pointer" href = 'mailto:hanskrohn70@outlook.com'><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
                          <div data-aos="fade-up" data-aos-offset="0" data-aos-once="true" data-aos-delay="450" class="vl"></div>`
    }, (100 * 14 + 50) + (150 * 10 + 50))
  }else{
    aside.innerHTML = `<a class = "pointer" href = 'https://github.com/hanskrohn'><i class="fa fa-github" aria-hidden="true"></i></a>
                        <a class = "pointer" href = 'https://www.linkedin.com/in/hans-krohn'><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                        <a class = "pointer" href = 'mailto:hanskrohn70@outlook.com'><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
                        <div class="vl"></div>`
  }
  
  const introElem = document.getElementById('intro')
  const nameElem = document.getElementById('name')

  introElem.style.borderRight = "2px solid #777777";
  new SingleWord(introElem, intro, 100);

  setTimeout(() => {
    introElem.style.borderRight = "0px";
    nameElem.style.borderRight = "2px solid #777777";
    new SingleWord(nameElem, myName, 150);
  }, 100 * 14 + 50)

  setTimeout(() => {
    nameElem.style.borderRight = "0px";
    const descriptionElement = document.getElementById('description')
    descriptionElement.style.borderRight = "2px solid #777777";
    new WordArray(descriptionElement, description)
  }, (100 * 14 + 50) + (150 * 10 + 50))
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
  
  let typeSpeed = 200;

  
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

window.smoothScroll = function(target) {
  var scrollContainer = target;
  do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do { //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
