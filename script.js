const toggles = document.querySelectorAll('.map-toggle');

toggles.forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const map = document.getElementById(targetId);
    if (!map) return;

    const isOpen = map.style.display === 'block';
    map.style.display = isOpen ? 'none' : 'block';
    btn.textContent = isOpen ? '地図を開く' : '地図を閉じる';
  });
});
