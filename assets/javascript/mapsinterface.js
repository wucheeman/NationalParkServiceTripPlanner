console.log("here")

$("#keywordSearchBtn").on("click", function (event) {
    event.preventDefault();
    $('#insertGooglehere').empty();
    var place = $('#keywordSearchInput').val().trim() + 'national park';
    console.log(place);
    $('#insertGooglehere').append(' <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCESN4bg_XY8N82CwU7ssef7snFR53K1rY&q=' + place + '" allowfullscreen></iframe >')

});



// browseParkBtn 
$("#browseParkBtn").on("click", function (event) {
    event.preventDefault();
    $('#insertGooglehere').empty();
    var place = $('#browseParkOption').val().trim() + 'national park';
    console.log(place);
    $('#insertGooglehere').append(' <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCESN4bg_XY8N82CwU7ssef7snFR53K1rY&q=' + place + '" allowfullscreen></iframe >')

});

//hotels
$("#hotelBtn").on("click", function (event) {
    event.preventDefault();
    $('#insertGooglehere').empty();
    var place = $('#browseParkOption').val().trim() + 'national park hotel';
    console.log(place);
    $('#insertGooglehere').append(' <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCESN4bg_XY8N82CwU7ssef7snFR53K1rY&q=' + place + '" allowfullscreen></iframe >')
});


//randomPark get array and randomizaton
$("#randomParkBtn").on("click", function (event) {
    event.preventDefault();
    $('#insertGooglehere').empty();
    console.log("heretoo")
    var parks = [
        "Acadia", "American Samoa", "Arches", "Badlands", "Big Bend", "Biscayne", "Black Canyon of the Gunnison", "Bryce Canyon", "Canyonlands", "Capitol Reef", "Carlsbad Caverns", "Channel Islands", "Congaree", "Crater Lake", "Cuyahoga Valley", "Death Valley", "Denali", "Dry Tortugas", "Everglades", "Gates of the Arctic", "Gateway Arch", "Glacier", "Glacier Bay", "Grand Canyon", "Grand Teton", "Great Basin", "Great Sand Dunes", "Great Smoky Mountains", "Guadalupe Mountains", "Haleakalā", "Hawaiʻi Volcanoes", "Hot Springs", "Isle Royale", "Joshua Tree", "Katmai", "Kenai Fjords", "Kings Canyon", "Kobuk Valley", "Lake Clark", "Lassen Volcanic", "Mammoth Cave", "Mesa Verde", "Mount Rainier", "North Cascades", "Olympic", "Petrified Forest", "Pinnacles", "Redwood", "Rocky Mountain", "Saguaro", "Sequoia", "Shenandoah", "Theodore Roosevelt", "Virgin Islands", "Voyageurs", "Wind Cave", "Wrangell–St. Elias", "Yellowstone", "Yosemite", "Zion",
    ]
    var randomPark = parks[Math.floor(Math.random() * parks.length)];
    var place = randomPark + ' national park';
    console.log(randomPark)
    $('#insertGooglehere').append(' <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCESN4bg_XY8N82CwU7ssef7snFR53K1rY&q=' + place + '" allowfullscreen></iframe >')
});

//// browseStateOption maybe not

    //     var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + place + "&sensor=false";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log(response)
//         var res = response.data;


//     });
// });

//$('#map').append(' <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCESN4bg_XY8N82CwU7ssef7snFR53K1rY&q=' + place + '" allowfullscreen></iframe >')