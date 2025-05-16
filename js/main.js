// Main JavaScript functionality

// Statistics counter animation
document.addEventListener('DOMContentLoaded', () => {
  // Counter animation for statistics section
  const counters = document.querySelectorAll('.counter');
  const speed = 200; // The lower the slower
  
  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      
      // Lower increment to slow down the animation
      const inc = target / speed;
      
      // Check if target is reached
      if (count < target) {
        // Add inc to count and output in counter
        counter.innerText = Math.ceil(count + inc);
        // Call function every ms
        setTimeout(() => animateCounters(), 1);
      } else {
        counter.innerText = target;
      }
    });
  };
  
  // Intersection Observer to start counter when visible
  const statisticsSection = document.querySelector('.statistics');
  
  if (statisticsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(statisticsSection);
  }
  
  // Smooth scroll behavior for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// Form validation (if needed)
const validateForm = (formElement) => {
  const inputs = formElement.querySelectorAll('input, textarea');
  let isValid = true;
  
  inputs.forEach(input => {
    if (input.hasAttribute('required') && !input.value.trim()) {
      isValid = false;
      // Add error class or message
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
    
    // Email validation
    if (input.type === 'email' && input.value.trim()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(input.value)) {
        isValid = false;
        input.classList.add('error');
      }
    }
  });
  
  return isValid;
};

// Add event listeners to forms
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (validateForm(form)) {
        // Submit form or show success message
        console.log('Form submitted successfully!');
        // form.submit();
      } else {
        console.log('Please fill in all required fields correctly.');
      }
    });
  });
});