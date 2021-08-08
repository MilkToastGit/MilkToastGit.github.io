let transitioning = false;
const projectCount = 4;
let currentIndex = 0;

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

function goToSelected() {
  window.location.href = "projects/" + (currentIndex + 1).toString().padStart(2, 0) + ".html";
}
