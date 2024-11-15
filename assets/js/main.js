// Import modules
import { initThemeToggle } from './modules/themeToggle.js';
import { initFormValidation } from './modules/formValidation.js';
import { initFunFacts } from './modules/funFacts.js';

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initFormValidation();
    initFunFacts();
});