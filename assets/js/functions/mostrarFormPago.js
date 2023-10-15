export const mostrarFormPago=(empleado)=>{
    const modal=document.querySelector("#modal")
    const close=document.querySelector("#close")
    modal.showModal()
    close.addEventListener("click",()=>modal.close())
//     const prueba=document.createElement("h2")
//     prueba.append(empleado.nombre)
//     const container=document.querySelector("#container-dialog")
//     const hijo=container.firstChild;
//    if(hijo)container.removeChild(hijo)
//     container.append(prueba)
}