// ============================================
// Astrology Dashboard - JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize sidebar toggle
    initSidebar();
    
    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize charts
    initCharts();
    
    // Initialize animations
    initAnimations();
});

// ============================================
// Sidebar Toggle
// ============================================

function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    // Mobile menu button
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            sidebar.classList.add('active');
            sidebarOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Sidebar toggle (close button)
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Overlay click to close
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', function() {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Close sidebar on window resize if desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991) {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// Theme Toggle
// ============================================

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    const themeText = themeToggle.querySelector('span');
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.className = 'fas fa-sun';
            themeText.textContent = 'Light Mode';
        } else {
            themeIcon.className = 'fas fa-moon';
            themeText.textContent = 'Dark Mode';
        }
    }
}

// ============================================
// Charts Initialization
// ============================================

function initCharts() {
    // Zodiac Energy Line Chart
    const zodiacEnergyCtx = document.getElementById('zodiacEnergyChart');
    if (zodiacEnergyCtx) {
        new Chart(zodiacEnergyCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Energy Level',
                    data: [75, 82, 78, 88, 85, 90, 85],
                    borderColor: '#6c5ce7',
                    backgroundColor: 'rgba(108, 92, 231, 0.1)',
                    tension: 0.4,
                    fill: true,
                    borderWidth: 3,
                    pointRadius: 5,
                    pointBackgroundColor: '#6c5ce7',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
    
    // Planet Strength Bar Chart
    const planetStrengthCtx = document.getElementById('planetStrengthChart');
    if (planetStrengthCtx) {
        new Chart(planetStrengthCtx, {
            type: 'bar',
            data: {
                labels: ['Sun', 'Moon', 'Mars', 'Venus', 'Jupiter'],
                datasets: [{
                    label: 'Strength',
                    data: [85, 78, 92, 88, 80],
                    backgroundColor: [
                        'rgba(108, 92, 231, 0.8)',
                        'rgba(255, 215, 0, 0.8)',
                        'rgba(255, 87, 87, 0.8)',
                        'rgba(255, 159, 64, 0.8)',
                        'rgba(75, 192, 192, 0.8)'
                    ],
                    borderColor: [
                        '#6c5ce7',
                        '#ffd700',
                        '#ff5757',
                        '#ff9f40',
                        '#4bc0c0'
                    ],
                    borderWidth: 2,
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
    
    // Daily Mood Graph
    const dailyMoodCtx = document.getElementById('dailyMoodChart');
    if (dailyMoodCtx) {
        new Chart(dailyMoodCtx, {
            type: 'line',
            data: {
                labels: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM', '12 AM'],
                datasets: [{
                    label: 'Mood',
                    data: [65, 75, 85, 90, 80, 70, 65],
                    borderColor: '#ffd700',
                    backgroundColor: 'rgba(255, 215, 0, 0.1)',
                    tension: 0.4,
                    fill: true,
                    borderWidth: 3,
                    pointRadius: 5,
                    pointBackgroundColor: '#ffd700',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
}

// ============================================
// Animations
// ============================================

function initAnimations() {
    // Add fade-in animation to cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    const cards = document.querySelectorAll('.kpi-card, .chart-card, .horoscope-card, .tool-card, .table-card, .panel-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

// ============================================
// Smooth Scroll
// ============================================

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

// ============================================
// Table Search Functionality
// ============================================

const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const tableRows = document.querySelectorAll('.table tbody tr');
        
        tableRows.forEach(row => {
            const text = row.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}

// ============================================
// Notification Badge (if needed)
// ============================================

function updateNotificationBadge() {
    const notifications = document.querySelectorAll('.notification-item').length;
    // Add badge logic here if needed
}

// ============================================
// Responsive Chart Resize
// ============================================

window.addEventListener('resize', function() {
    // Charts will auto-resize, but we can add custom logic here if needed
});

