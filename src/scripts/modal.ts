// Centralized modal management script
// Handles Contact and Auth modals

function initModals() {
  // Get modal elements
  const contactModal = document.getElementById("contact-popup");
  const authModal = document.getElementById("auth-modal");

  // Get trigger buttons
  const ctaBtn = document.getElementById("cta-btn"); // Hero Play Now button
  const signinButton = document.getElementById("signin-btn");
  const signupButton = document.getElementById("signup-btn");

  // Get all box cards
  const boxCards = document.querySelectorAll("[data-box-card]");

  // Get close buttons
  const contactClose = document.getElementById("close-popup");
  const authClose = document.getElementById("auth-close");

  // Get overlays
  const contactOverlay = contactModal;
  const authOverlay = document.getElementById("auth-overlay");

  // Get auth tabs
  const signinTab = document.getElementById("signin-tab");
  const signupTab = document.getElementById("signup-tab");
  const signinContent = document.getElementById("signin-content");
  const signupContent = document.getElementById("signup-content");

  // Track current active modal
  let activeModal: HTMLElement | null = null;
  let selectedBoxSlug: string | null = null;

  // Check if user has already submitted the form
  const hasSubmittedForm = localStorage.getItem("hasSubmittedForm") === "true";

  // Open modal function
  const openModal = (modal: HTMLElement | null) => {
    if (!modal) return;

    // Close any currently open modal first
    closeAllModals();

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    activeModal = modal;
  };

  // Close modal function
  const closeModal = (modal: HTMLElement | null) => {
    if (!modal) return;

    modal.classList.remove("active");
    document.body.style.overflow = "auto";

    if (activeModal === modal) {
      activeModal = null;
    }
  };

  // Close all modals
  const closeAllModals = () => {
    contactModal?.classList.remove("active", "flex");
    contactModal?.classList.add("hidden");
    authModal?.classList.remove("active");
    document.body.style.overflow = "auto";
    activeModal = null;
  };

  // Switch auth tabs
  const switchTab = (tabName: string) => {
    if (tabName === "signin") {
      signinTab?.classList.add("active");
      signupTab?.classList.remove("active");
      signinContent?.classList.add("active");
      signupContent?.classList.remove("active");
    } else {
      signupTab?.classList.add("active");
      signinTab?.classList.remove("active");
      signupContent?.classList.add("active");
      signinContent?.classList.remove("active");
    }
  };

  // Hero Play Now Button -> Contact Modal or redirect to box page
  ctaBtn?.addEventListener("click", () => {
    // If user already submitted, go directly to box page
    if (hasSubmittedForm) {
      const boxSlug =
        localStorage.getItem("selectedBoxSlug") || "cocos-treasure";
      window.location.href = `/box/${boxSlug}`;
      return;
    }

    // Set default box slug for hero CTA
    selectedBoxSlug = "cocos-treasure";
    localStorage.setItem("selectedBoxSlug", selectedBoxSlug);

    if (contactModal) {
      contactModal.classList.remove("hidden");
      contactModal.classList.add("flex", "active");
      document.body.style.overflow = "hidden";
      activeModal = contactModal;
    }
  });

  // Box Cards -> Contact Modal or redirect to box page
  boxCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Get the box slug from the card's data-box-slug attribute
      const boxSlug = card.getAttribute("data-box-slug");
      if (boxSlug) {
        selectedBoxSlug = boxSlug;
        // Store in localStorage
        localStorage.setItem("selectedBoxSlug", selectedBoxSlug);
      }

      // If user already submitted, go directly to box page
      if (hasSubmittedForm) {
        window.location.href = `/box/${boxSlug}`;
        return;
      }

      if (contactModal) {
        contactModal.classList.remove("hidden");
        contactModal.classList.add("flex", "active");
        document.body.style.overflow = "hidden";
        activeModal = contactModal;
      }
    });
  });

  // Header Sign In Button -> Auth Modal (Sign In Tab)
  signinButton?.addEventListener("click", (e) => {
    e.preventDefault();
    switchTab("signin");
    openModal(authModal);
  });

  // Header Sign Up Button -> Auth Modal (Sign Up Tab)
  signupButton?.addEventListener("click", (e) => {
    e.preventDefault();
    switchTab("signup");
    openModal(authModal);
  });

  // Auth tab switching
  signinTab?.addEventListener("click", () => switchTab("signin"));
  signupTab?.addEventListener("click", () => switchTab("signup"));

  // Close button handlers
  contactClose?.addEventListener("click", () => {
    if (contactModal) {
      contactModal.classList.add("hidden");
      contactModal.classList.remove("flex", "active");
      document.body.style.overflow = "auto";
      activeModal = null;
    }
  });

  authClose?.addEventListener("click", () => closeModal(authModal));

  // Close on overlay click
  authOverlay?.addEventListener("click", () => closeModal(authModal));

  contactOverlay?.addEventListener("click", (e) => {
    if (e.target === contactOverlay) {
      contactOverlay.classList.add("hidden");
      contactOverlay.classList.remove("flex", "active");
      document.body.style.overflow = "auto";
      activeModal = null;
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && activeModal) {
      closeAllModals();
    }
  });

  // Form submission handlers (prevent default for now)
  const signinForm = document.getElementById("signin-form");
  const signupForm = document.getElementById("signup-form");
  const contactForm = document.getElementById("contact-form");

  signinForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    // Add your sign in logic here
  });

  signupForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    // Add your sign up logic here
  });

  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const userData = {
      email: formData.get("email"),
      submittedAt: new Date().toISOString(),
    };

    // Store user data in localStorage
    try {
      localStorage.setItem("fortuneBoxUser", JSON.stringify(userData));
      localStorage.setItem("hasSubmittedForm", "true");
    } catch (error) {
      console.error("Error storing in localStorage:", error);
      return; // Don't redirect if storage failed
    }

    // Get the selected box slug
    const boxSlug = localStorage.getItem("selectedBoxSlug") || "cocos-treasure";

    // Redirect to box page
    window.location.href = `/box/${boxSlug}`;
  });

  // Password toggle functionality
  const passwordToggles = document.querySelectorAll(".password-toggle");
  passwordToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const input = toggle.previousElementSibling as HTMLInputElement;
      if (input) {
        input.type = input.type === "password" ? "text" : "password";
      }
    });
  });
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initModals);
} else {
  initModals();
}
