

var rootRef = firebase.database().ref().child("Users");

rootRef.on("child_added", snap =>{

  var name = snap.child("Name").val();
  var email = snap.child("Email").val();

  var table = document.getElementById("table_body");
   var row = table.insertRow(0);
   var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
   cell1.innerHTML = name;
    cell2.innerHTML = email;
//  $("#table_body").append("<tr><td>" + name + "</td><td>" + email +
  //                "</td></tr>" );
});
