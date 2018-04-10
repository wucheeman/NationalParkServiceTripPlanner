$("#submitBtn").on("click", function (event) {
    event.preventDefault();
    var place = $('#find').val().trim();
    console.log(place);
   
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + place+'nationalpark' + "&sensor=false";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var res = response.data;

    });
});