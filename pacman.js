function move(x, y) {

  // TODO
  // This should be probably done only once in the beginning of the game.
  var moving   = document.getElementById("moving");
  var currTop  = moving.offsetTop;
  var currLeft = moving.offsetLeft;
  var width = moving.style.width;
  var currRight = currLeft - width;
  

  //Status Report
  document.getElementById("status-x").innerHTML = x;
  document.getElementById("status-y").innerHTML = y;

  //Status Report
  document.getElementById("currTop").innerHTML = currTop;
  document.getElementById("currLeft").innerHTML = currLeft;

  // Here the motion is controlled
  
  //var stop1 = true;
  //if(stop == false){ 
    var arr = [
    [130, 45, ArrowUp, ArrowDown, ArrowRight],
    [130, 116, ArrowUp, ArrowDown, ArrowDown]
  ]
  
    if(x!=0){
      moving.style.top = currTop + x + "px";
    }
    if(y!=0){
      moving.style.left = currLeft + y + "px";
    } 
    if((currTop==arr[0][0]&&currLeft==arr[0][1])){
    moving.style.left = currLeft - 1 + "px";
   }
//||(currTop==130&&currRight==45)
//arr[0][0] wzimame samo pyrwiq element na purwiq podmasiv

}

 document.addEventListener("keydown", e => {

  // Status Report
  document.getElementById("status-key").innerHTML = e.key;

  switch (e.key) {
 
    case "ArrowLeft": x = 0;   y = -1; break;//left

    case "ArrowUp": x = -1; y = 0; break;//up

    case "ArrowDown": x = 1;  y = 0; break;//right

    case "ArrowRight": x = 0;   y = 1; break;//down

  }
})

// TODO
// In the beginning of the game x and y are not defined and there is an error in the browser console.
function gameLoop() {
  //var stop = false;
  move(x, y)
}

function begin(){

  var moving   = document.getElementById("moving");
  moving.style.top = "130px";
  moving.style.left = "85px";
}


/*
 *
 * This cycles the gameLoop and gives the main heartbeat, determining the overall game speed.
 *
 */
setInterval(gameLoop, 50)
