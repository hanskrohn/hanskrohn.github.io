const apps = [
  {
    title: 'Tracker',
    description: 'A web app I developed to help users quickly create and manage charts. Users can quickly create projects and view the data with their choice of four graph styles: Bar, Pie, Polar, and line.',
    technologies: 'NodeJS | MongoDB | ReactJS',
    appLink: "https://thetechiechart.herokuapp.com/",
    githubLink: "https://github.com/hanskrohn/Tracker-Frontend",
    image: "./images/tracker.png",
    alt: "Tracker"
  },
  {
    title: 'Game Board',
    description: 'A simple Tic Tac Toe game where users can play in a local match or against the computer. Currently, the game only has one level. Using the Minimax algorithm the computer is sure to win or tie. Don\'t belive me? Try it yourself!',
    technologies: 'Vanilla JS | HTML | CSS',
    appLink: "https://hanskrohn.github.io/GameBoard/",
    githubLink: "https://github.com/hanskrohn/GameBoard",
    image: "./images/GameBoard.png",
    alt: "GameBoard"
  },
  {
    title: 'E-commerce',
    description: 'A tech e-commerce site I developed. I used this project to expand on my web development knowledge. I mainly focused on the user experience, by creating visually appealing animations.',
    technologies: 'NodeJS | MongoDB | ReactJS',
    appLink: "https://thetechiestore.herokuapp.com/",
    githubLink: "https://github.com/hanskrohn/TheTechieStore-FrontEnd",
    image: "./images/eccomerce.png",
    alt: "E-commerce"
  },
  {
    title: 'High or Low',
    description: ' Web version of a the card game "Higher or Lower". Users can create rooms, and play versus their friends live.',
    technologies: 'NodeJS | SocketIO | AngularJS',
    appLink: "https://high-or-low-game.herokuapp.com/",
    githubLink: "https://github.com/hanskrohn/HighOrLowFrontEnd",
    image: "./images/Highorlow.png",
    alt: "High or Low"
  }
]


function createAppCards(){
  let innerHTML = ''

  apps.forEach((app, i) => {
    innerHTML += i % 2 === 0 ? template1(app) : template2(app)
  })

  document.getElementById("apps").innerHTML = innerHTML
}

function template1({title, description, technologies, appLink, githubLink, image, alt}){
  return `<div id = "flexDirectionColumForMobile" class = "card flex" data-aos="fade-left" data-aos-offset="200" data-aos-delay="50"  data-aos-duration="1000" data-aos-once="true">
            <div class="flex60">
              <div class = "content">
                <h4>${title}</h4>
                <p>
                  ${description}
                </p>
                <p class = "technologies">${technologies}</p>
                <div class = "flex icons start">
                  <a class = "pointer" href=${appLink}><i class="fas fa-external-link-alt"></i></a>
                  <a class = "pointer" href = ${githubLink}><i class="fa fa-github" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
            <div class="flex40 flex">
              <div class = "image">
                <img src = ${image} alt = ${alt}/>
              </div>
            </div>
          </div>`
}

function template2({title, description, technologies, appLink, githubLink, image, alt}){
  return `<div id = "flexDirectionColumForMobile" class = "card flex" data-aos="fade-right" data-aos-offset="200" data-aos-delay="50"  data-aos-duration="1000" data-aos-once="true">
            <div class="flex40 flex">
              <div class = "image">
                <img src = ${image} alt = ${alt}/>
              </div>
            </div>
            <div class="flex60">
              <div class = "content">
                <h4>${title}</h4>
                <p>
                  ${description}
                </p>
                <p class = "technologies">${technologies}</p>
                <div class = "flex icons end">
                  <a class = "pointer" href = ${appLink}><i class="fas fa-external-link-alt"></i></a>
                  <a class = "pointer" href = ${githubLink}><i class="fa fa-github" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>`
}

createAppCards()