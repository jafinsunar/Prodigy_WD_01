window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#333';
      navbar.style.color = '#fff';
    } else {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      navbar.style.color = '#333';
    }
  });
  