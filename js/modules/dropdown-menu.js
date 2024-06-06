import outsideclick from "./outsideclick.js"

export default function initDropDown() {
  
const botaoSobre = document.querySelectorAll('[data-drop-down]')
const userEvents = ['touchstart', 'click']

function ativarDrop(event) {
  event.preventDefault()
  this.classList.toggle('active')
  outsideclick.element = this
  outsideclick(this, userEvents, () => {
    this.classList.remove('active')
  })
}

botaoSobre.forEach(botao => {
  userEvents.forEach(userEvent => {
    botao.addEventListener(userEvent, ativarDrop)  
  })
})
 
}
 


