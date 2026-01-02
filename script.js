document.addEventListener('DOMContentLoaded', function () {
    const btnSatisfait = document.querySelector('.satisfait');
    const btnPasSatisfait = document.querySelector('.pas-satisfait');
  
    if (btnSatisfait) {
      btnSatisfait.addEventListener('click', function () {
        alert("Merci pour votre avis positif !");
      });
    }
  
    if (btnPasSatisfait) {
      btnPasSatisfait.addEventListener('click', function () {
        alert("Nous sommes désolés. Nous allons améliorer cela.");
      });
    }
  });