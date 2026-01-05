    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('navMenu');
    const links = document.querySelectorAll('#navMenu a');
    const navHeight = document.querySelector('nav').offsetHeight;
    const sections = document.querySelectorAll('section, .hero');

    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });

    
    links.forEach(link => {
      link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        menu.classList.remove('active');
      });
    });
    

    window.addEventListener('scroll', () => {
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute('id');
        }
    });
});
  

      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
    });
  
    if (window.scrollY > 10) {
        document.querySelector('nav').classList.add('scrolled');
      } else {
        document.querySelector('nav').classList.remove('scrolled');
      }

     links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
     });