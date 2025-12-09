// const video = document.getElementById('myVideo');
// const playBtn = document.getElementById('playBtn');
// const heaidng = document.querySelector('.v-heading');

// playBtn.addEventListener('click', () => {
//   video.play();
//   playBtn.style.display = 'none'; // Hide custom button after playing
//   heaidng.style.display = 'none';
// });



// for youtube video

// Load YouTube API script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag);

let player;

// YouTube API calls this automatically
function onYouTubeIframeAPIReady() {
    player = new YT.Player('myVideo', {
        playerVars: {
            autoplay: 0,    // Autoplay OFF
            controls: 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

// When video player is ready
function onPlayerReady() {
    const playBtn = document.getElementById("playBtn");

    playBtn.addEventListener("click", () => {
        player.playVideo();          // ▶ Play only on click
        playBtn.style.display = "none"; // Hide play button
    });
}
