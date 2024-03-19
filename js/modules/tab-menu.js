export default  function initTabMenu(){  
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
  const tabContent = document.querySelectorAll('[data-tab="content"] section')
  
  tabContent[0].classList.add('ativo')

  function TrocarTexto(index) {
    tabContent.forEach((item) => {
      item.classList.remove('ativo', tabContent[index].dataset.anime)
    }) 
    
    tabContent[index].classList.add('ativo', tabContent[index].dataset.anime)
  }

  if (tabMenu && tabContent) {
    
    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        TrocarTexto(index)
      })
    })
  }
}