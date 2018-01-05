$(document).ready(function() {
    $("#survey-submit").on("click", function(event) {
        event.preventDefault();

        var name = $("#usr").val();
        var gender = $("gender").val();
        var photo = $("#photo").val();
        var scores = [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ];

        var newSurvey = {
            name: name,
            gender: gender,
            photo: photo,
            scores: scores
        };


        newSurvey.scores = scores;

        $.post("/api/friends", newSurvey)
            .done(function(data) {
                console.log(data);
                $("#matchFriendName").text(data.name);
                $('#matchFriendImg').attr("src", data.photo);

                // Show the modal with the best match 
                $("#resultsModal").modal();
            });
    });


    $("#close-modal").on("click", function(event) {
        $(':input', '#questions').val('');
        window.location.href = '/friends';
        return false;
    });
        
});