document.addEventListener('DOMContentLoaded', () => {
  const birthDate = new Date('2009-01-31'); 
  const ageInYears = calculateAgeInYears(birthDate);
  document.getElementById('Me_old').textContent = ageInYears;
});

function calculateAgeInYears(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();


  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
  }

  return age;
}