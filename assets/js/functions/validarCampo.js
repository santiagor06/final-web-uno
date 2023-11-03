
let nombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
let apellido = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
let cargo = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
let correo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


let inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("input", validarCampos);
  });
  function validarCampos(e) {
    const button=document.querySelector("#btnIniciar")
    let error=false;
    switch (e.target.name) {
      case "nombre":
        if (nombre.test(e.target.value) ) {
          
          
          document.getElementById("nombre").classList.remove("incorrecto");
        } else {
          error=true
          document.getElementById("nombre").classList.add("incorrecto");
          button.disabled=true

        }
        break;
      case "apellido":
        if (apellido.test(e.target.value) ) {
          document.getElementById("apellido").classList.remove("incorrecto");
        } else {
          document.getElementById("apellido").classList.add("incorrecto");
          error=true
          button.disabled=true

        }
        break;
      case "cargo":
        if (cargo.test(e.target.value)) {
          document.getElementById("cargo").classList.remove("incorrecto");
        } else {
          error=true
          button.disabled=true

          document.getElementById("cargo").classList.add("incorrecto");
        }
        break;
        
        case "correo":
          if (correo.test(e.target.value)) {
            
            
            document.getElementById("correo").classList.remove("incorrecto");
          } else {
          
           error=true
          button.disabled=true

            document.getElementById("correo").classList.add("incorrecto");
          }
          break;
      }
      if(!error)button.disabled=false
    }