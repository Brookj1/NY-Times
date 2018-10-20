// $("# ..").on("click",function() {
    // $(this).attr()

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryURL += '?' + $.param({
      'api-key': "51755de7406047f3863ab6c2c8f4e2f8",
    });
    console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: 'GET',
    }).then(function(response) {
      console.log(response);
    }).fail(function(err) {
      throw err;
    });
// })