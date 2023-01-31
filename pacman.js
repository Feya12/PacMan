function gameLoop() {

  //
  //
  // State of the Game
  //
  //

  // TODO
  // This should be probably done only once in the beginning of the game.
  var moving   = document.getElementById("moving");

  // Indicates if PacMan should move or stop eg. against a wall
  var PacManStop = window.localStorage.getItem("PacManStop");
  var currTop    = moving.offsetTop;
  var currLeft   = moving.offsetLeft;
  var height     = moving.style.height;
  var width      = moving.style.width;

  // Software Model of the Labyrinth
  // Helps us when we need to stop at a wall and turn at a crossing
  var arr = [
    //currTop,currLeft                                //coordinates to the:
    [130, 116, "ArrowUp", "ArrowDown", "ArrowRight"], //first wall right
    [130, 50, "ArrowUp", "ArrowDown", "ArrowLeft"],   //first wall left
    [87, 117, "ArrowDown", "ArrowRight"],             //wall right from the red ghost
    [49, 87, "ArrowUp", "ArrowLeft", "ArrowRight"]    //wall left from the red ghosy
  ];

  //Status Report
  document.getElementById("status-x").innerHTML = x;
  document.getElementById("status-y").innerHTML = y;
  document.getElementById("currTop").innerHTML  = currTop;
  document.getElementById("currLeft").innerHTML = currLeft;

  //
  //
  // Brains
  //
  //

  //
  //
  // Brain of PacMan
  //
  //

  switch (window.localStorage.getItem("PressedKey")) {

    case "ArrowLeft":
      x = 0;
      y = -1;
      // Here we un-stop the PacMan in case it is stopped against a wall
      window.localStorage.setItem("PacManStop", "false");
      break;//left

    case "ArrowUp":
      x = -1;
      y = 0;
      window.localStorage.setItem("PacManStop", "false");
      break;//up

    case "ArrowDown":
      x = 1;
      y = 0;
      window.localStorage.setItem("PacManStop", "false");
      break;//down

    case "ArrowRight":
      x = 0;
      y = 1;
      window.localStorage.setItem("PacManStop", "false");
      break;//right

  }

  // Here the motion is controlled

  // Move
  if((x!=0) && (PacManStop == "false")){
    moving.style.top = currTop + x + "px";
  }
  // Move
  if((y!=0) && (PacManStop == "false")){
    moving.style.left = currLeft + y + "px";
  }

  // Stop
  for(var i = 0; i < arr.length; i++) {

    var element = arr[i];

    for(var j = 0; j < element.length; j++) {
//
      if((currLeft==arr[i][1])&&(currTop==arr[i][0])){
        window.localStorage.setItem("StopPacMan", "true");
        //alert("dg")
      }

    }
   }
}

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
function InitialisePacMan(){

  //
  //
  // State of PacMan
  //
  //

  var moving   = document.getElementById("moving");

  // Initial Coordinates of PacMan
  moving.style.top = "130px";
  moving.style.left = "85px";

  // localStorage can only save a string at the moment
  window.localStorage.setItem("PacManStop", "false");

  // The Google PacMan begins to move to the left in the beginning of the game
  window.localStorage.setItem("Pressedkey", "ArrowRight");

}

/*
 *
 * This cycles the gameLoop and gives the main heartbeat, determining the overall game speed.
 *
 */
setInterval(gameLoop, 10)
// This is the step of movement
let x = 0, y = 0;