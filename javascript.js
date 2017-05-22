$(".newQuote").on("click", function () {
  "use strict";

  var $quoteInput = $(".quote"),
    $citationInput = $(".citation");

    // make an API request to get a randomly generated quote
  $.ajax({
    url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    // call function if request succeeds
    success: function (json) {
      var quote = "",
          author = "";

      // deal with lsep issue - seen on quote from Apple
      quote = json[0].content;
      author = json[0].title;

      $quoteInput.html(quote);
      $citationInput.html(author);
    },
    // handle request failure
    error: function() {
      $quoteInput.html("Error");
      $citationInput.html("Sorry, something went wrong");
    },
    cache: false
  });

});

$(".tweetQuote").on("click", function () {
  "use strict";

//   use the Twitter API to allow user to tweet a quote

});
