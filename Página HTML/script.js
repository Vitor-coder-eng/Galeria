const gallery = document.getElementById('gallery');

// Dados das imagens (adicione aqui)
const images = {
    inverno: [
        'https://raw.githubusercontent.com/Vitor-coder-eng/Galeria/main/P%C3%A1gina%20HTML/Galeria/Inverno1.png',
        'https://raw.githubusercontent.com/Vitor-coder-eng/Galeria/main/P%C3%A1gina%20HTML/Galeria/Inverno2.png',
        'https://raw.githubusercontent.com/Vitor-coder-eng/Galeria/main/P%C3%A1gina%20HTML/Galeria/Inverno3.png'
    ],
    outono: [
        'https://raw.githubusercontent.com/Vitor-coder-eng/Galeria/main/P%C3%A1gina%20HTML/Galeria/Outono1.png',
        'https://raw.githubusercontent.com/Vitor-coder-eng/Galeria/main/P%C3%A1gina%20HTML/Galeria/Outono2.png',
        'https://raw.githubusercontent.com/Vitor-coder-eng/Galeria/main/P%C3%A1gina%20HTML/Galeria/Outono3.png'
    ],
    primavera: [
        'https://raw.githubusercontent.com/Vitor-coder-eng/Galeria/main/P%C3%A1gina%20HTML/Galeria/Primavera1.png',
        'https://raw.githubusercontent.com/Vitor-coder-eng/Galeria/main/P%C3%A1gina%20HTML/Galeria/Primavera2.png',
        'https://raw.githubusercontent.com/Vitor-coder-eng/Galeria/main/P%C3%A1gina%20HTML/Galeria/Primavera3.png'
    ],
    verao: [
        'https://raw.githubusercontent.com/Vitor-coder-eng/Galeria/main/P%C3%A1gina%20HTML/Galeria/Verão1.png',
        'https://raw.githubusercontent.com/Vitor-coder-eng/Galeria/main/P%C3%A1gina%20HTML/Galeria/Verão2.png',
        'https://raw.githubusercontent.com/Vitor-coder-eng/Galeria/main/P%C3%A1gina%20HTML/Galeria/Verão3.png'
    ],
};

// Função para carregar as imagens da estação selecionada
function loadGallery(season) {
    gallery.innerHTML = ''; // Limpa a galeria
    images[season].forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = img; // Use os links do objeto `images`
        imgElement.alt = `${season} image`;
        gallery.appendChild(imgElement);
    });
}

// Adicionar eventos nos botões
document.querySelectorAll('button[data-season]').forEach(button => {
    button.addEventListener('click', () => {
        const season = button.getAttribute('data-season');
        loadGallery(season);
    });
});

// Carregar imagens do inverno ao iniciar
loadGallery('inverno');

