
 export const validarCampos=(e)=> {
  let nombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  let apellido = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  let cargo = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  let correo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    const buttonsC=document.getElementsByClassName("buttons")
   const buttons=[...buttonsC]
    
    let error=false;
    console.log(e.target.name);
    switch (e.target.name) {
      case "nombre":
        if (nombre.test(e.target.value) ) {
          
          
          document.getElementsByName("nombre").forEach((e)=>e. classList.remove("incorrecto"));
        } else {
          error=true
          document.getElementsByName("nombre").forEach((e)=>e. classList.add("incorrecto"));
          buttons.forEach(b=>b.disabled=true) 

        }
        break;
      case "apellido":
        if (apellido.test(e.target.value) ) {
          document.getElementsByName("apellido").forEach((e)=>e. classList.remove("incorrecto"));
        } else {
          document.getElementsByName("apellido").forEach((e)=>e. classList.add("incorrecto"));
          error=true
          buttons.forEach(b=>b.disabled=true) 

        }
        break;
      case "cargo":
        if (cargo.test(e.target.value)) {
          document.getElementsByName("cargo").forEach((e)=>e. classList.remove("incorrecto"));
        } else {
          error=true
          buttons.forEach(b=>b.disabled=true) 

          document.getElementsByName("cargo").forEach((e)=>e. classList.add("incorrecto"));
        }
        break;
        
        case "correo":
          if (correo.test(e.target.value)) {
            
            
            document.getElementsByName("correo").forEach((e)=>e. classList.remove("incorrecto"));
          } else {
          
           error=true
          buttons.forEach(b=>b.disabled=true) 

            document.getElementsByName("correo").forEach((e)=>e.classList.add("incorrecto"));
          }
          break;
      }
      if(!error)buttons.forEach(b=>b.disabled=false) 
    }