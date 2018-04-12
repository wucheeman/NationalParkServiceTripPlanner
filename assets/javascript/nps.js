console.log("nps.js loading");

// $("#submitBtn").on("click", function (event) {
//   console.log("hi")
//   // event.preventDefault();
// });






//Click Handler for Random Park Search
$("#randomParkBtn").on("click", function(event) {
  console.log("click handler working");
  event.preventDefault();
  $('#insertParkInfoHere').empty();
  // //Pick A Random Number Between 1-60
  var randomSelect=Math.floor(Math.random() * 60);
  console.log(randomSelect);  //number in console
  // //parkCode Array
  var parkCodes = ["acad","npsa","arch","badl","bibe","bisc","blca","brca","cany","care","cave","chis","cong","crla","cuva", "deva","dena","drto","ever","gaar","jeff","glac","glba","grca","grta","grba","grsa","grsm","gumo","hale","havo","hosp","isro","jotr","katm","kefj","seki","kova","lacl","lavo","maca","meve","mora","noca","olym","pefo","pinn","redw","romo","sagu","shen","thro","viis","voya","wica","wrst","yell","yose","zion"];
  console.log(parkCodes);
  //Gives us a Random Park Code
  var selectedCode=parkCodes[randomSelect]
  console.log(selectedCode);
  // API Query
  var queryQRL = "https://developer.nps.gov/api/v1/parks?parkCode=" + selectedCode + "&api_key=7wQNlZMqMhlH0js2AdSZsiMoge4n3Z0ud2rZVlfW";
  console.log(queryQRL);
  //  
  var pickRandom = function randomSelect() {
    for (var i = 0; i < parkcodes.length; i++) {
    var randomSelect=Math.floor(Math.random() * 60); 
    var selectedCode=parkCodes[randomSelect]
    var selectedCode=parkCodes[randomSelect] 
    }
  }
  $.ajax({
    url: "https://developer.nps.gov/api/v1/parks?parkCode=" + selectedCode + "&api_key=7wQNlZMqMhlH0js2AdSZsiMoge4n3Z0ud2rZVlfW",
    method: "GET"
  }).done(function(response){

    console.log('response.data[0]', response.data[0]);
    $('#insertParkInfoHere').empty();
    $('#insertParkInfoHere').append('<h2 id="responseTitle">' + "Name of National Park: " + '</h2><span id="responseInfo">'    + response.data[0].fullName + '</span>');
    $('#insertParkInfoHere').append('<h2 id="responseTitle">' + "Location: " + '</h2><span id="responseInfo">'      + response.data[0].states + '</span>');
    $('#insertParkInfoHere').append('<h2 id="responseTitle">' + "Latitude & Longitude: " + '</h2><span id="responseInfo">'     + response.data[0].latLong + '</span>');
    $('#insertParkInfoHere').append('<h2 id="responseTitle">' + "Description: " + '</h2><span id="responseInfo">' + response.data[0].description + '</span>');
    $('#insertParkInfoHere').append('<h2 id="responseTitle">' + "Weather: " + '</h2><span id="responseInfo">' + response.data[0].weatherInfo + '</span>');
  }); 
});

// '<h2 id="responseTitles">' + "Location: " + '</h2>'
// console.log(r.data[0].fullName);
//     console.log(r.data[0].states);
//     console.log(r.data[0].latLong);
//     console.log(r.data[0].description);
//     console.log(r.data[0].weatherInfo);







//Click Handler for State Park Search
$("#browseStateBtn").on("click", function(event) {
  //Pick A Random Number Between 1-60
  var randomSelect=Math.floor(Math.random() * 60);
  console.log(randomSelect);
  //stateCode Array
  var stateCodes = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ]
  //
  var selectedCode = stateCodes[randomSelect]
  //API Query
  var queryQRL = "https://developer.nps.gov/api/v1/parks?=stateCode= &api_key=7wQNlZMqMhlH0js2AdSZsiMoge4n3Z0ud2rZVlfW"
  //console.log of API Query
  console.log(queryQRL);
  //AJAX Call
  $.ajax({
    url: queryQRL,
    method: "GET"
  }).done(function (response) {
    var random = $('randomSelect');
  });
});










//////STEVEN GO THROUGH AND MAKE SURE THAT THEY MATCH AS FAR AS ORDER THAT THEY ARE IN
//an array with park codes
  var parkCodes = [
    "acad", "npsa", "arch", "badl", "bibe", "bisc", "blca", "brca", "cany", "care", "cave", "chis", "cong", "crla", "cuva", "deva", "dena", "drto", "ever", "gaar", "jeff", "glac", "glba", "grca", "grta", "grba", "grsa", "grsm", "gumo", "hale", "havo", "hosp", "isro", "jotr", "katm", "kefj", "seki", "kova", "lacl", "lavo", "maca", "meve", "mora", "noca", "olym", "pefo", "pinn", "redw", "romo", "sagu", "shen", "thro", "viis", "voya", "wica", "wrst", "yell", "yose", "zion"]





//an array with park names
  var parks = [
    "Acadia", "American Samoa", "Arches", "Badlands", "Big Bend", "Biscayne", "Black Canyon of the Gunnison", "Bryce Canyon", "Canyonlands", "Capitol Reef", "Carlsbad Caverns", "Channel Islands", "Congaree", "Crater Lake", "Cuyahoga Valley", "Death Valley", "Denali", "Dry Tortugas", "Everglades", "Gates of the Arctic", "Gateway Arch", "Glacier", "Glacier Bay", "Grand Canyon", "Grand Teton", "Great Basin", "Great Sand Dunes", "Great Smoky Mountains", "Guadalupe Mountains", "Haleakalā", "Hawaiʻi Volcanoes", "Hot Springs", "Isle Royale", "Joshua Tree", "Katmai", "Kenai Fjords", "Kings Canyon", "Kobuk Valley", "Lake Clark", "Lassen Volcanic", "Mammoth Cave", "Mesa Verde", "Mount Rainier", "North Cascades", "Olympic", "Petrified Forest", "Pinnacles", "Redwood", "Rocky Mountain", "Saguaro", "Sequoia", "Shenandoah", "Theodore Roosevelt", "Virgin Islands", "Voyageurs", "Wind Cave", "Wrangell–St. Elias", "Yellowstone", "Yosemite", "Zion",
  ]




//steven make sure that the 4 letter park code matches the park associated with park option#
  randomParkObj = {
    parkOpt1: "acad", parkOpt2: "npsa", parkOpt3: "arch", parkOpt4: "badl", parkOpt5: "bibe", parkOpt6: "bisc", parkOpt7: "blca", parkOpt8: "brca", parkOpt9: "cany", parkOpt10: "care", parkOpt11: "cave", parkOpt12: "chis", parkOpt13: "cong", parkOpt14: "crla", parkOpt15: "cuva", parkOpt16: "deva", parkOpt17: "dena", parkOpt18: "drto", parkOpt19: "ever", parkOpt20: "gaar", parkOpt21: "jeff", parkOpt22: "glac", parkOpt23: "glba", parkOpt24: "grca", parkOpt25: "grta", parkOpt26: "grba", parkOpt27: "grsa", parkOpt28: "grsm", parkOpt29: "gumo", parkOpt30: "hale", parkOpt31: "havo", parkOpt32: "hosp", parkOpt33: "isro", parkOpt34: "jotr", parkOpt35: "katm", parkOpt36: "kefj", parkOpt37: "seki", parkOpt38: "kova", parkOpt39: "lacl", parkOpt40: "lavo",  parkOpt41: "maca", parkOpt42: "meve", parkOpt43: "mora", parkOpt44: "noca", parkOpt45: "olym", parkOpt46: "pefo", parkOpt47: "pinn", parkOpt48: "redw", parkOpt49: "romo", parkOpt50: "sagu", parkOpt51: "shen", parkOpt52: "thro", parkOpt53: "viis", parkOpt54: "voya", parkOpt55: "wica", parkOpt56: "wrst", parkOpt57: "yell", parkOpt58: "yose", parkOpt59: "zion", parkOpt60: "missing",
  }




//just an array with the html park option#s in it in case you need it
  randomParkArray = [
    parkOpt1, parkOpt2, parkOpt3, parkOpt4, parkOpt5, parkOpt6, parkOpt7, parkOpt8, parkOpt9, parkOpt10, parkOpt11, parkOpt12, parkOpt13, parkOpt14, parkOpt15, parkOpt16, parkOpt17, parkOpt18, parkOpt19, parkOpt20, parkOpt21, parkOpt22, parkOpt23, parkOpt24, parkOpt25, parkOpt26, parkOpt27, parkOpt28, parkOpt29, parkOpt30, parkOpt31, parkOpt32, parkOpt33, parkOpt34, parkOpt35, parkOpt36, parkOpt37, parkOpt38, parkOpt39, parkOpt40, parkOpt41, parkOpt42, parkOpt43, parkOpt44, parkOpt45, parkOpt46, parkOpt47, parkOpt48, parkOpt49, parkOpt50, parkOpt51, parkOpt52, parkOpt53, parkOpt54, parkOpt55, parkOpt56, parkOpt57, parkOpt58, parkOpt59, parkOpt60
  ]