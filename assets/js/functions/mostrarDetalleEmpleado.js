import { setModal } from "./setModal.js"

export const mostrarDetalleEmpleado=()=>{
    setModal()
     const prueba=document.createElement("h2")
     prueba.append("Mostar Detalle empleado")
     const container=document.querySelector("#container-dialog")
     const hijo=container.firstChild;
     if(hijo)container.removeChild(hijo)
    container.append(prueba)
    

}