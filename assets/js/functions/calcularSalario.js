export const calcularSalario=()=>{
    const hoursPerMonth=188;
   const hours=+document.querySelector("#number").value
   const value=+document.querySelector("#value").value
   const extra=+document.querySelector("#extra").value
   const baseP=document.querySelector("#base-salary")
   const extraHourP=document.querySelector("#extra-hour")
   const totalP=document.querySelector("#total-salary")
   const extraP=document.querySelector("#extra-charge")
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

} 