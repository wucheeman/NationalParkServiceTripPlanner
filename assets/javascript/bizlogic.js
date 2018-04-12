$( document ).ready(function() {
  console.log( "ready!" );
  dbInterface.initializeDB()


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


function LoadFbSDK (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
 }   (document, 'script', 'facebook-jssdk');

});
