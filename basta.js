// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  /* ===== Back to Top Button ===== */
  const backToTopBtn = document.querySelector(".back-to-top-btn");

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "flex";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ===== Login & Signup Form Handling ===== */
  const loginForm = document.querySelector("#loginForm");
  const signupForm = document.querySelector("#signupForm");
  const signedUpMessage = document.querySelector(".signedup");
  const switchToSignup = document.querySelector("#switchToSignup");
  const switchToLogin = document.querySelector("#switchToLogin");

  // Show Signup Form
  if (switchToSignup) {
    switchToSignup.addEventListener("click", () => {
      if (loginForm) loginForm.style.display = "none";
      if (signupForm) signupForm.style.display = "block";
      if (signedUpMessage) signedUpMessage.style.display = "none";
    });
  }

  // Show Login Form
  if (switchToLogin) {
    switchToLogin.addEventListener("click", () => {
      if (signupForm) signupForm.style.display = "none";
      if (loginForm) loginForm.style.display = "block";
      if (signedUpMessage) signedUpMessage.style.display = "none";
    });
  }

  // Signup Form Submission
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = signupForm.querySelector("input[name='email']").value.trim();
      const password = signupForm.querySelector("input[name='password']").value.trim();
      const confirmPassword = signupForm.querySelector("input[name='confirm_password']").value.trim();

      // Basic Validation
      if (!email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      // Show success message
      if (signedUpMessage) signedUpMessage.style.display = "block";

      // Reset form
      signupForm.reset();
    });
  }

  // Login Form Submission
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = loginForm.querySelector("input[name='email']").value.trim();
      const password = loginForm.querySelector("input[name='password']").value.trim();

      if (!email || !password) {
        alert("Please fill in all fields.");
        return;
      }

      // Demo login success
      alert("Login successful! (Demo only)");
      loginForm.reset();
    });
  }

  /* ===== Social Login Buttons ===== */
  const socialButtons = document.querySelectorAll(".social-btn");
  socialButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert(`Logging in with ${btn.textContent.trim()}`);
    });
  });

});
