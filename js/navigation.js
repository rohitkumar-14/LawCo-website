document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector("#navbar");

  if (hamburger && navbar) {
    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !navbar.contains(e.target) &&
        !hamburger.contains(e.target) &&
        navbar.classList.contains("active")
      ) {
        navbar.classList.remove("active");
      }
    });
  }

  // Sticky header behavior with color change
  const header = document.querySelector(".header");
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    lastScrollTop = scrollTop;
  });

  // User profile dropdown (if needed)
  const userProfile = document.querySelector(".user-profile");
  const userDropdown = document.querySelector(".user-dropdown");

  if (userProfile && userDropdown) {
    userProfile.addEventListener("click", (e) => {
      e.stopPropagation();
      userDropdown.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (userDropdown && !userProfile.contains(e.target)) {
        userDropdown.classList.remove("active");
      }
    });
  }

  // Update active link based on scroll position
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (sections.length && navLinks.length) {
    window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });
  }
});
