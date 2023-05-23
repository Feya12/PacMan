function Arrow(){
  gameLoop(crossings_and_allowed_directions, currLeft, currTop, PacManStop, moving)
  for (var i = 0; i < crossings_and_allowed_directions.length; i++) {

    var element = crossings_and_allowed_directions[i];

    if ((currTop == element[0]) &&
      (currLeft == element[1] &&
        // Here we check if the direction is allowed
        !element.includes(PressedKey))) {
      window.localStorage.setItem("PacManStop", "true");
      PacManStop = "true";
    }
    else if(currTop == element[0]&&
    (currLeft == element[1])){
      window.localStorage.setItem("PacManStop", "false");
      PacManStop = "false";
    }
}

function gameLoop(crossings_and_allowed_directions, currLeft, currTop, PacManStop, moving) {

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

  //Status Report
  document.getElementById("status-x").innerHTML = x;
  document.getElementById("status-y").innerHTML = y;
  document.getElementById("currTop").innerHTML = currTop;
  document.getElementById("currLeft").innerHTML = currLeft;
  document.getElementById("PacManStop").innerHTML = PacManStop;

  //
  //
  // Brains
  //
  //

  // Red Ghost
  var redGhost = document.getElementById('ghostRed');
  var x1 = Math.floor(Math.random() * 30 - 100);
  var y1 = Math.floor(Math.random() * 30 - 100);
  redGhost.style.top = x1 + 'px';
  redGhost.style.left = y1 + 'px';

  // Pink Ghost
  var pinkGhost = document.getElementById('ghostPink');
  var x2 = Math.floor(Math.random() * 40 + 65);
  var y2 = Math.floor(Math.random() * 40 + 65);
  pinkGhost.style.left = y2 + 'px';
  pinkGhost.style.top = x2 + 'px';

  // Blue Chost
  var blueGhost = document.getElementById('ghostBlue');
  var x3 = Math.floor(Math.random() * 50 - 25);
  var y3 = Math.floor(Math.random() * 50 - 25);
  blueGhost.style.left = y3 + 'px';
  blueGhost.style.top = x3 + 'px';

  // Orange Ghost
  var orangeGhost = document.getElementById('ghostOrange');
  var x4 = Math.floor(Math.random() * 65 + 15);
  var y4 = Math.floor(Math.random() * 65 + 15);
  orangeGhost.style.left = y4 + 'px';
  orangeGhost.style.top = x4 + 'px';

  //
  //
  // Brain of PacMan
  //
  //
  var PressedKey = window.localStorage.getItem("PressedKey");

  // Brain Decision about change of direction based on pressed key
  switch (PressedKey) {

    case "ArrowLeft": 
     // x=1;y=1;
      Arrow();
      break;
      //left

    case "ArrowUp":
   
    Arrow();
    break;
    //up

    case "ArrowDown":
      Arrow();
      break;
      //down

    case "ArrowRight":
      Arrow();
      break;//right

  }
}

  // Brain Decision based on a collision w/ a wall
  Arrow();
  /*for (var i = 0; i < all_directions_allowed.length; i++) {

    var element1 = all_directions_allowed[i];

    if ((currTop == element1[0]) &&
      (currLeft == element1[1]) && element1.includes(PressedKey)) {
        window.localStorage.setItem("PacManStop", "false"); 
        PacManStop = "false";
    }
    else{
      window.localStorage.setItem("PacManStop", "true");
      PacManStop = "true";
    }
    
  }*/

  //
  //
  // EXECUTION OF THE DECISIONS OF THE BRAIN
  //
  //

  // Here the motion is controlled

  // Move
  if ((x != 0) && (PacManStop == "false")) {
    moving.style.top = currTop + x + "px";
  }
  // Move
  if ((y != 0) && (PacManStop == "false")) {
    moving.style.left = currLeft + y + "px";
  }

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

  var moving = document.getElementById("moving");

  // Initial Coordinates of PacMan
  moving.style.top = "130px";
  moving.style.left = "85px";

  // localStorage can only save a string at the moment
  window.localStorage.setItem("PacManStop", "false");

  // The Google PacMan begins to move to the left in the beginning of the game
  //window.localStorage.setItem("Pressedkey", "ArrowLeft");

}

/*
 *
 * This cycles the gameLoop and gives the main heartbeat, determining the overall game speed.
 *
 */
setInterval(gameLoop, 20)
// This is the step of movement
let x = 0, y = 0;