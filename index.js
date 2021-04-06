import colors from './js/colors.js';
import randomIntegerFromInterval from './js/randomiser.js'
import { btnStartRef, btnStopRef, bodyRef } from './js/domElements.js';

let timerId = null;

function switchColor(colors) {
    bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0,5)];
}

function btnStart(colors, cooldown) {
    btnStartRef.disabled = "true";
    timerId = setInterval(() => { switchColor(colors) }, cooldown);
}

function btnStop() {
    clearInterval(timerId);
    btnStartRef.removeAttribute('disabled');
}

btnStartRef.addEventListener('click', () => { btnStart(colors, 1000) });
btnStopRef.addEventListener('click', btnStop);