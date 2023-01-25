const display = document.querySelector("p span");

let seconds;
if (sessionStorage.getItem("seconds")) {
  seconds = sessionStorage.getItem("seconds");
} else {
  seconds = 0;
}

/* let decimi;
if (sessionStorage.getItem("decimi")) {
  seconds = sessionStorage.getItem("decimi");
} else {
  decimi = 0;
} */

const counter = () => {
  seconds += 1;
  display.innerHTML = `${seconds}`;
  sessionStorage.setItem("seconds", seconds);
};

setInterval(counter, 1000);
