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
  if(x!=0&&moving.style.top>-150||moving.style.top<210){
    moving.style.top = currTop + x + "px";
  }
  else{
    moving.style.top=0;
  }

  if(y!=0&&moving.style.left>-55||moving.style.left<320){
    moving.style.left = currLeft + y + "px";
  }
  else{
    moving.style.left = 0;
  }
}

 document.addEventListener("keydown", e => {

  // Status Report
  document.getElementById("status-key").innerHTML = e.key;

  switch (e.key) {

    case 'w': x = -10; y = 0; break;

    case 's': x = 10;  y = 0; break;

    // 5 1 + 9 = 3 (to the right) + 13 (to the right) = 16 (to the right)

    // 10 2 + 18 = 2 x 10 = 20

    // 20 12 + 28 = 2 x 20 = 40

    case 'a': x = 0;   y = -5; break;

    case 'd': x = 0;   y = 5; break;

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
setInterval(gameLoop, 40);
