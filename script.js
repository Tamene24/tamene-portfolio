<script>
document.addEventListener("DOMContentLoaded", () => {
  const titles = ["Tamene Yilma", "Data Analyst", "Financial Accountant"];
  const typingEl = document.getElementById("typing-text");

  let titleIndex = 0;
  let charIndex = 0;
  let typing = true;

  function type() {
    const current = titles[titleIndex];

    if (typing) {
      if (charIndex < current.length) {
        typingEl.textContent += current.charAt(charIndex);
        charIndex++;
        setTimeout(type, 120);
      } else {
        typing = false;
        setTimeout(type, 1200); // pause before deleting
      }
    } else {
      if (charIndex > 0) {
        typingEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(type, 60);
      } else {
        typing = true;
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(type, 500); // pause before typing next
      }
    }
  }

  type();
});
</script>
