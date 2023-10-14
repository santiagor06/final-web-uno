export const mostrarDetalleEmpleado=()=>{
    const modal=document.querySelector("#modal")
    const close=document.querySelector("#close")
    modal.showModal()
    close.addEventListener("click",()=>modal.close())
    const prueba=document.createElement("h2")
    prueba.append("Detalle Empleado")
    modal.innerHTML=prueba

}