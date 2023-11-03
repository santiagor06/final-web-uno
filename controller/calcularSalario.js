export const calcularSalario=()=>{
    const hoursPerMonth=188;
   const hoursInput=document.querySelector("#number")
   const valueInput=document.querySelector("#value")
   const extraInput=document.querySelector("#extra")
   const hours=+hoursInput.value
   const value=+valueInput.value
   const extra=+extraInput.value
   const baseP=document.querySelector("#base-salary")
   const extraHourP=document.querySelector("#extra-hour")
   const totalP=document.querySelector("#total-salary")
   const extraP=document.querySelector("#extra-charge")
   const button=document.querySelector("#button-pay")
   let error=false
   
   if(hours<=0){
    hoursInput.classList.add("error")
    button.disabled=true;
    error=true

   }else{
    hoursInput.classList.remove("error")
   }
   if(value<=0){
    valueInput.classList.add("error")
    button.disabled=true;
    error=true
   }else{
    valueInput.classList.remove("error")
   }
   if(extra<0){
    extraInput.classList.add("error")
    button.disabled=true;
    error=true
   }else{
    extraInput.classList.remove("error")
   }
   if(!error){


    const extraHours=hours-hoursPerMonth;
    let extraSalary=0
    let total;
    let baseSalary;
    if(extraHours>0){
     extraSalary=extraHours*value*1.25;
     baseSalary=value*hoursPerMonth;
    }else baseSalary=value*hours
    total=extra+baseSalary+extraSalary;
    baseP.textContent="$"+baseSalary
    extraHourP.textContent="$"+extraSalary
    extraP.textContent="$"+extra
     totalP.textContent="$"+total

        button.disabled=false;
   }


} 