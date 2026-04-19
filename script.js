document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const letter = document.getElementById("letterOverlay");
  const main = document.getElementById("mainContent");

  envelope.addEventListener("click", () => {
    main.classList.add("fade-out");

    setTimeout(() => {
      letter.classList.add("show");
    }, 800);
  });
});