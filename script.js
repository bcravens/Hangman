$("document").ready(function(){
var hangman = {
  inputWord: [],
  wordUnderscore: [],
  val: [],
};

  $("#entry").on("submit", function(pd){
    pd.preventDefault();
    var userInput = $("#newEntry").val().toLowerCase();
    var changeInput = userInput.split('');
    hangman.inputWord = changeInput.concat();
      for ( i=0; i<changeInput.length; i++) {
        hangman.wordUnderscore[i] = "_";
      }
    $("#inputGoesHere").html(hangman.wordUnderscore);
    $("this").trigger("reset");
  });

  $(".letter").on("click", function(pd){
    pd.preventDefault();
    var grabValue = this.value;
    hangman.val = grabValue;
    console.log(hangman.val);
  });

  $(".letter").on("click", function(){
    if (hangman.inputWord.includes(hangman.val)) {
      for (i=0; i<hangman.inputWord.length; i++) {
        if (hangman.inputWord[i] === (hangman.val)){
          hangman.wordUnderscore[i] = hangman.val;
        }
        $("#inputGoesHere").html(hangman.wordUnderscore);
      }
    }
  });


});
