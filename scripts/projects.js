let transitioning = false;
const projectCount = 4;
let currentIndex = 0;
let panelOpen = false;
let hash = window.location.hash;

setInterval(function() {
  if (window.location.hash != hash)
  {
    hash = window.location.hash;
    if (hash == "" || hash == "#" && panelOpen)
      hideProjectPanel();
    else
    {
      setIndex(hash.slice(1));
      showProjectPanel();
    }
  }
}, 200);

function transition(time) {
  if (transitioning) return;

  showStatic();
  setTimeout(hideStatic, time);
}

function showStatic() {
  transitioning = true;
  document.getElementById("tv-static").style.visibility = "visible";
}

function hideStatic() {
  transitioning = false;
  document.getElementById("tv-static").style.visibility = "hidden";
}

function highlightTV() {
  document.getElementById("tv").setAttribute("src", "images/tv-highlighted.png")
}

function unhighlightTV() {
  document.getElementById("tv").setAttribute("src", "images/tv.png")
}

function incrementIndex(amount) {
  if (transitioning) return;
  transition(500);

  currentIndex = (currentIndex + amount) % (projectCount);
  if (currentIndex < 0)
    currentIndex = projectCount - 1;

  document.getElementById("project-image").setAttribute("src", "images/project-" +
    (currentIndex + 1).toString().padStart(2, 0) + ".png");
}

function setIndex(index) {
  currentIndex = Math.min(Math.max(index, 0), projectCount - 1);
  document.getElementById("project-image").setAttribute("src", "images/project-" +
    (currentIndex + 1).toString().padStart(2, 0) + ".png");
}

function showProjectPanel() {
  panelOpen = true;
  window.location.hash = "#" + currentIndex;
  let background = document.getElementById("project-panel-background");
  background.style.visibility = "visible";
  background.style.opacity = "50%";
  let panel = document.getElementById("project-panel");
  // panel.setAttribute("src", "project-" + (currentIndex + 1).toString().padStart(2, 0) + ".html");
  panel.contentWindow.location.replace("project-" + (currentIndex + 1).toString().padStart(2, 0) + ".html");
  // panel.style.maxWidth = "1150px";
  panel.style.width = "calc(100% - 50px)";
  panel.style.height = "calc(100% - 50px - 75px)";
}

function hideProjectPanel() {
  panelOpen = false;
  window.location.hash = "#";
  let background = document.getElementById("project-panel-background");
  background.style.opacity = "0%";
  setTimeout (function() {background.style.visibility = "hidden";}, 500);
  let panel = document.getElementById("project-panel");
  panel.style.height = "0";
  panel.style.width = "0";
}
