// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready( 
  function() {

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#bu").val().trim(),
      eaten: $("[name=eaten]:checked").val().trim()
    };

    // Send the POST request.
    $.post("/api/burgers", burger).then(
      function(result) {
        if (result.name === "") {
          $('#bu').find('.form-group').addClass('has-error');
        } else {
          $('#bu').find('.form-group').removeClass('has-error');
        console.log("created new burger");
        // Reload the page to get the updated list
        window.location.reload();
        }
        
      });
  });

  $(".change-eaten").on("click", function(event) {

    var id = $(this).data("id");
    var newEaten = $(this).attr("data-newEaten");

    var newEatenState = {
      eaten: newEaten
    };

    // Send the PUT request.
    $.post("/api/burgers/" + id).then(
      function(result) {
        console.log("changed Eaten to", newEaten);
        // Reload the page to get the updated list
        window.location.reload();
        }

      });

  });


});
