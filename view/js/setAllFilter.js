import { empleados } from "../../model/DB.js"
import { mostrarEmpleados } from "./mostrarEmpleados.js"

export const setAllFilter=()=>{
    const button=document.querySelector("#all")
    button.addEventListener("click",()=>mostrarEmpleados(empleados))
}