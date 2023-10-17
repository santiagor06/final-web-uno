import { setModal } from "./setModal.js"

export const mostrarDetalleEmpleado=()=>{
    setModal()
     const prueba=document.createElement("h1")
     prueba.append("DETAIL")
     const container=document.querySelector("#container-dialog")
     container.replaceChild(prueba,container.firstChild)
  
    

}