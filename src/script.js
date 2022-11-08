let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

logado.innerHTML = `Olá, ${userLogado.nome}!`

if(localStorage.getItem('token') == null){
  alert('Você precisar estar logado para acessar esta página')
  window.location.href = 'https://cdpn.io/pen/debug/qBKbgxg?authentication_hash=gaMeYBngZoRM'
}

function sair(){
  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  window.location.href = 'https://cdpn.io/pen/debug/qBKbgxg?authentication_hash=yYAyLVjgJazr'
}