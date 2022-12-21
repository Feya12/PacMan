# PacMan w/ ff

## Netlify

https://soft-madeleine-0e1900.netlify.app

## What is special about ff

* Has done the animation w/ CSS.
  * JavaScript has more capabilities for animation thatn CSS.
  * However it is good to know both.
  * So we will leave some animation to be done w/ CSS such as the mouth animaiton movements.
    * We will need a bit of JavaScript, because when PacMan stops, the mouth stops in open state.

<<<<<<< HEAD
## 17 December 2022

11:00 CET call ff et dahoum

* Check progress...
=======

    * Check progress...
>>>>>>> dc19d4a (Steps)
  * (We learned today the importance to pull before you begin work.)
  * (We demonstrated how one can keep a bulleted list w/ everything one does and this is the report at the end of the day.)
    * (You can dynamically re-order the list.)
    * Write an article about this `dahoum`
  * There is an improvement of the wasd keys.
    * The speed is too high
      * Reduced Main Hartbeat `done`
        * https://youtu.be/BalgIMSzY3k
        * Heartbeat of each actor
    * The PacMan moves diagonally
      * Created a helper showing us which key is pressed `done`
      * There is mix of x,y and top,left which is good to be fixed `done`
      * Created a helper showing the currTop and currLeft and discovered that they both change even if x or y is 0 `done`
      * Added ifs to only do motion if x or y are != than 0. This fixed the diagonal `done`
      * In some moments the wasd keys do not respond properly, this was fixed by the ifs `done` `interesting`
      * To see why without the ifs pacman moves diagonally `interesting`
      * Still the left and top movement are slower than the right and down `HOMEWORK`
    * The PacMan leaves the labyrinth
<<<<<<< HEAD
=======

  21 December
  *TO DO:  
  1.Still the left and top movement are slower than the right and down;
  2.The PacMan leaves the labyrinth; How to fix it?;
  3.Make the move animation appear smoother.
  4.Heartbeat of each actor?
  5.Make variables can be used in the whole code. (maybe global variables?)
   - we have the main heartbeat
  *DONE:
  1.Made the move animation appear smoother.
  2.Made steps smaller.
>>>>>>> dc19d4a (Steps)
