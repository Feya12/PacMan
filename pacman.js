function gameLoop() {

  //
  //
  // State of the Game
  //
  //

  var moving = document.getElementById("moving");

  // Indicates if PacMan should move or stop eg. against a wall
  var GhostStop = window.localStorage.getItem("GhostStop");
  var PacManStop = window.localStorage.getItem("PacManStop");
  var currTop    = moving.offsetTop;
  var currLeft   = moving.offsetLeft;

  // Software Model of the Labyrinth
  // Helps us when we need to stop at a wall and turn at a crossing

  // [130, [down, right,-15,20,all directions], [,20,45, all except down]


  var arr = [
    //
    //currTop,currLeft
    //                                                //coordinates to the:
    [130, 116, "ArrowUp", "ArrowDown", "ArrowRight"], //first wall right
    [130,  50, "ArrowUp", "ArrowDown", "ArrowLeft"],  //first wall left
    [87,  116, "ArrowDown", "ArrowLeft"],            //wall right from the red ghost
    [49,   87, "ArrowUp", "ArrowLeft", "ArrowRight"], //wall left from the red ghost
    [150, 116, "ArrowUp", "ArrowLeft", "ArrowRight"], //down right
    [150, 50, "ArrowUp", "ArrowLeft", "ArrowRight"],  //down left
    [87, 50, "ArrowDown", "ArrowRight"],
    //
    //endmost right
    //
    [150, 200, "ArrowLeft", "ArrowDown"],
    [107, 200, "ArrowLeft"],
    [230, 180, "ArrowLeft", "ArrowUp"],
    [5, 185,   "ArrowLeft", "ArrowDown"],
    //
    //endmost left
    //
    [150, -15, "ArrowRight", "ArrowDown"],
    [107, -15, "ArrowRight"],
    [230, -15, "ArrowRight", "ArrowUp"],
    [5, -15, "ArrowRight", "ArrowDown"],
    //
    //other walls
    //
    [60, 70,  "ArrowLeft", "ArrowDown"],
    [60, 95, "ArrowRight", "ArrowDown"],
    [60, 50, "ArrowRight", "ArrowUp"],
    [60, 120,"ArrowLeft", "ArrowUp"],
    [230, -15, "ArrowRight", "ArrowUp"],
    [155, 70, "ArrowLeft", "ArrowDown"],
    [155, 90, "ArrowRight", "ArrowDown"],
    [35, 120, "ArrowRight", "ArrowLeft", "ArrowDown"],
    [35, 50, "ArrowRight", "ArrowLeft", "ArrowDown"],
    [35, 135, "ArrowRight", "ArrowLeft"],
    [84, 95, "ArrowRight", "ArrowLeft", "ArrowUp"],
    [35, 35, "ArrowRight", "ArrowLeft"]
  ];

  //Status Report
  document.getElementById("status-x").innerHTML = x;
  document.getElementById("status-y").innerHTML = y;
  document.getElementById("currTop").innerHTML  = currTop;
  document.getElementById("currLeft").innerHTML = currLeft;
  document.getElementById("PacManStop").innerHTML = PacManStop;

  //
  //
  // Brains
  //
  //

  // Red Ghost
  var redGhost = document.getElementById('ghostRed');
  var x1 = Math.floor(Math.random()*30);
  var y1 = Math.floor(Math.random()*30);
  redGhost.style.top = x1 + 'px';
  redGhost.style.left = y1 + 'px';

  // Pink Ghost
  var pinkGhost = document.getElementById('ghostPink');
  var x2 = Math.floor(Math.random()*40);
  var y2 = Math.floor(Math.random()*40);
  pinkGhost.style.left = y2 + 'px';
  pinkGhost.style.top = x2 + 'px';

  // Blue Chost
  var blueGhost = document.getElementById('ghostBlue');
  var x3 = Math.floor(Math.random()*50);
  var y3 = Math.floor(Math.random()*50);
  blueGhost.style.left = y3 + 'px';
  blueGhost.style.top = x3 + 'px';

  // Orange Ghost
  var orangeGhost = document.getElementById('ghostOrange');
  var x4 = Math.floor(Math.random()*65);
  var y4 = Math.floor(Math.random()*65);
  orangeGhost.style.left = y4 + 'px';
  orangeGhost.style.top = x4 + 'px';

  //
  //
  // Brain of PacMan
  //
  //
  var PressedKey = window.localStorage.getItem("PressedKey");

  // Brain Decision based on pressed key
  switch (PressedKey) {

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


  // Brain Decision based on a collision w/ a wall
  for(var i = 0; i < arr.length; i++) {

    var element = arr[i];

      if((currTop  == element[0]) &&
         (currLeft == element[1]  &&
          // Here we check if the direction is allowed
          !element.includes(PressedKey))){
        window.localStorage.setItem("PacManStop", "true");
        PacManStop = "true";
      }

   }

  //
  //
  // EXECUTION OF THE DECISIONS OF THE BRAIN
  //
  //

  // Here the motion is controlled

  // Move
  if((x!=0) && (PacManStop == "false")){
    moving.style.top = currTop + x + "px";
  }
  // Move
  if((y!=0) && (PacManStop == "false")){
    moving.style.left = currLeft + y + "px";
  }
  
  //Move for the ghosts
  if((x1 > 230 + 'px')&&((y1 < -15 + 'px')||(y1 > 235 + 'px'))){
    window.localStorage.setItem("GhostStop", "true");
    GhostStop = "true";
  }
  if((x2 > 230 + 'px')&&((y2 < -15 + 'px')||(y2 > 235 + 'px'))){
    window.localStorage.setItem("GhostStop", "true");
    GhostStop = "true";
  }
  if((x3 > 230 + 'px')&&((y3 < -15 + 'px')||(y3 > 235 + 'px'))){
    window.localStorage.setItem("GhostStop", "true");
    GhostStop = "true";
  }
  if((x4 > 230 + 'px')&&((y4 < -15 + 'px')||(y4 > 235 + 'px'))){
    window.localStorage.setItem("GhostStop", "true");
    GhostStop = "true";
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
  //window.localStorage.setItem("Pressedkey", "ArrowLeft");

}

/*
 *
 * This cycles the gameLoop and gives the main heartbeat, determining the overall game speed.
 *
 */
setInterval(gameLoop, 40)
// This is the step of movement
let x = 0, y = 0;