"use strict";
// ciudades.ts - Datos de ciudades por departamento
const ciudadesPorDepartamento = {
    'Antioquia': ['Medellín', 'Envigado', 'Bello', 'Itagüí'],
    'Cundinamarca': ['Bogotá', 'Soacha', 'Chía', 'Zipaquirá'],
    'Valle del Cauca': ['Cali', 'Palmira', 'Buenaventura', 'Tuluá'],
    'Santander': ['Bucaramanga', 'Floridablanca', 'Girón', 'Barrancabermeja'],
    'Atlántico': ['Barranquilla', 'Soledad', 'Malambo', 'Sabanalarga'],
    'Bolívar': ['Cartagena', 'Magangué', 'El Carmen de Bolívar', 'Turbaco'],
    'Boyacá': ['Tunja', 'Duitama', 'Sogamoso', 'Chiquinquirá'],
    'Cesar': ['Valledupar', 'Aguachica', 'La Jagua de Ibirico', 'Bosconia'],
    'Nariño': ['Pasto', 'Tumaco', 'Ipiales', 'Tuquerres'],
    'Tolima': ['Ibagué', 'Espinal', 'Melgar', 'Honda']
};
// Función para actualizar las ciudades según el departamento seleccionado
function actualizarCiudades(departamentoId, ciudadId) {
    const departamentoSelect = document.getElementById(departamentoId);
    const ciudadSelect = document.getElementById(ciudadId);
    if (!departamentoSelect || !ciudadSelect)
        return;
    const departamento = departamentoSelect.value;
    ciudadSelect.innerHTML = '<option value="">Seleccione una ciudad</option>';
    if (ciudadesPorDepartamento[departamento]) {
        ciudadesPorDepartamento[departamento].forEach(ciudad => {
            const option = document.createElement('option');
            option.value = ciudad;
            option.textContent = ciudad;
            ciudadSelect.appendChild(option);
        });
    }
    // Validar el campo después de cambiar
    validateField(ciudadSelect);
}
//# sourceMappingURL=ciudades.js.map