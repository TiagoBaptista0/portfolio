
        // ===== MOBILE MENU =====
        const mobileMenu = document.getElementById('mobileMenu');
        const navLinks = document.getElementById('navLinks');

        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenu.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // ===== HEADER SCROLL EFFECT =====
        const header = document.getElementById('header');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // ===== SMOOTH SCROLLING & ACTIVE LINK =====
        const navLinksAll = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');

        // Smooth scroll for navigation links
        navLinksAll.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }

                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = mobileMenu.querySelector('i');
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });

        // Update active link on scroll
        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            navLinksAll.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // ===== SCROLL TO TOP BUTTON =====
        const scrollToTopBtn = document.getElementById('scrollToTop');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.display = 'flex';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // ===== FORM SUBMISSION =====
        const contactForm = document.getElementById('contactForm');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
            contactForm.reset();
        });

        // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-up, .portfolio-card, .service-card').forEach(el => {
            observer.observe(el);
        });

    