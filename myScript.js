function moveLeft(pacman) {
    pacman.style.left += "50px";
}
function moveRight(pacman) {
    pacman.style.right += "50px";
}

function moveDown(pacman) {
    pacman.style.bottom += "50px";
}

function moveUp(pacman) {
    pacman.style.top += "50px";
}
let pacman = document.getElementById('pacman');
let key = document.addEventListener('keydown', function (e) {
    //while(e.key == 'w'||'s' || 'a' || 'd'){
        switch (key) {
           case e.key =='w': moveUp(pacman); break;
           case e.key =='s': moveDown(pacman); break;
           case e.key =='a': moveLeft(pacman); break;
           case e.key =='d': moveRight(pacman); break;
       }

    }
)
//})


 /*
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