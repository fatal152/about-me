

  const button = document.querySelector('button');
  const content = document.getElementById('mam');

  button.addEventListener('click', () => {
    content.textContent = "The content has been changed!";
  });
