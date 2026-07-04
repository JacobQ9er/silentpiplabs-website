// SilentPip Labs — shared site JS

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector("nav.main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // Slipstream / waitlist email capture — TODO: wire to real storage
  // (Google Sheet via Zapier, Mailchimp, ConvertKit, etc.)
  // For now this just confirms in-browser so the form works day one.
  var waitlistForms = document.querySelectorAll("[data-waitlist-form]");
  waitlistForms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var emailInput = form.querySelector("input[type=email]");
      var msg = form.querySelector("[data-form-msg]");
      if (emailInput && emailInput.value) {
        // TODO: replace with real submission (mailto fallback shown below)
        window.location.href =
          "mailto:jacobq.larson@gmail.com?subject=Slipstream%20Waitlist&body=Add%20me%20to%20the%20Slipstream%20waitlist%3A%20" +
          encodeURIComponent(emailInput.value);
        if (msg) {
          msg.textContent = "Opening your email client to confirm — send it and you're on the list.";
          msg.style.display = "block";
        }
      }
    });
  });

  // Contact form — mailto fallback until a real backend/form service is wired up
  var contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = contactForm.querySelector("[name=name]").value;
      var email = contactForm.querySelector("[name=email]").value;
      var message = contactForm.querySelector("[name=message]").value;
      var subject = "New message from " + name + " via SilentPipLabs.com";
      var body = message + "\n\nReply to: " + email;
      window.location.href =
        "mailto:jacobq.larson@gmail.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
    });
  }
});
