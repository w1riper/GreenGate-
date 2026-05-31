document.addEventListener("DOMContentLoaded", () => {
    // ========== INTRO SCREEN ==========
    const intro = document.getElementById('intro-screen');
    setTimeout(() => {
        if(intro) {
            intro.style.opacity = '0';
            setTimeout(() => {
                intro.style.display = 'none';
                intro.remove();
                document.body.style.overflow = 'auto';
            }, 600);
        }
    }, 2800);
    document.body.style.overflow = 'hidden';

    // ========== NAVBAR SCROLL EFFECT ==========
    const header = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });

    // ========== HAMBURGER MENU ==========
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        document.querySelectorAll('#nav-menu a').forEach(link => {
            link.addEventListener('click', () => navMenu.classList.remove('active'));
        });
    }

    // ========== SCROLL REVEAL ==========
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(el => revealObserver.observe(el));

    // ========== COUNTER ANIMATION (STATS) ==========
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'));
                let current = 0;
                const increment = target / 55;
                const updateCounter = () => {
                    current += increment;
                    if(current < target) {
                        el.innerText = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        el.innerText = target;
                    }
                };
                updateCounter();
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => counterObserver.observe(c));

    // ========== SWIPER SLIDER (PRODUCTS) ==========
    new Swiper('.product-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        },
        autoplay: { delay: 3500, disableOnInteraction: false }
    });

    // ========== FLOATING BUTTON VISIBILITY ==========
    const floatBtn = document.querySelector('.floating-btn');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 400) floatBtn.style.display = 'flex';
        else floatBtn.style.display = 'none';
    });
    floatBtn.style.display = 'none';

    // ========== CONTACT FORM SIMULATION ==========
    const form = document.getElementById('contact-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const feedback = document.getElementById('form-feedback');
            feedback.innerText = '✅ درخواست شما با موفقیت ثبت شد، کارشناسان ما تماس میگیرند.';
            feedback.style.color = '#10b981';
            form.reset();
            setTimeout(() => feedback.innerText = '', 4000);
        });
    }

    // ========== SMOOTH SCROLL FOR ANCHORS ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId === "#" || targetId === "") return;
            const target = document.querySelector(targetId);
            if(target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
