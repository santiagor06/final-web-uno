import { volverMayuscula } from "../functions/volverMayuscula.js";
import { Salario } from "./Salario.js";

export class Empleado{
    _nombre;
    _apellido;
    _cargo;
    _fechaIngreso=new Date().toLocaleDateString();
    _imagen;
    _correo;
    _historialSalarios=[];
    constructor(nombre,apellido,cargo,imagen,correo) {
        this._nombre=nombre;
        this._apellido=apellido,
        this._cargo=cargo,
        this._imagen=imagen,
        this._correo=correo

    }

    get nombreCompleto(){
        return `${this._nombre} ${this._apellido}`
    }
    get nombre(){
        return this._nombre
    }
    get apellido(){
        return this._apellido
    }
    get cargo(){
        return this._cargo
    }
    get imagen(){
        return this._imagen
    }
    get fechaIngreso(){
        return this._fechaIngreso
    }
    get historialSalarios(){
        return this._historialSalarios
    }
    get correo(){
        return this._correo
    }

    set nombre(nombre){
        this._nombre=volverMayuscula(nombre)
    }
    
    set apellido(apellido){
        this._apellido=volverMayuscula(apellido)
    }
    set cargo(cargo){
        this._cargo=volverMayuscula(cargo)
    }
    
    set imagen(imagen){
        this._imagen=imagen
    }
    set correo(correo){
        this._correo=correo
    }
    añadirSalario(salario){
        if(salario instanceof Salario)this._historialSalarios.push(salario)
    }
    

}