document.getElementById('rentalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('message').innerText = 'Данные записаны';
  });