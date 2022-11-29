function move(keyEvent) {
  let pacman = document.getElementById('pacman');
  let x, y;
  let step = 10;
   if (x < 0) {
    pacman.style.top = pacman.offsetLeft - 5 + "px";
    pacman.style.left = x - step;
  }
  else {
    pacman.style.top = pacman.offsetTop + 5 + "px";
    pacman.style.left = x + step;
  }
  if (y < 0) {
    pacman.style.top = pacman.offsetTop - 5 + "px";
    pacman.style.top = y - step;
  }
  else {
    pacman.style.top = pacman.offsetTop + 5 + "px";
    pacman.style.top = y + step;
  }
  switch (e.key) {
    case 'w': pacman.offsetTop + 5 + "px";break;
    case 's': pacman.offsetTop - 5 + "px";break;
    case 'a': pacman.offsetLeft - 5 + "px"; break;
    case 'd': pacman.offsetLeft + 5 + "px";break;
  }

}


function movePacman(pacman, x, y, step) {

}
function gameLoop() {
  let pacman = document.getElementById('pacman');
  let currTop = pacman.offsetTop;
  let currLeft = pacman.offsetLeft;

}
document.addEventListener('keydown', function (e) {
  move(e.key);
}
)
