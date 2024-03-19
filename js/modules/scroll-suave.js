export default function initScrollSuave() {
  const links = document.querySelectorAll('a[href^="#"]')
  
  function scrollSuave(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block:'start'
    })
  }
  
  if (links){
    
    links.forEach(item => {
      item.addEventListener('click', scrollSuave)
    })
  }
}