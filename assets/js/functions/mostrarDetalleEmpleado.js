import { empleados } from "../arrayEmpleados.js";
import { setModal } from "./setModal.js";
import { volverMayuscula } from "./volverMayuscula.js";

export const mostrarDetalleEmpleado = (empleado) => {
    setModal()
     const prueba=document.createElement("h1")
     prueba.append("DETAIL")
     const container=document.querySelector("#container-dialog")
     container.replaceChild(prueba,container.firstChild)
  

    const detalleContainer = document.createElement("div");
    detalleContainer.classList.add("detalle-container");

    const nombreCompleto = document.createElement("h2");
    nombreCompleto.textContent = `${volverMayuscula(empleados.nombre)} ${volverMayuscula(empleados.apellido)}`;

    const imagenEmpleado = document.createElement("img");
    imagenEmpleado.src = empleados.imagen;
    imagenEmpleado.classList.add("imagen-empleado");

    const historialPagos = document.createElement("div");
    historialPagos.classList.add("historial-pagos");
    historialPagos.textContent = "Historial de Pagos:";
    
    empleados.historialSalarios.forEach((pago) => {
        const pagoItem = document.createElement("p");
        pagoItem.textContent = `Fecha: ${pago.fecha}, Cantidad: $${pago.cantidad}`;
        historialPagos.appendChild(pagoItem);
    });

    detalleContainer.appendChild(nombreCompleto);
    detalleContainer.appendChild(imagenEmpleado);
    detalleContainer.appendChild(historialPagos);

    container.appendChild(detalleContainer);
};
