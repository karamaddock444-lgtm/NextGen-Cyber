//      --------
//      Task 2
//      --------

// No Empty Fields
function validateForm(event) {
  event.preventDefault(); 

  let firstname = document.getElementById("firstname").value.trim();
  let lastname = document.getElementById("lastname").value.trim();
  let email = document.getElementById("email").value.trim();
  let workshop = document.getElementById("workshop").value.trim();


  let namePattern = /^[A-Za-z]+$/; 
  let emailPattern = /^[^ ]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/; 

  // Name, Surname & Email Validation
  if (firstname === "" || lastname === "" || email === "") {
    alert("⚠️ All fields must be filled in!");
    return;
  }

  if (!namePattern.test(firstname)) {
    alert("❌ First Name must contain only letters.");
    return;
  }

  if (!namePattern.test(lastname)) {
    alert("❌ Last Name must contain only letters.");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("❌ Please enter a valid email address.");
    return;
  }

  // Successful validation
  let modal = document.getElementById("confirmationModal");
  let message = document.getElementById("confirmationMessage");
  message.textContent = "You have successfully registered for the " + workshop + " workshop!";
  modal.style.display = "block";

   document.getElementById("myForm").reset();

    // Confetti
   showConfetti();

// Close Modal
  document.querySelector(".close").onclick = function() {
  document.getElementById("confirmationModal").style.display = "none";
}

// Add Confetti Animation
function showConfetti() {

  
  confetti({
    particleCount: 80,
    angle: 60,
    spread: 55,
    origin: { x: 0 }
  });

  
  confetti({
    particleCount: 80,
    angle: 120,
    spread: 55,
    origin: { x: 1 }
  });
}
}
//      -----------------------
//      Homepage Cookies Popup
//      -----------------------

document.addEventListener("DOMContentLoaded", function() {
  const popup = document.getElementById("cookiesPopup");
  const acceptBtn = document.getElementById("acceptCookies");
  const declineBtn = document.getElementById("declineCookies");

  function closePopup() {
    popup.classList.add("fade-out"); 
    setTimeout(() => {
      popup.style.display = "none"; 
    }, 600); 
  }

  acceptBtn.onclick = closePopup;
  declineBtn.onclick = closePopup;
});

 //      -------------------------
//      Workshop Page modal popup
//      --------------------------

  
document.addEventListener("DOMContentLoaded", function() {
  const workshops = document.querySelectorAll(".workshop");
  const modals = document.querySelectorAll(".modal");
  const overlay = document.getElementById("modalOverlay");

  // Open Workshop Details
  workshops.forEach(workshop => {
    workshop.addEventListener("click", function() {
      const modalId = workshop.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      modal.style.display = "block";
      overlay.style.display = "block";
    });
  });

  // Close Workshop Details
  const closeButtons = document.querySelectorAll(".modal .close");
  closeButtons.forEach(btn => {
    btn.addEventListener("click", function() {
      const modal = btn.closest(".modal");
      modal.style.display = "none";
      overlay.style.display = "none";
    });
  });

  overlay.addEventListener("click", function() {
    modals.forEach(modal => {
      modal.style.display = "none";
    });
    overlay.style.display = "none";
  });
});


//      --------
//      Task 3
//      --------

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".navbar"); // Or target your .nav-links container depending on your CSS

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !isExpanded);
      
      // Toggle an active class to show/hide navigation on mobile
      navLinks.classList.toggle("nav-active");
    });
  }
});

