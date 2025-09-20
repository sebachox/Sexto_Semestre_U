"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const formFarmacia = document.getElementById("form-farmacia");
    const formRepresentante = document.getElementById("form-representante");
    if (formFarmacia) {
        const resultadoFarmacia = document.getElementById("resultado-farmacia");
        formFarmacia.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!formFarmacia.checkValidity())
                return;
            const nombreFarmacia = document.getElementById("nombreFarmacia").value;
            const nit = document.getElementById("nit").value;
            const departamento = document.getElementById("departamento").value;
            const ciudad = document.getElementById("ciudad").value;
            const direccion = document.getElementById("direccion").value;
            const telefono = document.getElementById("telefono").value;
            const correo = document.getElementById("correo").value;
            resultadoFarmacia.innerHTML = `
        <div class="card mt-4 shadow">
          <div class="card-body">
            <h5 class="card-title text-primary">📌 Farmacia registrada</h5>
            <p><strong>Nombre:</strong> ${nombreFarmacia}</p>
            <p><strong>NIT:</strong> ${nit}</p>
            <p><strong>Departamento:</strong> ${departamento}</p>
            <p><strong>Ciudad:</strong> ${ciudad}</p>
            <p><strong>Dirección:</strong> ${direccion}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Correo:</strong> ${correo}</p>
          </div>
        </div>
      `;
        });
    }
    if (formRepresentante) {
        const resultadoRepresentante = document.getElementById("resultado-representante");
        formRepresentante.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!formRepresentante.checkValidity())
                return;
            const nombres = document.getElementById("nombres").value;
            const apellidos = document.getElementById("apellidos").value;
            const departamento = document.getElementById("departamento-rep").value;
            const ciudad = document.getElementById("ciudad-rep").value;
            const nit = document.getElementById("nit").value;
            const cargo = document.getElementById("cargo").value;
            const correo = document.getElementById("correo").value;
            resultadoRepresentante.innerHTML = `
        <div class="card mt-4 shadow">
          <div class="card-body">
            <h5 class="card-title text-success">🙋 Representante registrado</h5>
            <p><strong>Nombres:</strong> ${nombres}</p>
            <p><strong>Apellidos:</strong> ${apellidos}</p>
            <p><strong>Departamento:</strong> ${departamento}</p>
            <p><strong>Ciudad:</strong> ${ciudad}</p>
            <p><strong>NIT Empresa:</strong> ${nit}</p>
            <p><strong>Cargo:</strong> ${cargo}</p>
            <p><strong>Correo:</strong> ${correo}</p>
          </div>
        </div>
      `;
        });
    }
});
//# sourceMappingURL=outputdata.js.map