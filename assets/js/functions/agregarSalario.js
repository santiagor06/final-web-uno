import { empleados } from "../arrayEmpleados.js"
import { Salario } from "../models/Salario.js"
import { mostrarEmpleados } from "./mostrarEmpleados.js"

export const agregarSalario=(empleado)=>{
    const total=document.querySelector("#total-salary")
const totalValueString=total.innerHTML
const totalValue=+totalValueString.split("$")[1];

const salary=new Salario()
salary.cantidad=totalValue;
empleado.añadirSalario(salary)

}