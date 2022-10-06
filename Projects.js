const projects = {
    'RGB': {
        title: 'RGB',
        date: '8 Oct 2021\n3 Weeks',
        shortDescription: 'Mobile - Puzzle',
        description: 'I wanted to use the idea of mixing and splitting colours to and from their base components to create engaging and thought-provoking puzzles. I was responsible for coding the different puzzle elements, designing the main systems responsible for light beam propagation and rendering and designing 10 of the 13 puzzles, following instructional design techniques to teach the player the mechanics.',
        images: ['images/rgb/01.png', 'images/rgb/02.png', 'images/rgb/03.png']
    },
    'LA Dogoir': {
        title: 'LA Dogoir',
        date: '5 May 2022\n9 Weeks',
        shortDescription: 'PC - Multiplayer - Mystery',
        description: 'This project was all about the importance of different perspectives and working through communication difficulties. I created a system to allow players to communicate by combining words into phrases, using Photon Engine to send the data between clients. I created the movement controllers for both the dog and human player and a visual effect for scent trails.',
        images: ['images/la-dogoir/01.png', 'images/la-dogoir/02.png', 'images/la-dogoir/03.png']
    },
    '5pm': {
        title: '5pm',
        date: '25 Aug 2021\n12 Weeks',
        shortDescription: 'PC - Microgames',
        description: 'As my first finished game project this one is a little rough around the edges but I\'m still quite proud of it and it taught me a lot about the game development process and project management. I created various scripts to be reused throughout other microgames to reduce workload, designed and created several of the microgames themselves and scripts that managed scene loading, transitions and win/lose states. I was also in charge of managing the project and making sure we were on track to release on time.',
        images: ['images/5pm/01.gif', 'images/5pm/02.gif', 'images/5pm/03.gif']
    },
    'Star Garden': {
        title: 'Star Garden',
        date: '19 Aug 2022\n12 Weeks',
        shortDescription: 'Mobile - Monetised - Pet Sim',
        description: 'The primary purpose of this project was to create a game that would generate revenue. I was the programmer for this project, creating various interworking systems such as an inventory, lootboxes, currency, decorations, pets and reading and writing save data. Since the game was created as a university project, the monetisation methods are not implemented and are currently just placeholders but we plan to develop this game further and release it on the android app store in the near future.',
        images: ['images/star-garden/01.gif']
    }
};

function replaceProjectInfo(base, project) {
    base.getElementsByClassName('title')[0].innerText = project.title;
    base.getElementsByClassName('date')[0].innerText = project.date;
    base.getElementsByClassName('short-description')[0].innerText = project.shortDescription;
    base.getElementsByClassName('description')[0].innerText = project.description;
    let imagesBase = base.getElementsByClassName('project-images')[0];
    for(let src of project.images) {
        let imgElement = document.createElement('img');
        imgElement.src = src;
        imagesBase.append(imgElement);
    }
}