// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Hero trace: bars start at the "before" length and shrink to the "after" value.
// Without JS (or with reduced motion) the final values are shown as-is.
const trace = document.querySelector(".trace");
if (trace && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  trace.classList.add("is-rewound");
  void trace.offsetWidth;
  requestAnimationFrame(() => {
    trace.classList.add("is-playing");
    setTimeout(() => trace.classList.remove("is-rewound"), 350);
  });
}

// Copy-email button (only shown when the Clipboard API is available)
if (navigator.clipboard) {
  document.querySelectorAll("[data-copy]").forEach((button) => {
    const label = button.textContent;
    button.hidden = false;
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        button.textContent = "Copied";
      } catch {
        button.textContent = "Copy failed";
      }
      setTimeout(() => { button.textContent = label; }, 2000);
    });
  });
}
