import { empleados } from "../arrayEmpleados.js";
import { Empleado } from "../models/Empleados.js";
import { mostrarEmpleados } from "./mostrarEmpleados.js";

empleados

export const agregarEmpleadoModal=()=>{
    let nombre=document.querySelector(".nombre-modal").value
    let correo=document.querySelector(".correo-modal").value
    let apellido=document.querySelector(".apellido-modal").value
    let urlimg=document.querySelector(".urlimg-modal").value
    let cargo=document.querySelector( ".cargo-modal") .value
if(nombre && correo && apellido && urlimg && cargo){

    let empleado = new Empleado()
    empleado.nombre=nombre
    empleado.apellido=apellido
    empleado.cargo=cargo
    empleado.correo=correo
    empleado.imagen=urlimg
    
    empleados.push(empleado)
    
    mostrarEmpleados(empleados)
    
    const modal=document.querySelector("#modal")
    modal.close()
    
    document.querySelector("#nombre").value=""
    document.querySelector("#correo").value=""
    document.querySelector("#apellido").value=""
    document.querySelector("#urlimg").value=""
    document.querySelector( "#cargo") .value=""
}else alert("Fields are missing")



    
}