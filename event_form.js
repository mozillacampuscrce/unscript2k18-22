

$("#loginBtn").click(
  function(){

    var name = $("#name").val();
    var comment = $("#texta").val();
		var date = $("#dte").val();
		


  var firebaseRef = firebase.database().ref();

  firebase.database().ref('Events/').child(name).set({
  name: name,
	date:date,
	description:comment,


  });

});
