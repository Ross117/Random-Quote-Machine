$(".newQuote").on("click", function () {
  "use strict";

  var $quoteInput = $(".quote"),
    $citationInput = $(".citation");

    // make an API request to get a randomly generated quote
  $.ajax({
    url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
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

  var $quote = "",
      link = "",
      defaultMsg = "";

  $quote = $(".quote").text();
  defaultMsg = "Click the button to get a quote!";

  if ($quote === "" || $quote === defaultMsg) return;
  if ($quote.length > 140) return alert("Sorry, this quote is too long to tweet.");

  link = "https://twitter.com/home?status=" + encodeURIComponent($quote);

  //   give user the option to tweet a quote
  window.open(link);

});
