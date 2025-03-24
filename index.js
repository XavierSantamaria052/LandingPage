document.addEventListener("DOMContentLoaded", function() {
    const services = document.querySelectorAll('.service'); 
    let currentIndex = 0; 
    let totalServices = services.length;

    function changeService() {
        services[currentIndex].classList.remove('active');
        
        currentIndex = (currentIndex + 1) % totalServices;
        
        services[currentIndex].classList.add('active');
    }

    services[currentIndex].classList.add('active');

    setInterval(changeService, 5000);
});