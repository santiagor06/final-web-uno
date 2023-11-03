import { empleados } from "../arrayEmpleados.js";
import { Empleado } from "../models/Empleados.js";
import { mostrarEmpleados } from "./mostrarEmpleados.js";

empleados

export const agregarEmpleado=()=>{
    let nombre=document.querySelector("#nombre").value
    let correo=document.querySelector("#correo").value
    let apellido=document.querySelector("#apellido").value
    let urlimg=document.querySelector("#urlimg").value
    let cargo=document.querySelector( "#cargo") .value
if(nombre && correo && apellido && urlimg && cargo){

    let empleado = new Empleado()
    empleado.nombre=nombre
    empleado.apellido=apellido
    empleado.cargo=cargo
    empleado.correo=correo
    empleado.imagen=urlimg
    
    empleados.push(empleado)
    
    mostrarEmpleados(empleados)
    
    
    document.querySelector("#nombre").value=""
    document.querySelector("#correo").value=""
    document.querySelector("#apellido").value=""
    document.querySelector("#urlimg").value=""
    document.querySelector( "#cargo") .value=""
}else alert("Fields are missing")




    
}