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

// Configuração dos temas por tipo
const typeThemes = {
  normal: { primary: '#A8A77A', dark: '#8A8A59', sprite: '52' }, // Meowth
  fire: { primary: '#EE8130', dark: '#C66320', sprite: '392' }, // Infernape
  water: { primary: '#6390F0', dark: '#4A6EBD', sprite: '7' }, // Squirtle
  grass: { primary: '#7AC74C', dark: '#5A9936', sprite: '650' }, // Chespin
  electric: { primary: '#F7D02C', dark: '#C4A31C', sprite: '25' }, // Pikachu
  ice: { primary: '#96D9D6', dark: '#6DB3B0', sprite: '478' }, // Froslass
  fighting: { primary: '#C22E28', dark: '#96221D', sprite: '448' }, // Lucario
  poison: { primary: '#A33EA1', dark: '#80307E', sprite: '94' }, // Gengar
  ground: { primary: '#E2BF65', dark: '#B89A4E', sprite: '104' }, // Cubone
  flying: { primary: '#A98FF3', dark: '#856ED1', sprite: '249' }, // Lugia
  psychic: { primary: '#F95587', dark: '#C9426A', sprite: '150' }, // Mewtwo
  bug: { primary: '#A6B91A', dark: '#849414', sprite: '212' }, // Scizor
  rock: { primary: '#B6A136', dark: '#918129', sprite: '248' }, // Tyranitar
  ghost: { primary: '#735797', dark: '#564075', sprite: '778' }, // Mimikyu
  dragon: { primary: '#6F35FC', dark: '#5325C2', sprite: '149' }, // Dragonite
  dark: { primary: '#705746', dark: '#524033', sprite: '491' }, // Darkrai
  steel: { primary: '#B7B7CE', dark: '#9292A6', sprite: '376' }, // Metagross
  fairy: { primary: '#D685AD', dark: '#AB6688', sprite: '282' } // Gardevoir
};

// Função para mudar o tema e o mascote
function changeTheme(type) {
  const theme = typeThemes[type];
  if (!theme) return;

  // Muda as variáveis CSS no :root
  document.documentElement.style.setProperty('--primary-red', theme.primary);
  document.documentElement.style.setProperty('--dark-red', theme.dark);

  // Muda a imagem do Pokémon
  const spriteImg = document.getElementById('theme-pokemon-sprite');
  if (spriteImg) {
    spriteImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${theme.sprite}.png`;
  }

  // Salva no localStorage para manter entre as páginas
  localStorage.setItem('portfolioTheme', type);
}

// Carrega o tema salvo ao iniciar a página
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('portfolioTheme');
  if (savedTheme) {
    changeTheme(savedTheme);
  } else {
    // Tema padrão inicial
    changeTheme('electric');
  }
});
