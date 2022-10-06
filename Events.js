const body = document.getElementById('body');
const startMenu = document.getElementById('start-menu');
const desktop = document.getElementById('desktop');

let lastMousePos = new Vector();
let mousePos = new Vector();
let mouseDelta = new Vector();

let startMenuShowing = false;

document.addEventListener('mouseup', () => onMouseUp());
document.addEventListener('mousemove', (e) => onMouseMove(e));

function onMouseUp() {
    for(let clicky of AllClickys) {
        clicky.onMouseUpDefault();
        if (typeof clicky.onMouseUp === 'function') 
            clicky.onMouseUp();
    }
}

function onMouseMove(event) {
    lastMousePos = mousePos.copy();
    mousePos.set(event.clientX, event.clientY)
    mouseDelta = Vector.sub(mousePos, lastMousePos);

    for(let clicky of AllClickys) {
        clicky.onMouseMoveDefault();
        if (typeof clicky.onMouseMove === 'function') 
            clicky.onMouseMove();
    }
}

function toggleStartMenu() {
    startMenu.style.animation = '';
    startMenu.offsetWidth;
    startMenu.style.animation = 'menu-show-anim 250ms ease-out 0s 1 ' + (startMenuShowing ? 'reverse' : 'normal') + ' both';

    startMenuShowing = !startMenuShowing;
}

// let testWindow = new Popup(new Vector(100, 45), new Vector(200, 150));
// let testClicky = new Shortcut(new Vector(50, 50), new Vector(100, 100), desktop, testWindow, 'images/icon-rgb.png');

let windowRgb = new Popup(new Vector(100, 45), new Vector(600, 450), 'project-cover');
replaceProjectInfo(windowRgb.content, projects["RGB"]);
let shortcutRgb = new Shortcut(new Vector(50, 50), new Vector(100, 100), desktop, windowRgb, 'images/icon-rgb.png');

let window5pm = new Popup(new Vector(125, 60), new Vector(600, 500), 'project-cover');
replaceProjectInfo(window5pm.content, projects["5pm"]);
let shortcut5pm = new Shortcut(new Vector(150, 150), new Vector(100, 100), desktop, window5pm, 'images/icon-5pm.png');

let windowStarGarden = new Popup(new Vector(150, 85), new Vector(600, 550), 'project-cover');
replaceProjectInfo(windowStarGarden.content, projects["Star Garden"]);
let shortcutStarGarden = new Shortcut(new Vector(50, 250), new Vector(100, 100), desktop, windowStarGarden, 'images/icon-star-garden.png');

let windowLaDogoir = new Popup(new Vector(150, 85), new Vector(600, 475), 'project-cover');
replaceProjectInfo(windowLaDogoir.content, projects["LA Dogoir"]);
let shortcutLaDogoir = new Shortcut(new Vector(150, 350), new Vector(100, 100), desktop, windowLaDogoir, 'images/icon-la-dogoir.png');

let windowMoreInfo = new Popup(new Vector(150, 100), new Vector(600, 500), 'more-info');