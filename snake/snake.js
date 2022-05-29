import {headPos, bodyIntersection,sUpdate, sDraw, speed} from "./snakebody.js"
import {fUpdate, fDraw} from "./food.js"
let render = 0
const board = document.getElementById("board");
let gameOver = false


function main(time){
    
    if (gameOver){
        if(confirm("you lost, press OK tor reset.")){
            window.location = "/" //sends it back (refresh)
        }
        return
    }

  window.requestAnimationFrame(main)
  //"return" works here as "break" in python -- /1000 to get seconds
  if ((time - render)/1000 < 1/speed ) return 
  render = time

  update()
  draw(board)
}
main();


//universal update
function update() {
    fUpdate();
    sUpdate();
    deathCheck();
}

// universal draw
function draw(board) {
  board.innerHTML = "" //clears the canvas acts like p5.js draw function
  fDraw(board);
  sDraw(board);
}

//checking death
function deathCheck(){
gameOver = checkBorder(headPos()) || bodyIntersection()
}

function checkBorder(pos){
    return pos.x < 1 || pos.x > 21 || pos.y < 1 || pos.y > 21
}