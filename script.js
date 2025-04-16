document.addEventListener("DOMContentLoaded", function () {
});

const now = new Date();
const formatteddate = now.toLocaleString();  // Formats date & time based on your locale
document.getElementById("frontend").innerText = formatteddate;

fetch('http://backend:7000')  // replace with your API endpoint
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();  // or response.text(), depending on expected data
})
  .then(data => {
    console.log('Data received:', data);
    document.getElementById("backend").innerText = data;
})
  .catch(error => {
    console.error('Fetch error:', error);
    document.getElementById("backend").innerText = error;
});
