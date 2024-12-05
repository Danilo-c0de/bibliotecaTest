// Alterna a visibilidade do menu dropdown
function toggleMenu() {
    const dropdown = document.querySelector('.menu-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }
  
  // Fecha o menu se o usuário clicar fora dele
  document.addEventListener('click', (event) => {
    const menu = document.querySelector('.menu');
    const dropdown = document.querySelector('.menu-dropdown');
  
    if (!menu.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.style.display = 'none';
    }
  });
  