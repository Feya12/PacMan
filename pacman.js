function move(x, y) {

  // TODO
  // This should be probably done only once in the beginning of the game.
  var moving   = document.getElementById("moving");
  // Indicates if PacMan should move or stop eg. against a wall
  var PacManStop = window.localStorage.getItem("PacManStop");
  var currTop  = moving.offsetTop;
  var currLeft = moving.offsetLeft;
  var height = moving.style.height;
  var width = moving.style.width;
  var currRight = currLeft - width;
  var currDown = currTop + height;
  // Software Model of the Labyrinth
  // Helps us when we need to stop at a wall and turn at a crossing
  var arr = [
    //currTop,currLeft
    [150, 116, ArrowUp, ArrowDown, ArrowRight],
    [150, 50, ArrowUp, ArrowDown, ArrowLeft],
    [85, 114, ArrowDown, ArrowRight],
    [145, 116, ArrowUp, ArrowLeft, ArrowRight]
  ];
  var ArrowUp = moving.style.top - height;
  var ArrowDown = moving.style.top;
  var ArrowLeft = moving.style.left;
  var ArrowRight = moving.style.left - width;

  //Status Report
  document.getElementById("status-x").innerHTML = x;
  document.getElementById("status-y").innerHTML = y;

  //Status Report
  document.getElementById("currTop").innerHTML = currTop;
  document.getElementById("currLeft").innerHTML = currLeft;

  // Here the motion is controlled

  // Move
  if(x!=0){
    moving.style.top = currTop + x + "px";
  }
  // Move
  if((y !=0 ) && (PacManStop == "false")){
    moving.style.left = currLeft + y + "px";
  }else{
    //alert(PacManStop + y);
  }
  // Stop
  for(var i = 0; i < arr.length; i++) {
    var element = arr[i];
    for(var j = 0; j < element.length; j++) {
      if(currTop==arr[i][0]){
        moving.style.top = currTop - 1 + "px";
        //break;
      }
      if(currDown==arr[i][0]){
        moving.style.top = currTop + 1 + "px";
        //break;
      }
      // WE ARE HERE
      if(currLeft==arr[i][1]){
        window.localStorage.setItem("PacManStop", "true");
        // moving.style.left = currLeft - 1 + "px";
      }
      /*else if(currRight==arr[i][1]){
        moving.style.left = currLeft + 1 + "px";
      }*/
    }
   }
}

 document.addEventListener("keydown", e => {

  // Status Report
  document.getElementById("status-key").innerHTML = e.key;

  switch (e.key) {

    case
      "ArrowLeft": x = 0;
      y = -1;
      // Here we un-stop the PacMan in case it is stopped against a wall
      window.localStorage.setItem("PacManStop", "false");
      break;//left

    case "ArrowUp": x = -1; y = 0; break;//up

    case "ArrowDown": x = 1;  y = 0; break;//right

    case "ArrowRight": x = 0;   y = 1; break;//down

  }
})

function gameLoop() {
  //var stop = false;
  move(x, y)
}

// Here we initialise the game
function begin(){
  var moving   = document.getElementById("moving");
  moving.style.top = "130px";
  moving.style.left = "85px";
  // localStorage can only save a string at the moment
  window.localStorage.setItem("PacManStop", "false");
}


/*
 *
 * This cycles the gameLoop and gives the main heartbeat, determining the overall game speed.
 *
 */
setInterval(gameLoop, 50)

// This is the step of movement
let x = 0, y = 0;