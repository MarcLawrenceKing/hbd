// Define an array of objects, each containing a video ID and a message
const initialVideoList = [
  {
      video: "Ev642LoVoCs",
      message: "Message for Video 1"
  },
  {
      video: "VPzT0n3VkTM",
      message: "Message for Video 2"
  },
  {
      video: "PQCi3lN_fNI",
      message: "Message for Video 3"
  },
  // Add more video objects as needed
];

// Make a copy of the initial video list to reset later
let videoList = [...initialVideoList];

// Shuffle the video list when the page loads
shuffleArray(videoList);

// Keep track of displayed videos
let displayedVideos = [];

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to generate a random video
function generateRandomVideo() {
  if (displayedVideos.length === initialVideoList.length) {
      // All videos have been displayed, reset videos
      videoList = [...initialVideoList];
      shuffleArray(videoList);
      displayedVideos = [];
  }

  let randomVideoObject;

  // Find a video that hasn't been displayed yet
  do {
      randomVideoObject = videoList.pop();
      videoList.unshift(randomVideoObject);
  } while (displayedVideos.includes(randomVideoObject));

  displayedVideos.push(randomVideoObject);

  const videoId = randomVideoObject.video.includes("youtube.com") ? 
      new URL(randomVideoObject.video).searchParams.get("v") : randomVideoObject.video;
  const message = randomVideoObject.message;

  document.getElementById("video-frame").innerHTML = `
      <iframe width="300" height="225" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
  `;
  document.getElementById("video-message").textContent = message;
}
