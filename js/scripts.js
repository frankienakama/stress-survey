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
  });

});
