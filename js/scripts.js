// Intialization
  var sentence = "";
  var words = [];
  var word = "";

// business logic
function addWayToVowel(mySentence){
   var x = mySentence.slice(0, 1);
   alert ("X = " + x);
   x = x.toUpperCase();
   if ( (x === "A") || (x === "E") || (x === "I") || (x === "O") || (x === "U") ) {
     alert ("X is a vowel!");
     x = mySentence + "way";
   }
   return x; // send the sentence back
 }

// user interface logic
$(document).ready(function() {
  $("form#sentence-form").submit(function(event) {
    event.preventDefault();
    sentence = $('#sentence').val();
    sentence = addWayToVowel(sentence); // changes sentence by adding "way" to the end if it starts with vowel



    $('#output').text(sentence);
    // eventually we will append to panel and the show() it.
  });
});
