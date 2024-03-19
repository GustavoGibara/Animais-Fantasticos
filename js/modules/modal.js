export default function initModal(){
  const botaoLogin = document.querySelector('[data-modal="abrir"]')
  const botaoFechar = document.querySelector('[data-modal="fechar"]')
  const modal = document.querySelector('[data-modal="container"]')
  
  function cliqueForaModal(event) {
    event.preventDefault()
    if (event.target === this){ 
      modal.classList.remove('ativo')
    }
  }
  
  function modalToggle(event){
    event.preventDefault()
    modal.classList.toggle('ativo')
  }
  
  if (botaoLogin && botaoFechar && modal){
    modal.addEventListener('click', cliqueForaModal)
    botaoLogin.addEventListener('click', modalToggle)
    botaoFechar.addEventListener('click', modalToggle)
  }
}

