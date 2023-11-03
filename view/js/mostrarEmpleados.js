import { mostrarDetalleEmpleado } from "./mostrarDetalleEmpleado.js";
import { mostrarFormPago } from "./mostrarFormPago.js";
import { volverMayuscula } from "../../controller/volverMayuscula.js";


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
    span.append(empleado.nombreCompleto)
    const jobTitle=document.createElement("p")
    jobTitle.classList.add("job")
    jobTitle.append(volverMayuscula(empleado.cargo))
    const detail=document.createElement("button")
    detail.addEventListener("click",()=>mostrarDetalleEmpleado(empleado))
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
    if(empleados.length===0){
        const any=document.createElement("h1")
        any.append("Any Employee")
        any.style.fontSize="28px"
        any.style.textAlign="center"
        any.style.marginTop="50px"
        container.replaceChild(any,container.firstChild)
        return
    }
    const containerCards=document.createElement("div")
    const cards=crearCardEmpleado(empleados)
    containerCards.append(...cards)
    container.replaceChild(containerCards,container.firstChild);
}