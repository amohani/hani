const form = document.querySelector('#form');
const content = document.querySelector('#content');

const age = prompt('Hur gammal är du?');

// check for age of user ..
if (age > 19) {
    // old enough, show website
    content.style.display = 'block';
    document.querySelector('.message').innerHTML ="Välkommen!";
    document.querySelector('#enter').className = 'granted';

} else {
    // not old enough, do not show website
content.style.display = 'none';
document.querySelector('.message').innerHTML = "Sorry, du är inte tillräckligt gammal!";
document.querySelector('#enter').className = 'denied';
}