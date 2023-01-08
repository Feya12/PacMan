function move(x, y) {

  // TODO
  // This should be probably done only once in the beginning of the game.
  var moving   = document.getElementById("moving");
  var currTop  = moving.offsetTop;
  var currLeft = moving.offsetLeft;
  //var width = moving.style.width;
  //var currRight = currLeft - width;

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

  if(y!=0){
    moving.style.left = currLeft + y + "px";
  }
  
  if(currTop==130&&currLeft==116){
    moving.style.left=currLeft - 1 + "px";
  }
  if(currTop==155&&currLeft==115){
    moving.style.top=currTop - 1 + "px";
  }
  if(currLeft==183&&currTop==155){
    moving.style.left=currLeft - 1 + "px";
  }
  
  if(currTop==110&&currRight==187){
    moving.style.right=currRight - 1 + "px";
  }
/*
  /*if(currLeft==115&&moving.style.top==130){
    moving.style.left = currLeft - 1 + "px";
    moving.style.top = currTop - 1 + "px";  
  }*/
}

 document.addEventListener("keydown", e => {

  // Status Report
  document.getElementById("status-key").innerHTML = e.key;

  switch (e.key) {

    case 'w': x = -1; y = 0; break;

    case 's': x = 1;  y = 0; break;

    case 'a': x = 0;   y = -1; break;

    case 'd': x = 0;   y = 1; break;

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
setInterval(gameLoop, 50);
