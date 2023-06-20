<script>
  // Get a reference to the HTML element
  var myDiv = document.getElementById('myDiv');

  // Add an event listener to detect changes in the screen size
  window.addEventListener('resize', function() {
    if (window.innerWidth <= 600) {
      // Modify the element for screens up to 600px wide
      myDiv.innerHTML = 'Small Screen Content';
    } else {
      // Modify the element for screens wider than 600px
      myDiv.innerHTML = 'Default Content';
    }
  });
</script>
