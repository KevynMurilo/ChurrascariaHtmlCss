document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const yOffset = -30; // Ajuste a quantidade de deslocamento vertical desejado
                const yPosition = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: yPosition, behavior: 'smooth' });
            }
        });
    });
});
