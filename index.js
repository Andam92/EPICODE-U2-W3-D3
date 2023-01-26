const display = document.querySelector("p span");

let seconds = parseInt(sessionStorage.getItem("seconds")) || 0;
let tens = parseInt(sessionStorage.getItem("tens")) || 0;

/* if (sessionStorage.getItem("seconds")) {
  seconds = sessionStorage.getItem("seconds");
} else {
  seconds = 0;
} */
/* let decimi;
if (sessionStorage.getItem("decimi")) {
  seconds = sessionStorage.getItem("decimi");
} else {
  decimi = 0;
} */

const counter = () => {
  tens += 1;
  if (tens >= 10) {
    tens = 0;
    seconds += 1;
  }

  display.innerHTML = `${seconds} : ${tens}`;
  sessionStorage.setItem("seconds", seconds);
  sessionStorage.setItem("tens", tens);
};

setInterval(counter, 100);
