document.addEventListener("DOMContentLoaded", () => {

    const movingElement = document.querySelector('.hompage_landing');
    const movementStrength = 40; 
    document.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event; 
        const centerX = window.innerWidth / 2; 
        const centerY = window.innerHeight / 2; 

        const moveX = ((clientX - centerX) / centerX) * movementStrength;
        const moveY = ((clientY - centerY) / centerY) * movementStrength;

        movingElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });







});








