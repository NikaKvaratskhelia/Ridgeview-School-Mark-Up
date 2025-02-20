document.getElementById('latest-posts').addEventListener('click', function() {
    document.getElementById('coming-soon').style.display = 'flex';
    document.getElementById('posts').style.display = 'none'
  });

document.getElementById('all-post').addEventListener('click', function() {
  document.getElementById('coming-soon').style.display = 'none';
  document.getElementById('posts').style.display = 'flex'
});