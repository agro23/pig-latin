// Intialization
  // var sentence = "";
  // var words = [];
  // var word = "";

// business logic

function addWayToVowel(mySentence){
   var x = mySentence.slice(0, 1);
   x = x.toUpperCase();
   if ( (x === "A") || (x === "E") || (x === "I") || (x === "O") || (x === "U") ) {
     return mySentence + "way";
   } else {
     return "";
   }
 }

function isPunctuation(char) {
  // var re = /[\]\[$&+,:;=?@#|'<>.-^\*()%!~\/{}"\\]/g;
  var re = /\W+/g;
  var special = false;
  // if (char.match(re)){
  if (char === "."){
    console.log("special");
    special = true;
  } else {
    special = false;
  }
  return special;

// " []\[$&+,:;=?@#|'<>.-^\*()%!~\/{}"\\] /g  "


}

function moveConsonantsToEnd(myWord){
  var punct = "";
  var cons = "";
  var x = myWord.split("");
  console.log("x = " + x);
  for (i= 0; i<x.length; i++){
    // if x[i] === ""
    var y = x[i].toUpperCase();
    if (y === "Q" && x[i+1] === ( "u" || "U") ) {
      cons = cons + x[0] + x[1];
      break;
    // } else if (isPunctuation(y)) {
    //   punct = punct + x[i];
    //   x[i]="";
    //   alert("This is punctuation!");
    } else if ( ! ( (y === "A") || (y === "E") || (y === "I") || (y === "O") || (y === "U") ) ) {
      cons = cons + x[i]; // add to sequence of consonants
    } else {
      break; // it's nothing
    }
  }
  // if it's got punctuation put it before cons
  console.log("cons lenth: " + cons.length);
  return myWord.slice(cons.length, myWord.length) + cons + "ay" + punct ; // send the sentence back with 'ay' at the end
 }

function parseSentence(mySentence){
  var words = mySentence.split(" ");
  var newSentence = [];
  var x = "";
  var y = "";
  words.forEach(function(word) {
    x = addWayToVowel(word);
    if (x) {
      newSentence.push(x);
    } else {
      newSentence.push(moveConsonantsToEnd(word));
    }
  });
  console.log("newSentence = " + newSentence);
  y = newSentence.join(" ");
  return y;
}

// user interface logic
$(document).ready(function() {
  $("form#sentence-form").submit(function(event) {
    event.preventDefault();
    sentence = $('#sentence').val();
    var z = parseSentence(sentence);
    $('#output').text(z);
  });
});
