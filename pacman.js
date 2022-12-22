function move(x, y) { 
  // TODO
  // This should be probably done only once in the beginning of the game. 
  var moving = document.getElementById("moving");
  var currTop = moving.offsetTop;
  var currLeft = moving.offsetLeft;
  
  //Status Report
  document.getElementById("status-x").innerHTML = x;
  document.getElementById("status-y").innerHTML = y;

  //Status Report
  document.getElementById("currTop").innerHTML = currTop;
  document.getElementById("currLeft").innerHTML = currLeft;

  // Here the motion is controlled
  if(x!=0){
    moving.style.top = currTop + x + "px";
  }
  //else{moving.style.top = 0;} try to limit the movement, not the right way
  if(y!=0){
  moving.style.left = currLeft + y + "px";
  }
  //else{moving.style.left = 0;}
 }
document.addEventListener("keydown", e => {

  // Status Report
  document.getElementById("status-key").innerHTML = e.key;

  switch (e.key) {

    case 'w': x = -10; y = 0; break;

    case 's': x = 1; y = 0; break;//if s&d are smaller, can the steps be smoother?

    case 'a': x = 0; y = -10; break;

    case 'd': x = 0; y = 1; break;

  }
})


function gameLoop() {
  move(x, y)
}

/*
 *
 * This cycles the gameLoop and gives the main heartbeat, determining the overall game speed.
 *
 */
setInterval(gameLoop, 150)








