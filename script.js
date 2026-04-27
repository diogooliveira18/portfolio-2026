// Função para navegar entre as seções do portfólio
function showSection(sectionId) {
  // 1. Esconde todas as seções que têm a classe 'page-section'
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(sec => {
    sec.classList.remove('active');
  });
  
  // 2. Mostra apenas a seção que foi clicada
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
  }

  // 3. Rola a página para o topo suavemente
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para quando clicar em uma matéria
function abrirMateria(nome) {
  // Você pode alterar isso futuramente para abrir uma nova página
  // Exemplo: window.location.href = "naturezas.html";
  alert("Você clicou em: " + nome + ". Aqui você pode colocar links para os seus trabalhos!");
}
