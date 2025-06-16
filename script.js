document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const passwordDisplay = document.getElementById('passwordDisplay');
    const lengthInput = document.getElementById('length');
    const lengthValue = document.getElementById('lengthValue');
    const uppercaseCheck = document.getElementById('uppercase');
    const lowercaseCheck = document.getElementById('lowercase');
    const numbersCheck = document.getElementById('numbers');
    const symbolsCheck = document.getElementById('symbols');
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const strengthBars = document.querySelectorAll('.strength-bar');

    // Character Sets
    const charSets = {
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };

    // --- Functions ---
    
    function generatePassword() {
        const length = lengthInput.value;
        let characterPool = '';
        let password = [];
        
        const selectedOptions = [
            { type: 'uppercase', checked: uppercaseCheck.checked },
            { type: 'lowercase', checked: lowercaseCheck.checked },
            { type: 'numbers', checked: numbersCheck.checked },
            { type: 'symbols', checked: symbolsCheck.checked }
        ].filter(option => option.checked);
        
        if (selectedOptions.length === 0) {
            alert('Please select at least one character type.');
            return;
        }

        // Build the character pool and guarantee at least one of each selected type
        selectedOptions.forEach(option => {
            characterPool += charSets[option.type];
            const charSet = charSets[option.type];
            password.push(charSet[Math.floor(Math.random() * charSet.length)]);
        });

        // Fill the rest of the password
        for (let i = password.length; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characterPool.length);
            password.push(characterPool[randomIndex]);
        }
        
        // Shuffle the password array to ensure random character positions
        for (let i = password.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [password[i], password[j]] = [password[j], password[i]];
        }
        
        passwordDisplay.textContent = password.join('');
        passwordDisplay.classList.remove('placeholder');
        updateStrengthIndicator();
    }

    function updateStrengthIndicator() {
        let score = 0;
        const length = lengthInput.value;
        const selectedOptions = [uppercaseCheck, lowercaseCheck, numbersCheck, symbolsCheck].filter(c => c.checked);

        if (length >= 12) score++;
        if (length >= 16) score++;
        if (selectedOptions.length >= 3) score++;
        if (selectedOptions.length === 4) score++;

        strengthBars.forEach((bar, index) => {
            bar.className = 'strength-bar'; // Reset
            if (index < score) {
                if (score === 1) bar.classList.add('weak');
                if (score === 2) bar.classList.add('medium');
                if (score === 3) bar.classList.add('strong');
                if (score === 4) bar.classList.add('very-strong');
            }
        });
    }

    async function copyToClipboard() {
        const password = passwordDisplay.textContent;
        if (password && !passwordDisplay.classList.contains('placeholder')) {
            try {
                await navigator.clipboard.writeText(password);
                alert('Password copied to clipboard!');
            } catch (err) {
                alert('Failed to copy password.');
            }
        }
    }

    // --- Event Listeners ---
    lengthInput.addEventListener('input', (e) => {
        lengthValue.textContent = e.target.value;
        updateStrengthIndicator();
    });
    
    [uppercaseCheck, lowercaseCheck, numbersCheck, symbolsCheck].forEach(checkbox => {
        checkbox.addEventListener('change', updateStrengthIndicator);
    });

    generateBtn.addEventListener('click', generatePassword);
    copyBtn.addEventListener('click', copyToClipboard);

    // --- Initial Call ---
    updateStrengthIndicator();
});