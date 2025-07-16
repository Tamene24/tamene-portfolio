document.addEventListener("DOMContentLoaded", () => {
  // Observe both fade-in and slide-in elements
  const fadeEls = document.querySelectorAll(".fade-in, .slide-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => {
    observer.observe(el);
  });

  // Typing animation
  const text = "Tamene Yilma";
  const typingEl = document.getElementById("typing-text");

  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      typingEl.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 150);
    }
  }
  typeWriter();
});
