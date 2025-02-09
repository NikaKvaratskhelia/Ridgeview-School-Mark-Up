
document.getElementById('comment').addEventListener('click', function() {
    document.getElementById('login-demo').style.display = 'flex';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('login-demo')) {
        document.getElementById('login-demo').style.display = 'none';
    }
  });
  
  document.getElementById('login-demo-close').addEventListener('click', function() {
    document.getElementById('login-demo').style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('login-demo')) {
        document.getElementById('login-demo').style.display = 'flex';
    }
  });
  
  document.getElementById('ok-button').addEventListener('click', function() {
    document.getElementById('login-demo').style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('login-demo')) {
        document.getElementById('login-demo').style.display = 'flex';
    }
  });
  