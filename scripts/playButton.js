// Select all video containers and their associated play buttons
const videoContainers = document.querySelectorAll('.video-container');

videoContainers.forEach((container) => {
  const video = container.querySelector('video');
  const playButton = container.querySelector('.play-button');

  // Add a click event listener to the play button
  playButton.addEventListener('click', () => {
    if (video.paused) {
      video.play(); // Play the video
      playButton.style.display = 'none'; // Hide the play button
    }
  });

  // Add a click event listener to the video itself
  video.addEventListener('click', () => {
    if (!video.paused) {
      video.pause(); // Pause the video
      playButton.style.display = 'flex'; // Show the play button
    }
  });

  // Show the play button again when the video ends
  video.addEventListener('ended', () => {
    playButton.style.display = 'flex';
  });
});
