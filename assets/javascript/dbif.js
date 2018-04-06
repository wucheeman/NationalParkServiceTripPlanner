const dbInterface = {
  // provides single interface to Firebase
  firebaseInUse: true,
  database: '',

  // global variables go here

  initializeDB: function () {
    // initializes database at startup
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
      // data elements to be set up wil be listed here
    });
  },
  initializeDataElements: function() {
    console.log('in dbInterface.initializeDataElements()');
    // this retrieves data initially and whenever it changes
    this.database.ref().on("value", function(snapshot) {
    // data elements to be monitored are mapped to global variables

    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  },
  setDataElement: function(player, key, value) {
    // if firebaseInUse is true, write data to Firebase else write to localStorage
    console.log('in dbInterface.setDataElement()');
    console.log(player, key, value);
    // NOTE the [] around the 'key' variable!
    this.database.ref().child(player).update({[key]: value});
    console.log('set a value in the DB');
  },
  zeroPlayerData: function(player) {
    console.log('in zeroPlayerData');
    this.database.ref().child(player).update({
        name: '',
        wins: 0,
        losses: 0,
        choice: '' 
    });
  }
}