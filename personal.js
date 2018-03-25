var firebaseHeadingRef = firebase.database().ref().child("currentUsers");
var password;
firebaseHeadingRef.on('value',function(datasnapshot){

 password = datasnapshot.val().password;
  retrival(password);
});


var Name = document.getElementById("Name");
var Branch = document.getElementById("Branch");
var Gpa = document.getElementById("Gpa");


function retrival(password){
var rootRef = firebase.database().ref().child(password);

rootRef.on('value',function(datasnapshot){

 Name.innerHTML = datasnapshot.val().name;
 Branch.innerHTML = datasnapshot.val().branch;
 Gpa.innerHTML = datasnapshot.val().cgpa;

});
}
