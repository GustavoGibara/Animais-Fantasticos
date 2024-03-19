export default function initAnimaNumeros() {
  function animaNumeros(){
    const listaNumeros = document.querySelectorAll('[data-numero]')
    
    listaNumeros.forEach((numero) => {
      const total = +numero.innerText
      let i = 0
      const timer = setInterval(() => {
        i += Math.floor(total/100)
        numero.innerText = i
        if (i > total){
          clearInterval(timer)
          numero.innerText = total
        }
      }, 25*Math.random())
    })
  }
  
  const observerTarget = document.querySelector('.numeros')
  
  let observer

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }
  
  observer = new MutationObserver(handleMutation)
  
  observer.observe(observerTarget, {attributes: true})
}
