document.querySelector('.event').addEventListener('mouseenter', function() {
  document.querySelector('.event-left-row').style.display = 'none';
  document.querySelector('.arrow').style.display = 'flex';
});

document.querySelector('.event').addEventListener('mouseleave', function() {
  document.querySelector('.event-left-row').style.display = 'flex';
  document.querySelector('.arrow').style.display = 'none';
});




document.getElementById('arrow1').addEventListener('click', function() {
  document.getElementById('event-bottom1').style.display = 'flex';
  document.getElementById('arrow1').style.transform = 'rotate(180deg)'
  document.getElementById('arrow1').style.display = 'unset'
});

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('event-bottom1')) {
      document.getElementById('event-bottom1').style.display = 'none';
  }
});

document.getElementById('event-bottom1').addEventListener('click', function() {
  document.getElementById('event-bottom1').style.display = 'none';
  document.getElementById('arrow1').style.transform = 'unset'
  document.getElementById('arrow1').style.display = 'unset'
});



document.querySelector('.event').addEventListener('mouseenter', function() {
  document.querySelector('.event-left-row').style.display = 'none';
  document.querySelector('.arrow').style.display = 'flex';
});

document.querySelector('.event').addEventListener('mouseleave', function() {
  document.querySelector('.event-left-row').style.display = 'flex';
  document.querySelector('.arrow').style.display = 'none';
});

document.getElementById('arrow2').addEventListener('click', function() {
  document.getElementById('event-bottom2').style.display = 'flex';
  document.getElementById('arrow2').style.transform = 'rotate(180deg)';
});

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('event-bottom2')) {
    document.getElementById('event-bottom2').style.display = 'none';
  }
});

document.getElementById('event-bottom2').addEventListener('click', function() {
  document.getElementById('event-bottom2').style.display = 'none';
  document.getElementById('arrow2').style.transform = 'unset';
});




document.querySelector('.event').addEventListener('mouseenter', function() {
  document.querySelector('.event-left-row').style.display = 'none';
  document.querySelector('.arrow').style.display = 'flex';
});

document.querySelector('.event').addEventListener('mouseleave', function() {
  document.querySelector('.event-left-row').style.display = 'flex';
  document.querySelector('.arrow').style.display = 'none';
});

document.getElementById('arrow3').addEventListener('click', function() {
  document.getElementById('event-bottom3').style.display = 'flex';
  document.getElementById('arrow3').style.transform = 'rotate(180deg)';
});

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('event-bottom3')) {
    document.getElementById('event-bottom3').style.display = 'none';
  }
});

document.getElementById('event-bottom3').addEventListener('click', function() {
  document.getElementById('event-bottom3').style.display = 'none';
  document.getElementById('arrow3').style.transform = 'unset';
});



document.querySelector('.event').addEventListener('mouseenter', function() {
  document.querySelector('.event-left-row').style.display = 'none';
  document.querySelector('.arrow').style.display = 'flex';
});

document.querySelector('.event').addEventListener('mouseleave', function() {
  document.querySelector('.event-left-row').style.display = 'flex';
  document.querySelector('.arrow').style.display = 'none';
});

document.getElementById('arrow4').addEventListener('click', function() {
  document.getElementById('event-bottom4').style.display = 'flex';
  document.getElementById('arrow4').style.transform = 'rotate(180deg)';
});

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('event-bottom4')) {
    document.getElementById('event-bottom4').style.display = 'none';
  }
});

document.getElementById('event-bottom4').addEventListener('click', function() {
  document.getElementById('event-bottom4').style.display = 'none';
  document.getElementById('arrow4').style.transform = 'unset';
});


document.querySelector('.event').addEventListener('mouseenter', function() {
  document.querySelector('.event-left-row').style.display = 'none';
  document.querySelector('.arrow').style.display = 'flex';
});

document.querySelector('.event').addEventListener('mouseleave', function() {
  document.querySelector('.event-left-row').style.display = 'flex';
  document.querySelector('.arrow').style.display = 'none';
});

document.getElementById('arrow5').addEventListener('click', function() {
  document.getElementById('event-bottom5').style.display = 'flex';
  document.getElementById('arrow5').style.transform = 'rotate(180deg)';
});

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('event-bottom5')) {
    document.getElementById('event-bottom5').style.display = 'none';
  }
});

document.getElementById('event-bottom5').addEventListener('click', function() {
  document.getElementById('event-bottom5').style.display = 'none';
  document.getElementById('arrow5').style.transform = 'unset';
});
