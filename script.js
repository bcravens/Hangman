$("document").ready(function(){
var hangman = {
  inputWord: [],
  wordUnderscore: [],
  val: [],
  counter: -1,
  bodyParts: ["#head", "#body", "#leftArm", "#rightArm", "#leftLeg", "#rightLeg"],
  checkSubmit: 0
};
  function hideBody(){
    for (i=0; i<hangman.bodyParts.length; i++)
      $(hangman.bodyParts[i]).css('border','none');}

  $("#entry").on("submit", function(pd){
    pd.preventDefault();
    rst();
    hangman.inputWord = $("#newEntry").val().toLowerCase().split('');
    for ( i=0; i<hangman.inputWord.length; i++) {
      hangman.wordUnderscore[i] = "_";}
    $("#inputGoesHere").html(hangman.wordUnderscore);
    $("#entry").trigger("reset");
    hangman.checkSubmit += 1;
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
    } else if (hangman.checkSubmit !== 0){
      hangman.counter += 1;
      $(hangman.bodyParts[hangman.counter]).css('border','2px solid black');}
  });

  function rst(){
    hangman.counter = -1;
    hangman.checkSubmit = 0;
    hangman.inputWord = [];
    hangman.wordUnderscore = [];
    $("#inputGoesHere").html(null);
    for (i=0; i<hangman.bodyParts.length; i++) {
      $(hangman.bodyParts[i]).css('border','2px solid black');}}
});
