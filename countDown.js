const second = document.querySelector("#seconds");
const minutes = document.querySelector("#minutes");
const hours = document.querySelector("#hours");
const startBtn = document.querySelector("#start-btn");
const clr = document.querySelector("#clear");
const op = document.querySelector("#output");

let x; // interval reference

startBtn.addEventListener('click', () => {
    // Convert input values to numbers
    let h = Number(hours.value) || 0;
    let m = Number(minutes.value) || 0;
    let s = Number(second.value) || 0;

    // Prevent multiple intervals
    clearInterval(x);

    x = setInterval(() => {
        if (s > 0) {
            s -= 1;
        } else if (s === 0 && m > 0) {
            s = 59;
            m -= 1;
        } else if (s === 0 && m === 0 && h > 0) {
            s = 59;
            m = 59;
            h -= 1;
        }

        // Update input fields
        hours.value = h;
        minutes.value = m;
        second.value = s;

        // ...existing code...
if (h === 0 && m === 0 && s === 0) {
    clearInterval(x);
    op.innerText = "TIME'S UP";
    // Voice notification
    const msg = new SpeechSynthesisUtterance("Time's up!");
    window.speechSynthesis.speak(msg);
} else {
    op.innerText = ""; // Clear message while counting
}
// ...existing code...
    }, 1000);
});

clr.addEventListener('click', () => {
    clearInterval(x);
    second.value = "";
    minutes.value = "";
    hours.value = "";
    op.innerText = "";
});


