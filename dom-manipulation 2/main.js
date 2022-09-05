const clickCount = document.querySelector('.click-count');
const button = document.querySelector('.hot-button');
var clicks = 0;
button.addEventListener('click', function (e) {
  clicks++
  clickCount.textContent = `Clicks: ${clicks}`;
  if (clicks < 4) {
    button.className = 'hot-button cold';
  } else if (clicks >= 4 && clicks < 7) {
    button.className = 'hot-button cool';
  } else if (clicks >=7 && clicks < 10) {
    button.className = 'hot-button tepid';
  } else if (clicks >= 10 && clicks < 13) {
    button.className = 'hot-button warm';
  } else if (clicks >= 13 && clicks < 16){
    button.className = 'hot-button hot'
  } else {
    button.className = 'hot-button nuclear';
  }
});
