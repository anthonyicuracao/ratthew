// Two small behaviours. Without JavaScript the page still works:
// video posters link out to YouTube/Vimeo and images open on their own.

const lightbox = document.getElementById('lightbox');

document.addEventListener('click', (event) => {
  // 1. Video poster -> swap in the real player, only when asked for.
  const video = event.target.closest('a.video');
  if (video) {
    event.preventDefault();
    const frame = document.createElement('iframe');
    frame.src = video.dataset.embed;
    frame.title = video.getAttribute('aria-label').replace(/^Play /, '');
    frame.allow = 'autoplay; fullscreen; picture-in-picture; encrypted-media';
    frame.allowFullscreen = true;
    const player = document.createElement('div');
    player.className = 'video';
    player.style.aspectRatio = video.style.aspectRatio;
    player.append(frame);
    video.replaceWith(player);
    return;
  }

  // 2. Image -> full-size view.
  const zoom = event.target.closest('a.zoom');
  if (zoom && lightbox.showModal) {
    event.preventDefault();
    const big = lightbox.querySelector('img');
    big.src = zoom.href;
    big.alt = zoom.querySelector('img').alt;
    big.classList.toggle('fit', zoom.classList.contains('loop'));
    lightbox.showModal();
    return;
  }

  if (event.target.closest('#lightbox')) lightbox.close();
});
