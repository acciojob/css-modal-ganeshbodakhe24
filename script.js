//your JS code here. If required.
const openBtn = document.getElementById("openModal");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-modal");

// Open modal
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal when X is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Optional: Close modal when clicking outside modal-content
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
