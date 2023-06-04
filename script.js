// Add smooth scrolling to anchor links

  


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Perform form validation
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
    } else {
      // Send form data to the server or perform any other desired action
      alert('Thank you for your message, ' + name + '! We will get back to you soon.');
      document.getElementById('contact-form').reset(); // Reset the form
    }
  });
  