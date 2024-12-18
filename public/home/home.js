document.addEventListener("DOMContentLoaded", () => {
    const movingElement = document.querySelector('.hompage_landing');
    const movementStrength = 35; 
    document.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event; 
        const centerX = window.innerWidth / 2; 
        const centerY = window.innerHeight / 2; 

        const moveX = ((clientX - centerX) / centerX) * movementStrength;
        const moveY = ((clientY - centerY) / centerY) * movementStrength;

        movingElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    const pic1 = document.querySelector('.pic_1');
    document.addEventListener('mousemove', (event) => {
        const screenWidth = window.innerWidth;
        const hue = (event.clientX / screenWidth) * 360;
        pic1.style.filter = `hue-rotate(${hue}deg)`;
    });

    const pic2 = document.querySelector('.pic_2');
    document.addEventListener('mousemove', (event) => {
        const screenWidth = window.innerWidth;
        const hue = (event.clientX / screenWidth) * 360;
        pic2.style.filter = `hue-rotate(${hue+20}deg)`;
    });


    const pic_1 = document.querySelector('.pic_1');
    document.addEventListener('mousemove', (event) => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const xPercent = event.clientX / screenWidth;
        const yPercent = event.clientY / screenHeight;
        const skewX = (xPercent - 0.5) * 35; 
        const skewY = (yPercent - 0.5) * 30; 
        pic_1.style.transform = `skew(${skewX}deg, ${skewY}deg)`;
    });

    const pic_2 = document.querySelector('.pic_2');
    document.addEventListener('mousemove', (event) => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const xPercent = event.clientX / screenWidth;
        const yPercent = event.clientY / screenHeight;
        const skewX = (xPercent - 0.5) * 22; 
        const skewY = (yPercent - 0.5) * 30; 
        pic_2.style.transform = `skew(${skewX}deg, ${skewY}deg)`;
    });




});








