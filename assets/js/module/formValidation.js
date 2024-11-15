export function initFormValidation() {
    const form = document.getElementById('contact-form');
    const successMessage = document.querySelector('.success-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validateForm()) {
            handleSuccessfulSubmission();
        }
    });

    function validateForm() {
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;

        // Reset error states
        inputs.forEach(input => input.classList.remove('error'));

        // Validate each field
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('error');
                isValid = false;
            }
        });

        // Email validation
        const email = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            email.classList.add('error');
            isValid = false;
        }

        return isValid;
    }

    function handleSuccessfulSubmission() {
        successMessage.style.display = 'block';
        form.reset();

        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    }
}