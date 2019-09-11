var btn = document.querySelector("#btn");
img = document.querySelector("#photo");
// Listen for clicks
btn.addEventListener("click", function(){
  // make the request
  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var data = JSON.parse(XHR.responseText);
      img.src = data.message;
      console.log(data.message);
    }
  }
  
  XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
  XHR.send();
  
	//alert("CLICKED!");
})