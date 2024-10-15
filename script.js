// Ensure the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the dropdown button and the dropdown content
  const dropdown = document.querySelector(".dropdown");
  const dropdownContent = document.querySelector(".dropdown-content");

  // Toggle the dropdown content when clicking on the dropdown button
  dropdown.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    dropdownContent.classList.toggle("show");
  });

  // Close the dropdown menu if the user clicks outside of it
  window.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      dropdownContent.classList.remove("show");
    }
  });
});
/////
// **CHANGED**: Ensure the About section is initially hidden
document.addEventListener("DOMContentLoaded", function () {
  // Hide the About section initially
  const aboutSection = document.getElementById("about");
  aboutSection.classList.add("hidden");
});
/////
// **CHANGED**: Smooth scroll and reveal Explore section
document.addEventListener("DOMContentLoaded", function () {
  const exploreLink = document.querySelector(".nav-links .dropdown .dropbtn"); // Adjust selector if needed
  const exploreSection = document.getElementById("explore");

  // Function to smoothly scroll to the explore section and show it
  function showAndScrollToExplore(event) {
    event.preventDefault(); // Prevent default link behavior

    // Remove hidden class or ensure the section is visible
    exploreSection.classList.add("show-explore");

    // Smoothly scroll to the Explore section
    const headerOffset = 80; // Adjust based on your header height
    const elementPosition =
      exploreSection.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  // Add click event listener to the Explore link
  exploreLink.addEventListener("click", showAndScrollToExplore);
});
////
// **CHANGED**: Toggle visibility of About section when clicked
// Function to show and scroll to the About section
function showAboutSection() {
  // Remove the hidden class to reveal the About section
  document.getElementById("about").classList.remove("hidden");

  // Smoothly scroll to the About section
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

// Add click event listener to the About link
document
  .querySelector('a[href="#about"]')
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    showAboutSection();
  });

/////
document.addEventListener("DOMContentLoaded", () => {
  // Add animations to explore cards
  const exploreCards = document.querySelectorAll(".explore-card");

  exploreCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
      card.style.transition = "transform 0.3s ease";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Get the explore button and the explore section
  const exploreBtn = document.querySelector(".explore-btn");
  const exploreSection = document.getElementById("explore");

  // Function to smoothly scroll to the explore section
  function scrollToExploreSection(event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Smoothly scroll to the Explore section
    exploreSection.scrollIntoView({ behavior: "smooth" });
  }

  // Add click event listener to the Explore button
  exploreBtn.addEventListener("click", scrollToExploreSection);
});

// Sign up
document.addEventListener("DOMContentLoaded", function () {
  // Example: Check if user is logged in (replace with actual logic)
  const isLoggedIn = false; // Change this based on actual authentication state

  if (isLoggedIn) {
    // User is logged in, hide the Sign Up link and show Profile/Log Out links
    document.getElementById("signup-link-container").classList.add("hidden");
    document.getElementById("login-link-container").classList.add("hidden");
    document
      .getElementById("profile-link-container")
      .classList.remove("hidden");
    document.getElementById("logout-link-container").classList.remove("hidden");
  } else {
    // User is not logged in, show the Sign Up link and hide Profile/Log Out links
    document.getElementById("signup-link-container").classList.remove("hidden");
    document.getElementById("login-link-container").classList.remove("hidden");
    document.getElementById("profile-link-container").classList.add("hidden");
    document.getElementById("logout-link-container").classList.add("hidden");
  }
});