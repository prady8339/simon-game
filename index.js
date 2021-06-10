
  var level = 1;
  var stage = 0;
  var blocker = 0;
  var blocker2 = 0;
  var blocker3 = 0;
  
  let newRand = 0;
  var keyArr =[];

  let stageClick = 0;
  var myClicks = [];

  $(document).on("keydown",keyStart);  
 
  function keyStart(){
    if(blocker===0){
    
       start();
       blocker=1;
       blocker3=0;
      }
      blocker2=0;


   }
   
   function start(){
     randoo();
     if(blocker3==0)
    $(".btn").on("click",function(){
    if(blocker2 === 0){
    var colorClick = $(this).attr("id");
    clicked(colorClick);
    stageClick=colorClick;
    myClicks.push(stageClick);
    
    check();
      }
    });
   }
    
function randoo(){
  var i=0;
while(i <level){
  myClicks.pop();
  i++;
}

  $("h1").text("Level "+level);
  level++;
  
  var colorCode;
  var randNum = Math.floor(Math.random()*4+1);
 
   if (randNum == 1)
  colorCode = "green";
  else if (randNum == 2)
   colorCode = "red";
   else if (randNum == 3)
  colorCode = "yellow";
  else 
  colorCode = "blue";

 newRand=colorCode;

 keyArr.push(newRand);
 
 clicked(colorCode);
 


}



function check(){

blocker3=1;
var j=0;
var x=0;
var i = 0;
for(; i<myClicks.length;i++){
  if(keyArr[i]==myClicks[i]){
  x++;
  }
  else
 j++;
}
if(j>0){
gameOver();
}
if(keyArr.length==myClicks.length && x==i)
setTimeout(randoo,500);
}

function clicked(colorClick){
   $("."+colorClick).addClass("pressed");
    var audio = new Audio('sounds/'+colorClick+".mp3");
    audio.play();
    setTimeout(restoreClick,100);
}

function restoreClick(){
    $(".btn").removeClass("pressed");
    $("body").css("background-color","");
}

function gameOver(){
var wrong = new Audio("sounds/wrong.mp3");
wrong.play();
$("body").css("background-color","red");
setTimeout(restoreClick,500);
$("h1").text("Game Over, Press any key to restart");

var i=0;
while(i <level){
  keyArr.pop();
  myClicks.pop();
  i++;
}
level = 1;
  blocker2=1;
  blocker=0;
}
