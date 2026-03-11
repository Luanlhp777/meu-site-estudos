// Seleciona o botão hamburguer
const botaoMenu = document.getElementById("menu-toggle");

// Seleciona o menu
const menu = document.getElementById("menu");

// Quando clicar no botão
botaoMenu.addEventListener("click", function () {

    // adiciona ou remove a classe "ativo"
    menu.classList.toggle("ativo");

});