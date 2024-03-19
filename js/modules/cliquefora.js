export default function cliqueFora(element, events, callback) {
    const html = document.documentElement
    const outside = 'data-outside'
    
    function handleCliqueFora(event) {
      if(!element.contains(event.target)){
        element.removeAttribute(outside)
        events.forEach((userEvent) => {
          html.removeEventListener(userEvent, handleCliqueFora);
        })
        callback()
      }
    }

    if (!element.hasAttribute(outside)){
      events.forEach((userEvent) => {
        setTimeout(() => html.addEventListener(userEvent, handleCliqueFora))
      })
      element.setAttribute(outside, '')
    }

    
  }
