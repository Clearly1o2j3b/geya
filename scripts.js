.student-photo {
  text-align: center;
  margin-bottom: 20px;
}

.student-photo img {
  width: 80px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

body {
  font-family: "Arial", sans-serif;
  background-color: #f0f2f5;
  margin: 0;
  padding: 0;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #003366;
}

.login-box {
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
  animation: slideIn 0.8s ease-in-out;
}

@keyframes slideIn {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.login-box img {
  width: 100px;
  margin-bottom: 20px;
}

.login-box h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #003366;
}

.login-box input {
  display: block;
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.login-box button {
  width: 100%;
  padding: 12px;
  background-color: #003366;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-box button:hover {
  background-color: #002244;
}

.container {
  display: flex;
  height: 100vh;
  position: relative;
}

.sidebar {
  width: 250px;
  background-color: #003366;
  color: white;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  height: 100%;
  transition: width 0.3s ease-in-out;
  /* Add transition for smooth resize */
}

.sidebar h2 {
  text-align: center;
  margin-bottom: 20px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar ul li {
  margin-bottom: 20px;
}

.sidebar ul li:last-child {
  margin-bottom: 0;
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
  display: block;
  padding: 10px 20px;
}

.sidebar ul li a:hover {
  background-color: #002244;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: white;
  overflow-y: auto;
  transition: margin-left 0.3s ease-in-out;
  /* Add transition for smooth resize */
}

.content-section {
  display: none;
  animation: fadeIn 0.5s;
  padding-top: 20px;
  border-top: 1px solid #ddd;
}

.content-section.active {
  display: block;
}

.details-table,
.timetable-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.details-table th,
.details-table td,
.timetable-table th,
.timetable-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.details-table th,
.timetable-table th {
  background-color: #003366;
  color: white;
}

.timetable-table td {
  text-align: center;
}

.details-table tr:last-child td:first-child {
  text-align: right;
}

form {
  margin-top: 20px;
}

form label {
  display: block;
  margin: 10px 0 5px;
}

form input,
form button {
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
}

form button {
  background-color: #003366;
  color: white;
  border: none;
  cursor: pointer;
}

form button:hover {
  background-color: #002244;
}

.awards-list {
  padding: 0;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.awards-list li {
  background-color: #e0ffe0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.awards-list li:hover {
  transform: scale(1.02);
}

.awards-list li strong {
  color: #4cbb17;
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 1.4;
}

.message-box {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.confetti-animation {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}

.confetti-animation.active {
  display: block;
  animation: confetti-fall 2s ease-out forwards;
}

@keyframes confetti-fall {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(100%);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.confetti-piece {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #4cbb17;
  animation: confetti-piece-fall 2s linear infinite;
  opacity: 0;
}

@keyframes confetti-piece-fall {
  0% {
    transform: translateY(-100vh) rotate(0);
    opacity: 1;
  }

  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}

.confetti-piece:nth-child(1) {
  left: 10%;
  animation-delay: 0s;
}

.confetti-piece:nth-child(2) {
  left: 20%;
  animation-delay: 0.2s;
}

.confetti-piece:nth-child(3) {
  left: 30%;
  animation-delay: 0.4s;
}

.confetti-piece:nth-child(4) {
  left: 40%;
  animation-delay: 0.6s;
}

.confetti-piece:nth-child(5) {
  left: 50%;
  animation-delay: 0.8s;
}

.confetti-piece:nth-child(6) {
  left: 60%;
  animation-delay: 1s;
}

.confetti-piece:nth-child(7) {
  left: 70%;
  animation-delay: 1.2s;
}

.confetti-piece:nth-child(8) {
  left: 80%;
  animation-delay: 1.4s;
}

.confetti-piece:nth-child(9) {
  left: 90%;
  animation-delay: 1.6s;
}

.confetti-piece:nth-child(10) {
  left: 100%;
  animation-delay: 1.8s;
}

.messages-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.message-item {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  /* Ensure the animation stays within the message item */
  position: relative;
  /* For absolute positioning of the checkmark */
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Align items to the same baseline */
  margin-bottom: 10px;
}

.message-sender {
  font-weight: bold;
  font-size: 1.1rem;
}

.message-date {
  font-size: 0.8rem;
  color: #777;
}

.message-body p {
  margin: 0;
  /* Remove default paragraph margin */
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.dashboard-item {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.fees-summary {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.fees-summary .amount {
  font-weight: bold;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.student-id {
  font-size: 0.9rem;
  color: #555;
}

.news-feed {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.news-item {
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
  margin-bottom: 15px;
  position: relative;
  overflow: hidden;
  /* For animation effects */
}

.news-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.news-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.news-header h4 {
  margin: 0;
  font-size: 1.1rem;
}

.news-date {
  font-size: 0.8rem;
  color: #777;
}

.welcome-message {
  grid-column: span 3;
  /* Make it span across all three columns */
  text-align: center;
  background-image: linear-gradient(135deg, #007bff, #003366);
  color: white;
  padding: 30px 20px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  animation: gradientShift 5s linear infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.welcome-message h3 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  animation: textGlow 1.5s infinite alternate;
}

@keyframes textGlow {
  from {
    text-shadow: 0 0 10px white;
  }

  to {
    text-shadow: 0 0 20px white;
  }
}

/* Responsiveness */
@media (max-width: 768px) {
  .dashboard-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .welcome-message {
    grid-column: span 2;
    /* Span across two columns on smaller screens */
  }

  .news-item {
    padding: 10px;
  }

  .news-header h4 {
    font-size: 1rem;
  }

  .message-item {
    padding: 15px;
  }

  .message-sender {
    font-size: 1rem;
  }

  .message-date {
    font-size: 0.7rem;
  }

  .sidebar {
    width: 70px;
    /* Reduce sidebar width on smaller screens */
  }

  .sidebar h2,
  .sidebar .student-photo img {
    display: none;
    /* Hide logo and photo on smaller screens */
  }

  .sidebar ul li a {
    padding: 10px;
    text-align: center;
  }
}
