function move(x, y) {

  // TODO
  // This should be probably done only once in the beginning of the game.
  var moving   = document.getElementById("moving");
  var currTop  = moving.offsetTop;
  var currLeft = moving.offsetLeft;

  //Status Report
  document.getElementById("status-x").innerHTML = x;
  document.getElementById("status-y").innerHTML = y;

  //Status Report
  document.getElementById("currTop").innerHTML = currTop;
  document.getElementById("currLeft").innerHTML = currLeft;

  // Here the motion is controlled
  if(x!=0&&(currTop>0||currTop<230)){
    moving.style.top = currTop + x + "px";
  }
  else{
    // moving.style.top="130px";
  }

  if(y!=0&&(currLeft>-15||currLeft<185)){
    moving.style.left = currLeft + y + "px";
  }
  else{
    // moving.style.left = "85px";
  }
}

 document.addEventListener("keydown", e => {

  // Status Report
  document.getElementById("status-key").innerHTML = e.key;

  switch (e.key) {

    case 'w': x = -10; y = 0; break;

    case 's': x = 10;  y = 0; break;

    case 'a': x = 0;   y = -10; break;

    case 'd': x = 0;   y = 10; break;

  }
})

// TODO
// In the beginning of the game x and y are not defined and there is an error in the browser console.
function gameLoop() {
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
setInterval(gameLoop, 200);
