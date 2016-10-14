$("document").ready(function(){
var hangman = {
  inputWord: [],
  wordUnderscore: [],
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

  $("#a").on("click", function(){
    if (hangman.inputWord.includes("a")) {
      for (i=0; i<hangman.inputWord.length; i++) {
        if (hangman.inputWord[i] === ("a")){
          hangman.wordUnderscore[i] = "a";
        }
        $("#inputGoesHere").html(hangman.wordUnderscore);
      }
    }
  });


});
