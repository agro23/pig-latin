// Intialization
  var sentence = "";
  var words = [];
  var word = "";

// business logic

function addWayToVowel(mySentence){
   var x = mySentence.slice(0, 1);
  //  alert ("X = " + x);
   x = x.toUpperCase();
   if ( (x === "A") || (x === "E") || (x === "I") || (x === "O") || (x === "U") ) {
    //  alert ("X is a vowel!");
     return mySentence + "way";
   } else {
     return "";
   }
   //  return x; // send the sentence back
   // problem here is it returned X in upperCase if mySentence ISN'T a vowel
   // fixed it to return a value only if the vowel condition is true
 }

 // function moveConsonantToEnd(mySentence){
 //    var x = mySentence.slice(0, 1);
 //    alert ("X = " + x);
 //    var y = x.toUpperCase();
 //    if ( ! ( (y === "A") || (y === "E") || (y === "I") || (y === "O") || (y === "U") ) ) {
 //      alert("Y is a consonant!");
 //      return mySentence.slice(1,mySentence.length) + x;
 //      // return mySentence + "ay"; // send the sentence back with 'ay' at the end
 //    }
 //  }

// function addAyToSentence (mySentence){
//   // adds 'ay' to the end of the sentence
//   // sentence is already formatted
//   return mySentence + "ay";
// }

function moveConsonantsToEnd(myWord){
  var cons = "";
  var x = myWord.split("");
  console.log("x = " + x);
  for (i= 0; i<x.length; i++){
    var y = x[i].toUpperCase();
    if (y === "Q" && x[i+1] === ( "u" || "U") ) {
      cons = cons + x[0] + x[1];
      break;
    } else if ( ! ( (y === "A") || (y === "E") || (y === "I") || (y === "O") || (y === "U") ) ) {
      cons = cons + x[i]; // add to sequence of consonants
    } else {
      break;
    }
  }
  console.log("cons lenth: " + cons.length);
  return myWord.slice(cons.length, myWord.length) + cons + "ay"; // send the sentence back with 'ay' at the end
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
 //
 // function translateSentence(myWords){
 //   // myWords is the array of the sentence
 //   var cons = "";
 //   var sentence = [];
 //   myWords.forEach(function(word){
 //     var x = word.split(""); // split the word into an array of letters
 //     for (i= 0; i<x.length; i++){
 //       var y = x[i].toUpperCase();
 //       console.log("i [" + i + "] = " + y);
 //       if (y === "Q" && x[i+1] === ( "u" || "U") ) {
 //         cons = cons + x[i] + x[i + 1]; // how do we know it's 0 and 1?
 //         addOn = "ay";
 //         break;
 //       } else if ( ! ( (y === "A") || (y === "E") || (y === "I") || (y === "O") || (y === "U") ) ) {
 //         cons = cons + x[i]; // add to sequence of consonants
 //         addOn = "ay";
 //         break;
 //       } else {
 //         // add "way" to the vowel
 //         console.log("This is a word starting with a vowel");
 //         addOn = "way";
 //         break;
 //       }
 //     }
 //     console.log("cons = " + cons);
 //     console.log("cons length: " + cons.length);
 //     console.log("word length: " + word.length);
 //     console.log("Word before = " + word);
 //     sentence.push(word.slice(cons.length, word.length) + cons + addOn);
 //     cons="";
 //     console.log("Word = " + word);
 //   });
 //   console.log("sentence = " + sentence);
 //
 //   console.log("cons lenth: " + cons.length);
 //  //  return myWords.slice(cons.length, myWords.length) + cons + "ay"; // send the sentence back with 'ay' at the end
 //  // return the combined words
 //  }

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



// user interface logic
$(document).ready(function() {
  $("form#sentence-form").submit(function(event) {
    event.preventDefault();
    sentence = $('#sentence').val();
    // sentence = addWayToVowel(sentence); // changes sentence by adding "way" to the end if it starts with vowel
    // sentence = moveConsonantToEnd(sentence); // changes sentence by adding "ay" to the end if it starts with consonant
    // sentence = addAyToSentence(moveConsonantToEnd(sentence));
    var z = parseSentence(sentence); // doesn't have a return value yet
    // sentence = moveConsonantsToEnd(sentence);

    $('#output').text(z);
    // eventually we will append to panel and the show() it.
  });
});
