var user= firebase.auth().currentUser;

if(user!=null)
{
	//uid=user.uid;
	uid=
	firebase.database().ref('/users/'+uid).push({
		foo:'abc',
		bar:'xyz'
	});
}

	