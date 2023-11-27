let days = document.getElementById("day");
let hours = document.getElementById("hrs");
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");

function timer(){
let futureDate = new Date ("10 march 2024 06:44 pm");
let currentDate = new Date();
let remaining = futureDate - currentDate;

let d = Math.floor(remaining / 1000 / 60 / 60 /24 );
let h = Math.floor(remaining / 1000 / 60 / 60 ) % 24;
let m = Math.floor(remaining / 1000 / 60 ) % 60;  
let s = Math.floor(remaining / 1000) % 60;

if (d < 0){
  let wish = document.getElementById("wish");
  let data = document.getElementById("container");
  wish.style.display="block";
  wish.style.animation = '2s animation';
  data.style.display="none";
  return;
}

days.value = d;
hours.value = h;
minutes.value = m;
seconds.value = s;
}
timer()
setInterval(timer,1000)
