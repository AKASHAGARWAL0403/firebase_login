
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
   
     document.getElementById("footer").style.display = "block";
     document.getElementById("firstdiv").style.display = "none";

     var user = firebase.auth().currentUser;

     if(user != null)
     {
      var email = user.email;
      document.getElementById("headingf").innerHTML =   document.getElementById("headingf").innerHTML + " " + "<h3>"+email+"</h3>";
      document.getElementById("paraf").innerHTML =   document.getElementById("paraf").innerHTML + " " + "<p>"+email+"</p>";
     }

  } else {
    document.getElementById("footer").style.display = "none";
     document.getElementById("firstdiv").style.display = "block";
  }
});

function login()
{

	var email = document.getElementById("emailf").value;
	var pass = document.getElementById("passwordf").value;

	firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {

  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert(errorMessage+" try again");
 
});

}

function logout()
{
  firebase.auth().signOut();
}