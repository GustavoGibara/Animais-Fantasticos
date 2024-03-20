export default  class TabMenu{  
  constructor(tabMenu, tabContent) {
    this.tabMenu = document.querySelectorAll(tabMenu)
    this.tabContent = document.querySelectorAll(tabContent)
    this.activeClass = 'ativo'
  }

  activeTab(index) {
    this.tabContent.forEach((item) => {
      item.classList.remove(this.activeClass, this.tabContent[index].dataset.anime)
    }) 
    
    this.tabContent[index].classList.add(this.activeClass, this.tabContent[index].dataset.anime)
  }

  addTabNavEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {this.trocarTexto(index)})
    })
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0)
      this.activeTabNavEvent()
    }
    return this
  }

}
