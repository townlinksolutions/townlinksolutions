// Login functionality

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;
            
            // Demo credentials check
            if (username === 'admin' && password === 'admin123') {
                // Store login status in sessionStorage (for demo)
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('username', username);
                
                if (remember) {
                    localStorage.setItem('rememberMe', 'true');
                }
                
                // Show success message
                showLoginMessage('Login successful! Redirecting...', 'success');
                
                // Redirect to dashboard after 1 second
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1000);
            } else {
                // Show error message
                showLoginMessage('Invalid credentials! Please use demo credentials.', 'error');
            }
        });
    }
    
    // Auto-fill demo credentials if remembered
    if (localStorage.getItem('rememberMe') === 'true') {
        document.getElementById('username').value = 'admin';
        document.getElementById('remember').checked = true;
    }
});

function showLoginMessage(message, type) {
    // Remove existing message if any
    const existingMsg = document.querySelector('.login-message');
    if (existingMsg) {
        existingMsg.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `login-message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 5px;
        text-align: center;
        font-weight: 600;
        background: ${type === 'success' ? '#d4edda' : '#f8d7da'};
        color: ${type === 'success' ? '#155724' : '#721c24'};
        border: 1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'};
        animation: fadeIn 0.3s ease-out;
    `;
    
    const loginForm = document.getElementById('loginForm');
    loginForm.insertBefore(messageDiv, loginForm.firstChild);
    
    if (type === 'error') {
        setTimeout(() => {
            messageDiv.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => messageDiv.remove(), 300);
        }, 3000);
    }
}
