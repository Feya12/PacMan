function move(x, y) {

  // TODO
  // This should be probably done only once in the beginning of the game.
  var moving   = document.getElementById("moving");
  var currTop  = moving.offsetTop;
  var currLeft = moving.offsetLeft;
  // TODO
  // See why this does not work.
  // var currTop  = moving.style.top;
  // var currLeft = moving.style.left;

  //Status Report
  document.getElementById("status-x").innerHTML = x;
  document.getElementById("status-y").innerHTML = y;

  //Status Report
  document.getElementById("currTop").innerHTML = currTop;
  document.getElementById("currLeft").innerHTML = currLeft;

  // Here the motion is controlled

  // To see why without the ifs pacman moves diagonally `interesting`
  if(x!=0&&currTop>-100||currTop<110){
    // moving.offsetTop cannot be used because offsetTop is read-only
    moving.style.top = currTop + x + "px";

  }
  // if(x!=0){//x>-10&&x<100--> it means x belongs to [-10;100] interval (new way, according to status report)
  //   moving.style.top = currTop + x + "px";
  // }


  //else{moving.style.top = 0;} try to limit the movement, not the right way
    //else{moving.style.top = 0;} //try to limit the movement, not the right way
    // if(y!=0){//[-94;110]

  // To see why without the ifs pacman moves diagonally `interesting`

  if(y!=0&&currLeft>-85||currLeft<120){
    moving.style.left = currLeft + y + "px";
    // moving.offsetLeft = currLeft + y + "px";
  }
  //else{moving.style.left = 0;}
}

 document.addEventListener("keydown", e => {

  // Status Report
  document.getElementById("status-key").innerHTML = e.key;

  switch (e.key) {

    case 'w': x = -10; y = 0; break;

    case 's': x = 10;  y = 0; break;//if s&d are smaller, can the steps be smoother?

    // 5 1 + 9 = 3 (to the right) + 13 (to the right)

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

  moving.style.top = "125px";
  moving.style.left = "80px";
}

/*
 *
 * This cycles the gameLoop and gives the main heartbeat, determining the overall game speed.
 *
 */
setInterval(gameLoop, 1000);
