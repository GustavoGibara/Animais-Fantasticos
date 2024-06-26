import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js'
import initScrollAnimacao from './modules/scroll-animacao.js';
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

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabNav.init()

initBitcoin()
initFetchAnimais()
initFuncionamento()
initMenuMobile()
initDropDown()
initToolTip()
initModal()
initScrollAnimacao()