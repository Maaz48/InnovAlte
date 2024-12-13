let section3 = document.getElementById("section-3");
let currentSection = 1;
const sections = document.querySelectorAll(".section");
const totalSections = sections.length;

const logo = document.getElementById("logo");
const sectionHeading = document.getElementById("sectionHeading");

// Ensure the page loads at the first section
window.onload = () => {
  scrollToSection(currentSection);
  //   updateNavbar(currentSection);
};

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    // Scroll Down
    if (currentSection < totalSections) {
      currentSection++;
    }
  } else {
    // Scroll Up
    if (currentSection > 1) {
      currentSection--;
    }
  }

  //   updateNavbar(currentSection);
  //   scrollToSection(currentSection);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && currentSection > 1) {
    currentSection--;
    // updateNavbar(currentSection);
    scrollToSection(currentSection);
  } else if (e.key === "ArrowDown" && currentSection < totalSections) {
    currentSection++;
    // updateNavbar(currentSection);
    scrollToSection(currentSection);
  }
});

function scrollToSection(section) {
  const sectionElement = document.getElementById(`section-${section}`);
  const offset = sectionElement.offsetTop;

  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
}

function updateNavbar(section) {
  const sectionElement = document.getElementById(`section-${section}`);
  const heading = sectionElement.querySelector("h2").innerText;

  sectionHeading.innerText = heading;

  if (section === 1) {
    logo.style.transform = "translateX(0%)"; // Logo at center when on Section 1
  } else {
    logo.style.transform = "translateX(50%)"; // Logo moves left when scrolling
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".background-text");
  const text = "InnovAlte"; // Change this text as per your requirement
  let index = 0;

  function typeText() {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, 500); // Adjust typing speed here
    }
  }

  typeText();
});



