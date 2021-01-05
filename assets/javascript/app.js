


var animalList = ["steve", "cat", "fail"];


$(document).on("click", "button", function () {
    event.preventDefault();
    var animal = $(this).attr("data-animal");

    newAnimal = $(this).attr("data-animal");


    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + newAnimal + "&api_key=LifZNk6pBC7OUQu4CdOBMqmkqwRo5aIr&limit=10";

    // console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (res) {


            var results = res.data;

            // console.log(results.length);

            if (results.length > 0) {

                for (var i = 0; i < results.length; i++) {
                    if (results[i].rating !== "r") {

                        var gifDiv = $("<div id='newGif'>");

                        var rating = results[i].rating;

                        var p = $("<p>").text("Rating: " + rating);

                        var animalImage = $("<img>");

                        animalImage.attr("src", results[i].images.fixed_height.url);

                        gifDiv.append(p);

                        gifDiv.append(animalImage);

                        $("#gifs").prepend(gifDiv);

                    }
                }
            } else {
                $('#myModal').modal('toggle');

            }
        });


});


function renderButtons() {
    $("#buttons").empty();
    for (var a = 0; a < animalList.length; a++) {
        var B = $("<button class= 'btn btn-primary'>");
        B.addClass("animal");
        B.attr("data-animal", animalList[a]);
        B.text(animalList[a]);
        $("#buttons").append(B);

    };

};


$("#btn").on("click", function (event) {
    event.preventDefault();
    var newAnimal = $("#gif").val().trim();
    animalList.push(newAnimal);
    renderButtons();
    // console.log(newAnimal);
});

renderButtons();