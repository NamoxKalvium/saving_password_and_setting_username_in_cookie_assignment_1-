document.addEventListener('DOMContentLoaded', function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${date.toUTCString()};path=/`;
  }

  // Get the value of the 'count' cookie
  let count = getCookie('count');

  if (count) {
    // If the cookie exists, increment the value
    count = parseInt(count) + 1;
  } else {
    // If the cookie does not exist, initialize it with 1
    count = 1;
  }

  // Update the cookie with the new count value
  setCookie('count', count, 7); // Cookie will expire in 7 days

  // Display the count on the webpage
  document.getElementById('countDisplay').textContent = `Page visit count: ${count}`;
});
