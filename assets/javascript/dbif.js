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
    const processedUserEmail = this.processUserEmail(userEmail);
    this.database.ref().child(processedUserEmail).set({
        name: userName,
        password: userPassword,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
  },
  processUserEmail: function(userEmail) {
    // TODO
    // takes userEmail and replaces '.' with '-dot-' - replace code below
    const processedUserEmail = userEmail;
    return processedUserEmail;
  },
  validateUser: function(userEmail, password) {
    // TODO
    // processUserEmail
    // retrieve password using email as key
    // if good return true, else return false
  }
}

/* code for Anthony

// TODO: firebase stack for submit form. ("#SubmitGoFire").on
// should be changed to the id we go with once the front end is cleaned.


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

const validatePassword = (password1, password2) => {
  if (password1 === password2) {
    return true;
  } else {
    return false;
  }
}

// TODO
Add a fuction that takes a user email and password and asks if valid user or not


*/