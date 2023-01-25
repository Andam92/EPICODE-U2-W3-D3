const display = document.querySelector("p span");
let secondi = sessionStorage.getItem("secondi")
  ? sessionStorage.getItem("secondi")
  : 0;
let decimi = sessionStorage.getItem("decimi")
  ? sessionStorage.getItem("decimi")
  : 0;

/* let secondi;
if (sessionStorage.getItem("secondi")) {
  secondi = sessionStorage.getItem("secondi");
} else {
  secondi = 0;
}

let decimi;
if (sessionStorage.getItem("decimi")) {
  secondi = sessionStorage.getItem("decimi");
} else {
  decimi = 0;
}
 */
const counter = () => {
  decimi += 1;
  if (decimi == 10) {
    secondi += 1;
    sessionStorage.setItem("secondi", secondi);
    decimi = 0;
  }
  sessionStorage.setItem("decimi", decimi);
  display.innerHTML = `${secondi} : ${decimi}`;
};

setInterval(counter, 100);
