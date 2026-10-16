// 3D Parallax Tilt & Cursor Glow
const scene = document.getElementById("scene");
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  if (glow) {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }
  if (!scene || window.innerWidth < 850) return;
  const r = scene.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  scene.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
});

document.addEventListener("mouseleave", () => {
  if (scene) scene.style.transform = "rotateY(0deg) rotateX(0deg)";
});

// Scroll Reveal Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Responsive Mobile Menu (Class-based toggle & accessibility)
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

function toggleMenu(forceClose = false) {
  if (!navMenu || !menuBtn) return;
  const shouldOpen = forceClose ? false : !navMenu.classList.contains("is-open");
  navMenu.classList.toggle("is-open", shouldOpen);
  menuBtn.setAttribute("aria-expanded", String(shouldOpen));
  menuBtn.textContent = shouldOpen ? "✕" : "☰";
}

if (menuBtn) {
  menuBtn.addEventListener("click", () => toggleMenu());
}

// Close menu on link click
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", () => {
    if (window.innerWidth < 850) {
      toggleMenu(true);
    }
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (navMenu && navMenu.classList.contains("is-open")) {
    if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      toggleMenu(true);
    }
  }
});

// Close menu on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navMenu && navMenu.classList.contains("is-open")) {
    toggleMenu(true);
  }
});

// Toast notification helper
const toastEl = document.getElementById("toast");
let toastTimeout;
function showToast(message) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2800);
}

// Copy Email to Clipboard
const copyEmailBtn = document.getElementById("copy-email-btn");
const copyText = document.getElementById("copy-text");
const EMAIL_ADDRESS = "seshaanbp2709@gmail.com";

if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(EMAIL_ADDRESS);
      } else {
        const tempInput = document.createElement("input");
        tempInput.value = EMAIL_ADDRESS;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
      }
      if (copyText) copyText.textContent = "Copied! ✓";
      showToast("Email copied to clipboard! ✨");
      setTimeout(() => {
        if (copyText) copyText.textContent = "Copy";
      }, 2000);
    } catch (err) {
      showToast("Could not copy automatically. Email: " + EMAIL_ADDRESS);
    }
  });
}

// Interactive Contact Form Handling
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("form-name").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const subject = document.getElementById("form-subject").value.trim();
    const message = document.getElementById("form-message").value.trim();

    if (!name || !email || !message) {
      if (formStatus) {
        formStatus.textContent = "Please fill in all required fields.";
        formStatus.className = "form-status error";
      }
      return;
    }

    // Prefill mailto so user can send immediately
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
      subject || "Portfolio Contact: " + name
    )}&body=${mailtoBody}`;

    if (formStatus) {
      formStatus.textContent = "Opening mail client... Message prepared! ✉";
      formStatus.className = "form-status success";
    }
    showToast("Launching mail composer... 🚀");

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);

    contactForm.reset();
  });
}
