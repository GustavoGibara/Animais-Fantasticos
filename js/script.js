import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabMenu from './modules/tab-menu.js'
import initAparecerItens from './modules/anima-scroll.js';
import initModal from './modules/modal.js';
import initToolTip from './modules/tooltip.js';
import initDropDown from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('a[href^="#"]')
scrollSuave.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

const tabMenu = new TabMenu('[data-tab="menu"] li', '[data-tab="content"] section')
tabMenu.init()

initBitcoin()
initFetchAnimais()
initFuncionamento()
initMenuMobile()
initDropDown()
initToolTip()
initModal()
initAparecerItens()