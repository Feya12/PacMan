function move(){
  if(pacman.offsetLeft||pacman.offsetTop<100){
    
  }
}
function moveLeft(pacman) {
  pacman.style.left = pacman.offsetLeft - 1 + "px";
}
function moveRight(pacman) {
  pacman.style.left = pacman.offsetLeft + 1 + "px";
}

function moveDown(pacman) {
  pacman.style.top = pacman.offsetTop + 1 + "px";
}

function moveUp(pacman) {
  pacman.style.top = pacman.offsetTop - 1 + "px";
}


function gameLoop() {
  let pacman = document.getElementById('pacman');
  let currTop = pacman.offsetTop;
  let currLeft = pacman.offsetLeft;

  // smenqm w css mejdu image s zatworena i otworena usta, da se smenq na wseki gameloop
  if (id = 'pacman') {
    pacman.id = 'pacman1';
  }
  else {
    pacman1.id = 'pacman';
  }

  document.addEventListener('keydown', function (e) {
    switch (e.key) {
      case 'w': moveUp(pacman); break;
      case 's': moveDown(pacman); break;
      case 'a': moveLeft(pacman); break;
      case 'd': moveRight(pacman); break;
    }

  }
  )

}


