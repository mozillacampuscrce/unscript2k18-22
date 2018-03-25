

document.getElementById("signOutBtn").click(
  function(){

    firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {

  alert(error.message);
  // An error happened.
});

}
);