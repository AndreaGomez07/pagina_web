// Función para mostrar más información con efecto de deslizamiento
function mostrarMasInfo(seccion) {
    const infoDiv = document.getElementById(`info-${seccion}`);
    if (infoDiv.classList.contains('show')) {
        infoDiv.classList.remove('show');
    } else {
        infoDiv.classList.add('show');
    }
}

// Cargar Google Maps con una ubicación clave
function initMap() {
    const uk = { lat: 51.5074, lng: -0.1278 }; // Coordenadas de Londres
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uk
    });

    const marker = new google.maps.Marker({
        position: uk,
        map: map
    });
}

// Manejar el evento de scroll para animaciones
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            el.classList.add('visible');
        }
    });
});

// Validación del formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        this.reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
