var rootRef = firebase.database().ref().child("Events");
var date1;
var events=[]
var name1;
rootRef.on("child_added", snap =>{

  name1 = snap.child("name").val();
date1 = snap.child("date").val();

var date2=new Date(date1);

events.push({'Date': new Date(date2.getFullYear(),date2.getMonth(),date2.getDate()), 'Title': name1+" - Click to Register", 'Link': 'javascript:myfunc()'});

//note the date format in firebase is mm-dd-yyyy
});


var settings = {
    
};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);



var Name = document.getElementById("namedisp");
var Texta = document.getElementById("desdisp");



function myfunc(){
	
	var rootRef = firebase.database().ref().child(name1);

rootRef.on('value',function(datasnapshot){
	
alert("THANK YOU FOR REGISTERING");
Name.innerHTML="YUDH";
Texta.innerHTML="Sports Event";
 return;

});
}




