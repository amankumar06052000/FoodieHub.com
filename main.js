tailwind.config = {
    darkMode: 'class'
  }
// ================= MOBILE MENU =================
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
}

// ================= MOBILE DROPDOWN =================
function toggleDropdown() {
  const dropdown = document.getElementById("mobileDropdown");
  if (dropdown) {
    dropdown.classList.toggle("hidden");
  }
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

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    if (icon) icon.textContent = "☀️";
  } else {
    document.documentElement.classList.remove("dark");
    if (icon) icon.textContent = "🌙";
  }
});

// ================= SMOOTH SCROLL =================
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId.length > 1) {
      e.preventDefault();
      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
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
      if (input.value.trim() === "") {
        input.style.borderColor = "red";
        isValid = false;
      } else {
        input.style.borderColor = "";
      }
    });

    if (isValid) {
      alert("Message Sent Successfully ✅");
      form.reset();
    } else {
      alert("Please fill all fields ❌");
    }
  });
}