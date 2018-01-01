$( document).ready(function() {

   $("#survey-submit").on("click", function(event) {
   
     event.preventDefault();


      

    var name =  $("#usr").val();  
    var pic =   $("#pic").val();
    var scores = [
        parseInt($("#question1").val()),
        parseInt($("#question2").val()),
        parseInt($("#question3").val()),
        parseInt($("#question4").val()),
        parseInt($("#question5").val()),
        parseInt($("#question6").val()),
        parseInt($("#question7").val()),
        parseInt($("#question8").val()),
        parseInt($("#question9").val()),
        parseInt($("#question10").val())
    ];

    var newSurvey = {
      name: name,
      profilePic : pic,
      scores: scores 
      };

       // Question: What does this code do??
      $.post("/api/friends", newSurvey)
       .done(function(data) {
        console.log(data);
    });
    });
});