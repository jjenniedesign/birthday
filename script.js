document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const mainContent = document.getElementById("mainContent");
  const letterOverlay = document.getElementById("letterOverlay");

  if (!envelope || !mainContent || !letterOverlay) {
    console.error("Missing required elements in HTML");
    return;
  }

  envelope.addEventListener("click", () => {
    // open envelope flap
    envelope.classList.add("open");

    // fade out everything else
    mainContent.classList.add("fade-out");

    // show letter after short delay
    setTimeout(() => {
      letterOverlay.classList.add("show");
    }, 500);
  });
});