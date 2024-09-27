// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Display the clicked image in the modal
function currentSlide(index) {
  const images = document.querySelectorAll(".container .bild");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = images[index - 1].src; // Set the clicked image as the source
}
