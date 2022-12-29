const hourEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");
const dayEl = document.getElementById("day");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    
    
    if (h>12){
        h = h-12;
        ampm = "PM";
    }
    //if h<10 is happen type "0" then write h otherwise just write h, same as minutes and second
    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondEl.innerText = s;
    ampmEl , (innerText=ampm);
    
    setTimeout(()=>{
        updateClock()
    },1000)
   
}
updateClock();