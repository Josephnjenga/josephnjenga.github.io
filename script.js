const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const copyButton = document.getElementById("copyEmail");
copyButton?.addEventListener("click", async () => {
  const email = "josephkinuthianjenga@gmail.com";
  try {
    await navigator.clipboard.writeText(email);
    copyButton.textContent = "Email copied ✓";
    setTimeout(() => copyButton.textContent = "Copy email", 1800);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});
