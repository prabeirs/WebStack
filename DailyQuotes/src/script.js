var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var quotePara = document.querySelector("#quote");
var xhrBtn = document.querySelector("#xhr");
var fetchBtn = document.querySelector("#fetch");
//var jQueryBtn = document.querySelector("jquery");
var axiosBtn = document.querySelector("#axios");

xhrBtn.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var data = JSON.parse(XHR.responseText);
      console.log(data[0]);
      quotePara.innerHTML = data[0];
    }
  }
  
  XHR.open("GET", url);
  XHR.send();
});

fetchBtn.addEventListener("click", function() {
  fetch(url)
  .then(function(request){ // Request object
    if (!request.ok) {
      console.log("ERROR WITH RESPONSE STATUS!");
      console.log(request.status);
      throw Error(request.status);
    }
    return request;
  })
  .then(function(request){ // Request object
    console.log("EVERYTHING IS. FINE!");
    console.log(request.status);
    console.log(request);
    return request.json(); // Promise object
  })
  .then(function(response){ // Data response
    var quoteStr = response[0];
    console.log(quoteStr);
    quotePara.innerHTML = quoteStr;
  })
  .catch(function(errMsg){
    console.log("THERE IS A PROBLEM: ", errMsg);
  })
});

$("#jquery").click(function(){
  $.getJSON(url)
  .done(function(data){
    console.log(data[0]);
    $( "#quote" ).text(data[0]);
  })
  .fail(function(){
    console.log("FAILURE!")
  })
});

axiosBtn.addEventListener("click", sendRequest);

function sendRequest() {
  //alert("Hi");
  axios.get(url)
  .then(function(response){
    console.log(response.data[0]);
    quotePara.innerHTML = response.data[0];
  })
  .catch(function(){
    console.log("ERROR!");
  })
}

