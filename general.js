
document.addEventListener("DOMContentLoaded", function () {
  const birthdate = new Date("2009-01-31T10:00:14.000Z"); // my birthdayyy

  // Function to calculate age in seconds and years
  function calculateAge(birthdate) {
      const now = new Date();
      const ageInMilliseconds = now - birthdate;
      const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
      const ageInYears = (ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)).toFixed(2); // 365.25 to account for leap years

      return {
          seconds: ageInSeconds,
          years: ageInYears
      };
  }

  // Update the HTML elements with the calculated age
  function updateAgeDisplay() {
      const age = calculateAge(birthdate);
      document.getElementById("timestamp_seconds").textContent = age.seconds.toLocaleString();
      document.getElementById("timestamp_years").textContent = age.years;
  }

  // Initial update
  updateAgeDisplay();

  // Update every second
  setInterval(updateAgeDisplay, 1000);
});