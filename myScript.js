function move(top, left) {

  const pacman = document.getElementById("pacman");

  let currTop = pacman.offsetTop;

  let currLeft = pacman.offsetLeft;

  if (currLeft < 0) { pacman.style.left = 0; x = 0; }

  if (currLeft > 100) { pacman.style.left = 100; x = 0; }

  if (currTop < 0) { pacman.style.top = 0; y = 0; }

  if (currTop > 100) { pacman.style.top = 100; y = 0; }

  pacman.style.top = currTop + top + "px";
  pacman.style.left = currLeft + left + "px";


}


document.addEventListener("keydown", e => {

  switch (e.key) {

    case 'w': x = -50; y = 0; break;

    case 's': x = 50; y = 0; break;

    case 'a': x = 0; y = -50; break;

    case 'd': x = 0; y = 50; break;

  }

})



function gameLoop() {
  move(x, y)
}
let x = 0, y = 0

setInterval(gameLoop, 15)









