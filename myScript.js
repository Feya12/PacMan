function moveLeft(pacman) {
    pacman.style.left -= "50px";
}
function moveRight(pacman) {
    pacman.style.left += "50px";
}

function moveDown(pacman) {
    pacman.style.top += "50px";
}

function moveUp(pacman) {
    pacman.style.top -= "50px";
}
let pacman = document.getElementById('pacman');
function gameLoop(){
// smenqm w css mejdu image s zatworena i otworena usta, da se smenq na wseki gameloop
pacman.id='pacman1';
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
setInterval(gameLoop,90)





/*
ako id e pacman = pacman1;
ako id pacman1 = pacman;
  while (e.key === 'W' ) {
      
      while (i<100, i++){
  switch(key){
      case 'W': moveUp(pacman); break;
      case 'S': moveDown(pacman); break;
      case 'A': moveLeft(pacman); break;
      case 'D': moveRight(pacman); break;
  }

}
{
  if(e.key === 'w')
  moveUp(pacman)
})
document.addEventListener('keydown', function(e){
  if(e.key === 'a')
  moveLeft(pacman)
})
document.addEventListener('keydown', function(e){
  if(e.key === 's')
  moveDown(pacman)
})
document.addEventListener('keydown', function(e){
  if(e.key === 'd')
  moveRight(pacman)
})

while (i<100, i++){
  switch(key){
      case 'W': moveUp(pacman); break;
      case 'S': moveDown(pacman); break;
      case 'A': moveLeft(pacman); break;
      case 'D': moveRight(pacman); break;
  }
}

})
 

  }
})
*/