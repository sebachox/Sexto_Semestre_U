// navigation.ts - Navegación entre secciones

document.addEventListener('DOMContentLoaded', function () {
    // Ocultar todas las secciones excepto la de inicio
    document.querySelectorAll<HTMLElement>('.content-section').forEach(section => {
        if (section.id !== 'inicio') {
            section.style.display = 'none';
        }
    });

    // Manejar clics en enlaces de navegación
    document.querySelectorAll<HTMLElement>('a[data-section], button[data-section]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = (this as HTMLElement).getAttribute('data-section');
            if (targetSection) showSection(targetSection);
        });
    });

    // Función para mostrar una sección específica
    function showSection(sectionId: string) {
        // Ocultar todas las secciones
        document.querySelectorAll<HTMLElement>('.content-section').forEach(section => {
            section.style.display = 'none';
        });

        // Mostrar la sección objetivo
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
            targetElement.style.display = 'block';

            // Desplazarse suavemente hacia la parte superior
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
});
