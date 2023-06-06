function Arrow(PressedKey) {

  let moving = document.getElementById("moving");
  // Indicates if PacMan should move or stop eg. against a wall
  let PacManStop = window.localStorage.getItem("PacManStop");
  let currTop = moving.offsetTop;
  let currLeft = moving.offsetLeft;
  // let PressedKey = window.localStorage.getItem("PressedKey");

  // Software Model of the Labyrinth
  // Helps us when we need to stop at a wall and turn at a crossing

  const crossings_and_allowed_directions = [
    //
    //currTop,currLeft
    //                                                //coordinates to the:
    [130, 119, "ArrowUp", "ArrowDown", "ArrowLeft"],    //first wall right
    [130, 50, "ArrowUp", "ArrowDown", "ArrowRight"],   //first wall left
    [87, 119, "ArrowDown", "ArrowLeft"],               //wall right from the red ghost
    [49, 87, "ArrowUp", "ArrowLeft", "ArrowRight"],   //wall left from the red ghost
    [150, 116, "ArrowUp", "ArrowLeft", "ArrowRight"],   //down right
    [150, 50, "ArrowUp", "ArrowLeft", "ArrowRight"],   //down left
    [87, 50, "ArrowDown", "ArrowRight"],
    [107, -15, "ArrowRight"],
    [107, 185, "ArrowLeft"],
    [107, 24, "ArrowLeft", "ArrowDown", "ArrowUp"],
    [107, 144, "ArrowRight", "ArrowDown", "ArrowUp"],
    [107, 119, "ArrowUp", "ArrowDown", "ArrowUp"],
    //
    // all_directions_allowed 
    //
    [154, 144, "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"],
    [154, 24, "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"],
    //
    //initial coordinates to be possible to go left
    //
    [130, 85, "ArrowLeft", "ArrowRight"],
    //
    //endmost right
    //
    [150, 200, "ArrowLeft", "ArrowDown"],
    [107, 200, "ArrowLeft"],
    [230, 180, "ArrowLeft", "ArrowUp"],
    [5, 185, "ArrowLeft", "ArrowDown"],
    //
    //endmost left
    //
    [150, -15, "ArrowRight", "ArrowDown"],
    [107, -15, "ArrowRight"],
    [5, -15, "ArrowRight", "ArrowDown"],
    //
    //other walls
    //
    [60, 70, "ArrowLeft", "ArrowDown"],
    [60, 95, "ArrowRight", "ArrowDown"],
    [60, 50, "ArrowRight", "ArrowUp"],
    [60, 120, "ArrowLeft", "ArrowUp"],
    [230, -15, "ArrowRight", "ArrowUp"],
    [155, 70, "ArrowLeft", "ArrowDown"],
    [155, 90, "ArrowRight", "ArrowDown"],
    [35, 120, "ArrowRight", "ArrowLeft", "ArrowDown"],
    [35, 50, "ArrowRight", "ArrowLeft", "ArrowDown"],
    [35, 135, "ArrowRight", "ArrowLeft"],
    [84, 95, "ArrowRight", "ArrowLeft", "ArrowUp"],
    [35, 35, "ArrowRight", "ArrowLeft"],
    //
    //divided by currTop
    //
    //
    //5px
    //
    [5, -15, "ArrowRight", "ArrowDown"],
    [5, 24, "ArrowLeft", "ArrowRight", "ArrowDown"],
    [5, 70, "ArrowLeft", "ArrowDown"],
    [5, 95, "ArrowRight", "ArrowDown"],
    [5, 144, "ArrowLeft", "ArrowRight", "ArrowDown"],
    [5, 180, "ArrowLeft", "ArrowDown"],
    //35px
    //
    [35, -15, "ArrowRight", "ArrowUp", "ArrowDown"],
    [35, 70, "ArrowLeft", "ArrowRight", "ArrowUp"],
    [35, 95, "ArrowLeft", "ArrowRight", "ArrowUp"],
    [35, 119, "ArrowLeft", "ArrowRight", "ArrowDown"],
    [35, 180, "ArrowLeft", "ArrowUp", "ArrowDown"],
    //60px
    //
    [60, -15, "ArrowRight", "ArrowUp"],
    [60, 24, "ArrowLeft", "ArrowUp", "ArrowDown"],
    [60, 70, "ArrowLeft", "ArrowDown"],
    [60, 95, "ArrowRight", "ArrowDown"],
    [60, 119, "ArrowLeft", "ArrowUp"],
    [60, 130, "ArrowLeft", "ArrowUp"],
    [60, 144, "ArrowRight", "ArrowUp", "ArrowDown"],
    [60, 180, "ArrowLeft", "ArrowUp"],
    //
    //154px
    //
    [154, 73, "ArrowLeft", "ArrowDown"],
    [154, 97, "ArrowRight", "ArrowDown"],
    [154, 119, "ArrowLeft", "ArrowRight", "ArrowUp"],
    [154, 180, "ArrowLeft", "ArrowDown"],
    //
    //180px
    //
    [180, -15, "ArrowLeft", "ArrowRight"],
    [180, 3, "ArrowLeft", "ArrowDown"],
    [180, 24, "ArrowRight", "ArrowUp", "ArrowDown"],
    [180, 50, "ArrowLeft", "ArrowRight", "ArrowDown"],
    [180, 97, "ArrowLeft", "ArrowRight", "ArrowUp"],
    [180, 119, "ArrowLeft", "ArrowRight", "ArrowDown"],
    [180, 144, "ArrowLeft", "ArrowUp", "ArrowDown"],
    [180, 167, "ArrowRight", "ArrowDown"],
    [180, 180, "ArrowLeft", "ArrowUp"],
    //
    //204px
    //
    [204, -15, "ArrowRight", "ArrowDown"],
    [204, 3, "ArrowLeft", "ArrowRight", "ArrowUp"],
    [204, 24, "ArrowLeft", "ArrowUp"],
    [204, 50, "ArrowRight", "ArrowUp"],
    [204, 73, "ArrowLeft", "ArrowDown"],
    [204, 97, "ArrowRight", "ArrowDown"],
    [204, 119, "ArrowLeft", "ArrowUp"],
    [204, 144, "ArrowRight", "ArrowUp"],
    [204, 167, "ArrowLeft", "ArrowRight", "ArrowUp"],
    [204, 180, "ArrowLeft", "ArrowDown"],
    //
    //228px
    //
    [228, -15, "ArrowRight", "ArrowUp"],
    [228, 70, "ArrowLeft", "ArrowRight", "ArrowUp"],
    [228, 71, "ArrowLeft", "ArrowRight", "ArrowUp"],
    [228, 73, "ArrowLeft", "ArrowUp"],
    [228, 97, "ArrowRight", "ArrowUp"],
    [228, 180, "ArrowLeft", "ArrowUp"]
  ];

  for (let i = 0; i < crossings_and_allowed_directions.length; i++) {

    let element = crossings_and_allowed_directions[i];

    if ((currTop == element[0]) && (currLeft == element[1]) && !element.includes(PressedKey)) {

      console.log('IF=======================')
      console.log(currTop == element[0])
      console.log(currLeft == element[1])
      console.log(!element.includes(PressedKey))
      console.log(PressedKey)

      console.log(true)
      console.log(currTop)
      console.log(currLeft)
      console.log('ENDIF=======================')


      window.localStorage.setItem("PacManStop", "true");
      PacManStop = "true";
    }
    else if (currTop == element[0] && (currLeft == element[1])) {
      console.log('ELSEIF=======================')

      console.log(false)
      console.log(currTop)
      console.log(currLeft)
      console.log('ELSEIFEND=======================')

      window.localStorage.setItem("PacManStop", "false");
      PacManStop = "false";
      // Move
      if (x != 0) {
        moving.style.top = currTop + x + "px";

      }

      // Move
      if (y != 0) {
        moving.style.left = currLeft + y + "px";

      }

    }
  }
}
function gameLoop() {

  //
  //
  // State of the Game
  //
  //

  let moving = document.getElementById("moving");
  // Indicates if PacMan should move or stop eg. against a wall
  let PacManStop = window.localStorage.getItem("PacManStop");
  let currTop = moving.offsetTop;
  let currLeft = moving.offsetLeft;


  //Status Report
  document.getElementById("status-x").innerHTML = x;
  document.getElementById("status-y").innerHTML = y;
  document.getElementById("currTop").innerHTML = moving.offsetTop;
  document.getElementById("currLeft").innerHTML = moving.offsetLeft;
  document.getElementById("PacManStop").innerHTML = PacManStop;

  //
  //
  // Brain of PacMan
  //
  //
  let PressedKey = window.localStorage.getItem("PressedKey");

  // Brain Decision about change of direction based on pressed key
  switch (PressedKey) {

    case "ArrowLeft":
      Arrow(PressedKey);
      x = 0;
      y = -1;
      break;//left

    case "ArrowUp":
      Arrow(PressedKey);
      x = -1;
      y = 0;
      break;//up

    case "ArrowDown":
      Arrow(PressedKey);
      x = 1;
      y = 0;
      break;//down

    case "ArrowRight":
      Arrow(PressedKey);
      x = 0;
      y = 1;
      break;//right

  }

  // Brain Decision based on a collision w/ a wall
  /*for (let i = 0; i < all_directions_allowed.length; i++) {
    let element1 = all_directions_allowed[i];
    if ((currTop == element1[0]) &&
      (currLeft == element1[1]) && element1.includes(PressedKey)) {
        window.localStorage.setItem("PacManStop", "false"); 
        PacManStop = "false";
    }
    else{
      window.localStorage.setItem("PacManStop", "true");
      PacManStop = "true";
      
  }*/

  //
  //
  // EXECUTION OF THE DECISIONS OF THE BRAIN
  //
  //

  // Here the motion is controlled



} // END OF gameLoop()

// Here we only listen for the PressedKey, we do not take any action.
document.addEventListener("keydown", e => {

  // Save the PressedKey in the localStorage
  window.localStorage.setItem("PressedKey", e.key);

  // Status Report
  document.getElementById("status-key").innerHTML = e.key;

})

//
//
// Here we initialise the game
//
//

function InitialisePacMan() {

  //
  //
  // State of PacMan
  //
  //

  let moving = document.getElementById("moving");

  // Initial Coordinates of PacMan
  moving.style.top = "130px";
  moving.style.left = "85px";


}

/*
 *
 * This cycles the gameLoop and gives the main heartbeat, determining the overall game speed.
 *
 */


setInterval(gameLoop, 20)
// This is the step of movement
let x = 0, y = 0;
