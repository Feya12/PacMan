function Arrow(PressedKey) {

  let moving = document.getElementById("moving");

  let currTop = moving.offsetTop;
  let currLeft = moving.offsetLeft;


  // Software Model of the Labyrinth
  // Helps us when we need to stop at a wall and turn at a crossing

  const crossings_and_allowed_directions = [
    //
    //currTop,currLeft
    //                                                //coordinates to the:
    [130, 119, "w", "s", "a"],    //first wall right
    [130, 50, "w", "s", "d"],   //first wall left
    [87, 119, "s", "a"],               //wall right from the red ghost
    [49, 87, "w", "a", "d"],   //wall left from the red ghost
    [150, 116, "w", "a", "d"],   //down right
    [150, 50, "w", "a", "d"],   //down left
    [87, 50, "s", "d"],
    [107, -15, "d"],
    [107, 185, "a"],
    [107, 24, "a", "s", "w"],
    [107, 144, "d", "s", "w"],
    [107, 119, "w", "s", "w"],
    //
    // all_directions_allowed 
    //
    //[154, 144, "a", "d", "w", "s"],
    //[154, 24, "a", "d", "w", "s"],
    //
    //endmost right
    //
    [150, 200, "a", "s"],
    [107, 200, "a"],
    [107, -20, "d"],
    [230, 180, "a", "w"],
    [5, 185, "a", "s"],
    //
    //endmost left
    //
    [150, -15, "d", "s"],
    [107, -15, "d"],
    [5, -15, "d", "s"],
    //
    //other walls
    //
    [60, 70, "a", "s"],
    [60, 95, "d", "s"],
    [60, 50, "d", "w"],
    [60, 120, "a", "w"],
    [230, -15, "d", "w"],
    [155, 70, "a", "s"],
    [155, 90, "d", "s"],
    [35, 120, "d", "a", "s"],
    [35, 50, "d", "a", "s"],
    [35, 135, "d", "a"],
    [84, 95, "d", "a", "w"],
    [35, 35, "d", "a"],
   // [109, 50, "a", "s", "w"]
    //
    //divided by currTop
    //
    //
    //5px
    //
    [5, -15, "d", "s"],
    [5, 24, "a", "d", "s"],
    [5, 70, "a", "s"],
    [5, 95, "d", "s"],
    [5, 144, "a", "d", "s"],
    [5, 180, "a", "s"],
    //35px
    //
    [35, -15, "d", "w", "s"],
    [35, 70, "a", "d", "w"],
    [35, 95, "a", "d", "w"],
    [35, 119, "a", "d", "s"],
    [35, 180, "a", "w", "s"],
    //60px
    //
    [60, -15, "d", "w"],
    [60, 24, "a", "w", "s"],
    [60, 70, "a", "s"],
    [60, 95, "d", "s"],
    [60, 119, "a", "w"],
    [60, 130, "a", "w"],
    [60, 144, "d", "w", "s"],
    [60, 180, "a", "w"],
    //
    //155px
    //
    [155, 73, "a", "s"],
    [155, 97, "d", "s"],
    [155, 119, "a", "d", "w"],
    [155, 180, "a", "s"],
    //
    //180px
    //
    [180, -15, "a", "d"],
    [180, 3, "a", "s"],
    [180, 24, "d", "w", "s"],
    [180, 50, "a", "d", "s"],
    [180, 97, "a", "d", "w"],
    [180, 119, "a", "d", "s"],
    [180, 144, "a", "w", "s"],
    [180, 167, "d", "s"],
    [180, 180, "a", "w"],
    //
    //204px
    //
    [204, -15, "d", "s"],
    [204, 3, "a", "d", "w"],
    [204, 24, "a", "w"],
    [204, 50, "d", "w"],
    [204, 73, "a", "s"],
    [204, 97, "d", "s"],
    [204, 119, "a", "w"],
    [204, 144, "d", "w"],
    [204, 167, "a", "d", "w"],
    [204, 180, "a", "s"],
    //
    //228px
    //
    [228, -15, "d", "w"],
    [228, 70, "a", "d", "w"],
    [228, 71, "a", "d", "w"],
    [228, 73, "a", "w", "d"],
    [228, 97, "d", "w", "a"],
    [228, 180, "a", "w"]
  ];

  for (let i = 0; i < crossings_and_allowed_directions.length; i++) {
    let element = crossings_and_allowed_directions[i];
    if ((currTop == element[0]) && (currLeft == element[1]) && element.includes(PressedKey)) {
      PacManStop = false
    }
    else if (currTop == element[0] && currLeft == element[1]) {
      PacManStop = false 
      directionsAllowed = element
    }
  }

  if (PacManStop == false && directionsAllowed.includes(PressedKey) ) {
      if (x != 0) {
        moving.style.top = currTop + x + "px";
      }
      if (y != 0) {
         moving.style.left = currLeft + y + "px";
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
  let currTop = moving.offsetTop;
  let currLeft = moving.offsetLeft;

  //Status Report
  document.getElementById("status-x").innerHTML = x;
  document.getElementById("status-y").innerHTML = y;
  document.getElementById("currTop").innerHTML = moving.offsetTop;
  document.getElementById("currLeft").innerHTML = moving.offsetLeft;
  document.getElementById("PacManStop").innerHTML = directionsAllowed

  //
  //
  // Brain of PacMan
  //
  //
  let PressedKey = window.localStorage.getItem("PressedKey");

  // Brain Decision about change of direction based on pressed key
  switch (PressedKey) {

    case "a":
      x = 0;
      y = -1;
      Arrow(PressedKey);
      break;//left

    case "w":
      x = -1;
      y = 0;
      Arrow(PressedKey);
      break;//up

    case "s":
      x = 1;
      y = 0;
      Arrow(PressedKey);
      break;//down

    case "d":
      x = 0;
      y = 1;
      Arrow(PressedKey);
      break;//right

  }
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

  x = 1

}

/*
 *
 * This cycles the gameLoop and gives the main heartbeat, determining the overall game speed.
 *
 */


setInterval(gameLoop, 15)
// This is the step of movement
let x = 0, y = 0;
PacManStop = false;
let directionsAllowed = ["d", "a"]
