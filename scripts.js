function login() {
  var loginId = document.getElementById("login-id").value;
  var loginPassword = document.getElementById("login-password").value;

  if (
    loginId === "kelvinbaidoo03@gmail.com" &&
    loginPassword === "Hulkmode777"
  ) {
    document.querySelector(".login-container").style.display = "none";
    document.querySelector(".container").style.display = "flex";

    document.getElementById("greeting-name").textContent =
      "Kelvin Bright Baidoo";
    document.getElementById("student-name").textContent =
      "Kelvin Bright Baidoo";
    document.getElementById("reg-number").textContent = "2023M4567";
    document.getElementById("student-id-number").textContent = " - 2023M4567";

    showSection("dashboard"); // Activate Dashboard after login
  } else {
    alert("Invalid Bear ID or Password");
  }
}

function showSection(sectionId) {
  const sections = document.querySelectorAll(".content-section");
  const navLinks = document.querySelectorAll(".sidebar ul li a");

  sections.forEach((section) => {
    section.style.display = "none";
    section.style.animation = "none";
    section.style.transform = "";
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  const selectedSection = document.getElementById(sectionId);
  const selectedNavLink = document.querySelector(
    `.sidebar ul li a[onclick="showSection('${sectionId}')"]`
  );

  if (selectedSection) {
    selectedSection.style.display = "block";
    selectedSection.style.animation = "slideIn 0.5s ease-in-out forwards";
    selectedSection.style.transform = "translateY(-10px)";
  }

  if (selectedNavLink) {
    selectedNavLink.classList.add("active");
  }

  const participatingSchoolsDiv = document.getElementById(
    "participating-schools"
  );
  if (participatingSchoolsDiv) {
    if (sectionId === "competition-registration") {
      participatingSchoolsDiv.style.display = "block";
      participatingSchoolsDiv.style.animation =
        "slideIn 0.5s ease-in-out forwards";
      participatingSchoolsDiv.style.transform = "translateY(-10px)";
    } else {
      participatingSchoolsDiv.style.display = "none";
      participatingSchoolsDiv.style.animation = "none";
      participatingSchoolsDiv.style.transform = "";
    }
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

const schools = [
  "Baylor College of Medicine",
  "Harvard Medical School",
  "Stanford University School of Medicine",
  "Johns Hopkins University School of Medicine",
  "University of California, San Francisco, School of Medicine",
  "Yale School of Medicine",
  "University of Pennsylvania School of Medicine",
  "Columbia University Vagelos College of Physicians and Surgeons",
  "University of California, Los Angeles, David Geffen School of Medicine",
  "University of California, San Diego School of Medicine",
  "University of Washington School of Medicine",
  "University of Michigan Medical School",
  "Duke University School of Medicine",
  "University of California, Berkeley-UCSF Joint Medical Program",
  "Washington University School of Medicine in St. Louis",
  "Cornell University Weill Cornell Medical College",
  "Northwestern University Feinberg School of Medicine",
  "University of Texas Southwestern Medical Center",
  "University of Pittsburgh School of Medicine",
  "Mayo Clinic Alix School of Medicine",
  "New York University Grossman School of Medicine",
  "Vanderbilt University School of Medicine",
  "University of Colorado School of Medicine",
  "University of Chicago Pritzker School of Medicine",
  "University of Southern California Keck School of Medicine",
  "University of Rochester School of Medicine and Dentistry",
  "Oregon Health & Science University School of Medicine",
  "Case Western Reserve University School of Medicine",
  "Boston University School of Medicine",
  "Emory University School of Medicine",
  "University of Maryland School of Medicine",
  "University of Minnesota Medical School",
  "Ohio State University College of Medicine",
  "University of Iowa Carver College of Medicine",
  "Indiana University School of Medicine"
];

function showParticipatingSchools() {
  let participatingSchoolsDiv = document.getElementById(
    "participating-schools"
  );
  if (!participatingSchoolsDiv) {
    participatingSchoolsDiv = document.createElement("div");
    participatingSchoolsDiv.id = "participating-schools";
    document
      .getElementById("competition-registration")
      .appendChild(participatingSchoolsDiv);
  }

  let schoolsList = document.createElement("ul");
  schoolsList.id = "schools-list";
  participatingSchoolsDiv.innerHTML = ""; // Clear previous list content
  participatingSchoolsDiv.appendChild(schoolsList);

  schools.forEach((school) => {
    const listItem = document.createElement("li");
    listItem.textContent = school;
    schoolsList.appendChild(listItem);
  });

  participatingSchoolsDiv.style.display = "block";

  // Add ripple effect listener:
  addRippleEffectListener(schoolsList);
}

function registerForCompetition() {
  const name = document.getElementById("competition-name").value;
  const school = document.getElementById("competition-school").value;
  const schoolId = document.getElementById("competition-id").value;

  const messageDiv = document.getElementById("registration-message");

  if (name && school && schoolId) {
    messageDiv.textContent = "Registration successful!";
    messageDiv.style.color = "green";
  } else {
    messageDiv.textContent = "Please fill in all fields.";
    messageDiv.style.color = "red";
  }
}

const schoolsListInitial = document.getElementById("schools-list");
if (schoolsListInitial) {
  addRippleEffectListener(schoolsListInitial);
}

function addRippleEffectListener(schoolsList) {
  schoolsList.addEventListener("click", function (e) {
    if (e.target && e.target.nodeName === "LI") {
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      e.target.appendChild(ripple);

      ripple.addEventListener("animationend", () => {
        e.target.removeChild(ripple);
      });
    }
  });
}

// Remove the initial ripple listener and only use it inside showParticipatingSchools
document
  .getElementById("competition-registration")
  .addEventListener("click", function (event) {
    if (event.target.textContent === "Participating Schools") {
      showParticipatingSchools(); //Call the function directly
    }
  });
