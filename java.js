onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
    setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDuration = `${Math.random() * 3 + 2}s`; 
      document.body.appendChild(heart);

      setTimeout(() => {
          heart.remove();
      }, 5000);
  }, 300);
  };
  document.addEventListener("DOMContentLoaded", function() {
    const backgroundTextSpans = document.querySelectorAll('.background-text span');
    
    const delays = [0, 0.5, 1, 1.5, 2, 3, 3.3 , 3.8, 4.3, 5, 5.5];

    function animateText(spans, delays) {
        spans.forEach((span, index) => {
            const wordDelay = delays[index];
            span.style.animation = `fadeInUp 0.5s ease forwards ${wordDelay}s`;
        });
    }


    animateText(backgroundTextSpans, delays);
});
