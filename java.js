const startingMinutes=5;
let time=startingMinutes*60;
const countdownEl=document.getElementById('countdown');
setInterval(updateCountdown,1000);
function updateCountdown(){
  const minutes=Math.floor(time/60);
  let seconds=time%60;
  seconds=seconds<10?'0'+seconds:seconds;
  countdownEl.innerHTML=`${minutes}:${seconds}`;
  time--;
  time = time < 0 ? 0 : time;
}

//  <h3 class="time">Time Left <span class="timer">00:00</span>&#9201</h3>

var count=0;
var audio=document.getElementById("audio");
var buttom=document.querySelector(".g");
function playpause(){
  if(count==0){
    count=1;
    audio.play();
    buttom.innerHTML="Pause &#9208";
  }
  else{
    count--;
    audio.pause();
      buttom.innerHTML="Play &#9658";
  }
}











function check(){
var c=0;
const q1=document.quiz.question1.value;
const q2=document.quiz.question2.value;
const q3=document.quiz.question3.value;
const q4=document.quiz.question4.value;
const q5=document.quiz.question5.value;
var result=document.getElementById("res");
if(q1=="18") {c++;}
if(q2=="5") {c++;}
if(q3=="Eating") {c++;}
if(q4=="21") {c++;}
if(q5=="14") {c++;}
result.textContent=`${c}`;
if(c==5)
{
  alert("Congratulations U+1F3C6 You got 5/5 points!")
}
else if(c==4)
{
  alert("You got 4/5 points");
}
else if(c==3)
{
  alert("You got 3/5 points");
}
else if(c==2)
{
  alert("You got 2/5 points");
}
else if(c==1)
{
  alert("You got 1/5 points");
}
else
{
  alert("You got 0/5");
}
};
