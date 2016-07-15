
  window.onload = init;

  var hangwords = [
    ["F", "I", "R", "E", "W", "O", "R", "K", "S"],
    ["B", "O", "A", "T", "I", "N", "G"],
    ["H", "O", "T", "D", "O", "G", "S"],
    ["S", "U", "N", "S", "C", "R", "E", "E", "N"],
    ["S", "U", "N", "S", "E", "T"],
    ["V", "A", "C", "A", "T", "I", "O", "N"],
    ["F", "L", "I", "P", "F", "L", "O", "P", "S"],
    ["B", "A", "R", "B", "E", "Q", "U", "E"],
  ]

  var random = Math.floor((Math.random()*(hangwords.length-1)));

  var picked = hangwords[random];
  var category = new Array(picked.length);
  var word = 0;


  //underscored spaces guesses
  for (var i=0; i < category.length; i++){
      category[i] = "_ ";
  }

  function printCategory(){
    for (var i= 0; i < category.length; i++){
      var spaced = document.getElementById("spaced");
      var wordspaced = document.createTextNode(category[i]);
      spaced.appendChild(wordspaced);
    }
  }

  // checks guessed letters
  var myguess = function(){
    var f =document.formular;
    var b =f.elements["guess"];
    var marks = b.value;
    marks = marks.toUpperCase();
      for (var i =0; i < picked.length; i++) {
          if (picked[i] === marks) {
                category[i] = marks + " ";
                var winner = true;
          }
        b.value ="";
      }

      //replaces with correct guess
      var spaced = document.getElementById("spaced");
          spaced.innerHTML="";
        printCategory();


      // put into wrong letters
      if(!winner) {
          var wrongguess = document.getElementById("wrongguess");
          var wordspaced = document.createTextNode(" " + marks);
          wrongguess.appendChild(wordspaced);
          word++;
      }

       // show remaining guesses ---------------------------------------------fix
        



      //have letters been found
      var found = true;
          for (var i =0; i < category.length; i++) {
              if(category[i] === "_ ") {
                found = false;
              }  
          }
              if(found){
              alert("You win!");
              }

              if(found ===6) {
              alert("You lost, sorry.");
              }


}



function init(){
  printCategory();
}

