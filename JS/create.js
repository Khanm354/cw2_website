$(document).ready(function() {
    $('#create-account-form').submit(function(event) {
      // Prevent form from submitting and reloading the page
      event.preventDefault();

      // Get form data
      var formData = $(this).serialize();

      // Send form data to server using AJAX
      $.ajax({
        type: 'POST',
        url: 'create_account.php',
        data: formData,
        success: function(response) {
          // Clear form inputs
          $('#create-account-form')[0].reset();

          // Show success message
          alert('Account created successfully!');
        },
        error: function(xhr, status, error) {
          // Show error message
          alert('Error creating account: ' + error);
        }
      });
    });
  });
