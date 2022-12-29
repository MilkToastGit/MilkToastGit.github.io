const projects = {
    'RGB': {
        title: 'RGB',
        date: '8 Oct 2021',
        timeSpan: '3 Weeks',
        team: '2',
        platform: 'Mobile',
        shortDescription: 'Split, combine and refract beams of light to output the right colours in this illuminating puzzle game.',
        roles: [
            {
                heading: 'Programming',
                description: 'As the only programmer of the duo, I created systems to allow for light beam propagation and rendering, and the functionality for the various puzzle elements found in the game.',
            },
            {
                heading: 'Puzzle Design',
                description: 'I designed ten of the thirteen puzzles found in the game, using instructional design techniques to introduce the mechanics to the player.',
            }
        ],
        links: [
            {
                text: 'Game Page',
                link: 'https://owlbearkin.itch.io/rgb'
            }
        ],
        // description: 'I wanted to use the idea of mixing and splitting colours to and from their base components to create engaging and thought-provoking puzzles. I was responsible for coding the different puzzle elements, designing the main systems responsible for light beam propagation and rendering and designing 10 of the 13 puzzles, following instructional design techniques to teach the player the mechanics.',
        images: ['images/rgb/01.png', 'images/rgb/02.png', 'images/rgb/03.png'],
        backgroundColour: "#2b2b2b"
    },

    'LA Dogoir': {
        title: 'LA Dogoir',
        date: '5 May 2022',
        timeSpan: '9 Weeks',
        team: '4',
        platform: 'PC',
        shortDescription: 'A multiplayer, film-noir murder mystery where you and your partner play as a detective and his (also detective) dog.',
        roles: [
            {
                heading: 'Programming',
                description: 'I created the character controllers for both players, using Photon to allow for online multiplayer. I also implemented the communication system, smell trails and various events and interactions.',
            },
            {
                heading: 'Technical Art',
                description: 'I created a simple visual effect for smell trails, implemented dynamic animations for the player characters and an indicator for messages sent between players. I also set up lighting for one of the scenes and used post-processing effects to achieve the film-noir look and highlight certain colours.',
            }
        ],
        links: [
            {
                text: 'Game Page',
                link: 'https://katanoueki.itch.io/la'
            }
        ],
        // description: 'This project was all about the importance of different perspectives and working through communication difficulties. I created a system to allow players to communicate by combining words into phrases, using Photon Engine to send the data between clients. I created the movement controllers for both the dog and human player and a visual effect for scent trails.',
        images: ['images/la-dogoir/01.png', 'images/la-dogoir/02.png', 'images/la-dogoir/03.png'],
        backgroundColour: "#4a4744"
    },

    '5pm': {
        title: '5pm',
        date: '25 Aug 2021',
        timeSpan: '12 Weeks',
        team: '4',
        platform: 'PC',
        shortDescription: "A collection of microgames themed around completing menial tasks for your coworkers as you desparately try to clock off.",
        roles: [
            {
                heading: 'Programming',
                description: 'As the lead programmer, I created the base systems that hold the game together and a variety of scripts for other team members to reuse in their levels. I also created scripts unique to certain microgames and designed a number of them.',
            },
            {
                heading: 'Project Management',
                description: 'Throughout development, I used a number project management tools and techniques, such as a burndown chart and task tracker, to make sure that we were on track to complete the game by the deadline. I regularly revised our goals and priorities and communicated these with the team, delegating tasks appropriately.',
            }
        ],
        links: [
            {
                text: 'Game Page',
                link: 'https://spaghettaboutitstudios.itch.io/5pm-im-outta-here'
            }
        ],
        // description: 'As my first finished game project this one is a little rough around the edges but I\'m still quite proud of it and it taught me a lot about the game development process and project management. I created various scripts to be reused throughout other microgames to reduce workload, designed and created several of the microgames themselves and scripts that managed scene loading, transitions and win/lose states. I was also in charge of managing the project and making sure we were on track to release on time.',
        images: ['images/5pm/01.gif', 'images/5pm/02.gif', 'images/5pm/03.gif'],
        backgroundColour: '#4d4328'
    },

    'Star Garden': {
        title: 'Star Garden',
        date: '19 Aug 2022',
        timeSpan: '12 Weeks',
        team: '7',
        platform: 'Mobile',
        shortDescription: 'A monetisable pet sim for astrology enthusiasts. Collect pets, decorate your island and spend some dollarydoos.',
        roles: [
            {
                heading: 'Programming',
                description: 'As lead programmer, I designed and implemented various interworking systems for inventory, currency, lootboxes, decorations, pet behaviour and managing save data. Monetisation methods are currently placeholder but we plan to develop this game further and release it on the android app store in the near future.',
            }
        ],
        links: [
            {
                text: 'Game Page',
                link: 'https://sites.google.com/view/star-garden/home'
            }
        ],
        //'The primary purpose of this project was to create a game that would generate revenue. I was the programmer for this project, creating various interworking systems such as an inventory, lootboxes, currency, decorations, pets and reading and writing save data. Since the game was created as a university project, the monetisation methods are not implemented and are currently just placeholders but we plan to develop this game further and release it on the android app store in the near future.',
        images: ['images/star-garden/01.gif'],
        backgroundColour: "#71006F"
    },

    'Axiom': {
        title: 'Axiom',
        date: '16 Dec 2022',
        timeSpan: '6 Months',
        team: '12',
        platform: 'PC',
        shortDescription: 'Play as an assassin with the power to enter the human mind in this fast-paced, non-euclidean parkour game.',
        roles: [
            {
                heading: 'Technical Art',
                description: "I was responsible for the creation and implementation of various complex visual effects, scene transitions and animations. Some examples include portal rendering, an animated shader for a 'mind core,' static poses/shots for 'memories' and some animation for the final cutscene.",
            },
            {
                heading: 'Programming',
                description: "As secondary programmer, I was responsible for the 'non-euclidean' mechanics such as portals and gravity shifting ramps and platforms. I created a guide trail using bezier curves to guide lost players and various scripts to aid with creating dynamic animations and smooth transition effects.",
            }
        ],
        links: [
            {
                text: 'Game Page',
                link: 'https://store.steampowered.com/app/2176310/Axiom/'
            }
        ],
        images: ['images/axiom/portals.gif', 'images/axiom/gravity-ramps.gif', 'images/axiom/guide-trail.gif', 'images/axiom/mind-core.gif', 'images/axiom/final-cutscene.gif'],
        backgroundColour: "#551A1C"
    }
};

function replaceProjectInfo(base, project) {
    base.getElementsByClassName('title')[0].innerText = project.title;
    base.getElementsByClassName('short-description')[0].innerText = project.shortDescription;
    base.getElementsByClassName('date')[0].innerText = project.date;
    base.getElementsByClassName('time-span')[0].innerText = project.timeSpan;
    base.getElementsByClassName('team')[0].innerText = "Team Size: " + project.team;
    base.getElementsByClassName('platform')[0].innerText = "Platform: " + project.platform;

    base.getElementsByClassName('project-details')[0].style.backgroundColor = project.backgroundColour;

    project.leftCarouselButton = base.getElementsByClassName('left-carousel-button')[0];
    project.leftCarouselButton.addEventListener('click', function() {incrementCarousel(-1, project)});
    project.rightCarouselButton = base.getElementsByClassName('right-carousel-button')[0];
    project.rightCarouselButton.addEventListener('click', function() {incrementCarousel(1, project)});

    let rolesBase = base.getElementsByClassName('project-roles')[0];
    for(let role of project.roles) {
        let heading = document.createElement('h2');
        heading.innerText = role.heading;
        rolesBase.append(heading);

        let description = document.createElement('p');
        description.innerText = role.description;
        rolesBase.append(description);
    }

    let linksBase = base.getElementsByClassName('project-links')[0];
    for(let link of project.links) {
        let button = document.createElement('a');
        button.innerText = link.text;
        button.href = link.link;
        button.target= "_blank";
        linksBase.append(button);
    }

    project.imgIndex = 0;
    project.imgElements = [];
    let imagesBase = base.getElementsByClassName('project-carousel')[0];
    for(let src of project.images) {
        let imgElement = document.createElement('img');
        imgElement.src = src;
        imgElement.classList.add("project-image")
        imagesBase.insertBefore(imgElement, project.leftCarouselButton);

        let i = project.imgElements.length;
        imgElement.addEventListener('click', () => {clickCarouselImage(project, i)});

        project.imgElements.push(imgElement);

        if(project.imgElements.length > 1)
            imgElement.style.display = "none";
    }

    project.imageWindows = [];

    incrementCarousel(0, project);    
}

function incrementCarousel(amount, project) {
    project.imgElements[project.imgIndex].style.display = "none";

    project.imgIndex += amount;
    project.imgElements[project.imgIndex].style.display = "block";    

    project.leftCarouselButton.style.display = (project.imgIndex <= 0 ? "none" : "block");
    project.rightCarouselButton.style.display = (project.imgIndex >= project.imgElements.length - 1 ? "none" : "block");    
}

function clickCarouselImage(project, index) {
    console.log(project.imageWindows[index]);
    if(project.imageWindows[index] !== undefined) {
        project.imageWindows[index].focus();
        return;
    }

    let img = new Image();

    img.onload = function(){
      setCarouselImagePopupSize(img, project, index);
    }
    
    img.src = project.images[index];
}

function setCarouselImagePopupSize(img, project, index) {
    let element = project.imgElements[index];

    let widthIsLargest = img.width > img.height;
    let largestDimension = 600;
    let size = new Vector();
    size.x = widthIsLargest ? largestDimension : img.width / img.height * largestDimension;
    size.y = widthIsLargest ? img.height / img.width * largestDimension : largestDimension;

    let window = new Popup(new Vector(150, 200), size, null, true);
    project.imageWindows[index] = window;
    let imgElement = document.createElement('img');
    imgElement.src = element.src;
    imgElement.style.width = '100%';
    window.content.append(imgElement);
    window.content.style.overflow = 'hidden';
    window.show();
}

let windowRgb = new Popup(new Vector(100, 45), new Vector(600, 350), 'project-cover');
replaceProjectInfo(windowRgb.content, projects["RGB"]);
let shortcutRgb = new Shortcut(new Vector(50, 50), new Vector(100, 100), desktop, windowRgb, 'images/icon-rgb.png');

let window5pm = new Popup(new Vector(125, 60), new Vector(600, 350), 'project-cover');
replaceProjectInfo(window5pm.content, projects["5pm"]);
let shortcut5pm = new Shortcut(new Vector(150, 150), new Vector(100, 100), desktop, window5pm, 'images/icon-5pm.png');

let windowStarGarden = new Popup(new Vector(150, 85), new Vector(600, 550), 'project-cover');
replaceProjectInfo(windowStarGarden.content, projects["Star Garden"]);
let shortcutStarGarden = new Shortcut(new Vector(50, 250), new Vector(100, 100), desktop, windowStarGarden, 'images/icon-star-garden.png');

let windowLaDogoir = new Popup(new Vector(150, 85), new Vector(600, 350), 'project-cover');
replaceProjectInfo(windowLaDogoir.content, projects["LA Dogoir"]);
let shortcutLaDogoir = new Shortcut(new Vector(150, 350), new Vector(100, 100), desktop, windowLaDogoir, 'images/icon-la-dogoir.png');

let windowAxiom = new Popup(new Vector(150, 85), new Vector(600, 350), 'project-cover');
replaceProjectInfo(windowAxiom.content, projects["Axiom"]);
let shortcutAxiom = new Shortcut(new Vector(50, 450), new Vector(100, 100), desktop, windowAxiom, 'images/icon-axiom.png');