// ==========================================
// PariRaksha Insurance Advisory
// Main JavaScript File
// ==========================================

// ============= DOCUMENT READY ============= 
document.addEventListener('DOMContentLoaded', function() {
    initializeComponents();
    setupEventListeners();
});

// ============= INITIALIZATION ============= 
function initializeComponents() {
    setupSmoothScroll();
    setupFormValidation();
    addCardAnimations();
    setupPhoneFormatting();
}

function setupEventListeners() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu on link click
    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

    // FAQ accordion
    setupFAQAccordion();
}

// ============= MOBILE MENU ============= 
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

function closeMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.remove('active');
    }
}

// ============= SMOOTH SCROLL ============= 
function setupSmoothScroll() {
    // Add smooth scroll for all navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle if it's not just '#'
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    // Close mobile menu if open
                    closeMobileMenu();
                    
                    // Scroll to element
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ============= FORM VALIDATION ============= 
function setupFormValidation() {
    // Setup all forms with the generic form handler
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
}

// ============= GENERIC FORM HANDLER ============= 
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formId = form.id;
    
    // Get all form fields
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Validate required fields
    const errors = validateFormData(data, formId);
    if (errors.length > 0) {
        showAlert(errors[0], 'error');
        return false;
    }
    
    // Process form submission
    submitFormData(form, data, formId);
    return false;
}

// ============= FORM VALIDATION ============= 
function validateFormData(data, formId) {
    const errors = [];
    const phoneRegex = /^[6-9]\d{9}$/;
    
    // Common validations
    const name = data.fullName || data.contactName || data.name || '';
    const phone = data.phone || data.contactPhone || '';
    const email = data.email || data.contactEmail || '';
    
    if (name && name.length < 2) {
        errors.push('Please enter a valid name');
    }
    
    if (phone && !phoneRegex.test(phone.replace(/\s/g, ''))) {
        errors.push('Please enter a valid 10-digit Indian phone number');
    }
    
    if (email && !isValidEmail(email)) {
        errors.push('Please enter a valid email address');
    }
    
    // Contact form specific validation
    if (formId === 'contactForm') {
        const city = data.contactCity || '';
        if (city && city.length < 2) {
            errors.push('Please enter a valid city name');
        }
        if (!data.contactConsent) {
            errors.push('Please provide consent to contact you');
        }
    }
    
    return errors;
}

function submitFormData(form, data, formId) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing...';
    
    // Prepare submission
    const submission = {
        ...data,
        timestamp: new Date().toLocaleString(),
        source: formId,
        formType: formId === 'consultationForm' ? 'consultation' : 'contact'
    };
    
    // Remove spaces from phone
    if (submission.phone) submission.phone = submission.phone.replace(/\s/g, '');
    if (submission.contactPhone) submission.contactPhone = submission.contactPhone.replace(/\s/g, '');
    if (submission.fullName) submission.name = submission.fullName;
    
    console.log('Form Submission:', submission);
    
    // Save to localStorage
    try {
        let submissions = JSON.parse(localStorage.getItem('insuranceSubmissions')) || [];
        submissions.push(submission);
        localStorage.setItem('insuranceSubmissions', JSON.stringify(submissions));
        console.log('Data saved. Total submissions:', submissions.length);
    } catch (e) {
        console.error('Error saving to local storage:', e);
    }
    
    // Show success with delay
    setTimeout(() => {
        showAlert('✅ Thank you! Our team will contact you shortly.', 'success');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }, 800);
}

function showAlert(message, type = 'info') {
    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 18px 25px;
        border-radius: 8px;
        font-weight: 500;
        z-index: 10000;
        max-width: 450px;
        animation: slideInRight 0.4s ease;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        font-size: 15px;
        line-height: 1.5;
    `;
    
    // Set colors based on type
    if (type === 'success') {
        alertDiv.style.backgroundColor = '#d4edda';
        alertDiv.style.color = '#155724';
        alertDiv.style.borderLeft = '5px solid #28a745';
    } else if (type === 'error') {
        alertDiv.style.backgroundColor = '#f8d7da';
        alertDiv.style.color = '#721c24';
        alertDiv.style.borderLeft = '5px solid #dc3545';
    } else {
        alertDiv.style.backgroundColor = '#d1ecf1';
        alertDiv.style.color = '#0c5460';
        alertDiv.style.borderLeft = '5px solid #17a2b8';
    }
    
    // Add message
    alertDiv.textContent = message;
    
    // Append to body
    document.body.appendChild(alertDiv);
    
    // Auto remove after 6 seconds
    setTimeout(() => {
        alertDiv.style.animation = 'slideOutRight 0.4s ease';
        setTimeout(() => {
            alertDiv.remove();
        }, 400);
    }, 6000);
    
    // Allow manual close with click
    alertDiv.style.cursor = 'pointer';
    alertDiv.addEventListener('click', () => {
        alertDiv.style.animation = 'slideOutRight 0.4s ease';
        setTimeout(() => {
            alertDiv.remove();
        }, 400);
    });
}

// ============= FAQ ACCORDION ============= 
function toggleFAQItem(element) {
    const faqItem = element.closest('.faq-item');
    if (!faqItem) return;
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current item
    faqItem.classList.toggle('active');
}

function setupFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', (e) => {
            e.preventDefault();
            toggleFAQItem(question);
        });
    });
}



// ============= SCROLL ANIMATIONS ============= 
function addCardAnimations() {
    // Observe cards for scroll animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe all service cards, testimonial cards, etc.
        const elementsToObserve = document.querySelectorAll(
            '.service-card, .testimonial-card, .benefit-card, .credential-card, .expertise-item'
        );
        
        elementsToObserve.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// ============= SCROLL TO FORM ============= 
function scrollToForm() {
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Focus on first input for better UX
        setTimeout(() => {
            const firstInput = leadForm.querySelector('input');
            if (firstInput) {
                firstInput.focus();
            }
        }, 500);
    }
}

// ============= WINDOW RESIZE HANDLER ============= 
window.addEventListener('resize', () => {
    // Reset mobile menu on resize
    if (window.innerWidth > 768) {
        const navLinks = document.getElementById('navLinks');
        if (navLinks) {
            navLinks.classList.remove('active');
        }
    }
});

// ============= SCROLL POSITION ============= 
window.addEventListener('scroll', () => {
    // Add shadow to navbar on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 10) {
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }
});

// ============= PERFORMANCE OPTIMIZATION ============= 
// Lazy load images if needed
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports lazy loading
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for older browsers
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.0/lazysizes.min.js';
    document.body.appendChild(script);
}

// ============= PHONE NUMBER FORMATTER ============= 
function formatPhoneNumber(value) {
    // Remove all non-digits
    const cleanValue = value.replace(/\D/g, '');
    
    // Format as 10-digit number
    if (cleanValue.length <= 3) {
        return cleanValue;
    } else if (cleanValue.length <= 6) {
        return cleanValue.slice(0, 3) + ' ' + cleanValue.slice(3);
    } else if (cleanValue.length <= 10) {
        return cleanValue.slice(0, 3) + ' ' + cleanValue.slice(3, 6) + ' ' + cleanValue.slice(6);
    }
    
    return cleanValue.slice(0, 10);
}

function setupPhoneFormatting() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function() {
            this.value = formatPhoneNumber(this.value);
        });
    });
}



// ============= PRINT STYLES ============= 
// Add print-friendly styles
const printStyleSheet = document.createElement('style');
printStyleSheet.textContent = `
    @media print {
        .navbar, .whatsapp-btn, .license-header {
            display: none !important;
        }
        
        body {
            color: #000;
            background: #fff;
        }
        
        a {
            color: #000;
            text-decoration: underline;
        }
        
        .btn {
            border: 1px solid #000 !important;
        }
    }
`;
document.head.appendChild(printStyleSheet);

// ============= UTILITY FUNCTIONS ============= 
function getURLParameter(paramName) {
    const searchString = window.location.search.substring(1);
    const params = searchString.split('&');
    
    for (let i = 0; i < params.length; i++) {
        const param = params[i].split('=');
        if (param[0] === paramName) {
            return decodeURIComponent(param[1]);
        }
    }
    
    return null;
}

// ============= ACCESSIBILITY ============= 
// Skip to main content link
const skipLink = document.createElement('a');
skipLink.href = '#main';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #003D82;
    color: white;
    padding: 8px;
    z-index: 100;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

console.log('PariRaksha Insurance Advisory - JavaScript loaded successfully');
