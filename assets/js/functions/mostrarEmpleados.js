import { mostrarDetalleEmpleado } from "./mostrarDetalleEmpleado.js";
import { mostrarFormPago } from "./mostrarFormPago.js";
import { volverMayuscula } from "./volverMayuscula.js";
const modal=document.querySelector("#modal")
const showModal=()=>{
    const close=document.querySelector("#close")
    modal.showModal()
    close.addEventListener("click",()=>modal.close())

}
const crearCardEmpleado=(empleados)=>{
    const cards=[]
empleados.forEach(empleado => {
    const card=document.createElement("div")
    card.classList.add("card")
    const cardTop=document.createElement("div")
    cardTop.classList.add("card-border-top")
    const cardImage=document.createElement("div")
    cardImage.classList.add("img")
    const image=document.createElement("img")
    image.src=empleado.imagen
    cardImage.append(image)
    const span=document.createElement("span")
    span.append(`${volverMayuscula (empleado.nombre)} ${volverMayuscula(empleado.apellido)}`)
    const jobTitle=document.createElement("p")
    jobTitle.classList.add("job")
    jobTitle.append(volverMayuscula(empleado.cargo))
    const detail=document.createElement("button")
    detail.addEventListener("click",()=>mostrarDetalleEmpleado())
    detail.append("Detail")
    const pay=document.createElement("button")
    pay.addEventListener("click",()=>mostrarFormPago(empleado))
    pay.append("Pay")
    const containerButton=document.createElement("div");
    containerButton.classList.add("container-button")
    containerButton.append(detail,pay)
    card.append(cardTop,cardImage,span,jobTitle,containerButton);
    cards.push(card)
});
return cards;
}

export const mostrarEmpleados=(empleados)=>{
    const container=document.querySelector("#container-empleados")
    const cards=crearCardEmpleado(empleados)
  
    container.append(...cards)
}