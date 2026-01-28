// ===== Countdown Timer =====
// Set launch date (30 days from now as example - customize this!)
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30); // 30 days from now

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate.getTime() - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the DOM
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    // If countdown is finished
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initialize countdown immediately
updateCountdown();

// ===== Email Signup Form Handling =====
const form = document.getElementById('signupForm');
const successMessage = document.getElementById('successMessage');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = emailInput.value;
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(email)) {
        // Store email (in a real app, this would be sent to a server/API)
        console.log('Email submitted:', email);
        
        // You can add your API call here, for example:
        // fetch('/api/subscribe', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email: email })
        // });
        
        // Show success message
        successMessage.classList.add('show');
        
        // Clear form
        emailInput.value = '';
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    } else {
        // Show error message for invalid email
        alert('Please enter a valid email address');
    }
});

// ===== Parallax Background Effect =====
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    // Apply subtle parallax effect to background
    document.body.style.backgroundPosition = `center ${scrolled * 0.5}px`;
});

// ===== Intersection Observer for Fade-in Animations =====
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

// Observe main content elements for animation
document.querySelectorAll('.main-content > *').forEach(el => {
    observer.observe(el);
});

// ===== Smooth Scroll Enhancement (Optional) =====
// Add smooth scrolling behavior to any anchor links if needed
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

// ===== Add Loading State to Submit Button =====
form.addEventListener('submit', function(e) {
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Add loading state
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;
    
    // Simulate API call delay (remove this in production)
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1000);
});

// ===== Console Welcome Message =====
console.log('%c🍵 Welcome to Royal Chai!', 'font-size: 20px; color: #D4AF37; font-weight: bold;');
console.log('%cBrew the Royal Tradition', 'font-size: 14px; color: #FFF8E7;');
