import { empleados } from "../arrayEmpleados.js"
import { mostrarEmpleados } from "./mostrarEmpleados.js"

export const agregarSalario=(empleado)=>{
    const total=document.querySelector("#total-salary")
const totalValue=total.innerHTML
const fechaActual=new Date().toLocaleDateString()
const salary={
    cantidad: totalValue, 
    fecha: fechaActual
}
empleado.historialSalarios.push(salary)

}