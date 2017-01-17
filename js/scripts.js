$(document).ready(function() {
  $("form#stressTest").submit(function(event) {
    event.preventDefault();

    var userWarningSignsArray = [];
    var userHealthSymptomsArray = [];
    var userCopingMechanismsArray = [];

    $("input:checkbox[name=warningSigns]:checked").each(function() {
      var userWarningSigns = $(this).val();
      userWarningSignsArray.push(userWarningSigns);
    });
    console.log(userWarningSignsArray);

    $("input:checkbox[name=healthSymptoms]:checked").each(function() {
      var userHealthSymptoms = $(this).val();
      userHealthSymptomsArray.push(userHealthSymptoms);
    });
    console.log(userHealthSymptomsArray);

    $("input:checkbox[name=copingMechanisms]:checked").each(function() {
      var userCopingMechanisms = $(this).val();
      userCopingMechanismsArray.push(userCopingMechanisms);
    });
    console.log(userCopingMechanismsArray);


    if ((userWarningSignsArray.length + userHealthSymptomsArray.length) > 3) {
      $("#results #textResults").text("its bad");
    } else if (userCopingMechanismsArray.length > (userWarningSignsArray.length + userHealthSymptomsArray.length)) {
      $("#results #textResults").text("you're managing you stress wonderfully!");
    } else {
      $("#results #textResults").text("we require more information");
    }

    $("#results").show();
  });
});
