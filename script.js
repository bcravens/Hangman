$("document").ready(function(){
  var entry = $("#entry");

  function grabWord () {
    entry.on("submit", function(pd){
      pd.preventDefault();
      console.log($("#newEntry").val());
      var newEntry = $("#newEntry").val();
      $("#inputGoesHere").html(newEntry);
      entry.trigger("reset");
    });
  }

grabWord();
});
