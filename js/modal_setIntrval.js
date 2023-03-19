// import BSN  from "bootstrap.native";

// const modal = new BSN.modal('#subscribition-modal');

// console.log(modal);

const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    console.log(`I love async JS!  ${Math.random()}`);
  }, 1000);
});


stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
});

const date = new Date;

console.log(date);

console.log(date.toString());

const teamMeetingDate = new Date(2030, 2, 16, 14, 25, 0, 0);;
console.log(teamMeetingDate);
date.setDate(20);
console.log(date);
console.log("getDate(): ", date.getDate());
console.log("getMonth(): ", date.getMonth());
console.log("getFullYear(): ", date.getFullYear());
console.log("getUTCMonth(): ", date.getUTCMonth());


console.log(date.toTimeString());

console.log('First');
setTimeout( 
    function () {
        console.log('inner SetTimeout 1000')
    }, 1000
)
console.log('Second');

setTimeout( 
    function () {
        console.log('inner SetTimeout 3000')
    }, 3000
)

console.log('Third');
let seconds = 1;
const stopId = setInterval(() => {
    console.log(seconds);
    seconds+=1
}, 1000);

document.addEventListener('click', () => {
    clearInterval(stopId);
});

console.dir(date);

// clearInterval(stopId, 10000)
