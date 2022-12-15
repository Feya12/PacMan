function move(top, left) {

  let moving = document.getElementById("moving");

  let currTop = moving.offsetTop;

  let currLeft = moving.offsetLeft;

  if (moving.offsetLeft < 0) { moving.offsetLeft = 0; x = 0; }

  if (moving.offsetLeft > 100) { moving.offsetLeft = 100; x = 0; }

  if (moving.offsetTop < 0) { moving.offsetTop = 0; y = 0; }

  if (moving.offsetTop > 100) { moving.offsetTop = 100; y = 0; }

  moving.style.top = currTop + top + "px";
  moving.style.left = currLeft + left + "px";
}


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
}
//let x = 10, y = 10

setInterval(gameLoop, 50)









