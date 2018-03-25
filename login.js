

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    $(".login-cover").hide();

    var dialog = document.querySelector('#loginDialog');
    if (! dialog.showModal) {
     dialogPolyfill.registerDialog(dialog);
   }
   dialog.close();

  } else {
    // No user is signed in.\

      $(".login-cover").show();


     var dialog = document.querySelector('#loginDialog');
     if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
  }
});


/*LOGIN PROC*/

$("#loginBtn").click(
  function(){

    var email = $("#loginEmail").val();
    var password = $("#loginPassword").val();



    if(email != "" && password !=""){
      $("#loginProgress").show();
      $("#loginBtn").hide();


            var i =0;
            var flag=0;
            while(email.charAt(i)!='@')
            {

             if(email.charAt(i)=='.')
             {

            	if(email.charAt(i+1)=='s')
            	{
                //alert("welcome student ");
                window.open("student_dashboard.html");

            	}
            	else if(email.charAt(i+1)=='o' )
            	{
                  //alert("welcome organizer");
                  window.open("event_form.html");
            	}

            	else if(email.charAt(i+1)=='a')
            	{
                  //alert("welcome Admin");
                  window.open("xyz.html");
            	}
              flag=1;

             }
              i++;





            }
            if(flag==0)
            {
              alert("Incorrect entry");
            }
            var firebaseRef = firebase.database().ref();

  firebase.database().ref('currentUsers/').set({
  password: password

  });





      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        $("#loginError").show().text(error.message);
        $("#loginProgress").hide();
        $("#loginBtn").show();

      });



    }

    }
);

/*LOGOUT PROC*/

$("#signOutBtn").click(
  function(){

    firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {

  alert(error.message);
  // An error happened.
});

}
);
