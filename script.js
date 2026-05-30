document.addEventListener("DOMContentLoaded", () => {
    
    // ۱. حذف کامل صفحه ورود بعد از اتمام انیمیشن نتفلیکس (برای بهینه‌سازی سرعت)
    const introScreen = document.getElementById('intro-screen');
    setTimeout(() => {
        introScreen.style.opacity = '0';
        setTimeout(() => {
            introScreen.style.display = 'none';
            introScreen.remove(); // پاک کردن از حافظه
        }, 500);
    }, 3500);

    // ۲. افکت اسکرول برای نوار ناوبری (کوچک و مات‌تر شدن در هنگام اسکرول)
    const header = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ۳. سیستم انیمیشن نرم هنگام اسکرول (Scroll Reveal)
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // فاصله‌ای که باید رد بشه تا انیمیشن اجرا بشه

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // اجرا کردن فانکشن موقع اسکرول
    window.addEventListener('scroll', revealOnScroll);
    
    // اجرا کردن یک بار در ابتدای کار برای المان‌هایی که از قبل تو دید هستن
    setTimeout(revealOnScroll, 3600); // زمان هماهنگ با اتمام انیمیشن ورود
});

// نمایش دکمه شناور بعد از کمی اسکرول
const floatingBtn = document.querySelector('.floating-btn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        floatingBtn.style.display = 'flex';
    } else {
        floatingBtn.style.display = 'none';
    }
});
