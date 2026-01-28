// ===================================
// NAVEGAÇÃO - Efeito de scroll
// ===================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// LIGHTBOX - Galeria de imagens
// ===================================

// Seleciona todos os elementos necessários
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

let currentImageIndex = 0;
const images = [];

// Popula o array de imagens da galeria
galleryItems.forEach((item, index) => {
    const img = item.querySelector('.gallery-image');
    const overlay = item.querySelector('.gallery-item-overlay');

    if (img) {
        images.push({
            src: img.src,
            alt: img.alt,
            title: overlay ? overlay.querySelector('h3')?.textContent : '',
            description: overlay ? overlay.querySelector('p')?.textContent : ''
        });

        // Adiciona evento de clique para abrir o lightbox
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    }
});

// Função para abrir o lightbox
function openLightbox(index) {
    if (!lightbox || images.length === 0) return;

    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Previne scroll da página
}

// Função para fechar o lightbox
function closeLightbox() {
    if (!lightbox) return;

    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restaura scroll da página
}

// Função para atualizar a imagem do lightbox
function updateLightboxImage() {
    if (!lightboxImage || !lightboxCaption) return;

    const currentImage = images[currentImageIndex];
    lightboxImage.src = currentImage.src;
    lightboxImage.alt = currentImage.alt;

    // Atualiza a legenda
    const captionText = currentImage.title
        ? `${currentImage.title}${currentImage.description ? ' - ' + currentImage.description : ''}`
        : currentImage.alt;
    lightboxCaption.textContent = captionText;
}

// Função para navegar para a próxima imagem
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateLightboxImage();
}

// Função para navegar para a imagem anterior
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateLightboxImage();
}

// Event listeners para os controles do lightbox
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxNext) {
    lightboxNext.addEventListener('click', nextImage);
}

if (lightboxPrev) {
    lightboxPrev.addEventListener('click', prevImage);
}

// Fecha o lightbox ao clicar fora da imagem
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Navegação por teclado
document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;

    switch (e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowRight':
            nextImage();
            break;
        case 'ArrowLeft':
            prevImage();
            break;
    }
});

// ===================================
// ANIMAÇÕES DE SCROLL
// ===================================

// Intersection Observer para animações ao rolar a página
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observa todos os elementos com a classe fade-in-up
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

// ===================================
// SMOOTH SCROLL PARA LINKS INTERNOS
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

