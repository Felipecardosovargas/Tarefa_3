// Selecionar todos os links do menu
const menuLinks = document.querySelectorAll('.menu a');

// Adicionar evento de clique para cada link
menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Impedir o comportamento padrão do link

    // Obter o alvo do link
    const targetId = link.getAttribute('href').substring(1); // Remove o "#"
    const targetSection = document.getElementById(targetId);

    // Deslocamento do scroll para não cobrir o conteúdo
    const offset = document.querySelector('header').offsetHeight; // Altura do cabeçalho

    window.scrollTo({
      top: targetSection.offsetTop - offset, // Ajusta a posição considerando o cabeçalho
      behavior: 'smooth', // Scroll suave
    });

    // Destacar o link ativo (opcional)
    menuLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});

function toggleContent(button) {
  const additionalContent = button.parentElement.previousElementSibling;

  if (additionalContent.style.display === "block") {
    additionalContent.style.display = "none";
    button.textContent = "Leia mais";
  } else {
    additionalContent.style.display = "block";
    button.textContent = "Leia menos";
  }
}

function toggleContent(button) {
  const additionalContent = button.parentElement.previousElementSibling;

  // Alterna a visibilidade do conteúdo
  if (additionalContent.classList.contains('show')) {
    additionalContent.classList.remove('show');
    button.textContent = "Leia mais";
  } else {
    additionalContent.classList.add('show');
    button.textContent = "Leia menos";
  }
}