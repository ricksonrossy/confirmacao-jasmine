const container = document.getElementById('solarContainer');
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30; // grau horizontal
    const y = (e.clientY / window.innerHeight - 0.5) * -30; // grau vertical invertido
    container.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});