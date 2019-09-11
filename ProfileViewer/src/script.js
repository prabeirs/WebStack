// https://randomuser.me/api/

var nextUser = document.querySelector("#btn");
// nextUser.addEventListener("click", function(){
//   alert("Hi!");
// });
var fullName = document.querySelector("#fullname");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");
var img = document.querySelector("#avatar");

nextUser.addEventListener("click", function() {
	var url = "https://randomuser.me/api/";
	fetch(url)
	.then(function(request){ // Request object
		// Fetch went through so let's check the status code proceed.
		if (!request.ok) {
			console.log("ERROR WITH RESPONSE STATUS!");
      console.log(request.status);
      throw Error(request.status);
		}
		return request;
	})
	.then(function(request){ // Request object
		console.log("EVERYTHING IS FINE!");
		console.log(request.status);
    console.log(request);
    
    return request.json(); // Promise is returned
	})
  .then(function(response){ // Data (response)
    var firstName = response.results[0].name.first;
    var lastName = response.results[0].name.last;
    var userName = response.results[0].login.username;
    var email2 = response.results[0].email;
    var city2 = response.results[0].location.city;
    var img2 = response.results[0].picture.medium;
    console.log("username: ", username);
    firstName = firstName.charAt(0).toUpperCase() + firstName.substring(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.substring(1);
    fullName.innerHTML = firstName + " " + lastName;
    username.innerHTML = userName;
    email.innerHTML = email2;
    city.innerHTML = city2;
    img.src = img2;
  })
	.catch(function(errorMsg) {
		console.log("THERE IS A PROBLEM!! " + errorMsg);
	});
});
