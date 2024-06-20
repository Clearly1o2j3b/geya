function login() {
  var loginId = document.getElementById("login-id").value;
  var loginPassword = document.getElementById("login-password").value;

  if (
    loginId === "kelvinbaidoo03@gmail.com" &&
    loginPassword === "Hulkmode777"
  ) {
    document.querySelector(".login-container").style.display = "none";
    document.querySelector(".container").style.display = "flex";

    // Set student name and ID on dashboard
    document.getElementById("greeting-name").textContent =
      "Kelvin Bright Baidoo";
    document.getElementById("student-name").textContent =
      "Kelvin Bright Baidoo";
    document.getElementById("reg-number").textContent = "2023M4567";
    document.getElementById("student-id-number").textContent = " - 2023M4567";
  } else {
    alert("Invalid Bear ID or Password");
  }
}

function showSection(sectionId) {
  var sections = document.querySelectorAll(".content-section");
  sections.forEach(function (section) {
    section.style.display = "none";
  });
  document.getElementById(sectionId).style.display = "block";

  if (sectionId === "message") {
    var confetti = document.getElementById("confetti-animation");
    confetti.classList.add("active");
    setTimeout(function () {
      confetti.classList.remove("active");
    }, 2000);
  }
}

function registerCourse() {
  var courseCode = document.getElementById("course-code").value;
  var courseTitle = document.getElementById("course-title").value;
  var courseCredit = document.getElementById("course-credit").value;

  if (courseCode && courseTitle && courseCredit) {
    alert(
      "Course registered successfully: " + courseCode + " - " + courseTitle
    );
  } else {
    alert("Please fill out all fields");
  }
}
