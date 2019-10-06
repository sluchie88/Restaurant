/*clears form
function clearErrors(){
	for (var loopCounter = 0;
			loopCounter < document.forms["contactInfo"].elements.length;
			loopCounter++){
				if (document.forms["contactInfo"].elements[loopCounter].parentElement.className.indexOf("has-") != -1){
					document.forms["contactInfo"].elements[loopCounter].parentElement.className = "form-group";
				}
			}
}

function resetForm(){
	clearErrors();
	document.forms["contactInfo"]["name"].value = "";
	document.forms["contactInfo"]["email"].value = "";
	document.forms["contactInfo"]["phone"].value = "";
	document.forms["contactInfo"]["info"].value = "";
	document.getElementById("submitButton").innerText = "Submit";
	document.forms["contactInfo"]["name"].focus();
}

/*Created on 10/5/2019 by Thomas Sluciak
v2.0 - filled in logic for funcitons. Found and removed bugs from validatePhoneNumber
		added validateEmail (though seems like Bootstrap already handles this for me)
		Moved to individual functions, on big validate function was too hard
v1.0 - created initial structure of functions and attempted to code some
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
		alert("Please enter only numbers for your phone number, do not use +, -, (, or )");
		return false;
	}
	if(phoneNumber.length != 10){
		alert("Please enter ten digits for your phone number.");
		return false;
	}
	return true;
}

function validateName(){
	var contactName = document.forms["contactInfo"]["name"].value;
	if(contactName == ""){
		alert("Name must be filled in.");
		return false;
	}
}

function validateEmail(){
	var email = document.forms["contactInfo"]["email"].value;
	//Found on StackOverflow
	//https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
	var regEx = /\S+@\S+\.\S+/;
	if(regEx.test(email)){
		return true;
	} 
	else{
		alert("Please enter a valid email address.");
		return false;
	}
}


function validateForm(){
	if (validatePhoneNumber() == true){
		//used for debugging
		//console.log("Made it through phone number check");
		if(validateName() == true){
			//used for debugging
			//console.log("made it through name check");
			if(validateEmail() == true){
				//used for debugging
				//console.log("mAde it through the email check");
			}
		}
	}
	alert("Your information has been submitted. We will contact you soon. Have a great day!");
}