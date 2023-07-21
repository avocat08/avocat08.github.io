document.querySelectorAll('.cards').forEach(div => {
  div.addEventListener('click', function() {
    const label = div.querySelector('#bigCardData');
    const idNumber = label.textContent.replace('Número de identificación: ', '');

    window.location.href = `bigCards.html?idNumber=${idNumber}`;
  });
});


