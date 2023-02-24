function gameLoop() {

  //
  //
  // State of the Game
  //
  //

  // TODO
  // This should be probably done only once in the beginning of the game.
  var moving = document.getElementById("moving");

  // Indicates if PacMan should move or stop eg. against a wall
  var PacManStop = window.localStorage.getItem("PacManStop");
  var currTop    = moving.offsetTop;
  var currLeft   = moving.offsetLeft;

  // Software Model of the Labyrinth
  // Helps us when we need to stop at a wall and turn at a crossing

  var arr = [
    //
    //currTop,currLeft       
    //                                                //coordinates to the:
    [130, 116, "ArrowUp", "ArrowDown", "ArrowRight"], //first wall right
    [130,  50, "ArrowUp", "ArrowDown", "ArrowLeft"],  //first wall left
    [87,  117, "ArrowDown", "ArrowRight"],            //wall right from the red ghost
    [49,   87, "ArrowUp", "ArrowLeft", "ArrowRight"], //wall left from the red ghost
    [150, 116, "ArrowUp", "ArrowLeft", "ArrowRight"], //down right 
    [150, 50, "ArrowUp", "ArrowLeft", "ArrowRight"],  //down left
    //
    //endmost right
    //
    [150, 200, "ArrowLeft", "ArrowDown"],             
    [107, 200, "ArrowLeft"],
    [230, 180,  "ArrowLeft", "ArrowUp"],
    [5, 185, "ArrowLeft", "ArrowDown"],
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
  redGhost.style.left = y1 + 'px'; 
  redGhost.style.top = x1 + 'px';

  /*if(redGhost.style.top<=230 + 'px'){
   
  }
  if(redGhost.style.left >= -55 && redGhost.style.left <=235 + 'px')
  {
   
  }*/ 
  //
  //
  // Brain of PacMan
  //
  //

  // Brain Decision based on pressed key
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

  
  // Brain Decision based on a collision w/ a wall
  for(var i = 0; i < arr.length; i++) {

    var element = arr[i];

      if((currTop==element[0]) && (currLeft==element[1])){
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
setInterval(gameLoop, 75)
// This is the step of movement
let x = 0, y = 0;