var span = document.querySelector("#price");
var btn = document.querySelector("#btn");
var currency = "INR";
var url = "https://api.coindesk.com/v1/bpi/currentprice/" + currency + ".json"
// Listen for clicks
btn.addEventListener("click", function() {
  // make a request
  var xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      span.innerText = data.bpi[currency].rate + " " + currency;
      console.log(data.bpi[currency].rate);
    }
  }
  
  xhr.open("GET", url);
  xhr.send();
  
});