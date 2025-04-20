function toggleMenu() {
  const overlay = document.getElementById('menuOverlay');
  overlay.classList.toggle('active');
  document.body.style.filter = overlay.classList.contains('active') ? 'brightness(50%)' : 'brightness(100%)';
}