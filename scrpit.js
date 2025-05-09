// Add the right shape element to the logo shape
document.addEventListener("DOMContentLoaded", function () {
  const logoShape = document.querySelector(".logo-shape");
  const rightShape = document.createElement("div");
  rightShape.className = "right-shape";
  logoShape.appendChild(rightShape);

  // Optional: Add scroll animations or other interactive elements
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".rating-badge, h1, .lead, .btn"
    );
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Initialize elements with opacity 0 and transform for animation
  const elementsToAnimate = document.querySelectorAll(
    ".rating-badge, h1, .lead, .btn"
  );
  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  // Trigger animations
  setTimeout(animateOnScroll, 100);
  window.addEventListener("scroll", animateOnScroll);
});

//Second Part of the code

document.addEventListener("DOMContentLoaded", function () {
  // Add animation to elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      "h1, .lead, .btn, .main-image-container, .blue-circle, .user-avatars"
    );

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("visible");
      }
    });
  };

  // Add CSS classes for animations
  const addAnimationClasses = () => {
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `
        h1, .lead, .btn, .main-image-container, .blue-circle, .user-avatars {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        h1.visible, .lead.visible, .btn.visible, .main-image-container.visible, .blue-circle.visible, .user-avatars.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .main-image-container {
          transition-delay: 0.2s;
        }
        
        .blue-circle {
          transition-delay: 0.4s;
        }
        
        .user-avatars {
          transition-delay: 0.6s;
        }
      `;
    document.head.appendChild(styleSheet);
  };

  // Initialize
  addAnimationClasses();
  setTimeout(animateOnScroll, 100); // Initial check
  window.addEventListener("scroll", animateOnScroll);

  // Make company logos interactive
  const logoItems = document.querySelectorAll(".logo-item");
  logoItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
      this.style.transition = "transform 0.3s ease";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
});

//Services section

document.addEventListener("DOMContentLoaded", function () {
  // Animate elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".services-image-container, .services-rocket-icon, .services-growth-chart, .services-card"
    );

    elements.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (
        !element.classList.contains("visible") &&
        elementTop < window.innerHeight - elementVisible
      ) {
        setTimeout(() => {
          element.classList.add("visible");
        }, index * 100);
      }
    });
  };

  // Add animation CSS dynamically
  const addAnimationClasses = () => {
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `
        .services-image-container,
        .services-rocket-icon,
        .services-growth-chart,
        .services-card {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
  
        .services-image-container.visible,
        .services-rocket-icon.visible,
        .services-growth-chart.visible,
        .services-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
  
        .services-rocket-icon {
          transition-delay: 0.2s;
        }
  
        .services-growth-chart {
          transition-delay: 0.4s;
        }
      `;
    document.head.appendChild(styleSheet);
  };

  // Initialize styles and animation
  addAnimationClasses();
  setTimeout(animateOnScroll, 100); // Initial check

  // Debounced scroll event
  let scrollTimeout;
  window.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(animateOnScroll, 50);
  });

  // Hover effect for service cards
  const serviceCards = document.querySelectorAll(".services-card");
  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "#f0f9ff";
    });

    card.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "#f8f9fa";
    });
  });
});

//Work Section
document.addEventListener("DOMContentLoaded", function () {
  // Add animation to elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".works-company-logo, .works-company-name, .works-industry-tag, .works-case-study-section, .works-case-study-image-container, .works-team-avatars, .works-results-percentage, .works-testimonial-card"
    );

    elements.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        // Add a slight delay for each element
        setTimeout(() => {
          element.classList.add("visible");
        }, index * 100);
      }
    });
  };

  // Add CSS classes for animations
  const addAnimationClasses = () => {
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `
        .works-company-logo, .works-company-name, .works-industry-tag, .works-case-study-section, .works-case-study-image-container, .works-team-avatars, .works-results-percentage, .works-testimonial-card {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .works-company-logo.visible, .works-company-name.visible, .works-industry-tag.visible, .works-case-study-section.visible, .works-case-study-image-container.visible, .works-team-avatars.visible, .works-results-percentage.visible, .works-testimonial-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `;
    document.head.appendChild(styleSheet);
  };

  // Initialize
  addAnimationClasses();
  setTimeout(animateOnScroll, 100); // Initial check
  window.addEventListener("scroll", animateOnScroll);

  // Navigation dots functionality
  const navDots = document.querySelectorAll(".works-nav-dot");
  navDots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      // Remove active class from all dots
      navDots.forEach((d) => d.classList.remove("active"));
      // Add active class to clicked dot
      this.classList.add("active");

      // Here you would typically implement case study switching logic
      console.log(`Switching to case study ${index + 1}`);

      // For demo purposes, we'll just show an alert
      if (index > 0) {
        alert(
          `This would navigate to case study #${
            index + 1
          }. Additional case studies would be implemented in a production environment.`
        );
        // Reset to first dot after alert
        navDots[0].classList.add("active");
        this.classList.remove("active");
      }
    });
  });

  // Counter animation for percentage
  const animateCounter = () => {
    const percentageElement = document.querySelector(".works-percentage");
    const targetValue = 60;
    let currentValue = 0;

    const interval = setInterval(() => {
      if (currentValue >= targetValue) {
        clearInterval(interval);
        return;
      }

      currentValue += 1;
      percentageElement.textContent = `${currentValue}%`;

      if (currentValue === targetValue) {
        clearInterval(interval);
      }
    }, 30);
  };

  // Trigger counter animation when element is in view
  const observePercentage = () => {
    const percentageElement = document.querySelector(".works-percentage");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(percentageElement);
  };

  observePercentage();
});

//Buisness section
document.addEventListener("DOMContentLoaded", function () {
  // Add the right shape element to the logo shape
  const businessLogoShape = document.querySelector(".business-logo-shape");
  const businessRightShape = document.createElement("div");
  businessRightShape.className = "business-right-shape";
  businessLogoShape.appendChild(businessRightShape);

  // Add animation to elements when they come into view
  const animateOnScroll = () => {
    const businessElements = document.querySelectorAll(
      ".business-visual-element, .business-feature-card"
    );

    businessElements.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        // Add a slight delay for each feature card
        setTimeout(() => {
          element.classList.add("visible");
        }, index * 100);
      }
    });
  };

  // Add CSS classes for animations
  const addAnimationClasses = () => {
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `
        .business-visual-element, .business-feature-card {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .business-visual-element.visible, .business-feature-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .business-feature-card:nth-child(1) {
          transition-delay: 0.1s;
        }
        
        .business-feature-card:nth-child(2) {
          transition-delay: 0.2s;
        }
        
        .business-feature-card:nth-child(3) {
          transition-delay: 0.3s;
        }
        
        .business-feature-card:nth-child(4) {
          transition-delay: 0.4s;
        }
      `;
    document.head.appendChild(styleSheet);
  };

  // Initialize
  addAnimationClasses();
  setTimeout(animateOnScroll, 100); // Initial check
  window.addEventListener("scroll", animateOnScroll);

  // Add hover effect to feature cards
  const businessFeatureCards = document.querySelectorAll(
    ".business-feature-card"
  );
  businessFeatureCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".business-icon-wrapper i");
      icon.classList.add("fa-beat");

      // Reset after animation completes
      setTimeout(() => {
        icon.classList.remove("fa-beat");
      }, 1000);
    });
  });

  // Add pulsing effect to team members
  const businessTeamMembers = document.querySelectorAll(
    ".business-team-member"
  );
  businessTeamMembers.forEach((member, index) => {
    // Add staggered animation
    setTimeout(() => {
      member.style.transform = "scale(1.1)";
      member.style.transition = "transform 0.5s ease";

      setTimeout(() => {
        member.style.transform = "scale(1)";
      }, 500);
    }, index * 1000);
  });
});

//Pricing Js

document.addEventListener("DOMContentLoaded", function () {
  // Pricing toggle functionality
  const pricingToggle = document.getElementById("billingSwitch");
  const toggleOptions = document.querySelectorAll(".billing-option");
  const priceElements = document.querySelectorAll(".plan-price");

  // Store original prices
  const originalPrices = [];
  priceElements.forEach((element) => {
    originalPrices.push(parseInt(element.textContent.replace("$", "")));
  });

  // Toggle between monthly and yearly pricing
  pricingToggle.addEventListener("change", function () {
    toggleOptions.forEach((option) => option.classList.toggle("active"));

    const isYearly = this.checked;

    priceElements.forEach((element, index) => {
      let price = originalPrices[index];

      if (isYearly) {
        // Apply 15% discount for yearly billing
        price = Math.round(price * 0.85);
        element.innerHTML = `$${price}<span class="period">/mo</span>`;
      } else {
        element.innerHTML = `$${price}<span class="period">/mo</span>`;
      }
    });
  });

  // Add animation to pricing cards
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".plan-card");

    elements.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        // Add a slight delay for each card
        setTimeout(() => {
          element.classList.add("visible");
        }, index * 100);
      }
    });
  };

  // Add CSS classes for animations
  const addAnimationClasses = () => {
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `
        .plan-card {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
  
        .plan-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
  
        .plan-card:nth-child(1) {
          transition-delay: 0.1s;
        }
  
        .plan-card:nth-child(2) {
          transition-delay: 0.2s;
        }
  
        .plan-card:nth-child(3) {
          transition-delay: 0.3s;
        }
      `;
    document.head.appendChild(styleSheet);
  };

  // Initialize animations
  addAnimationClasses();
  setTimeout(animateOnScroll, 100); // Initial check
  window.addEventListener("scroll", animateOnScroll);

  // Add hover effect to feature list items
  const featureItems = document.querySelectorAll(".features-list li");
  featureItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const icon = this.querySelector("i");
      if (icon) {
        icon.classList.add("fa-beat");
        setTimeout(() => {
          icon.classList.remove("fa-beat");
        }, 1000);
      }
    });
  });

  // Add pulse effect to buttons on hover
  const buttons = document.querySelectorAll(".action-btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.classList.add("pulse");
    });

    button.addEventListener("animationend", function () {
      this.classList.remove("pulse");
    });
  });

  // Add pulse animation
  const pulseAnimation = document.createElement("style");
  pulseAnimation.innerHTML = `
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
        100% {
          transform: scale(1);
        }
      }
  
      .pulse {
        animation: pulse 0.5s ease-in-out;
      }
    `;
  document.head.appendChild(pulseAnimation);
});

//Contact section
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const fullName = document.getElementById("fullName").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      const privacyPolicy = document.getElementById("privacyPolicy").checked;

      if (!fullName || !email || !message || !privacyPolicy) {
        alert(
          "Please fill in all required fields and accept the privacy policy."
        );
        return;
      }

      // Simulated success
      alert("Thank you for contacting us! We’ll get back to you soon.");
      contactForm.reset();
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Add animation to elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".faq-header, .accordion-item");

    elements.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        // Add a slight delay for each accordion item
        setTimeout(() => {
          element.classList.add("visible");
        }, index * 100);
      }
    });
  };

  // Add CSS classes for animations
  const addAnimationClasses = () => {
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `
        .faq-header, .accordion-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .faq-header.visible, .accordion-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .accordion-item:nth-child(1) {
          transition-delay: 0.1s;
        }
        
        .accordion-item:nth-child(2) {
          transition-delay: 0.2s;
        }
        
        .accordion-item:nth-child(3) {
          transition-delay: 0.3s;
        }
        
        .accordion-item:nth-child(4) {
          transition-delay: 0.4s;
        }
        
        .accordion-item:nth-child(5) {
          transition-delay: 0.5s;
        }
        
        .accordion-item:nth-child(6) {
          transition-delay: 0.6s;
        }
      `;
    document.head.appendChild(styleSheet);
  };

  // Initialize animations
  addAnimationClasses();
  setTimeout(animateOnScroll, 100); // Initial check
  window.addEventListener("scroll", animateOnScroll);

  // Add smooth height transition to accordion
  const accordionTransition = document.createElement("style");
  accordionTransition.innerHTML = `
      .accordion-collapse {
        transition: height 0.3s ease;
      }
    `;
  document.head.appendChild(accordionTransition);

  // Track which accordion items have been opened
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach((item) => {
    const button = item.querySelector(".accordion-button");
    const collapse = item.querySelector(".accordion-collapse");

    collapse.addEventListener("shown.bs.collapse", function () {
      item.classList.add("has-been-opened");
    });
  });

  // Add hover effect to accordion buttons
  const accordionButtons = document.querySelectorAll(".accordion-button");
  accordionButtons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      if (this.classList.contains("collapsed")) {
        this.style.backgroundColor = "#f8f9fa";
      }
    });

    button.addEventListener("mouseleave", function () {
      if (this.classList.contains("collapsed")) {
        this.style.backgroundColor = "#fff";
      }
    });
  });
});

//fotter

document.addEventListener("DOMContentLoaded", function () {
  // Newsletter form submission
  const newsletterForm = document.getElementById("fotterNewsletterForm");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (!email) {
        showToast("Please enter your email address.", "error");
        return;
      }

      if (!isValidEmail(email)) {
        showToast("Please enter a valid email address.", "error");
        return;
      }

      // Simulate form submission
      const submitBtn = this.querySelector(".fotter-btn-submit");
      const originalText = submitBtn.textContent;

      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";

      // Simulate API call
      setTimeout(() => {
        showToast("Thank you for subscribing to our newsletter!", "success");
        emailInput.value = "";
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }, 1500);
    });
  }

  // Email validation helper
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Toast notification helper
  function showToast(message, type) {
    // Create toast container if it doesn't exist
    let toastContainer = document.querySelector(".fotter-toast-container");

    if (!toastContainer) {
      toastContainer = document.createElement("div");
      toastContainer.className =
        "fotter-toast-container position-fixed bottom-0 end-0 p-3";
      document.body.appendChild(toastContainer);
    }

    // Create toast element
    const toastEl = document.createElement("div");
    toastEl.className = `toast align-items-center text-white bg-${
      type === "success" ? "success" : "danger"
    } border-0`;
    toastEl.setAttribute("role", "alert");
    toastEl.setAttribute("aria-live", "assertive");
    toastEl.setAttribute("aria-atomic", "true");

    toastEl.innerHTML = `
          <div class="d-flex">
            <div class="toast-body">
              ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        `;

    toastContainer.appendChild(toastEl);

    // Initialize and show toast
    const toast = new bootstrap.Toast(toastEl, {
      autohide: true,
      delay: 5000,
    });

    toast.show();

    // Remove toast after it's hidden
    toastEl.addEventListener("hidden.bs.toast", function () {
      toastEl.remove();
    });
  }

  // Add hover effect to footer links
  const footerLinks = document.querySelectorAll(".fotter-links a");
  footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(5px)";
      this.style.transition = "transform 0.3s ease";
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)";
    });
  });

  // Add CSS for toast notifications
  const toastStyles = document.createElement("style");
  toastStyles.innerHTML = `
        .fotter-toast-container {
          z-index: 1100;
        }
  
        .toast {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
  
        .toast.show {
          opacity: 1;
        }
      `;
  document.head.appendChild(toastStyles);
});

let index = 0;
const reviewEl = document.getElementById("company-review");
const nameEl = reviewEl.querySelector(".company-name");
const textEl = reviewEl.querySelector(".review-text");

function showNextReview() {
  const { company, text } = reviews[index];
  nameEl.textContent = company;
  textEl.textContent = `"${text}"`;
  reviewEl.style.display = "block";
  reviewEl.classList.remove("fade-in");
  void reviewEl.offsetWidth;
  reviewEl.classList.add("fade-in");
  index = (index + 1) % reviews.length;
}

setInterval(showNextReview, 2000);

document
  .querySelectorAll(".animate-on-scroll")
  .forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.getElementById(
    "fottersection-newsletterForm"
  );

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (!email) {
        showToast("Please enter your email address.", "error");
        return;
      }

      if (!isValidEmail(email)) {
        showToast("Please enter a valid email address.", "error");
        return;
      }

      const submitBtn = this.querySelector(".fottersection-submit-btn");
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";

      setTimeout(() => {
        showToast("Thank you for subscribing to our newsletter!", "success");
        emailInput.value = "";
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }, 1500);
    });
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showToast(message, type) {
    let toastContainer = document.querySelector(
      ".fottersection-toast-container"
    );
    if (!toastContainer) {
      toastContainer = document.createElement("div");
      toastContainer.className =
        "fottersection-toast-container position-fixed bottom-0 end-0 p-3";
      document.body.appendChild(toastContainer);
    }

    const toastEl = document.createElement("div");
    toastEl.className = `toast align-items-center text-white bg-${
      type === "success" ? "success" : "danger"
    } border-0`;
    toastEl.setAttribute("role", "alert");
    toastEl.setAttribute("aria-live", "assertive");
    toastEl.setAttribute("aria-atomic", "true");

    toastEl.innerHTML = `
        <div class="d-flex">
          <div class="toast-body">${message}</div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      `;

    toastContainer.appendChild(toastEl);

    const toast = new bootstrap.Toast(toastEl, { autohide: true, delay: 5000 });
    toast.show();

    toastEl.addEventListener("hidden.bs.toast", () => toastEl.remove());
  }
});

(() => {
  const topBtn = document.getElementById("backTop");
  if (!topBtn) return;

  window.addEventListener("scroll", () => {
    topBtn.classList.toggle("d-none", window.scrollY < 400);
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

(() => {
  // 1. split into individual characters (and keep spaces intact)
  const split = new SplitType(".hero-title", { types: "chars" });

  // 2. register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // 3. animation timeline
  gsap.from(split.chars, {
    y: 120, // rise up
    rotateX: -90, // flip from back‑face
    opacity: 0,
    transformOrigin: "50% 100%",
    ease: "back.out(1.7)",
    stagger: 0.04, // delay between characters
    duration: 1.1,
    scrollTrigger: {
      trigger: ".hero-title",
      start: "top 80%", // adjusts when the animation begins
      once: true, // play only the first time
    },
  });
})();

AOS.init({
  duration: 1000, // animation duration
  once: true, // whether animation should happen only once
});
(function () {
  const vid = document.getElementById("featureVideo");
  if (!vid) return;

  vid.addEventListener("click", () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (vid.requestFullscreen) {
      vid.requestFullscreen();
    } else if (vid.webkitRequestFullscreen) {
      /* Safari */
      vid.webkitRequestFullscreen();
    } else if (vid.msRequestFullscreen) {
      /* IE11 */
      vid.msRequestFullscreen();
    }
  });
})();
