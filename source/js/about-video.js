const videoElement = document.querySelector('.video-block');
const playButton = videoElement.querySelector('.video-block__play');
const videoscreen = videoElement.querySelector('img');

playButton.addEventListener('click', () => {

  videoscreen.style.display = 'none';
  playButton.style.display = 'none';

  const frame = document.createElement('iframe');
  frame.width = '560';
  frame.height = '315';
  frame.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&mute=0';
  frame.title = 'YouTube video player';

  frame.setAttribute('frameborder', '0');
  frame.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  frame.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
  frame.setAttribute('allowfullscreen', '');
  frame.style.backgroundColor = '#2d2f6e';

  videoElement.appendChild(frame);
});
