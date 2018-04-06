// dbif.js

// GLOBAL VARIABLES
//===============================================================



const dbInterface = {
  // provides single interface to Firebase
  database: '',
  initializeDB: function () {
    //  TODO: add in corect database info
    // initializes database at start of game
    console.log('in dbInterface.initializeDB()');
    const config = {
      apiKey: "AIzaSyCO8AKA-sBxzIiQ5kO9P5NGYQbfOBkqpSY",
      authDomain: "rpsmultiplayer-b292e.firebaseapp.com",
      databaseURL: "https://rpsmultiplayer-b292e.firebaseio.com",
      projectId: "rpsmultiplayer-b292e",
      storageBucket: "rpsmultiplayer-b292e.appspot.com",
      messagingSenderId: "1035200309195"
    };
    firebase.initializeApp(config);
    this.database = firebase.database();
    // zeros data in DB
    // TODO: not DRY, but calling external method breaks game, so leaving for now
    this.database.ref().set({
      // intializes data elements in DB
      // TODO: these need to be specified and added in
    });
  },
  initializeDataElements: function() {
        // this retrieves data initially and updates whenever it changes
    console.log('in dbInterface.initializeDataElements()');

    this.database.ref().on("value", function(snapshot) {
      // TODO link data elements into globals that all can see

    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  },
  setDataElement: function(player, key, value) {
    // write data to Firebase
    console.log('in dbInterface.setDataElement()');
    console.log(player, key, value);
    // NOTE the [] around the 'key' variable!
    this.database.ref().child(player).update({[key]: value});
    console.log('set a value in the DB');
  }
}