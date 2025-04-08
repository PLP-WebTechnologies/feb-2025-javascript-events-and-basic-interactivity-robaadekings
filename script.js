document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    themeToggle.addEventListener('click', function() {
        document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });

    // Event Listeners Demo
    const clickMeBtn = document.getElementById('click-me');
    const hoverMeBtn = document.getElementById('hover-me');
    const doubleClickBtn = document.getElementById('double-click');
    const eventOutput = document.getElementById('event-output');

    clickMeBtn.addEventListener('click', function() {
        eventOutput.textContent = 'Button was clicked!';
        eventOutput.style.color = 'var(--primary-color)';
    });

    hoverMeBtn.addEventListener('mouseenter', function() {
        eventOutput.textContent = 'Mouse entered the button!';
        eventOutput.style.color = 'var(--secondary-color)';
    });

    hoverMeBtn.addEventListener('mouseleave', function() {
        eventOutput.textContent = 'Mouse left the button!';
        eventOutput.style.color = 'var(--error-color)';
    });

    doubleClickBtn.addEventListener('dblclick', function() {
        eventOutput.textContent = 'Button was double-clicked!';
        eventOutput.style.color = 'var(--success-color)';
    });

    // Form Validation
    const userForm = document.getElementById('user-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const formSuccess = document.getElementById('form-success');

    // Real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            return false;
        } else if (nameInput.value.trim().length < 3) {
            nameError.textContent = 'Name must be at least 3 characters';
            return false;
        } else {
            nameError.textContent = '';
            return true;
        }
    }

    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            return false;
        } else if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }

    function validatePassword() {
        if (passwordInput.value === '') {
            passwordError.textContent = 'Password is required';
            return false;
        } else if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters';
            return false;
        } else {
            passwordError.textContent = '';
            return true;
        }
    }

    // Form submission
    userForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        
        if (isNameValid && isEmailValid && isPasswordValid) {
            formSuccess.textContent = 'Form submitted successfully!';
            formSuccess.style.display = 'block';
            userForm.reset();
            
            // Hide success message after 3 seconds
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 3000);
        }
    });

    // Interactive Elements
    // Counter
    const decrementBtn = document.getElementById('decrement');
    const incrementBtn = document.getElementById('increment');
    const counterValue = document.getElementById('counter-value');
    let count = 0;

    decrementBtn.addEventListener('click', function() {
        count--;
        updateCounter();
    });

    incrementBtn.addEventListener('click', function() {
        count++;
        updateCounter();
    });

    function updateCounter() {
        counterValue.textContent = count;
        counterValue.style.color = count > 0 ? 'var(--success-color)' : 
                                 count < 0 ? 'var(--error-color)' : 
                                 'var(--text-color)';
    }

    // Slider
    const slider = document.getElementById('slider');
    const sliderValue = document.getElementById('slider-value');

    slider.addEventListener('input', function() {
        sliderValue.textContent = this.value;
        const percentage = this.value / (this.max - this.min) * 100;
        this.style.background = `linear-gradient(to right, var(--primary-color) ${percentage}%, #ddd ${percentage}%)`;
    });

    // Initialize slider background
    slider.dispatchEvent(new Event('input'));

    // Accordion
    const accordionBtns = document.querySelectorAll('.accordion-btn');

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});