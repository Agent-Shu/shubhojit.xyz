document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".home_button").addEventListener("click", () => {
        window.location.href = "/";
    });

    document.querySelector(".about_button").addEventListener("click", () => {
        window.location.href = "/about";
    });


    const pic1 = document.querySelector('.pic_1');
    document.addEventListener('mousemove', (event) => {
        const screenWidth = window.innerWidth;
        const minHue = -90;   
        const maxHue = 90; 
        const hue = minHue + ((event.clientX / screenWidth) * (maxHue - minHue));
        pic1.style.filter = `hue-rotate(${hue}deg)`;
    });

    const pic2 = document.querySelector('.pic_2');
    document.addEventListener('mousemove', (event) => {
        const screenWidth = window.innerWidth;
        const minHue = -90;   
        const maxHue = 90; 
        const hue = minHue + ((event.clientX / screenWidth) * (maxHue - minHue));
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