export const setModal=()=>{
    const modal=document.querySelector("#modal")
    const close=document.querySelector("#close")
    modal.showModal()
    close.addEventListener("click",()=>modal.close())
}