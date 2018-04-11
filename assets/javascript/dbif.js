// dbif.js

// Need this in index.html
// <script src="https://www.gstatic.com/firebasejs/4.12.1/firebase.js"></script>

const dbInterface = {
  // provides single interface to Firebase
  database: '',
  name: "",
  email: "",
  password: "",
  // TODO: is this really needed?
  // birthDate:"",
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
  },
  createNewUser(userName, userEmail, userPassword) {
    // userBirthDate is omitted for now
    console.log('in dbInterface.createNewUser');
    const processedUserEmail = this.processUserEmail(userEmail);
    // console.log('processedUserEmail is ' + processedUserEmail);
    this.database.ref().child(processedUserEmail).set({
        name: userName,
        password: userPassword,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
  },
  processUserEmail: function(userEmail) {
    console.log('in processUserEmail');
    // Replaces '.' with '-dot-' in email address
    // needed to make legal key in Firebase
    return userEmail.split('.').join('-dot-');
  },
  // methods below will be built if they are required and time permits 
  createNewPlan: function(userEmail, newPlan) {
    // TODO
    // stores a newly created plan in the database
    // plan is a JSON object. Only one plan stored at a time
  },
  updatePlan: function(userEmail, plan) {
    // TODO
    // overwrites existly plan with updated content
    // plan is a JSON object
  },
  deletePlan: function(userEmail) {
    // TODO
    // returns 'success' if successful or 'failed' if not
  },
  createNewMemory: function(userEmail, newMemory) {
    // TODO if required
    // stores a newly created JSON object in the database to save memories of trip
    // Only one 'memory' is stored at a time
  },
  updateMemory: function(userEmail, memory) {
    // TODO if required
    // overwrites existly memory with updated content
    // memory is a JSON object
  },
  deleteMemory: function(userEmail) {
    // TODO if required
    // returns 'success' if successful or 'failed' if not
  }
}

/* code for Anthony

// TODO: firebase stack for submit form. ("#SubmitGoFire").on
// should be changed to the id we go with once the front end is cleaned.

// TODO: add this event handler as a separate function
const captureProfileData = () => {
  // THIS EXISTS
  $("#submitGoFire").on("click", function(event) {
  event.preventDefault();
  // Grabbed values from text boxes
  name = $("#firstName").val().trim();
  email = $("#email").val().trim();
  password1 = $("#password1").val().trim();
  password2 = $("#password2").val().trim(); 
  // TODO: let's not do this because it requires separate validation  
  birthDate = $("#birthDate").val().trim();
  // THIS IS NEW
  const validPassword = validatePassword(password1, password2);
  if (validPassword) {
    databaseInterface.createNewUser(name, email, password, birthdate);
  } else {
    console.log('passwords do not match');
    // TODO: alert user to try again
  }
}

// TODO: add this function to be run after user has submitted profile
const validatePassword = (password1, password2) => {
  if (password1 === password2) {
    console.log('password is valid');
    return true;
  } else {
    console.log('password is NOT valid');
    return false;
  }
}

// TODO: run this function when user has submitted password to log in
    const checkPassword = (email, password) => {
    // Authorizes access to NPS Connect as a user
      console.log('in checkPasswordTwo');
      let storedPassword;
      const processedUserEmail = dbInterface.processUserEmail(email);
      // retrieve password using email as key
      dbInterface.database.ref().child(processedUserEmail).on("value", function(snapshot) {
        setTimeout(() => {
          if (snapshot.val() === null) {
            console.log('no such email in DB');
            // TODO call new function to ask user to enter correct email
          }
          storedPassword = snapshot.val().password;
          console.log('stored password is ' + storedPassword);
          if (password === storedPassword ) {
            console.log('password is good');
            // TODO let user proceed to NPS Connect
          } else {
            console.log('password is NO good');
            // TODO ask user to enter password again
          }
        }, 1000);
      }, function(errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
  }


// TODO: add this to a function that is run at startup
dbInterface.initializeDB();


*/