// ========================================
// PREMIUM PROFESSIONAL WEBSITE - JavaScript
// Modern ES6+, Production-Grade
// ========================================

// ========================================
// iOS SAFARI SCROLL LOCK UTILITY
// overflow:hidden on body is ignored by iOS Safari.
// Fix: use position:fixed + save/restore scrollY.
// ========================================
const iosScrollLock = {
    _scrollY: 0,
    lock() {
        this._scrollY = window.scrollY || window.pageYOffset;
        document.documentElement.classList.add('menu-open');
        document.body.classList.add('menu-open');
    },
    unlock(isNavigating = false) {
        document.documentElement.classList.remove('menu-open');
        document.body.classList.remove('menu-open');
        if (!isNavigating) {
            window.scrollTo(0, this._scrollY);
        }
    }
};

/**
 * Language Configuration
 * Stores bilingual content
 */
const languageConfig = {
    en: {
        currentLanguage: 'English',
        direction: 'ltr'
    },
    kn: {
        currentLanguage: 'ಕನ್ನಡ',
        direction: 'ltr'
    }
};

/**
 * Application State
 */
const appState = {
    currentLanguage: 'en',
    mobileMenuOpen: false,
    scrollPosition: 0
};

// ========================================
// DOM ELEMENTS - Cache for Performance
// ========================================

const domCache = {
    header: document.getElementById('header'),
    mobileMenuToggle: document.getElementById('mobileMenuToggle'),
    navMenu: document.getElementById('navMenu'),
    languageButtons: document.querySelectorAll('.lang-btn'),
    contactForm: document.getElementById('contactForm'),
    body: document.body,
    html: document.documentElement
};

// ========================================
// 1. LANGUAGE SWITCHER
// ========================================

class LanguageSwitcher {
    constructor() {
        this.currentLanguage = 'en';
        this.init();
    }

    init() {
        domCache.languageButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.switchLanguage(e.target.dataset.lang));
        });
        
        // Load language from URL (for SEO hreflang) or session preference
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        const savedLanguage = urlLang || sessionStorage.getItem('preferredLanguage') || 'en';
        this.switchLanguage(savedLanguage);
    }

    switchLanguage(language) {
        if (this.currentLanguage === language) return;

        this.currentLanguage = language;
        appState.currentLanguage = language;

        // Update button states
        domCache.languageButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === language);
        });

        // Update all translatable elements
        this.updatePageContent(language);

        // Save preference for current session only
        sessionStorage.setItem('preferredLanguage', language);

        // Emit event for other modules
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language } }));
    }

    updatePageContent(language) {
        // Handle standard [data-en][data-kn] elements
        document.querySelectorAll('[data-en][data-kn]').forEach(element => {
            const content = element.dataset[language] || element.textContent;

            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                // Inputs/textareas: update placeholder text
                element.placeholder = content;
            } else if (/<[a-z][\s\S]*>/i.test(content)) {
                // Content contains HTML tags (e.g. <strong>) — use innerHTML
                element.innerHTML = content;
            } else {
                // Plain text — use textContent (XSS-safe)
                element.textContent = content;
            }
        });

        // Handle form inputs/textareas using data-placeholder-en / data-placeholder-kn
        document.querySelectorAll('[data-placeholder-en][data-placeholder-kn]').forEach(element => {
            const text = element.getAttribute(`data-placeholder-${language}`);
            if (text) element.placeholder = text;
        });

        // Update <html lang> attribute for accessibility & SEO
        domCache.html.lang = language;

        // Update direction for RTL if needed
        domCache.html.dir = languageConfig[language].direction;
    }
}

// ========================================
// 2. MOBILE MENU HANDLER
// ========================================

class MobileMenuHandler {
    constructor() {
        this.init();
    }

    init() {
        domCache.mobileMenuToggle?.addEventListener('click', () => this.toggle());
        
        // Close menu when a link is clicked
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => this.close(true));
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar') && appState.mobileMenuOpen) {
                this.close();
            }
        });
    }

    toggle() {
        appState.mobileMenuOpen ? this.close() : this.open();
    }

    open() {
        appState.mobileMenuOpen = true;
        domCache.navMenu?.classList.add('active');
        iosScrollLock.lock();
        this.animateMenuToggle(true);
    }

    close(isNavigating = false) {
        appState.mobileMenuOpen = false;
        domCache.navMenu?.classList.remove('active');
        iosScrollLock.unlock(isNavigating);
        this.animateMenuToggle(false);
    }

    animateMenuToggle(open) {
        const spans = domCache.mobileMenuToggle.querySelectorAll('span');
        if (open) {
            spans[0].style.transform = 'rotate(45deg) translate(10px, 10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    }
}

// ========================================
// 3. HEADER SCROLL EFFECT
// ========================================

class HeaderScrollEffect {
    constructor() {
        this.lastScrollTop = 0;
        this.ticking = false;
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.onScroll(), { passive: true });
    }

    onScroll() {
        if (!this.ticking) {
            requestAnimationFrame(() => {
                this.handleScroll();
                this.ticking = false;
            });
            this.ticking = true;
        }
    }

    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add shadow effect when scrolled
        if (scrollTop > 50) {
            domCache.header?.classList.add('scrolled');
        } else {
            domCache.header?.classList.remove('scrolled');
        }

        this.lastScrollTop = scrollTop;
    }
}

// ========================================
// 4. SMOOTH SCROLL BEHAVIOR
// ========================================

class SmoothScroller {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => this.handleAnchorClick(e));
        });
    }

    handleAnchorClick(e) {
        const href = e.currentTarget.getAttribute('href');
        if (href === '#') return;

        // Prevent default scrolling for appointment modal links
        if (href === '#appointment') {
            e.preventDefault();
            return;
        }

        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            this.scrollToElement(target);
        }
    }

    scrollToElement(element) {
        const headerEl = domCache.header;
        const offset = (headerEl ? headerEl.getBoundingClientRect().height : 80) + 8;
        requestAnimationFrame(() => {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    }
}

// ========================================
// 5. INTERSECTION OBSERVER - FOR ANIMATIONS
// ========================================

class AnimationObserver {
    constructor() {
        this.init();
    }

    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -30px 0px'  // Reduced from -100px to prevent cards stuck invisible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                    // Clear inline opacity after animation so element is guaranteed visible
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.animation = '';
                    }, 850);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements with data-aos attribute
        document.querySelectorAll('[data-aos]').forEach(element => {
            element.style.opacity = '0';
            observer.observe(element);
        });
    }
}

// ========================================
// 6. CONTACT FORM HANDLER
// ========================================

class ContactFormHandler {
    constructor() {
        this.init();
    }

    init() {
        domCache.contactForm?.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = {
            name: domCache.contactForm.querySelector('input[type="text"]').value,
            phone: domCache.contactForm.querySelector('input[type="tel"]').value,
            email: domCache.contactForm.querySelector('input[type="email"]').value,
            service: domCache.contactForm.querySelector('#leadService')?.value || '',
            message: domCache.contactForm.querySelector('textarea').value
        };

        // Validate form
        if (!this.validateForm(formData)) {
            this.showMessage('Please enter your name, phone number, and select a service.', 'error');
            return;
        }

        // Submit
        this.submitForm(formData);
    }

    validateForm(data) {
        const phoneRegex = /^[0-9]{10}$/;
        return (
            data.name.trim().length > 1 &&
            phoneRegex.test(data.phone.replace(/\D/g, '')) &&
            data.service.trim().length > 0
        );
    }

    async submitForm(formData) {
        const submitBtn = domCache.contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Connecting...';

        try {
            // Build WhatsApp message with lead details
            const lines = [
                `Hi FinGranz! I found your website and need guidance.`,
                ``,
                `👤 Name: ${formData.name}`,
                `📞 Phone: ${formData.phone}`,
                formData.email ? `📧 Email: ${formData.email}` : null,
                `📌 Topic: ${formData.service}`,
                formData.message.trim() ? `📝 Message: ${formData.message}` : null
            ].filter(Boolean).join('\n');

            const waNumber = '918073698789'; // Main contact number
            const waURL = `https://wa.me/${waNumber}?text=${encodeURIComponent(lines)}`;

            this.showMessage('✅ Request received! Opening WhatsApp to connect you…', 'success');
            domCache.contactForm.reset();

            // Open WhatsApp after short delay
            setTimeout(() => {
                window.open(waURL, '_blank');
            }, 1000);

        } catch (error) {
            console.error('Form submission error:', error);
            this.showMessage('Something went wrong. Please try calling or WhatsApp directly.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    }

    showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message form-message-${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            padding: 12px 16px;
            margin-bottom: 16px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            animation: slideDown 0.3s ease-out;
            background-color: ${type === 'success' ? '#10b981' : '#ef4444'};
        `;

        const targetElement = domCache.contactForm.querySelector('input[type="text"]');
        targetElement.parentNode.insertBefore(messageDiv, targetElement);

        // Remove message after 4 seconds
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            messageDiv.style.transition = 'opacity 0.3s ease-out';
            setTimeout(() => messageDiv.remove(), 300);
        }, 4000);
    }
}

// ========================================
// 7. PERFORMANCE OPTIMIZATION
// ========================================

class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Preconnect to external resources
        this.addResourceHints();
    }

    addResourceHints() {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = 'https://fonts.googleapis.com';
        document.head.appendChild(link);
    }
}

// ========================================
// 8. ANALYTICS & TRACKING
// ========================================

class AnalyticsTracker {
    constructor() {
        this.init();
    }

    init() {
        // Track page view
        this.trackEvent('page_view', {
            page_title: document.title,
            page_path: window.location.pathname
        });

        // Track CTA clicks
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.trackEvent('cta_click', {
                    button_text: btn.textContent,
                    button_class: btn.className
                });
            });
        });

        // Track section views
        this.trackSectionViews();
    }

    trackEvent(eventName, eventData = {}) {
        console.log('📊 Event:', eventName, eventData);
        
        // Send to analytics service (e.g., Google Analytics)
        if (window.gtag) {
            gtag('event', eventName, eventData);
        }
    }

    trackSectionViews() {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    if (sectionId) {
                        this.trackEvent('section_view', { section: sectionId });
                        sectionObserver.unobserve(entry.target);
                    }
                }
            });
        }, { threshold: 0.25 });

        document.querySelectorAll('section[id]').forEach(section => {
            sectionObserver.observe(section);
        });
    }
}

// ========================================
// 9. UTILITY HELPERS
// ========================================

const Utilities = {
    /**
     * Debounce function to optimize frequent events
     */
    debounce(func, delay) {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    },

    /**
     * Throttle function to limit function calls
     */
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * Format phone number
     */
    formatPhoneNumber(phone) {
        const cleaned = phone.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phone;
    },

    /**
     * Store data in localStorage
     */
    saveToStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.warn('LocalStorage not available');
        }
    },

    /**
     * Get data from localStorage
     */
    getFromStorage(key) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (e) {
            console.warn('LocalStorage not available');
            return null;
        }
    }
};

// ========================================
// 10. APP INITIALIZATION
// ========================================

class WebsiteApp {
    constructor() {
        this.initModules();
        this.setupEventListeners();
    }

    initModules() {
        console.log('🚀 Initializing Premium Website...');

        // Initialize all modules
        this.languageSwitcher = new LanguageSwitcher();
        this.mobileMenuHandler = new MobileMenuHandler();
        this.headerScrollEffect = new HeaderScrollEffect();
        this.smoothScroller = new SmoothScroller();
        this.animationObserver = new AnimationObserver();
        this.contactFormHandler = new ContactFormHandler();
        this.performanceOptimizer = new PerformanceOptimizer();
        this.analyticsTracker = new AnalyticsTracker();
        this.counterAnimator = new CounterAnimator();
        this.faqAccordion = new FaqAccordion();
        this.smartFormPrefill = new SmartFormPrefill();
        this.achievementSlideshow = new AchievementSlideshow();
        // PhotoGallery: only init if the gallery element exists on the page
        if (document.getElementById('gallerySlideshow')) {
            this.photoGallery = new PhotoGallery();
        }
        this.appointmentModal = new AppointmentModal();

        console.log('✅ All modules initialized successfully');
    }

    setupEventListeners() {
        // Close mobile menu on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                this.mobileMenuHandler.close();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            // Close menu with Escape key
            if (e.key === 'Escape' && appState.mobileMenuOpen) {
                this.mobileMenuHandler.close();
            }
        });
    }
}

// ========================================
// 11. ERROR HANDLING & LOGGING
// ========================================

window.addEventListener('error', (event) => {
    console.error('❌ Global Error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('❌ Unhandled Promise Rejection:', event.reason);
});

// ========================================
// 12. PERFORMANCE METRICS
// ========================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⏱️ Page Load Time: ${pageLoadTime}ms`);
    });
}

// ========================================
// 13. ANIMATED COUNTERS
// ========================================

class CounterAnimator {
    constructor() {
        this.animated = new Set();
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated.has(entry.target)) {
                    this.animated.add(entry.target);
                    this.animateCounter(entry.target);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.metric-number').forEach(el => observer.observe(el));
    }

    animateCounter(el) {
        const text = el.textContent.trim();
        const numMatch = text.match(/(\d+)/);
        if (!numMatch) return;

        const target = parseInt(numMatch[1]);
        const prefix = text.slice(0, numMatch.index);
        const suffix = text.slice(numMatch.index + numMatch[0].length);
        const duration = 1600;
        const startTime = performance.now();

        const update = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            el.textContent = prefix + current + suffix;
            if (progress < 1) requestAnimationFrame(update);
        };

        requestAnimationFrame(update);
    }
}

// ========================================
// 14. FAQ ACCORDION
// ========================================

class FaqAccordion {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('.faq-question').forEach(btn => {
            btn.addEventListener('click', () => this.toggle(btn));
        });
    }

    toggle(btn) {
        const item = btn.closest('.faq-item');
        const answer = item.querySelector('.faq-answer');
        const icon = btn.querySelector('.faq-icon');
        const isOpen = btn.getAttribute('aria-expanded') === 'true';

        // Close all others
        document.querySelectorAll('.faq-item.open').forEach(openItem => {
            if (openItem !== item) {
                openItem.classList.remove('open');
                openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                openItem.querySelector('.faq-icon').textContent = '+';
                openItem.querySelector('.faq-answer').style.maxHeight = '0';
            }
        });

        // Toggle current
        if (isOpen) {
            item.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
            icon.textContent = '+';
            answer.style.maxHeight = '0';
        } else {
            item.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
            icon.textContent = '−';
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    }
}

// ========================================
// 15. SMART FORM PRE-FILL
// ========================================

class SmartFormPrefill {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('.service-card-cta[data-service]').forEach(link => {
            link.addEventListener('click', (e) => {
                const service = link.dataset.service;
                const select = document.getElementById('leadService');
                if (select && service) {
                    select.value = service;
                    // Brief visual flash to show the field was set
                    select.style.transition = 'box-shadow 0.3s';
                    select.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.5)';
                    setTimeout(() => { select.style.boxShadow = ''; }, 1200);
                }
            });
        });
    }
}

// ========================================
// 17. ACHIEVEMENT SLIDESHOW
// ========================================

class AchievementSlideshow {
    constructor() {
        this.el = document.getElementById('achievementSlideshow');
        if (!this.el) return;
        this.slides = [...this.el.querySelectorAll('.slide')];
        this.dots   = [...this.el.querySelectorAll('.slideshow-dot')];
        this.total   = this.slides.length;
        this.current = 0;
        this.interval = 4000;
        this.timer    = null;
        this.prevBtn  = document.getElementById('slidePrev');
        this.nextBtn  = document.getElementById('slideNext');
        this.init();
    }

    goTo(index) {
        this.slides[this.current].classList.remove('active');
        this.dots[this.current].classList.remove('active');
        this.current = ((index % this.total) + this.total) % this.total;
        this.slides[this.current].classList.add('active');
        this.dots[this.current].classList.add('active');
    }

    next() { this.goTo(this.current + 1); }
    prev() { this.goTo(this.current - 1); }

    startAuto() { this.timer = setInterval(() => this.next(), this.interval); }
    stopAuto()  { clearInterval(this.timer); }
    restart()   { this.stopAuto(); this.startAuto(); }

    init() {
        this.nextBtn?.addEventListener('click', () => { this.next(); this.restart(); });
        this.prevBtn?.addEventListener('click', () => { this.prev(); this.restart(); });

        this.dots.forEach((dot, i) => {
            dot.addEventListener('click', () => { this.goTo(i); this.restart(); });
        });

        // Pause on hover
        this.el.addEventListener('mouseenter', () => this.stopAuto());
        this.el.addEventListener('mouseleave', () => this.startAuto());

        // Swipe support on mobile
        let startX = 0;
        this.el.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
        this.el.addEventListener('touchend', e => {
            const diff = startX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) { diff > 0 ? this.next() : this.prev(); this.restart(); }
        });

        // Keyboard: left/right arrows when focused inside slideshow
        this.el.setAttribute('tabindex', '0');
        this.el.addEventListener('keydown', e => {
            if (e.key === 'ArrowRight') { this.next(); this.restart(); }
            if (e.key === 'ArrowLeft')  { this.prev(); this.restart(); }
        });

        this.startAuto();
    }
}

// ========================================
// 18. PHOTO GALLERY LIGHTBOX
// ========================================

class PhotoGallery {
    constructor() {
        this.el       = document.getElementById('gallerySlideshow');
        if (!this.el) return;
        this.slides   = [...this.el.querySelectorAll('.gsl-slide')];
        this.thumbs   = [...this.el.querySelectorAll('.gsl-thumb')];
        this.bar      = document.getElementById('gslProgressBar');
        this.btnPrev  = document.getElementById('gslPrev');
        this.btnNext  = document.getElementById('gslNext');
        this.total    = this.slides.length;
        this.current  = 0;
        this.interval = 5000;
        this.timer    = null;
        // Set --gsl-img CSS variable on each slide for blurred background
        this.slides.forEach(slide => {
            const img = slide.querySelector('.gsl-img');
            if (img) slide.style.setProperty('--gsl-img', `url('${img.getAttribute('src')}')`);
        });
        this.init();
    }

    goTo(index) {
        this.slides[this.current].classList.remove('active');
        this.thumbs[this.current].classList.remove('active');
        this.current = ((index % this.total) + this.total) % this.total;
        this.slides[this.current].classList.add('active');
        this.thumbs[this.current].classList.add('active');
        // Scroll only the thumb strip horizontally — never the page
        const strip = this.el.querySelector('#gslThumbs');
        const thumb = this.thumbs[this.current];
        if (strip && thumb) {
            const thumbLeft  = thumb.offsetLeft;
            const thumbWidth = thumb.offsetWidth;
            const stripWidth = strip.offsetWidth;
            strip.scrollTo({ left: thumbLeft - (stripWidth / 2) + (thumbWidth / 2), behavior: 'smooth' });
        }
        this.resetBar();
    }

    next() { this.goTo(this.current + 1); }
    prev() { this.goTo(this.current - 1); }

    resetBar() {
        if (!this.bar) return;
        this.bar.style.transition = 'none';
        this.bar.style.width = '0%';
        this.bar.offsetHeight;
        this.bar.style.transition = `width ${this.interval}ms linear`;
        this.bar.style.width = '100%';
    }

    startAuto() {
        this.resetBar();
        this.timer = setInterval(() => this.next(), this.interval);
    }

    stopAuto() {
        clearInterval(this.timer);
        if (this.bar) { this.bar.style.transition = 'none'; this.bar.style.width = '0%'; }
    }

    restart() { this.stopAuto(); this.startAuto(); }

    init() {
        this.btnPrev?.addEventListener('click', () => { this.prev(); this.restart(); });
        this.btnNext?.addEventListener('click', () => { this.next(); this.restart(); });

        this.thumbs.forEach((t, i) => {
            t.addEventListener('click', () => { this.goTo(i); this.restart(); });
        });

        this.el.addEventListener('mouseenter', () => this.stopAuto());
        this.el.addEventListener('mouseleave', () => this.startAuto());

        let startX = 0;
        this.el.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
        this.el.addEventListener('touchend', e => {
            const diff = startX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) { diff > 0 ? this.next() : this.prev(); this.restart(); }
        });

        document.addEventListener('keydown', e => {
            if (document.activeElement?.closest('#gallerySlideshow')) {
                if (e.key === 'ArrowRight') { this.next(); this.restart(); }
                if (e.key === 'ArrowLeft')  { this.prev(); this.restart(); }
            }
        });

        this.startAuto();
    }
}

// ========================================
// 19. APPOINTMENT MODAL
// ========================================

class AppointmentModal {
    constructor() {
        this.overlay = document.getElementById('appointmentModalOverlay');
        this.closeBtn = document.getElementById('appointmentModalClose');
        this.init();
    }

    init() {
        // Open on Book Appointment click
        document.querySelectorAll('a[href="#appointment"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.open();
            });
        });

        // Close on X button
        this.closeBtn?.addEventListener('click', () => this.close());

        // Close on overlay backdrop click
        this.overlay?.addEventListener('click', (e) => {
            if (e.target === this.overlay) this.close();
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.overlay?.hidden) this.close();
        });
    }

    open() {
        if (!this.overlay) return;

        this.overlay.hidden = false;
        iosScrollLock.lock();
        this.closeBtn.focus();
    }

    close() {
        if (!this.overlay) return;
        this.overlay.hidden = true;
        iosScrollLock.unlock();
    }
}

// ========================================
// 16. START APPLICATION
// ========================================

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.app = new WebsiteApp();
    });
} else {
    window.app = new WebsiteApp();
}

// ========================================
// 14. SERVICE WORKER REGISTRATION
// ========================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when service-worker.js is created
        // navigator.serviceWorker.register('/service-worker.js')
        //     .then(reg => console.log('✅ Service Worker registered'))
        //     .catch(err => console.log('❌ Service Worker registration failed'));
    });
}

// ========================================
// 16. LOCAL RECOGNITION PHOTO GRID
// ========================================
(function () {
    function renderLocalRecognition() {
        const grid = document.getElementById('localRecognitionGrid');
        if (!grid) return;
        const photos = window.LOCAL_RECOGNITION_PHOTOS;
        if (!photos || photos.length === 0) {
            grid.style.display = 'none';
            return;
        }
        // Build URL safely
        function makeUrl(file) {
            return 'images/Local%20%26%20National%20Recognition/' +
                file.replace(/ /g, '%20').replace(/\(/g, '%28').replace(/\)/g, '%29');
        }

        grid.innerHTML = photos.map(function (p, i) {
            return `<div class="rec-slide" data-index="${i}">
                <img src="${makeUrl(p.file)}" alt="${p.caption}" loading="lazy">
                <div class="rec-slide-caption">${p.caption}</div>
            </div>`;
        }).join('');

        const slides = Array.from(grid.querySelectorAll('.rec-slide'));
        let current = 0;

        function updateCarousel() {
            slides.forEach(function(slide, i) {
                slide.classList.remove('rec-active', 'rec-prev', 'rec-next', 'rec-far-prev', 'rec-far-next', 'rec-far');
                const diff = ((i - current) % slides.length + slides.length) % slides.length;
                const normalized = diff <= slides.length / 2 ? diff : diff - slides.length;
                if      (normalized === 0)  slide.classList.add('rec-active');
                else if (normalized === -1) slide.classList.add('rec-prev');
                else if (normalized === 1)  slide.classList.add('rec-next');
                else if (normalized === -2) slide.classList.add('rec-far-prev');
                else if (normalized === 2)  slide.classList.add('rec-far-next');
                else                        slide.classList.add('rec-far');
            });
        }
        updateCarousel();

        document.getElementById('recPrev').addEventListener('click', function() {
            current = (current - 1 + slides.length) % slides.length;
            updateCarousel();
        });
        document.getElementById('recNext').addEventListener('click', function() {
            current = (current + 1) % slides.length;
            updateCarousel();
        });

        // Touch swipe
        let tx = 0;
        grid.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
        grid.addEventListener('touchend', e => {
            const diff = tx - e.changedTouches[0].clientX;
            if (diff > 50)       { current = (current + 1) % slides.length; updateCarousel(); }
            else if (diff < -50) { current = (current - 1 + slides.length) % slides.length; updateCarousel(); }
        }, { passive: true });

        // Click side cards to navigate
        slides.forEach(function(slide, i) {
            slide.addEventListener('click', function() {
                if (slide.classList.contains('rec-active')) return;
                current = i; updateCarousel();
            });
        });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderLocalRecognition);
    } else {
        renderLocalRecognition();
    }
}());

// 17. EXPORT FOR TESTING
// ========================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LanguageSwitcher,
        MobileMenuHandler,
        HeaderScrollEffect,
        SmoothScroller,
        AnimationObserver,
        ContactFormHandler,
        PerformanceOptimizer,
        AnalyticsTracker,
        Utilities,
        WebsiteApp,
        AppointmentModal
    };
}
