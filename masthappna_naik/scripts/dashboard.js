// Dashboard functionality

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (sessionStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }
    
    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to logout?')) {
                sessionStorage.removeItem('isLoggedIn');
                sessionStorage.removeItem('username');
                window.location.href = 'login.html';
            }
        });
    }
    
    // Section navigation
    const navItems = document.querySelectorAll('.nav-item[data-section]');
    const sections = document.querySelectorAll('.dashboard-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding section
            const sectionId = this.getAttribute('data-section');
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === sectionId) {
                    section.classList.add('active');
                }
            });
        });
    });
    
    // Feedback filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    const feedbackItems = document.querySelectorAll('.feedback-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            feedbackItems.forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'block';
                } else if (filter === 'unread' && item.classList.contains('unread')) {
                    item.style.display = 'block';
                } else if (filter === 'important' && item.classList.contains('important')) {
                    item.style.display = 'block';
                } else if (filter !== 'all') {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Feedback actions
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent.trim();
            const feedbackItem = this.closest('.feedback-item');
            
            if (action === 'Mark as Read') {
                feedbackItem.classList.remove('unread');
                this.textContent = 'Mark as Unread';
                showDashboardNotification('Marked as read');
            } else if (action === 'Mark as Unread') {
                feedbackItem.classList.add('unread');
                this.textContent = 'Mark as Read';
                showDashboardNotification('Marked as unread');
            } else if (action === 'Archive') {
                feedbackItem.style.animation = 'fadeOut 0.3s ease-out';
                setTimeout(() => {
                    feedbackItem.style.display = 'none';
                    showDashboardNotification('Message archived');
                }, 300);
            } else if (action === 'Reply') {
                showDashboardNotification('Reply feature - Demo mode');
            }
        });
    });
    
    // Content update forms
    document.querySelectorAll('.update-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            const successMsg = document.querySelector('.success-message');
            if (successMsg) {
                successMsg.style.display = 'block';
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 3000);
            }
            
            showDashboardNotification('Content updated successfully! (Demo mode)');
            
            // Reset form
            this.reset();
        });
    });
    
    // Create visitor chart (simple simulation)
    createVisitorChart();
    
    // Update stats periodically (demo)
    updateStatsDemo();
});

function showDashboardNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'dashboard-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: #28a745;
        color: white;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideUp 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

function createVisitorChart() {
    const canvas = document.getElementById('visitorChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.parentElement.offsetWidth;
    const height = 300;
    
    canvas.width = width;
    canvas.height = height;
    
    // Sample data for the week
    const data = [320, 450, 380, 520, 600, 480, 670];
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    // Find max value for scaling
    const max = Math.max(...data);
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    const barWidth = chartWidth / data.length - 10;
    
    // Draw bars
    ctx.fillStyle = '#ff6b35';
    data.forEach((value, index) => {
        const barHeight = (value / max) * chartHeight;
        const x = padding + index * (barWidth + 10);
        const y = height - padding - barHeight;
        
        // Draw bar with gradient
        const gradient = ctx.createLinearGradient(0, y, 0, height - padding);
        gradient.addColorStop(0, '#ff6b35');
        gradient.addColorStop(1, '#f7931e');
        ctx.fillStyle = gradient;
        
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Draw value on top
        ctx.fillStyle = '#2c2c2c';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(value, x + barWidth / 2, y - 5);
        
        // Draw label at bottom
        ctx.fillText(labels[index], x + barWidth / 2, height - padding + 20);
    });
}

function updateStatsDemo() {
    // Simulate real-time updates every 5 seconds
    setInterval(() => {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            if (stat.textContent.includes(',')) {
                const currentValue = parseInt(stat.textContent.replace(/,/g, ''));
                const newValue = currentValue + Math.floor(Math.random() * 5);
                stat.textContent = newValue.toLocaleString();
            }
        });
    }, 5000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            transform: translateY(100px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
