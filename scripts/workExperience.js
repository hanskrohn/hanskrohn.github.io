const experiences = [
  {
    title: 'Microsoft Software Engineering Intern',
    description: 'Worked closely with other engineers on the team to develop a UI for the project. The UI I created is currently the only way to visualize the project and will be a major developer tool moving forward.',
    dates: 'May 2021 - August 2021',
    image: "./images/microsoftLogo.png",
    alt: "Microsoft"
  },
  {
    title: 'Ivey FinTech Innovation',
    description: 'Worked with a group of Software Engineering and Computer Science students to develop a web app for Community Living London.',
    dates: 'October 2020 - July 2021',
    image: "./images/iveyFintech.jpg",
    alt: "Ivey Fintech"
  }
]


function createWorkExperienceCards(){
  let innerHTML = ''

  experiences.forEach((experience, i) => {
    innerHTML += i % 2 === 0 ? template1(experience) : template2(experience)
  })

  document.getElementById("experiences").innerHTML = innerHTML
}

function template1({title, description, dates, image, alt}){
  return `<div id = "flexDirectionColumForMobile" class = "card flex" data-aos="fade-left" data-aos-offset="200" data-aos-delay="50"  data-aos-duration="1000" data-aos-once="true">
            <div class="flex60">
              <div class = "content">
                <h4>${title}</h4>
                <p>
                    ${description}
                </p>
                <p class = "technologies">${dates}</p>
              </div>
            </div>
            <div class="flex40 flex">
              <div class = "image">
                <img src = ${image} alt = ${alt}/>
              </div>
            </div>
          </div>`
}

function template2({title, description, dates, image, alt}){
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
                <p class = "technologies">${dates}</p>
              </div>
            </div>
          </div>`
}

createWorkExperienceCards()