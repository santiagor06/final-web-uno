
let nombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
let apellido = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
let cargo = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
let correo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


let inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("keyup", validarCampos);
  });
  function validarCampos(e) {

    switch (e.target.name) {
      case "nombre":
        if (nombre.test(e.target.value)) {
          console.log("Cumple con la expresion");

          document.getElementById("nombre").classList.add("correcto");
          document.getElementById("nombre").classList.remove("incorrecto");
        } else {
          console.log("No cumple con la expresion");
          document.getElementById("nombre").classList.add("incorrecto");
          document.getElementById("nombre").classList.remove("correcto");
        }
        break;
      case "apellido":
        if (apellido.test(e.target.value)) {
          console.log("Cumple con la expresion");
          document.getElementById("apellido").classList.add("correcto");
          document.getElementById("apellido").classList.remove("incorrecto");
        } else {
          console.log("No cumple con la expresion");
          document.getElementById("apellido").classList.add("incorrecto");
          document.getElementById("apellido").classList.remove("correcto");
        }
        break;
      case "cargo":
        if (cargo.test(e.target.value)) {
          console.log("Cumple con la expresion");
          document.getElementById("cargo").classList.add("correcto");
          document.getElementById("cargo").classList.remove("incorrecto");
        } else {
          console.log("No cumple con la expresion");
          document.getElementById("cargo").classList.add("incorrecto");
          document.getElementById("cargo").classList.remove("correcto");
        }
        break;
        
        case "correo":
          if (correo.test(e.target.value)) {
            console.log("Cumple con la expresion");
            
            document.getElementById("correo").classList.add("correcto");
            document.getElementById("correo").classList.remove("incorrecto");
          } else {
            console.log("No cumple con la expresion");
            
            document.getElementById("correo").classList.add("incorrecto");
            document.getElementById("correo").classList.remove("correcto");
          }
          break;
      }
      
    }