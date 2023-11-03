import { empleados } from "../../model/DB.js";
import { mostrarEmpleados } from "./mostrarEmpleados.js";
import { setButtonFormEmployee } from "./mostrarFormEmpleado.js";
import { setAllFilter } from "./setAllFilter.js";
import { setFilter } from "./setFilter.js";
import { setFormEmpleado } from "./setFormEmpleado.js";
import { setInputs } from "./setInputs.js";

export const initialConfig=()=>{
    setAllFilter()
    setFilter()
    setFormEmpleado()
    setButtonFormEmployee()
    setInputs()
    mostrarEmpleados(empleados)
}