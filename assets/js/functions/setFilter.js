import { empleados } from "../arrayEmpleados.js"
import { mostrarEmpleados } from "./mostrarEmpleados.js"

export const setFilter=()=>{
    const button=document.querySelector("#filter")
    button.addEventListener("click",()=>{filter()})

}
const filter=()=>{
    const name=document.querySelector("#filter-name").value
    const job=document.querySelector("#filter-job").value
    let empleadosFilter;
    if(!name && !job)return
    if(!name && job){
       empleadosFilter=empleados.filter((empleado)=>empleado.cargo.toLocaleLowerCase().includes(job.toLocaleLowerCase()))
    }
    else if(name && !job){
       empleadosFilter=empleados.filter((empleado)=>empleado.nombre.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
    }
    else if(name && job){
        empleadosFilter=empleados.filter((empleado)=>empleado.cargo.includes(job)).filter((empleado)=>empleado.nombre.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
    }

    mostrarEmpleados(empleadosFilter)
}