export const mostrarFormPago=()=>{
    const modal=document.querySelector("#modal")
    const close=document.querySelector("#close")
    modal.showModal()
    close.addEventListener("click",()=>modal.close())
    const prueba=document.createElement("h2")
    prueba.append("Form Pagos")
    modal.append(prueba)
}