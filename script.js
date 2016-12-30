$(document).ready(function () {
  $('#number-chooser').submit(function(event) {
    event.preventDefault();
    var countTo = document.getElementsByName("number-choice")[0].value;
    $(".js-results").contents().empty();
    for (i=1; i <= countTo; i++) {
      if (i%3===0 && i%5===0) {
        $(".js-results").append('<div class="fizz-buzz-item fizzbuzz"><span>' + "fizzbuzz" + '</span></div>')
      } else if (i%5===0) {
        $(".js-results").append('<div class="fizz-buzz-item buzz"><span>' + "buzz" + '</span></div>')
      } else if (i%3==0){
        $(".js-results").append('<div class="fizz-buzz-item fizz"><span>' + "fizz" + '</span></div>')
      } else {
        $(".js-results").append('<div class="fizz-buzz-item"><span>' + i + '</span></div>')
      };
    };
  });
});
