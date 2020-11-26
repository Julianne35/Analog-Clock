const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//javascript to tell us what time it is - using methods
var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

//convertion to degrees
let hrPosition = (hr * 360 / 12) + (min * (360 - 60) / 12);
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
let secPosition = sec * 360 / 60;

function runTheClock() {
    //figures out how many de  grees the clock arms should moves
    secPosition = secPosition + 6;
    minPosition = minPosition + (6 / 60);
    hrPosition = hrPosition + (3 / 360);

    // applies numbers above as degrees in the inline styles for transform 
    HOURHAND.style.transform = "rotate(" + hrPosition + " deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

//refer to the set interval later if we want a bigger script
// 1000 - runs the clock every thousand miliseconds
var interval = setInterval(runTheClock, 1000);