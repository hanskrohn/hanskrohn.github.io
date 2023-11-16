const experiences = [
  {
    title: 'Microsoft Software Engineer',
    descriptions: ['Worked as part of a team developing a Distributed Data Structure (DDS) SDK. The SDK abstracted a lot of the data storage and synchronization logic behind a few APIs. This enabled consumers of our package to focus on developing rich user experiences instead of focusing on how data is managed. As the product began to move towards General Public Release, I helped set up the Azure infrastructure that hosts the SDK.',
    'I was later placed on a V-Team where I acted as a FullStack Engineer, developing Frontend experiences on top of our team\'s SDK.',
    'Currently, I am working as a FullStack engineer, creating Proof of Concept (PoC) and Frontend packages of what could be done with Microsoft AI tools.'
    ],
    dates: 'July 2022 - Present',
    image: "./images/microsoftLogo.png",
    alt: "Microsoft"
  },
  {
    title: 'Microsoft Software Engineering Intern',
    descriptions: ['Spearheaded the development of a crucial React App serving as the team\'s primary debugging tool. This application provided a dynamic visual representation of data stored per DDS Block, offering insights into the organization and structure of the information.'],
    dates: 'May 2021 - August 2021',
    image: "./images/microsoftLogo.png",
    alt: "Microsoft"
  },
  {
    title: 'Ivey FinTech Innovation',
    descriptions: ['Worked with a group of Software Engineering and Computer Science students to develop a web app for Community Living London.'],
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

function template1({title, descriptions, dates, image, alt}){
  const descriptionsText = descriptions.map(description => `<p>${description}</p>`)
  return `<div id = "flexDirectionColumForMobile" class = "card flex" data-aos="fade-left" data-aos-offset="200" data-aos-delay="50"  data-aos-duration="1000" data-aos-once="true">
            <div class="flex60">
              <div class = "content">
                <h4>${title}</h4>
                ${descriptionsText.join('')}
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

function template2({title, descriptions, dates, image, alt}){
  const descriptionsText = descriptions.map(description => `<p>${description}</p>`)
  return `<div id = "flexDirectionColumForMobile" class = "card flex" data-aos="fade-right" data-aos-offset="200" data-aos-delay="50"  data-aos-duration="1000" data-aos-once="true">
            <div class="flex40 flex">
              <div class = "image">
                <img src = ${image} alt = ${alt}/>
              </div>
            </div>
            <div class="flex60">
              <div class = "content">
                <h4>${title}</h4>
                ${descriptionsText.join('')}
                <p class = "technologies">${dates}</p>
              </div>
            </div>
          </div>`
}

createWorkExperienceCards()