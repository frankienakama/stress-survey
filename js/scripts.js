$(document).ready(function() {

  $("#stressSurvey").submit(function(event) {
    (event).preventDefault();

    var stressCount = 0;
    var copeCount = 0;

    $("input:checkbox[name=stress]:checked").each(function() {
      var stressInput = $(this).val();
      stressCount++;
    });

    $("input:checkbox[name=cope]:checked").each(function(){
      var copeInput = $(this).val();
      copeCount++;
    });

    var result = function() {
      if(stressCount <= 2 && copeCount > 1) {
        return "Keep doing whatever you're doing!";
      } else if(stressCount > 2 && copeCount <= 1) {
        return "There's no hope for you.";
      } else {
        return "See your doctor and don't ask CS students.";
      }
    };

    $("#response").text(result);

    $("#answer").show();
    $("#stressSurvey").hide();
  });
});
