import { validarCampos } from "./validarCampos.js";

export const setInputs=()=>{
    let inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
    input.addEventListener("input", (e)=>validarCampos(e));
  });
}