document.addEventListener("DOMContentLoaded", () => {
  const formFarmacia = document.getElementById("form-farmacia") as HTMLFormElement | null;
  const formRepresentante = document.getElementById("form-representante") as HTMLFormElement | null;

  if (formFarmacia) {
    const resultadoFarmacia = document.getElementById("resultado-farmacia");
    formFarmacia.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!formFarmacia.checkValidity()) return;

      const nombreFarmacia = (document.getElementById("nombreFarmacia") as HTMLInputElement).value;
      const nit = (document.getElementById("nit") as HTMLInputElement).value;
      const departamento = (document.getElementById("departamento") as HTMLSelectElement).value;
      const ciudad = (document.getElementById("ciudad") as HTMLSelectElement).value;
      const direccion = (document.getElementById("direccion") as HTMLInputElement).value;
      const telefono = (document.getElementById("telefono") as HTMLInputElement).value;
      const correo = (document.getElementById("correo") as HTMLInputElement).value;

      resultadoFarmacia!.innerHTML = `
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
      if (!formRepresentante.checkValidity()) return;

      const nombres = (document.getElementById("nombres") as HTMLInputElement).value;
      const apellidos = (document.getElementById("apellidos") as HTMLInputElement).value;
      const departamento = (document.getElementById("departamento-rep") as HTMLSelectElement).value;
      const ciudad = (document.getElementById("ciudad-rep") as HTMLSelectElement).value;
      const nit = (document.getElementById("nit") as HTMLInputElement).value;
      const cargo = (document.getElementById("cargo") as HTMLInputElement).value;
      const correo = (document.getElementById("correo") as HTMLInputElement).value;

      resultadoRepresentante!.innerHTML = `
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
