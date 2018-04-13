$( document ).ready(function() {
  console.log( "ready!" );
  dbInterface.initializeDB();
  $(document).on('click', clickHandler);

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
    case 'createAccount':
      console.log('user wants to create account');
      clearIt();
      makeRegistrationForm();
      break;
    case 'submitProfile':
      console.log('user submitted profile info');
      if (captureProfileData(event)) {
        clearIt();
        thankYouForJoining();
        setTimeout(() => {
          clearIt();
        }, 3000);
      } else {
        clearIt();
        pleaseTryAgain();
        setTimeout(() => {
          clearIt();
        }, 2000);
        setTimeout(() => {
          makeRegistrationForm();
        }, 3500);
      }
      break;
    default:
      console.log('user clicked in unsupported region');
  }
}

// TODO: add this event handler as a separate function
const captureProfileData = (e) => {
  // $("#submitGoFire").on("click", function(event) {
  event.preventDefault();
  // Grabbed values from text boxes
  let email = $("#email").val().trim();
  let name = $("#name").val().trim();
  let password1 = $("#pwd1").val().trim();
  let password2 = $("#pwd2").val().trim();
  console.log(email, name, password1, password2);
  const validPassword = validatePassword(password1, password2);
  if (validPassword) {
    console.log('passwords match');
    dbInterface.createNewUser(name, email, password1);
    return true;
  } else {
    console.log('passwords do not match');
    return false;
  }
}


const validatePassword = (password1, password2) => {
  console.log('in validatePassword');
    if (password1 === password2) {
      console.log ('password is valid');
      return true;
  } else {
    console.log('password is NOT valid');
    return false;
  }
}