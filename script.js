// Lluvia de pétalos
function crearPetalo() {
    const container = document.getElementById('flower-container');
    const petalo = document.createElement('div');
    petalo.classList.add('petal');
    
    const flores = ['🌸', '🌹', '🌺', '🌷', '🌼'];
    petalo.innerText = flores[Math.floor(Math.random() * flores.length)];
    
    petalo.style.left = Math.random() * 100 + 'vw';
    petalo.style.fontSize = Math.random() * 20 + 15 + 'px';
    
    const duracion = Math.random() * 3 + 5; 
    petalo.style.animationDuration = duracion + 's';
    
    container.appendChild(petalo);
    
    setTimeout(() => {
        petalo.remove();
    }, duracion * 1000);
}

setInterval(crearPetalo, 400);

// Funciones del Modal
function abrirModal(titulo, texto, imagen) {
    document.getElementById('modal-titulo').innerText = titulo;
    document.getElementById('modal-texto').innerText = texto;
    document.getElementById('modal-img').src = imagen;
    document.getElementById('miModal').style.display = "block";
}

function cerrarModal() {
    document.getElementById('miModal').style.display = "none";
}

// Cerrar al hacer clic fuera
window.onclick = function(event) {
    if (event.target == document.getElementById('miModal')) {
        cerrarModal();
    }
}