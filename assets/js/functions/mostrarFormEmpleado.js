import { setModal } from "./setModal.js"

 const mostrarDetalleEmpleado=()=>{
    setModal()
     const prueba=document.createElement("h1")
     prueba.append("ADD EMPLOYEE")
     const container=document.querySelector("#container-dialog")
     container.replaceChild(prueba,container.firstChild)
  
    

}
export const setFormEmployee=()=>{
    const button=document.querySelector("#button-add-employee")
    button.addEventListener("click",()=>mostrarDetalleEmpleado())
}