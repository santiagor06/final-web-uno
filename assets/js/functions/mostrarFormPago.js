import { calcularSalario } from "./calcularSalario.js";
import { setModal } from "./setModal.js"
import { volverMayuscula } from "./volverMayuscula.js";

const container=document.querySelector("#container-dialog")
export const mostrarFormPago=(empleado)=>{
    setModal()
     const hijo=container.firstChild;
    if(hijo)container.removeChild(hijo)
    crearFormPago(empleado)
   
}


const crearFormPago=(empleado)=>{
    const form=document.createElement("form")
    form.id="form-pay"
    form.method="dialog"
    const title=document.createElement("h1")
    title.append("Payment")
    const name=document.createElement("h2")
    name.append(`${volverMayuscula(empleado.nombre)} ${volverMayuscula(empleado.apellido)}` )
    
    const containerValue=document.createElement("div")
     containerValue.classList.add("group")
    const inputValue=document.createElement("input")
    inputValue.addEventListener("input",()=>calcularSalario())  
    inputValue.type="number"
    inputValue.classList.add("input")
    inputValue.id="value"
    inputValue.value=0
     const highlightValue=document.createElement("span")
    highlightValue.classList.add("highlight")
    const barValue=document.createElement("span")
    barValue.classList.add("bar")
    const labelValue=document.createElement("label")
    labelValue.append("Value/Hour")
    containerValue.append(inputValue,highlightValue,barValue,labelValue)

    const containerNumber=document.createElement("div")
     containerNumber.classList.add("group")
     const inputNumber=document.createElement("input")
     inputNumber.addEventListener("input",()=>calcularSalario())  
    inputNumber.type="number"
     inputNumber.classList.add("input")
     inputNumber.id="number"
    inputNumber.value=0
     const highlightNumber=document.createElement("span")
    highlightNumber.classList.add("highlight")
    const barNumber=document.createElement("span")
    barNumber.classList.add("bar")
    const labelNumber=document.createElement("label")
    labelNumber.append("Number/Hour")
    containerNumber.append(inputNumber,highlightNumber,barNumber,labelNumber)

    const containerExtra=document.createElement("div")
     containerExtra.classList.add("group")
     const inputExtra=document.createElement("input")
      inputExtra.addEventListener("input",()=>calcularSalario())  
     inputExtra.type="number"
     inputExtra.classList.add("input")
     inputExtra.id="extra"
     inputExtra.value=0
     const highlightExtra=document.createElement("span")
     highlightExtra.classList.add("highlight")
     const barExtra=document.createElement("span")
     barExtra.classList.add("bar")
    const labelExtra=document.createElement("label")
    labelExtra.append("Extra Charges")
    containerExtra.append(inputExtra,highlightExtra,barExtra,labelExtra)
    const containerCheckout=document.createElement("div")
    containerCheckout.classList.add("container-checkout")
    
    const checkoutBase=document.createElement("div")
    checkoutBase.classList.add("checkout")
    const baseTitle=document.createElement("p")
    baseTitle.append("Base Salary:")
    const baseValue=document.createElement("p")
    baseValue.id="base-salary"
    baseValue.append("$0")
    checkoutBase.append(baseTitle,baseValue)
    
    const checkoutExtra=document.createElement("div")
    checkoutExtra.classList.add("checkout")
    const extraTitle=document.createElement("p")
    extraTitle.append("Extra Hours:")
    const extraValue=document.createElement("p")
    extraValue.id="extra-hour"

    extraValue.append("$0")
    checkoutExtra.append(extraTitle,extraValue)

    const checkoutCharge=document.createElement("div")
    checkoutCharge.classList.add("checkout")
    const chargeTitle=document.createElement("p")
    chargeTitle.append("Extra Charge:")
    const chargeValue=document.createElement("p")
    chargeValue.id="extra-charge"

    chargeValue.append("$0")
    checkoutCharge.append(chargeTitle,chargeValue)

    const checkoutTotal=document.createElement("div")
    checkoutTotal.classList.add("total")
    const totalTitle=document.createElement("p")
    totalTitle.append("Total Salary:")
    const totalValue=document.createElement("p")
    totalValue.id="total-salary"

    totalValue.append("$0")
    checkoutTotal.append(totalTitle,totalValue)

    containerCheckout.append(checkoutBase,checkoutExtra,checkoutCharge,checkoutTotal)

    const button=document.createElement("button")
    button.id="button-pay"
    button.append("PAY")
    form.append(title,name,containerValue,containerNumber,containerExtra,containerCheckout,button)
    container.append(form)


}