$("document").ready(function(){
  var entry = $("#entry");
  //var letters = "abcdefghijklmnopqrstuvwxyz".split('');

  function grabWord () {
    entry.on("submit", function(pd){
      pd.preventDefault();
      console.log($("#newEntry").val());
      var newEntry = $("#newEntry").val();
      $("#inputGoesHere").html(newEntry);
      entry.trigger("reset");
      $("#inputGoesHere").hide();
    });
  }

$("#a").on("click", function(){
  var userInput = $("#inputGoesHere").text();
  var regexp = /[a]/gi;
  var matches_array = userInput.match(regexp);
  console.log(matches_array);
});

$("#b").on("click", function(){
  var userInput = $("#inputGoesHere").text();
  var regexp = /[b]/gi;
  var matches_array = userInput.match(regexp);
  console.log(matches_array);
});


grabWord();
});
