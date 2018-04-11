

$("#submitBtn").on("click", function (event) {
    event.preventDefault();
    var place = $('#find').val().trim()+'national park';
    console.log(place);
    $('#map').append(' <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCESN4bg_XY8N82CwU7ssef7snFR53K1rY&q=' + place + '" allowfullscreen></iframe >')
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + place+ "&sensor=false";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var res = response.data;

    });
});

