import { empleados as empleado } from "../arrayEmpleados.js";
import { setModal } from "./setModal.js";
import { volverMayuscula } from "./volverMayuscula.js";

export const mostrarDetalleEmpleado = (empleado) => {
    setModal();
    const container = document.querySelector("#container-dialog");
    const child = container.firstChild;
    if (child) container.removeChild(child);

    // Elementos para mostrar la información del empleado
    const detalleContainer = document.createElement("div");
    detalleContainer.style.backgroundColor = "var(--black)";
    detalleContainer.style.color = "var(--white)";
    detalleContainer.style.padding = "24px";
    detalleContainer.style.borderRadius = "15px";
    detalleContainer.style.width = "350px"; // Aumenta el ancho de la ventana
    detalleContainer.style.height = "500px"; // Aumenta la altura de la ventana
    detalleContainer.style.display = "flex";
    detalleContainer.style.flexDirection = "column";

    // Título
    const titulo = document.createElement("h2");
    titulo.style.textAlign = "center";
    titulo.style.color = "var(--yellow)";
    titulo.style.textTransform = "uppercase";
    titulo.textContent = `${volverMayuscula(empleado.nombre)} ${volverMayuscula(empleado.apellido)}`;
    titulo.style.marginBottom = "20px";

    // Espacio entre el título y la foto
    const espacio1 = document.createElement("div");
    espacio1.style.height = "20px";

    // Imagen del empleado
    const imagenEmpleado = document.createElement("img");
    imagenEmpleado.src = empleado.imagen;
    imagenEmpleado.style.width = "140px";
    imagenEmpleado.style.height = "200px";
    imagenEmpleado.style.display = "block";
    imagenEmpleado.style.marginLeft = "auto";
    imagenEmpleado.style.marginRight = "auto";
    imagenEmpleado.style.borderRadius = "15px";
    imagenEmpleado.style.objectFit = "cover";

    // Espacio entre la foto y el título del cargo
    const espacio2 = document.createElement("div");
    espacio2.style.height = "20px";

    // Cargo del empleado
    const cargo = document.createElement("p");
    const tituloCargo = document.createElement("span");
    tituloCargo.textContent = "Job Title: ";
    tituloCargo.style.color = "var(--yellow)";
    const valorCargo = document.createElement("span");
    valorCargo.textContent = empleado.cargo;
    valorCargo.style.color = "var(--white)";
    cargo.appendChild(tituloCargo);
    cargo.appendChild(valorCargo);
    cargo.style.textAlign = "center";

    // Espacio entre el cargo y el correo electrónico
    const espacio3 = document.createElement("div");
    espacio3.style.height = "20px";

    // Correo electrónico del empleado
    const email = document.createElement("p");
    const tituloEmail = document.createElement("span");
    tituloEmail.textContent = "Email: ";
    tituloEmail.style.color = "var(--yellow)";
    const valorEmail = document.createElement("span");
    valorEmail.textContent = empleado.email;
    valorEmail.style.color = "var(--white)";
    email.appendChild(tituloEmail);
    email.appendChild(valorEmail);
    email.style.textAlign = "center";

    // Espacio entre el correo electrónico y la fecha de ingreso
    const espacio4 = document.createElement("div");
    espacio4.style.height = "20px";

    // Fecha de ingreso
    const fechaIngreso = document.createElement("p");
    const tituloFechaIngreso = document.createElement("span");
    tituloFechaIngreso.textContent = "Date of Entry: ";
    tituloFechaIngreso.style.color = "var(--yellow)";
    const valorFechaIngreso = document.createElement("span");
    valorFechaIngreso.textContent = empleado.fechaIngreso;
    valorFechaIngreso.style.color = "var(--white)";
    fechaIngreso.appendChild(tituloFechaIngreso);
    fechaIngreso.appendChild(valorFechaIngreso);
    fechaIngreso.style.textAlign = "center";

    // Espacio entre la fecha de ingreso y el título "Historial de Pagos"
    const espacio5 = document.createElement("div");
    espacio5.style.height = "20px";

    // Historial de pagos
    const historialContainer = document.createElement("div");
    const historialTitulo = document.createElement("h3");
    historialTitulo.textContent = "Payment History";
    historialTitulo.style.textAlign = "center";
    historialContainer.appendChild(historialTitulo);

    // Espacio entre el título "Historial de Pagos" y el historial.
    const espacio6 = document.createElement("div");
    espacio6.style.height = "20px";

    const historialPagos = document.createElement("ul");
    historialPagos.classList.add("historial-pagos");

    empleado.historialSalarios.forEach((pago) => {
        const pagoItem = document.createElement("li");
        const fechaItem = document.createElement("span");
        fechaItem.style.color = "var(--yellow)";
        fechaItem.innerHTML = "Date: ";
        const cantidadItem = document.createElement("span");
        cantidadItem.style.color = "var(--yellow)";
        cantidadItem.innerHTML = "Amount: ";
        const fechaValueElement = document.createElement("span");
        fechaValueElement.textContent = pago.fecha;
        fechaValueElement.style.color = "var(--white)";
        const cantidadValueElement = document.createElement("span");
        cantidadValueElement.textContent = `$${pago.cantidad}`;
        cantidadValueElement.style.color = "var(--white)";
        pagoItem.append(fechaItem, fechaValueElement, document.createElement("br"), cantidadItem, cantidadValueElement);
        historialPagos.appendChild(pagoItem);
    });

    detalleContainer.append(
        titulo,
        espacio1,
        imagenEmpleado,
        espacio2,
        cargo,
        espacio3,
        email,
        espacio4,
        fechaIngreso,
        espacio5,
        historialContainer,
        espacio6,
        historialPagos
    );

    container.appendChild(detalleContainer);
};
