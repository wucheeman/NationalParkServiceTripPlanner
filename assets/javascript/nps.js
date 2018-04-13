// GLOBAL VARIABLES
//==================
let selectedParkName;

// CODE
// ========================================================================
$(document).ready(function () {
  //Click Handler for Random Park Search
  $("#randomParkBtn").on("click", function (event) {
    console.log("click handler working");
    event.preventDefault();
    $('#insertParkInfoHere').empty();
    // //Pick A Random Number Between 1-60
    var randomSelect = Math.floor(Math.random() * 60);
    console.log(randomSelect); //number in console
    // //parkCode Array
    var parkCodes = ["acad", "npsa", "arch", "badl", "bibe", "bisc", "blca", "brca", "cany", "care", "cave", "chis", "cong", "crla", "cuva", "deva", "dena", "drto", "ever", "gaar", "jeff", "glac", "glba", "grca", "grta", "grba", "grsa", "grsm", "gumo", "hale", "havo", "hosp", "isro", "jotr", "katm", "kefj", "seki", "kova", "lacl", "lavo", "maca", "meve", "mora", "noca", "olym", "pefo", "pinn", "redw", "romo", "sagu", "shen", "thro", "viis", "voya", "wica", "wrst", "yell", "yose", "zion"];
    console.log(parkCodes);
    //Gives us a Random Park Code
    var selectedCode = parkCodes[randomSelect]
    console.log(selectedCode);
    // API Query
    var queryQRL = "https://developer.nps.gov/api/v1/parks?parkCode=" + selectedCode + "&api_key=7wQNlZMqMhlH0js2AdSZsiMoge4n3Z0ud2rZVlfW";
    console.log(queryQRL);
    //  
    var pickRandom = parkCodes[Math.floor(Math.random() * parkCodes.length)];
    console.log(pickRandom);
   
    $.ajax({
      url: "https://developer.nps.gov/api/v1/parks?parkCode=" + selectedCode + "&api_key=7wQNlZMqMhlH0js2AdSZsiMoge4n3Z0ud2rZVlfW",
      method: "GET"
    }).done(function (response) {
      console.log('response.data[0]', response.data[0]);
      $('#insertParkInfoHere').empty();
      $('#insertParkInfoHere').append('<h2 id="responseTitle">' + response.data[0].fullName + + '</h2>');
      $('#insertParkInfoHere').append('<h3 id="responseTitle">' + "Location: " + '</h3><span id="responseInfo">' + response.data[0].states + '</span>');
      $('#insertParkInfoHere').append('<h3 id="responseTitle">' + "Latitude & Longitude: " + '</h3><span id="responseInfo">' + response.data[0].latLong + '</span>');
      $('#insertParkInfoHere').append('<h3 id="responseTitle">' + "Description: " + '</h3><span id="responseInfo">' + response.data[0].description + '</span>');
      $('#insertParkInfoHere').append('<h3 id="responseTitle">' + "Weather: " + '</h3><span id="responseInfo">' + response.data[0].weatherInfo + '</span>');
    });
  });



  //Click Handler for State Park Search
  $("#browseStateBtn").on("click", function (event) {
    //prevents on click from resorting to default state
    event.preventDefault();
    //get value from state dropdown
    // var selectedState = $('#browseStateOption option:selected.val()').text();
    var selectedState = $('#browseStateOption').val()
    console.log(selectedState);
    //stateCode object  ---not needed right now
    // var stateCodeObject = {
    //   "Alabama": "AL", "Alaska": "AK", "Arizona": "AZ", "Arkansa": "AR", "California": "CA", "Colorado": "CO", "Conneticut": "CT", "Delaware": "DE", "Florida": "FL", "Georgia": "GA", "Hawaii": "HI", "Idaho": "ID", "Illinois": "IL", "Indiana": "IN", "Iowa": "IA", "Kansas": "KS", "Kentucky": "KY", "Louisiana": "LA", "Maine": "ME", "Maryland": "MD", "Massachusetts": "MA", "Michigan": "MI", "Minnesota": "MN", "Mississippi": "MS", "Missouri": "MO", "Montana": "MT", "Nebraska": "NE", "Nevada": "NV", "New Hampshire": "NH", "New Jersey": "NJ", "New Mexico": "NM", "New York": "NY", "North Carolina": "NC", "North Dakota": "ND", "Ohio": "OH", "Oklahoma": "OK", "Oregon": "OR", "Pennsylvania": "PA", "Rhode Island": "RI", "South Carolina": "SC", "South Dakota": "SD", "Tennessee": "TN", "Texas": "TX", "Utah": "UT", "Vermont": "VT", "Virginia": "VA", "Washington": "WA", "West Virginia": "WV", "Wisconson": "WI", "Wyoming": "WY"
    // }
    // API QUERY FOR STATE CODES FROM NPS
    $.ajax({
      url: "https://developer.nps.gov/api/v1/parks?stateCode=" + selectedState + "&api_key=7wQNlZMqMhlH0js2AdSZsiMoge4n3Z0ud2rZVlfW",
      method: "GET"
    }).done(function (response) {
      $('#insertParkInfoHere').empty();

      console.log("response ", response);

      let array = response.data;
      console.log("array ", array);
      array.forEach(obj => {
        console.log(obj);

        // let index = obj.indexOf(array);

        console.log('obj ', obj);

        let parkObj = {
          name: obj.fullName,
          description: obj.description
        }
        console.log
        html = 
        `
        <h2 class="respsTitle">${parkObj.name}</h2>
        <h3 class="respsTitle">Description: </h3><span class="respsInfo">'${parkObj.description}</span>
        `;


        $('#insertParkInfoHere').append(html);
      });
    })
  });







  //Click Handler for Park Park Search
  $("#browseParkBtn").on("click", function (event) {
    //prevents on click from resorting to default state
    event.preventDefault();

    //get value from state dropdown
    // var selectedState = $('#browseStateOption option:selected.val()').text();
    var selectedPark = $('#browseParkOption').val()
    // console.log(selectedPark);
    //CLEAR PARK INFO SECTION

    // API QUERY FOR Park CODES FROM NPS
    $.ajax({
      url: "https://developer.nps.gov/api/v1/parks?parkCode=" + selectedPark + "&api_key=7wQNlZMqMhlH0js2AdSZsiMoge4n3Z0ud2rZVlfW",
      method: "GET"
    }).done(function (response) {
      console.log(response);

      // forEach to bring up more than 1 park
      $('#insertParkInfoHere').empty();
      $('#insertParkInfoHere').append('<h2 id="responseTitle">' + response.data[0].fullName + '</h2>');
      $('#insertParkInfoHere').append('<h3 id="responseTitle">' + "Location: " + '</h3><span id="responseInfo">' + response.data[0].states + '</span>');
      $('#insertParkInfoHere').append('<h3 id="responseTitle">' + "Latitude & Longitude: " + '</h3><span id="responseInfo">' + response.data[0].latLong + '</span>');
      $('#insertParkInfoHere').append('<h3 id="responseTitle">' + "Description: " + '</h3><span id="responseInfo">' + response.data[0].description + '</span>');
      $('#insertParkInfoHere').append('<h3 id="responseTitle">' + "Weather: " + '</h3><span id="responseInfo">' + response.data[0].weatherInfo + '</span>');
    })
  });
});

const emptyNPS = () => {
  console.log('in emptyNPS');
  $('#insertSearchFormhere').empty();
  $('#insertParkInfoHere').empty();
}


  // ("#browseParkBtn").on("click", function (event) {
  //   event.preventDefault();
  //   $('#insertGooglehere').empty();
  //   var place = $('#browseParkOption').val().trim();
  //   console.log(place);
  //  // $('#insertGooglehere').append(' <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCESN4bg_XY8N82CwU7ssef7snFR53K1rY&q=' + place + '" allowfullscreen></iframe >')

  // });



  
  /*

      response.forEach(parkResponse => {
      console.log(parkResponse);
      // argument.title 
      //use for click function on link of title for state park for state search and for park search to search selected api
      $('body').on('click', '.api-call', function() {
        const park = $(this).attr('data-park');
        console.log(`our park code is ${park}`)
        //add api and append
        $.ajax({
          url: "https://developer.nps.gov/api/v1/parks?stateCode=" + data-park + "&api_key=7wQNlZMqMhlH0js2AdSZsiMoge4n3Z0ud2rZVlfW",
          method: "GET"
        }).done(function (response) {
          console.log('response.data[0]', response.data[0]);
          $('#insertParkInfoHere').empty();
          $('#insertParkInfoHere').append('<h2 id="responseTitle">' + response.data[0].fullName + '</h2>');
          $('#insertParkInfoHere').append('<h3 id="responseTitle">' + "Location: " + '</h3><span id="responseInfo">' + response.data[0].states + '</span>');
          $('#insertParkInfoHere').append('<h3 id="responseTitle">' + "Latitude & Longitude: " + '</h3><span id="responseInfo">' + response.data[0].latLong + '</span>');
          $('#insertParkInfoHere').append('<h3 id="responseTitle">' + "Description: " + '</h3><span id="responseInfo">' + response.data[0].description + '</span>');
          $('#insertParkInfoHere').append('<h3 id="responseTitle">' + "Weather: " + '</h3><span id="responseInfo">' + response.data[0].weatherInfo + '</span>');
          console.log(`our park code is ${park}`)
      });
      });
      });
    });
    // console.log of API Query
    // console.log(queryQRL);
  });

  */



  //     // API Query
  //     var queryQRL = "https://developer.nps.gov/api/v1/parks?=stateCode= &api_key=7wQNlZMqMhlH0js2AdSZsiMoge4n3Z0ud2rZVlfW"
  //     //console.log of API Query
  //     console.log(queryQRL);
  //     //  
  //     var pickRandom = function randomSelect() {
  //       for (var i = 0; i < parkcodes.length; i++) {
  //         var randomSelect = Math.floor(Math.random() * 60);
  //         var selectedCode = parkCodes[randomSelect]
  //         var selectedCode = parkCodes[randomSelect]
  //       }
  //     }
  //     //AJAX Call
  //     $.ajax({
  //       url: queryQRL,
  //       method: "GET"
  //     }).done(function (response) {
  //       console.log('response.data[0]', response.data[0]);
  //       $('#insertParkInfoHere').empty();
  //       $('#insertParkInfoHere').append('<h2 id="responseTitle">' + response.data[0].fullName + '</h2>');
  //       $('#insertParkInfoHere').append('<h2 id="responseTitle">' + "Location: " + '</h2><span id="responseInfo">' + response.data[0].states + '</span>');
  //     });
  //   });
  // });





















  // //////STEVEN GO THROUGH AND MAKE SURE THAT THEY MATCH AS FAR AS ORDER THAT THEY ARE IN
  // //an array with park codes
  //   var parkCodes = [
  //     "acad", "npsa", "arch", "badl", "bibe", "bisc", "blca", "brca", "cany", "care", "cave", "chis", "cong", "crla", "cuva", "deva", "dena", "drto", "ever", "gaar", "jeff", "glac", "glba", "grca", "grta", "grba", "grsa", "grsm", "gumo", "hale", "havo", "hosp", "isro", "jotr", "katm", "kefj", "seki", "kova", "lacl", "lavo", "maca", "meve", "mora", "noca", "olym", "pefo", "pinn", "redw", "romo", "sagu", "shen", "thro", "viis", "voya", "wica", "wrst", "yell", "yose", "zion"]


  // //an array with park names
  //   var parks = [
  //     "Acadia", "American Samoa", "Arches", "Badlands", "Big Bend", "Biscayne", "Black Canyon of the Gunnison", "Bryce Canyon", "Canyonlands", "Capitol Reef", "Carlsbad Caverns", "Channel Islands", "Congaree", "Crater Lake", "Cuyahoga Valley", "Death Valley", "Denali", "Dry Tortugas", "Everglades", "Gates of the Arctic", "Gateway Arch", "Glacier", "Glacier Bay", "Grand Canyon", "Grand Teton", "Great Basin", "Great Sand Dunes", "Great Smoky Mountains", "Guadalupe Mountains", "Haleakalā", "Hawaiʻi Volcanoes", "Hot Springs", "Isle Royale", "Joshua Tree", "Katmai", "Kenai Fjords", "Kings Canyon", "Kobuk Valley", "Lake Clark", "Lassen Volcanic", "Mammoth Cave", "Mesa Verde", "Mount Rainier", "North Cascades", "Olympic", "Petrified Forest", "Pinnacles", "Redwood", "Rocky Mountain", "Saguaro", "Sequoia", "Shenandoah", "Theodore Roosevelt", "Virgin Islands", "Voyageurs", "Wind Cave", "Wrangell–St. Elias", "Yellowstone", "Yosemite", "Zion",
  //   ]


  // //steven make sure that the 4 letter park code matches the park associated with park option#
  //   randomParkObj = {
  //     parkOpt1: "acad", parkOpt2: "npsa", parkOpt3: "arch", parkOpt4: "badl", parkOpt5: "bibe", parkOpt6: "bisc", parkOpt7: "blca", parkOpt8: "brca", parkOpt9: "cany", parkOpt10: "care", parkOpt11: "cave", parkOpt12: "chis", parkOpt13: "cong", parkOpt14: "crla", parkOpt15: "cuva", parkOpt16: "deva", parkOpt17: "dena", parkOpt18: "drto", parkOpt19: "ever", parkOpt20: "gaar", parkOpt21: "jeff", parkOpt22: "glac", parkOpt23: "glba", parkOpt24: "grca", parkOpt25: "grta", parkOpt26: "grba", parkOpt27: "grsa", parkOpt28: "grsm", parkOpt29: "gumo", parkOpt30: "hale", parkOpt31: "havo", parkOpt32: "hosp", parkOpt33: "isro", parkOpt34: "jotr", parkOpt35: "katm", parkOpt36: "kefj", parkOpt37: "seki", parkOpt38: "kova", parkOpt39: "lacl", parkOpt40: "lavo",  parkOpt41: "maca", parkOpt42: "meve", parkOpt43: "mora", parkOpt44: "noca", parkOpt45: "olym", parkOpt46: "pefo", parkOpt47: "pinn", parkOpt48: "redw", parkOpt49: "romo", parkOpt50: "sagu", parkOpt51: "shen", parkOpt52: "thro", parkOpt53: "viis", parkOpt54: "voya", parkOpt55: "wica", parkOpt56: "wrst", parkOpt57: "yell", parkOpt58: "yose", parkOpt59: "zion", parkOpt60: "missing",
  //   }

  // //just an array with the html park option#s in it in case you need it
  //   randomParkArray = [
  //     parkOpt1, parkOpt2, parkOpt3, parkOpt4, parkOpt5, parkOpt6, parkOpt7, parkOpt8, parkOpt9, parkOpt10, parkOpt11, parkOpt12, parkOpt13, parkOpt14, parkOpt15, parkOpt16, parkOpt17, parkOpt18, parkOpt19, parkOpt20, parkOpt21, parkOpt22, parkOpt23, parkOpt24, parkOpt25, parkOpt26, parkOpt27, parkOpt28, parkOpt29, parkOpt30, parkOpt31, parkOpt32, parkOpt33, parkOpt34, parkOpt35, parkOpt36, parkOpt37, parkOpt38, parkOpt39, parkOpt40, parkOpt41, parkOpt42, parkOpt43, parkOpt44, parkOpt45, parkOpt46, parkOpt47, parkOpt48, parkOpt49, parkOpt50, parkOpt51, parkOpt52, parkOpt53, parkOpt54, parkOpt55, parkOpt56, parkOpt57, parkOpt58, parkOpt59, parkOpt60]


