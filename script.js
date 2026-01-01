// Welcome message
console.log("%c Welcome to my Portfolio! ", "background: #38bdf8; color: #0f172a; font-size: 16px; font-weight: bold; padding: 10px;");
console.log("%c Crafted with passion by Web Developer Intern at SkillCraft Technology ", "color: #38bdf8; font-size: 12px;");

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Intersection Observer for section animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            updateActiveIndicator(entry.target.id);
        }
    });
}, {
    threshold: 0.3
});

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Update active indicator dot based on current section
function updateActiveIndicator(sectionId) {
    document.querySelectorAll('.indicator-dot').forEach(dot => {
        dot.classList.remove('active');
    });
    
    const activeDot = document.querySelector(`.indicator-dot[data-section="${sectionId}"]`);
    if (activeDot) {
        activeDot.classList.add('active');
    }
}

// Click on indicator dots to navigate
document.querySelectorAll('.indicator-dot').forEach(dot => {
    dot.addEventListener('click', () => {
        const sectionId = dot.getAttribute('data-section');
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Hover effect on indicator dots
document.querySelectorAll('.indicator-dot').forEach(dot => {
    dot.addEventListener('mouseenter', function() {
        const sectionId = this.getAttribute('data-section');
        console.log(`Hovering over: ${sectionId}`);
    });
});

// Contact Form Validation and Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameInput = contactForm.querySelector('input[name="name"]');
        const emailInput = contactForm.querySelector('input[name="email"]');
        const messageInput = contactForm.querySelector('textarea[name="message"]');
        
        let isValid = true;
        
        // Validate name
        if (nameInput.value.trim().length < 3) {
            nameInput.style.borderColor = '#ef4444';
            isValid = false;
        } else {
            nameInput.style.borderColor = '';
        }
        
        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailInput.style.borderColor = '#ef4444';
            isValid = false;
        } else {
            emailInput.style.borderColor = '';
        }
        
        // Validate message
        if (messageInput.value.trim().length < 10) {
            messageInput.style.borderColor = '#ef4444';
            isValid = false;
        } else {
            messageInput.style.borderColor = '';
        }
        
        if (isValid) {
            alert('Message sent successfully! (This is a demo - no backend configured)');
            contactForm.reset();
            // In a real application, you would send the form data to a server here
        } else {
            alert('Please fill in all fields correctly.');
        }
    });
}

// Mobile Menu Toggle (if you add a hamburger menu in the future)
function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Navbar scroll effect - add subtle effect when scrolling
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    }
});

// Set progress bar widths dynamically
document.querySelectorAll('.progress-fill').forEach((fill, index) => {
    const progressPercentages = ['95%', '90%', '85%', '75%', '70%', '88%'];
    if (index < progressPercentages.length) {
        fill.style.setProperty('--progress', progressPercentages[index]);
        fill.style.width = progressPercentages[index];
    }
});

// Animate numbers on page load
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Apply stagger animations to grid items
function applyStaggerAnimations() {
    const items = document.querySelectorAll('.projects-grid > *, .skills-grid > *, .about-highlights > *');
    items.forEach((item, index) => {
        item.style.animation = `staggerIn 0.6s ease-out forwards`;
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

applyStaggerAnimations();

// Keyboard shortcuts for navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        const sections = Array.from(document.querySelectorAll('section')).map(s => s.id);
        const activeDot = document.querySelector('.indicator-dot.active');
        if (activeDot) {
            const currentSection = activeDot.getAttribute('data-section');
            const currentIndex = sections.indexOf(currentSection);
            if (currentIndex < sections.length - 1) {
                const nextDot = document.querySelector(`.indicator-dot[data-section="${sections[currentIndex + 1]}"]`);
                if (nextDot) nextDot.click();
            }
        }
    } else if (e.key === 'ArrowUp') {
        const sections = Array.from(document.querySelectorAll('section')).map(s => s.id);
        const activeDot = document.querySelector('.indicator-dot.active');
        if (activeDot) {
            const currentSection = activeDot.getAttribute('data-section');
            const currentIndex = sections.indexOf(currentSection);
            if (currentIndex > 0) {
                const prevDot = document.querySelector(`.indicator-dot[data-section="${sections[currentIndex - 1]}"]`);
                if (prevDot) prevDot.click();
            }
        }
    }
});

console.log("%c Happy browsing! ", "color: #38bdf8; font-size: 12px; font-weight: bold;");
style="--progress: 80%;"
// Skill section animation
const skillBoxes = document.querySelectorAll('.skill-box');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

skillBoxes.forEach(box => {
    box.style.opacity = '0';
    box.style.transform = 'translateY(30px)';
    box.style.transition = 'all 0.6s ease';
    skillObserver.observe(box);
});

