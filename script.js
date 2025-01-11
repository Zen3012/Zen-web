// 1. Animasi Scroll Halus
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Validasi Form Kontak
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Harap isi semua field!');
    } else {
        alert('Pesan Anda telah terkirim!');
        this.reset(); // Reset form setelah pengiriman
    }
});

// 3. Efek Typing pada Header
const headerText = "Selamat Datang di Website Saya";
let i = 0;
const typingEffect = () => {
    if (i < headerText.length) {
        document.querySelector('header h1').textContent += headerText.charAt(i);
        i++;
        setTimeout(typingEffect, 100); // Kecepatan typing (ms)
    }
};
typingEffect();

// 4. Animasi Muncul saat Scroll
const sections = document.querySelectorAll('section');

const checkScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', checkScroll);

// 5. Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Mode Gelap';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.top = '10px';
darkModeToggle.style.right = '10px';
darkModeToggle.style.padding = '10px';
darkModeToggle.style.backgroundColor = '#333';
darkModeToggle.style.color = '#fff';
darkModeToggle.style.border = 'none';
darkModeToggle.style.borderRadius = '5px';
darkModeToggle.style.cursor = 'pointer';

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Mode Terang';
    } else {
        darkModeToggle.textContent = 'Mode Gelap';
    }
});

const style = document.createElement('style');
style.textContent = `
    .dark-mode {
        background-color: #333;
        color: #fff;
    }
    .dark-mode header {
        background-color: #222;
    }
    .dark-mode section {
        background-color: #444;
        color: #fff;
    }
    .dark-mode form input, .dark-mode form textarea {
        background-color: #555;
        color: #fff;
        border-color: #666;
    }
    .dark-mode form button {
        background-color: #666;
    }
`;
document.head.appendChild(style);

// 6. Carousel untuk Portofolio
let currentSlide = 0;
const slides = document.querySelectorAll('.project');
const totalSlides = slides.length;

const showSlide = (index) => {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
};

const nextSlide = () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
};

const prevSlide = () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
};

// Tambahkan tombol navigasi carousel
const carouselControls = document.createElement('div');
carouselControls.innerHTML = `
    <button id="prevBtn">Sebelumnya</button>
    <button id="nextBtn">Selanjutnya</button>
`;
carouselControls.style.textAlign = 'center';
carouselControls.style.marginTop = '10px';
document.getElementById('portofolio').appendChild(carouselControls);

document.getElementById('prevBtn').addEventListener('click', prevSlide);
document.getElementById('nextBtn').addEventListener('click', nextSlide);

// Tampilkan slide pertama saat halaman dimuat
showSlide(currentSlide);

// 7. Tombol Scroll ke Atas
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '20px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.padding = '10px 15px';
scrollToTopBtn.style.backgroundColor = '#333';
scrollToTopBtn.style.color = '#fff';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.borderRadius = '50%';
scrollToTopBtn.style.cursor = 'pointer';
scrollToTopBtn.style.display = 'none';

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
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

// 8. Efek Hover pada Proyek
slides.forEach(slide => {
    slide.addEventListener('mouseenter', () => {
        slide.style.transform = 'scale(1.05)';
        slide.style.transition = 'transform 0.3s ease';
    });

    slide.addEventListener('mouseleave', () => {
        slide.style.transform = 'scale(1)';
    });
});

// 9. Countdown Timer (Opsional)
const countdownDate = new Date('2023-12-31T23:59:59').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.createElement('div');
    countdownElement.id = 'countdown';
    countdownElement.innerHTML = `
        <h3>Countdown ke 2024:</h3>
        <p>${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik</p>
    `;
    countdownElement.style.textAlign = 'center';
    countdownElement.style.marginTop = '20px';

    const existingCountdown = document.getElementById('countdown');
    if (existingCountdown) {
        existingCountdown.innerHTML = countdownElement.innerHTML;
    } else {
        document.body.insertBefore(countdownElement, document.querySelector('footer'));
    }

    if (distance < 0) {
        clearInterval(countdownInterval);
    }
    };