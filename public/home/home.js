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

    function updateDivPosition() {
        const absoluteDiv = document.getElementsByClassName('home_container')[0];
        if (!absoluteDiv) return;
        const scrollPosition = window.scrollY;
        const vhPosition = (scrollPosition / window.innerHeight) * 100;
        absoluteDiv.style.top = `${vhPosition}px`;
    }
    window.addEventListener('scroll', updateDivPosition);

    function scroll_down() {
        window.scrollBy({
            top: 600,      
            behavior: 'smooth' 
        });
    }
    document.getElementsByClassName('down_button')[0].addEventListener('click', scroll_down);


    const image = document.querySelector('.project_img');
    image.addEventListener('mousemove', function (e) {
        const { left, top, width, height } = image.getBoundingClientRect();
        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top; 
        const rotX = (mouseX / width - 0.5) * 10; 
        const rotY = (mouseY / height - 0.5) * 10; 
        image.style.transform = `perspective(1500px) rotateX(${rotY}deg) rotateY(${-rotX}deg)`;
    });

    image.addEventListener('mouseleave', function () {
        image.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });


    

});








