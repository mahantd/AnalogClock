const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let runTheClock = () => {
var date = new Date();
console.log(date);

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = (hr*30)+((min*6)/12);  //hr*360/12.
let minPosition = (min*6)+((sec*6)/60); // min*360/60,
let secPosition = sec*6; //sec*360/60.


HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"; //"rotate(" +90+"deg)"
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"; 
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"; 
}

let interval = setInterval(runTheClock,1000);
