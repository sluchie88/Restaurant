/*Created on 10/5/2019 by Thomas Sluciak
v2.0.1 - 10/6 fixed logical errors in all functions. was using === in validateForm, changed to ==
			added return true to all functions for phone, email and name validation
			working well now. should be correct
v2.0.0 - filled in logic for funcitons. Found and removed bugs from validatePhoneNumber
		added validateEmail (though seems like Bootstrap already handles this for me)
		Moved to individual functions, on big validate function was too hard
v1.0.0 - created initial structure of functions and attempted to code some
*/
/*Functions made modularly for:
1. Readability
2. Functionality
Trying to jam them all into one long function would have made it unweildy
and harder to think through logically
*/

function validatePhoneNumber(){
var phoneNumber = document.forms["contactInfo"]["phone"].value;
	if(isNaN(phoneNumber)){
		//used for debugging
		//console.log("phone isNaN");
		alert("Please enter only numbers for your phone number, do not use +, -, (, or )");
		return false;
	}
	if(phoneNumber.length != 10){
		//used for debugging
		//console.log("phone doesn't have all digits");
		alert("Please enter ten digits for your phone number.");
		return false;
	}
	//used for debugging
	//console.log("mAde it through phone check");
	return true;
}

function validateName(){
	var contactName = document.forms["contactInfo"]["name"].value;
	if(contactName == ""){
		//used for debugging
		//console.log("name is empty");
		alert("Name must be filled in.");
		return false;
	}
	//used for debugging
	//console.log("mAde it through name check");
	return true;
}

function validateEmail(){
	var email = document.forms["contactInfo"]["email"].value;
	//Found on StackOverflow
	//https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
	var regEx = /\S+@\S+\.\S+/;
	if(regEx.test(email)){
		//used for debugging
		//console.log("email returned true");
		return true;
	} 
	else{
		//used for debugging
		//console.log("email is okay");
		alert("Please enter a valid email address.");
		return false;
	}
}


function validateForm(){
	if (validatePhoneNumber() == true){
		//used below for debugging
		//console.log("Made it through phone number check");
		if(validateName() == true){
			//used below for debugging
			//console.log("made it through name check");
			if(validateEmail() == true){
				//used below for debugging
				//console.log("mAde it through the email check");
				alert("AAAAAYour information has been submitted. We will contact you soon. Have a great day!");
			}
		}
	}
}