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