import { empleados as empleado } from "../arrayEmpleados.js";
import { setModal } from "./setModal.js";
import { volverMayuscula } from "./volverMayuscula.js";

export const mostrarDetalleEmpleado = (empleado) => {
    setModal();
    const container = document.querySelector("#container-dialog");
    const child = container.firstChild;
    if (child) container.removeChild(child);

    //  elementos para mostrar la información del empleado
    const detalleContainer = document.createElement("div");
    detalleContainer.style.backgroundColor = "var(--black)";
    detalleContainer.style.color = "var(--white)";
    detalleContainer.style.padding = "24px";
    detalleContainer.style.borderRadius = "15px";
    detalleContainer.style.width = "250px";
    detalleContainer.style.height = "450px";
    detalleContainer.style.display = "flex";
    detalleContainer.style.flexDirection = "column";

    // Título 
    const titulo = document.createElement("h2");
    titulo.style.textAlign = "center";
    titulo.style.color = "var(--yellow)";
    titulo.style.textTransform = "uppercase"; // Convertir a mayúsculas
    titulo.textContent = empleado.nombreCompleto;
    titulo.style.marginBottom = "20px";

    // Espacio entre el título y la foto
    const espacio1 = document.createElement("div");
    espacio1.style.height = "20px";

    // Imagen del empleado
    const imagenEmpleado = document.createElement("img");
    imagenEmpleado.src = empleado.imagen;
    imagenEmpleado.style.width = "140px"; // Ajusta el tamaño de la imagen 
    imagenEmpleado.style.height = "200px"; // Ajusta el tamaño de la imagen 
    imagenEmpleado.style.display = "block";
    imagenEmpleado.style.marginLeft = "auto";
    imagenEmpleado.style.marginRight = "auto";
    imagenEmpleado.style.borderRadius = "15px";
    imagenEmpleado.style.objectFit="cover"

    // Espacio entre la foto y el título del cargo
    const espacio2 = document.createElement("div");
    espacio2.style.height = "30px";

    // Cargo del empleado
    const cargo = document.createElement("p");

    // Crear un elemento span para el título "Cargo: "
    const tituloCargo = document.createElement("span");
    tituloCargo.textContent = "Job Title: ";
    tituloCargo.style.color = "var(--yellow)"; // Establecer color amarillo

    // Crear un elemento span para el valor del cargo
    const valorCargo = document.createElement("span");
    valorCargo.textContent = empleado.cargo;
    valorCargo.style.color = "var(--white)"; // Establecer color blanco

    // Agregar los elementos span al elemento p (cargo)
    cargo.appendChild(tituloCargo);
    cargo.appendChild(valorCargo);

    // Establecer la alineación del texto en el centro
    cargo.style.textAlign = "center";


    // Espacio entre el cargo y el título "Historial de Pagos"
    const espacio3 = document.createElement("div");
    espacio3.style.height = "20px";

    // Historial de pagos
    const historialContainer = document.createElement("div");
    const historialTitulo = document.createElement("h3");
    historialTitulo.textContent = "Payment History";
    historialTitulo.style.textAlign = "center";
    historialContainer.appendChild(historialTitulo);

    // Espacio entre el título "Historial de Pagos" y el historial.
    const espacio4 = document.createElement("div");
    espacio4.style.height = "20px";

    
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
    cantidadValueElement.textContent = pago.cantidad;
    cantidadValueElement.style.color = "var(--white)";

    // Agregar los elementos a la lista
    pagoItem.append(fechaItem,fechaValueElement,document.createElement("br"),cantidadItem,cantidadValueElement);


    historialPagos.appendChild(pagoItem);
});

// Añadir la lista de historialPagos al contenedor


    

    detalleContainer.append(titulo,espacio1,imagenEmpleado,espacio2,cargo,espacio3,historialContainer,espacio4,historialPagos);

    container.appendChild(detalleContainer);
};
