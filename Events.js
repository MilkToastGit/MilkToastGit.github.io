const body = document.getElementById('body');
const startMenu = document.getElementById('start-menu');
const desktop = document.getElementById('desktop');
const pointer = document.getElementById('pointer');

let lastMousePos = new Vector();
let mousePos = new Vector();
let mouseDelta = new Vector();

let startMenuShowing = false;

document.addEventListener('mousedown', () => onMouseDown());
document.addEventListener('mouseup', () => onMouseUp());
document.addEventListener('mousemove', (e) => onMouseMove(e));

function onMouseDown() {
    pointer.src = 'images/pointer-down.png';
}

function onMouseUp() {
    pointer.src = 'images/pointer-up.png';

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

    pointer.style.left = mousePos.x + "px";
    pointer.style.top = mousePos.y + "px";

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