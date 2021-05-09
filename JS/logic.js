let TIME_LIMIT=60;
let timedue=TIME_LIMIT;
let timeover=0;
let charno=0;
let curstr="";
let strno=0;
let timer=null;
let time= document.querySelector(".time");
let timeg= document.querySelector(".timeg");
let word= document.querySelector(".word");
let wordg= document.querySelector(".wordg");
let content= document.querySelector(".content");
let input= document.querySelector(".input");
let end= document.querySelector(".end");
let arr=[
  "Whatever it is, coronavirus has made the mighty kneel",
  "and brought the world to a halt like nothing else could.",
  "Our minds are still racing back and forth, longing",
  " for a return to “normality”, trying to stitch our future ",
  "to our past and refusing to acknowledge the rupture. ",
  "But the rupture exists. And in the midst of this terrible",
  " despair, it offers us a chance to rethink the doomsday",
  " machine we have built for ourselves."
]
function updateTimer(){
  if(timedue>0){
    timedue--;
    timeover++;
    time.textContent=timedue+'s';
  }
  else{
    endGame();
  }
}
function changestr(){
  content.textContent=null;
  curquo=arr[strno];
  curquo.split('').forEach(char=>{
    const cs = document.createElement('span')
    cs.innerText = char
    content.appendChild(cs)
  })
  if(strno<arr.length-1){
    strno++;
  }
  else{
    strno=0;
  }
}
function calc(){
  curstr=input.value;
  curarrstr = curstr.split('');
  charno++;
  strspanarr=content.querySelector('span');
  strspanarr.forEach((char,index, ) =>{
    let typedstr = curarrstr[index]
    if(typedstr==null){
      char.classList.add('right');
      char.classList.remove('wrong');
    }
    else if(typedstr === char.innerText){
      char.classList.add('right');
      char.classList.remove('wrong');
    }
    else{
      char.classList.add('wrong');
      char.classList.remove('right');
    }
    if(curstr.length == curquo.length){
      input.value="";
      changestr();

    }
  });
}
function reset(){
  ltime=TIME_LIMIT;
  timedue = 0;
  charno=0;
  strno=0;
  input.disabled=false;
  input.value="";
  content.textContent="click below";
  time.textContent=timedue+'s';
}
function startGame(){
  changestr();
  reset();
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
}

function endGame(){
  clearInterval(timer);
  input.disabled=true;
  content.textContent = 'click en to finish';
  w = Math.round((((charno / 5) / timedue) * 60));
  word.textContent=w;
}


