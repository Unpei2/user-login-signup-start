// USER LOGIN / SIGNUP
// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');
let array = getlocal()

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  let taken = false
  let same = true
  let usersignup = document.getElementById("usernamesignup").value
  let passwordsignup = document.getElementById("passwordsignup").value
  let confirmpass = document.getElementById("confirmpassword").value
  for (i = 0;i < array.length;i++){
    if (usersignup === array[i].username){
      taken = true
    }
  }
  if (passwordsignup !== confirmpass){
    alert("Passwords do not match, please try again.")
    same = false
  } 
  if (!taken && same) {
    array.push(returnthing(usersignup, passwordsignup))
    savelocal()
    alert("Sign Up Completed")
  } else if (taken){
    alert("This username has already been taken")
  }
  console.log(array)
}

function returnthing (username, password){
  return {
    username, password
  }
}
// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  console.log('Sign In Btn Clicked');
  let usersign = document.getElementById("usersign")
  let passwordsign = document.getElementById("passwordsign")
  user = false
  pass = false
  for (i = 0;i < array.length; i++){
    if (usersign === array[i].username && passwordsign === array[i].password){
      user = true
      pass = true
    }
  }
  if (user && pass){
    alert("Sign in successful")
  }
  else {
    alert("Sign in failed")
  }
}
function savelocal(){
  arraystr = JSON.stringify(array)
  localStorage.setItem("User",arraystr)
}
function getlocal(){
  foundarray = localStorage.getItem("User")
  return JSON.parse(foundarray) ?? []
}