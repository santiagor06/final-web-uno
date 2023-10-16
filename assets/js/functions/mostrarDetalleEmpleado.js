import { setModal } from "./setModal.js"

export const mostrarDetalleEmpleado=()=>{
    setModal()
     const prueba=document.createElement("h1")
     prueba.append("DETAIL")
     const container=document.querySelector("#container-dialog")
     const hijo=container.firstChild;
     if(hijo)container.removeChild(hijo)
    container.append(prueba)
    

}