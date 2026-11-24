// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Copy-email button (only shown when the Clipboard API is available)
if (navigator.clipboard) {
  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.hidden = false;
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        button.textContent = "Copied";
      } catch {
        button.textContent = "Copy failed";
      }
      setTimeout(() => { button.textContent = "Copy"; }, 2000);
    });
  });
}
