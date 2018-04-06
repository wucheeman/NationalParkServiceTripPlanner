// dbif.js

// Need this in index.html
// <script src="https://www.gstatic.com/firebasejs/4.12.1/firebase.js"></script>

/* ASSUMPTIONS
 ========================================
- Users will wrap functions and data in objects
- Objects may be nested more than one layer deep
- Data structures cannot be pre-positioned in the dB
- DB will use user object properties as keys
- Business logic has startup sequence to initialize DB
*/

/* CAVEATS
=============================================
- functions and parameters are best guesses and subject to change!!!
*/

const dbInterface = {
  // provides single interface to Firebase
  database: '',
  initializeDB: function () {
    // initializes database at start of planning session
    console.log('in dbInterface.initializeDB()');
    const config = {
      apiKey: "AIzaSyCaK_iaORmRwSf2oxnDDWoaE48-gHXoxLM",
      authDomain: "npconnect-60820.firebaseapp.com",
      databaseURL: "https://npconnect-60820.firebaseio.com",
      projectId: "npconnect-60820",
      storageBucket: "npconnect-60820.appspot.com",
      messagingSenderId: "1065780332036"
    };
    firebase.initializeApp(config);
    this.database = firebase.database();
    // zeros data in DB
    this.database.ref().set({
      // intializes data elements in DB if any are required
      // TODO: these need to be specified and added in
    });
  },
  initializeDataElements: function() {
    // this retrieves data initially and updates whenever it changes
    // TODO: add parameters users must send
    console.log('in dbInterface.initializeDataElements()');
    this.database.ref().on("value", function(snapshot) {
      // TODO link data elements into globals that all can see

    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  },
  createDBObject: function(object) {
    console.log('in dbInterface.createDBObject()');
    // creates new entity in dB to represent object
    // TODO: use .push() method to do this
    // returns entityID from Firebase
    const entityID = '12345abcde';
    // DUMMY DATA!!!
    return entityID;
  },
  retrieveDBObject: function(entityID, requester) {
    // returns an entire object from the DB
    console.log('in dbInterface.retrieveDBObject()');
    // requester is optional and maybe not needed at all
    // DUMMY DATA!!! can be filled in as needed
    return {};
  },
  updateDBObject: function(entityID, updatedObject) {
    // updates entire object in DB
    console.log('in dbInterface.updateDBObject()');
    // uses .set()
    // no return value unless needed
  }, 
  deleteDBObject: function(entityID) {
    // deleetes entire object from DB
    console.log('in dbInterface.deleteDBObject()');
    // implemented only if needed
    // no return value unless needed
  },
  setDataElement: function(entityID, key, value) {
    // updates single object prorperty vaue in database
    console.log('in dbInterface.setDataElement()');
    console.log(player, key, value);
    // NOTE the [] around the 'key' variable!
    this.database.ref().child(player).update({[key]: value});
    console.log('set a value in the DB');
  }
}