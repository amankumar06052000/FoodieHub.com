
    // Tailwind Dark Mode
    tailwind.config = { darkMode: 'class' }

    // ================= AOS INIT =================
    AOS.init({ duration: 1200, once: true });

    // ================= MOBILE MENU =================
    function toggleMenu() {
      const menu = document.getElementById("mobileMenu");
      menu.classList.toggle("hidden");
    }

    // ================= MOBILE DROPDOWN =================
    function toggleDropdown() {
      const dropdown = document.getElementById("mobileDropdown");
      dropdown.classList.toggle("hidden");
    }

    // ================= DARK MODE =================
    function toggleDarkMode() {
      const html = document.documentElement;
      const icon = document.getElementById("themeIcon");
      html.classList.toggle("dark");
      if (html.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        if (icon) icon.textContent = "☀️";
      } else {
        localStorage.setItem("theme", "light");
        if (icon) icon.textContent = "🌙";
      }
    }

    // ================= LOAD SAVED THEME =================
    window.addEventListener("DOMContentLoaded", () => {
      const savedTheme = localStorage.getItem("theme");
      const icon = document.getElementById("themeIcon");
      if (savedTheme === "dark") { document.documentElement.classList.add("dark"); if (icon) icon.textContent = "☀️"; }
      else { document.documentElement.classList.remove("dark"); if (icon) icon.textContent = "🌙"; }

      // ================= TYPING EFFECT =================
      const words = ["Freshly Baked Pizza", "Delicious Burgers", "Hot & Crispy Momos"];
      let i = 0, j = 0, currentWord = "", isDeleting = false;
      const typingElement = document.getElementById("typing");

      function type() {
        if (!typingElement) return;
        currentWord = words[i];
        if (isDeleting) {
          typingElement.textContent = currentWord.substring(0, j--);
          if (j < 0) { isDeleting = false; i = (i + 1) % words.length; setTimeout(type, 500); return; }
        } else {
          typingElement.textContent = currentWord.substring(0, j++);
          if (j > currentWord.length) { isDeleting = true; setTimeout(type, 1500); return; }
        }
        setTimeout(type, isDeleting ? 80 : 150);
      }
      type();
    });

    // ================= SMOOTH SCROLL =================
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId.length > 1) {
          e.preventDefault();
          const target = document.querySelector(targetId);
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // ================= CONTACT FORM VALIDATION =================
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const inputs = form.querySelectorAll("input, textarea");
        let isValid = true;
        inputs.forEach(input => {
          if (input.value.trim() === "") { input.style.borderColor = "red"; isValid = false; }
          else { input.style.borderColor = ""; }
        });
        if (isValid) { alert("Message Sent Successfully ✅"); form.reset(); }
        else { alert("Please fill all fields ❌"); }
      });
    }
