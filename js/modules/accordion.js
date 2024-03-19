export default function initAccordion() {
  const listaFaq = document.querySelectorAll('[data-anime="accordion"] dt')
  const activeClass = 'ativo'

  function AbrirResposta(event){
    event.currentTarget.nextElementSibling.classList.toggle(activeClass)
    event.currentTarget.classList.toggle(activeClass)
  }

  if (listaFaq) {
    listaFaq[0].classList.add(activeClass);
    listaFaq[0].nextElementSibling.classList.add(activeClass);
    
    listaFaq.forEach(item => {
      item.addEventListener('click', AbrirResposta );
    });
  };
};
