
/*firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
     document.getElementById("firstdiv").style.display = "block";
     document.getElementById("seconddiv").style.display = "none";
     document.getElementById('result').style.display = "none";
  } else {
    // No user is signed in.
    document.getElementById("firstdiv").style.display = "none";
     document.getElementById("seconddiv").style.display = "none";
     document.getElementById("result").style.display = "block";
  }
});*/


// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

function signin()
{
var phoneNumber = "+91"+document.getElementById("no").value;
var appVerifier = window.recaptchaVerifier;
console.log(phoneNumber);
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      document.getElementById("firstdiv").style.display = "none";
      document.getElementById("seconddiv").style.display = "block";
      document.getElementById("recaptcha-container").style.display = "none";
    }).catch(function (error) {
      // Error; SMS not sent
      // ...
      grecaptcha.reset(window.recaptchaWidgetId);

// Or, if you haven't stored the widget ID:
      window.recaptchaVerifier.render().then(function(widgetId) {
      grecaptcha.reset(widgetId);
}
  )  });
}


function signinsec()
{
   
      var code  = document.getElementById("no2").value;

confirmationResult.confirm(code).then(function (result) {
  // User signed in successfully.
  var user = result.user;
  console.log("verified");  
    document.getElementById("firstdiv").style.display = "none";
     document.getElementById("seconddiv").style.display = "none";
     document.getElementById("result").style.display = "block";// ...
}).catch(function (error) {
  // User couldn't sign in (bad verification code?)
  // ...
});
}