import { agregarEmpleado } from "../../controller/agregarEmpleado.js"

export function setFormEmpleado(){
    let btnIniciar= document.querySelector("#btnIniciar")
    btnIniciar.addEventListener("click",()=>agregarEmpleado())
  


}