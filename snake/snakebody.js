import {move} from "./input.js"

const grow = 1
let newPart = 0      
export const speed = 5
const body = [ {x:10,y:13}]

    //update snake 
 export   function sUpdate(){
     addParts()
        let movment = move()
        // start from the bottom and shift everything up (making a copy so it doesnt make any issues then and clearing previous)
        for (let i = body.length - 2; i >= 0;i--){
          body[i+1] = {...body[i] }
        }
        body[0].x += movment.x
        body[0].y += movment.y
      }
      
          // draw snake
    export  function sDraw(board){
        body.forEach(part => {
            // basically puts it on the board using x,y
          const sElement  = document.createElement("div")
          sElement.style.gridRowStart = part.y
          sElement.style.gridColumnStart = part.x
          sElement.classList.add("snake") //adds the css
          board.append(sElement)
        })
      }


export function snakeGrow(num){
    newPart += num
}


// if the snake is on the body
export function snakeOn(location, {noHead = false} = {}){
    // if any part of the snake is on the same place as the food
    // .some() === any() in python
    return body.some( (part, index) => {
        if (noHead && index === 0) return false
        return samePlace(part, location)
    })
}

//the location checker
function samePlace(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}


//adds bodyparts

function addParts(){
    for(let i = 0; i < newPart ; i++){
        //basically expands as the body goes out
        body.push({...body[body.length - 1]})
    }
    //otherwise it is just grows forever
    newPart = 0
}

export function headPos(){
    return body[0]
}

export function bodyIntersection(){
    return snakeOn(body[0],{noHead: true})
}

