document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.playlist_card, .artist_card');
    
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.1)';
            card.style.transition = 'transform 0.3s ease';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
            card.style.transition = 'transform 0.3s ease';
            card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const btnSearch = document.querySelector('.btn_search');
    const headerSearch = document.querySelector('.header_search');
    const searchInput = document.getElementById('search-input');
    const cards = document.querySelectorAll('.playlist_card, .artist_card');

    // Exibir ou esconder a barra de pesquisa
    btnSearch.addEventListener('click', () => {
        headerSearch.classList.toggle('hidden');
    });

    // Função de pesquisa
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const cardText = card.querySelector('span').textContent.toLowerCase();
            
            // Verifica se o texto da pesquisa está contido no nome do card
            if (cardText.includes(query)) {
                card.style.display = 'block'; // Exibe o card que corresponde à pesquisa
            } else {
                card.style.display = 'none';  // Oculta os cards que não correspondem
            }
        });
    });
});

 // Pegar elementos do DOM
 const modalPlaylist = document.getElementById("loginModalPlaylist");
 const modalLibrary = document.getElementById("loginModalLibrary");
 const closeModalPlaylist = document.getElementById("closeModalPlaylist");
 const closeModalLibrary = document.getElementById("closeModalLibrary");

 // Função para abrir o modal de Playlist
 function showLoginModalPlaylist() {
     modalPlaylist.style.display = "block";
 }

 // Função para abrir o modal de Biblioteca
 function showLoginModalLibrary() {
     modalLibrary.style.display = "block";
 }

 // Fechar o modal de Playlist ao clicar no "X"
 closeModalPlaylist.onclick = function() {
     modalPlaylist.style.display = "none";
 }

 // Fechar o modal de Biblioteca ao clicar no "X"
 closeModalLibrary.onclick = function() {
     modalLibrary.style.display = "none";
 }

 // Fechar os modais ao clicar fora do conteúdo do modal
 window.onclick = function(event) {
     if (event.target == modalPlaylist) {
         modalPlaylist.style.display = "none";
     } else if (event.target == modalLibrary) {
         modalLibrary.style.display = "none";
     }
 }

 // Adiciona eventos de clique nos botões
 document.getElementById("libraryBtn").addEventListener("click", showLoginModalLibrary);
 document.getElementById("createPlaylistBtn").addEventListener("click", showLoginModalPlaylist);
 
    
   