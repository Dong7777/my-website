document.addEventListener('DOMContentLoaded', () => {
  // 打字机效果
  const subtitle = document.querySelector('header p');
  const text = subtitle.textContent;
  subtitle.textContent = '';
  let index = 0;
  function typeWriter() {
    if (index < text.length) {
      subtitle.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();

  // 滚动淡入效果
  const faders = document.querySelectorAll('.about-content, .experience-card, .skill-card, .project-card, .contact-content');
  const appearOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };

  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('fade-in');
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // 粒子背景
  const particlesScript = document.createElement('script');
  particlesScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
  particlesScript.onload = () => {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80 },
        color: { value: '#00eaff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: { enable: true, color: '#00eaff', opacity: 0.4 },
        move: { enable: true, speed: 2 }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' }
        },
        modes: {
          repulse: { distance: 100 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  };
  document.body.appendChild(particlesScript);

  // 表单提交效果
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      const button = form.querySelector('button');
      button.textContent = '发送中...';
      setTimeout(() => {
        button.textContent = '已成功发送';
        button.style.background = 'linear-gradient(90deg, #00ff88, #00c6ff)';
      }, 1500);
    });
  }
});
