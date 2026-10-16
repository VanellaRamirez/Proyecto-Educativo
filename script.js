// Menú para celulares
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');

    menuBtn.setAttribute('aria-expanded', String(isOpen));
});

// Cerrar el menú después de seleccionar una sección
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
    });
});

// Formulario de solicitud de información
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const motivo = document.getElementById('motivo').value;
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !correo || !motivo) {
        formMessage.textContent =
            'Completa los campos obligatorios para continuar.';
        return;
    }

    const asunto = encodeURIComponent(
        'Solicitud de información de psicología'
    );

    const cuerpo = encodeURIComponent(
        `Hola, mi nombre es ${nombre}.
Correo: ${correo}
Tema de interés: ${motivo}
Mensaje: ${mensaje || 'Solicito información general.'}

Enviado desde el proyecto escolar Psicología Integral.`
    );

    formMessage.textContent =
        'Se abrirá tu aplicación de correo para revisar el mensaje antes de enviarlo.';

    window.location.href =
        `mailto:contacto@saludintegral.example?subject=${asunto}&body=${cuerpo}`;
});