/// this is stuff anthony is saving incase he needs it later, you may find it useful as well


//useful to save for later -- anthony
  // var searchThis =  [ $("#userInput").val(''), $(this).data('search') ]
  // var queryURL = "https://developer.nps.gov/api/v1/parks?=stateCode=" + searchThis + "&api_key=7wQNlZMqMhlH0js2AdSZsiMoge4n3Z0ud2rZVlfW"


//Example for if we needed code that uses an ajax code to display to a div.. 
  // $.ajax({
  //         url: queryURL,
  //         method: "GET"
        
  //       }).done(function(response) {
  //         var results = response.data;
  //         console.log(results);
  //         $("#resultsField").empty();
  //         for (var i = 0; i < results.length; i++) {
  //         var displayDiv = $("<div class='col-md-4'>"); }
  //       });


//anthony's database config
  // var config = {
  //   apiKey: "AIzaSyCKZfkPIfQAelCisqxhuniO9zhmCRn0VOw",
  //   authDomain: "contactformdb.firebaseapp.com",
  //   databaseURL: "https://contactformdb.firebaseio.com",
  //   projectId: "contactformdb",
  //   storageBucket: "",
  //   messagingSenderId: "691050789317"
  // };
  // firebase.initializeApp(config);
          
//mark this section is for you incase you need it to get the registration working - from anthony
  // // Create a variable to reference the database.
  // var database = firebase.database();
  // // Initial Values
  // var name = "";
  // var email = "";
  // var password1 = "";
  // var password2 = "";
  // var birthDate = "";
  // // Capture Button Click
  // $("#submitGoFire").on("click", function(event) {
  //   event.preventDefault();
  //   // Grabbed values from text boxes
  //   name = $("#firstName").val().trim();
  //   email = $("#email").val().trim();
  //   password1 = $("#password1").val().trim();
  //   password2 = $("#password2").val().trim();
  //   birthDate = $("#birthDate").val().trim(); 
  //   // Code for handling the push
  //   database.ref().push({
  //     name: name,
  //     email: email,
  //     password1: password1,
  //     password2: password2,
  //     birthDate: birthDate,
  //     dateAdded: firebase.database.ServerValue.TIMESTAMP
  //   });
  // });
