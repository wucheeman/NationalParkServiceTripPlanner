$( document ).ready(function() {
  console.log( "ready!" );
  dbInterface.initializeDB();
  $(document).on('click', clickHandler);


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
  // birthDate = $("#birthDate").val().trim();
  // THIS IS NEW
  const validPassword = validatePassword(password1, password2);
  if (validPassword) {
    databaseInterface.createNewUser(name, email, password, birthdate);
  } else {
    console.log('passwords do not match');
    // TODO: alert user to try again
}
  })
}


const validatePassword = (password1, password2) => {
  ('password is valid');
    return true;if (password1 === password2) {
    console.log
  } else {
    console.log('password is NOT valid');
    return false;
  }
}

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


function LoadFbSDK (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
 }   (document, 'script', 'facebook-jssdk');

});


const checkPassword = (email, password) => {
  // Authorizes access to NPS Connect as a user
    console.log('in checkPassword');
    let storedPassword;
    const processedUserEmail = dbInterface.processUserEmail(email);
    console.log('processedUserEmail is: ' + processedUserEmail);
    // retrieve password using email as key
    dbInterface.database.ref().child(processedUserEmail).on("value", function(snapshot) {
      setTimeout(() => {
        if (snapshot.val() === null) {
          console.log('no such email in DB');
          promptForCorrectEmail();
        }
        else {
          storedPassword = snapshot.val().password;
          console.log('stored password is ' + storedPassword);
          if (password === storedPassword ) {
            console.log('password is good');
            clearIt();
            welcomeUser();
            setTimeout(() => {
              clearIt();
            }, 2000);
          } else {
            console.log('password is NO good');
            promptForCorrectPassword();
          }
        }
      }, 1000);
    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
}

const clickHandler = (e) => {
  console.log('in clickHandler');
  const clickTarget = e.target.id;
  let message;
  switch (clickTarget) {
    case 'login':
      console.log('user attempting to log in');
      makeLogInPrompt();
      break;
    case 'requestAuth':
      console.log('user has submitted email and password');
      event.preventDefault;
      let userEmail = $("#email").val().trim();
      let userPassword = $("#pwd").val().trim();
      checkPassword(userEmail, userPassword);
      break;
    case 'getDirections':
      console.log('user wants directions to a park');
      //event.preventDefault;
      emptyNPS();
      getAndDisplayDirections();
      break;
    default:
      console.log('user clicked in unsupported region');
  }
}


// 