import {snakeGrow,snakeOn } from "./snakebody.js"

let newFoodPos 

let food = randomFoodPos() 
const grow = 1

export function fUpdate() {
    if(snakeOn(food)){

    snakeGrow(grow)
    food = randomFoodPos()
    }
}


export function fDraw(){
      const fElement  = document.createElement("div")
      fElement.style.gridRowStart = food.y
      fElement.style.gridColumnStart = food.x
      fElement.classList.add("food") //adds the css
      board.append(fElement)
    }


    function randomFoodPos(){

        //looks for a position that is not on the snake
        while (newFoodPos == null || snakeOn(newFoodPos)){
            newFoodPos = randomGridPos() 
        }
        return newFoodPos
    }

     function randomGridPos() {
        return {
          x: Math.floor(Math.random() * 21) + 1,
          y: Math.floor(Math.random() * 21) + 1
        }
      }

