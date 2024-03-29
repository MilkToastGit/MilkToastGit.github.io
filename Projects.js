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
                description: 'As lead programmer, I designed and implemented various interworking systems for inventory, currency, lootboxes, decorations, pet behaviour and managing save data. Monetisation methods are placeholder as this was created as a proof of concept.',
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
        images: ['images/axiom/portal-jump.gif', 'images/axiom/guide-trail.gif', 'images/axiom/gravity-ramp.gif', 'images/axiom/memory.gif', 'images/axiom/mind-core.gif',],
        backgroundColour: "#551A1C"
    },

    'Wonderland': {
        title: 'Wonderland VR',
        date: 'Feb 2023',
        timeSpan: '5 Months',
        team: '11',
        platform: 'VR',
        shortDescription: 'Created with Unreal Engine in collaboration with the WA Museum - Enter the curious world of Wonderland in this short VR experience.',
        roles: [
            {
                heading: 'Programming',
                description: "As project lead and lead programmer, I was tasked with keeping track of overall progress, piecing together and making modifications to everyone's contributions and making sure the game ran smoothly on the provided hardware.",
            },
            {
                heading: 'Technical Art',
                description: "I created the opening scene, transitions between each scene and added some interactive animations throughout the game",
            }
        ],
        links: [
            {
                text: 'Game Page',
                link: 'https://milktoastowo.itch.io/wonderland-vr'
            }
        ],
        images: ['images/wonderland/hole-fall.gif'],
        backgroundColour: "#2A1741"
    }
};

const positions = {
    'EverySecond': {
        company: 'EverySecond Studio',
        position: 'Contractor - Lead Programmer',
        timeSpan: 'Jun 2023 - Present',
        description: 'As a contractor with Everysecond Studios, contributing to the development of "Omi Oh My AI," a captcha-based puzzle game, my primary responsibilities have involved implementing core game elements, developer debug features, bug fixes, and, most recently, localization tools.\n\nIn November 2023, I was promoted to the role of lead programmer for the project. This new role entrusted me with managing the codebase and implementing any remaining core mechanics and systems. In addition to implementing some of the more essential game elements, I’ve also created various smaller visual effects and mini-games, such as a UI glitch effect and a playful homage to the Mario 64 face-stretch title screen, featuring our game’s mascot, Omi.',
        links: [
            {
                text: 'Studio Page',
                link: 'https://twitter.com/EverySecondTeam'
            },
            {
                text: 'Game Page',
                link: 'https://store.steampowered.com/app/1867110/Omi_Oh_My_AI/'
            }
        ],
        accentColour: '#FFCC66'
    },
    'Flufflesocket': {
        company: 'Flufflesocket Studios',
        position: 'Contractor - Unity Generalist',
        timeSpan: 'Jul 2023 - Feb 2024',
        description: 'As a contractor for Flufflesocket Studios on “Farseer’s Domain,” I contributed to various technical and visual aspects of the project. My responsibilities included creating and implementing visual effects using shaders, coding UI functionality, and addressing bugs and necessary improvements.\n\nMuch of my role involved enhancing the game’s visual and interactive elements. This included creating a fog of war shader, an animated shader effect to illustrate player movement and a nested tooltip system for explaining the game’s mechanics and key terms to players. Additionally, I worked on refining the game’s garden map by adding small visual effects and improvements such as adding sway animation to foliage and stylised flowing water to a fountain in the center of the map.\n\nMany of these tasks required understanding, modifying and expanding upon a pre-existing and expansive codebase. I started out with little experience in this area and have since gained essential skills in reading code written by others and integrating new systems into it.',
        links: [
            {
                text: 'Game Page',
                link: 'https://farseersdomain.com/'
            }
        ],
        accentColour: '#9D84FF'
    },
    'Octarine': {
        company: 'Octarine Arts',
        position: 'Director',
        timeSpan: 'Jun 2023 - Present',
        description: 'As a director at Octarine Arts, contributing to the development of “Finch & Archie,” a co-op detective game funded by screenwest, I am an integral part of a close-knit team of six developers, driven by our shared passion for game development. Working in tandem with this team, I take on the responsibility of programming core visual and gameplay elements while also contributing to critical game design and mechanics decisions during our weekly team meetings.\n\nGiven our small team size, my role extends to many different areas from front-end visual work to designing and implementing essential systems and functionality. Some of my more noteworthy tasks include managing input, networking, and dynamic animations for the character controllers, back-end and front-end implementation for collecting and sending ‘leads,’ and some of the back-end for the player communication system.\n\nAlthough my contributions to the game in a technical sense are important, effective communication and collaborative work, alongside my ability to work independently when needed, have been essential to the success of the project. I actively participate in discussions about marketing strategies, budget allocation, responding to feedback, managing our contracted artist team and ensuring that we meet contractual obligations and deadlines.',
        links: [
            {
                text: 'Studio Page',
                link: 'https://linktr.ee/octarinearts'
            }
        ],
        accentColour: '#7DE9B1'
    },
    'UnnaturalFreaks': {
        company: 'Unnatural Freaks Studio',
        position: 'Contractor - Programmer/Developer',
        timeSpan: 'Mar 2023 - Present',
        description: '“The Last Werewolf” is a narrative-based mystery game being produced by a small team consisting of one main developer and several contracted artists/developers. I have been working alongside the main developer/writer to develop more robust game systems so that they can focus on writing the narrative and dialogue. This involves creating a range of new systems to manage variables and functions that were previously unhandled and disorganized. One of these systems allows for the creation and management of any number of variables of different kinds that affect the dialogue and story in certain ways. Finally, I integrate these systems with Yarnspinner, a tool for writing dynamic, branching dialogue, enabling communication from within dialogue scripts.\n\nThe game’s creator/main developer did not come from a programming background, and as such, most of the codebase consisted of messy, inefficient code which looked like a huge headache to try and manage. My main goal is to enable the addition of new content for the game without the need to write any new code, and I have really enjoyed the process of making this possible. I have made sure that, as much as possible, the game functions by itself, and anything that needs to be managed/changed throughout the game can be done through Yarnscripts (scripts used to write the game’s dialogue), and within the scenes themselves. So far my contributions have been appreciated and a welcome change to the main developer’s workflow.\n\nFuture plans for the project include a custom tool for controlling elements in the scene based on Yarnspinner variables, support for dynamic journal entries and smartphone messages to be created with Yarnscripts, and a UI overhaul for more dynamic UI elements and significantly easier implementation of new content.',
        links: [
            {
                text: 'Studio Page',
                link: 'https://unnaturalfreaksstudio.com/'
            },
            {
                text: 'Game Page',
                link: 'https://store.steampowered.com/app/2212520/'
            }
        ],
        accentColour: '#DBDBDB'
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

    addLinks(base, project.links);

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

function replacePositionInfo(base, position) {
    let company = base.getElementsByClassName('company')[0];
    company.innerText = position.company;
    company.style.color = position.accentColour;
    base.getElementsByClassName('position')[0].innerText = position.position;
    base.getElementsByClassName('timeSpan')[0].innerText = position.timeSpan;
    base.getElementsByClassName('description')[0].innerText = position.description;

    addLinks(base, position.links);
}

function addLinks(base, links) {
    let linksBase = base.getElementsByClassName('project-links')[0];
    for(let link of links) {
        let button = document.createElement('a');
        button.innerText = link.text;
        button.href = link.link;
        button.target= "_blank";
        linksBase.append(button);
    }
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

//PROJECTS

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

let windowWonderland = new Popup(new Vector(150, 85), new Vector(650, 400), 'project-cover');
replaceProjectInfo(windowWonderland.content, projects["Wonderland"]);
let shortcutWonderland = new Shortcut(new Vector(250, 50), new Vector(100, 100), desktop, windowWonderland, 'images/icon-wonderland.png');

// POSITIONS

let windowEverySecond = new Popup(new Vector(150, 85), new Vector(700, 300), 'position-cover');
replacePositionInfo(windowEverySecond.content, positions["EverySecond"]);
let shortcutEverySecond = new Shortcut(new Vector(50, 50), new Vector(100, 100), desktop, windowEverySecond, 'images/icon-everysecond.png', 'top-right');

let windowFlufflesocket = new Popup(new Vector(175, 105), new Vector(700, 300), 'position-cover');
replacePositionInfo(windowFlufflesocket.content, positions["Flufflesocket"]);
let shortcutFlufflesocket = new Shortcut(new Vector(50, 250), new Vector(100, 100), desktop, windowFlufflesocket, 'images/icon-flufflesocket.png', 'top-right');

let windowOctarine = new Popup(new Vector(200, 130), new Vector(700, 300), 'position-cover');
replacePositionInfo(windowOctarine.content, positions["Octarine"]);
let shortcutOctarine = new Shortcut(new Vector(50, 450), new Vector(100, 100), desktop, windowOctarine, 'images/icon-octarine.png', 'top-right');

let windowUnnaturalFreaks = new Popup(new Vector(225, 155), new Vector(700, 300), 'position-cover');
replacePositionInfo(windowUnnaturalFreaks.content, positions["UnnaturalFreaks"]);
let shortcutUnnaturalFreaks = new Shortcut(new Vector(150, 350), new Vector(100, 100), desktop, windowUnnaturalFreaks, 'images/icon-unnaturalfreaks.png', 'top-right');