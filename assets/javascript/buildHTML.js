const makeLogInPrompt = () => {
  const message = `
    <h3>Please sign in:</h3>
    <form>
      <div class="form-group">
        <label for="email">Email address:</label>
        <input type="email" class="form-control" id="email">
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd">
      </div>
      <button type="submit" class="btn btn-primary" id="requestAuth" onclick="return false">Submit</button>
    </form>
  `
  $("#loginPrompt").append(message);
}

const makeRegistrationForm = () => {
  console.log('in makeRegistrationForm');
  const message = `
    <h3>Welcome to NPS Connect!</h3>
    <h6>With an account, you will be able to save your travel plans and update them later<h6>
    <form>
      <div class="form-group">
        <label for="email">Your Email Address:</label>
        <input type="email" class="form-control" id="email">
      </div>
      <div class="form-group">
      <label for="name">Your Name:</label>
      <input type="text" class="form-control" id="name">
    </div>
      <div class="form-group">
        <label for="pwd1">Enter Your Password:</label>
        <input type="password" class="form-control" id="pwd1">
      </div>
      <div class="form-group">
      <label for="pwd2">Confirm Your Password:</label>
      <input type="password" class="form-control" id="pwd2">
    </div>
      <button type="submit" class="btn btn-primary" id="submitProfile" onclick="return false">Submit</button>
    </form>
  `
  $("#insertRegistrationhere").append(message);
}



const welcomeUser = () => {
  // TODO (future): add user name as parameter and use in welcome msg
  console.log('in welcomeUser')
  const message = `
    <br>
    <div class=".bg-light"
    <h3>Welcome to NPS Connect!</h3>
    </div>`;
  $("#loginPrompt").html(message);
}


const clearIt = () => {
  console.log('in clearIt()');
  const message = ` `;
  $("#loginPrompt").html(message);
  $('#insertRegistrationhere').html(message);
}

const promptForCorrectEmail = () => {
  console.log('in promptForCorrectEmail');
  const message = `
  <h3 class='text-danger'>Please use a valid email:</h3>
  <form>
    <div class="form-group">
      <label for="email">Email address:</label>
      <input type="email" class="form-control" id="email">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd">
    </div>
    <button type="submit" class="btn btn-primary" id="requestAuth" onclick="return false">Submit</button>
  </form>
`
$("#loginPrompt").html(message);
}

const promptForCorrectPassword = () => {
  console.log('in promptForCorrectPassword');
  const message = `
  <h3 class='text-danger'>Please use a valid password:</h3>
  <form>
    <div class="form-group">
      <label for="email">Email address:</label>
      <input type="email" class="form-control" id="email">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd">
    </div>
    <button type="submit" class="btn btn-primary" id="requestAuth" onclick="return false">Submit</button>
  </form>
`
$("#loginPrompt").html(message);
} 

const thankYouForJoining = () => {
  console.log('in thankYouForJoining');
  const message = `
    <h3>Thank You for Joining Us!</h3>
    <h6>Please log in and start planning!<h6>
  `
  $("#insertRegistrationhere").append(message);
}

const pleaseTryAgain = () => {
  console.log('in pleaseTryAgain');
  const message = `
    <h3>Passwords Didn't Match!</h3>
    <h6>Please try again.</h6>
  `
  console.log(message);
  $("#insertRegistrationhere").append(message);
}