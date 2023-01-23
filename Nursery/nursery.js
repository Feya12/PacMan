function display(str) {
    //var pacman = document.display("pacman1.png")
    $('#fe').append($('<div>').text(str));
}

//function thruAnArray(){
    var arr = [
        //currTop,currLeft
        [130, 116],//ArrowUp, ArrowDown, ArrowRight],
        [130, 50], // ArrowUp, ArrowDown, ArrowLeft],
        [90, 115]// ArrowDown, ArrowRight]
      ];
       
    for(var i = 0; i < arr.length; i++) {
           var element = arr[i];
           for(var j = 0; j < element.length; j++) {
               //alert("element[" + i + "][" + j + "] = " + element[j]);
            document.write(" element[" + i + "][" + j + "] = " + element[j] + "<br>" );
           }
       }
//}