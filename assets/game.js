let startBtn= document.getElementById('start');
let homeBtn= document.getElementById('home');
let restartBtn=document.getElementById('restart');
let game=document.getElementById('game');
let start=document.getElementById('start');
let restart=document.getElementById('restart');
let home=document.getElementById('home');
let btns=document.getElementById('buttonsLocation');
let title=document.getElementById('title');
let rule=document.getElementById('rule');
function startGame() {
      game.src=game.src;
      game.style.display="initial";
      restart.style.display="initial";
      home.style.display="initial";
      start.style.display="none";
      btns.style.justifyContent="space-between";
      title.style.fontSize="36px";
      rule.style.display="none";
};
function startPage() {
      title.style.fontSize="60px";
      game.style.display="none";
      restart.style.display="none";
      home.style.display="none";
      btns.style.justifyContent="space-around";
      start.style.display="initial";
      rule.style.display="initial";
};
function restartGame(){
      game.src=game.src;
};
window.addEventListener('load',startPage);
startBtn.addEventListener('click',startGame);
homeBtn.addEventListener('click',startPage);
restartBtn.addEventListener('click',restartGame);
