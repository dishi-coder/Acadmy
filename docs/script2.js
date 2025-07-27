// script.js

// When user clicks the button on Hero section
document.addEventListener("DOMContentLoaded", function () {
    const exploreButton = document.querySelector(".hero button");

    exploreButton.addEventListener("click", function () {
        // Scroll to the Programs section
        document.getElementById("programs").scrollIntoView({ behavior: "smooth" });
    });
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual form submission
  alert("Thank you! Your message has been received.");
  this.reset(); // clears the form
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
const questions = document.querySelectorAll(".question");

questions.forEach((q) => {
  q.addEventListener("click", () => {
    q.classList.toggle("active");
    q.nextElementSibling.classList.toggle("show");
  });
});

// FAQ functionality
document.querySelectorAll('.faq').forEach(faq => {
  const question = faq.querySelector('.question');
  
  question.addEventListener('click', () => {
    faq.classList.toggle('active');
    
    // Close other FAQs when opening a new one
    if (faq.classList.contains('active')) {
      document.querySelectorAll('.faq').forEach(otherFaq => {
        if (otherFaq !== faq && otherFaq.classList.contains('active')) {
          otherFaq.classList.remove('active');
        }
      });
    }
  });
});
// Example using Swiper.js (add CDN link in head)
const swiper = new Swiper('.testimonial-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = this.querySelector("input[type='email']").value;
  if (!email.includes("@")) {
    alert("Please enter a valid email!");
    return;
  }
  alert("Thank you! We'll contact you soon.");
  this.reset();
});
document.querySelector(".mobile-menu-button").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("mobile-hidden");
});