// ========================================
// PREMIUM PROFESSIONAL WEBSITE - JavaScript
// Modern ES6+, Production-Grade
// ========================================

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
        
        // Load saved language preference
        const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
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

        // Save preference
        localStorage.setItem('preferredLanguage', language);

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
        const placeholderKey = `placeholder-${language}`;
        document.querySelectorAll('[data-placeholder-en][data-placeholder-kn]').forEach(element => {
            const text = element.dataset[placeholderKey];
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
            link.addEventListener('click', () => this.close());
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
        this.animateMenuToggle(true);
    }

    close() {
        appState.mobileMenuOpen = false;
        domCache.navMenu?.classList.remove('active');
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
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
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

        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            this.scrollToElement(target);
        }
    }

    scrollToElement(element) {
        const offset = 80; // Header height
        const targetPosition = element.offsetTop - offset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
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
                `Hi Bharosa Fin! I found your website and need guidance.`,
                ``,
                `👤 Name: ${formData.name}`,
                `📞 Phone: ${formData.phone}`,
                formData.email ? `📧 Email: ${formData.email}` : null,
                `📌 Service: ${formData.service}`,
                formData.message.trim() ? `📝 Message: ${formData.message}` : null
            ].filter(Boolean).join('\n');

            const waNumber = '919XXXXXXXXX'; // ⚠️ Replace with real number e.g. 919876543210
            const waURL = `https://wa.me/${waNumber}?text=${encodeURIComponent(lines)}`;

            this.showMessage('✅ Request received! Opening WhatsApp to connect you with Rathnakar…', 'success');
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
        // Lazy load images if needed
        if ('IntersectionObserver' in window) {
            this.setupLazyLoading();
        }

        // Preconnect to external resources
        this.addResourceHints();
    }

    setupLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
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
        this.articleModal = new ArticleModal();
        this.counterAnimator = new CounterAnimator();
        this.faqAccordion = new FaqAccordion();
        this.smartFormPrefill = new SmartFormPrefill();
        this.achievementSlideshow = new AchievementSlideshow();
        this.photoGallery = new PhotoGallery();

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
// 13. ARTICLE MODAL (KNOWLEDGE HUB)
// ========================================

const ARTICLES = {
    'term-insurance': {
        category: { en: 'Insurance', kn: 'ವಿಮೆ' },
        title: {
            en: 'Understanding Term Insurance: A Comprehensive Guide',
            kn: 'ಅವಧಿ ವಿಮೆ ಅರ್ಥ: ಸಮಗ್ರ ಮಾರ್ಗದರ್ಶನ'
        },
        body: {
            en: `
                <h3>What is Term Insurance?</h3>
                <p>Term insurance is the simplest and purest form of life insurance. It provides financial protection to your family for a fixed period (the "term") — typically 20 to 40 years. If you pass away during this period, your nominees receive a tax-free lump sum (the sum assured). If you survive the term, the policy simply ends — there is no maturity payout.</p>
                <h3>Why is it the Most Recommended?</h3>
                <ul>
                    <li><strong>Affordable:</strong> For ₹10–15 lakh annual income earners, a ₹1 crore cover typically costs only ₹700–1,200/month.</li>
                    <li><strong>High coverage:</strong> You get the most coverage per rupee of premium — unlike traditional endowment or ULIP plans.</li>
                    <li><strong>Tax benefit:</strong> Premiums are deductible under Section 80C; the payout is tax-free under Section 10(10D).</li>
                    <li><strong>Pure protection:</strong> No complex investment components — just straightforward, honest coverage.</li>
                </ul>
                <h3>How Much Cover Do You Need?</h3>
                <p>A common rule of thumb: <strong>10–15 times your annual income</strong>, plus any outstanding loans (home loan, car loan, etc.). For example, if you earn ₹8 lakh/year and have a ₹20 lakh home loan, aim for at least ₹1 crore cover.</p>
                <h3>Key Things to Check Before Buying</h3>
                <ul>
                    <li>Claim Settlement Ratio of the insurer (look for 95%+)</li>
                    <li>Policy term — should ideally cover until retirement age (60–65)</li>
                    <li>Riders — consider accidental death benefit and critical illness riders</li>
                    <li>Declaration accuracy — always disclose medical history honestly to avoid claim rejection</li>
                </ul>
                <p style="background:#eff6ff;padding:14px 18px;border-radius:8px;border-left:3px solid #3b82f6;"><strong>Need personal guidance?</strong> Every family's situation is different. Contact Rathnakar for a free, no-pressure consultation to find the right plan for you.</p>
            `,
            kn: `
                <h3>ಟರ್ಮ್ ವಿಮೆ ಎಂದರೇನು?</h3>
                <p>ಟರ್ಮ್ ವಿಮೆ ಅತ್ಯಂತ ಸರಳ ಮತ್ತು ಶುದ್ಧ ಜೀವನ ವಿಮೆ. ನೀವು ನಿಗದಿತ ಅವಧಿಯಲ್ಲಿ (ಸಾಮಾನ್ಯವಾಗಿ 20–40 ವರ್ಷ) ನಿಧನರಾದರೆ, ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೆ ತೆರಿಗೆ-ಮುಕ್ತ ಮೊತ್ತ ನೀಡಲಾಗುತ್ತದೆ. ನೀವು ಬದುಕಿ ಉಳಿದರೆ, ಪಾಲಿಸಿ ಮುಗಿಯುತ್ತದೆ — ಯಾವ ಮರಳುವ ಮೊತ್ತವೂ ಇಲ್ಲ.</p>
                <h3>ಏಕೆ ಶಿಫಾರಸು?</h3>
                <ul>
                    <li><strong>ಅಗ್ಗ:</strong> ₹1 ಕೋಟಿ ಕವರ್‌ಗೆ ತಿಂಗಳಿಗೆ ಕೇವಲ ₹700–1,200 ಸಾಕು.</li>
                    <li><strong>ಹೆಚ್ಚಿನ ರಕ್ಷಣೆ:</strong> ಪ್ರತಿ ರೂಪಾಯಿ ಪ್ರೀಮಿಯಂಗೆ ಅತ್ಯಧಿಕ ಕವರ್.</li>
                    <li><strong>ತೆರಿಗೆ ಪ್ರಯೋಜನ:</strong> 80C ಅಡಿ ಪ್ರೀಮಿಯಂ ಕಡಿತ; 10(10D) ಅಡಿ ಮೊತ್ತ ತೆರಿಗೆ-ಮುಕ್ತ.</li>
                </ul>
                <h3>ಎಷ್ಟು ಕವರ್ ಬೇಕು?</h3>
                <p>ನಿಮ್ಮ ವಾರ್ಷಿಕ ಆದಾಯದ <strong>10–15 ಪಟ್ಟು</strong>, ಜೊತೆಗೆ ಬಾಕಿ ಸಾಲ (ಗೃಹ ಸಾಲ ಇತ್ಯಾದಿ). ₹8 ಲಕ್ಷ ಆದಾಯ ಮತ್ತು ₹20 ಲಕ್ಷ ಸಾಲ ಇದ್ದರೆ, ಕನಿಷ್ಠ ₹1 ಕೋಟಿ ಕವರ್ ತೆಗೆದುಕೊಳ್ಳಿ.</p>
                <p style="background:#eff6ff;padding:14px 18px;border-radius:8px;border-left:3px solid #3b82f6;"><strong>ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ ಬೇಕೇ?</strong> ರತ್ನಾಕರ ಅವರನ್ನು ಉಚಿತ ಸಲಹೆಗಾಗಿ ಸಂಪರ್ಕಿಸಿ.</p>
            `
        }
    },
    'health-myths': {
        category: { en: 'Health', kn: 'ಆರೋಗ್ಯ' },
        title: {
            en: 'Health Insurance Myths Debunked',
            kn: 'ಆರೋಗ್ಯ ವಿಮೆ ತಪ್ಪು ಕಲ್ಪನೆಗಳು — ಸತ್ಯ ತಿಳಿಯಿರಿ'
        },
        body: {
            en: `
                <h3>Myth 1: "My employer's group insurance is enough"</h3>
                <p><strong>Reality:</strong> Group policies typically cover only ₹2–5 lakh — barely enough for a major surgery. Coverage ends the day you leave the job. It doesn't cover your parents. And it doesn't follow you into retirement. A personal health plan is essential alongside any group cover.</p>
                <h3>Myth 2: "I'm young and healthy — I'll buy later"</h3>
                <p><strong>Reality:</strong> Buying early locks in lower premiums for life. Waiting means higher premiums, stricter health checks, and risk of pre-existing conditions making you uninsurable. The best time to buy health insurance is when you don't need it.</p>
                <h3>Myth 3: "All health insurance plans are the same"</h3>
                <p><strong>Reality:</strong> Plans differ significantly in: waiting periods for pre-existing diseases (2–4 years), room rent limits, sub-limits on specific treatments, co-payment clauses, and network hospital coverage. Reading the fine print — or getting guidance — matters a lot.</p>
                <h3>Myth 4: "Cashless means I pay nothing"</h3>
                <p><strong>Reality:</strong> Cashless means the hospital bills the insurer directly — but you may still pay co-payments, non-covered items, room upgrade costs, or amounts exceeding sub-limits.</p>
                <h3>Myth 5: "Claims always get rejected"</h3>
                <p><strong>Reality:</strong> Most claim rejections are due to: non-disclosure during purchase, claiming before waiting periods end, or choosing a non-network hospital. With correct documentation and guidance, most valid claims are settled.</p>
                <p style="background:#eff6ff;padding:14px 18px;border-radius:8px;border-left:3px solid #3b82f6;"><strong>Have a claim issue?</strong> Rathnakar provides free, independent claim guidance — whether you bought your policy through him or not.</p>
            `,
            kn: `
                <h3>ತಪ್ಪು ಕಲ್ಪನೆ 1: "ನಮ್ಮ ಕಂಪನಿ ವಿಮೆ ಸಾಕು"</h3>
                <p><strong>ಸತ್ಯ:</strong> ಗ್ರೂಪ್ ಪಾಲಿಸಿ ಸಾಮಾನ್ಯವಾಗಿ ₹2–5 ಲಕ್ಷ — ದೊಡ್ಡ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೆ ಸಾಲದು. ಕೆಲಸ ಬಿಟ್ಟ ದಿನ ಕವರ್ ಮುಗಿಯುತ್ತದೆ. ಪೋಷಕರಿಗೆ ಕವರ್ ಇಲ್ಲ. ಖಾಸಗಿ ಆರೋಗ್ಯ ಪಾಲಿಸಿ ಅಗತ್ಯ.</p>
                <h3>ತಪ್ಪು ಕಲ್ಪನೆ 2: "ಈಗ ಆರೋಗ್ಯವಾಗಿದ್ದೇನೆ — ನಂತರ ತೆಗೆದುಕೊಳ್ಳುತ್ತೇನೆ"</h3>
                <p><strong>ಸತ್ಯ:</strong> ಬೇಗ ತೆಗೆದುಕೊಂಡಷ್ಟೂ ಕಡಿಮೆ ಪ್ರೀಮಿಯಂ. ತಡ ಮಾಡಿದರೆ ಹೆಚ್ಚಿನ ಪ್ರೀಮಿಯಂ, ಕಠಿಣ ಆರೋಗ್ಯ ತಪಾಸಣೆ, ಮತ್ತು ಈಗಾಗಲೇ ಇರುವ ಕಾಯಿಲೆ ನಿರಾಕರಣೆ ಸಾಧ್ಯತೆ.</p>
                <h3>ತಪ್ಪು ಕಲ್ಪನೆ 3: "ಎಲ್ಲ ಆರೋಗ್ಯ ವಿಮೆ ಒಂದೇ"</h3>
                <p><strong>ಸತ್ಯ:</strong> ನಿರೀಕ್ಷಣ ಅವಧಿ (2–4 ವರ್ಷ), ರೂಮ್ ಬಾಡಿಗೆ ಮಿತಿ, ನಿರ್ದಿಷ್ಟ ಚಿಕಿತ್ಸೆ ಮಿತಿ, ಕೋ-ಪೇಮೆಂಟ್ — ಎಲ್ಲ ಪ್ಲ್ಯಾನ್‌ಗಳು ಬೇರೆ ಬೇರೆ. ಸರಿಯಾದ ಮಾರ್ಗದರ್ಶನ ಅಗತ್ಯ.</p>
                <p style="background:#eff6ff;padding:14px 18px;border-radius:8px;border-left:3px solid #3b82f6;"><strong>ಕ್ಲೇಮ್ ಸಮಸ್ಯೆ ಇದೆಯೇ?</strong> ರತ್ನಾಕರ ಅವರು ಉಚಿತ ಸ್ವತಂತ್ರ ಕ್ಲೇಮ್ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತಾರೆ.</p>
            `
        }
    },
    'sip-guide': {
        category: { en: 'Investment', kn: 'ವಿನಿಯೋಗ' },
        title: {
            en: 'Getting Started with SIP: Your Guide to Disciplined Investing',
            kn: 'SIP ಪ್ರಾರಂಭ: ಶಿಸ್ತಬದ್ಧ ವಿನಿಯೋಗ ಮಾರ್ಗದರ್ಶನ'
        },
        body: {
            en: `
                <h3>What is a SIP?</h3>
                <p>A Systematic Investment Plan (SIP) lets you invest a fixed amount — as little as ₹500/month — into a mutual fund at regular intervals (usually monthly). You don't need a lump sum to start, and you don't need to time the market.</p>
                <h3>How Does It Work?</h3>
                <p>Each month, a fixed amount is debited from your bank and used to purchase mutual fund units at that day's price (NAV). Over time, you buy more units when prices are low and fewer when prices are high — this is called <strong>Rupee Cost Averaging</strong>, which reduces your average cost per unit naturally.</p>
                <h3>The Power of Compounding</h3>
                <p>Starting early makes a dramatic difference. For example:</p>
                <ul>
                    <li>₹5,000/month for 20 years at 12% returns = approx. <strong>₹49.9 lakh</strong></li>
                    <li>₹5,000/month for 30 years at 12% returns = approx. <strong>₹1.76 crore</strong></li>
                </ul>
                <p>The extra 10 years more than triples the result — this is the compounding effect.</p>
                <h3>Which Type of Mutual Fund for SIP?</h3>
                <ul>
                    <li><strong>Long-term (10+ years):</strong> Large-cap or index funds — stable, lower risk</li>
                    <li><strong>Medium-term (5–10 years):</strong> Hybrid/balanced funds</li>
                    <li><strong>Short-term (3–5 years):</strong> Debt funds</li>
                </ul>
                <h3>Common Mistakes to Avoid</h3>
                <ul>
                    <li>Stopping SIP during market downturns (this is actually the best time to invest)</li>
                    <li>Investing without a goal — always link SIP to a specific target</li>
                    <li>Not reviewing your portfolio annually</li>
                </ul>
                <p style="background:#eff6ff;padding:14px 18px;border-radius:8px;border-left:3px solid #3b82f6;"><strong>Want to start a SIP?</strong> Contact Rathnakar for free guidance on choosing the right fund and amount for your goals.</p>
            `,
            kn: `
                <h3>SIP ಎಂದರೇನು?</h3>
                <p>SIP (ವ್ಯವಸ್ಥಿತ ವಿನಿಯೋಗ ಯೋಜನೆ) ಮೂಲಕ ಪ್ರತಿ ತಿಂಗಳು ₹500 ರಿಂದ ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ನಲ್ಲಿ ಹಣ ಹೂಡಬಹುದು. ದೊಡ್ಡ ಮೊತ್ತ ಬೇಡ, ಮಾರ್ಕೆಟ್ ಟೈಮಿಂಗ್ ಬೇಡ.</p>
                <h3>ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ?</h3>
                <p>ಪ್ರತಿ ತಿಂಗಳು ಬ್ಯಾಂಕ್‌ನಿಂದ ನಿಗದಿತ ಹಣ ಕಟ್ ಆಗಿ ಫಂಡ್ ಯೂನಿಟ್‌ಗಳು ಖರೀದಿಯಾಗುತ್ತವೆ. ಬೆಲೆ ಕಡಿಮೆ ಇದ್ದಾಗ ಹೆಚ್ಚು ಯೂನಿಟ್, ಹೆಚ್ಚು ಇದ್ದಾಗ ಕಡಿಮೆ — ಇದನ್ನು <strong>ರೂಪಾಯಿ ಕಾಸ್ಟ್ ಆವರೇಜಿಂಗ್</strong> ಎನ್ನುತ್ತಾರೆ.</p>
                <h3>ಚಕ್ರಬಡ್ಡಿ ಪ್ರಯೋಜನ</h3>
                <ul>
                    <li>₹5,000/ತಿಂಗಳು × 20 ವರ್ಷ × 12% = ಅಂದಾಜು <strong>₹49.9 ಲಕ್ಷ</strong></li>
                    <li>₹5,000/ತಿಂಗಳು × 30 ವರ್ಷ × 12% = ಅಂದಾಜು <strong>₹1.76 ಕೋಟಿ</strong></li>
                </ul>
                <p>10 ವರ್ಷ ಹೆಚ್ಚು ಹೂಡಿದರೆ ಮೂರು ಪಟ್ಟು ಹೆಚ್ಚು ಆದಾಯ!</p>
                <p style="background:#eff6ff;padding:14px 18px;border-radius:8px;border-left:3px solid #3b82f6;"><strong>SIP ಪ್ರಾರಂಭಿಸಲು ಬಯಸುವಿರಾ?</strong> ರತ್ನಾಕರ ಅವರನ್ನು ಉಚಿತ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಸಂಪರ್ಕಿಸಿ.</p>
            `
        }
    }
};

class ArticleModal {
    constructor() {
        this.overlay = document.getElementById('articleModalOverlay');
        this.closeBtn = document.getElementById('modalClose');
        this.modalCta = document.getElementById('modalCta');
        this.currentLang = () => document.documentElement.lang || 'en';
        this.init();
    }

    init() {
        // Open on Read More button click
        document.querySelectorAll('.blog-read-more[data-article]').forEach(btn => {
            btn.addEventListener('click', () => this.open(btn.dataset.article));
        });

        // Close on X button
        this.closeBtn?.addEventListener('click', () => this.close());

        // Close on overlay backdrop click
        this.overlay?.addEventListener('click', (e) => {
            if (e.target === this.overlay) this.close();
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.overlay.hidden) this.close();
        });

        // Close modal before navigating to contact
        this.modalCta?.addEventListener('click', () => this.close());
    }

    open(articleId) {
        const lang = this.currentLang();
        const article = ARTICLES[articleId];
        if (!article || !this.overlay) return;

        document.getElementById('modalCategory').textContent = article.category[lang] || article.category.en;
        document.getElementById('modalTitle').textContent   = article.title[lang]    || article.title.en;
        document.getElementById('modalBody').innerHTML      = article.body[lang]     || article.body.en;

        this.overlay.hidden = false;
        document.body.style.overflow = 'hidden';
        this.closeBtn.focus();
    }

    close() {
        if (!this.overlay) return;
        this.overlay.hidden = true;
        document.body.style.overflow = '';
    }
}

// ========================================
// 14. ANIMATED COUNTERS
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
// 15. EXPORT FOR TESTING
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
        WebsiteApp
    };
}
