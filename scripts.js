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

  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = "block"; // Show the selected section
    selectedSection.classList.add("active"); // Add 'active' class
  }

  const participatingSchoolsDiv = document.getElementById(
    "participating-schools"
  );
  if (participatingSchoolsDiv && sectionId !== "competition-registration") {
    participatingSchoolsDiv.style.display = "none";
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
  "Baylor College of Medicine", // Added Baylor
  "Harvard Medical School",
  "Stanford University School of Medicine",
  "Johns Hopkins University School of Medicine",
  "University of California, San Francisco, School of Medicine",
  // ... (Add other 80 medical schools here) ...
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
  // 1. Get the div.  Create it if it doesn't exist.
  let participatingSchoolsDiv = document.getElementById(
    "participating-schools"
  );
  if (!participatingSchoolsDiv) {
    // Create the div dynamically
    participatingSchoolsDiv = document.createElement("div");
    participatingSchoolsDiv.id = "participating-schools";
    document
      .getElementById("competition-registration")
      .appendChild(participatingSchoolsDiv);
  }

  // 2. Get or create the <ul> inside the div.
  let schoolsList = document.getElementById("schools-list");
  if (!schoolsList) {
    // Create <ul> if it doesn't exist
    schoolsList = document.createElement("ul");
    schoolsList.id = "schools-list";
    participatingSchoolsDiv.appendChild(schoolsList); // Append <ul> to the div
  }

  // 3. Clear existing list items.
  schoolsList.innerHTML = "";

  // 4. Populate the list.
  schools.forEach((school) => {
    const listItem = document.createElement("li");
    listItem.textContent = school;
    schoolsList.appendChild(listItem);
  });

  // 5. Display the list.
  participatingSchoolsDiv.style.display = "block";
}

function registerForCompetition() {
  // 1. Get the values entered in the form fields:
  const name = document.getElementById("competition-name").value;
  const school = document.getElementById("competition-school").value;
  const schoolId = document.getElementById("competition-id").value;

  // 2. Get the message div for displaying success/error messages:
  const messageDiv = document.getElementById("registration-message");

  // 3. Check if all fields are filled:
  if (name && school && schoolId) {
    messageDiv.textContent = "Registration successful!";
    messageDiv.style.color = "green";

    // You can add more actions here after successful registration, like:
    // - Clearing the form fields
    // - Sending data to a server
    // - Redirecting to another page
  } else {
    messageDiv.textContent = "Please fill in all fields.";
    messageDiv.style.color = "red";
  }
}
