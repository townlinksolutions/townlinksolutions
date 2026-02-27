// Contact form functionality

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                location: document.getElementById('location').value,
                age: document.getElementById('age').value,
                category: document.getElementById('category').value,
                message: document.getElementById('message').value,
                timestamp: new Date().toISOString()
            };
            
            // Simulate form submission
            console.log('Form submitted:', formData);
            
            // Show success message
            showContactSuccess();
            
            // Reset form
            contactForm.reset();
        });
    }
});

function showContactSuccess() {
    const successDiv = document.createElement('div');
    successDiv.className = 'contact-success-message';
    successDiv.innerHTML = `
        <div class="success-content">
            <div class="success-icon">✅</div>
            <h3>ಧನ್ಯವಾದಗಳು!</h3>
            <p>Your message has been received successfully.</p>
            <p>ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಸ್ವೀಕರಿಸಲಾಗಿದೆ. ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.</p>
            <button onclick="this.parentElement.parentElement.remove()" class="btn btn-primary">Close</button>
        </div>
    `;
    
    successDiv.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease-out;
    `;
    
    const successContent = successDiv.querySelector('.success-content');
    successContent.style.cssText = `
        background: white;
        padding: 3rem;
        border-radius: 15px;
        text-align: center;
        max-width: 500px;
        animation: slideUp 0.5s ease-out;
    `;
    
    document.body.appendChild(successDiv);
    
    // Auto close after 5 seconds
    setTimeout(() => {
        if (successDiv.parentElement) {
            successDiv.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => successDiv.remove(), 300);
        }
    }, 5000);
}

// Add styles
const style = document.createElement('style');
style.textContent = `
    .success-icon {
        font-size: 4rem;
        margin-bottom: 1rem;
    }
    
    .success-content h3 {
        color: var(--secondary-color);
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    
    .success-content p {
        color: var(--text-dark);
        margin-bottom: 0.5rem;
        line-height: 1.6;
    }
    
    .success-content button {
        margin-top: 1.5rem;
    }
    
    @keyframes slideUp {
        from {
            transform: translateY(50px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
