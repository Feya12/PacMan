function gameLoop() {

  //
  //
  // State of the Game
  //
  //

  var moving = document.getElementById("moving");

  // Indicates if PacMan should move or stop eg. against a wall
  var GhostStop = window.localStorage.getItem("GhostStop");
  var PacManStop = window.localStorage.getItem("PacManStop");
  var currTop    = moving.offsetTop;
  var currLeft   = moving.offsetLeft;

  // Software Model of the Labyrinth
  // Helps us when we need to stop at a wall and turn at a crossing

  var arr = [
    //
    //currTop,currLeft
    //                                                //coordinates to the:
    [130, 116, "ArrowUp", "ArrowDown", "ArrowRight"], //first wall right
    [130,  50, "ArrowUp", "ArrowDown", "ArrowLeft"],  //first wall left
    [87,  116, "ArrowDown", "ArrowLeft"],            //wall right from the red ghost
    [49,   87, "ArrowUp", "ArrowLeft", "ArrowRight"], //wall left from the red ghost
    [150, 116, "ArrowUp", "ArrowLeft", "ArrowRight"], //down right
    [150, 50, "ArrowUp", "ArrowLeft", "ArrowRight"],  //down left
    [87, 50, "ArrowDown", "ArrowRight"],
    //
    //endmost right
    //
    [150, 200, "ArrowLeft", "ArrowDown"],
    [107, 200, "ArrowLeft"],
    [230, 180, "ArrowLeft", "ArrowUp"],
    [5, 185,   "ArrowLeft", "ArrowDown"],
    //
    //endmost left
    //
    [150, -15, "ArrowRight", "ArrowDown"],
    [107, -15, "ArrowRight"],
    [230, -15, "ArrowRight", "ArrowUp"],
    [5, -15, "ArrowRight", "ArrowDown"],
    //
    //other walls
    //
    [60, 70,  "ArrowLeft", "ArrowDown"],
    [60, 95, "ArrowRight", "ArrowDown"],
    [60, 50, "ArrowRight", "ArrowUp"],
    [60, 120,"ArrowLeft", "ArrowUp"],
    [230, -15, "ArrowRight", "ArrowUp"],
    [155, 70, "ArrowLeft", "ArrowDown"],
    [155, 90, "ArrowRight", "ArrowDown"],
    [35, 120, "ArrowRight", "ArrowLeft", "ArrowDown"],
    [35, 50, "ArrowRight", "ArrowLeft", "ArrowDown"],
    [35, 135, "ArrowRight", "ArrowLeft"],
    [84, 95, "ArrowRight", "ArrowLeft", "ArrowUp"],
    [35, 35, "ArrowRight", "ArrowLeft"]
  ];

  // [130, [down, right,-15,20,all directions], [,20,45, all except down]

  var corridor = [
    [60,
      [-15, "ArrowRight", "ArrowUp"],
      [
       -13, -12, -11,
       -10, -9, -8, -7, -6,
       -5, -4, -3, -2, -1,
       0, 1, 2, 3, 4,
       5, 6, 7, 8, 9,
       10, 11, 12, 13, 14, 
       15, 16, 17, 18,
       19, 20, 21, 22, 23,
       52, 53, 54, 55, 56, 
       57, 58, 59, 60, 61, 
       62, 63, 64, 65, 66,
       67, 68, 69, 70, 71,
       72, 73, 74, 75, 80,
       81, 82, 83, 84, 85, 
       86, 87, 88, 89, 90,
       95, 96, 97, 98, 99, 
       100, 101, 102, 103, 104, 
       105, 106, 107, 108, 109, 
       110, 111, 112, 113, 114, 
       114, 115,
       116, 117, 118, 119, 120, 
       121, 122, 123, 124, 125, 
       126, 127, 128, 129, 130,
       131, 132, 133, 134, 135,
       136, 137, 138, 139, 140, 
       141, 142, 143, 145, 146, 
       147, 148, 149, 
       150, 151, 152, 153, 154, 
       155, 156, 157, 158, 159, 
       160, 161, 162, 163, 164, 
       165, 166, 167, 168, 169,
       170, 171, 172, 173, 174, 
       175, 176, 177, 178, 179,
       "ArrowLeft", "ArrowRight"
      ],
      [24, 25, 144, "ArrowRight", "ArrowUp", "ArrowDown"],
      [180, "ArrowLeft", "ArrowUp"]
    ],
    [85
      [24, 114, "ArrowUp", "ArrowDown"],
      [
        52, 53, 54, 55, 56, 
        57, 58, 59, 60, 61, 
        62, 63, 64, 65, 66,
        67, 68, 69, 70, 71,
        72, 73, 74, 75, 76,
        77, 78, 79, 80, 81,
        82, 83, 84, 85, 86,
        87, 88, 89, 90, 91,
        92, 93, 94, 95, 96,
        97, 98, 99, 100, 101,
        102, 103, 104, 105, 106,
        107, 108, 109, 110, 111,
        112, 113, 114, "ArrowLeft", "ArrowRight"
      ],

    ],
    [108,
      [-15, "ArrowLeft"], 
      [
       -14, -13, -12, -11,
       -10, -9, -8, -7, -6,
       -5, -4, -3, -2, -1,
       0, 1, 2, 3, 4,
       5, 6, 7, 8, 9,
       10, 11, 12, 13, 14, 
       15, 16, 17, 18,
       19, 20, 26, 27, 28,
       29, 30, 31, 32, 33, 
       34, 35, 133, 134, 135, 
       136, 137, 138, 139, 140,
       145, 146, 147, 148, 149, 
       150, 151, 152, 153, 154, 
       155, 156, 157, 158, 159, 
       160, 161, 162, 163, 164, 
       165, 166, 167, 168, 169,
       170, 171, 172, 173, 174, 
       175, 176, 177, 178, 179,
       "ArrowLeft", "ArrowRight"
      ],
      [
        21, 22, 23, 24, 25,
        141, 142, 143, 144, 
        "ArrowLeft", "ArrowRight", "ArrowUp",
        "ArrowDown"
      ],
      [
        36, 37, 38, 39, 40,
        41, 42, 43, 44, 45,
        46, 47, 48, 49, 50,
        "ArrowRight", "ArrowUp",
        "ArrowDown"
      ],
      [
        118, 119, 120, 121, 122, 
        123, 124, 125, 126, 127,
        128, 129, 130, 131, 132,
        "ArrowLeft", "ArrowUp", "ArrowDown"
      ],
      [180, "ArrowRight"] 
    ],
    [130, 
      [24, 144, "ArrowUp", "ArrowDown"],
      [49, 50, "ArrowRight", "ArrowUp", "ArrowDown"],
      [
        52, 53, 54, 55, 56, 
        57, 58, 59, 60, 61, 
        62, 63, 64, 65, 66,
        67, 68, 69, 70, 71,
        72, 73, 74, 75, 76,
        77, 78, 79, 80, 81,
        82, 83, 84, 85, 86,
        87, 88, 89, 90, 91,
        92, 93, 94, 95, 96,
        97, 98, 99, 100, 101,
        102, 103, 104, 105, 106,
        107, 108, 109, 110, 111,
        112, 113, 114, "ArrowLeft", "ArrowRight"
      ],
      [115, 116, "ArrowLeft", "ArrowUp", "ArrowDown"],
    ], 

    [150, 
      [
        -15, -14, -13, -12, -11, 
        -10, -9, -8, -7, -6, 
        -5, -4, -3, -2, -1, 
        0, 1, 2, 3, 4, 5,
        6, 7, 8, 9, 10, 
        11, 12, 13, 14, 15,
        16, 17, 18, 19, 21, 
        22, 23, 24, 25, 26,
        27, 28, 29, 30, 31, 
        32, 33, 34, 35, 36, 
        37, 38, 39, 40, 41, 
        42, 43, 44,
        91, 92, 93, 94, 
        95, 96, 97, 98, 99, 
        100, 101, 102, 103, 104,
        105, 106, 108, 109,
        136, 137, 138, 139, 140,
        151, 152, 153, 154, 155,
        156, 157, 158, 159, 160,
        161, 162, 163, 164, 165,
        166, 167, 168, 169, 170,
        171, 172, 173, 174, 175,
        "ArrowLeft", "ArrowRight"
      ],
      [20, "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"],
      [
        45, 121, 122, 123, 124, 
        125, 126, 127, 128, 129, 
        130, 131, 132, 133, 134, 
        135,
        141, 142, 143, 144, 145,
        146, 147, 148, 149, 150,
        "ArrowLeft", "ArrowRight", "ArrowUp"
      ],
      [89, 90, 176, 177, 180, "ArrowRight", "ArrowDown"],
      [
        110, 111, 112, 113, 114,
        115, 116, 117, 118, 119, 120,
        "ArrowLeft", "ArrowRight", "ArrowDown"
      ]
    ], 

    [180,
      [-15, -14, -13, -12, -11,
      -10, -9, -8, -7, -6,
      -5, -4, -3, -2, -1,
      30, 31, 32, 33, 34,
      35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 
      45, 46, 47, 48, 49,
      50, 51, 52, 53, 54,
      55, 56, 57, 58, 59,
      75, 76, 77, 78, 79,
      80, 81, 82, 83, 84, 
      85, 86, 87, 88, 100, 
      101, 102, 103, 104, 105, 
      106, 107, 108, 109, 110,
      111, 112, 113, 114, 115,
      116, 117, 118, 119, 120, 
      121, 122, 123, 124, 125, 
      126, 127, 128, 129, 130,
      131, 132, 133, 134, 135,
      136, 137, 138, 171, 172, 
      173, 174, 175, 176, 177, 178, 
      179, "ArrowLeft", "ArrowRight"
      ],
      [0, "ArrowLeft", "ArrowDown"],
      [
        25, 26, 27, 28, 29, 139, 140,
        "ArrowLeft", "ArrowRight", "ArrowDown"
      ], 
      [
        60, 61, 62, 63, 64,
        65, 66, 67, 68, 69,
        70, 71, 72, 73, 74, 
        89, 90, 91, 92, 93,
        94, 95, 96, 97, 98,
        99, "ArrowLeft", "ArrowRight", "ArrowUp"
      ],
      [170, "ArrowRight", "ArrowDown"],
      [180, "ArrowLeft", "ArrowUp"]
    ],

    [230,
      [
        -15, - 14, -13, -12, -11, 
        176, 177, 178, 179, 180, 
        "ArrowRight", "ArrowUp"
      ],
      [
        -10, -9, -8, -7, -6, 
        -5, -4, -3, -2, -1,
        0, 1, 2, 3, 4, 
        5, 6, 7, 8, 9, 
        10, 11, 12, 13, 14, 
        15, 16, 17, 18, 19, 
        20, 21, 22, 23, 24, 
        25, 26, 27, 28, 29,
        30, 31, 32, 33, 34, 
        35, 36, 37, 38, 39,
        40, 41, 42, 43, 44,
        45, 46, 47, 48, 49,
        50, 51, 52, 53, 54, 
        55, 56, 57, 58, 59,
        60, 61, 62, 63, 64,
        65, 66, 67, 68, 73, 
        74, 75, 76, 77, 78, 
        79, 80, 81, 82, 83, 
        84, 85, 86, 87, 88, 
        89, 96, 97, 98, 99, 100,
        101, 102, 103, 104, 105,
        106, 107, 108, 109, 110,
        111, 112, 113, 114, 115, 
        116, 117, 118, 119, 120,
        121, 122, 123, 124, 125,
        126, 127, 128, 129, 130,
        131, 132, 133, 134, 135, 
        136, 137, 138, 139, 140,
        141, 142, 143, 144, 145,
        146, 147, 148, 149, 150,
        151, 152, 153, 154, 155,
        156, 157, 158, 159, 160,
        161, 162, 163, 164, 165, 
        166, 167, 168, 169, 170, 
        171, 172, 173, 174, 175,
        "ArrowLeft", "ArrowRight"
      ],
      [
        69, 70, 71, 72, 90, 
        91, 92, 93, 94, 95,
        "ArrowLeft", "ArrowRight", "ArrowUp"
      ],
    ]
  ];

  

  //Status Report
  document.getElementById("status-x").innerHTML = x;
  document.getElementById("status-y").innerHTML = y;
  document.getElementById("currTop").innerHTML  = currTop;
  document.getElementById("currLeft").innerHTML = currLeft;
  document.getElementById("PacManStop").innerHTML = PacManStop;

  //
  //
  // Brains
  //
  //

  // Red Ghost
  var redGhost = document.getElementById('ghostRed');
  var x1 = Math.floor(Math.random()*30 - 10);
  var y1 = Math.floor(Math.random()*30 - 10);
  redGhost.style.top = x1 + 'px';
  redGhost.style.left = y1 + 'px';

  // Pink Ghost
  var pinkGhost = document.getElementById('ghostPink');
  var x2 = Math.floor(Math.random()*40 + 65);
  var y2 = Math.floor(Math.random()*40 + 65);
  pinkGhost.style.left = y2 + 'px';
  pinkGhost.style.top = x2 + 'px';

  // Blue Chost
  var blueGhost = document.getElementById('ghostBlue');
  var x3 = Math.floor(Math.random()*50 - 25);
  var y3 = Math.floor(Math.random()*50 - 25);
  blueGhost.style.left = y3 + 'px';
  blueGhost.style.top = x3 + 'px';

  // Orange Ghost
  var orangeGhost = document.getElementById('ghostOrange');
  var x4 = Math.floor(Math.random()*65 + 15);
  var y4 = Math.floor(Math.random()*65 + 15);
  orangeGhost.style.left = y4 + 'px';
  orangeGhost.style.top = x4 + 'px';

  //
  //
  // Brain of PacMan
  //
  //
  var PressedKey = window.localStorage.getItem("PressedKey");

  // Brain Decision based on pressed key
  switch (PressedKey) {

    case "ArrowLeft":
      x = 0;
      y = -1;
      // Here we un-stop the PacMan in case it is stopped against a wall
      window.localStorage.setItem("PacManStop", "false");
      break;//left

    case "ArrowUp":
      x = -1;
      y = 0;
      window.localStorage.setItem("PacManStop", "false");
      break;//up

    case "ArrowDown":
      x = 1;
      y = 0;
      window.localStorage.setItem("PacManStop", "false");
      break;//down

    case "ArrowRight":
      x = 0;
      y = 1;
      window.localStorage.setItem("PacManStop", "false");
      break;//right

  }


  // Brain Decision based on a collision w/ a wall
  for(var i = 0; i < arr.length; i++) {

    var element = arr[i];

      if((currTop  == element[0]) &&
         (currLeft == element[1]  &&
          // Here we check if the direction is allowed
          !element.includes(PressedKey))){
        window.localStorage.setItem("PacManStop", "true");
        PacManStop = "true";
      }

   }

  //
  //
  // EXECUTION OF THE DECISIONS OF THE BRAIN
  //
  //

  // Here the motion is controlled

  // Move
  if((x!=0) && (PacManStop == "false")){
    moving.style.top = currTop + x + "px";
  }
  // Move
  if((y!=0) && (PacManStop == "false")){
    moving.style.left = currLeft + y + "px";
  }
  
  //Move for the ghosts
 /* if((x1 > 230 + 'px')&&((y1 < -15 + 'px')||(y1 > 235 + 'px'))){
    window.localStorage.setItem("GhostStop", "true");
    GhostStop = "true";
  }
  if((x2 > 230 + 'px')&&((y2 < -15 + 'px')||(y2 > 235 + 'px'))){
    window.localStorage.setItem("GhostStop", "true");
    GhostStop = "true";
  }
  if((x3 > 230 + 'px')&&((y3 < -15 + 'px')||(y3 > 235 + 'px'))){
    window.localStorage.setItem("GhostStop", "true");
    GhostStop = "true";
  }
  if((x4 > 230 + 'px')&&((y4 < -15 + 'px')||(y4 > 235 + 'px'))){
    window.localStorage.setItem("GhostStop", "true");
    GhostStop = "true";
    // saw that it does not work
  }*/ 
} // END OF gameLoop()

// Here we only listen for the PressedKey, we do not take any action.
document.addEventListener("keydown", e => {

  // Save the PressedKey in the localStorage
  window.localStorage.setItem("PressedKey", e.key);

  // Status Report
  document.getElementById("status-key").innerHTML = e.key;

})

//
//
// Here we initialise the game
//
//
function InitialisePacMan(){

  //
  //
  // State of PacMan
  //
  //

  var moving   = document.getElementById("moving");

  // Initial Coordinates of PacMan
  moving.style.top = "130px";
  moving.style.left = "85px";

  // localStorage can only save a string at the moment
  window.localStorage.setItem("PacManStop", "false");

  // The Google PacMan begins to move to the left in the beginning of the game
  //window.localStorage.setItem("Pressedkey", "ArrowLeft");

}

/*
 *
 * This cycles the gameLoop and gives the main heartbeat, determining the overall game speed.
 *
 */
setInterval(gameLoop, 150)
// This is the step of movement
let x = 0, y = 0;