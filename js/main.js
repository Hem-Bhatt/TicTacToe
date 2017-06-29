(function(){            // Using the Module Pattern
const start = document.getElementById('start');
const board = document.getElementById('board');
const end = document.getElementById('finish');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const boxes = document.querySelector('.boxes');
const startButton = $("#startButton");
const finalMessage = $('.message');
const name = document.getElementById('name');
const header = document.getElementById('addName');
const h2 = document.createElement('h2');
const secondh2 = document.createElement('h2');
let counVar = 1;

function checkWin(i)  // Checks Victory Conditions!
{
  if((boxes.children[0].className.includes('filled-'+i)) && (boxes.children[1].className.includes('filled-'+i)) && (boxes.children[2].className.includes('filled-'+i)))
  {
    return true;
  }
  else if((boxes.children[3].className.includes('filled-'+i)) && (boxes.children[4].className.includes('filled-'+i)) && (boxes.children[5].className.includes('filled-'+i)))
  {
    return true;
  }
  else if((boxes.children[6].className.includes('filled-'+i)) && (boxes.children[7].className.includes('filled-'+i)) && (boxes.children[8].className.includes('filled-'+i)))
  {
    return true;
  }
  else if((boxes.children[0].className.includes('filled-'+i)) && (boxes.children[4].className.includes('filled-'+i)) && (boxes.children[8].className.includes('filled-'+i)))
  {
    return true;
  }
  else if((boxes.children[2].className.includes('filled-'+i)) && (boxes.children[4].className.includes('filled-'+i)) && (boxes.children[6].className.includes('filled-'+i)))
  {
    return true;
  }
  else if((boxes.children[0].className.includes('filled-'+i)) && (boxes.children[3].className.includes('filled-'+i)) && (boxes.children[6].className.includes('filled-'+i)))
  {
    return true;
  }
  else if((boxes.children[1].className.includes('filled-'+i)) && (boxes.children[4].className.includes('filled-'+i)) && (boxes.children[7].className.includes('filled-'+i)))
  {
    return true;
  }
  else if((boxes.children[2].className.includes('filled-'+i)) && (boxes.children[5].className.includes('filled-'+i)) && (boxes.children[8].className.includes('filled-'+i)))
  {
    return true;
  }
  else{
    return false;
  }
}
  
function checkDouble(box1,box2,number){
  if((boxes.children[box1].className.includes('filled-'+number)) && (boxes.children[box2].className.includes('filled-'+number)))
  {
      return true;
  }
  return false;
}

function moveAi(index){
  boxes.children[index].className = "box box-filled-2"
  boxes.children[index].style.pointerEvents = 'none';
  player2.className = "players";
  player1.className = "players active";
  player1SvgBehaviour();
}

function RandomIndex(i)
{
  var randomiser = Math.floor(Math.random()*i)+1;
  return randomiser;
}

function checkIfEmpty(){
  for(let i = 0;i<boxes.children.length; i +=1){
    if(boxes.children[i].className == "box"){
      return true;
    }
  }
  return false;
}

function randomMove(){
  if(!(checkIfEmpty())){            // Checks if there are any available boxes
    return false;                  // Returns false if not
  }
  let x  = RandomIndex(8);
  while(boxes.children[x].className != "box"){  // Continues till a random empty box is found
    x = RandomIndex(8);
  }
  moveAi(x);
  return true;
}

function checkDraw(){  // Checks If it is a draw!
if(counVar==6 && !(checkWin(1)) && !(checkWin(2))){
  end.className += "-tie"
  start.style.visibility = "hidden";
  board.style.visibility = "hidden";
  end.style.visibility = "visible"
  finalMessage.text("IT'S A DRAW!!!");
  return true;
  }
}

function stopWin(number){ //AI function to stop losing or try winning , Checks if User has doubles lined up somewhere
    if(checkDouble(0,1,number) && !(boxes.children[2].className.includes("box-filled")) ){
      moveAi(2);
      return true;
    }
    else if(checkDouble(1,2,number) && !(boxes.children[0].className.includes("box-filled"))){
      moveAi(0);
      return true;
    }
    else if(checkDouble(0,2,number) && !(boxes.children[1].className.includes("box-filled"))){
      moveAi(1);
      return true;
    }

    else if(checkDouble(3,4,number) && !(boxes.children[5].className.includes("box-filled"))){
      moveAi(5);
      return true;
    }
    else if(checkDouble(4,5,number) && !(boxes.children[3].className.includes("box-filled"))){
      moveAi(3);
      return true;
    }
    else if(checkDouble(3,5,number) && !(boxes.children[4].className.includes("box-filled"))){
      moveAi(4);
      return true;
    }

    else if(checkDouble(6,7,number) && !(boxes.children[8].className.includes("box-filled"))){
      moveAi(8);
      return true;
    }
    else if(checkDouble(7,8,number) && !(boxes.children[6].className.includes("box-filled"))){
      moveAi(6);
      return true;
    }
    else if(checkDouble(6,8,number) && !(boxes.children[7].className.includes("box-filled"))){
      moveAi(7);
      return true;
    }

    else if(checkDouble(0,3,number) && !(boxes.children[6].className.includes("box-filled"))){
      moveAi(6);
      return true;
    }
    else if(checkDouble(3,6,number) && !(boxes.children[0].className.includes("box-filled"))){
      moveAi(0);
      return true;
    }
    else if(checkDouble(0,6,number) && !(boxes.children[3].className.includes("box-filled"))){
      moveAi(3);
      return true;
    }

    else if(checkDouble(1,4,number) && !(boxes.children[7].className.includes("box-filled"))){
      moveAi(7);
      return true;
    }
    else if(checkDouble(4,7,number) && !(boxes.children[1].className.includes("box-filled"))){
      moveAi(1);
      return true;
    }
    else if(checkDouble(1,7,number) && !(boxes.children[4].className.includes("box-filled"))){
      moveAi(4);
      return true;
    }

    else if(checkDouble(2,5,number) && !(boxes.children[8].className.includes("box-filled"))){
      moveAi(8);                         // 3 4 5
      return true;                       // 6 7 8
    }
    else if(checkDouble(5,8,number) && !(boxes.children[2].className.includes("box-filled"))){
      moveAi(2);
      return true;
    }
    else if(checkDouble(2,8,number) && !(boxes.children[5].className.includes("box-filled"))){
      moveAi(5);
      return true;
    }
    else if(checkDouble(0,4,number) && !(boxes.children[8].className.includes("box-filled"))){                           // DIAGONAL CHECKING
      moveAi(8);
      return true;
    }
    else if(checkDouble(4,8,number) && !(boxes.children[0].className.includes("box-filled"))){
      moveAi(0);
      return true;
    }
    else if(checkDouble(0,8,number) && !(boxes.children[4].className.includes("box-filled"))){                                      //  0 1 2
      moveAi(4);
      return true;
    }
    else if(checkDouble(2,4,number) && !(boxes.children[6].className.includes("box-filled"))){
      moveAi(6);
      return true;
    }
    else if(checkDouble(4,6,number) && !(boxes.children[2].className.includes("box-filled"))){
      moveAi(2);
      return true;
    }
    else if(checkDouble(2,6,number) && !(boxes.children[4].className.includes("box-filled"))){
      moveAi(4);
      return true;
    }
  return false;
}

function mouseoutBehaviour(){
  boxes.addEventListener('mouseout',(e)=>{
    e.target.style.backgroundImage = ""
  });
}

function player1SvgBehaviour(){
    boxes.addEventListener('mouseover',(e)=>{
      e.target.style.backgroundImage = "url('img/o.svg')"
  });
  mouseoutBehaviour();
}

function player2SvgBehaviour(){
    boxes.addEventListener('mouseover',(e)=>{
      e.target.style.backgroundImage = "url('img/x.svg')"
    });
    mouseoutBehaviour();
}

//Stage1, Start Screen
startButton.on('click',()=>
{
  start.style.visibility = "hidden";
  board.style.visibility = "visible";
  h2.innerText = name.value;
  h2.className = "playerName";
  header.appendChild(h2);
  secondh2.innerText = "AI";
  secondh2.className = "Ai";
  header.appendChild(secondh2);
});

//Stage 2, User Interaction Max 9 turns, Minmax algorithm, win  can start from 5th turn
player1.className = "players active";
player1SvgBehaviour();
boxes.addEventListener('click',(e)=>{               // Event handler if any box is clicked by the players
  counVar +=1;

  if (player1.className == "players active"){
    e.target.className += " box-filled-1";
    e.target.style.pointerEvents = 'none';        // To disable click events on the box
    player1.className = "players";
    player2.className = "players active";
    player2SvgBehaviour();
  }
  // else {                                                         // Incase we want a 2 player game
  //   e.target.className += " box-filled-2";
  //   e.target.style.pointerEvents = 'none';
  //   player2.className = "players";
  //   player1.className = "players active";
  //   player1SvgBehaviour();
  // }
  if(checkWin(1)){
    end.className += "-one"
    start.style.visibility = "hidden";
    board.style.visibility = "hidden";
    end.style.visibility = "visible"
    finalMessage.text("Awesome! "+name.value+" ,you win!!");
  }
  checkDraw();  // Since Draw can happen only after player 1 has moved
  setTimeout(function(){   //AI waits for 1 second before making move
      stopWin(2) || stopWin(1) || randomMove();   //Tries to Win 1st, Tries to defend loss 2nd, OR Random move
      if(checkWin(2) && (!checkWin(1))){    //Checks victory conditions for AI after the move!
      end.className += "-two"
      start.style.visibility = "hidden";
      board.style.visibility = "hidden";
      end.style.visibility = "visible"
      finalMessage.text("SORRY YOU LOSE :( !!!");
    }
  },1000);                 // AI Response time can be changed with this!
});
}());       // End of the self executing function literal
