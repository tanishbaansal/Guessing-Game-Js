var score = document.querySelector('.score');
var game = document.querySelector('.game');
var guess = document.querySelector('.guess');
var random = Math.floor(Math.random()*10);
guess.innerText= random;
var timer=document.querySelector('.timer');

function insertbubble(){
    for(var i=0;i<28;i++)
    {
        
var random = Math.floor(Math.random()*10);
var data = '<div class="bubble">'+random+'</div>';
    game.innerHTML+=data;
}
}


game.addEventListener('click',function(e){
  if(e.target.className === 'bubble'){
      var bubbleval = e.target.innerText;
      if(guess.innerText===bubbleval){
          var currentscore=Number(score.innerText)+10;
          score.innerText=currentscore;
          game.innerHTML=null;
          var random = Math.floor(Math.random()*10);
guess.innerText= random;
          insertbubble();
      }
      else{
           var currentscore=Number(score.innerText)-5;
          score.innerText=currentscore;
           game.innerHTML=null;
           var random = Math.floor(Math.random()*10);
guess.innerText= random;
          insertbubble();
      }
  }
});

setInterval(function(){
  
  var timer1=  Number(timer.innerText);
  if(timer1<1) {game.innerHTML="<h1>Game Over</h1>";
return;}
  timer1--;
  timer.innerText=timer1--;
  
},1000);

insertbubble();
