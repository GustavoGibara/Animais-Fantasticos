export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]')
  const diasFuncionamento = funcionamento.dataset.semana.split(',').map(Number)
  const horarioFuncionamento = funcionamento.dataset.horario.split(',').map(Number)
  
  const agora = new Date()
  const diaAgora = agora.getDay()
  const horaAgora = agora.getHours()
  
  const diaAberto = diasFuncionamento.includes(diaAgora)
  const horaAberto = (horaAgora >= horarioFuncionamento[0] && horaAgora < horarioFuncionamento[1])
  
  if (diaAberto && horaAberto) {
    funcionamento.classList.add('aberto')
  }
}

