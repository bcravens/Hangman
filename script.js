$("document").ready(function(){
  // this object should be nested in the document ready like the rest of your code
var hangman = {
  inputWord: [],
  wordUnderscore: [],
  val: [],
  counter: -1,
  bodyParts: ["#head", "#body", "#leftArm", "#rightArm", "#leftLeg", "#rightLeg"],
  checkSubmit: 0,
  win: 0,
  points: 0,
  reset: 0
};
  hideResult();

  $("#entry").on("submit", function(pd){
    // these event listeners are getting pretty unwieldy, how can this be abstracted into more functions?
    pd.preventDefault();
    if (hangman.reset === 1) {
      alert("You must finish your current game first!");
      return;
    }
    hangman.reset += 1;
    resets();
    hangman.checkSubmit += 1;
    hangman.inputWord = $("#newEntry").val().toLowerCase().split('');
    for ( i=0; i<hangman.inputWord.length; i++) {
      hangman.wordUnderscore[i] = "_";}
    $("#inputGoesHere").html(hangman.wordUnderscore);
    $("#entry").trigger("reset");
    hideBody();});

  $(".letter").on("click", function(){
    // this will work, but i would encourage you to work with just jquery or just vanilla js, could potentially cause some issues
    hangman.val = this.value;
    if (hangman.inputWord.includes(hangman.val)) {
      for (i=0; i<hangman.inputWord.length; i++) {
        if (hangman.inputWord[i] === (hangman.val)){
          hangman.wordUnderscore[i] = hangman.val;
          $("#inputGoesHere").html(hangman.wordUnderscore);
          $("#points").html(hangman.points += 10);
          checksForWin();
        }
      }
    } else if ($("#guessedLetters").html().includes(hangman.val) && hangman.checkSubmit !== 0) {
      alert("You already guessed that letter.");
      // this should definitely be abstracted into some more functions, mebbe draw hangman or something
    } else if (hangman.counter === 4) {
        $(hangman.bodyParts[5]).css('border','2px solid black');
        $("#lose").show();
        hangman.win += -1;
        hangman.reset = 0;
        $("#inputGoesHere").html(hangman.inputWord);
    } else if (hangman.checkSubmit !== 0) {
      hangman.counter += 1;
      $(hangman.bodyParts[hangman.counter]).css('border','2px solid black');
      $("#guessedLetters").append(hangman.val);
    }
  });

  function hideResult() {
    $("#win").hide();
    $("#lose").hide();}

  function hideBody(){
    for (i=0; i<hangman.bodyParts.length; i++)
      $(hangman.bodyParts[i]).css('border','none');}

// clever!
  function checksForWin() {
    if (hangman.wordUnderscore.includes("_")) {
    } else {
      $("#win").show();
      hangman.win +=1;
      hangman.reset = 0;}}

// this is a small detail, but maybe reset() instead of resets() In english if i'm resetting something i would say "reset this" not "resets this". In the same way, when we invoke a function we're doing that thing
  function resets(){
    hideResult();
    $("#guessedLetters").html(null);
    hangman.win = 0;
    countdown(1);
    $("#points").html("points");
    hangman.points = 0;
    hangman.counter = -1;
    hangman.checkSubmit = 0;
    hangman.inputWord = [];
    hangman.wordUnderscore = [];
    $("#inputGoesHere").html(null);
    for (i=0; i<hangman.bodyParts.length; i++) {
      $(hangman.bodyParts[i]).css('border','2px solid black');}} // put this curly brace on the next line for readability

    // this might be intentional, but its slightly smelly. Whenever resets is called it then defines countdown, i would make this function outside of reset's definition
    // also checkout setInterval, instead of this function below.
    function countdown(minutes) {
      var mins = minutes;
      var seconds = 60;
      function tick() {
        var current_minutes = mins-1;
        seconds--;
        // heres you write String and also toString try to stay consistent, or is there a reason you opted for on or ther other?
        $("#counter").html(current_minutes.toString()+ ":" + (seconds < 10 ? "0" : "") + String(seconds));
        if (hangman.win == 1 || hangman.win == -1) {
          return;
        } else if ($("#counter").text() === "0:00"){
            $("#lose").show();
        }
        if (seconds > 0) {
          setTimeout(tick,1000);
        } else {
          if(minutes > 1) {
            countdown(mins-1);
          }
        }
      }
      tick();
    }

});
