$("document").ready(function(){
var hangman = {
  inputWord: [],
  wordUnderscore: [],
  val: [],
  counter: -1,
  bodyParts: ["#head", "#body", "#leftArm", "#rightArm", "#leftLeg", "#rightLeg"]
};
  function hideBody(){
    for (i=0; i<hangman.bodyParts.length; i++)
      $(hangman.bodyParts[i]).css('border','none');}

  $("#entry").on("submit", function(pd){
    pd.preventDefault();
    hangman.inputWord = $("#newEntry").val().toLowerCase().split('');
    for ( i=0; i<hangman.inputWord.length; i++) {
      hangman.wordUnderscore[i] = "_";}
    $("#inputGoesHere").html(hangman.wordUnderscore);
    $("#entry").trigger("reset");
    hideBody();});

  $(".letter").on("click", function(){
    hangman.val = this.value;
    if (hangman.inputWord.includes(hangman.val)) {
      for (i=0; i<hangman.inputWord.length; i++) {
        if (hangman.inputWord[i] === (hangman.val)){
          hangman.wordUnderscore[i] = hangman.val;
          $("#inputGoesHere").html(hangman.wordUnderscore);
        }
      }
    } else if (hangman.counter === 4) {
        $(hangman.bodyParts[5]).css('border','2px solid black');
        setTimeout(function() { alert("You lose."); }, 150);
    } else {
      hangman.counter += 1;
      $(hangman.bodyParts[hangman.counter]).css('border','2px solid black');}
  });
});
