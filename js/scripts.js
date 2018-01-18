//Intialization
  var sentence = "";
  var words = [];
  var word = "";

// business logic


// user interface logic
$(document).ready(function() {
  $("form#sentence-form").submit(function(event) {
    event.preventDefault();
    sentence = $('#sentence').val();
    $('#output').text(sentence);
    // var year = parseInt($("input#year").val());
    // var result = leapYear(year);
    //
    // $(".year").text(year);
    //
    // if (!result) {                 // same as writing if (result === false)
    //   $(".not").text("not");
    // } else {
    //   $(".not").text("");
    // }

    $("#result").show();
  });
});
