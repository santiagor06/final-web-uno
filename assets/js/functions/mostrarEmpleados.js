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
    const button=document.createElement("button")
    button.addEventListener("click",()=>showModal())
    button.append("click")
    card.append(cardTop,cardImage,span,jobTitle,button);
    cards.push(card)
});
return cards;
}

export const mostrarEmpleados=(empleados)=>{
    const container=document.querySelector("#container-empleados")
    const cards=crearCardEmpleado(empleados)
  
    container.append(...cards)
}