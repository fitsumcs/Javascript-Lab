// UI Variables 
const timerDemo = document.getElementById("timerDemo");


document.addEventListener("DOMContentLoaded", () => {
    startTime();
});



















//timer 
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    let am_pm = h > 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    m = addZero(m);
    s = addZero(s);
    timerDemo.innerHTML = `${h} : ${addZero(m)} : ${addZero(s)} ${am_pm }`;
    var t = setTimeout(startTime, 500);
}

function addZero(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}