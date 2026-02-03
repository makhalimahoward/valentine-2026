const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const askSection = document.getElementById('askSection');
const successSection = document.getElementById('successSection');

noBtn.addEventListener('mousedown', () => {
    // These lines ensure the button doesn't jump too close to the very edge of the screen
    const padding = 20; 
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const newX = Math.floor(Math.random() * maxX) + (padding / 2);
    const newY = Math.floor(Math.random() * maxY) + (padding / 2);

    noBtn.style.position = 'fixed'; 
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

/*yesBtn.addEventListener('click', () => {

    askSection.classList.add('hidden');
    successSection.classList.remove('hidden');

    setTimeout(() => {
        const phoneNumber = "0784589841"; // <-- CHANGE THIS to your number (e.g., 15551234567)
        const message = "I checked your website... and I said YES! ❤️";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
    }, 4000);
});*/

yesBtn.addEventListener('click', () => {
    const transition = document.getElementById('heartTransition');
    
    // 1. Start the heart expansion
    transition.classList.add('active');

    // 2. Wait for the heart to cover the screen (approx 0.5s)
    setTimeout(() => {
        askSection.classList.add('hidden');
        successSection.classList.remove('hidden');
        
        // 3. Fade the heart out so she can see the success message
        transition.style.opacity = '0';
        
        // 4. Trigger the WhatsApp redirect after she sees the success GIF
        setTimeout(() => {
            const phoneNumber = "0784589841"; 
            const message = "I checked your website... and I said YES! ❤️";
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }, 3500);
    }, 1000);
});