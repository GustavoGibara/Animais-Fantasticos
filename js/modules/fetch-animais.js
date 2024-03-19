import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  const numero = document.querySelector('.numeros-grid')
  
  function createAnimal(animal) {
    const element = document.createElement('div')
    element.classList.add('numero-animal')
    element.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.numero}</span>`
    return element
  }

  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json()
      animaisJSON.forEach(animal => {
        const div = createAnimal(animal)
        numero.appendChild(div)
      })
      initAnimaNumeros()
    } catch(erro) {
      console.log(erro)
    }
  }

  
  fetchAnimais('./animais.json')


}


