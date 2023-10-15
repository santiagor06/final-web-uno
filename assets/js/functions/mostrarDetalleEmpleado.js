export const mostrarDetalleEmpleado=()=>{
    const modal=document.querySelector("#modal")
    const close=document.querySelector("#close")
    modal.showModal()
    close.addEventListener("click",()=>modal.close())
    // const prueba=document.createElement("h2")
    // prueba.append("Mostar Detalle empleado")
    // const container=document.querySelector("#container-dialog")
    // const hijo=container.firstChild;
    // if(hijo)container.removeChild(hijo)
    // container.append(prueba)
    

}