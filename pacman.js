function move(x, y) {

  // Status Report
  document.getElementById("status-x").innerHTML = x;
  document.getElementById("status-y").innerHTML = y;

  // TODO
  // This should be probably done only once in the beginning of the game.
  let moving = document.getElementById("moving");
  let border = document.getElementById("frame");
  let currTop = moving.offsetTop;
  let currLeft = moving.offsetLeft;
  let borderTop = border.offsetHeight;
  let borderLeft = border.offsetLeft;

  // Status Report
  document.getElementById("currTop").innerHTML = currTop;
  document.getElementById("currLeft").innerHTML = currLeft;

  // What is this?
  // if (moving.offsetTop < 0) { moving.offsetTop = 0; y = 0; }
  // if (moving.offsetLeft > borderLeft) { moving.offsetLeft = 100; x = 0; }
  // if (moving.offsetLeft < 0) { moving.offsetLeft = 0; x = 0; }
  // if (moving.offsetTop > borderTop) { moving.offsetTop = 100; y = 0; }

  // Here the motion is controlled
  //
  // TODO
  // w/o the ifs the pacman is moving diagonally.
  // Find out why.
  if(x!=0){
    moving.style.top = currTop + x + "px";
  }
  if(y!=0){
  moving.style.left = currLeft + y + "px";
  }
 }
  /*function borderPacman(x,y){

  move(top1,left1)
  let moving = document.getElementById("moving");
  //let border = document.getElementById("frame")
  let x = 225;
  let y = 248;
  if(frame.offsetLeft<moving.offsetLeft){moving.offsetLeft=25}
  else{move(top1,left1)}
  if(frame.offsetTop<moving.offsetTop){moving.offsetTop=20}
  else{move(top1,left1)}

  an attempt to make a function which is cheking if the pacman is out of current coordinates
  but then choosed to try to do this in move()
}*/

document.addEventListener("keydown", e => {

  // Status Report
  document.getElementById("status-key").innerHTML = e.key;

  // Smaller step makes the move animation appear smoother.
  switch (e.key) {

    case 'w': x = -20; y = 0; break;

    case 's': x = 20; y = 0; break;

    case 'a': x = 0; y = -20; break;

    case 'd': x = 0; y = 20; break;

  }

})

function gameLoop() {
  move(x, y)
  //borderPacman(x1,y1)
}
 //let x = 10, y = 10

/*
 *
 * This cycles the gameLoop and gives the main heartbeat, determining the overall game speed.
 *
 */
setInterval(gameLoop, 150)









