// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  PASSWORD LOCK
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const CORRECT_PASSWORD = "Birthday"; // ← Change this to your password
const passwordInput = document.getElementById('passwordInput');
const unlockBtn = document.getElementById('unlockBtn');
const errorMsg = document.getElementById('errorMsg');
const scene0 = document.getElementById('scene0');

function tryUnlock() {
    const entered = passwordInput.value.trim();
    if (entered === CORRECT_PASSWORD) {
        // Success - unlock
        errorMsg.classList.remove('show');
        scene0.classList.remove('active');
        // Start the journey
        goToScene(0); // Assumes you have a goToScene function
        // Play music if not already playing
        const bgMusic = document.getElementById('bgMusic');
        if (bgMusic) {
            bgMusic.volume = 0.5;
            bgMusic.play().catch(() => {});
        }
    } else {
        // Wrong password
        errorMsg.classList.add('show');
        passwordInput.value = '';
        passwordInput.focus();
        // Shake animation
        passwordInput.style.animation = 'shake 0.4s ease';
        setTimeout(() => passwordInput.style.animation = '', 400);
    }
}

// Event listeners
unlockBtn.addEventListener('click', tryUnlock);

passwordInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        tryUnlock();
    }
});

// Auto-focus on load
setTimeout(() => passwordInput.focus(), 500);

// Add shake animation
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(styleSheet);
