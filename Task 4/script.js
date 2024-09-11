// "Read More" button functionality
document.getElementById('readMoreBtn').addEventListener('click', function() {
  var fullText = document.getElementById('fullText');
  var btn = document.getElementById('readMoreBtn');
  
  if (fullText.classList.contains('hidden')) {
      fullText.classList.remove('hidden');
      btn.textContent = 'Read Less';
  } else {
      fullText.classList.add('hidden');
      btn.textContent = 'Read More';
  }
});

// Form validation
document.querySelector('form').addEventListener('submit', function(event) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (!name || !email || !message) {
      alert('Please fill in all fields.');
      event.preventDefault(); // Prevent the form from being submitted
      return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
  if (!email.match(emailPattern)) {
      alert('Please enter a valid email address.');
      event.preventDefault(); // Prevent the form from being submitted
      return;
  }
});
