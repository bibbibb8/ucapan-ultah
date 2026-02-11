document.addEventListener("DOMContentLoaded", function () {
  const mailBtn = document.getElementById("mailBtn");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closeBtn");

  if (!mailBtn || !popup || !closeBtn) {
    console.log("Ada ID yang tidak ketemu!");
    return;
  }

  // Buka popup
  mailBtn.addEventListener("click", function () {
    popup.style.display = "flex";
  });

  // Tutup popup
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  // Klik luar popup
  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
