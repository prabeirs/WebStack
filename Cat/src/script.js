$("#btn").click(function(){
  //alert("Meow");
  var url = "https://aws.random.cat/meow";
  $.get(url)
  .done(function(data){
    console.log(data.file);
    $( "#cat" ).attr("src", data.file);
  })
  .fail(function(){
    console.log("ERROR!");
  })
  
});
