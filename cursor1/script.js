document.getElementById('heart').addEventListener('click', function () {
  this.style.transform = 'scale(1.3)';
  setTimeout(() => {
    this.style.transform = '';
  }, 200);
});
