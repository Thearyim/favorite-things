function showFavoriteThings(favoriteThings) {
  var favoriteThingsList = "";
  for (i = 0; i < favoriteThings.length; i++) {
    favoriteThingsList+=favoriteThings[i]+"<ul>";
  }

  $("#result").text(favoriteThingsList);
  $("#result").show();
  $("form#favoriteList").hide();
}

$(document).ready(function(){
  $("form#favoriteList").submit(function(event) {
    var question1 = $("input:text[name=food]").val();
    var question2 = $("input:text[name=drink]").val();
    var question3 = $("input:text[name=animal]").val();
    var question4 = $("input:text[name=music]").val();
    var question5 = $("input:text[name=sport]").val();
    var question6 = $("input:text[name=tvShow]").val();
    var question7 = $("input:text[name=placeWithFriend]").val();
    var question8 = $("input:text[name=sick]").val();

    var favoriteThings = [question1, question2, question3, question4, question5, question6, question7, question8];

    showFavoriteThings(favoriteThings);
    event.preventDefault();
  });
});
