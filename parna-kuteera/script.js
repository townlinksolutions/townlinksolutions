// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Hero Slideshow
let currentSlideIndex = 0;
let slideInterval;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlideIndex = index;
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    showSlide(index);
    resetInterval();
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 4000);
}

// Start automatic slideshow
if (slides.length > 0) {
    slideInterval = setInterval(nextSlide, 4000);
    
    // Pause slideshow on hover
    const slideshowContainer = document.querySelector('.hero-slideshow');
    if (slideshowContainer) {
        slideshowContainer.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        slideshowContainer.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 4000);
        });
    }
}

// Header Scroll Effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Modal Functions
const modal = document.getElementById('enquiryModal');

function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openModalWithType(type) {
    openModal();
    document.getElementById('accommodation').value = type;
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Enquiry Form Submission
const enquiryForm = document.getElementById('enquiryForm');

// Phone number validation function
function validatePhone(phoneInput) {
    const phone = phoneInput.value.replace(/\D/g, ''); // Remove non-digits
    
    if (phone.length === 0) return true; // Allow empty for optional validation
    
    if (phone.length !== 10) {
        phoneInput.setCustomValidity('Please enter a valid 10-digit mobile number');
        return false;
    }
    
    // Check if it starts with 6, 7, 8, or 9 (Indian mobile numbers)
    if (!phone.match(/^[6-9]/)) {
        phoneInput.setCustomValidity('Mobile number should start with 6, 7, 8, or 9');
        return false;
    }
    
    phoneInput.setCustomValidity('');
    return true;
}

// Real-time validation for phone inputs
const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach(input => {
    input.addEventListener('input', function(e) {
        // Allow only numbers
        this.value = this.value.replace(/[^0-9]/g, '');
        
        // Limit to 10 digits
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }
        
        validatePhone(this);
    });
    
    input.addEventListener('blur', function() {
        validatePhone(this);
    });
});

enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const phoneInput = document.getElementById('phone');
    
    // Validate phone before submission
    if (!validatePhone(phoneInput)) {
        phoneInput.reportValidity();
        return;
    }
    
    const name = document.getElementById('name').value;
    const phone = phoneInput.value;
    const email = document.getElementById('email').value;
    const accommodation = document.getElementById('accommodation').value;
    const dates = document.getElementById('dates').value;
    const message = document.getElementById('message').value;
    
    // Show success message
    showSuccessMessage();
    
    // Close modal
    closeModal();
    
    // Reset form
    enquiryForm.reset();
    
    // Prepare WhatsApp message
    const whatsappMessage = `Hi, I would like to enquire about Parna Kuteera.

Name: ${name}
Phone: ${phone}
${email ? `Email: ${email}` : ''}
Accommodation: ${accommodation}
Preferred Dates: ${dates}
Message: ${message}`;
    
    // Open WhatsApp after a short delay
    setTimeout(() => {
        const encodedMessage = encodeURIComponent(whatsappMessage);
        window.open(`https://wa.me/919538580195?text=${encodedMessage}`, '_blank');
    }, 1500);
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const phoneInput = document.getElementById('contactPhone');
    
    // Validate phone before submission
    if (!validatePhone(phoneInput)) {
        phoneInput.reportValidity();
        return;
    }
    
    const name = document.getElementById('contactName').value;
    const phone = phoneInput.value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;
    
    // Show success message
    showSuccessMessage();
    
    // Reset form
    contactForm.reset();
    
    // Prepare WhatsApp message
    const whatsappMessage = `Hi, I have an enquiry about Parna Kuteera.

Name: ${name}
Phone: ${phone}
${email ? `Email: ${email}` : ''}
Message: ${message}`;
    
    // Open WhatsApp after a short delay
    setTimeout(() => {
        const encodedMessage = encodeURIComponent(whatsappMessage);
        window.open(`https://wa.me/919538580195?text=${encodedMessage}`, '_blank');
    }, 1500);
});

// Success Message
function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.add('active');
    
    setTimeout(() => {
        successMessage.classList.remove('active');
    }, 3000);
}

// Smooth Scroll with Offset for Fixed Header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        const headerHeight = header.offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Scroll Animations (Simple AOS-like functionality)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => observer.observe(el));
});

// Floating Button Visibility
const floatingButton = document.querySelector('.floating-enquire');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        floatingButton.style.opacity = '1';
        floatingButton.style.pointerEvents = 'auto';
    } else {
        floatingButton.style.opacity = '0';
        floatingButton.style.pointerEvents = 'none';
    }
});

// Initialize
floatingButton.style.opacity = '0';
floatingButton.style.transition = 'opacity 0.3s ease';

// Image Loading Helper (for when you add actual images)
// Replace .gallery-placeholder with actual images
function loadGalleryImage(imageUrl) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        const placeholder = item.querySelector('.gallery-placeholder');
        if (placeholder) {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = 'Parna Kuteera Beach View';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            
            img.onload = () => {
                placeholder.innerHTML = '';
                placeholder.appendChild(img);
            };
        }
    });
}

// Hero Background Image (call this function when you have an image)
function setHeroBackground(imageUrl) {
    const hero = document.querySelector('.hero');
    hero.style.backgroundImage = `url('${imageUrl}')`;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';
    hero.style.backgroundAttachment = 'fixed';
}

// Uncomment and use these functions when you have actual images:
// loadGalleryImage('path/to/your/beach-image.jpg');
// setHeroBackground('path/to/your/beach-image.jpg');

// Form Input Animation Enhancement
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });
});

// Prevent form submission on enter for text inputs (except textarea)
document.querySelectorAll('.form-group input').forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.type !== 'submit') {
            e.preventDefault();
        }
    });
});

// Active Navigation Link Highlight
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Console welcome message
console.log('%c Welcome to Parna Kuteera ', 'background: #2B8A9D; color: white; font-size: 20px; padding: 10px;');
console.log('%c A Place to Hide..... ', 'color: #FF8B3D; font-size: 16px; font-style: italic;');
