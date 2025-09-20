"use strict";
// validation.ts - Funciones de validación
// Validar campo individual
function validateField(field) {
    // Validación especial para confirmar contraseña
    if (field.id === 'confirmar') {
        const contrasena = document.getElementById('contrasena');
        if (field.value !== contrasena.value) {
            field.setCustomValidity('Las contraseñas no coinciden');
        }
        else {
            field.setCustomValidity('');
        }
    }
    if (field.checkValidity()) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    }
    else {
        field.classList.remove('is-valid');
        field.classList.add('is-invalid');
    }
}
// Configurar validación para un formulario
function setupFormValidation(formId) {
    const form = document.getElementById(formId);
    if (!form)
        return;
    const inputs = form.querySelectorAll('input, select');
    // Agregar eventos de validación a cada campo
    inputs.forEach(input => {
        // Validar cuando el campo pierde el foco
        input.addEventListener('blur', (event) => {
            const target = event.target;
            if (target) {
                validateField(target);
            }
        });
        // Validar mientras se escribe (después de haber sido interactuado)
        input.addEventListener('input', (event) => {
            const target = event.target;
            if (target && (target.classList.contains('is-invalid') || target.classList.contains('is-valid'))) {
                validateField(target);
            }
        });
    });
    // Validar al enviar el formulario
    form.addEventListener('submit', function (event) {
        var _a;
        event.preventDefault();
        let esValido = true;
        inputs.forEach(input => {
            validateField(input);
            if (!input.checkValidity()) {
                esValido = false;
            }
        });
        // Validar confirmación de contraseña
        if (formId === 'form-representante') {
            const contrasena = document.getElementById('contrasena');
            const confirmar = document.getElementById('confirmar');
            if (contrasena.value !== confirmar.value) {
                confirmar.setCustomValidity('Las contraseñas no coinciden');
                validateField(confirmar);
                esValido = false;
            }
            else {
                confirmar.setCustomValidity('');
            }
        }
        if (esValido) {
            let resultado = document.getElementById('resultado');
            if (!resultado) {
                resultado = document.createElement('div');
                resultado.id = 'resultado';
                (_a = form.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(resultado);
            }
            resultado.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>¡Registro exitoso!</strong> Los datos se han guardado correctamente.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
            console.log('Formulario válido, se puede enviar');
            // form.submit(); // Descomentar para enviar realmente el formulario
        }
        form.classList.add('was-validated');
    });
    // Limpiar validación al resetear el formulario
    form.addEventListener('reset', function () {
        inputs.forEach(input => {
            input.classList.remove('is-valid', 'is-invalid');
            input.setCustomValidity('');
        });
        form.classList.remove('was-validated');
        const resultado = document.getElementById('resultado');
        if (resultado)
            resultado.innerHTML = '';
    });
}
// Inicializar la validación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    setupFormValidation('form-farmacia');
    setupFormValidation('form-representante');
});
//# sourceMappingURL=validation.js.map