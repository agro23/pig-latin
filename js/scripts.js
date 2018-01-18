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
     return mySentence + "way";
   }
   //  return x; // send the sentence back
   // problem here is it returned X in upperCase if mySentence ISN'T a vowel
   // fixed it to return a value only if the vowel condition is true
 }

 function moveConsonantToEnd(mySentence){
    var x = mySentence.slice(0, 1);
    alert ("X = " + x);
    var y = x.toUpperCase();
    if ( ! ( (y === "A") || (y === "E") || (y === "I") || (y === "O") || (y === "U") ) ) {
      alert("Y is a consonant!");
      return mySentence.slice(1,mySentence.length) + x;
      // return mySentence + "ay"; // send the sentence back with 'ay' at the end
    }
  }

function addAyToSentence (mySentence){
  // adds 'ay' to the end of the sentence
  // sentence is already formatted
  return mySentence + "ay";
}

 // function addAyToConsonant(mySentence){
 //    var x = mySentence.slice(0, 1);
 //    alert ("X = " + x);
 //    var y = x.toUpperCase();
 //    if ( (y === "A") || (y === "E") || (y === "I") || (y === "O") || (y === "U") ) {
 //
 //      alert("Y is a consonant!");
 //      alert("With slices: " + mySentence.slice(1,mySentence.length));
 //      return mySentence.slice(1,mySentence.length) + x + "ay";
 //    }
 //    return x; // send the sentence back
 //  }

 function parseSentence(mySentence){
   words = mySentence.split(" ");
   alert("words = "+ words);
 }

// user interface logic
$(document).ready(function() {
  $("form#sentence-form").submit(function(event) {
    event.preventDefault();
    sentence = $('#sentence').val();
    // sentence = addWayToVowel(sentence); // changes sentence by adding "way" to the end if it starts with vowel
    // sentence = moveConsonantToEnd(sentence); // changes sentence by adding "ay" to the end if it starts with consonant
    sentence = addAyToSentence(moveConsonantToEnd(sentence));
  //  parseSentence(sentence); // doesn't have a return value yet


    $('#output').text(sentence);
    // eventually we will append to panel and the show() it.
  });
});
