
    //movement

let inputmove = { x:0, y:0}
let lastInput = {x:0, y:0}


  window.addEventListener("keydown",e => {
    switch(e.key) {
      case "ArrowUp":
        if (lastInput.y != 0) break //we dont want input 
                                    //if it is already moving
                                    // up or down. same principal
                                    // for the rest fo them
        inputmove = {x:0, y: -1}
        break
      case "ArrowDown":
        if (lastInput.y != 0) break
        inputmove = {x:0, y: 1}
        break
      case "ArrowRight":
        if (lastInput.x != 0) break
        inputmove = {x:1, y: 0}
        break
      case "ArrowLeft":
        if (lastInput.x != 0) break
        inputmove = {x:-1, y: 0}
    }
  })

  export function move(){
    lastInput = inputmove
    return inputmove
  }