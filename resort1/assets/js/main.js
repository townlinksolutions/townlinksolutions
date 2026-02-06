// TownLink Resort - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Navbar Background Change on Scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(26, 35, 50, 0.98)';
                navbar.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)';
            } else {
                navbar.style.background = 'rgba(26, 35, 50, 0.95)';
                navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
            }
        });
    }

    // Form Validation and Submission
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            const formData = new FormData(form);
            console.log('Form submitted with data:', Object.fromEntries(formData));
            
            // Create success message
            const successMsg = document.createElement('div');
            successMsg.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: linear-gradient(135deg, #28a745, #20c997); color: white; padding: 2rem 3rem; border-radius: 15px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); z-index: 10000; text-align: center; animation: fadeIn 0.3s ease;';
            successMsg.innerHTML = `
                <h3 style="margin-bottom: 0.5rem; color: white;">Success! ✓</h3>
                <p style="margin: 0;">Thank you for your submission. We'll be in touch soon!</p>
            `;
            document.body.appendChild(successMsg);
            
            // Remove message after 3 seconds
            setTimeout(() => {
                successMsg.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => successMsg.remove(), 300);
            }, 3000);
            
            // Reset form
            form.reset();
        });
    });

    // Image Lazy Loading Enhancement
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }

    // Animation on Scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .room-card, .highlight-item, .testimonial-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.6s ease';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 100);
                }
            });
        }, {
            threshold: 0.1
        });
        
        elements.forEach(el => observer.observe(el));
    };
    
    animateOnScroll();

    // Booking Form Date Validation
    const checkinInput = document.querySelector('input[type="date"]');
    if (checkinInput) {
        const today = new Date().toISOString().split('T')[0];
        checkinInput.setAttribute('min', today);
        
        const checkoutInput = document.querySelectorAll('input[type="date"]')[1];
        if (checkoutInput) {
            checkinInput.addEventListener('change', function() {
                const checkinDate = new Date(this.value);
                checkinDate.setDate(checkinDate.getDate() + 1);
                checkoutInput.setAttribute('min', checkinDate.toISOString().split('T')[0]);
            });
        }
    }

    // Dynamic Booking Summary Calculator
    const roomSelect = document.querySelector('select[required]');
    if (roomSelect && roomSelect.closest('form')) {
        const updateBookingSummary = () => {
            // This would calculate based on actual selections
            console.log('Booking summary updated');
        };
        
        roomSelect.addEventListener('change', updateBookingSummary);
    }

    // Add Fade-in Animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translate(-50%, -60%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        .loaded {
            animation: fadeIn 0.6s ease;
        }
    `;
    document.head.appendChild(style);

    // Back to Top Button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.style.cssText = 'position: fixed; bottom: 30px; right: 30px; background: linear-gradient(135deg, #0a7ea4, #1e3a8a); color: white; border: none; width: 50px; height: 50px; border-radius: 50%; font-size: 1.5rem; cursor: pointer; opacity: 0; transition: opacity 0.3s ease, transform 0.3s ease; z-index: 1000; box-shadow: 0 4px 16px rgba(0,0,0,0.2);';
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
        } else {
            backToTop.style.opacity = '0';
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    backToTop.addEventListener('mouseenter', () => {
        backToTop.style.transform = 'scale(1.1)';
    });
    
    backToTop.addEventListener('mouseleave', () => {
        backToTop.style.transform = 'scale(1)';
    });

    console.log('TownLink Resort website initialized successfully!');
});
