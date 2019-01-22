function showFavoriteThings(favoriteThingsArray) {
  var htmlListItem = "";

  for (i = 0; i <favoriteThingsArray.length; i++) {
    htmlListItem = htmlListItem + "<li>" + favoriteThingsArray[i] + "</li>";
  }

  $("#resultList").html(htmlListItem);
  $("form#favoriteList").hide();
  $("#result").show();
}

function getAFewFavoriteThings(favoriteThingsArray) {
  var aFewFavoriteThings = [];
  aFewFavoriteThings.push(favoriteThingsArray[1]);
  aFewFavoriteThings.push(favoriteThingsArray[0]);
  aFewFavoriteThings.push(favoriteThingsArray[2]);

  return aFewFavoriteThings;
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
    var subsetOfFavoriteThings = getAFewFavoriteThings(favoriteThings);

    showFavoriteThings(subsetOfFavoriteThings);

    event.preventDefault();
  });
});

function initializeFakeValues() {
  var fakeValues = [ "sushi", "water", "cat", "pop", "swimming", "friends", "mall", "sleep"];
  var inputs = $("form#favoriteList input[type=text]");

  for (i = 0; i < fakeValues.length; i++){
    inputs[i].value = fakeValues[i];
  }
}

$(document).ready(function(){
  initializeFakeValues();
});
