function openImageModal(imageSrc, captionText = "") {
  const modal = document.getElementById("imageModal");
  const popupImage = document.getElementById("popupImage");
  const caption = document.getElementById("caption");
  
  popupImage.src = imageSrc;
  caption.innerText = captionText;
  
  modal.style.display = "block";
}

function closeImageModal() {
  document.getElementById("imageModal").style.display = "none";
}
