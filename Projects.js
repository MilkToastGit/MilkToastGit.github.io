const projects = {
    'RGB': {
        title: 'RGB',
        date: '8 Oct 2021',
        timeSpan: '3 Weeks',
        shortDescription: 'Mobile - Puzzle',
        roles: [
            {
                heading: 'Programming',
                description: '',
            }
        ],
        // description: 'I wanted to use the idea of mixing and splitting colours to and from their base components to create engaging and thought-provoking puzzles. I was responsible for coding the different puzzle elements, designing the main systems responsible for light beam propagation and rendering and designing 10 of the 13 puzzles, following instructional design techniques to teach the player the mechanics.',
        images: ['images/rgb/01.png', 'images/rgb/02.png', 'images/rgb/03.png']
    },
    'LA Dogoir': {
        title: 'LA Dogoir',
        date: '5 May 2022',
        timeSpan: '9 Weeks',
        shortDescription: 'PC - Multiplayer - Mystery',
        roles: [
            {
                heading: 'Programming',
                description: '',
            }
        ],
        // description: 'This project was all about the importance of different perspectives and working through communication difficulties. I created a system to allow players to communicate by combining words into phrases, using Photon Engine to send the data between clients. I created the movement controllers for both the dog and human player and a visual effect for scent trails.',
        images: ['images/la-dogoir/01.png', 'images/la-dogoir/02.png', 'images/la-dogoir/03.png']
    },
    '5pm': {
        title: '5pm',
        date: '25 Aug 2021',
        timeSpan: '12 Weeks',
        team: '4',
        platform: 'PC',
        shortDescription: "A blah blah blah game for blah blah blah people. Action, action, action and more! That's all you need to know!",
        roles: [
            {
                heading: 'Programming',
                description: 'Nulla tellus sem, viverra eu, ultricies ac, mattis et, velit. Maecenas quis magna. Ut viverra nisl eu ipsum. Maecenas rhoncus. Duis mattis nisi nec',
            },
            {
                heading: 'Project Management',
                description: 'Nulla tellus sem, viverra eu, ultricies ac, mattis et, velit. Maecenas quis magna. Ut viverra nisl eu ipsum. Maecenas rhoncus. Duis mattis nisi nec',
            }
        ],
        // description: 'As my first finished game project this one is a little rough around the edges but I\'m still quite proud of it and it taught me a lot about the game development process and project management. I created various scripts to be reused throughout other microgames to reduce workload, designed and created several of the microgames themselves and scripts that managed scene loading, transitions and win/lose states. I was also in charge of managing the project and making sure we were on track to release on time.',
        images: ['images/5pm/01.gif', 'images/5pm/02.gif', 'images/5pm/03.gif'],
        backgroundColour: '#71006F'
    },
    'Star Garden': {
        title: 'Star Garden',
        date: '19 Aug 2022',
        timeSpan: '12 Weeks',
        shortDescription: 'Mobile - Monetised - Pet Sim',
        roles: [
            {
                heading: 'Programming',
                description: '',
            }
        ],
        //'The primary purpose of this project was to create a game that would generate revenue. I was the programmer for this project, creating various interworking systems such as an inventory, lootboxes, currency, decorations, pets and reading and writing save data. Since the game was created as a university project, the monetisation methods are not implemented and are currently just placeholders but we plan to develop this game further and release it on the android app store in the near future.',
        images: ['images/star-garden/01.gif']
    }
};

function replaceProjectInfo(base, project) {
    base.getElementsByClassName('title')[0].innerText = project.title;
    base.getElementsByClassName('short-description')[0].innerText = project.shortDescription;
    base.getElementsByClassName('date')[0].innerText = project.date;
    base.getElementsByClassName('time-span')[0].innerText = project.timeSpan;
    base.getElementsByClassName('team')[0].innerText = "Team Size: " + project.team;
    base.getElementsByClassName('platform')[0].innerText = "Platform: " + project.platform;

    let projectDetails = base.getElementsByClassName('project-details')[0];
    projectDetails.style.backgroundColor = project.backgroundColour;
    projectDetails.style.borderColor = project.backgroundColour;

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

    project.imgIndex = 0;
    project.imgElements = [];
    let imagesBase = base.getElementsByClassName('project-carousel')[0];
    for(let src of project.images) {
        let imgElement = document.createElement('img');
        imgElement.src = src;
        imgElement.classList.add("project-image")
        imagesBase.append(imgElement);

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

    let element = project.imgElements[index];

    let widthIsLargest = element.clientWidth > element.clientHeight;
    let largestDimension = 600;
    let size = new Vector();
    size.x = widthIsLargest ? largestDimension : element.clientWidth / element.clientHeight * largestDimension;
    size.y = widthIsLargest ? element.clientHeight / element.clientWidth * largestDimension : largestDimension;

    let window = new Popup(new Vector(150, 200), size, null, true);
    project.imageWindows[index] = window;
    let img = document.createElement('img');
    img.src = element.src;
    img.style.width = '100%';
    window.content.append(img);
    window.content.style.overflow = 'hidden';
    window.show();
}