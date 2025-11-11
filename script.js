document.getElementById('submitButton').addEventListener('click', function () {
  const inputDate = document.getElementById('dateInput').value;
  const correctDate = '2023-01-27'; // Replace with your special date (YYYY-MM-DD)
  
  if (inputDate === correctDate) {
    document.getElementById('messageContainer').classList.remove('hidden');
    document.getElementById('error').classList.add('hidden');
  } else {
    document.getElementById('error').classList.remove('hidden');
    document.getElementById('messageContainer').classList.add('hidden');
  }
});

