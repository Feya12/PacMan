# 11 January 2023

* Work from the office today 
* TO DO:
   * Need to revise all knowledge for ifs `ff` `done`
   * https://www.w3schools.com/js/js_switch.asp
   * Have to change 'w', 'a', 's', 'd' cases in the switch with the keyboard arrows `ff` `done`
   * https://www.codespeedy.com/detect-arrow-key-press-in-javascript/
   * https://www.includehelp.com/code-snippets/move-object-with-arrow-keys-using-javascript-function.aspx
     * Left arrow key has the key code 37, up arrow key has code 38, the right key has the code 39 and the down arrow key has the key code 40. 
     * There are 3 possible events (keydown, keypress, or keyup) that are triggered when a user interacts with the keyboard.
     * If you want to use for example ArrowRight , as a case, you need " ", not ' '
   * After the arrow keys, I noticed that if I press ArrowRight/ArrowLeft, the Pacman moves but the horizontal scroll is on too so it scrolls too.   And I decided to stop it because I think that we do not need it. `ff` `done`
    * https://stackoverflow.com/questions/17756649/disable-the-horizontal-scroll

# 10 January 2023

* Yesterday we made the logic of the left stop to work `done`
* +10 makes it "stop" `done`
* We changed the stop logic with a stop variable `done`

* TO DO:
   * Need to make the logic of the movement with boolean variable `ff`
   * Revise what does bool mean `ff` `done` 
   * https://www.w3schools.com/js/js_booleans.asp
   * Found out that boolean can be an object, not only a variable, but in     this way, code runs slowly, so we do not need it `ff` 
*  Tried to:
   * make do while loop with the exact moving, but it does not work
   * declare second bool, which is used for the borders of the moving, but it does not work   

# 5 January 2023

* 3 January 2023 we did not call.
* Yesterday
  * We learned how to fix the git when we have forgotten to pull before starting work `done`
* Today
  * We explored https://github.com/eduardolundgren/tracking.js and alternatives in order to move the Actors w/ Computer Vision, however we will do it after we make them move with a Computer Model of the Labyrinth.
    * https://github.com/eduardolundgren
      * Abandoned the project two years ago when he started at Netflix.
      * https://www.linkedin.com/in/eduardolundgren/
      * dahoum emailed him `Eduardo`
  * ff has deleted a lot of orphan code `ff` `done`
  * See why upon changing of direction from horiontal to vertical or vice versa, the PacMan starts from zero `ff` `done`
* Homework
  * We begin to do the Computer Model of the Labyring.
    * In order for you to invent it and not me, we will begin w/ simple steps. After every step you will know how to do the next one.
    * First step, make the PacMan stop at the two walls (left and right) `ff`d

# 2 January 2023

11:45 CET ff et gk et dahoum

* Today
  * We figured out the mess w/ the two local repositories `done`
  * We moved her repository to her GitHub `done`
  * We cleaned up Netlify and connected it to her GitHub `done`
  * We learned Netlify deploy w/ git push `done`
  * We did clean clone from your own repostory `done`
  * Still the left and top movement are slower than the right and down `dahoum et ff`
    * We tried 5, 10 and 20; 5 behaves very weirdly `homework`
* Backlog
  * Make the move animation appear smoother.
    * Make the steps smaller and configurable.
  * The PacMan leaves the labyrinth
  * TODOs
  * Heartbeat of each actor.
  * Make variables can be used in the whole code. (maybe global variables?)
* Learnings/ Mantra
  * We learned today the importance to pull before you begin work, since 17 December 2022
  * We demonstrated how one can keep a bulleted list w/ everything one does and this is the report at the end of the day, since 17 December 2022 `ff is doing it`
    * Write an article about this, since 17 December 2022 `dahoum`
  * You have committed/pushed stuff w/ conflicts, you cannot do that. If you cannot commit or push we should call `practice`, since 27 December 2022
  * We should name things consistently and group them as much as possible `watch`, since 27 December 2022
  * You should not have orphaned code (code which is not used) `watch`, since 27 December 2022
  * Keep only this open what you need at the moment and make sure you have the right things open (eg. Netlify or local project in the browser), since 2 January 2023
* Feya's Features
  * Very observant (notices all mistake I make on shared screen and when I forget to do something)
  * Knows her code (what is where)
  * Very good in Mathematics
* Feya's Implementation Specifics
  * JavaScript has more capabilities for animation thatn CSS.
  * However it is good to know both.
  * So we will leave some animation to be done w/ CSS such as the mouth animaiton movements.
    * We will need a bit of JavaScript, because when PacMan stops, the mouth stops in open state.
* Infrastructure
  * GitHub
  * Netlify
    * https://ffpacman.netlify.app