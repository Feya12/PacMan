function move(top, left) {

  let moving = document.getElementById("moving");
  let border = document.getElementById("frame");
  let currTop = moving.offsetTop;
  let currLeft = moving.offsetLeft;
  let borderTop = border.offsetHeight;
  let borderLeft = border.offsetLeft;

  if (moving.offsetTop < 0) { moving.offsetTop = 0; y = 0; }
  if (moving.offsetLeft > borderLeft) { moving.offsetLeft = 100; x = 0; }
  if (moving.offsetLeft < 0) { moving.offsetLeft = 0; x = 0; }
  if (moving.offsetTop > borderTop) { moving.offsetTop = 100; y = 0; }

  moving.style.top = currTop + top + "px";
  moving.style.left = currLeft + left + "px";
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

  switch (e.key) {

    case 'w': x = -40; y = 0; break;

    case 's': x = 40; y = 0; break;

    case 'a': x = 0; y = -40; break;

    case 'd': x = 0; y = 40; break;

  }

})



function gameLoop() {
  move(x, y)
  //borderPacman(x1,y1)
}
 //let x = 10, y = 10

setInterval(gameLoop, 50)









