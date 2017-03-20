//Constructors for collecting data
function Person(fname, lname, email, phone, message) {
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.phone = phone;
		this.message = message;		
}

//get a reference to the root of the persons data
var personDB = new Firebase("https://flickering-inferno-1785.firebaseio.com/herbalvaretta");

/*The button is to submit the data when clicked, 
call the validation process that checks the fields, 
create a new Person and push the person's into the database*/
$('#submit').on('click', function() {//gather all the 
	//gather all the 
	var fname = $('#fname').val();
	var lname = $('#lname').val();
	var email = $('#email').val();
	var phone = parseInt($('#phone').val(), 10);
	var message = $('#message').val();

	if (fname==null || fname=="") {
		alert("First name must be filled in.");
		return ;
	}
	if (lname==null || lname=="") {
		alert("Last name must be filled in.");
		return ;
	}
	if (email==null || email=="") {
		alert("Last name must be filled in.");
		return ;
	}
	if (phone==null || phone=="" || isNaN(phone)) {//isNan takes care of null and "".
		alert("Error, please enter a valid phone number.");
		return ;
	}
	if (message==null || message=="") {
		alert("Last name must be filled in.");
		return ;
	}
	
	var person = new Person(fname, lname, email, phone, message);
	personDB.push(person);
	reset();	
});


//<!--CLEAR FORM FIELDS-->
function reset() {
	var fname = $('#fname').val("");
	var lname = $('#lname').val("");
	var email = $('#email').val("");
	var phone = parseInt($('#phone').val(""), 10);
	var message = $('#message').val("");
	
}
