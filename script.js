$("document").ready(function(){
var hangman = {
  wordUnderscore: [],
};

  $("#entry").on("submit", function(pd){
    pd.preventDefault();
    var userInput = $("#newEntry").val();
    var changeInput = userInput.split('');
      for ( i=0; i<changeInput.length; i++) {
        hangman.wordUnderscore[i] = "_";
      }
    $("#inputGoesHere").html(hangman.wordUnderscore);
    $("this").trigger("reset");
  });

  $("#a").on("click", function(){
  });


});
