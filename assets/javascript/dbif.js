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

const validatePassword = (password1, password2) => {
  if (validPassword) {
    console.log('creating user');
    dbInterface.createNewUser(name, email, password1); // birthdate is omitted for now
  } else {
    console.log('passwords do not match');
    // TODO: alert user to try again
}

// TODO: add this to a function that is run at startup
dbInterface.initializeDB();


*/