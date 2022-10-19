// USER LOGIN / SIGNUP
// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');
let array = getlocal()

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  let empty = false
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
  if (passwordsignup === ""){
    alert("Please enter a password.")
    empty = true
  }
  if (passwordsignup !== confirmpass){
    alert("Passwords do not match, please try again.")
    same = false
  } 
  if (!taken && same && !empty) {
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
  let usersign = document.getElementById("usersign").value
  let passwordsign = document.getElementById("passwordsign").value
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