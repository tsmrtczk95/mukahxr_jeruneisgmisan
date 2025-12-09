let gallery = [];
let captions = [];
let audioSrc = null;
let currentIndex = 0;

// OPEN MEDIA (images + audio)
function openMedia(images, captionList = [], audioFile = null) {
    gallery = images;
    captions = captionList;
    audioSrc = audioFile;
    currentIndex = 0;

    updateMedia();

    // If audio available, show + load it
    const audioPlayer = document.getElementById("mediaAudio");
    if (audioSrc) {
        audioPlayer.src = audioSrc;
        audioPlayer.style.display = "block";
    } else {
        audioPlayer.style.display = "none";
    }

    document.getElementById("mediaModal").style.display = "block";
}

// UPDATE IMAGE + CAPTION
function updateMedia() {
    document.getElementById("mediaImage").src = gallery[currentIndex];
    const cap = captions[currentIndex] || "";
    document.getElementById("mediaCaption").innerText =
      `${cap} (${currentIndex + 1}/${gallery.length})`;
}

// NEXT / PREVIOUS
function nextMedia() {
    currentIndex = (currentIndex + 1) % gallery.length;
    updateMedia();
}

function prevMedia() {
    currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
    updateMedia();
}

// CLOSE
function closeMedia() {
    document.getElementById("mediaModal").style.display = "none";
    const audioPlayer = document.getElementById("mediaAudio");
    audioPlayer.pause();
}

// SWIPE SUPPORT
let startX = 0;

document.getElementById("mediaModal").addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

document.getElementById("mediaModal").addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextMedia();
    if (endX - startX > 50) prevMedia();
});
