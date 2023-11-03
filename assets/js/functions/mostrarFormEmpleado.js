import { agregarEmpleadoModal } from "./agregarEmpleadosModal.js"
import { setModal } from "./setModal.js"
import { validarCampos } from "./validarCampos.js"

 const mostrarFormEmpleado=()=>{
    setModal()
    
    const container=document.querySelector("#container-dialog")
    const form=document.createElement("form")
    form.id="form"
    form.classList.add("form-login")
    form.method="dialog"
    const nombre=document.createElement("input")
    nombre.classList.add("controls","nombre-modal")
    nombre.type="text"
    nombre.placeholder="Name"
    nombre.id="nombre"
    nombre.name="nombre"
    nombre.addEventListener("input",(e)=>validarCampos(e))
    
    const apellido=document.createElement("input")
    apellido.classList.add("controls","apellido-modal")
,    apellido.type="text",
    apellido.placeholder="Last Name"
    apellido.id="apellido"
    apellido.name="apellido"
    apellido.addEventListener("input",(e)=>validarCampos(e))
    const cargo=document.createElement("input")
    cargo.classList.add("controls","cargo-modal")
    cargo.type="text"
    cargo.placeholder="Job Title"
    cargo.id="cargo"
    cargo.name="cargo"
    cargo.addEventListener("input",(e)=>validarCampos(e))
    const urlimg=document.createElement("input")
    urlimg.classList.add("controls","urlimg-modal")
    urlimg.type="url"
    urlimg.placeholder="URL image"
    urlimg.id="urlimg"
    urlimg.name="urlimg"
    urlimg.addEventListener("input",(e)=>validarCampos(e))
    const correo=document.createElement("input")
    correo.classList.add("controls","correo-modal")
    correo.type="text"
    correo.placeholder="Email"
    correo.id="correo"
    correo.name="correo"
    correo.addEventListener("input",(e)=>validarCampos(e))
    const button=document.createElement("input")
    button.type="button"
    button.id="btnIniciar"
    button.classList.add("buttons")
    button.disabled="true"
    button.value="Register"
    button.addEventListener("click",agregarEmpleadoModal)
    form.append(nombre,apellido,cargo,urlimg,correo,button)
     container.replaceChild(form,container.firstChild)

    

}
export const setFormEmployee=()=>{
    const button=document.querySelector("#button-add-employee")
    button.addEventListener("click",()=>mostrarFormEmpleado())

}