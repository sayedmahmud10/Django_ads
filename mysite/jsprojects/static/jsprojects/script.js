const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');
const currYear=new Date().getFullYear()+1;
const myBirthDay = '10 jan '+ currYear;
function countdown (){
    const myBirthDate = new Date(myBirthDay);
    const currentDate = new Date();
    const totalSeconds= (myBirthDate-currentDate)/1000;
    const days=Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const mins=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds)%60;

    daysE1.innerHTML = days.toString();
    hoursE1.innerHTML =hours;
    minsE1.innerHTML =mins;
    secondsE1.innerHTML =seconds;

    console.log(typeof days,typeof seconds);
}
countdown();
setInterval(countdown,1000);
