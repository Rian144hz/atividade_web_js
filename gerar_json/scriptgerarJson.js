const btnAdd = document.getElementById('gerar_json');
const containerCards = document.querySelector('.container-card');


function carregarCardsDoJson() {
    
    fetch('dados.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Não foi possível carregar o arquivo JSON');
            }
            return response.json(); 
        })
        .then(dados => {
           
            containerCards.innerHTML = '';

            
            dados.forEach(item => {
                const novoCard = document.createElement('div');
                novoCard.classList.add('card');
                
                
                novoCard.setAttribute('data-id', item.id);

               
                novoCard.innerHTML = `
                    <img src="${item.imagem}" alt="${item.titulo}" class="card-img">
                    <h4>${item.titulo}</h4>
                    <p>${item.descricao}</p>
                    <small>ID: ${item.id}</small>
                `;

               
                containerCards.appendChild(novoCard);
            });
        })
        .catch(erro => {
            console.error('Erro na requisição:', erro);
            alert('Erro ao carregar o JSON. Verifique se o Live Server está ativo.');
        });
}


btnAdd.addEventListener('click', carregarCardsDoJson);