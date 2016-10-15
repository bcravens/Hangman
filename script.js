$("document").ready(function(){
var hangman = {
  inputWord: [],
  wordUnderscore: [],
  val: [],
};

var counter = -1;
var bodyParts = ["#head", "#body", "#leftArm", "#rightArm", "#leftLeg", "#rightLeg"];

function hideBody(){
  for (i=0; i<bodyParts.length; i++)
    $(bodyParts[i]).css('border','none');}

  $("#entry").on("submit", function(pd){
    pd.preventDefault();
    var userInput = $("#newEntry").val().toLowerCase();
    var changeInput = userInput.split('');
    hangman.inputWord = changeInput.concat();
      for ( i=0; i<changeInput.length; i++) {
        hangman.wordUnderscore[i] = "_";
      }
    $("#inputGoesHere").html(hangman.wordUnderscore);
    $("#entry").trigger("reset");
    hideBody();
  });

  $(".letter").on("click", function(pd){
    pd.preventDefault();
    var grabValue = this.value;
    hangman.val = grabValue;
  });

  $(".letter").on("click", function(){
    if (hangman.inputWord.includes(hangman.val)) {
      for (i=0; i<hangman.inputWord.length; i++) {
        if (hangman.inputWord[i] === (hangman.val)){
          hangman.wordUnderscore[i] = hangman.val;
          $("#inputGoesHere").html(hangman.wordUnderscore);
        }
      }
    } else if (counter === 4) {
        $(bodyParts[5]).css('border','2px solid black');
        setTimeout(function() { alert("You lose."); }, 150);
    } else {
      counter += 1;
      $(bodyParts[counter]).css('border','2px solid black');
    }
  });

});
