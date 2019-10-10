const form = document.querySelector('#form');
const content = document.querySelector('#content');
window.alert("Observera, endast 20+")
const age = prompt('Hur gammal är du?');

// check for age of user ..
if (age >= 20) {
    // old enough, show website
    window.alert("Välkommen Max!")
    content.style.display = 'block';
    document.querySelector('#enter').className = 'granted';
} else {
    // not old enough, do not show website
    window.alert("Sorry, du är inte tillräckligt gammal för att se webbsidan!")
    window.location.replace("http://google.com");
content.style.display = 'none';
document.querySelector('#enter').className = 'denied';
}