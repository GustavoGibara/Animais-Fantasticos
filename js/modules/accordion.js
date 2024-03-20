export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list)
    this.activeClass = 'ativo'
  }

  toggleAccordion(item){
    item.nextElementSibling.classList.toggle(this.activeClass)
    item.classList.toggle(this.activeClass)
  }

  addClickEvent() {
    this.accordionList.forEach(item => {
      item.addEventListener('click',() => this.toggleAccordion(item));
    });
  };

  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0])
      this.addClickEvent()
    }
    return this
  }
};
