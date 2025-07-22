document.addEventListener("DOMContentLoaded", () => {
  const titles = ["Tamene Yilma", "Data Analyst", "Financial Accountant"];
  const typingTarget = document.getElementById("dynamic-typing");
  const headerTyping = document.getElementById("typing-text-header");

  let titleIndex = 0;
  let charIndex = 0;
  let isTyping = true;

  function typeEffect() {
    const currentText = titles[titleIndex];

    if (isTyping) {
      if (charIndex < currentText.length) {
        typingTarget.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
      } else {
        isTyping = false;
        setTimeout(typeEffect, 1500); // pause after full text
      }
    } else {
      if (charIndex > 0) {
        typingTarget.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeEffect, 50);
      } else {
        isTyping = true;
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(typeEffect, 500); // pause before new word
      }
    }
  }

  // Start animation
  typeEffect();

  // Optional: Typing animation for header once
  const headerText = "Welcome to my portfolio";
  let headerIndex = 0;

  function typeHeader() {
    if (headerIndex < headerText.length) {
      headerTyping.textContent += headerText.charAt(headerIndex);
      headerIndex++;
      setTimeout(typeHeader, 80);
    }
  }

  // Clear and animate header once
  headerTyping.textContent = "";
  typeHeader();
});
