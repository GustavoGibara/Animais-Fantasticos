import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {

}

const botaoMenu = document.querySelector('[data-menu="button"]')
const menu = document.querySelector('[data-menu="list"]')

function ativarMenu() {
  menu.classList.add('active')
  botaoMenu.classList.add('active')
  outsideClick(menu,['touchstart', 'click'],  () => {
    menu.classList.remove('active')
    botaoMenu.classList.remove('active')
  })
}

if (botaoMenu) { 
  ['touchstart', 'click'].forEach((item) => {
    botaoMenu.addEventListener(item, ativarMenu)
  })
}