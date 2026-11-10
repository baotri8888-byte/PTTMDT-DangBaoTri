document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector('footer .footer-inner');

  if (footer) {
    footer.innerHTML = `<div>© ${year} Adrian Dang</div><div>E-commerce • Customer Experience • Growth</div>`;
  }

  const bubbleLayer = document.getElementById('bubbleLayer');
  if (bubbleLayer) {
    const bubbleCount = 26;

    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement('span');
      bubble.className = 'bubble';

      const size = 20 + Math.random() * 50;
      const left = Math.random() * 100;
      const duration = 16 + Math.random() * 18;
      const delay = Math.random() * -30;
      const drift = (Math.random() - 0.5) * 180;

      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${left}%`;
      bubble.style.animationDuration = `${duration}s`;
      bubble.style.animationDelay = `${delay}s`;
      bubble.style.setProperty('--drift', `${drift}px`);

      bubbleLayer.appendChild(bubble);
    }
  }

  const audio = document.getElementById('bgAudio');
  const musicToggle = document.getElementById('musicToggle');
  const musicIcon = document.getElementById('musicIcon');

  if (audio && musicToggle && musicIcon) {
    const setButtonState = (isPlaying) => {
      musicToggle.setAttribute('aria-pressed', String(isPlaying));
      musicToggle.setAttribute('aria-label', isPlaying ? 'Pause background music' : 'Play background music');
      musicIcon.textContent = isPlaying ? '🔊' : '🔇';
    };

    musicToggle.addEventListener('click', async () => {
      const isPlaying = !audio.paused;

      if (isPlaying) {
        audio.pause();
        setButtonState(false);
        return;
      }

      try {
        await audio.play();
        setButtonState(true);
      } catch (error) {
        console.warn('Audio autoplay was blocked:', error);
        setButtonState(false);
      }
    });

    audio.volume = 0.35;
    setButtonState(false);
  }
});
