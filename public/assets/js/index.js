$(document).ready(function() {
    $("#survey-submit").on("click", function(event) {
        event.preventDefault();

        var name = $("#usr").val();
        var photo = $("#photo").val();
        var scores = ["2", "4", "5", "7", "8", "39"];
        var newSurvey = {
        name: $("#usr").val(),
        photo: $("#photo").val(),
        //scores: 
      // [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ]
        };


        newSurvey.scores = scores;
        // Question: What does this code do??
        $.post("/api/friends", newSurvey)
            .done(function(data) {
                console.log(data);
            });
    });
});