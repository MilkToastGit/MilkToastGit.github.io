const dateTimeElement = document.getElementById('date-time');
const timeElement = dateTimeElement.children[0];
const dateElement = dateTimeElement.children[1];

let date = new Date();
let hours;
let minutes;

function updateDateTime() {
    date = new Date();
    if (hours == date.getHours() && minutes == date.getMinutes()) return;

    hours = date.getHours();
    minutes = date.getMinutes();

    let hours12 = hours % 12;
    if(hours12 == 0)
        hours12 = 12;
        
    timeElement.textContent = hours12 + ':' + minutes.toString().padStart(2, '0') + ' ' + (hours >= 12 ? 'PM' : 'AM');

    dateElement.textContent = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
}

updateDateTime();
window.setInterval(updateDateTime, 1000);