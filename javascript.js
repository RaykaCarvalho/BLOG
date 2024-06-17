const botoesVoltar = document.querySelectorAll('.btn-voltar'); // Altere o seletor de acordo com sua necessidade

for (const botao of botoesVoltar) {
  const icone = document.createElement('i');
  icone.classList.add('bi', 'bi-arrow-90deg-left');
  botao.insertBefore(icone, botao.firstChild);
}
