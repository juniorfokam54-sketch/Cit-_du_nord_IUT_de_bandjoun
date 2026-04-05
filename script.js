document.addEventListener('DOMContentLoaded', function () {
    const btnSatisfait = document.querySelector('.satisfait');
    const btnPasSatisfait = document.querySelector('.pas-satisfait');

    if (btnSatisfait) {
      btnSatisfait.addEventListener('click', function () {
        addPulseEffect(this);
        showFeedback('Merci infiniment pour votre retour positif ! 😊 Votre satisfaction est notre priorité.', 'success');
      });
    }

    if (btnPasSatisfait) {
      btnPasSatisfait.addEventListener('click', function () {
        addPulseEffect(this);
        showFeedback('Nous sommes désolés de ne pas avoir répondu à vos attentes. 🙏 Nous allons travailler à améliorer nos services.', 'error');
      });
    }

    // Add click effect to all buttons
    const allButtons = document.querySelectorAll('button, .whatsapp-btn');
    allButtons.forEach(button => {
      button.addEventListener('click', function() {
        addPulseEffect(this);
      });
    });

    // Add click effect to gallery images
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
      img.addEventListener('click', function() {
        // Simple lightbox effect
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
          this.style.transform = '';
        }, 200);
      });
    });

    // Add smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });

  function addPulseEffect(element) {
    element.style.animation = 'pulse 0.3s ease-out';
    setTimeout(() => {
      element.style.animation = '';
    }, 300);
  }

  function showFeedback(message, type) {
    // Create feedback element
    const feedback = document.createElement('div');
    feedback.textContent = message;
    feedback.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#4CAF50' : '#f44336'};
      color: white;
      padding: 15px 20px;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      z-index: 1000;
      font-weight: 600;
      max-width: 300px;
      animation: slideIn 0.5s ease-out;
    `;

    document.body.appendChild(feedback);

    // Remove after 5 seconds
    setTimeout(() => {
      feedback.style.animation = 'slideOut 0.5s ease-in';
      setTimeout(() => {
        document.body.removeChild(feedback);
      }, 500);
    }, 5000);
  }

  // Add CSS animations for feedback and pulse
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    }
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
  `;
  document.head.appendChild(style);