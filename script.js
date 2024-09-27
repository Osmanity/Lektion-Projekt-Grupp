let slideIndex = 1;

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
  showSlides(slideIndex);

  // Add event listener for key presses when modal is open
  document.addEventListener("keydown", handleKeyDown);
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";

  // Remove event listener when modal is closed
  document.removeEventListener("keydown", handleKeyDown);
}

function handleKeyDown(event) {
  if (event.key === "ArrowLeft") {
    plusSlides(-1); // Left arrow key
  } else if (event.key === "ArrowRight") {
    plusSlides(1); // Right arrow key
  }
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const images = document.querySelectorAll(".container .bild");
  const modalImage = document.getElementById("modalImage");

  // Loop back if we go past the first or last image
  if (n > images.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = images.length;
  }

  // Set the source of the modal image to the current slide's image
  modalImage.src = images[slideIndex - 1].src;
}
